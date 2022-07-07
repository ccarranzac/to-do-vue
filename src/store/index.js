import { createStore } from "vuex";
import router from "@/router";

export default createStore({
  state: {
    loading: false,
    auth: false,
    tasks: [],
    task: {},
  },
  getters: {
    getLoading(state) {
      return state.loading;
    },
    getTasks(state) {
      return state.tasks;
    },
    getTask(state) {
      return state.task;
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
    setTask(state, value) {
      const task = state.tasks.find((x) => x.id === value);
      state.task = task;
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
    completeTasks({ commit, getters }, payload) {
      commit("setLoading", true);
      setTimeout(() => {
        let tasks = getters.getTasks;
        for (let item of payload) {
          tasks.map((el) =>
            el.id === item.id ? (el.state = "Completado") : el.state
          );
        }
        commit("setTasks", tasks);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        commit("setLoading", false);
      }, 2000);
    },
    editTask({ commit, getters }, payload) {
      commit("setLoading", true);
      setTimeout(() => {
        let tasks = getters.getTasks;
        var index = tasks.findIndex((x) => x.id == payload.id);
        tasks[index] = payload;
        commit("setTasks", tasks);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        commit("setLoading", false);
        router.push({ name: "dashboard" });
      }, 2000);
    },
    deleteTasks({ commit, getters }, payload) {
      commit("setLoading", true);
      setTimeout(() => {
        let tasks = getters.getTasks;
        tasks = tasks.filter((el) => !payload.includes(el));
        commit("setTasks", tasks);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        commit("setLoading", false);
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
