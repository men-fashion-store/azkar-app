// --- 1. بيانات الأذكار والأحاديث (النسخة الكاملة) ---
const ayatAlKursi="أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ\nبِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\n﴿اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ﴾ [البقرة: 255]";
const surahAlIkhlas="بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\n﴿قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ﴾";
const surahAlFalaq="بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\n﴿قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ﴾";
const surahAnNas="بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\n﴿قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ﴾";

const azkarData = {
    morning:[
        {text:ayatAlKursi,count:1,proof:"الدليل: أُجير من الجن حتى يمسي"},{text:surahAlIkhlas,count:3,proof:"الدليل: تكفيه من كل شيء"},{text:surahAlFalaq,count:3,proof:"الدليل: تكفيه من كل شيء"},{text:surahAnNas,count:3,proof:"الدليل: تكفيه من كل شيء"},
        {text:"أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ...",count:1,proof:"الدليل: صحيح مسلم"},
        {text:"أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ...",count:1,proof:"الدليل: حديث حسن"},
        {text:"اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ.",count:1,proof:"الدليل: حديث صحيح"},
        {text:"اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ...",count:1,proof:"الدليل: سيد الاستغفار (البخاري)"},
        {text:"اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ...",count:1,proof:"الدليل: حديث صحيح"},
        {text:"اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ...",count:1,proof:"الدليل: حديث صحيح"},
        {text:"اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ...",count:3,proof:"الدليل: حديث حسن"},
        {text:"اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ...",count:3,proof:"الدليل: صحيح البخاري"},
        {text:"يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ...",count:1,proof:"الدليل: حديث صحيح"},
        {text:"حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.",count:7,proof:"الدليل: كفاه الله ما أهمه"},
        {text:"رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا.",count:3,proof:"الدليل: كان حقاً على الله أن يرضيه"},
        {text:"بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ، وَهُوَ السَّمِيعُ الْعَلِيمُ.",count:3,proof:"الدليل: لم يضره شيء"},
        {text:"يَا رَبِّ، لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ، وَلِعَظِيمِ سُلْطَانِكَ.",count:3,proof:"الدليل: حديث حسن"},
        {text:"اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.",count:3,proof:"الدليل: حديث صحيح"},
        {text:"أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ، الْحَيَّ الْقَيُّومَ، وَأَتُوبُ إِلَيْهِ.",count:3,proof:"الدليل: حديث صحيح"},
        {text:"أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ.",count:100,proof:"الدليل: متفق عليه"},
        {text:"سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.",count:100,proof:"الدليل: حطت خطاياه"},
        {text:"لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",count:100,proof:"الدليل: كانت له عدل عشر رقاب"},
        {text:"اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى نَبِيِّنَا مُحَمَّدٍ.",count:10,proof:"الدليل: أدركته شفاعتي"}
    ],
    evening:[
        {text:ayatAlKursi,count:1,proof:"الدليل: أُجير من الجن حتى يصبح"},{text:surahAlIkhlas,count:3,proof:"الدليل: تكفيه من كل شيء"},{text:surahAlFalaq,count:3,proof:"الدليل: تكفيه من كل شيء"},{text:surahAnNas,count:3,proof:"الدليل: تكفيه من كل شيء"},
        {text:"أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ...",count:1,proof:"الدليل: صحيح مسلم"},
        {text:"أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذِهِ اللَّيْلَةِ...",count:1,proof:"الدليل: حديث حسن"},
        {text:"اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ.",count:1,proof:"الدليل: حديث صحيح"},
        {text:"اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ...",count:1,proof:"الدليل: سيد الاستغفار (البخاري)"},
        {text:"اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ...",count:1,proof:"الدليل: حديث صحيح"},
        {text:"اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ...",count:1,proof:"الدليل: حديث صحيح"},
        {text:"اللَّهُمَّ عَافِنِي فِي بَدَنِي...",count:3,proof:"الدليل: حديث حسن"},
        {text:"اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ...",count:3,proof:"الدليل: صحيح البخاري"},
        {text:"يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ...",count:1,proof:"الدليل: حديث صحيح"},
        {text:"حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.",count:7,proof:"الدليل: كفاه الله ما أهمه"},
        {text:"رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا.",count:3,proof:"الدليل: كان حقاً على الله أن يرضيه"},
        {text:"بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ، وَهُوَ السَّمِيعُ الْعَلِيمُ.",count:3,proof:"الدليل: لم يضره شيء"},
        {text:"أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.",count:3,proof:"الدليل: لم تضره حمة"},
        {text:"يَا رَبِّ، لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ، وَلِعَظِيمِ سُلْطَانِكَ.",count:3,proof:"الدليل: حديث حسن"},
        {text:"اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.",count:3,proof:"الدليل: حديث صحيح"},
        {text:"أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ، الْحَيَّ الْقَيُّومَ، وَأَتُوبُ إِلَيْهِ.",count:3,proof:"الدليل: حديث صحيح"},
        {text:"أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ.",count:100,proof:"الدليل: متفق عليه"},
        {text:"سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.",count:100,proof:"الدليل: حطت خطاياه"},
        {text:"لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",count:100,proof:"الدليل: كانت له عدل عشر رقاب"},
        {text:"اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى نَبِيِّنَا مُحَمَّدٍ.",count:10,proof:"الدليل: أدركته شفاعتي"}
    ],
    sleep:[
        {text:ayatAlKursi,count:1,proof:"الدليل: حفظ من الشيطان"},{text:surahAlIkhlas,count:3,proof:"الدليل: سنة"},{text:surahAlFalaq,count:3,proof:"الدليل: سنة"},{text:surahAnNas,count:3,proof:"الدليل: سنة"},
        {text:"بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي وَبِكَ أَرْفَعُهُ، فَإِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ.",count:1,proof:"الدليل: متفق عليه"},
        {text:"اللَّهُمَّ إِنَّكَ خَلَقْتَ نَفْسِي وَأَنْتَ تَوَفَّاهَا، لَكَ مَمَاتُهَا وَمَحْيَاهَا...",count:1,proof:"الدليل: صحيح مسلم"},
        {text:"اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ.",count:3,proof:"الدليل: رواه أبو داود"},
        {text:"بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا.",count:1,proof:"الدليل: صحيح البخاري"},
        {text:"سُبْحَانَ اللَّهِ (33)، الْحَمْدُ لِلَّهِ (33)، اللَّهُ أَكْبَرُ (34)",count:1,proof:"الدليل: خير لكم من خادم"}
    ],
    prayer:[
        {text:"أَسْتَغْفِرُ اللَّهَ. (ثلاثاً)\nاللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ.",count:1,proof:"الدليل: صحيح مسلم"},
        {text:"لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ...",count:1,proof:"الدليل: متفق عليه"},
        {text:ayatAlKursi,count:1,proof:"الدليل: لم يمنعه من دخول الجنة إلا الموت"},{text:surahAlIkhlas,count:1,proof:"الدليل: سنة"},{text:surahAlFalaq,count:1,proof:"الدليل: سنة"},{text:surahAnNas,count:1,proof:"الدليل: سنة"},
        {text:"سُبْحَانَ اللَّهِ (33)، الْحَمْدُ لِلَّهِ (33)، اللَّهُ أَكْبَرُ (33)",count:1,proof:"الدليل: صحيح مسلم"},
        {text:"لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",count:1,proof:"الدليل: تمام المائة"}
    ],
    ruqyah:[
        {text:"بِسْمِ اللَّهِ أَرْقِيكَ، مِنْ كُلِّ شَيْءٍ يُؤْذِيكَ، مِنْ شَرِّ كُلِّ نَفْسٍ أَوْ عَيْنِ حَاسِدٍ، اللَّهُ يَشْفِيكَ، بِسْمِ اللَّهِ أَرْقِيكَ.",count:3,proof:"الدليل: رقية جبريل"},
        {text:"أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّةِ، مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ، وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ.",count:3,proof:"الدليل: البخاري"},
        {text:"بِسْمِ اللَّهِ (ثلاثاً)\nأَعُوذُ بِاللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ (سبعاً).",count:1,proof:"الدليل: توضع اليد على موضع الألم"},
        {text:ayatAlKursi,count:1,proof:"آية الكرسي"},{text:surahAlIkhlas,count:3,proof:"سورة الإخلاص"},{text:surahAlFalaq,count:3,proof:"سورة الفلق"},{text:surahAnNas,count:3,proof:"سورة الناس"}
    ]
};

const hadithsList = [
    {text:"إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى.",proof:"(متفق عليه)"},
    {text:"كَلِمَتَانِ خَفِيفَتَانِ عَلَى اللِّسَانِ، ثَقِيلَتَانِ فِي الْمِيزَانِ... سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ.",proof:"(متفق عليه)"},
    {text:"مَنْ صَلَّى عَلَيَّ صَلَاةً صَلَّى اللَّهُ عَلَيْهِ بِهَا عَشْرًا.",proof:"(رواه مسلم)"}
];

window.showToast = (msg) => {
    const t = document.getElementById('toast-msg'); if(!t) return;
    t.innerText = msg; t.style.bottom = '20px'; setTimeout(() => { t.style.bottom = '-100px'; }, 3000);
};

// --- 2. إدارة الشاشات والملاحة ---
window.navigateTo = function(targetScreen) { window.location.hash = targetScreen; };
window.goBack = function() { window.history.back(); };
window.addEventListener('hashchange', handleRoute);

function handleRoute() {
    let hash = window.location.hash.replace('#', '') || 'home';
    
    // إظهار وإخفاء الهيدر الثابت
    if(hash === 'home' || hash === 'splash') {
        document.getElementById('main-header').classList.add('hidden');
    } else {
        document.getElementById('main-header').classList.remove('hidden');
    }

    document.querySelectorAll('.screen').forEach(s => { s.classList.remove('active'); s.classList.add('hidden'); });
    const target = document.getElementById(hash + '-screen') || document.getElementById('home-screen');
    if(target) { target.classList.replace('hidden', 'active'); window.scrollTo(0, 0); }
}

// --- 3. القائمة الجانبية والمظهر (UI) ---
window.toggleSidebar = function() {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('sidebar-overlay').classList.toggle('show');
};

window.toggleTheme = () => { 
    document.body.classList.toggle('dark-theme'); 
    localStorage.setItem('theme', document.body.classList.contains('dark-theme')?'dark':'light'); 
    toggleSidebar();
};

window.changeFontSizeSlider = (val) => {
    document.documentElement.style.setProperty('--zikr-font-size', `${val}rem`);
    localStorage.setItem('fontSize', val);
};

window.toggleQuranMenu = function() {
    document.getElementById('quran-fab-menu').classList.toggle('hidden');
};

// --- 4. المشاركة، التحديث، والخروج ---
window.shareApp = function() {
    toggleSidebar();
    if (navigator.share) {
        navigator.share({
            title: 'موسوعة المسلم',
            text: 'الدال على الخير كفاعله 🤍\nحمل تطبيق موسوعة المسلم (قرآن، أذكار، مواقيت، قبلة) بدون إعلانات:',
            url: window.location.href
        }).catch(console.error);
    } else {
        navigator.clipboard.writeText(window.location.href);
        showToast("تم نسخ الرابط لمشاركته مع أصدقائك!");
    }
};

window.checkForUpdates = function() {
    toggleSidebar();
    showToast("جاري البحث عن تحديثات...");
    setTimeout(() => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.getRegistrations().then(regs => {
                if(regs.length > 0) {
                    regs[0].update();
                    showToast("أنت على أحدث إصدار متاح ✅");
                } else {
                    showToast("أنت تستخدم النسخة المباشرة");
                }
            });
        }
    }, 1500);
};

// دالة الخروج من التطبيق بالضغط مرتين (للموبايل)
let lastBackPress = 0;
window.addEventListener('popstate', function(e) {
    let hash = window.location.hash;
    if(hash === '' || hash === '#home') {
        let now = new Date().getTime();
        if(now - lastBackPress < 2000) {
            confirmExit();
        } else {
            lastBackPress = now;
            showToast("اضغط رجوع مرة أخرى للخروج");
            window.history.pushState(null, null, '#home');
        }
    }
});

window.exitAppPrompt = function() {
    document.getElementById('exit-modal').classList.remove('hidden');
    document.getElementById('exit-modal').classList.add('show');
    toggleSidebar();
};
window.closeExitModal = function() {
    document.getElementById('exit-modal').classList.remove('show');
    setTimeout(() => document.getElementById('exit-modal').classList.add('hidden'), 300);
};
window.confirmExit = function() {
    window.close(); // PWA / Browser
    if(navigator.app){ navigator.app.exitApp(); } // Cordova/PhoneGap
    else if(navigator.device){ navigator.device.exitApp(); }
    else { window.location.href = "about:blank"; } // Fallback
};

// --- 5. الموقع والمواقيت (التحديد اليدوي) ---
let userLat = parseFloat(localStorage.getItem('savedLat')) || 30.0444;
let userLng = parseFloat(localStorage.getItem('savedLng')) || 31.2357;
let userCity = localStorage.getItem('savedCity') || "القاهرة (افتراضي)";
let prayerInterval;

window.setManualLocation = function() {
    let val = document.getElementById('manual-city-select').value;
    if(!val) return; 
    let [lat, lng, cityName] = val.split(',');
    userLat = parseFloat(lat); userLng = parseFloat(lng); userCity = cityName;
    localStorage.setItem('savedLat', userLat); localStorage.setItem('savedLng', userLng); localStorage.setItem('savedCity', userCity);
    document.getElementById('prayer-location').innerText = `📍 ${userCity} (ضبط يدوي)`;
    fetchPrayers(userLat, userLng);
    showToast(`✅ تم ضبط الموقع على ${userCity} بنجاح`);
    document.getElementById('manual-city-select').value = "";
    toggleSidebar();
};

async function initLocationAndPrayers() {
    document.getElementById('prayer-location').innerText = `📍 ${userCity}`;
    fetchPrayers(userLat, userLng);
    try {
        let res = await fetch('http://ip-api.com/json/?lang=ar');
        let data = await res.json();
        if(data.status === "success" && !document.getElementById('prayer-location').innerText.includes("يدوي")) {
            userLat = data.lat; userLng = data.lon; userCity = data.city;
            localStorage.setItem('savedLat', userLat); localStorage.setItem('savedLng', userLng); localStorage.setItem('savedCity', userCity);
            document.getElementById('prayer-location').innerText = `📍 ${userCity}`;
            fetchPrayers(userLat, userLng);
        }
    } catch(e) { console.log("استخدام الموقع المحفوظ"); }
}

window.requestLocationPermission = function() {
    showToast("جاري البحث عن موقعك الدقيق...");
    toggleSidebar();
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (pos) => {
            userLat = pos.coords.latitude; userLng = pos.coords.longitude;
            try {
                let res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${userLat}&lon=${userLng}&accept-language=ar`);
                let data = await res.json();
                userCity = data.address.town || data.address.village || data.address.city || "تم التحديد الدقيق";
                localStorage.setItem('savedLat', userLat); localStorage.setItem('savedLng', userLng); localStorage.setItem('savedCity', userCity);
                document.getElementById('prayer-location').innerText = `📍 ${userCity}`;
                fetchPrayers(userLat, userLng);
                showToast("✅ تم ضبط الموقع بدقة");
            } catch(e) { fetchPrayers(userLat, userLng); }
        }, () => { showToast("❌ يرجى تفعيل الـ GPS من الهاتف"); }, {enableHighAccuracy: true, timeout: 10000});
    }
};

async function fetchPrayers(lat, lng) {
    let d = new Date();
    try {
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
            if(diff<=0) { clearInterval(prayerInterval); fetchPrayers(userLat, userLng); }
            else {
                let h=Math.floor((diff/3600000)%24), m=Math.floor((diff/60000)%60), s=Math.floor((diff/1000)%60);
                document.getElementById('prayer-countdown').innerText = `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
            }
        }, 1000);
    } catch(e) {}
}

// --- 6. البوصلة ---
window.initQibla = function() {
    showToast("جاري تفعيل مستشعر البوصلة...");
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission().then(p => { if (p === 'granted') startCompass(); else showToast("❌ تم رفض صلاحية البوصلة"); }).catch(console.error);
    } else { startCompass(); }
};
function startCompass() {
    window.addEventListener('deviceorientationabsolute', e => {
        let comp = e.webkitCompassHeading || Math.abs(e.alpha - 360);
        let qAngle = (Math.atan2(Math.sin(39.826206*Math.PI/180 - userLng*Math.PI/180), Math.cos(userLat*Math.PI/180)*Math.tan(21.422487*Math.PI/180) - Math.sin(userLat*Math.PI/180)*Math.cos(39.826206*Math.PI/180 - userLng*Math.PI/180)) * 180 / Math.PI + 360) % 360;
        if(comp) {
            let diff = qAngle - comp;
            document.getElementById('qibla-pointer').style.transform = `translateY(-80px) rotate(${diff}deg)`;
            let st = document.getElementById('qibla-status');
            if(Math.abs(diff) < 5 || Math.abs(diff) > 355){ st.innerText="أنت في اتجاه القبلة 🕋"; st.style.color="#4CAF50"; }
            else { st.innerText="قم بلف الهاتف للضبط"; st.style.color="var(--accent-color)"; }
        }
    }, true);
    showToast("✅ البوصلة تعمل الآن");
}

// --- 7. القرآن والآيات المرجعية ---
let surahListCached = [];
let currentSurahNumber = 1;
let quranBookmarks = JSON.parse(localStorage.getItem('quranBookmarks')) || [];

async function loadQuranIndex() {
    if(surahListCached.length>0) return;
    try {
        let res = await fetch('https://api.alquran.cloud/v1/surah'); let data = await res.json(); surahListCached = data.data;
        const list = document.getElementById('surah-list'); list.innerHTML='';
        const audioSel = document.getElementById('surah-select-audio'); if(audioSel) audioSel.innerHTML='<option value="">اختر السورة...</option>';
        surahListCached.forEach(s => {
            list.innerHTML += `<button class="surah-card-btn" onclick="navigateTo('quranReader'); loadSurahContent(${s.number}, '${s.name}')"><span class="surah-number">${s.number}</span> <span>${s.name}</span></button>`;
            if(audioSel) audioSel.innerHTML += `<option value="${s.number}">${s.name}</option>`;
        });
    } catch(e) {}
}

window.loadSurahContent = async (num, name, scrollToAyah = null) => {
    currentSurahNumber = num;
    document.getElementById('current-surah-name').innerText = name;
    document.getElementById('quran-text').innerHTML="جاري التحميل...";
    document.getElementById('quran-fab-menu').classList.add('hidden'); // إخفاء القائمة المنسدلة للزر الشفاف

    try {
        let res = await fetch(`https://api.alquran.cloud/v1/surah/${num}/quran-uthmani`); let data = await res.json();
        let html = (num!=1&&num!=9)?'<div class="basmalah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>':'';
        
        data.data.ayahs.forEach(a => {
            let text = (num!=1&&num!=9&&a.numberInSurah==1)?a.text.replace("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ ",""):a.text;
            let isMarked = quranBookmarks.some(b => b.surah === num && b.ayah === a.numberInSurah);
            let markClass = isMarked ? "bookmarked-ayah" : "";
            html += `<span class="ayah-span ${markClass}" id="ayah-${a.numberInSurah}" onclick="toggleBookmark(${num}, '${name}', ${a.numberInSurah}, '${text}')">${text} <span class="ayah-symbol">﴿${a.numberInSurah}﴾</span></span> `;
        });
        
        document.getElementById('quran-text').innerHTML = html;
        
        if(scrollToAyah) {
            setTimeout(() => {
                let el = document.getElementById(`ayah-${scrollToAyah}`);
                if(el) { el.scrollIntoView({behavior: "smooth", block: "center"}); el.style.backgroundColor = "rgba(221, 167, 123, 0.4)"; }
            }, 500);
        } else { window.scrollTo(0,0); }
        
    } catch(e) { document.getElementById('quran-text').innerHTML = "تحقق من اتصالك بالإنترنت"; }
};

window.navigateSurah = function(step) {
    document.getElementById('quran-fab-menu').classList.add('hidden');
    let newNum = currentSurahNumber + step;
    if(newNum >= 1 && newNum <= 114) {
        let newSurah = surahListCached.find(s => s.number === newNum);
        if(newSurah) loadSurahContent(newNum, newSurah.name);
    } else { showToast("لا يوجد سور أخرى"); }
};

window.toggleBookmark = function(sNum, sName, aNum, text) {
    let index = quranBookmarks.findIndex(b => b.surah === sNum && b.ayah === aNum);
    if(index > -1) {
        quranBookmarks.splice(index, 1);
        document.getElementById(`ayah-${aNum}`).classList.remove('bookmarked-ayah');
        showToast("❌ تم إزالة العلامة المرجعية");
    } else {
        quranBookmarks.push({surah: sNum, surahName: sName, ayah: aNum, text: text});
        document.getElementById(`ayah-${aNum}`).classList.add('bookmarked-ayah');
        showToast("🔖 تم حفظ الآية");
    }
    localStorage.setItem('quranBookmarks', JSON.stringify(quranBookmarks));
    renderBookmarks();
};

window.renderBookmarks = function() {
    let list = document.getElementById('bookmarks-list'); if(!list) return;
    if(quranBookmarks.length === 0) { list.innerHTML = "<p style='text-align:center; opacity:0.7; font-size:1.2rem;'>لم تحفظ أي آيات بعد.</p>"; return; }
    list.innerHTML = '';
    quranBookmarks.forEach(b => {
        list.innerHTML += `
        <div class="bookmark-item">
            <h3>سورة ${b.surahName} - آية ${b.ayah}</h3>
            <p>${b.text} ﴿${b.ayah}﴾</p>
            <div class="actions">
                <button class="btn" style="padding: 8px 15px; font-size: 1rem; flex: 1;" onclick="navigateTo('quranReader'); loadSurahContent(${b.surah}, '${b.surahName}', ${b.ayah})">📖 الذهاب</button>
                <button class="btn" style="padding: 8px 15px; font-size: 1rem; width: auto; background: transparent; color: #ff4d4d; border-color: #ff4d4d;" onclick="toggleBookmark(${b.surah}, '${b.surahName}', ${b.ayah}, '')">❌ حذف</button>
            </div>
        </div>`;
    });
};

// --- 8. الأذكار والسبحة ---
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
}
document.getElementById('counter-btn').onclick = () => {
    if(remC > 1) { remC--; document.getElementById('zikr-count').innerText = remC; if(navigator.vibrate) navigator.vibrate(40); }
    else { if(navigator.vibrate) navigator.vibrate(150); curIdx++; showZikr(); }
};

window.incrementMasbaha = () => { let c = parseInt(document.getElementById('masbaha-count').innerText) + 1; document.getElementById('masbaha-count').innerText = c; localStorage.setItem('masbahaCount', c); if(navigator.vibrate) navigator.vibrate(30); };
window.resetMasbaha = () => { document.getElementById('masbaha-count').innerText = 0; localStorage.setItem('masbahaCount', 0); };

// --- 9. الصوتيات ---
let allAudioReciters = [];
async function loadAudioReciters() {
    try {
        let res = await fetch('https://mp3quran.net/api/v3/reciters?language=ar'); let data = await res.json();
        const sel = document.getElementById('reciter-select'); if(!sel) return;
        data.reciters.forEach(r => { if(r.moshaf) r.moshaf.forEach(m => { let name = `${r.name} (${m.name.replace('حفص عن عاصم','حفص')})`; allAudioReciters.push({ n: name, s: m.server }); sel.innerHTML += `<option value="${m.server}">${name}</option>`; }); });
    } catch(e){} loadQuranIndex(); 
}
window.filterReciters = () => { let t = document.getElementById('reciter-search').value.toLowerCase(); const sel = document.getElementById('reciter-select'); sel.innerHTML='<option value="">اختر القارئ...</option>'; allAudioReciters.filter(r => r.n.toLowerCase().includes(t)).forEach(r => { sel.innerHTML += `<option value="${r.s}">${r.n}</option>`; }); };
window.updateReciter = () => updateAudioSurah();
window.updateAudioSurah = () => { let server = document.getElementById('reciter-select').value, surah = document.getElementById('surah-select-audio').value; if(!server || !surah) return; let surahName = document.getElementById('surah-select-audio').options[document.getElementById('surah-select-audio').selectedIndex].text; document.getElementById('now-playing-title').innerText = `🎧 سورة ${surahName}`; document.getElementById('global-quran-audio').src = `${server.endsWith('/')?server:server+'/'}${surah.padStart(3,'0')}.mp3`; document.getElementById('global-quran-audio').play(); };

// --- 10. التحميل الأولي (DOMContentLoaded) ---
document.addEventListener("DOMContentLoaded", () => {
    const rH = hadithsList[Math.floor(Math.random() * hadithsList.length)];
    document.getElementById('splash-hadith').innerText = rH.text;
    document.getElementById('splash-proof').innerText = rH.proof;
    
    if(localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-theme');
    
    // استرجاع حجم الخط من الذاكرة وضبط شريط السحب عليه
    let savedFont = localStorage.getItem('fontSize');
    if(savedFont) {
        document.documentElement.style.setProperty('--zikr-font-size', `${parseFloat(savedFont)}rem`);
        let slider = document.getElementById('font-slider');
        if(slider) slider.value = savedFont;
    }
    
    if(localStorage.getItem('masbahaCount')) document.getElementById('masbaha-count').innerText = localStorage.getItem('masbahaCount');

    if(!window.location.hash || window.location.hash === '#splash') {
        window.location.hash = 'splash'; setTimeout(() => { window.location.hash = 'home'; }, 2500); 
    } else { handleRoute(); }
    
    initLocationAndPrayers();
    loadAudioReciters();
    renderBookmarks(); 
});
