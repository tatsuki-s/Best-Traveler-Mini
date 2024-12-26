<script setup>
import '@splidejs/vue-splide/css';
//import "lightbox2/dist/css/lightbox.min.css";
//import lightbox from "lightbox2";
//import "lightbox2/dist/js/lightbox-plus-jquery.min.js";
import { onMounted, watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
//import VueEasyLightbox from 'vue-easy-lightbox';
//import 'vue-easy-lightbox/dist/external-css/vue-easy-lightbox.css';

//const showLightbox = ref(false);


const main = ref(null);
const thumbs = ref(null);

onMounted(() => {
  const thumbsSplide = thumbs.value?.splide;

  if (thumbsSplide) {
    main.value?.sync(thumbsSplide);
  }
});

</script>
<template>
    <pictures>
		  <Splide :options="{ rewind: true, gap: '1rem', isNavigation: true, perPage: 3, arrows: false, drag: false }" ref="thumbs" id="thumbs">
			<SplideSlide>
				<div class="tab"><span class="menuBar">中尊寺・</span><span class="menuBar">イオン前沢</span> <span class="direction">方面</span></div>
			</SplideSlide>
			<SplideSlide>
				<div class="tab"><span class="menuBar">一関駅前&nbsp;</span> <span class="direction">方面</span></div>
			</SplideSlide>
		  </Splide>

		  <Splide :options="{ rewind: true, gap: '1rem', autoplay: false, type: 'loop', arrows: false}" ref="main">
			<SplideSlide>
				<viewer>
			 		<img src="/stopImg/osa-hiraizumi.jpg" alt="StopB">
				</viewer>
			</SplideSlide>
			<SplideSlide>
				<viewer>
			 		<img src="/stopImg/omachikado-ichinoseki.jpg" alt="stopB">
				</viewer>
			</SplideSlide>
		  </Splide>
    </pictures>
</template>
<style scoped>
img {
	width:100%;
}

thumbs {
	width: 30%;
}

.menuBar {
	font-weight: bold;
	font-size: 120%;
	white-space: nowrap;
}

.direction {
	white-space: nowrap;
}

.tab{
	margin: 15px;
}
</style>
