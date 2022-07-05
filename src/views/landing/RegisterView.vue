<template>
  <div class="content">
    <div class="left">
      <transition name="card" appear>
        <va-card color="black" class="card">
          <p class="logo-title" id="title">&#9989; Join Us!</p>
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
                v-model="email"
                type="email"
                label="email"
                color="black"
                :rules="emailRules"
              />
              <va-input
                style="margin-block: 30px"
                class="mt-2"
                v-model="password"
                type="password"
                label="Password"
                color="black"
                :rules="inputRules"
              />
              <va-button
                type="submit"
                :rounded="false"
                color="white"
                class="mt-2"
              >
                Register
              </va-button>
            </va-form>
            <p style="margin-top: 10px">
              Already have an account?
              <span class="link" @click="toLogin">Log In</span>
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
      isCloseableAlertVisible: false,
      username: "",
      email: "",
      password: "",
      validation: "",
      inputRules: [
        (value) => (value && value.length > 0) || "This field is required",
      ],
      emailRules: [
        (value) => (value && value.length > 0) || "This field is required",
        (value) => value.includes("@") || "Invalid email",
      ],
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.form.validate();
      if (this.validation) {
        this.$store.dispatch("register").then(() => {
          this.isCloseableAlertVisible = true;
        });
        console.log("registered");
      }
    },
    toLogin() {
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style scoped>
.card {
  width: fit-content;
  height: fit-content;
  padding: 2rem;
}

#title {
  font-size: 4rem;
  color: white;
}

.card-enter-active {
  animation: bounce-in 0.6s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.15);
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
