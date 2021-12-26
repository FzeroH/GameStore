<template>
  <div class="game-page-wrapper">
    <div class="game-page-container">
      <div class="game-page-container__info">
        <h1>Dota 2</h1>
        <p>
          Ежедневно миллионы игроков по всему миру сражаются от лица одного из более сотни героев Dota 2,
          и даже после тысячи часов в ней есть чему научиться. Благодаря регулярным обновлениям игра
          живёт своей жизнью: геймплей, возможности и герои постоянно преображаются.
        </p>
        <h2>1999 руб.</h2>
        <button>Добавить в корзину</button>
      </div>
      <div
          class="game-page__image"
          :style="{'background-image': 'url(' + require('/src/assets/mocks/test-game.jpg') + ')'}"
      >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GamePage",
}
</script>

<style scoped>
.game-page-wrapper {
  width: 100%;
  display: flex;
}
.game-page-container {
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 30px 122px;
}
.game-page-container__info {
  width: 30%;
}
.game-page-container__info > h1, h2, p {
  color: #ECEFF4;
}
.game-page-container__info > h1 {
  font-size: 40px;
  font-weight: bold;
}
.game-page-container__info > p {
  opacity: 0.6;
}
.game-page-container__info > button {
  width: 70%;
  height: 50px;
  margin-top: 30px;
  border: transparent;
  border-radius: 20px;
  color: #ECEFF4;
  text-transform: uppercase;
  font-weight: 600;
  background: linear-gradient(90deg, #2F343F 0%, #1C2029 100%);
}
.game-page__image {
  width: 60%;
  height: 100%;
  border-radius: 10px;
  background: center no-repeat;
  background-size: cover;
}
</style>
