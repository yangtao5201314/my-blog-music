<template>
 
  <nav-menu></nav-menu>
  <router-view></router-view>
  <MusicPlayer />
</template>

<script setup lang="ts">
import NavMenu from '@c/nav-menu.vue';
import MusicPlayer from "../src/components/Music/index.vue";
import { onMounted,ref } from 'vue';

// const audio = ref<HTMLAudioElement>();
onMounted(() => {
  // 页面渲染完成的时候把 loading 隐藏掉  
  const ele = document.getElementById('spinner');
  ele!.style.display = 'none';  
  // audio.value?.play()
  
});
</script>

<style lang="scss" scoped>
.audio {
  position: absolute;
  z-index: 10;
  visibility: hidden;
}
</style>
