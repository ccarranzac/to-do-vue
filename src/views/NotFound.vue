<template>
  <div class="full-content">
    <div class="body">
      <p class="logo-title">&#128128; Not Found!</p>
      <va-button @click="goHome">Go Home</va-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push("home");
    },
  },
};
</script>

<style scoped>
.full-content {
  min-height: 100vh;
  background-color: #f4f4f4;
  padding: 1rem;
}

.body {
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

p {
  font-size: 2rem;
}
</style>
