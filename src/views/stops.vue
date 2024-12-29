<script>
import ichihira from '../data/ichihiraStops.json'
//import otherLineName from '../data/otherStops.json'
export default {
  data () {
    return {
      busStops: {ichihira}
    };
  },
  methods: {
    // 現在のURLの最初の部分 (ja) を取得
    langPath() {
      const currentPath = this.$route.path;
      const pathParts = currentPath.split('/'); // URLを'/'で分割
      return pathParts[1]; // 最初の部分 (ja)
    },
    
    // 現在のURLの "ichihira" 部分を取得
    linePath() {
      const currentPath = this.$route.path;
      const pathParts = currentPath.split('/'); // URLを'/'で分割
      return pathParts[2]; // 次の部分 (ichihira)
    }
  }
};
</script>
<template>
	<div class="allBusStop">
		<div v-for="busStop in busStops[linePath()]" :key="busStop.id" class="dbus1">
			<router-link :to="`/${langPath()}/${linePath()}/${busStop.link}`" class="effect bus1 aka">
				<div class="">{{ busStop.name[langPath()] }}</div>
			</router-link>
			<!-- 最後のバス停以外に線を引く -->
			<div v-if="busStop.id !== busStops[linePath()].length" class="aida">
				<br/>
			</div>
		</div>
	</div>
</template>
<style>
.naiyou {
  display: flex;
  flex-flow: column;
  background-color: rgb(240, 240, 240);
  color: black;
  margin-left: 10vw;
  margin-right: 10vw;
  height: 100%;
  text-align: center;
}

.divLineName {
  display: flex;
  flex-flow: column;
}

.lineName{
  display: inline-block;
  font-size: 350%;
  text-align: center;
  width:350px;
  /* margin: 0px; */
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  /* margin-top: 10px; */
}

.bus1 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  text-align: center;
  border-radius: 12px;
  font-size: 35px;
  border-radius: 4px;
  border: 3px solid black;
  /* font-weight: bold; */
}

.effect:hover {
  opacity: .8
}

.aka {
  background:rgb(255, 255, 0);
}

/* .clock{
  display: flex;
  font-size: 4vw;
  background-color: white;
  border: 4px solid rgb(156, 154, 0);
  border-radius: 1vh;
  margin: 0px;
  width: 12vw;
} */

.aida{
  background-color: rgba(203, 203, 203, 0.845);
    margin: 0px;
    text-align: center;
    margin-left: 20%;
    margin-right: 20%;
    width: 60%;
    height: 30px;
}

.allBusStop {
    margin-left: auto;
    margin-right: auto; 
    margin-bottom: 60px;
    width: 40vw;
    color: white;
}

@media screen and (max-width: 959px) {
  /* 959px以下に適用されるCSS（タブレット用） */
    .naiyou {
      margin-left: 7vw;
      margin-right: 7vw;
    }
    .allBusStop {
      width: 70vw;
    }
  }

  @media screen and (max-width: 480px) {
  /* 480px以下に適用されるCSS（スマホ用） */
    .naiyou {
      margin-left: 5vw;
      margin-right: 5vw;
    }
    .bus1 {
      font-size: 28px;
    }
    .allBusStop {
      width: 70vw;
    }
  }
</style>

