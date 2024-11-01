//検索に係るコード
function romanToKana(str) {
  const romanKanaMap = {
    "a": "あ", "i": "い", "u": "う", "e": "え", "o": "お",
    "ka": "か", "ki": "き", "ku": "く", "ke": "け", "ko": "こ",
    "sa": "さ", "si" : "し", "shi": "し", "su": "す", "se": "せ", "so": "そ",
    "ta": "た", "ti" : "ち", "chi": "ち", "tu" : "つ", "tsu": "つ", "te": "て", "to": "と",
    "na": "な", "ni": "に", "nu": "ぬ", "ne": "ね", "no": "の",
    "ha": "は", "hi": "ひ", "hu" : "ふ", "fu": "ふ", "he": "へ", "ho": "ほ",
    "ma": "ま", "mi": "み", "mu": "む", "me": "め", "mo": "も",
    "ya": "や", "yu": "ゆ", "yo": "よ", "la" : "ぁ",  "li" : "ぃ", "lu" : "ぅ",  "le" : "ぇ",  "lo" : "ぉ", 
    "ra": "ら", "ri": "り", "ru": "る", "re": "れ", "ro": "ろ",
    "wa": "わ", "wi" : "うぃ", "we" : "うぇ", "wo": "を", "n": "ん",
    "ga": "が", "gi": "ぎ", "gu": "ぐ", "ge": "げ", "go": "ご",
    "za": "ざ", "zi" : "じ",  "ji": "じ", "zu": "ず", "ze": "ぜ", "zo": "ぞ",
    "da": "だ", "di": "ぢ", "du": "づ", "de": "で", "do": "ど",
    "ba": "ば", "bi": "び", "bu": "ぶ", "be": "べ", "bo": "ぼ",
    "pa": "ぱ", "pi": "ぴ", "pu": "ぷ", "pe": "ぺ", "po": "ぽ",
    "kya": "きゃ", "kyu": "きゅ", "kyo": "きょ",
    "sya": "しゃ", "syu": "しゅ", "syo": "しょ",
    "sha": "しゃ", "shu": "しゅ", "sho": "しょ",
    "tya": "ちゃ", "tyu": "ちゅ", "tyo": "ちょ", "tye" : "ちぇ",
    "cha": "ちゃ", "chu": "ちゅ", "cho": "ちょ", "che": "ちぇ",
    "nya": "にゃ", "nyu": "にゅ", "nyo": "にょ",
    "hya": "ひゃ", "hyu": "ひゅ", "hyo": "ひょ",
    "mya": "みゃ", "myu": "みゅ", "myo": "みょ",
    "rya": "りゃ", "ryu": "りゅ", "ryo": "りょ",
    "gya": "ぎゃ", "gyu": "ぎゅ", "gyo": "ぎょ",
    "ja": "じゃ", "ju": "じゅ", "jo": "じょ", "je" : "じぇ",
    "bya": "びゃ", "byu": "びゅ", "byo": "びょ",
    "pya": "ぴゃ", "pyu": "ぴゅ", "pyo": "ぴょ"
  };

  const regex = new RegExp(Object.keys(romanKanaMap).sort((a, b) => b.length - a.length).join('|'), 'gi');
  return str.replace(regex, function(match) {
      return romanKanaMap[match.toLowerCase()] || match;
  });
}

function toHiragana(str) {
  return str.replace(/[\u30a1-\u30f6]/g, function(match) {
      var chr = match.charCodeAt(0) - 0x60;
      return String.fromCharCode(chr);
  });
}


function normalize(str) {
  return romanToKana(toHiragana(str));
}

function searchFunction() {
  var input = document.getElementById('searchInput');
  var filter = normalize(input.value.toLowerCase());
  var ul = document.getElementById('itemList');
  var li = ul.getElementsByTagName('li');
  var noResult = document.getElementById('noResult');
  var hasResult = false;

  for (var i = 0; i < li.length; i++) {
    var item = li[i];
    if (item.id === 'noResult') continue; // noResult要素はスキップ
    var text = normalize(item.textContent || item.innerText).toLowerCase();
    var readings = (item.getAttribute('data-reading') || "").split(',').map(r => normalize(r.trim().toLowerCase()));
    if (text.startsWith(filter) || readings.some(reading => reading.startsWith(filter))) {
      item.style.display = '';
      hasResult = true;
    } else {
      item.style.display = 'none';
    }
  }

  // 入力がある場合はnoResultを表示
  if (input.value.trim() !== "") {
    noResult.style.display = 'block';
  } else {
    noResult.style.display = 'none';
  }
}


document.getElementById('search').addEventListener('input', function() {
  var input = this.value.toLowerCase();
  var listItems = document.querySelectorAll('#list .searchResult');
  var noResult = document.getElementById('noResult');
  var hasResult = false;

  listItems.forEach(function(item) {
      var reading = item.getAttribute('data-reading').toLowerCase();
      if (reading.startsWith(input)) {
          item.classList.add('show');
          hasResult = true;
      } else {
          item.classList.remove('show');
      }
  });

  if (hasResult) {
      noResult.style.display = 'block';
  } else {
      noResult.style.display = 'none';
  }
});

