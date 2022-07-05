<template>
  <div>
    <header>
      <nav-bar></nav-bar>
    </header>
    <router-view></router-view>
    <footer>
      <the-footer></the-footer>
    </footer>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import TheFooter from "../components/TheFooter.vue";

export default {
  components: { NavBar, TheFooter },
};
</script>
