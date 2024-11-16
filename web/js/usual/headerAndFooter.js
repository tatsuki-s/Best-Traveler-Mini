//ヘッダーとフッターの読み込み
fetch("/header.html")
.then((response) => response.text())
.then((data) => document.querySelector("#header").innerHTML = data);
fetch("/footer.html")
.then((response) => response.text())
.then((data) => document.querySelector("#footer").innerHTML = data);

//どこをクリックしてもメニューが開くように

//こいつがないとチェックボックス検知できない
document.addEventListener("DOMContentLoaded", () => {
    //全てのクリックを検知
    document.addEventListener("click", (event) => {
        
        //メニューボタンを取得
        const menuButton = document.querySelector("label.menu-btn");
        //メニュー全体を取得
        const menu = document.querySelector("#menu-content");

        //メニューを閉じる関数
        function closeMenu() {
            menuButton.checked = false;
            //alert("closed");
        }

        //メニューを開く関数
        function openMenu() {
            menuButton.checked = true;
            //alert("opened");
        }

        //ここにif分でメニューを開く条件を書く

    });
});
