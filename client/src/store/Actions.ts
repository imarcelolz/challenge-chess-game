import { socketClient } from '@/lib/SocketClient';
import { Cell } from '@/models/Cell';

export async function newGame(context: any) {
  const gameId = await socketClient.startGame();
  context.commit('newGame', gameId)
}

export async function endGame(context: any) {
  const gameId = context.state.gameId;
  await socketClient.endGame(gameId);
  context.commit('endGame')
}

export async function movePiece(context: any, payload: { from: Cell, to: Cell }) {
  const { from, to } = payload;
  const pieceName = from.Piece?.name as string;
  const gameId = context.state.gameId;

  await socketClient.newMove(gameId, from.Name, to.Name, pieceName);
  context.commit('movePiece', payload);
}
