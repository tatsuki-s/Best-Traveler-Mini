<script setup>
import { useRoute } from 'vue-router';

const props = defineProps({
  lineName: String,
  stopData: Array
});
//Propsの[]を消すための処置
const timeData = ({ [props.lineName]: props.stopData });

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
    <div v-for="item in timeData[props.lineName]">
        <div v-if="stopPath === item.link" id="comment">
            <div v-for="comment in item.comment[langPath]">
              <p v-if="comment !== '' || comment !== null">{{ comment }}</p>
            </div>
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