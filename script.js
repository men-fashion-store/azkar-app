// --- 1. بيانات الأذكار والمكتبات ---
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
    wakeup:[
        {text:"الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ.",count:1,proof:"الدليل: صحيح البخاري"},
        {text:"لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ...",count:1,proof:"الدليل: من قالها حين يستيقظ ثم دعا استجيب له"},
        {text:"الْحَمْدُ لِلَّهِ الَّذِي عَافَانِي فِي جَسَدِي، وَرَدَّ عَلَيَّ رُوحِي، وَأَذِنَ لِي بِذِكْرِهِ.",count:1,proof:"الدليل: حديث حسن"}
    ],
    friday:[
        {text:"اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ.",count:10,proof:"الدليل: أكثروا عليّ من الصلاة يوم الجمعة"},
        {text:"سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ.",count:100,proof:"الدليل: من أفضل الذكر"},
        {text:"اللَّهُمَّ إِنِّي أَسْأَلُكَ فِي هَذَا الْيَوْمِ الْمُبَارَكِ رِضَاكَ وَالْجَنَّةَ وَأَعُوذُ بِكَ مِنْ سَخَطِكَ وَالنَّارِ.",count:1,proof:"الدليل: دعاء مشروع عام"}
    ],
    stairsUp:[
        {text:"اللَّهُ أَكْبَرُ.",count:3,proof:"الدليل: كان النبي ﷺ وأصحابه يكبرون عند الصعود"},
        {text:"سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ.",count:1,proof:"الدليل: ذكر مطلق مبارك"}
    ],
    stairsDown:[
        {text:"سُبْحَانَ اللَّهِ.",count:3,proof:"الدليل: كان النبي ﷺ وأصحابه يسبحون عند النزول"},
        {text:"أَسْتَغْفِرُ اللَّهَ.",count:3,proof:"الدليل: من الذكر المشروع العام"}
    ],
    ruqyah:[
        {text:"بِسْمِ اللَّهِ أَرْقِيكَ، مِنْ كُلِّ شَيْءٍ يُؤْذِيكَ، مِنْ شَرِّ كُلِّ نَفْسٍ أَوْ عَيْنِ حَاسِدٍ، اللَّهُ يَشْفِيكَ بِسْمِ اللَّهِ أَرْقِيكَ.",count:3,proof:"سنة نبوية"},
        {text:"أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّةِ، مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ، وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ.",count:3,proof:"سنة نبوية"},
        {text:"اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَاسَ، اشْفِهِ وَأَنْتَ الشَّافِي، لَا شِفَاءَ إِلَّا شِفاؤُكَ، شِفَاءً لَا يُغَادِرُ سَقَمًا.",count:3,proof:"سنة نبوية"},
        {text:"أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.",count:3,proof:"سنة نبوية"},
        {text:"بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ، وَهُوَ السَّمِيعُ الْعَلِيمُ.",count:3,proof:"سنة نبوية"},
        {text:surahAlIkhlas,count:3,proof:"المعوذات"},
        {text:surahAlFalaq,count:3,proof:"المعوذات"},
        {text:surahAnNas,count:3,proof:"المعوذات"}
    ],
    afterPrayer:[
        {text:"أَسْتَغْفِرُ اللَّهَ (ثلاثاً) .. اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ.",count:1,proof:"رواه مسلم"},
        {text:"لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ، لَا إِلَهَ إِلَّا اللَّهُ، وَلَا نَعْبُدُ إِلَّا إِيَّاهُ، لَهُ النِّعْمَةُ وَلَهُ الْفَضْلُ وَلَهُ الثَّنَاءُ الْحَسَنُ، لَا إِلَهَ إِلَّا اللَّهُ مُخْلِصِينَ لَهُ الدِّينَ وَلَوْ كَرِهَ الْكَافِرُونَ.",count:1,proof:"رواه مسلم"},
        {text:"سُبْحَانَ اللَّهِ (33) .. الْحَمْدُ لِلَّهِ (33) .. اللَّهُ أَكْبَرُ (33) .. لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",count:1,proof:"من قاله غفرت خطاياه وإن كانت مثل زبد البحر (رواه مسلم)"},
        {text:ayatAlKursi,count:1,proof:"من قرأها دبر كل صلاة مكتوبة لم يمنعه من دخول الجنة إلا أن يموت"},
        {text:surahAlIkhlas,count:1,proof:"تقرأ بعد كل صلاة"},
        {text:surahAlFalaq,count:1,proof:"تقرأ بعد كل صلاة"},
        {text:surahAnNas,count:1,proof:"تقرأ بعد كل صلاة"}
    ],
    clothing:[
        {text:"بِسْمِ اللَّهِ.",count:1,proof:"ستر ما بين أعين الجن وعورات بني آدم"},
        {text:"الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي هَذَا (الثَّوْبَ) وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ.",count:1,proof:"غفر له ما تقدم من ذنبه"},
        {text:"بِسْمِ اللَّهِ (عند خلع الملابس).",count:1,proof:"ستر العورة"}
    ],
    home:[
        {text:"بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى رَبِّنَا تَوَكَّلْنَا (عند الدخول).",count:1,proof:"سنن أبي داود"},
        {text:"بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ (عند الخروج).",count:1,proof:"يقال له هديت وكفيت ووقيت"}
    ],
    bathroom:[
        {text:"بِسْمِ اللَّهِ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ (عند الدخول).",count:1,proof:"متفق عليه"},
        {text:"غُفْرَانَكَ (عند الخروج).",count:1,proof:"سنن الترمذي"}
    ],
    travel:[
        {text:"اللَّهُ أَكْبَرُ (ثلاثاً) .. سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ.",count:1,proof:"صحيح مسلم"},
        {text:"اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَى، وَمِنَ الْعَمَلِ مَا تَرْضَى.",count:1,proof:"صحيح مسلم"}
    ],
    food:[
        {text:"بِسْمِ اللَّهِ (قبل الأكل).",count:1,proof:"سنة نبوية"},
        {text:"الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ (بعد الأكل).",count:1,proof:"غفر له ما تقدم من ذنبه"}
    ],
    distress:[
        {text:"لَا إِلَهَ إِلَّا اللَّهُ الْعَظِيمُ الْحَلِيمُ، لَا إِلَهَ إِلَّا اللَّهُ رَبُّ الْعَرْشِ الْعَظِيمِ، لَا إِلَهَ إِلَّا اللَّهُ رَبُّ السَّمَاوَاتِ وَرَبُّ الْأَرْضِ وَرَبُّ الْعَرْشِ الْكَرِيمِ.",count:1,proof:"صحيح البخاري"},
        {text:"يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ.",count:1,proof:"سنن الترمذي"},
        {text:"اللَّهُمَّ رَحْمَتَكَ أَرْجُو فَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ، وَأَصْلِحْ لِي شَأْنِي كُلَّهُ لَا إِلَهَ إِلَّا أَنْتَ.",count:1,proof:"سنن أبي داود"}
    ]
};

const hadithsList = [
    {text:"إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى.",proof:"(متفق عليه)"},
    {text:"كَلِمَتَانِ خَفِيفَتَانِ عَلَى اللِّسَانِ، ثَقِيلَتَانِ فِي الْمِيزَانِ... سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ.",proof:"(متفق عليه)"},
    {text:"مَنْ صَلَّى عَلَيَّ صَلَاةً صَلَّى اللَّهُ عَلَيْهِ بِهَا عَشْرًا.",proof:"(رواه مسلم)"}
];

let currentHadithBookTitle = '';
const hadithLibraries = {
    bukhari: {
        title: "صحيح البخاري",
        icon: "BK",
        description: "أحاديث جامعة في العقيدة والسلوك",
        sourceLabel: "كتاب",
        hadiths: [
            {text: "إنما الأعمال بالنيات، وإنما لكل امرئ ما نوى.", narrator: "صحيح البخاري"},
            {text: "المسلم من سلم المسلمون من لسانه ويده.", narrator: "صحيح البخاري"},
        {text: "لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه.", narrator: "صحيح البخاري"},
            {text: "من كان يؤمن بالله واليوم الآخر فليقل خيرا أو ليصمت.", narrator: "صحيح البخاري"},
            {text: "خيركم من تعلم القرآن وعلمه.", narrator: "صحيح البخاري"},
            {text: "من يرد الله به خيرا يفقهه في الدين.", narrator: "صحيح البخاري"},
            {text: "الدين النصيحة.", narrator: "صحيح البخاري (بالمعنى)"},
            {text: "كلكم راع وكلكم مسؤول عن رعيته.", narrator: "صحيح البخاري"},
            {text: "يسروا ولا تعسروا، وبشروا ولا تنفروا.", narrator: "صحيح البخاري"},
            {text: "كلمتان خفيفتان على اللسان... سبحان الله وبحمده، سبحان الله العظيم.", narrator: "صحيح البخاري"}
        ]
    },
    muslim: {
        title: "صحيح مسلم",
        icon: "MS",
        description: "أحاديث الإيمان والعبادات والآداب",
        sourceLabel: "كتاب",
        hadiths: [
            {text: "الطهور شطر الإيمان، والحمد لله تملأ الميزان.", narrator: "صحيح مسلم"},
            {text: "من سلك طريقا يلتمس فيه علما سهل الله له به طريقا إلى الجنة.", narrator: "صحيح مسلم"},
            {text: "عجبا لأمر المؤمن إن أمره كله خير.", narrator: "صحيح مسلم"},
            {text: "أقرب ما يكون العبد من ربه وهو ساجد فأكثروا الدعاء.", narrator: "صحيح مسلم"},
            {text: "الصلوات الخمس والجمعة إلى الجمعة ورمضان إلى رمضان مكفرات لما بينهن إذا اجتنبت الكبائر.", narrator: "صحيح مسلم"},
            {text: "من صلى علي واحدة صلى الله عليه بها عشرا.", narrator: "صحيح مسلم"},
            {text: "من دل على خير فله مثل أجر فاعله.", narrator: "صحيح مسلم"},
            {text: "لا يدخل الجنة من كان في قلبه مثقال ذرة من كبر.", narrator: "صحيح مسلم"},
            {text: "المؤمن القوي خير وأحب إلى الله من المؤمن الضعيف.", narrator: "صحيح مسلم"},
            {text: "إن الله لا ينظر إلى صوركم وأموالكم ولكن ينظر إلى قلوبكم وأعمالكم.", narrator: "صحيح مسلم"}
        ]
    },
    abudawud: {
        title: "سنن أبي داود",
        icon: "AD",
        description: "أحاديث الأحكام والسُّنن العملية",
        sourceLabel: "كتاب",
        hadiths: [
            {text: "الرجل على دين خليله فلينظر أحدكم من يخالل.", narrator: "سنن أبي داود"},
            {text: "من حسن إسلام المرء تركه ما لا يعنيه.", narrator: "سنن أبي داود (بالمعنى)"},
            {text: "أفضل الدعاء دعاء يوم عرفة.", narrator: "سنن أبي داود (بالمعنى)"},
            {text: "إن من إجلال الله إكرام ذي الشيبة المسلم.", narrator: "سنن أبي داود"},
            {text: "ما من مسلم يدعو بدعوة ليس فيها إثم ولا قطيعة رحم إلا أعطاه الله بها إحدى ثلاث.", narrator: "سنن أبي داود"},
            {text: "دعوة المظلوم مستجابة.", narrator: "سنن أبي داود"},
            {text: "من سكت نجا.", narrator: "سنن أبي داود (بالمعنى)"},
            {text: "لا ضرر ولا ضرار.", narrator: "سنن أبي داود (بالمعنى)"}
        ]
    },
    tirmidhi: {
        title: "سنن الترمذي",
        icon: "TR",
        description: "أحاديث الفضائل والآداب والرقائق",
        sourceLabel: "كتاب",
        hadiths: [
            {text: "اتق الله حيثما كنت وأتبع السيئة الحسنة تمحها وخالق الناس بخلق حسن.", narrator: "سنن الترمذي"},
            {text: "تبسمك في وجه أخيك صدقة.", narrator: "سنن الترمذي"},
            {text: "إن الله رفيق يحب الرفق.", narrator: "سنن الترمذي (بالمعنى)"},
            {text: "لا تغضب.", narrator: "سنن الترمذي (بالمعنى)"},
            {text: "الدنيا سجن المؤمن وجنة الكافر.", narrator: "سنن الترمذي (بالمعنى)"},
            {text: "احفظ الله يحفظك.", narrator: "سنن الترمذي"},
            {text: "من حسن إسلام المرء تركه ما لا يعنيه.", narrator: "سنن الترمذي"},
            {text: "الراحمون يرحمهم الرحمن.", narrator: "سنن الترمذي"}
        ]
    },
    nasai: {
        title: "سنن النسائي",
        icon: "NS",
        description: "أحاديث العبادات والأحكام",
        sourceLabel: "كتاب",
        hadiths: [
            {text: "إنما الطاعة في المعروف.", narrator: "سنن النسائي"},
            {text: "من صلى لله أربعين يوما في جماعة يدرك التكبيرة الأولى كتبت له براءتان.", narrator: "سنن النسائي (بالمعنى)"},
            {text: "أفضل الصيام بعد رمضان شهر الله المحرم.", narrator: "سنن النسائي"},
            {text: "أفضل الصلاة بعد الفريضة صلاة الليل.", narrator: "سنن النسائي"},
            {text: "من توضأ فأحسن الوضوء خرجت خطاياه.", narrator: "سنن النسائي (بالمعنى)"},
            {text: "من سن في الإسلام سنة حسنة فله أجرها وأجر من عمل بها.", narrator: "سنن النسائي (بالمعنى)"},
            {text: "إن الصدق يهدي إلى البر.", narrator: "سنن النسائي (بالمعنى)"},
            {text: "من صلى البردين دخل الجنة.", narrator: "سنن النسائي (بالمعنى)"}
        ]
    },
    ibnmajah: {
        title: "سنن ابن ماجه",
        icon: "IM",
        description: "مختارات نافعة في الزهد والسلوك",
        sourceLabel: "كتاب",
        hadiths: [
            {text: "طلب العلم فريضة على كل مسلم.", narrator: "سنن ابن ماجه"},
            {text: "رب أشعث أغبر لو أقسم على الله لأبره.", narrator: "سنن ابن ماجه (بالمعنى)"},
            {text: "لا يدخل الجنة قاطع رحم.", narrator: "سنن ابن ماجه (بالمعنى)"},
            {text: "خير الناس أنفعهم للناس.", narrator: "سنن ابن ماجه (بالمعنى)"},
            {text: "إن من أحبكم إلي وأقربكم مني مجلسا يوم القيامة أحاسنكم أخلاقا.", narrator: "سنن ابن ماجه (بالمعنى)"},
            {text: "اغتنم خمسا قبل خمس.", narrator: "سنن ابن ماجه (بالمعنى)"},
            {text: "من لزم الاستغفار جعل الله له من كل هم فرجا.", narrator: "سنن ابن ماجه (بالمعنى)"},
            {text: "نعم المال الصالح للرجل الصالح.", narrator: "سنن ابن ماجه (بالمعنى)"}
        ]
    },
    nawawi: {
        title: "الأربعون النووية",
        icon: "AN",
        description: "أربعون حديثاً جامعة في أصول الدين وفروعه",
        sourceLabel: "حديث",
        hadiths: [
            {text: "إنما الأعمال بالنيات، وإنما لكل امرئ ما نوى، فمن كانت هجرته إلى الله ورسوله، فهجرته إلى الله ورسوله، ومن كانت هجرته لدنيا يصيبها أو امرأة ينكحها، فهجرته إلى ما هاجر إليه.", narrator: "الحديث الأول"},
            {text: "بني الإسلام على خمس: شهادة أن لا إله إلا الله وأن محمداً رسول الله، وإقام الصلاة، وإيتاء الزكاة، وحج البيت، وصوم رمضان.", narrator: "الحديث الثالث"},
            {text: "عن أبي هريرة رضي الله عنه قال: قال رسول الله ﷺ: (من حسن إسلام المرء تركه ما لا يعنيه).", narrator: "الحديث الثاني عشر"},
            {text: "لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه.", narrator: "الحديث الثالث عشر"},
            {text: "من كان يؤمن بالله واليوم الآخر فليقل خيراً أو ليصمت، ومن كان يؤمن بالله واليوم الآخر فليكرم جاره، ومن كان يؤمن بالله واليوم الآخر فليكرم ضيفه.", narrator: "الحديث الخامس عشر"},
            {text: "عن أبي هريرة رضي الله عنه، أن رجلاً قال للنبي ﷺ: أوصني، قال: (لا تغضب). فردد مراراً، قال: (لا تغضب).", narrator: "الحديث السادس عشر"},
            {text: "إن الله كتب الإحسان على كل شيء، فإذا قتلتم فأحسنوا القتلة، وإذا ذبحتم فأحسنوا الذبحة، وليحد أحدكم شفرته، وليرح ذبيحته.", narrator: "الحديث السابع عشر"},
            {text: "اتق الله حيثما كنت، وأتبع السيئة الحسنة تمحها، وخالق الناس بخلق حسن.", narrator: "الحديث الثامن عشر"},
            {text: "احفظ الله يحفظك، احفظ الله تجده تجاهك، إذا سألت فاسأل الله، وإذا استعنت فاستعن بالله.", narrator: "الحديث التاسع عشر"},
            {text: "الحياء لا يأتي إلا بخير.", narrator: "الحديث العشرون (بالمعنى)"}
        ]
    }
};

// --- Last Read Feature for Quran ---
let lastRead = JSON.parse(localStorage.getItem('lastReadQuran')) || null;

function saveLastRead(surahNum, pageNum) {
    lastRead = { surahNum, pageNum, date: new Date().toISOString() };
    localStorage.setItem('lastReadQuran', JSON.stringify(lastRead));
    updateLastReadUI();
}

function updateLastReadUI() {
    const summaryCard = document.getElementById('quran-index-summary');
    if (summaryCard && lastRead) {
        summaryCard.innerHTML = `فهرس المصحف <br><small style="font-size:0.8rem; opacity:0.8; font-weight:normal;">آخر قراءة: سورة ${surahListCached.find(s=>s.number===lastRead.surahNum)?.name || ''} (صفحة ${lastRead.pageNum})</small>`;
        summaryCard.style.cursor = 'pointer';
        summaryCard.onclick = () => jumpToPage(lastRead.pageNum);
    }
}

function showSplashHadith() {
    const hadithEl = document.getElementById('splash-hadith');
    const proofEl = document.getElementById('splash-proof');
    const defaultHadith = {text:"إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى.",proof:"(متفق عليه)"};
    if (!hadithEl) return;
    let hadith = (hadithsList && hadithsList.length > 0) ? hadithsList[Math.floor(Math.random() * hadithsList.length)] : defaultHadith;
    hadithEl.innerText = hadith.text;
    if (proofEl) proofEl.innerText = hadith.proof;
}

function showHomeHadith() {
    const textEl = document.getElementById('home-hadith-text');
    const narratorEl = document.getElementById('home-hadith-narrator');
    if (!textEl) return;
    
    const hadith = hadithsList[Math.floor(Math.random() * hadithsList.length)];
    textEl.innerText = `«${hadith.text}»`;
    if (narratorEl) narratorEl.innerText = hadith.proof;
}

// Update initialization to call these functions
window.addEventListener('DOMContentLoaded', () => {
    showSplashHadith();
    showHomeHadith();
    updateLastReadUI();
    loadHadithApiCategories();
    initLocationAndPrayers();
    applyAppSettingsFromSidebar();
    
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
    }
});

window.showToast = (msg) => {
    const t = document.getElementById('toast-msg'); if(!t) return;
    t.innerText = msg; t.style.bottom = '20px'; setTimeout(() => { t.style.bottom = '-100px'; }, 3000);
};

// --- دالة تحويل الأرقام للإصدار العربي ---
function toArabicNumerals(num) {
    return num.toString().replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);
}

async function fetchJsonWithRetry(url, options = {}, retries = 2, timeoutMs = 9000) {
    for (let attempt = 0; attempt <= retries; attempt++) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
        try {
            const res = await fetch(url, { ...options, signal: controller.signal });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json();
            clearTimeout(timeoutId);
            return data;
        } catch (error) {
            clearTimeout(timeoutId);
            if (attempt === retries) throw error;
            await new Promise(resolve => setTimeout(resolve, 350 * (attempt + 1)));
        }
    }
}

// --- 2. إدارة الشاشات والملاحة ---
window.navigateTo = function(targetScreen) { window.location.hash = targetScreen; };
window.goBack = function() { window.history.back(); };
window.addEventListener('hashchange', handleRoute);

function handleRoute() {
    let hash = window.location.hash.replace('#', '') || 'home';
    if (hash !== 'quranReader' && recitationActive) stopAyahRecitation();
    
    let mainHeader = document.getElementById('main-header');
    let searchIcon = document.getElementById('header-search-icon');
    let searchInput = document.getElementById('top-search-input');
    let subtitle = document.getElementById('header-subtitle');
    let title = document.getElementById('header-title');

    let homeMenuBtn = document.querySelector('.home-menu-btn');
    if(hash === 'home' || hash === 'splash') {
        mainHeader.classList.add('hidden');
        if(homeMenuBtn && hash === 'home') homeMenuBtn.classList.remove('hidden');
        else if (homeMenuBtn) homeMenuBtn.classList.add('hidden');
    } else {
        mainHeader.classList.remove('hidden');
        if(homeMenuBtn) homeMenuBtn.classList.add('hidden');
    }

    if(searchInput) { searchInput.value = ''; searchInput.classList.add('hidden'); }
    
    if(hash === 'quranIndex' || hash === 'hadithReader' || hash === 'quranSearch') {
        searchIcon.classList.remove('hidden');
        if(hash === 'quranIndex') {
            title.innerText = "المصحف";
            subtitle.classList.add('hidden');
        } else if (hash === 'quranSearch') {
            title.innerText = "بحث في القرآن";
            subtitle.classList.add('hidden');
        } else {
            title.innerText = currentHadithBookTitle;
            subtitle.classList.add('hidden');
        }
        if(window.handleTopSearch) window.handleTopSearch(); 
    } else if(hash === 'quranReader') {
        searchIcon.classList.remove('hidden');
        if(!document.getElementById('quran-text').innerHTML.includes('ayah-span')) {
            loadQuranPage(quranCurrentPage);
        }
    } else {
        searchIcon.classList.add('hidden');
        subtitle.classList.add('hidden');
        const titles = {
            'azkarMenu': 'الأذكار',
            'azkarReader': 'الأذكار',
            'masbaha': 'السبحة',
            'prayerTimes': 'مواقيت الصلاة',
            'audio': 'الصوتيات',
            'bookmarks': 'علاماتي المرجعية',
            'hadithMenu': 'مكتبة الحديث',
            'radio': 'إذاعة القرآن لايف',
            'events': 'المناسبات'
        };
        title.innerText = titles[hash] || 'موسوعة المسلم';
    }

    if (hash === 'radio' && allRadios.length === 0) {
        loadRadios();
    }

    document.querySelectorAll('.screen').forEach(s => { s.classList.remove('active'); s.classList.add('hidden'); });
    const target = document.getElementById(hash + '-screen') || document.getElementById('home-screen');
    if(target) { target.classList.replace('hidden', 'active'); window.scrollTo(0, 0); }
}

// --- 3. البحث المدمج ---
window.toggleTopSearch = function() {
    let input = document.getElementById('top-search-input');
    input.classList.toggle('hidden');
    if(!input.classList.contains('hidden')) { input.focus(); } 
    else { input.value = ''; handleTopSearch(); }
};

window.handleTopSearch = function() {
    let text = document.getElementById('top-search-input').value.toLowerCase();
    let hash = window.location.hash.replace('#', '');
    
    if(hash === 'quranIndex') {
        let cards = document.querySelectorAll('.surah-card-btn');
        cards.forEach(card => {
            let surahName = card.innerText;
            if(surahName.includes(text)) card.style.display = 'flex'; else card.style.display = 'none';
        });
    } else if (hash === 'quranSearch') {
        if (text.length > 2) searchQuran(text);
    } else if (hash === 'quranReader') {
        let ayahs = document.querySelectorAll('.ayah-span');
        ayahs.forEach(ayah => {
            if(text.trim() !== '' && ayah.innerText.includes(text)) { ayah.classList.add('highlight-search'); } 
            else { ayah.classList.remove('highlight-search'); }
        });
    } else if (hash === 'hadithReader') {
        let cards = document.querySelectorAll('.hadith-card');
        cards.forEach(card => {
            if(card.innerText.includes(text)) card.style.display = 'block'; else card.style.display = 'none';
        });
    }
};

// --- 4. القائمة والمظهر ---
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
    // القرآن يحتاج حجم خط أكبر قليلاً ليبدو فخماً
    document.documentElement.style.setProperty('--quran-font-size', `${val * 1.3}rem`);
    localStorage.setItem('fontSize', val);
    localStorage.setItem('fontSizeManual', 'true'); // تم تغيير الخط يدوياً
};

window.resetFontSizeToAuto = () => {
    localStorage.removeItem('fontSizeManual');
    showToast("تم تفعيل التناسب التلقائي لخط المصحف");
    if (window.location.hash.includes('quranReader')) {
        autoFitQuranFontSize();
    }
};

// --- 5. المشاركة والتحديث والخروج ---
window.shareApp = function() {
    toggleSidebar();
    
    // رابط التحميل من ميديا فاير
    const mediafireLink = 'https://www.mediafire.com/file/w4rpclk2brt295x/app-release.apk/file';
    const shareText = `تطبيق موسوعة المسلم - تطبيق إسلامي شامل للمصحف والأذكار والحديث والمواقيت\n\nللتحميل من ميديا فاير:\n${mediafireLink}`;
    
    if (navigator.share) {
        navigator.share({ 
            title: 'موسوعة المسلم', 
            text: shareText
        }).catch(() => {
            // إذا فشلت المشاركة، انسخ الرابط
            navigator.clipboard.writeText(shareText);
            showToast("تم نسخ رابط التحميل 📋");
        });
    } else {
        navigator.clipboard.writeText(shareText);
        showToast("تم نسخ رابط التحميل 📋");
    }
};

window.checkForUpdates = function() {
    toggleSidebar();
    showToast("جاري البحث عن تحديثات...");
    setTimeout(() => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.getRegistrations().then(regs => {
                if(regs.length > 0) { regs[0].update(); showToast("أنت على أحدث إصدار متاح ✅"); } 
                else { showToast("أنت تستخدم النسخة المباشرة"); }
            });
        }
    }, 1500);
};

let lastBackPress = 0;
window.addEventListener('popstate', function(e) {
    const hash = window.location.hash;
    if(hash === '' || hash === '#home') {
        const now = new Date().getTime();
        if(now - lastBackPress < 2000) {
            exitAppPrompt();
        } else {
            lastBackPress = now;
            showToast("اضغط رجوع مرة أخرى لتأكيد الخروج");
            if(window.location.hash !== '#home') {
                window.location.hash = 'home';
            } else {
                window.history.pushState(null, null, '#home');
            }
        }
    }
});

window.exitAppPrompt = function() { document.getElementById('exit-modal').classList.remove('hidden'); document.getElementById('exit-modal').classList.add('show'); toggleSidebar(); };
window.closeExitModal = function() { document.getElementById('exit-modal').classList.remove('show'); setTimeout(() => document.getElementById('exit-modal').classList.add('hidden'), 300); };
window.confirmExit = function() { window.close(); if(navigator.app){ navigator.app.exitApp(); } else if(navigator.device){ navigator.device.exitApp(); } else { window.location.href = "about:blank"; } };

// --- 6. الموقع والمواقيت ---
let userLat = parseFloat(localStorage.getItem('savedLat')) || 30.0444;
let userLng = parseFloat(localStorage.getItem('savedLng')) || 31.2357;
let userCity = localStorage.getItem('savedCity') || "القاهرة (افتراضي)";
let prayerInterval;
let nextPrayerEvent = { time: null, name: '' };
let lastAlertKey = localStorage.getItem('lastPrayerAlertKey') || '';
let selectedReciterSetting = localStorage.getItem('selectedReciterSetting') || 'husary';
let selectedMuezzin = localStorage.getItem('selectedMuezzin') || 'makkah';
let alertsEnabled = (localStorage.getItem('alertsEnabled') || 'on') === 'on';
const AYAH_RECITER_EDITIONS = {
    afs: 'ar.alafasy',
    basit: 'ar.abdulbasitmurattal',
    husary: 'ar.husary',
    husary_warsh: 'ar.husary', 
    minshawi: 'ar.minshawi',
    minshawi_mujawwad: 'ar.minshawimujawwad',
    minshawi_warsh: 'ar.minshawi', 
    mustafa: 'ar.mustafaismail',
    mustafa_mujawwad: 'ar.mustafaismail',
    mustafa_warsh: 'ar.mustafaismail',
    mustafa_khalaf: 'ar.mustafaismail'
};
const ADHAN_AUDIO_URLS = {
    makkah: 'https://archive.org/download/MakkahAdhan_201901/Adhan%20Makkah.mp3',
    madinah: 'https://archive.org/download/MadinahAdhan_201901/Adhan%20Madinah.mp3',
    aqsa: 'https://archive.org/download/AdhanAqsa/Adhan%20Aqsa.mp3'
};
const surahAyahCountCache = {};
let recitationActive = false;
let recitationStopRequested = false;
let recitationAudio = null;
let currentRecitingAyahId = '';

// Arabic day names
const arabicDays = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
// Hijri months
const hijriMonths = ['محرم', 'صفر', 'ربيع الأول', 'ربيع الآخر', 'جمادى الأولى', 'جمادى الآخرة', 'رجب', 'شعبان', 'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة'];

// Get Arabic day name
function getArabicDayName(date) {
    return arabicDays[date.getDay()];
}

// Convert Gregorian to Hijri (approximate calculation)
function gregorianToHijri(date) {
    const gYear = date.getFullYear();
    const gMonth = date.getMonth() + 1;
    const gDay = date.getDate();
    
    // Approximate conversion
    let jd = Math.floor((1461 * (gYear + 4800 + Math.floor((gMonth - 14) / 12))) / 4) +
             Math.floor((367 * (gMonth - 2 - 12 * Math.floor((gMonth - 14) / 12))) / 12) -
             Math.floor((3 * Math.floor((gYear + 4900 + Math.floor((gMonth - 14) / 12)) / 100)) / 4) +
             gDay - 32075;
    
    let l = jd - 1948440 + 10632;
    let n = Math.floor((l - 1) / 10631);
    l = l - 10631 * n + 354;
    let j = Math.floor((Math.floor((10985 - l) / 5316)) * (Math.floor((50 * l) / 17719))) + Math.floor((Math.floor(l / 5670)) * (Math.floor((43 * l) / 15238)));
    l = l - (Math.floor((30 - j) / 15)) * (Math.floor((17719 * j) / 50)) - (Math.floor(j / 16)) * (Math.floor((15238 * j) / 43)) + 29;
    
    const hMonth = Math.floor((24 * l) / 709);
    const hDay = Math.floor(l - Math.floor((709 * hMonth) / 24));
    const hYear = 30 * n + j - 30;
    
    return {
        day: hDay,
        month: hijriMonths[hMonth - 1],
        year: hYear
    };
}

// Update prayer widget with all information using Aladhan API for accurate Hijri date
async function updatePrayerWidgetDate() {
    const now = new Date();
    const dayNameEl = document.getElementById('day-name');
    const hijriDateEl = document.getElementById('hijri-date');
    const gregorianDateEl = document.getElementById('gregorian-date');
    
    if(dayNameEl) dayNameEl.innerText = getArabicDayName(now);
    if(gregorianDateEl) gregorianDateEl.innerText = now.toLocaleDateString('ar-EG', {day:'numeric', month:'long', year:'numeric'});
    
    // Get accurate Hijri date from Aladhan API
    try {
        const d = now.getDate();
        const m = now.getMonth() + 1;
        const y = now.getFullYear();
        const data = await fetchJsonWithRetry(`https://api.aladhan.com/v1/gToH/${d}-${m}-${y}`);
        if(data && data.data && data.data.hijri) {
            const hijri = data.data.hijri;
            if(hijriDateEl) hijriDateEl.innerText = `${hijri.day} ${hijri.month.ar} ${hijri.year}هـ`;
        } else {
            // Fallback to calculation if API fails
            const hijri = gregorianToHijri(now);
            if(hijriDateEl) hijriDateEl.innerText = `${hijri.day} ${hijri.month} ${hijri.year}هـ`;
        }
    } catch(e) {
        // Fallback to calculation if API fails
        const hijri = gregorianToHijri(now);
        if(hijriDateEl) hijriDateEl.innerText = `${hijri.day} ${hijri.month} ${hijri.year}هـ`;
    }
}

window.setManualLocation = function() {
    let val = document.getElementById('manual-city-select').value;
    if(!val) return; 
    let [lat, lng, cityName] = val.split(',');
    userLat = parseFloat(lat); userLng = parseFloat(lng); userCity = cityName;
    localStorage.setItem('savedLat', userLat); localStorage.setItem('savedLng', userLng); localStorage.setItem('savedCity', userCity);
    document.getElementById('prayer-location').innerText = `${userCity} (ضبط يدوي)`;
    fetchPrayers(userLat, userLng);
    showToast(`✅ تم ضبط الموقع على ${userCity} بنجاح`);
    document.getElementById('manual-city-select').value = "";
    toggleSidebar();
};

async function initLocationAndPrayers() {
    // 1. عرض الموقع المحفوظ فوراً لسرعة الاستجابة
    const locationEl = document.getElementById('prayer-location');
    if (locationEl) locationEl.innerText = `${userCity}`;
    fetchPrayers(userLat, userLng);
    
    // 2. محاولة تحديث الموقع تلقائياً عبر GPS ومراقبته في حالة السفر
    if (navigator.geolocation) {
        // نستخدم watchPosition بدلاً من getCurrentPosition لمراقبة التغير التلقائي أثناء السفر
        navigator.geolocation.watchPosition(async (pos) => {
            const newLat = pos.coords.latitude; 
            const newLng = pos.coords.longitude;
            
            // تحديث فقط إذا تغير الموقع بأكثر من 2 كيلومتر أو لا يوجد مدينة محفوظة
            const distance = calculateDistance(userLat, userLng, newLat, newLng);
            if (distance > 2 || !localStorage.getItem('savedCity') || localStorage.getItem('locationSource') !== 'gps') {
                userLat = newLat;
                userLng = newLng;
                
                try {
                    // جلب اسم المدينة بدقة (القنطرة، الإسماعيلية، إلخ)
                    let res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${userLat}&lon=${userLng}&accept-language=ar`);
                    let data = await res.json();
                    // محاولة استخراج أدق اسم للمكان
                    userCity = data.address?.city || data.address?.town || data.address?.village || data.address?.suburb || data.address?.state || "موقعك الحالي";
                } catch(e) {
                    if (!userCity || userCity === "القاهرة (افتراضي)") userCity = "موقعك الحالي";
                }
                
                localStorage.setItem('savedLat', userLat); 
                localStorage.setItem('savedLng', userLng); 
                localStorage.setItem('savedCity', userCity);
                localStorage.setItem('locationSource', 'gps');
                
                if (locationEl) locationEl.innerText = `${userCity}`;
                fetchPrayers(userLat, userLng);
            }
        }, (error) => {
            // في حالة فشل GPS وعدم وجود موقع محفوظ، نجرب تحديد الموقع عبر IP
            if (!localStorage.getItem('savedLat') || userCity.includes("افتراضي")) {
                tryIPLocation();
            }
        }, {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 300000 // 5 minutes cache
        });
    }
}

// تحديث المواقيت والموقع عند العودة للتطبيق (مثلاً عند فتحه بعد فترة)
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        initLocationAndPrayers();
    }
});

// Calculate distance between two coordinates using Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

async function tryIPLocation() {
    try {
        let res = await fetch('http://ip-api.com/json/?lang=ar', {timeout: 5000});
        let data = await res.json();
        if(data.status === "success" && !document.getElementById('prayer-location').innerText.includes("يدوي")) {
            userLat = data.lat; 
            userLng = data.lon; 
            userCity = data.city;
            localStorage.setItem('savedLat', userLat); 
            localStorage.setItem('savedLng', userLng); 
            localStorage.setItem('savedCity', userCity);
            document.getElementById('prayer-location').innerText = `${userCity}`;
            fetchPrayers(userLat, userLng);
        }
    } catch(e) {
        // Keep using saved/default location
    }
}

window.requestLocationPermission = function() {
    showToast("جاري طلب صلاحية الموقع...");
    toggleSidebar();
    
    if (!navigator.geolocation) {
        showToast("المتصفح لا يدعم تحديد الموقع");
        return;
    }
    
    // Request permission with better options
    navigator.geolocation.getCurrentPosition(async (pos) => {
        userLat = pos.coords.latitude; 
        userLng = pos.coords.longitude;
        
        try {
            // Try to get city name from coordinates
            let res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${userLat}&lon=${userLng}&accept-language=ar`);
            let data = await res.json();
            userCity = data.address?.city || data.address?.town || data.address?.village || data.address?.state || "الموقع الحالي";
            
            // Save to localStorage
            localStorage.setItem('savedLat', userLat); 
            localStorage.setItem('savedLng', userLng); 
            localStorage.setItem('savedCity', userCity);
            localStorage.setItem('locationSource', 'gps');
            
            document.getElementById('prayer-location').innerText = `${userCity} (GPS)`;
            fetchPrayers(userLat, userLng);
            showToast("✅ تم تحديد موقعك بنجاح");
            
        } catch(e) { 
            // If reverse geocoding fails, still save coordinates
            localStorage.setItem('savedLat', userLat); 
            localStorage.setItem('savedLng', userLng); 
            localStorage.setItem('savedCity', "الموقع الحالي");
            fetchPrayers(userLat, userLng);
            showToast("✅ تم تحديد الموقع");
        }
    }, (error) => { 
        // Handle specific error codes
        let errorMsg = "تعذر تحديد الموقع";
        switch(error.code) {
            case error.PERMISSION_DENIED:
                errorMsg = "يرجى السماح بالوصول للموقع من إعدادات الهاتف";
                break;
            case error.POSITION_UNAVAILABLE:
                errorMsg = "موقعك غير متاح حالياً، تأكد من تفعيل GPS";
                break;
            case error.TIMEOUT:
                errorMsg = "انتهت مهلة تحديد الموقع، حاول مرة أخرى";
                break;
        }
        showToast(errorMsg); 
    }, {
        enableHighAccuracy: true, 
        timeout: 15000,
        maximumAge: 600000 // 10 minutes cache
    });
};

function playFallbackPrayerTone() {
    try {
        const Ctx = window.AudioContext || window.webkitAudioContext;
        if (!Ctx) return;
        const ctx = new Ctx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = 660;
        gain.gain.value = 0.001;
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        gain.gain.exponentialRampToValueAtTime(0.25, ctx.currentTime + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
        osc.stop(ctx.currentTime + 1.22);
    } catch (e) {}
}

function notifyPrayerTime(prayerName) {
    const dateKey = new Date().toISOString().slice(0, 10);
    const eventKey = `${dateKey}-${prayerName}`;
    if (lastAlertKey === eventKey) return;
    lastAlertKey = eventKey;
    localStorage.setItem('lastPrayerAlertKey', lastAlertKey);

    // Use service worker notification if available
    if (alertsEnabled && serviceWorkerRegistration && serviceWorkerRegistration.active) {
        serviceWorkerRegistration.active.postMessage({
            type: 'SHOW_NOTIFICATION',
            title: `حان الآن وقت صلاة ${prayerName}`,
            options: {
                body: 'حان وقت الأذان 🕌',
                icon: './icon-192.png',
                badge: './icon-192.png',
                tag: eventKey,
                requireInteraction: true,
                vibrate: [200, 100, 200, 100, 200],
                actions: [
                    { action: 'open', title: 'فتح التطبيق 📱' },
                    { action: 'dismiss', title: 'إغلاق' }
                ]
            }
        });
    } else if (alertsEnabled && 'Notification' in window && Notification.permission === 'granted') {
        // Fallback to regular notification
        new Notification(`حان الآن وقت صلاة ${prayerName}`, {
            body: 'تقبل الله طاعتكم',
            tag: eventKey,
            icon: './icon-192.png',
            badge: './icon-192.png'
        });
    }

    // Play adhan audio
    const adhanUrl = ADHAN_AUDIO_URLS[selectedMuezzin] || ADHAN_AUDIO_URLS.makkah;
    const adhanAudio = new Audio(adhanUrl);
    adhanAudio.play().catch(() => {
        playFallbackPrayerTone();
    });
}

function applyAppSettingsFromSidebar() {
    const muezzinSelect = document.getElementById('muezzin-select');
    const alertsSelect = document.getElementById('alerts-select');
    const reciterSelect = document.getElementById('reciter-settings-select');

    if (muezzinSelect) {
        muezzinSelect.value = selectedMuezzin;
        muezzinSelect.onchange = function() {
            selectedMuezzin = this.value || 'makkah';
            localStorage.setItem('selectedMuezzin', selectedMuezzin);
            showToast("تم تحديث صوت الأذان");
        };
    }

    if (reciterSelect) {
        if (!['afs', 'basit', 'husary'].includes(selectedReciterSetting)) selectedReciterSetting = 'husary';
        reciterSelect.value = selectedReciterSetting;
        reciterSelect.onchange = function() {
            selectedReciterSetting = this.value || 'husary';
            localStorage.setItem('selectedReciterSetting', selectedReciterSetting);
            showToast("تم تحديث القارئ الافتراضي");
        };
    }

    if (alertsSelect) {
        alertsSelect.value = alertsEnabled ? 'on' : 'off';
        alertsSelect.onchange = async function() {
            alertsEnabled = this.value === 'on';
            localStorage.setItem('alertsEnabled', alertsEnabled ? 'on' : 'off');
            if (alertsEnabled && 'Notification' in window && Notification.permission !== 'granted') {
                try {
                    const permission = await Notification.requestPermission();
                    if (permission !== 'granted') {
                        showToast("تم تفعيل التنبيهات بدون إشعار النظام");
                    } else {
                        showToast("تم تفعيل الإشعارات");
                    }
                } catch (e) {
                    showToast("تعذر طلب إذن الإشعارات");
                }
            } else {
                showToast(alertsEnabled ? "تم تفعيل التنبيهات" : "تم إيقاف التنبيهات");
            }
        };
    }
}

function setRecitationButtonState(active) {
    const btn = document.getElementById('stop-recitation-btn');
    if (!btn) return;
    if (active) btn.classList.remove('hidden');
    else btn.classList.add('hidden');
}

function clearRecitingHighlight() {
    if (!currentRecitingAyahId) return;
    const el = document.getElementById(currentRecitingAyahId);
    if (el) el.classList.remove('reciting-ayah');
    currentRecitingAyahId = '';
}

function setRecitingHighlight(surahNum, ayahNum) {
    clearRecitingHighlight();
    const ayahId = `ayah-${surahNum}-${ayahNum}`;
    const el = document.getElementById(ayahId);
    if (el) {
        el.classList.add('reciting-ayah');
        currentRecitingAyahId = ayahId;
    }
}

function waitForAudioToEnd(audio) {
    return new Promise((resolve) => {
        const done = () => {
            audio.removeEventListener('ended', done);
            audio.removeEventListener('error', done);
            resolve();
        };
        audio.addEventListener('ended', done, { once: true });
        audio.addEventListener('error', done, { once: true });
    });
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getSurahAyahCount(surahNum) {
    if (surahAyahCountCache[surahNum]) return surahAyahCountCache[surahNum];
    const local = surahListCached.find(s => s.number === surahNum);
    if (local && local.numberOfAyahs) {
        surahAyahCountCache[surahNum] = local.numberOfAyahs;
        return local.numberOfAyahs;
    }
    try {
        const data = await fetchJsonWithRetry(`https://api.alquran.cloud/v1/surah/${surahNum}`);
        const cnt = data && data.data ? data.data.numberOfAyahs : 0;
        if (cnt) surahAyahCountCache[surahNum] = cnt;
        return cnt || 0;
    } catch (e) {
        return 0;
    }
}

async function getNextAyahRef(surahNum, ayahNum) {
    const cnt = await getSurahAyahCount(surahNum);
    if (cnt && ayahNum < cnt) return { surahNum, ayahNum: ayahNum + 1 };
    if (surahNum < 114) return { surahNum: surahNum + 1, ayahNum: 1 };
    return null;
}

async function ensureAyahVisible(surahNum, ayahNum) {
    const ayahId = `ayah-${surahNum}-${ayahNum}`;
    if (document.getElementById(ayahId)) return;
    await jumpToAyah(surahNum, ayahNum);
    for (let i = 0; i < 15; i++) {
        if (document.getElementById(ayahId)) return;
        await delay(120);
    }
}

async function startAyahRecitationLoop(startSurah, startAyah) {
    const edition = AYAH_RECITER_EDITIONS[selectedReciterSetting] || AYAH_RECITER_EDITIONS.husary;
    let ref = { surahNum: startSurah, ayahNum: startAyah };
    let nextAudio = null;
    let nextAudioUrl = null;
    
    while (ref && !recitationStopRequested) {
        await ensureAyahVisible(ref.surahNum, ref.ayahNum);
        setRecitingHighlight(ref.surahNum, ref.ayahNum);
        
        try {
            // Use preloaded next audio if available, otherwise fetch current
            let audioUrl = nextAudioUrl;
            let audio = nextAudio;
            
            if (!audioUrl) {
                // Fetch current ayah audio if not preloaded
                const data = await fetchJsonWithRetry(`https://api.alquran.cloud/v1/ayah/${ref.surahNum}:${ref.ayahNum}/${edition}`, {}, 1, 10000);
                audioUrl = data && data.data ? data.data.audio : '';
                if (!audioUrl) throw new Error('no audio');
                audio = new Audio(audioUrl);
            }
            
            recitationAudio = audio;
            
            // Preload next ayah while current is playing
            const nextRef = await getNextAyahRef(ref.surahNum, ref.ayahNum);
            if (nextRef && !recitationStopRequested) {
                try {
                    const nextData = await fetchJsonWithRetry(`https://api.alquran.cloud/v1/ayah/${nextRef.surahNum}:${nextRef.ayahNum}/${edition}`, {}, 1, 10000);
                    nextAudioUrl = nextData && nextData.data ? nextData.data.audio : '';
                    if (nextAudioUrl) {
                        nextAudio = new Audio(nextAudioUrl);
                        nextAudio.preload = 'auto';
                        // Start loading the audio
                        nextAudio.load();
                    }
                } catch (e) {
                    nextAudio = null;
                    nextAudioUrl = null;
                }
            } else {
                nextAudio = null;
                nextAudioUrl = null;
            }
            
            // Play current audio
            await recitationAudio.play();
            await waitForAudioToEnd(recitationAudio);
            
        } catch (e) {
            showToast("تعذر تشغيل قراءة بعض الآيات");
            break;
        } finally {
            if (recitationAudio) {
                recitationAudio.pause();
                recitationAudio.src = '';
                recitationAudio = null;
            }
        }
        
        if (recitationStopRequested) break;
        ref = await getNextAyahRef(ref.surahNum, ref.ayahNum);
    }
    
    // Clean up preloaded audio
    if (nextAudio) {
        nextAudio.pause();
        nextAudio.src = '';
    }
}

async function fetchPrayers(lat, lng) {
    let d = new Date();
    try {
        let data = await fetchJsonWithRetry(`https://api.aladhan.com/v1/timings/${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()}?latitude=${lat}&longitude=${lng}&method=5`);
        let t = data.data.timings;
        const list = document.getElementById('prayer-times-list'); if(list) list.innerHTML='';
        let nextT=null, nextN='', now=new Date();
        
        // Update widget date
        updatePrayerWidgetDate();
        
        // Prayer configuration
        const prayers = [
            {id:'Fajr',n:'الفجر'},
            {id:'Sunrise',n:'الشروق'},
            {id:'Dhuhr',n:'الظهر'},
            {id:'Asr',n:'العصر'},
            {id:'Maghrib',n:'المغرب'},
            {id:'Isha',n:'العشاء'}
        ];
        
        prayers.forEach(p => {
            let [h, m] = t[p.id].split(':');
            let pDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m, 0);
            let h12 = h>12?h-12:(h==0?12:h), ampm = h>=12?'م':'ص';
            
            // Check if this is the next prayer
            if(pDate > now && !nextT && p.id !== 'Sunrise') { 
                nextT = pDate; 
                nextN = p.n;
            }
            
            // Update detailed list
            if(list) list.innerHTML += `<div class="prayer-item ${nextN===p.n?'active-prayer':''}"><span>${p.n}</span><span>${h12}:${m} <small>${ampm}</small></span></div>`;
            
            // Update final widget prayer times
            const finalWidget = document.getElementById('final-' + p.id.toLowerCase());
            const timeEl = document.getElementById('widget-' + p.id.toLowerCase());
            
            if(timeEl) {
                timeEl.innerText = `${h12}:${m}`;
            }
            
            // Highlight next prayer
            if(finalWidget) {
                finalWidget.classList.remove('active');
                if(nextN === p.n) {
                    finalWidget.classList.add('active');
                }
            }
        });
        
        if(!nextT) { 
            nextT = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, t.Fajr.split(':')[0], t.Fajr.split(':')[1], 0); 
            nextN = 'الفجر';
            // Reset all and highlight Fajr
            document.querySelectorAll('.prayer-item-final').forEach(el => el.classList.remove('active'));
            const fajrEl = document.getElementById('final-fajr');
            if(fajrEl) fajrEl.classList.add('active');
        }
        
        nextPrayerEvent = { time: nextT, name: nextN };
        
        // Schedule notifications in service worker for background alerts
        if (alertsEnabled && serviceWorkerRegistration) {
            schedulePrayerNotificationsInSW(t);
        }

        // تزامن مع ويدجت الأندرويد
        if (window.Android && window.Android.updatePrayerTimes) {
            window.Android.updatePrayerTimes(t.Fajr, t.Dhuhr, t.Asr, t.Maghrib, t.Isha, t.Sunrise);
        }
        
        // Update next prayer name
        const nextPrayerEl = document.getElementById('next-prayer-name');
        if(nextPrayerEl) nextPrayerEl.innerText = nextN;
        
        // Highlight countdown section
        const countdownSection = document.getElementById('section-countdown');
        if(countdownSection) countdownSection.classList.add('active-next');
        
        if(prayerInterval) clearInterval(prayerInterval);
        prayerInterval = setInterval(() => {
            let diff = nextT - new Date();
            if(diff<=0) {
                notifyPrayerTime(nextN);
                clearInterval(prayerInterval);
                fetchPrayers(userLat, userLng);
            }
            else {
                let h=Math.floor((diff/3600000)%24);
                let m=Math.floor((diff/60000)%60);
                let s=Math.floor((diff/1000)%60);
                
                const hoursEl = document.getElementById('countdown-hours');
                const minutesEl = document.getElementById('countdown-minutes');
                const secondsEl = document.getElementById('countdown-seconds');
                
                // Update with flip animation - RTL order: seconds (right) - minutes - hours (left)
                updateDigitWithAnimation(secondsEl, s.toString().padStart(2,'0'));
                updateDigitWithAnimation(minutesEl, m.toString().padStart(2,'0'));
                updateDigitWithAnimation(hoursEl, h.toString().padStart(2,'0'));
            }
        }, 1000);
    } catch(e) {
        showToast("تعذر تحميل مواقيت الصلاة حالياً");
    }
}

// Helper function for digit flip animation
function updateDigitWithAnimation(element, newValue) {
    if(!element) return;
    if(element.innerText !== newValue) {
        element.classList.add('changing');
        element.innerText = newValue;
        setTimeout(() => {
            element.classList.remove('changing');
        }, 300);
    }
}

// --- 7. عرض مكتبة الحديث ---
function renderHadithLibraries() {
    const list = document.getElementById('hadith-library-list');
    if(!list) return;
    list.innerHTML = '';
    Object.entries(hadithLibraries).forEach(([bookId, book]) => {
        const count = book.hadiths.length;
        list.innerHTML += `
        <button class="hadith-library-btn" onclick="openHadithBook('${bookId}')">
            <div class="hadith-library-main">
                <span class="hadith-library-title">[${book.icon}] ${book.title}</span>
                <span class="hadith-library-sub">${book.description}</span>
            </div>
            <span class="hadith-library-count">${book.sourceLabel} • ${toArabicNumerals(count)} حديث</span>
        </button>`;
    });

    hadithApiCategories.forEach(cat => {
        list.innerHTML += `
        <button class="hadith-library-btn" onclick="openHadithApiCategory('${cat.id}', '${cat.title.replace(/'/g, "\\'")}')">
            <div class="hadith-library-main">
                <span class="hadith-library-title">[API] ${cat.title}</span>
                <span class="hadith-library-sub">منصة أحاديث موثقة (موسوعة الحديث)</span>
            </div>
            <span class="hadith-library-count">موثق • ${toArabicNumerals(cat.hadeeths_count)} حديث</span>
        </button>`;
    });
}

window.openHadithBook = function(bookId) {
    const library = hadithLibraries[bookId];
    if(!library) return;
    currentHadithBookTitle = library.title || 'الحديث';
    let container = document.getElementById('hadith-list-container');
    container.innerHTML = ''; 
    if(library.hadiths) {
        library.hadiths.forEach(hadith => {
            container.innerHTML += `<div class="hadith-card"><p class="hadith-text">${hadith.text}</p><p class="hadith-narrator">${hadith.narrator}</p></div>`;
        });
    }
    navigateTo('hadithReader');
};

async function loadHadithApiCategories() {
    // عرض الكتب المحلية أولاً دائماً
    renderHadithLibraries();
    
    try {
        const data = await fetchJsonWithRetry('https://hadeethenc.com/api/v1/categories/list/?language=ar', {}, 1, 9000);
        hadithApiCategories = (data || [])
            .filter(cat => !cat.parent_id && parseInt(cat.hadeeths_count || '0', 10) > 0)
            .slice(0, 8)
            .map(cat => ({
                id: cat.id,
                title: cat.title,
                hadeeths_count: cat.hadeeths_count
            }));
        renderHadithLibraries();
    } catch (e) {
        // نبقي على مكتبة الكتب المحلية لو فشل الإنترنت
        console.log('API categories failed, using local libraries only');
    }
}

window.openHadithApiCategory = async function(categoryId, categoryTitle) {
    currentHadithBookTitle = categoryTitle || 'منصة الأحاديث';
    const container = document.getElementById('hadith-list-container');
    if(!container) return;
    container.innerHTML = '<div class="hadith-card"><p class="hadith-text">جاري تحميل الأحاديث الموثقة...</p></div>';
    navigateTo('hadithReader');

    try {
        const listData = await fetchJsonWithRetry(`https://hadeethenc.com/api/v1/hadeeths/list/?language=ar&category_id=${categoryId}&page=1&per_page=15`, {}, 1, 9000);
        const items = (listData && listData.data) ? listData.data : [];
        if(items.length === 0) {
            container.innerHTML = '<div class="hadith-card"><p class="hadith-text">لا توجد أحاديث متاحة الآن في هذا التصنيف.</p></div>';
            return;
        }

        const detailPromises = items.map(item =>
            fetchJsonWithRetry(`https://hadeethenc.com/api/v1/hadeeths/one/?language=ar&id=${item.id}`, {}, 1, 9000)
                .catch(() => null)
        );
        const details = await Promise.all(detailPromises);

        container.innerHTML = '';
        details.filter(Boolean).forEach(h => {
            const narratorLine = [h.attribution, h.grade].filter(Boolean).join(' - ');
            container.innerHTML += `<div class="hadith-card"><p class="hadith-text">${h.hadeeth || h.title || ''}</p><p class="hadith-narrator">${narratorLine || 'موسوعة الحديث النبوي'}</p></div>`;
        });
        if(container.innerHTML.trim() === '') {
            container.innerHTML = '<div class="hadith-card"><p class="hadith-text">تعذر تحميل التفاصيل الآن.</p></div>';
        }
    } catch (e) {
        container.innerHTML = '<div class="hadith-card"><p class="hadith-text">تعذر تحميل الأحاديث من المنصة الآن، جرّب لاحقًا.</p></div>';
    }
};

// --- 8. المصحف (نظام الصفحات مع ذكاء اصطناعي لتظبيط الخط) ---
let surahListCached = [];
let quranBookmarks = JSON.parse(localStorage.getItem('quranBookmarks')) || [];
let quranCurrentPage = parseInt(localStorage.getItem('quranCurrentPage')) || 1;
let quranPageCache = {}; 
let quranTextMode = localStorage.getItem('quranTextMode') || 'kfgqpc';
let selectedAyahContext = null;
let ayahLongPressTimer = null;
const AYAH_LONG_PRESS_MS = 550;

window.updateQuranTextMode = function(mode) {
    quranTextMode = mode === 'classic' ? 'classic' : 'kfgqpc';
    localStorage.setItem('quranTextMode', quranTextMode);
    document.body.classList.toggle('quran-font-classic', quranTextMode === 'classic');
    if(quranCurrentPage) {
        quranPageCache = {};
        loadQuranPage(quranCurrentPage);
    }
    showToast(quranTextMode === 'kfgqpc' ? "تم تفعيل نمط مجمع الملك فهد" : "تم تفعيل النمط العثماني القياسي");
};

function getSurahNameByNumber(surahNumber) {
    const match = surahListCached.find(s => s.number === surahNumber);
    return match ? match.name : `سورة ${toArabicNumerals(surahNumber)}`;
}

function mapQuranComPageDataToLegacyShape(verses) {
    return {
        ayahs: verses.map(v => {
            const [surahNum, ayahNum] = v.verse_key.split(':').map(n => parseInt(n, 10));
            return {
                surah: { number: surahNum, name: getSurahNameByNumber(surahNum) },
                numberInSurah: ayahNum,
                text: (v.text_uthmani || '').trim(),
                juz: v.juz_number
            };
        })
    };
}

function normalizeSurahDisplayName(name) {
    if (!name) return '';
    // Remove "سورة" prefix if present to avoid duplication
    return name.replace(/^سورة\s*/, '').trim();
}

function getSurahNameWithoutPrefix(name) {
    if (!name) return '';
    return name.replace(/^سورة\s+/, '').trim();
}

function getAyahDisplayText(ayahObj) {
    const sNum = ayahObj.surah.number;
    if (sNum !== 1 && sNum !== 9 && ayahObj.numberInSurah === 1) {
        return ayahObj.text.replace("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ ", "");
    }
    return ayahObj.text;
}

async function loadQuranIndex() {
    if(surahListCached.length>0) return;
    try {
        let data = await fetchJsonWithRetry('https://api.alquran.cloud/v1/surah');
        surahListCached = data.data;
        const list = document.getElementById('surah-list'); list.innerHTML='';
        const audioSel = document.getElementById('surah-select-audio'); if(audioSel) audioSel.innerHTML='<option value="">اختر السورة...</option>';
        const summaryEl = document.getElementById('quran-index-summary');
        if(summaryEl) {
            summaryEl.innerText = `فهرس المصحف - ${toArabicNumerals(data.data.length)} سورة`;
        }

        surahListCached.forEach(s => {
            const cleanName = normalizeSurahDisplayName(s.name);
            list.innerHTML += `<button class="surah-card-btn" onclick="jumpToAyah(${s.number}, 1)"><span class="surah-number">${toArabicNumerals(s.number)}</span> <span>${cleanName}</span></button>`;
            if(audioSel) audioSel.innerHTML += `<option value="${s.number}">${cleanName}</option>`;
        });
    } catch(e) {
        const summaryEl = document.getElementById('quran-index-summary');
        if(summaryEl) summaryEl.innerText = "تعذر تحميل الفهرس الآن";
    }
}

window.jumpToPage = (pageNum) => {
    navigateTo('quranReader');
    loadQuranPage(pageNum);
};

window.jumpToAyah = async (sNum, aNum) => {
    document.getElementById('quran-text').innerHTML="جاري التحميل...";
    navigateTo('quranReader');
    const tryQuranComFirst = quranTextMode === 'kfgqpc';
    try {
        if(tryQuranComFirst) {
            let data = await fetchJsonWithRetry(`https://api.quran.com/api/v4/verses/by_key/${sNum}:${aNum}?fields=page_number`);
            let page = data.verse.page_number;
            loadQuranPage(page, `${sNum}-${aNum}`);
        } else {
            let backup = await fetchJsonWithRetry(`https://api.alquran.cloud/v1/ayah/${sNum}:${aNum}/quran-uthmani`);
            let page = backup.data.page;
        loadQuranPage(page, `${sNum}-${aNum}`);
        }
    } catch(e) {
        try {
            if(tryQuranComFirst) {
                let backup = await fetchJsonWithRetry(`https://api.alquran.cloud/v1/ayah/${sNum}:${aNum}/quran-uthmani`);
                loadQuranPage(backup.data.page, `${sNum}-${aNum}`);
            } else {
                let data = await fetchJsonWithRetry(`https://api.quran.com/api/v4/verses/by_key/${sNum}:${aNum}?fields=page_number`);
                loadQuranPage(data.verse.page_number, `${sNum}-${aNum}`);
            }
        } catch(err) {
            document.getElementById('quran-text').innerHTML = "خطأ في الاتصال";
        }
    }
};

window.loadQuranPage = async (pageNum, scrollToAyahId = null) => {
    if(pageNum < 1) pageNum = 1;
    if(pageNum > 604) pageNum = 604;
    
    quranCurrentPage = pageNum;
    localStorage.setItem('quranCurrentPage', quranCurrentPage);

    // Save as last read
    const firstAyah = quranPageCache[pageNum]?.ayahs?.[0];
    if (firstAyah) {
        saveLastRead(firstAyah.surah.number, pageNum);
    }

    if(quranPageCache[pageNum]) {
        renderPageData(quranPageCache[pageNum], pageNum, scrollToAyahId);
        preloadPages(pageNum); 
        return;
    }

    document.getElementById('quran-text').innerHTML="جاري التحميل...";
    const tryQuranComFirst = quranTextMode === 'kfgqpc';
    try {
        if(tryQuranComFirst) {
            let quranComData = await fetchJsonWithRetry(`https://api.quran.com/api/v4/verses/by_page/${pageNum}?language=ar&words=false&fields=text_uthmani,verse_key,page_number,juz_number`);
            let mapped = mapQuranComPageDataToLegacyShape(quranComData.verses || []);
        quranPageCache[pageNum] = mapped;
        saveLastRead(mapped.ayahs[0].surah.number, pageNum);
        renderPageData(mapped, pageNum, scrollToAyahId);
    } else {
        let data = await fetchJsonWithRetry(`https://api.alquran.cloud/v1/page/${pageNum}/quran-uthmani`);
    quranPageCache[pageNum] = data.data; 
    saveLastRead(data.data.ayahs[0].surah.number, pageNum);
    renderPageData(data.data, pageNum, scrollToAyahId);
    }
        preloadPages(pageNum); 
    } catch(e) {
        try {
            if(tryQuranComFirst) {
                let data = await fetchJsonWithRetry(`https://api.alquran.cloud/v1/page/${pageNum}/quran-uthmani`);
                quranPageCache[pageNum] = data.data;
                renderPageData(data.data, pageNum, scrollToAyahId);
            } else {
                let quranComData = await fetchJsonWithRetry(`https://api.quran.com/api/v4/verses/by_page/${pageNum}?language=ar&words=false&fields=text_uthmani,verse_key,page_number,juz_number`);
                let mapped = mapQuranComPageDataToLegacyShape(quranComData.verses || []);
                quranPageCache[pageNum] = mapped;
                renderPageData(mapped, pageNum, scrollToAyahId);
            }
            preloadPages(pageNum);
        } catch(err) {
            document.getElementById('quran-text').innerHTML = "خطأ في الاتصال";
        }
    }
};

// دالة التناسب التلقائي لحجم خط المصحف لملء الصفحة
function autoFitQuranFontSize() {
    const container = document.getElementById('quran-text');
    if (!container) return;

    // نبدأ بحجم خط افتراضي كبير ثم نصغره حتى يناسب الشاشة تماماً
    let fontSize = 2.8; // rem (نبدأ بحجم أكبر قليلاً)
    const minFontSize = 1.1; // rem
    const maxHeight = container.clientHeight;

    // تعيين حجم الخط المبدئي
    container.style.fontSize = `${fontSize}rem`;

    // تقليل حجم الخط إذا كان هناك تمرير (Scroll) أو تجاوز للارتفاع
    // نقوم بالتحقق من scrollHeight مقارنة بـ clientHeight
    while (container.scrollHeight > maxHeight && fontSize > minFontSize) {
        fontSize -= 0.05; // تصغير تدريجي أدق
        container.style.fontSize = `${fontSize}rem`;
    }
    
    // إذا كان النص لا يزال أصغر بكثير من الصفحة، يمكننا محاولة تكبيره قليلاً (اختياري)
    // لكن القاعدة الأساسية هي عدم وجود سكرول
    
    // تحديث المتغير العالمي لضمان الاتساق في الصفحة الحالية
    document.documentElement.style.setProperty('--quran-font-size', `${fontSize}rem`);
}

function renderPageData(pageData, pageNum, scrollToAyahId) {
    let ayahs = pageData.ayahs;
    let juzNum = toArabicNumerals(ayahs[0].juz);
    
    // تأمين جلب اسم السورة من القائمة المحلية دائماً لضمان عدم ظهور أرقام
    const getSurahName = (ayah) => {
        const sNum = ayah.surah ? ayah.surah.number : 0;
        return surahsNames[sNum - 1] || `سورة ${sNum}`;
    };

    let surahsOnPage = [...new Set(ayahs.map(a => getSurahName(a)))];
    const primarySurahName = surahsOnPage[0];
    
    let titleEl = document.getElementById('header-title');
    if(titleEl) titleEl.innerText = primarySurahName;
    
    let mJuz = document.getElementById('mushaf-juz-name');
    let mSurah = document.getElementById('mushaf-surah-name');
    let mPageNum = document.getElementById('mushaf-page-num');
    if(mJuz) mJuz.innerText = `الجزء ${juzNum}`;
    if(mSurah) mSurah.innerText = primarySurahName;
    if(mPageNum) mPageNum.innerText = toArabicNumerals(pageNum);

    let html = '';
    const ayahContextMap = {};
    let lastSurahNum = null;

    ayahs.forEach(a => {
        let sName = getSurahName(a);
        let sNum = a.surah.number;
        
        // إذا تغيرت السورة في نفس الصفحة، نضع فاصل السورة والبسملة
        if (sNum !== lastSurahNum) {
            html += `<div class="surah-divider">سُورَةُ ${sName}</div>`;
            if (sNum !== 1 && sNum !== 9) {
                html += `<div class="bismillah-divider">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>`;
            }
            lastSurahNum = sNum;
        }
        
        let text = getAyahDisplayText(a);
        let isMarked = quranBookmarks.some(b => b.surah === sNum && b.ayah === a.numberInSurah);
        let markClass = isMarked ? "bookmarked-ayah" : "";
        let ayahUniqueId = `ayah-${sNum}-${a.numberInSurah}`;

        ayahContextMap[ayahUniqueId] = { surahNum: sNum, surahName: sName, ayahNum: a.numberInSurah, text };
        html += `<span class="ayah-span ${markClass}" id="${ayahUniqueId}">${text} <span class="ayah-symbol">﴿${toArabicNumerals(a.numberInSurah)}﴾</span></span> `;
    });
    
    document.getElementById('quran-text').innerHTML = html;
    
    // منطق التناسب التلقائي لحجم الخط (Auto-fit)
    if (localStorage.getItem('fontSizeManual') === 'true') {
        // إذا كان المستخدم حدد خط يدوي، نطبق الحجم المخزن
        const savedFontSize = localStorage.getItem('fontSize') || 1.6;
        document.documentElement.style.setProperty('--quran-font-size', `${savedFontSize * 1.3}rem`);
        document.getElementById('quran-text').style.fontSize = ''; // نترك الـ CSS يتعامل معه عبر المتغير
    } else {
        autoFitQuranFontSize();
    }

    bindAyahLongPressActions(ayahContextMap);
    
    // التمرير للأعلى عند تغيير الصفحة
    document.getElementById('quran-text').scrollTop = 0;

    if(window.handleTopSearch) window.handleTopSearch();
    if(scrollToAyahId) {
        setTimeout(() => {
            let el = document.getElementById(`ayah-${scrollToAyahId}`);
            if(el) { 
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                el.style.backgroundColor = "rgba(221, 167, 123, 0.4)"; 
            }
        }, 100);
    }
}

function bindAyahLongPressActions(ayahContextMap) {
    const ayahElements = document.querySelectorAll('.ayah-span');
    ayahElements.forEach(el => {
        const ctx = ayahContextMap[el.id];
        if (!ctx) return;

        const startPress = (e) => {
            if (window.location.hash !== '#quranReader') return;
            if (e.type === 'mousedown' && e.button !== 0) return;
            clearTimeout(ayahLongPressTimer);
            ayahLongPressTimer = setTimeout(() => {
                selectedAyahContext = ctx;
                openAyahActionsModal();
                if (navigator.vibrate) navigator.vibrate(35);
            }, AYAH_LONG_PRESS_MS);
        };
        const cancelPress = () => {
            clearTimeout(ayahLongPressTimer);
        };

        el.addEventListener('touchstart', startPress, { passive: true });
        el.addEventListener('touchend', cancelPress, { passive: true });
        el.addEventListener('touchcancel', cancelPress, { passive: true });
        el.addEventListener('mousedown', startPress);
        el.addEventListener('mouseup', cancelPress);
        el.addEventListener('mouseleave', cancelPress);
        el.addEventListener('click', (e) => e.preventDefault());
    });
}

async function preloadPages(currentPage) {
    let pagesToPreload = [currentPage + 1, currentPage + 2, currentPage - 1].filter(p => p >= 1 && p <= 604);
    const tryQuranComFirst = quranTextMode === 'kfgqpc';
    for(let p of pagesToPreload) {
        if(!quranPageCache[p]) {
            try {
                if(tryQuranComFirst) {
                    let quranComData = await fetchJsonWithRetry(`https://api.quran.com/api/v4/verses/by_page/${p}?language=ar&words=false&fields=text_uthmani,verse_key,page_number,juz_number`, {}, 1, 7000);
                    quranPageCache[p] = mapQuranComPageDataToLegacyShape(quranComData.verses || []);
                } else {
                    let data = await fetchJsonWithRetry(`https://api.alquran.cloud/v1/page/${p}/quran-uthmani`, {}, 1, 7000);
                    quranPageCache[p] = data.data;
                }
            } catch(e) {} 
        }
    }
}

window.navigatePage = function(step) {
    // التقليب يمين وشمال (خطوة 1 للصفحة التالية، -1 للسابقة)
    animatePageFlip(step);
    hideSwipeHint();
    loadQuranPage(quranCurrentPage + step);
};

// --- السحب باللمس لتقليب الصفحات ---
let touchstartX = 0;
let touchendX = 0;
let touchstartY = 0;
let touchendY = 0;
let swipeHintHidden = false;

function hideSwipeHint() {
    if (swipeHintHidden) return;
    const hint = document.getElementById('swipe-hint');
    if (hint) hint.style.display = 'none';
    swipeHintHidden = true;
}

function animatePageFlip(step) {
    const pageEl = document.getElementById('mushaf-page');
    if (!pageEl) return;
    pageEl.classList.remove('flip-next', 'flip-prev', 'flip-glow');
    void pageEl.offsetWidth;
    pageEl.classList.add(step > 0 ? 'flip-next' : 'flip-prev');
    pageEl.classList.add('flip-glow');
    setTimeout(() => pageEl.classList.remove('flip-glow'), 320);
}

function handleSwipe() {
    const diffX = touchendX - touchstartX;
    const diffY = touchendY - touchstartY;

    // لو الحركة رأسية فسيبها سكرول طبيعي
    if (Math.abs(diffY) > Math.abs(diffX)) return;

    // الحساسية مضبوطة على 40 بكسل
    if (Math.abs(diffX) > 40) {
        if (touchendX > touchstartX) {
            animatePageFlip(-1);
                loadQuranPage(quranCurrentPage - 1);
        } else {
            animatePageFlip(1);
                loadQuranPage(quranCurrentPage + 1);
        }
        hideSwipeHint();
    }
}

document.addEventListener('touchstart', e => {
    if(window.location.hash === '#quranReader') {
        touchstartX = e.changedTouches[0].screenX;
        touchstartY = e.changedTouches[0].screenY;
    }
}, { passive: true });

document.addEventListener('touchend', e => {
    if(window.location.hash === '#quranReader') {
        touchendX = e.changedTouches[0].screenX;
        touchendY = e.changedTouches[0].screenY;
        handleSwipe();
    }
}, { passive: true });

// ------------------------------------------

window.toggleBookmark = function(sNum, sName, aNum, text) {
    let index = quranBookmarks.findIndex(b => b.surah === sNum && b.ayah === aNum);
    let ayahUniqueId = `ayah-${sNum}-${aNum}`;
    let el = document.getElementById(ayahUniqueId);
    if(index > -1) {
        quranBookmarks.splice(index, 1);
        if(el) el.classList.remove('bookmarked-ayah');
        showToast("تم إزالة العلامة المرجعية");
    } else {
        quranBookmarks.push({surah: sNum, surahName: sName, ayah: aNum, text: text});
        if(el) el.classList.add('bookmarked-ayah');
        showToast("تم حفظ الآية");
    }
    localStorage.setItem('quranBookmarks', JSON.stringify(quranBookmarks));
    renderBookmarks();
};

function openAyahActionsModal() {
    const modal = document.getElementById('ayah-actions-modal');
    const title = document.getElementById('ayah-actions-title');
    if (!modal || !selectedAyahContext) return;
    if (title) {
        title.innerText = `خيارات الآية (${selectedAyahContext.surahName} ${toArabicNumerals(selectedAyahContext.ayahNum)})`;
    }
    modal.classList.remove('hidden');
    requestAnimationFrame(() => modal.classList.add('show'));
}

window.closeAyahActionsModal = function() {
    const modal = document.getElementById('ayah-actions-modal');
    if (!modal) return;
    modal.classList.remove('show');
    setTimeout(() => modal.classList.add('hidden'), 220);
};

window.toggleSelectedAyahBookmark = function() {
    if (!selectedAyahContext) return;
    const { surahNum, surahName, ayahNum, text } = selectedAyahContext;
    toggleBookmark(surahNum, surahName, ayahNum, text);
    closeAyahActionsModal();
};

window.playAyahRecitation = async function() {
    if (!selectedAyahContext) return;
    const { surahNum, ayahNum } = selectedAyahContext;
    if (recitationActive) stopAyahRecitation();
    recitationStopRequested = false;
    recitationActive = true;
    setRecitationButtonState(true);
    closeAyahActionsModal();
    showToast("بدأت القراءة المتواصلة");
    await startAyahRecitationLoop(surahNum, ayahNum);
    recitationActive = false;
    recitationStopRequested = false;
    setRecitationButtonState(false);
    clearRecitingHighlight();
};

window.stopAyahRecitation = function() {
    recitationStopRequested = true;
    if (recitationAudio) {
        recitationAudio.pause();
        recitationAudio.src = '';
        recitationAudio = null;
    }
    recitationActive = false;
    setRecitationButtonState(false);
    clearRecitingHighlight();
};

window.openAyahTafsir = async function() {
    if (!selectedAyahContext) return;
    const { surahNum, ayahNum } = selectedAyahContext;
    const tafsirModal = document.getElementById('tafsir-modal');
    const tafsirTitle = document.getElementById('tafsir-modal-title');
    const tafsirText = document.getElementById('tafsir-modal-text');
    if (!tafsirModal || !tafsirText) return;

    if (tafsirTitle) {
        tafsirTitle.innerText = `تفسير الآية (${selectedAyahContext.surahName} ${toArabicNumerals(ayahNum)})`;
    }
    tafsirText.innerText = "جاري تحميل التفسير...";
    tafsirModal.classList.remove('hidden');
    requestAnimationFrame(() => tafsirModal.classList.add('show'));
    closeAyahActionsModal();

    try {
        const data = await fetchJsonWithRetry(`https://api.alquran.cloud/v1/ayah/${surahNum}:${ayahNum}/ar.muyassar`);
        tafsirText.innerText = (data && data.data && data.data.text) ? data.data.text : "تعذر تحميل التفسير الآن.";
    } catch (e) {
        tafsirText.innerText = "تعذر تحميل التفسير الآن. حاول لاحقاً.";
    }
};

window.closeTafsirModal = function() {
    const tafsirModal = document.getElementById('tafsir-modal');
    if (!tafsirModal) return;
    tafsirModal.classList.remove('show');
    setTimeout(() => tafsirModal.classList.add('hidden'), 220);
};

window.renderBookmarks = function() {
    let list = document.getElementById('bookmarks-list'); if(!list) return;
    if(quranBookmarks.length === 0) { list.innerHTML = "<p style='text-align:center; opacity:0.7; font-size:1.2rem;'>لم تحفظ أي آيات بعد.</p>"; return; }
    list.innerHTML = '';
    quranBookmarks.forEach(b => {
        list.innerHTML += `
        <div class="bookmark-item">
            <h3>${b.surahName} - آية ${toArabicNumerals(b.ayah)}</h3>
            <p>${b.text} ﴿${toArabicNumerals(b.ayah)}﴾</p>
            <div class="actions">
                <button class="btn" style="padding: 8px 15px; font-size: 1rem; flex: 1;" onclick="jumpToAyah(${b.surah}, ${b.ayah})">الذهاب</button>
                <button class="btn" style="padding: 8px 15px; font-size: 1rem; width: auto; background: transparent; color: #ff4d4d; border-color: #ff4d4d;" onclick="toggleBookmark(${b.surah}, '${b.surahName}', ${b.ayah}, '')">حذف</button>
            </div>
        </div>`;
    });
};

// --- 9. الأذكار والسبحة ---
let curCat=[], curIdx=0, remC=0;
window.startAzkar = (type) => { curCat = azkarData[type]; curIdx = 0; navigateTo('azkarReader'); showZikr(); };
function showZikr() {
    if(curIdx >= curCat.length) { showToast("تقبل الله منك"); return goBack(); }
    let z = curCat[curIdx]; remC = z.count;
    document.getElementById('zikr-text').innerText = z.text;
    document.getElementById('zikr-proof').innerText = z.proof;
    document.getElementById('zikr-count').innerText = toArabicNumerals(remC);
    document.getElementById('progress-bar').style.width = `${((curIdx+1)/curCat.length)*100}%`;
    document.getElementById('progress-text').innerText = `${toArabicNumerals(curIdx + 1)} من ${toArabicNumerals(curCat.length)}`;
}
document.getElementById('counter-btn').onclick = () => {
    if(remC > 1) { remC--; document.getElementById('zikr-count').innerText = toArabicNumerals(remC); if(navigator.vibrate) navigator.vibrate(40); }
    else { if(navigator.vibrate) navigator.vibrate(150); curIdx++; showZikr(); }
};

window.incrementMasbaha = () => { 
    let c = parseInt(document.getElementById('masbaha-count').innerText) + 1; 
    document.getElementById('masbaha-count').innerText = c; 
    localStorage.setItem('masbahaCount', c); 
    if(navigator.vibrate) navigator.vibrate(30);
    // تزامن مع ويدجت الأندرويد
    if (window.Android && window.Android.updateMasbahaCount) {
        window.Android.updateMasbahaCount(c);
    }
};
window.resetMasbaha = () => { 
    document.getElementById('masbaha-count').innerText = 0; 
    localStorage.setItem('masbahaCount', 0); 
    // تزامن مع ويدجت الأندرويد
    if (window.Android && window.Android.updateMasbahaCount) {
        window.Android.updateMasbahaCount(0);
    }
};

// --- 10. إدارة الصوتيات والقرّاء ---
let allReciters = [];
let favoriteReciters = JSON.parse(localStorage.getItem('favoriteReciters') || '[]');
let selectedReciter = null;
let selectedRecitation = null;
let audioPlayer = new Audio();
let isPlaying = false;
let radioAudio = null;
let allRadios = [];
let currentRadio = null;

// --- 11. إدارة الإذاعات ---
async function loadRadios() {
    const radioListEl = document.getElementById('radio-list');
    if (!radioListEl) return;

    try {
        const data = await fetchJsonWithRetry('https://mp3quran.net/api/v3/radios?language=ar');
        if (data && data.radios) {
            allRadios = data.radios;
            displayRadios(allRadios);
        }
    } catch (error) {
        console.error("Error loading radios:", error);
        radioListEl.innerHTML = '<div class="loading-spinner">تعذر تحميل الإذاعات، تأكد من الاتصال بالإنترنت.</div>';
    }
}

function displayRadios(radios) {
    const radioListEl = document.getElementById('radio-list');
    if (!radioListEl) return;

    if (radios.length === 0) {
        radioListEl.innerHTML = '<div class="loading-spinner">لا توجد إذاعات تطابق بحثك.</div>';
        return;
    }

    radioListEl.innerHTML = '';
    radios.forEach(radio => {
        const isActive = currentRadio && currentRadio.id === radio.id;
        const item = document.createElement('div');
        item.className = `radio-item ${isActive ? 'active' : ''}`;
        item.onclick = () => selectRadio(radio);
        
        item.innerHTML = `
            <div class="radio-item-play-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="${isActive && !radioAudio.paused ? 'M6 19h4V5H6v14zm8-14v14h4V5h-4z' : 'M8 5v14l11-7z'}"/>
                </svg>
            </div>
            <div class="radio-item-info">
                <div class="radio-item-name">${radio.name}</div>
                <div class="radio-item-tags">${radio.recent_date || ''}</div>
            </div>
        `;
        radioListEl.appendChild(item);
    });
}

window.filterRadios = function(query) {
    const q = query.trim().toLowerCase();
    const filtered = allRadios.filter(r => r.name.toLowerCase().includes(q));
    displayRadios(filtered);
};

window.selectRadio = function(radio) {
    if (currentRadio && currentRadio.id === radio.id) {
        toggleRadioPlay();
        return;
    }

    if (radioAudio) {
        radioAudio.pause();
        radioAudio.src = '';
    }

    currentRadio = radio;
    document.getElementById('radio-current-title').innerText = radio.name;
    document.getElementById('radio-current-subtitle').innerText = "بث مباشر";
    
    radioAudio = new Audio(radio.url);
    radioAudio.volume = document.getElementById('radio-volume').value;
    
    // UI update
    displayRadios(allRadios);
    toggleRadioPlay();
};

window.toggleRadioPlay = function() {
    const playIcon = document.getElementById('radio-play-icon');
    const visualizer = document.querySelector('.radio-visualizer');
    
    if (!radioAudio) {
        if (allRadios.length > 0) {
            selectRadio(allRadios[0]);
            return;
        } else {
            showToast('جاري تحميل الإذاعات...');
            return;
        }
    }

    if (radioAudio.paused) {
        radioAudio.play().then(() => {
            playIcon.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
            visualizer.classList.add('playing');
            showToast(`🎵 جاري تشغيل: ${currentRadio.name}`);
            displayRadios(allRadios);
        }).catch(e => {
            console.error("Radio play failed:", e);
            showToast('❌ فشل تشغيل هذه الإذاعة، جرب إذاعة أخرى.');
        });
    } else {
        radioAudio.pause();
        playIcon.innerHTML = '<path d="M8 5v14l11-7z"/>';
        visualizer.classList.remove('playing');
        showToast('⏸️ تم إيقاف الإذاعة');
        displayRadios(allRadios);
    }
};

window.updateRadioVolume = function(val) {
    if (radioAudio) {
        radioAudio.volume = val;
    }
};

// --- 10. إدارة الصوتيات والقرّاء ---
async function loadAudioData() {
    // قائمة أولية لضمان "الفن" والسرعة فور فتح الصفحة
    const initialReciters = [
        { id: 108, name: "محمد صديق المنشاوي" },
        { id: 94, name: "مصطفى إسماعيل" },
        { id: 54, name: "عبد الباسط عبد الصمد" },
        { id: 128, name: "مشاري العفاسي" },
        { id: 90, name: "محمود خليل الحصري" },
        { id: 114, name: "ماهر المعيقلي" },
        { id: 62, name: "سعد الغامدي" },
        { id: 10, name: "أحمد العجمي" },
        { id: 104, name: "فارس عباد" }
    ];
    
    allReciters = initialReciters;
    displayReciters(allReciters);
    
    try {
        const data = await fetchJsonWithRetry('https://mp3quran.net/api/v3/reciters?language=ar');
        if (data && data.reciters) {
            allReciters = data.reciters;
            // ترتيب القراء أبجدياً
            allReciters.sort((a, b) => a.name.localeCompare(b.name, 'ar'));
            displayReciters(allReciters);
        }
    } catch (error) {
        console.error("Error loading reciters:", error);
    }
}

function displayReciters(reciters) {
    const list = document.getElementById('reciters-list');
    if (!list) return;
    
    if (reciters.length === 0) {
        list.innerHTML = '<p style="grid-column: 1/-1; text-align:center; padding: 20px; opacity:0.6;">عذراً، لم نجد قارئ بهذا الاسم.</p>';
        return;
    }

    const sorted = [...reciters].sort((a, b) => {
        const aFav = favoriteReciters.includes(a.id);
        const bFav = favoriteReciters.includes(b.id);
        if (aFav && !bFav) return -1;
        if (!aFav && bFav) return 1;
        return 0;
    });

    list.innerHTML = '';
    const batchSize = 15;
    let currentIndex = 0;

    function renderBatch() {
        const end = Math.min(currentIndex + batchSize, sorted.length);
        let htmlFragment = '';
        
        for (let i = currentIndex; i < end; i++) {
            const r = sorted[i];
            const isFav = favoriteReciters.includes(r.id);
            const firstLetter = r.name.trim().charAt(0);
            
            // روابط الصور المحسنة
            const photoUrl = `https://www.mp3quran.net/images/reciters/256/${r.id}.jpg`;
            const fallbackUrl = `https://static.quran-mp3.org/images/reciters/${r.id}.jpg`;
            
            htmlFragment += `
                <div class="reciter-card" onclick="openReciterOptions(${r.id})">
                    <div class="reciter-info">
                        <div class="reciter-photo-container">
                            <img class="reciter-photo" src="${photoUrl}" 
                                 loading="lazy"
                                 onerror="this.onerror=function(){this.style.display='none'; this.nextElementSibling.style.display='flex';}; this.src='${fallbackUrl}';">
                            <div class="reciter-initial" style="display:none;">${firstLetter}</div>
                        </div>
                        <span class="reciter-name">${r.name}</span>
                    </div>
                    <button class="reciter-fav-btn ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavoriteReciter(${r.id})">
                        ${isFav ? '★' : '☆'}
                    </button>
                </div>
            `;
        }
        
        list.insertAdjacentHTML('beforeend', htmlFragment);
        currentIndex = end;
        
        if (currentIndex < sorted.length) {
            requestAnimationFrame(renderBatch);
        }
    }

    renderBatch();
}

// دالة tryNextSource لم تعد مطلوبة لأننا دمجناها في onerror مباشرة
window.tryNextSource = function(imgElement, remainingSources) {};

window.toggleFavoriteReciter = function(id) {
    const index = favoriteReciters.indexOf(id);
    if (index === -1) {
        favoriteReciters.push(id);
    } else {
        favoriteReciters.splice(index, 1);
    }
    localStorage.setItem('favoriteReciters', JSON.stringify(favoriteReciters));
    
    // إعادة عرض القائمة بالترتيب الجديد
    const query = document.getElementById('reciter-search').value;
    if (query) filterReciters(query);
    else displayReciters(allReciters);
};

function filterReciters(query) {
    if (!allReciters) return;
    const q = query.trim().toLowerCase();
    const filtered = allReciters.filter(r => {
        const nameMatch = r.name.toLowerCase().includes(q);
        // البحث أيضاً داخل أسماء الروايات المتوفرة للقارئ
        const moshafMatch = r.moshaf && r.moshaf.some(m => m.name.toLowerCase().includes(q));
        return nameMatch || moshafMatch;
    });
    displayReciters(filtered);
}

window.openReciterOptions = async function(id) {
    let reciter = allReciters.find(r => r.id == id);
    
    if (!reciter || !reciter.moshaf || reciter.moshaf.length === 0) {
        showToast("جاري جلب تفاصيل القارئ...");
        try {
            const data = await fetchJsonWithRetry('https://mp3quran.net/api/v3/reciters?language=ar');
            allReciters = data.reciters;
            reciter = allReciters.find(r => r.id == id);
        } catch (e) {}
    }

    if (!reciter || !reciter.moshaf || reciter.moshaf.length === 0) {
        showToast("عذراً، بيانات هذا القارئ غير متوفرة حالياً.");
        return;
    }

    selectedReciter = reciter;
    const header = document.getElementById('reciter-info-header');
    const list = document.getElementById('recitations-list');
    
    const imageUrl = `https://www.mp3quran.net/images/reciters/256/${selectedReciter.id}.jpg`;
    header.innerHTML = `
        <img src="${imageUrl}" onerror="this.src='icon-192.png'">
        <div>
            <h3 style="color:var(--accent-color);">${selectedReciter.name}</h3>
            <p style="font-size:0.9rem; opacity:0.7;">اختر الرواية المناسبة</p>
        </div>
    `;
    
    list.innerHTML = '';
    selectedReciter.moshaf.forEach((m, index) => {
        list.innerHTML += `
            <button class="btn" style="margin-bottom:12px; padding: 18px; font-weight: bold; border-radius: 15px;" onclick="openAudioSurahIndex(${index})">
                ${m.name} <span style="font-size: 0.8rem; opacity: 0.6; display: block;">(${m.surah_total} سورة)</span>
            </button>
        `;
    });
    
    navigateTo('recitationOptions');
};

window.openAudioSurahIndex = async function(moshafIndex) {
    selectedRecitation = selectedReciter.moshaf[moshafIndex];
    const list = document.getElementById('audio-surah-list');
    list.innerHTML = '<p style="grid-column: 1/-1; text-align:center;">جاري تحميل السور...</p>';
    
    navigateTo('audioSurahIndex');
    
    const surahList = selectedRecitation.surah_list.split(',');
    list.innerHTML = '';
    
    surahList.forEach(numStr => {
         const num = parseInt(numStr.trim());
         const name = surahsNames[num - 1] || `سورة ${num}`;
         list.innerHTML += `
             <button class="audio-surah-btn" onclick="playAudioSurah(${num}, 'سورة ${name}')">
                 <span style="opacity:0.5; font-size:0.9rem; margin-left:10px;">${toArabicNumerals(num)}</span>
                 <span>سورة ${name}</span>
             </button>
         `;
     });
};

function filterAudioSurahs(query) {
    const btns = document.querySelectorAll('.audio-surah-btn');
    btns.forEach(btn => {
        if (btn.innerText.includes(query)) btn.style.display = 'block';
        else btn.style.display = 'none';
    });
}

window.playAudioSurah = function(surahNum, surahName) {
    const formattedNum = surahNum.toString().padStart(3, '0');
    const audioUrl = `${selectedRecitation.server}${formattedNum}.mp3`;
    
    document.getElementById('player-surah-name').innerText = surahName;
    document.getElementById('player-reciter-name').innerText = selectedReciter.name;
    document.getElementById('player-recitation-name').innerText = selectedRecitation.name;
    document.getElementById('player-reciter-image').src = `https://www.mp3quran.net/images/reciters/256/${selectedReciter.id}.jpg`;
    
    audioPlayer.src = audioUrl;
    audioPlayer.play();
    isPlaying = true;
    updatePlayBtnUI();
    
    navigateTo('audioPlayer');
    
    audioPlayer.ontimeupdate = () => {
        const seekbar = document.getElementById('audio-seekbar');
        const current = document.getElementById('current-time');
        const total = document.getElementById('total-duration');
        
        if (!isNaN(audioPlayer.duration)) {
            const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
            seekbar.value = percent;
            current.innerText = formatAudioTime(audioPlayer.currentTime);
            total.innerText = formatAudioTime(audioPlayer.duration);
        }
    };
    
    audioPlayer.onended = () => {
        isPlaying = false;
        updatePlayBtnUI();
    };
};

function formatAudioTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
}

window.toggleAudioPlay = function() {
    if (isPlaying) {
        audioPlayer.pause();
    } else {
        audioPlayer.play();
    }
    isPlaying = !isPlaying;
    updatePlayBtnUI();
};

function updatePlayBtnUI() {
    const btn = document.getElementById('play-pause-btn');
    if (btn) btn.innerText = isPlaying ? '⏸' : '▶';
}

window.seekAudio = function(value) {
    const time = (value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = time;
};

window.skipAudio = function(sec) {
    audioPlayer.currentTime += sec;
};

window.openSurah = (num) => jumpToAyah(num, 1);

const surahsNames = ["الفاتحة","البقرة","آل عمران","النساء","المائدة","الأنعام","الأعراف","الأنفال","التوبة","يونس","هود","يوسف","الرعد","إبراهيم","الحجر","النحل","الإسراء","الكهف","مريم","طه","الأنبياء","الحج","المؤمنون","النور","الفرقان","الشعراء","النمل","القصص","العنكبوت","الروم","لقمان","السجدة","الأحزاب","سبأ","فاطر","يس","الصافات","ص","الزمر","غافر","فصلت","الشورى","الزخرف","الدخان","الجاثية","الأحقاف","محمد","الفتح","الحجرات","ق","الذاريات","الطور","النجم","القمر","الرحمن","الواقعة","الحديد","المجادلة","الحشر","الممتحنة","الصف","الجمعة","المنافقون","التغابن","الطلاق","التحريم","الملك","القلم","الحاقة","المعارج","نوح","الجن","المزمل","المدثر","القيامة","الإنسان","المرسلات","النبأ","النازعات","عبس","التكوير","الانفطار","المطففين","الانشقاق","البروج","الطارق","الأعلى","الغاشية","الفجر","البلد","الشمس","الليل","الضحى","الشرح","التين","العلق","القدر","البينة","الزلزلة","العاديات","القارعة","التكاثر","العصر","الهمزة","الفيل","قريش","الماعون","الكوثر","الكافرون","النصر","المسد","الإخلاص","الفلق","الناس"];

function renderQuranIndex() {
    const list = document.getElementById('surah-list');
    if (!list) return;
    
    let html = '';
    surahsNames.forEach((name, index) => {
        const num = index + 1;
        html += `
            <button class="surah-card-btn" onclick="openSurah(${num})">
                <span class="surah-number">${toArabicNumerals(num)}</span>
                <span class="surah-name-text">سورة ${name}</span>
            </button>
        `;
    });
    list.innerHTML = html;
}

// تعديل دالة التحميل الأولي لتشغيل الفهرس فوراً
document.addEventListener("DOMContentLoaded", () => {
    // 0. عرض حديث عشوائي على شاشة البداية فوراً
    try {
        showSplashHadith();
    } catch (e) {
        console.error('Error showing splash hadith:', e);
    }
    
    // Force show splash screen on first load if no hash
    if (!window.location.hash) {
        window.location.hash = 'splash';
    }
    
    // 1. استعادة الإعدادات المحفوظة
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') document.body.classList.add('dark-theme');
    
    const savedFontSize = localStorage.getItem('fontSize');
    if (savedFontSize) {
        document.documentElement.style.setProperty('--zikr-font-size', `${savedFontSize}rem`);
        document.documentElement.style.setProperty('--quran-font-size', `${savedFontSize * 1.3}rem`);
    }
    
    const savedTextMode = localStorage.getItem('quranTextMode');
    if (savedTextMode === 'classic') {
        quranTextMode = 'classic';
        document.body.classList.add('quran-font-classic');
    }

    // 2. تشغيل الوظائف الأساسية
    handleRoute();
    renderQuranIndex();
    loadAudioData();
    initLocationAndPrayers();
    loadHadithApiCategories();
    updatePrayerWidgetDate();
    updateIslamicEvents();
    initServiceWorker();
    applyAppSettingsFromSidebar();
    renderBookmarks();
    
    // 3. طلب إذن الإشعارات بشكل احترافي بعد فترة قصيرة
    requestNotificationPermissionOnLoad();

    // 4. استعادة عداد السبحة
    const savedMasbaha = localStorage.getItem('masbahaCount') || 0;
    const masbahaEl = document.getElementById('masbaha-count');
    if (masbahaEl) masbahaEl.innerText = savedMasbaha;
});

// Request notification permission on app load (only once)
async function requestNotificationPermissionOnLoad() {
    // Check if already requested
    if (localStorage.getItem('notificationRequested')) return;
    
    if (!('Notification' in window)) return;
    
    // Wait a bit for the app to fully load
    setTimeout(async () => {
        try {
            const permission = await Notification.requestPermission();
            if (permission === 'granted') {
                showToast('تم تفعيل إشعارات الأذان 🕌');
                // Update settings in service worker
                updateSWSettings();
                // Reschedule notifications
                fetchPrayers(userLat, userLng);
            }
            // Mark as requested so we don't ask again
            localStorage.setItem('notificationRequested', 'true');
        } catch (e) {
            console.error('Notification request failed:', e);
        }
    }, 5000); // Wait 5 seconds after app load
}

// Service Worker Communication for Professional Prayer Notifications
let serviceWorkerRegistration = null;

// Initialize service worker communication
async function initServiceWorker() {
  if (!('serviceWorker' in navigator)) return;
  
  try {
    serviceWorkerRegistration = await navigator.serviceWorker.ready;
    
    // Listen for messages from service worker
    navigator.serviceWorker.addEventListener('message', (event) => {
      if (event.data && event.data.type === 'REFRESH_PRAYER_TIMES') {
        fetchPrayers(userLat, userLng);
      }
    });
    
    // Register for periodic sync if supported
    if ('permissions' in navigator) {
      const status = await navigator.permissions.query({ name: 'periodic-background-sync' });
      if (status.state === 'granted' && serviceWorkerRegistration.periodicSync) {
        try {
          await serviceWorkerRegistration.periodicSync.register('prayer-times-sync', {
            minInterval: 15 * 60 * 1000 // 15 minutes
          });
        } catch (e) {
          console.log('Periodic sync not supported');
        }
      }
    }
    
    // Initial settings sync
    updateSWSettings();
  } catch (e) {
    console.error('Service Worker init error:', e);
  }
}

// Send prayer times to service worker for scheduling
function schedulePrayerNotificationsInSW(timings) {
  if (!serviceWorkerRegistration || !serviceWorkerRegistration.active) return;
  
  const prayerTimes = {
    Fajr: timings.Fajr,
    Dhuhr: timings.Dhuhr,
    Asr: timings.Asr,
    Maghrib: timings.Maghrib,
    Isha: timings.Isha
  };
  
  serviceWorkerRegistration.active.postMessage({
    type: 'SCHEDULE_PRAYER_NOTIFICATIONS',
    prayerTimes: prayerTimes
  });
}

// Update settings in service worker
function updateSWSettings() {
  if (!serviceWorkerRegistration || !serviceWorkerRegistration.active) return;
  
  serviceWorkerRegistration.active.postMessage({
    type: 'UPDATE_SETTINGS',
    muezzin: selectedMuezzin,
    alertsEnabled: alertsEnabled
  });
}

// Request notification permission with professional UI
async function requestNotificationPermission() {
  if (!('Notification' in window)) {
    showToast('الإشعارات غير مدعومة في هذا المتصفح');
    return false;
  }
  
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      showToast('تم تفعيل إشعارات الأذان بنجاح 🕌');
      // Update service worker settings
      updateSWSettings();
      // Reschedule notifications with current prayer times
      fetchPrayers(userLat, userLng);
      return true;
    } else {
      showToast('يرجى السماح بالإشعارات لتلقي تنبيهات الأذان');
      return false;
    }
  } catch (e) {
    showToast('تعذر طلب إذن الإشعارات');
    return false;
  }
}

// Professional notification function with service worker support
function sendNotification(title, options = {}) {
  // Try service worker first for background notifications
  if (serviceWorkerRegistration && serviceWorkerRegistration.active) {
    serviceWorkerRegistration.active.postMessage({
      type: 'SHOW_NOTIFICATION',
      title: title,
      options: {
        ...options,
        icon: './icon-192.png',
        badge: './icon-192.png'
      }
    });
  } else if ('Notification' in window && Notification.permission === 'granted') {
    // Fallback to regular notification
    new Notification(title, {
      ...options,
      icon: './icon-192.png',
      badge: './icon-192.png'
    });
  }
}

// Open standalone widget in new window/tab
window.openWidgetStandalone = function() {
  // Get current location data
  const lat = userLat || 30.0444;
  const lng = userLng || 31.2357;
  const city = userCity || 'القاهرة';
  
  // Open widget with location parameters
  const widgetUrl = `./widget-standalone.html?lat=${lat}&lng=${lng}&city=${encodeURIComponent(city)}`;
  
  // Try to open as PWA window if supported, otherwise as regular tab
  if (window.matchMedia('(display-mode: standalone)').matches) {
    // Already in PWA mode, open in new tab
    window.open(widgetUrl, '_blank');
  } else {
    // Regular browser, open in new tab
    window.open(widgetUrl, '_blank');
  }
  
  showToast('تم فتح الويدجت. اضغط مشاركة لإضافته للشاشة الرئيسية 📱');
};

// --- 11. القبلة والمناسبات والمشاركة ---

// بوصلة القبلة
let compassActive = false;
window.requestCompassPermission = function() {
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission()
            .then(state => {
                if (state === 'granted') {
                    startCompass();
                } else {
                    showToast("يرجى السماح بالوصول للحساسات");
                }
            })
            .catch(e => showToast("تعذر تفعيل الحساسات"));
    } else {
        startCompass();
    }
};

function startCompass() {
    if (compassActive) return;
    compassActive = true;
    window.addEventListener('deviceorientation', handleOrientation);
    showToast("تم تفعيل البوصلة");
}

function handleOrientation(event) {
    let alpha = event.alpha; // Z-axis rotation [0, 360]
    if (alpha === null) return;

    // Kaaba Coordinates: 21.4225, 39.8262
    const kaabaLat = 21.4225;
    const kaabaLng = 39.8262;
    
    const lat1 = userLat * Math.PI / 180;
    const lng1 = userLng * Math.PI / 180;
    const lat2 = kaabaLat * Math.PI / 180;
    const lng2 = kaabaLng * Math.PI / 180;
    
    const y = Math.sin(lng2 - lng1);
    const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(lng2 - lng1);
    let qiblaAngle = Math.atan2(y, x) * 180 / Math.PI;
    qiblaAngle = (qiblaAngle + 360) % 360;

    const compassNeedle = document.getElementById('compass-needle');
    const kaabaIcon = document.getElementById('kaaba-icon');
    const angleEl = document.getElementById('qibla-angle');

    if (compassNeedle) {
        // Rotate needle to point North
        compassNeedle.style.transform = `translate(-50%, -50%) rotate(${-alpha}deg)`;
        // Rotate Kaaba icon to point to Qibla relative to North
        if (kaabaIcon) {
            kaabaIcon.style.transform = `translateX(-50%) rotate(${qiblaAngle - alpha}deg)`;
        }
        if (angleEl) {
            angleEl.innerText = `القبلة: ${toArabicNumerals(Math.round(qiblaAngle))}°`;
        }
    }
}

// المناسبات الإسلامية
const islamicEvents = [
    { name: "رمضان المبارك", month: 9, day: 1 },
    { name: "عيد الفطر", month: 10, day: 1 },
    { name: "عيد الأضحى", month: 12, day: 10 },
    { name: "رأس السنة الهجرية", month: 1, day: 1 },
    { name: "المولد النبوي الشريف", month: 3, day: 12 }
];

async function updateIslamicEvents() {
    const list = document.getElementById('events-list');
    if (!list) return;

    try {
        const now = new Date();
        const res = await fetch(`https://api.aladhan.com/v1/gToH/${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()}`);
        const data = await res.json();
        const currentHijri = data.data.hijri;
        
        list.innerHTML = '';
        const sortedEvents = islamicEvents.map(event => {
            let daysLeft = 0;
            if (event.month > currentHijri.month.number || (event.month === currentHijri.month.number && event.day >= currentHijri.day)) {
                daysLeft = (event.month - currentHijri.month.number) * 30 + (event.day - currentHijri.day);
            } else {
                daysLeft = (12 - currentHijri.month.number + event.month) * 30 + (event.day - currentHijri.day);
            }
            return { ...event, daysLeft };
        }).sort((a, b) => a.daysLeft - b.daysLeft);

        sortedEvents.forEach(event => {
            list.innerHTML += `
                <div class="event-item">
                    <span class="event-name">${event.name}</span>
                    <span class="event-days">باقي ${toArabicNumerals(event.daysLeft)} يوم تقريباً</span>
                </div>
            `;
        });
        
        // Update Home Screen Widget if exists
        const homeEvents = document.getElementById('home-events-countdown');
        if (homeEvents && sortedEvents.length > 0) {
            const next = sortedEvents[0];
            homeEvents.innerHTML = `المناسبة القادمة: <b>${next.name}</b> (بعد ${toArabicNumerals(next.daysLeft)} يوم)`;
        }
    } catch (e) {
        list.innerHTML = '<p>تعذر تحميل المناسبات حالياً</p>';
    }
}

// مشاركة الذكر كصورة (محاكاة احترافية)
window.shareZikrAsImage = function() {
    const zikrText = document.getElementById('zikr-text').innerText;
    const proofText = document.getElementById('zikr-proof').innerText;
    
    // Create temporary canvas
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1080;
    const ctx = canvas.getContext('2d');
    
    // Background
    ctx.fillStyle = '#FDFBF7';
    ctx.fillRect(0, 0, 1080, 1080);
    
    // Border
    ctx.strokeStyle = '#8B5A2B';
    ctx.lineWidth = 40;
    ctx.strokeRect(20, 20, 1040, 1040);
    
    // Header
    ctx.fillStyle = '#8B5A2B';
    ctx.font = 'bold 60px Amiri';
    ctx.textAlign = 'center';
    ctx.fillText('موسوعة المسلم', 540, 150);
    
    // Text Wrapping
    ctx.fillStyle = '#4A3B32';
    ctx.font = '50px Amiri';
    const words = zikrText.split(' ');
    let line = '';
    let y = 400;
    for(let n = 0; n < words.length; n++) {
        let testLine = line + words[n] + ' ';
        let metrics = ctx.measureText(testLine);
        if (metrics.width > 800 && n > 0) {
            ctx.fillText(line, 540, y);
            line = words[n] + ' ';
            y += 80;
        } else {
            line = testLine;
        }
    }
    ctx.fillText(line, 540, y);
    
    // Proof
    ctx.fillStyle = '#8B5A2B';
    ctx.font = 'italic 35px Tajawal';
    ctx.fillText(proofText, 540, 900);
    
    // Footer
    ctx.font = '30px Tajawal';
    ctx.fillText('تطبيق موسوعة المسلم', 540, 1000);

    // Convert to image and share
    try {
        canvas.toBlob(blob => {
            const file = new File([blob], 'zikr.png', { type: 'image/png' });
            if (navigator.share) {
                navigator.share({
                    files: [file],
                    title: 'ذكر من موسوعة المسلم',
                    text: zikrText
                }).catch(() => showToast("تعذر المشاركة"));
            } else {
                // Download as fallback
                const link = document.createElement('a');
                link.download = 'zikr.png';
                link.href = canvas.toDataURL();
                link.click();
                showToast("تم حفظ الصورة");
            }
        });
    } catch (e) {
        showToast("تعذر توليد الصورة");
    }
};

async function searchQuran(query) {
    const container = document.getElementById('quran-search-results');
    if (!container) return;
    container.innerHTML = '<p style="text-align:center; padding:20px;">جاري البحث...</p>';
    try {
        const data = await fetchJsonWithRetry(`https://api.alquran.cloud/v1/search/${query}/all/quran-uthmani`);
        if (data && data.data && data.data.results.length > 0) {
            let html = '';
            data.data.results.forEach(res => {
                html += `
                    <div class="search-result-card" onclick="jumpToAyah(${res.surah.number}, ${res.numberInSurah})">
                        <p class="search-result-text">${res.text}</p>
                        <p class="search-result-info">${res.surah.name} - آية ${toArabicNumerals(res.numberInSurah)}</p>
                    </div>
                `;
            });
            container.innerHTML = html;
        } else {
            container.innerHTML = '<p style="text-align:center; padding:20px;">لم يتم العثور على نتائج</p>';
        }
    } catch (e) {
        container.innerHTML = '<p style="text-align:center; padding:20px;">حدث خطأ أثناء البحث</p>';
    }
}

// تحديث البيانات عند تحميل الشاشة
window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'events') updateIslamicEvents();
    if (hash === 'radio' && allRadios.length === 0) loadRadios();
});

// Initial load check
if (window.location.hash === '#radio') loadRadios();
if (window.location.hash === '#events') updateIslamicEvents();
