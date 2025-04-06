<script setup>
import lineData from "../../../data/lines.json"
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

const props = defineProps({
  lineName: String,
  stopData: Array
});
//Propsの[]を消すための処置
const timeData = ({ [props.lineName]: props.stopData });

const selectedSchedule = ref('weekend');//初期値を設定
const selectedDirection = ref('downward');  // デフォルトで上りを表示

//path判定まわり
const route = useRoute();
const usePath = () => {
  const currentPath = route.path;
  const pathParts = currentPath.split('/'); // URLを'/'で分割
  return {
    langPath: pathParts[1] || '',
    stopPath: pathParts[3] || ''
  };
}
const { langPath, stopPath } = usePath()

//言語に応じて路線を出す定数
const busLineName = () => {
  const busLines = lineData;
  const currentLine = busLines.find(line => line.nickName === props.lineName);
  return currentLine ? currentLine.name[langPath] : "";
};

onMounted(() => {
    timeData[props.lineName].forEach((data) => { //forEachでオブジェクトを直接扱う
        if (data.link === stopPath && data.sort === false) {
            selectedDirection.value = 'both';
        }
    });
});

</script>
<template>
    <div id="scheduleSelect">    
        <select id="youbi" v-model="selectedSchedule" class="no-select">
            <!-- valueの平日と土日祝日とが逆なのは仕様なので注意 -->
            <!-- <option value="daily">{{ langPath === "ja" ? "すべて" : "Everyday" }}</option> -->
            <option value="weekend">{{ langPath === "ja" ? "平日" : "Weekday" }}</option>
            <option value="weekday">{{ langPath === "ja" ? "土日祝日" : "Weekend" }}</option>
        </select>
        <div v-for="data in timeData[props.lineName]">
            <div v-if="data.link === stopPath && data.sort" class="label-container">
                <!-- <label class="no-select oneRow">
                    <input type="radio" v-model="selectedDirection" value="both">
                    {{ langPath === "ja" ? "両方" : "both" }} 
                </label> -->
                <label class="no-select oneRow">
                    <input type="radio" v-model="selectedDirection" value="downward">
                    {{ `${langPath === "ja" ? "" : "To "}${ lineData[0].kudari[langPath] }${ langPath === "ja" ? "方面" : "" }` }}
                </label>
                <label class="no-select oneRow">
                    <input type="radio" v-model="selectedDirection" value="upward">
                    {{ `${langPath === "ja" ? "" : "To "}${ lineData[0].nobori[langPath] }${ langPath === "ja" ? "方面" : "" }` }}
                </label>
            </div>
            <p v-else></p>
        </div>
    </div>
    <div id="Box">
        <ul class="time">
            <li class="timeBox" v-for="data in timeData[props.lineName]" :key="data.id">
            <div v-for="stopTime in (index, data.stopTime)" :key="stopTime.index">
                <RouterLink
                                v-if="data.link === stopPath && 
                    (selectedSchedule === 'daily' || selectedSchedule !== `${stopTime.schedule}`) && 
                    (selectedDirection === 'both' || 
                    (selectedDirection === 'upward' && stopTime.direction === 'up') || 
                    (selectedDirection === 'downward' && stopTime.direction !== 'up'))"
                    
                                :to="`${stopPath}/${stopTime.arrival.en.replace(/\s+/g, '')}-${stopTime.time.hour < 10 ? '0' + stopTime.time.hour : stopTime.time.hour}${stopTime.time.minute < 10 ? '0' + stopTime.time.minute : stopTime.time.minute}-${stopTime.schedule}`"
                    
                                :class="`forjikoku ${stopTime.schedule}`"
                                
                >
                <!-- <hr :class="stopTime.direction" /> -->
                <span class="yukisaki">
                    <p :class="`line ${props.lineName}`">
                    {{ busLineName() }}
                    </p>
                    <p style="margin:0;" v-if="stopTime.via && stopTime.via[langPath]">
                    {{ `${ langPath === "ja" ? "経由：" : "Via:"}${ stopTime.via[langPath]}` }}
                    </p>
                    <p v-else></p>
                    {{ `${langPath === "ja" ? "終点：" : "Arrival:"}${ stopTime.arrival[langPath]}` }}
                </span>
                <span class="jikoku">
                    {{ stopTime.time.hour }}:{{ stopTime.time.minute < 10 ? '0' + stopTime.time.minute : stopTime.time.minute }}
                </span>
            </RouterLink>
            </div>
            </li>
        </ul>
    </div>
</template>
<style scoped>
.scheduleSelect {
    display: inline-block;
    text-align: center;
}
#youbi {
    display: flex;
    text-align: center;
    height: 40px;
    width: 50%;
    font-weight: bold;
    font-size: 20px;
    background-color: #cccccc;
    color: #333333;
    border-radius: 0.5rem;
    margin-right:auto;
    margin-left: auto;
    border: 2px solid black;
}
#Box {
    overflow-y: auto; /* 垂直方向にスクロール可能にする */
    height: calc(100vh - 350px);
    min-height: 240px;
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
.time li .forjikoku {
    color: white;
    font-size: 60px;
    width: 100%;
    border: 3px solid black;
    transition: all 1s 0s ease;
    background-color: #333333;
    border-radius: 1rem;
    margin-bottom: 20px;
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
    display: inline;
    text-align: right;
}

.oneRow {
    white-space: nowrap;
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

.label-container {
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding-bottom: 20px;
        margin: 10px;
    }
@media screen and (max-width: 840px) {
    .label-container {
        flex-wrap: wrap;
    }
}
@media screen and (max-width: 670px) {
    
    #Box{
        height: 100%;
    }
}
</style>
