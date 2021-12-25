<template>
  <div>
    <div class="upp-header">
      <router-link to="/" class="main-page">
         <img src="../../assets/logo.png" alt="logo" class="logo"/>
         <span class="game-store">Game Store</span>
      </router-link>
      <h4 class="login" @click="showModal">Вход</h4>
      <AuthWindow ref="modal"/>
    </div>
    <hr class="horizontal"/>
    <div class="down-header">
      <img src="../../assets/burger_filter.png" alt="filter"/>
      <h4>Игры</h4>
      <h4>Поддержка</h4>
      <hr class="vertical"/>
      <input type="text" placeholder="Поиск" class="search">
    </div>
    <hr class="horizontal"/>
  </div>
</template>

<script>

import AuthWindow from "../modal_windows/AuthWindow";

export default {
  name: "HeaderUnAuth",
  components: {AuthWindow},
  methods:{
    showModal: function(){
      this.$refs.modal.show = true
    }
  }
}
</script>

<style scoped>

  .upp-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0 5px 0;
    flex-shrink: 3;
    align-content: center;
    background: linear-gradient(90deg, #2F343F 0%, #1C2029 100%);
  }

  .down-header{
    display: flex;
    align-items: center;
    align-content: center;
    max-width: 1200px;
    max-height: content-box;
    margin: 0 auto 0 auto;
  }

  .main-page{
    order:1;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .logo{
    height: 37px;
    width: 52px;
  }

  a{
    align-content: center;
    margin: 0 0 0 20px;
    text-decoration: none;
  }

  .game-store{
    max-width: 50px;
    margin-left: 10px;
    font-family: Montserrat,serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.175em;
    color: #ECEFF4;
  }

  input{
    order:2;
    width: 600px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid gray;
    padding: 0 10px 0 10px;
    font-size: 18px;
    transition: 200ms ease;
    background: linear-gradient(90deg, #2F343F 0%, #1C2029 100%);
    outline: none;
  }

  input:focus{
    border: 1px solid #ECEFF4;
    transition: 200ms ease;
    color: #ECEFF4;
  }

  .login{
    order:3;
    margin: 0 45px 0 0;
    font-size: 18px;
    cursor: pointer;
    color: #ECEFF4;
    transition: 200ms ease;
    padding: 5px 10px 5px 10px;
    border-radius: 10px;

  }
  .login:hover{
    transition: 200ms ease;
    border: 1px solid #ECEFF4;
    border-radius: 10px;
  }

  h4{
    width: content-box;
    height: 20px;
    margin-left: 40px;
    font-family: Montserrat,serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #ECEFF4;
  }

  .search{
    margin-left: 50px;

  }

  hr{
    border-color: #2C313D;
  }

  .horizontal{
    width: 1300px;
    margin: 0;
  }

  .vertical{
    width: 0;
    height: 20px;
    margin: 0 0 0 40px;
  }

</style>