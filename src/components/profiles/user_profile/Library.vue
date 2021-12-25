<template>
  <div>
    <h3>Библиотека</h3>
    <div class="library">
      <ItemListGames/>
      <ItemListGames/>
      <ItemListGames/>
    </div>
  </div>
</template>

<script>
import ItemListGames from "../../templates/ItemListGames";
export default {
  name: "Library",
  components: {ItemListGames}
}
</script>

<style scoped>
  h3{
    margin:0 0 10px 30px;
  }
  .library{
    max-width: 600px;
    max-height: 400px;
    box-shadow: 0 0 10px 0.1em rgba(122,122,122,0.5);
    margin: 0 30px 0 30px;
    overflow: auto;
    background: white;
  }
  .library::-webkit-scrollbar{width: 7px;}
  .library::-webkit-scrollbar-track{border-radius: 4px; background-color: white;}
  .library::-webkit-scrollbar-thumb{border-radius: 4px; background-color: white;}
  .library:hover::-webkit-scrollbar-thumb{background-color: dodgerblue; }

</style>