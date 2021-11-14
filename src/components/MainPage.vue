<template>
  <div>
    <HeaderUnAuth/>
    <GamesList class="list-game"/>
  </div>
</template>

<script>
import HeaderUnAuth from "./headers/HeaderUnAuth";
import GamesList from "./GamesList";

export default {
  name: 'MainPage',
  components: {
    GamesList,
    HeaderUnAuth},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
