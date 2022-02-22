const app = require('express')();
const http = require('http').Server(app); //created a http server
const io = require('socket.io')(http); //used the server with http
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

//what the code below does is it basically initiates and connection and data is sent through events
io.on('connection', (socket) => {
  socket.on('chat message', (data) => {
    io.emit('chat message', data)
  })
})

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
