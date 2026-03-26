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
    malik: {
        title: "الموطأ",
        icon: "MK",
        description: "مختارات من موطأ الإمام مالك",
        sourceLabel: "كتاب",
        hadiths: [
            {text: "إنما بعثت لأتمم صالح الأخلاق.", narrator: "الموطأ (بالمعنى)"},
            {text: "البيّعان بالخيار ما لم يتفرقا.", narrator: "الموطأ (بالمعنى)"},
            {text: "ليس الشديد بالصرعة، إنما الشديد الذي يملك نفسه عند الغضب.", narrator: "الموطأ (بالمعنى)"},
            {text: "من كان يؤمن بالله واليوم الآخر فليكرم ضيفه.", narrator: "الموطأ (بالمعنى)"},
            {text: "إياكم والظن فإن الظن أكذب الحديث.", narrator: "الموطأ (بالمعنى)"},
            {text: "الراحمون يرحمهم الله.", narrator: "الموطأ (بالمعنى)"},
            {text: "صلة الرحم تزيد في العمر.", narrator: "الموطأ (بالمعنى)"},
            {text: "من كان في حاجة أخيه كان الله في حاجته.", narrator: "الموطأ (بالمعنى)"}
        ]
    }
};
let hadithApiCategories = [];

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
    
    if(hash === 'quranIndex' || hash === 'hadithReader') {
        searchIcon.classList.remove('hidden');
        if(hash === 'quranIndex') {
            title.innerText = "المصحف";
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
            'audioMenu': 'الصوتيات',
            'bookmarks': 'علاماتي المرجعية',
            'hadithMenu': 'مكتبة الحديث'
        };
        title.innerText = titles[hash] || 'موسوعة المسلم';
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
    localStorage.setItem('fontSize', val);
};

// --- 5. المشاركة والتحديث والخروج ---
window.shareApp = function() {
    toggleSidebar();
    if (navigator.share) {
        navigator.share({ title: 'موسوعة المسلم', text: 'حمل تطبيق موسوعة المسلم', url: window.location.href }).catch(console.error);
    } else {
        navigator.clipboard.writeText(window.location.href);
        showToast("تم نسخ الرابط");
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
    } catch(e) {}
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
        let data = await fetchJsonWithRetry(`https://api.aladhan.com/v1/timings/${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()}?latitude=${lat}&longitude=${lng}&method=5`);
        let t = data.data.timings;
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
    } catch(e) {
        showToast("تعذر تحميل مواقيت الصلاة حالياً");
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
    return name.replace(/^سورة\s+/, '').trim();
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
            summaryEl.innerText = `📚 فهرس المصحف - ${toArabicNumerals(data.data.length)} سورة`;
        }

        surahListCached.forEach(s => {
            list.innerHTML += `<button class="surah-card-btn" onclick="jumpToAyah(${s.number}, 1)"><span class="surah-number">${toArabicNumerals(s.number)}</span> <span>${s.name}</span></button>`;
            if(audioSel) audioSel.innerHTML += `<option value="${s.number}">${s.name}</option>`;
        });
    } catch(e) {
        const summaryEl = document.getElementById('quran-index-summary');
        if(summaryEl) summaryEl.innerText = "⚠️ تعذر تحميل الفهرس الآن";
    }
}

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
            renderPageData(mapped, pageNum, scrollToAyahId);
        } else {
            let data = await fetchJsonWithRetry(`https://api.alquran.cloud/v1/page/${pageNum}/quran-uthmani`);
        quranPageCache[pageNum] = data.data; 
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

// الدالة السحرية لتظبيط الخط أوتوماتيك لملء الشاشة بدون سكرول
function fitTextToScreen() {
    let container = document.getElementById('quran-text');
    if(!container) return;
    
    // إرجاع الخط للحجم الافتراضي عشان يقيس من جديد
    container.style.fontSize = ''; 
    let currentSize = 35; // أقصى حجم متوقع
    container.style.fontSize = currentSize + 'px';

    // طالما النص أطول من مساحة الشاشة (بيعمل سكرول)، صغّره درجة درجة
    while (container.scrollHeight > container.clientHeight && currentSize > 14) {
        currentSize -= 0.5;
        container.style.fontSize = currentSize + 'px';
    }
}

function renderPageData(pageData, pageNum, scrollToAyahId) {
    let ayahs = pageData.ayahs;
    let juzNum = toArabicNumerals(ayahs[0].juz);
    let surahsOnPage = [...new Set(ayahs.map(a => a.surah.name))];
    const primarySurahName = normalizeSurahDisplayName(surahsOnPage[0]);
    
    let titleEl = document.getElementById('header-title');
    if(titleEl) titleEl.innerText = "سورة " + primarySurahName;
    
    let mJuz = document.getElementById('mushaf-juz-name');
    let mSurah = document.getElementById('mushaf-surah-name');
    let mPageNum = document.getElementById('mushaf-page-num');
    if(mJuz) mJuz.innerText = `الجزء ${juzNum}`;
    if(mSurah) mSurah.innerText = `سورة ${primarySurahName}`;
    if(mPageNum) mPageNum.innerText = toArabicNumerals(pageNum);

    let html = '';
    ayahs.forEach(a => {
        let sName = normalizeSurahDisplayName(a.surah.name);
        let sNum = a.surah.number;
        
        if(a.numberInSurah === 1) {
            html += `<div class="surah-divider">سُورَةُ ${sName}</div>`;
            if(sNum !== 1 && sNum !== 9) {
                html += `<div class="bismillah-divider">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>`;
            }
        }
        
        let text = (sNum != 1 && sNum != 9 && a.numberInSurah == 1) ? a.text.replace("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ ","") : a.text;
        let isMarked = quranBookmarks.some(b => b.surah === sNum && b.ayah === a.numberInSurah);
        let markClass = isMarked ? "bookmarked-ayah" : "";
        let ayahUniqueId = `ayah-${sNum}-${a.numberInSurah}`;
        
        html += `<span class="ayah-span ${markClass}" id="${ayahUniqueId}" onclick="toggleBookmark(${sNum}, '${sName}', ${a.numberInSurah}, '${text}')">${text} <span class="ayah-symbol">﴿${toArabicNumerals(a.numberInSurah)}﴾</span></span> `;
    });
    
    document.getElementById('quran-text').innerHTML = html;
    
    // تشغيل دالة تثبيت الخط بعد وضع الآيات بـ 50 ملي ثانية
    setTimeout(fitTextToScreen, 50);

    if(window.handleTopSearch) window.handleTopSearch();
    if(scrollToAyahId) {
        setTimeout(() => {
            let el = document.getElementById(`ayah-${scrollToAyahId}`);
            if(el) { el.style.backgroundColor = "rgba(221, 167, 123, 0.4)"; }
        }, 100);
    }
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
        showToast("❌ تم إزالة العلامة المرجعية");
    } else {
        quranBookmarks.push({surah: sNum, surahName: sName, ayah: aNum, text: text});
        if(el) el.classList.add('bookmarked-ayah');
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
            <h3>سورة ${b.surahName} - آية ${toArabicNumerals(b.ayah)}</h3>
            <p>${b.text} ﴿${toArabicNumerals(b.ayah)}﴾</p>
            <div class="actions">
                <button class="btn" style="padding: 8px 15px; font-size: 1rem; flex: 1;" onclick="jumpToAyah(${b.surah}, ${b.ayah})">📖 الذهاب</button>
                <button class="btn" style="padding: 8px 15px; font-size: 1rem; width: auto; background: transparent; color: #ff4d4d; border-color: #ff4d4d;" onclick="toggleBookmark(${b.surah}, '${b.surahName}', ${b.ayah}, '')">❌ حذف</button>
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

window.incrementMasbaha = () => { let c = parseInt(document.getElementById('masbaha-count').innerText) + 1; document.getElementById('masbaha-count').innerText = c; localStorage.setItem('masbahaCount', c); if(navigator.vibrate) navigator.vibrate(30); };
window.resetMasbaha = () => { document.getElementById('masbaha-count').innerText = 0; localStorage.setItem('masbahaCount', 0); };

// --- 10. الصوتيات ---
let allAudioReciters = [];
async function loadAudioReciters() {
    try {
        let data = await fetchJsonWithRetry('https://mp3quran.net/api/v3/reciters?language=ar');
        const sel = document.getElementById('reciter-select'); if(!sel) return;
        data.reciters.forEach(r => { if(r.moshaf) r.moshaf.forEach(m => { let name = `${r.name} (${m.name.replace('حفص عن عاصم','حفص')})`; allAudioReciters.push({ n: name, s: m.server }); sel.innerHTML += `<option value="${m.server}">${name}</option>`; }); });
    } catch(e){
        showToast("تعذر تحميل القراء حالياً");
    }
    loadQuranIndex(); 
}
window.filterReciters = () => { let t = document.getElementById('reciter-search').value.toLowerCase(); const sel = document.getElementById('reciter-select'); sel.innerHTML='<option value="">اختر القارئ...</option>'; allAudioReciters.filter(r => r.n.toLowerCase().includes(t)).forEach(r => { sel.innerHTML += `<option value="${r.s}">${r.n}</option>`; }); };
window.updateReciter = () => updateAudioSurah();
window.updateAudioSurah = () => { let server = document.getElementById('reciter-select').value, surah = document.getElementById('surah-select-audio').value; if(!server || !surah) return; let surahName = document.getElementById('surah-select-audio').options[document.getElementById('surah-select-audio').selectedIndex].text; document.getElementById('now-playing-title').innerText = `🎧 سورة ${surahName}`; document.getElementById('global-quran-audio').src = `${server.endsWith('/')?server:server+'/'}${surah.padStart(3,'0')}.mp3`; document.getElementById('global-quran-audio').play(); };

// --- 11. التحميل الأولي ---
document.addEventListener("DOMContentLoaded", () => {
    const rH = hadithsList[Math.floor(Math.random() * hadithsList.length)];
    document.getElementById('splash-hadith').innerText = rH.text;
    document.getElementById('splash-proof').innerText = rH.proof;
    
    if(localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-theme');
    
    let savedFont = localStorage.getItem('fontSize');
    if(savedFont) {
        document.documentElement.style.setProperty('--zikr-font-size', `${parseFloat(savedFont)}rem`);
        let slider = document.getElementById('font-slider');
        if(slider) slider.value = savedFont;
    }
    
    if(localStorage.getItem('masbahaCount')) document.getElementById('masbaha-count').innerText = localStorage.getItem('masbahaCount');

    const quranModeSelect = document.getElementById('quran-text-mode');
    if(quranModeSelect) quranModeSelect.value = quranTextMode;
    document.body.classList.toggle('quran-font-classic', quranTextMode === 'classic');

    if(!window.location.hash || window.location.hash === '#splash') {
        window.location.hash = 'splash'; setTimeout(() => { window.location.hash = 'home'; }, 2500); 
    } else { handleRoute(); }
    
    initLocationAndPrayers();
    loadAudioReciters();
    renderHadithLibraries();
    loadHadithApiCategories();
    renderBookmarks(); 
});
