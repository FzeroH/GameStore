<template>
  <div class="profile">
    <div class="profile-up">
      <img src="https://pic.onlinewebfonts.com/svg/img_212716.png" alt="avatar" class="avatar">
      <div class="user-data">
        <h3>Имя пользователя</h3>
        <span class="info">О себе</span>
        <span class="info">Название компании: </span>
        <span class="info">Сайт разработчика: </span>
      </div>
    </div>
    <hr/>
    <div class="profile-down">
      <div class="profile-down-element">
        <h4>0</h4>
        <span>Игр в продаже</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DProfile"
}
</script>

<style scoped>

  .profile{
    display: flex;
    flex-direction: column;
    background: white;
    box-shadow: 0 0 10px 0.1em rgba(122,122,122,0.5);
    max-width: 800px;
    min-width: 400px;
    min-height: 400px;
  }

  .profile-up{
    display: flex;
    flex-direction: row;
  }

  .avatar{
    margin: 10px;
    max-width: 120px;
    width: 100px;
    min-width: 50px;
    max-height: 120px;
    height: 100px;
    min-height: 50px;
    border-radius: 50%;
    border: 1px solid black;
  }

  h3{
    font-weight: normal;
    font-size: 18px;
    margin:10px 0 10px 10px ;
  }

  .info{
    margin-left: 10px;
  }

  .info:not(:first-child){
    margin-top: 5px;
  }

  hr{
    width: 600px;
    min-width: 400px;
    margin: 50px 20px 0 20px;
  }

  .profile-down{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-height: 200px;

  }

  .profile-down-element{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px auto 10px auto;
  }

  .user-data{
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  h4{
    font-weight: normal;
    font-size: 18px;
  }
</style>