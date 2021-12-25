<template>
  <form class="auth">
    <h2>Вход</h2>
    <span class="s-login">Логин</span>
    <input type="email" v-model="login" class="email"/>
    <span class="s-password">Пароль</span>
    <input type="password" v-model="password" class="password"/>
    <div class="log-in">
      <button type="submit">Войти</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "Authorization",
  data() {
    return {
      login:'',
      password:'',
    }
  },
  methods:{
    async onSubmit(){
      let passwordReg = new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\\w+$)(?=\\S+$).{6,}$");
      if(!passwordReg.test(this.password)){
        alert(`Не правильный формат пароля!\nПроверьте пароль: ${this.password}`)
      }else {
        console.log(`Login: ${this.login}\nPassword: ${this.password}\nКоличество символов: ${this.password.length}`)
      }
    }
  }
}
</script>

<style scoped>

h2{
  width: 107px;
  height: 48px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  color: #ECEFF4;
}

.auth{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 9em;
  background: linear-gradient(90deg, #2F343F 0%, #1C2029 100%);
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
  outline: none;
}

span{
  padding-right: 250px;
  width: 114px;
  height: 20px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #97989A;
}
.s-password{
  margin-top: 30px;
}

button{
  width: 260px;
  height: 50px;
  background: linear-gradient(90deg, #2F343F 0%, #1C2029 100%);
  border-radius: 20px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  color: white;
}
.email{
  width: 350px;
  height: 50px;
  background: #F0F0F0;
  border-radius: 10px;
}

.password{
  width: 350px;
  height: 50px;
  background: #F0F0F0;
  border-radius: 10px;
}

.log-in{
  margin-top: 20px;
}
</style>