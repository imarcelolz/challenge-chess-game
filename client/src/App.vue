<template>
  <div id="app">
    <ChessBoard />
    <button @click="newGame">New Game</button>
    <button @click="endGame">Finish Game</button>

    <div>
      First part of the challenge:
      <input type="text" v-model="move" />
      <button @click="sendMove" :disabled="sendingMove">Enviar Move</button>
      <div>
        <small>{{ this.gameId }}</small>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { socketClient } from "./lib/SocketClient";
import { Component, Vue } from "vue-property-decorator";
import { Action } from "vuex-class";
import ChessBoard from "./components/ChessBoard.vue";

@Component({
  components: { ChessBoard }
})
export default class App extends Vue {
  @Action newGame!: () => void;
  @Action endGame!: () => void;

  move = '';
  gameId = '';
  sendingMove = false;

  async sendMove() {
    this.sendingMove = true;

    const gameId = await socketClient.startGame();
    await socketClient.newMove(gameId, this.move);
    await socketClient.endGame(gameId);

    this.gameId = `you sent one move to our backend and it is saved on the gameId: ${gameId}`;
    this.sendingMove = false;
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 15px;
}
</style>
