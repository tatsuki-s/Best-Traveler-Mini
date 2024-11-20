function searchFunction() {
  var input, filter, ul, li, i, dataReading;
  input = document.getElementById('searchInput');
  filter = input.value.toLowerCase();  // 入力を小文字に変換
  ul = document.getElementById("itemList");
  li = ul.getElementsByTagName('li');

  let hasResults = false;

  for (i = 0; i < li.length; i++) {
      dataReading = li[i].getAttribute("data-reading");
      if (dataReading) {
          dataReading = dataReading.toLowerCase();  // data-readingも小文字に変換
          // 部分一致を確認
          if (dataReading.includes(filter)) {  // indexOf -> includes に変更
              li[i].style.display = "";  // 表示
              hasResults = true;  // 結果があることを確認
          } else {
              li[i].style.display = "none";  // 非表示
          }
      }
  }

  // 検索結果がない場合の処理
  document.getElementById('noResult').style.display = hasResults ? 'none' : '';
}