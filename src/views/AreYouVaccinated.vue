<template>
  <BaseLayout>
    <template #left-side>
      <TheForm nextPageName="covid_policy" animateId="star">
        <InputRadioLayout>
          <InputTitle>უკვე აცრილი ხარ?*</InputTitle>
          <InputRadioLabel name="had_vaccine" value="true" label="კი" />
          <InputRadioLabel name="had_vaccine" value="false" label="არა" />
          <VField
            name="had_vaccine"
            :value="
              $store.state.dataToSend['had_vaccine'] !== null &&
              $store.state.dataToSend['had_vaccine'].toString()
            "
            hidden
            checked
          />
          <ErrorMsg name="had_vaccine" />
        </InputRadioLayout>

        <InputRadioLayout
          v-if="$store.state.dataToSend['had_vaccine'] === true"
        >
          <InputTitle>აირჩიე რა ეტაპზე ხარ*</InputTitle>
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
            :value="$store.state.dataToSend['vaccination_stage']"
            hidden
            checked
          />
          <ErrorMsg name="vaccination_stage" />
        </InputRadioLayout>

        <InputRadioLayout
          v-if="$store.state.dataToSend['had_vaccine'] === false"
        >
          <InputTitle>რას ელოდები?*</InputTitle>
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
            :value="$store.state.dataToSend['i_am_waiting']"
            hidden
            checked
          />
          <ErrorMsg name="i_am_waiting" />
        </InputRadioLayout>
      </TheForm>

      <div class="ml-[54px]">
        <p
          v-if="
            $store.state.dataToSend['had_vaccine'] === true &&
            $store.state.dataToSend['vaccination_stage'] ===
              'first_dosage_and_not_registered_yet'
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
            $store.state.dataToSend['had_vaccine'] === false &&
            $store.state.dataToSend['i_am_waiting'] ===
              'had_covid_and_planning_to_be_vaccinated'
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

      <PageChangeButtons previousPageName="covid_condition" shapeId="star" />
    </template>

    <template #right-side>
      <img
        src="../images/doctor.png"
        alt="A doctor holding a needle"
        class="mt-8 relative z-10"
      />
      <YellowStar
        id="star"
        class="absolute top-[10px] left-[30px]"
        :class="$store.state.animateClassList['star']"
      />
    </template>
  </BaseLayout>
</template>

<script>
import YellowStar from "../components/icons/YellowStar.vue";

export default {
  components: { YellowStar },
};
</script>

<style scoped>
.star-in {
  animation: star-in 0.1s ease;
}
@keyframes star-in {
  from {
    transform: translateX(-130px) translateY(160px);
  }
}

.star-in-reverse {
  animation: star-in-reverse 0.5s ease;
}
@keyframes star-in-reverse {
  to {
    transform: translateX(-130px) translateY(160px);
  }
}

.star-out {
  animation: star-out 0.5s ease;
}
@keyframes star-out {
  to {
    transform: translateX(100px) translateY(30px);
  }
}

.star-out-reverse {
  animation: star-out-reverse 0.1s ease;
}
@keyframes star-out-reverse {
  from {
    transform: translateX(100px) translateY(30px);
  }
}
</style>
