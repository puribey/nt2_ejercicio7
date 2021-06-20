<template>
  <div id="app">
    <Header />
    <Navigator />
    <ColorGrid />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Navigator from "./components/Navigator.vue";
import ColorGrid from "./components/ColorGrid.vue";

export default {
  name: "App",
  components: {
    Header,
    Navigator,
    ColorGrid,
  },
  mounted() {
    this.$store.dispatch("restartGame", this.$store.state.colorCount);
  },
  data() {
    return {};
  },
};
</script>

<style>
body {
  background: #232323;
  margin: 0;
  font-family: "Montserrat", "Avenir";
}

h1 {
  font-weight: normal;
  line-height: 1.1;
  padding: 20px 0;
}
</style>
