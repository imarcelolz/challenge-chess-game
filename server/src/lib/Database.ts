import { Collection, MongoClient } from 'mongodb';
import { v4 } from 'uuid';
import { ChessGame } from '../models/ChessGame';

export class Database {
  constructor(private server: MongoClient) {}

  async startGame(players: string[]): Promise<ChessGame> {
    if(!players || players.length !== 2) {
      throw new Error('I need two playes to start one game');
    }

    const game: ChessGame = {
      id: v4(),
      startDate: new Date(),
      moves: [],
      players: players
    };

    return this.save(game);
  }

  async addMove(gameId: string, move: string): Promise<ChessGame>{
    const game = await this.find(gameId);

    if(game.endDate) {
      throw new Error('this game is already finished');
    }

    game.moves.push(move);
    return this.save(game);
  }

  async endGame(gameId: string): Promise<ChessGame> {
    const game = await this.find(gameId);
    game.endDate = new Date();

    return this.save(game);
  }

  private async find(gameId: string): Promise<ChessGame> {
    const games = await this.getGameCollection().find({ id: gameId }).toArray();

    if(!games.length) {
      throw new Error(`Cannot find the game with the id ${gameId}`);
    }

    return games[0];
  }

  private async save(game: ChessGame): Promise<ChessGame> {
    const response = await this.getGameCollection().replaceOne({ _id: game.id }, game, { upsert: true });

    if(!response.result.ok) {
      throw new Error('Something went wrong');
    }

    return game;
  }

  private getGameCollection(): Collection<ChessGame> {
    return this.server.db().collection('GameCollection');
  }
}
