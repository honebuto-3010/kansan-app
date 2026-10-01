// ===============================
// Capacity Conversion (Mutare Unitatem)
// ===============================

// DOM取得
const unitPair = document.getElementById("unitPair");
const labelA = document.getElementById("labelA");
const labelB = document.getElementById("labelB");
const inputA = document.getElementById("inputA");
const inputB = document.getElementById("inputB");
const resetButton = document.getElementById("resetButton");

// 変換ペアのラベル設定
function updateLabels() {
    const pair = unitPair.value;

    const [a, b] = pair.split("-");
    labelA.textContent = a;
    labelB.textContent = b;

    inputA.value = "";
    inputB.value = "";
}

// A → B の変換
function convertAtoB() {
    const value = Number(inputA.value);
    const pair = unitPair.value;

    if (inputA.value === "") {
        inputB.value = "";
        return;
    }

    let result = 0;

    switch (pair) {

        // 日常・料理系
        case "ml-dl": result = value / 100; break;
        case "dl-l": result = value / 10; break;
        case "ml-l": result = value / 1000; break;
        case "l-kl": result = value / 1000; break;

        case "ml-cc": result = value; break;
        case "l-cc": result = value * 1000; break;

        case "ml-oz": result = value / 29.5735; break;
        case "l-cup": result = value * 4.22675; break;

        // ガソリン・石油系
        case "l-gallon": result = value / 3.78541; break;
        case "l-barrel": result = value / 158.987; break;
        case "gallon-barrel": result = value / 42; break;

        // 工業・大容量
        case "l-m3": result = value / 1000; break;
        case "ml-m3": result = value / 1000000; break;
    }

    inputB.value = result;
}

// B → A の変換
function convertBtoA() {
    const value = Number(inputB.value);
    const pair = unitPair.value;

    if (inputB.value === "") {
        inputA.value = "";
        return;
    }

    let result = 0;

    switch (pair) {

        // 日常・料理系
        case "ml-dl": result = value * 100; break;
        case "dl-l": result = value * 10; break;
        case "ml-l": result = value * 1000; break;
        case "l-kl": result = value * 1000; break;

        case "ml-cc": result = value; break;
        case "l-cc": result = value / 1000; break;

        case "ml-oz": result = value * 29.5735; break;
        case "l-cup": result = value / 4.22675; break;

        // ガソリン・石油系
        case "l-gallon": result = value * 3.78541; break;
        case "l-barrel": result = value * 158.987; break;
        case "gallon-barrel": result = value * 42; break;

        // 工業・大容量
        case "l-m3": result = value * 1000; break;
        case "ml-m3": result = value * 1000000; break;
    }

    inputA.value = result;
}

// リセット
resetButton.addEventListener("click", () => {
    inputA.value = "";
    inputB.value = "";
});

// イベント設定
unitPair.addEventListener("change", updateLabels);
inputA.addEventListener("input", convertAtoB);
inputB.addEventListener("input", convertBtoA);

// 初期化
updateLabels();
