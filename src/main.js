import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { Form as VForm } from "vee-validate";
import InputGroup from "./components/form/InputGroup.vue";
import PageChangeButtons from "./components/layout/PageChangeButtons.vue";

import "./assets/main.css";
import "./config/vee-validate/rules";

const app = createApp(App);

app.use(router);
app.use(store);

app.component("VForm", VForm);
app.component("InputGroup", InputGroup);
app.component("PageChangeButtons", PageChangeButtons);

app.mount("#app");
