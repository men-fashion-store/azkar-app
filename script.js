// --- 1. الأذكار الكاملة ---
const ayatAlKursi="أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ\nبِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\n﴿اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ﴾ [البقرة: 255]";
const surahAlIkhlas="بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\n﴿قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ﴾";
const surahAlFalaq="بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\n﴿قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ﴾";
const surahAnNas="بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\n﴿قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ﴾";

const azkarData = {
    morning:[{text:ayatAlKursi,count:1,proof:"الدليل: أُجير من الجن حتى يمسي."},{text:surahAlIkhlas,count:3,proof:"الدليل: تكفيه من كل شيء."},{text:surahAlFalaq,count:3,proof:"الدليل: تكفيه من كل شيء."},{text:surahAnNas,count:3,proof:"الدليل: تكفيه من كل شيء."},{text:"أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ، وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ، وَعَذَابٍ فِي الْقَبْرِ.",count:1,proof:"الدليل: صحيح مسلم."},{text:"أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ: فَتْحَهُ، وَنَصْرَهُ، وَنُورَهُ، وَبَرَكَتَهُ، وَهُدَاهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهِ وَشَرِّ مَا بَعْدَهُ.",count:1,proof:"الدليل: حديث حسن."},{text:"اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ.",count:1,proof:"الدليل: حديث صحيح."},{text:"اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي؛ فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ.",count:1,proof:"الدليل: سيد الاستغفار. (رواه البخاري)."},{text:"اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي وَعَنْ يَمِينِي وَعَنْ شِمَالِي وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي.",count:1,proof:"الدليل: حديث صحيح."},{text:"اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ، فَاطِرَ السَّمَاوَاتِ وَالْأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءًا أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ.",count:1,proof:"الدليل: حديث صحيح."},{text:"اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ، وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَهَ إِلَّا أَنْتَ.",count:3,proof:"الدليل: حديث حسن."},{text:"اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ، وَقَهْرِ الرِّجَالِ.",count:3,proof:"الدليل: صحيح البخاري."},{text:"يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.",count:1,proof:"الدليل: حديث صحيح."},{text:"حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.",count:7,proof:"الدليل: كفاه الله ما أهمه."},{text:"رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا.",count:3,proof:"الدليل: كان حقاً على الله أن يرضيه."},{text:"بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ، وَهُوَ السَّمِيعُ الْعَلِيمُ.",count:3,proof:"الدليل: لم يضره شيء."},{text:"يَا رَبِّ، لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ، وَلِعَظِيمِ سُلْطَانِكَ.",count:3,proof:"الدليل: حديث حسن."},{text:"اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.",count:3,proof:"الدليل: حديث صحيح."},{text:"اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا.",count:1,proof:"الدليل: حديث صحيح."},{text:"أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ، الْحَيَّ الْقَيُّومَ، وَأَتُوبُ إِلَيْهِ.",count:3,proof:"الدليل: حديث صحيح."},{text:"أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ.",count:100,proof:"الدليل: متفق عليه."},{text:"سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.",count:100,proof:"الدليل: حطت خطاياه."},{text:"لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",count:100,proof:"الدليل: كانت له عدل عشر رقاب."},{text:"اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى نَبِيِّنَا مُحَمَّدٍ.",count:10,proof:"الدليل: أدركته شفاعتي."}],
    evening:[{text:ayatAlKursi,count:1,proof:"الدليل: أُجير من الجن حتى يصبح."},{text:surahAlIkhlas,count:3,proof:"الدليل: تكفيه من كل شيء."},{text:surahAlFalaq,count:3,proof:"الدليل: تكفيه من كل شيء."},{text:surahAnNas,count:3,proof:"الدليل: تكفيه من كل شيء."},{text:"أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ، وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ، وَعَذَابٍ فِي الْقَبْرِ.",count:1,proof:"الدليل: صحيح مسلم."},{text:"أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذِهِ اللَّيْلَةِ: فَتْحَهَا، وَنَصْرَهَا، وَنُورَهَا، وَبَرَكَتَهَا، وَهُدَاهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهَا وَشَرِّ مَا بَعْدَهَا.",count:1,proof:"الدليل: حديث حسن."},{text:"اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ.",count:1,proof:"الدليل: حديث صحيح."},{text:"اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي؛ فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ.",count:1,proof:"الدليل: سيد الاستغفار. (رواه البخاري)."},{text:"اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ...",count:1,proof:"الدليل: حديث صحيح."},{text:"اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ...",count:1,proof:"الدليل: حديث صحيح."},{text:"اللَّهُمَّ عَافِنِي فِي بَدَنِي...",count:3,proof:"الدليل: حديث حسن."},{text:"اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ...",count:3,proof:"الدليل: صحيح البخاري."},{text:"يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ...",count:1,proof:"الدليل: حديث صحيح."},{text:"حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.",count:7,proof:"الدليل: كفاه الله ما أهمه."},{text:"رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا.",count:3,proof:"الدليل: كان حقاً على الله أن يرضيه."},{text:"بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ، وَهُوَ السَّمِيعُ الْعَلِيمُ.",count:3,proof:"الدليل: لم يضره شيء."},{text:"أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.",count:3,proof:"الدليل: لم تضره حمة تلك الليلة."},{text:"يَا رَبِّ، لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ، وَلِعَظِيمِ سُلْطَانِكَ.",count:3,proof:"الدليل: حديث حسن."},{text:"اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.",count:3,proof:"الدليل: حديث صحيح."},{text:"أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ، الْحَيَّ الْقَيُّومَ، وَأَتُوبُ إِلَيْهِ.",count:3,proof:"الدليل: حديث صحيح."},{text:"أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ.",count:100,proof:"الدليل: متفق عليه."},{text:"سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.",count:100,proof:"الدليل: حطت خطاياه وإن كانت مثل زبد البحر."},{text:"لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",count:100,proof:"الدليل: كانت له عدل عشر رقاب."},{text:"اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى نَبِيِّنَا مُحَمَّدٍ.",count:10,proof:"الدليل: أدركته شفاعتي."}],
    sleep:[{text:ayatAlKursi,count:1,proof:"الدليل: حفظ من الشيطان."},{text:surahAlIkhlas,count:3,proof:"الدليل: سنة."},{text:surahAlFalaq,count:3,proof:"الدليل: سنة."},{text:surahAnNas,count:3,proof:"الدليل: سنة."},{text:"بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي...",count:1,proof:"الدليل: متفق عليه."},{text:"بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا.",count:1,proof:"الدليل: صحيح البخاري."}],
    prayer:[{text:"أَسْتَغْفِرُ اللَّهَ. (ثلاثاً)\nاللَّهُمَّ أَنْتَ السَّلَامُ...",count:1,proof:"الدليل: صحيح مسلم."},{text:ayatAlKursi,count:1,proof:"الدليل: لم يمنعه من دخول الجنة إلا الموت."},{text:"سُبْحَانَ اللَّهِ.",count:33,proof:"صحيح مسلم"},{text:"الْحَمْدُ لِلَّهِ.",count:33,proof:"صحيح مسلم"},{text:"اللَّهُ أَكْبَرُ.",count:33,proof:"صحيح مسلم"}],
    ruqyah:[{text:"بِسْمِ اللَّهِ أَرْقِيكَ، مِنْ كُلِّ شَيْءٍ يُؤْذِيكَ...",count:3,proof:"صحيح مسلم"},{text:"أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّةِ...",count:3,proof:"البخاري"}]
};

const hadithsList = [
    {text:"إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى.",proof:"(متفق عليه)"},
    {text:"كَلِمَتَانِ خَفِيفَتَانِ عَلَى اللِّسَانِ، ثَقِيلَتَانِ فِي الْمِيزَانِ... سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ.",proof:"(متفق عليه)"}
];

let currentFontSize = 1.6;
let currentCategory = [], currentIndex = 0, currentRemainingCount = 0, originalCount = 0;
let masbahaCount = 0;
let prayerTimerInterval;

// --- الإشعارات المنبثقة الأنيقة ---
window.showToast = function(msg) {
    const toast = document.getElementById('toast-msg');
    toast.innerText = msg; toast.style.bottom = '20px';
    setTimeout(() => { toast.style.bottom = '-100px'; }, 3500);
};

window.requestNotificationPermission = function() {
    if ("Notification" in window) {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") showToast("تم تفعيل الإشعارات بنجاح 🔔");
            else showToast("عذراً، المتصفح يمنع الإشعارات لضمان الخصوصية.");
        });
    } else showToast("متصفحك الحالي لا يدعم الإشعارات.");
};

// --- نظام التوجيه (الهاش راوتينج) ---
window.navigateTo = function(page) { window.location.hash = page; };
window.addEventListener('hashchange', handleRouting);

function handleRouting() {
    let hash = window.location.hash.replace('#', '');
    if(!hash) hash = 'home';
    if(hash === 'azkarReader' && currentCategory.length === 0) hash = 'azkarMenu';
    if(hash === 'quranReader' && !currentSurahNumber) hash = 'quranIndex';

    document.querySelectorAll('.screen').forEach(s => { s.classList.remove('active'); s.classList.add('hidden'); });

    if(hash === 'splash') document.getElementById('splash-screen').classList.replace('hidden', 'active');
    else if(hash === 'home') document.getElementById('home-screen').classList.replace('hidden', 'active');
    else if(hash === 'azkarMenu') document.getElementById('azkar-categories-screen').classList.replace('hidden', 'active');
    else if(hash === 'azkarReader') document.getElementById('azkar-screen').classList.replace('hidden', 'active');
    else if(hash === 'masbaha') document.getElementById('masbaha-screen').classList.replace('hidden', 'active');
    else if(hash === 'prayerTimes') document.getElementById('prayer-times-screen').classList.replace('hidden', 'active');
    else if(hash === 'qibla') { document.getElementById('qibla-screen').classList.replace('hidden', 'active'); initQibla(); }
    else if(hash === 'quranIndex') { document.getElementById('quran-index-screen').classList.replace('hidden', 'active'); loadQuranIndex(); }
    else if(hash === 'quranReader') document.getElementById('quran-reader-screen').classList.replace('hidden', 'active');
    else if(hash === 'audioMenu') { document.getElementById('audio-menu-screen').classList.replace('hidden', 'active'); loadAudioReciters(); }
}

window.onload = () => {
    if(localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-theme');
    if(localStorage.getItem('fontSize')) {
        currentFontSize = parseFloat(localStorage.getItem('fontSize'));
        document.documentElement.style.setProperty('--zikr-font-size', `${currentFontSize}rem`);
    }
    const rH = hadithsList[Math.floor(Math.random() * hadithsList.length)];
    document.getElementById('splash-hadith').innerText = rH.text;
    document.getElementById('splash-proof').innerText = rH.proof;
    
    if(localStorage.getItem('masbahaCount')) {
        masbahaCount = parseInt(localStorage.getItem('masbahaCount'));
        document.getElementById('masbaha-count').innerText = masbahaCount;
    }
    
    calculatePrayerTimes();
    loadAudioReciters(); // تحميل شيوخ الصوتيات في الخلفية
    
    if(!window.location.hash) window.location.hash = 'splash';
    else handleRouting();
};

window.toggleTheme = () => { document.body.classList.toggle('dark-theme'); localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light'); };
window.changeFontSize = (step) => { currentFontSize = Math.max(1.2, Math.min(4.0, currentFontSize + step * 0.25)); document.documentElement.style.setProperty('--zikr-font-size', `${currentFontSize}rem`); localStorage.setItem('fontSize', currentFontSize); };

// --- الأذكار ---
window.startAzkar = (type) => { currentCategory = azkarData[type]; currentIndex = 0; navigateTo('azkarReader'); loadZikr(); };
function loadZikr() {
    if(currentIndex >= currentCategory.length) return navigateTo('azkarMenu');
    let z = currentCategory[currentIndex]; currentRemainingCount = originalCount = z.count;
    document.getElementById('zikr-text').innerText = z.text; 
    document.getElementById('zikr-proof').innerText = z.proof; 
    document.getElementById('zikr-count').innerText = z.count;
    document.getElementById('progress-bar').style.width = `${((currentIndex + 1) / currentCategory.length) * 100}%`;
    document.getElementById('progress-text').innerText = `${currentIndex + 1} من ${currentCategory.length}`;
    document.getElementById('zikr-card').className = "paper-card swipe-in"; 
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(()=>document.getElementById('zikr-card').classList.remove('swipe-in'),300);
}
document.getElementById('counter-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    if(currentRemainingCount > 1) { currentRemainingCount--; document.getElementById('zikr-count').innerText = currentRemainingCount; if(navigator.vibrate) navigator.vibrate(40); }
    else { if(navigator.vibrate) navigator.vibrate(200); document.getElementById('zikr-card').classList.add('swipe-out-right'); setTimeout(()=>{currentIndex++; loadZikr();},300); }
});
let startX = 0;
document.getElementById('azkar-screen').addEventListener('touchstart', e => startX = e.changedTouches[0].screenX, {passive:true});
document.getElementById('azkar-screen').addEventListener('touchend', e => {
    let diff = e.changedTouches[0].screenX - startX;
    if(diff > 50 && currentIndex < currentCategory.length - 1) { document.getElementById('zikr-card').classList.add('swipe-out-right'); setTimeout(() => { currentIndex++; loadZikr(); }, 300); }
    else if(diff < -50 && currentIndex > 0) { document.getElementById('zikr-card').classList.add('swipe-out-left'); setTimeout(() => { currentIndex--; loadZikr(); }, 300); }
});

// --- السبحة ---
window.incrementMasbaha = () => { masbahaCount++; document.getElementById('masbaha-count').innerText = masbahaCount; localStorage.setItem('masbahaCount', masbahaCount); if(navigator.vibrate) navigator.vibrate(30); };
window.resetMasbaha = () => { masbahaCount=0; document.getElementById('masbaha-count').innerText=masbahaCount; localStorage.setItem('masbahaCount',0); };

// --- القبلة ---
function initQibla() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
            let lat = pos.coords.latitude, lng = pos.coords.longitude;
            let qiblaAngle = (Math.atan2(Math.sin(39.826206*Math.PI/180 - lng*Math.PI/180), Math.cos(lat*Math.PI/180)*Math.tan(21.422487*Math.PI/180) - Math.sin(lat*Math.PI/180)*Math.cos(39.826206*Math.PI/180 - lng*Math.PI/180)) * 180 / Math.PI + 360) % 360;
            window.addEventListener('deviceorientationabsolute', (e) => {
                let compass = e.webkitCompassHeading || Math.abs(e.alpha - 360);
                if (compass) {
                    let diff = qiblaAngle - compass;
                    document.getElementById('qibla-pointer').style.transform = `translateY(-70px) rotate(${diff}deg)`;
                    let st = document.getElementById('qibla-status');
                    if(Math.abs(diff)<5 || Math.abs(diff)>355){ st.innerText="أنت في اتجاه القبلة 🕋"; st.style.color="#4CAF50"; }
                    else { st.innerText="قم بلف الهاتف للضبط"; st.style.color="var(--accent-color)"; }
                }
            }, true);
        });
    }
}

// --- المواقيت ---
async function fetchByIP() {
    try { let res = await fetch('https://ipapi.co/json/'); let data = await res.json(); return { lat: data.latitude, lng: data.longitude, city: data.city }; } catch(e) { return null; }
}
async function calculatePrayerTimes() {
    let lat, lng, cityText;
    let ipData = await fetchByIP();
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (pos) => {
            lat = pos.coords.latitude; lng = pos.coords.longitude;
            try {
                let geoRes = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&accept-language=ar`);
                let geoData = await geoRes.json();
                cityText = geoData.address.town || geoData.address.village || geoData.address.city || geoData.address.state || 'موقعك';
                fetchAndDisplayPrayers(lat, lng, cityText);
            } catch(e) { fetchAndDisplayPrayers(lat, lng, 'موقعك'); }
        }, () => {
            if(ipData) fetchAndDisplayPrayers(ipData.lat, ipData.lng, ipData.city);
            else document.getElementById('prayer-location').innerText = "يرجى تفعيل الموقع لمعرفة المواقيت.";
        }, { timeout: 3000 });
    } else if(ipData) { fetchAndDisplayPrayers(ipData.lat, ipData.lng, ipData.city); }
}
async function fetchAndDisplayPrayers(lat, lng, cityText) {
    try {
        document.getElementById('prayer-location').innerText = `📍 ${cityText}`;
        let d = new Date();
        let res = await fetch(`https://api.aladhan.com/v1/timings/${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()}?latitude=${lat}&longitude=${lng}&method=5`);
        let data = await res.json(); let t = data.data.timings;
        let list = document.getElementById('prayer-times-list'); list.innerHTML='';
        let prayers = [{id:'Fajr',n:'الفجر'},{id:'Sunrise',n:'الشروق'},{id:'Dhuhr',n:'الظهر'},{id:'Asr',n:'العصر'},{id:'Maghrib',n:'المغرب'},{id:'Isha',n:'العشاء'}];
        let nextName='', nextTime=null; let now = new Date();

        prayers.forEach(p => {
            let [h, m] = t[p.id].split(':');
            let pDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m, 0);
            let h12 = parseInt(h)>12 ? parseInt(h)-12 : (parseInt(h)===0?12:parseInt(h));
            let ampm = parseInt(h)>=12 ? 'م' : 'ص';
            let div = document.createElement('div'); div.className='prayer-item';
            if(pDate > now && !nextTime && p.id !== 'Sunrise') { nextName=p.n; nextTime=pDate; div.classList.add('active-prayer'); }
            div.innerHTML = `<span>${p.n}</span><span>${h12}:${m} <small>${ampm}</small></span>`;
            list.appendChild(div);
        });

        if(!nextTime) { let [h,m]=t.Fajr.split(':'); nextTime=new Date(now.getFullYear(),now.getMonth(),now.getDate()+1,h,m,0); nextName='الفجر'; }
        if(prayerTimerInterval) clearInterval(prayerTimerInterval);
        document.getElementById('next-prayer-name').innerText = `الصلاة القادمة: ${nextName}`;
        prayerTimerInterval = setInterval(() => {
            let diff = nextTime - new Date();
            if(diff<=0) { clearInterval(prayerTimerInterval); calculatePrayerTimes(); }
            else {
                let h=Math.floor((diff%(1000*60*60*24))/(1000*60*60)), m=Math.floor((diff%(1000*60*60))/(1000*60)), s=Math.floor((diff%(1000*60))/1000);
                document.getElementById('prayer-countdown').innerText = `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
            }
        }, 1000);
    } catch(e) {}
}

// --- 8. المصحف المقروء (مستقل) ---
let surahListCached=[], currentSurahNumber=null;
async function loadQuranIndex() {
    if(surahListCached.length===0) {
        document.getElementById('surah-list').innerHTML = '<p style="text-align:center; width:100%;">جاري تحميل السور...</p>';
        try{
            let res = await fetch('https://api.alquran.cloud/v1/surah'); let data = await res.json(); surahListCached = data.data;
            let l = document.getElementById('surah-list'); l.innerHTML='';
            surahListCached.forEach(s => {
                let b = document.createElement('button'); b.className='surah-card-btn'; b.innerHTML=`<span class="surah-number">${s.number}</span><span>${s.name}</span>`;
                b.onclick = () => { navigateTo('quranReader'); loadSurahReader(s.number, s.name); };
                l.appendChild(b);
            });
            // تجهيز قائمة السور للصوتيات برضو
            let audioSurahSelect = document.getElementById('surah-select-audio');
            surahListCached.forEach(s => {
                let opt = document.createElement('option'); opt.value = s.number; opt.innerText = s.name;
                audioSurahSelect.appendChild(opt);
            });
        }catch(e){ showToast("فشل في تحميل سور المصحف"); }
    }
}

window.loadSurahReader = async (number, name) => {
    document.getElementById('current-surah-name').innerText = name; 
    let div = document.getElementById('quran-text'); div.innerHTML="<div style='text-align:center;'>جاري تحميل السورة...</div>";
    try {
        let res = await fetch(`https://api.alquran.cloud/v1/surah/${number}/quran-uthmani`); 
        let data = await res.json();
        let html = (number!==1&&number!==9)?`<div class="basmalah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>`:'';
        data.data.ayahs.forEach((a) => {
            let text = (number!==1&&number!==9&&a.numberInSurah===1)? a.text.replace('بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ ','') : a.text;
            html += `${text} <span class="ayah-symbol">﴿${a.numberInSurah}﴾</span> `;
        });
        div.innerHTML = html;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }catch(e){ div.innerHTML="حدث خطأ في الاتصال بالإنترنت.";}
};

// --- 9. الصوتيات (أكثر من ٢٠٠ قارئ - شغالة في الخلفية) ---
let allAudioReciters = [];
async function loadAudioReciters() {
    if(allAudioReciters.length > 0) return;
    try {
        let res = await fetch('https://mp3quran.net/api/v3/reciters?language=ar'); let data = await res.json();
        let sel = document.getElementById('reciter-select'); sel.innerHTML='<option value="">اختر القارئ...</option>';
        data.reciters.forEach(r => { if(r.moshaf && r.moshaf.length>0) {
            r.moshaf.forEach(m => {
                let name = r.name + (m.name.includes('حفص') && !m.name.includes('مجود') && !m.name.includes('مرتل')?'':` (${m.name})`);
                allAudioReciters.push({name: name, server: m.server});
                let opt = document.createElement('option'); opt.value = m.server; opt.innerText = name;
                sel.appendChild(opt);
            });
        }});
        
        // استرجاع آخر شيخ محفوظ
        if(localStorage.getItem('savedReciter')) {
            sel.value = localStorage.getItem('savedReciter');
        }
    } catch(e){}
    if(surahListCached.length===0) loadQuranIndex();
}

window.filterReciters = () => {
    let t = document.getElementById('reciter-search').value.toLowerCase();
    let sel = document.getElementById('reciter-select'); sel.innerHTML='<option value="">اختر القارئ...</option>';
    allAudioReciters.filter(r=>r.name.toLowerCase().includes(t)).forEach(r => {
        let opt = document.createElement('option'); opt.value=r.server; opt.innerText=r.name; sel.appendChild(opt);
    });
};

function padZero(num) { return num.toString().padStart(3, '0'); }

window.updateReciter = () => {
    localStorage.setItem('savedReciter', document.getElementById('reciter-select').value);
    playSelectedAudio();
};
window.updateAudioSurah = () => { playSelectedAudio(); };

function playSelectedAudio() {
    let server = document.getElementById('reciter-select').value;
    let surahNum = document.getElementById('surah-select-audio').value;
    
    if(!server || !surahNum) return;
    if(!server.endsWith('/')) server += '/';
    
    let audioPlayer = document.getElementById('global-quran-audio');
    let title = document.getElementById('now-playing-title');
    
    let surahName = document.getElementById('surah-select-audio').options[document.getElementById('surah-select-audio').selectedIndex].text;
    title.innerText = `سورة ${surahName}`;
    
    audioPlayer.src = `${server}${padZero(surahNum)}.mp3`;
    audioPlayer.play();
}
