// ===============================
// Screen Size Conversion (Mutare Unitatem)
// ===============================

// DOM取得
const inchInput = document.getElementById("inchInput");
const aspectRatio = document.getElementById("aspectRatio");

const cmDiagonal = document.getElementById("cmDiagonal");
const cmWidth = document.getElementById("cmWidth");
const cmHeight = document.getElementById("cmHeight");

const resetButton = document.getElementById("resetButton");

// 計算処理
function calculateScreen() {
    const inch = Number(inchInput.value);
    if (!inch) {
        cmDiagonal.value = "";
        cmWidth.value = "";
        cmHeight.value = "";
        return;
    }

    // 対角インチ → cm
    const diagonalCm = inch * 2.54;
    cmDiagonal.value = diagonalCm.toFixed(2);

    // アスペクト比取得
    const [w, h] = aspectRatio.value.split("-").map(Number);

    // 幅・高さの計算
    const ratio = Math.sqrt(w * w + h * h);

    const widthCm = diagonalCm * (w / ratio);
    const heightCm = diagonalCm * (h / ratio);

    cmWidth.value = widthCm.toFixed(2);
    cmHeight.value = heightCm.toFixed(2);
}

// リセット
resetButton.addEventListener("click", () => {
    inchInput.value = "";
    cmDiagonal.value = "";
    cmWidth.value = "";
    cmHeight.value = "";
});

// イベント設定
inchInput.addEventListener("input", calculateScreen);
aspectRatio.addEventListener("change", calculateScreen);
