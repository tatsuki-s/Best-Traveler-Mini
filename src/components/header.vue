<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();

// 現在のURLの最初の部分 (ja) を取得
const langPath = () => {
  const currentPath = route.path;
  const pathParts = currentPath.split('/'); // URLを'/'で分割
  return pathParts[1]; // 最初の部分 (ja)
};
</script>
<template>
	<body>
        <header>
            <div id="HeaderItems">
				<RouterLink :to="`/${langPath() === 'ja' || langPath() === 'en' ? langPath() : ''}`">
                    <div id="container">
                        <img src="/favicon.ico" id="icons" alt="ホーム画面のアイコン">
                            <!--リンクを入れる。ホーム画面への-->
                        <h1 class="Name no-select"><span class="n">BEST<span class="sp"></span><span class="gyou">&nbsp;</span>TRAVELER.</span><span id="version">&nbsp;Beta</span></h1>
                    </div>
			    </RouterLink>
            </div>
        </header>
    </body>
    <!--これらはハンバーガーメニューだけど、これってfixedで固定しているだけだからヘッダーだと思ってくれ-->
    <div id="hamburger-menu">
        <input type="checkbox" id="menu-btn-check"  v-model="menuOpen" />
        <label for="menu-btn-check" class="menu-btn"><span></span></label>
        <!--ここからメニュー-->
        <div id="menu-box" @click="checkMenu()">
            <div id="menu-space"></div>
            <div id="menu-content">
                <ul>
                    <li style="color: white;">
                        <h1 class="menu">{{ langPath() === 'ja' ? 'メニュー' : 'Menu' }}</h1>
                    </li>
                    <li class="ite blockes">
                        <RouterLink class="house" :to="`/${langPath() === 'ja' || langPath() === 'en' ? langPath() : ''}`">{{ langPath() === 'ja' ? 'ホーム' : 'Home' }}</RouterLink>
                    </li>
                    <!-- <li class="ite blockes">
                        <a href="Line.html" class="line">路線選択</a>
                    </li> -->
                    <!-- <li class="ite blockes">
                        <a href="Search.html" class="site">{{ langPath() === 'ja' ? '検索' : 'Search' }}</a>
                    </li> -->
                    <li class="ite blockes big">
                        <RouterLink to="/ja/article/1">{{ langPath() === 'ja' ? 'プライバシーポリシー' : 'Privacy policy' }}</RouterLink>
                    </li>
                    <li class="ite blockes big">
                        <RouterLink :to="`/${langPath()}/search`">{{ langPath() === 'ja' ? 'バス停検索' : 'Search' }}</RouterLink>
                    </li>
                    <li class="ite blockes big">
                        <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAHpV2FBUMTVMOEM0WjhFNTdWOEhYTTdXOTZPNVA5MC4u" target="_blank" rel="noopener noreferrer">{{ langPath() === 'ja' ? '利用者アンケート' : 'Questionnaire' }}<span id="ToGoOther">{{ langPath() === 'ja' ? '※別サイトに移動' : '' }}</span></a>
                    </li>
                </ul>
                <div id="box">
                    <ul>
                        <li>
                            <RouterLink to="/ja">日本語</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/en">English</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!--ここまでメニュー-->
    </div>
</template>

<script>
export default {
    data() {
        return {
        menuOpen: false
        };
    },
    methods: {
        checkMenu() {
            this.menuOpen = !this.menuOpen;
        }
    }
};
</script>

<style scoped>
#HeaderItems #container .Name .n {
    text-shadow:1px 1px 0 white, -1px -1px 0 white,
              -1px 1px 0 white, 1px -1px 0 white,
              0px 1px 0  white,  0-1px 0 white,
              -1px 0 0 white, 1px 0 0 white;
    color: black;
    font-size: 50px;
    margin: 0 auto;
    transition: all 1s 0s ease-in;
}
#HeaderItems #container .Name .n:hover {
    color: white;
    text-shadow: none;
}
.Name {
    margin: 0 auto;
}
/*px指定あり*/
header {
    background-color: black;
    width: 100%;
    position: fixed; /* ヘッダーを固定する */
    top: 0; /* 上部から配置の基準位置を決める */
    left: 0; /* 左から配置の基準位置を決める */
    z-index: 70; 
}
#version {
    font-size: 20px;
    color: white;
}
/*px指定あり。浮いたヘッダーの文としてmarginをとる。*/
#menu-content .MENU {
    margin: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    color: white;
    position: relative;
    padding: 0.5em 1.5em;
    border-top: solid 2px white;
    border-bottom: solid 2px white;
}
#menu-content .MENU:before, #menu-content .MENU:after{
    content: '';
    position: absolute;
    top: -10px;
    width: 2px;
    height: -webkit-calc(100% + 20px);
    height: calc(100% + 20px);
    background-color: white;
}
#menu-content .MENU:before {left: 10px;}
#menu-content .MENU:after {right: 10px;}
#menu-content .MENU {

    padding: 0;
}
/*headerの中身*/
#HeaderItems {
    display: flex;
    justify-content: space-between;
}
#container {
    display: flex;
    align-items: center;
    justify-content: center;
}
/*px指定あり*/
#icons {
    max-width: 80px;
    height: 80px;
    margin-left: 30px;
    margin-right: 15px;
}

/*ボタン。ハンバーガーメニューのこと。*/
.menu-btn {
    position: fixed;
    top: 8px;
    right: 10px;
    height: 60px;
    width: 60px;
    z-index: 90;
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    height: 70px;
    width: 70px;
    justify-content: center;
    align-items: center;
    z-index: 100;
    background-color: black;
    border-radius: 50%;
    transition: all 1s;
    cursor: pointer;
}
/* .menu-btn:hover {
    border: 1px solid white;
} */

.menu-btn span,
.menu-btn span:before,
.menu-btn span:after {
    content: '';
    display: block;
    height: 3px;
    width: 30px;
    border-radius: 3px;
    background-color: white;
    position: absolute;
}
.menu-btn span:before {
    bottom: 8px;
}
.menu-btn span:after {
    top: 8px;
}
.menu-btn span:after {
    top: 8px;
}
#menu-btn-check:checked ~ .menu-btn {
    border: 1px solid black;
}
#menu-btn-check:checked ~ .menu-btn span {
    background-color: black;/*メニューオープン時は真ん中の線を透明にする*/
}
#menu-btn-check:checked ~ .menu-btn span::before {
    bottom: 0;
    transform: rotate(45deg);
}
#menu-btn-check:checked ~ .menu-btn span::after {
    top: 0;
    transform: rotate(-45deg);
}
#menu-btn-check {
    display: none;
}
/*ハンバーガーの内容*/
.menu {
    text-align: center;
    font-size: 60px;
    margin-top: 20px;
    margin-bottom: 10px;

}
#menu-content ul {
    padding: 0px 10px 0;
    margin-top: 0;
}
#menu-content ul li {
    margin-bottom: 15px;
    list-style: none;
}
#menu-content ul .ite a{
    border-bottom: solid 1px white;
    margin-bottom: 0;
    display: block;
    width: 100%;
    font-size: 30px;
    font-weight: bold;
    box-sizing: border-box;
    color: white;
    text-decoration: none;
    padding: 9px 15px 10px 0;
    position: relative;
}
#ToGoOther {
    font-size: 20px;
}
/*下のwidthとleftの値を足して１００％にすること*/

#menu-content {
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    height: 100%;
    overflow-y: auto; /* 垂直方向にスクロール可能にする */
    overflow-x: hidden;
    z-index: 80;
    background-color: #111111;
    text-align: center;
}

#menu-space {
    width: 50%;
    height: 100%;
    opacity: 1;
    z-index: 90;
}
#menu-box {
    display: flex;
    z-index: 92;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 100%; 
    transition: all 0.5s;
}

#menu-btn-check:checked ~ #menu-box {
    left: 0;
}
.langes {
    border-bottom: 1px solid white;
    padding-bottom: 20px;
}
.langes #siteSelector{
    background-color: black;
    text-align: center;
    color: white;
    border: none;
    font-size: 40px;
}

.blockes a{
    max-width: 100%;
    transition: all 0.5s 0.1s ease;
}
.blockes a:hover{
    transform: scale(1.2);
}
#box ul li * {
    margin-left: 50%;
    height: 70%;
    background-color: #111111;
    color: white;
    text-align: center;
    width: 50%;
    font-size: 30px; /* 効いてない */
    height: 50px;
    border: 1px solid white;
}
#box ul li *:hover {
    background-color: rgb(99, 99, 99);
}

@media screen and (max-width: 1000px) {
    #box ul li *:hover {
    background-color: #111111;
}
    #version {
        display: none;
    }
    .menu-btn:hover {
        background-color: black;
    }
    #icons {
        width: 55px;
        height: 55px;
        margin-right: 0;
        margin-left: 5px;
    }
    .Name {
        font-size: 30px;
    }
    #HeaderItems
 #container .Name .n {
        font-size: 30px;
        margin-left: 10px;
    }
    #HeaderItems
 #container .Name .n:hover {
        text-shadow:1px 1px 0 white, -1px -1px 0 white,
                  -1px 1px 0 white, 1px -1px 0 white,
                  0px 1px 0  white,  0-1px 0 white,
                  -1px 0 0 white, 1px 0 0 white;
        color: black;
        border-bottom: 1px solid white;
    }
    .menu-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        top: 5px;
        right: 0px;
        width: 48px;
        height: 48px;
    }
    .menu-btn:hover {
        background-color: black;
        border: none;
    }
    #menu-content {
        width: 100%;
    } 
    #menu-space {
        width: 0%;
    }
    #menu-btn-check:checked ~ #menu-content {
        left: 0%;/*メニューを画面内へ*/
    }
    
    #menu-content .MENU {
        font-size: 40px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    #menu-content ul li a {
        font-size: 40px;
    }
    #ToGoOther {
        display: none;
    }
    #box li * {
        font-size: 30px !important;
    }
}
@media screen and (max-width: 500px){
    #menu-content ul li a {
        font-size: 30px;
    }
}
</style>
