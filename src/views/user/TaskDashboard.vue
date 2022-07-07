<template>
  <div>
    <header>
      <user-nav-bar @logOut="logOut"></user-nav-bar>
    </header>
    <div class="content">
      <div class="box">
        <p class="logo-title">&#128062; Your Tasks</p>
      </div>
      <div class="box">
        <div>
          <tool-bar
            @create="createTask"
            @complete="completeTasks"
            @edit="editTask"
            @remove="removeTasks"
            :edited="editable"
            :completed="completable"
            :deleted="deletable"
          ></tool-bar>
          <va-input
            style="margin-block: 30px"
            v-model="filter"
            placeholder="Filter..."
            color="black"
          />
          <va-data-table :items="tasks" :filter="filter" />
        </div>
      </div>
    </div>
    <footer>
      <the-footer></the-footer>
    </footer>
  </div>
</template>

<script>
import UserNavBar from "../../components/UserNavBar.vue";
import TheFooter from "../../components/TheFooter.vue";
import ToolBar from "../../components/ToolBar.vue";
import { mapState } from "vuex";

export default {
  components: { UserNavBar, TheFooter, ToolBar },
  data() {
    return {
      editable: false,
      deletable: false,
      completable: false,
      filter: "",
    };
  },
  computed: mapState(["tasks"]),
  methods: {
    logOut() {
      this.$store.dispatch("logOut").then(() => {
        this.$router.push({ name: "home-view" });
      });
    },
    createTask() {
      this.$router.push({ name: "new-task" });
    },
    completeTasks() {},
    editTask() {},
    removeTasks() {},
  },
};
</script>

<style scoped>
.box {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 1rem;
}

.box p {
  font-size: 3rem;
}
</style>
