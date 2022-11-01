import { createStore } from "vuex";

const store = createStore({
  strict: true,

  state() {
    return {
      dataToSend: {
        first_name: null,
        last_name: null,
        email: null,
        had_covid: null,
        had_antibody_test: null,
        antibodies: {
          test_date: null,
          number: null,
        },
        covid_sickness_date: null,
        had_vaccine: null,
        vaccination_stage: null,
        i_am_waiting: null,
        non_formal_meetings: null,
        number_of_days_from_office: null,
        what_about_meetings_in_live: null,
        tell_us_your_opinion_about_us: null,
      },

      animateClassList: {
        rectangle: "rectangle-in",
        circle: "circle-in",
        star: "star-in",
        heart: "heart-in",
      },
    };
  },

  mutations: {
    updateValue(state, payload) {
      payload.key === "test_date" || payload.key === "number"
        ? (state.dataToSend.antibodies[payload.key] = payload.message)
        : (state.dataToSend[payload.key] = payload.message);
    },

    updateClassList(state, payload) {
      state.animateClassList[payload.key] = payload.value;
    },
  },
});

export default store;
