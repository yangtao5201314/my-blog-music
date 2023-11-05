<!--
 * @Author: Zhang Yuming
 * @Date: 2023-07-03 11:48:12
 * @Description: 展示歌信息
 -->

<script setup>
import { defineComponent } from "vue";
import { music } from "@/store/index";
import { storeToRefs } from "pinia";

defineComponent({
  name: "Information",
});

const { getShowLyricBoard } = storeToRefs(music());

defineProps({
  // 当前播放的音乐
  musicInfo: {
    type: Object,
    default: () => {},
  },
  // 是否正在切换图片
  isToggleImg: {
    type: Boolean,
    default: false,
  },
  // 是否正在暂停
  isPaused: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <!-- 唱片展示 -->
  <div class="music-info text-black">
    <img
      :class="[
        'music-img',
        'animate__animated',
        'animate__fadeIn',
        isToggleImg ? '' : 'disc-rotate',
        isPaused ? 'paused' : '',
      ]"
      @click="music().setShowLyricBoard(!getShowLyricBoard)"
      :src="musicInfo.al.picUrl"
    />
    <div class="music-desc text-black">
      <div class="music-name">
        {{ musicInfo.name }}
      </div>
      <div class="author-name text-black">
        {{ musicInfo.ar[0].name }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text-black{
  color:#000;
}
.music-info {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  .music-img {
    width: 60px;
    height: 60px;
    border-radius: 30px;
    object-fit: cover;
  }
  .music-desc {
    margin-left: 0.5rem;

    .author-name {
      font-size: 0.8rem;
      margin-top: 5px;
    }

    .music-name {
      font-size: 0.7rem;
    }
  }
}

.disc-rotate {
  animation: rotate360 18s infinite linear;
}

.paused {
  animation-play-state: paused;
}

@keyframes rotate360 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

// mobile
@media screen and (max-width: 768px) {
  .music-img {
    display: none;
  }
}
</style>
