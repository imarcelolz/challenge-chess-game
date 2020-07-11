import express from 'express';
import httpModule from 'http';
import { buildMongoClient } from './lib/buildMongoClient';
import { Database } from './lib/Database';
import { WebSocketServer } from './lib/WebSocketChess';

const port = process.env.PORT || 3000;

const app = express();
const http = httpModule.createServer(app);

buildMongoClient().then((client) => {
  const database = new Database(client);
  new WebSocketServer(http, database);
});

http.listen(port, () => {
  console.log('Listening on http://localhost:' + port);
});
