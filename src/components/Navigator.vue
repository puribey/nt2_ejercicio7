<template>
  <div id="navigator">
    <div class="inner-container">
      <button id="reset" @click="restart">{{ getRestartText }}</button>
      <span id="message">{{ getMessageDisplay }} </span>
      <div>
        <button id="easy" :class="!getDifficulty && 'selected'" @click="onEasy">
          easy
        </button>
        <button id="hard" :class="getDifficulty && 'selected'" @click="onHard">
          hard
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigator",
  props: {},
  data() {
    return {};
  },
  methods: {
    restart() {
      this.$store.dispatch("restartGame", this.$store.state.colorCount);
    },
    onEasy() {
      const payload = {
        isHard: false,
        colorCount: 3,
      };
      this.$store.dispatch("changeDifficultiy", payload);
      this.$store.dispatch("restartGame", this.$store.state.colorCount);
    },
    onHard() {
      const payload = {
        isHard: true,
        colorCount: 6,
      };
      this.$store.dispatch("changeDifficultiy", payload);
      this.$store.dispatch("restartGame", this.$store.state.colorCount);
    },
  },
  computed: {
    getRestartText() {
      return this.$store.state.restartText;
    },
    getMessageDisplay() {
      return this.$store.state.messageDisplay;
    },
    getDifficulty() {
      return this.$store.state.isHard;
    },
  },
};
</script>

<style scoped>
#navigator {
  background: #ffffff;
  height: 30px;
  margin: 0;
  margin-top: -30px;
}
.inner-container {
  height: 100%;
  margin: 0 auto;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.inner-container div {
  height: 100%;
}
#message {
  color: #000000;
}
.selected {
  background-color: steelblue;
  color: white;
}
button {
  border: none;
  background-color: white;
  font-family: "Montserrat", "Avenir";
  text-transform: uppercase;
  height: 100%;
  font-weight: 700;
  letter-spacing: 1px;
  color: steelblue;
  transition: all 0.3s;
  outline: none;
}
button:hover {
  color: white;
  background-color: steelblue;
}
</style>
