import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PersonalInfoView from "../views/PersonalInfoView.vue";
import CovidCondition from "../views/CovidCondition.vue";
import AreYouVaccinated from "../views/AreYouVaccinated.vue";
import CovidPolicy from "../views/CovidPolicy.vue";
import ThankYou from "../views/ThankYou.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/personal-info",
      name: "personal_info",
      component: PersonalInfoView,
    },
    {
      path: "/covid-condition",
      name: "covid_condition",
      component: CovidCondition,
    },
    {
      path: "/are-you-vaccinated",
      name: "are_you_vaccinated",
      component: AreYouVaccinated,
    },
    {
      path: "/covid-policy",
      name: "covid_policy",
      component: CovidPolicy,
    },
    {
      path: "/thank-you",
      name: "thank_you",
      component: ThankYou,
    },
  ],
});

export default router;
