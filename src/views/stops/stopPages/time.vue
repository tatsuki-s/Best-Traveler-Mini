<script setup>
import timeData from "../../../data/ichihiraStops.json"
import lineData from "../../../data/lines.json"
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const selectedSchedule = ref('daily');

const route = useRoute();

// 現在のURLの最初の部分 (ja) を取得
const langPath = () => {
  const currentPath = route.path;
  const pathParts = currentPath.split('/'); // URLを'/'で分割
  return pathParts[1]; // 最初の部分 (ja)
};

// 現在のURLの "ichihira" 部分を取得
const linePath = () => {
  const currentPath = route.path;
  const pathParts = currentPath.split('/'); // URLを'/'で分割
  return pathParts[2]; // 次の部分 (ichihira)
};

const stopPath = () => {
  const currentPath = route.path;
  const pathParts = currentPath.split('/'); // URLを'/'で分割
  return pathParts[3]; 
// const busStops = stops;
}

//言語に応じて路線を出す定数
const busLineName = () => {
  const busLines = lineData;
  const currentLine = busLines.find(line => line.nickName === linePath());
  return currentLine ? currentLine.name[langPath()] : "";
};

</script>
<template>
    <div id="busStopName">
       <h1 id="Noriba">
        <span v-for="data in timeData">
            <span v-if="data.link === stopPath()">{{ data.name[langPath()] }}</span>
        </span>
       </h1>
		<select class="youbi" v-model="selectedSchedule">
            <option value="daily">{{ langPath() === "ja" ? "すべて" : "Everyday" }}</option>
			<option value="weekday">{{ langPath() === "ja" ? "平日" : "Weekday" }}</option>
			<option value="weekend">{{ langPath() === "ja" ? "土日祝日" : "Weekend" }}</option>
		</select>
    </div>
    <div id="Box">
        <ul class="time">
             <div class="timeBox">
                <div v-for="data in timeData">
                    <li v-for="stopTime in data.stopTime">
                        <RouterLink :to="`${stopTime.time.hour < 10 ? '0' + stopTime.time.hour : stopTime.time.hour}${stopTime.time.minute}-${stopTime.schedule}`" :class="`forjikoku ${stopTime.schedule}`">
                            <hr :class="stopTime.direction">
                            <span class="yukisaki">
                                <p :class="`line ${linePath()}`">
                                    {{ busLineName() }}
                                </p>
                                {{ `${langPath() === "ja" ? "経由：" : "via:"}${ stopTime.via[langPath()]}` }}<br/>{{ `${langPath() === "ja" ? "終点：" : "arrival:"}${ stopTime.arrival[langPath()]}` }}
                            </span>
                            本体
                        </RouterLink>
                    </li>
                </div>
            </div>
        </ul>
    </div>
</template>
<style scoped>
.busStopName {
    display: inline-block;
    text-align: center;
}
#Noriba {
    text-align: center;
}
.youbi {
    display: flex;
    text-align: center;
    margin-bottom: 20px;
    height: 40px;
    width: 50%;
    font-weight: bold;
    font-size: 20px;
    background-color: rgb(194, 194, 194);
    color: rgb(0, 0, 0);
    border-radius: 12px;
    margin-right:auto;
    margin-left: auto;
}
#Box {
    overflow-y: auto; /* 垂直方向にスクロール可能にする */
    height: calc(100vh - 300px);
}
.time {
    padding-left: 0;
    display: block;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 85%;
    margin-right: 20px;
    margin-left: 20px;
}
.time li {
    margin-bottom: 20px;
}
.time li a {
    color: white;
    font-size: 60px;
    width: 100%;
    border: 3px solid black;
    transition: all 1s 0s ease;
    background-color: rgb(63, 63, 63);
    border-radius: 4px;   
}
.yukisaki {
	display: inline-block;
	flex: 5;
    font-size: 18px;
    margin: auto; 
    font-weight: bold;
}

.jikoku {
	flex: 4;
    display: flex;
    align-items: center;
    justify-content: center;
}

.line {
    font-size: 20px;
    margin: 0px;
}

/* .hei {
    display: flex;
}

.heikyu {
    display: flex;
} */

/* 上り下りの色を指定 */
.up{
    flex: 0.3;
    color: #7ACCAD;
    background-color: #7ACCAD;
    margin: 0;
}

.down{
    flex: 0.3;
    color: #CC7A99;
    background-color: #CC7A99;
    margin: 0;
}

.forjikoku {
    display: flex;
    /* width: 5px; */
}


/* 路線ごとの色を指定 */
.ichihira {
    color: rgb(255, 255, 0);
}

.tsukiichi {
    color:rgb(255, 132, 0);
}


</style>
