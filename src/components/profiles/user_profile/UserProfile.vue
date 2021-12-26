<template>
  <div>
    <div class="user-profile">
      <ul>
        <router-link to="/user/:id">Профиль</router-link>
        <router-link to="/user/:id/personal_data">Личные данные</router-link>
        <router-link to="/user/:id/library">Библиотека</router-link>
        <router-link to="/">Выход</router-link>
      </ul>
    <router-view class="content"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserProfile",
}
</script>

<style scoped>

  .user-profile{
    display: flex;
    flex-direction: row;
  }

  .content{
    margin: 5em auto;
  }

  ul{
    display: flex;
    flex-direction: column;
    margin: 130px 0 0 20px;
    max-width: 150px;
  }

  a{
    text-decoration: none;
    width: fit-content;
    color: black;
    list-style: none;
    font-size: 20px;
    padding-bottom: 5px;
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 0 100%;
    background-repeat: no-repeat;
    background-size: 0 2px;
    transition: background-size .3s;
  }

  a:not(:first-child){
    margin-top: 15px;
  }

  a:hover{
    cursor: pointer;
    background-size: 100% 2px;
  }
</style>