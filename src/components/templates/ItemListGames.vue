<template>
  <router-link to="/game" class="item-list-games">
    <div>
      <h3>Название клёвой игры</h3>
      <h4>Жанр: Ролевые игры, 18+, ужасы</h4>
      <h4>Об игре: Это игра, в описании которой много копипаста. Это игра, в описании которой много копипаста. Это игра, в описании которой много копипаста. Это игра, в описании которой много копипаста</h4>
      <span>Цена: 1059 руб.</span>
    </div>
    <img src="../../assets/logo.png" alt="Logo"/>
  </router-link>
</template>

<script>
export default {
  name: "ItemListGames"
}
</script>

<style scoped>

 .item-list-games{
   display: flex;
   justify-content: space-between;
   flex-direction: row;
   align-items: center;
   border: 1px solid black;
   margin: 10px 5px 10px 5px;
   padding: 0 5px 2px 5px;
   width: auto;
   height: auto;
   text-decoration: none;
   color: black;
 }

 img{
   height: 10em;
   width: 7em;
 }

 h3{
   font-weight: bold;
   margin-top: 2px;
 }

 h4{
   font-weight: normal;
   margin-top: 0;
 }
</style>