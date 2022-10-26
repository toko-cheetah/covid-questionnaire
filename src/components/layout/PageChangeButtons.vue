<template>
  <div
    class="absolute top-[950px] left-1/2 -translate-x-1/2 z-20 w-36 flex justify-between"
  >
    <button :class="hidePreviousBtn ? 'invisible' : ''">
      <router-link :to="{ name: previousPageName }">
        <PreviousPage />
      </router-link>
    </button>

    <button @click="validateForm" :class="hideNextBtn ? 'invisible' : ''">
      <NextPage />
    </button>
  </div>
</template>

<script>
import PreviousPage from "../icons/PreviousPage.vue";
import NextPage from "../icons/NextPage.vue";

export default {
  components: { PreviousPage, NextPage },

  props: {
    hidePreviousBtn: {
      type: Boolean,
      default: false,
      required: false,
    },
    hideNextBtn: {
      type: Boolean,
      default: false,
      required: false,
    },
    previousPageName: {
      type: String,
      required: false,
    },
  },

  methods: {
    validateForm() {
      return (
        document.querySelector(".btn") && document.querySelector(".btn").click()
      );
    },
  },
};
</script>
