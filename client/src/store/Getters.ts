import { State } from './Types';

export function board(state: State) {
  const updatedBoard = [...state.boardCells];

  for (const piece of state.pieces || []) {
    const cell = updatedBoard[piece.index];
    cell.Piece = piece;
  }

  return updatedBoard;
}
