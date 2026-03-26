// ==========================================
// 1. إعدادات Firebase (مع حماية ضد الأخطاء)
// ==========================================
const firebaseConfig = {
    apiKey: "AIzaSyApCrVYHJHiPIUCTHW6ChYyXOmRpUCnYwM",
    authDomain: "azkar-app-9219d.firebaseapp.com",
    projectId: "azkar-app-9219d",
    storageBucket: "azkar-app-9219d.firebasestorage.app",
    messagingSenderId: "208264212055",
    appId: "1:208264212055:web:6486a7fd5f37f6ba057d12",
    measurementId: "G-7NBS95TZ1Q"
};

let dbFirestore = null;
let auth = null;

try {
    // التأكد من تحميل مكتبة Firebase أولاً (موجودة في index.html)
    if (typeof firebase !== 'undefined') {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        dbFirestore = firebase.firestore();
        auth = firebase.auth();
        auth.signInAnonymously().catch((e) => console.log("تنبيه: لم يتم تسجيل الدخول في فايربيز", e));
    } else {
        console.warn("Firebase library not loaded. Ensure script tags are in index.html.");
    }
} catch (error) {
    console.error("خطأ في تهيئة Firebase, سيتم الاعتماد على التخزين المحلي فقط:", error);
}

// ==========================================
// 2. أدوات مساعدة (Helpers)
// ==========================================
function toArabicDigits(n) {
    return String(n).replace(/\d/g, (d) => '٠١٢٣٤٥٦٧٨٩'[Number(d)]);
}

function parseDisplayInt(str) {
    let s = String(str);
    if (/[٠-٩]/.test(s)) s = s.replace(/[٠١٢٣٤٥٦٧٨٩]/g, (ch) => '0123456789'['٠١٢٣٤٥٦٧٨٩'.indexOf(ch)]);
    const v = parseInt(s, 10);
    return Number.isFinite(v) ? v : 0;
}

function escapeHtml(text) {
    if(!text) return "";
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

let toastTimer;
window.showToast = (msg) => {
    const t = document.getElementById('toast-msg');
    if (!t) return;
    clearTimeout(toastTimer);
    t.textContent = msg;
    t.style.bottom = '20px';
    t.style.opacity = '1';
    toastTimer = setTimeout(() => { 
        t.style.bottom = '-100px'; 
        t.style.opacity = '0';
    }, 3200);
};

function updateOfflineBanner() {
    const b = document.getElementById('offline-banner');
    if (!b) return;
    if (navigator.onLine) {
        b.classList.add('hidden');
    } else {
        b.classList.remove('hidden');
    }
}
window.addEventListener('online', () => { updateOfflineBanner(); showToast('تم استعادة الاتصال بالإنترنت'); });
window.addEventListener('offline', () => { updateOfflineBanner(); showToast('أنت الآن في وضع عدم الاتصال (أوفلاين)'); });

// ==========================================
// 3. قاعدة البيانات المحلية (IndexedDB)
// ==========================================
const DB_NAME = 'EncyclopediaDB';
const STORE_NAME = 'appData';

function initLocalDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, 2); // إصدار 2
        request.onerror = (e) => reject(e.target.error);
        request.onsuccess = (e) => resolve(e.target.result);
        request.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME);
            }
        };
    });
}

async function saveToLocalDB(key, data) {
    try {
        const db = await initLocalDB();
        return new Promise((resolve, reject) => {
            const tx = db.transaction(STORE_NAME, 'readwrite');
            const store = tx.objectStore(STORE_NAME);
            const request = store.put(data, key); // وضع البيانات
            request.onsuccess = () => resolve(true);
            request.onerror = () => reject(false);
        });
    } catch (e) {
        console.error("Error saving to Local DB:", e);
        return false;
    }
}

async function getFromLocalDB(key) {
    try {
        const db = await initLocalDB();
        return new Promise((resolve, reject) => {
            const tx = db.transaction(STORE_NAME, 'readonly');
            const store = tx.objectStore(STORE_NAME);
            const request = store.get(key);
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(null);
        });
    } catch (e) { 
        console.error("Error getting from Local DB:", e);
        return null; 
    }
}

// ==========================================
// 4. المزامنة والتحميل (Quran & Hadith)
// ==========================================
let isQuranLoaded = false;
let isHadithLoaded = false;
let quranOfflineData = {};
let hadithOfflineData = { bukhari: [], muslim: [], nawawi: [] };

function updateSyncProgress(percent, text) {
    const pBar = document.getElementById('sync-progress-bar');
    const sText = document.getElementById('sync-status-text');
    if (pBar) pBar.style.width = `${percent}%`;
    if (sText) sText.textContent = text;
}

window.syncDatabaseManual = async () => {
    if (!navigator.onLine) {
        showToast("تحتاج للاتصال بالإنترنت لتحديث قواعد البيانات");
        return;
    }
    const syncScreen = document.getElementById('sync-db-screen');
    if (syncScreen) {
        syncScreen.classList.remove('hidden');
        syncScreen.classList.add('active'); // إظهار الشاشة
    }
    
    try {
        await syncQuran();
        await syncHadith();
        await syncUserDataToFirebase();
        showToast("✅ تم تحميل المصحف والأحاديث بنجاح. التطبيق يعمل أوفلاين الآن!");
    } catch (error) {
        console.error("Sync Error:", error);
        showToast("حدث خطأ أثناء المزامنة. يرجى المحاولة لاحقاً.");
    } finally {
        if (syncScreen) {
            syncScreen.classList.add('hidden');
            syncScreen.classList.remove('active'); // إخفاء الشاشة
        }
        // تحديث الفهرس بعد التحميل
        if(window.location.hash === '#quranIndex') loadQuranIndex();
    }
};

// تحميل المصحف بطلب واحد فقط (One Request)
async function syncQuran() {
    updateSyncProgress(10, "جاري تحميل المصحف الشريف بالكامل...");
    try {
        // نستخدم endpoint يرجع المصحف كاملاً مرة واحدة
        const response = await fetch('https://api.alquran.cloud/v1/quran/quran-uthmani');
        if (!response.ok) throw new Error("Failed to fetch Quran from API");
        const data = await response.json();
        const quranData = {};
        
        if (data && data.data && data.data.surahs) {
            data.data.surahs.forEach(surah => {
                quranData[surah.number] = {
                    name: surah.name,
                    englishName: surah.englishName,
                    ayahs: surah.ayahs
                };
            });
            
            // حفظ محلي في IndexedDB
            await saveToLocalDB('fullQuranData', quranData);
            quranOfflineData = quranData;
            isQuranLoaded = true;
            updateSyncProgress(40, "تم تخزين المصحف محلياً بنجاح.");

            // محاولة الحفظ في فايربيز (لو فشل مش هيوقف التطبيق)
            if (dbFirestore) {
                updateSyncProgress(50, "جاري المزامنة مع السحابة (Firebase)...");
                try {
                    // تقسيم البيانات لتقليل حجم الوثيقة (Firestore له حد 1MB للـ document)
                    // لحل مشكلة المساحة، ممكن نخزن الميتاداتا بس او سور معينة، لكن مؤقتا هنتخطاها لو الحجم كبير
                    // await dbFirestore.collection('core_data').doc('quran').set({ version: "1.0", updated: new Date() });
                } catch (fbError) {
                    console.log("تنبيه: فشل الرفع لفايربيز بسبب الصلاحيات أو الحجم، ولكن تم الحفظ محلياً بنجاح.");
                }
            }
        }
    } catch (e) {
        console.error("خطأ في تحميل المصحف:", e);
        throw e; // إعادة رمي الخطأ ليتم التعامل معه في الدالة الرئيسية
    }
}

// تحميل الأحاديث بذكاء
async function syncHadith() {
    updateSyncProgress(60, "جاري تحميل مكتبة الأحاديث...");
    try {
        let hData = { bukhari: [], muslim: [], nawawi: [] };

        // جلب النووية (صغيرة وتتحمل كلها)
        const nawawiRes = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ara-nawawi.json');
        if(nawawiRes.ok) {
            const nawawiData = await nawawiRes.json();
            hData.nawawi = nawawiData.hadiths || [];
        }

        updateSyncProgress(75, "جاري تحميل صحيح البخاري ومسلم...");
        
        // جلب البخاري (ناخد أول 1000 عشان الميموري)
        const bukhariRes = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ara-bukhari.json');
        if(bukhariRes.ok) {
            const bukhariData = await bukhariRes.json();
            hData.bukhari = (bukhariData.hadiths || []).slice(0, 1000);
        }

        // جلب مسلم
        const muslimRes = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ara-muslim.json');
        if(muslimRes.ok) {
            const muslimData = await muslimRes.json();
            hData.muslim = (muslimData.hadiths || []).slice(0, 1000);
        }

        // حفظ محلي
        await saveToLocalDB('fullHadithData', hData);
        hadithOfflineData = hData;
        isHadithLoaded = true;
        updateSyncProgress(90, "تم تخزين الأحاديث محلياً.");

    } catch (e) {
        console.error("خطأ في تحميل الأحاديث:", e);
        throw e;
    }
}

// استرجاع البيانات عند فتح التطبيق (يتم استدعاؤها في DOMContentLoaded)
async function checkAndLoadLocalDBs() {
    try {
        const qData = await getFromLocalDB('fullQuranData');
        if (qData && Object.keys(qData).length > 0) { 
            quranOfflineData = qData; 
            isQuranLoaded = true; 
            console.log("تم استرجاع القرآن من IndexedDB");
        } else {
             console.log("لم يتم العثور على قرآن محلياً. يجب المزامنة.");
        }
        
        const hData = await getFromLocalDB('fullHadithData');
        if (hData && (hData.bukhari.length > 0 || hData.nawawi.length > 0)) { 
            hadithOfflineData = hData; 
            isHadithLoaded = true;
            console.log("تم استرجاع الأحاديث من IndexedDB"); 
        }
    } catch(e) {
        console.error("Error reading from IndexedDB on startup", e);
    }
}

// ==========================================
// 5. الأحاديث النبوية (UI Logic)
// ==========================================
let currentHadithCollection = 'bukhari';
let currentHadithPage = 1;
const HADITHS_PER_PAGE = 15;

window.showHadithCollection = function(collection) {
    document.querySelectorAll('.hadith-tab').forEach(t => t.classList.remove('active'));
    // البحث عن التاب المضغوط وتفعيله (معالجة لـ event)
    const btn = document.querySelector(`.hadith-tab[onclick*="${collection}"]`);
    if(btn) btn.classList.add('active');
    
    currentHadithCollection = collection;
    currentHadithPage = 1;
    renderHadiths();
};

window.nextHadithPage = () => { currentHadithPage++; renderHadiths(); };
window.prevHadithPage = () => { if (currentHadithPage > 1) { currentHadithPage--; renderHadiths(); } };

function renderHadiths() {
    const content = document.getElementById('hadith-content');
    const info = document.getElementById('hadith-page-info');
    if (!content) return;
    
    if (!isHadithLoaded) {
        content.innerHTML = '<div style="text-align:center; padding: 20px;"><p style="font-size: 1.2rem; margin-bottom:15px;">المكتبة غير محملة.</p><p style="opacity:0.8; margin-bottom:20px;">اضغط على الزر أدناه لتحميل البيانات للعمل بدون إنترنت.</p><button class="btn" style="width: auto; padding: 10px 20px; margin: 0 auto; display: block;" onclick="syncDatabaseManual()">تحديث قواعد البيانات الآن</button></div>';
        return;
    }
    
    let dbCollection = [];
    if (currentHadithCollection === 'all') {
         dbCollection = [...(hadithOfflineData.bukhari || []), ...(hadithOfflineData.muslim || []), ...(hadithOfflineData.nawawi || [])];
    } else {
         dbCollection = hadithOfflineData[currentHadithCollection] || [];
    }

    const startIdx = (currentHadithPage - 1) * HADITHS_PER_PAGE;
    const endIdx = startIdx + HADITHS_PER_PAGE;
    const paginated = dbCollection.slice(startIdx, endIdx);
    
    if (info) info.textContent = `صفحة ${toArabicDigits(currentHadithPage)}`;
    content.innerHTML = '';
    
    if (paginated.length === 0) {
        content.innerHTML = '<p class="hadith-text" style="text-align:center;">لا توجد أحاديث هنا أو وصلت لآخر صفحة.</p>';
        return;
    }
    
    paginated.forEach(h => {
        const text = h.text || h.arab || "نص غير متوفر";
        const grade = h.grade ? ` | الدرجة: ${h.grade}` : '';
        let sourceName = 'حديث';
        if (currentHadithCollection === 'bukhari') sourceName = 'صحيح البخاري';
        else if (currentHadithCollection === 'muslim') sourceName = 'صحيح مسلم';
        else if (currentHadithCollection === 'nawawi') sourceName = 'الأربعون النووية';
        else sourceName = 'متعدد';

        content.innerHTML += `
            <div class="hadith-item">
                <p class="hadith-text">${escapeHtml(text)}</p>
                <p class="hadith-source">المصدر: ${sourceName} ${grade}</p>
            </div>
        `;
    });
}

// ==========================================
// 6. المصحف الشريف والفهرس
// ==========================================
const surahListData = [
    { number: 1, name: "الفاتحة", englishName: "Al-Fatiha", type: "makkiah", ayahs: 7 }, 
    { number: 2, name: "البقرة", englishName: "Al-Baqarah", type: "madaniyah", ayahs: 286 }, 
    { number: 3, name: "آل عمران", englishName: "Aal-E-Imran", type: "madaniyah", ayahs: 200 }, 
    { number: 4, name: "النساء", englishName: "An-Nisa", type: "madaniyah", ayahs: 176 }, 
    { number: 5, name: "المائدة", englishName: "Al-Ma'idah", type: "madaniyah", ayahs: 120 }, 
    { number: 6, name: "الأنعام", englishName: "Al-An'am", type: "makkiah", ayahs: 165 }, 
    { number: 7, name: "الأعراف", englishName: "Al-A'raf", type: "makkiah", ayahs: 206 }, 
    { number: 8, name: "الأنفال", englishName: "Al-Anfal", type: "madaniyah", ayahs: 75 }, 
    { number: 9, name: "التوبة", englishName: "At-Tawbah", type: "madaniyah", ayahs: 129 }, 
    { number: 10, name: "يونس", englishName: "Yunus", type: "makkiah", ayahs: 109 }, 
    { number: 11, name: "هود", englishName: "Hud", type: "makkiah", ayahs: 123 }, 
    { number: 12, name: "يوسف", englishName: "Yusuf", type: "makkiah", ayahs: 111 }, 
    { number: 13, name: "الرعد", englishName: "Ar-Ra'd", type: "madaniyah", ayahs: 43 }, 
    { number: 14, name: "إبراهيم", englishName: "Ibrahim", type: "makkiah", ayahs: 52 }, 
    { number: 15, name: "الحجر", englishName: "Al-Hijr", type: "makkiah", ayahs: 99 }, 
    { number: 16, name: "النحل", englishName: "An-Nahl", type: "makkiah", ayahs: 128 }, 
    { number: 17, name: "الإسراء", englishName: "Al-Isra", type: "makkiah", ayahs: 111 }, 
    { number: 18, name: "الكهف", englishName: "Al-Kahf", type: "makkiah", ayahs: 110 }, 
    { number: 19, name: "مريم", englishName: "Maryam", type: "makkiah", ayahs: 98 }, 
    { number: 20, name: "طه", englishName: "Ta-Ha", type: "makkiah", ayahs: 135 }, 
    { number: 21, name: "الأنبياء", englishName: "Al-Anbiya", type: "makkiah", ayahs: 112 }, 
    { number: 22, name: "الحج", englishName: "Al-Hajj", type: "madaniyah", ayahs: 78 }, 
    { number: 23, name: "المؤمنون", englishName: "Al-Mu'minun", type: "makkiah", ayahs: 118 }, 
    { number: 24, name: "النور", englishName: "An-Nur", type: "madaniyah", ayahs: 64 }, 
    { number: 25, name: "الفرقان", englishName: "Al-Furqan", type: "makkiah", ayahs: 77 }, 
    { number: 26, name: "الشعراء", englishName: "Ash-Shu'ara", type: "makkiah", ayahs: 227 }, 
    { number: 27, name: "النمل", englishName: "An-Naml", type: "makkiah", ayahs: 93 }, 
    { number: 28, name: "القصص", englishName: "Al-Qasas", type: "makkiah", ayahs: 88 }, 
    { number: 29, name: "العنكبوت", englishName: "Al-Ankabut", type: "makkiah", ayahs: 69 }, 
    { number: 30, name: "الروم", englishName: "Ar-Rum", type: "makkiah", ayahs: 60 }, 
    { number: 31, name: "لقمان", englishName: "Luqman", type: "makkiah", ayahs: 34 }, 
    { number: 32, name: "السجدة", englishName: "As-Sajda", type: "makkiah", ayahs: 30 }, 
    { number: 33, name: "الأحزاب", englishName: "Al-Ahzab", type: "madaniyah", ayahs: 73 }, 
    { number: 34, name: "سبأ", englishName: "Saba", type: "makkiah", ayahs: 54 }, 
    { number: 35, name: "فاطر", englishName: "Fatir", type: "makkiah", ayahs: 45 }, 
    { number: 36, name: "يس", englishName: "Ya-Sin", type: "makkiah", ayahs: 83 }, 
    { number: 37, name: "الصافات", englishName: "As-Saffat", type: "makkiah", ayahs: 182 }, 
    { number: 38, name: "ص", englishName: "Sad", type: "makkiah", ayahs: 88 }, 
    { number: 39, name: "الزمر", englishName: "Az-Zumar", type: "makkiah", ayahs: 75 }, 
    { number: 40, name: "غافر", englishName: "Ghafir", type: "makkiah", ayahs: 85 }, 
    { number: 41, name: "فصلت", englishName: "Fussilat", type: "makkiah", ayahs: 54 }, 
    { number: 42, name: "الشورى", englishName: "Ash-Shura", type: "makkiah", ayahs: 53 }, 
    { number: 43, name: "الزخرف", englishName: "Az-Zukhruf", type: "makkiah", ayahs: 89 }, 
    { number: 44, name: "الدخان", englishName: "Ad-Dukhan", type: "makkiah", ayahs: 59 }, 
    { number: 45, name: "الجاثية", englishName: "Al-Jathiya", type: "makkiah", ayahs: 37 }, 
    { number: 46, name: "الأحقاف", englishName: "Al-Ahqaf", type: "makkiah", ayahs: 35 }, 
    { number: 47, name: "محمد", englishName: "Muhammad", type: "madaniyah", ayahs: 38 }, 
    { number: 48, name: "الفتح", englishName: "Al-Fath", type: "madaniyah", ayahs: 29 }, 
    { number: 49, name: "الحجرات", englishName: "Al-Hujurat", type: "madaniyah", ayahs: 18 }, 
    { number: 50, name: "ق", englishName: "Qaf", type: "makkiah", ayahs: 45 }, 
    { number: 51, name: "الذاريات", englishName: "Adh-Dhariyat", type: "makkiah", ayahs: 60 }, 
    { number: 52, name: "الطور", englishName: "At-Tur", type: "makkiah", ayahs: 49 }, 
    { number: 53, name: "النجم", englishName: "An-Najm", type: "makkiah", ayahs: 62 }, 
    { number: 54, name: "القمر", englishName: "Al-Qamar", type: "makkiah", ayahs: 55 }, 
    { number: 55, name: "الرحمن", englishName: "Ar-Rahman", type: "madaniyah", ayahs: 78 }, 
    { number: 56, name: "الواقعة", englishName: "Al-Waqi'a", type: "makkiah", ayahs: 96 }, 
    { number: 57, name: "الحديد", englishName: "Al-Hadid", type: "madaniyah", ayahs: 29 }, 
    { number: 58, name: "المجادلة", englishName: "Al-Mujadila", type: "madaniyah", ayahs: 22 }, 
    { number: 59, name: "الحشر", englishName: "Al-Hashr", type: "madaniyah", ayahs: 24 }, 
    { number: 60, name: "الممتحنة", englishName: "Al-Mumtahanah", type: "madaniyah", ayahs: 13 }, 
    { number: 61, name: "الصف", englishName: "As-Saff", type: "madaniyah", ayahs: 14 }, 
    { number: 62, name: "الجمعة", englishName: "Al-Jumu'a", type: "madaniyah", ayahs: 11 }, 
    { number: 63, name: "المنافقون", englishName: "Al-Munafiqun", type: "madaniyah", ayahs: 11 }, 
    { number: 64, name: "التغابن", englishName: "At-Taghabun", type: "madaniyah", ayahs: 18 }, 
    { number: 65, name: "الطلاق", englishName: "At-Talaq", type: "madaniyah", ayahs: 12 }, 
    { number: 66, name: "التحريم", englishName: "At-Tahrim", type: "madaniyah", ayahs: 12 }, 
    { number: 67, name: "الملك", englishName: "Al-Mulk", type: "makkiah", ayahs: 30 }, 
    { number: 68, name: "القلم", englishName: "Al-Qalam", type: "makkiah", ayahs: 52 }, 
    { number: 69, name: "الحاقة", englishName: "Al-Haqqah", type: "makkiah", ayahs: 52 }, 
    { number: 70, name: "المعارج", englishName: "Al-Ma'arij", type: "makkiah", ayahs: 44 }, 
    { number: 71, name: "نوح", englishName: "Nuh", type: "makkiah", ayahs: 28 }, 
    { number: 72, name: "الجن", englishName: "Al-Jinn", type: "makkiah", ayahs: 28 }, 
    { number: 73, name: "المزمل", englishName: "Al-Muzzammil", type: "makkiah", ayahs: 20 }, 
    { number: 74, name: "المدثر", englishName: "Al-Muddaththir", type: "makkiah", ayahs: 56 }, 
    { number: 75, name: "القيامة", englishName: "Al-Qiyamah", type: "makkiah", ayahs: 40 }, 
    { number: 76, name: "الإنسان", englishName: "Al-Insan", type: "madaniyah", ayahs: 31 }, 
    { number: 77, name: "المرسلات", englishName: "Al-Mursalat", type: "makkiah", ayahs: 50 }, 
    { number: 78, name: "النبأ", englishName: "An-Naba", type: "makkiah", ayahs: 40 }, 
    { number: 79, name: "النازعات", englishName: "An-Nazi'at", type: "makkiah", ayahs: 46 }, 
    { number: 80, name: "عبس", englishName: "Abasa", type: "makkiah", ayahs: 42 }, 
    { number: 81, name: "التكوير", englishName: "At-Takwir", type: "makkiah", ayahs: 29 }, 
    { number: 82, name: "الإنفطار", englishName: "Al-Infitar", type: "makkiah", ayahs: 19 }, 
    { number: 83, name: "المطففين", englishName: "Al-Mutaffifin", type: "makkiah", ayahs: 36 }, 
    { number: 84, name: "الإنشقاق", englishName: "Al-Inshiqaq", type: "makkiah", ayahs: 25 }, 
    { number: 85, name: "البروج", englishName: "Al-Buruj", type: "makkiah", ayahs: 22 }, 
    { number: 86, name: "الطارق", englishName: "At-Tariq", type: "makkiah", ayahs: 17 }, 
    { number: 87, name: "الأعلى", englishName: "Al-A'la", type: "makkiah", ayahs: 19 }, 
    { number: 88, name: "الغاشية", englishName: "Al-Ghashiyah", type: "makkiah", ayahs: 26 }, 
    { number: 89, name: "الفجر", englishName: "Al-Fajr", type: "makkiah", ayahs: 30 }, 
    { number: 90, name: "البلد", englishName: "Al-Balad", type: "makkiah", ayahs: 20 }, 
    { number: 91, name: "الشمس", englishName: "Ash-Shams", type: "makkiah", ayahs: 15 }, 
    { number: 92, name: "الليل", englishName: "Al-Layl", type: "makkiah", ayahs: 21 }, 
    { number: 93, name: "الضحى", englishName: "Ad-Duha", type: "makkiah", ayahs: 11 }, 
    { number: 94, name: "الشرح", englishName: "Ash-Sharh", type: "makkiah", ayahs: 8 }, 
    { number: 95, name: "التين", englishName: "At-Tin", type: "makkiah", ayahs: 8 }, 
    { number: 96, name: "العلق", englishName: "Al-Alaq", type: "makkiah", ayahs: 19 }, 
    { number: 97, name: "القدر", englishName: "Al-Qadr", type: "makkiah", ayahs: 5 }, 
    { number: 98, name: "البينة", englishName: "Al-Bayyinah", type: "madaniyah", ayahs: 8 }, 
    { number: 99, name: "الزلزلة", englishName: "Az-Zilzal", type: "madaniyah", ayahs: 8 }, 
    { number: 100, name: "العاديات", englishName: "Al-Adiyat", type: "makkiah", ayahs: 11 }, 
    { number: 101, name: "القارعة", englishName: "Al-Qari'a", type: "makkiah", ayahs: 11 }, 
    { number: 102, name: "التكاثر", englishName: "At-Takathur", type: "makkiah", ayahs: 8 }, 
    { number: 103, name: "العصر", englishName: "Al-Asr", type: "makkiah", ayahs: 3 }, 
    { number: 104, name: "الهمزة", englishName: "Al-Humazah", type: "makkiah", ayahs: 9 }, 
    { number: 105, name: "الفيل", englishName: "Al-Fil", type: "makkiah", ayahs: 5 }, 
    { number: 106, name: "قريش", englishName: "Quraysh", type: "makkiah", ayahs: 4 }, 
    { number: 107, name: "الماعون", englishName: "Al-Ma'un", type: "makkiah", ayahs: 7 }, 
    { number: 108, name: "الكوثر", englishName: "Al-Kawthar", type: "makkiah", ayahs: 3 }, 
    { number: 109, name: "الكافرون", englishName: "Al-Kafirun", type: "makkiah", ayahs: 6 }, 
    { number: 110, name: "النصر", englishName: "An-Nasr", type: "madaniyah", ayahs: 3 }, 
    { number: 111, name: "المسد", englishName: "Al-Masad", type: "makkiah", ayahs: 5 }, 
    { number: 112, name: "الإخلاص", englishName: "Al-Ikhlas", type: "makkiah", ayahs: 4 }, 
    { number: 113, name: "الفلق", englishName: "Al-Falaq", type: "makkiah", ayahs: 5 }, 
    { number: 114, name: "الناس", englishName: "An-Nas", type: "makkiah", ayahs: 6 }
];

let quranBookmarks = JSON.parse(localStorage.getItem('quranBookmarks') || '[]');
let currentSurahNumber = 1;
let currentSurahDisplayName = '';
let currentAyahForAction = 0;
let ayahTextCache = {};

window.loadQuranIndex = function() {
    const list = document.getElementById('surah-list');
    if (!list) return;
    list.innerHTML = '';
    surahListData.forEach(s => {
        list.innerHTML += `
            <div class="golden-surah-item" data-type="${s.type}" onclick="navigateTo('quranReader'); loadQuranPages(${s.number});">
                <div class="surah-number-box">${toArabicDigits(s.number)}</div>
                <div class="surah-info-box">
                    <h3 class="surah-name-text">${s.name}</h3>
                    <div class="surah-meta">
                        <span class="surah-type-badge">${s.type === 'makkiah' ? 'مكية' : 'مدنية'}</span>
                        <span>${s.ayahs} آية</span>
                    </div>
                </div>
            </div>`;
    });
};

window.loadQuranPages = async (surahNumber = 1) => {
    if (!isQuranLoaded) {
        showToast("المصحف غير محمل. يرجى الضغط على 'تحديث قواعد البيانات' من الرئيسية.");
        return;
    }
    
    currentSurahNumber = surahNumber;
    const surahData = quranOfflineData[surahNumber];
    if (!surahData) { showToast('بيانات السورة غير متوفرة'); return; }
    
    currentSurahDisplayName = surahData.name;
    const sNameEl = document.getElementById('current-surah-name');
    const pNameEl = document.getElementById('page-surah-name');
    const bismillahEl = document.getElementById('bismillah-container');
    const pageNumEl = document.getElementById('page-number-display');
    const juzNumEl = document.getElementById('page-juz-number');
    
    if(sNameEl) sNameEl.textContent = currentSurahDisplayName;
    if(pNameEl) pNameEl.textContent = `سورة ${currentSurahDisplayName}`;
    // يمكن هنا إضافة منطق لتحديد الجزء والصفحة الحقيقية
    if(pageNumEl) pageNumEl.textContent = `سورة ${toArabicDigits(surahNumber)}`;
    if(juzNumEl) juzNumEl.textContent = `المصحف الذهبي`;
    
    if (surahNumber === 1 || surahNumber === 9) {
        if(bismillahEl) bismillahEl.style.display = 'none';
    } else {
        if(bismillahEl) bismillahEl.style.display = 'block';
    }
    
    let html = '';
    ayahTextCache = {};
    surahData.ayahs.forEach((ayah) => {
        let text = ayah.text;
        if (surahNumber !== 1 && surahNumber !== 9 && ayah.numberInSurah === 1) {
            text = text.replace(/^بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ /, '');
        }
        ayahTextCache[ayah.numberInSurah] = text;
        const isMarked = quranBookmarks.some((b) => b.surah === surahNumber && b.ayah === ayah.numberInSurah);
        const markClass = isMarked ? "bookmarked-ayah" : "";
        html += `<span class="ayah-verse ${markClass}" id="ayah-${ayah.numberInSurah}" onclick="handleAyahClick(${surahNumber}, ${ayah.numberInSurah})">${escapeHtml(text)} <span class="ayah-number-circle">${toArabicDigits(ayah.numberInSurah)}</span></span> `;
    });
    
    const contentEl = document.getElementById('quran-text-content');
    if(contentEl) {
        contentEl.innerHTML = html;
        localStorage.setItem('quranLastRead', JSON.stringify({ surah: surahNumber, name: currentSurahDisplayName, ayah: 1 }));
        syncUserDataToFirebase();
    }
};

window.handleAyahClick = function(surahNum, ayahNum) {
    currentAyahForAction = ayahNum;
    const sheet = document.getElementById('ayah-action-sheet');
    const backdrop = document.getElementById('ayah-sheet-backdrop');
    const title = document.getElementById('ayah-sheet-title');
    
    if (title) title.textContent = `آية ${toArabicDigits(ayahNum)} من سورة ${currentSurahDisplayName}`;
    
    if (sheet && backdrop) {
        sheet.classList.remove('hidden');
        backdrop.classList.remove('hidden');
        setTimeout(() => {
            sheet.classList.add('sheet-open');
            backdrop.classList.add('sheet-open');
        }, 50);
    }
    
    document.getElementById('ayah-tafsir-panel')?.classList.add('hidden');
    document.getElementById('ayah-sheet-actions')?.classList.remove('hidden');
};

window.closeAyahActionSheet = function() {
    const sheet = document.getElementById('ayah-action-sheet');
    const backdrop = document.getElementById('ayah-sheet-backdrop');
    const audio = document.getElementById('ayah-audio');
    if (audio) { audio.pause(); audio.currentTime = 0; }
    
    if (sheet && backdrop) {
        sheet.classList.remove('sheet-open');
        backdrop.classList.remove('sheet-open');
        setTimeout(() => {
            sheet.classList.add('hidden');
            backdrop.classList.add('hidden');
        }, 300);
    }
};

window.bookmarkCurrent = function() {
    const sNum = currentSurahNumber;
    const aNum = currentAyahForAction;
    if(aNum === 0) return;
    
    const index = quranBookmarks.findIndex((b) => b.surah === sNum && b.ayah === aNum);
    if (index > -1) {
        quranBookmarks.splice(index, 1);
        document.getElementById(`ayah-${aNum}`)?.classList.remove('bookmarked-ayah');
        showToast("❌ تم إزالة العلامة المرجعية");
    } else {
        quranBookmarks.push({ surah: sNum, ayah: aNum, surahName: currentSurahDisplayName });
        document.getElementById(`ayah-${aNum}`)?.classList.add('bookmarked-ayah');
        showToast("🔖 تم حفظ الآية بنجاح");
    }
    localStorage.setItem('quranBookmarks', JSON.stringify(quranBookmarks));
    syncUserDataToFirebase();
    closeAyahActionSheet();
};

window.showTafsir = async function() {
    const panel = document.getElementById('ayah-tafsir-panel');
    const actions = document.getElementById('ayah-sheet-actions');
    const textEl = document.getElementById('ayah-tafsir-text');
    if (!panel || !actions || !textEl) return;
    
    actions.classList.add('hidden');
    panel.classList.remove('hidden');
    textEl.textContent = 'جاري تحميل التفسير...';
    
    try {
        const res = await fetch(`https://api.alquran.cloud/v1/ayah/${currentSurahNumber}:${currentAyahForAction}/ar.muyassar`);
        const data = await res.json();
        if (data.data && data.data.text) textEl.textContent = data.data.text;
        else textEl.textContent = 'التفسير غير متوفر.';
    } catch (e) {
        textEl.textContent = 'تعذر الاتصال بالإنترنت لجلب التفسير.';
    }
};

window.playCurrentAudio = function() {
    const audio = document.getElementById('ayah-audio');
    if (!audio) return;
    // استخدام مقرئ العفاسي كافتراضي للسهولة هنا (يمكن ربطه بالإعدادات)
    const s = String(currentSurahNumber).padStart(3, '0');
    const a = String(currentAyahForAction).padStart(3, '0');
    audio.src = `https://everyayah.com/data/Alafasy_128kbps/${s}${a}.mp3`;
    audio.play().then(() => showToast("▶️ جاري تلاوة الآية...")).catch(() => showToast("تعذر تشغيل الصوت"));
};

window.previousPage = () => { if (currentSurahNumber > 1) loadQuranPages(currentSurahNumber - 1); };
window.nextPage = () => { if (currentSurahNumber < 114) loadQuranPages(currentSurahNumber + 1); };

window.showQuranMenu = function() {
    const menu = document.getElementById('quran-menu-modal');
    if (menu) menu.classList.toggle('hidden');
};

window.openQuranSearch = function() {
    const modal = document.getElementById('quran-search-modal');
    if (modal) { modal.classList.remove('hidden'); document.getElementById('quran-search-input').focus(); }
};
window.closeQuranSearch = function() {
    const modal = document.getElementById('quran-search-modal');
    if (modal) modal.classList.add('hidden');
};

window.searchInQuran = function() {
    const term = document.getElementById('quran-search-input').value.trim();
    const resDiv = document.getElementById('search-results');
    if (!term || !isQuranLoaded) return;
    
    let html = '';
    for (let sNum = 1; sNum <= 114; sNum++) {
        const sData = quranOfflineData[sNum];
        if (sData && sData.ayahs) {
            sData.ayahs.forEach(ayah => {
                if (ayah.text.includes(term)) {
                    html += `<div class="search-result-item" onclick="closeQuranSearch(); navigateTo('quranReader'); loadQuranPages(${sNum}); setTimeout(()=>document.getElementById('ayah-${ayah.numberInSurah}').scrollIntoView(), 500);">
                        <div class="ayah-text">${escapeHtml(ayah.text)}</div>
                        <div style="font-size:0.8rem; opacity:0.8;">سورة ${sData.name} - آية ${ayah.numberInSurah}</div>
                    </div>`;
                }
            });
        }
    }
    resDiv.innerHTML = html || '<p style="text-align:center;">لا توجد نتائج</p>';
};

window.filterSurahs = function() {
    const term = document.getElementById('surah-search').value.toLowerCase();
    document.querySelectorAll('.golden-surah-item').forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(term) ? 'flex' : 'none';
    });
};
window.clearSearch = function() {
    const input = document.getElementById('surah-search');
    if(input) input.value = '';
    filterSurahs();
};

window.showAllSurahs = function() { 
    document.querySelectorAll('.filter-chip').forEach(btn => btn.classList.remove('active'));
    if(event && event.target) event.target.classList.add('active');
    document.querySelectorAll('.golden-surah-item').forEach(i => i.style.display = 'flex'); 
};
window.showMakkiah = function() {
    document.querySelectorAll('.filter-chip').forEach(btn => btn.classList.remove('active'));
    if(event && event.target) event.target.classList.add('active');
    document.querySelectorAll('.golden-surah-item').forEach(i => {
        i.style.display = i.getAttribute('data-type') === 'makkiah' ? 'flex' : 'none';
    });
};
window.showMadaniyah = function() {
    document.querySelectorAll('.filter-chip').forEach(btn => btn.classList.remove('active'));
    if(event && event.target) event.target.classList.add('active');
    document.querySelectorAll('.golden-surah-item').forEach(i => {
        i.style.display = i.getAttribute('data-type') === 'madaniyah' ? 'flex' : 'none';
    });
};

window.resumeReading = function() {
    const progress = JSON.parse(localStorage.getItem('quranLastRead') || '{}');
    if (progress.surah) {
        navigateTo('quranReader');
        loadQuranPages(progress.surah);
        if(progress.ayah) {
             setTimeout(() => {
                const el = document.getElementById(`ayah-${progress.ayah}`);
                if(el) { el.scrollIntoView(); el.classList.add('ayah-highlight'); setTimeout(()=>el.classList.remove('ayah-highlight'), 2000);}
             }, 500);
        }
    } else {
        showToast("لم يتم حفظ تقدم القراءة بعد.");
    }
};

window.changeFontSize = (step) => {
    const content = document.getElementById('quran-text-content');
    if (content) {
        let currentSize = parseFloat(window.getComputedStyle(content, null).getPropertyValue('font-size'));
        content.style.fontSize = (currentSize + (step * 10)) + 'px';
        window.showQuranMenu();
    }
};

// ==========================================
// 7. الأذكار والسبحة والمواقيت
// ==========================================
const azkarSections = {
    morning: [
        { text: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ...", count: 1, proof: "رواه مسلم" },
        { text: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا...", count: 1, proof: "رواه الترمذي" },
        { text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.", count: 100, proof: "حطت خطاياه" }
    ],
    evening: [
        { text: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ...", count: 1, proof: "رواه مسلم" },
        { text: "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا...", count: 1, proof: "رواه الترمذي" },
        { text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.", count: 100, proof: "حطت خطاياه" }
    ],
    sleep: [
        { text: "بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي وَبِكَ أَرْفَعُهُ...", count: 1, proof: "متفق عليه" },
        { text: "سُبْحَانَ اللَّهِ (33)، الْحَمْدُ لِلَّهِ (33)، اللَّهُ أَكْبَرُ (34)", count: 1, proof: "خير لكم من خادم" }
    ],
    prayer: [
        { text: "أَسْتَغْفِرُ اللَّهَ. (ثلاثاً) اللَّهُمَّ أَنْتَ السَّلَامُ...", count: 1, proof: "صحيح مسلم" }
    ],
    ruqyah: [
        { text: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّةِ، مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ...", count: 3, proof: "رواه البخاري" }
    ],
    food: [
        { text: "بِسْمِ اللَّهِ أَوَّلَهُ وَآخِرَهُ", count: 1, proof: "رواه أبو داود" }
    ]
};

let curAzkarCat = [], curAzkarIdx = 0, azkarRemCount = 0;

window.startAzkar = (type) => {
    curAzkarCat = azkarSections[type] || azkarSections.morning;
    curAzkarIdx = 0;
    navigateTo('azkarReader');
    showCurrentZikr();
};

function showCurrentZikr() {
    if (curAzkarIdx >= curAzkarCat.length) { showToast("تقبل الله منك"); return goBack(); }
    azkarRemCount = curAzkarCat[curAzkarIdx].count;
    document.getElementById('zikr-text').innerText = curAzkarCat[curAzkarIdx].text;
    document.getElementById('zikr-proof').innerText = curAzkarCat[curAzkarIdx].proof || '';
    document.getElementById('zikr-count').innerText = toArabicDigits(azkarRemCount);
    document.getElementById('progress-bar').style.width = `${((curAzkarIdx + 1) / curAzkarCat.length) * 100}%`;
    document.getElementById('progress-text').innerText = `${toArabicDigits(curAzkarIdx + 1)} من ${toArabicDigits(curAzkarCat.length)}`;
}

document.getElementById('counter-btn')?.addEventListener('click', () => {
    if (azkarRemCount > 1) {
        azkarRemCount--;
        document.getElementById('zikr-count').innerText = toArabicDigits(azkarRemCount);
        if (navigator.vibrate) navigator.vibrate(40);
    } else {
        if (navigator.vibrate) navigator.vibrate(150);
        curAzkarIdx++;
        showCurrentZikr();
    }
});

window.incrementMasbaha = () => {
    const el = document.getElementById('masbaha-count');
    if (!el) return;
    const c = parseDisplayInt(el.innerText) + 1;
    el.innerText = toArabicDigits(c);
    localStorage.setItem('masbahaCount', String(c));
    syncUserDataToFirebase();
    if (navigator.vibrate) navigator.vibrate(30);
};

window.resetMasbaha = () => {
    const el = document.getElementById('masbaha-count');
    if(el) el.innerText = "٠";
    localStorage.setItem('masbahaCount', '0');
    syncUserDataToFirebase();
};

// ==========================================
// 8. الملاحة والتشغيل (Routing & Init)
// ==========================================
window.navigateTo = function (target) { window.location.hash = target; };
window.goBack = function () { window.history.back(); };
window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '') || 'home';
    document.querySelectorAll('.screen').forEach((s) => { s.classList.remove('active'); s.classList.add('hidden'); });
    const target = document.getElementById(hash + '-screen') || document.getElementById('home-screen');
    if (target) { target.classList.replace('hidden', 'active'); window.scrollTo(0, 0); }
    
    if (hash === 'hadithScreen') renderHadiths();
    if (hash === 'quranIndex') loadQuranIndex();
    if (hash === 'bookmarks') renderBookmarks();
});

window.renderBookmarks = function () {
    const list = document.getElementById('bookmarks-list');
    if (!list) return;
    list.innerHTML = '';
    if (quranBookmarks.length === 0) {
        list.innerHTML = '<p style="text-align:center;">لم تحفظ أي آيات بعد.</p>';
        return;
    }
    quranBookmarks.forEach(b => {
        list.innerHTML += `
            <div style="border-bottom:1px solid var(--progress-bg); padding:10px 0; display:flex; justify-content:space-between; align-items:center;">
                <div style="font-family:Amiri; font-size:1.2rem; cursor:pointer;" onclick="navigateTo('quranReader'); loadQuranPages(${b.surah}); setTimeout(()=>document.getElementById('ayah-${b.ayah}').scrollIntoView(), 500);">
                    سورة ${b.surahName} - آية ${toArabicDigits(b.ayah)}
                </div>
                <button class="btn" style="background:transparent; color:red; border:none; font-size:0.9rem;" onclick="toggleBookmark(${b.surah}, ${b.ayah});">حذف</button>
            </div>
        `;
    });
};

async function syncUserDataToFirebase() {
    if (!auth || !auth.currentUser || !dbFirestore) return;
    const uid = auth.currentUser.uid;
    const userData = {
        bookmarks: quranBookmarks,
        masbaha: localStorage.getItem('masbahaCount') || 0,
        lastRead: localStorage.getItem('quranLastRead') || '{}'
    };
    try {
        await dbFirestore.collection('users').doc(uid).set(userData, { merge: true });
    } catch (e) { console.log("تنبيه: لم يتم مزامنة المستخدم بسبب الصلاحيات"); }
}

let userLat = 30.0444, userLng = 31.2357;
window.setManualLocation = function () {
    const val = document.getElementById('manual-city-select').value;
    if (!val) return;
    const [lat, lng, city] = val.split(',');
    document.getElementById('prayer-location').innerText = `📍 ${city}`;
    fetchPrayers(lat, lng);
    showToast("تم ضبط الموقع");
};

async function fetchPrayers(lat, lng) {
    try {
        const d = new Date();
        const res = await fetch(`https://api.aladhan.com/v1/timings/${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()}?latitude=${lat}&longitude=${lng}&method=5`);
        const data = await res.json();
        const t = data.data.timings;
        const list = document.getElementById('prayer-times-list');
        if(list) {
            list.innerHTML = `
                <div style="padding:10px; border-bottom:1px solid var(--progress-bg);">الفجر: ${t.Fajr}</div>
                <div style="padding:10px; border-bottom:1px solid var(--progress-bg);">الشروق: ${t.Sunrise}</div>
                <div style="padding:10px; border-bottom:1px solid var(--progress-bg);">الظهر: ${t.Dhuhr}</div>
                <div style="padding:10px; border-bottom:1px solid var(--progress-bg);">العصر: ${t.Asr}</div>
                <div style="padding:10px; border-bottom:1px solid var(--progress-bg);">المغرب: ${t.Maghrib}</div>
                <div style="padding:10px;">العشاء: ${t.Isha}</div>
            `;
        }
        document.getElementById('next-prayer-name').innerText = "مواقيت اليوم محدثة";
    } catch(e) {
        document.getElementById('next-prayer-name').innerText = "تعذر الاتصال بالخادم";
    }
}

window.toggleSettingsSidebar = function() {
    const sb = document.getElementById('settings-sidebar');
    if(sb) sb.classList.toggle('show');
};

window.toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
};

window.exitApp = function() {
    if (confirm('هل أنت متأكد من الخروج من التطبيق؟')) {
        if (window.close) window.close();
    }
};

document.addEventListener('DOMContentLoaded', async () => {
    // 1. شحن الداتا المحفوظة أوفلاين
    await checkAndLoadLocalDBs(); 
    
    // 2. إعدادات الثيم والسبحة
    if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-theme');
    const mc = localStorage.getItem('masbahaCount');
    const mcEl = document.getElementById('masbaha-count');
    if(mcEl) mcEl.innerText = toArabicDigits(parseDisplayInt(mc));

    // 3. توجيه المسار (Routing)
    if (!window.location.hash || window.location.hash === '#splash') {
        window.location.hash = 'splash';
        setTimeout(() => { window.location.hash = 'home'; }, 2500);
    }
    
    // 4. وضع حديث عشوائي من النووية في واجهة البداية لو محملة
    setTimeout(() => {
        const hEl = document.getElementById('splash-hadith');
        const proofEl = document.getElementById('splash-proof');
        if(hEl && isHadithLoaded && hadithOfflineData.nawawi && hadithOfflineData.nawawi.length > 0) {
            const h = hadithOfflineData.nawawi[Math.floor(Math.random() * hadithOfflineData.nawawi.length)];
            hEl.innerText = h.text || h.arab || "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ";
            if(proofEl) proofEl.innerText = "الأربعون النووية";
        } else if(hEl) {
            hEl.innerText = "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ";
            if(proofEl) proofEl.innerText = "متفق عليه";
        }
    }, 500);

    fetchPrayers(userLat, userLng);
});

// ربط إغلاق الشيت لو تم الضغط بره
document.getElementById('ayah-sheet-backdrop')?.addEventListener('click', window.closeAyahActionSheet);
document.getElementById('ayah-btn-close')?.addEventListener('click', window.closeAyahActionSheet);
document.getElementById('ayah-btn-tafsir')?.addEventListener('click', window.showTafsir);
document.getElementById('ayah-btn-audio')?.addEventListener('click', window.playCurrentAudio);
document.getElementById('ayah-tafsir-back')?.addEventListener('click', () => {
    document.getElementById('ayah-tafsir-panel').classList.add('hidden');
    document.getElementById('ayah-sheet-actions').classList.remove('hidden');
});
