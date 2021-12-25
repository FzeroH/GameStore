<template>
  <div class="auth">
    <h2>Регистрация</h2>
    <span>Email</span>
    <input type="email" class="input-fields"/>
    <span>Пароль</span>
    <input type="password" class="input-fields"/>
    <span>Повторите пароль</span>
    <input type="password" class="input-fields"/>
    <div class="checkbox">
      <input type="checkbox">
      <span>Принимаю пользовательское соглашение и политику конфиденциальности</span>
    </div>
    <div class="register">
      <button type="submit">Зарегистрироваться</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegistrationUser"
}
</script>

<style scoped>
  h2{
    width: content-box;
    height: 48px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    alignment: center;
    color: #ECEFF4;
  }
  .auth{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a{
    text-decoration: none;
    color: black;
    margin-left: 20px;
    font-size: 15px;
  }

  .input-fields{
    width: 350px;
    height: 50px;
    background: #F0F0F0;
    border-radius: 10px;
    border: 1px solid gray;
    padding: 0 10px 0 10px;
    font-size: 18px;
    outline: none;
  }

  span:not(:first-child){
    margin-top: 25px;
  }

  span{
    padding-right: 235px;
    width: 130px;
    height: 20px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #97989A;
  }

  button{
    width: 260px;
    height: 50px;
    margin-top: 30px;
    background: linear-gradient(90deg, #2F343F 0%, #1C2029 100%);
    border-radius: 20px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    color: white;
  }

  .checkbox{
    width: 340px;
    height: 50px;
    margin-top: 20px;
    letter-spacing: -0.075em;
  }
</style>