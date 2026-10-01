// ===============================
// Golden Ratio (Mutare Unitatem)
// ===============================

canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.width = longSide;
canvas.height = shortSide;

// DOM取得
const shortInput = document.getElementById("shortInput");
const longInput = document.getElementById("longInput");
const goldenBox = document.getElementById("goldenBox");
const spiralCanvas = document.getElementById("spiralCanvas");   // ★追加
const resetButton = document.getElementById("resetButton");

// 黄金比 φ
const PHI = (1 + Math.sqrt(5)) / 2;  // 1.6180339887...

// 短辺 → 長辺
function shortToLong() {
    const shortVal = Number(shortInput.value);
    if (!shortVal) {
        longInput.value = "";
        updateBox(0, 0);
        return;
    }

    const longVal = shortVal * PHI;
    longInput.value = longVal.toFixed(2);

    updateBox(longVal, shortVal);
}

// 長辺 → 短辺
function longToShort() {
    const longVal = Number(longInput.value);
    if (!longVal) {
        shortInput.value = "";
        updateBox(0, 0);
        return;
    }

    const shortVal = longVal / PHI;
    shortInput.value = shortVal.toFixed(2);

    updateBox(longVal, shortVal);
}

// 黄金螺旋を描く（ゴールド）
function drawSpiral(width, height) {
    const ctx = spiralCanvas.getContext("2d");
    ctx.clearRect(0, 0, width, height);

    ctx.strokeStyle = "rgba(218,165,32,0.9)"; // ゴールド
    ctx.lineWidth = 2;

    let x = 0;
    let y = 0;
    let w = width;
    let h = height;

    ctx.beginPath();

    // 四分円を連続で描く（黄金螺旋の基本構造）
    for (let i = 0; i < 6; i++) {
        ctx.arc(
            x + w,          // 中心X
            y + h,          // 中心Y
            Math.min(w, h), // 半径
            Math.PI,        // 始点
            Math.PI * 1.5   // 終点
        );

        // 黄金比で次の矩形に移動
        const newW = h;
        const newH = w - h;

        x = x + (w - newW);
        y = y;

        w = newW;
        h = newH;

        if (w <= 1 || h <= 1) break;
    }

    ctx.stroke();
}

// 黄金比長方形の描画（螺旋用 canvas サイズ同期）
function updateBox(longSide, shortSide) {
    if (!longSide || !shortSide) {
        goldenBox.style.width = "0px";
        goldenBox.style.height = "0px";

        spiralCanvas.width = 0;
        spiralCanvas.height = 0;
        return;
    }

    // 表示サイズ（px）に変換
    const scale = 4;  // 1/4サイズで表示（調整可能）

    const boxWidth = longSide * scale;
    const boxHeight = shortSide * scale;

    goldenBox.style.width = boxWidth + "px";
    goldenBox.style.height = boxHeight + "px";

    // canvas を黄金比長方形と同じサイズにする
    spiralCanvas.width = boxWidth;
    spiralCanvas.height = boxHeight;

    // ★ 黄金螺旋を描く
    drawSpiral(boxWidth, boxHeight);
}

// リセット
resetButton.addEventListener("click", () => {
    shortInput.value = "";
    longInput.value = "";
    updateBox(0, 0);
});

// イベント設定
shortInput.addEventListener("input", shortToLong);
longInput.addEventListener("input", longToShort);
