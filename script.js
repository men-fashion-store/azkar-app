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
            loadSurahContent(o.surah, o.name, o.ayah || 1);
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

    // الدخول مباشرة بدون شاشة التحميل
    if (!window.location.hash || window.location.hash === '#splash') {
        window.location.hash = 'home';
        handleRoute();
    } else {
        handleRoute();
    }

    initLocationAndPrayers();
    loadAudioReciters();
    renderBookmarks();
    updateResumeReadingButton();
    updateOfflineBanner();

    // أحداث القرآن (للتفسير والاستماع)
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
            const aNum = parseInt(span.dataset.ayah, 10);
            saveReadingProgress(aNum);
            const raw = ayahTextCache[aNum] || '';
            toggleBookmark(parseInt(span.dataset.surah, 10), currentSurahDisplayName, aNum, raw);
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

function getPrayerMethod() { return localStorage.getItem('prayerMethod') || '5'; }

function clearPrayerNotificationTimeouts() {
    prayerNotifyTimeouts.forEach((id) => clearTimeout(id));
    prayerNotifyTimeouts = [];
}

function showPrayerNotificationNow(body) {
    const title = 'موسوعة المسلم';
    const opts = { body, icon: './icon-192.png', badge: './icon-192.png', tag: 'prayer-adhan', renotify: true, requireInteraction: false };
    if ('vibrate' in navigator) opts.vibrate = [120, 80, 120];
    try {
        if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.postMessage({ type: 'SHOW_NOTIFICATION', title, options: opts });
        } else {
            new Notification(title, opts);
        }
    } catch (err) {
        try { new Notification(title, opts); } catch (e2) {}
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
    const body = beforeMin > 0 ? `تذكير: صلاة ${prayerNameAr} بعد نحو ${beforeMin} دقيقة` : `حان وقت صلاة ${prayerNameAr}`;
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
    if (!('Notification' in window)) { el.textContent = 'المتصفح لا يدعم إشعارات سطح المكتب.'; return; }
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
    if (ayahSel && AYAH_RECITER_PRESETS.some((p) => p.id === ayahSel.value)) localStorage.setItem('ayahReciterId', ayahSel.value);
    if (n && n.checked && 'Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission().then(() => { updateNotifyPermissionHint(); fetchPrayers(userLat, userLng); });
    } else {
        fetchPrayers(userLat, userLng);
    }
    updateNotifyPermissionHint();
    showToast('تم حفظ الإعدادات');
};

window.requestNotificationPermissionFromSettings = async function () {
    if (!('Notification' in window)) { showToast('المتصفح لا يدعم الإشعارات'); return; }
    const p = await Notification.requestPermission();
    updateNotifyPermissionHint();
    if (p === 'granted') { showToast('تم السماح بالإشعارات'); fetchPrayers(userLat, userLng); } 
    else if (p === 'denied') { showToast('رُفض الإذن — غيّر الإعدادات من القفل بجانب العنوان'); }
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
    requestAnimationFrame(() => { backdrop?.classList.add('sheet-open'); sheet?.classList.add('sheet-open'); });
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
    setTimeout(() => { backdrop?.classList.add('hidden'); sheet?.classList.add('hidden'); hideAyahTafsirPanel(); }, 280);
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
        audio.pause(); audio.currentTime = 0; ayahAudioTargetKey = ''; updateAyahAudioButtonLabel(false); return;
    }
    const urls = buildAyahMp3Urls(ayahSheetSurah, ayahSheetAyah);
    ayahAudioTargetKey = key;
    const tryUrl = (idx) => {
        if (idx >= urls.length) { ayahAudioTargetKey = ''; showToast('تعذر تشغيل الصوت'); updateAyahAudioButtonLabel(false); return; }
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
            if (p === 'granted') startCompass(); else showToast("❌ تم رفض صلاحية البوصلة");
        }).catch(() => showToast("تعذر طلب صلاحية البوصلة"));
    } else {
        startCompass();
    }
};

function startCompass() {
    if (compassHandler) { window.removeEventListener('deviceorientationabsolute', compassHandler, true); window.removeEventListener('deviceorientation', compassHandler, true); }
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

// --- 5. القرآن والآيات المرجعية (قاعدة بيانات محلية + بحث) ---
const QURAN_DB_NAME = 'QuranOfflineDB';
let surahListCached = [];
let currentSurahNumber = 1;
let currentSurahDisplayName = '';
let ayahTextCache = {};
let ayahGlobalNumberCache = {};
let quranBookmarks = [];
try { quranBookmarks = JSON.parse(localStorage.getItem('quranBookmarks')) || []; } catch { quranBookmarks = []; }

function openQuranDB() {
    return new Promise((resolve, reject) => {
        const req = indexedDB.open(QURAN_DB_NAME, 1);
        req.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains('quran_data')) {
                db.createObjectStore('quran_data', { keyPath: 'id' });
            }
        };
        req.onsuccess = (e) => resolve(e.target.result);
        req.onerror = (e) => reject(e.target.error);
    });
}

async function saveQuranToLocal(surahs) {
    const db = await openQuranDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction('quran_data', 'readwrite');
        tx.objectStore('quran_data').put({ id: 'full_quran', surahs: surahs });
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject();
    });
}

async function getQuranFromLocal() {
    const db = await openQuranDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction('quran_data', 'readonly');
        const req = tx.objectStore('quran_data').get('full_quran');
        req.onsuccess = () => resolve(req.result ? req.result.surahs : null);
        req.onerror = () => reject();
    });
}

async function loadQuranIndex() {
    if (surahListCached.length > 0) return;
    const list = document.getElementById('surah-list');
    const audioSel = document.getElementById('surah-select-audio');
    
    const localData = await getQuranFromLocal();
    
    if (localData) {
        surahListCached = localData;
        renderSurahList(list, audioSel);
    } else {
        if(list) list.innerHTML = '<p style="text-align:center; width:100%; grid-column:1/-1; color:var(--accent-color);">جاري تحميل قاعدة بيانات القرآن للعمل بدون إنترنت (مرة واحدة فقط)... ⏳</p>';
        try {
            const res = await fetch('https://api.alquran.cloud/v1/quran/quran-uthmani');
            const data = await res.json();
            surahListCached = data.data.surahs;
            await saveQuranToLocal(surahListCached);
            showToast('✅ تم تنزيل المصحف بنجاح وسيعمل بدون إنترنت دائماً!');
            renderSurahList(list, audioSel);
        } catch (e) {
            if(list) list.innerHTML = '<p style="text-align:center; padding:20px; grid-column:1/-1;">تعذر تحميل المصحف. يرجى التأكد من اتصالك بالإنترنت في أول مرة فقط.</p>';
        }
    }
}

function renderSurahList(list, audioSel) {
    if(list) list.innerHTML = '';
    if (audioSel) audioSel.innerHTML = '<option value="">اختر السورة...</option>';
    surahListCached.forEach((s) => {
        if(list) list.innerHTML += `<button type="button" class="surah-card-btn" onclick="navigateTo('quranReader'); loadSurahContent(${s.number})"><span class="surah-number">${s.number}</span> <span>${escapeHtml(s.name)}</span></button>`;
        if (audioSel) audioSel.innerHTML += `<option value="${s.number}">${escapeHtml(s.name)}</option>`;
    });
}

window.loadSurahContent = async (num, name, scrollToAyah = null) => {
    currentSurahNumber = num;
    ayahTextCache = {};
    ayahGlobalNumberCache = {};
    
    const surahData = surahListCached.find((x) => x.number === num);
    if (!surahData) return;

    currentSurahDisplayName = surahData.name;
    document.getElementById('current-surah-name').innerText = currentSurahDisplayName;
    document.getElementById('quran-text').innerHTML = '<p class="quran-loading">جاري التجهيز...</p>';
    
    let html = (num !== 1 && num !== 9) ? '<div class="basmalah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>' : '';

    surahData.ayahs.forEach((a) => {
        let text = (num !== 1 && num !== 9 && a.numberInSurah === 1) ? a.text.replace("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ ", "") : a.text;
        ayahTextCache[a.numberInSurah] = text;
        ayahGlobalNumberCache[a.numberInSurah] = a.number;
        const isMarked = quranBookmarks.some((b) => b.surah === num && b.ayah === a.numberInSurah);
        const markClass = isMarked ? "bookmarked-ayah" : "";
        const safe = escapeHtml(text);
        html += `<span class="ayah-span ${markClass}" id="ayah-${a.numberInSurah}" data-surah="${num}" data-ayah="${a.numberInSurah}">${safe} <span class="ayah-symbol">﴿${a.numberInSurah}﴾</span></span> `;
    });

    document.getElementById('quran-text').innerHTML = html;

    if (scrollToAyah) {
        setTimeout(() => {
            const el = document.getElementById(`ayah-${scrollToAyah}`);
            if (el) { el.scrollIntoView({ behavior: "smooth", block: "center" }); el.classList.add('ayah-highlight'); setTimeout(() => el.classList.remove('ayah-highlight'), 2000); }
        }, 500);
    } else {
        window.scrollTo(0, 0);
    }
    saveReadingProgress(scrollToAyah || 1);
    updateResumeReadingButton();
};

window.navigateSurah = function (step) {
    const newNum = currentSurahNumber + step;
    if (newNum >= 1 && newNum <= 114) { loadSurahContent(newNum); } 
    else { showToast("لا يوجد سور أخرى"); }
};

window.toggleBookmark = function (sNum, sName, aNum, text) {
    const index = quranBookmarks.findIndex((b) => b.surah === sNum && b.ayah === aNum);
    if (index > -1) {
        quranBookmarks.splice(index, 1);
        const el = document.getElementById(`ayah-${aNum}`);
        if (el) el.classList.remove('bookmarked-ayah');
        showToast("❌ تم إزالة العلامة المرجعية");
    } else {
        const snippet = text || ayahTextCache[aNum] || '';
        quranBookmarks.push({ surah: sNum, surahName: sName, ayah: aNum, text: snippet });
        const el = document.getElementById(`ayah-${aNum}`);
        if (el) el.classList.add('bookmarked-ayah');
        showToast("🔖 تم حفظ الآية");
    }
    localStorage.setItem('quranBookmarks', JSON.stringify(quranBookmarks));
    renderBookmarks();
};

window.renderBookmarks = function () {
    const list = document.getElementById('bookmarks-list');
    if (!list) return;
    list.replaceChildren();
    if (quranBookmarks.length === 0) {
        list.innerHTML = '<p style="text-align:center; opacity:0.7; font-size:1.2rem;">لم تحفظ أي آيات بعد.</p>';
        return;
    }
    quranBookmarks.forEach((b) => {
        const div = document.createElement('div');
        div.className = 'bookmark-item';
        div.innerHTML = `
            <h3>سورة ${b.surahName} - آية ${b.ayah}</h3>
            <p>${b.text} ﴿${b.ayah}﴾</p>
            <div class="actions">
                <button type="button" class="btn" style="padding: 8px 15px; font-size: 1rem; flex: 1;" onclick="navigateTo('quranReader'); loadSurahContent(${b.surah}, null, ${b.ayah})">📖 الذهاب</button>
                <button type="button" class="btn" style="padding: 8px 15px; font-size: 1rem; width: auto; background: transparent; color: #ff4d4d; border-color: #ff4d4d;" onclick="toggleBookmark(${b.surah}, '${b.surahName}', ${b.ayah}, '')">❌ حذف</button>
            </div>
        `;
        list.appendChild(div);
    });
};

window.handleQuranSearch = function () {
    const query = document.getElementById('quran-search').value.trim();
    const listEl = document.getElementById('surah-list');
    const resultsEl = document.getElementById('quran-search-results');
    
    if (query.length === 0) {
        listEl.style.display = 'grid';
        resultsEl.style.display = 'none';
        return;
    }

    listEl.style.display = 'none';
    resultsEl.style.display = 'block';

    const removeTashkeel = (text) => text.replace(/[\u0617-\u061A\u064B-\u0652]/g, "");
    const cleanQuery = removeTashkeel(query);

    const surahMatches = surahListCached.filter(s => s.name.includes(cleanQuery) || removeTashkeel(s.name).includes(cleanQuery));
    
    let ayahMatches = [];
    for (let s of surahListCached) {
        for (let a of s.ayahs) {
            const cleanText = removeTashkeel(a.text);
            if (cleanText.includes(cleanQuery)) {
                ayahMatches.push({ surah: s.number, surahName: s.name, ayah: a.numberInSurah, text: a.text });
                if (ayahMatches.length >= 40) break;
            }
        }
        if (ayahMatches.length >= 40) break;
    }

    let html = '';
    if (surahMatches.length > 0) {
        html += `<h4 style="color:var(--accent-color);margin-bottom:10px;">السور المطابقة:</h4><div class="surah-grid" style="margin-bottom:20px;">`;
        surahMatches.forEach(s => { html += `<button type="button" class="surah-card-btn" onclick="openSearchResult(${s.number}, null)"><span class="surah-number">${s.number}</span> <span>${escapeHtml(s.name)}</span></button>`; });
        html += `</div>`;
    }

    if (ayahMatches.length > 0) {
        html += `<h4 style="color:var(--accent-color);margin-bottom:10px;">الآيات المطابقة:</h4>`;
        ayahMatches.forEach(m => {
            html += `<div class="bookmark-item" style="cursor:pointer; padding:10px; border:1px solid var(--accent-color); margin-bottom:10px; border-radius:8px;" onclick="openSearchResult(${m.surah}, ${m.ayah})">
                <h4 style="font-size:0.9rem; color:var(--accent-color);">سورة ${m.surahName} - آية ${m.ayah}</h4>
                <p style="font-size:1rem; margin-top:5px;">${m.text}</p>
            </div>`;
        });
    }

    if (surahMatches.length === 0 && ayahMatches.length === 0) {
        html = '<p style="text-align:center;">لا توجد نتائج مطابقة لـ "' + escapeHtml(query) + '"</p>';
    }

    resultsEl.innerHTML = html;
};

window.openSearchResult = function(surahNum, ayahNum) {
    document.getElementById('quran-search').value = '';
    document.getElementById('surah-list').style.display = 'grid';
    document.getElementById('quran-search-results').style.display = 'none';
    navigateTo('quranReader');
    loadSurahContent(surahNum, null, ayahNum);
};

// --- 6. الأذكار والسبحة ---
let curCat = []; let curIdx = 0; let remC = 0;
window.startAzkar = (type) => { curCat = azkarData[type]; curIdx = 0; navigateTo('azkarReader'); showZikr(); };
function showZikr() {
    if (curIdx >= curCat.length) { showToast("تقبل الله منك"); return goBack(); }
    const z = curCat[curIdx]; remC = z.count;
    document.getElementById('zikr-text').innerText = z.text;
    document.getElementById('zikr-proof').innerText = z.proof;
    document.getElementById('zikr-count').innerText = toArabicDigits(remC);
    document.getElementById('progress-bar').style.width = `${((curIdx + 1) / curCat.length) * 100}%`;
    document.getElementById('progress-text').innerText = `${toArabicDigits(curIdx + 1)} من ${toArabicDigits(curCat.length)}`;
}

document.getElementById('counter-btn').onclick = () => {
    if (remC > 1) { remC--; document.getElementById('zikr-count').innerText = toArabicDigits(remC); if (navigator.vibrate) navigator.vibrate(40); } 
    else { if (navigator.vibrate) navigator.vibrate(150); curIdx++; showZikr(); }
};

window.incrementMasbaha = () => {
    const c = parseDisplayInt(document.getElementById('masbaha-count').innerText) + 1;
    document.getElementById('masbaha-count').innerText = toArabicDigits(c);
    localStorage.setItem('masbahaCount', String(c));
    if (navigator.vibrate) navigator.vibrate(30);
};
window.resetMasbaha = () => { document.getElementById('masbaha-count').innerText = toArabicDigits(0); localStorage.setItem('masbahaCount', '0'); };

// --- 7. الصوتيات ---
let allAudioReciters = [];
function prependPinnedSurahReciters(sel) {
    const pinned = [
        { n: 'محمود خليل الحصري — رواية ورش (عن نافع)', s: 'https://server13.mp3quran.net/husr/Rewayat-Warsh-A-n-Nafi/' },
        { n: 'محمد صديق المنشاوي — مرتل (حفص عن عاصم)', s: 'https://server10.mp3quran.net/minsh/' }
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

// --- 8. الإعدادات والتحديث ---
window.toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
};

window.changeFontSize = (step) => {
    let c = parseFloat(localStorage.getItem('fontSize') || 1.6);
    c = Math.max(1.2, Math.min(4.0, c + step * 0.25));
    document.documentElement.style.setProperty('--zikr-font-size', `${c}rem`);
    localStorage.setItem('fontSize', c);
};

window.checkForUpdates = function () {
    if (!navigator.onLine) {
        showToast("لا يوجد اتصال بالإنترنت للتحديث.");
        return;
    }
    showToast("جاري البحث عن تحديثات جديدة...");
    
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(function(registrations) {
            for(let registration of registrations) {
                registration.update(); 
            }
            caches.keys().then((keyList) => {
                return Promise.all(keyList.map((key) => {
                    return caches.delete(key);
                }));
            }).then(() => {
                showToast("تم التحديث! جاري إعادة التشغيل...");
                setTimeout(() => {
                    window.location.reload(true);
                }, 1500);
            });
        });
    } else {
        window.location.reload(true);
    }
};
