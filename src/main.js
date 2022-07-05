import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { VuesticPlugin } from "vuestic-ui";
import "vuestic-ui/css";

const app = createApp(App);
app.use(store);
app.use(router);

app.use(VuesticPlugin, {
  colors: {
    primary: "#FFFFFF",
    secondary: "#45eba5",
    success: "#40e583",
    info: "#2c82e0",
    danger: "#e34b4a",
    warning: "#ffc200",
    gray: "#babfc2",
    dark: "#34495e",
  },
});
app.mount("#app");
