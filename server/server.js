const express = require("express");
const app = express();

const hostname = '0.0.0.0'; //nginxでローカル公開用の設定

const port = 3000;
const fs = require("fs");
const csv = require("csv-parser");
const path = require("path");

//読み込むディレクトリを全て指定
app.use(express.static(path.join(__dirname, "../web")));
app.use(express.static(path.join(__dirname, "../data")));
app.use(express.static(path.join(__dirname, "../templates")));


//EJSのテンプレートのディレクトリを指定
app.set("views", path.join(__dirname, "../templates/"));0
app.set("view engine", "ejs");

//csv関連
app.get("/:csvData", (req, res) => {
	
	let csvFileName = req.params.csvData;

	// ハイフンで分割して最初の3つをディレクトリ名に、残りをファイル名に
	const parts = csvFileName.split("-");
	if (parts.length < 4) {
	  res.status(400).send("<h1>Invalid file format...</h1>");
	  return;
	}
  
	// 最初の3つをディレクトリ、残りをファイル名に結合
	const directoryPath = path.join(__dirname, "../data/", parts.slice(0, 3).join("/"));
	const fileName = parts.slice(3).join("-") + ".csv"; // 残りをファイル名に
  
	// フルパスを作成
	const fullPath = path.join(directoryPath, fileName);

	//ここに置くことでページが読み込まれる（リクエスト）たびにリセットされる
	const results = [];
	fs.createReadStream(fullPath)
		.on("error", (error) => {
			console.error("CSVファイルのエラー\n", error);
			res.status(404).send("<h1>404 not found...</h1>");
		})
	    .pipe(csv({}))
	    .on("data", (row) => results.push(row))
	    .on("end", () => {
			console.log(results);
	    	//res.send(results);
			res.render("busStopTable", {data: results});
		console.log(`${fullPath}を取得`);
	});
});

app.get("/TopPage.html", (req, res) => {
	res.redirect("/");
});

app.get("/", (req, res) => {
	//__dirnameで絶対パスに変換
	const topPage = path.join(__dirname, "../web/TopPage.html");
	fs.readFile(topPage, (err, data) => {
		//読み込み失敗時の動作
		if(err) {
			res.status(500).send("File not found");
			//ファイルの読み込み成功時の動作
		} else {
			//読み込んだ内容を文字列に変換してクライアントに送信
			res.send(data.toString());
			//ファイルのバッファデータを送信
		}
	});
});



app.listen(port, hostname, () => {
	console.log(`The server has started and is listening on port number: ${port}`);
});
    const schedule = [];
