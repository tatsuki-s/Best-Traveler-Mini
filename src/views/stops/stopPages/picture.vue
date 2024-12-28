<script setup>
import '@splidejs/vue-splide/css';
import { onMounted, watch, ref } from 'vue';
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

const stopPath = () => {
  const currentPath = route.path;
  const pathParts = currentPath.split('/'); // URLを'/'で分割
  return pathParts[3]; 
// const busStops = stops;
}

const main = ref(null);
const thumbs = ref(null);

onMounted( () => { 
	const thumbsSplide = thumbs.value?.splide; 
	if (thumbsSplide) { 
		main.value?.sync(thumbsSplide); 
	} 
});
</script>
<template>
    <pictures v-for="stop in ichihiraData" :key="stop.id">
		<div v-if="stop.link === stopPath()">
			<Splide :options="{ rewind: true, gap: '1rem', isNavigation: true, perPage: 3, arrows: false, drag: false, updateOnMove: true, updateOnMove: true, pagination  : false, }" ref="thumbs" id="thumbs">
				<SplideSlide v-for="picture in stop.pictures" :key="picture.id">
					<div class="tab">
						<span class="menuBar">{{ picture.tab[langPath()] }}</span>
					</div>
				</SplideSlide>
			</Splide>
			<Splide :options="{ rewind: true, gap: '1rem', autoplay: false, type: 'loop', arrows: false, pagination: false,}" ref="main">
				<SplideSlide v-for="picture in stop.pictures" :key="picture.id">
					<viewer>
						<img :src="picture.path" :alt="picture.id">
					</viewer>
				</SplideSlide>
			</Splide>
		</div>
    </pictures>
</template>
<style scoped>
img {
	width:100%;
	max-height: 400px;
	object-fit: cover;
}

.thumbs {
	width: 30%;
}

.menuBar {
	font-weight: bold;
	font-size: 130%;
	white-space: nowrap;
}

.tab{
	margin: 15px;
	font-size: 80%;
}
</style>
