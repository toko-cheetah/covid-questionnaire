<template>
  <BaseLayout>
    <template #left-side>
      <TheForm nextPageName="covid_condition" animateId="rectangle">
        <InputGroup
          label="სახელი*"
          name="first_name"
          type="text"
          rules="required|min:3"
        />

        <InputGroup
          label="გვარი*"
          name="last_name"
          type="text"
          rules="required|min:3"
        />

        <InputGroup
          label="მეილი*"
          name="email"
          type="email"
          rules="required|email|redberry_email"
        />
      </TheForm>

      <hr class="bg-black w-1/2 mt-24 mb-5" />
      <p class="text-base">
        *-ით მონიშნული ველების შევსება <br />
        სავალდებულოა
      </p>

      <PageChangeButtons :hidePreviousBtn="true" />
    </template>

    <template #right-side>
      <img
        src="../images/couple.png"
        alt="Couple with star eyes"
        class="-mt-16 relative z-10"
      />
      <RectangleYellow
        id="rectangle"
        class="absolute top-[170px] left-[10%] w-4/5"
        :class="$store.state.animateClassList['rectangle']"
      />
    </template>
  </BaseLayout>
</template>

<script>
import RectangleYellow from "../components/icons/RectangleYellow.vue";

export default {
  components: { RectangleYellow },
};
</script>

<style scoped>
.rectangle-in {
  animation: rectangle-in 0.1s ease;
}
@keyframes rectangle-in {
  from {
    transform: translateX(-300px) translateY(140px) scaleX(0.2);
  }
}

.rectangle-out {
  animation: rectangle-out 0.5s ease;
}
@keyframes rectangle-out {
  to {
    transform: translateX(-255px) translateY(100px) scaleX(0.38) scaleY(3.1);
  }
}

.rectangle-out-reverse {
  animation: rectangle-out-reverse 0.1s ease;
}
@keyframes rectangle-out-reverse {
  from {
    transform: translateX(-255px) translateY(100px) scaleX(0.38) scaleY(3.1);
  }
}
</style>
