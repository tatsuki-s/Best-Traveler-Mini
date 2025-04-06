<script setup>
import { useRoute } from 'vue-router'
import lineData from '../../../data/lines.json'

const lines = ( lineData );

const props = defineProps({
  lineName: String,
  stopData: Array
});

const busStops = ({ [props.lineName]: props.stopData });

const route = useRoute();
const usePath = () => {
  const currentPath = route.path;
  const pathParts = currentPath.split('/'); // URLを'/'で分割
  return {
    langPath: pathParts[1] || '',
    stopPath: pathParts[3] || ''
  };
}
const { langPath, stopPath }= usePath()
</script>
<template>
    <h1 id="Noriba">
        <span v-for="busStop in busStops[lineName]" :key="busStop.id" class="dbus1">
            <span v-if="busStop.link === stopPath">{{ busStop.name[langPath] }}</span>
        </span>
    </h1>

</template>
<style>
#Noriba {
    text-align: center;
}
</style>