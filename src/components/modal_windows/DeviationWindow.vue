<template>
  <div v-if="show" class="modal-overlay" @click.self="closeModal">
    <div class="modal">
        <h2 class="modal-title">Отклонение</h2>
        <div class="modal-content">
          <textarea placeholder="Укажите причину отказа"/>
        </div>
        <div class="modal-footer">
          <button class="modal-footer__button" @click="closeModal">
            Отправить
          </button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeviationWindow",
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
  .modal-overlay {
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
    min-width: 420px;
    max-width: 680px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .modal-title {
    color: #f61313;
    margin: 0 0 20px 0;
  }

  .modal-content {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    color: black;
  }

  textarea{
    margin:10px 10px 0 10px;
    padding:5px 10px 5px 10px;
    outline: none;
    resize: none;
    border: 1px solid #f61313;
    border-radius: 10px;
    width: 500px;
    height: 300px;
  }

   button {
     background-color: #f61313;
     color: #fff;
     border: none;
     text-align: center;
     padding: 8px;
     font-size: 17px;
     font-weight: 500;
     border-radius: 8px;
     min-width: 150px;
     transition: 200ms ease;
    }

   button:hover{
     transition: 200ms ease;
     box-shadow: 1px 2px 5px #5e5e5e;
     cursor: pointer;
   }

</style>