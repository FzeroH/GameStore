<template>
  <div class="registration">
    <h2>Регистрация разработчика</h2>
    <div class="input-fields">
      <input type="text" placeholder="Логин"/>
      <input type="password" class="password" placeholder="Пароль"/>
      <input type="password" class="password" placeholder="Повторите пароль"/>
      <input type="email" class="email" placeholder="email"/>
      <input type="text" class="text" placeholder="Название компании"/>
    </div>
    <div class="register">
      <button type="submit">Зарегистрировать</button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Registration",

  setup() {

  },
});
</script>

<style scoped>

</style>