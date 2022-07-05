<template>
  <va-navbar color="primary" class="mb-2 custom">
    <template #left>
      <va-navbar-item>
        <p class="logo-title" style="font-size: 1.5rem">To-Do Vue</p>
      </va-navbar-item>
    </template>
    <template #right>
      <va-navbar-item>
        <router-link to="home">Home</router-link>
      </va-navbar-item>
      <va-navbar-item>
        <router-link to="about">About</router-link>
      </va-navbar-item>
      <va-navbar-item>
        <router-link to="register">Register</router-link>
      </va-navbar-item>
      <va-navbar-item>
        <router-link to="login">Login</router-link>
      </va-navbar-item>
    </template>
  </va-navbar>
</template>

<style scoped>
.custom {
  margin-bottom: 0 !important;
}

a,
p {
  color: #45eba5;
  font-weight: bold;
}
</style>
