<template>
  <VForm @submit="useSendData ? sendData() : visitNextPage(nextPageName)">
    <slot></slot>
    <button class="btn" hidden></button>
  </VForm>
</template>

<script>
import axios from "axios";

export default {
  props: {
    useSendData: {
      type: Boolean,
      default: false,
      required: false,
    },
    nextPageName: {
      type: String,
      required: false,
    },
  },

  methods: {
    visitNextPage(nextPageName) {
      return nextPageName && this.$router.push({ name: nextPageName });
    },

    sendData() {
      const store = JSON.parse(JSON.stringify(this.$store.state));
      let keys = Object.keys(store);

      keys =
        store.had_covid !== "yes"
          ? keys.filter(
              (item) =>
                item !== "had_antibody_test" &&
                item !== "antibodies" &&
                item !== "covid_sickness_date"
            )
          : store.had_antibody_test === true
          ? keys.filter((item) => item !== "covid_sickness_date")
          : keys.filter((item) => item !== "antibodies");

      keys =
        store.had_vaccine === true
          ? keys.filter((item) => item !== "i_am_waiting")
          : keys.filter((item) => item !== "vaccination_stage");

      keys = keys.filter(
        (item) =>
          store[item] !== null &&
          store[item].toString().replace(/^\s+/g, "") !== ""
      );

      const requestedData = {};

      keys.map((item) => (requestedData[item] = store[item]));

      for (const prop in requestedData) {
        if (requestedData[prop].constructor === Object) {
          for (const item in requestedData[prop]) {
            !requestedData[prop][item] && delete requestedData[prop][item];
            !Object.keys(requestedData[prop]).length &&
              delete requestedData[prop];
          }
        }
      }

      axios
        .post("https://covid19.devtest.ge/api/create", requestedData)
        .then(() => this.$router.push({ name: "thank_you" }))
        .catch(() =>
          alert("დაფიქსირდა შეცდომა! გთხოვთ ახლიდან შეავსოთ ფორმა.")
        );
    },
  },
};
</script>
