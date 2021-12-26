<template>
  <div class="header-wrapper">
    <div class="header-container">
      <router-link to="/" class="header-logo">
        <img src="../../assets/logo.png" alt="logo" class="logo"/>
        <div class="header-logo__name">
          <span>Game</span>
          <span>Store</span>
        </div>
      </router-link>

      <div class="header-auth">
        <button @click="toggleModal" v-if="isShowLogin">Вход</button>
        <button @click="goToRegister" v-else>Регистрация</button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",

  props: {
    isShowLogin: {
      type: Boolean,
      default: true,
    },
  },

  emits: ["toggle", "toRegister"],

  setup(props, { emit }) {
    const toggleModal = () => emit('toggle');
    const goToRegister = () => emit('toRegister');

    return {
      toggleModal,
      goToRegister,
    };
  },
});
</script>

<style scoped>
.header-wrapper {
  position: relative;
  width: 100%;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 60px;
}

.header-logo {
  display: flex;
  text-decoration: none;
}

.header-logo__name {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.header-logo__name > span {
  color: white;
  text-align: center;
  font-size: 16px;
  letter-spacing: 4px;
}

.header-logo > img {
  margin-right: 10px;
}

.header-auth > button {
  border: transparent;
  background: transparent;
  font-size: 16px;
  font-weight: 400;
  color: #ECEFF4;
}
</style>