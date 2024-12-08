//ヘッダーとフッターの読み込み
fetch("/Best-Traveler-Mini/header.html")
.then((response) => response.text())
.then((data) => document.querySelector("#header").innerHTML = data);
fetch("/Best-Traveler-Mini/footer.html")
.then((response) => response.text())
.then((data) => document.querySelector("#footer").innerHTML = data);
