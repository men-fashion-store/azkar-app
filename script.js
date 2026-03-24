// --- 1. الأذكار الكاملة الموثقة (صباح، مساء، نوم، صلاة، رقية) ---
const ayatAlKursi = "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ\nبِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\n﴿اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ﴾ [البقرة: 255]";
const surahAlIkhlas = "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\n﴿قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ﴾";
const surahAlFalaq = "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\n﴿قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ﴾";
const surahAnNas = "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\n﴿قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ﴾";

const azkarData = {
    morning: [
        { text: ayatAlKursi, count: 1, proof: "الدليل: أُجير من الجن حتى يمسي. (رواه الحاكم وصححه الألباني)." },
        { text: surahAlIkhlas, count: 3, proof: "الدليل: تكفيه من كل شيء. (رواه أبو داود)." },
        { text: surahAlFalaq, count: 3, proof: "الدليل: تكفيه من كل شيء." },
        { text: surahAnNas, count: 3, proof: "الدليل: تكفيه من كل شيء." },
        { text: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ، وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ، وَعَذَابٍ فِي الْقَبْرِ.", count: 1, proof: "الدليل: صحيح مسلم." },
        { text: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ: فَتْحَهُ، وَنَصْرَهُ، وَنُورَهُ، وَبَرَكَتَهُ، وَهُدَاهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهِ وَشَرِّ مَا بَعْدَهُ.", count: 1, proof: "الدليل: حديث حسن. (رواه أبو داود)." },
        { text: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ.", count: 1, proof: "الدليل: حديث صحيح. (رواه الترمذي)." },
        { text: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي؛ فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ.", count: 1, proof: "الدليل: سيد الاستغفار. (رواه البخاري)." },
        { text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي وَعَنْ يَمِينِي وَعَنْ شِمَالِي وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي.", count: 1, proof: "الدليل: حديث صحيح. (رواه أبو داود)." },
        { text: "اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ، فَاطِرَ السَّمَاوَاتِ وَالْأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءًا أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ.", count: 1, proof: "الدليل: حديث صحيح. (رواه أبو داود والترمذي)." },
        { text: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ، وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَهَ إِلَّا أَنْتَ.", count: 3, proof: "الدليل: حديث حسن. (رواه أبو داود)." },
        { text: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ، وَقَهْرِ الرِّجَالِ.", count: 3, proof: "الدليل: صحيح البخاري." },
        { text: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.", count: 1, proof: "الدليل: حديث صحيح. (رواه الحاكم)." },
        { text: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.", count: 7, proof: "الدليل: كفاه الله ما أهمه. (رواه ابن السني)." },
        { text: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا.", count: 3, proof: "الدليل: كان حقاً على الله أن يرضيه. (رواه أبو داود)." },
        { text: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ، وَهُوَ السَّمِيعُ الْعَلِيمُ.", count: 3, proof: "الدليل: لم يضره شيء. (رواه أبو داود)." },
        { text: "يَا رَبِّ، لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ، وَلِعَظِيمِ سُلْطَانِكَ.", count: 3, proof: "الدليل: حديث حسن. (رواه ابن ماجه)." },
        { text: "اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.", count: 3, proof: "الدليل: حديث صحيح. (رواه أحمد)." },
        { text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا.", count: 1, proof: "الدليل: حديث صحيح. (رواه ابن ماجه)." },
        { text: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ، الْحَيَّ الْقَيُّومَ، وَأَتُوبُ إِلَيْهِ.", count: 3, proof: "الدليل: حديث صحيح. (رواه أبو داود)." },
        { text: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ.", count: 100, proof: "الدليل: صحيح البخاري ومسلم." },
        { text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.", count: 100, proof: "الدليل: حطت خطاياه وإن كانت مثل زبد البحر. (رواه مسلم)." },
        { text: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.", count: 100, proof: "الدليل: كانت له عدل عشر رقاب، وكتبت له مائة حسنة... (رواه البخاري ومسلم)." },
        { text: "اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى نَبِيِّنَا مُحَمَّدٍ.", count: 10, proof: "الدليل: من صلى علي حين يصبح عشراً أدركته شفاعتي. (رواه الطبراني)." }
    ],
    evening: [
        { text: ayatAlKursi, count: 1, proof: "الدليل: أُجير من الجن حتى يصبح. (رواه الحاكم وصححه الألباني)." },
        { text: surahAlIkhlas, count: 3, proof: "الدليل: تكفيه من كل شيء. (رواه أبو داود)." },
        { text: surahAlFalaq, count: 3, proof: "الدليل: تكفيه من كل شيء." },
        { text: surahAnNas, count: 3, proof: "الدليل: تكفيه من كل شيء." },
        { text: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ، وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ، وَعَذَابٍ فِي الْقَبْرِ.", count: 1, proof: "الدليل: صحيح مسلم." },
        { text: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذِهِ اللَّيْلَةِ: فَتْحَهَا، وَنَصْرَهَا، وَنُورَهَا، وَبَرَكَتَهَا، وَهُدَاهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهَا وَشَرِّ مَا بَعْدَهَا.", count: 1, proof: "الدليل: حديث حسن. (رواه أبو داود)." },
        { text: "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ.", count: 1, proof: "الدليل: حديث صحيح. (رواه الترمذي)." },
        { text: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي؛ فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ.", count: 1, proof: "الدليل: سيد الاستغفار. (رواه البخاري)." },
        { text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي وَعَنْ يَمِينِي وَعَنْ شِمَالِي وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي.", count: 1, proof: "الدليل: حديث صحيح. (رواه أبو داود)." },
        { text: "اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ، فَاطِرَ السَّمَاوَاتِ وَالْأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءًا أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ.", count: 1, proof: "الدليل: حديث صحيح. (رواه أبو داود والترمذي)." },
        { text: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ، وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَهَ إِلَّا أَنْتَ.", count: 3, proof: "الدليل: حديث حسن. (رواه أبو داود)." },
        { text: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ، وَقَهْرِ الرِّجَالِ.", count: 3, proof: "الدليل: صحيح البخاري." },
        { text: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.", count: 1, proof: "الدليل: حديث صحيح. (رواه الحاكم)." },
        { text: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.", count: 7, proof: "الدليل: كفاه الله ما أهمه. (رواه ابن السني)." },
        { text: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا.", count: 3, proof: "الدليل: كان حقاً على الله أن يرضيه. (رواه أبو داود)." },
        { text: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ، وَهُوَ السَّمِيعُ الْعَلِيمُ.", count: 3, proof: "الدليل: لم يضره شيء. (رواه أبو داود)." },
        { text: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.", count: 3, proof: "الدليل: لم تضره حمة تلك الليلة. (رواه أحمد والترمذي)." },
        { text: "يَا رَبِّ، لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ، وَلِعَظِيمِ سُلْطَانِكَ.", count: 3, proof: "الدليل: حديث حسن. (رواه ابن ماجه)." },
        { text: "اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.", count: 3, proof: "الدليل: حديث صحيح. (رواه أحمد)." },
        { text: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ، الْحَيَّ الْقَيُّومَ، وَأَتُوبُ إِلَيْهِ.", count: 3, proof: "الدليل: حديث صحيح. (رواه أبو داود)." },
        { text: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ.", count: 100, proof: "الدليل: صحيح البخاري ومسلم." },
        { text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.", count: 100, proof: "الدليل: حطت خطاياه وإن كانت مثل زبد البحر. (رواه مسلم)." },
        { text: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.", count: 100, proof: "الدليل: كانت له عدل عشر رقاب، وكتبت له مائة حسنة... (رواه البخاري ومسلم)." },
        { text: "اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى نَبِيِّنَا مُحَمَّدٍ.", count: 10, proof: "الدليل: من صلى علي حين يمسي عشراً أدركته شفاعتي. (رواه الطبراني)." }
    ],
    sleep: [
        { text: ayatAlKursi, count: 1, proof: "الدليل: لا يزال عليك من الله حافظ، ولا يقربك شيطان حتى تصبح. (صحيح البخاري)." },
        { text: surahAlIkhlas, count: 3, proof: "الدليل: كان النبي ﷺ يقرأها وينفث في يديه ويمسح بها جسده. (متفق عليه)." },
        { text: surahAlFalaq, count: 3, proof: "الدليل: كان النبي ﷺ يقرأها وينفث في يديه ويمسح بها جسده." },
        { text: surahAnNas, count: 3, proof: "الدليل: كان النبي ﷺ يقرأها وينفث في يديه ويمسح بها جسده." },
        { text: "بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي، وَبِكَ أَرْفَعُهُ، فَإِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ.", count: 1, proof: "الدليل: متفق عليه." },
        { text: "اللَّهُمَّ إِنَّكَ خَلَقْتَ نَفْسِي وَأَنْتَ تَوَفَّاهَا، لَكَ مَمَاتُهَا وَمَحْيَاهَا، إِنْ أَحْيَيْتَهَا فَاحْفَظْهَا، وَإِنْ أَمَتَّهَا فَاغْفِرْ لَهَا، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ.", count: 1, proof: "الدليل: صحيح مسلم." },
        { text: "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ.", count: 3, proof: "الدليل: رواه أبو داود." },
        { text: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا.", count: 1, proof: "الدليل: صحيح البخاري." },
        { text: "سُبْحَانَ اللَّهِ.", count: 33, proof: "الدليل: خير لكم من خادم. (متفق عليه)." },
        { text: "الْحَمْدُ لِلَّهِ.", count: 33, proof: "الدليل: خير لكم من خادم. (متفق عليه)." },
        { text: "اللَّهُ أَكْبَرُ.", count: 34, proof: "الدليل: خير لكم من خادم. (متفق عليه)." }
    ],
    prayer: [
        { text: "أَسْتَغْفِرُ اللَّهَ. (ثلاثاً)\nاللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ.", count: 1, proof: "الدليل: صحيح مسلم." },
        { text: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ، وَلَا مُعْطِيَ لِمَا مَنَعْتَ، وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ.", count: 1, proof: "الدليل: متفق عليه." },
        { text: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ، لَا إِلَهَ إِلَّا اللَّهُ، وَلَا نَعْبُدُ إِلَّا إِيَّاهُ، لَهُ النِّعْمَةُ وَلَهُ الْفَضْلُ وَلَهُ الثَّنَاءُ الْحَسَنُ، لَا إِلَهَ إِلَّا اللَّهُ مُخْلِصِينَ لَهُ الدِّينَ وَلَوْ كَرِهَ الْكَافِرُونَ.", count: 1, proof: "الدليل: صحيح مسلم." },
        { text: ayatAlKursi, count: 1, proof: "الدليل: من قرأها دبر كل صلاة لم يمنعه من دخول الجنة إلا الموت." },
        { text: surahAlIkhlas, count: 1, proof: "الدليل: تقرأ دبر كل صلاة." },
        { text: surahAlFalaq, count: 1, proof: "الدليل: تقرأ دبر كل صلاة." },
        { text: surahAnNas, count: 1, proof: "الدليل: تقرأ دبر كل صلاة." },
        { text: "سُبْحَانَ اللَّهِ.", count: 33, proof: "الدليل: صحيح مسلم." },
        { text: "الْحَمْدُ لِلَّهِ.", count: 33, proof: "الدليل: صحيح مسلم." },
        { text: "اللَّهُ أَكْبَرُ.", count: 33, proof: "الدليل: صحيح مسلم." },
        { text: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.", count: 1, proof: "الدليل: تمام المائة، من قالها غفرت خطاياه. (صحيح مسلم)." }
    ],
    ruqyah: [
        { text: "بِسْمِ اللَّهِ أَرْقِيكَ، مِنْ كُلِّ شَيْءٍ يُؤْذِيكَ، مِنْ شَرِّ كُلِّ نَفْسٍ أَوْ عَيْنِ حَاسِدٍ، اللَّهُ يَشْفِيكَ، بِسْمِ اللَّهِ أَرْقِيكَ.", count: 3, proof: "الدليل: رقية جبريل للنبي ﷺ (صحيح مسلم)." },
        { text: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّةِ، مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ، وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ.", count: 3, proof: "الدليل: صحيح البخاري." },
        { text: "بِسْمِ اللَّهِ (ثلاثاً)\nأَعُوذُ بِاللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ (سبعاً).", count: 1, proof: "الدليل: توضع اليد على موضع الألم. (صحيح مسلم)." },
        { text: ayatAlKursi, count: 1, proof: "آية الكرسي من أعظم الرقية." },
        { text: surahAlIkhlas, count: 3, proof: "سورة الإخلاص." },
        { text: surahAlFalaq, count: 3, proof: "سورة الفلق." },
        { text: surahAnNas, count: 3, proof: "سورة الناس." }
    ]
};

const hadithsList = [
    { text: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى.", proof: "(متفق عليه)" },
    { text: "كَلِمَتَانِ خَفِيفَتَانِ عَلَى اللِّسَانِ، ثَقِيلَتَانِ فِي الْمِيزَانِ... سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ.", proof: "(متفق عليه)" },
    { text: "مَنْ صَلَّى عَلَيَّ صَلَاةً صَلَّى اللَّهُ عَلَيْهِ بِهَا عَشْرًا.", proof: "(رواه مسلم)" }
];

// --- 2. إدارة الشاشات الأساسية والتهيئة ---
let currentFontSize = 1.6;
const splashScreen = document.getElementById('splash-screen');
const homeScreen = document.getElementById('home-screen');
const azkarCategoriesScreen = document.getElementById('azkar-categories-screen');
const azkarScreen = document.getElementById('azkar-screen');
const masbahaScreen = document.getElementById('masbaha-screen');
const prayerTimesScreen = document.getElementById('prayer-times-screen');
const qiblaScreen = document.getElementById('qibla-screen');
const quranIndexScreen = document.getElementById('quran-index-screen');
const quranReaderScreen = document.getElementById('quran-reader-screen');

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
    
    // استرجاع عدد السبحة
    if(localStorage.getItem('masbahaCount')) {
        masbahaCount = parseInt(localStorage.getItem('masbahaCount'));
        document.getElementById('masbaha-count').innerText = masbahaCount;
    }

    // حساب مواقيت الصلاة تلقائياً عند الفتح
    calculatePrayerTimes();
};

window.hideSplash = function() {
    splashScreen.classList.remove('active'); splashScreen.classList.add('hidden');
    homeScreen.classList.remove('hidden'); homeScreen.classList.add('active');
};

window.goHome = function() {
    if(quranAudio) quranAudio.pause();
    document.querySelectorAll('.screen').forEach(s => { s.classList.remove('active'); s.classList.add('hidden'); });
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

// --- 3. نظام الأذكار ---
let currentCategory = [], currentIndex = 0, currentRemainingCount = 0, originalCount = 0;

window.openAzkarMenu = function() {
    goHome();
    homeScreen.classList.remove('active'); homeScreen.classList.add('hidden');
    azkarCategoriesScreen.classList.remove('hidden'); azkarCategoriesScreen.classList.add('active');
};

window.startAzkar = function(type) {
    currentCategory = azkarData[type]; currentIndex = 0;
    azkarCategoriesScreen.classList.remove('active'); azkarCategoriesScreen.classList.add('hidden');
    azkarScreen.classList.remove('hidden'); azkarScreen.classList.add('active');
    loadZikr();
};

function loadZikr() {
    if (currentIndex >= currentCategory.length) { openAzkarMenu(); return; }
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
        if (currentIndex >= currentCategory.length - 1) openAzkarMenu();
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

// --- 4. السبحة الإلكترونية ---
let masbahaCount = 0;
window.openMasbaha = function() {
    goHome(); homeScreen.classList.remove('active'); homeScreen.classList.add('hidden');
    masbahaScreen.classList.remove('hidden'); masbahaScreen.classList.add('active');
};
window.incrementMasbaha = function() {
    masbahaCount++;
    document.getElementById('masbaha-count').innerText = masbahaCount;
    localStorage.setItem('masbahaCount', masbahaCount);
    if(navigator.vibrate) {
        if(masbahaCount % 33 === 0 || masbahaCount % 100 === 0) navigator.vibrate([100, 50, 100]); // اهتزاز مميز عند الـ 33 و 100
        else navigator.vibrate(30);
    }
};
window.resetMasbaha = function() {
    masbahaCount = 0;
    document.getElementById('masbaha-count').innerText = masbahaCount;
    localStorage.setItem('masbahaCount', 0);
    if(navigator.vibrate) navigator.vibrate(200);
};

// --- 5. نظام مواقيت الصلاة والإشعارات والعداد ---
let prayerTimerInterval;
window.openPrayerTimes = function() {
    goHome(); homeScreen.classList.remove('active'); homeScreen.classList.add('hidden');
    prayerTimesScreen.classList.remove('hidden'); prayerTimesScreen.classList.add('active');
    calculatePrayerTimes();
};

function requestNotificationPermission() {
    if ("Notification" in window) {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") alert("تم تفعيل الإشعارات بنجاح!");
            else alert("يرجى السماح بالإشعارات من إعدادات المتصفح.");
        });
    } else alert("متصفحك لا يدعم الإشعارات.");
}

function showNotification(title, body) {
    if (Notification.permission === "granted") {
        new Notification(title, { body: body, icon: "icon-192.png" });
        if(navigator.vibrate) navigator.vibrate([500, 200, 500]);
    }
}

async function calculatePrayerTimes() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            try {
                // جلب اسم المدينة
                const geoRes = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=ar`);
                const geoData = await geoRes.json();
                document.getElementById('prayer-location').innerText = `📍 ${geoData.city || geoData.locality || 'موقعك الحالي'}`;

                // حساب المواقيت
                const date = new Date();
                const res = await fetch(`https://api.aladhan.com/v1/timings/${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}?latitude=${lat}&longitude=${lng}&method=5`);
                const data = await res.json();
                const timings = data.data.timings;
                
                const prayers = [
                    { id: 'Fajr', name: 'الفجر', time: timings.Fajr },
                    { id: 'Sunrise', name: 'الشروق', time: timings.Sunrise },
                    { id: 'Dhuhr', name: 'الظهر', time: timings.Dhuhr },
                    { id: 'Asr', name: 'العصر', time: timings.Asr },
                    { id: 'Maghrib', name: 'المغرب', time: timings.Maghrib },
                    { id: 'Isha', name: 'المغرب', time: timings.Maghrib }, // لتأكيد المغرب
                    { id: 'Isha', name: 'العشاء', time: timings.Isha }
                ];
                
                // إزالة التكرار إن وجد وعرض المواقيت
                const uniquePrayers = prayers.filter((v,i,a)=>a.findIndex(t=>(t.name === v.name))===i);
                
                const listDiv = document.getElementById('prayer-times-list');
                listDiv.innerHTML = '';
                
                let nextPrayerName = '';
                let nextPrayerTimeObj = null;
                const now = new Date();
                
                uniquePrayers.forEach(p => {
                    const [hours, mins] = p.time.split(':');
                    const pDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, mins, 0);
                    
                    let time12 = parseInt(hours) > 12 ? parseInt(hours) - 12 : (parseInt(hours) === 0 ? 12 : parseInt(hours));
                    let amPm = parseInt(hours) >= 12 ? 'م' : 'ص';
                    
                    let div = document.createElement('div');
                    div.className = 'prayer-item';
                    
                    if(pDate > now && !nextPrayerTimeObj && p.id !== 'Sunrise') {
                        nextPrayerName = p.name;
                        nextPrayerTimeObj = pDate;
                        div.classList.add('active-prayer');
                    }
                    
                    div.innerHTML = `<span>${p.name}</span> <span>${time12}:${mins} <small>${amPm}</small></span>`;
                    listDiv.appendChild(div);
                });

                // إذا كانت كل صلوات اليوم انتهت، القادمة هي الفجر غداً
                if(!nextPrayerTimeObj) {
                    const [fHours, fMins] = timings.Fajr.split(':');
                    nextPrayerTimeObj = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, fHours, fMins, 0);
                    nextPrayerName = 'الفجر';
                }

                // تشغيل العداد التنازلي في الشاشة الرئيسية
                if(prayerTimerInterval) clearInterval(prayerTimerInterval);
                document.getElementById('next-prayer-name').innerText = `الصلاة القادمة: ${nextPrayerName}`;
                
                prayerTimerInterval = setInterval(() => {
                    let diff = nextPrayerTimeObj - new Date();
                    if(diff <= 0) {
                        clearInterval(prayerTimerInterval);
                        showNotification("حان وقت الصلاة", `حان الآن موعد صلاة ${nextPrayerName}`);
                        calculatePrayerTimes(); // إعادة الحساب للصلاة اللي بعدها
                    } else {
                        let h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                        let m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                        let s = Math.floor((diff % (1000 * 60)) / 1000);
                        document.getElementById('prayer-countdown').innerText = 
                            `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
                    }
                }, 1000);

            } catch (error) {
                document.getElementById('prayer-location').innerText = "فشل في جلب المواقيت، تأكد من الإنترنت.";
            }
        }, () => {
            document.getElementById('prayer-location').innerText = "يرجى تفعيل الموقع (GPS) لحساب المواقيت.";
        });
    }
}
