<template>
  <BaseLayout>
    <template #left-side>
      <TheForm nextPageName="covid_policy">
        <InputRadioLayout>
          <InputRadioTitle>უკვე აცრილი ხარ?*</InputRadioTitle>
          <InputRadioLabel name="had_vaccine" value="true" label="კი" />
          <InputRadioLabel name="had_vaccine" value="false" label="არა" />
          <VField
            name="had_vaccine"
            :value="
              value('had_vaccine') !== null && value('had_vaccine').toString()
            "
            hidden
            checked
          />
          <ErrorMsg name="had_vaccine" />
        </InputRadioLayout>

        <InputRadioLayout v-if="value('had_vaccine') === true">
          <InputRadioTitle>აირჩიე რა ეტაპზე ხარ*</InputRadioTitle>
          <InputRadioLabel
            name="vaccination_stage"
            value="first_dosage_and_registered_on_the_second"
            label="პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"
          />
          <InputRadioLabel
            name="vaccination_stage"
            value="fully_vaccinated"
            label="სრულად აცრილი ვარ"
          />
          <InputRadioLabel
            name="vaccination_stage"
            value="first_dosage_and_not_registered_yet"
            label="პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"
          />
          <VField
            name="vaccination_stage"
            :value="value('vaccination_stage')"
            hidden
            checked
          />
          <ErrorMsg name="vaccination_stage" />
        </InputRadioLayout>

        <InputRadioLayout v-if="value('had_vaccine') === false">
          <InputRadioTitle>რას ელოდები?*</InputRadioTitle>
          <InputRadioLabel
            name="i_am_waiting"
            value="registered_and_waiting"
            label="დარეგისტრირებული ვარ და ველოდები რიცხვს"
          />
          <InputRadioLabel
            name="i_am_waiting"
            value="not_planning"
            label="არ ვგეგმავ"
          />
          <InputRadioLabel
            name="i_am_waiting"
            value="had_covid_and_planning_to_be_vaccinated"
            label="გადატანილი მაქვს და ვგეგმავ აცრას"
          />
          <VField
            name="i_am_waiting"
            :value="value('i_am_waiting')"
            hidden
            checked
          />
          <ErrorMsg name="i_am_waiting" />
        </InputRadioLayout>
      </TheForm>

      <div class="ml-[54px]">
        <p
          v-if="
            value('had_vaccine') === true &&
            value('vaccination_stage') === 'first_dosage_and_not_registered_yet'
          "
        >
          რომ არ გადადო,<br />
          ბარემ ახლავე დარეგისტრირდი<br />
          <a
            href="https://booking.moh.gov.ge/"
            target="_blank"
            class="text-[#1289AE]"
            >https://booking.moh.gov.ge/</a
          >
        </p>

        <div
          v-if="
            value('had_vaccine') === false &&
            value('i_am_waiting') === 'had_covid_and_planning_to_be_vaccinated'
          "
        >
          <p class="mb-6">
            ახალი პროტოკოლით კოვიდის გადატანიდან 1 <br />
            თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება.
          </p>

          <p>
            👉 რეგისტრაციის ბმული<br />
            <a
              href="https://booking.moh.gov.ge/"
              target="_blank"
              class="text-[#1289AE]"
              >https://booking.moh.gov.ge/</a
            >
          </p>
        </div>
      </div>
    </template>

    <template #right-side>
      <img
        src="../images/doctor.png"
        alt="A doctor holding a needle"
        class="mt-8 relative z-10"
      />
      <YellowStar class="absolute top-[10px] left-[30px]" />
    </template>
  </BaseLayout>

  <PageChangeButtons previousPageName="covid_condition" />
</template>

<script>
import YellowStar from "../components/icons/YellowStar.vue";

export default {
  components: { YellowStar },

  methods: {
    value(name) {
      return this.$store.state[name] && this.$store.state[name];
    },
  },
};
</script>
