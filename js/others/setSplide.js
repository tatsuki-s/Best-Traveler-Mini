document.addEventListener('DOMContentLoaded', function () {
    // Splideの初期化
    new Splide('#image-slider', {
      type       : 'loop',       // 無限ループ
      perPage    : 1,            // 表示するスライド数
      heightRatio: 0.5,          // スライダーの高さ比率
      pagination : true,         // ページネーションの有無
      arrows     : true,         // 矢印の有無
    }).mount();
  });