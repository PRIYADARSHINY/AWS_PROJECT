//current server.js code running on the AWS container
const http = require('http');
const socketIO = require('socket.io');

const server = http.createServer();
// const io = socketIO(server);
let i = 1;
const io = socketIO(server, {
  pingInterval: 25000,
  pingTimeout: 20000 // Custom ping timeout in milliseconds
});


io.on('connection', (socket) => {
  console.log('A client connected');

  //   socket.on('hi', () => {
  //   console.log('Received ping from client');
  //   socket.emit('hello');
  // });

  socket.on('Test', (clientData) => {
    console.log('Received ping from client', clientData);
    socket.emit('Test', clientData);
  });

  //Emit an event every 2.5 seconds
  const intervalId = setInterval(() => {
    io.emit('TestAuto', i);
    console.log("sent from server: "+i);
    i++;
  }, 200);

  socket.on('disconnect', () => {
    console.log('A client disconnected');
    clearInterval(intervalId);
  });
});

server.listen(80, () => {
  console.log('Server running on port 80');
});



//==========================OLD


// const http = require('http');
// const socketIO = require('socket.io');
// const cors = require('cors');

// const server = http.createServer();
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

// // Configure CORS for Socket.IO using the cors middleware
// const corsOptions = {
//   origin: '*',
//   methods: ['GET', 'POST'],
// };
// // io.origins(corsOptions.origin);
// io.use(cors(corsOptions));

// server.listen(80, () => {
//   console.log('Server running on port 80');
// });




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


//=============Working code for local client socket==========================
// const http = require('http');
// const socketIO = require('socket.io');
// const cors = require('cors');

// const server = http.createServer();
// const io = socketIO(server, {
//   cors: {
//     origin: "http://192.168.1.3:8080",
//     methods: ["GET", "POST"],
//     allowedHeaders: ["my-custom-header"],
//     credentials: true
//   }
// });
// // const io = socketIO(server);


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
