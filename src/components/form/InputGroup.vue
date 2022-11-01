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
  props: {
    label: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    rules: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    onfocus: {
      type: String,
      required: false,
    },
    onblur: {
      type: String,
      required: false,
    },
  },

  methods: {
    value(name) {
      return (
        (this.$store.state.dataToSend[name] ||
          this.$store.state.dataToSend.antibodies[name]) &&
        (name === "test_date" || name === "number"
          ? this.$store.state.dataToSend.antibodies[name]
          : this.$store.state.dataToSend[name])
      );
    },

    updateValue(e) {
      this.$store.commit("updateValue", {
        key: e.target.name,
        message:
          e.target.name === "covid_sickness_date"
            ? new Date(e.target.value).toLocaleDateString("en-GB")
            : e.target.type === "number"
            ? Number(e.target.value)
            : e.target.value,
      });
    },
  },
};
</script>
