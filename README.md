# Chess Challenge

## Requirements:
1. Storing of moves (Backend):
Chess move information entered in a text field must be stored on a backend side database.
Please use a Node.js based web server and store the data inside a MongoDB. Transfer data via WebSocket.

1. Display a chess board (Frontend graphics):
Develop a web solution that is showing a chess board and pieces in the default position.
Use any frontend technology you like, with the exception of chess libraries.

1. Moving pieces (Frontend interaction):
Make pieces movable on the board by drag’n drop.
Any piece can be moved to any field.
No move validation is needed.
It’s up to you to decide what to do with multiple pieces on the same field (multiple pieces per field, disallow move, take the piece like in chess, etc.)

*Bonus*
Connect the frontend chess board with the backend service. Store the moves entered on the chess board.

## Implementation
The implementation of the project is splited into two separated parts,
the backend (expressjs, mongodb and socket.io) and the frontend (vuejs and vuex).
Both solutions are using yarn as its package manager and can be started by
using the command `yarn serve`.

## Server
The server expects one mongodb database with the `chess-game` name and one collection
named: `GameCollection`. You can change the database connection string on
`server/src/lib/buildMongoClient.ts:4`. By runnig the server on usign the `yarn serve`
you will be able to see all socket messages that were being sent by the frontend.

Implementation:
`src/Server.ts`: this is the entry point of the server app, it will start the express
server listing on the port `3000` and will initiate the socket server.

`src/lib/Database.ts`: this class is the database interface, it has method to start and end
games and also to add piece movements to one running game. I'm also doing some small validations
on this class before the persistence, since I choose not to use one ORM for this project I think
this is the best way to ensure the data consistency.

`src/lib/WebSocketChess.ts`: This file contains two classes, the `WebSocketServer` which is
responsbile to create one *socket.io* server instance and will delegate the messaging process
to the `SocketEventHandler`. I opted to create a separated class to handle the exchange of messages
since they have completly different scopes and responsabilities. In my point of view the `WebSocketServer`
is who takes care of the server instance and it will delegat the responsability of the message handling.

## Client
The client application is based on vuejs and vuex, it has two main components with are
only responsible to render the data. All logic related how to process data and the `API` calls
are being handled by Vuex.actions. I created some models to represent the data that will
be exchanged on the app and also tried to keep it simple as possible. I spend some time
rendering the ChessBoard with plain html and some SVG pieces.

To start the game you need to click on New Game, then you will get be able to see a new game
and drag the pieces around. Each movement will be sent to the backend using the respective format:
`{ form: string, to: string, piece: string }`

I'd like to say thanks to you for this opportunity.
