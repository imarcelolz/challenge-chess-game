import { Cell, ColumnLetters } from '@/models/Cell';
import { times } from 'lodash';

describe('Cell', () => {
  let target: Cell;

  describe('#Index', () => {
    it('sets index properly', () => {
      target = new Cell(1);

      expect(target.index).toEqual(1);
    });

    it('-1 is one invalid index', () => {
      expect(() => new Cell(-1)).toThrowError();
    });

    it('65 is one invalid index', () => {
      expect(() => new Cell(65)).toThrowError();
    });
  });

  describe('#Name', () => {
    it('returns the position Name', () => {
      expect.assertions(64);
      let index = 0;

      times(8).map((row) => {
        ColumnLetters.map((column) => {
          expect(new Cell(index++).Name).toEqual(`${column}${row + 1}`);
        });
      });
    });
  });

  describe('#Black', () => {
    it('returns the position is black', () => {
      expect(new Cell(0).Black).toBeFalsy();
      expect(new Cell(7).Black).toBeTruthy();
    });
  });

  describe('#White', () => {
    it('returns the position is black', () => {
      expect(new Cell(8).White).toBeFalsy();
      expect(new Cell(16).White).toBeTruthy();
    });
  });
});
