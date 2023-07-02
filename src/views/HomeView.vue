<script setup></script>

<template>
  <main>
    <h1>Schacherprojekt</h1>
    <h2>Main Menu</h2>
    <div class="menu">
      <a href="/play-local">
        <button class="menu-button">Play Local</button>
      </a>
      <a href="/about">
        <button class="menu-button">About</button>
      </a>
      <a href="/author">
        <button class="menu-button">Author</button>
      </a>
    </div>
  </main>
</template>

<style>
body {
  background: linear-gradient(to right, #ff8a00, #da1b60);
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
a button {
  text-decoration: none;
  display: inline-block;
}
a:hover {
  color: inherit;
  background-color: transparent;
  cursor: default;
}
.menu-button {
  text-decoration: none;
  transition: 0.8s;
  position: relative;
  overflow: hidden;
  width: 10em;
  cursor: pointer;

  display: inline-block;
  padding: 10px 20px;
  margin: 2px 5px;
  background-color: #333;
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
}
.menu-button:hover {
  background-color: #555;
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
  font-size: 40px;
  font-weight: bold;
  margin: 5px;
}
h2 {
  font-size: 30px;
  font-weight: bold;
  margin: 5px;
}
</style>
