<script setup>
import '@splidejs/vue-splide/css';
import { useRoute } from 'vue-router';
import { Splide, SplideSlide } from '@splidejs/vue-splide';

const props = defineProps({
  lineName: String,
  stopData: Array
});
const stops = ({ [props.lineName]: props.stopData });

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
</script>
<template>
    <pictures v-for="stop in stops[props.lineName]" :key="stop.id">
		<div v-if="stop.link === stopPath">
			<viewer v-if="stop.pictures !== null" class="slide">
				<Splide :options="{ rewind: true, gap: '1rem', autoplay: true, interval: 3000, arrows: true, pagination: true, heightRatio: 0.6,}">
					<SplideSlide v-for="picture in stop.pictures" :key="picture.id">
						<h2>{{ picture.tab[langPath] }}</h2>
						<img v-if="picture.type === 'image'" :src="picture.path" :alt="picture.tab[langPath]">
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

h2{
	margin: 3px;
}

.menuBar {
	font-weight: bold;
	font-size: 130%;
	white-space: nowrap;
}

@media screen and (max-width: 670px) {
	h2 {
		font-size: 18px;
	}
}

</style>
