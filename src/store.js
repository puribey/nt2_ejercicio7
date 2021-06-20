import Vue from "vue";
import Vuex from "vuex";
import { createNewColors, pickColor } from "./utils.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    colors: [],
    messageDisplay: "",
    restartText: "",
    pickedColor: "",
    isHard: true,
    colorCount: 6,
    headerColor: "steelblue",
  },
  /* Acciones: procesos sincrónicos y asincrónicos */
  actions: {
    restartGame({ commit }, colorCount) {
      commit("setResetData", colorCount);
    },
    changeDifficultiy({ commit }, payload) {
      commit("setDifficultiy", payload);
    },
    changePickedColor({ commit }, color) {
      commit("setNewPickedColor", color);
    },
  },
  /* Mutaciones: sólo procesos sincrónicos */
  mutations: {
    setResetData(state, colorCount) {
      const colors = createNewColors(colorCount);
      state.colors = colors;
      state.pickedColor = colors[pickColor()];
      state.messageDisplay = "";
      state.restartText = "New Colors!";
    },
    setDifficultiy(state, payload) {
      state.isHard = payload.isHard;
      state.colorCount = payload.colorCount;
    },
    setNewPickedColor(state, color) {
      const isRight = color === state.pickedColor;
      state.messageDisplay = isRight ? "You Picked Right!" : "Try Again!";
      state.colors = state.colors.map((c) =>
        isRight ? state.pickedColor : c === color ? "#232323" : c
      );
      state.restartText = isRight ? "Play Again!" : "New Colors!";
      state.headerColor = isRight ? state.pickedColor : "steelblue";
    },
  },
});
