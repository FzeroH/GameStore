<template>
  <div class="subheader-wrapper">
    <div class="subheader-container">
      <div class="subheader-menu">
        <font-awesome-icon icon="bars" />
        <router-link to="/">Игры</router-link>
        <router-link to="/">Поддержка</router-link>
      </div>
      <hr class="divider" />

      <div class="subheader-primary" v-if="isShowSearch">
        <font-awesome-icon icon="search" />
        <input placeholder="Поиск" v-model="searchText" />
      </div>

      <div class="subheader-menu__profile" v-if="isShowProfileMenu">
        <router-link to="/">Профиль</router-link>
        <router-link to="/">Личные данные</router-link>
        <router-link to="/">Библиотека</router-link>
      </div>

      <div class="subheader-primary" v-if="!isShowProfileMenu && !isShowSearch"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SubHeader",

  props: {
    isShowSearch: {
      type: Boolean,
      default: false,
    },

    isShowProfileMenu: {
      type: Boolean,
      default: false,
    },
  },

  setup() {
    const searchText = ref('');

    return {
      searchText,
    };
  },
});
</script>

<style scoped>
.subheader-wrapper {
  padding: 0 60px;
}

.subheader-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;

  border-top: 1px solid #2C313D;
  border-bottom: 1px solid #2C313D;
}

.subheader-menu {
  flex: 1;
}

.subheader-menu {
  display: flex;
  justify-content: space-around;
}

.subheader-menu > svg {
  color: #ECEFF4;
}

.subheader-menu > a,
.subheader-menu__profile > a {
  text-decoration: none;
  color: #ECEFF4;
  font-weight: 200;
}

.subheader-menu__profile > a {
  margin-right: 40px;
}

.subheader-primary, .subheader-menu__profile {
  flex: 3;
}

.subheader-primary > svg {
  margin-right: 10px;
  color: #ECEFF4;
}

.subheader-primary > input {
  width: calc(100% - 33px);
  border: transparent;
  outline: none;
  color: #ECEFF4;
  background: transparent;
  font-size: 16px;
  font-weight: 200;
}

.divider {
  height: 30px;
  width: 0;
  margin-left: 40px;
  margin-right: 25px;
  border-color: #2C313D;
}
</style>