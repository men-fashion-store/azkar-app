// --- 1. الأذكار الكاملة مكملة ---
const ayatAlKursi="أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ\nبِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\n﴿اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ﴾ [البقرة: 255]";
const surahAlIkhlas="بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\n﴿قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ﴾";
const surahAlFalaq="بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\n﴿قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ﴾";
const surahAnNas="بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\n﴿قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ﴾";

const azkarData = {
    morning:[
        {text:ayatAlKursi,count:1,proof:"الدليل: أُجير من الجن حتى يمسي."},{text:surahAlIkhlas,count:3,proof:"الدليل: تكفيه من كل شيء."},{text:surahAlFalaq,count:3,proof:"الدليل: تكفيه من كل شيء."},{text:surahAnNas,count:3,proof:"الدليل: تكفيه من كل شيء."},
        {text:"أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ، وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ، وَعَذَابٍ فِي الْقَبْرِ.",count:1,proof:"الدليل: صحيح مسلم."},
        {text:"أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ: فَتْحَهُ، وَنَصْرَهُ، وَنُورَهُ، وَبَرَكَتَهُ، وَهُدَاهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهِ وَشَرِّ مَا بَعْدَهُ.",count:1,proof:"الدليل: حديث حسن."},
        {text:"اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ.",count:1,proof:"الدليل: حديث صحيح."},
        {text:"اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي؛ فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ.",count:1,proof:"الدليل: سيد الاستغفار. (رواه البخاري)."},
        {text:"اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي وَعَنْ يَمِينِي وَعَنْ شِمَالِي وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي.",count:1,proof:"الدليل: حديث صحيح."},
        {text:"اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ، فَاطِرَ السَّمَاوَاتِ وَالْأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءًا أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ.",count:1,proof:"الدليل: حديث صحيح."},
        {text:"اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ، وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَهَ إِلَّا أَنْتَ.",count:3,proof:"الدليل: حديث حسن."},
        {text:"اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ، وَقَهْرِ الرِّجَالِ.",count:3,proof:"الدليل: صحيح البخاري."},
        {text:"يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.",count:1,proof:"الدليل: حديث صحيح."},
        {text:"حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.",count:7,proof:"الدليل: كفاه الله ما أهمه."},
        {text:"رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا.",count:3,proof:"الدليل: كان حقاً على الله أن يرضيه."},
        {text:"بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ، وَهُوَ السَّمِيعُ الْعَلِيمُ.",count:3,proof:"الدليل: لم يضره شيء."},
        {text:"يَا رَبِّ، لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ، وَلِعَظِيمِ سُلْطَانِكَ.",count:3,proof:"الدليل: حديث حسن."},
        {text:"اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.",count:3,proof:"الدليل: حديث صحيح."},
        {text:"اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا.",count:1,proof:"الدليل: حديث صحيح."},
        {text:"أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ، الْحَيَّ الْقَيُّومَ، وَأَتُوبُ إِلَيْهِ.",count:3,proof:"الدليل: حديث صحيح."},
        {text:"أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ.",count:100,proof:"الدليل: متفق عليه."},
        {text:"سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.",count:100,proof:"الدليل: حطت خطاياه."},
        {text:"لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",count:100,proof:"الدليل: كانت له عدل عشر رقاب."},
        {text:"اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى نَبِيِّنَا مُحَمَّدٍ.",count:10,proof:"الدليل: أدركته شفاعتي."}
    ],
    evening:[
        {text:ayatAlKursi,count:1,proof:"الدليل: أُجير من الجن حتى يصبح."},{text:surahAlIkhlas,count:3,proof:"الدليل: تكفيه من كل شيء."},{text:surahAlFalaq,count:3,proof:"الدليل: تكفيه من كل شيء."},{text:surahAnNas,count:3,proof:"الدليل: تكفيه من كل شيء."},
        {text:"أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ، وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ، وَعَذَابٍ فِي الْقَبْرِ.",count:1,proof:"الدليل: صحيح مسلم."},
        {text:"أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذِهِ اللَّيْلَةِ: فَتْحَهَا، وَنَصْرَهَا، وَنُورَهَا، وَبَرَكَتَهَا، وَهُدَاهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهَا وَشَرِّ مَا بَعْدَهَا.",count:1,proof:"الدليل: حديث حسن."},
        {text:"اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ.",count:1,proof:"الدليل: حديث صحيح."},
        {text:"اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي؛ فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ.",count:1,proof:"الدليل: سيد الاستغفار. (رواه البخاري)."},
        {text:"اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ...",count:1,proof:"الدليل: حديث صحيح."},
        {text:"اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ...",count:1,proof:"الدليل: حديث صحيح."},
        {text:"اللَّهُمَّ عَافِنِي فِي بَدَنِي...",count:3,proof:"الدليل: حديث حسن."},
        {text:"اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ...",count:3,proof:"الدليل: صحيح البخاري."},
        {text:"يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ...",count:1,proof:"الدليل: حديث صحيح."},
        {text:"حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.",count:7,proof:"الدليل: كفاه الله ما أهمه."},
        {text:"رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا.",count:3,proof:"الدليل: كان حقاً على الله أن يرضيه."},
        {text:"بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ، وَهُوَ السَّمِيعُ الْعَلِيمُ.",count:3,proof:"الدليل: لم يضره شيء."},
        {text:"أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.",count:3,proof:"الدليل: لم تضره حمة تلك الليلة."},
        {text:"يَا رَبِّ، لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ، وَلِعَظِيمِ سُلْطَانِكَ.",count:3,proof:"الدليل: حديث حسن."},
        {text:"اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.",count:3,proof:"الدليل: حديث صحيح."},
        {text:"أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ، الْحَيَّ الْقَيُّومَ، وَأَتُوبُ إِلَيْهِ.",count:3,proof:"الدليل: حديث صحيح."},
        {text:"أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ.",count:100,proof:"الدليل: متفق عليه."},
        {text:"سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.",count:100,proof:"الدليل: حطت خطاياه."},
        {text:"لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",count:100,proof:"الدليل: كانت له عدل عشر رقاب."},
        {text:"اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى نَبِيِّنَا مُحَمَّدٍ.",count:10,proof:"الدليل: أدركته شفاعتي."}
    ],
    sleep:[
        {text:ayatAlKursi,count:1,proof:"الدليل: حفظ من الشيطان."},{text:surahAlIkhlas,count:3,proof:"الدليل: سنة."},{text:surahAlFalaq,count:3,proof:"الدليل: سنة."},{text:surahAnNas,count:3,proof:"الدليل: سنة."},
        {text:"بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي وَبِكَ أَرْفَعُهُ، فَإِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ.",count:1,proof:"الدليل: متفق عليه."},
        {text:"اللَّهُمَّ إِنَّكَ خَلَقْتَ نَفْسِي وَأَنْتَ تَوَفَّاهَا، لَكَ مَمَاتُهَا وَمَحْيَاهَا، إِنْ أَحْيَيْتَهَا فَاحْفَظْهَا، وَإِنْ أَمَتَّهَا فَاغْفِرْ لَهَا.",count:1,proof:"الدليل: صحيح مسلم."},
        {text:"اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ.",count:3,proof:"الدليل: رواه أبو داود."},
        {text:"بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا.",count:1,proof:"الدليل: صحيح البخاري."},
        {text:"سُبْحَانَ اللَّهِ.",count:33,proof:"الدليل: خير لكم من خادم."},{text:"الْحَمْدُ لِلَّهِ.",count:33,proof:"الدليل: خير لكم من خادم."},{text:"اللَّهُ أَكْبَرُ.",count:34,proof:"الدليل: خير لكم من خادم."}
    ],
    prayer:[
        {text:"أَسْتَغْفِرُ اللَّهَ. (ثلاثاً)\nاللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ.",count:1,proof:"الدليل: صحيح مسلم."},
        {text:"لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ...",count:1,proof:"الدليل: متفق عليه."},
        {text:"لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ... لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ...",count:1,proof:"الدليل: صحيح مسلم."},
        {text:ayatAlKursi,count:1,proof:"الدليل: لم يمنعه من دخول الجنة إلا الموت."},{text:surahAlIkhlas,count:1,proof:"الدليل: تقرأ دبر كل صلاة."},{text:surahAlFalaq,count:1,proof:"الدليل: تقرأ دبر كل صلاة."},{text:surahAnNas,count:1,proof:"الدليل: تقرأ دبر كل صلاة."},
        {text:"سُبْحَانَ اللَّهِ.",count:33,proof:"الدليل: صحيح مسلم."},{text:"الْحَمْدُ لِلَّهِ.",count:33,proof:"الدليل: صحيح مسلم."},{text:"اللَّهُ أَكْبَرُ.",count:33,proof:"الدليل: صحيح مسلم."},
        {text:"لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",count:1,proof:"الدليل: تمام المائة."}
    ],
    ruqyah:[
        {text:"بِسْمِ اللَّهِ أَرْقِيكَ، مِنْ كُلِّ شَيْءٍ يُؤْذِيكَ، مِنْ شَرِّ كُلِّ نَفْسٍ أَوْ عَيْنِ حَاسِدٍ، اللَّهُ يَشْفِيكَ، بِسْمِ اللَّهِ أَرْقِيكَ.",count:3,proof:"الدليل: رقية جبريل للنبي ﷺ"},
        {text:"أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّةِ، مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ، وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ.",count:3,proof:"الدليل: صحيح البخاري."},
        {text:"بِسْمِ اللَّهِ (ثلاثاً)\nأَعُوذُ بِاللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ (سبعاً).",count:1,proof:"الدليل: توضع اليد على موضع الألم."},
        {text:ayatAlKursi,count:1,proof:"آية الكرسي من أعظم الرقية."},{text:surahAlIkhlas,count:3,proof:"سورة الإخلاص."},{text:surahAlFalaq,count:3,proof:"سورة الفلق."},{text:surahAnNas,count:3,proof:"سورة الناس."}
    ]
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

// --- 3. نظام الملاحة والريفريش (Hash Routing) ---
window.navigateTo = function(targetScreen) {
    window.location.hash = targetScreen;
};

window.goBack = function() {
    window.history.back();
};

window.addEventListener('hashchange', handleRoute);

function handleRoute() {
    let hash = window.location.hash.replace('#', '') || 'home';
    
    // إخفاء الكل وإظهار الهدف
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active');
        s.classList.add('hidden');
    });
    
    const target = document.getElementById(hash + '-screen') || document.getElementById('home-screen');
    if(target) {
        target.classList.replace('hidden', 'active');
        window.scrollTo(0, 0);
    }
}

// --- 4. التحميل الأولي (Onload) ---
let userLat = 30.0444, userLng = 31.2357; // القاهرة كافتراضي لحد ما يلقط

document.addEventListener("DOMContentLoaded", () => {
    const rH = hadithsList[Math.floor(Math.random() * hadithsList.length)];
    document.getElementById('splash-hadith').innerText = rH.text;
    document.getElementById('splash-proof').innerText = rH.proof;
    
    if(localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-theme');
    if(localStorage.getItem('fontSize')) document.documentElement.style.setProperty('--zikr-font-size', `${parseFloat(localStorage.getItem('fontSize'))}rem`);
    if(localStorage.getItem('masbahaCount')) document.getElementById('masbaha-count').innerText = localStorage.getItem('masbahaCount');

    if(!window.location.hash || window.location.hash === '#splash') {
        window.location.hash = 'splash';
        setTimeout(() => { window.location.hash = 'home'; }, 2500); 
    } else {
        handleRoute();
    }
    
    setTimeout(() => { calculatePrayerTimes(); loadAudioReciters(); }, 1000);
});

// --- 5. الموقع الجغرافي الدقيق والبوصلة ---
window.requestLocationPermission = function() {
    showToast("جاري البحث عن موقعك الدقيق...");
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (pos) => {
            userLat = pos.coords.latitude; 
            userLng = pos.coords.longitude;
            try {
                let res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${userLat}&lon=${userLng}&accept-language=ar`);
                let data = await res.json();
                let city = data.address.town || data.address.village || data.address.city || "تم التحديد";
                document.getElementById('prayer-location').innerText = `📍 ${city}`;
                fetchPrayers(userLat, userLng);
                showToast("✅ تم التحديث بنجاح");
            } catch(e) { fetchPrayers(userLat, userLng); }
        }, () => {
            showToast("❌ يرجى تفعيل الـ GPS من إعدادات الهاتف");
        }, {enableHighAccuracy: true, timeout: 10000});
    }
};

window.initQibla = function() {
    showToast("جاري تفعيل مستشعر البوصلة...");
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission().then(permissionState => {
            if (permissionState === 'granted') startCompass();
            else showToast("❌ تم رفض صلاحية البوصلة");
        }).catch(console.error);
    } else {
        startCompass();
    }
};

function startCompass() {
    window.addEventListener('deviceorientationabsolute', e => {
        let comp = e.webkitCompassHeading || Math.abs(e.alpha - 360);
        let qAngle = (Math.atan2(Math.sin(39.826206*Math.PI/180 - userLng*Math.PI/180), Math.cos(userLat*Math.PI/180)*Math.tan(21.422487*Math.PI/180) - Math.sin(userLat*Math.PI/180)*Math.cos(39.826206*Math.PI/180 - userLng*Math.PI/180)) * 180 / Math.PI + 360) % 360;
        if(comp) {
            let diff = qAngle - comp;
            document.getElementById('qibla-pointer').style.transform = `translateY(-80px) rotate(${diff}deg)`;
            let st = document.getElementById('qibla-status');
            if(Math.abs(diff) < 5 || Math.abs(diff) > 355){ st.innerText="أنت في اتجاه القبلة 🕋"; st.style.color="#4CAF50"; if(navigator.vibrate) navigator.vibrate(50); }
            else { st.innerText="قم بلف الهاتف للضبط"; st.style.color="var(--accent-color)"; }
        }
    }, true);
    showToast("✅ البوصلة تعمل الآن");
}

let prayerInterval;
async function calculatePrayerTimes() {
    try {
        let res = await fetch('https://ipapi.co/json/');
        let data = await res.json();
        userLat = data.latitude; userLng = data.longitude;
        if(document.getElementById('prayer-location').innerText.includes("جاري")) {
            document.getElementById('prayer-location').innerText = `📍 ${data.city}`;
        }
        fetchPrayers(userLat, userLng);
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

// --- 6. الأذكار ، السبحة ---
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

// --- 7. فهرس المصحف (القراءة والتنقل) ---
let surahListCached = [];
let currentSurahNumber = 1;

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
    } catch(e) { showToast("حدث خطأ في تحميل السور"); }
}

window.loadSurahContent = async (num, name) => {
    currentSurahNumber = num;
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

window.navigateSurah = function(step) {
    let newNum = currentSurahNumber + step;
    if(newNum >= 1 && newNum <= 114) {
        let newSurah = surahListCached.find(s => s.number === newNum);
        if(newSurah) loadSurahContent(newNum, newSurah.name);
    } else {
        showToast("لا يوجد سور أخرى في هذا الاتجاه");
    }
};

// --- 8. الصوتيات (المكتبة) ---
let allAudioReciters = [];
async function loadAudioReciters() {
    try {
        let res = await fetch('https://mp3quran.net/api/v3/reciters?language=ar'); let data = await res.json();
        const sel = document.getElementById('reciter-select'); if(!sel) return;
        sel.innerHTML='<option value="">اختر القارئ...</option>';
        data.reciters.forEach(r => { 
            if(r.moshaf) r.moshaf.forEach(m => {
                let name = `${r.name} (${m.name.replace('حفص عن عاصم','حفص')})`;
                allAudioReciters.push({ n: name, s: m.server });
                sel.innerHTML += `<option value="${m.server}">${name}</option>`;
            });
        });
    } catch(e){}
    loadQuranIndex(); 
}

window.filterReciters = () => {
    let t = document.getElementById('reciter-search').value.toLowerCase();
    const sel = document.getElementById('reciter-select'); sel.innerHTML='<option value="">اختر القارئ...</option>';
    allAudioReciters.filter(r => r.n.toLowerCase().includes(t)).forEach(r => { sel.innerHTML += `<option value="${r.s}">${r.n}</option>`; });
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

window.toggleTheme = () => { document.body.classList.toggle('dark-theme'); localStorage.setItem('theme', document.body.classList.contains('dark-theme')?'dark':'light'); };
window.changeFontSize = (step) => { let c = parseFloat(localStorage.getItem('fontSize') || 1.6); c = Math.max(1.2, Math.min(4.0, c + step * 0.25)); document.documentElement.style.setProperty('--zikr-font-size', `${c}rem`); localStorage.setItem('fontSize', c); };
