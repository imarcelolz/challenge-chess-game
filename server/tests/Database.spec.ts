import { Database } from './DataBase';

describe('Database', () => {
  let target: Database;

  beforeEach(() => {
    // target = new Database(null);
  });

  describe('#startGame', () => {
    it('returns a new game instance', () => {
    });

    it('throws error there are no players', () => {
    });
  });

  describe('#addMove', () => {
    it('appends one move into the game', () => {
    });

    it('throws error if the game not exist', () => {
    });

    it('throws error if the game is finished', () => {
    });

    it('throws error if the move is empty', () => {
    });
  });

  describe('#endGame', () => {
    it('finishes the game', () => {
    });

    it('throws error if the game not exist', () => {
    });
  });
});
