<template>
  <div class="game-list-container">
    <div
        class="game-list-wrapper"
        :style="{ 'margin-left': '-' + (100 * currentSlideIndex) + '%' }"
    >
      <GameItem
          class="game-list-item"
          v-for="(item, index) in array"
          :name="item.name"
          :has-chose="checkChose(index)"
          v-bind:key="index"
          @click="changeSlide(index)"
          @scroll="changeSlide()"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import GameItem from "./templates/GameItem";

export default defineComponent({
  name: "GamesList",
  components: {
    GameItem,
  },

  setup() {
    const currentSlideIndex = ref(0);
    const array = ref([
      {
        name: '1',
      },
      {
        name: '2',
      },
      {
        name: '3',
      },
      {
        name: '4',
      },
      {
        name: '5',
      },
      {
        name: '6',
      },
    ]);

    const changeSlide = (index) => {
      console.log(index)
      if (index < currentSlideIndex.value) {
        prevSlide();
      } else if (index > currentSlideIndex.value) {
        nextSlide();
      } else {
        console.log('Go to game')
      }
    };

    const checkChose = (index) => {
      return index === currentSlideIndex.value;
    };

    const prevSlide = () => {
      if (currentSlideIndex.value > 0) {
        currentSlideIndex.value--;
      }
    };
    const nextSlide = () => {
      if (currentSlideIndex.value !== array.value.length) {
        currentSlideIndex.value++;
      }
    };

    return {
      currentSlideIndex,
      array,
      changeSlide,
      checkChose,
    };
  },
})
</script>

<style scoped>
.game-list-container {
  display: flex;
  margin: 24px 0 16px 0;
  min-height: 500px;
  overflow: hidden;
}

.game-list-wrapper {
  justify-content: center;
  display: flex;
  transition: all ease .5s;
}

.game-list-item {
  margin: 0 15px;
}
</style>