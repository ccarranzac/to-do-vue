import { createStore } from "vuex";
import router from "@/router";


export default createStore({
  state: {
    loading: false,
    auth: false,
  },
  getters: {
    getLoading(state) {
      return state.loading;
    },
  },
  mutations: {
    setLoading(state, value) {
      state.loading = value;
    },
    setAuth(state, value) {
      state.auth = value;
    },
  },
  actions: {
    logIn({ commit }) {
      commit("setLoading", true);
      setTimeout(() => {
        commit("setLoading", false);
        commit("setAuth", true);
        localStorage.setItem("auth", true);
        router.push({ name: "dashboard" });
      }, 2000);
    },
    logOut({ commit }) {
      //simulating log out
      localStorage.clear();
      commit("setAuth", false);
    },
    register({ commit }) {
      commit("setLoading", true);
      setTimeout(() => {
        commit("setLoading", false);
      }, 2000);
    },
  },
  modules: {},
});
