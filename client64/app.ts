const express = require("express");
const http = require("http");
const app = express();
const port = 3000;
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);

io.on("connection", (socket) => {
  console.log("Socket connected: " + socket.id);
  socket.on("ping", (msg) => {
    console.log(msg);
    io.sockets.emit("pimg", msg);
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
