<template>
  <BaseLayout>
    <template #left-side>
      <p class="text-2xl mb-12">
        რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
        რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების
        განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი — ჩვენთან
        გადმოსვლის.
        <br />
        <br />
        პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
        ყოველდღიური კომუნიკაციაც გაიშვიათდა.
      </p>

      <TheForm :useSendData="true">
        <InputRadioLayout>
          <InputTitle>
            რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები,
            სადაც ყველა სურვილისამებრ ჩაერთვება?*
          </InputTitle>
          <InputRadioLabel
            name="non_formal_meetings"
            value="twice_a_week"
            label="კვირაში ორჯერ"
          />
          <InputRadioLabel
            name="non_formal_meetings"
            value="once_a_week"
            label="კვირაში ერთხელ"
          />
          <InputRadioLabel
            name="non_formal_meetings"
            value="once_in_a_two_weeks"
            label="ორ კვირაში ერთხელ"
          />
          <InputRadioLabel
            name="non_formal_meetings"
            value="once_in_a_month"
            label="თვეში ერთხელ"
          />
          <VField
            name="non_formal_meetings"
            :value="value('non_formal_meetings')"
            hidden
            checked
          />
          <ErrorMsg name="non_formal_meetings" />
        </InputRadioLayout>

        <InputRadioLayout>
          <InputTitle>
            კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
          </InputTitle>
          <InputRadioLabel
            name="number_of_days_from_office"
            value="0"
            label="0"
          />
          <InputRadioLabel
            name="number_of_days_from_office"
            value="1"
            label="1"
          />
          <InputRadioLabel
            name="number_of_days_from_office"
            value="2"
            label="2"
          />
          <InputRadioLabel
            name="number_of_days_from_office"
            value="3"
            label="3"
          />
          <InputRadioLabel
            name="number_of_days_from_office"
            value="4"
            label="4"
          />
          <InputRadioLabel
            name="number_of_days_from_office"
            value="5"
            label="5"
          />
          <VField
            name="number_of_days_from_office"
            :value="
              value('number_of_days_from_office') !== null &&
              value('number_of_days_from_office').toString()
            "
            hidden
            checked
          />
          <ErrorMsg name="number_of_days_from_office" />
        </InputRadioLayout>

        <InputTitle>რას ფიქრობ ფიზიკურ შეკრებებზე?</InputTitle>
        <TheTextarea name="what_about_meetings_in_live" />

        <InputTitle>
          რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?
        </InputTitle>
        <TheTextarea name="tell_us_your_opinion_about_us" />
      </TheForm>

      <div class="text-end">
        <button
          @click="validateForm"
          class="py-4 px-7 bg-[#208298] text-white rounded-[42px] font-tbc-contractica-caps-bold text-lg"
        >
          დასრულება
        </button>
      </div>
    </template>

    <template #right-side>
      <img
        src="../images/bike.png"
        alt="A guy on a bike at an office entrance"
        class="relative z-10"
      />
      <PinkHeart class="absolute top-[60px] left-[90px]" />
    </template>
  </BaseLayout>

  <PageChangeButtons
    previousPageName="are_you_vaccinated"
    :hideNextBtn="true"
  />
</template>

<script>
import TheTextarea from "../components/form/TheTextarea.vue";
import PinkHeart from "../components/icons/PinkHeart.vue";

export default {
  components: { PinkHeart, TheTextarea },

  methods: {
    value(name) {
      return this.$store.state[name] && this.$store.state[name];
    },

    validateForm() {
      return (
        document.querySelector(".btn") && document.querySelector(".btn").click()
      );
    },
  },
};
</script>
