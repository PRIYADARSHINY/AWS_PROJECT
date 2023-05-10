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

server.listen(80, () => {
  console.log('Server running on port 80');
});