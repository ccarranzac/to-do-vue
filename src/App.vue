<template>
  <va-inner-loading :loading="isLoading" color="secondary" :size="60">
    <router-view></router-view>
  </va-inner-loading>
</template>

<script>
export default {
  computed: {
    isLoading() {
      return this.$store.getters.getLoading;
    },
  },
  mounted() {},
};
</script>

<style>
@import "../src/styles/global.css";
</style>
