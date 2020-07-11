import { generateBoardCells } from '@/lib/generateBoardCells';
import { generateNewGamePieces } from '@/lib/generateNewGamePieces';
import { Cell } from '@/models/Cell';
import { State } from './Types';

export function newGame(state: State, payload: string) {
  state.gameId = payload;
  state.boardCells = generateBoardCells();
  state.pieces = generateNewGamePieces();
}

export function endGame(state: State) {
  state.gameId = '';
  state.boardCells = generateBoardCells();
  state.pieces = [];
}

export function movePiece(state: State, payload: { from: Cell, to: Cell }) {
  const { from, to } = payload;

  to.Piece = from.Piece
  from.Piece = undefined;

  state.boardCells[to.index] = to;
  state.boardCells[from.index] = from;
}
