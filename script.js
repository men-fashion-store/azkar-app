// --- 1. الأذكار الكاملة ---
const ayatAlKursi="أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ\nبِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\n﴿اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ﴾ [البقرة: 255]";
const surahAlIkhlas="بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\n﴿قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ﴾";
const surahAlFalaq="بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\n﴿قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ﴾";
const surahAnNas="بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\n﴿قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ﴾";

const azkarData = {
    morning:[{text:ayatAlKursi,count:1,proof:"الدليل: أُجير من الجن حتى يمسي."},{text:surahAlIkhlas,count:3,proof:"الدليل: تكفيه من كل شيء."},{text:surahAlFalaq,count:3,proof:"الدليل: تكفيه من كل شيء."},{text:surahAnNas,count:3,proof:"الدليل: تكفيه من كل شيء."},{text:"أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ، وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ، وَعَذَابٍ فِي الْقَبْرِ.",count:1,proof:"الدليل: صحيح مسلم."},{text:"أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ: فَتْحَهُ، وَنَصْرَهُ، وَنُورَهُ، وَبَرَكَتَهُ، وَهُدَاهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهِ وَشَرِّ مَا بَعْدَهُ.",count:1,proof:"الدليل: حديث حسن."},{text:"اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ.",count:1,proof:"الدليل: حديث صحيح."},{text:"اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي؛ فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ.",count:1,proof:"الدليل: سيد الاستغفار. (رواه البخاري)."},{text:"اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي وَعَنْ يَمِينِي وَعَنْ شِمَالِي وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي.",count:1,proof:"الدليل: حديث صحيح."},{text:"اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ، فَاطِرَ السَّمَاوَاتِ وَالْأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءًا أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ.",count:1,proof:"الدليل: حديث صحيح."},{text:"اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ، وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَهَ إِلَّا أَنْتَ.",count:3,proof:"الدليل: حديث حسن."},{text:"اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ، وَقَهْرِ الرِّجَالِ.",count:3,proof:"الدليل: صحيح البخاري."},{text:"يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.",count:1,proof:"الدليل: حديث صحيح."},{text:"حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.",count:7,proof:"الدليل: كفاه الله ما أهمه."},{text:"رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا.",count:3,proof:"الدليل: كان حقاً على الله أن يرضيه."},{text:"بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ، وَهُوَ السَّمِيعُ الْعَلِيمُ.",count:3,proof:"الدليل: لم يضره شيء."},{text:"يَا رَبِّ، لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ، وَلِعَظِيمِ سُلْطَانِكَ.",count:3,proof:"الدليل: حديث حسن."},{text:"اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.",count:3,proof:"الدليل: حديث صحيح."},{text:"اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا.",count:1,proof:"الدليل: حديث صحيح."},{text:"أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ، الْحَيَّ الْقَيُّومَ، وَأَتُوبُ إِلَيْهِ.",count:3,proof:"الدليل: حديث صحيح."},{text:"أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ.",count:100,proof:"الدليل: متفق عليه."},{text:"سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.",count:100,proof:"الدليل: حطت خطاياه."},{text:"لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",count:100,proof:"الدليل: كانت له عدل عشر رقاب."},{text:"اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى نَبِيِّنَا مُحَمَّدٍ.",count:10,proof:"الدليل: أدركته شفاعتي."}],
    evening:[{text:ayatAlKursi,count:1,proof:"الدليل: أُجير من الجن حتى يصبح."},{text:surahAlIkhlas,count:3,proof:"الدليل: تكفيه من كل شيء."},{text:surahAlFalaq,count:3,proof:"الدليل: تكفيه من كل شيء."},{text:surahAnNas,count:3,proof:"الدليل: تكفيه من كل شيء."},{text:"أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ، وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ، وَعَذَابٍ فِي الْقَبْرِ.",count:1,proof:"الدليل: صحيح مسلم."},{text:"أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذِهِ اللَّيْلَةِ: فَتْحَهَا، وَنَصْرَهَا، وَنُورَهَا، وَبَرَكَتَهَا، وَهُدَاهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهَا وَشَرِّ مَا بَعْدَهَا.",count:1,proof:"الدليل: حديث حسن."},{text:"اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ.",count:1,proof:"الدليل: حديث صحيح."},{text:"اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي؛ فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ.",count:1,proof:"الدليل: سيد الاستغفار. (رواه البخاري)."},{text:"اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ...",count:1,proof:"الدليل: حديث صحيح."},{text:"اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ...",count:1,proof:"الدليل: حديث صحيح."},{text:"اللَّهُمَّ عَافِنِي فِي بَدَنِي...",count:3,proof:"الدليل: حديث حسن."},{text:"اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ...",count:3,proof:"الدليل: صحيح البخاري."},{text:"يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ...",count:1,proof:"الدليل: حديث صحيح."},{text:"حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.",count:7,proof:"الدليل: كفاه الله ما أهمه."},{text:"رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا.",count:3,proof:"الدليل: كان حقاً على الله أن يرضيه."},{text:"بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ، وَهُوَ السَّمِيعُ الْعَلِيمُ.",count:3,proof:"الدليل: لم يضره شيء."},{text:"أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.",count:3,proof:"الدليل: لم تضره حمة تلك الليلة."},{text:"يَا رَبِّ، لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ، وَلِعَظِيمِ سُلْطَانِكَ.",count:3,proof:"الدليل: حديث حسن."},{text:"اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.",count:3,proof:"الدليل: حديث صحيح."},{text:"أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ، الْحَيَّ الْقَيُّومَ، وَأَتُوبُ إِلَيْهِ.",count:3,proof:"الدليل: حديث صحيح."},{text:"أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ.",count:100,proof:"الدليل: متفق عليه."},{text:"سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.",count:100,proof:"الدليل: حطت خطاياه."},{text:"لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",count:100,proof:"الدليل: كانت له عدل عشر رقاب."},{text:"اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى نَبِيِّنَا مُحَمَّدٍ.",count:10,proof:"الدليل: أدركته شفاعتي."}],
    sleep:[{text:ayatAlKursi,count:1,proof:"الدليل: حفظ من الشيطان."},{text:surahAlIkhlas,count:3,proof:"الدليل: سنة."},{text:surahAlFalaq,count:3,proof:"الدليل: سنة."},{text:surahAnNas,count:3,proof:"الدليل: سنة."},{text:"بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي...",count:1,proof:"الدليل: متفق عليه."},{text:"اللَّهُمَّ إِنَّكَ خَلَقْتَ نَفْسِي...",count:1,proof:"الدليل: صحيح مسلم."},{text:"اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ.",count:3,proof:"الدليل: رواه أبو داود."},{text:"بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا.",count:1,proof:"الدليل: صحيح البخاري."},{text:"سُبْحَانَ اللَّهِ.",count:33,proof:"الدليل: خير لكم من خادم."},{text:"الْحَمْدُ لِلَّهِ.",count:33,proof:"الدليل: خير لكم من خادم."},{text:"اللَّهُ أَكْبَرُ.",count:34,proof:"الدليل: خير لكم من خادم."}],
    prayer:[{text:"أَسْتَغْفِرُ اللَّهَ. (ثلاثاً)\nاللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ...",count:1,proof:"الدليل: صحيح مسلم."},{text:"لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ...",count:1,proof:"الدليل: متفق عليه."},{text:"لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ... لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ...",count:1,proof:"الدليل: صحيح مسلم."},{text:ayatAlKursi,count:1,proof:"الدليل: لم يمنعه من دخول الجنة إلا الموت."},{text:surahAlIkhlas,count:1,proof:"الدليل: تقرأ دبر كل صلاة."},{text:surahAlFalaq,count:1,proof:"الدليل: تقرأ دبر كل صلاة."},{text:surahAnNas,count:1,proof:"الدليل: تقرأ دبر كل صلاة."},{text:"سُبْحَانَ اللَّهِ.",count:33,proof:"الدليل: صحيح مسلم."},{text:"الْحَمْدُ لِلَّهِ.",count:33,proof:"الدليل: صحيح مسلم."},{text:"اللَّهُ أَكْبَرُ.",count:33,proof:"الدليل: صحيح مسلم."},{text:"لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",count:1,proof:"الدليل: تمام المائة."}],
    ruqyah:[{text:"بِسْمِ اللَّهِ أَرْقِيكَ، مِنْ كُلِّ شَيْءٍ يُؤْذِيكَ، مِنْ شَرِّ كُلِّ نَفْسٍ أَوْ عَيْنِ حَاسِدٍ، اللَّهُ يَشْفِيكَ، بِسْمِ اللَّهِ أَرْقِيكَ.",count:3,proof:"الدليل: رقية جبريل للنبي ﷺ (صحيح مسلم)."},{text:"أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّةِ، مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ، وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ.",count:3,proof:"الدليل: صحيح البخاري."},{text:"بِسْمِ اللَّهِ (ثلاثاً)\nأَعُوذُ بِاللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ (سبعاً).",count:1,proof:"الدليل: توضع اليد على موضع الألم. (صحيح مسلم)."},{text:ayatAlKursi,count:1,proof:"آية الكرسي من أعظم الرقية."},{text:surahAlIkhlas,count:3,proof:"سورة الإخلاص."},{text:surahAlFalaq,count:3,proof:"سورة الفلق."},{text:surahAnNas,count:3,proof:"سورة الناس."}]
};

const hadithsList = [
    {text:"إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى.",proof:"(متفق عليه)"},
    {text:"كَلِمَتَانِ خَفِيفَتَانِ عَلَى اللِّسَانِ، ثَقِيلَتَانِ فِي الْمِيزَانِ... سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ.",proof:"(متفق عليه)"},
    {text:"مَنْ صَلَّى عَلَيَّ صَلَاةً صَلَّى اللَّهُ عَلَيْهِ بِهَا عَشْرًا.",proof:"(رواه مسلم)"},
    {text:"لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ.",proof:"(متفق عليه)"}
];

let currentFontSize = 1.6;
let currentCategory = [], currentIndex = 0, currentRemainingCount = 0, originalCount = 0;
let masbahaCount = 0;
let prayerTimerInterval;

// --- 2. الإشعارات الأنيقة (Toast) بديل الـ Alert ---
window.showToast = function(msg) {
    const toast = document.getElementById('toast-msg');
    toast.innerText = msg;
    toast.style.bottom = '20px';
    setTimeout(() => { toast.style.bottom = '-100px'; }, 3500);
};

window.requestNotificationPermission = function() {
    if ("Notification" in window) {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") showToast("تم تفعيل الإشعارات بنجاح 🔔");
            else showToast("عذراً، المتصفح يمنع الإشعارات لضمان الخصوصية.");
        });
    } else {
        showToast("متصفحك الحالي لا يدعم الإشعارات.");
    }
};

// --- 3. نظام التوجيه الذكي (Hash Routing) للرجوع والريفريش ---
window.navigateTo = function(page) {
    window.location.hash = page;
};

window.addEventListener('hashchange', handleRouting);

function handleRouting() {
    let hash = window.location.hash.replace('#', '');
    if(!hash) hash = 'splash'; // الشاشة الافتراضية
    
    // إخفاء كل الشاشات
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active');
        s.classList.add('hidden');
    });

    if(quranAudio && !isPlayingQuran) stopAudio(); // إيقاف الصوت لو خرج من السورة

    // إظهار الشاشة المطلوبة بناءً على الهاش
    if(hash === 'splash') document.getElementById('splash-screen').classList.replace('hidden', 'active');
    else if(hash === 'home') document.getElementById('home-screen').classList.replace('hidden', 'active');
    else if(hash === 'azkarMenu') document.getElementById('azkar-categories-screen').classList.replace('hidden', 'active');
    else if(hash === 'azkarReader') document.getElementById('azkar-screen').classList.replace('hidden', 'active');
    else if(hash === 'masbaha') document.getElementById('masbaha-screen').classList.replace('hidden', 'active');
    else if(hash === 'prayerTimes') document.getElementById('prayer-times-screen').classList.replace('hidden', 'active');
    else if(hash === 'qibla') { document.getElementById('qibla-screen').classList.replace('hidden', 'active'); initQibla(); }
    else if(hash === 'quranIndex') { document.getElementById('quran-index-screen').classList.replace('hidden', 'active'); loadQuranIndex(); }
    else if(hash === 'quranReader') document.getElementById('quran-reader-screen').classList.replace('hidden', 'active');
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
    loadAllReciters();

    // تشغيل الروتينج أول ما الصفحة تحمل عشان لو عمل ريفريش يفضل مكانه
    if(!window.location.hash) window.location.hash = 'splash';
    else handleRouting();
};

window.hideSplash = () => navigateTo('home');
window.goHome = () => navigateTo('home');

window.toggleTheme = () => { 
    document.body.classList.toggle('dark-theme'); 
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light'); 
};
window.changeFontSize = (step) => { 
    currentFontSize = Math.max(1.2, Math.min(4.0, currentFontSize + step * 0.25)); 
    document.documentElement.style.setProperty('--zikr-font-size', `${currentFontSize}rem`); 
    localStorage.setItem('fontSize', currentFontSize); 
};

// --- 4. الأذكار ---
window.startAzkar = (type) => { 
    currentCategory = azkarData[type]; currentIndex = 0; 
    navigateTo('azkarReader');
    loadZikr(); 
};
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
    if(currentRemainingCount > 1) { 
        currentRemainingCount--; 
        document.getElementById('zikr-count').innerText = currentRemainingCount; 
        if(navigator.vibrate) navigator.vibrate(40); 
    }
    else { 
        if(navigator.vibrate) navigator.vibrate(200); 
        document.getElementById('zikr-card').classList.add('swipe-out-right'); 
        setTimeout(()=>{currentIndex++; loadZikr();},300); 
    }
});
let startX = 0;
document.getElementById('azkar-screen').addEventListener('touchstart', e => startX = e.changedTouches[0].screenX, {passive:true});
document.getElementById('azkar-screen').addEventListener('touchend', e => {
    let diff = e.changedTouches[0].screenX - startX;
    if(diff > 50 && currentIndex < currentCategory.length - 1) { document.getElementById('zikr-card').classList.add('swipe-out-right'); setTimeout(() => { currentIndex++; loadZikr(); }, 300); }
    else if(diff < -50 && currentIndex > 0) { document.getElementById('zikr-card').classList.add('swipe-out-left'); setTimeout(() => { currentIndex--; loadZikr(); }, 300); }
});

// --- 5. السبحة ---
window.incrementMasbaha = () => { masbahaCount++; document.getElementById('masbaha-count').innerText = masbahaCount; localStorage.setItem('masbahaCount', masbahaCount); if(navigator.vibrate) navigator.vibrate(30); };
window.resetMasbaha = () => { masbahaCount=0; document.getElementById('masbaha-count').innerText=masbahaCount; localStorage.setItem('masbahaCount',0); };

// --- 6. القبلة ---
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

// --- 7. مواقيت الصلاة (GPS مع Fallback سريع بالـ IP) ---
async function fetchByIP() {
    try {
        let res = await fetch('https://ipapi.co/json/');
        let data = await res.json();
        return { lat: data.latitude, lng: data.longitude, city: data.city };
    } catch(e) { return null; }
}

async function calculatePrayerTimes() {
    let lat, lng, cityText;
    
    // محاولة جلب الموقع عبر IP كبديل سريع لو الـ GPS اتأخر
    let ipData = await fetchByIP();
    
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (pos) => {
            lat = pos.coords.latitude; lng = pos.coords.longitude;
            try {
                let geoRes = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=ar`);
                let geoData = await geoRes.json();
                cityText = geoData.city || geoData.locality || 'موقعك';
                fetchAndDisplayPrayers(lat, lng, cityText);
            } catch(e) { fetchAndDisplayPrayers(lat, lng, 'موقعك'); }
        }, () => {
            // لو رفض الـ GPS نستخدم الـ IP
            if(ipData) fetchAndDisplayPrayers(ipData.lat, ipData.lng, ipData.city);
            else document.getElementById('prayer-location').innerText = "يرجى تفعيل الموقع لمعرفة المواقيت.";
        }, { timeout: 3000 }); // مهلة 3 ثواني للـ GPS
    } else if(ipData) {
        fetchAndDisplayPrayers(ipData.lat, ipData.lng, ipData.city);
    }
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

// --- 8. القرآن والصوتيات المتزامنة آية بآية ---
let surahListCached=[], currentSurahNumber=null, currentPlayingAyahIndex=-1, isPlayingQuran=false;
let currentAyahsAudioData = []; 
const quranAudio = document.getElementById('quran-audio');

async function loadQuranIndex() {
    if(surahListCached.length===0) {
        document.getElementById('surah-list').innerHTML = '<p style="text-align:center; width:100%;">جاري التحميل...</p>';
        try{
            let res = await fetch('https://api.alquran.cloud/v1/surah'); let data = await res.json(); surahListCached = data.data;
            let l = document.getElementById('surah-list'); l.innerHTML='';
            surahListCached.forEach(s => {
                let b = document.createElement('button'); b.className='surah-card-btn'; b.innerHTML=`<span class="surah-number">${s.number}</span><span>${s.name}</span>`;
                b.onclick = () => { navigateTo('quranReader'); loadSurah(s.number, s.name); };
                l.appendChild(b);
            });
        }catch(e){}
    }
}

// استخدام API دقيق يجيب القراء اللي عندهم صوت مقسم بالآيات
let allRecitersCached = [
    { id: 'ar.abdulbasitmujawwad', name: 'عبد الباسط عبد الصمد (مجود)' },
    { id: 'ar.abdulbasitmurattal', name: 'عبد الباسط عبد الصمد (مرتل)' },
    { id: 'ar.minshawi', name: 'محمد صديق المنشاوي (مجود)' },
    { id: 'ar.minshawimurattal', name: 'محمد صديق المنشاوي (مرتل)' },
    { id: 'ar.alafasy', name: 'مشاري العفاسي' },
    { id: 'ar.mahermuaiqly', name: 'ماهر المعيقلي' },
    { id: 'ar.husary', name: 'محمود خليل الحصري' },
    { id: 'ar.yasseraldossari', name: 'ياسر الدوسري' },
    { id: 'ar.yassinaljazaery', name: 'ياسين الجزائري (ورش)' },
    { id: 'ar.hudhaify', name: 'علي الحذيفي' }
];

function loadAllReciters() {
    let sel = document.getElementById('reciter-select'); sel.innerHTML='';
    allRecitersCached.forEach(r => {
        let opt = document.createElement('option'); opt.value = r.id; opt.innerText = r.name;
        if(r.id === 'ar.alafasy') opt.selected = true;
        sel.appendChild(opt);
    });
}

window.filterReciters = () => {
    let t = document.getElementById('reciter-search').value.toLowerCase();
    let sel = document.getElementById('reciter-select'); sel.innerHTML='';
    allRecitersCached.filter(r=>r.name.toLowerCase().includes(t)).forEach(r => {
        let opt = document.createElement('option'); opt.value=r.id; opt.innerText=r.name; sel.appendChild(opt);
    });
};

window.loadSurah = async (number, name) => {
    document.getElementById('current-surah-name').innerText = name; currentSurahNumber = number;
    currentPlayingAyahIndex = -1; stopAudio();
    let div = document.getElementById('quran-text'); div.innerHTML="<div style='text-align:center;'>جاري تحميل السورة...</div>";
    
    let reciterId = document.getElementById('reciter-select').value || 'ar.alafasy';
    
    try {
        // بنجيب السورة بالنص والصوت مع بعض في طلب واحد لضمان التزامن
        let res = await fetch(`https://api.alquran.cloud/v1/surah/${number}/editions/quran-uthmani,${reciterId}`); 
        let data = await res.json();
        
        let textData = data.data[0];
        let audioData = data.data[1];
        
        currentAyahsAudioData = audioData.ayahs.map(a => a.audio);
        
        let html = (number!==1&&number!==9)?`<div class="basmalah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>`:'';
        
        textData.ayahs.forEach((a, i) => {
            let text = (number!==1&&number!==9&&a.numberInSurah===1)? a.text.replace('بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ ','') : a.text;
            html += `<span class="ayah-span" id="ayah-${i}" onclick="playAyah(${i})">${text} <span class="ayah-symbol">﴿${a.numberInSurah}﴾</span></span> `;
        });
        div.innerHTML = html;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }catch(e){ div.innerHTML="حدث خطأ في الاتصال بالإنترنت.";}
};

window.playAyah = (index) => {
    if(index >= currentAyahsAudioData.length) { stopAudio(); return; }

    if(currentPlayingAyahIndex !== -1 && document.getElementById(`ayah-${currentPlayingAyahIndex}`)) 
        document.getElementById(`ayah-${currentPlayingAyahIndex}`).classList.remove('ayah-active');
    
    currentPlayingAyahIndex = index;
    let s = document.getElementById(`ayah-${index}`);
    if(s) { s.classList.add('ayah-active'); s.scrollIntoView({behavior:'smooth', block:'center'}); }
    
    quranAudio.src = currentAyahsAudioData[index];
    quranAudio.play();
    isPlayingQuran = true; document.getElementById('play-pause-btn').innerText="⏸ إيقاف مؤقت";
};

quranAudio.onended = () => { playAyah(currentPlayingAyahIndex + 1); };

window.togglePlayPause = () => {
    if(currentAyahsAudioData.length === 0) return;
    if(isPlayingQuran) { quranAudio.pause(); isPlayingQuran=false; document.getElementById('play-pause-btn').innerText="▶ إكمال القراءة"; }
    else { 
        if(currentPlayingAyahIndex === -1) playAyah(0); 
        else { quranAudio.play(); isPlayingQuran=true; document.getElementById('play-pause-btn').innerText="⏸ إيقاف مؤقت"; }
    }
};
window.stopAudio = () => { 
    quranAudio.pause(); isPlayingQuran=false; document.getElementById('play-pause-btn').innerText="▶ تشغيل التلاوة"; 
    if(currentPlayingAyahIndex !== -1 && document.getElementById(`ayah-${currentPlayingAyahIndex}`)) document.getElementById(`ayah-${currentPlayingAyahIndex}`).classList.remove('ayah-active'); 
    currentPlayingAyahIndex = -1; 
};

window.changeReciterAndPlay = async () => { 
    if(!currentSurahNumber) return; 
    let wasPlaying = isPlayingQuran;
    stopAudio();
    // إعادة تحميل السورة بصوت الشيخ الجديد لضمان التزامن
    loadSurah(currentSurahNumber, document.getElementById('current-surah-name').innerText);
};
