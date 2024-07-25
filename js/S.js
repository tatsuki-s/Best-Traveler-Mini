function redirectToSite() {
    var selectBox = document.getElementById("mySelect");
    var selectedValue = selectBox.value;
    
    // 特定のサイトにリダイレクト
    if (selectedValue) {
      window.location.href = selectedValue;
    }
}

//ヘッダーの高さに合わせてメインのpaddingをとる
function adjustMainPadding() {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const headerHeight = header.offsetHeight;
  const additionalPadding = window.innerHeight * 0.05; // 8vh をピクセルに変換
  main.style.paddingTop = `${headerHeight + additionalPadding}px`;
}

// ページが読み込まれたときとウィンドウがリサイズされたときに調整を実行
window.addEventListener('DOMContentLoaded', adjustMainPadding);
window.addEventListener('resize', adjustMainPadding);