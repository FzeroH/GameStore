<template>
  <div>
    <HeaderAuth/>
    <div class="page">
      <div class="page-top">
        <div class="page-text">
          <h3>Название клёвой игры</h3>
          <h4>Жанр: Ролевые игры, 18+, ужасы</h4>
          <h3>Цена: 1059 руб.</h3>
          <h4 class="description">Об игре: Это игра, в описании которой много копипаста. Это игра, в описании которой много копипаста. Это игра, в описании которой много копипаста. Это игра, в описании которой много копипаста</h4>
        </div>
        <img src="../../assets/logo.png" alt="logo"/>
      </div>
      <div class="system-requirements">
        <div class="system-req-min">
          <h4 class="title">Минимальные системные требования</h4>
          Требуются 64-разрядные процессор и операционная система<br/>
          ОС: Windows 10 64Bit<br/>
          Процессор: Intel Core i5-4590 / AMD Ryzen 5 2600<br/>
          Оперативная память: 8 GB ОЗУ<br/>
          Видеокарта: NVIDIA GTX 970 / AMD Radeon R9 390<br/>
          Место на диске: 18 GB<br/>
          Дополнительно: Minimum Specs are for VR, lower specs may work for Non-VR.
        </div>
        <div class="system-req-recommended">
          <h4 class="title">Рекомендуемые системные требования</h4>
          Требуются 64-разрядные процессор и операционная система<br/>
          ОС: Windows 10 64Bit<br/>
          Процессор: Intel Core i5-10600 / AMD Ryzen 5 3600<br/>
          Оперативная память: 8 GB ОЗУ<br/>
          Видеокарта: NVIDIA RTX 2060 / AMD Radeon RX 5700<br/>
          Сеть: Широкополосное подключение к интернету<br/>
          Место на диске: 18 GB
        </div>
      </div>
      <button>Скачать</button>
    </div>
  </div>
</template>

<script>
import HeaderAuth from "../headers/HeaderAuth";
export default {
  name: "GamePage",
  components: {HeaderAuth}
}
</script>

<style scoped>
  h3{
    font-weight: bold;
    margin-top: 2px;
  }

  h4{
    font-weight: normal;
    margin: 0 0 10px 0;

  }

  .description{
    font-size: 18px;
    max-width: 800px;
  }

  .page{
    display: flex;
    flex-direction: column;
    box-shadow: -0.2em 0.2em 5px 0.1em rgba(122,122,122,0.5);
    background-color: white;
    margin: 20px 40px 10px 40px;
  }

  .page-top{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .page-text{
    margin:10px 0 0 10px;
  }

  img{
    max-width: 300px;
    height: auto;
  }

  .system-requirements{
    display: flex;
    flex-direction: row;
    margin: 30px 0 10px 0;

  }

  .title{
    font-weight: bold;
  }

  .system-req-min{
    margin-left: 60px;
    max-width: 400px;
  }

  .system-req-recommended{
    margin-left: 60px;
    max-width: 400px;
  }

  button{
    width: 200px;
    height: 40px;
    margin: 10px auto 20px auto;
    background-color: white;
    border: 1px solid dodgerblue;
    border-radius: 5px;
    box-shadow: 1px 2px 5px #5e5e5e;
    transition: 200ms ease;
  }

  button:hover{
    cursor: pointer;
    transition: 200ms ease;
    color: white;
    background-color: dodgerblue;
  }

</style>