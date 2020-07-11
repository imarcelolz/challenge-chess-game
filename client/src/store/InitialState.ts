import { generateBoardCells } from '@/lib/generateBoardCells';
import { State } from './Types';

export const initialState: State = {
  boardCells: generateBoardCells(),
  pieces: []
}
