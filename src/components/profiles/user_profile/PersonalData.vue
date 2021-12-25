<template>
  <div class="personal-data">
    <div class="personal-data-text">
      <div class="input-fields">
        <label>Имя пользователя</label>
        <input type="text" class="input-fields-element"/>
        <label>Email</label>
        <input type="email" class="input-fields-element"/>
        <label>Пароль</label>
        <input type="password" class="input-fields-element"/>
        <label>О себе</label>
        <textarea class="input-fields-element"/>
      </div>
      <div class="avatar">
        <img src="https://pic.onlinewebfonts.com/svg/img_212716.png" alt="avatar" class="avatar-img">
        <label class="avatar-lbl">Изменить аватар</label>
      </div>
    </div>
    <button type="submit">Сохранить изменения</button>
  </div>
</template>

<script>
export default {
  name: "PersonalData"
}
</script>

<style scoped>
  .personal-data{
    display: flex;
    flex-direction: column;
    background: white;
    box-shadow: 0 0 10px 0.1em rgba(122,122,122,0.5);
    min-width: 400px;
    min-height: 200px;
  }

  .personal-data-text{
    display: flex;
    flex-direction: row;
  }

  .input-fields{
    display: flex;
    flex-direction: column;
    padding: 20px 40px 0 40px;
  }

  label{
    margin-bottom: 5px;
  }

  input{
    margin-bottom: 10px;
    padding: 2px;
    border-radius: 5px;
    border: 1px solid gray;
    outline: none;
    width: 25em;
    height: 1.5em;
    transition: 200ms ease;
  }

  textarea{
    margin:0 0 20px 0;
    padding:5px 10px 5px 10px;
    outline: none;
    resize: none;
    border-radius: 5px;
    border: 1px solid gray;
    width: 25em;
    height: 5.5em;
    transition: 200ms ease;
  }
  textarea:focus, input:focus{
    transition: 200ms ease;
    border: 1px solid dodgerblue;
  }

  .avatar{
    display: flex;
    flex-direction: column;
  }

  .avatar-img{
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

  .avatar-lbl{
    cursor: pointer;
  }

  button{
    background-color: white;
    border-radius: 10px;
    border: 1px solid dodgerblue;
    padding: 5px 20px 5px 20px;
    margin:10px auto 20px auto;
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

</style>