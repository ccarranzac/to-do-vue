<template>Task Dashboard
<button @click="logOut">log out</button></template>

<script>
export default{
    methods:{
        logOut(){
            this.$store.dispatch("logOut").then(() => {
        this.$router.push({ name: "home-view" });
      });
        }
    }
}
</script>
 