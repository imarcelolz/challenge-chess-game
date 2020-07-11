import { GamePiece } from '@/models/Piece';

const BlackPieces: Array<GamePiece> = [
  { index: 0, name: 'R', color: 'black', },
  { index: 1, name: 'N', color: 'black', },
  { index: 2, name: 'B', color: 'black', },
  { index: 3, name: 'K', color: 'black', },
  { index: 4, name: 'Q', color: 'black', },
  { index: 5, name: 'B', color: 'black', },
  { index: 6, name: 'N', color: 'black', },
  { index: 7, name: 'R', color: 'black', },
  { index: 8, name: 'P', color: 'black', },
  { index: 9, name: 'P', color: 'black', },
  { index: 10, name: 'P', color: 'black', },
  { index: 11, name: 'P', color: 'black', },
  { index: 12, name: 'P', color: 'black', },
  { index: 13, name: 'P', color: 'black', },
  { index: 14, name: 'P', color: 'black', },
  { index: 15, name: 'P', color: 'black', }
];

const WhitePieces: Array<GamePiece> = [
  { index: 48, name: 'P', color: 'white', },
  { index: 49, name: 'P', color: 'white', },
  { index: 50, name: 'P', color: 'white', },
  { index: 51, name: 'P', color: 'white', },
  { index: 52, name: 'P', color: 'white', },
  { index: 53, name: 'P', color: 'white', },
  { index: 54, name: 'P', color: 'white', },
  { index: 55, name: 'P', color: 'white', },
  { index: 56, name: 'R', color: 'white', },
  { index: 57, name: 'N', color: 'white', },
  { index: 58, name: 'B', color: 'white', },
  { index: 59, name: 'K', color: 'white', },
  { index: 60, name: 'Q', color: 'white', },
  { index: 61, name: 'B', color: 'white', },
  { index: 62, name: 'N', color: 'white', },
  { index: 63, name: 'R', color: 'white', }
];

export const generateNewGamePieces = () => BlackPieces.concat(WhitePieces).map((e) => ({ ...e }));
