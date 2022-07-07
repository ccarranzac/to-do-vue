<template>
  <div class="full-content">
    <div class="back" @click="back">&#9194; Volver</div>
    <div class="body">
      <transition name="card" appear>
        <va-card color="#ffff" class="card">
          <p class="logo-title" id="title">&#9981; Edit the Task!!!</p>
          <div>
            <va-form
              tag="form"
              ref="form"
              @submit.prevent="handleSubmit"
              @validation="validation = $event"
            >
              <va-input
                style="margin-block: 30px"
                v-model="title"
                label="Title"
                color="black"
                :rules="inputRules"
              />
              <va-input
                v-model="description"
                type="textarea"
                label="Description"
                color="black"
                :rules="inputRules"
                autosize
              />
              <div class="row-line">
                <va-input v-model="tag" label="Tags" color="black" />
                <va-button
                  style="height: fit-content"
                  :rounded="false"
                  color="secondary"
                  text-color="#ffff"
                  @click="addTag"
                >
                  Add
                </va-button>
              </div>
              <p>Tags</p>
              <div class="container">
                <p v-for="tag in tags" :key="tag">{{ tag }}</p>
              </div>
              <va-button
                type="submit"
                :rounded="false"
                color="secondary"
                text-color="#ffff"
              >
                Edit Task
              </va-button>
            </va-form>
          </div>
        </va-card>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      title: "",
      description: "",
      validation: null,
      tag: "",
      tags: [],
      state: "",
      inputRules: [
        (value) => (value && value.length > 0) || "This field is required",
      ],
    };
  },
  methods: {
    back() {
      this.$router.push({ name: "dashboard" });
    },
    addTag() {
      if (this.tag !== "") {
        this.tags.push(this.tag);
        this.tag = "";
      }
    },
    handleSubmit() {
      this.$refs.form.validate();
      if (this.validation) {
        const task = {
          id: this.id,
          title: this.title,
          description: this.description,
          tags: this.tags,
          state: this.state,
        };
        this.$store.dispatch("editTask", task);
      }
    },
    assignInfo(task) {
      this.id = task.id;
      this.title = task.title;
      this.description = task.description;
      this.tags = task.tags;
      this.state = task.state;
    },
  },
  mounted() {
    const id = this.$route.params.id;
    this.$store.commit("setTask", Number(id));
    this.assignInfo(this.$store.getters.getTask);
  },
};
</script>

<style scoped>
.full-content {
  min-height: 100vh;
  background-color: #f4f4f4;
  padding: 1rem;
}

.back {
  cursor: pointer;
  font-size: 1.5rem;
}

.body {
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: center;
}

#title {
  font-size: 2rem;
}

.card {
  margin-block: 1rem;
  width: fit-content;
  height: fit-content;
  padding: 20px;
}

.card-enter-active {
  animation: bounce-in 0.6s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.row-line {
  margin-block: 30px;
  display: flex;
  justify-content: space-between;
}

.container {
  margin-block: 30px;
  width: 100%;
  max-height: 10rem;
  padding: 1rem;
  background: #f4f4f4;
  overflow: auto;
}
</style>
