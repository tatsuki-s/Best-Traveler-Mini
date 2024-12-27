<template>
  <div>
    <div v-for="item in data" :key="item.id" id="ma">
      <h1>{{ item.id.toString() === articleId() ? item.title : '' }}</h1>
      <div v-for="(content, index) in contents" :key="index">
        <h2>{{ content }}</h2>
        <img src=""/>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
import pageData from '../data/pageData.json'

export default {
  data () {
    return {
      data: pageData
    };
  },
  methods: {
    // 現在のURLの最初の部分 (ja) を取得
    langPath() {
      const currentPath = this.$route.path;
      const pathParts = currentPath.split('/'); // URLを'/'で分割
      return pathParts[1]; // 最初の部分 (ja)
    },
    
    articleId() {
      const currentPath = this.$route.path;
      const pathParts = currentPath.split('/'); // URLを'/'で分割
      return pathParts[3]; // 次の部分 (1/2/3/...)
    }
  }
}
</script>

<style>
#ma {
  margin: 0 8vw 0 8vw;
}
.tyt{
    padding: 0.25em 0.5em;/*上下 左右の余白*/
    border-left: solid 5px #7db4e6;/*左線*/
}
.marker-on {
  text-align: left;
  list-style: disc;
}
/* .marker-on p {
    display: none;
} */
#info {
    margin-left: 3vw;
}


@media screen and (max-width: 480px) {
	/* 480px以下に適用されるCSS（スマホ用） */
    #ma h1 {
        font-size: 24px;
    }
    .tyt {
        font-size: 20px;
    }
}
</style>

