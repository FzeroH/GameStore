<template>
  <div>
    <HeaderUnAuth/>
    <ListGames class="list-game"/>
  </div>
</template>

<script>
import HeaderUnAuth from "./headers/HeaderUnAuth";
import ListGames from "./ListGames";

export default {
  name: 'MainPage',
  components: {
    ListGames,
    HeaderUnAuth},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
