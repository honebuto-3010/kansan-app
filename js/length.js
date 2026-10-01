// ===============================
// Length Conversion (Mutare Unitatem)
// ===============================

// DOM取得
const unitPair = document.getElementById("unitPair");
const labelA = document.getElementById("labelA");
const labelB = document.getElementById("labelB");
const inputA = document.getElementById("inputA");
const inputB = document.getElementById("inputB");
const resetButton = document.getElementById("resetButton");

// 変換ペアの設定
function updateLabels() {
    const pair = unitPair.value;

    switch (pair) {
        case "mm-cm":
            labelA.textContent = "mm";
            labelB.textContent = "cm";
            break;

        case "cm-m":
            labelA.textContent = "cm";
            labelB.textContent = "m";
            break;

        case "m-km":
            labelA.textContent = "m";
            labelB.textContent = "km";
            break;

        case "m-yard":
            labelA.textContent = "m";
            labelB.textContent = "yard";
            break;

        case "cm-feet":
            labelA.textContent = "cm";
            labelB.textContent = "feet";
            break;
    }

    // 入力値をクリア
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
        case "mm-cm":
            result = value / 10;
            break;

        case "cm-m":
            result = value / 100;
            break;

        case "m-km":
            result = value / 1000;
            break;

        case "m-yard":
            result = value * 1.09361;
            break;

        case "cm-feet":
            result = value / 30.48;
            break;
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
        case "mm-cm":
            result = value * 10;
            break;

        case "cm-m":
            result = value * 100;
            break;

        case "m-km":
            result = value * 1000;
            break;

        case "m-yard":
            result = value / 1.09361;
            break;

        case "cm-feet":
            result = value * 30.48;
            break;
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
