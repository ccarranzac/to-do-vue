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
          <va-data-table
            :items="tasks"
            :filter="filter"
            :selectable="selectable"
            v-model="selectedItems"
          >
            <template #cell(state)="{ value }"
              ><va-chip
                v-if="value === 'Completado'"
                color="secondary"
                size="small"
                >{{ value }}</va-chip
              >
              <va-chip v-else color="warning" size="small">{{
                value
              }}</va-chip></template
            >
          </va-data-table>
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
      selectable: true,
      selectedItems: [],
    };
  },
  watch: {
    selectedItems: {
      handler(value) {
        if (value.length > 0) {
          this.completable = true;
          this.deletable = true;
          if (value.length === 1) {
            this.editable = true;
          } else {
            this.editable = false;
          }
        } else {
          this.editable = false;
          this.completable = false;
          this.deletable = false;
        }
      },
      deep: true,
    },
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
    completeTasks() {
      this.$store.dispatch("completeTasks", this.selectedItems);
    },
    editTask() {},
    removeTasks() {
      this.$store.dispatch("deleteTasks", this.selectedItems);
    },
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
