<template>
  <div
    class="w-[1920px] h-[1080px] m-auto relative bg-gray-200 text-gray-800 font-bpg-nino-mtavruli-normal text-xl"
  >
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import { RouterView } from "vue-router";

export default {
  components: {
    RouterView,
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0.5;
}
</style>
