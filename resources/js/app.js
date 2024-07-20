import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "./views/dashboard.vue";
import Form from "./views/form.vue";
import store from "./store";
import axios from "axios";

const routes = [
    { path: "/", component: Form },
    { path: "/dashboard", component: Dashboard },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

axios.defaults.headers.common["Authorization"] = "Bearer $(store.state.token)";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
