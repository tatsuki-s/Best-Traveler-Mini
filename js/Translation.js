// 言語データを定義
const languages = {
    ja: {
        header: "こんにちは、世界！",
        paragraph: "これは日本語のテキストです。",
        menu: {
            house: "ホーム",
            contact: "コンタクト",
            line: "ライン",
            site: "サイトマップ"
        }
    },
    en: {
        header: "Hello, World!",
        paragraph: "This is an English text.",
        menu: {
            house: "Home",
            contact: "Contact",
            line: "Line",
            site: "Sitemap"
        }
    }
};

// プルダウンメニューの取得
const gengo = document.querySelector(".gengo");

// 言語の変更を検出
gengo.addEventListener("change", function() {
    // 選択された言語を取得
    const selectedLanguage = gengo.value;

    // 選択された言語に基づいてメニュー項目のテキストを更新
    document.querySelector('.house').innerText = languages[selectedLanguage].menu.house;
    document.querySelector('.contact').innerText = languages[selectedLanguage].menu.contact;
    document.querySelector('.line').innerText = languages[selectedLanguage].menu.line;
    document.querySelector('.site').innerText = languages[selectedLanguage].menu.site;
    document.querySelector('.na.house').innerText = languages[selectedLanguage].menu.house;
    document.querySelector('.na.contact').innerText = languages[selectedLanguage].menu.contact;
    document.querySelector('.na.line').innerText = languages[selectedLanguage].menu.line;
    document.querySelector('.na.site').innerText = languages[selectedLanguage].menu.site;
});

// 言語の変更を検出
gengo.addEventListener("change", function() {
    // 選択された言語を取得
    const selectedLanguage = gengo.value;

    // メインコンテンツやフッターに適用されているクラスを切り替える
    const mainContainer = document.querySelector('.MainContainer');
    const footer = document.querySelector('.footer');

    // 現在のクラスを一度削除
    mainContainer.classList.remove('ja-styles', 'en-styles');
    footer.classList.remove('ja-styles', 'en-styles');

    // 選択された言語に基づいてクラスを追加
    if (selectedLanguage === 'ja') {
        mainContainer.classList.add('ja-styles');
        footer.classList.add('ja-styles');
    } else if (selectedLanguage === 'en') {
        mainContainer.classList.add('en-styles');
        footer.classList.add('en-styles');
    }
});






