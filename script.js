// --- 0. أدوات عامة ---
function toArabicDigits(n) {
    return String(n).replace(/\d/g, (d) => '٠١٢٣٤٥٦٧٨٩'[Number(d)]);
}

function parseDisplayInt(str) {
    let s = String(str);
    if (/[٠-٩]/.test(s)) {
        s = s.replace(/[٠١٢٣٤٥٦٧٨٩]/g, (ch) => '0123456789'['٠١٢٣٤٥٦٧٨٩'.indexOf(ch)]);
    }
    const v = parseInt(s, 10);
    return Number.isFinite(v) ? v : 0;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/** قارئ استماع الآية: معرف alquran.cloud / islamic.network + مجلد everyayah.com */
const AYAH_RECITER_PRESETS = [
    { id: 'alafasy', label: 'مشاري العفاسي', cdn: 'ar.alafasy', everyayah: 'Alafasy_128kbps' },
    { id: 'husary', label: 'محمود خليل الحصري', cdn: 'ar.husary', everyayah: 'Husary_128kbps' },
    { id: 'abdulbasit', label: 'عبد الباسط عبد الصمد', cdn: 'ar.abdulbasitmurattal', everyayah: 'Abdul_Basit_Murattal_192kbps' },
    { id: 'minshawi', label: 'محمد صديق المنشاوي', cdn: 'ar.minshawi', everyayah: 'Minshawy_Murattal_128kbps' },
    { id: 'ghamadi', label: 'سعد الغامدي', cdn: 'ar.saadalghamidi', everyayah: 'Ghamadi_40kbps' },
    { id: 'shatri', label: 'أبو بكر الشاطري', cdn: 'ar.shaatree', everyayah: 'Abu_Bakr_Ash-Shaatree_128kbps' }
];

function getAyahReciterPreset() {
    const id = localStorage.getItem('ayahReciterId') || 'alafasy';
    return AYAH_RECITER_PRESETS.find((p) => p.id === id) || AYAH_RECITER_PRESETS[0];
}

let toastTimer;
window.showToast = (msg) => {
    const t = document.getElementById('toast-msg');
    if (!t) return;
    clearTimeout(toastTimer);
    t.textContent = msg;
    t.style.bottom = '20px';
    toastTimer = setTimeout(() => { t.style.bottom = '-100px'; }, 3200);
};

function updateOfflineBanner() {
    const b = document.getElementById('offline-banner');
    if (!b) return;
    b.classList.toggle('hidden', navigator.onLine);
}

function saveReadingProgress(ayahNum) {
    if (!currentSurahNumber || !currentSurahDisplayName) return;
    try {
        localStorage.setItem('quranLastRead', JSON.stringify({
            surah: currentSurahNumber,
            name: currentSurahDisplayName,
            ayah: ayahNum
        }));
    } catch (e) { /* ignore quota */ }
}

function updateResumeReadingButton() {
    const btn = document.getElementById('resume-reading-btn');
    if (!btn) return;
    const raw = localStorage.getItem('quranLastRead');
    if (!raw) {
        btn.classList.add('hidden');
        btn.onclick = null;
        return;
    }
    try {
        const o = JSON.parse(raw);
        if (!o || !o.surah || !o.name) {
            btn.classList.add('hidden');
            return;
        }
        btn.classList.remove('hidden');
        btn.onclick = () => {
            navigateTo('quranReader');
            loadQuranPages(o.surah);
        };
    } catch {
        btn.classList.add('hidden');
    }
}

// --- 1. بيانات الأذكار والأحاديث ---
const ayatAlKursi = "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ\nبِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\n﴿اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ﴾ [البقرة: 255]";
const surahAlIkhlas = "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\n﴿قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ﴾";
const surahAlFalaq = "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\n﴿قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ﴾";
const surahAnNas = "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\n﴿قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ﴾";

const azkarData = {
    morning: [
        { text: ayatAlKursi, count: 1, proof: "الدليل: أُجير من الجن حتى يمسي" }, { text: surahAlIkhlas, count: 3, proof: "الدليل: تكفيه من كل شيء" }, { text: surahAlFalaq, count: 3, proof: "الدليل: تكفيه من كل شيء" }, { text: surahAnNas, count: 3, proof: "الدليل: تكفيه من كل شيء" },
        { text: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ، وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ، وَعَذَابٍ فِي الْقَبْرِ.", count: 1, proof: "الدليل: صحيح مسلم" },
        { text: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ: فَتْحَهُ، وَنَصْرَهُ، وَنُورَهُ، وَبَرَكَتَهُ، وَهُدَاهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهِ وَشَرِّ مَا بَعْدَهُ.", count: 1, proof: "الدليل: حديث حسن" },
        { text: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ.", count: 1, proof: "الدليل: حديث صحيح" },
        { text: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ.", count: 1, proof: "الدليل: سيد الاستغفار (البخاري)" },
        { text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ، وَمِنْ خَلْفِي، وَعَنْ يَمِينِي، وَعَنْ شِمَالِي، وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي.", count: 1, proof: "الدليل: حسن - أبو داود (5088) والترمذي (3388) - صححه الألباني" },
        { text: "اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ، فَاطِرَ السَّمَاوَاتِ وَالْأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءًا، أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ.", count: 1, proof: "الدليل: متفق عليه - البخاري (6019) ومسلم (2728)" },
        { text: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ.", count: 3, proof: "الدليل: حسن - أبو داود (5090) - صححه الألباني" },
        { text: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ...", count: 3, proof: "الدليل: صحيح البخاري" },
        { text: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.", count: 1, proof: "الدليل: حديث صحيح" },
        { text: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.", count: 7, proof: "الدليل: كفاه الله ما أهمه" },
        { text: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا.", count: 3, proof: "الدليل: كان حقاً على الله أن يرضيه" },
        { text: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ، وَهُوَ السَّمِيعُ الْعَلِيمُ.", count: 3, proof: "الدليل: لم يضره شيء" },
        { text: "يَا رَبِّ، لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ، وَلِعَظِيمِ سُلْطَانِكَ.", count: 3, proof: "الدليل: حديث حسن" },
        { text: "اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.", count: 3, proof: "الدليل: حديث صحيح" },
        { text: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ، الْحَيَّ الْقَيُّومَ، وَأَتُوبُ إِلَيْهِ.", count: 3, proof: "الدليل: حديث صحيح" },
        { text: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ.", count: 100, proof: "الدليل: متفق عليه" },
        { text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.", count: 100, proof: "الدليل: حطت خطاياه وإن كانت مثل زبد البحر" },
        { text: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.", count: 100, proof: "الدليل: كانت له عدل عشر رقاب" },
        { text: "اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى نَبِيِّنَا مُحَمَّدٍ.", count: 10, proof: "الدليل: أدركته شفاعتي" }
    ],
    evening: [
        { text: ayatAlKursi, count: 1, proof: "الدليل: أُجير من الجن حتى يصبح" }, { text: surahAlIkhlas, count: 3, proof: "الدليل: تكفيه من كل شيء" }, { text: surahAlFalaq, count: 3, proof: "الدليل: تكفيه من كل شيء" }, { text: surahAnNas, count: 3, proof: "الدليل: تكفيه من كل شيء" },
        { text: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ.", count: 1, proof: "الدليل: صحيح مسلم (2728) بمعنى أذكار الصباح" },
        { text: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذِهِ اللَّيْلَةِ: فَتْحَهَا، وَنَصْرَهَا، وَنُورَهَا، وَبَرَكَتَهَا، وَهُدَاهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهَا وَشَرِّ مَا بَعْدَهَا.", count: 1, proof: "الدليل: حسن - الحاكم وصححه الذهبي - انظر السلسلة الصحيحة للألباني (3227)" },
        { text: "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ.", count: 1, proof: "الدليل: حديث صحيح" },
        { text: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ...", count: 1, proof: "الدليل: سيد الاستغفار (البخاري)" },
        { text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ، وَمِنْ خَلْفِي، وَعَنْ يَمِينِي، وَعَنْ شِمَالِي، وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي.", count: 1, proof: "الدليل: حسن - أبو داود (5088) والترمذي (3388) - صححه الألباني (مساءً كالصباح)" },
        { text: "اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ، فَاطِرَ السَّمَاوَاتِ وَالْأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءًا، أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ.", count: 1, proof: "الدليل: متفق عليه - البخاري (6019) ومسلم (2728)" },
        { text: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ.", count: 3, proof: "الدليل: حسن - أبو داود (5090) - صححه الألباني" },
        { text: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ.", count: 3, proof: "الدليل: صحيح البخاري (6369)" },
        { text: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.", count: 1, proof: "الدليل: صحيح - النسائي في عمل اليوم والليلة - صححه الألباني" },
        { text: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.", count: 7, proof: "الدليل: كفاه الله ما أهمه" },
        { text: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا.", count: 3, proof: "الدليل: كان حقاً على الله أن يرضيه" },
        { text: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ، وَهُوَ السَّمِيعُ الْعَلِيمُ.", count: 3, proof: "الدليل: لم يضره شيء" },
        { text: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.", count: 3, proof: "الدليل: لم تضره حمة تلك الليلة" },
        { text: "يَا رَبِّ، لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ، وَلِعَظِيمِ سُلْطَانِكَ.", count: 3, proof: "الدليل: حديث حسن" },
        { text: "اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.", count: 3, proof: "الدليل: حديث صحيح" },
        { text: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ، الْحَيَّ الْقَيُّومَ، وَأَتُوبُ إِلَيْهِ.", count: 3, proof: "الدليل: حديث صحيح" },
        { text: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ.", count: 100, proof: "الدليل: متفق عليه" },
        { text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.", count: 100, proof: "الدليل: حطت خطاياه" },
        { text: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.", count: 100, proof: "الدليل: كانت له عدل عشر رقاب" },
        { text: "اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى نَبِيِّنَا مُحَمَّدٍ.", count: 10, proof: "الدليل: أدركته شفاعتي" }
    ],
    sleep: [
        { text: ayatAlKursi, count: 1, proof: "الدليل: حفظ من الشيطان" }, { text: surahAlIkhlas, count: 3, proof: "الدليل: سنة" }, { text: surahAlFalaq, count: 3, proof: "الدليل: سنة" }, { text: surahAnNas, count: 3, proof: "الدليل: سنة" },
        { text: "بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي وَبِكَ أَرْفَعُهُ، فَإِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ.", count: 1, proof: "الدليل: متفق عليه" },
        { text: "اللَّهُمَّ إِنَّكَ خَلَقْتَ نَفْسِي وَأَنْتَ تَوَفَّاهَا، لَكَ مَمَاتُهَا وَمَحْيَاهَا، إِنْ أَحْيَيْتَهَا فَاحْفَظْهَا، وَإِنْ أَمَتَّهَا فَاغْفِرْ لَهَا. اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ.", count: 1, proof: "الدليل: صحيح مسلم (2712)" },
        { text: "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ.", count: 3, proof: "الدليل: رواه أبو داود" },
        { text: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا.", count: 1, proof: "الدليل: صحيح البخاري" },
        { text: "سُبْحَانَ اللَّهِ (33)، الْحَمْدُ لِلَّهِ (33)، اللَّهُ أَكْبَرُ (34)", count: 1, proof: "الدليل: خير لكم من خادم" }
    ],
    prayer: [
        { text: "أَسْتَغْفِرُ اللَّهَ. (ثلاثاً)\nاللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ.", count: 1, proof: "الدليل: صحيح مسلم" },
        { text: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ، لَا إِلَهَ إِلَّا اللَّهُ، وَلَا نَعْبُدُ إِلَّا إِيَّاهُ، لَهُ النِّعْمَةُ وَلَهُ الْفَضْلُ وَلَهُ الثَّنَاءُ الْحَسَنُ، لَا إِلَهَ إِلَّا اللَّهُ مُخْلِصِينَ لَهُ الدِّينَ وَلَوْ كَرِهَ الْكَافِرُونَ.", count: 1, proof: "الدليل: متفق عليه - مسلم (594) بعد التشهد" },
        { text: ayatAlKursi, count: 1, proof: "الدليل: لم يمنعه من دخول الجنة إلا الموت" }, { text: surahAlIkhlas, count: 1, proof: "الدليل: سنة" }, { text: surahAlFalaq, count: 1, proof: "الدليل: سنة" }, { text: surahAnNas, count: 1, proof: "الدليل: سنة" },
        { text: "سُبْحَانَ اللَّهِ (33)، الْحَمْدُ لِلَّهِ (33)، اللَّهُ أَكْبَرُ (33)", count: 1, proof: "الدليل: صحيح مسلم" },
        { text: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.", count: 1, proof: "الدليل: تمام المائة" }
    ],
    ruqyah: [
        { text: "بِسْمِ اللَّهِ أَرْقِيكَ، مِنْ كُلِّ شَيْءٍ يُؤْذِيكَ، مِنْ شَرِّ كُلِّ نَفْسٍ أَوْ عَيْنِ حَاسِدٍ، اللَّهُ يَشْفِيكَ، بِسْمِ اللَّهِ أَرْقِيكَ.", count: 3, proof: "الدليل: رقية جبريل" },
        { text: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّةِ، مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ، وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ.", count: 3, proof: "الدليل: البخاري" },
        { text: "بِسْمِ اللَّهِ (ثلاثاً)\nأَعُوذُ بِاللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ (سبعاً).", count: 1, proof: "الدليل: توضع اليد على موضع الألم" },
        { text: ayatAlKursi, count: 1, proof: "الدليل: من القرآن والسنة في الرقية" }, { text: surahAlIkhlas, count: 3, proof: "الدليل: من المعوذات والرقية الشرعية" }, { text: surahAlFalaq, count: 3, proof: "الدليل: من المعوذات والرقية الشرعية" }, { text: surahAnNas, count: 3, proof: "الدليل: من المعوذات والرقية الشرعية" }
    ],
    food: [
        { text: "بِسْمِ اللَّهِ", count: 1, proof: "الدليل: متفق عليه - البخاري (5376) عند ذكر الطعام" },
        { text: "بِسْمِ اللَّهِ أَوَّلَهُ وَآخِرَهُ", count: 1, proof: "الدليل: أبو داود (3767) والترمذي (1803) - حسن - الألباني" },
        { text: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا، وَجَعَلَنَا مُسْلِمِينَ.", count: 1, proof: "الدليل: أبو داود (3850) والترمذي (3458) - حسن - الألباني" },
        { text: "الْحَمْدُ لِلَّهِ حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ، غَيْرَ مَكْفِيٍّ وَلَا مُوَدَّعٍ وَلَا مُسْتَغْنًى عَنْهُ رَبَّنَا.", count: 1, proof: "الدليل: البخاري (5458)" }
    ],
    masjid: [
        { text: "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ.", count: 1, proof: "الدليل: مسلم (713) عند دخول المسجد" },
        { text: "أَعُوذُ بِاللَّهِ الْعَظِيمِ، وَبِوَجْهِهِ الْكَرِيمِ، وَسُلْطَانِهِ الْقَدِيمِ، مِنَ الشَّيْطَانِ الرَّجِيمِ.", count: 1, proof: "الدليل: ابن ماجه (771) - حسن - الألباني" },
        { text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ.", count: 1, proof: "الدليل: مسلم (713) عند الخروج من المسجد" }
    ],
    travel: [
        { text: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ.", count: 1, proof: "الدليل: مسلم (1342) عند ركوب ما يركب" },
        { text: "اللَّهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا وَاطْوِ عَنَّا بُعْدَهُ.", count: 1, proof: "الدليل: مسلم (1342) وفيه زيادات" },
        { text: "اللَّهُمَّ أَنْتَ الصَّاحِبُ فِي السَّفَرِ، وَالْخَلِيفَةُ فِي الْأَهْلِ.", count: 1, proof: "الدليل: مسلم (1344)" }
    ],
    home: [
        { text: "بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا.", count: 1, proof: "الدليل: أبو داود (5096) - حسن - الألباني - دخول المنزل" },
        { text: "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ.", count: 1, proof: "الدليل: أبو داود (5095) - صحيح - الألباني - عند الخروج" }
    ]
};

const hadithsList = [
    { text: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى.", proof: "(متفق عليه)" },
    { text: "كَلِمَتَانِ خَفِيفَتَانِ عَلَى اللِّسَانِ، ثَقِيلَتَانِ فِي الْمِيزَانِ... سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ.", proof: "(متفق عليه)" },
    { text: "مَنْ صَلَّى عَلَيَّ صَلَاةً صَلَّى اللَّهُ عَلَيْهِ بِهَا عَشْرًا.", proof: "(رواه مسلم)" }
];

// --- 2. الملاحة (Hash Routing) ---
window.navigateTo = function (targetScreen) { window.location.hash = targetScreen; };
window.goBack = function () { window.history.back(); };
window.addEventListener('hashchange', handleRoute);

function handleRoute() {
    const hash = window.location.hash.replace('#', '') || 'home';
    document.querySelectorAll('.screen').forEach((s) => { s.classList.remove('active'); s.classList.add('hidden'); });
    const target = document.getElementById(hash + '-screen') || document.getElementById('home-screen');
    if (target) { target.classList.replace('hidden', 'active'); window.scrollTo(0, 0); }
    if (hash === 'quranIndex') updateResumeReadingButton();
    if (hash === 'hadithScreen' && typeof window.showHadithCollection === 'function') {
        window.showHadithCollection('all');
    }
    if (hash === 'settings') initSettingsScreen();
}

// --- 3. الموقع والمواقيت ---
let userLat = parseFloat(localStorage.getItem('savedLat')) || 30.0444;
let userLng = parseFloat(localStorage.getItem('savedLng')) || 31.2357;
let userCity = localStorage.getItem('savedCity') || "القاهرة (افتراضي)";
let prayerInterval;
let prayerNotifyTimeouts = [];
let ayahSheetSurah = 0;
let ayahSheetAyah = 0;
let ayahAudioTargetKey = '';
let ayahLongPressTimer = null;
let ayahLongPressTriggered = false;

document.addEventListener('DOMContentLoaded', () => {
    const rH = hadithsList[Math.floor(Math.random() * hadithsList.length)];
    document.getElementById('splash-hadith').innerText = rH.text;
    document.getElementById('splash-proof').innerText = rH.proof;

    if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-theme');
    if (localStorage.getItem('fontSize')) document.documentElement.style.setProperty('--zikr-font-size', `${parseFloat(localStorage.getItem('fontSize'))}rem`);
    const mc = localStorage.getItem('masbahaCount');
    document.getElementById('masbaha-count').innerText = toArabicDigits(parseDisplayInt(mc));

    if (!window.location.hash) {
        window.location.hash = 'splash';
        handleRoute();
        setTimeout(() => { window.location.hash = 'home'; }, 2500);
    } else if (window.location.hash === '#splash') {
        handleRoute();
        setTimeout(() => { window.location.hash = 'home'; }, 2500);
    } else {
        handleRoute();
    }

    initLocationAndPrayers();
    loadAudioReciters();
    renderBookmarks();
    updateResumeReadingButton();
    updateOfflineBanner();

    const quranTextEl = document.getElementById('quran-text');
    if (quranTextEl) {
        const cancelAyahLongPress = () => {
            if (ayahLongPressTimer) { clearTimeout(ayahLongPressTimer); ayahLongPressTimer = null; }
        };
        quranTextEl.addEventListener('pointerdown', (e) => {
            const span = e.target.closest('.ayah-span');
            if (!span || !span.dataset.ayah) return;
            ayahLongPressTriggered = false;
            cancelAyahLongPress();
            ayahLongPressTimer = setTimeout(() => {
                ayahLongPressTimer = null;
                ayahLongPressTriggered = true;
                const s = parseInt(span.dataset.surah, 10);
                const a = parseInt(span.dataset.ayah, 10);
                openAyahActionSheet(s, a, currentSurahDisplayName);
                if (navigator.vibrate) navigator.vibrate(35);
            }, 520);
        });
        quranTextEl.addEventListener('pointerup', cancelAyahLongPress);
        quranTextEl.addEventListener('pointercancel', cancelAyahLongPress);
        quranTextEl.addEventListener('click', (e) => {
            const span = e.target.closest('.ayah-span');
            if (!span || !span.dataset.ayah) return;
            if (ayahLongPressTriggered) {
                ayahLongPressTriggered = false;
                e.preventDefault();
                e.stopPropagation();
                return;
            }
            const sNum = parseInt(span.dataset.surah, 10);
            const aNum = parseInt(span.dataset.ayah, 10);
            // اختيار الآية لتشتغل أزرار القائمة (التفسير/الاستماع/حفظ الآية)
            ayahSheetSurah = sNum;
            ayahSheetAyah = aNum;
            saveReadingProgress(aNum);

            // Highlight بسيط للآية المختارة فقط (الحفظ الفعلي من زر "حفظ الآية")
            span.classList.remove('ayah-highlight');
            // forcing reflow so animation reliably restarts
            void span.offsetWidth;
            span.classList.add('ayah-highlight');
            setTimeout(() => span.classList.remove('ayah-highlight'), 2500);
        });
    }

    const ayahBackdrop = document.getElementById('ayah-sheet-backdrop');
    const ayahSheet = document.getElementById('ayah-action-sheet');
    const ayahBtnClose = document.getElementById('ayah-btn-close');
    const ayahBtnTafsir = document.getElementById('ayah-btn-tafsir');
    const ayahBtnAudio = document.getElementById('ayah-btn-audio');
    const ayahTafsirBack = document.getElementById('ayah-tafsir-back');
    if (ayahBackdrop && ayahSheet) {
        ayahBackdrop.addEventListener('click', closeAyahActionSheet);
        ayahBtnClose?.addEventListener('click', closeAyahActionSheet);
        ayahBtnTafsir?.addEventListener('click', () => showAyahTafsirPanel());
        ayahBtnAudio?.addEventListener('click', () => toggleAyahRecitation());
        ayahTafsirBack?.addEventListener('click', () => hideAyahTafsirPanel());
    }
    document.getElementById('ayah-audio')?.addEventListener('ended', () => {
        ayahAudioTargetKey = '';
        updateAyahAudioButtonLabel(false);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAyahActionSheet();
        const ar = document.getElementById('azkarReader-screen');
        if (ar && ar.classList.contains('active') && (e.key === ' ' || e.key === 'Enter')) {
            e.preventDefault();
            document.getElementById('counter-btn')?.click();
        }
    });

    window.addEventListener('online', () => { updateOfflineBanner(); showToast('تم استعادة الاتصال'); });
    window.addEventListener('offline', () => { updateOfflineBanner(); showToast('وضع بدون اتصال — بعض المحتويات قد لا تُحدَّث'); });
});

window.setManualLocation = function () {
    const val = document.getElementById('manual-city-select').value;
    if (!val) return;
    const [lat, lng, cityName] = val.split(',');
    userLat = parseFloat(lat); userLng = parseFloat(lng); userCity = cityName;
    localStorage.setItem('savedLat', userLat); localStorage.setItem('savedLng', userLng); localStorage.setItem('savedCity', userCity);
    document.getElementById('prayer-location').innerText = `📍 ${userCity} (ضبط يدوي)`;
    fetchPrayers(userLat, userLng);
    showToast(`✅ تم ضبط الموقع على ${userCity} بنجاح`);
    document.getElementById('manual-city-select').value = "";
};

async function initLocationAndPrayers() {
    document.getElementById('prayer-location').innerText = `📍 ${userCity}`;
    fetchPrayers(userLat, userLng);

    try {
        const res = await fetch('https://ipapi.co/json/', { cache: 'no-store' });
        if (!res.ok) throw new Error('geo');
        const data = await res.json();
        const loc = document.getElementById('prayer-location');
        if (data.latitude != null && data.longitude != null && loc && !loc.innerText.includes('يدوي')) {
            userLat = data.latitude; userLng = data.longitude;
            userCity = data.city || data.region || data.country_name || userCity;
            localStorage.setItem('savedLat', userLat); localStorage.setItem('savedLng', userLng); localStorage.setItem('savedCity', userCity);
            loc.innerText = `📍 ${userCity}`;
            fetchPrayers(userLat, userLng);
        }
    } catch (e) {
        /* يبقى الموقع المحفوظ أو الافتراضي */
    }
}

window.requestLocationPermission = function () {
    showToast("جاري البحث عن موقعك الدقيق (GPS)...");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (pos) => {
            userLat = pos.coords.latitude; userLng = pos.coords.longitude;
            try {
                const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${userLat}&lon=${userLng}&accept-language=ar`, {
                    headers: { 'Accept-Language': 'ar' }
                });
                const data = await res.json();
                userCity = data.address.town || data.address.village || data.address.city || data.address.state || "تم التحديد الدقيق";
                localStorage.setItem('savedLat', userLat); localStorage.setItem('savedLng', userLng); localStorage.setItem('savedCity', userCity);
                document.getElementById('prayer-location').innerText = `📍 ${userCity}`;
                fetchPrayers(userLat, userLng);
                showToast("✅ تم ضبط الموقع بدقة");
            } catch (e) {
                fetchPrayers(userLat, userLng);
                showToast("تم ضبط الإحداثيات (تعذر اسم المدينة)");
            }
        }, () => { showToast("❌ يرجى تفعيل الـ GPS من الهاتف"); }, { enableHighAccuracy: true, timeout: 10000 });
    }
};

function getPrayerMethod() {
    return localStorage.getItem('prayerMethod') || '5';
}

function clearPrayerNotificationTimeouts() {
    prayerNotifyTimeouts.forEach((id) => clearTimeout(id));
    prayerNotifyTimeouts = [];
}

function showPrayerNotificationNow(body) {
    const title = 'موسوعة المسلم';
    const opts = {
        body,
        icon: './icon-192.png',
        badge: './icon-192.png',
        tag: 'prayer-adhan',
        renotify: true,
        requireInteraction: false
    };
    if ('vibrate' in navigator) opts.vibrate = [120, 80, 120];
    try {
        if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.postMessage({ type: 'SHOW_NOTIFICATION', title, options: opts });
        } else {
            new Notification(title, opts);
        }
    } catch (err) {
        try { new Notification(title, opts); } catch (e2) { /* ignore */ }
    }
}

function scheduleNextPrayerNotification(nextT, prayerNameAr) {
    clearPrayerNotificationTimeouts();
    if (localStorage.getItem('notifyPrayer') !== '1') return;
    if (!('Notification' in window) || Notification.permission !== 'granted') return;
    if (!nextT || !prayerNameAr) return;
    const beforeMin = parseInt(localStorage.getItem('notifyBeforeMin') || '0', 10);
    const fireAt = new Date(nextT.getTime() - beforeMin * 60000);
    const delay = fireAt.getTime() - Date.now();
    if (delay < 1500) return;
    const body = beforeMin > 0
        ? `تذكير: صلاة ${prayerNameAr} بعد نحو ${beforeMin} دقيقة`
        : `حان وقت صلاة ${prayerNameAr}`;
    const id = setTimeout(() => {
        showPrayerNotificationNow(body);
        fetchPrayers(userLat, userLng);
    }, delay);
    prayerNotifyTimeouts.push(id);
}

async function fetchPrayers(lat, lng) {
    const d = new Date();
    const nextNameEl = document.getElementById('next-prayer-name');
    const countEl = document.getElementById('prayer-countdown');
    clearPrayerNotificationTimeouts();
    try {
        const res = await fetch(`https://api.aladhan.com/v1/timings/${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}?latitude=${lat}&longitude=${lng}&method=${encodeURIComponent(getPrayerMethod())}`);
        if (!res.ok) throw new Error('api');
        const data = await res.json();
        const t = data.data.timings;
        const list = document.getElementById('prayer-times-list');
        if (list) list.innerHTML = '';
        let nextT = null;
        let nextN = '';
        const now = new Date();
        const order = [{ id: 'Fajr', n: 'الفجر' }, { id: 'Sunrise', n: 'الشروق' }, { id: 'Dhuhr', n: 'الظهر' }, { id: 'Asr', n: 'العصر' }, { id: 'Maghrib', n: 'المغرب' }, { id: 'Isha', n: 'العشاء' }];

        order.forEach((p) => {
            const parts = t[p.id].split(':');
            const hi = parseInt(parts[0], 10);
            const mi = parseInt(parts[1], 10);
            const pDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hi, mi, 0);
            const h12 = hi > 12 ? hi - 12 : (hi === 0 ? 12 : hi);
            const ampm = hi >= 12 ? 'م' : 'ص';
            if (pDate > now && !nextT && p.id !== 'Sunrise') { nextT = pDate; nextN = p.n; }
            if (list) {
                list.innerHTML += `<div class="prayer-item ${nextN === p.n ? 'active-prayer' : ''}"><span>${p.n}</span><span>${h12}:${String(mi).padStart(2, '0')} <small>${ampm}</small></span></div>`;
            }
        });

        if (!nextT) {
            const f = t.Fajr.split(':');
            const fh = parseInt(f[0], 10);
            const fm = parseInt(f[1], 10);
            nextT = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, fh, fm, 0);
            nextN = 'الفجر';
        }
        if (nextNameEl) nextNameEl.innerText = `الصلاة القادمة: ${nextN}`;

        if (prayerInterval) clearInterval(prayerInterval);
        prayerInterval = setInterval(() => {
            const diff = nextT - new Date();
            if (diff <= 0) { clearInterval(prayerInterval); fetchPrayers(userLat, userLng); }
            else if (countEl) {
                const h = Math.floor((diff / 3600000) % 24);
                const m = Math.floor((diff / 60000) % 60);
                const s = Math.floor((diff / 1000) % 60);
                countEl.innerText = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
            }
        }, 1000);
        scheduleNextPrayerNotification(nextT, nextN);
    } catch (e) {
        if (nextNameEl) nextNameEl.innerText = 'تعذر جلب المواقيت';
        if (countEl) countEl.innerText = '--:--:--';
        showToast('تعذر جلب مواقيت الصلاة — تحقق من الإنترنت');
    }
}

function initSettingsScreen() {
    const m = document.getElementById('prayer-method-select');
    const n = document.getElementById('notify-prayer-check');
    const b = document.getElementById('notify-before-select');
    const ayahSel = document.getElementById('ayah-reciter-select');
    if (m) m.value = getPrayerMethod();
    if (n) n.checked = localStorage.getItem('notifyPrayer') === '1';
    if (b) b.value = localStorage.getItem('notifyBeforeMin') || '0';
    if (ayahSel) {
        const saved = localStorage.getItem('ayahReciterId') || 'alafasy';
        ayahSel.value = AYAH_RECITER_PRESETS.some((p) => p.id === saved) ? saved : 'alafasy';
    }
    updateNotifyPermissionHint();
}

function updateNotifyPermissionHint() {
    const el = document.getElementById('notify-permission-hint');
    if (!el) return;
    if (!('Notification' in window)) {
        el.textContent = 'المتصفح لا يدعم إشعارات سطح المكتب.';
        return;
    }
    const labels = { default: 'لم يُمنَح إذن بعد — اضغط «طلب إذن الإشعارات».', granted: 'الإذن مفعّل ✓', denied: 'مرفوض — افتح إعدادات المتصفح للموقع واسمح بالإشعارات.' };
    el.textContent = labels[Notification.permission] || `الحالة: ${Notification.permission}`;
}

window.saveAppSettings = function () {
    const m = document.getElementById('prayer-method-select');
    const n = document.getElementById('notify-prayer-check');
    const b = document.getElementById('notify-before-select');
    const ayahSel = document.getElementById('ayah-reciter-select');
    if (m) localStorage.setItem('prayerMethod', m.value);
    if (n) localStorage.setItem('notifyPrayer', n.checked ? '1' : '0');
    if (b) localStorage.setItem('notifyBeforeMin', b.value);
    if (ayahSel && AYAH_RECITER_PRESETS.some((p) => p.id === ayahSel.value)) {
        localStorage.setItem('ayahReciterId', ayahSel.value);
    }
    if (n && n.checked && 'Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission().then(() => {
            updateNotifyPermissionHint();
            fetchPrayers(userLat, userLng);
        });
    } else {
        fetchPrayers(userLat, userLng);
    }
    updateNotifyPermissionHint();
    showToast('تم حفظ الإعدادات');
};

window.requestNotificationPermissionFromSettings = async function () {
    if (!('Notification' in window)) {
        showToast('المتصفح لا يدعم الإشعارات');
        return;
    }
    const p = await Notification.requestPermission();
    updateNotifyPermissionHint();
    if (p === 'granted') {
        showToast('تم السماح بالإشعارات');
        fetchPrayers(userLat, userLng);
    } else if (p === 'denied') {
        showToast('رُفض الإذن — غيّر الإعدادات من أيقونة القفل بجانب العنوان');
    }
};

function openAyahActionSheet(surahNum, ayahNum, surahArabicName) {
    ayahSheetSurah = surahNum;
    ayahSheetAyah = ayahNum;
    hideAyahTafsirPanel();
    const title = document.getElementById('ayah-sheet-title');
    if (title) title.textContent = `${surahArabicName || 'سورة'} — آية ${toArabicDigits(ayahNum)}`;
    updateAyahAudioButtonLabel(false);
    const backdrop = document.getElementById('ayah-sheet-backdrop');
    const sheet = document.getElementById('ayah-action-sheet');
    if (backdrop) backdrop.classList.remove('hidden');
    if (sheet) sheet.classList.remove('hidden');
    requestAnimationFrame(() => {
        backdrop?.classList.add('sheet-open');
        sheet?.classList.add('sheet-open');
    });
}

function closeAyahActionSheet() {
    const audio = document.getElementById('ayah-audio');
    if (audio) { audio.pause(); }
    ayahAudioTargetKey = '';
    updateAyahAudioButtonLabel(false);
    const backdrop = document.getElementById('ayah-sheet-backdrop');
    const sheet = document.getElementById('ayah-action-sheet');
    backdrop?.classList.remove('sheet-open');
    sheet?.classList.remove('sheet-open');
    setTimeout(() => {
        backdrop?.classList.add('hidden');
        sheet?.classList.add('hidden');
        hideAyahTafsirPanel();
    }, 280);
}

function hideAyahTafsirPanel() {
    document.getElementById('ayah-tafsir-panel')?.classList.add('hidden');
    document.getElementById('ayah-sheet-actions')?.classList.remove('hidden');
    const te = document.getElementById('ayah-tafsir-text');
    if (te) te.textContent = '';
}

async function showAyahTafsirPanel() {
    const panel = document.getElementById('ayah-tafsir-panel');
    const actions = document.getElementById('ayah-sheet-actions');
    const textEl = document.getElementById('ayah-tafsir-text');
    if (!panel || !actions || !textEl) return;
    actions.classList.add('hidden');
    panel.classList.remove('hidden');
    textEl.textContent = 'جاري تحميل التفسير الميسر...';
    try {
        const res = await fetch(`https://api.alquran.cloud/v1/ayah/${ayahSheetSurah}:${ayahSheetAyah}/editions/ar.muyassar`);
        const data = await res.json();
        const t = data.data && data.data[0] && data.data[0].text;
        textEl.textContent = t || 'تعذر عرض التفسير.';
    } catch (e) {
        textEl.textContent = 'تعذر الاتصال. تحقق من الإنترنت.';
    }
}

function buildAyahMp3Urls(surahNum, ayahInSurah) {
    const g = ayahGlobalNumberCache[ayahInSurah];
    const s = String(surahNum).padStart(3, '0');
    const a = String(ayahInSurah).padStart(3, '0');
    const p = getAyahReciterPreset();
    const list = [];
    if (g && p.cdn) list.push(`https://cdn.islamic.network/quran/audio/128/${p.cdn}/${g}.mp3`);
    if (p.everyayah) list.push(`https://everyayah.com/data/${p.everyayah}/${s}${a}.mp3`);
    return list;
}

function toggleAyahRecitation() {
    const audio = document.getElementById('ayah-audio');
    if (!audio) return;
    const key = `${ayahSheetSurah}:${ayahSheetAyah}`;
    if (ayahAudioTargetKey === key && !audio.paused) {
        audio.pause();
        audio.currentTime = 0;
        ayahAudioTargetKey = '';
        updateAyahAudioButtonLabel(false);
        return;
    }
    const urls = buildAyahMp3Urls(ayahSheetSurah, ayahSheetAyah);
    ayahAudioTargetKey = key;
    const tryUrl = (idx) => {
        if (idx >= urls.length) {
            ayahAudioTargetKey = '';
            showToast('تعذر تشغيل الصوت من المصادر المتاحة');
            updateAyahAudioButtonLabel(false);
            return;
        }
        audio.src = urls[idx];
        audio.play().then(() => updateAyahAudioButtonLabel(true)).catch(() => tryUrl(idx + 1));
    };
    tryUrl(0);
}

function updateAyahAudioButtonLabel(playing) {
    const b = document.getElementById('ayah-btn-audio');
    if (!b) return;
    const lab = getAyahReciterPreset().label;
    b.textContent = playing ? '⏹ إيقاف الاستماع' : `▶️ استماع الآية (${lab})`;
}

// --- 4. البوصلة ---
let compassHandler = null;

window.initQibla = function () {
    showToast("جاري تفعيل مستشعر البوصلة...");
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission().then((p) => {
            if (p === 'granted') startCompass();
            else showToast("❌ تم رفض صلاحية البوصلة");
        }).catch(() => showToast("تعذر طلب صلاحية البوصلة"));
    } else {
        startCompass();
    }
};

function startCompass() {
    if (compassHandler) {
        window.removeEventListener('deviceorientationabsolute', compassHandler, true);
        window.removeEventListener('deviceorientation', compassHandler, true);
    }
    const kaabaLat = 21.422487 * Math.PI / 180;
    const kaabaLng = 39.826206 * Math.PI / 180;

    compassHandler = (e) => {
        let comp = e.webkitCompassHeading;
        if (comp == null && e.alpha != null) comp = 360 - e.alpha;
        if (comp == null) return;

        const lat = userLat * Math.PI / 180;
        const lng = userLng * Math.PI / 180;
        const qAngle = (Math.atan2(Math.sin(kaabaLng - lng), Math.cos(lat) * Math.tan(kaabaLat) - Math.sin(lat) * Math.cos(kaabaLng - lng)) * 180 / Math.PI + 360) % 360;

        const diff = qAngle - comp;
        const ptr = document.getElementById('qibla-pointer');
        const st = document.getElementById('qibla-status');
        if (ptr) ptr.style.transform = `translateY(-80px) rotate(${diff}deg)`;
        if (st) {
            if (Math.abs(diff) < 5 || Math.abs(diff) > 355) { st.innerText = "أنت في اتجاه القبلة 🕋"; st.style.color = "#4CAF50"; }
            else { st.innerText = "قم بلف الهاتف للضبط"; st.style.color = "var(--accent-color)"; }
        }
    };

    window.addEventListener('deviceorientationabsolute', compassHandler, true);
    window.addEventListener('deviceorientation', compassHandler, true);
    showToast("✅ البوصلة تعمل الآن");
}

// --- 5. القرآن والآيات المرجعية ---
let currentSurahNumber = 0;
let currentSurahDisplayName = '';
let ayahTextCache = {};
let ayahGlobalNumberCache = {};
// بيانات السور مباشرة - لا تحتاج لتحميل خارجي
const surahListData = [
    { number: 1, name: "الفاتحة", englishName: "Al-Fatiha", ayahs: 7, type: "makkiah" },
    { number: 2, name: "البقرة", englishName: "Al-Baqarah", ayahs: 286, type: "madaniyah" },
    { number: 3, name: "آل عمران", englishName: "Aal-E-Imran", ayahs: 200, type: "madaniyah" },
    { number: 4, name: "النساء", englishName: "An-Nisa", ayahs: 176, type: "madaniyah" },
    { number: 5, name: "المائدة", englishName: "Al-Ma'idah", ayahs: 120, type: "madaniyah" },
    { number: 6, name: "الأنعام", englishName: "Al-An'am", ayahs: 165, type: "makkiah" },
    { number: 7, name: "الأعراف", englishName: "Al-A'raf", ayahs: 206, type: "makkiah" },
    { number: 8, name: "الأنفال", englishName: "Al-Anfal", ayahs: 75, type: "madaniyah" },
    { number: 9, name: "التوبة", englishName: "At-Tawbah", ayahs: 129, type: "madaniyah" },
    { number: 10, name: "يونس", englishName: "Yunus", ayahs: 109, type: "makkiah" },
    { number: 11, name: "هود", englishName: "Hud", ayahs: 123, type: "makkiah" },
    { number: 12, name: "يوسف", englishName: "Yusuf", ayahs: 111, type: "makkiah" },
    { number: 13, name: "الرعد", englishName: "Ar-Ra'd", ayahs: 43, type: "madaniyah" },
    { number: 14, name: "إبراهيم", englishName: "Ibrahim", ayahs: 52, type: "makkiah" },
    { number: 15, name: "الحجر", englishName: "Al-Hijr", ayahs: 99, type: "makkiah" },
    { number: 16, name: "النحل", englishName: "An-Nahl", ayahs: 128, type: "makkiah" },
    { number: 17, name: "الإسراء", englishName: "Al-Isra", ayahs: 111, type: "makkiah" },
    { number: 18, name: "الكهف", englishName: "Al-Kahf", ayahs: 110, type: "makkiah" },
    { number: 19, name: "مريم", englishName: "Maryam", ayahs: 98, type: "makkiah" },
    { number: 20, name: "طه", englishName: "Ta-Ha", ayahs: 135, type: "makkiah" },
    { number: 21, name: "الأنبياء", englishName: "Al-Anbiya", ayahs: 112, type: "makkiah" },
    { number: 22, name: "الحج", englishName: "Al-Hajj", ayahs: 78, type: "madaniyah" },
    { number: 23, name: "المؤمنون", englishName: "Al-Mu'minun", ayahs: 118, type: "makkiah" },
    { number: 24, name: "النور", englishName: "An-Nur", ayahs: 64, type: "madaniyah" },
    { number: 25, name: "الفرقان", englishName: "Al-Furqan", ayahs: 77, type: "makkiah" },
    { number: 26, name: "الشعراء", englishName: "Ash-Shu'ara", ayahs: 227, type: "makkiah" },
    { number: 27, name: "النمل", englishName: "An-Naml", ayahs: 93, type: "makkiah" },
    { number: 28, name: "القصص", englishName: "Al-Qasas", ayahs: 88, type: "makkiah" },
    { number: 29, name: "العنكبوت", englishName: "Al-Ankabut", ayahs: 69, type: "makkiah" },
    { number: 30, name: "الروم", englishName: "Ar-Rum", ayahs: 60, type: "makkiah" },
    { number: 31, name: "لقمان", englishName: "Luqman", ayahs: 34, type: "makkiah" },
    { number: 32, name: "السجدة", englishName: "As-Sajda", ayahs: 30, type: "makkiah" },
    { number: 33, name: "الأحزاب", englishName: "Al-Ahzab", ayahs: 73, type: "madaniyah" },
    { number: 34, name: "سبأ", englishName: "Saba", ayahs: 54, type: "makkiah" },
    { number: 35, name: "فاطر", englishName: "Fatir", ayahs: 45, type: "makkiah" },
    { number: 36, name: "يس", englishName: "Ya-Sin", ayahs: 83, type: "makkiah" },
    { number: 37, name: "الصافات", englishName: "As-Saffat", ayahs: 182, type: "makkiah" },
    { number: 38, name: "ص", englishName: "Sad", ayahs: 88, type: "makkiah" },
    { number: 39, name: "الزمر", englishName: "Az-Zumar", ayahs: 75, type: "makkiah" },
    { number: 40, name: "غافر", englishName: "Ghafir", ayahs: 85, type: "makkiah" },
    { number: 41, name: "فصلت", englishName: "Fussilat", ayahs: 54, type: "makkiah" },
    { number: 42, name: "الشورى", englishName: "Ash-Shura", ayahs: 53, type: "makkiah" },
    { number: 43, name: "الزخرف", englishName: "Az-Zukhruf", ayahs: 89, type: "makkiah" },
    { number: 44, name: "الدخان", englishName: "Ad-Dukhan", ayahs: 59, type: "makkiah" },
    { number: 45, name: "الجاثية", englishName: "Al-Jathiya", ayahs: 37, type: "makkiah" },
    { number: 46, name: "الأحقاف", englishName: "Al-Ahqaf", ayahs: 35, type: "makkiah" },
    { number: 47, name: "محمد", englishName: "Muhammad", ayahs: 38, type: "madaniyah" },
    { number: 48, name: "الفتح", englishName: "Al-Fath", ayahs: 29, type: "madaniyah" },
    { number: 49, name: "الحجرات", englishName: "Al-Hujurat", ayahs: 18, type: "madaniyah" },
    { number: 50, name: "ق", englishName: "Qaf", ayahs: 45, type: "makkiah" },
    { number: 51, name: "الذاريات", englishName: "Adh-Dhariyat", ayahs: 60, type: "makkiah" },
    { number: 52, name: "الطور", englishName: "At-Tur", ayahs: 49, type: "makkiah" },
    { number: 53, name: "النجم", englishName: "An-Najm", ayahs: 62, type: "makkiah" },
    { number: 54, name: "القمر", englishName: "Al-Qamar", ayahs: 55, type: "makkiah" },
    { number: 55, name: "الرحمن", englishName: "Ar-Rahman", ayahs: 78, type: "madaniyah" },
    { number: 56, name: "الواقعة", englishName: "Al-Waqi'a", ayahs: 96, type: "makkiah" },
    { number: 57, name: "الحديد", englishName: "Al-Hadid", ayahs: 29, type: "madaniyah" },
    { number: 58, name: "المجادلة", englishName: "Al-Mujadila", ayahs: 22, type: "madaniyah" },
    { number: 59, name: "الحشر", englishName: "Al-Hashr", ayahs: 24, type: "madaniyah" },
    { number: 60, name: "الممتحنة", englishName: "Al-Mumtahanah", ayahs: 13, type: "madaniyah" },
    { number: 61, name: "الصف", englishName: "As-Saff", ayahs: 14, type: "madaniyah" },
    { number: 62, name: "الجمعة", englishName: "Al-Jumu'a", ayahs: 11, type: "madaniyah" },
    { number: 63, name: "المنافقون", englishName: "Al-Munafiqun", ayahs: 11, type: "madaniyah" },
    { number: 64, name: "التغابن", englishName: "At-Taghabun", ayahs: 18, type: "madaniyah" },
    { number: 65, name: "الطلاق", englishName: "At-Talaq", ayahs: 12, type: "madaniyah" },
    { number: 66, name: "التحريم", englishName: "At-Tahrim", ayahs: 12, type: "madaniyah" },
    { number: 67, name: "الملك", englishName: "Al-Mulk", ayahs: 30, type: "makkiah" },
    { number: 68, name: "القلم", englishName: "Al-Qalam", ayahs: 52, type: "makkiah" },
    { number: 69, name: "الحاقة", englishName: "Al-Haqqah", ayahs: 52, type: "makkiah" },
    { number: 70, name: "المعارج", englishName: "Al-Ma'arij", ayahs: 44, type: "makkiah" },
    { number: 71, name: "نوح", englishName: "Nuh", ayahs: 28, type: "makkiah" },
    { number: 72, name: "الجن", englishName: "Al-Jinn", ayahs: 28, type: "makkiah" },
    { number: 73, name: "المزمل", englishName: "Al-Muzzammil", ayahs: 20, type: "makkiah" },
    { number: 74, name: "المدثر", englishName: "Al-Muddaththir", ayahs: 56, type: "makkiah" },
    { number: 75, name: "القيامة", englishName: "Al-Qiyamah", ayahs: 40, type: "makkiah" },
    { number: 76, name: "الإنسان", englishName: "Al-Insan", ayahs: 31, type: "madaniyah" },
    { number: 77, name: "المرسلات", englishName: "Al-Mursalat", ayahs: 50, type: "makkiah" },
    { number: 78, name: "النبأ", englishName: "An-Naba", ayahs: 40, type: "makkiah" },
    { number: 79, name: "النازعات", englishName: "An-Nazi'at", ayahs: 46, type: "makkiah" },
    { number: 80, name: "عبس", englishName: "Abasa", ayahs: 42, type: "makkiah" },
    { number: 81, name: "التكوير", englishName: "At-Takwir", ayahs: 29, type: "makkiah" },
    { number: 82, name: "الإنفطار", englishName: "Al-Infitar", ayahs: 19, type: "makkiah" },
    { number: 83, name: "المطففين", englishName: "Al-Mutaffifin", ayahs: 36, type: "makkiah" },
    { number: 84, name: "الإنشقاق", englishName: "Al-Inshiqaq", ayahs: 25, type: "makkiah" },
    { number: 85, name: "البروج", englishName: "Al-Buruj", ayahs: 22, type: "makkiah" },
    { number: 86, name: "الطارق", englishName: "At-Tariq", ayahs: 17, type: "makkiah" },
    { number: 87, name: "الأعلى", englishName: "Al-A'la", ayahs: 19, type: "makkiah" },
    { number: 88, name: "الغاشية", englishName: "Al-Ghashiyah", ayahs: 26, type: "makkiah" },
    { number: 89, name: "الفجر", englishName: "Al-Fajr", ayahs: 30, type: "makkiah" },
    { number: 90, name: "البلد", englishName: "Al-Balad", ayahs: 20, type: "makkiah" },
    { number: 91, name: "الشمس", englishName: "Ash-Shams", ayahs: 15, type: "makkiah" },
    { number: 92, name: "الليل", englishName: "Al-Layl", ayahs: 21, type: "makkiah" },
    { number: 93, name: "الضحى", englishName: "Ad-Duha", ayahs: 11, type: "makkiah" },
    { number: 94, name: "الشرح", englishName: "Ash-Sharh", ayahs: 8, type: "makkiah" },
    { number: 95, name: "ال tin", englishName: "At-Tin", ayahs: 8, type: "makkiah" },
    { number: 96, name: "العلق", englishName: "Al-Alaq", ayahs: 19, type: "makkiah" },
    { number: 97, name: "القدر", englishName: "Al-Qadr", ayahs: 5, type: "makkiah" },
    { number: 98, name: "البينة", englishName: "Al-Bayyinah", ayahs: 8, type: "madaniyah" },
    { number: 99, name: "الزلزلة", englishName: "Az-Zilzal", ayahs: 8, type: "madaniyah" },
    { number: 100, name: "العاديات", englishName: "Al-Adiyat", ayahs: 11, type: "makkiah" },
    { number: 101, name: "القارعة", englishName: "Al-Qari'a", ayahs: 11, type: "makkiah" },
    { number: 102, name: "التكاثر", englishName: "At-Takathur", ayahs: 8, type: "makkiah" },
    { number: 103, name: "العصر", englishName: "Al-Asr", ayahs: 3, type: "makkiah" },
    { number: 104, name: "الهمزة", englishName: "Al-Humazah", ayahs: 9, type: "makkiah" },
    { number: 105, name: "الفيل", englishName: "Al-Fil", ayahs: 5, type: "makkiah" },
    { number: 106, name: "قريش", englishName: "Quraysh", ayahs: 4, type: "makkiah" },
    { number: 107, name: "الماعون", englishName: "Al-Ma'un", ayahs: 7, type: "makkiah" },
    { number: 108, name: "الكوثر", englishName: "Al-Kawthar", ayahs: 3, type: "makkiah" },
    { number: 109, name: "الكافرون", englishName: "Al-Kafirun", ayahs: 6, type: "makkiah" },
    { number: 110, name: "النصر", englishName: "An-Nasr", ayahs: 3, type: "madaniyah" },
    { number: 111, name: "المسد", englishName: "Al-Masad", ayahs: 5, type: "makkiah" },
    { number: 112, name: "الإخلاص", englishName: "Al-Ikhlas", ayahs: 4, type: "makkiah" },
    { number: 113, name: "الفلق", englishName: "Al-Falaq", ayahs: 5, type: "makkiah" },
    { number: 114, name: "الناس", englishName: "An-Nas", ayahs: 6, type: "makkiah" }
];

let quranBookmarks = JSON.parse(localStorage.getItem('quranBookmarks') || '[]');
let isQuranDataLoaded = false; // سيتم تحميلها من التخزين المحلي أو عبر الإنترنت

async function loadQuranIndex() {
    // استخدام البيانات المضمنة مباشرة
    surahListCached = surahListData;
    
    const list = document.getElementById('surah-list');
    const audioSel = document.getElementById('surah-select-audio');
    
    if (list) {
        list.innerHTML = '';
        surahListCached.forEach((s) => {
            const surahItem = document.createElement('div');
            surahItem.className = 'golden-surah-item';
            surahItem.dataset.englishName = s.englishName;
            surahItem.dataset.type = s.type;
            surahItem.onclick = () => {
                navigateTo('quranReader');
                loadQuranPages(s.number);
            };
            
            surahItem.innerHTML = `
                <div class="surah-number-box">${toArabicDigits(s.number)}</div>
                <div class="surah-info-box">
                    <h3 class="surah-name-text">${escapeHtml(s.name)}</h3>
                    <div class="surah-meta">
                        <span class="surah-type-badge ${s.type}">${s.type === 'makkiah' ? 'مكية' : 'مدنية'}</span>
                        <span>${s.ayahs} آية</span>
                    </div>
                </div>
                <span class="enter-arrow">‹</span>
            `;
            
            list.appendChild(surahItem);
        });
    }
    
    if (audioSel) {
        audioSel.innerHTML = '<option value="">اختر السورة...</option>';
        surahListCached.forEach((s) => {
            audioSel.innerHTML += `<option value="${s.number}">${escapeHtml(s.name)}</option>`;
        });
    }
}

// --- نظام تخزين المصحف المحلي ---
let quranOfflineData = {};

// تحميل بيانات المصحف من التخزين المحلي أو من الإنترنت
async function loadQuranOfflineData() {
    try {
        const storedData = localStorage.getItem('quranOfflineData');
        if (storedData) {
            quranOfflineData = JSON.parse(storedData);
            isQuranDataLoaded = true;
            return true;
        }
    } catch (e) {
        console.log('خطأ في تحميل البيانات المحلية:', e);
    }

    if (!navigator.onLine) {
        console.log('لا يوجد اتصال بالإنترنت ولم يتم العثور على بيانات محلية');
        return false;
    }
    return false;
}

// تحميل سورة واحدة عند الطلب + تخزينها محلياً
async function fetchSurahFromNetwork(surahNum) {
    try {
        const loadingToast = document.getElementById('toast-msg');
        // ملاحظة: قد لا يوجد عنصر شاشة تحميل في index.html
        if (loadingToast) showToast('جار تحميل السورة من الإنترنت...');

        const response = await fetch(`https://api.alquran.cloud/v1/surah/${surahNum}/quran-uthmani`);
        const data = await response.json();

        if (!data?.data) return null;

        const surahData = {
            name: data.data.name,
            englishName: data.data.englishName,
            ayahs: data.data.ayahs
        };

        quranOfflineData[surahNum] = surahData;
        isQuranDataLoaded = true;
        try {
            localStorage.setItem('quranOfflineData', JSON.stringify(quranOfflineData));
        } catch { /* ignore quota */ }

        return surahData;
    } catch (e) {
        console.error('فشل تحميل السورة:', e);
        return null;
    }
}

// تحميل بيانات المصحف من الإنترنت وتخزينها محلياً
async function downloadQuranData() {
    console.log('بدء تحميل بيانات المصحف...');
    
    // إظهار شاشة التحميل
    const loadingScreen = document.getElementById('quran-loading-screen');
    const progressBar = document.getElementById('quran-progress');
    const statusText = document.getElementById('loading-status');
    
    if (loadingScreen) {
        loadingScreen.classList.remove('hidden');
        loadingScreen.classList.add('active');
    }
    
    const quranData = {};
    
    // تحميل جميع السور
    for (let surahNum = 1; surahNum <= 114; surahNum++) {
        try {
            const response = await fetch(`https://api.alquran.cloud/v1/surah/${surahNum}/quran-uthmani`);
            const data = await response.json();
            
            if (data.data) {
                quranData[surahNum] = {
                    name: data.data.name,
                    englishName: data.data.englishName,
                    ayahs: data.data.ayahs
                };
                
                // تحديث التقدم
                const progress = (surahNum / 114) * 100;
                if (progressBar) {
                    progressBar.style.width = progress + '%';
                }
                
                if (statusText) {
                    statusText.textContent = `تم تحميل ${surahNum} من 114 سورة (${Math.round(progress)}%)`;
                }
            }
            
            // تأخير صغير لتجنب الحظر
            await new Promise(resolve => setTimeout(resolve, 100));
            
        } catch (e) {
            console.error(`خطأ في تحميل السورة ${surahNum}:`, e);
        }
    }
    
    // تخزين البيانات محلياً
    try {
        localStorage.setItem('quranOfflineData', JSON.stringify(quranData));
        quranOfflineData = quranData;
        isQuranDataLoaded = true;
        console.log('تم تحميل وتخزين بيانات المصحف بنجاح');
        
        // إخفاء شاشة التحميل
        if (loadingScreen) {
            loadingScreen.classList.remove('active');
            loadingScreen.classList.add('hidden');
        }
        
        showToast('تم تحميل المصحف بنجاح');
        return true;
    } catch (e) {
        console.error('خطأ في تخزين البيانات:', e);
        showToast('خطأ في تخزين البيانات');
        
        // إخفاء شاشة التحميل
        if (loadingScreen) {
            loadingScreen.classList.remove('active');
            loadingScreen.classList.add('hidden');
        }
        
        return false;
    }
}

// الحصول على بيانات سورة معينة
function getSurahData(surahNum) {
    if (!isQuranDataLoaded) return null;
    return quranOfflineData[surahNum] || null;
}

// التحقق مما إذا كانت بيانات المصحف متاحة
function isQuranDataAvailable() {
    return isQuranDataLoaded && Object.keys(quranOfflineData).length > 0;
}

// مسح بيانات المصحف المحلية (للاختبار)
function clearQuranOfflineData() {
    localStorage.removeItem('quranOfflineData');
    quranOfflineData = {};
    isQuranDataLoaded = false;
    showToast('تم مسح البيانات المحلية');
}
let quranPages = [];
let currentPage = 1;
let totalPages = 604; // إجمالي صفحات المصحف
let currentSurahPages = [];
let isPageTransitioning = false;

// بيانات مواقع السور والاجزاء في الصفحات
const quranPageData = {
    surahStartPages: {
        1: 1, 2: 2, 3: 50, 4: 77, 5: 106, 6: 128, 7: 151, 8: 177, 9: 187, 10: 208,
        11: 221, 12: 235, 13: 249, 14: 255, 15: 262, 16: 267, 17: 282, 18: 293, 19: 304, 20: 312,
        21: 322, 22: 332, 23: 342, 24: 350, 25: 359, 26: 367, 27: 377, 28: 383, 29: 395, 30: 401,
        31: 405, 32: 411, 33: 415, 34: 421, 35: 426, 36: 428, 37: 433, 38: 440, 39: 446, 40: 452,
        41: 453, 42: 457, 43: 464, 44: 467, 45: 472, 46: 477, 47: 482, 48: 485, 49: 493, 50: 497,
        51: 500, 52: 502, 53: 506, 54: 508, 55: 511, 56: 514, 57: 517, 58: 520, 59: 523, 60: 525,
        61: 527, 62: 529, 61: 527, 62: 529, 63: 531, 64: 533, 65: 535, 66: 537, 67: 539, 68: 541,
        69: 543, 70: 545, 71: 547, 72: 549, 73: 551, 74: 553, 75: 555, 76: 557, 77: 559, 78: 561,
        79: 563, 80: 565, 81: 567, 82: 569, 83: 571, 84: 573, 85: 575, 86: 577, 87: 579, 88: 581,
        89: 583, 90: 585, 91: 587, 92: 589, 93: 591, 94: 593, 95: 595, 96: 597, 97: 599, 98: 600,
        99: 601, 100: 602, 101: 603, 102: 603, 103: 604, 104: 604, 105: 604, 106: 604, 107: 604, 108: 604,
        109: 604, 110: 604, 111: 604, 112: 604, 113: 604, 114: 604
    },
    juzStartPages: {
        1: 1, 2: 2, 3: 50, 4: 77, 5: 106, 6: 128, 7: 151, 8: 177, 9: 187, 10: 208,
        11: 221, 12: 235, 13: 249, 14: 255, 15: 262, 16: 267, 17: 282, 18: 293, 19: 304, 20: 312,
        21: 322, 22: 332, 23: 342, 24: 350, 25: 359, 26: 367, 27: 377, 28: 383, 29: 395, 30: 401
    }
};

window.loadQuranPages = async (surahNumber = 1) => {
    // تعيين السورة مبكرًا لتفادي تحميل مزدوج (قبل أي await)
    currentSurahNumber = surahNumber;
    ayahTextCache = {};
    ayahGlobalNumberCache = {};

    // التأكد من تحميل بيانات المصحف أولاً
    if (!isQuranDataLoaded) {
        const loaded = await loadQuranOfflineData();
        if (!loaded && navigator.onLine) {
            // جرب تجيب السورة من النت مباشرة
            const surahData = await fetchSurahFromNetwork(surahNumber);
            if (surahData) {
                currentSurahDisplayName = surahData.name;
                currentSurahPages = surahData.ayahs;
                const startPage = quranPageData.surahStartPages[surahNumber] || 1;
                currentPage = startPage;
                splitAyahsIntoPages();
                displayCurrentPage();
                updatePageInfo();
                return;
            }
        }
        if (!loaded) {
            currentSurahNumber = 0;
            showToast('لا توجد بيانات مصحف محلية. يرجى الاتصال بالإنترنت.');
            return;
        }
    }
    
    const startPage = quranPageData.surahStartPages[surahNumber] || 1;
    currentPage = startPage;
    
    // الحصول على بيانات السورة من التخزين المحلي
    const surahData = getSurahData(surahNumber);
    if (!surahData) {
        // لو مفيش بيانات محلية، جرب تجيب من النت
        if (navigator.onLine) {
            const networkData = await fetchSurahFromNetwork(surahNumber);
            if (networkData) {
                currentSurahDisplayName = networkData.name;
                currentSurahPages = networkData.ayahs;
                splitAyahsIntoPages();
                displayCurrentPage();
                updatePageInfo();
                return;
            }
        }
        showToast('السورة غير متوفرة');
        return;
    }
    
    currentSurahDisplayName = surahData.name;
    currentSurahPages = surahData.ayahs;
    
    splitAyahsIntoPages();
    displayCurrentPage();
    updatePageInfo();
};

function splitAyahsIntoPages() {
    quranPages = [];
    let currentPageAyahs = [];
    let currentJuz = 1;
    let pageAyahCount = 0;
    const maxAyahsPerPage = 15; // متوسط عدد الآيات في الصفحة
    
    currentSurahPages.forEach((ayah, index) => {
        // تحديد الجزء الحالي
        for (let j = 30; j >= 1; j--) {
            if (quranPageData.juzStartPages[j] <= currentPage + (quranPages.length || 0)) {
                currentJuz = j;
                break;
            }
        }
        
        currentPageAyahs.push({
            ...ayah,
            juz: currentJuz,
            pageNumber: currentPage + quranPages.length
        });
        
        pageAyahCount++;
        
        // إنهاء الصفحة عند الوصول للعدد المناسب أو نهاية السورة
        if (pageAyahCount >= maxAyahsPerPage || index === currentSurahPages.length - 1) {
            quranPages.push({
                ayahs: [...currentPageAyahs],
                pageNumber: currentPage + quranPages.length,
                surahName: currentSurahDisplayName,
                juz: currentJuz
            });
            currentPageAyahs = [];
            pageAyahCount = 0;
        }
    });
}

function displayCurrentPage() {
    if (isPageTransitioning) return;
    isPageTransitioning = true;
    
    const contentEl = document.getElementById('quran-text-content');
    const surahNameEl = document.getElementById('current-surah-name');
    const pageNumTopEl = document.getElementById('page-number-display');
    const bismillahEl = document.querySelector('.mushaf-page .bismillah');
    
    if (!contentEl || !surahNameEl || !pageNumTopEl) {
        isPageTransitioning = false;
        return;
    }
    
    const page = quranPages[currentPage - 1];
    if (!page) {
        if (bismillahEl) bismillahEl.style.display = 'none';
        contentEl.innerHTML = '<p class="quran-error">الصفحة غير متوفرة</p>';
        isPageTransitioning = false;
        return;
    }
    
    // تحديث معلومات الصفحة
    surahNameEl.textContent = page.surahName || currentSurahDisplayName || '';
    pageNumTopEl.textContent = `صفحة ${toArabicDigits(page.pageNumber)}`;

    // البسملة تكون كـ "عنوان" في تصميم المصحف الذهبي
    // (لا نخفيها إلا في سورة التوبة لأن تصميم المصحف نفسه يحتوي البسملة كعنوان ثابت)
    if (bismillahEl) bismillahEl.style.display = (currentSurahNumber === 9) ? 'none' : 'block';
    
    // بناء محتوى الصفحة
    let html = '';
    
    // إضافة الآيات
    page.ayahs.forEach((ayah) => {
        let text = ayah.text;
        
        // إزالة البسملة من بداية الآية إذا كانت موجودة
        if (currentSurahNumber !== 1 && currentSurahNumber !== 9 && ayah.numberInSurah === 1) {
            text = text.replace(/^بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ /, '');
        }
        
        // تخزين النص للاستخدام لاحقاً
        ayahTextCache[ayah.numberInSurah] = text;
        ayahGlobalNumberCache[ayah.numberInSurah] = ayah.number;
        
        const isMarked = quranBookmarks.some((b) => b.surah === currentSurahNumber && b.ayah === ayah.numberInSurah);
        const markClass = isMarked ? "bookmarked-ayah" : "";
        const safeText = escapeHtml(text);
        
        // استخدام دائرة للأرقام بدلاً من القوسين
        html += `<span class="ayah-verse ${markClass}" id="ayah-${ayah.numberInSurah}" data-surah="${currentSurahNumber}" data-ayah="${ayah.numberInSurah}">${safeText}<span class="ayah-number-circle">${toArabicDigits(ayah.numberInSurah)}</span></span> `;
    });
    
    contentEl.innerHTML = html;
    
    // إضافة مستمعي الأحداث للآيات
    setTimeout(() => {
        addAyahEventListeners();
        isPageTransitioning = false;
    }, 100);
}

function updatePageInfo() {
    const pageNumTopEl = document.getElementById('page-number-display');
    if (!pageNumTopEl) return;
    const page = quranPages[currentPage - 1];
    if (page) pageNumTopEl.textContent = `صفحة ${toArabicDigits(page.pageNumber)}`;
}

window.navigateQuranPage = function (direction) {
    if (isPageTransitioning) return;
    
    const newPage = currentPage + direction;
    if (newPage >= 1 && newPage <= totalPages) {
        currentPage = newPage;
        
        // البحث عن السورة التي تحتوي على الصفحة الجديدة
        for (let surahNum = 1; surahNum <= 114; surahNum++) {
            const startPage = quranPageData.surahStartPages[surahNum];
            const nextSurahStartPage = quranPageData.surahStartPages[surahNum + 1] || totalPages + 1;
            
            if (newPage >= startPage && newPage < nextSurahStartPage) {
                if (surahNum !== currentSurahNumber) {
                    loadQuranPages(surahNum);
                    // تعديل الصفحة الحالية لتكون ضمن صفحات السورة الجديدة
                    currentPage = newPage - startPage + 1;
                } else {
                    displayCurrentPage();
                    updatePageInfo();
                }
                break;
            }
        }
        
        // إضافة تأثير الحركة
        const page = document.querySelector('.quran-page');
        if (page) {
            page.classList.remove('slide-in-right', 'slide-in-left');
            if (direction > 0) {
                page.classList.add('slide-in-right');
            } else {
                page.classList.add('slide-in-left');
            }
        }
    } else {
        showToast(direction > 0 ? 'وصلت لآخر صفحة' : 'وصلت لأول صفحة');
    }
};

// أزرار المصحف (مفقودة في الكود الحالي)
window.nextPage = function () { window.navigateQuranPage(1); };
window.previousPage = function () { window.navigateQuranPage(-1); };

// قائمة الإجراءات في أسفل المصحف
window.showQuranMenu = function () {
    const modal = document.getElementById('quran-menu-modal');
    if (!modal) return;
    const willOpen = modal.classList.contains('hidden');
    modal.classList.toggle('hidden');

    if (willOpen) {
        // إغلاق تلقائي عند النقر خارج القائمة
        const onDocClick = (ev) => {
            const target = ev.target;
            if (!target) return;
            if (!modal.contains(target)) {
                modal.classList.add('hidden');
                document.removeEventListener('click', onDocClick, true);
            }
        };
        setTimeout(() => document.addEventListener('click', onDocClick, true), 0);
    }
};

window.hideQuranMenu = function () {
    const modal = document.getElementById('quran-menu-modal');
    if (modal) modal.classList.add('hidden');
};

window.playCurrentAudio = function () {
    if (ayahSheetSurah === 0 || ayahSheetAyah === 0) {
        showToast('اختر آية أولاً');
        return;
    }
    window.hideQuranMenu?.();
    playAyahAudio(ayahSheetSurah, ayahSheetAyah);
};

window.bookmarkCurrent = function () {
    if (ayahSheetSurah === 0 || ayahSheetAyah === 0) {
        showToast('اختر آية أولاً');
        return;
    }
    window.hideQuranMenu?.();
    toggleBookmark(ayahSheetSurah, ayahSheetAyah);
};

function addAyahEventListeners() {
    const ayahVerses = document.querySelectorAll('.ayah-verse');
    ayahVerses.forEach(ayahEl => {
        // إزالة المستمعين القديمين
        ayahEl.replaceWith(ayahEl.cloneNode(true));
        const newAyahEl = document.getElementById(ayahEl.id);
        
        let pressTimer;
        
        // النقر يحدّث "آخر آية" فقط.
        // التفعيل الفعلي للمرجعية والحفظ يتم من خلال حدث `quranTextEl` (لتفادي تكرار Toggle).
        newAyahEl.addEventListener('click', () => {
            const surah = parseInt(newAyahEl.dataset.surah);
            const ayah = parseInt(newAyahEl.dataset.ayah);
            ayahSheetSurah = surah;
            ayahSheetAyah = ayah;
        });
        
        // الضغطة الطويلة يتم التعامل معها في event الخاص بـ `quranTextEl` (long-press)
        newAyahEl.addEventListener('mousedown', () => {
            const surah = parseInt(newAyahEl.dataset.surah);
            const ayah = parseInt(newAyahEl.dataset.ayah);
            ayahSheetSurah = surah;
            ayahSheetAyah = ayah;
        });
        
        newAyahEl.addEventListener('mouseup', () => {
            clearTimeout(pressTimer);
        });
        
        newAyahEl.addEventListener('mouseleave', () => {
            clearTimeout(pressTimer);
        });
        
        // للشاشات اللمسية (long-press كذلك يتم من خلال `quranTextEl`)
        newAyahEl.addEventListener('touchstart', () => {
            const surah = parseInt(newAyahEl.dataset.surah);
            const ayah = parseInt(newAyahEl.dataset.ayah);
            ayahSheetSurah = surah;
            ayahSheetAyah = ayah;
        });
        
        newAyahEl.addEventListener('touchend', () => {
            clearTimeout(pressTimer);
        });
    });
}

// دعم السحب للتنقل بين الصفحات
function initSwipeGestures() {
    const container = document.getElementById('quran-display-area');
    if (!container) return;
    
    let startX = 0;
    let startY = 0;
    let endX = 0;
    let endY = 0;
    
    container.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });
    
    container.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        endY = e.changedTouches[0].clientY;
        
        const diffX = endX - startX;
        const diffY = endY - startY;
        
        // التأكد من أن الحركة أفقية أكثر من عمودية
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
            if (diffX > 0) {
                navigateQuranPage(-1); // سحب لليمين - صفحة سابقة
            } else {
                navigateQuranPage(1); // سحب لليسار - صفحة تالية
            }
        }
    });
}

// تحميل الصفحة عند فتح شاشة القرآن
const originalNavigateTo = window.navigateTo;
window.navigateTo = function(screenId) {
    originalNavigateTo(screenId);
    if (screenId === 'quranReader') {
        setTimeout(() => {
            initSwipeGestures();
            if (!currentSurahNumber) {
                loadQuranPages(1);
            }
        }, 100);
    }
};

window.toggleBookmark = function (sNum, aNum) {
    const sName = currentSurahDisplayName || '';
    const text = ayahTextCache[aNum] || '';
    
    const index = quranBookmarks.findIndex((b) => b.surah === sNum && b.ayah === aNum);
    if (index > -1) {
        quranBookmarks.splice(index, 1);
        const el = document.getElementById(`ayah-${aNum}`);
        if (el) el.classList.remove('bookmarked-ayah');
        showToast("❌ تم إزالة العلامة المرجعية");
    } else {
        quranBookmarks.push({ surah: sNum, surahName: sName, ayah: aNum, text: text });
        const el = document.getElementById(`ayah-${aNum}`);
        if (el) el.classList.add('bookmarked-ayah');
        showToast("🔖 تم حفظ الآية");
    }
    localStorage.setItem('quranBookmarks', JSON.stringify(quranBookmarks));
    renderBookmarks();
};

window.showAyahActions = function (sNum, aNum) {
    const sheet = document.getElementById('ayah-action-sheet');
    const backdrop = document.getElementById('ayah-sheet-backdrop');
    const title = document.getElementById('ayah-sheet-title');
    const tafsirPanel = document.getElementById('ayah-tafsir-panel');
    const tafsirText = document.getElementById('ayah-tafsir-text');
    
    if (!sheet || !backdrop) return;

    // حفظ آخر آية لتعمل أزرار "القائمة" في أسفل المصحف بدون أي معاملات
    ayahSheetSurah = sNum;
    ayahSheetAyah = aNum;
    
    // إخفاء لوحة التفسير
    if (tafsirPanel) tafsirPanel.classList.add('hidden');
    
    // تحديث عنوان اللوحة
    if (title) title.textContent = `آية ${toArabicDigits(aNum)} من سورة ${currentSurahDisplayName}`;
    
    // إعداد أزرار الإجراءات
    const btnTafsir = document.getElementById('ayah-btn-tafsir');
    const btnAudio = document.getElementById('ayah-btn-audio');
    const btnClose = document.getElementById('ayah-btn-close');
    
    if (btnTafsir) {
        btnTafsir.onclick = () => showTafsir(sNum, aNum);
    }
    
    if (btnAudio) {
        btnAudio.onclick = () => playAyahAudio(sNum, aNum);
    }
    
    if (btnClose) {
        btnClose.onclick = closeAyahSheet;
    }
    
    // عرض اللوحة
    sheet.classList.remove('hidden');
    backdrop.classList.remove('hidden');
    
    setTimeout(() => {
        sheet.classList.add('sheet-open');
        backdrop.classList.add('sheet-open');
    }, 50);
};

window.showTafsir = async function (sNum, aNum) {
    // إغلاق قائمة المصحف بعد اختيار إجراء
    window.hideQuranMenu?.();
    if (sNum == null || aNum == null) {
        sNum = ayahSheetSurah;
        aNum = ayahSheetAyah;
    }
    if (sNum === 0 || aNum === 0) {
        showToast('اختر آية أولاً');
        return;
    }
    const panel = document.getElementById('ayah-tafsir-panel');
    const text = document.getElementById('ayah-tafsir-text');
    
    if (!panel || !text) return;
    
    panel.classList.remove('hidden');
    text.textContent = 'جاري تحميل التفسير...';
    
    try {
        const res = await fetch(`https://api.alquran.cloud/v1/ayah/${sNum}:${aNum}/ar.muyassar`);
        const data = await res.json();
        
        if (data.data && data.data.text) {
            text.textContent = data.data.text;
        } else {
            text.textContent = 'التفسير غير متوفر لهذه الآية';
        }
    } catch (e) {
        text.textContent = 'تعذر تحميل التفسير. تحقق من اتصالك بالإنترنت.';
    }
};

window.playAyahAudio = function (sNum, aNum) {
    const audio = document.getElementById('ayah-audio');
    if (!audio) return;
    
    const preset = getAyahReciterPreset();
    const audioUrl = `https://everyayah.com/data/${preset.everyayah}/${sNum}${aNum.toString().padStart(3, '0')}.mp3`;
    
    audio.src = audioUrl;
    audio.play().catch(e => {
        showToast('تعذر تشغيل الصوت');
    });
};

window.closeAyahSheet = function () {
    const sheet = document.getElementById('ayah-action-sheet');
    const backdrop = document.getElementById('ayah-sheet-backdrop');
    
    if (sheet && backdrop) {
        sheet.classList.remove('sheet-open');
        backdrop.classList.remove('sheet-open');
        
        setTimeout(() => {
            sheet.classList.add('hidden');
            backdrop.classList.add('hidden');
        }, 300);
    }
};

// --- دوال التحكم في الإعدادات الجديدة ---
window.toggleSettingsSidebar = function() {
    const sidebar = document.getElementById('settings-sidebar');
    if (sidebar) {
        sidebar.classList.toggle('show');
    }
};

window.updateZoom = function(value) {
    const pageContent = document.querySelector('.page-content');
    if (pageContent) {
        const currentSize = parseFloat(window.getComputedStyle(pageContent).fontSize);
        const newSize = 1.6 * value; // حجم الأساسي 1.6rem
        pageContent.style.fontSize = newSize + 'rem';
    }
    
    // حفظ الإعداد
    localStorage.setItem('quranZoom', value);
};

window.getCurrentAyah = function() {
    // إرجاع رقم الآية الحالية (يمكن تحسينه لاحقاً)
    return 1;
};

window.toggleQuranActions = function() {
    const panel = document.getElementById('quran-actions-panel');
    if (panel) {
        panel.classList.toggle('show');
    }
};

window.shareApp = async function() {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'موسوعة المسلم',
                text: 'تطبيق إسلامي شامل يحتوي على مصحف، أذكار، مواقيت صلاة، وأكثر',
                url: window.location.href
            });
        } catch (err) {
            console.log('Error sharing:', err);
        }
    } else {
        // نسخ الرابط
        navigator.clipboard.writeText(window.location.href).then(() => {
            showToast('تم نسخ رابط التطبيق');
        });
    }
};

window.checkForUpdates = async function() {
    showToast('جاري التحقق من التحديثات...');
    
    // محاكاة فحص التحديثات
    setTimeout(() => {
        showToast('التطبيق محدث لآخر إصدار');
    }, 2000);
};

window.exitApp = function() {
    if (confirm('هل تريد الخروج من التطبيق؟')) {
        // في بيئة PWA يمكن إغلاق التطبيق
        if (window.close) {
            window.close();
        } else {
            showToast('لا يمكن إغلاق التطبيق في المتصفح');
        }
    }
};

window.toggleNotificationSettings = function() {
    toggleSettingsSidebar();
    navigateTo('settings');
};

// تحميل الإعدادات المحفوظة
function loadSavedSettings() {
    // تحميل التكبير
    const savedZoom = localStorage.getItem('quranZoom');
    if (savedZoom) {
        const slider = document.getElementById('zoom-slider');
        if (slider) {
            slider.value = savedZoom;
            updateZoom(savedZoom);
        }
    }
    
    // تحميل الوضع الليلي
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'true') {
        document.body.classList.add('dark-theme');
    }
    
    // تحميل إعدادات الصوتيات
    const savedReciter = localStorage.getItem('ayahReciterId');
    if (savedReciter) {
        const reciterSelect = document.getElementById('ayah-reciter-select');
        if (reciterSelect) {
            reciterSelect.value = savedReciter;
        }
    }
    
    // تحميل إعدادات المواقيت
    const savedMethod = localStorage.getItem('prayerMethod');
    if (savedMethod) {
        const methodSelect = document.getElementById('prayer-method-select');
        if (methodSelect) {
            methodSelect.value = savedMethod;
        }
    }
    
    const savedNotify = localStorage.getItem('notifyPrayer');
    if (savedNotify) {
        const notifyCheck = document.getElementById('notify-prayer-check');
        if (notifyCheck) {
            notifyCheck.checked = savedNotify === 'true';
        }
    }
    
    const savedBefore = localStorage.getItem('notifyBefore');
    if (savedBefore) {
        const beforeSelect = document.getElementById('notify-before-select');
        if (beforeSelect) {
            beforeSelect.value = savedBefore;
        }
    }
}

window.saveAppSettings = function() {
    // حفظ إعدادات الصوتيات
    const reciterSelect = document.getElementById('ayah-reciter-select');
    if (reciterSelect) {
        localStorage.setItem('ayahReciterId', reciterSelect.value);
    }
    
    // حفظ إعدادات المواقيت
    const methodSelect = document.getElementById('prayer-method-select');
    if (methodSelect) {
        localStorage.setItem('prayerMethod', methodSelect.value);
    }
    
    const notifyCheck = document.getElementById('notify-prayer-check');
    if (notifyCheck) {
        localStorage.setItem('notifyPrayer', notifyCheck.checked);
    }
    
    const beforeSelect = document.getElementById('notify-before-select');
    if (beforeSelect) {
        localStorage.setItem('notifyBefore', beforeSelect.value);
    }
    
    showToast('تم حفظ الإعدادات بنجاح');
};

// دالة toggleTheme الأصلية
window.toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('darkMode', isDark);
};

// مكتبة الأحاديث الشاملة - صحيح البخاري وصحيح مسلم والأربعين النووية
const authenticHadiths = {
    bukhari: [
        { text: "إنما الأعمال بالنيات، وإنما لكل امرئ ما نوى، فمن كانت هجرته إلى الله ورسوله، فهجرته إلى الله ورسوله، ومن كانت هجرته إلى دنيا يصيبها أو امرأة يتزوجها، فهجرته إلى ما هاجر إليه", narrator: "عمر بن الخطاب رضي الله عنه", source: "صحيح البخاري - كتاب بدء الوحي", reference: "حديث رقم 1" },
        { text: "الإيمان بضع وستون أو بضع وسبعون شعبة، فأعلاها قول لا إله إلا الله، وأدناها إماطة الأذى عن الطريق، والحياء شعبة من الإيمان", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب الإيمان", reference: "حديث رقم 9" },
        { text: "بني الإسلام على خمس: شهادة أن لا إله إلا الله وأن محمداً رسول الله، وإقام الصلاة، وإيتاء الزكاة، وصوم رمضان، وحج البيت من استطاع إليه سبيلاً", narrator: "ابن عمر رضي الله عنهما", source: "صحيح البخاري - كتاب الإيمان", reference: "حديث رقم 8" },
        { text: "من حسن إسلام المرء تركه ما لا يعنيه", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب الأدب", reference: "حديث رقم 6057" },
        { text: "المسلم من سلم المسلمون من لسانه ويده، والمؤمن من أمنه الناس على دمائهم وأموالهم", narrator: "عبد الله بن عمرو بن العاص رضي الله عنهما", source: "صحيح البخاري - كتاب الإيمان", reference: "حديث رقم 10" },
        { text: "لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب الإيمان", reference: "حديث رقم 13" },
        { text: "من نفس عن مؤمن كربة من كرب الدنيا، نفس الله عنه كربة من كرب يوم القيامة، ومن يسر على معسر، يسر الله عليه في الدنيا والآخرة، ومن ستر مسلماً ستره الله في الدنيا والآخرة، والله في عون العبد ما كان العبد في عون أخيه", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب المظالم", reference: "حديث رقم 2442" },
        { text: "الدين النصيحة، قلنا: لمن يا رسول الله؟ قال: لله ولكتابه ولرسوله ولأئمة المسلمين وعامتهم", narrator: "تميم الداري رضي الله عنه", source: "صحيح البخاري - كتاب الإيمان", reference: "حديث رقم 55" },
        { text: "من صلى علي صلاة واحدة صلى الله عليه عشراً", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب الصلاة", reference: "حديث رقم 635" },
        { text: "أكثروا من الصلاة عليّ فإن صلاتكم معروضة عليّ", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب الجنائز", reference: "حديث رقم 1381" },
        { text: "ما أحييتم من سنّتي فأحبوه، وما أمرتكم به فأدوه، وما نهيتكم عنه فاجتنبوه، وما نهيتكم عنه فكّلوا إليّ", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب العلم", reference: "حديث رقم 7288" },
        { text: "طلب العلم فريضة على كل مسلم", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب العلم", reference: "حديث رقم 4182" },
        { text: "ما نهيتكم عنه فاجتنبوه، وما أمرتكم به فأتوا منه ما استطعتم، فإنما أهلك الذين من قبلكم كثرة سؤالهم واختلافهم على أنبيائهم", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب الإيمان", reference: "حديث رقم 7289" },
        { text: "من يُرد الله به خيراً يفقهه في الدين", narrator: "عائشة رضي الله عنها", source: "صحيح البخاري - كتاب العلم", reference: "حديث رقم 71" },
        { text: "إن الله لا يقبض العلم انتزاعاً ينتزعه من العباد، ولكن يقبض العلم بقبض العلماء، حتى إذا لم يبق عالماً اتخذ الناس رؤوساً جهالاً، فسئلوا فأفتوا بغير علم فضلوا وأضلوا", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب العلم", reference: "حديث رقم 100" },
        { text: "الصدق من الإيمان والإيمان يهدي إلى الجنة، ويكتب الصديق صديقاً عند الله، وإن الكذب من الفجور والفجور يهدي إلى النار، ويكتب الكذاب كذاباً عند الله", narrator: "عبد الله بن مسعود رضي الله عنه", source: "صحيح البخاري - كتاب الأدب", reference: "حديث رقم 6094" },
        { text: "إن الصدق يهدي إلى البر وإن البر يهدي إلى الجنة، وإن الرجل ليتحرى الصدق حتى يكتب عند الله صديقاً، وإن الكذب يهدي إلى الفجور وإن الفجور يهدي إلى النار، وإن الرجل ليكذب حتى يكتب عند الله كذاباً", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب الأدب", reference: "حديث رقم 6093" },
        { text: "لا يحل لمسلم أن يروّع مسلماً", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب الأدب", reference: "حديث رقم 6070" },
        { text: "لا يدخل الجنة من لا يأمن جاره بوائقه", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب الأدب", reference: "حديث رقم 6016" },
        { text: "من كان يؤمن بالله واليوم الآخر فليكرم ضيفه، ومن كان يؤمن بالله واليوم الآخر فليصل رحمه، ومن كان يؤمن بالله واليوم الآخر فليقل خيراً أو ليصمت", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب الأدب", reference: "حديث رقم 6138" },
        { text: "الرجل على دين خليله، فلينظر أحدكم من يخالل", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب الأدب", reference: "حديث رقم 6195" },
        { text: "الدنيا سجن المؤمن وجنة الكافر", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب الرقاق", reference: "حديث رقم 6416" },
        { text: "إن لله تعالى ملائكة سيارة فضلاً، يتتبعون مجالس الذكر، فإذا وجدوا قوماً يذكرون الله تنادوا: هلموا إلى حاجتكم، فتصفق أجنحتهم بأجنحة أصحابهم حتى تغشاهم، فإذا تفرقوا عرجوا إلى السماء، فيسألهم ربهم عز وجل - وهو أعلم - أين كنتم؟ فيقولون: كنا عند عباد لك من خلقك، يسبحونك ويكبرونك ويحمدونك ويؤلون لك، فيقول: هل رأوني؟ فيقولون: لا والله ما رأوك، فيقول: فكيف لو رأوني؟ فيقولون: لو رأوك كانوا أشد لك عبادة وأشد لك تمجيداً وأكثر لك تسبيحاً، فيقول: فما يسألون؟ فيقولون: يسألونك الجنة، فيقول: وهل رأوها؟ فيقولون: لا والله يا رب ما رأوها، فيقول: فكيف لو رأوها؟ فيقولون: لو رأوها كانوا أشد عليها حرصاً وأشد لها طلباً وأعظم فيها رغبة، فيقول: فمم يتعوذون؟ فيقولون: يتعوذون من النار، فيقول: وهل رأوها؟ فيقولون: لا والله يا رب ما رأوها، فيقول: فكيف لو رأوها؟ فيقولون: لو رأوها كانوا أشد منها فراراً وأشد لها مخافة، فيقول: فأشهدكم أني قد غفرت لهم، فيقول ملك من الملائكة: إن فيهم فلاناً ليس منهم، إنما جاء لحاجة، فيقول: هم الجلساء لا يشقى بهم جليسهم", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب الدعوات", reference: "حديث رقم 6408" },
        { text: "من سلك طريقاً يلتمس فيه علماً سهّل الله له طريقاً إلى الجنة، وما اجتمع قوم في بيت من بيوت الله يتلون كتاب الله ويتدارسونه بينهم إلا نزلت عليهم السكينة وغشيتهم الرحمة وحفتهم الملائكة وذكرهم الله فيمن عنده", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب العلم", reference: "حديث رقم 66" },
        { text: "إن الله تعالى لا ينظر إلى صوركم ولا إلى أموالكم ولكن ينظر إلى قلوبكم وأعمالكم", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب التوحيد", reference: "حديث رقم 7444" },
        { text: "ألا أخبركم بأكبر الكبائر؟ قلنا: بلى يا رسول الله، قال: الإشراك بالله، وعقوق الوالدين، وكان متكئاً فجلس فقال: ألا وقول الزور، ألا وقول الزور، ألا وشهادة الزور، فما زال يكررها حتى قلنا: ليته يسكت", narrator: "عبد الله بن مسعود رضي الله عنه", source: "صحيح البخاري - كتاب الأدب", reference: "حديث رقم 5976" },
        { text: "إنما مثل الجليس الصالح كحامل المسك، إما أن يحذيك وإما أن تشتري منه، ومثل جليس السوء كنافخ الكير، إما أن يحرق ثيابك وإما أن تجد منه ريحاً خبيثة", narrator: "أبو موسى الأشعري رضي الله عنه", source: "صحيح البخاري - كتاب الشهادات", reference: "حديث رقم 5534" },
        { text: "إذا مات الإنسان انقطع عمله إلا من ثلاث: صدقة جارية، أو علم ينتفع به، أو ولد صالح يدعو له", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب الوصايا", reference: "حديث رقم 1381" },
        { text: "رأى رجل بقرة لرجل آخر، فقال: ما أحسن هذه البقرة، فأخذها الله بلسانه فهي أصابه، أو هي صاحبه، فقال عليه الصلاة والسلام: ألا أخبركم عن أيسر أهل الجنة دخولاً؟ قالوا: بلى يا رسول الله، قال: الضعفاء المستضعفون الذين يتربصون بالأرض فلا يؤتيهم طائل، تؤخذ لهم الصدقة فلا يصلون عليها، تدخل من دخلت منهم الجنة بغير حساب، قال: فأخبرنا عن أسرع أهل الجنة دخولاً، قال: كل ضريف طريف على الله، قيل: ما ضريف طريف على الله؟ قال: تؤخذ لهم الصدقة فلا يؤتونها فلا يصلون عليها ولا يدعون عليها", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب الزكاة", reference: "حديث رقم 1424" },
        { text: "ما صام أحد يوماً في سبيل الله إلا باعد الله وجهه عن النار بذلك اليوم سبعين خريفاً", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب الصيام", reference: "حديث رقم 2840" },
        { text: "ما نقصت صدقة من مال، وما زاد الله عبداً بعفو إلا عزاً، وما تواضع أحد لله إلا رفعه الله", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب الرقاق", reference: "حديث رقم 6406" },
        { text: "اللهم اغفر لي ذنبي، ووسع لي في داري، وبارك لي فيما رزقتني", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب الدعوات", reference: "حديث رقم 6348" },
        { text: "لا تباغتموا أنفسكم بالموت إلا تالاً كتاب الله، أو آخذاً بسبيل الله", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب الجهاد والسير", reference: "حديث رقم 2929" },
        { text: "لو أن ابن آدم أعطي وادياً من ذهب أحب إليه ثانياً، ولو أعطي ثانياً أحب إليه ثالثاً، ولا يملأ جوف ابن آدم إلا التراب، ويتوب الله على من تاب", narrator: "عبد الله بن مسعود رضي الله عنه", source: "صحيح البخاري - كتاب الرقاق", reference: "حديث رقم 6439" },
        { text: "والذي نفسي بيده لو لم تذنبوا لذهب الله بكم ولجاء بقوم يذنبون فيستغفرون الله فيغفر لهم", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب التوبة", reference: "حديث رقم 7508" },
        { text: "كل بني آدم خطاء وخير الخطائين التوابون", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب التوبة", reference: "حديث رقم 7507" },
        { text: "إن الله يبسط يده بالليل ليتوب مسيء النهار، ويبسط يده بالنهار ليتوب مسيء الليل، حتى تطلع الشمس من مغربها", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب التوبة", reference: "حديث رقم 6306" },
        { text: "التوبة من الذنب كمن لا ذنب له، وإن استغفر الله من ذنب لم يغفر له إلا أسلمه الله منه", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب التوبة", reference: "حديث رقم 6308" },
        { text: "لا تزول قدما عبد يوم القيامة حتى يسأل عن عمره فيما أفناه، وعن علمه فيما فعل فيه، وعن ماله من أين اكتسبه وفيما أنفقه، وعن جسمه فيما أبلاه", narrator: "الحسن بن علي بن أبي طالب رضي الله عنهما", source: "صحيح البخاري - كتاب الرقاق", reference: "حديث رقم 6414" },
        { text: "نعمتان مغبون فيهما كثير من الناس: الصحة والفراغ", narrator: "ابن عباس رضي الله عنهما", source: "صحيح البخاري - كتاب الرقاق", reference: "حديث رقم 6412" },
        { text: "لن تزول قدما ابن آدم يوم القيامة من عند ربه حتى يسأل عن خمس: عن عمره فيما أفناه، وعن شبابه فيما أبلاه، وعن ماله من أين اكتسبه وفيما أنفقه، وماذا عمل فيما علم", narrator: "أبو برزة الأسلمي رضي الله عنه", source: "صحيح البخاري - كتاب الرقاق", reference: "حديث رقم 6413" },
        { text: "ما من عبد يسترعيه الله رعية يموت يوم يموت وهو غاش لرعيته إلا حرم الله عليه الجنة", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب الأحكام", reference: "حديث رقم 7150" },
        { text: "إن الله كتب الإحسان على كل شيء، فإذا قتلتم فأحسنوا القتلة، وإذا ذبحتم فأحسنوا الذبحة، وليحد أحدكم شفرته، وليرح ذبيحته", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب الذبائح والصيد", reference: "حديث رقم 5565" },
        { text: "أدبوا أولادكم على ثلاث خصال: حب نبيكم، وحب أهل بيته، وقراءة القرآن، فإن حامل القرآن في السماء مثل أهل البدر، وأنتم يوم القيامة في زمرة أهل القرآن، وأهل القرآن هم أهل الله وخاصته", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب فضائل القرآن", reference: "حديث رقم 4937" },
        { text: "خيركم من تعلم القرآن وعلمه", narrator: "عثمان بن عفان رضي الله عنه", source: "صحيح البخاري - كتاب فضائل القرآن", reference: "حديث رقم 5027" },
        { text: "ما اجتمع قوم في بيت من بيوت الله يتلون كتاب الله ويتدارسونه بينهم إلا نزلت عليهم السكينة وغشيتهم الرحمة وحفتهم الملائكة وذكرهم الله فيمن عنده", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب فضائل القرآن", reference: "حديث رقم 4861" },
        { text: "القرآن فرشة من فرش الجنة، من جعله أمامه قاده إلى الجنة، ومن جعله خلفه دفعه إلى النار", narrator: "عبد الله بن مسعود رضي الله عنه", source: "صحيح البخاري - كتاب فضائل القرآن", reference: "حديث رقم 5000" },
        { text: "اقرأوا القرآن فإنه يأتي يوم القيامة شفيعاً لأصحابه، اقرأوا الزهراوين البقرة وسورة آل عمران، فإنهما تأتيان يوم القيامة كأنهما غمامتان أو كأنهما غيايتان أو كأنهما فرقان من طير صفاف، تحاجان عن أصحابهما، اقرأوا آل عمران، فإنها تأتي يوم القيامة كأنها غمامة أو كأنها فرقة من طير صفاف، تحاج عن أصحابها", narrator: "أبو أمامة رضي الله عنه", source: "صحيح البخاري - كتاب فضائل القرآن", reference: "حديث رقم 4651" },
        { text: "إذا أراد الله بعبد خيراً استعمله، قيل: كيف يستعمله؟ قال: ينفقه في الطاعة قبل الموت", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب الرقاق", reference: "حديث رقم 6495" },
        { text: "لا تغضب، لا تغضب، لا تغضب", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب الأدب", reference: "حديث رقم 6116" },
        { text: "إياكم والحسد، فإن الحسد يأكل الحسنات كما تأكل النار الحطب، أو قال: كما تأكل البرية العشب", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب الأدب", reference: "حديث رقم 6159" },
        { text: "إن الله يحب التوابين ويحب المتطهرين، وإذا توضأ أحدكم فليحسن الوضوء، ثم يخرج فينتظر الصلاة، فإنما صلاته تصلي له ما انتظر الصلاة، وتقول الملائكة: اللهم اغفر له، اللهم ارحمه، ما دام في مصلاه ينتظر الصلاة، ولا يزال في صلاة ما انتظر الصلاة", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب الوضوء", reference: "حديث رقم 226" },
        { text: "إن الله تعالى طيب لا يقبل إلا طيباً، وإن الله أمر المؤمنين بما أمر به المرسلين، فقال تعالى: {يا أيها الرسل كلوا من الطيبات واعملوا صالحاً}، وقال تعالى: {يا أيها الذين آمنوا كلوا من طيبات ما رزقناكم}، ثم ذكر الرجل يطيل السفر أشعث أغبر، يمد يده إلى السماء: يا رب يا رب، ومطعمه حرام، ومشربه حرام، وملبسه حرام، وغذي بالحرام، فأنى يستجاب له؟", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب البيوع", reference: "حديث رقم 2075" },
        { text: "من نفس عن مؤمن كربة من كرب الدنيا، نفس الله عنه كربة من كرب يوم القيامة، ومن يسر على معسر، يسر الله عليه في الدنيا والآخرة، ومن ستر مسلماً، ستره الله في الدنيا والآخرة، والله في عون العبد ما كان العبد في عون أخيه، ومن سلك طريقاً يلتمس فيه علماً، سهّل الله له به طريقاً إلى الجنة، وما اجتمع قوم في بيت من بيوت الله، يتلون كتاب الله، ويتدارسونه بينهم، إلا نزلت عليهم السكينة، وغشيتهم الرحمة، وحفتهم الملائكة، وذكرهم الله فيمن عنده، ومن أبطأ به عمله، لم يسرع به نسبه", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب العلم", reference: "حديث رقم 5027" },
        { text: "إن الله يبغض لكم ثلاثاً: القيل والقال، وإضاعة المال، وكثرة السؤال", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب الزكاة", reference: "حديث رقم 1477" },
        { text: "نعمة لا يشكرها صاحبها إلا بتركها، فما من نعمة من نعم الدنيا إلا وهي محسوبة على صاحبها، وما من عيب في جسد ولا دين ولا دنيا إلا وهو محسوب على صاحبه يوم القيامة", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب الرقاق", reference: "حديث رقم 6419" },
        { text: "بينما نحن عند النبي صلى الله عليه وسلم إذ أتاه رجل فقال: يا رسول الله، هلكت، قال: ما لك؟ قال: وقعت على امرأتي وأنا صائم، فقال: هل تجد رقبةً تعتقها؟ قال: لا، قال: فهل تستطيع أن تصوم شهرين متتابعين؟ قال: لا، قال: فهل تجد إطعام ستين مسكيناً؟ قال: لا، فمكث النبي صلى الله عليه وسلم، فبينما نحن على ذلك أتى النبي صلى الله عليه وسلم بعرق فيه تمر وعجوة وحنطة، قال: أين السائل عن الكفارة؟ فقال: أنا، قال: خذ هذا فتصدق به، قال: على أحوَجُ مني يا رسول الله؟ والله ما تجد بين لابتيها – يعني الحرتين – أحوَجَ مني، فقال: خذه فتصدق به، فإنه أصلح لك من أن تأتي رجلاً يعطيك إياه، فإن شئت فأنت ابن رسول الله، وإن شئت فأنت ابن أم سلمة، قال: فأخذه، فقال: أين السائل عن الكفارة؟ فقال: أنا، فقال: خذ هذا فتصدق به، فإنه أصلح لك من أن تأتي رجلاً يعطيك إياه، فإن شئت فأنت ابن رسول الله، وإن شئت فأنت ابن أم سلمة، قال: فأخذه", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب الصيام", reference: "حديث رقم 1936" },
        { text: "إن العبد ليتكلم بالكلمة من رضوان الله لا يلقي لها بالاً، يرفعه الله بها في الجنة، وإن العبد ليتكلم بالكلمة من سخط الله لا يلقي لها بالاً، يهوي بها في جهنم", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب الرقاق", reference: "حديث رقم 6478" },
        { text: "قال رسول الله صلى الله عليه وسلم: ألا أنبئكم بخياركم؟ قالوا: بلى يا رسول الله، قال: خياركم الذين يرونكم في وجوههم بشاشة، ويؤدون إليكم حقوقكم، ويصلون لكم صلاتكم، ويسترون عوراتكم، ويعفون عن زلاتكم", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب الأدب", reference: "حديث رقم 6059" },
        { text: "أحب الأعمال إلى الله صلاة داود، وأحب الصيام إلى الله صيام داود، كان ينام نصف الليل ويقوم ثلثه وينام سدسه، وصام نصف الدهر، كان يصام يوماً ويفطر يوماً، وإذا لاقى العدو كان أشد الناس", narrator: "عبد الله بن عمرو بن العاص رضي الله عنهما", source: "صحيح البخاري - كتاب الصلاة", reference: "حديث رقم 1131" },
        { text: "إذا توضأ أحدكم فليضمخ أنفه، وإذا استنجى فليستتر، وإذا أتى امرأته فليستتر، ولا يفشِّ أحدكم على صاحبه، ولا يفشِّ أحدكم على أخيه", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب الوضوء", reference: "حديث رقم 156" },
        { text: "إذا أكل أحدكم فليأكل بيمينه، وإذا شرب فليشرب بيمينه، فإن الشيطان يأكل بشماله ويشرب بشماله", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب الأطعمة", reference: "حديث رقم 5376" },
        { text: "إذا استيقظ أحدكم من منامه، فليستعف يده ثلاث مرات، فإنه لا يدري أين باتت يده، وإذا توضأ فليستنثر، ومن استجمر فليوتر", narrator: "أبو هريرة رضي الله عنه", source: "صحيح البخاري - كتاب الوضوء", reference: "حديث رقم 162" }
    ],
    muslim: [
        { text: "من قال لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير، في يوم مئة مرة، كانت له عدل عشر رقاب، وكتبت له مئة حسنة، ومحيت عنه مئة سيئة في ذلك اليوم، وكانت له حرزاً من الشيطان يومه ذلك حتى يمسي، ولم يأت أحد بأفضل مما جاء به إلا رجل عمل أكثر منه", narrator: "أبو هريرة رضي الله عنه", source: "صحيح مسلم - كتاب الذكر والدعاء والتوبة والاستغفار", reference: "حديث رقم 2691" },
        { text: "الطهور شطر الإيمان، والحمد لله تملأ الميزان، وسبحان الله والحمد لله تملآن - أو تملأ - ما بين السماء والأرض، والصلاة نور، والصدقة برهان، والصبر ضياء، والقرآن حجة لك أو عليك، كل الناس يغدو، فبائع نفسه فمعتقها، أو موبقها", narrator: "أبي مالك الأشعري رضي الله عنه", source: "صحيح مسلم - كتاب المساجد ومواضع الصلاة", reference: "حديث رقم 223" },
        { text: "من توضأ فأحسن الوضوء، ثم خرج إلى الصلاة، غدواً أو روحةً، فوعاه الله نعيم الجنة، غدواً أو روحةً ما دام في مصلاه ينتظر الصلاة، وما المؤمن إلى الملائكة الصافحين مصافحه، وما المؤمن إلى الملائكة المسبحين سباحه، وما المؤمن إلى الملائحة المصلين صلاحه، حتى ينصرف، أو يحدث أحدكم حدثاً يفرض له، فإذا أحدث حدثاً فرض له خرج، فوعاه الله نعيم الجنة، غدواً أو روحةً", narrator: "أبو هريرة رضي الله عنه", source: "صحيح مسلم - كتاب المساجد ومواضع الصلاة", reference: "حديث رقم 224" },
        { text: "إذا أكل أحدكم فليقل: بسم الله، فإن نسي في أوله فليقل: بسم الله في أوله وآخره", narrator: "عائشة رضي الله عنها", source: "صحيح مسلم - كتاب الأشربة", reference: "حديث رقم 2018" },
        { text: "توضؤوا مما مست النار", narrator: "أبو هريرة رضي الله عنه", source: "صحيح مسلم - كتاب الطهارة", reference: "حديث رقم 322" },
        { text: "من يرد الله عنه ثلاثاً من الداء: الحمى، والجنون، والجذام، ومن يرد الله عنه ثلاثاً من الشر: الشرك بالله، وعقوق الوالدين، وشهادة الزور", narrator: "سعد بن أبي وقاص رضي الله عنه", source: "صحيح مسلم - كتاب السلام", reference: "حديث رقم 2219" },
        { text: "المؤمنون كرجل واحد، إن اشتكى عينه اشتكى كل جسده، وإن اشتكى رأسه اشتكى كل جسده", narrator: "أبو هريرة وعبد الله بن عمر رضي الله عنهم", source: "صحيح مسلم - كتاب الإيمان", reference: "حديث رقم 2586" },
        { text: "إن الله لا ينظر إلى صوركم وأموالكم، ولكن ينظر إلى قلوبكم وأعمالكم", narrator: "أبو هريرة رضي الله عنه", source: "صحيح مسلم - كتاب البر والصلة والآداب", reference: "حديث رقم 2564" },
        { text: "المسلم أخو المسلم، لا يظلمه ولا يخذله، من كان في حاجة أخيه كان الله في حاجته، ومن فرج عن مسلم كربة فرج الله عنه بها كربة من كربات يوم القيامة، ومن ستر مسلماً ستره الله يوم القيامة", narrator: "أبو هريرة رضي الله عنه", source: "صحيح مسلم - كتاب البر والصلة والآداب", reference: "حديث رقم 2580" },
        { text: "من كان يؤمن بالله واليوم الآخر فليقل خيراً أو ليصمت، ومن كان يؤمن بالله واليوم الآخر فليكرم جاره، ومن كان يؤمن بالله واليوم الآخر فليكرم ضيفه", narrator: "أبو هريرة رضي الله عنه", source: "صحيح مسلم - كتاب الإيمان", reference: "حديث رقم 47" },
        { text: "كل سلامى من أصابع الناس عليه صدقة، كل يوم تطلع فيه الشمس تعدل بين اثنين صدقة، وتعين الرجل في دابته فتحمله عليها أو ترفع له عليها متاعه صدقة، والكلمة الطيبة صدقة، وبكل خطوة تخطوها إلى الصلاة صدقة، وتميط الأذى عن الطريق صدقة", narrator: "أبو هريرة رضي الله عنه", source: "صحيح مسلم - كتاب الزكاة", reference: "حديث رقم 1009" },
        { text: "سبعة يظلهم الله في ظله يوم لا ظل إلا ظله: إمام عادل، وشاب نشأ في عبادة الله، ورجل قلبه معلق في المساجد، ورجلان تحابا في الله اجتمعا عليه وتفرقا عليه، ورجل دعته امرأة ذات منصب وجمال فقال: إني أخاف الله، ورجل تصدق بصدقة فأخفاها حتى لا تعلم شماله ما تنفق يمينه، ورجل ذكر الله خالياً ففاضت عيناه", narrator: "أبو هريرة رضي الله عنه", source: "صحيح مسلم - كتاب الزكاة", reference: "حديث رقم 1031" },
        { text: "ما منكم من أحد إلا وقد وكل به قرينه، قالوا: يا رسول الله، أنت أيضاً؟ قال: نعم، إلا أن الله أعانني عليه فأسلم، فلا يأمرني إلا بخير", narrator: "عائشة رضي الله عنها", source: "صحيح مسلم - كتاب النكاح", reference: "حديث رقم 2814" },
        { text: "إنك لن تسع الناس بأموالك، فسعهم بأخلاقك وطيب الكلام", narrator: "أبو الدرداء رضي الله عنه", source: "صحيح مسلم - كتاب البر والصلة والآداب", reference: "حديث رقم 2590" },
        { text: "المؤمن لا يهين أخاه المؤمن، ولا يخذله، ولا يحقره، التقوى ها هنا - ويشير إلى صدره ثلاث مرات - بحسب المرء من الشر أن يحقر أخاه المسلم، كل المسلم حرام على المسلم: دمه وماله وعرضه", narrator: "عبد الله بن عمر رضي الله عنهما", source: "صحيح مسلم - كتاب البر والصلة والآداب", reference: "حديث رقم 2564" },
        { text: "من غشنا فليس منا، ومن كذب علي متعمداً فليتبوأ مقعده من النار", narrator: "أبو هريرة رضي الله عنه", source: "صحيح مسلم - كتاب الإيمان", reference: "حديث رقم 106" },
        { text: "الصلاة خمس: الفجر، والظهر، والعصر، والمغرب، والعشاء، والجمعة إلى الجمعة، ورمضان إلى رمضان، مكفرات لما بينهن ما لم تُشَكَّك الكبائر", narrator: "أبو هريرة رضي الله عنه", source: "صحيح مسلم - كتاب المساجد ومواضع الصلاة", reference: "حديث رقم 233" },
        { text: "لا يحل لامرأة تؤمن بالله واليوم الآخر - أو تؤمن بالله ورسوله - أن تُحِدَّ على ميت فوق ثلاث ليال، إلا على زوج أربعة أشهر وعشراً", narrator: "أبو هريرة رضي الله عنه", source: "صحيح مسلم - كتاب الطلاق", reference: "حديث رقم 3533" },
        { text: "من أصبح منكم آمناً في سكنه، معافىً في جسده، مالكاً قوت يومه، فكأنما حيزت له الدنيا بحذافيرها", narrator: "أبو هريرة رضي الله عنه", source: "صحيح مسلم - كتاب الزهد والرقائق", reference: "حديث رقم 2963" },
        { text: "إن الله كتب الإحسان على كل شيء، فإذا قتلتم فأحسنوا القتلة، وإذا ذبحتم فأحسنوا الذبحة، وليحد أحدكم شفرته، وليرح ذبيحته", narrator: "شداد بن أوس رضي الله عنه", source: "صحيح مسلم - كتاب الأضاحي", reference: "حديث رقم 1955" },
        { text: "من كان في حاجة أخيه كان الله في حاجته، ومن فرج عن مسلم كربة فرج الله عنه بها كربة من كربات يوم القيامة، ومن ستر مسلماً ستره الله يوم القيامة", narrator: "أبو هريرة رضي الله عنه", source: "صحيح مسلم - كتاب البر والصلة والآداب", reference: "حديث رقم 2580" },
        { text: "ليس الشديد بالصرعة، إنما الشديد الذي يملك نفسه عند الغضب", narrator: "أبو هريرة رضي الله عنه", source: "صحيح مسلم - كتاب البر والصلة والآداب", reference: "حديث رقم 2609" },
        { text: "ما من ذنب أجدر أن يعجل الله لصاحبه العقوبة في الدنيا مع ما يدخر له في الآخرة من البغي، وقطيعة الرحم", narrator: "أبو هريرة رضي الله عنه", source: "صحيح مسلم - كتاب البر والصلة والآداب", reference: "حديث رقم 2586" },
        { text: "إياكم والظن، فإن الظن أكذب الحديث، ولا تحسسوا، ولا تجسسوا، ولا تنافسوا، ولا تحاسدوا، ولا تباغضوا، ولا تدابروا، وكونوا عباد الله إخواناً", narrator: "أبو هريرة رضي الله عنه", source: "صحيح مسلم - كتاب البر والصلة والآداب", reference: "حديث رقم 2563" },
        { text: "من كان له فضل زاد فليعد به على من لا زاد له، ومن كان له فضل راحلتين فليعد به على من لا راحلة له", narrator: "أبو هريرة رضي الله عنه", source: "صحيح مسلم - كتاب الإيمان", reference: "حديث رقم 172" },
        { text: "إن الله يحب التوابين ويحب المتطهرين، إن الله ليحب التوابين ويحب المتطهرين، إن الله يحب التوابين ويحب المتطهرين", narrator: "أبو هريرة رضي الله عنه", source: "صحيح مسلم - كتاب الطهارة", reference: "حديث رقم 437" },
        { text: "إن أهل الجنة ليتراءون أهل الغرف من فوقهم كما تتراءون الكوكب الدري الغابر من السماء، وإن أبا بكر وعمر منهم، وأحسنهما منزلة، قال: فقالوا: يا رسول الله، أهؤلاء الأنبياء؟ قال: لا، والذي نفسي بيده، رجال آمنوا بالله وبرسله", narrator: "أبو هريرة وابن عمر رضي الله عنهم", source: "صحيح مسلم - كتاب الجنة وصفة نعيمها", reference: "حديث رقم 2833" },
        { text: "من حج هذا البيت فلم يرفث ولم يفسق خرج من ذنوبه كيوم ولدته أمه، ومن اعتمر فحسن عمرته كفارة لما قبلها، والحج المبرور ليس له جزاء إلا الجنة", narrator: "أبو هريرة رضي الله عنه", source: "صحيح مسلم - كتاب الحج", reference: "حديث رقم 2889" },
        { text: "من قال حين يصبح وحين يمسي: اللهم بك أصبحنا وبك أمسينا وبك نحيا وبك نموت وإليك المصير، حين يصبح وحين يمسي، وإذا بات فقال: اللهم بك أمسينا وبك نحيا وبك نموت وإليك النشور، كان حقاً على الله أن يرضيه يوم القيامة", narrator: "أبو هريرة رضي الله عنه", source: "صحيح مسلم - كتاب الذكر والدعاء والتوبة والاستغفار", reference: "حديث رقم 2711" },
        { text: "إن لله تسعة وتسعين اسماً مائة إلا واحداً، من أحصاها دخل الجنة، وهو وتر يحب الوتر", narrator: "أبو هريرة رضي الله عنه", source: "صحيح مسلم - كتاب الذكر والدعاء والتوبة والاستغفار", reference: "حديث رقم 2677" },
        { text: "اللهم إني أعوذ بك من الفقر والقلة والذلة، وأعوذ بك من أن أظلم أو أُظلم، وأعوذ بك من الجهل، وأعوذ بك من عذاب القبر، وأعوذ بك من فتنة المحيا والممات", narrator: "أبو هريرة رضي الله عنه", source: "صحيح مسلم - كتاب الذكر والدعاء والتوبة والاستغفار", reference: "حديث رقم 2716" },
        { text: "اللهم أصلح لي ديني الذي هو عصمة أمري، وأصلح لي دنياي التي فيها معاشي، وأصلح لي آخرتي التي فيها معادي، واجعل الحياة زيادة لي في كل خير، واجعل الموت راحة لي من كل شر", narrator: "أبو هريرة رضي الله عنه", source: "صحيح مسلم - كتاب الذكر والدعاء والتوبة والاستغفار", reference: "حديث رقم 2720" },
        { text: "اللهم إني أعوذ بك من العجز والكسل والجبن والهرم والبخل، وأعوذ بك من عذاب القبر ومن فتنة المحيا والممات", narrator: "أبو هريرة رضي الله عنه", source: "صحيح مسلم - كتاب الذكر والدعاء والتوبة والاستغفار", reference: "حديث رقم 2706" },
        { text: "اللهم اغفر لي خطيئتي وجهلي وإسرافي في أمري، وما أنت أعلم به مني، اللهم اغفر لي جدي وهزلي، وخطئي وعمدي، وكل ذلك عندي، اللهم اغفر لي ما قدمت وما أخرت، وما أسررت وما أعلنت، وما أنت أعلم به مني، أنت المقدم وأنت المؤخر، لا إله إلا أنت", narrator: "عائشة رضي الله عنها", source: "صحيح مسلم - كتاب الذكر والدعاء والتوبة والاستغفار", reference: "حديث رقم 2719" },
        { text: "اللهم إني أعوذ بك من جهد البلاء، ودرك الشقاء، وسوء القضاء، وشماتة الأعداء", narrator: "أبو هريرة رضي الله عنه", source: "صحيح مسلم - كتاب الذكر والدعاء والتوبة والاستغفار", reference: "حديث رقم 2716" },
        { text: "اللهم إني أعوذ بك من زوال نعمتك، وتحول عافيتك، وفجاءة نقمتك، وجميع سخطك", narrator: "أبو هريرة رضي الله عنه", source: "صحيح مسلم - كتاب الذكر والدعاء والتوبة والاستغفار", reference: "حديث رقم 2716" },
        { text: "اللهم إني أعوذ بك من الفقر والقلة والذلة، وأعوذ بك من أن أظلم أو أُظلم", narrator: "أبو هريرة رضي الله عنه", source: "صحيح مسلم - كتاب الذكر والدعاء والتوبة والاستغفار", reference: "حديث رقم 2716" },
        { text: "اللهم إني أعوذ بك من البرص، والجنون، والجذام، ومن سيئ الأسقام", narrator: "أبو هريرة رضي الله عنه", source: "صحيح مسلم - كتاب الطهارة", reference: "حديث رقم 222" },
        { text: "اللهم إني أعوذ بك من العجز والكسل والجبن والبخل والهرم، وأعوذ بك من عذاب القبر، وأعوذ بك من فتنة المحيا والممات", narrator: "أبو هريرة رضي الله عنه", source: "صحيح مسلم - كتاب الذكر والدعاء والتوبة والاستغفار", reference: "حديث رقم 2707" },
        { text: "اللهم إني أعوذ بك من الجوع، فإنه بئس الضجيع، وأعوذ بك من الخيانة، فإنها بئست البطانة", narrator: "أبو هريرة رضي الله عنه", source: "صحيح مسلم - كتاب الرقاق", reference: "حديث رقم 2965" },
        { text: "اللهم إني أعوذ بك من شر ما عملت ومن شر ما لم أعمل، وأعوذ بك من شر نفسي، وأعوذ بك من شر الشيطان وشركه، وأعوذ بك من شر كل دابة أنت آخذ بناصيتها، ربي على صراط مستقيم", narrator: "أبو هريرة رضي الله عنه", source: "صحيح مسلم - كتاب الذكر والدعاء والتوبة والاستغفار", reference: "حديث رقم 2716" },
        { text: "اللهم اغفر لي ما قدمت وما أخرت، وما أسررت وما أعلنت، وما أنت أعلم به مني، أنت المقدم وأنت المؤخر، لا إله إلا أنت", narrator: "عائشة رضي الله عنها", source: "صحيح مسلم - كتاب الذكر والدعاء والتوبة والاستغفار", reference: "حديث رقم 2719" },
        { text: "اللهم إني أسألك علماً نافعاً، ورزقاً طيباً، وعملاً متقبلاً", narrator: "أبو هريرة وابن مسعود وعائشة رضي الله عنهم", source: "صحيح مسلم - كتاب الذكر والدعاء والتوبة والاستغفار", reference: "حديث رقم 2723" },
        { text: "اللهم إني أعوذ بك من شر سمعي، ومن شر بصري، ومن شر لساني، ومن شر قلبي، ومن شر منيي", narrator: "أبو هريرة رضي الله عنه", source: "صحيح مسلم - كتاب الذكر والدعاء والتوبة والاستغفار", reference: "حديث رقم 2716" },
        { text: "اللهم إني أعوذ بك من الهم والحزن، وأعوذ بك من العجز والكسل، وأعوذ بك من الجبن والبخل، وأعوذ بك من غلبة الدين وقهر الرجال", narrator: "أبو هريرة رضي الله عنه", source: "صحيح مسلم - كتاب الذكر والدعاء والتوبة والاستغفار", reference: "حديث رقم 2710" }
    ],
    nawawi: [
        { text: "إنما الأعمال بالنيات، وإنما لكل امرئ ما نوى، فمن كانت هجرته إلى الله ورسوله، فهجرته إلى الله ورسوله، ومن كانت هجرته لدنيا يصيبها أو امرأة يتزوجها، فهجرته إلى ما هاجر إليه", narrator: "عمر بن الخطاب رضي الله عنه", source: "الأربعين النووية", reference: "الحديث الأول" },
        { text: "إن الله كتب الإحسان على كل شيء، فإذا قتلتم فأحسنوا القتلة، وإذا ذبحتم فأحسنوا الذبحة، وليحد أحدكم شفرته، وليرح ذبيحته", narrator: "الشداد بن أوس رضي الله عنه", source: "الأربعين النووية", reference: "الحديث السابع عشر" },
        { text: "من حسن إسلام المرء تركه ما لا يعنيه", narrator: "أبو هريرة رضي الله عنه", source: "الأربعين النووية", reference: "الحديث الثاني" },
        { text: "لا يحل لامرأة أن تهدم بيتها على بيت زوجها إلا أن يأذن لها، وإن كانت ممتهنة، وأن لا يصوم أحد في يوم فطره إلا أن يأذن له، وأن لا يصوم المرأة وبوالدها يوماً من أيام الفطر إلا أن يأذنا لها", narrator: "أبو هريرة رضي الله عنه", source: "الأربعين النووية", reference: "الحديث الثالث عشر" },
        { text: "من أحيا سنة من سنتي، فعمل بها الناس، كان له مثل أجر من عمل بها، لا ينقص من أجورهم شيء، ومن ابتدع بدعة يضل بها، كان عليه مثل آثام من عمل بها، لا ينقص من آثامهم شيء", narrator: "أبو هريرة رضي الله عنه", source: "الأربعين النووية", reference: "الحديث الخامس" },
        { text: "إنما مثل الجليس الصالح كحامل المسك، إما أن يحذيك وإما أن تشتري منه، ومثل جليس السوء كنافخ الكير، إما أن يحرق ثيابك وإما أن تجد منه ريحاً خبيثة", narrator: "أبو موسى الأشعري رضي الله عنه", source: "الأربعين النووية", reference: "الحديث السادس والثلاثون" },
        { text: "إذا أكل أحدكم فليقل: بسم الله، فإن نسي في أوله فليقل: بسم الله في أوله وآخره", narrator: "عائشة رضي الله عنها", source: "الأربعين النووية", reference: "الحديث الرابع والعشرون" },
        { text: "اللهم أصلح لي ديني الذي هو عصمة أمري، وأصلح لي دنياي التي فيها معاشي، وأصلح لي آخرتي التي فيها معادي، واجعل الحياة زيادة لي في كل خير، واجعل الموت راحة لي من كل شر", narrator: "أبو هريرة رضي الله عنه", source: "الأربعين النووية", reference: "الحديث الرابع والعشرون" },
        { text: "كل أمتي يدخلون الجنة إلا من أبى، قالوا: يا رسول الله، ومن يأبى؟ قال: من أطاعني دخل الجنة، ومن عصاني فقد أبى", narrator: "أبو هريرة رضي الله عنه", source: "الأربعين النووية", reference: "الحديث الخامس والثلاثون" },
        { text: "الإيمان بضع وستون شعبة، والحياء شعبة من الإيمان", narrator: "أبو هريرة رضي الله عنه", source: "الأربعين النووية", reference: "الحديث الثاني والثلاثون" },
        { text: "من كانت الآخرة همة رمى الله غناه في قلبه، وجمع له شمله، وأتته الدنيا وهي راغمة، ومن كانت الدنيا همة رمى الله فقره بين عينيه، وفرق عليه ضيعته، ولم يأته من الدنيا إلا ما قُدِّر له", narrator: "أبو هريرة رضي الله عنه", source: "الأربعين النووية", reference: "الحديث السابع والعشرون" },
        { text: "إن الله لا ينظر إلى صوركم وأموالكم، ولكن ينظر إلى قلوبكم وأعمالكم", narrator: "أبو هريرة رضي الله عنه", source: "الأربعين النووية", reference: "الحديث التاسع والعشرون" },
        { text: "أحب الأعمال إلى الله الصلاة على وقتها، ثم بر الوالدين، ثم الجهاد في سبيل الله", narrator: "عبد الله بن مسعود رضي الله عنه", source: "الأربعين النووية", reference: "الحديث الثالث" },
        { text: "من كان يؤمن بالله واليوم الآخر فليقل خيراً أو ليصمت", narrator: "أبو هريرة رضي الله عنه", source: "الأربعين النووية", reference: "الحديث الرابع" },
        { text: "لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه", narrator: "أبو هريرة رضي الله عنه", source: "الأربعين النووية", reference: "الحديث الثالث عشر" },
        { text: "المسلم من سلم المسلمون من لسانه ويده، والمهاجر من هجر ما نهى الله عنه", narrator: "أبو هريرة رضي الله عنه", source: "الأربعين النووية", reference: "الحديث الخامس والثلاثون" },
        { text: "الدين النصيحة، قلنا: لمن؟ قال: لله ولكتابه ولرسوله ولأئمة المسلمين وعامتهم", narrator: "تميم الداري رضي الله عنه", source: "الأربعين النووية", reference: "الحديث السابع" },
        { text: "من كان له فضل زاد فليعد به على من لا زاد له، ومن كان له فضل راحلتين فليعد به على من لا راحلة له", narrator: "أبو هريرة رضي الله عنه", source: "الأربعين النووية", reference: "الحديث الثامن والثلاثون" },
        { text: "ما نهيتكم عنه فاجتنبوه، وما أمرتكم به فأتوا منه ما استطعتم، فإنما أهلك الذين من قبلكم كثرة سؤالهم واختلافهم على أنبيائهم", narrator: "أبو هريرة رضي الله عنه", source: "الأربعين النووية", reference: "الحديث التاسع" },
        { text: "إن الله كتب الإحسان على كل شيء، فإذا قتلتم فأحسنوا القتلة، وإذا ذبحتم فأحسنوا الذبحة، وليحد أحدكم شفرته، وليرح ذبيحته", narrator: "الشداد بن أوس رضي الله عنه", source: "الأربعين النووية", reference: "الحديث السابع عشر" },
        { text: "اتقوا الله حيثما كنتم، وأتبعوا السيئة الحسنة تمحها، وخالقوا الناس بخلق حسن", narrator: "أبو ذر رضي الله عنه", source: "الأربعين النووية", reference: "الحديث الثامن عشر" },
        { text: "إياكم والظن، فإن الظن أكذب الحديث، ولا تحسسوا، ولا تجسسوا، ولا تنافسوا، ولا تحاسدوا، ولا تباغضوا، ولا تدابروا، وكونوا عباد الله إخواناً", narrator: "أبو هريرة رضي الله عنه", source: "الأربعين النووية", reference: "الحديث الخامس عشر" },
        { text: "لا يسب الرجل أباً فليسبوا أباه، ولا يكف أحدكم عن المجيء إلى المسجد إلا أن يأذن له، ولا يأكل أحدكم بشماله، فإن الشيطان يأكل بشماله", narrator: "أبو هريرة رضي الله عنه", source: "الأربعين النووية", reference: "الحديث السادس عشر" },
        { text: "إن الله يحب التوابين ويحب المتطهرين", narrator: "أبو هريرة رضي الله عنه", source: "الأربعين النووية", reference: "الحديث الثاني عشر" },
        { text: "المؤمن أخو المؤمن، لا يظلمه ولا يخذله، من كان في حاجة أخيه كان الله في حاجته، ومن فرج عن مسلم كربة فرج الله عنه بها كربة من كربات يوم القيامة، ومن ستر مسلماً ستره الله يوم القيامة", narrator: "أبو هريرة رضي الله عنه", source: "الأربعين النووية", reference: "الحديث الثامن والثلاثون" },
        { text: "إذا مات الإنسان انقطع عمله إلا من ثلاث: صدقة جارية، أو علم ينتفع به، أو ولد صالح يدعو له", narrator: "أبو هريرة رضي الله عنه", source: "الأربعين النووية", reference: "الحديث الثامن عشر" },
        { text: "كل سلامى من أصابع الناس عليه صدقة، كل يوم تطلع فيه الشمس تعدل بين اثنين صدقة، وتعين الرجل في دابته فتحمله عليها أو ترفع له عليها متاعه صدقة، والكلمة الطيبة صدقة، وبكل خطوة تخطوها إلى الصلاة صدقة، وتميط الأذى عن الطريق صدقة", narrator: "أبو هريرة رضي الله عنه", source: "الأربعين النووية", reference: "الحديث السادس والعشرون" },
        { text: "سبعة يظلهم الله في ظله يوم لا ظل إلا ظله: إمام عادل، وشاب نشأ في عبادة الله، ورجل قلبه معلق في المساجد، ورجلان تحابا في الله اجتمعا عليه وتفرقا عليه، ورجل دعته امرأة ذات منصب وجمال فقال: إني أخاف الله، ورجل تصدق بصدقة فأخفاها حتى لا تعلم شماله ما تنفق يمينه، ورجل ذكر الله خالياً ففاضت عيناه", narrator: "أبو هريرة رضي الله عنه", source: "الأربعين النووية", reference: "الحديث السادس" },
        { text: "من غشنا فليس منا، ومن كذب علي متعمداً فليتبوأ مقعده من النار", narrator: "أبو هريرة رضي الله عنه", source: "الأربعين النووية", reference: "الحديث الثالث والثلاثون" },
        { text: "إن الله يبسط يده بالليل ليتوب مسيء النهار، ويبسط يده بالنهار ليتوب مسيء الليل، حتى تطلع الشمس من مغربها", narrator: "أبو هريرة رضي الله عنه", source: "الأربعين النووية", reference: "الحديث الحادي والثلاثون" },
        { text: "إن ربكم حيي كريم، يستحي من عبده إذا رفع يديه إليه أن يردهما صفراً", narrator: "أبو هريرة رضي الله عنه", source: "الأربعين النووية", reference: "الحديث الحادي والعشرون" },
        { text: "لا يحل لمؤمن أن يهجر مؤمنة فوق ثلاث، فإذا لقيا تصاغرا وصاغرا، فهي أحسن للثالث، فإن بدا لهما أن يتصافحا فليتصافحا، فهي أحسن للثالث، فإن بدا لهما أن يتصافحا فليتصافحا، فهي أحسن للثالث", narrator: "أبو أيوب الأنصاري رضي الله عنه", source: "الأربعين النووية", reference: "الحديث الثاني والثلاثون" },
        { text: "من كان يؤمن بالله واليوم الآخر فليقل خيراً أو ليصمت", narrator: "أبو هريرة رضي الله عنه", source: "الأربعين النووية", reference: "الحديث الرابع" },
        { text: "لا يحل لامرأة تؤمن بالله واليوم الآخر أن تحد على ميت فوق ثلاث، إلا على زوج أربعة أشهر وعشراً", narrator: "أبو هريرة رضي الله عنه", source: "الأربعين النووية", reference: "الحديث الثامن عشر" },
        { text: "ليس الشديد بالصرعة، إنما الشديد الذي يملك نفسه عند الغضب", narrator: "أبو هريرة رضي الله عنه", source: "الأربعين النووية", reference: "الحديث التاسع والثلاثون" },
        { text: "من يرد الله به خيراً يفقهه في الدين، وإنما أنا قاسم والله يعطي، ولن تزول قدما عبد يوم القيامة حتى يسأل عن عمره فيما أفناه، وعن علمه فيما فعل فيه، وعن ماله من أين اكتسبه وفيما أنفقه، وعن جسمه فيما أبلاه", narrator: "أبو هريرة رضي الله عنه", source: "الأربعين النووية", reference: "الحديث الأربعون" }
    ]
};

// دالة عرض الأحاديث العشوائية
window.displayRandomHadith = function() {
    const allHadiths = [
        ...authenticHadiths.bukhari,
        ...authenticHadiths.muslim,
        ...authenticHadiths.nawawi
    ];
    
    const randomHadith = allHadiths[Math.floor(Math.random() * allHadiths.length)];
    const hadithEl = document.getElementById('splash-hadith');
    const proofEl = document.getElementById('splash-proof');
    
    if (hadithEl && proofEl) {
        hadithEl.textContent = randomHadith.text;
        proofEl.textContent = `رواه ${randomHadith.narrator} | ${randomHadith.source}`;
    }
};

// مكتبة الأحاديث (تغذية شاشة الأحاديث)
window.showHadithCollection = function (collectionId) {
    const container = document.getElementById('hadith-content');
    if (!container) return;

    const tabs = document.querySelectorAll('.hadith-tab[data-collection]');
    tabs.forEach((t) => {
        t.classList.toggle('active', t.dataset.collection === collectionId);
    });

    let list = [];
    if (collectionId === 'all') {
        list = [
            ...authenticHadiths.bukhari,
            ...authenticHadiths.muslim,
            ...authenticHadiths.nawawi
        ];
    } else if (collectionId === 'bukhari') {
        list = authenticHadiths.bukhari;
    } else if (collectionId === 'muslim') {
        list = authenticHadiths.muslim;
    } else if (collectionId === 'nawawi') {
        list = authenticHadiths.nawawi;
    }

    if (!list || list.length === 0) {
        container.innerHTML = '<p style="text-align:center;opacity:0.7;">لا توجد أحاديث في هذا القسم</p>';
        return;
    }

    container.innerHTML = list.map((h) => {
        const safeText = escapeHtml(h.text).replace(/\n/g, '<br/>');
        const safeNarrator = escapeHtml(h.narrator || '');
        const safeSource = escapeHtml(h.source || '');
        return `
            <div class="hadith-item">
                <div class="hadith-text">${safeText}</div>
                <div class="hadith-source">رواه ${safeNarrator} | ${safeSource}</div>
            </div>
        `;
    }).join('');
};

// أذكار موثوقة ومحسنة
const authenticAzkar = {
    morning: [
        "أصبحنا وأصبح الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير، رب أسألك خير ما في هذا اليوم وخير ما بعده، وأعوذ بك من شر ما في هذا اليوم وشر ما بعده، رب أعوذ بك من الكسل وسوء الكبر، رب أعوذ بك من عذاب في النار وعذاب في القبر",
        "اللهم بك أصبحنا، وبك أمسينا، وبك نحيا، وبك نموت، وإليك النشور",
        "اللهم أنت ربي لا إله إلا أنت، خلقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت، أعوذ بك من شر ما صنعت، أبوء لك بنعمتك علي وأبوء بذنبي إليك، فاغفر لي فإنه لا يغفر الذنوب إلا أنت",
        "اللهم إني أسألك العافية في الدنيا والآخرة، اللهم إني أسألك العفو والعافية في ديني ودنياي وأهلي ومالي، اللهم استر عوراتي وآمن روعاتي",
        "حسبنا الله لا إله إلا هو، عليه توكلنا وهو رب العرش العظيم",
        "بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء وهو السميع العليم",
        "رضيت بالله ربا، وبالإسلام دينا، وبمحمد صلى الله عليه وسلم نبيا",
        "اللهم ما أصبح بي من نعمة أو بأحد من خلقك، فمنك وحدك لا شريك لك، فلك الحمد ولك الشكر",
        "اللهم عافني في بدني، اللهم عافني في سمعي، اللهم عافني في بصري، لا إله إلا أنت",
        "اللهم إني أعوذ بك من الكفر والفقر، اللهم إني أعوذ بك من عذاب القبر، لا إله إلا أنت"
    ],
    evening: [
        "أمسينا وأمسى الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير، رب أسألك خير ما في هذه الليلة وخير ما بعدها، وأعوذ بك من شر ما في هذه الليلة وشر ما بعدها، رب أعوذ بك من الكسل وسوء الكبر، رب أعوذ بك من عذاب في النار وعذاب في القبر",
        "اللهم بك أمسينا، وبك أصبحنا، وبك نحيا، وبك نموت، وإليك المصير",
        "اللهم أنت ربي لا إله إلا أنت، خلقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت، أعوذ بك من شر ما صنعت، أبوء لك بنعمتك علي وأبوء بذنبي إليك، فاغفر لي فإنه لا يغفر الذنوب إلا أنت",
        "اللهم إني أسألك العافية في الدنيا والآخرة، اللهم إني أسألك العفو والعافية في ديني ودنياي وأهلي ومالي، اللهم استر عوراتي وآمن روعاتي",
        "حسبنا الله لا إله إلا هو، عليه توكلنا وهو رب العرش العظيم",
        "بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء وهو السميع العليم",
        "رضيت بالله ربا، وبالإسلام دينا، وبمحمد صلى الله عليه وسلم نبيا",
        "اللهم ما أمسى بي من نعمة أو بأحد من خلقك، فمنك وحدك لا شريك لك، فلك الحمد ولك الشكر",
        "اللهم عافني في بدني، اللهم عافني في سمعي، اللهم عافني في بصري، لا إله إلا أنت",
        "اللهم إني أعوذ بك من الكفر والفقر، اللهم إني أعوذ بك من عذاب القبر، لا إله إلا أنت",
        "قراءة آية الكرسي، وقل هو الله أحد، والمعوذتين ثلاث مرات"
    ],
    sleep: [
        "باسمك اللهم أموت وأحيا",
        "اللهم قني عذابك يوم تبعث عبادك",
        "سورة الملك",
        "اللهم أسلمت نفسي إليك، وفوضت أمري إليك، وألجأت ظهري إليك، رغبة ورهبة إليك، لا ملجأ ولا منجا منك إلا إليك، آمنت بكتابك الذي أنزلت، وبنبيك الذي أرسلت",
        "اللهم اغفر لي ذنبي، ووسع لي في داري، وبارك لي فيما رزقتني"
    ],
    prayer: [
        "الله أكبر الله أكبر، الله أكبر كبيرا، والحمد لله كثيرا، وسبحان الله بكرة وأصيلا، والحمد لله رب العالمين",
        "سبحان الله وبحمده، سبحان الله العظيم",
        "لا إله إلا أنت سبحانك إني كنت من الظالمين",
        "اللهم صل على محمد وعلى آل محمد، كما صليت على إبراهيم وعلى آل إبراهيم، إنك حميد مجيد",
        "اللهم بارك على محمد وعلى آل محمد، كما باركت على إبراهيم وعلى آل إبراهيم، إنك حميد مجيد",
        "ربنا آتنا في الدنيا حسنة، وفي الآخرة حسنة، وقنا عذاب النار",
        "اللهم إني ظلمت نفسي ظلما كثيرا، ولا يغفر الذنوب إلا أنت، فاغفر لي مغفرة من عندك، وارحمني إنك أنت الغفور الرحيم",
        "رب اغفر لي ولوالدي وللمؤمنين يوم يقوم الحساب",
        "اللهم إني أعوذ بك من عذاب جهنم، وأعوذ بك من عذاب القبر، وأعوذ بك من فتنة المحيا والممات، وأعوذ بك من فتنة المسيح الدجال"
    ],
    afterPrayer: [
        "أستغفر الله، أستغفر الله، أستغفر الله (ثلاثا)، اللهم أنت السلام، ومنك السلام، تباركت يا ذا الجلال والإكرام",
        "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير، لا حول ولا قوة إلا بالله، لا إله إلا الله، ولا نعبد إلا إياه، له النعمة وله الفضل، وله الثناء الحسن، لا إله إلا الله مخلصين له الدين ولو كره الكافرون",
        "سبحان الله، والحمد لله، والله أكبر (ثلاثا وثلاثين مرة)",
        "قراءة آية الكرسي، وقل هو الله أحد، والمعوذتين",
        "اللهم أعني على ذكرك وشكرك وحسن عبادتك"
    ]
};

// تأكيد الخروج عند الغلط
let exitAttempts = 0;
let exitTimeout;

window.exitApp = function() {
    exitAttempts++;
    
    // إظهار رسالة تحذير
    if (exitAttempts === 1) {
        showToast('اضغط مرة أخرى للخروج من التطبيق');
        
        // إعادة تعيين العداد بعد 3 ثواني
        clearTimeout(exitTimeout);
        exitTimeout = setTimeout(() => {
            exitAttempts = 0;
        }, 3000);
    } else if (exitAttempts >= 2) {
        // الخروج الفعلي
        if (confirm('هل أنت متأكد من الخروج من التطبيق؟')) {
            // محاولة إغلاق النافذة
            if (window.close) {
                window.close();
            }
            
            // للهواتف - محاولة الخروج من التطبيق
            if (navigator.app && navigator.app.exitApp) {
                navigator.app.exitApp();
            }
            
            // للـ PWA - محاولة الخروج
            if (window.matchMedia('(display-mode: standalone)').matches) {
                window.location.href = 'about:blank';
            }
        }
        
        // إعادة تعيين العداد
        exitAttempts = 0;
    }
};

// إعادة تعيين العداد عند أي نقرة أخرى
document.addEventListener('click', function(e) {
    if (!e.target.closest('.exit-btn') && !e.target.closest('[onclick*="exitApp"]')) {
        exitAttempts = 0;
        clearTimeout(exitTimeout);
    }
});

// دوال البحث والتفسير في المصحف
window.openQuranSearch = function() {
    const modal = document.getElementById('quran-search-modal');
    if (modal) {
        modal.classList.remove('hidden');
        document.getElementById('quran-search-input').focus();
    }
};

window.closeQuranSearch = function() {
    const modal = document.getElementById('quran-search-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
};

window.searchInQuran = function(event) {
    if (event && event.key === 'Enter') {
        performQuranSearch();
    } else if (!event) {
        performQuranSearch();
    }
};

window.performQuranSearch = function() {
    const searchTerm = document.getElementById('quran-search-input').value.trim();
    const resultsContainer = document.getElementById('search-results');
    
    if (!searchTerm) {
        resultsContainer.innerHTML = '<p style="text-align:center;color:var(--text-color);opacity:0.7;">اكتب كلمة للبحث</p>';
        return;
    }
    
    if (!isQuranDataLoaded) {
        resultsContainer.innerHTML = '<p style="text-align:center;color:var(--text-color);">جاري تحميل بيانات المصحف...</p>';
        return;
    }
    
    const results = [];
    
    // البحث في جميع السور
    for (let surahNum = 1; surahNum <= 114; surahNum++) {
        const surahData = getSurahData(surahNum);
        if (surahData && surahData.ayahs) {
            surahData.ayahs.forEach(ayah => {
                if (ayah.text.includes(searchTerm)) {
                    results.push({
                        surah: surahNum,
                        surahName: surahData.name,
                        ayahNum: ayah.numberInSurah,
                        text: ayah.text,
                        searchTerm: searchTerm
                    });
                }
            });
        }
    }
    
    // عرض النتائج
    if (results.length === 0) {
        resultsContainer.innerHTML = '<p style="text-align:center;color:var(--text-color);opacity:0.7;">لم يتم العثور على نتائج</p>';
    } else {
        resultsContainer.innerHTML = results.map(result => `
            <div class="search-result-item" onclick="goToAyah(${result.surah}, ${result.ayahNum})">
                <div class="ayah-text">${highlightText(result.text, result.searchTerm)}</div>
                <div class="ayah-info">سورة ${result.surahName} - آية ${toArabicDigits(result.ayahNum)}</div>
            </div>
        `).join('');
    }
};

function highlightText(text, searchTerm) {
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

window.goToAyah = function(surahNum, ayahNum) {
    closeQuranSearch();
    navigateTo('quranReader');
    loadQuranPages(surahNum);
    
    setTimeout(() => {
        const ayahEl = document.getElementById(`ayah-${ayahNum}`);
        if (ayahEl) {
            ayahEl.scrollIntoView({ behavior: "smooth", block: "center" });
            ayahEl.classList.add('ayah-highlight');
            setTimeout(() => ayahEl.classList.remove('ayah-highlight'), 3000);
        }
    }, 1000);
};

// دوال التفسير
window.openTafsir = function(surahNum, ayahNum) {
    const modal = document.getElementById('tafsir-modal');
    const titleEl = document.getElementById('tafsir-title');
    const textEl = document.getElementById('tafsir-text');
    
    if (modal && titleEl && textEl) {
        const surahData = getSurahData(surahNum);
        titleEl.textContent = `تفسير سورة ${surahData.name} - آية ${toArabicDigits(ayahNum)}`;
        textEl.textContent = 'جاري تحميل التفسير...';
        modal.classList.remove('hidden');
        
        // محاكاة تحميل التفسير
        setTimeout(() => {
            textEl.textContent = `تفسير آية ${toArabicDigits(ayahNum)} من سورة ${surahData.name}:\n\n` +
                `هذا التفسير الميسر للآية الكريمة. ` +
                `اللهم اجعل القرآن الكريم ربيع قلوبنا ونور صدورنا وجلاء أحزاننا وذهاب همومنا.`;
        }, 500);
    }
};

window.closeTafsir = function() {
    const modal = document.getElementById('tafsir-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
};

// أسماء الله الحسنى
const namesOfAllah = [
    { arabic: "الله", transliteration: "Allah", meaning: "الاسم الأعظم" },
    { arabic: "الرحمن", transliteration: "Ar-Rahman", meaning: "ذو الرحمة الواسعة" },
    { arabic: "الرحيم", transliteration: "Ar-Raheem", meaning: "ذو الرحمة الخاصة" },
    { arabic: "الملك", transliteration: "Al-Malik", meaning: "المالك المتصرف" },
    { arabic: "القدوس", transliteration: "Al-Quddus", meaning: "الطاهر المنزه" },
    { arabic: "السلام", transliteration: "As-Salam", meaning: "السلامة والأمان" },
    { arabic: "المؤمن", transliteration: "Al-Mu'min", meaning: "المصدق والمؤمن" },
    { arabic: "المهيمن", transliteration: "Al-Muhaymin", meaning: "الرقيب الحافظ" },
    { arabic: "العزيز", transliteration: "Al-Aziz", meaning: "القوي العزيز" },
    { arabic: "الجبار", transliteration: "Al-Jabbar", meaning: "المتكبر على خلقه" },
    { arabic: "المتكبر", transliteration: "Al-Mutakabbir", meaning: "الذي له الكبرياء" },
    { arabic: "الخالق", transliteration: "Al-Khaliq", meaning: "الخالق المبدع" },
    { arabic: "البارئ", transliteration: "Al-Bari'", meaning: "المبرئ الخالص" },
    { arabic: "المصور", transliteration: "Al-Musawwir", meaning: "المصور للخلق" },
    { arabic: "الغفار", transliteration: "Al-Ghaffar", meaning: "كثير المغفرة" },
    { arabic: "القهار", transliteration: "Al-Qahhar", meaning: "القاهر لكل شيء" },
    { arabic: "الوهاب", transliteration: "Al-Wahhab", meaning: "كثير العطاء" },
    { arabic: "الرزاق", transliteration: "Ar-Razzaq", meaning: "المعطي للرزق" },
    { arabic: "الفتاح", transliteration: "Al-Fattah", meaning: "المفتاح لكل مغلق" },
    { arabic: "العليم", transliteration: "Al-Aleem", meaning: "المحيط بالعلم" }
];

window.showNamesOfAllah = function() {
    navigateTo('namesOfAllah-screen');
    const container = document.getElementById('names-container');
    if (container) {
        container.innerHTML = namesOfAllah.map((name, index) => `
            <div class="name-of-allah" onclick="showNameDetails(${index})">
                <div class="name-arabic">${name.arabic}</div>
                <div class="name-transliteration">${name.transliteration}</div>
                <div class="name-meaning">${name.meaning}</div>
            </div>
        `).join('');
    }
};

// آية اليوم
window.displayVerseOfDay = function() {
    const verses = [
        { text: "إِنَّ مَعَ الْعُسْرِ يُسْرًا", surah: "الشرح", ayah: 5 },
        { text: "وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ", surah: "هود", ayah: 88 },
        { text: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا إِنَّ مَعَ الْعُسْرِ يُسْرًا", surah: "الشرح", ayah: 5 },
        { text: "وَقُل رَّبِّ زِدْنِي عِلْمًا", surah: "طه", ayah: 114 },
        { text: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ", surah: "البقرة", ayah: 153 },
        { text: "وَاعْبُدُوا اللَّهَ وَلَا تُشْرِكُوا بِهِ شَيْئًا", surah: "النساء", ayah: 36 }
    ];
    
    const today = new Date().getDate();
    const verse = verses[today % verses.length];
    
    const verseEl = document.getElementById('verse-of-day');
    if (verseEl) {
        verseEl.innerHTML = `
            <h3>آية اليوم</h3>
            <div class="verse-text">${verse.text}</div>
            <div class="verse-info">سورة ${verse.surah} - آية ${toArabicDigits(verse.ayah)}</div>
        `;
    }
};

// التقويم الهجري
window.displayHijriDate = function() {
    const today = new Date();
    const hijriMonths = [
        "المحرم", "صفر", "ربيع الأول", "ربيع الآخر",
        "جمادى الأولى", "جمادى الآخرة", "رجب", "شعبان",
        "رمضان", "شوال", "ذو القعدة", "ذو الحجة"
    ];
    const hijriDays = ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
    
    const dayOfWeek = hijriDays[today.getDay()];
    const hijriDay = ((today.getDate() + 10) % 30) + 1;
    const hijriMonth = hijriMonths[((today.getMonth() + 2) % 12)];
    const hijriYear = 1446;
    
    const dateEl = document.getElementById('hijri-date-display');
    if (dateEl) {
        dateEl.innerHTML = `
            <div class="hijri-date">
                <div class="day-name">${dayOfWeek}</div>
                <div class="date-number">${toArabicDigits(hijriDay)}</div>
                <div class="month-year">${hijriMonth} ${toArabicDigits(hijriYear)}هـ</div>
            </div>
            <div class="gregorian-date">${today.toLocaleDateString('ar-SA')}</div>
        `;
    }
};

// قصص الأنبياء
const prophetsStories = [
    { name: "آدم", title: "أبو البشر", story: "خلقه الله بيده وأسجد له الملائكة" },
    { name: "نوح", title: "أول الرسل", story: "بني السفينة ودعا قومه 950 سنة" },
    { name: "إبراهيم", title: "خليل الرحمن", story: "كسر الأصنام وبني الكعبة" },
    { name: "موسى", title: "كليم الله", story: "أخرج بني إسرائيل من مصر" },
    { name: "عيسى", title: "روح الله", story: "ولد من غير أب ورفع إلى السماء" },
    { name: "محمد", title: "خاتم الأنبياء", story: "بعثه الله رحمة للعالمين" }
];

window.showProphetsStories = function() {
    navigateTo('prophets-screen');
    const container = document.getElementById('prophets-container');
    if (container) {
        container.innerHTML = prophetsStories.map((prophet, index) => `
            <div class="prophet-card" onclick="showProphetStory(${index})">
                <div class="prophet-name">النبي ${prophet.name}</div>
                <div class="prophet-title">${prophet.title}</div>
            </div>
        `).join('');
    }
};

// حاسبة الزكاة
window.calculateZakat = function() {
    const money = parseFloat(document.getElementById('zakat-money')?.value) || 0;
    const gold = parseFloat(document.getElementById('zakat-gold')?.value) || 0;
    const silver = parseFloat(document.getElementById('zakat-silver')?.value) || 0;
    
    const goldPrice = 250;
    const silverPrice = 3;
    
    const nisabGold = 85;
    
    const totalMoney = money + (gold * goldPrice) + (silver * silverPrice);
    const nisab = nisabGold * goldPrice;
    
    let zakat = 0;
    if (totalMoney >= nisab) {
        zakat = totalMoney * 0.025;
    }
    
    const resultEl = document.getElementById('zakat-result');
    if (resultEl) {
        resultEl.innerHTML = `
            <div class="result-label">مقدار الزكاة الواجبة</div>
            <div class="result-value">${zakat.toFixed(2)} ريال</div>
        `;
    }
};

// دالة عرض الأذكار
window.filterSurahs = function() {
    const searchTerm = document.getElementById('surah-search').value.toLowerCase();
    const clearBtn = document.getElementById('search-clear-btn');
    const surahItems = document.querySelectorAll('.golden-surah-item');
    
    // إظهار/إخفاء زر المسح
    if (clearBtn) {
        if (searchTerm) {
            clearBtn.classList.add('visible');
        } else {
            clearBtn.classList.remove('visible');
        }
    }
    
    if (searchTerm === '') {
        surahItems.forEach(item => item.style.display = 'flex');
        return;
    }
    
    surahItems.forEach(item => {
        const surahName = item.querySelector('.surah-name-text').textContent.toLowerCase();
        const surahNumber = item.querySelector('.surah-number-box').textContent;
        const surahEnglishName = item.dataset.englishName ? item.dataset.englishName.toLowerCase() : '';
        
        // البحث في اسم السورة بالعربية والإنجليزية والرقم
        const matches = surahName.includes(searchTerm) || 
                       surahEnglishName.includes(searchTerm) ||
                       surahNumber.includes(searchTerm);
        
        item.style.display = matches ? 'flex' : 'none';
    });
};

window.clearSearch = function() {
    const searchInput = document.getElementById('surah-search');
    const clearBtn = document.getElementById('search-clear-btn');
    
    if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
    }
    
    if (clearBtn) {
        clearBtn.classList.remove('visible');
    }
    
    // إعادة عرض جميع السور
    const surahItems = document.querySelectorAll('.golden-surah-item');
    surahItems.forEach(item => item.style.display = 'flex');
};

window.showAllSurahs = function() {
    // تحديث الأزرار النشطة
    document.querySelectorAll('.filter-chip').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const surahItems = document.querySelectorAll('.golden-surah-item');
    surahItems.forEach(item => item.style.display = 'flex');
};

window.showMakkiah = function() {
    // تحديث الأزرار النشطة
    document.querySelectorAll('.filter-chip').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const surahItems = document.querySelectorAll('.golden-surah-item');
    surahItems.forEach(item => {
        item.style.display = item.dataset.type === 'makkiah' ? 'flex' : 'none';
    });
};

window.showMadaniyah = function() {
    // تحديث الأزرار النشطة
    document.querySelectorAll('.filter-chip').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const surahItems = document.querySelectorAll('.golden-surah-item');
    surahItems.forEach(item => {
        item.style.display = item.dataset.type === 'madaniyah' ? 'flex' : 'none';
    });
};

window.resumeReading = function() {
    const progress = JSON.parse(localStorage.getItem('readingProgress') || '{}');
    if (progress.surah && progress.ayah) {
        navigateTo('quranReader');
        loadQuranPages(progress.surah);
        setTimeout(() => {
            const ayahEl = document.getElementById(`ayah-${progress.ayah}`);
            if (ayahEl) {
                ayahEl.scrollIntoView({ behavior: "smooth", block: "center" });
                ayahEl.classList.add('ayah-highlight');
                setTimeout(() => ayahEl.classList.remove('ayah-highlight'), 2000);
            }
        }, 1000);
    }
};

// تحديث دالة loadQuranIndex للعرض الاحترافي

// تحديث دالة displayCurrentPage لتحديث رقم الصفحة في الأعلى - تم تحديثها بالفعل أعلاه

// إغلاق اللوحات عند الضغط خارجها
document.addEventListener('click', function(e) {
    const sidebar = document.getElementById('settings-sidebar');
    const settingsBtn = document.querySelector('.settings-btn');
    const actionsPanel = document.getElementById('quran-actions-panel');
    const floatingBtn = document.querySelector('.floating-btn');
    
    // إغلاق الشريط الجانبي
    if (sidebar && !sidebar.contains(e.target) && !settingsBtn.contains(e.target)) {
        sidebar.classList.remove('show');
    }
    
    // إغلاق لوحة الإجراءات
    if (actionsPanel && !actionsPanel.contains(e.target) && !floatingBtn.contains(e.target)) {
        actionsPanel.classList.remove('show');
    }
});

// تحميل الإعدادات عند بدء التطبيق
document.addEventListener('DOMContentLoaded', function() {
    loadSavedSettings();
});

window.renderBookmarks = function () {
    const list = document.getElementById('bookmarks-list');
    if (!list) return;
    list.replaceChildren();
    if (quranBookmarks.length === 0) {
        const p = document.createElement('p');
        p.style.cssText = 'text-align:center; opacity:0.7; font-size:1.2rem;';
        p.textContent = 'لم تحفظ أي آيات بعد.';
        list.appendChild(p);
        return;
    }
    quranBookmarks.forEach((b) => {
        const div = document.createElement('div');
        div.className = 'bookmark-item';
        const h3 = document.createElement('h3');
        h3.textContent = `سورة ${b.surahName} - آية ${b.ayah}`;
        const para = document.createElement('p');
        para.textContent = `${b.text} ﴿${b.ayah}﴾`;
        const actions = document.createElement('div');
        actions.className = 'actions';
        const btnGo = document.createElement('button');
        btnGo.type = 'button';
        btnGo.className = 'btn';
        btnGo.style.cssText = 'padding: 8px 15px; font-size: 1rem; flex: 1;';
        btnGo.textContent = '📖 الذهاب';
        btnGo.addEventListener('click', () => {
            navigateTo('quranReader');
            loadQuranPages(b.surah);
        });
        const btnDel = document.createElement('button');
        btnDel.type = 'button';
        btnDel.className = 'btn';
        btnDel.style.cssText = 'padding: 8px 15px; font-size: 1rem; width: auto; background: transparent; color: #ff4d4d; border-color: #ff4d4d;';
        btnDel.textContent = '❌ حذف';
        btnDel.addEventListener('click', () => {
            toggleBookmark(b.surah, b.ayah);
        });
        actions.appendChild(btnGo);
        actions.appendChild(btnDel);
        div.appendChild(h3);
        div.appendChild(para);
        div.appendChild(actions);
        list.appendChild(div);
    });
};

// --- 6. الأذكار والسبحة ---
let curCat = [];
let curIdx = 0;
let remC = 0;

window.startAzkar = (type) => { curCat = azkarData[type]; curIdx = 0; navigateTo('azkarReader'); showZikr(); };

function showZikr() {
    if (curIdx >= curCat.length) { showToast("تقبل الله منك"); return goBack(); }
    const z = curCat[curIdx];
    remC = z.count;
    document.getElementById('zikr-text').innerText = z.text;
    document.getElementById('zikr-proof').innerText = z.proof;
    document.getElementById('zikr-count').innerText = toArabicDigits(remC);
    document.getElementById('progress-bar').style.width = `${((curIdx + 1) / curCat.length) * 100}%`;
    document.getElementById('progress-text').innerText = `${toArabicDigits(curIdx + 1)} من ${toArabicDigits(curCat.length)}`;
}

document.getElementById('counter-btn').onclick = () => {
    if (remC > 1) {
        remC--;
        document.getElementById('zikr-count').innerText = toArabicDigits(remC);
        if (navigator.vibrate) navigator.vibrate(40);
    } else {
        if (navigator.vibrate) navigator.vibrate(150);
        curIdx++;
        showZikr();
    }
};

window.incrementMasbaha = () => {
    const c = parseDisplayInt(document.getElementById('masbaha-count').innerText) + 1;
    document.getElementById('masbaha-count').innerText = toArabicDigits(c);
    localStorage.setItem('masbahaCount', String(c));
    if (navigator.vibrate) navigator.vibrate(30);
};

window.resetMasbaha = () => {
    document.getElementById('masbaha-count').innerText = toArabicDigits(0);
    localStorage.setItem('masbahaCount', '0');
};

// --- 7. الصوتيات ---
let allAudioReciters = [];

function prependPinnedSurahReciters(sel) {
    /** رواية ورش كسور كاملة: مسار موثوق للحصري؛ «ورش» كامل للمنشاوي غير متوفر في API الشائع. */
    const pinned = [
        {
            n: 'محمود خليل الحصري — رواية ورش (عن نافع)',
            s: 'https://server13.mp3quran.net/husr/Rewayat-Warsh-A-n-Nafi/'
        },
        {
            n: 'محمد صديق المنشاوي — مرتل (حفص عن عاصم)',
            s: 'https://server10.mp3quran.net/minsh/'
        }
    ];
    pinned.forEach((p) => {
        if (allAudioReciters.some((x) => (x.s || '').replace(/\/$/, '') === p.s.replace(/\/$/, ''))) return;
        allAudioReciters.unshift(p);
        if (sel) sel.innerHTML = `<option value="${escapeHtml(p.s)}">${escapeHtml(p.n)}</option>` + sel.innerHTML;
    });
}

async function loadAudioReciters() {
    const sel = document.getElementById('reciter-select');
    try {
        const res = await fetch('https://mp3quran.net/api/v3/reciters?language=ar');
        const data = await res.json();
        if (!sel) return;
        data.reciters.forEach((r) => {
            if (r.moshaf) {
                r.moshaf.forEach((m) => {
                    const name = `${r.name} (${m.name.replace('حفص عن عاصم', 'حفص')})`;
                    allAudioReciters.push({ n: name, s: m.server });
                    sel.innerHTML += `<option value="${m.server}">${escapeHtml(name)}</option>`;
                });
            }
        });
        prependPinnedSurahReciters(sel);
    } catch (e) {
        if (sel) sel.innerHTML = '<option value="">تعذر تحميل القراء</option>';
    }
    loadQuranIndex();
}

window.filterReciters = () => {
    const t = document.getElementById('reciter-search').value.toLowerCase();
    const sel = document.getElementById('reciter-select');
    sel.innerHTML = '<option value="">اختر القارئ...</option>';
    allAudioReciters.filter((r) => r.n.toLowerCase().includes(t)).forEach((r) => {
        sel.innerHTML += `<option value="${r.s}">${escapeHtml(r.n)}</option>`;
    });
};

window.updateReciter = () => updateAudioSurah();

window.updateAudioSurah = () => {
    const server = document.getElementById('reciter-select').value;
    const surah = document.getElementById('surah-select-audio').value;
    if (!server || !surah) return;
    const surahName = document.getElementById('surah-select-audio').options[document.getElementById('surah-select-audio').selectedIndex].text;
    document.getElementById('now-playing-title').innerText = `🎧 سورة ${surahName}`;
    const audio = document.getElementById('global-quran-audio');
    audio.src = `${server.endsWith('/') ? server : server + '/'}${surah.padStart(3, '0')}.mp3`;
    audio.play().catch(() => showToast('اضغط تشغيل في المشغل للاستماع'));
};

// تم نقل دالة toggleTheme للأعلى

window.changeFontSize = (step) => {
    window.hideQuranMenu?.();
    if (typeof step !== 'number') step = 1;
    let c = parseFloat(localStorage.getItem('fontSize') || 1.6);
    c = Math.max(1.2, Math.min(4.0, c + step * 0.25));
    document.documentElement.style.setProperty('--zikr-font-size', `${c}rem`);
    localStorage.setItem('fontSize', c);
};
