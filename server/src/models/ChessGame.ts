
export interface ChessGame {
  id?: string;
  startDate: Date;
  endDate?: Date;
  players: Array<string>;
  moves: Array<string>;
}
