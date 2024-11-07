const express = require("express");
const app = express();

const port = 3000;
const fs = require("fs");
const csv = require("csv-parser");
const path = require("path");

//読み込むディレクトリを全て指定
app.use(express.static(path.join(__dirname, "../web")));
app.use(express.static(path.join(__dirname, "../data")));
app.use(express.static(path.join(__dirname, "../templates")));


//EJSのテンプレートのディレクトリを指定
app.set("views", path.join(__dirname, "../templates/"));

app.set("view engine", "ejs");

//csv関連
app.get("/:csvData", (req, res) => {
	const csvPath = req.params.csvData;
	//ここに置くことでページが読み込まれる（リクエスト）たびにリセットされる
	const results = [];

		fs.createReadStream(path.join(__dirname, `../data/${csvPath}.csv`))
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
		console.log(`${csvPath}を取得`);
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



app.listen(port, () => {
	console.log(`The server has started and is listening on port number: ${port}`);
});
    const schedule = [];
