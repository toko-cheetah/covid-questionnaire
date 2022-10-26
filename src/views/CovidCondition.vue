<template>
  <div class="flex justify-between">
    <div class="w-1/3">
      <VForm @submit="visitNextPage">
        <div class="relative mb-12">
          <InputRadioTitle>გაქვს გადატანილი Covid-19?*</InputRadioTitle>
          <InputRadioLabel name="had_covid" value="yes" label="კი" />
          <InputRadioLabel name="had_covid" value="no" label="არა" />
          <InputRadioLabel
            name="had_covid"
            value="currently_have"
            label="ახლა მაქვს"
          />
          <VField name="had_covid" :value="value('had_covid')" hidden checked />
          <ErrorMsg name="had_covid" />
        </div>

        <div class="relative mb-12" v-if="value('had_covid') === 'yes'">
          <InputRadioTitle
            >ანტისხეულების ტესტი გაქვს გაკეთებული?*</InputRadioTitle
          >
          <InputRadioLabel name="had_antibody_test" value="true" label="კი" />
          <InputRadioLabel name="had_antibody_test" value="false" label="არა" />
          <VField
            name="had_antibody_test"
            :value="
              value('had_antibody_test') !== null &&
              value('had_antibody_test').toString()
            "
            hidden
            checked
          />
          <ErrorMsg name="had_antibody_test" />
        </div>

        <div v-if="value('had_covid') === 'yes'">
          <div v-if="value('had_antibody_test') === true">
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

          <div v-if="value('had_antibody_test') === false">
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
        <button class="btn" hidden></button>
      </VForm>
    </div>

    <div class="-mt-12 relative">
      <img
        src="../images/vaccinate.png"
        alt="boy with a high fever"
        class="relative z-10"
      />
      <RedCircle class="absolute top-[235px] left-[80px]" />
    </div>
  </div>

  <PageChangeButtons previousPageName="personal_info" />
</template>

<script>
import RedCircle from "../components/icons/RedCircle.vue";

export default {
  components: { RedCircle },

  methods: {
    value(name) {
      return this.$store.state[name] && this.$store.state[name];
    },

    visitNextPage() {
      this.$router.push({ name: "are_you_vaccinated" });
    },
  },
};
</script>
