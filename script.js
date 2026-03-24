// --- 1. بيانات الأذكار ---
const ayatAlKursi="أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ\nبِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\n﴿اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ﴾ [البقرة: 255]";
const surahAlIkhlas="بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\n﴿قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ﴾";
const surahAlFalaq="بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\n﴿قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ﴾";
const surahAnNas="بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\n﴿قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ﴾";

const azkarData = {
    morning:[{text:ayatAlKursi,count:1,proof:"أُجير من الجن حتى يمسي"},{text:surahAlIkhlas,count:3,proof:"تكفيه من كل شيء"},{text:surahAlFalaq,count:3,proof:"تكفيه من كل شيء"},{text:surahAnNas,count:3,proof:"تكفيه من كل شيء"},{text:"أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ...",count:1,proof:"صحيح مسلم"},{text:"سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.",count:100,proof:"حطت خطاياه وإن كانت مثل زبد البحر"}],
    evening:[{text:ayatAlKursi,count:1,proof:"أُجير من الجن حتى يصبح"},{text:surahAlIkhlas,count:3,proof:"تكفيه من كل شيء"},{text:surahAlFalaq,count:3,proof:"تكفيه من كل شيء"},{text:surahAnNas,count:3,proof:"تكفيه من كل شيء"},{text:"أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ...",count:1,proof:"صحيح مسلم"},{text:"سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.",count:100,proof:"حطت خطاياه وإن كانت مثل زبد البحر"}],
    sleep:[{text:ayatAlKursi,count:1,proof:"حفظ من الشيطان"},{text:"بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي وَبِكَ أَرْفَعُهُ...",count:1,proof:"متفق عليه"}],
    prayer:[{text:"أَسْتَغْفِرُ اللَّهَ (ثلاثاً) اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ...",count:1,proof:"صحيح مسلم"},{text:"سُبْحَانَ اللَّهِ (33)، الْحَمْدُ لِلَّهِ (33)، اللَّهُ أَكْبَرُ (33)",count:1,proof:"صحيح مسلم"}],
    ruqyah:[{text:"بِسْمِ اللَّهِ أَرْقِيكَ، مِنْ كُلِّ شَيْءٍ يُؤْذِيكَ...",count:3,proof:"صحيح مسلم"},{text:"أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّةِ، مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ...",count:3,proof:"صحيح البخاري"}]
};

const hadithsList = [
    {text:"إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى.",proof:"(متفق عليه)"},
    {text:"كَلِمَتَانِ خَفِيفَتَانِ عَلَى اللِّسَانِ، ثَقِيلَتَانِ فِي الْمِيزَانِ... سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ.",proof:"(متفق عليه)"},
    {text:"مَنْ صَلَّى عَلَيَّ صَلَاةً صَلَّى اللَّهُ عَلَيْهِ بِهَا عَشْرًا.",proof:"(رواه مسلم)"}
];

// --- 2. الإشعارات والتهيئة الأولية ---
window.showToast = (msg) => {
    const t = document.getElementById('toast-msg');
    if(!t) return;
    t.innerText = msg; t.style.bottom = '20px';
    setTimeout(() => { t.style.bottom = '-100px'; }, 3000);
};

document.addEventListener("DOMContentLoaded", () => {
    // تحميل الحديث فوراً
    const rH = hadithsList[Math.floor(Math.random() * hadithsList.length)];
    document.getElementById('splash-hadith').innerText = rH.text;
    document.getElementById('splash-proof').innerText = rH.proof;
    
    // استرجاع الإعدادات
    if(localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-theme');
    if(localStorage.getItem('fontSize')) {
        document.documentElement.style.setProperty('--zikr-font-size', `${parseFloat(localStorage.getItem('fontSize'))}rem`);
    }
    if(localStorage.getItem('masbahaCount')) {
        document.getElementById('masbaha-count').innerText = localStorage.getItem('masbahaCount');
    }
    
    // تحميل المواقيت والصوتيات في الخلفية
    setTimeout(() => { calculatePrayerTimes(); loadAudioReciters(); }, 1000);
});

// --- 3. نظام التنقل البسيط والقوي (لا يعلق أبداً) ---
let navigationHistory = ['home'];

window.navigateTo = function(targetScreen) {
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active');
        s.classList.add('hidden');
    });
    const target = document.getElementById(targetScreen + '-screen');
    if(target) {
        target.classList.replace('hidden', 'active');
        if(navigationHistory[navigationHistory.length - 1] !== targetScreen) {
            navigationHistory.push(targetScreen);
        }
        window.scrollTo(0, 0);
    }
};

window.goBack = function() {
    if(navigationHistory.length > 1) {
        navigationHistory.pop();
        const prevPage = navigationHistory[navigationHistory.length - 1];
        document.querySelectorAll('.screen').forEach(s => {
            s.classList.remove('active');
            s.classList.add('hidden');
        });
        const target = document.getElementById(prevPage + '-screen');
        if(target) target.classList.replace('hidden', 'active');
    } else {
        navigateTo('home');
    }
};

window.toggleTheme = () => { document.body.classList.toggle('dark-theme'); localStorage.setItem('theme', document.body.classList.contains('dark-theme')?'dark':'light'); };
window.changeFontSize = (step) => { let c = parseFloat(localStorage.getItem('fontSize') || 1.6); c = Math.max(1.2, Math.min(4.0, c + step * 0.25)); document.documentElement.style.setProperty('--zikr-font-size', `${c}rem`); localStorage.setItem('fontSize', c); };

// --- 4. الموقع الجغرافي والمواقيت (بدون تقطيع) ---
window.requestLocationPermission = function() {
    showToast("جاري تحديث الموقع بدقة عالية...");
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (pos) => {
            let lat = pos.coords.latitude, lng = pos.coords.longitude;
            try {
                let res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&accept-language=ar`);
                let data = await res.json();
                let city = data.address.town || data.address.village || data.address.city || "تم التحديث بنجاح";
                document.getElementById('prayer-location').innerText = `📍 ${city}`;
                fetchPrayers(lat, lng);
                showToast("تم تحديث الموقع!");
            } catch(e) { fetchPrayers(lat, lng); }
        }, () => showToast("يرجى إعطاء صلاحية الموقع للتطبيق من إعدادات الهاتف"), {enableHighAccuracy: true});
    } else {
        showToast("جهازك لا يدعم تحديد الموقع");
    }
};

let prayerInterval;
async function calculatePrayerTimes() {
    try {
        let res = await fetch('https://ipapi.co/json/');
        let data = await res.json();
        if(document.getElementById('prayer-location').innerText.includes("جاري")) {
            document.getElementById('prayer-location').innerText = `📍 ${data.city}`;
        }
        fetchPrayers(data.latitude, data.longitude);
    } catch(e) { document.getElementById('prayer-location').innerText = "📍 يعمل بدون إنترنت"; }
}

async function fetchPrayers(lat, lng) {
    let d = new Date();
    let res = await fetch(`https://api.aladhan.com/v1/timings/${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()}?latitude=${lat}&longitude=${lng}&method=5`);
    let data = await res.json(); let t = data.data.timings;
    const list = document.getElementById('prayer-times-list'); if(list) list.innerHTML='';
    let nextT=null, nextN='', now=new Date();
    
    [{id:'Fajr',n:'الفجر'},{id:'Sunrise',n:'الشروق'},{id:'Dhuhr',n:'الظهر'},{id:'Asr',n:'العصر'},{id:'Maghrib',n:'المغرب'},{id:'Isha',n:'العشاء'}].forEach(p => {
        let [h, m] = t[p.id].split(':');
        let pDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m, 0);
        let h12 = h>12?h-12:(h==0?12:h), ampm = h>=12?'م':'ص';
        if(pDate > now && !nextT && p.id !== 'Sunrise') { nextT = pDate; nextN = p.n; }
        if(list) list.innerHTML += `<div class="prayer-item ${nextN===p.n?'active-prayer':''}"><span>${p.n}</span><span>${h12}:${m} <small>${ampm}</small></span></div>`;
    });
    
    if(!nextT) { nextT = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, t.Fajr.split(':')[0], t.Fajr.split(':')[1], 0); nextN = 'الفجر'; }
    document.getElementById('next-prayer-name').innerText = `الصلاة القادمة: ${nextN}`;
    
    if(prayerInterval) clearInterval(prayerInterval);
    prayerInterval = setInterval(() => {
        let diff = nextT - new Date();
        if(diff<=0) { clearInterval(prayerInterval); calculatePrayerTimes(); }
        else {
            let h=Math.floor((diff/3600000)%24), m=Math.floor((diff/60000)%60), s=Math.floor((diff/1000)%60);
            document.getElementById('prayer-countdown').innerText = `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
        }
    }, 1000);
}

// --- 5. الأذكار (القارئ والعداد) ---
let curCat=[], curIdx=0, remC=0;
window.startAzkar = (type) => { curCat = azkarData[type]; curIdx = 0; navigateTo('azkarReader'); showZikr(); };

function showZikr() {
    if(curIdx >= curCat.length) { showToast("تقبل الله منك"); return goBack(); }
    let z = curCat[curIdx]; remC = z.count;
    document.getElementById('zikr-text').innerText = z.text;
    document.getElementById('zikr-proof').innerText = z.proof;
    document.getElementById('zikr-count').innerText = remC;
    document.getElementById('progress-bar').style.width = `${((curIdx+1)/curCat.length)*100}%`;
    document.getElementById('progress-text').innerText = `${curIdx + 1} من ${curCat.length}`;
    
    const card = document.getElementById('zikr-card');
    card.classList.remove('swipe-out-right', 'swipe-out-left');
    card.classList.add('swipe-in');
    setTimeout(()=> card.classList.remove('swipe-in'), 300);
}

document.getElementById('counter-btn').onclick = () => {
    if(remC > 1) { 
        remC--; document.getElementById('zikr-count').innerText = remC; 
        if(navigator.vibrate) navigator.vibrate(40); 
    } else { 
        if(navigator.vibrate) navigator.vibrate(150); 
        document.getElementById('zikr-card').classList.add('swipe-out-right');
        setTimeout(() => { curIdx++; showZikr(); }, 300);
    }
};

// --- 6. السبحة والقبلة ---
window.incrementMasbaha = () => { 
    let c = parseInt(document.getElementById('masbaha-count').innerText) + 1; 
    document.getElementById('masbaha-count').innerText = c; 
    localStorage.setItem('masbahaCount', c);
    if(navigator.vibrate) navigator.vibrate(30); 
};
window.resetMasbaha = () => { document.getElementById('masbaha-count').innerText = 0; localStorage.setItem('masbahaCount', 0); };

// --- 7. فهرس المصحف (القراءة) ---
let surahListCached=[];
async function loadQuranIndex() {
    if(surahListCached.length>0) return;
    try {
        let res = await fetch('https://api.alquran.cloud/v1/surah'); let data = await res.json(); surahListCached = data.data;
        const list = document.getElementById('surah-list'); list.innerHTML='';
        const audioSel = document.getElementById('surah-select-audio'); if(audioSel) audioSel.innerHTML='<option value="">اختر السورة...</option>';
        surahListCached.forEach(s => {
            // التصميم الطولي للفهرس
            list.innerHTML += `<button class="surah-card-btn" onclick="navigateTo('quranReader'); loadSurahContent(${s.number}, '${s.name}')"><span class="surah-number">${s.number}</span> <span>${s.name}</span></button>`;
            if(audioSel) audioSel.innerHTML += `<option value="${s.number}">${s.name}</option>`;
        });
    } catch(e) { showToast("حدث خطأ في تحميل السور"); }
}

window.loadSurahContent = async (num, name) => {
    document.getElementById('current-surah-name').innerText = name;
    document.getElementById('quran-text').innerHTML="جاري التحميل...";
    try {
        let res = await fetch(`https://api.alquran.cloud/v1/surah/${num}/quran-uthmani`); let data = await res.json();
        let html = (num!=1&&num!=9)?'<div class="basmalah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>':'';
        data.data.ayahs.forEach(a => html += `${(num!=1&&num!=9&&a.numberInSurah==1)?a.text.replace("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ ",""):a.text} <span class="ayah-symbol">﴿${a.numberInSurah}﴾</span> `);
        document.getElementById('quran-text').innerHTML = html;
        window.scrollTo(0,0);
    } catch(e) { document.getElementById('quran-text').innerHTML = "تحقق من اتصالك بالإنترنت"; }
};

// --- 8. الصوتيات (المكتبة) ---
let allAudioReciters = [];
async function loadAudioReciters() {
    try {
        let res = await fetch('https://mp3quran.net/api/v3/reciters?language=ar'); let data = await res.json();
        const sel = document.getElementById('reciter-select'); if(!sel) return;
        sel.innerHTML='<option value="">اختر القارئ...</option>';
        data.reciters.forEach(r => { 
            if(r.moshaf) {
                r.moshaf.forEach(m => {
                    let name = `${r.name} (${m.name.replace('حفص عن عاصم','حفص')})`;
                    allAudioReciters.push({ n: name, s: m.server });
                    sel.innerHTML += `<option value="${m.server}">${name}</option>`;
                });
            }
        });
    } catch(e){}
    loadQuranIndex(); // تحميل فهرس السور للدروب داون
}

window.filterReciters = () => {
    let t = document.getElementById('reciter-search').value.toLowerCase();
    const sel = document.getElementById('reciter-select'); sel.innerHTML='<option value="">اختر القارئ...</option>';
    allAudioReciters.filter(r => r.n.toLowerCase().includes(t)).forEach(r => {
        sel.innerHTML += `<option value="${r.s}">${r.n}</option>`;
    });
};

window.updateReciter = () => updateAudioSurah();
window.updateAudioSurah = () => {
    let server = document.getElementById('reciter-select').value;
    let surah = document.getElementById('surah-select-audio').value;
    if(!server || !surah) return;
    
    let surahName = document.getElementById('surah-select-audio').options[document.getElementById('surah-select-audio').selectedIndex].text;
    document.getElementById('now-playing-title').innerText = `🎧 سورة ${surahName}`;
    
    document.getElementById('global-quran-audio').src = `${server.endsWith('/')?server:server+'/'}${surah.padStart(3,'0')}.mp3`;
    document.getElementById('global-quran-audio').play();
};
