<script setup></script>

<template>
  <main>
    <h1>Schacherprojekt</h1>
    <h2>Main Menu</h2>
    <div class="menu">
      <GoToBtnComponent textToDisplay="Play Local" location="play-local"></GoToBtnComponent>
      <GoToBtnComponent textToDisplay="About" location="about"></GoToBtnComponent>
      <GoToBtnComponent textToDisplay="Author" location="author"></GoToBtnComponent>
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
body {
  background: linear-gradient(to right, #000000, #00000079);
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Bitter', serif;
  text-align: center;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
h1:hover {
  cursor: default;
}
</style>

<style scoped>
.menu {
  display: flex;
  flex-direction: column;
  align-items: center; /* horizontally center buttons */
  justify-content: center; /* vertically center buttons */
  text-align: center; /* center text inside buttons */
}
</style>

<style scoped>
h1 {
  font-size: 8vw;
  font-style: oblique;
  font-weight: bold;
  margin: 5px;
}
h2 {
  font-size: 7vw;
  font-weight: bold;
  margin: 5px;
}
</style>
