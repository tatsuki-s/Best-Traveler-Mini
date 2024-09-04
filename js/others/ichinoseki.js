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
