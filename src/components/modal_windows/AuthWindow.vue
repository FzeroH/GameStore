<template>
  <div v-if="show" class="modal-overlay" @click.self="closeModal">
    <div class="modal">
        <h2 class="modal-title">Войти как</h2>
        <div class="modal-content">
          <router-link
              :to="{name: 'Auth', query: {type: 'user'}}"
              @click="closeModal"
              class="modal-link"
          >
            Пользователь
          </router-link>
          <router-link
              :to="{name: 'Auth', query: {type: 'developer'}}"
              @click="closeModal"
              class="modal-link"
          >
            Разработчик
          </router-link>
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
import { defineComponent } from "vue";

export default defineComponent({
  name: "AuthWindow",
  props: {
    show: {
      type: Boolean,
      default: false,
    }
  },

  setup(props, { emit }) {
    const closeModal = () => emit('close');

    return {
      closeModal,
    };
  },
});
</script>

<style scoped>
.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  min-height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.39);
}

.modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #1C2029;
  border-radius: 10px;
  padding: 15px;
  min-width: 220px;
  max-width: 280px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.modal-title {
  color: #ECEFF4;
  margin: 0 0 20px 0;
}

.modal-content {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 80%;
  color: black;
  box-sizing: content-box;
}

.modal-footer {
  width: 100%;
  display: flex;
  justify-content: center;
}

.modal-footer__button {
  width: 70%;
  height: 50px;
  margin-top: 30px;
  border: transparent;
  border-radius: 20px;
  color: #ECEFF4;
  text-transform: uppercase;
  font-weight: 600;
  background: linear-gradient(90deg, #2F343F 0%, #262a33 100%);
}

.modal-link {
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 10px;
  background: #2C313D;
  color: #ECEFF4;
  font-weight: 300;
  text-decoration: none;
  box-sizing: border-box;
}
</style>