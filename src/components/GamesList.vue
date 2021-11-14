<template>
  <div>
    <ItemListGames class="item"/>
    <ItemListGames class="item"/>
    <ItemListGames class="item"/>
  </div>
</template>

<script>
import ItemListGames from "./templates/ItemListGames";
export default {
  name: "GamesList",
  components: {
    ItemListGames,
  }
}
</script>

<style scoped>
  div{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .item{
    flex-basis: 500px;
  }

</style>