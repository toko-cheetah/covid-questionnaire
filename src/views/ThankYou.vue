<template>
  <div
    class="bg-[#232323] text-white h-full relative flex justify-center items-center font-tbc-contractica-caps-bold text-[64px] tracking-[0.24em]"
  >
    <p>მადლობა</p>
    <WhiteStar id="star-top" class="absolute top-[417px] left-[770px]" />
    <WhiteStar
      id="star-bottom"
      class="w-[33px] absolute top-[579px] right-[766px]"
    />
  </div>
</template>

<script>
import WhiteStar from "../components/icons/WhiteStar.vue";

export default {
  components: { WhiteStar },
};
</script>

<style scoped>
p {
  animation: 1s text-appear ease-out;
}

@keyframes text-appear {
  0%,
  40% {
    opacity: 0;
  }

  60% {
    opacity: 0.3;
  }

  100% {
    opacity: 1;
  }
}

#star-top {
  animation: 1.2s top-star-appear ease-out;
}

@keyframes top-star-appear {
  0%,
  90% {
    opacity: 0;
    transform: translatex(72px) translateY(89px);
  }

  100% {
    opacity: 1;
    transform: translatex(0%) translateX(0%);
  }
}

#star-bottom {
  animation: 1.2s bottom-star-appear ease-out;
}

@keyframes bottom-star-appear {
  0%,
  90% {
    opacity: 0;
    transform: translatex(-62px) translateY(-89px);
  }

  100% {
    opacity: 1;
    transform: translatex(0%) translateX(0%);
  }
}
</style>
