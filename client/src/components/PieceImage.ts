import { Component, Prop, Vue } from "vue-property-decorator";
import BishopBlack from '../assets/bishop-black.svg';
import BishopWhite from '../assets/bishop-white.svg';
import CastleBlack from '../assets/castle-black.svg';
import CastleWhite from '../assets/castle-white.svg';
import KingBlack from '../assets/king-black.svg';
import KingWhite from '../assets/king-white.svg';
import KnightBlack from '../assets/knight-black.svg';
import KnightWhite from '../assets/knight-white.svg';
import PawnBlack from '../assets/pawn-black.svg';
import PawnWhite from '../assets/pawn-white.svg';
import QueenBlack from '../assets/queen-black.svg';
import QueenWhite from '../assets/queen-white.svg';
import { GamePiece } from "../models/Piece";


const PieceImageMap: {[key: string]: any } = {
  'B.black': BishopBlack,
  'B.white': BishopWhite,
  'R.black': CastleBlack,
  'R.white': CastleWhite,
  'K.black': KingBlack,
  'K.white': KingWhite,
  'N.black': KnightBlack,
  'N.white': KnightWhite,
  'P.black': PawnBlack,
  'P.white': PawnWhite,
  'Q.black': QueenBlack,
  'Q.white': QueenWhite
}

@Component({
  components: {
    BishopBlack,
    BishopWhite,
    CastleBlack,
    CastleWhite,
    KingBlack,
    KingWhite,
    KnightBlack,
    KnightWhite,
    PawnBlack,
    PawnWhite,
    QueenBlack,
    QueenWhite
  }
})
export default class PieceImage extends Vue {
  @Prop() private piece!: GamePiece;

  get Key() { return `${this.piece.name}.${this.piece.color}` }

  render(createElement: any) {
    const component = PieceImageMap[this.Key];

    return createElement(component);
  }
}
