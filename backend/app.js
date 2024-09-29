const express = require("express");

const port = 5000;
const app = express();

const server = app.listen(port, () => {
  console.log("listening to port: ", port);
});

const io = require("socket.io")(server, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("user connected to: ", socket.id);

  socket.on("message", (msg) => {
    socket.emit("message_received", { message: "ukukavshir" });
    console.log(msg.message);
  });
});
