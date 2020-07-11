<template>
  <div class="chessboard">
    <drop
      v-for="cell in board"
      :key="cell.index"
      :class="{ black: cell.Black }"
      :data="cell"
      @drop="onDropComplete(cell, $event)"
      class="cell"
      :accepts-data="() => canDrop(cell)"
    >
      <drag :data="cell" :disabled="!canDrag(cell)">
        <Piece :piece="cell.Piece" />
      </drag>
    </drop>
  </div>
</template>

<script lang="ts">
import { Cell } from "../models/Cell";
import { Drag, Drop, DropMask } from "vue-easy-dnd";
import { Component, Vue } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import Piece from "./Piece.vue";

@Component({ components: {
  Piece,
  Drag,
  Drop,
  DropMask
 } })
export default class ChessBoard extends Vue {
  @Getter board!: Array<Cell>;
  @Action movePiece!: (payload: { from: Cell, to: Cell }) => void;

  onDropComplete = (to: Cell, e: { data: Cell }) => {
    const from = e.data as Cell;

    this.movePiece({ from, to });
  }

  canDrag(cell: Cell) {
    return cell.Piece !== undefined;
  }

  canDrop(cell: Cell) {
    return cell.Piece === undefined;
  }
}
</script>

<style scoped lang="scss">
.chessboard {
  width: 50vw;
  height: 50vw;
  border: 2px solid #2c3e50;
  margin: 0 auto;

  .cell {
    height: 12.5%;
    width: 12.5%;
    max-height: 100vw;
    max-width: 100vw;
    padding: 0;
    margin: auto;
    float: left;
    color: black;
    background-color: white;

    .drop-allowed { background-color: white; }
    .drop-forbidden { background-color: rgba(255,255,255,0.4); }
  }

  .black {
      color: white;
      background-color: rgb(44,62,80);

      &.drop-allowed { background-color: rgb(44,62,80); }
      &.drop-forbidden { background-color: rgba(44,62,80, 0.7); }
    }
}
</style>
