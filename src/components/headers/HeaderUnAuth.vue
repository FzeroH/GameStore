<template>
 <div>
   <router-link to="/">
      <img src="../../assets/logo.png" alt="logo"/>
   </router-link>
   <select class="catalog">
     <option selected disabled hidden>Каталог</option>
   </select>
   <input type="search" placeholder="Поиск">
   <h3 class="login" @click="showModal">Войти</h3>
   <AuthWindow ref="modal"/>
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

  div{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px 0 5px 0;
    flex-shrink: 3;
    align-content: center;
    background: white;
    box-shadow: -0.2em 0.2em 5px 0.1em rgba(122,122,122,0.5);
  }

  img{
    order:1;
    height: 50px;
    width: 50px;
  }

  input{
    order:3;
    width: 50rem;
    height: 30px;
    border-radius: 5px;
    border: 1px solid gray;
    padding: 0 10px 0 10px;
    font-size: 18px;
    transition: 200ms ease;
    outline: none;
  }

  input:focus{
    border: 1px solid dodgerblue;
    transition: 200ms ease;
  }

  select{
    font-weight: bold;
    font-size: 18px;
    border:0;
    outline:0;
  }

  .catalog{
    order:2;

  }

  .login{
    order:4;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    color: black;
    transition: 200ms ease;
  }
  .login:hover{
    transition: 200ms ease;
    color: dodgerblue;
  }

</style>