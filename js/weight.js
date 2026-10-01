// ===============================
// Weight Conversion (Mutare Unitatem)
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
        case "g-kg":
            labelA.textContent = "g";
            labelB.textContent = "kg";
            break;

        case "kg-t":
            labelA.textContent = "kg";
            labelB.textContent = "t";
            break;

        case "g-t":
            labelA.textContent = "g";
            labelB.textContent = "t";
            break;

        case "kg-lb":
            labelA.textContent = "kg";
            labelB.textContent = "lb";
            break;

        case "g-lb":
            labelA.textContent = "g";
            labelB.textContent = "lb";
            break;

        case "lb-oz":
            labelA.textContent = "lb";
            labelB.textContent = "oz";
            break;

        case "g-oz":
            labelA.textContent = "g";
            labelB.textContent = "oz";
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
        case "g-kg":
            result = value / 1000;
            break;

        case "kg-t":
            result = value / 1000;
            break;

        case "g-t":
            result = value / 1000000;
            break;

        case "kg-lb":
            result = value * 2.20462;
            break;

        case "g-lb":
            result = value / 453.592;
            break;

        case "lb-oz":
            result = value * 16;
            break;

        case "g-oz":
            result = value / 28.3495;
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
        case "g-kg":
            result = value * 1000;
            break;

        case "kg-t":
            result = value * 1000;
            break;

        case "g-t":
            result = value * 1000000;
            break;

        case "kg-lb":
            result = value / 2.20462;
            break;

        case "g-lb":
            result = value * 453.592;
            break;

        case "lb-oz":
            result = value / 16;
            break;

        case "g-oz":
            result = value * 28.3495;
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
