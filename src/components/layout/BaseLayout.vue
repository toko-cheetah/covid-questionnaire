<template>
  <div class="flex justify-between">
    <div class="w-1/3 overflow-scroll">
      <slot name="left-side"></slot>
    </div>

    <div class="relative">
      <slot name="right-side"></slot>
    </div>
  </div>
</template>
