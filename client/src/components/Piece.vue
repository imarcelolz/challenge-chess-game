
<template>
  <div class="Piece" v-if="piece">
    <PieceImage :piece="piece"/>
    {{piece.piece}}
  </div>
</template>

<script lang="ts">
import { GamePiece } from "../models/Piece";
import PieceImage from "./PieceImage";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: { PieceImage }
})
export default class Piece extends Vue {
  @Prop() private piece!: GamePiece;

  private  chessPieceNames = {
    'K': 'king',
    'Q': 'queen',
    'R': 'castle',
    'B': 'bishop',
    'N': 'knight',
    'P': 'pawn',
  };

  getImage(piece: GamePiece) {
    const name = this.chessPieceNames[piece.name];

    return `./assets/${name}-${piece.color}.svg`
  }
}

</script>
<style scoped lang="scss">

.Piece {
  svg {
    height: auto;
    width: 50%;
    margin: 10% auto;
  }
}
</style>
