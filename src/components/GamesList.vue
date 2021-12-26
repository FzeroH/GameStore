<template>
  <div class="game-list-container">
    <GameItem class="item"/>
  </div>
</template>

<script>
import GameItem from "./templates/GameItem";
export default {
  name: "GamesList",
  components: {
    GameItem,
  }
}
</script>

<style scoped>
.game-list-container {
  margin: 24px 0 16px 0;
}
</style>