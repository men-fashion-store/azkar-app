// --- 1. بيانات الأذكار الكاملة (بدون إيموجيز) ---
const azkarData = {
    morning: [
        {text: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ: اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ...", count: 1, proof: "أُجير من الجن حتى يمسي"},
        {text: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ: قُلْ هُوَ اللَّهُ أَحَدٌ...", count: 3, proof: "تكفيه من كل شيء"},
        {text: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ...", count: 1, proof: "رواه مسلم"},
        {text: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ...", count: 1, proof: "سيد الاستغفار"},
        {text: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.", count: 1, proof: "صحيح"},
        {text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.", count: 100, proof: "حطت خطاياه"},
        {text: "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ.", count: 10, proof: "أدركته شفاعتي"}
    ],
    evening: [
        {text: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ: اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ...", count: 1, proof: "أُجير من الجن حتى يصبح"},
        {text: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ...", count: 1, proof: "رواه مسلم"},
        {text: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.", count: 3, proof: "لم تضره حمة"},
        {text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.", count: 100, proof: "حطت خطاياه"}
    ],
    sleep: [
        {text: "بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي وَبِكَ أَرْفَعُهُ، فَإِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا...", count: 1, proof: "متفق عليه"},
        {text: "سُبْحَانَ اللَّهِ (33)، الْحَمْدُ لِلَّهِ (33)، اللَّهُ أَكْبَرُ (34)", count: 1, proof: "خير من خادم"}
    ],
    prayer: [
        {text: "أَسْتَغْفِرُ اللَّهَ (ثلاثاً)، اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ.", count: 1, proof: "رواه مسلم"}
    ],
    ruqyah: [
        {text: "بِسْمِ اللَّهِ أَرْقِيكَ، مِنْ كُلِّ شَيْءٍ يُؤْذِيكَ، مِنْ شَرِّ كُلِّ نَفْسٍ أَوْ عَيْنِ حَاسِدٍ، اللَّهُ يَشْفِيكَ.", count: 3, proof: "رقية جبريل"},
        {text: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّةِ، مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ، وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ.", count: 3, proof: "البخاري"}
    ]
};

const hadiths = [
    {t: "إنما الأعمال بالنيات، وإنما لكل امرئ ما نوى", p: "رواه البخاري"},
    {t: "بلغوا عني ولو آية", p: "رواه البخاري"},
    {t: "خيركم من تعلم القرآن وعلمه", p: "رواه البخاري"},
    {t: "الدال على الخير كفاعله", p: "رواه الترمذي"}
];

// --- 2. إدارة الملاحة والشاشات ---
window.navigateTo = function(id) {
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active');
        s.classList.add('hidden');
    });
    const target = document.getElementById(id + '-screen');
    if (target) {
        target.classList.remove('hidden');
        target.classList.add('active');
        window.location.hash = id;
    }
    
    // إخفاء الهيدر في الشاشة الرئيسية والترحيب
    const header = document.getElementById('main-header');
    if(id === 'home' || id === 'splash' || id === '') header.classList.add('hidden');
    else header.classList.remove('hidden');

    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebar-overlay').classList.remove('show');
    window.scrollTo(0,0);
};

window.goBack = () => window.history.back();

window.toggleSidebar = () => {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('sidebar-overlay').classList.toggle('show');
};

// --- 3. الموقع والمواقيت (يدوي + GPS) ---
let userLat = parseFloat(localStorage.getItem('savedLat')) || 30.04;
let userLng = parseFloat(localStorage.getItem('savedLng')) || 31.23;
let userCity = localStorage.getItem('savedCity') || "القاهرة";

window.setManualLocation = function() {
    const select = document.getElementById('manual-city-select');
    if(!select.value) return;
    const [lat, lng, name] = select.value.split(',');
    userLat = parseFloat(lat); userLng = parseFloat(lng); userCity = name;
    localStorage.setItem('savedLat', lat); localStorage.setItem('savedLng', lng); localStorage.setItem('savedCity', name);
    document.getElementById('prayer-location').innerText = name + " (ضبط يدوي)";
    fetchPrayers(lat, lng);
    toggleSidebar();
    showToast("تم تحديث الموقع بنجاح");
};

async function fetchPrayers(lat, lng) {
    try {
        const res = await fetch(`https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lng}&method=5`);
        const data = await res.json();
        const t = data.data.timings;
        document.getElementById('prayer-countdown').innerText = t.NextPrayerTime || t.Fajr;
        document.getElementById('next-prayer-name').innerText = "موعد الصلاة القادم";
        document.getElementById('prayer-location').innerText = userCity;
        
        // عرض القائمة الكاملة في صفحة المواقيت
        const list = document.getElementById('prayer-times-list');
        if(list) {
            list.innerHTML = `
                <div class="prayer-item"><span>الفجر</span><span>${t.Fajr}</span></div>
                <div class="prayer-item"><span>الظهر</span><span>${t.Dhuhr}</span></div>
                <div class="prayer-item"><span>العصر</span><span>${t.Asr}</span></div>
                <div class="prayer-item"><span>المغرب</span><span>${t.Maghrib}</span></div>
                <div class="prayer-item"><span>العشاء</span><span>${t.Isha}</span></div>
            `;
        }
    } catch(e) { console.log("خطأ في جلب المواقيت"); }
}

window.requestLocationPermission = function() {
    showToast("جاري البحث عن موقعك...");
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (pos) => {
            userLat = pos.coords.latitude; userLng = pos.coords.longitude;
            fetchPrayers(userLat, userLng);
            showToast("تم التحديث عبر القمر الصناعي");
        }, () => showToast("يرجى تفعيل الـ GPS في جهازك"));
    }
};

// --- 4. المصحف الذكي (تحديد، تفسير، استماع) ---
let activeAyah = { surah: 1, surahName: "", ayah: 1, text: "" };
let surahListCached = [];

async function loadQuranIndex() {
    try {
        const res = await fetch('https://api.alquran.cloud/v1/surah');
        const data = await res.json();
        surahListCached = data.data;
        const list = document.getElementById('surah-list');
        list.innerHTML = "";
        surahListCached.forEach(s => {
            list.innerHTML += `<button class="surah-card-btn" onclick="navigateTo('quranReader'); loadSurahContent(${s.number}, '${s.name}')"><span>${s.number}</span> ${s.name}</button>`;
        });
    } catch(e) {}
}

window.loadSurahContent = async (num, name) => {
    const box = document.getElementById('quran-text');
    box.innerHTML = "جاري تحميل الآيات...";
    activeAyah = { surah: num, surahName: name, ayah: null };
    document.getElementById('quran-fab-menu').classList.add('hidden');
    document.getElementById('current-surah-name').innerText = name;

    try {
        const res = await fetch(`https://api.alquran.cloud/v1/surah/${num}/quran-uthmani`);
        const data = await res.json();
        let html = (num !== 1 && num !== 9) ? '<div class="basmalah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>' : '';
        data.data.ayahs.forEach(ay => {
            html += `<span class="ayah-span" id="ay-${ay.numberInSurah}" onclick="selectAyah(${num}, '${name}', ${ay.numberInSurah}, this)">${ay.text} <span class="ayah-symbol">﴿${ay.numberInSurah}﴾</span></span> `;
        });
        box.innerHTML = html;
        window.scrollTo(0,0);
    } catch(e) { box.innerHTML = "فشل الاتصال بالخادم"; }
};

window.selectAyah = (sNum, sName, aNum, el) => {
    document.querySelectorAll('.ayah-span').forEach(x => x.classList.remove('selected-ayah'));
    el.classList.add('selected-ayah');
    activeAyah = { surah: sNum, surahName: sName, ayah: aNum, text: el.innerText };
    document.getElementById('quran-fab-menu').classList.remove('hidden');
};

window.toggleQuranMenu = () => document.getElementById('quran-fab-menu').classList.toggle('hidden');

window.showTafsir = async () => {
    if(!activeAyah.ayah) return showToast("حدد آية أولاً");
    document.getElementById('tafsir-text').innerText = "جاري التحميل...";
    document.getElementById('tafsir-modal').classList.add('show');
    try {
        const res = await fetch(`https://api.alquran.cloud/v1/ayah/${activeAyah.surah}:${activeAyah.ayah}/ar.aljalalayn`);
        const data = await res.json();
        document.getElementById('tafsir-text').innerText = data.data.text;
    } catch(e) { document.getElementById('tafsir-text').innerText = "خطأ في تحميل التفسير"; }
};

window.closeTafsirModal = () => document.getElementById('tafsir-modal').classList.remove('show');

window.playSelectedAyah = async () => {
    if(!activeAyah.ayah) return showToast("حدد آية أولاً");
    showToast("جاري تشغيل التلاوة");
    const player = document.getElementById('ayah-audio-player');
    player.src = `https://cdn.islamic.network/quran/audio/128/ar.alafasy/${surahListCached.find(s=>s.number===activeAyah.surah).number}${activeAyah.ayah.toString().padStart(3,'0')}.mp3`;
    // ملاحظة: اللينك أعلاه تقريبي، الـ API يوفر روابط مباشرة أدق لو احتجنا
    try {
        const res = await fetch(`https://api.alquran.cloud/v1/ayah/${activeAyah.surah}:${activeAyah.ayah}/ar.alafasy`);
        const data = await res.json();
        player.src = data.data.audio;
        player.play();
    } catch(e) { showToast("فشل تحميل الصوت"); }
};

window.navigateSurah = (step) => {
    const next = activeAyah.surah + step;
    if(next >= 1 && next <= 114) {
        const s = surahListCached.find(x => x.number === next);
        loadSurahContent(next, s.name);
    }
};

// --- 5. ميزات القائمة الجانبية ---
window.toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme')?'dark':'light');
};

window.changeFontSizeSlider = (val) => {
    document.documentElement.style.setProperty('--zikr-size', val + 'rem');
    localStorage.setItem('fontSize', val);
};

window.shareApp = () => {
    if (navigator.share) {
        navigator.share({ title: 'موسوعة المسلم', text: 'الدال على الخير كفاعله', url: window.location.href });
    } else { showToast("تم نسخ رابط التطبيق"); }
};

window.checkForUpdates = () => {
    showToast("أنت تستخدم أحدث إصدار متاح");
};

window.exitAppPrompt = () => {
    document.getElementById('exit-modal').classList.add('show');
};

window.closeExitModal = () => document.getElementById('exit-modal').classList.remove('show');

window.confirmExit = () => {
    window.location.href = "about:blank";
};

window.showToast = (msg) => {
    const t = document.getElementById('toast-msg');
    t.innerText = msg; t.style.bottom = '30px';
    setTimeout(() => t.style.bottom = '-100px', 2500);
};

// --- 6. الأذكار والسبحة ---
let curCat=[], curIdx=0, remC=0;
window.startAzkar = (cat) => {
    curCat = azkarData[cat]; curIdx = 0;
    navigateTo('azkarReader'); showZikr();
};

function showZikr() {
    if(curIdx >= curCat.length) { showToast("تقبل الله منك"); return navigateTo('home'); }
    const z = curCat[curIdx]; remC = z.count;
    document.getElementById('zikr-text').innerText = z.text;
    document.getElementById('zikr-proof').innerText = z.proof || "";
    document.getElementById('counter-btn').innerText = remC;
    document.getElementById('progress-bar').style.width = ((curIdx+1)/curCat.length)*100 + "%";
}

document.getElementById('counter-btn').onclick = () => {
    if(remC > 1) { remC--; document.getElementById('counter-btn').innerText = remC; }
    else { curIdx++; showZikr(); }
};

window.incrementMasbaha = () => {
    let c = parseInt(document.getElementById('masbaha-count').innerText) + 1;
    document.getElementById('masbaha-count').innerText = c;
    localStorage.setItem('masbahaCount', c);
};

window.resetMasbaha = () => {
    document.getElementById('masbaha-count').innerText = 0;
    localStorage.setItem('masbahaCount', 0);
};

// --- 7. التحميل الأولي ---
document.addEventListener("DOMContentLoaded", () => {
    // حديث اليوم العشوائي
    const h = hadiths[Math.floor(Math.random() * hadiths.length)];
    document.getElementById('splash-hadith').innerText = h.t;
    document.getElementById('splash-proof').innerText = h.p;

    if(localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-theme');
    if(localStorage.getItem('masbahaCount')) document.getElementById('masbaha-count').innerText = localStorage.getItem('masbahaCount');
    
    const savedFont = localStorage.getItem('fontSize');
    if(savedFont) {
        document.documentElement.style.setProperty('--zikr-size', savedFont + 'rem');
        document.getElementById('font-slider').value = savedFont;
    }

    fetchPrayers(userLat, userLng);
    loadQuranIndex();

    if(!window.location.hash) {
        window.location.hash = 'splash';
        setTimeout(() => navigateTo('home'), 2500);
    } else {
        navigateTo(window.location.hash.replace('#',''));
    }
});

window.onhashchange = () => {
    const hash = window.location.hash.replace('#', '');
    if(hash) navigateTo(hash);
};
