import { createStore } from "vuex";
const store = createStore({
    state: {
        token: localStorage.getItem("token") || "",
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
            localStorage.setItem("token", token);
        },
    },
    actions: {
        setToken({ commit }, token) {
            commit("setToken", token);
        },
        clearToken({ commit }) {
            commit("clearToken");
        },
    },
});

export default store;
