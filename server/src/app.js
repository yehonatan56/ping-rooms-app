const express = require("express");
const http = require("http");
const app = express();
const port = 3000;
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);

io.on("connection", (socket) => {
  console.log("Socket connected: " + socket.id);
  socket.on("ping", (m) => {
    io.sockets.emit("ping", { message: "ping" });
  });
});

app.get("/", (req, res) => {
  res.send("Server is running");
});

server.listen(port, () => {
  console.log(`Server is runningku on port ${port}`);
});
