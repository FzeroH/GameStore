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
export default {
  name: "RegistrationDeveloper"
}
</script>

<style scoped>

  .registration{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 9em;
  }

  a{
    text-decoration: none;
    color: black;
    margin-left: 20px;
    font-size: 15px;
  }

  input{
    width: 25em;
    height: 1.5em;
    border-radius: 5px;
    border: 1px solid gray;
    padding: 0 10px 0 10px;
    font-size: 18px;
    transition: 200ms ease;
    outline: none;
  }

  input:focus{
    transition: 200ms ease;
    border-color: dodgerblue;
  }

  button{
    background-color: white;
    border-radius: 10px;
    border: 1px solid dodgerblue;
    padding: 5px 20px 5px 20px;
    transition: 200ms ease;
    color: black;
    font-size: 15px;
  }

  button:hover{
    transition: 200ms ease;
    color: white;
    background-color: dodgerblue;
    border: 1px solid white;
    cursor: pointer;
  }

  .email{
    margin-top: 1.5em;
  }

  .password{
    margin-top: 1.5em;
  }

  .register{
    margin-top: 20px;
  }

  .input-fields{
    display: flex;
    flex-direction: column;
  }

  .text{
    margin-top: 1.5em;
  }
</style>