import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import {
  Form as VForm,
  Field as VField,
  ErrorMessage as VErrorMessage,
} from "vee-validate";
import BaseLayout from "./components/layout/BaseLayout.vue";
import TheForm from "./components/form/TheForm.vue";
import InputGroup from "./components/form/InputGroup.vue";
import InputRadioLayout from "./components/form/InputRadioLayout.vue";
import InputRadioTitle from "./components/form/InputRadioTitle.vue";
import InputRadioLabel from "./components/form/InputRadioLabel.vue";
import ErrorMsg from "./components/form/ErrorMsg.vue";
import PageChangeButtons from "./components/layout/PageChangeButtons.vue";

import "./assets/main.css";
import "./config/vee-validate/rules";
import "./config/vee-validate/messages";

const app = createApp(App);

app.use(router);
app.use(store);

app.component("VForm", VForm);
app.component("VField", VField);
app.component("VErrorMessage", VErrorMessage);
app.component("BaseLayout", BaseLayout);
app.component("TheForm", TheForm);
app.component("InputGroup", InputGroup);
app.component("InputRadioLayout", InputRadioLayout);
app.component("InputRadioTitle", InputRadioTitle);
app.component("InputRadioLabel", InputRadioLabel);
app.component("ErrorMsg", ErrorMsg);
app.component("PageChangeButtons", PageChangeButtons);

app.mount("#app");
