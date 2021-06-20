<template>
  <div id="header" :style="{ 'background-color': getHeaderColor }">
    <h1>
      The Great <br />
      <span id="colorDisplay">{{ getPickedColor.toUpperCase() }}</span>
      <br />
      Guessing Game
    </h1>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {},
  data() {
    return {};
  },
  computed: {
    getHeaderColor() {
      return this.$store.state.headerColor;
    },
    getPickedColor() {
      return this.$store.state.pickedColor;
    },
  },
};
</script>

<style scoped>
#header {
  transition: all 0.3s;
  background: steelblue;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  color: white;
}
#colorDisplay {
  font-size: 200%;
}
</style>
