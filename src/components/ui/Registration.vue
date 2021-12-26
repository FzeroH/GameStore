<template>
  <div class="registration-container">
    <h2>Регистрация</h2>
    <label >
      Email
      <input type="email" v-model="email"/>
    </label>
    <label >
      Пароль
      <input type="password" v-model="password"/>
    </label>
    <label >
      Повторите пароль
      <input type="password" v-model="repeatPassword"/>
    </label>
    <div class="checkbox">
      <input type="checkbox">
      <span>Принимаю пользовательское соглашение и политику конфиденциальности</span>
    </div>
    <button type="submit">Зарегистрироваться</button>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Registration",

  setup() {
    const email = ref('');
    const password = ref('');
    const repeatPassword = ref('');

    return{
      email,
      password,
      repeatPassword,
    };
  },
});
</script>

<style scoped>
.registration-container {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.registration-container > h2 {
  font-size: 40px;
  font-weight: bold;
  color: #ECEFF4;
}
.registration-container > label {
  width: 30%;
  display: flex;
  flex-direction: column;
  color: #97989A;
  font-size: 16px;
}
.registration-container > label:not(:first-child) {
  margin-top: 25px;
}
.registration-container > label > input {
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: transparent;
  outline: none;
  margin-top: 5px;
  padding: 0 10px;
}
.checkbox{
  margin-top: 25px;
  color: #97989A;
  font-size: 16px;
  letter-spacing: -0.075em;
  max-width: 348px;
}
.registration-container > button {
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
