<template>
  <div
    class="w-full h-full"
    :class="
      currentRouteName !== 'home' && currentRouteName !== 'thank_you'
        ? 'pt-[3%] px-[10%]'
        : ''
    "
  >
    <TheHeader :current-route-name="currentRouteName" />

    <div class="h-[90%] flex justify-between">
      <div class="w-1/3 pb-16 overflow-scroll left-side">
        <slot name="left-side"></slot>
      </div>

      <div class="relative">
        <slot name="right-side"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from "./TheHeader.vue";

export default {
  components: {
    TheHeader,
  },

  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>

<style scoped>
.left-side::-webkit-scrollbar {
  display: none;
}

.left-side {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
