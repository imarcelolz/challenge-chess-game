import { MongoClient } from 'mongodb';

export async function buildMongoClient() {
  const connectionString = 'mongodb://localhost:27017/chess-game';

  const client = new MongoClient(connectionString, { useNewUrlParser: true });
  await client.connect();

  return client;
}
