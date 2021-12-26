<template>
  <router-link
      to="/game"
      class="game-item-wrapper"
  >
    <div
        class="game-item-container"
        :style="{'background-image': 'url(' + require('/src/assets/mocks/test-game.jpg') + ')'}"
    >
      <div class="game-item__info">
        <h1>Dota 2</h1>

        <p>
          Ежедневно миллионы игроков по всему миру сражаются от лица одного из более сотни героев Dota 2,
          и даже после тысячи часов в ней есть чему научиться. Благодаря регулярным обновлениям игра
          живёт своей жизнью: геймплей, возможности и герои постоянно преображаются.
        </p>

        <h2>1999 руб.</h2>
      </div>

      <div class="game-item__buy">
        <font-awesome-icon icon="circle" />
        <span>Купить сейчас</span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ItemListGames"
}
</script>

<style scoped>
.game-item-wrapper {
  display: flex;
  justify-content: center;
  text-decoration: none;
}

.game-item-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 480px;
  width: 55%;
  padding: 40px 75px;
  border-radius: 24px;
  border: none;
  background: center no-repeat;
  background-size: cover;
}

.game-item__info {
  text-align: left;
  max-width: 340px;
}

.game-item__info > h1, h2, p,
.game-item__buy > svg, span {
  color: #ECEFF4;
}

.game-item__info > p {
  opacity: 0.6;
}

.game-item__buy > svg, span {
  font-size: 12px;
}

.game-item__buy > svg {
  margin-right: 10px;
}

.game-item__buy > span {
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
}
</style>