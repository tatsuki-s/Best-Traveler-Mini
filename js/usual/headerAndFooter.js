//ヘッダーとフッターの読み込み
fetch("best-traveler-mini/header.html")
.then((response) => response.text())
.then((data) => document.querySelector("#header").innerHTML = data);
fetch("best-traveler-mini/footer.html")
.then((response) => response.text())
.then((data) => document.querySelector("#footer").innerHTML = data);
