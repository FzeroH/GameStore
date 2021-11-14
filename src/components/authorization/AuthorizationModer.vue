<template>
  <div class="auth">
    <h2>Авторизация</h2>
    <input type="email" class="email" placeholder="Логин"/>
    <input type="password" class="password" placeholder="Пароль"/>
    <div class="log-in">
      <button type="submit">Войти</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Authorization"
}
</script>

<style scoped>
  .auth{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 9em;
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

  .log-in{
    margin-top: 20px;
  }
</style>