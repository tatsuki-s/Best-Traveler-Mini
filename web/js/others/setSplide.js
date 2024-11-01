document.addEventListener('DOMContentLoaded', function () {
    // Splideの初期化
    //メインのバス停画像の設定
    var mainSlider = new Splide('#image-slider', {
      type       : 'loop',       // 無限ループ
      perPage    : 1,            // 表示するスライド数
      heightRatio: 0.5,          // スライダーの高さ比率
      pagination : true,         // ページネーションの有無
      arrows     : true,         // 矢印の有無
      autoplay   : true,         //自動スクロールの有効化
      interval   : 3000,         //ミリ秒でスクロール
      pauseOnHover: true,        // ホバーで自動スクロール一時停止
    }).mount();
    //下の小さい方
    var thumbnailSlider = new Splide('#thumbnail-slider', {
      fixedWidth  : 100,    // サムネイルの固定幅
      fixedHeight : 64,     // サムネイルの固定高さ
      isNavigation: true,   // ナビゲーションとして利用
      gap         : 10,     // サムネイル間のスペース
      focus       : 'center',
      pagination  : false,
      cover       : true,
      breakpoints : {
        600: {
          fixedWidth : 66,
          fixedHeight: 40,
        },
      },
    }).mount();

    //メインと小さい方を同期
    mainSlider.sync(thumbnailSlider);
  });

  