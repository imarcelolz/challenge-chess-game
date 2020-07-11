import io from 'socket.io-client';

class SocketClient {
  protected io:any;

  constructor() {
    this.io = io('ws://localhost:3000')
  }

  startGame(): Promise<string> {
    const response = this.buildResponse<string>('StartGame');
    this.io.emit('StartGame', { players: ['marcelo', 'juvenal']});

    return response;
  }

  endGame(id: string): Promise<void> {
    const response = this.buildResponse<void>('EndGame');
    this.io.emit('EndGame', { id });

    return response;
  }

  newMove(id: string, from: string, to: string, piece: string): Promise<void> {
    const response = this.buildResponse<void>('NewMove');
    this.io.emit('NewMove', { id, move: { from, to, piece }});

    return response;
  }

  buildResponse<T>(eventName: string) {
    return new Promise<T>((resolve, reject) => {
      this.io.once(`${eventName}:Completed`, (data: T) => resolve(data));
      this.io.once(`${eventName}:Error`, (data: T) => reject(data));
   });
  }
}

export const socketClient = new SocketClient();
