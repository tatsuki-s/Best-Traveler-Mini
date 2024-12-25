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

</script>
<template>
    <pictures>
		  <Splide :options="{ rewind: true, gap: '1rem', autoplay: true }">
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
</style>
