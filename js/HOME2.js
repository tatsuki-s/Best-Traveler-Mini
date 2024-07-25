//言語プルダウンの取得 
var gengo = document.querySelector(".gengo"); 
//言語の変更を検出 
gengo.addEventListener("change",changeLanguage); 
//変更された言語の取得
const languageSelect = document.querySelector(".gengo");

function changeLanguage() {
    alert("言語が" + gengo.value + "に変更されました");
}
