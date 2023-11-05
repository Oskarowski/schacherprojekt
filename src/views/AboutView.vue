<template>
  <main>
    <div class="about">
      <h1>Schacherprojekt = The game of chess</h1>
      <div class="chess-board">
        <div>♜ ♞ ♝ ♛ ♚ ♝ ♞ ♜</div>
        <div>♟ ♟ ♟ ♟ ♟ ♟ ♟ ♟</div>
        <br />
        <br />
        <br />
        <br />
        <div>♙ ♙ ♙ ♙ ♙ ♙ ♙ ♙</div>
        <div>♖ ♘ ♗ ♕ ♔ ♗ ♘ ♖</div>
      </div>

      <GoToBtnComponent textToDisplay="Go Back"></GoToBtnComponent>
    </div>
  </main>
</template>

<script>
import GoToBtnComponent from '../components/GoToBtnComponent.vue'

export default {
  components: {
    GoToBtnComponent
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>

<style scoped>
.chess-board {
  font-size: 30px;
  margin: 15px 0;
  cursor: default;
}
</style>
