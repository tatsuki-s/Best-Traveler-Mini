function redirectToSite() {
    var selectBox = document.getElementById("mySelect");
    var selectedValue = selectBox.value;
    
    // 特定のサイトにリダイレクト
    if (selectedValue) {
      window.location.href = selectedValue;
    }
}

