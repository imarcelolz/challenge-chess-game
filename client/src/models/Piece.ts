import { ChessColor } from './ChessColor';

export type ChessPieceName = 'K' | 'Q' | 'R' | 'B' | 'N' | 'P'

export interface GamePiece {
  index: number,
  name: ChessPieceName,
  color: ChessColor
}
