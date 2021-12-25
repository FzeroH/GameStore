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
  div{
    background: linear-gradient(90deg, #2F343F 0%, #1C2029 100%);
  }

  @media screen and (max-width: 1200px) {
    div{
      max-width: 1200px;
    }
  }

  @media screen and (max-width: 1024px) {
    div{
      max-width: 1024px
    }
  }
  @media screen and (max-width: 768px) {
    div{
      max-width: 768px
    }
  }
  @media screen and (max-width: 440px) {
    div{
      max-width: 440px
    }
  }

</style>
