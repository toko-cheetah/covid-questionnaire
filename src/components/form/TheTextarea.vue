<template>
  <textarea
    class="w-full h-44 mb-12 py-2 px-5 bg-inherit border border-black"
    :name="name"
    :value="$store.state[name]"
    @input="updateValue"
  ></textarea>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },

  methods: {
    updateValue(e) {
      this.$store.commit("updateValue", {
        key: e.target.name,
        message: e.target.value,
      });
    },
  },
};
</script>
