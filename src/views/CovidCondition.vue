<template>
  <BaseLayout>
    <template #left-side>
      <TheForm nextPageName="are_you_vaccinated" animateId="circle">
        <InputRadioLayout>
          <InputTitle>გაქვს გადატანილი Covid-19?*</InputTitle>
          <InputRadioLabel name="had_covid" value="yes" label="კი" />
          <InputRadioLabel name="had_covid" value="no" label="არა" />
          <InputRadioLabel
            name="had_covid"
            value="have_right_now"
            label="ახლა მაქვს"
          />
          <VField
            name="had_covid"
            :value="$store.state.dataToSend['had_covid']"
            hidden
            checked
          />
          <ErrorMsg name="had_covid" />
        </InputRadioLayout>

        <InputRadioLayout v-if="$store.state.dataToSend['had_covid'] === 'yes'">
          <InputTitle>ანტისხეულების ტესტი გაქვს გაკეთებული?*</InputTitle>
          <InputRadioLabel name="had_antibody_test" value="true" label="კი" />
          <InputRadioLabel name="had_antibody_test" value="false" label="არა" />
          <VField
            name="had_antibody_test"
            :value="
              $store.state.dataToSend['had_antibody_test'] !== null &&
              $store.state.dataToSend['had_antibody_test'].toString()
            "
            hidden
            checked
          />
          <ErrorMsg name="had_antibody_test" />
        </InputRadioLayout>

        <div v-if="$store.state.dataToSend['had_covid'] === 'yes'">
          <div v-if="$store.state.dataToSend['had_antibody_test'] === true">
            <InputGroup
              label="თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა"
              name="test_date"
              type="text"
              onfocus="this.type = 'date'"
              onblur="this.type = 'text'"
              placeholder="რიცხვი"
            />

            <InputGroup
              class="-mt-10"
              name="number"
              type="number"
              placeholder="ანტისხეულების რაოდენობა"
            />
          </div>

          <div v-if="$store.state.dataToSend['had_antibody_test'] === false">
            <InputGroup
              label="მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*"
              name="covid_sickness_date"
              type="text"
              rules="required"
              onfocus="this.type = 'date'"
              onblur="this.type = 'text'"
              placeholder="დდ/თთ/წწ"
            />
          </div>
        </div>
      </TheForm>

      <PageChangeButtons previousPageName="personal_info" shapeId="circle" />
    </template>

    <template #right-side>
      <img
        src="../images/vaccinate.png"
        alt="boy with a high fever"
        class="-mt-12 relative z-10"
      />
      <RedCircle
        id="circle"
        class="absolute top-[190px] left-[80px]"
        :class="$store.state.animateClassList['circle']"
      />
    </template>
  </BaseLayout>
</template>

<script>
import RedCircle from "../components/icons/RedCircle.vue";

export default {
  components: { RedCircle },
};
</script>

<style scoped>
.circle-in {
  animation: circle-in 0.1s ease;
}
@keyframes circle-in {
  from {
    transform: translateX(280px) translateY(-100px) scaleX(2.7) scaleY(0.32);
  }
}

.circle-in-reverse {
  animation: circle-in-reverse 0.5s ease;
}
@keyframes circle-in-reverse {
  to {
    transform: translateX(280px) translateY(-100px) scaleX(2.7) scaleY(0.32);
  }
}

.circle-out {
  animation: circle-out 0.5s ease;
}
@keyframes circle-out {
  to {
    transform: translateX(130px) translateY(-160px);
  }
}

.circle-out-reverse {
  animation: circle-out-reverse 0.1s ease;
}
@keyframes circle-out-reverse {
  from {
    transform: translateX(130px) translateY(-160px);
  }
}
</style>
