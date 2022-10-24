<template>
  <div
    class="w-[1920px] h-[1080px] overflow-scroll m-auto relative bg-gray-200 text-gray-800 font-bpg-nino-mtavruli-normal"
    :class="currentRouteName !== 'home' ? 'pt-[3%] px-[10%]' : ''"
  >
    <TheHeader :current-route-name="currentRouteName" />

    <RouterView />
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import TheHeader from "./components/layout/TheHeader.vue";

export default {
  components: {
    RouterView,
    TheHeader,
  },

  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>
