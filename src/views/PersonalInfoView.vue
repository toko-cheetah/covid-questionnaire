<template>
  <div class="flex justify-between">
    <div class="w-1/3">
      <VForm @submit="visitNextPage">
        <InputGroup
          label="სახელი*"
          name="first_name"
          type="text"
          rules="required|min:2"
        />

        <InputGroup
          label="გვარი*"
          name="last_name"
          type="text"
          rules="required|min:2"
        />

        <InputGroup
          label="მეილი*"
          name="email"
          type="email"
          rules="required|email|redberry_email"
        />

        <button class="btn" hidden></button>
      </VForm>

      <hr class="bg-black w-1/2 mt-24 mb-5" />
      <p class="text-base">
        *-ით მონიშნული ველების შევსება <br />
        სავალდებულოა
      </p>
    </div>

    <div class="max-w-[50%] -mt-16 relative">
      <img
        src="../images/couple.png"
        alt="Couple with star eyes"
        class="relative z-10"
      />
      <RectangleYellow class="absolute top-[27%] left-[10%] w-4/5" />
    </div>
  </div>

  <PageChangeButtons :hidePreviousBtn="true" />
</template>

<script>
import RectangleYellow from "../components/icons/RectangleYellow.vue";

export default {
  components: { RectangleYellow },

  methods: {
    visitNextPage() {
      this.$router.push({ name: "covid_condition" });
    },
  },
};
</script>
