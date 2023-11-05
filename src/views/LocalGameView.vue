<template>
  <main>
    <div class="local-game">
      <h1>Local Game</h1>
      <hr />
      <p id="whos-turn-display"></p>
      <hr />
      <div ref="mapOfTiles" id="map-of-tiles"></div>
      <hr />
      <GoToBtnComponent textToDisplay="Home"></GoToBtnComponent>
    </div>
  </main>
</template>

<script>
import * as helpers from '../components/helpers/helpers.js' //helpers/helpers.js
import { generateWholeBoard } from '../components/helpers/generateBoard.js'
import { addDragListenersToPieces } from '../components/helpers/logicOfDragging.js'
import GoToBtnComponent from '@/components/GoToBtnComponent.vue'

export default {
  components: {
    GoToBtnComponent
  },

  mounted() {
    var trackingWhosTurn = 'white'

    const vueMapOfTiles = this.$refs.mapOfTiles
    generateWholeBoard(vueMapOfTiles)
    addDragListenersToPieces()
    helpers.updateContentOfWhosTurn(trackingWhosTurn)
  }
}
</script>

<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
} */

.local-game {
  font-feature-settings: 'smcp', 'zero';
  letter-spacing: 2px;
}

path {
  position: relative;
  z-index: -15;
}

.darker {
  fill: rgb(0, 0, 0);
}

.lighter {
  fill: rgb(222, 222, 222);
}

.piece {
  position: relative;
  z-index: 15;
}

#map-of-tiles {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 320px;
  height: 320px;
  padding: 0;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
}

.tile {
  z-index: 0;
  width: 40px;
  height: 40px;
  border: 1px solid rgb(0, 0, 0);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.tile:hover {
  transition: background-color 0.45s ease;
  filter: brightness(1.2);
  /* opacity: 0.5; */
}

.tile svg {
  width: 30px;
  height: 30px;
  position: relative;
  z-index: -20;
}

.lighter-tile {
  background-color: rgb(133, 133, 133);
}

.darker-tile {
  background-color: rgba(150, 75, 0, 0.452);
}

#whos-turn-display {
  font-weight: bold;
  text-align: center;
  margin: 0 auto;
  padding: 0.5em;
}

hr {
  margin: 0.5em 0px;
}

.dragging-over-tile {
  transition: background-color 0.45s ease;
  filter: brightness(1.2);
}

p {
  font-size: large;

  text-align: center;
  margin: 0.5em 0;
}
</style>
