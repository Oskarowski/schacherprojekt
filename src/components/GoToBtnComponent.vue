<template>
  <div>
    <v-btn class="menu-button mt-1" variant="outlined" @click="goTo()" ref="btn">{{
      textToDisplay
    }}</v-btn>
  </div>
</template>
<script>
export default {
  name: 'GoToBtnComponent',

  data() {
    return {
      isClicked: false
    }
  },

  props: {
    location: {
      type: String,
      required: false,
      default: '/'
    },
    textToDisplay: {
      type: String,
      required: true
    }
  },

  methods: {
    goTo() {
      this.$router.push(this.location)
    }
  }
}
</script>
<style scoped>
.menu-button {
  text-decoration: none;
  transition: 0.8s;
  position: relative;
  overflow: hidden;
  width: 15em;
  cursor: pointer;

  display: inline-block;
  padding: 10px 20px;
  margin: 2px 5px;
  background-color: #333;
  color: #fff;
  font-size: 1em;
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
}
.menu-button:hover {
  background-color: #555;
}
</style>
