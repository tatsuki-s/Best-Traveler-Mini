<script setup>
import '@splidejs/vue-splide/css';
import { onMounted, watch, ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { Splide, SplideSlide } from '@splidejs/vue-splide';

import ichihiraData from "../../../data/ichihiraStops.json"


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
    <pictures v-for="stop in ichihiraData" :key="stop.id">
		<div v-show="stop.link === stopPath()">
			<viewer v-if="stop.pictures !== null" class="slide">
				<Splide :options="{ rewind: true, gap: '1rem', autoplay: true, interval: 3000, arrows: true, pagination: true, heightRatio: 0.6,}">
					<SplideSlide v-for="picture in stop.pictures" :key="picture.id">
						<h3>{{ picture.tab[langPath()] }}</h3>
						<img :src="picture.path" :alt="picture.tab[langPath()]">
					</SplideSlide>
				</Splide>
			</viewer>
		</div>
    </pictures>
</template>
<style scoped>

.slide{
	border: 3px solid black;
}

img {
	width:100%;
	object-fit: cover;
}

.menuBar {
	font-weight: bold;
	font-size: 130%;
	white-space: nowrap;
}

</style>
