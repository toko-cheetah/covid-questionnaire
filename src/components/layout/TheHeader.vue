<template>
  <header
    v-if="currentRouteName !== 'home'"
    class="flex justify-between items-center font-anonymous-pro-bold text-4xl border-b-2 border-gray-800 pb-2 mb-10"
  >
    <RedberryName />
    <p>{{ currentPage }}/4</p>
  </header>
</template>

<script>
import RedberryName from "../icons/RedberryName.vue";

export default {
  components: {
    RedberryName,
  },

  props: ["currentRouteName"],

  data() {
    return {
      pages: {
        personal_info: "1",
        covid_condition: "2",
      },
    };
  },

  computed: {
    currentPage() {
      return this.pages[this.$route.name];
    },
  },
};
</script>
