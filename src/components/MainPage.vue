<template>
  <GamesList class="list-game"/>
</template>

<script>
import { defineComponent } from "vue";
import GamesList from "./GamesList";

export default defineComponent({
  name: 'MainPage',

  components: {
    GamesList,
  },
});
</script>

<style scoped>

</style>
