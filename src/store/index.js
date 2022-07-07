import { createStore } from "vuex";
import router from "@/router";

export default createStore({
  state: {
    loading: false,
    auth: false,
    tasks: [],
  },
  getters: {
    getLoading(state) {
      return state.loading;
    },
    getTasks(state) {
      return state.tasks;
    },
  },
  mutations: {
    setLoading(state, value) {
      state.loading = value;
    },
    setAuth(state, value) {
      state.auth = value;
    },
    setTasks(state, value) {
      state.tasks = value;
    },
  },
  actions: {
    createTask({ commit }, payload) {
      commit("setLoading", true);
      setTimeout(() => {
        commit("setLoading", false);
        const tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks.push(payload);
        commit("setTasks", tasks);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        router.push({ name: "dashboard" });
      }, 2000);
    },
    initialTasks({ commit }) {
      const tasks = localStorage.getItem("tasks");
      if (tasks) {
        commit("setTasks", JSON.parse(tasks));
      } else {
        const empty = [];
        localStorage.setItem("tasks", JSON.stringify(empty));
        commit("setTasks", empty);
      }
    },
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
      localStorage.removeItem("auth");
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
