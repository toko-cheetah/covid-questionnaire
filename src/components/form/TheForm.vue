<template>
  <VForm @submit="otherMethod ? otherMethod : visitNextPage(nextPageName)">
    <slot></slot>
    <button class="btn" hidden></button>
  </VForm>
</template>

<script>
export default {
  props: {
    otherMethod: {
      type: Function,
      required: false,
    },
    nextPageName: {
      type: String,
      required: false,
    },
  },

  methods: {
    visitNextPage(nextPageName) {
      return nextPageName && this.$router.push({ name: nextPageName });
    },
  },
};
</script>
