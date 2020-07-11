import { Cell } from '@/models/Cell';
import { GamePiece } from '@/models/Piece';

export interface State {
  gameId: string,
  boardCells: Array<Cell>,
  pieces: Array<GamePiece>
}
