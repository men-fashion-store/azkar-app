// --- 1. بيانات الأذكار الكاملة ---
const ayatAlKursi="أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ\nبِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\n﴿اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ﴾ [البقرة: 255]";
const surahAlIkhlas="﴿قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ﴾";
const surahAlFalaq="﴿قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ﴾";
const surahAnNas="﴿قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ﴾";

const azkarData = {
    morning:[
        {text:ayatAlKursi,count:1,proof:"أُجير من الجن حتى يمسي"},{text:surahAlIkhlas,count:3,proof:"تكفيه من كل شيء"},{text:surahAlFalaq,count:3,proof:"تكفيه من كل شيء"},{text:surahAnNas,count:3,proof:"تكفيه من كل شيء"},
        {text:"أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",count:1,proof:"صحيح مسلم"},
        {text:"اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ.",count:1,proof:"سيد الاستغفار (البخاري)"},
        {text:"يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ أَصْلِحْ لِي شَأْنِي كُلَّهُ وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.",count:1,proof:"صحيح الجامع"},
        {text:"حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.",count:7,proof:"كفاه الله ما أهمه"},
        {text:"سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.",count:100,proof:"حطت خطاياه"}
    ],
    evening:[
        {text:ayatAlKursi,count:1,proof:"أُجير من الجن حتى يصبح"},{text:surahAlIkhlas,count:3,proof:"تكفيه من كل شيء"},{text:surahAlFalaq,count:3,proof:"تكفيه من كل شيء"},{text:surahAnNas,count:3,proof:"تكفيه من كل شيء"},
        {text:"أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",count:1,proof:"صحيح مسلم"},
        {text:"اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ.",count:1,proof:"البخاري"},
        {text:"أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.",count:3,proof:"لم تضره حمة"},
        {text:"حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.",count:7,proof:"كفاه الله ما أهمه"}
    ],
    sleep:[ {text:ayatAlKursi,count:1,proof:"حفظ من الشيطان"},{text:"بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي وَبِكَ أَرْفَعُهُ...",count:1,proof:"متفق عليه"},{text:"اللَّهُ أَكْبَرُ (34) ، سُبْحَانَ اللَّهِ (33) ، الْحَمْدُ لِلَّهِ (33)",count:1,proof:"خير من خادم"} ],
    prayer:[ {text:"أَسْتَغْفِرُ اللَّهَ (ثلاثاً) اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",count:1,proof:"مسلم"},{text:"سُبْحَانَ اللَّهِ (33)، الْحَمْدُ لِلَّهِ (33)، اللَّهُ أَكْبَرُ (33)",count:1,proof:"تمام المائة"} ],
    ruqyah:[ {text:"بِسْمِ اللَّهِ أَرْقِيكَ، مِنْ كُلِّ شَيْءٍ يُؤْذِيكَ، مِنْ شَرِّ كُلِّ نَفْسٍ أَوْ عَيْنِ حَاسِدٍ، اللَّهُ يَشْفِيكَ، بِسْمِ اللَّهِ أَرْقِيكَ.",count:3,proof:"رقية جبريل"},{text:"أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّةِ، مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ، وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ.",count:3,proof:"البخاري"} ]
};

// --- 2. إدارة الملاحة والرجوع (Stack Logic) ---
let navigationStack = ['home'];

window.navigateTo = function(pageId) {
    document.querySelectorAll('.screen').forEach(s => { s.classList.remove('active'); s.classList.add('hidden'); });
    const target = document.getElementById(pageId + '-screen');
    if(target) {
        target.classList.replace('hidden', 'active');
        if(navigationStack[navigationStack.length-1] !== pageId) navigationStack.push(pageId);
    }
};

window.goBack = function() {
    if(navigationStack.length > 1) {
        navigationStack.pop();
        const prevPage = navigationStack[navigationStack.length - 1];
        navigateTo(prevPage);
        navigationStack.pop(); // لإزالة التكرار اللي هيحصل من navigateTo
    }
};

// --- 3. الموقع الجغرافي الدقيق (GPS + Nominatim) ---
window.requestLocationPermission = function() {
    showToast("جاري البحث عن موقعك الدقيق (GPS)...");
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (pos) => {
            const lat = pos.coords.latitude, lng = pos.coords.longitude;
            try {
                // استخدام Nominatim لجلب "القنطرة غرب" بالاسم
                let res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&accept-language=ar`);
                let data = await res.json();
                let city = data.address.town || data.address.village || data.address.city || "موقعك الحالي";
                document.getElementById('prayer-location').innerText = `📍 ${city}`;
                showToast(`تم تحديد موقعك: ${city}`);
                fetchPrayers(lat, lng);
            } catch(e) { fetchPrayers(lat, lng); }
        }, () => showToast("يرجى تفعيل الـ GPS في الموبايل"), {enableHighAccuracy: true});
    }
};

// --- 4. مواقيت الصلاة والعداد ---
let prayerInterval;
async function fetchPrayers(lat, lng) {
    let d = new Date();
    let res = await fetch(`https://api.aladhan.com/v1/timings/${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()}?latitude=${lat}&longitude=${lng}&method=5`);
    let data = await res.json();
    let t = data.data.timings;
    const prayers = [{id:'Fajr',n:'الفجر'},{id:'Sunrise',n:'الشروق'},{id:'Dhuhr',n:'الظهر'},{id:'Asr',n:'العصر'},{id:'Maghrib',n:'المغرب'},{id:'Isha',n:'العشاء'}];
    
    const list = document.getElementById('prayer-times-list'); list.innerHTML='';
    let nextN='', nextT=null, now = new Date();

    prayers.forEach(p => {
        let [h, m] = t[p.id].split(':');
        let pDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m, 0);
        let h12 = h > 12 ? h-12 : (h==0?12:h);
        let ampm = h >= 12 ? 'م' : 'ص';
        let div = document.createElement('div'); div.className='prayer-item';
        if(pDate > now && !nextT && p.id !== 'Sunrise') { nextN=p.n; nextT=pDate; div.classList.add('active-prayer'); }
        div.innerHTML = `<span>${p.n}</span><span>${h12}:${m} <small>${ampm}</small></span>`;
        list.appendChild(div);
    });

    if(!nextT) { let [h,m]=t.Fajr.split(':'); nextT=new Date(now.getFullYear(),now.getMonth(),now.getDate()+1,h,m,0); nextN='الفجر'; }
    document.getElementById('next-prayer-name').innerText = `الصلاة القادمة: ${nextN}`;
    
    if(prayerInterval) clearInterval(prayerInterval);
    prayerInterval = setInterval(() => {
        let diff = nextT - new Date();
        if(diff <= 0) { clearInterval(prayerInterval); requestLocationPermission(); }
        else {
            let h=Math.floor((diff/3600000)%24), m=Math.floor((diff/60000)%60), s=Math.floor((diff/1000)%60);
            document.getElementById('prayer-countdown').innerText = `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
        }
    }, 1000);
}

// --- 5. القرآن الكريم (قراءة) ---
let surahListCached = [];
async function loadQuranIndex() {
    if(surahListCached.length > 0) return;
    try {
        let res = await fetch('https://api.alquran.cloud/v1/surah');
        let data = await res.json(); surahListCached = data.data;
        const list = document.getElementById('surah-list'); list.innerHTML='';
        const audioSelect = document.getElementById('surah-select-audio'); audioSelect.innerHTML='<option value="">اختر السورة...</option>';
        
        surahListCached.forEach(s => {
            let b = document.createElement('button'); b.className='surah-card-btn';
            b.innerHTML = `<span style="opacity:0.5">${s.number}</span> <span>${s.name}</span>`;
            b.onclick = () => { navigateTo('quranReader'); loadSurahContent(s.number, s.name); };
            list.appendChild(b);
            let opt = document.createElement('option'); opt.value=s.number; opt.innerText=s.name;
            audioSelect.appendChild(opt);
        });
    } catch(e) {}
}

async function loadSurahContent(num, name) {
    document.getElementById('current-surah-name').innerText = name;
    const div = document.getElementById('quran-text'); div.innerHTML="جاري التحميل...";
    try {
        let res = await fetch(`https://api.alquran.cloud/v1/surah/${num}/quran-uthmani`);
        let data = await res.json();
        let html = (num!=1 && num!=9) ? '<div class="basmalah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>' : '';
        data.data.ayahs.forEach(a => {
            let text = (num!=1 && num!=9 && a.numberInSurah==1) ? a.text.replace("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ ","") : a.text;
            html += `${text} <span style="color:var(--accent-color); font-size:0.8em;">﴿${a.numberInSurah}﴾</span> `;
        });
        div.innerHTML = html;
        window.scrollTo(0,0);
    } catch(e) {}
}

// --- 6. المكتبة الصوتية (٢٠٠ شيخ) ---
let allReciters = [];
async function loadAudioReciters() {
    try {
        let res = await fetch('https://mp3quran.net/api/v3/reciters?language=ar');
        let data = await res.json();
        allReciters = [];
        data.reciters.forEach(r => {
            if(r.moshaf) r.moshaf.forEach(m => {
                allReciters.push({ n: `${r.name} (${m.name.replace('حفص عن عاصم','حفص')})`, s: m.server });
            });
        });
        renderReciters(allReciters);
    } catch(e) {}
}

function renderReciters(list) {
    const sel = document.getElementById('reciter-select'); sel.innerHTML='<option value="">اختر القارئ...</option>';
    list.forEach(r => {
        let opt = document.createElement('option'); opt.value=r.s; opt.innerText=r.n;
        sel.appendChild(opt);
    });
}

window.filterReciters = () => {
    let t = document.getElementById('reciter-search').value.toLowerCase();
    renderReciters(allReciters.filter(r => r.n.toLowerCase().includes(t)));
};

window.updateReciter = () => playAudio();
window.updateAudioSurah = () => playAudio();

function playAudio() {
    let server = document.getElementById('reciter-select').value;
    let surah = document.getElementById('surah-select-audio').value;
    if(!server || !surah) return;
    if(!server.endsWith('/')) server += '/';
    const player = document.getElementById('global-quran-audio');
    player.src = `${server}${surah.toString().padStart(3,'0')}.mp3`;
    player.play();
    document.getElementById('now-playing-title').innerText = `🎧 جاري الاستماع لـ: ${document.getElementById('surah-select-audio').options[document.getElementById('surah-select-audio').selectedIndex].text}`;
}

// --- 7. القبلة والسبحة ---
window.incrementMasbaha = () => {
    let c = parseInt(document.getElementById('masbaha-count').innerText) + 1;
    document.getElementById('masbaha-count').innerText = c;
    localStorage.setItem('masbahaCount', c);
    if(navigator.vibrate) navigator.vibrate(c % 33 === 0 ? 100 : 30);
};
window.resetMasbaha = () => { document.getElementById('masbaha-count').innerText = 0; localStorage.setItem('masbahaCount', 0); };

function initQibla() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
            let lat = pos.coords.latitude, lng = pos.coords.longitude;
            let qAngle = (Math.atan2(Math.sin(39.826206*Math.PI/180 - lng*Math.PI/180), Math.cos(lat*Math.PI/180)*Math.tan(21.422487*Math.PI/180) - Math.sin(lat*Math.PI/180)*Math.cos(39.826206*Math.PI/180 - lng*Math.PI/180)) * 180 / Math.PI + 360) % 360;
            window.addEventListener('deviceorientationabsolute', e => {
                let comp = e.webkitCompassHeading || Math.abs(e.alpha - 360);
                if(comp) {
                    let diff = qAngle - comp;
                    document.getElementById('qibla-pointer').style.transform = `translateY(-80px) rotate(${diff}deg)`;
                    document.getElementById('qibla-status').innerText = (Math.abs(diff) < 5 || Math.abs(diff) > 355) ? "أنت في اتجاه القبلة 🕋" : "قم بلف الهاتف";
                }
            }, true);
        });
    }
}

// --- 8. الأذكار (القارئ) ---
let curCat = [], curIdx = 0, remC = 0;
window.startAzkar = (type) => { curCat = azkarData[type]; curIdx = 0; navigateTo('azkarReader'); showZikr(); };
function showZikr() {
    if(curIdx >= curCat.length) return goBack();
    let z = curCat[curIdx]; remC = z.count;
    document.getElementById('zikr-text').innerText = z.text;
    document.getElementById('zikr-proof').innerText = z.proof || "";
    document.getElementById('zikr-count').innerText = remC;
    document.getElementById('progress-bar').style.width = `${((curIdx+1)/curCat.length)*100}%`;
    document.getElementById('zikr-card').classList.add('swipe-in');
    setTimeout(()=>document.getElementById('zikr-card').classList.remove('swipe-in'), 300);
}
document.getElementById('counter-btn').onclick = () => {
    if(remC > 1) { remC--; document.getElementById('zikr-count').innerText = remC; if(navigator.vibrate) navigator.vibrate(40); }
    else { if(navigator.vibrate) navigator.vibrate(200); curIdx++; showZikr(); }
};

// --- التهيئة ---
window.onload = () => {
    if(localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-theme');
    loadQuranIndex(); loadAudioReciters(); requestLocationPermission();
};
window.toggleTheme = () => { document.body.classList.toggle('dark-theme'); localStorage.setItem('theme', document.body.classList.contains('dark-theme')?'dark':'light'); };
window.showToast = (m) => { const t = document.getElementById('toast-msg'); t.innerText=m; t.style.bottom='20px'; setTimeout(()=>t.style.bottom='-100px',3000); };
