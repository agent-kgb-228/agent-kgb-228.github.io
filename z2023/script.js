let bymaga = 0.60
let kraskaCH = 2.0
let kraskaCV = 3.0
let tax = 0.04
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

let poisk_informacii_5_001 = 15.00
let oformlenie_5_002 = 20.00
let kolichestvo_slov_5_003 = 2.40
let foto = 10.00
let diagramma = 15.00
let oformlenie_po_gostu_r7_0_97_2016 = 30.00
let oformlenie_po_shriftam_klienta = 50.00
let slajd_prezentacii_6_001 = 2.40
let dizajn_prezentacii_6_002 = 18.00
let perekhody_v_prezentacii_6_003 = 12.00
let animacii_v_prezentacii_6_004 = 12.00
let foto_dlya_prezentacii_6_005 = 10.00
let poisk_informacii_6_006 = 12.00
let diagramma_6_007 = 15.00
let fajl_dlya_hraneniya_7_001 = 5.00
let tablica_15_yacheek_8_001 = 6.00
let formula_8_002 = 6.00
let dizajn_lista_8_003 = 20.00
let poisk_informacii_8_004 = 15.00
let diagramma_8_005 = 30.00
let sozdanie_formy_yandex = 50.00
let sozdanie_formy_google = 50.00


function multiplyNumber() {
    let RCH1 = parseInt(document.getElementById("RCH1").value);
    let RCH2 = parseInt(document.getElementById("RCH2").value);
    let RCV1 = parseInt(document.getElementById("RCV1").value);
    let RCV2 = parseInt(document.getElementById("RCV2").value);

    let PI = parseInt(document.getElementById("PI").value);
    let OFormlenie = parseInt(document.getElementById("OFormlenie").value);
    let Kslov = parseInt(document.getElementById("Kslov").value);
    let Foto_doc = parseInt(document.getElementById("Foto_doc").value);
    let Diagramaa_doc = parseInt(document.getElementById("Diagramaa_doc").value);
    let OFormlenie_po_GOSTy = parseInt(document.getElementById("OFormlenie_po_GOSTy").value);
    let OFormlmlenie_po_shriftam_k = parseInt(document.getElementById("OFormlmlenie_po_shriftam_k").value);
    let Slaid_pre = parseInt(document.getElementById("Slaid_pre").value);
    let Dizain_pre = parseInt(document.getElementById("Dizain_pre").value);
    let Perexod_pre = parseInt(document.getElementById("Perexod_pre").value);
    let Ani_pre = parseInt(document.getElementById("Ani_pre").value);
    let Foto_pre = parseInt(document.getElementById("Foto_pre").value);
    let PI_pre = parseInt(document.getElementById("PI_pre").value);
    let Diagramaa_pre = parseInt(document.getElementById("Diagramaa_pre").value);
    let Fail_xran = parseInt(document.getElementById("Fail_xran").value);
    let Table_15_excel = parseInt(document.getElementById("Table_15_excel").value);
    let F_excel = parseInt(document.getElementById("F_excel").value);
    let Diz_excel = parseInt(document.getElementById("Diz_excel").value);
    let PI_excel = parseInt(document.getElementById("PI_excel").value);
    let Diagramaa_excel = parseInt(document.getElementById("Diagramaa_excel").value);
    let Yandex_forms = parseInt(document.getElementById("Yandex_forms").value);
    let Google_forms = parseInt(document.getElementById("Google_forms").value);

    //переменные
    let result = 0
    let resultBymaga = 0;
    let resultKraska = 0;
    let resultKraskaCV = 0;
    let profit = 0;
    let resultTax = 0;
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
    let Kolichestvo = 0;
    let taxRCH1 = 0;
    let taxRCH2 = 0;
    let taxRCV1 = 0;
    let taxRCV2 = 0;

    let result_PI = 0;
    let result_OFormlenie = 0;
    let result_Kslov = 0;
    let result_Foto_doc = 0;
    let result_Diagramaa_doc = 0;
    let result_OFormlenie_po_GOSTy = 0;
    let result_OFormlmlenie_po_shriftam_k = 0;
    let result_Slaid_pre = 0;
    let result_Dizain_pre = 0;
    let result_Perexod_pre = 0;
    let result_Ani_pre = 0;
    let result_Foto_pre = 0;
    let result_PI_pre = 0;
    let result_Diagramaa_pre = 0;
    let result_Fail_xran = 0;
    let result_Table_15_excel = 0;
    let result_F_excel = 0;
    let result_Diz_excel = 0;
    let result_PI_excel = 0;
    let result_Diagramaa_excel = 0;
    let result_Yandex_forms = 0;
    let result_Google_forms = 0;

    let tax_PI = 0;
    let tax_OFormlenie = 0;
    let tax_Kslov = 0;
    let tax_Foto_doc = 0;
    let tax_Diagramaa_doc = 0;
    let tax_OFormlenie_po_GOSTy = 0;
    let tax_OFormlmlenie_po_shriftam_k = 0;
    let tax_Slaid_pre = 0;
    let tax_Dizain_pre = 0;
    let tax_Perexod_pre = 0;
    let tax_Ani_pre = 0;
    let tax_Foto_pre = 0;
    let tax_PI_pre = 0;
    let tax_Diagramaa_pre = 0;
    let tax_Fail_xran = 0;
    let tax_Table_15_excel = 0;
    let tax_F_excel = 0;
    let tax_Diz_excel = 0;
    let tax_PI_excel = 0;
    let tax_Diagramaa_excel = 0;
    let tax_Yandex_forms = 0;
    let tax_Google_forms = 0;

    let profit_PI = 0;
    let profit_OFormlenie = 0;
    let profit_Kslov = 0;
    let profit_Foto_doc = 0;
    let profit_Diagramaa_doc = 0;
    let profit_OFormlenie_po_GOSTy = 0;
    let profit_OFormlmlenie_po_shriftam_k = 0;
    let profit_Slaid_pre = 0;
    let profit_Dizain_pre = 0;
    let profit_Perexod_pre = 0;
    let profit_Ani_pre = 0;
    let profit_Foto_pre = 0;
    let profit_PI_pre = 0;
    let profit_Diagramaa_pre = 0;
    let profit_Fail_xran = 0;
    let profit_Table_15_excel = 0;
    let profit_F_excel = 0;
    let profit_Diz_excel = 0;
    let profit_PI_excel = 0;
    let profit_Diagramaa_excel = 0;
    let profit_Yandex_forms = 0;
    let profit_Google_forms = 0;

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

   

    taxRCH1 = resultRCH1 * tax
    taxRCH2 = resultRCH2 * tax
    taxRCV1 = resultRCV1 * tax
    taxRCV2 = resultRCV2 * tax
    profitRCH1 = resultRCH1 - resultBumagaRCH1 - resultKraskaRCH1 - taxRCH1
    profitRCH2 = resultRCH2 - resultBumagaRCH2 - resultKraskaRCH2 - taxRCH2
    profitRCV1 = resultRCV1 - resultBumagaRCV1 - resultKraskaRCV1 - resultKraskaCVRCV1 - taxRCV1
    profitRCV2 = resultRCV2 - resultBumagaRCV2 - resultKraskaRCV2 - resultKraskaCVRCV2 - taxRCV2
    Kolichestvo = RCH1 + RCH2 + RCV1 + RCV2


    result_PI = PI * poisk_informacii_5_001
    result_OFormlenie = OFormlenie * oformlenie_5_002
    result_Kslov = Kslov * kolichestvo_slov_5_003 * 0.001
    result_Foto_doc = Foto_doc * foto
    result_Diagramaa_doc = Diagramaa_doc * diagramma
    result_OFormlenie_po_GOSTy = OFormlenie_po_GOSTy * oformlenie_po_gostu_r7_0_97_2016
    result_OFormlmlenie_po_shriftam_k = OFormlmlenie_po_shriftam_k * oformlenie_po_shriftam_klienta
    result_Slaid_pre = Slaid_pre * slajd_prezentacii_6_001
    result_Dizain_pre = Dizain_pre * dizajn_prezentacii_6_002
    result_Perexod_pre = Perexod_pre * perekhody_v_prezentacii_6_003
    result_Ani_pre = Ani_pre * animacii_v_prezentacii_6_004
    result_Foto_pre = Foto_pre * foto_dlya_prezentacii_6_005
    result_PI_pre = PI_pre * poisk_informacii_6_006
    result_Diagramaa_pre = Diagramaa_pre * diagramma_6_007
    result_Fail_xran = Fail_xran * fajl_dlya_hraneniya_7_001
    result_Table_15_excel = Table_15_excel * tablica_15_yacheek_8_001
    result_F_excel = F_excel * formula_8_002
    result_Diz_excel = Diz_excel * dizajn_lista_8_003
    result_PI_excel = PI_excel * poisk_informacii_8_004
    result_Diagramaa_excel = Diagramaa_excel * diagramma_8_005
    result_Yandex_forms = Yandex_forms * sozdanie_formy_yandex
    result_Google_forms = Google_forms * sozdanie_formy_google

    tax_PI = tax * result_PI
    tax_OFormlenie = tax * result_OFormlenie
    tax_Kslov = tax * result_Kslov
    tax_Foto_doc = tax * result_Foto_doc
    tax_Diagramaa_doc = tax * result_Diagramaa_doc
    tax_OFormlenie_po_GOSTy = tax * result_OFormlenie_po_GOSTy
    tax_OFormlmlenie_po_shriftam_k = tax * result_OFormlmlenie_po_shriftam_k
    tax_Slaid_pre = tax * result_Slaid_pre
    tax_Dizain_pre = tax * result_Dizain_pre
    tax_Perexod_pre = tax * result_Perexod_pre
    tax_Ani_pre = tax * result_Ani_pre
    tax_Foto_pre = tax * result_Foto_pre
    tax_PI_pre = tax * result_PI_pre
    tax_Diagramaa_pre = tax * result_Diagramaa_pre
    tax_Fail_xran = tax * result_Fail_xran
    tax_Table_15_excel = tax * result_Table_15_excel
    tax_F_excel = tax * result_F_excel
    tax_Diz_excel = tax * result_Diz_excel
    tax_PI_excel = tax * result_PI_excel
    tax_Diagramaa_excel = tax * result_Diagramaa_excel
    tax_Yandex_forms = tax * result_Yandex_forms
    tax_Google_forms = tax * result_Google_forms

    profit_PI = result_PI - tax_PI
    profit_OFormlenie = result_OFormlenie - tax_OFormlenie
    profit_Kslov = result_Kslov - tax_Kslov
    profit_Foto_doc = result_Foto_doc - tax_Foto_doc
    profit_Diagramaa_doc = result_Diagramaa_doc - tax_Diagramaa_doc
    profit_OFormlenie_po_GOSTy = result_OFormlenie_po_GOSTy - tax_OFormlenie_po_GOSTy
    profit_OFormlmlenie_po_shriftam_k = result_OFormlmlenie_po_shriftam_k - tax_OFormlmlenie_po_shriftam_k
    profit_Slaid_pre = result_Slaid_pre - tax_Slaid_pre
    profit_Dizain_pre = result_Dizain_pre - tax_Dizain_pre
    profit_Perexod_pre = result_Perexod_pre - tax_Perexod_pre
    profit_Ani_pre = result_Ani_pre - tax_Ani_pre
    profit_Foto_pre = result_Foto_pre - tax_Foto_pre
    profit_PI_pre = result_PI_pre - tax_PI_pre
    profit_Diagramaa_pre = result_Diagramaa_pre - tax_Diagramaa_pre
    profit_Fail_xran = result_Fail_xran - tax_Fail_xran
    profit_Table_15_excel = result_Table_15_excel - tax_Table_15_excel
    profit_F_excel = result_F_excel - tax_F_excel
    profit_Diz_excel = result_Diz_excel - tax_Diz_excel
    profit_PI_excel = result_PI_excel - tax_PI_excel
    profit_Diagramaa_excel = result_Diagramaa_excel - tax_Diagramaa_excel
    profit_Yandex_forms = result_Yandex_forms - tax_Yandex_forms
    profit_Google_forms = result_Google_forms - tax_Google_forms

    result = resultRCH1 + resultRCH2 + resultRCV1 + resultRCV2 + result_PI + result_OFormlenie + result_Kslov + result_Foto_doc + result_Diagramaa_doc + result_OFormlenie_po_GOSTy + result_OFormlmlenie_po_shriftam_k + result_Slaid_pre + result_Dizain_pre + result_Perexod_pre + result_Ani_pre + result_Foto_pre + result_PI_pre + result_Diagramaa_pre + result_Fail_xran + result_Table_15_excel + result_F_excel + result_Diz_excel + result_PI_excel + result_Diagramaa_excel + result_Yandex_forms + result_Google_forms;
    resultTax = result * tax;
    resultBymaga = resultBumagaRCH1 + resultBumagaRCH2 + resultBumagaRCV1 + resultBumagaRCV2;
    resultKraska = resultKraskaRCH1 + resultKraskaRCH2 + resultKraskaRCV1 + resultKraskaRCV2;
    resultKraskaCV = resultKraskaCVRCV1 + resultKraskaCVRCV2;
    profit = result - resultBymaga - resultKraska - resultKraskaCV - resultTax;

    //вывод
    document.getElementById("Kolichestvo").innerHTML = Kolichestvo;
    document.getElementById("result").innerHTML = result + " &#8381;";
    document.getElementById("resultB").innerHTML = resultBymaga + " &#8381;";
    document.getElementById("resultK").innerHTML = resultKraska + " &#8381;";
    document.getElementById("resultKCV").innerHTML = resultKraskaCV + " &#8381;";
    document.getElementById("resultTax").innerHTML = resultTax + " &#8381;";
    document.getElementById("profit").innerHTML = profit + " &#8381;";
    //итого
    document.getElementById("resultRCH1").innerHTML = resultRCH1 + " &#8381;";
    document.getElementById("resultRCH2").innerHTML = resultRCH2 + " &#8381;";
    document.getElementById("resultRCV1").innerHTML = resultRCV1 + " &#8381;";
    document.getElementById("resultRCV2").innerHTML = resultRCV2 + " &#8381;";

    document.getElementById("result_PI").innerHTML = result_PI + " &#8381;";
    document.getElementById("result_OFormlenie").innerHTML = result_OFormlenie + " &#8381;";
    document.getElementById("result_Kslov").innerHTML = result_Kslov + " &#8381;";
    document.getElementById("result_Foto_doc").innerHTML = result_Foto_doc + " &#8381;";
    document.getElementById("result_Diagramaa_doc").innerHTML = result_Diagramaa_doc + " &#8381;";
    document.getElementById("result_OFormlenie_po_GOSTy").innerHTML = result_OFormlenie_po_GOSTy + " &#8381;";
    document.getElementById("result_OFormlmlenie_po_shriftam_k").innerHTML = result_OFormlmlenie_po_shriftam_k + " &#8381;";
    document.getElementById("result_Slaid_pre").innerHTML = result_Slaid_pre + " &#8381;";
    document.getElementById("result_Dizain_pre").innerHTML = result_Dizain_pre + " &#8381;";
    document.getElementById("result_Perexod_pre").innerHTML = result_Perexod_pre + " &#8381;";
    document.getElementById("result_Ani_pre").innerHTML = result_Ani_pre + " &#8381;";
    document.getElementById("result_Foto_pre").innerHTML = result_Foto_pre + " &#8381;";
    document.getElementById("result_PI_pre").innerHTML = result_PI_pre + " &#8381;";
    document.getElementById("result_Diagramaa_pre").innerHTML = result_Diagramaa_pre + " &#8381;";
    document.getElementById("result_Fail_xran").innerHTML = result_Fail_xran + " &#8381;";
    document.getElementById("result_Table_15_excel").innerHTML = result_Table_15_excel + " &#8381;";
    document.getElementById("result_F_excel").innerHTML = result_F_excel + " &#8381;";
    document.getElementById("result_Diz_excel").innerHTML = result_Diz_excel + " &#8381;";
    document.getElementById("result_PI_excel").innerHTML = result_PI_excel + " &#8381;";
    document.getElementById("result_Diagramaa_excel").innerHTML = result_Diagramaa_excel + " &#8381;";
    document.getElementById("result_Yandex_forms").innerHTML = result_Yandex_forms + " &#8381;";
    document.getElementById("result_Google_forms").innerHTML = result_Google_forms + " &#8381;";

    document.getElementById("tax_PI").innerHTML = tax_PI + " &#8381;";
    document.getElementById("tax_OFormlenie").innerHTML = tax_OFormlenie + " &#8381;";
    document.getElementById("tax_Kslov").innerHTML = tax_Kslov + " &#8381;";
    document.getElementById("tax_Foto_doc").innerHTML = tax_Foto_doc + " &#8381;";
    document.getElementById("tax_Diagramaa_doc").innerHTML = tax_Diagramaa_doc + " &#8381;";
    document.getElementById("tax_OFormlenie_po_GOSTy").innerHTML = tax_OFormlenie_po_GOSTy + " &#8381;";
    document.getElementById("tax_OFormlmlenie_po_shriftam_k").innerHTML = tax_OFormlmlenie_po_shriftam_k + " &#8381;";
    document.getElementById("tax_Slaid_pre").innerHTML = tax_Slaid_pre + " &#8381;";
    document.getElementById("tax_Dizain_pre").innerHTML = tax_Dizain_pre + " &#8381;";
    document.getElementById("tax_Perexod_pre").innerHTML = tax_Perexod_pre + " &#8381;";
    document.getElementById("tax_Ani_pre").innerHTML = tax_Ani_pre + " &#8381;";
    document.getElementById("tax_Foto_pre").innerHTML = tax_Foto_pre + " &#8381;";
    document.getElementById("tax_PI_pre").innerHTML = tax_PI_pre + " &#8381;";
    document.getElementById("tax_Diagramaa_pre").innerHTML = tax_Diagramaa_pre + " &#8381;";
    document.getElementById("tax_Fail_xran").innerHTML = tax_Fail_xran + " &#8381;";
    document.getElementById("tax_Table_15_excel").innerHTML = tax_Table_15_excel + " &#8381;";
    document.getElementById("tax_F_excel").innerHTML = tax_F_excel + " &#8381;";
    document.getElementById("tax_Diz_excel").innerHTML = tax_Diz_excel + " &#8381;";
    document.getElementById("tax_PI_excel").innerHTML = tax_PI_excel + " &#8381;";
    document.getElementById("tax_Diagramaa_excel").innerHTML = tax_Diagramaa_excel + " &#8381;";
    document.getElementById("tax_Yandex_forms").innerHTML = tax_Yandex_forms + " &#8381;";
    document.getElementById("tax_Google_forms").innerHTML = tax_Google_forms + " &#8381;";

    document.getElementById("profit_PI").innerHTML = profit_PI + " &#8381;";
    document.getElementById("profit_OFormlenie").innerHTML = profit_OFormlenie + " &#8381;";
    document.getElementById("profit_Kslov").innerHTML = profit_Kslov + " &#8381;";
    document.getElementById("profit_Foto_doc").innerHTML = profit_Foto_doc + " &#8381;";
    document.getElementById("profit_Diagramaa_doc").innerHTML = profit_Diagramaa_doc + " &#8381;";
    document.getElementById("profit_OFormlenie_po_GOSTy").innerHTML = profit_OFormlenie_po_GOSTy + " &#8381;";
    document.getElementById("profit_OFormlmlenie_po_shriftam_k").innerHTML = profit_OFormlmlenie_po_shriftam_k + " &#8381;";
    document.getElementById("profit_Slaid_pre").innerHTML = profit_Slaid_pre + " &#8381;";
    document.getElementById("profit_Dizain_pre").innerHTML = profit_Dizain_pre + " &#8381;";
    document.getElementById("profit_Perexod_pre").innerHTML = profit_Perexod_pre + " &#8381;";
    document.getElementById("profit_Ani_pre").innerHTML = profit_Ani_pre + " &#8381;";
    document.getElementById("profit_Foto_pre").innerHTML = profit_Foto_pre + " &#8381;";
    document.getElementById("profit_PI_pre").innerHTML = profit_PI_pre + " &#8381;";
    document.getElementById("profit_Diagramaa_pre").innerHTML = profit_Diagramaa_pre + " &#8381;";
    document.getElementById("profit_Fail_xran").innerHTML = profit_Fail_xran + " &#8381;";
    document.getElementById("profit_Table_15_excel").innerHTML = profit_Table_15_excel + " &#8381;";
    document.getElementById("profit_F_excel").innerHTML = profit_F_excel + " &#8381;";
    document.getElementById("profit_Diz_excel").innerHTML = profit_Diz_excel + " &#8381;";
    document.getElementById("profit_PI_excel").innerHTML = profit_PI_excel + " &#8381;";
    document.getElementById("profit_Diagramaa_excel").innerHTML = profit_Diagramaa_excel + " &#8381;";
    document.getElementById("profit_Yandex_forms").innerHTML = profit_Yandex_forms + " &#8381;";
    document.getElementById("profit_Google_forms").innerHTML = profit_Google_forms + " &#8381;";




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

    document.getElementById("taxRCH1").innerHTML = taxRCH1 + " &#8381;";
    document.getElementById("taxRCH2").innerHTML = taxRCH2 + " &#8381;";
    document.getElementById("taxRCV1").innerHTML = taxRCV1 + " &#8381;";
    document.getElementById("taxRCV2").innerHTML = taxRCV2 + " &#8381;";
}
/*
function multiplyNumber() {
    let RCH1 = parseInt(document.getElementById("RCH1").value);
    let RCH2 = parseInt(document.getElementById("RCH2").value);
    let RCV1 = parseInt(document.getElementById("RCV1").value);
    let RCV2 = parseInt(document.getElementById("RCV2").value);
    
    let PI = parseInt(document.getElementById("PI").value);
    let OFormlenie = parseInt(document.getElementById("OFormlenie").value);
    let Kslov = parseInt(document.getElementById("Kslov").value);
    let Foto_doc = parseInt(document.getElementById("Foto_doc").value);
    let Diagramaa_doc = parseInt(document.getElementById("Diagramaa_doc").value);
    let OFormlenie_po_GOSTy = parseInt(document.getElementById("OFormlenie_po_GOSTy").value);
    let OFormlmlenie_po_shriftam_k = parseInt(document.getElementById("OFormlmlenie_po_shriftam_k").value);
    let Slaid_pre = parseInt(document.getElementById("Slaid_pre").value);
    let Dizain_pre = parseInt(document.getElementById("Dizain_pre").value);
    let Perexod_pre = parseInt(document.getElementById("Perexod_pre").value);
    let Ani_pre = parseInt(document.getElementById("Ani_pre").value);
    let Foto_pre = parseInt(document.getElementById("Foto_pre").value);
    let PI_pre = parseInt(document.getElementById("PI_pre").value);
    let Diagramaa_pre = parseInt(document.getElementById("Diagramaa_pre").value);
    let Fail_xran = parseInt(document.getElementById("Fail_xran").value);
    let Table_15_excel = parseInt(document.getElementById("Table_15_excel").value);
    let F_excel = parseInt(document.getElementById("F_excel").value);
    let Diz_excel = parseInt(document.getElementById("Diz_excel").value);
    let PI_excel = parseInt(document.getElementById("PI_excel").value);
    let Diagramaa_excel = parseInt(document.getElementById("Diagramaa_excel").value);
    let Yandex_forms = parseInt(document.getElementById("Yandex_forms").value);
    let Google_forms = parseInt(document.getElementById("Google_forms").value);
    
    //переменные
    let result = 0
    let resultBymaga = 0;
    let resultKraska = 0;
    let resultKraskaCV = 0;
    let profit = 0;
    let resultTax = 0;
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
    let Kolichestvo = 0;
    let taxRCH1 = 0;
    let taxRCH2 = 0;
    let taxRCV1 = 0;
    let taxRCV2 = 0;
    
    let result_PI = 0;
    let result_OFormlenie = 0;
    let result_Kslov = 0;
    let result_Foto_doc = 0;
    let result_Diagramaa_doc = 0;
    let result_OFormlenie_po_GOSTy = 0;
    let result_OFormlmlenie_po_shriftam_k = 0;
    let result_Slaid_pre = 0;
    let result_Dizain_pre = 0;
    let result_Perexod_pre = 0;
    let result_Ani_pre = 0;
    let result_Foto_pre = 0;
    let result_PI_pre = 0;
    let result_Diagramaa_pre = 0;
    let result_Fail_xran = 0;
    let result_Table_15_excel = 0;
    let result_F_excel = 0;
    let result_Diz_excel = 0;
    let result_PI_excel = 0;
    let result_Diagramaa_excel = 0;
    let result_Yandex_forms = 0;
    let result_Google_forms = 0;
    
    let tax_PI = 0;
    let tax_OFormlenie = 0;
    let tax_Kslov = 0;
    let tax_Foto_doc = 0;
    let tax_Diagramaa_doc = 0;
    let tax_OFormlenie_po_GOSTy = 0;
    let tax_OFormlmlenie_po_shriftam_k = 0;
    let tax_Slaid_pre = 0;
    let tax_Dizain_pre = 0;
    let tax_Perexod_pre = 0;
    let tax_Ani_pre = 0;
    let tax_Foto_pre = 0;
    let tax_PI_pre = 0;
    let tax_Diagramaa_pre = 0;
    let tax_Fail_xran = 0;
    let tax_Table_15_excel = 0;
    let tax_F_excel = 0;
    let tax_Diz_excel = 0;
    let tax_PI_excel = 0;
    let tax_Diagramaa_excel = 0;
    let tax_Yandex_forms = 0;
    let tax_Google_forms = 0;

    let profit_PI = 0;
    let profit_OFormlenie = 0;
    let profit_Kslov = 0;
    let profit_Foto_doc = 0;
    let profit_Diagramaa_doc = 0;
    let profit_OFormlenie_po_GOSTy = 0;
    let profit_OFormlmlenie_po_shriftam_k = 0;
    let profit_Slaid_pre = 0;
    let profit_Dizain_pre = 0;
    let profit_Perexod_pre = 0;
    let profit_Ani_pre = 0;
    let profit_Foto_pre = 0;
    let profit_PI_pre = 0;
    let profit_Diagramaa_pre = 0;
    let profit_Fail_xran = 0;
    let profit_Table_15_excel = 0;
    let profit_F_excel = 0;
    let profit_Diz_excel = 0;
    let profit_PI_excel = 0;
    let profit_Diagramaa_excel = 0;
    let profit_Yandex_forms = 0;
    let profit_Google_forms = 0;

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
    resultTax = result * tax;
    resultBymaga = resultBumagaRCH1 + resultBumagaRCH2 + resultBumagaRCV1 + resultBumagaRCV2;
    resultKraska = resultKraskaRCH1 + resultKraskaRCH2 + resultKraskaRCV1 + resultKraskaRCV2;
    resultKraskaCV = resultKraskaCVRCV1 + resultKraskaCVRCV2;
    profit = result - resultBymaga - resultKraska - resultKraskaCV - resultTax;

    taxRCH1 = resultRCH1 * tax
    taxRCH2 = resultRCH2 * tax
    taxRCV1 = resultRCV1 * tax
    taxRCV2 = resultRCV2 * tax
    profitRCH1 = resultRCH1 - resultBumagaRCH1 - resultKraskaRCH1 - taxRCH1
    profitRCH2 = resultRCH2 - resultBumagaRCH2 - resultKraskaRCH2 - taxRCH2
    profitRCV1 = resultRCV1 - resultBumagaRCV1 - resultKraskaRCV1 - resultKraskaCVRCV1 - taxRCV1
    profitRCV2 = resultRCV2 - resultBumagaRCV2 - resultKraskaRCV2 - resultKraskaCVRCV2 - taxRCV2
    Kolichestvo = RCH1 + RCH2 + RCV1 + RCV2


    result_PI = PI *  poisk_informacii_5_001
    result_OFormlenie = OFormlenie *  oformlenie_5_002 
    result_Kslov = Kslov *  kolichestvo_slov_5_003 * 0.001
    result_Foto_doc = Foto_doc *  foto 
    result_Diagramaa_doc = Diagramaa_doc * diagramma 
    result_OFormlenie_po_GOSTy = OFormlenie_po_GOSTy * oformlenie_po_gostu_r7_0_97_2016 
    result_OFormlmlenie_po_shriftam_k = OFormlmlenie_po_shriftam_k * oformlenie_po_shriftam_klienta 
    result_Slaid_pre = Slaid_pre * slajd_prezentacii_6_001
    result_Dizain_pre = Dizain_pre * dizajn_prezentacii_6_002 
    result_Perexod_pre = Perexod_pre *  perekhody_v_prezentacii_6_003 
    result_Ani_pre = Ani_pre * animacii_v_prezentacii_6_004 
    result_Foto_pre = Foto_pre * foto_dlya_prezentacii_6_005 
    result_PI_pre = PI_pre * poisk_informacii_6_006 
    result_Diagramaa_pre = Diagramaa_pre * diagramma_6_007 
    result_Fail_xran = Fail_xran * fajl_dlya_hraneniya_7_001 
    result_Table_15_excel = Table_15_excel *  tablica_15_yacheek_8_001 
    result_F_excel = F_excel * formula_8_002 
    result_Diz_excel = Diz_excel * dizajn_lista_8_003 
    result_PI_excel = PI_excel * poisk_informacii_8_004 
    result_Diagramaa_excel = Diagramaa_excel * diagramma_8_005
    result_Yandex_forms = Yandex_forms * sozdanie_formy_yandex 
    result_Google_forms = Google_forms * sozdanie_formy_google 

    tax_PI = tax * result_PI 
    tax_OFormlenie = tax * result_OFormlenie
    tax_Kslov = tax * result_Kslov
    tax_Foto_doc = tax * result_Foto_doc
    tax_Diagramaa_doc = tax * result_Diagramaa_doc
    tax_OFormlenie_po_GOSTy = tax * result_OFormlenie_po_GOSTy
    tax_OFormlmlenie_po_shriftam_k = tax * result_OFormlmlenie_po_shriftam_k
    tax_Slaid_pre = tax * result_Slaid_pre
    tax_Dizain_pre = tax * result_Dizain_pre
    tax_Perexod_pre = tax * result_Perexod_pre
    tax_Ani_pre = tax * result_Ani_pre
    tax_Foto_pre = tax * result_Foto_pre
    tax_PI_pre = tax * result_PI_pre
    tax_Diagramaa_pre = tax * result_Diagramaa_pre
    tax_Fail_xran = tax * result_Fail_xran
    tax_Table_15_excel = tax * result_Table_15_excel
    tax_F_excel = tax * result_F_excel
    tax_Diz_excel = tax * result_Diz_excel
    tax_PI_excel = tax * result_PI_excel
    tax_Diagramaa_excel = tax *  result_Diagramaa_excel
    tax_Yandex_forms = tax * result_Yandex_forms
    tax_Google_forms = tax * result_Google_forms

     profit_PI = result_PI -  tax_PI
     profit_OFormlenie = result_OFormlenie - tax_OFormlenie
     profit_Kslov = result_Kslov - tax_Kslov
     profit_Foto_doc = result_Foto_doc - tax_Foto_doc
     profit_Diagramaa_doc = result_Diagramaa_doc - tax_Diagramaa_doc
     profit_OFormlenie_po_GOSTy = result_OFormlenie_po_GOSTy - tax_OFormlenie_po_GOSTy
     profit_OFormlmlenie_po_shriftam_k = result_OFormlmlenie_po_shriftam_k - tax_OFormlmlenie_po_shriftam_k
     profit_Slaid_pre = result_Slaid_pre - tax_Slaid_pre
     profit_Dizain_pre = result_Dizain_pre - tax_Dizain_pre
     profit_Perexod_pre = result_Perexod_pre - tax_Perexod_pre
     profit_Ani_pre = result_Ani_pre - tax_Ani_pre
     profit_Foto_pre = result_Foto_pre - tax_Foto_pre
     profit_PI_pre = result_PI_pre - tax_PI_pre
     profit_Diagramaa_pre = result_Diagramaa_pre - tax_Diagramaa_pre
     profit_Fail_xran = result_Fail_xran - tax_Fail_xran
     profit_Table_15_excel = result_Table_15_excel - tax_Table_15_excel
     profit_F_excel = result_F_excel - tax_F_excel
     profit_Diz_excel = result_Diz_excel - tax_Diz_excel
     profit_PI_excel = result_PI_excel - tax_PI_excel
     profit_Diagramaa_excel = result_Diagramaa_excel - tax_Diagramaa_excel
     profit_Yandex_forms = result_Yandex_forms - tax_Yandex_forms
     profit_Google_forms = result_Google_forms - tax_Google_forms



//вывод
    document.getElementById("Kolichestvo").innerHTML = Kolichestvo;
    document.getElementById("result").innerHTML = result + " &#8381;";
    document.getElementById("resultB").innerHTML = resultBymaga + " &#8381;";
    document.getElementById("resultK").innerHTML = resultKraska + " &#8381;";
    document.getElementById("resultKCV").innerHTML = resultKraskaCV + " &#8381;";
    document.getElementById("resultTax").innerHTML = resultTax + " &#8381;";
    document.getElementById("profit").innerHTML = profit + " &#8381;";
//итого
    document.getElementById("resultRCH1").innerHTML = resultRCH1 + " &#8381;";
    document.getElementById("resultRCH2").innerHTML = resultRCH2 + " &#8381;";
    document.getElementById("resultRCV1").innerHTML = resultRCV1 + " &#8381;";
    document.getElementById("resultRCV2").innerHTML = resultRCV2 + " &#8381;";

    document.getElementById("result_PI").innerHTML = result_PI + " &#8381;";
    document.getElementById("result_OFormlenie").innerHTML = result_OFormlenie + " &#8381;";
    document.getElementById("result_Kslov").innerHTML = result_Kslov + " &#8381;";
    document.getElementById("result_Foto_doc").innerHTML = result_Foto_doc + " &#8381;";
    document.getElementById("result_Diagramaa_doc").innerHTML = result_Diagramaa_doc + " &#8381;";
    document.getElementById("result_OFormlenie_po_GOSTy").innerHTML = result_OFormlenie_po_GOSTy + " &#8381;";
    document.getElementById("result_OFormlmlenie_po_shriftam_k").innerHTML = result_OFormlmlenie_po_shriftam_k + " &#8381;";
    document.getElementById("result_Slaid_pre").innerHTML = result_Slaid_pre + " &#8381;";
    document.getElementById("result_Dizain_pre").innerHTML = result_Dizain_pre + " &#8381;";
    document.getElementById("result_Perexod_pre").innerHTML = result_Perexod_pre + " &#8381;";
    document.getElementById("result_Ani_pre").innerHTML = result_Ani_pre + " &#8381;";
    document.getElementById("result_Foto_pre").innerHTML = result_Foto_pre + " &#8381;";
    document.getElementById("result_PI_pre").innerHTML = result_PI_pre + " &#8381;";
    document.getElementById("result_Diagramaa_pre").innerHTML = result_Diagramaa_pre + " &#8381;";
    document.getElementById("result_Fail_xran").innerHTML = result_Fail_xran + " &#8381;";
    document.getElementById("result_Table_15_excel").innerHTML = result_Table_15_excel + " &#8381;";
    document.getElementById("result_F_excel").innerHTML = result_F_excel + " &#8381;";
    document.getElementById("result_Diz_excel").innerHTML = result_Diz_excel + " &#8381;";
    document.getElementById("result_PI_excel").innerHTML = result_PI_excel + " &#8381;";
    document.getElementById("result_Diagramaa_excel").innerHTML = result_Diagramaa_excel + " &#8381;";
    document.getElementById("result_Yandex_forms").innerHTML = result_Yandex_forms + " &#8381;";
    document.getElementById("result_Google_forms").innerHTML = result_Google_forms + " &#8381;";

    document.getElementById("tax_PI").innerHTML = tax_PI + " &#8381;";
    document.getElementById("tax_OFormlenie").innerHTML = tax_OFormlenie + " &#8381;";
    document.getElementById("tax_Kslov").innerHTML = tax_Kslov + " &#8381;";
    document.getElementById("tax_Foto_doc").innerHTML = tax_Foto_doc + " &#8381;";
    document.getElementById("tax_Diagramaa_doc").innerHTML = tax_Diagramaa_doc + " &#8381;";
    document.getElementById("tax_OFormlenie_po_GOSTy").innerHTML = tax_OFormlenie_po_GOSTy + " &#8381;";
    document.getElementById("tax_OFormlmlenie_po_shriftam_k").innerHTML = tax_OFormlmlenie_po_shriftam_k + " &#8381;";
    document.getElementById("tax_Slaid_pre").innerHTML = tax_Slaid_pre + " &#8381;";
    document.getElementById("tax_Dizain_pre").innerHTML = tax_Dizain_pre + " &#8381;";
    document.getElementById("tax_Perexod_pre").innerHTML =taxt_Perexod_pre + " &#8381;";
    document.getElementById("tax_Ani_pre").innerHTML = tax_Ani_pre + " &#8381;";
    document.getElementById("tax_Foto_pre").innerHTML = tax_Foto_pre + " &#8381;";
    document.getElementById("tax_PI_pre").innerHTML = tax_PI_pre + " &#8381;";
    document.getElementById("tax_Diagramaa_pre").innerHTML = tax_Diagramaa_pre + " &#8381;";
    document.getElementById("tax_Fail_xran").innerHTML = tax_Fail_xran + " &#8381;";
    document.getElementById("tax_Table_15_excel").innerHTML = tax_Table_15_excel + " &#8381;";
    document.getElementById("tax_F_excel").innerHTML = tax_F_excel + " &#8381;";
    document.getElementById("tax_Diz_excel").innerHTML = tax_Diz_excel + " &#8381;";
    document.getElementById("tax_PI_excel").innerHTML = tax_PI_excel + " &#8381;";
    document.getElementById("tax_Diagramaa_excel").innerHTML = tax_Diagramaa_excel + " &#8381;";
    document.getElementById("tax_Yandex_forms").innerHTML = tax_Yandex_forms + " &#8381;";
    document.getElementById("tax_Google_forms").innerHTML = tax_Google_forms + " &#8381;";

    document.getElementById("profit_PI").innerHTML = profit_PI + " &#8381;";
    document.getElementById("profit_OFormlenie").innerHTML = profit_OFormlenie + " &#8381;";
    document.getElementById("profit_Kslov").innerHTML = profit_Kslov + " &#8381;";
    document.getElementById("profit_Foto_doc").innerHTML = profit_Foto_doc + " &#8381;";
    document.getElementById("profit_Diagramaa_doc").innerHTML = profit_Diagramaa_doc + " &#8381;";
    document.getElementById("profit_OFormlenie_po_GOSTy").innerHTML = profit_OFormlenie_po_GOSTy + " &#8381;";
    document.getElementById("profit_OFormlmlenie_po_shriftam_k").innerHTML = profit_OFormlmlenie_po_shriftam_k + " &#8381;";
    document.getElementById("profit_Slaid_pre").innerHTML = profit_Slaid_pre + " &#8381;";
    document.getElementById("profit_Dizain_pre").innerHTML = profit_Dizain_pre + " &#8381;";
    document.getElementById("profit_Perexod_pre").innerHTML =profit_Perexod_pre + " &#8381;";
    document.getElementById("profit_Ani_pre").innerHTML = profit_Ani_pre + " &#8381;";
    document.getElementById("profit_Foto_pre").innerHTML = profit_Foto_pre + " &#8381;";
    document.getElementById("profit_PI_pre").innerHTML = profit_PI_pre + " &#8381;";
    document.getElementById("profit_Diagramaa_pre").innerHTML = profit_Diagramaa_pre + " &#8381;";
    document.getElementById("profit_Fail_xran").innerHTML = profit_Fail_xran + " &#8381;";
    document.getElementById("profit_Table_15_excel").innerHTML = profit_Table_15_excel + " &#8381;";
    document.getElementById("profit_F_excel").innerHTML = profit_F_excel + " &#8381;";
    document.getElementById("profit_Diz_excel").innerHTML = profit_Diz_excel + " &#8381;";
    document.getElementById("profit_PI_excel").innerHTML = profit_PI_excel + " &#8381;";
    document.getElementById("profit_Diagramaa_excel").innerHTML = profit_Diagramaa_excel + " &#8381;";
    document.getElementById("profit_Yandex_forms").innerHTML = profit_Yandex_forms + " &#8381;";
    document.getElementById("profit_Google_forms").innerHTML = profit_Google_forms + " &#8381;";




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

    document.getElementById("taxRCH1").innerHTML = taxRCH1 + " &#8381;";
    document.getElementById("taxRCH2").innerHTML = taxRCH2 + " &#8381;";
    document.getElementById("taxRCV1").innerHTML = taxRCV1 + " &#8381;";
    document.getElementById("taxRCV2").innerHTML = taxRCV2 + " &#8381;";
} */