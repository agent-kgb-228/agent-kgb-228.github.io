let bymaga = 0.6
let kraskaCH = 2.0
let kraskaCV = 3.0
//Тарифы
let raspechatka_cherno_belaya_s_odnoj_storony_1_001 = 10
let raspechatka_cherno_belaya_s_odnoj_storony_1_002 = 9.50
let raspechatka_cherno_belaya_s_odnoj_storony_1_003 = 9
let raspechatka_cherno_belaya_s_dvuh_storon_2_002 = 14
let raspechatka_cherno_belaya_s_dvuh_storon_2_003 = 13.75
let raspechatka_cherno_belaya_s_dvuh_storon_2_001 = 15
let raspechatka_cvetnaya_s_odnoj_storony_3_001 = 20
let raspechatka_cvetnaya_s_odnoj_storony_3_002 = 18
let raspechatka_cvetnaya_s_odnoj_storony_3_003 = 17
let raspechatka_cvetnaya_s_dvuh_storon_4_001 = 25
let raspechatka_cvetnaya_s_dvuh_storon_4_002 = 24
let raspechatka_cvetnaya_s_dvuh_storon_4_003 = 23.75


function multiplyNumber() {
    let RCH1 = parseInt(document.getElementById("RCH1").value);
    let RCH2 = parseInt(document.getElementById("RCH2").value);
    let RCV1 = parseInt(document.getElementById("RCV1").value);
    let RCV2 = parseInt(document.getElementById("RCV2").value);
    let result = 0
    let resultBymaga = 0;
    let resultKraska = 0;
    let resultKraskaCV = 0;
    let profit = 0;
    let resultRCH1 = 0;
    let resultKraskaRCH1 = 0;
    let resultBumagaRCH1 = 0;
    let resultRCH2 = 0;
    let resultKraskaRCH2 = 0;
    let resultBumagaRCH2 = 0;
    let resultRCV1 = 0;
    let resultKraskaRCV1 = 0;
    let resultBumagaRCV1 = 0;
    let resultKraskaCVRCV1 = 0;
    let resultRCV2 = 0;
    let resultKraskaRCV2 = 0;
    let resultBumagaRCV2 = 0;
    let resultKraskaCVRCV2 = 0;
    let profitRCH1 = 0;
    let profitRCH2 = 0;
    let profitRCV1 = 0;
    let profitRCV2 = 0;
    let Kolichestvo = 0

    if (RCH1 <= 9) {
        resultRCH1 = RCH1 * raspechatka_cherno_belaya_s_odnoj_storony_1_001;
        resultKraskaRCH1 = RCH1 * kraskaCH;
        resultBumagaRCH1 = RCH1 * bymaga;
    } else if (RCH1 >= 10 && RCH1 <= 19) {
        resultRCH1 = RCH1 * raspechatka_cherno_belaya_s_odnoj_storony_1_002;
        resultKraskaRCH1 = RCH1 * kraskaCH;
        resultBumagaRCH1 = RCH1 * bymaga;
    } else if (RCH1 >= 20) {
        resultRCH1 = RCH1 * raspechatka_cherno_belaya_s_odnoj_storony_1_003;
        resultKraskaRCH1 = RCH1 * kraskaCH;
        resultBumagaRCH1 = RCH1 * bymaga;
    }

    if (RCH2 <= 9) {
        resultRCH2 = RCH2 * raspechatka_cherno_belaya_s_dvuh_storon_2_001;
        resultKraskaRCH2 = 2 * RCH2 * kraskaCH;
        resultBumagaRCH2 = RCH2 * bymaga;
    } else if (RCH2 >= 10 && RCH2 <= 19) {
        resultRCH2 = RCH2 * raspechatka_cherno_belaya_s_dvuh_storon_2_002;
        resultKraskaRCH2 = 2 * RCH2 * kraskaCH;
        resultBumagaRCH2 = RCH2 * bymaga;
    } else if (RCH2 >= 20) {
        resultRCH2 = RCH2 * raspechatka_cherno_belaya_s_dvuh_storon_2_003;
        resultKraskaRCH2 = 2 * RCH2 * kraskaCH;
        resultBumagaRCH2 = RCH2 * bymaga;
    }

    if (RCV1 <= 9) {
        resultRCV1 = RCV1 * raspechatka_cvetnaya_s_odnoj_storony_3_001;
        resultKraskaRCV1 = RCV1 * kraskaCH;
        resultBumagaRCV1 = RCV1 * bymaga;
        resultKraskaCVRCV1 = RCV1 * kraskaCV;
    } else if (RCV1 >= 10 && RCV1 <= 19) {
        resultRCV1 = RCV1 * raspechatka_cvetnaya_s_odnoj_storony_3_002;
        resultKraskaRCV1 = RCV1 * kraskaCH;
        resultKraskaCVRCV1 = RCV1 * kraskaCV;
        resultBumagaRCV1 = RCV1 * bymaga;
    } else if (RCV1 >= 20) {
        resultRCV1 = RCV1 * raspechatka_cvetnaya_s_odnoj_storony_3_003;
        resultKraskaRCV1 = RCV1 * kraskaCH;
        resultKraskaCVRCV1 = RCV1 * kraskaCV;
        resultBumagaRCV1 = RCV1 * bymaga;
    }

    if (RCV2 <= 9) {
        resultRCV2 = RCV2 * raspechatka_cvetnaya_s_odnoj_storony_3_001;
        resultKraskaRCV2 = 2 * RCV2 * kraskaCH;
        resultKraskaCVRCV2 = 2 * RCV2 * kraskaCV;
        resultBumagaRCV2 = RCV2 * bymaga;
    } else if (RCV2 >= 10 && RCV2 <= 19) {
        resultRCH2 = RCV2 * raspechatka_cvetnaya_s_odnoj_storony_3_002;
        resultKraskaRCV2 = 2 * RCV2 * kraskaCH;
        resultKraskaCVRCV2 = 2 * RCV2 * kraskaCV;
        resultBumagaRCV2 = RCV2 * bymaga;
    } else if (RCV2 >= 20) {
        resultRCV2 = RCV2 * raspechatka_cvetnaya_s_odnoj_storony_3_003;
        resultKraskaRCV2 = 2 * RCV2 * kraskaCH;
        resultKraskaCVRCV2 = 2 * RCV2 * kraskaCV;
        resultBumagaRCV2 = RCV2 * bymaga;
    }

    result = resultRCH1 + resultRCH2 + resultRCV1 + resultRCV2;
    resultBymaga = resultBumagaRCH1 + resultBumagaRCH2 + resultBumagaRCV1 + resultBumagaRCV2;
    resultKraska = resultKraskaRCH1 + resultKraskaRCH2 + resultKraskaRCV1 + resultKraskaRCV2;
    resultKraskaCV = resultKraskaCVRCV1 + resultKraskaCVRCV2;
    profit = result - resultBymaga - resultKraska - resultKraskaCV;
    profitRCH1 = resultRCH1 - resultBumagaRCH1 - resultKraskaRCH1
    profitRCH2 = resultRCH2 - resultBumagaRCH2 - resultKraskaRCH2
    profitRCV1 = resultRCV1 - resultBumagaRCV1 - resultKraskaRCV1 - resultKraskaCVRCV1
    profitRCV2 = resultRCV2 - resultBumagaRCV2 - resultKraskaRCV2 - resultKraskaCVRCV2
    Kolichestvo = RCH1 + RCH2 + RCV1 + RCV2

    document.getElementById("Kolichestvo").innerHTML = Kolichestvo;
    document.getElementById("result").innerHTML = result + " &#8381;";
    document.getElementById("resultB").innerHTML = resultBymaga + " &#8381;";
    document.getElementById("resultK").innerHTML = resultKraska + " &#8381;";
    document.getElementById("resultKCV").innerHTML = resultKraskaCV + " &#8381;";
    document.getElementById("profit").innerHTML = profit + " &#8381;";

    document.getElementById("resultRCH1").innerHTML = resultRCH1 + " &#8381;";
    document.getElementById("resultRCH2").innerHTML = resultRCH2 + " &#8381;";
    document.getElementById("resultRCV1").innerHTML = resultRCV1 + " &#8381;";
    document.getElementById("resultRCV2").innerHTML = resultRCV2 + " &#8381;";

    document.getElementById("resultBumagaRCH1").innerHTML = resultBumagaRCH1 + " &#8381;";
    document.getElementById("resultBumagaRCH2").innerHTML = resultBumagaRCH2 + " &#8381;";
    document.getElementById("resultBumagaRCV1").innerHTML = resultBumagaRCV1 + " &#8381;";
    document.getElementById("resultBumagaRCV2").innerHTML = resultBumagaRCV2 + " &#8381;";

    document.getElementById("resultKraskaRCH1").innerHTML = resultKraskaRCH1 + " &#8381;";
    document.getElementById("resultKraskaRCH2").innerHTML = resultKraskaRCH2 + " &#8381;";
    document.getElementById("resultKraskaRCV1").innerHTML = resultKraskaRCV1 + " &#8381;";
    document.getElementById("resultKraskaRCV2").innerHTML = resultKraskaRCV2 + " &#8381;";

    document.getElementById("resultKraskaCVRCV1").innerHTML = resultKraskaCVRCV1 + " &#8381;";
    document.getElementById("resultKraskaCVRCV2").innerHTML = resultKraskaCVRCV2 + " &#8381;";

    document.getElementById("profitRCH1").innerHTML = profitRCH1 + " &#8381;";
    document.getElementById("profitRCH2").innerHTML = profitRCH2 + " &#8381;";
    document.getElementById("profitRCV1").innerHTML = profitRCV1 + " &#8381;";
    document.getElementById("profitRCV2").innerHTML = profitRCV2 + " &#8381;";

}