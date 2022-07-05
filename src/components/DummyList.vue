<template>
  <va-card stripe stripe-color="secondary">
    <va-card-title>Pending Tasks</va-card-title>
    <va-card-content>
      <div class="row" v-for="task in tasks" :key="task.id">
        <va-checkbox v-model="selected" :array-value="task.id" />
        <p>{{ task.description }}</p>
      </div>
      <va-button :rounded="false" color="secondary" text-color="#ffff"
        >Add Task</va-button
      >
    </va-card-content>
  </va-card>
</template>

<script>
export default {
  data() {
    return {
      selected: [],
      tasks: [
        {
          id: 0,
          description: "task 1: Lorem ipsum dolor sit amet",
        },
        {
          id: 1,
          description: "task 2: Lorem ipsum dolor sit amet",
        },
        {
          id: 2,
          description: "task 3: Lorem ipsum dolor sit amet",
        },
        {
          id: 3,
          description: "task 4: Lorem ipsum dolor sit amet",
        },
      ],
    };
  },
};
</script>

<style scoped>
.row {
  display: flex;
  margin-block: 0.5rem;
}
</style>
