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




const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');

const server = http.createServer();
const io = socketIO(server);

// Enable CORS using the cors middleware
io.origins('*:*'); // Allows all origins and all paths

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

server.listen(80, () => {
  console.log('Server running on port 80');
});