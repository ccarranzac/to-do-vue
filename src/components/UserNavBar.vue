<template>
  <va-navbar color="primary" class="mb-2 custom">
    <template #left>
      <va-navbar-item>
        <p class="logo-title" style="font-size: 1.5rem">To-Do Vue</p>
      </va-navbar-item>
    </template>
    <template #right>
      <va-navbar-item>
        <div @click="logOut">Log Out</div>
      </va-navbar-item>
    </template>
  </va-navbar>
</template>

<script>
export default {
  emits: ["logOut"],
  methods: {
    logOut() {
      this.$emit("logOut");
    },
  },
};
</script>

<style scoped>
.custom {
  margin-bottom: 0 !important;
}

div,
p {
  color: #45eba5;
  font-weight: bold;
}

div {
  cursor: pointer;
}
</style>
