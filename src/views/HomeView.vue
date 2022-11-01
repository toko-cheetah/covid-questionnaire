<template>
  <div
    class="w-full h-full flex flex-col justify-center items-center bg-inherit"
  >
    <div class="p-12 bg-inherit z-10">
      <RedberryLogo id="logo" class="logo-in" />
    </div>

    <router-link :to="{ name: 'personal_info' }">
      <p
        class="text-center font-tbc-contractica-caps-bold text-3xl relative"
        @click="animate"
      >
        კითხვარის <br />
        დაწყება
      </p>
    </router-link>
  </div>
</template>

<script>
import RedberryLogo from "../components/icons/RedberryLogo.vue";

export default {
  components: {
    RedberryLogo,
  },

  methods: {
    animate() {
      document.getElementById("logo").classList.add("logo-out");
    },
  },
};
</script>

<style scoped>
p {
  animation: 1.5s text-appear ease-out;
}

@keyframes text-appear {
  0%,
  50% {
    opacity: 0;
    transform: translateY(-100%);
  }

  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

p:hover::after {
  position: absolute;
  top: 0;
  left: 2px;
  content: "კითხვარის დაწყება";
  color: transparent;
  -webkit-text-stroke: 1px #232323;
}

.logo-in {
  animation: 0.5s logo-in ease;
}
@keyframes logo-in {
  from {
    transform: scale(42);
  }
}

.logo-out {
  animation: 0.5s logo-out ease;
}
@keyframes logo-out {
  to {
    transform: translateX(50px) translateY(-135px);
  }
}
</style>
