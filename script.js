
// --- إضافة ستايل التظليل الذكي برمجياً ---
if (!document.getElementById('smart-highlight-style')) {
    const style = document.createElement('style');
    style.id = 'smart-highlight-style';
    style.innerHTML = `
        .playing-audio-highlight {
            background-color: rgba(139, 90, 43, 0.25) !important;
            border-radius: 8px;
            padding: 2px 5px;
            transition: background-color 0.4s ease, transform 0.3s ease;
            border-bottom: 2px solid var(--accent-color);
        }
    `;
    document.head.appendChild(style);
}

// --- 0. أدوات عامة ---
function toArabicDigits(n) {
    return String(n).replace(/\d/g, (d) => '٠١٢٣٤٥٦٧٨٩'[Number(d)]);
}

function parseDisplayInt(str) {
    let s = String(str);
    if (/[٠-٩]/.test(s)) {
        s = s.replace(/[٠١٢٣٤٥٦٧٨٩]/g, (ch) => '0123456789'['٠١٢٣٤٥٦٧٨٩'.indexOf(ch)]);
    }
    const v = parseInt(s, 10);
    return Number.isFinite(v) ? v : 0;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

const AYAH_RECITER_PRESETS = [
    { id: 'alafasy', label: 'مشاري العفاسي', cdn: 'ar.alafasy', everyayah: 'Alafasy_128kbps' },
    { id: 'husary', label: 'محمود خليل الحصري', cdn: 'ar.husary', everyayah: 'Husary_128kbps' },
    { id: 'abdulbasit', label: 'عبد الباسط عبد الصمد', cdn: 'ar.abdulbasitmurattal', everyayah: 'Abdul_Basit_Murattal_192kbps' },
    { id: 'minshawi', label: 'محمد صديق المنشاوي', cdn: 'ar.minshawi', everyayah: 'Minshawy_Murattal_128kbps' },
    { id: 'ghamadi', label: 'سعد الغامدي', cdn: 'ar.saadalghamidi', everyayah: 'Ghamadi_40kbps' },
    { id: 'shatri', label: 'أبو بكر الشاطري', cdn: 'ar.shaatree', everyayah: 'Abu_Bakr_Ash-Shaatree_128kbps' }
];

function getAyahReciterPreset() {
    const id = localStorage.getItem('ayahReciterId') || 'alafasy';
    return AYAH_RECITER_PRESETS.find((p) => p.id === id) || AYAH_RECITER_PRESETS[0];
}

let toastTimer;
window.showToast = (msg) => {
    const t = document.getElementById('toast-msg');
    if (!t) return;
    clearTimeout(toastTimer);
    t.textContent = msg;
    t.style.bottom = '20px';
    toastTimer = setTimeout(() => { t.style.bottom = '-100px'; }, 3200);
};

function updateOfflineBanner() {
    const b = document.getElementById('offline-banner');
    if (!b) return;
    b.classList.toggle('hidden', navigator.onLine);
}

// --- 1. بيانات الأذكار ---
const ayatAlKursi = "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ\nبِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\n﴿اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ﴾ [البقرة: 255]";
const surahAlIkhlas = "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\n﴿قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ﴾";
const surahAlFalaq = "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\n﴿قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ﴾";
const surahAnNas = "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\n﴿قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ﴾";

const azkarData = {
    morning: [
        { text: ayatAlKursi, count: 1, proof: "الدليل: أُجير من الجن حتى يمسي" }, { text: surahAlIkhlas, count: 3, proof: "الدليل: تكفيه من كل شيء" }, { text: surahAlFalaq, count: 3, proof: "الدليل: تكفيه من كل شيء" }, { text: surahAnNas, count: 3, proof: "الدليل: تكفيه من كل شيء" },
        { text: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ...", count: 1, proof: "الدليل: صحيح مسلم" },
        { text: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ.", count: 1, proof: "الدليل: حديث صحيح" },
        { text: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ.", count: 100, proof: "الدليل: متفق عليه" }
    ],
    evening: [
        { text: ayatAlKursi, count: 1, proof: "الدليل: أُجير من الجن حتى يصبح" }, { text: surahAlIkhlas, count: 3, proof: "الدليل: تكفيه من كل شيء" }, { text: surahAlFalaq, count: 3, proof: "الدليل: تكفيه من كل شيء" }, { text: surahAnNas, count: 3, proof: "الدليل: تكفيه من كل شيء" },
        { text: "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ.", count: 1, proof: "الدليل: حديث صحيح" },
        { text: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ.", count: 100, proof: "الدليل: متفق عليه" }
    ],
    sleep: [
        { text: ayatAlKursi, count: 1, proof: "الدليل: حفظ من الشيطان" }, { text: surahAlIkhlas, count: 3, proof: "الدليل: سنة" }, { text: surahAlFalaq, count: 3, proof: "الدليل: سنة" }, { text: surahAnNas, count: 3, proof: "الدليل: سنة" },
        { text: "بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي وَبِكَ أَرْفَعُهُ...", count: 1, proof: "الدليل: متفق عليه" }
    ],
    prayer: [
        { text: "أَسْتَغْفِرُ اللَّهَ. (ثلاثاً)\nاللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ...", count: 1, proof: "الدليل: صحيح مسلم" },
        { text: ayatAlKursi, count: 1, proof: "الدليل: لم يمنعه من دخول الجنة إلا الموت" }
    ],
    ruqyah: [
        { text: "بِسْمِ اللَّهِ أَرْقِيكَ، مِنْ كُلِّ شَيْءٍ يُؤْذِيكَ...", count: 3, proof: "الدليل: رقية جبريل" }
    ],
    food: [ { text: "بِسْمِ اللَّهِ", count: 1, proof: "الدليل: متفق عليه" } ],
    masjid: [ { text: "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ.", count: 1, proof: "الدليل: مسلم" } ],
    travel: [ { text: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا...", count: 1, proof: "الدليل: مسلم" } ],
    home: [ { text: "بِسْمِ اللَّهِ وَلَجْنَا...", count: 1, proof: "الدليل: أبو داود" } ]
};

const hadithsList = [
    { text: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى.", proof: "(متفق عليه)" },
    { text: "كَلِمَتَانِ خَفِيفَتَانِ عَلَى اللِّسَانِ، ثَقِيلَتَانِ فِي الْمِيزَانِ... سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ.", proof: "(متفق عليه)" }
];

// --- 2. الملاحة والـ Routing ---
window.navigateTo = function (targetScreen) { window.location.hash = targetScreen; };
window.goBack = function () { window.history.back(); };
window.addEventListener('hashchange', handleRoute);

function handleRoute() {
    const hash = window.location.hash.replace('#', '') || 'home';
    document.querySelectorAll('.screen').forEach((s) => { s.classList.remove('active'); s.classList.add('hidden'); });
    const target = document.getElementById(hash + '-screen') || document.getElementById('home-screen');
    if (target) { target.classList.replace('hidden', 'active'); window.scrollTo(0, 0); }
    if (hash === 'quranIndex') updateResumeReadingButton();
    if (hash === 'settings') initSettingsScreen();
    
    // إيقاف القراءة الصوتية إذا خرجنا من المصحف
    if (hash !== 'quranReader') {
        const audio = document.getElementById('ayah-audio');
        if (audio && !audio.paused) {
            audio.pause();
            isAyahAudioPlaying = false;
            highlightAyah(null);
        }
    }
}

// --- 3. الموقع والمواقيت ---
let userLat = parseFloat(localStorage.getItem('savedLat')) || 30.0444;
let userLng = parseFloat(localStorage.getItem('savedLng')) || 31.2357;
let userCity = localStorage.getItem('savedCity') || "القاهرة (افتراضي)";
let prayerInterval;
let prayerNotifyTimeouts = [];

let ayahSheetSurah = 0;
let ayahSheetAyah = 0;
let ayahLongPressTimer = null;
let ayahLongPressTriggered = false;
let isAyahAudioPlaying = false; 

// نظام السحب (Swipe) للمصحف
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('DOMContentLoaded', () => {
    const rH = hadithsList[Math.floor(Math.random() * hadithsList.length)];
    document.getElementById('splash-hadith').innerText = rH.text;
    document.getElementById('splash-proof').innerText = rH.proof;

    if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-theme');
    if (localStorage.getItem('fontSize')) document.documentElement.style.setProperty('--zikr-font-size', `${parseFloat(localStorage.getItem('fontSize'))}rem`);
    const mc = localStorage.getItem('masbahaCount');
    document.getElementById('masbaha-count').innerText = toArabicDigits(parseDisplayInt(mc));

    if (!window.location.hash || window.location.hash === '#splash') {
        window.location.hash = 'home';
        handleRoute();
    } else {
        handleRoute();
    }

    initLocationAndPrayers();
    loadAudioReciters();
    renderBookmarks();
    updateResumeReadingButton();
    updateOfflineBanner();

    // أحداث المصحف والتمرير
    const quranTextEl = document.getElementById('quran-text');
    if (quranTextEl) {
        const cancelAyahLongPress = () => {
            if (ayahLongPressTimer) { clearTimeout(ayahLongPressTimer); ayahLongPressTimer = null; }
        };
        quranTextEl.addEventListener('pointerdown', (e) => {
            const span = e.target.closest('.ayah-span');
            if (!span || !span.dataset.ayah) return;
            ayahLongPressTriggered = false;
            cancelAyahLongPress();
            ayahLongPressTimer = setTimeout(() => {
                ayahLongPressTimer = null;
                ayahLongPressTriggered = true;
                const s = parseInt(span.dataset.surah, 10);
                const a = parseInt(span.dataset.ayah, 10);
                openAyahActionSheet(s, a);
                if (navigator.vibrate) navigator.vibrate(35);
            }, 520);
        });
        quranTextEl.addEventListener('pointerup', cancelAyahLongPress);
        quranTextEl.addEventListener('pointercancel', cancelAyahLongPress);
        quranTextEl.addEventListener('click', (e) => {
            const span = e.target.closest('.ayah-span');
            if (!span || !span.dataset.ayah) return;
            if (ayahLongPressTriggered) {
                ayahLongPressTriggered = false;
                e.preventDefault();
                e.stopPropagation();
                return;
            }
            const sNum = parseInt(span.dataset.surah, 10);
            const aNum = parseInt(span.dataset.ayah, 10);
            const raw = ayahTextCache[`${sNum}-${aNum}`] || '';
            
            // جلب اسم السورة للحفظ
            const sName = surahListCached.find(s => s.number === sNum)?.name || '';
            saveReadingProgress(sNum, sName, aNum, currentMushafPage);
            toggleBookmark(sNum, sName, aNum, raw);
        });
    }

    // إعدادات السحب (Swipe) لقلب الصفحات
    const quranPaper = document.querySelector('.quran-paper');
    if (quranPaper) {
        quranPaper.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        }, {passive: true});
        
        quranPaper.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, {passive: true});
    }

    const ayahBackdrop = document.getElementById('ayah-sheet-backdrop');
    const ayahSheet = document.getElementById('ayah-action-sheet');
    const ayahBtnClose = document.getElementById('ayah-btn-close');
    const ayahBtnTafsir = document.getElementById('ayah-btn-tafsir');
    const ayahBtnAudio = document.getElementById('ayah-btn-audio');
    const ayahTafsirBack = document.getElementById('ayah-tafsir-back');
    if (ayahBackdrop && ayahSheet) {
        ayahBackdrop.addEventListener('click', closeAyahActionSheet);
        ayahBtnClose?.addEventListener('click', closeAyahActionSheet);
        ayahBtnTafsir?.addEventListener('click', () => showAyahTafsirPanel());
        ayahBtnAudio?.addEventListener('click', () => toggleAyahRecitation());
        ayahTafsirBack?.addEventListener('click', () => hideAyahTafsirPanel());
    }
    
    // الانتهاء من قراءة الآية -> الانتقال للتالية
    document.getElementById('ayah-audio')?.addEventListener('ended', () => {
        highlightAyah(null);
        
        let nextAyah = null;
        let foundCurrent = false;
        
        // البحث عن الآية التالية في قاعدة البيانات
        for(let s of surahListCached) {
            for(let a of s.ayahs) {
                if(foundCurrent) {
                    nextAyah = {surah: s.number, ayah: a.numberInSurah, page: a.page};
                    break;
                }
                if(s.number === ayahSheetSurah && a.numberInSurah === ayahSheetAyah) foundCurrent = true;
            }
            if(nextAyah) break;
        }

        if(nextAyah) {
            ayahSheetSurah = nextAyah.surah;
            ayahSheetAyah = nextAyah.ayah;
            
            if(nextAyah.page === currentMushafPage) {
                // الآية في نفس الصفحة
                playCurrentAyah();
            } else {
                // الآية في صفحة جديدة، نقلب الصفحة ونكمل
                loadMushafPage(nextAyah.page, null, true);
            }
        } else {
            isAyahAudioPlaying = false;
            updateAyahAudioButtonLabel(false);
        }
    });

    window.addEventListener('online', () => { updateOfflineBanner(); showToast('تم استعادة الاتصال'); });
    window.addEventListener('offline', () => { updateOfflineBanner(); showToast('وضع بدون اتصال — بعض المحتويات قد لا تُحدَّث'); });
});

function handleSwipe() {
    const diff = touchEndX - touchStartX;
    if(Math.abs(diff) > 50) {
        if(diff > 0) {
            // سحب لليمين (الصفحة السابقة)
            navigateMushafPage(-1);
        } else {
            // سحب لليسار (الصفحة التالية)
            navigateMushafPage(1);
        }
    }
}

window.setManualLocation = function () {
    const val = document.getElementById('manual-city-select').value;
    if (!val) return;
    const [lat, lng, cityName] = val.split(',');
    userLat = parseFloat(lat); userLng = parseFloat(lng); userCity = cityName;
    localStorage.setItem('savedLat', userLat); localStorage.setItem('savedLng', userLng); localStorage.setItem('savedCity', userCity);
    document.getElementById('prayer-location').innerText = `📍 ${userCity} (ضبط يدوي)`;
    fetchPrayers(userLat, userLng);
    showToast(`✅ تم ضبط الموقع على ${userCity} بنجاح`);
    document.getElementById('manual-city-select').value = "";
};

async function initLocationAndPrayers() {
    document.getElementById('prayer-location').innerText = `📍 ${userCity}`;
    fetchPrayers(userLat, userLng);
}

window.requestLocationPermission = function () {
    showToast("جاري البحث عن موقعك الدقيق (GPS)...");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (pos) => {
            userLat = pos.coords.latitude; userLng = pos.coords.longitude;
            userCity = "تم التحديد بالـ GPS";
            localStorage.setItem('savedLat', userLat); localStorage.setItem('savedLng', userLng); localStorage.setItem('savedCity', userCity);
            document.getElementById('prayer-location').innerText = `📍 ${userCity}`;
            fetchPrayers(userLat, userLng);
            showToast("✅ تم ضبط الموقع بدقة");
        }, () => { showToast("❌ يرجى تفعيل الـ GPS"); }, { enableHighAccuracy: true });
    }
};

function getPrayerMethod() { return localStorage.getItem('prayerMethod') || '5'; }
function clearPrayerNotificationTimeouts() { prayerNotifyTimeouts.forEach((id) => clearTimeout(id)); prayerNotifyTimeouts = []; }

function showPrayerNotificationNow(body) {
    const title = 'موسوعة المسلم';
    const opts = { body, icon: './icon-192.png', badge: './icon-192.png', tag: 'prayer-adhan' };
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({ type: 'SHOW_NOTIFICATION', title, options: opts });
    } else {
        new Notification(title, opts);
    }
}

function scheduleNextPrayerNotification(nextT, prayerNameAr) {
    clearPrayerNotificationTimeouts();
    if (localStorage.getItem('notifyPrayer') !== '1') return;
    if (!('Notification' in window) || Notification.permission !== 'granted') return;
    if (!nextT || !prayerNameAr) return;
    const beforeMin = parseInt(localStorage.getItem('notifyBeforeMin') || '0', 10);
    const fireAt = new Date(nextT.getTime() - beforeMin * 60000);
    const delay = fireAt.getTime() - Date.now();
    if (delay < 1500) return;
    const body = beforeMin > 0 ? `تذكير: صلاة ${prayerNameAr} بعد ${beforeMin} دقيقة` : `حان وقت صلاة ${prayerNameAr}`;
    const id = setTimeout(() => { showPrayerNotificationNow(body); fetchPrayers(userLat, userLng); }, delay);
    prayerNotifyTimeouts.push(id);
}

async function fetchPrayers(lat, lng) {
    const d = new Date();
    const nextNameEl = document.getElementById('next-prayer-name');
    const countEl = document.getElementById('prayer-countdown');
    clearPrayerNotificationTimeouts();
    try {
        const res = await fetch(`https://api.aladhan.com/v1/timings/${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}?latitude=${lat}&longitude=${lng}&method=${encodeURIComponent(getPrayerMethod())}`);
        if (!res.ok) throw new Error('api');
        const data = await res.json();
        const t = data.data.timings;
        const list = document.getElementById('prayer-times-list');
        if (list) list.innerHTML = '';
        let nextT = null; let nextN = ''; const now = new Date();
        const order = [{ id: 'Fajr', n: 'الفجر' }, { id: 'Sunrise', n: 'الشروق' }, { id: 'Dhuhr', n: 'الظهر' }, { id: 'Asr', n: 'العصر' }, { id: 'Maghrib', n: 'المغرب' }, { id: 'Isha', n: 'العشاء' }];

        order.forEach((p) => {
            const parts = t[p.id].split(':');
            const hi = parseInt(parts[0], 10); const mi = parseInt(parts[1], 10);
            const pDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hi, mi, 0);
            const h12 = hi > 12 ? hi - 12 : (hi === 0 ? 12 : hi);
            const ampm = hi >= 12 ? 'م' : 'ص';
            if (pDate > now && !nextT && p.id !== 'Sunrise') { nextT = pDate; nextN = p.n; }
            if (list) list.innerHTML += `<div class="prayer-item ${nextN === p.n ? 'active-prayer' : ''}"><span>${p.n}</span><span>${h12}:${String(mi).padStart(2, '0')} <small>${ampm}</small></span></div>`;
        });

        if (!nextT) {
            const f = t.Fajr.split(':');
            nextT = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, parseInt(f[0], 10), parseInt(f[1], 10), 0);
            nextN = 'الفجر';
        }
        if (nextNameEl) nextNameEl.innerText = `الصلاة القادمة: ${nextN}`;

        if (prayerInterval) clearInterval(prayerInterval);
        prayerInterval = setInterval(() => {
            const diff = nextT - new Date();
            if (diff <= 0) { clearInterval(prayerInterval); fetchPrayers(userLat, userLng); }
            else if (countEl) {
                const h = Math.floor((diff / 3600000) % 24); const m = Math.floor((diff / 60000) % 60); const s = Math.floor((diff / 1000) % 60);
                countEl.innerText = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
            }
        }, 1000);
        scheduleNextPrayerNotification(nextT, nextN);
    } catch (e) {
        if (nextNameEl) nextNameEl.innerText = 'تعذر الحساب';
        if (countEl) countEl.innerText = '--:--:--';
    }
}

function initSettingsScreen() {
    const m = document.getElementById('prayer-method-select');
    const n = document.getElementById('notify-prayer-check');
    const b = document.getElementById('notify-before-select');
    const ayahSel = document.getElementById('ayah-reciter-select');
    if (m) m.value = getPrayerMethod();
    if (n) n.checked = localStorage.getItem('notifyPrayer') === '1';
    if (b) b.value = localStorage.getItem('notifyBeforeMin') || '0';
    if (ayahSel) ayahSel.value = getAyahReciterPreset().id;
    updateNotifyPermissionHint();
}

function updateNotifyPermissionHint() {
    const el = document.getElementById('notify-permission-hint');
    if (!el) return;
    if (!('Notification' in window)) { el.textContent = 'المتصفح لا يدعم إشعارات سطح المكتب.'; return; }
    const labels = { default: 'لم يُمنَح إذن بعد — اضغط «طلب إذن الإشعارات».', granted: 'الإذن مفعّل ✓', denied: 'مرفوض — افتح إعدادات المتصفح للموقع واسمح بالإشعارات.' };
    el.textContent = labels[Notification.permission] || `الحالة: ${Notification.permission}`;
}

window.saveAppSettings = function () {
    const m = document.getElementById('prayer-method-select');
    const n = document.getElementById('notify-prayer-check');
    const b = document.getElementById('notify-before-select');
    const ayahSel = document.getElementById('ayah-reciter-select');
    if (m) localStorage.setItem('prayerMethod', m.value);
    if (n) localStorage.setItem('notifyPrayer', n.checked ? '1' : '0');
    if (b) localStorage.setItem('notifyBeforeMin', b.value);
    if (ayahSel) localStorage.setItem('ayahReciterId', ayahSel.value);
    
    if (n && n.checked && 'Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission().then(() => { updateNotifyPermissionHint(); fetchPrayers(userLat, userLng); });
    } else {
        fetchPrayers(userLat, userLng);
    }
    updateNotifyPermissionHint();
    showToast('تم حفظ الإعدادات');
};

window.requestNotificationPermissionFromSettings = async function () {
    if (!('Notification' in window)) { showToast('المتصفح لا يدعم الإشعارات'); return; }
    const p = await Notification.requestPermission();
    updateNotifyPermissionHint();
    if (p === 'granted') { showToast('تم السماح بالإشعارات'); fetchPrayers(userLat, userLng); } 
};

// --- أكواد التظليل والصوت ---
function highlightAyah(key) {
    document.querySelectorAll('.playing-audio-highlight').forEach(el => el.classList.remove('playing-audio-highlight'));
    if (key) {
        const el = document.getElementById(`ayah-${key}`);
        if (el) {
            el.classList.add('playing-audio-highlight');
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
}

function openAyahActionSheet(surahNum, ayahNum) {
    ayahSheetSurah = surahNum;
    ayahSheetAyah = ayahNum;
    
    // جلب اسم السورة للعرض
    const sName = surahListCached.find(s => s.number === surahNum)?.name || 'سورة';
    
    hideAyahTafsirPanel();
    const title = document.getElementById('ayah-sheet-title');
    if (title) title.textContent = `${sName} — آية ${toArabicDigits(ayahNum)}`;
    
    updateAyahAudioButtonLabel(isAyahAudioPlaying);
    
    const backdrop = document.getElementById('ayah-sheet-backdrop');
    const sheet = document.getElementById('ayah-action-sheet');
    if (backdrop) backdrop.classList.remove('hidden');
    if (sheet) sheet.classList.remove('hidden');
    requestAnimationFrame(() => { backdrop?.classList.add('sheet-open'); sheet?.classList.add('sheet-open'); });
}

function closeAyahActionSheet() {
    const backdrop = document.getElementById('ayah-sheet-backdrop');
    const sheet = document.getElementById('ayah-action-sheet');
    backdrop?.classList.remove('sheet-open');
    sheet?.classList.remove('sheet-open');
    setTimeout(() => { backdrop?.classList.add('hidden'); sheet?.classList.add('hidden'); hideAyahTafsirPanel(); }, 280);
}

function hideAyahTafsirPanel() {
    document.getElementById('ayah-tafsir-panel')?.classList.add('hidden');
    document.getElementById('ayah-sheet-actions')?.classList.remove('hidden');
    const te = document.getElementById('ayah-tafsir-text');
    if (te) te.textContent = '';
}

async function showAyahTafsirPanel() {
    const panel = document.getElementById('ayah-tafsir-panel');
    const actions = document.getElementById('ayah-sheet-actions');
    const textEl = document.getElementById('ayah-tafsir-text');
    if (!panel || !actions || !textEl) return;
    actions.classList.add('hidden');
    panel.classList.remove('hidden');
    textEl.textContent = 'جاري تحميل التفسير...';
    try {
        const res = await fetch(`https://api.alquran.cloud/v1/ayah/${ayahSheetSurah}:${ayahSheetAyah}/editions/ar.muyassar`);
        const data = await res.json();
        textEl.textContent = data.data?.[0]?.text || 'تعذر عرض التفسير.';
    } catch (e) {
        textEl.textContent = 'تعذر الاتصال.';
    }
}

function buildAyahMp3Urls(surahNum, ayahInSurah) {
    const g = ayahGlobalNumberCache[`${surahNum}-${ayahInSurah}`];
    const s = String(surahNum).padStart(3, '0');
    const a = String(ayahInSurah).padStart(3, '0');
    const p = getAyahReciterPreset();
    const list = [];
    if (g && p.cdn) list.push(`https://cdn.islamic.network/quran/audio/128/${p.cdn}/${g}.mp3`);
    if (p.everyayah) list.push(`https://everyayah.com/data/${p.everyayah}/${s}${a}.mp3`);
    return list;
}

function toggleAyahRecitation() {
    const audio = document.getElementById('ayah-audio');
    if (!audio) return;

    if (isAyahAudioPlaying) {
        audio.pause();
        isAyahAudioPlaying = false;
        highlightAyah(null);
        updateAyahAudioButtonLabel(false);
        return;
    }
    playCurrentAyah();
}

function playCurrentAyah() {
    const audio = document.getElementById('ayah-audio');
    if (!audio) return;

    const urls = buildAyahMp3Urls(ayahSheetSurah, ayahSheetAyah);
    const tryUrl = (idx) => {
        if (idx >= urls.length) { 
            isAyahAudioPlaying = false; 
            highlightAyah(null);
            showToast('تعذر تشغيل الصوت'); 
            updateAyahAudioButtonLabel(false); 
            return; 
        }
        audio.src = urls[idx];
        audio.play().then(() => {
            isAyahAudioPlaying = true;
            updateAyahAudioButtonLabel(true);
            highlightAyah(`${ayahSheetSurah}-${ayahSheetAyah}`);
        }).catch(() => tryUrl(idx + 1));
    };
    tryUrl(0);
}

function updateAyahAudioButtonLabel(playing) {
    const b = document.getElementById('ayah-btn-audio');
    if (!b) return;
    const lab = getAyahReciterPreset().label;
    b.textContent = playing ? '⏹ إيقاف الاستماع' : `▶️ استماع الآية (${lab})`;
}

// --- 5. نظام القرآن (صفحات المصحف، البحث، الـ Offline) ---
const QURAN_DB_NAME = 'QuranOfflineDB';
let surahListCached = [];
let currentMushafPage = 1;
let currentSurahDisplayName = '';
let ayahTextCache = {};
let ayahGlobalNumberCache = {};
let quranBookmarks = [];
try { quranBookmarks = JSON.parse(localStorage.getItem('quranBookmarks')) || []; } catch { quranBookmarks = []; }

function saveReadingProgress(surah, name, ayah, page) {
    try {
        localStorage.setItem('quranLastRead', JSON.stringify({ surah, name, ayah, page }));
    } catch (e) {}
}

function updateResumeReadingButton() {
    const btn = document.getElementById('resume-reading-btn');
    if (!btn) return;
    const raw = localStorage.getItem('quranLastRead');
    if (!raw) { btn.classList.add('hidden'); btn.onclick = null; return; }
    try {
        const o = JSON.parse(raw);
        if (!o || !o.surah || !o.page) { btn.classList.add('hidden'); return; }
        btn.classList.remove('hidden');
        btn.onclick = () => {
            navigateTo('quranReader');
            loadMushafPage(o.page, `${o.surah}-${o.ayah}`);
        };
    } catch { btn.classList.add('hidden'); }
}

function openQuranDB() {
    return new Promise((resolve, reject) => {
        const req = indexedDB.open(QURAN_DB_NAME, 1);
        req.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains('quran_data')) db.createObjectStore('quran_data', { keyPath: 'id' });
        };
        req.onsuccess = (e) => resolve(e.target.result);
        req.onerror = (e) => reject(e.target.error);
    });
}

async function saveQuranToLocal(surahs) {
    const db = await openQuranDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction('quran_data', 'readwrite');
        tx.objectStore('quran_data').put({ id: 'full_quran', surahs: surahs });
        tx.oncomplete = () => resolve(); tx.onerror = () => reject();
    });
}

async function getQuranFromLocal() {
    const db = await openQuranDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction('quran_data', 'readonly');
        const req = tx.objectStore('quran_data').get('full_quran');
        req.onsuccess = () => resolve(req.result ? req.result.surahs : null);
        req.onerror = () => reject();
    });
}

async function loadQuranIndex() {
    if (surahListCached.length > 0) return;
    const list = document.getElementById('surah-list');
    const audioSel = document.getElementById('surah-select-audio');
    
    const localData = await getQuranFromLocal();
    if (localData) {
        surahListCached = localData;
        renderSurahList(list, audioSel);
    } else {
        if(list) list.innerHTML = '<p style="text-align:center; width:100%; grid-column:1/-1; color:var(--accent-color);">جاري تحميل قاعدة بيانات القرآن للعمل بدون إنترنت (مرة واحدة فقط)... ⏳</p>';
        try {
            const res = await fetch('https://api.alquran.cloud/v1/quran/quran-uthmani');
            const data = await res.json();
            surahListCached = data.data.surahs;
            await saveQuranToLocal(surahListCached);
            showToast('✅ تم تنزيل المصحف بنجاح وسيعمل بدون إنترنت دائماً!');
            renderSurahList(list, audioSel);
        } catch (e) {
            if(list) list.innerHTML = '<p style="text-align:center; padding:20px; grid-column:1/-1;">تعذر تحميل المصحف. يرجى التأكد من اتصالك بالإنترنت في أول مرة فقط.</p>';
        }
    }
}

function renderSurahList(list, audioSel) {
    if(list) list.innerHTML = '';
    if (audioSel) audioSel.innerHTML = '<option value="">اختر السورة...</option>';
    surahListCached.forEach((s) => {
        if(list) list.innerHTML += `<button type="button" class="surah-card-btn" onclick="navigateTo('quranReader'); loadSurahContent(${s.number})"><span class="surah-number">${s.number}</span> <span>${escapeHtml(s.name)}</span></button>`;
        if (audioSel) audioSel.innerHTML += `<option value="${s.number}">${escapeHtml(s.name)}</option>`;
    });
}

// دالة جديدة لتحميل صفحة كاملة (مثل المصحف الحقيقي)
window.loadMushafPage = function(pageNum, scrollToAyahKey = null, autoPlay = false) {
    if (pageNum < 1 || pageNum > 604) return;
    currentMushafPage = pageNum;
    ayahTextCache = {};
    ayahGlobalNumberCache = {};
    
    let pageAyahs = [];
    let surahNamesSet = new Set();

    surahListCached.forEach(s => {
        s.ayahs.forEach(a => {
            if (a.page === pageNum) {
                pageAyahs.push({ surah: s.number, surahName: s.name, ...a });
                surahNamesSet.add(s.name);
            }
        });
    });

    currentSurahDisplayName = Array.from(surahNamesSet).join(' - ');
    document.getElementById('current-surah-name').innerText = `صفحة ${toArabicDigits(pageNum)} | ${currentSurahDisplayName}`;
    
    let html = '';
    pageAyahs.forEach(a => {
        if (a.numberInSurah === 1 && a.surah !== 1 && a.surah !== 9) {
            html += `<div class="surah-separator"><span class="surah-separator-text">سُورَةُ ${a.surahName}</span></div>`;
            html += '<div class="basmalah" style="text-align:center; font-family:\'Amiri\'; font-size:1.5rem; margin-bottom:15px; color:var(--accent-color);">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>';
        } else if (a.numberInSurah === 1) {
            html += `<div class="surah-separator"><span class="surah-separator-text">سُورَةُ ${a.surahName}</span></div>`;
        }

        let text = a.text;
        if (a.numberInSurah === 1 && a.surah !== 1 && a.surah !== 9) {
            text = text.replace("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ ", "");
        }

        let key = `${a.surah}-${a.numberInSurah}`;
        ayahTextCache[key] = text;
        ayahGlobalNumberCache[key] = a.number;
        
        const isMarked = quranBookmarks.some(b => b.surah === a.surah && b.ayah === a.numberInSurah);
        const markClass = isMarked ? "bookmarked-ayah" : "";
        
        html += `<span class="ayah-span ${markClass}" id="ayah-${key}" data-surah="${a.surah}" data-ayah="${a.numberInSurah}">${escapeHtml(text)} <span class="ayah-symbol">﴿${toArabicDigits(a.numberInSurah)}﴾</span></span> `;
    });

    document.getElementById('quran-text').innerHTML = html;

    if (scrollToAyahKey) {
        setTimeout(() => {
            let el = document.getElementById(`ayah-${scrollToAyahKey}`);
            if(el) { el.scrollIntoView({behavior: 'smooth', block: 'center'}); el.classList.add('ayah-highlight'); setTimeout(()=>el.classList.remove('ayah-highlight'), 2000);}
        }, 300);
    } else {
        window.scrollTo(0,0);
    }

    if (autoPlay && pageAyahs.length > 0) {
        setTimeout(() => {
            ayahSheetSurah = pageAyahs[0].surah;
            ayahSheetAyah = pageAyahs[0].numberInSurah;
            playCurrentAyah();
        }, 500);
    }

    if (pageAyahs.length > 0 && !scrollToAyahKey) {
        saveReadingProgress(pageAyahs[0].surah, pageAyahs[0].surahName, pageAyahs[0].numberInSurah, currentMushafPage);
    }
    updateResumeReadingButton();
    
    if (isAyahAudioPlaying) highlightAyah(`${ayahSheetSurah}-${ayahSheetAyah}`);
};

// تعديل دالة تحميل السورة القديمة عشان تترجم لرقم الصفحة وتفتحها
window.loadSurahContent = async (num, scrollToAyah = null) => {
    let targetPage = 1;
    surahListCached.forEach(s => {
        if(s.number === num) {
            let target = s.ayahs.find(a => a.numberInSurah === (scrollToAyah || 1));
            if(target && target.page) targetPage = target.page;
        }
    });
    loadMushafPage(targetPage, scrollToAyah ? `${num}-${scrollToAyah}` : null);
};

window.navigateMushafPage = function (step) {
    const p = currentMushafPage + step;
    if (p >= 1 && p <= 604) { loadMushafPage(p); } 
    else { showToast("لا توجد صفحات أخرى"); }
};

window.toggleBookmark = function (sNum, sName, aNum, text) {
    const index = quranBookmarks.findIndex((b) => b.surah === sNum && b.ayah === aNum);
    if (index > -1) {
        quranBookmarks.splice(index, 1);
        const el = document.getElementById(`ayah-${sNum}-${aNum}`);
        if (el) el.classList.remove('bookmarked-ayah');
        showToast("❌ تم إزالة العلامة المرجعية");
    } else {
        const snippet = text || ayahTextCache[`${sNum}-${aNum}`] || '';
        quranBookmarks.push({ surah: sNum, surahName: sName, ayah: aNum, text: snippet });
        const el = document.getElementById(`ayah-${sNum}-${aNum}`);
        if (el) el.classList.add('bookmarked-ayah');
        showToast("🔖 تم حفظ الآية");
    }
    localStorage.setItem('quranBookmarks', JSON.stringify(quranBookmarks));
    renderBookmarks();
};

window.renderBookmarks = function () {
    const list = document.getElementById('bookmarks-list');
    if (!list) return;
    list.replaceChildren();
    if (quranBookmarks.length === 0) {
        list.innerHTML = '<p style="text-align:center; opacity:0.7; font-size:1.2rem;">لم تحفظ أي آيات بعد.</p>';
        return;
    }
    quranBookmarks.forEach((b) => {
        const div = document.createElement('div');
        div.className = 'bookmark-item';
        div.innerHTML = `
            <h3>سورة ${b.surahName} - آية ${b.ayah}</h3>
            <p>${b.text} ﴿${toArabicDigits(b.ayah)}﴾</p>
            <div class="actions">
                <button type="button" class="btn" style="padding: 8px 15px; font-size: 1rem; flex: 1;" onclick="navigateTo('quranReader'); loadSurahContent(${b.surah}, ${b.ayah})">📖 الذهاب</button>
                <button type="button" class="btn" style="padding: 8px 15px; font-size: 1rem; width: auto; background: transparent; color: #ff4d4d; border-color: #ff4d4d;" onclick="toggleBookmark(${b.surah}, '${b.surahName}', ${b.ayah}, '')">❌ حذف</button>
            </div>
        `;
        list.appendChild(div);
    });
};

window.handleQuranSearch = function () {
    const query = document.getElementById('quran-search').value.trim();
    const listEl = document.getElementById('surah-list');
    const resultsEl = document.getElementById('quran-search-results');
    
    if (query.length === 0) {
        listEl.style.display = 'grid';
        resultsEl.style.display = 'none';
        return;
    }

    listEl.style.display = 'none';
    resultsEl.style.display = 'block';

    const removeTashkeel = (text) => text.replace(/[\u0617-\u061A\u064B-\u0652]/g, "");
    const cleanQuery = removeTashkeel(query);

    const surahMatches = surahListCached.filter(s => s.name.includes(cleanQuery) || removeTashkeel(s.name).includes(cleanQuery));
    
    let ayahMatches = [];
    for (let s of surahListCached) {
        for (let a of s.ayahs) {
            const cleanText = removeTashkeel(a.text);
            if (cleanText.includes(cleanQuery)) {
                ayahMatches.push({ surah: s.number, surahName: s.name, ayah: a.numberInSurah, text: a.text });
                if (ayahMatches.length >= 40) break;
            }
        }
        if (ayahMatches.length >= 40) break;
    }

    let html = '';
    if (surahMatches.length > 0) {
        html += `<h4 style="color:var(--accent-color);margin-bottom:10px;">السور المطابقة:</h4><div class="surah-grid" style="margin-bottom:20px;">`;
        surahMatches.forEach(s => { html += `<button type="button" class="surah-card-btn" onclick="openSearchResult(${s.number}, null)"><span class="surah-number">${s.number}</span> <span>${escapeHtml(s.name)}</span></button>`; });
        html += `</div>`;
    }

    if (ayahMatches.length > 0) {
        html += `<h4 style="color:var(--accent-color);margin-bottom:10px;">الآيات المطابقة:</h4>`;
        ayahMatches.forEach(m => {
            html += `<div class="bookmark-item" style="cursor:pointer; padding:10px; border:1px solid var(--accent-color); margin-bottom:10px; border-radius:8px;" onclick="openSearchResult(${m.surah}, ${m.ayah})">
                <h4 style="font-size:0.9rem; color:var(--accent-color);">سورة ${m.surahName} - آية ${m.ayah}</h4>
                <p style="font-size:1rem; margin-top:5px;">${m.text}</p>
            </div>`;
        });
    }

    if (surahMatches.length === 0 && ayahMatches.length === 0) {
        html = '<p style="text-align:center;">لا توجد نتائج مطابقة لـ "' + escapeHtml(query) + '"</p>';
    }

    resultsEl.innerHTML = html;
};

window.openSearchResult = function(surahNum, ayahNum) {
    document.getElementById('quran-search').value = '';
    document.getElementById('surah-list').style.display = 'grid';
    document.getElementById('quran-search-results').style.display = 'none';
    navigateTo('quranReader');
    loadSurahContent(surahNum, ayahNum);
};

// --- 6. الأذكار والسبحة ---
let curCat = []; let curIdx = 0; let remC = 0;
window.startAzkar = (type) => { curCat = azkarData[type]; curIdx = 0; navigateTo('azkarReader'); showZikr(); };
function showZikr() {
    if (curIdx >= curCat.length) { showToast("تقبل الله منك"); return goBack(); }
    const z = curCat[curIdx]; remC = z.count;
    document.getElementById('zikr-text').innerText = z.text;
    document.getElementById('zikr-proof').innerText = z.proof;
    document.getElementById('zikr-count').innerText = toArabicDigits(remC);
    document.getElementById('progress-bar').style.width = `${((curIdx + 1) / curCat.length) * 100}%`;
    document.getElementById('progress-text').innerText = `${toArabicDigits(curIdx + 1)} من ${toArabicDigits(curCat.length)}`;
}

document.getElementById('counter-btn').onclick = () => {
    if (remC > 1) { remC--; document.getElementById('zikr-count').innerText = toArabicDigits(remC); if (navigator.vibrate) navigator.vibrate(40); } 
    else { if (navigator.vibrate) navigator.vibrate(150); curIdx++; showZikr(); }
};

window.incrementMasbaha = () => {
    const c = parseDisplayInt(document.getElementById('masbaha-count').innerText) + 1;
    document.getElementById('masbaha-count').innerText = toArabicDigits(c);
    localStorage.setItem('masbahaCount', String(c));
    if (navigator.vibrate) navigator.vibrate(30);
};
window.resetMasbaha = () => { document.getElementById('masbaha-count').innerText = toArabicDigits(0); localStorage.setItem('masbahaCount', '0'); };

// --- 7. الصوتيات ---
let allAudioReciters = [];
function prependPinnedSurahReciters(sel) {
    const pinned = [
        { n: 'محمود خليل الحصري — رواية ورش (عن نافع)', s: 'https://server13.mp3quran.net/husr/Rewayat-Warsh-A-n-Nafi/' },
        { n: 'محمد صديق المنشاوي — مرتل (حفص عن عاصم)', s: 'https://server10.mp3quran.net/minsh/' }
    ];
    pinned.forEach((p) => {
        if (allAudioReciters.some((x) => (x.s || '').replace(/\/$/, '') === p.s.replace(/\/$/, ''))) return;
        allAudioReciters.unshift(p);
        if (sel) sel.innerHTML = `<option value="${escapeHtml(p.s)}">${escapeHtml(p.n)}</option>` + sel.innerHTML;
    });
}

async function loadAudioReciters() {
    const sel = document.getElementById('reciter-select');
    try {
        const res = await fetch('https://mp3quran.net/api/v3/reciters?language=ar');
        const data = await res.json();
        if (!sel) return;
        data.reciters.forEach((r) => {
            if (r.moshaf) {
                r.moshaf.forEach((m) => {
                    const name = `${r.name} (${m.name.replace('حفص عن عاصم', 'حفص')})`;
                    allAudioReciters.push({ n: name, s: m.server });
                    sel.innerHTML += `<option value="${m.server}">${escapeHtml(name)}</option>`;
                });
            }
        });
        prependPinnedSurahReciters(sel);
    } catch (e) {
        if (sel) sel.innerHTML = '<option value="">تعذر تحميل القراء</option>';
    }
    loadQuranIndex();
}

window.filterReciters = () => {
    const t = document.getElementById('reciter-search').value.toLowerCase();
    const sel = document.getElementById('reciter-select');
    sel.innerHTML = '<option value="">اختر القارئ...</option>';
    allAudioReciters.filter((r) => r.n.toLowerCase().includes(t)).forEach((r) => {
        sel.innerHTML += `<option value="${r.s}">${escapeHtml(r.n)}</option>`;
    });
};

window.updateReciter = () => updateAudioSurah();

window.updateAudioSurah = () => {
    const server = document.getElementById('reciter-select').value;
    const surah = document.getElementById('surah-select-audio').value;
    if (!server || !surah) return;
    const surahName = document.getElementById('surah-select-audio').options[document.getElementById('surah-select-audio').selectedIndex].text;
    document.getElementById('now-playing-title').innerText = `🎧 سورة ${surahName}`;
    const audio = document.getElementById('global-quran-audio');
    audio.src = `${server.endsWith('/') ? server : server + '/'}${surah.padStart(3, '0')}.mp3`;
    audio.play().catch(() => showToast('اضغط تشغيل في المشغل للاستماع'));
};

// --- 8. الإعدادات والتحديث ---
window.toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
};

window.changeFontSize = (step) => {
    let c = parseFloat(localStorage.getItem('fontSize') || 1.6);
    c = Math.max(1.2, Math.min(4.0, c + step * 0.25));
    document.documentElement.style.setProperty('--zikr-font-size', `${c}rem`);
    localStorage.setItem('fontSize', c);
};

window.checkForUpdates = function () {
    if (!navigator.onLine) {
        showToast("لا يوجد اتصال بالإنترنت للتحديث.");
        return;
    }
    showToast("جاري البحث عن تحديثات جديدة...");
    
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(function(registrations) {
            for(let registration of registrations) {
                registration.update(); 
            }
            caches.keys().then((keyList) => {
                return Promise.all(keyList.map((key) => {
                    return caches.delete(key);
                }));
            }).then(() => {
                showToast("تم التحديث! جاري إعادة التشغيل...");
                setTimeout(() => {
                    window.location.reload(true);
                }, 1500);
            });
        });
    } else {
        window.location.reload(true);
    }
};
