<template>
  <div class="content">
    <div class="divider">
      <div>
        <div class="head">
          <p>Welcome to</p>
          <p class="logo-title">To Do Vue</p>
        </div>
        <div class="body">
          <p>To Do helps you focus, whether you're working or playing.</p>
          <div class="button-box">
            <va-button :rounded="false" @click="toRegister">Register</va-button>
            <va-button
              :rounded="false"
              color="secondary"
              text-color="#ffff"
              @click="toLogin"
              >Log In</va-button
            >
          </div>
        </div>
      </div>
      <div>
        <transition name="card" appear>
          <dummy-list></dummy-list>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import DummyList from "../../components/DummyList.vue";

export default {
  components: { DummyList },
  methods: {
    toRegister() {
      this.$router.push({ name: "register" });
    },
    toLogin() {
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style scoped>
.divider {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
}

.head {
  font-size: 4rem;
}

.body p {
  line-height: 2.5;
  font-size: 1.5rem;
}

.button-box {
  display: flex;
  gap: 0.5rem;
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
</style>
