<template>
  <form class="auth-container">
    <h2>Вход</h2>
    <label>
      Имя аккаунта
      <input type="email" v-model="email" />
    </label>
    <label>
      Пароль
      <input type="password" v-model="password" id="password"/>
    </label>
    <button type="submit">Войти</button>
  </form>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Authorization",

  setup() {
    const email = ref('');
    const password = ref('');

    return {
      email,
      password,
    };
  },
});
</script>

<style scoped>
.auth-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.auth-container > h2 {
  font-size: 40px;
  color: #ECEFF4;
  font-weight: 700;
}

.auth-container > label {
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-bottom: 25px;
  color: #97989A;
  font-size: 16px;
  font-weight: 300;
}

.auth-container > label > input {
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: transparent;
  outline: none;
  margin-top: 5px;

  padding: 0 10px;
}

.auth-container > button {
  width: 20%;
  height: 50px;
  margin-top: 30px;
  border: transparent;
  border-radius: 20px;
  color: #ECEFF4;
  text-transform: uppercase;
  font-weight: 600;
  background: linear-gradient(90deg, #2F343F 0%, #1C2029 100%);
}
</style>