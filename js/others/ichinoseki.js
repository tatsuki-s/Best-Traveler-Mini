var youbi = document.querySelector(".youbi");
const heijitsu = document.querySelector(".youbi .heijitsu");
const kyujitsu = document.querySelector(".youbi .kyujitsu");

const heijitsuCss = document.querySelectorAll(".hei");
const kyujitsuCss = document.querySelectorAll(".kyu");

function changeYoubi() {
    // alert("曜日が" + youbi.value + "に変更されました");
    if (youbi.value === heijitsu.value) {
        // console.log("平日になったよ");
        kyujitsuCss.forEach(element => {
            element.style.display = "none";
        });
        heijitsuCss.forEach(element => {
            element.style.display = "flex";
        });
    } else if (youbi.value === kyujitsu.value) {
        // console.log("休日になったよ");
        kyujitsuCss.forEach(element => {
            element.style.display = "flex";
        });
        heijitsuCss.forEach(element => {
            element.style.display = "none";
        });
    }
}

youbi.addEventListener("change", changeYoubi);

changeYoubi;

// 高さを設定する

function setBoxHeight() {
    // メディアクエリで指定された幅以上のデバイスに対してのみ高さを設定
    if (window.innerWidth >= 1000) {
        // busStopName IDの高さを取得
        const busStopElement = document.getElementById('busStopName');
        const busStopHeight = busStopElement.offsetHeight;

        // ビューポートの高さ (100vh) を取得
        const viewportHeight = window.innerHeight;

        // 100vh から busStopName の高さを引いた値を計算
        const newHeight = viewportHeight - busStopHeight;

        // 高さが負の値にならないようにする
        const boxElement = document.getElementById('Box');
        boxElement.style.height = (newHeight > 0 ? newHeight : 0) + 'px';
    } else {
        // 幅が600px未満のデバイスでは高さの設定を解除
        const boxElement = document.getElementById('Box');
        boxElement.style.height = 'auto';
    }
}

// ページロード時とリサイズ時に高さを調整
window.onload = setBoxHeight;
window.onresize = setBoxHeight;

