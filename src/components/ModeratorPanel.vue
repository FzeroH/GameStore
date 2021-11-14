<template>
  <div>
    <HeaderAuthModer/>
    <ItemListGames/>
    <ItemListGames/>
    <ItemListGames/>
  </div>
</template>

<script>
import HeaderAuthModer from "./headers/HeaderAuthModer";
import ItemListGames from "./templates/ItemListGames";

export default {
  name: "ModeratorPanel",
  components:{ItemListGames, HeaderAuthModer},

}
</script>

<style scoped>

</style>