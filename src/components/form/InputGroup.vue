<template>
  <div class="mb-14 flex flex-col relative">
    <label :for="name" class="font-bpg-nino-mtavruli-bold text-2xl mb-2">
      {{ label }}
    </label>

    <Field
      class="py-2 px-5 border border-solid border-gray-800 bg-inherit text-lg"
      :name="name"
      :type="type"
      :rules="rules"
      :value="value(name)"
      @input="updateValue"
    />

    <VErrorMessage
      class="absolute -bottom-7 left-3 text-base text-red-500"
      :name="name"
    />
  </div>
</template>

<script>
import { Field, ErrorMessage as VErrorMessage } from "vee-validate";

export default {
  components: {
    Field,
    VErrorMessage,
  },

  props: ["label", "name", "type", "rules"],

  methods: {
    value(name) {
      return this.$store.state[name] && this.$store.state[name];
    },

    updateValue(e) {
      this.$store.commit("updateValue", {
        key: e.target.name,
        message: e.target.value,
      });
    },
  },
};
</script>
