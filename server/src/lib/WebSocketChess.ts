import socketio, { Server, Socket } from 'socket.io';
import { Database } from './Database';

export class WebSocketServer {
  private io: Server;

  constructor(http: any, private db: Database) {
    this.io = socketio(http);
    this.io.on('connection', this.onConnection);

    console.debug('Websocket listening on ws://localhost?');
  }

  private onConnection = (socket: Socket) => {
    const handler = new SocketEventHandler(socket, this.db);

    socket.on('StartGame', handler.onStartGame);
    socket.on('EndGame', handler.onEndGame);
    socket.on('NewMove', handler.onNewMove);
  }
}

class SocketEventHandler {
  constructor(private socket: Socket, private db: Database) {}

  onStartGame = async (data: { players: string[]}) => {
    try {
      const game = await this.db.startGame(data.players);

      this.socket.emit('StartGame:Completed', game.id);
    } catch(error) {
      this.handleError('StartGame:Error', error);
    }
  }

  onEndGame = async (data: { id: string }) => {
    try {
      await this.db.endGame(data.id);

      this.socket.emit('EndGame:Completed');
    } catch(error) {
      this.handleError('EndGame:Error', error);
    }
  }

  onNewMove = async (data: { id: string, move: string}) => {
    try {
      await this.db.addMove(data.id, data.move);

      this.socket.emit('NewMove:Completed');
    } catch(error) {
      this.handleError('NewMove:Error', error);
    }
  }

  private handleError = (key: string, error: any) => {
    console.error(error);
    this.socket.emit(key, JSON.stringify(error));
  }
}
