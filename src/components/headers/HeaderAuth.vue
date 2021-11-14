<template>
 <div>
   <router-link to="/">
     <img src="../../assets/logo.png" class="logo" alt="logo"/>
   </router-link>
   <select class="catalog">
     <option selected disabled hidden>Каталог</option>
   </select>
   <input type="text" placeholder="Поиск">
   <img src="https://pic.onlinewebfonts.com/svg/img_212716.png" class="profile" alt="profile"/>
 </div>
</template>

<script>
export default {
  name: "HeaderAuth"
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

  .logo{
    order:1;
    height: 50px;
    width: 50px;
  }

  .profile{
    order:4;
    border: 1px solid #b7b7b7;
    border-radius: 50%;
    height: 40px;
    width: 40px;
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
</style>