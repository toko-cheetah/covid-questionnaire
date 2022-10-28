<template>
  <div class="h-[90%] flex justify-between">
    <div class="w-1/3 pb-16 overflow-scroll left-side">
      <slot name="left-side"></slot>
    </div>

    <div class="relative">
      <slot name="right-side"></slot>
    </div>
  </div>
</template>

<style scoped>
.left-side::-webkit-scrollbar {
  display: none;
}

.left-side {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
