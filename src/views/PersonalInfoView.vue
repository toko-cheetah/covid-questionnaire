<template>
  <BaseLayout>
    <template #left-side>
      <TheForm nextPageName="covid_condition">
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
      </TheForm>

      <hr class="bg-black w-1/2 mt-24 mb-5" />
      <p class="text-base">
        *-ით მონიშნული ველების შევსება <br />
        სავალდებულოა
      </p>
    </template>

    <template #right-side>
      <img
        src="../images/couple.png"
        alt="Couple with star eyes"
        class="-mt-16 relative z-10"
      />
      <RectangleYellow class="absolute top-[22%] left-[10%] w-4/5" />
    </template>
  </BaseLayout>

  <PageChangeButtons :hidePreviousBtn="true" />
</template>

<script>
import RectangleYellow from "../components/icons/RectangleYellow.vue";

export default {
  components: { RectangleYellow },
};
</script>
