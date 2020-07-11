import { Cell } from '@/models/Cell';
import { times } from 'lodash';

export const generateBoardCells = () => times(64).map((index) => new Cell(index));
