<template>
  <VErrorMessage
    class="absolute -bottom-7 text-base text-red-500"
    :name="name"
  />
</template>

<script>
export default {
  props: ["name"],
};
</script>
