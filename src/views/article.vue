<template>
  <div id="ma">
    <div v-for="item in data">
        <div v-if="item.id.toString() === idPath().toString()">
          <h1>{{ item.title }}</h1>
          <div v-for="content in item.contents">
            <h2 v-if="content.heading !== null" class="tyt">{{ content.heading }}</h2>
            <img v-if="content.image !== null" :src="content.image" alt="image" class="info"/>
            <span v-if="content.body !== null">
              <p v-for="text in content.body" class="info">{{ text }}</p>
            </span>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import pageData from '../data/pageData.json'

export default {
  data () {
    return {
      data: pageData,
    };
  },
  methods: {
    idPath() {
      const currentPath = this.$route.path;
      const pathParts = currentPath.split('/'); // URLを'/'で分割
      return pathParts[3];
    }
  },
  computed: {
    strIdPath() {
      return this.idPath().toString();
    }
  }
}
</script>

<style scoped>
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

img {
  width: 100%;
}

/* .marker-on p {
    display: none;
} */
.info {
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

