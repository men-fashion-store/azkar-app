// ثوابت القرآن للأذكار
const ayatAlKursi = "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ\nبِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\n﴿اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ﴾ [البقرة: 255]";
const surahAlIkhlas = "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\n﴿قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ﴾";
const surahAlFalaq = "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\n﴿قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ﴾";
const surahAnNas = "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\n﴿قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ﴾";

const azkarData = {
    morning: [
        { text: ayatAlKursi, count: 1, proof: "الدليل: أُجير من الجن حتى يمسي." },
        { text: surahAlIkhlas, count: 3, proof: "الدليل: تكفيه من كل شيء." },
        { text: surahAlFalaq, count: 3, proof: "الدليل: تكفيه من كل شيء." },
        { text: surahAnNas, count: 3, proof: "الدليل: تكفيه من كل شيء." },
        { text: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ، وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ، وَعَذَابٍ فِي الْقَبْرِ.", count: 1, proof: "الدليل: صحيح مسلم." },
        { text: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ: فَتْحَهُ، وَنَصْرَهُ، وَنُورَهُ، وَبَرَكَتَهُ، وَهُدَاهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهِ وَشَرِّ مَا بَعْدَهُ.", count: 1, proof: "الدليل: حديث حسن." },
        { text: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ.", count: 1, proof: "الدليل: حديث صحيح." },
        { text: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي؛ فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ.", count: 1, proof: "الدليل: سيد الاستغفار. (رواه البخاري)." },
        { text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي وَعَنْ يَمِينِي وَعَنْ شِمَالِي وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي.", count: 1, proof: "الدليل: حديث صحيح." },
        { text: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ، وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَهَ إِلَّا أَنْتَ.", count: 3, proof: "الدليل: حديث حسن." },
        { text: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.", count: 1, proof: "الدليل: حديث صحيح." },
        { text: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.", count: 7, proof: "الدليل: كفاه الله ما أهمه." },
        { text: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ، وَهُوَ السَّمِيعُ الْعَلِيمُ.", count: 3, proof: "الدليل: لم يضره شيء." },
        { text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.", count: 100, proof: "الدليل: حطت خطاياه." },
        { text: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ.", count: 100, proof: "الدليل: صحيح البخاري ومسلم." }
    ],
    evening: [
        { text: ayatAlKursi, count: 1, proof: "الدليل: أُجير من الجن حتى يصبح." },
        { text: surahAlIkhlas, count: 3, proof: "الدليل: تكفيه من كل شيء." },
        { text: surahAlFalaq, count: 3, proof: "الدليل: تكفيه من كل شيء." },
        { text: surahAnNas, count: 3, proof: "الدليل: تكفيه من كل شيء." },
        { text: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا...", count: 1, proof: "الدليل: صحيح مسلم." },
        { text: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذِهِ اللَّيْلَةِ: فَتْحَهَا، وَنَصْرَهَا، وَنُورَهَا، وَبَرَكَتَهَا، وَهُدَاهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهَا وَشَرِّ مَا بَعْدَهَا.", count: 1, proof: "الدليل: حديث حسن." },
        { text: "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ.", count: 1, proof: "الدليل: حديث صحيح." },
        { text: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ... (سيد الاستغفار)", count: 1, proof: "الدليل: سيد الاستغفار. (رواه البخاري)." },
        { text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ...", count: 1, proof: "الدليل: حديث صحيح." },
        { text: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي...", count: 3, proof: "الدليل: حديث حسن." },
        { text: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.", count: 1, proof: "الدليل: حديث صحيح." },
        { text: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.", count: 7, proof: "الدليل: كفاه الله ما أهمه." },
        { text: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ، وَهُوَ السَّمِيعُ الْعَلِيمُ.", count: 3, proof: "الدليل: لم يضره شيء." },
        { text: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.", count: 3, proof: "الدليل: لم تضره حمة تلك الليلة." },
        { text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.", count: 100, proof: "الدليل: حطت خطاياه وإن كانت مثل زبد البحر." },
        { text: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ.", count: 100, proof: "الدليل: صحيح البخاري ومسلم." }
    ],
    sleep: [
        { text: ayatAlKursi, count: 1, proof: "الدليل: لا يزال عليك من الله حافظ، ولا يقربك شيطان حتى تصبح. (صحيح البخاري)." },
        { text: surahAlIkhlas, count: 3, proof: "الدليل: كان النبي ﷺ يقرأها وينفث في يديه ويمسح بها جسده. (متفق عليه)." },
        { text: surahAlFalaq, count: 3, proof: "الدليل: كان النبي ﷺ يقرأها وينفث في يديه ويمسح بها جسده." },
        { text: surahAnNas, count: 3, proof: "الدليل: كان النبي ﷺ يقرأها وينفث في يديه ويمسح بها جسده." },
        { text: "بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي، وَبِكَ أَرْفَعُهُ، فَإِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ.", count: 1, proof: "الدليل: متفق عليه." },
        { text: "اللَّهُمَّ إِنَّكَ خَلَقْتَ نَفْسِي وَأَنْتَ تَوَفَّاهَا، لَكَ مَمَاتُهَا وَمَحْيَاهَا، إِنْ أَحْيَيْتَهَا فَاحْفَظْهَا، وَإِنْ أَمَتَّهَا فَاغْفِرْ لَهَا، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ.", count: 1, proof: "الدليل: صحيح مسلم." },
        { text: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا.", count: 1, proof: "الدليل: صحيح البخاري." },
        { text: "سُبْحَانَ اللَّهِ.", count: 33, proof: "الدليل: خير لكم من خادم. (متفق عليه)." },
        { text: "الْحَمْدُ لِلَّهِ.", count: 33, proof: "الدليل: خير لكم من خادم. (متفق عليه)." },
        { text: "اللَّهُ أَكْبَرُ.", count: 34, proof: "الدليل: خير لكم من خادم. (متفق عليه)." }
    ],
    prayer: [
        { text: "أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ.\nاللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ.", count: 1, proof: "الدليل: كان رسول الله ﷺ إذا انصرف من صلاته استغفر ثلاثاً... (صحيح مسلم)." },
        { text: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ، وَلَا مُعْطِيَ لِمَا مَنَعْتَ، وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ.", count: 1, proof: "الدليل: متفق عليه." },
        { text: ayatAlKursi, count: 1, proof: "الدليل: من قرأها دبر كل صلاة مكتوبة لم يمنعه من دخول الجنة إلا أن يموت. (صححه الألباني)." },
        { text: surahAlIkhlas, count: 1, proof: "الدليل: تقرأ دبر كل صلاة. (صحيح أبي داود)." },
        { text: surahAlFalaq, count: 1, proof: "الدليل: تقرأ دبر كل صلاة." },
        { text: surahAnNas, count: 1, proof: "الدليل: تقرأ دبر كل صلاة." },
        { text: "سُبْحَانَ اللَّهِ.", count: 33, proof: "الدليل: من سبح الله دبر كل صلاة... غفرت خطاياه. (صحيح مسلم)." },
        { text: "الْحَمْدُ لِلَّهِ.", count: 33, proof: "الدليل: غفرت خطاياه وإن كانت مثل زبد البحر. (صحيح مسلم)." },
        { text: "اللَّهُ أَكْبَرُ.", count: 33, proof: "الدليل: غفرت خطاياه وإن كانت مثل زبد البحر. (صحيح مسلم)." },
        { text: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.", count: 1, proof: "الدليل: تمام المائة، من قالها غفرت خطاياه. (صحيح مسلم)." }
    ]
};

const hadithsList = [
    { text: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى.", proof: "(متفق عليه)" },
    { text: "كَلِمَتَانِ خَفِيفَتَانِ عَلَى اللِّسَانِ، ثَقِيلَتَانِ فِي الْمِيزَانِ... سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ.", proof: "(متفق عليه)" },
    { text: "مَنْ صَلَّى عَلَيَّ صَلَاةً صَلَّى اللَّهُ عَلَيْهِ بِهَا عَشْرًا.", proof: "(رواه مسلم)" },
    { text: "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ.", proof: "(متفق عليه)" }
];

let currentCategory = [], currentIndex = 0, currentRemainingCount = 0, originalCount = 0, currentFontSize = 1.6;
let surahListCached = [], currentSurahNumber = null;

const splashScreen = document.getElementById('splash-screen');
const homeScreen = document.getElementById('home-screen');
const azkarScreen = document.getElementById('azkar-screen');
const quranIndexScreen = document.getElementById('quran-index-screen');
const quranReaderScreen = document.getElementById('quran-reader-screen');
const quranAudio = document.getElementById('quran-audio');
const reciterSelect = document.getElementById('reciter-select');

window.onload = () => {
    if(localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-theme');
    const savedSize = localStorage.getItem('fontSize');
    if(savedSize) {
        currentFontSize = parseFloat(savedSize);
        document.documentElement.style.setProperty('--zikr-font-size', `${currentFontSize}rem`);
    }
    const randomH = hadithsList[Math.floor(Math.random() * hadithsList.length)];
    document.getElementById('splash-hadith').innerText = randomH.text;
    document.getElementById('splash-proof').innerText = randomH.proof;
    loadAllReciters();
};

window.hideSplash = function() {
    splashScreen.classList.remove('active'); splashScreen.classList.add('hidden');
    homeScreen.classList.remove('hidden'); homeScreen.classList.add('active');
};

window.toggleTheme = function() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
};

window.changeFontSize = function(step) {
    if (step > 0 && currentFontSize < 4.0) currentFontSize += 0.25;
    if (step < 0 && currentFontSize > 1.2) currentFontSize -= 0.25;
    document.documentElement.style.setProperty('--zikr-font-size', `${currentFontSize}rem`);
    localStorage.setItem('fontSize', currentFontSize);
};

// جلب القراء من الإذاعة الإسلامية
async function loadAllReciters() {
    try {
        const res = await fetch('https://mp3quran.net/api/v3/reciters?language=ar');
        const data = await res.json();
        reciterSelect.innerHTML = ''; 
        data.reciters.forEach(reciter => {
            if(reciter.moshaf && reciter.moshaf.length > 0) {
                const server = reciter.moshaf[0].server;
                const option = document.createElement('option');
                option.value = server;
                let moshafName = reciter.moshaf[0].name;
                option.innerText = reciter.name + (moshafName.includes('حفص') ? '' : ` (${moshafName})`);
                if(server.includes('afs')) option.selected = true; // العفاسي افتراضي
                reciterSelect.appendChild(option);
            }
        });
    } catch(e) {
        reciterSelect.innerHTML = '<option value="https://server8.mp3quran.net/afs/">الشيخ مشاري العفاسي</option>';
    }
}

// نظام الأذكار
window.startAzkar = function(type) {
    currentCategory = azkarData[type]; currentIndex = 0;
    homeScreen.classList.remove('active'); homeScreen.classList.add('hidden');
    azkarScreen.classList.remove('hidden'); azkarScreen.classList.add('active');
    loadZikr();
};

function loadZikr() {
    if (currentIndex >= currentCategory.length) { goHome(); return; }
    const zikr = currentCategory[currentIndex];
    currentRemainingCount = originalCount = zikr.count;
    
    document.getElementById('zikr-text').innerText = zikr.text;
    document.getElementById('zikr-proof').innerText = zikr.proof;
    document.getElementById('zikr-count').innerText = currentRemainingCount;
    
    document.getElementById('progress-bar').style.width = `${((currentIndex + 1) / currentCategory.length) * 100}%`;
    document.getElementById('progress-text').innerText = `${currentIndex + 1} من ${currentCategory.length}`;
    
    document.getElementById('zikr-card').className = "paper-card swipe-in";
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => document.getElementById('zikr-card').classList.remove('swipe-in'), 300);
}

document.getElementById('counter-btn').addEventListener('click', (e) => {
    e.stopPropagation(); 
    if (currentRemainingCount > 1) {
        currentRemainingCount--; document.getElementById('zikr-count').innerText = currentRemainingCount;
        if (navigator.vibrate) navigator.vibrate((originalCount > 50 && (originalCount - currentRemainingCount) % 33 === 0) ? [100,50,100] : 40);
    } else {
        if (navigator.vibrate) navigator.vibrate(200); 
        if (currentIndex >= currentCategory.length - 1) goHome();
        else { document.getElementById('zikr-card').classList.add('swipe-out-right'); setTimeout(() => { currentIndex++; loadZikr(); }, 300); }
    }
});

let startX = 0;
azkarScreen.addEventListener('touchstart', e => startX = e.changedTouches[0].screenX, {passive:true});
azkarScreen.addEventListener('touchend', e => {
    let diff = e.changedTouches[0].screenX - startX;
    if(diff > 50 && currentIndex < currentCategory.length - 1) { document.getElementById('zikr-card').classList.add('swipe-out-right'); setTimeout(() => { currentIndex++; loadZikr(); }, 300); }
    else if(diff < -50 && currentIndex > 0) { document.getElementById('zikr-card').classList.add('swipe-out-left'); setTimeout(() => { currentIndex--; loadZikr(); }, 300); }
});

// نظام القرآن
window.openQuranIndex = async function() {
    homeScreen.classList.remove('active'); homeScreen.classList.add('hidden');
    quranIndexScreen.classList.remove('hidden'); quranIndexScreen.classList.add('active');
    
    const listDiv = document.getElementById('surah-list');
    if (surahListCached.length === 0) {
        listDiv.innerHTML = '<p style="text-align:center; width:100%; grid-column: 1 / -1;">جاري تحميل الفهرس...</p>';
        try {
            const res = await fetch('https://api.alquran.cloud/v1/surah');
            const data = await res.json();
            surahListCached = data.data; renderSurahList();
        } catch(e) { listDiv.innerHTML = '<p style="text-align:center; width:100%; grid-column: 1 / -1;">يرجى الاتصال بالإنترنت.</p>'; }
    } else { renderSurahList(); }
};

function renderSurahList() {
    const listDiv = document.getElementById('surah-list'); listDiv.innerHTML = '';
    surahListCached.forEach(surah => {
        const btn = document.createElement('button'); btn.className = 'surah-card-btn';
        btn.innerHTML = `<span class="surah-number">${surah.number}</span> <span>${surah.name}</span>`;
        btn.onclick = () => loadSurah(surah.number, surah.name);
        listDiv.appendChild(btn);
    });
}

function padZero(num) { return num.toString().padStart(3, '0'); }

window.loadSurah = async function(number, name) {
    quranIndexScreen.classList.remove('active'); quranIndexScreen.classList.add('hidden');
    quranReaderScreen.classList.remove('hidden'); quranReaderScreen.classList.add('active');
    document.getElementById('current-surah-name').innerText = name; currentSurahNumber = number;
    
    let reciterBaseUrl = reciterSelect.value;
    if(!reciterBaseUrl.endsWith('/')) reciterBaseUrl += '/';
    quranAudio.src = `${reciterBaseUrl}${padZero(number)}.mp3`;
    
    const textDiv = document.getElementById('quran-text');
    textDiv.innerHTML = '<div style="text-align:center;">جاري تحميل السورة...</div>';
    window.scrollTo({ top: 0, behavior: 'smooth' });

    try {
        const res = await fetch(`https://api.alquran.cloud/v1/surah/${number}/quran-uthmani`);
        const data = await res.json();
        let ayahsHtml = '';
        if (number !== 1 && number !== 9) ayahsHtml += `<div class="basmalah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>`;
        data.data.ayahs.forEach(ayah => {
            let text = ayah.text;
            if (number !== 1 && number !== 9 && ayah.numberInSurah === 1) text = text.replace('بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ ', '');
            ayahsHtml += `${text} <span class="ayah-symbol">﴿${ayah.numberInSurah}﴾</span> `;
        });
        textDiv.innerHTML = ayahsHtml;
    } catch(e) { textDiv.innerHTML = '<div style="text-align:center;">تأكد من اتصالك بالإنترنت.</div>'; }
};

window.changeReciter = function() {
    if(!currentSurahNumber) return;
    let reciterBaseUrl = reciterSelect.value;
    if(!reciterBaseUrl.endsWith('/')) reciterBaseUrl += '/';
    const wasPlaying = !quranAudio.paused;
    quranAudio.src = `${reciterBaseUrl}${padZero(currentSurahNumber)}.mp3`;
    if(wasPlaying) quranAudio.play();
};

window.goBackToQuranIndex = function() { quranAudio.pause(); quranReaderScreen.classList.remove('active'); quranReaderScreen.classList.add('hidden'); quranIndexScreen.classList.remove('hidden'); quranIndexScreen.classList.add('active'); };
window.goHome = function() { quranAudio.pause(); document.querySelectorAll('.screen').forEach(s => { s.classList.remove('active'); s.classList.add('hidden'); }); homeScreen.classList.remove('hidden'); homeScreen.classList.add('active'); };
