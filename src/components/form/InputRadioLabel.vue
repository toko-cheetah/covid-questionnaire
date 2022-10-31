<template>
  <div class="flex gap-3 mb-3 ml-5 items-center text-xl">
    <VField
      class="radio"
      type="radio"
      :name="name"
      :value="value"
      @input="updateValue"
      rules="required"
    />{{ label }}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },

  methods: {
    updateValue(e) {
      this.$store.commit("updateValue", {
        key: e.target.name,
        message:
          e.target.value === "true" || e.target.value === "false"
            ? e.target.value === "true"
            : e.target.name === "number_of_days_from_office"
            ? Number(e.target.value)
            : e.target.value,
      });
    },
  },
};
</script>

<style scoped>
.radio {
  appearance: none;
  background-color: inherit;
  width: 23px;
  height: 23px;
  border: 1px solid #232323;
  border-radius: 50%;
  cursor: pointer;

  display: grid;
  place-content: center;
}

.radio::before {
  content: "";
  width: 15px;
  height: 15px;
  border-radius: 50%;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em #232323;
  background-color: #232323;
}

.radio:checked::before {
  transform: scale(1);
}
</style>
