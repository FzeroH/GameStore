<template>
  <auth-window @close="toggleShowModal" :show="showModal"/>

  <Header @toggle="toggleShowModal" :is-show-login="showLoginButton" />
  <SubHeader :is-show-search="showSearch" />
  <router-view/>
</template>

<script>
import { defineComponent, computed, ref } from "vue";
import { useRoute } from "vue-router";
import Header from "./components/ui/Header";
import SubHeader from "./components/ui/SubHeader";
import AuthWindow from "./components/modal_windows/AuthWindow";

export default defineComponent({
  name: "App",
  components: {
    AuthWindow,
    Header,
    SubHeader,
  },

  setup() {
    const route = useRoute();
    const showModal = ref(false);

    const toggleShowModal = () => showModal.value = !showModal.value;

    const showSearch = computed(() => {
      return route.path === '/';
    });

    const showLoginButton = computed(() => {
      return route.path !== '/auth';
    });

    return {
      showSearch,
      showModal,
      showLoginButton,
      toggleShowModal,
    }
  },
});
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #171A21;
  font-family: Montserrat, sans-serif;
}

button {
  cursor: pointer;
  font-family: Montserrat, sans-serif;
}
</style>