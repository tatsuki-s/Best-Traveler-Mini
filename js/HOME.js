// //言語プルダウンの取得 
// var gengo = document.querySelector(".gengo"); 
// //言語の変更を検出 
// gengo.addEventListener("change",changeLanguage); 
// //変更された言語の取得
// const languageSelect = document.querySelector(".gengo");

// function changeLanguage() {
//     alert("言語が" + gengo.value + "に変更されました");
// }

function headZero(num) {
	//もし値が10以下なら、先頭に0をつける
	var ret;
	if (num < 10 ) { ret = "0" + num; }
	else { ret = num ; }
	return ret;
}


function roadClock() {
	const nowTime = new Date(); //10秒ごとに更新
	const hours = headZero(nowTime.getHours() );
	const minutes = headZero(nowTime.getMinutes() );
	const time = hours + ":" + minutes;
	// document.querySelector(".clock").innerHTML = time;
	console.log(time)
}
setInterval("roadClock()",10000);
	
roadClock();
