import { GamePiece } from './Piece';

export const ColumnLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

export class Cell {
  readonly index: number;
  private piece?: GamePiece;

  constructor(index: number) {
    if(index < 0 || index > 63) {
      throw new Error('Invalid Index');
    }

    this.index = index;
  }

  get Column(): string {
    const column = this.index % 8;

    return ColumnLetters[column];
  }

  get Row(): number {
    return 8 - Math.trunc(this.index / 8);
  }

  get Name() {
    return `${this.Column}${this.Row}`;
  }

  get Black(): boolean {
    return !this.White;
  }

  get White(): boolean {
    const pairRow = this.Row % 2;
    const pairColumn = (this.index % 8) % 2 === 0;

    return pairRow ? !pairColumn : pairColumn;
  }

  get Piece(): GamePiece | undefined {
    return this.piece;
  }

  set Piece(value: GamePiece | undefined) {
    this.piece = value;

    if(this.piece) {
      this.piece.index = this.index
    }
  }
}
