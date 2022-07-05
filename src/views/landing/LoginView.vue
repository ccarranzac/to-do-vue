<template>
  <div class="content">
    <div class="container">
      <transition name="card" appear>
        <va-card color="#ffff" class="card">
          <p class="logo-title" id="title">&#127811; Welcome Back!</p>
          <div>
            <va-form
              tag="form"
              ref="form"
              @submit.prevent="handleSubmit"
              @validation="validation = $event"
            >
              <va-input
                style="margin-block: 30px"
                v-model="username"
                label="Username"
                color="black"
                :rules="inputRules"
              />
              <va-input
                style="margin-block: 30px"
                class="mt-2"
                v-model="password"
                color="black"
                type="password"
                label="Password"
                :rules="inputRules"
              />
              <va-button
                type="submit"
                :rounded="false"
                color="secondary"
                text-color="#ffff"
                class="mt-2"
              >
                Login
              </va-button>
            </va-form>
            <p style="margin-top: 10px">
              Dont have an account?
              <span class="link" @click="toRegister">Join us Now!!</span>
            </p>
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
      username: "",
      password: "",
      validation: null,
      inputRules: [
        (value) => (value && value.length > 0) || "This field is required",
      ],
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.form.validate();
      if (this.validation) {
        this.$store.dispatch("logIn");
      }
    },
    toRegister() {
      this.$router.push({ name: "register" });
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: flex-end;
}

.card {
  width: fit-content;
  height: fit-content;
  padding: 2rem;
  margin-right: 3rem;
}

#title {
  font-size: 70px;
  color: black;
  margin-bottom: 20px;
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

.link {
  cursor: pointer;
  color: #45eba5;
}
</style>
