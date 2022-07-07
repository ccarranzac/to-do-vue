import { mount } from "@vue/test-utils";
import HomeLayout from "../../src/layouts/HomeLayout.vue";
//import { createRouter, createMemoryHistory } from "vue-router";
import Home from "../../src/views/landing/HomeView.vue";
import routes from "../../src/router/index";

describe("App", () => {
  it("renders a Home component via routing", async () => {
    const router = routes;
    router.push("/home");
    await router.isReady();
    const wrapper = mount(HomeLayout, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.findComponent(Home).exists()).toBe(true);
  });
});
