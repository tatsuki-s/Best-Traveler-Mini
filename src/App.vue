<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/header.vue'
import Footer from './components/footer.vue'
</script>

<template>
	<Header />
	<body>
		<main>
			<Maincontainer>
				<RouterView />
			</Maincontainer>
		</main>
	</body>
	<Footer />
</template>

<style scoped>
/*main*/

/* ここでは大まかなスタイルを決める */
body {
    background-color: rgba(233, 233, 233, 0.845);
    /* font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; */
    padding: 0; 
    margin: 0 auto; /*マージンの幅を管理*/
    color: black;
}
a {
    display: inline-block;
    border: none;
    text-decoration: none;
    color: inherit;
}
ul {
    padding-left: 0;
}
li {

    list-style: none;
    text-align: center;
}
main {
    margin-left: 5%;
    margin-right: 5%;
    width: 90%; /* 残りの幅をコンテンツに割り当て */
    background-color: rgb(240, 240, 240);
    padding-top: 130px;
    padding-bottom: 10vh;
    min-height: 100vh;
}
/* no-selectをクラスとして追加することで、テキスト選択を無効できるようになっている */
a,
.no-select {
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none;    /* Firefox */
    -ms-user-select: none;     /* Internet Explorer/Edge */
    user-select: none;         /* Standard syntax */
}
@media screen and (max-width:770px){
    main {
        margin-left: 7vw;
        padding-top: 100px;
        margin-right: 7vw;
    }
}
@media screen and (max-width:500px){
    main {
        margin-left: 5vw;
        margin-right: 5vw;
    }
}
</style>
