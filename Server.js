const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');

const server = http.createServer();
const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('A client connected');

  socket.on('ping', () => {
    console.log('Received ping from client');
    socket.emit('pong');
  });

  socket.on('disconnect', () => {
    console.log('A client disconnected');
  });
});

// Configure CORS for Socket.IO using the cors middleware
const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST'],
};
io.origins(corsOptions.origin);
io.use(cors(corsOptions));

server.listen(80, () => {
  console.log('Server running on port 80');
});




// const http = require('http');
// const socketIO = require('socket.io');
// const express = require('express');
// const cors = require('cors');

// const app = express(); // Create an Express app instance
// app.use(cors());


// const server = http.createServer(app); // Pass the Express app to the http server
// const io = socketIO(server);


// io.on('connection', (socket) => {
//   console.log('A client connected');

//   socket.on('ping', () => {
//     console.log('Received ping from client');
//     socket.emit('pong');
//   });

//   socket.on('disconnect', () => {
//     console.log('A client disconnected');
//   });
// });

// server.listen(80, () => {
//   console.log('Server running on port 80');
// });




// const http = require('http');
// const socketIO = require('socket.io');
// const cors = require('cors');

// const server = http.createServer();
// const io = socketIO(server);
// io.set('origins', '*:*');

// io.on('connection', (socket) => {
//   console.log('A client connected');

//   socket.on('ping', () => {
//     console.log('Received ping from client');
//     socket.emit('pong');
//   });

//   socket.on('disconnect', () => {
//     console.log('A client disconnected');
//   });
// });

// // Create a CORS middleware and use it with the server
// // const corsOptions = {
// //   origin: '*',
// //   methods: ['GET', 'POST'],
// // };

// // io.use(cors(corsOptions));

// server.listen(80, () => {
//   console.log('Server running on port 80');
// });
