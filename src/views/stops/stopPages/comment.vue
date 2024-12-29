<script setup>
import { useRoute } from 'vue-router';
import ichihira from "../../../data/ichihiraStops.json"

const commentData = {ichihira}

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
</script>
<template>
    <div v-for="item in commentData[linePath()]">
        <div v-if="stopPath() === item.link" id="comment">
            <p v-for="comment in item.comment[langPath()]">{{ comment }}</p>
        </div>
    </div>
</template>
<style scoped>
#comment {
  margin-top: 30px;
}

p {
    font-size: 30px;
    margin: 10px 0px 0px 0px;
}
</style>