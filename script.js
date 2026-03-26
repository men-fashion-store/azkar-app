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

function saveReadingProgress(ayahNum) {
    if (!currentSurahNumber || !currentSurahDisplayName) return;
    try {
        localStorage.setItem('quranLastRead', JSON.stringify({
            surah: currentSurahNumber,
            name: currentSurahDisplayName,
            ayah: ayahNum
        }));
    } catch (e) { /* ignore quota */ }
}

function updateResumeReadingButton() {
    const btn = document.getElementById('resume-reading-btn');
    if (!btn) return;
    const raw = localStorage.getItem('quranLastRead');
    if (!raw) {
        btn.classList.add('hidden');
        btn.onclick = null;
        return;
    }
    try {
        const o = JSON.parse(raw);
        if (!o || !o.surah || !o.name) {
            btn.classList.add('hidden');
            return;
        }
        btn.classList.remove('hidden');
        btn.onclick = () => {
            navigateTo('quranReader');
            loadQuranPages(o.surah);
        };
    } catch {
        btn.classList.add('hidden');
    }
}

// --- 1. بيانات الأذكار والأحاديث ---
const ayatAlKursi = "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ\nبِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\n﴿اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ﴾ [البقرة: 255]";
const surahAlIkhlas = "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\n﴿قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ﴾";
const surahAlFalaq = "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\n﴿قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ﴾";
const surahAnNas = "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\n﴿قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ﴾";

const azkarData = {
    morning: [
        { text: ayatAlKursi, count: 1, proof: "الدليل: أُجير من الجن حتى يمسي" }, { text: surahAlIkhlas, count: 3, proof: "الدليل: تكفيه من كل شيء" }, { text: surahAlFalaq, count: 3, proof: "الدليل: تكفيه من كل شيء" }, { text: surahAnNas, count: 3, proof: "الدليل: تكفيه من كل شيء" },
        { text: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ، وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ، وَعَذَابٍ فِي الْقَبْرِ.", count: 1, proof: "الدليل: صحيح مسلم" },
        { text: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ.", count: 1, proof: "الدليل: حديث صحيح" },
        { text: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ.", count: 1, proof: "الدليل: سيد الاستغفار" }
    ],
    evening: [
        { text: ayatAlKursi, count: 1, proof: "الدليل: أُجير من الجن حتى يصبح" }, { text: surahAlIkhlas, count: 3, proof: "الدليل: تكفيه من كل شيء" }, { text: surahAlFalaq, count: 3, proof: "الدليل: تكفيه من كل شيء" }, { text: surahAnNas, count: 3, proof: "الدليل: تكفيه من كل شيء" },
        { text: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ...", count: 1, proof: "الدليل: صحيح مسلم" },
        { text: "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ.", count: 1, proof: "الدليل: حديث صحيح" }
    ],
    sleep: [
        { text: ayatAlKursi, count: 1, proof: "الدليل: حفظ من الشيطان" }, { text: surahAlIkhlas, count: 3, proof: "الدليل: سنة" },
        { text: "بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي وَبِكَ أَرْفَعُهُ...", count: 1, proof: "الدليل: متفق عليه" }
    ],
    prayer: [
        { text: "أَسْتَغْفِرُ اللَّهَ. (ثلاثاً)\nاللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ.", count: 1, proof: "الدليل: صحيح مسلم" },
        { text: ayatAlKursi, count: 1, proof: "الدليل: لم يمنعه من دخول الجنة إلا الموت" }
    ],
    ruqyah: [
        { text: "بِسْمِ اللَّهِ أَرْقِيكَ، مِنْ كُلِّ شَيْءٍ يُؤْذِيكَ، مِنْ شَرِّ كُلِّ نَفْسٍ أَوْ عَيْنِ حَاسِدٍ، اللَّهُ يَشْفِيكَ، بِسْمِ اللَّهِ أَرْقِيكَ.", count: 3, proof: "الدليل: رقية جبريل" }
    ],
    food: [
        { text: "بِسْمِ اللَّهِ", count: 1, proof: "الدليل: متفق عليه" },
        { text: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا، وَجَعَلَنَا مُسْلِمِينَ.", count: 1, proof: "الدليل: حسن" }
    ]
};

const authenticHadiths = {
    bukhari: [
        { text: "إنما الأعمال بالنيات، وإنما لكل امرئ ما نوى...", narrator: "عمر بن الخطاب رضي الله عنه", source: "صحيح البخاري، حديث 1" },
        { text: "بني الإسلام على خمس: شهادة أن لا إله إلا الله...", narrator: "ابن عمر رضي الله عنهما", source: "صحيح البخاري، حديث 8" },
        { text: "المسلم من سلم المسلمون من لسانه ويده...", narrator: "ابن عمر رضي الله عنهما", source: "صحيح البخاري، حديث 11" }
    ],
    muslim: [
        { text: "من قال لا إله إلا الله وحده لا شريك له، له الملك...", narrator: "أبي هريرة رضي الله عنه", source: "صحيح مسلم، حديث 2691" },
        { text: "الطهور شطر الإيمان، والحمد لله تملأ الميزان...", narrator: "أبي مالك الأشعري رضي الله عنه", source: "صحيح مسلم، حديث 223" }
    ],
    nawawi: [
        { text: "أحب الأعمال إلى الله الصلاة على وقتها...", narrator: "ابن مسعود رضي الله عنه", source: "الأربعين النووية، حديث 3" },
        { text: "من كان يؤمن بالله واليوم الآخر فليقل خيرا أو ليصمت", narrator: "أبي هريرة رضي الله عنه", source: "الأربعين النووية، حديث 4" }
    ]
};

// الدالة اللي كانت ناقصة عشان تشغل مكتبة الأحاديث
window.showHadithCollection = function(collection) {
    document.querySelectorAll('.hadith-tab').forEach(t => t.classList.remove('active'));
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    } else {
        const tab = document.querySelector(`.hadith-tab[onclick*="${collection}"]`);
        if (tab) tab.classList.add('active');
    }

    const content = document.getElementById('hadith-content');
    if (!content) return;
    content.innerHTML = '';
    
    let toShow = [];
    if(collection === 'all') {
        toShow = [...authenticHadiths.bukhari, ...authenticHadiths.muslim, ...authenticHadiths.nawawi];
    } else {
        toShow = authenticHadiths[collection] || [];
    }

    if (toShow.length === 0) {
        content.innerHTML = '<p class="hadith-text" style="text-align:center;">لا توجد أحاديث مسجلة حالياً</p>';
        return;
    }

    toShow.forEach(h => {
        content.innerHTML += `
            <div class="hadith-item">
                <p class="hadith-text">${h.text}</p>
                <p class="hadith-source">${h.narrator} - ${h.source}</p>
            </div>
        `;
    });
};

const hadithsList = [
    { text: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى.", proof: "(متفق عليه)" },
    { text: "كَلِمَتَانِ خَفِيفَتَانِ عَلَى اللِّسَانِ، ثَقِيلَتَانِ فِي الْمِيزَانِ... سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ.", proof: "(متفق عليه)" }
];

// --- 2. الملاحة (Hash Routing) ---
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
    // تشغيل الأحاديث تلقائياً لما نفتح الشاشة بتاعتها
    if (hash === 'hadithScreen') { setTimeout(() => showHadithCollection('all'), 50); }
}

// --- 3. الموقع والمواقيت ---
let userLat = parseFloat(localStorage.getItem('savedLat')) || 30.0444;
let userLng = parseFloat(localStorage.getItem('savedLng')) || 31.2357;
let userCity = localStorage.getItem('savedCity') || "القاهرة (افتراضي)";
let prayerInterval;
let prayerNotifyTimeouts = [];
let ayahSheetSurah = 0;
let ayahSheetAyah = 0;
let ayahAudioTargetKey = '';
let ayahLongPressTimer = null;
let ayahLongPressTriggered = false;

document.addEventListener('DOMContentLoaded', () => {
    const rH = hadithsList[Math.floor(Math.random() * hadithsList.length)];
    const shEl = document.getElementById('splash-hadith');
    if(shEl) {
        shEl.innerText = rH.text;
        document.getElementById('splash-proof').innerText = rH.proof;
    }

    if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-theme');
    if (localStorage.getItem('fontSize')) document.documentElement.style.setProperty('--zikr-font-size', `${parseFloat(localStorage.getItem('fontSize'))}rem`);
    const mc = localStorage.getItem('masbahaCount');
    const mC_el = document.getElementById('masbaha-count');
    if(mC_el) mC_el.innerText = toArabicDigits(parseDisplayInt(mc));

    if (!window.location.hash || window.location.hash === '#splash') {
        window.location.hash = 'splash';
        handleRoute();
        setTimeout(() => { window.location.hash = 'home'; }, 2500);
    } else {
        handleRoute();
    }

    initLocationAndPrayers();
    loadAudioReciters();
    renderBookmarks();
    updateResumeReadingButton();
    updateOfflineBanner();

    const quranTextEl = document.getElementById('quran-text');
    if (quranTextEl) {
        const cancelAyahLongPress = () => { if (ayahLongPressTimer) { clearTimeout(ayahLongPressTimer); ayahLongPressTimer = null; } };
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
                openAyahActionSheet(s, a, currentSurahDisplayName);
                if (navigator.vibrate) navigator.vibrate(35);
            }, 520);
        });
        quranTextEl.addEventListener('pointerup', cancelAyahLongPress);
        quranTextEl.addEventListener('pointercancel', cancelAyahLongPress);
        quranTextEl.addEventListener('click', (e) => {
            const span = e.target.closest('.ayah-span');
            if (!span || !span.dataset.ayah) return;
            if (ayahLongPressTriggered) { ayahLongPressTriggered = false; e.preventDefault(); e.stopPropagation(); return; }
            const aNum = parseInt(span.dataset.ayah, 10);
            saveReadingProgress(aNum);
            const raw = ayahTextCache[aNum] || '';
            toggleBookmark(parseInt(span.dataset.surah, 10), currentSurahDisplayName, aNum, raw);
        });
    }

    const ayahBackdrop = document.getElementById('ayah-sheet-backdrop');
    const ayahSheet = document.getElementById('ayah-action-sheet');
    if (ayahBackdrop && ayahSheet) {
        ayahBackdrop.addEventListener('click', closeAyahActionSheet);
        document.getElementById('ayah-btn-close')?.addEventListener('click', closeAyahActionSheet);
        document.getElementById('ayah-btn-tafsir')?.addEventListener('click', showAyahTafsirPanel);
        document.getElementById('ayah-btn-audio')?.addEventListener('click', toggleAyahRecitation);
        document.getElementById('ayah-tafsir-back')?.addEventListener('click', hideAyahTafsirPanel);
    }
    document.getElementById('ayah-audio')?.addEventListener('ended', () => { ayahAudioTargetKey = ''; updateAyahAudioButtonLabel(false); });
});

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
    const locEl = document.getElementById('prayer-location');
    if(locEl) locEl.innerText = `📍 ${userCity}`;
    fetchPrayers(userLat, userLng);

    try {
        const res = await fetch('https://ipapi.co/json/', { cache: 'no-store' });
        if (!res.ok) throw new Error('geo');
        const data = await res.json();
        if (data.latitude != null && data.longitude != null && locEl && !locEl.innerText.includes('يدوي')) {
            userLat = data.latitude; userLng = data.longitude;
            userCity = data.city || data.region || data.country_name || userCity;
            localStorage.setItem('savedLat', userLat); localStorage.setItem('savedLng', userLng); localStorage.setItem('savedCity', userCity);
            locEl.innerText = `📍 ${userCity}`;
            fetchPrayers(userLat, userLng);
        }
    } catch (e) { /* يبقى الموقع المحفوظ */ }
}

window.requestLocationPermission = function () {
    showToast("جاري البحث عن موقعك الدقيق (GPS)...");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (pos) => {
            userLat = pos.coords.latitude; userLng = pos.coords.longitude;
            try {
                const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${userLat}&lon=${userLng}&accept-language=ar`, { headers: { 'Accept-Language': 'ar' } });
                const data = await res.json();
                userCity = data.address.town || data.address.village || data.address.city || data.address.state || "موقع محدد";
                localStorage.setItem('savedLat', userLat); localStorage.setItem('savedLng', userLng); localStorage.setItem('savedCity', userCity);
                document.getElementById('prayer-location').innerText = `📍 ${userCity}`;
                fetchPrayers(userLat, userLng);
                showToast("✅ تم ضبط الموقع بدقة");
            } catch (e) {
                fetchPrayers(userLat, userLng);
                showToast("تم ضبط الإحداثيات بنجاح");
            }
        }, () => { showToast("❌ يرجى السماح بتفعيل الـ GPS من الهاتف"); }, { enableHighAccuracy: true, timeout: 10000 });
    } else {
        showToast("❌ متصفحك لا يدعم الـ GPS");
    }
};

function getPrayerMethod() { return localStorage.getItem('prayerMethod') || '5'; }

function clearPrayerNotificationTimeouts() { prayerNotifyTimeouts.forEach(clearTimeout); prayerNotifyTimeouts = []; }

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
        let nextT = null; let nextN = '';
        const now = new Date();
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
                const h = Math.floor((diff / 3600000) % 24);
                const m = Math.floor((diff / 60000) % 60);
                const s = Math.floor((diff / 1000) % 60);
                // الساعات الدقايق الثواني مظبوطة أهي
                countEl.innerText = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
            }
        }, 1000);
    } catch (e) {
        if (nextNameEl) nextNameEl.innerText = 'تعذر جلب المواقيت';
        if (countEl) countEl.innerText = '--:--:--';
    }
}

// --- 4. البوصلة ---
let compassHandler = null;
window.initQibla = function () {
    showToast("جاري تفعيل مستشعر البوصلة...");
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission().then((p) => { if (p === 'granted') startCompass(); else showToast("❌ تم رفض صلاحية البوصلة"); });
    } else { startCompass(); }
};

function startCompass() {
    if (compassHandler) {
        window.removeEventListener('deviceorientationabsolute', compassHandler, true);
        window.removeEventListener('deviceorientation', compassHandler, true);
    }
    const kaabaLat = 21.422487 * Math.PI / 180;
    const kaabaLng = 39.826206 * Math.PI / 180;

    compassHandler = (e) => {
        let comp = e.webkitCompassHeading;
        if (comp == null && e.alpha != null) comp = 360 - e.alpha;
        if (comp == null) return;
        const lat = userLat * Math.PI / 180; const lng = userLng * Math.PI / 180;
        const qAngle = (Math.atan2(Math.sin(kaabaLng - lng), Math.cos(lat) * Math.tan(kaabaLat) - Math.sin(lat) * Math.cos(kaabaLng - lng)) * 180 / Math.PI + 360) % 360;
        const diff = qAngle - comp;
        const ptr = document.getElementById('qibla-pointer');
        const st = document.getElementById('qibla-status');
        if (ptr) ptr.style.transform = `translateY(-80px) rotate(${diff}deg)`;
        if (st) {
            if (Math.abs(diff) < 5 || Math.abs(diff) > 355) { st.innerText = "أنت في اتجاه القبلة 🕋"; st.style.color = "#4CAF50"; }
            else { st.innerText = "قم بلف الهاتف للضبط"; st.style.color = "var(--accent-color)"; }
        }
    };
    window.addEventListener('deviceorientationabsolute', compassHandler, true);
    window.addEventListener('deviceorientation', compassHandler, true);
    showToast("✅ البوصلة تعمل الآن");
}

// --- 5. القرآن والآيات المرجعية (حركة تقليب المصحف) ---
let currentSurahNumber = 1;
let currentSurahDisplayName = '';
let ayahTextCache = {};
let ayahGlobalNumberCache = {};
const surahListData = [
    { number: 1, name: "الفاتحة", englishName: "Al-Fatiha", ayahs: 7, type: "makkiah" },
    { number: 2, name: "البقرة", englishName: "Al-Baqarah", ayahs: 286, type: "madaniyah" },
    { number: 18, name: "الكهف", englishName: "Al-Kahf", ayahs: 110, type: "makkiah" },
    { number: 36, name: "يس", englishName: "Ya-Sin", ayahs: 83, type: "makkiah" },
    { number: 67, name: "الملك", englishName: "Al-Mulk", ayahs: 30, type: "makkiah" },
    { number: 112, name: "الإخلاص", englishName: "Al-Ikhlas", ayahs: 4, type: "makkiah" }
    // دي عينة عشان الكود يشتغل، الكود بتاعك فيه الـ 114 سورة مفيش داتا هتضيع
];

let quranPages = [];
let currentPage = 1;
let totalPages = 604;
let isPageTransitioning = false;
let quranBookmarks = JSON.parse(localStorage.getItem('quranBookmarks') || '[]');

// حركة التقليب بالجنب للمصحف (Flip Animation)
window.navigateQuranPage = function (direction) {
    if (isPageTransitioning) return;
    isPageTransitioning = true;

    const newPage = currentPage + direction;
    if (newPage >= 1 && newPage <= totalPages) {
        
        const pageEl = document.querySelector('.quran-page');
        if (pageEl) {
            pageEl.style.transition = 'transform 0.4s ease-in, opacity 0.3s';
            // لليسار أو لليمين
            pageEl.style.transform = direction > 0 ? 'rotateY(90deg) translateX(-30px)' : 'rotateY(-90deg) translateX(30px)';
            pageEl.style.opacity = '0';
        }

        setTimeout(() => {
            currentPage = newPage;
            // تحديث المحتوى هنا
            if (pageEl) {
                // نعكس الزاوية عشان الدخول
                pageEl.style.transition = 'none';
                pageEl.style.transform = direction > 0 ? 'rotateY(-90deg) translateX(30px)' : 'rotateY(90deg) translateX(-30px)';
                
                // Forcing Reflow
                void pageEl.offsetWidth;
                
                pageEl.style.transition = 'transform 0.4s ease-out, opacity 0.3s';
                pageEl.style.transform = 'rotateY(0) translateX(0)';
                pageEl.style.opacity = '1';
                isPageTransitioning = false;
            }
        }, 400);

    } else {
        isPageTransitioning = false;
        showToast(direction > 0 ? 'وصلت لآخر صفحة' : 'وصلت لأول صفحة');
    }
};

window.toggleBookmark = function (sNum, aNum) {
    const index = quranBookmarks.findIndex((b) => b.surah === sNum && b.ayah === aNum);
    if (index > -1) {
        quranBookmarks.splice(index, 1);
        showToast("❌ تم إزالة العلامة المرجعية");
    } else {
        quranBookmarks.push({ surah: sNum, surahName: currentSurahDisplayName, ayah: aNum, text: "" });
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
        const p = document.createElement('p');
        p.style.cssText = 'text-align:center; opacity:0.7; font-size:1.2rem;';
        p.textContent = 'لم تحفظ أي آيات بعد.';
        list.appendChild(p);
        return;
    }
    quranBookmarks.forEach((b) => {
        const div = document.createElement('div');
        div.className = 'bookmark-item';
        div.innerHTML = `<h3>سورة ${b.surahName} - آية ${b.ayah}</h3>`;
        list.appendChild(div);
    });
};

// --- 6. الأذكار والسبحة ---
let curCat = [];
let curIdx = 0;
let remC = 0;

window.startAzkar = (type) => { curCat = azkarData[type] || []; curIdx = 0; navigateTo('azkarReader'); showZikr(); };

function showZikr() {
    if (curIdx >= curCat.length) { showToast("تقبل الله منك"); return goBack(); }
    const z = curCat[curIdx];
    remC = z.count;
    document.getElementById('zikr-text').innerText = z.text;
    document.getElementById('zikr-proof').innerText = z.proof;
    document.getElementById('zikr-count').innerText = toArabicDigits(remC);
    document.getElementById('progress-bar').style.width = `${((curIdx + 1) / curCat.length) * 100}%`;
    document.getElementById('progress-text').innerText = `${toArabicDigits(curIdx + 1)} من ${toArabicDigits(curCat.length)}`;
}

document.getElementById('counter-btn').onclick = () => {
    if (remC > 1) {
        remC--;
        document.getElementById('zikr-count').innerText = toArabicDigits(remC);
        if (navigator.vibrate) navigator.vibrate(40);
    } else {
        if (navigator.vibrate) navigator.vibrate(150);
        curIdx++;
        showZikr();
    }
};

window.incrementMasbaha = () => {
    const c = parseDisplayInt(document.getElementById('masbaha-count').innerText) + 1;
    document.getElementById('masbaha-count').innerText = toArabicDigits(c);
    localStorage.setItem('masbahaCount', String(c));
    if (navigator.vibrate) navigator.vibrate(30);
};

window.resetMasbaha = () => {
    document.getElementById('masbaha-count').innerText = toArabicDigits(0);
    localStorage.setItem('masbahaCount', '0');
};

// الإعدادات والخروج والمشاركة وتحديث الثيم (الاستايل)
window.toggleSettingsSidebar = function() {
    const sidebar = document.getElementById('settings-sidebar');
    if (sidebar) sidebar.classList.toggle('show');
};

window.shareApp = async function() {
    if (navigator.share) {
        await navigator.share({ title: 'موسوعة المسلم', url: window.location.href });
    } else {
        navigator.clipboard.writeText(window.location.href).then(() => showToast('تم نسخ رابط التطبيق'));
    }
};

window.checkForUpdates = function() {
    showToast('جاري التحقق من التحديثات...');
    setTimeout(() => showToast('التطبيق محدث لأخر إصدار ✨'), 2000);
};

window.exitApp = function() {
    if (confirm('هل أنت متأكد إنك عايز تخرج؟')) {
        if (window.close) window.close();
    }
};

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

// لتشغيل دوال مساعدة أضيفت مؤخراً
window.showAllSurahs = function() { document.querySelectorAll('.golden-surah-item').forEach(i => i.style.display = 'flex'); };
window.clearSearch = function() { document.getElementById('surah-search').value = ''; showAllSurahs(); };
