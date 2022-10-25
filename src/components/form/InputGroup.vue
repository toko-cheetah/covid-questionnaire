<template>
  <div class="mb-14 flex flex-col relative">
    <label :for="name" class="font-bpg-nino-mtavruli-bold text-2xl mb-2">
      {{ label }}
    </label>

    <VField
      class="py-2 px-5 border border-solid border-gray-800 bg-inherit text-lg placeholder-gray-500"
      :name="name"
      :type="type"
      :rules="rules"
      :value="value(name)"
      @input="updateValue"
      :placeholder="placeholder"
      :onfocus="onfocus"
      :onblur="onblur"
    />

    <VErrorMessage
      class="absolute -bottom-7 left-3 text-base text-red-500"
      :name="name"
    />
  </div>
</template>

<script>
export default {
  props: ["label", "name", "type", "rules", "placeholder", "onfocus", "onblur"],

  methods: {
    value(name) {
      return (
        (this.$store.state[name] || this.$store.state.antibodies[name]) &&
        (name === "test_date" || name === "number"
          ? this.$store.state.antibodies[name]
          : this.$store.state[name])
      );
    },

    updateValue(e) {
      this.$store.commit("updateValue", {
        key: e.target.name,
        message:
          e.target.type === "date"
            ? new Date(e.target.value).toLocaleDateString("en-GB")
            : e.target.type === "number"
            ? Number(e.target.value)
            : e.target.value,
      });
    },
  },
};
</script>
