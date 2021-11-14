<template>
  <div v-if="show" class="modal-shadow" @click.self="closeModal">
    <div class="modal">
        <h2 class="modal-title">Войти как</h2>
        <div class="modal-content">
          <router-link to="/user_auth" class="router">Пользователь</router-link>
          <router-link to="/developer_auth" class="router">Разработчик</router-link>
        </div>
        <div class="modal-footer">
          <button class="modal-footer__button" @click="closeModal">
            Отмена
          </button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthWindow",
  data: function () {
    return {
      show: false
    }
  },
  methods: {
    closeModal: function () {
      this.show = false
    }
  }
}
</script>

<style scoped>
  .modal-shadow {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.39);
  }

  .modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    border-radius: 8px;
    padding: 15px;
    min-width: 220px;
    max-width: 280px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .modal-title {
    color: #0971c7;
    margin: 0 0 20px 0;
  }

  .modal-content {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    color: black;
  }

  .router{
    text-decoration: none;
    font-size: 18px;
    color: #0971c7;
    border-radius: 10px;
    padding: 5px 5px 5px 5px;
    transition: 200ms ease;
  }

  .router:hover{
    transition: 200ms ease;
    color: white;
    background-color: #0971c7;

  }

  .router:not(:first-child){
    margin-top: 10px;
  }

  button {
    background-color: #0971c7;
    color: #fff;
    border: none;
    text-align: center;
    padding: 8px;
    font-size: 17px;
    font-weight: 500;
    border-radius: 8px;
    min-width: 80px;
  }

  button:hover{
    transition: 200ms ease;
    box-shadow: 1px 2px 5px #5e5e5e;
    cursor: pointer;
  }

</style>