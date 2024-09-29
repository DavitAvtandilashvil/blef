const express = require("express");

const port = 5000;
const app = express();

const server = app.listen(port, () => {
  console.log("listening to port: ", port);
});

const io = require("socket.io")(server, {
  cors: { origin: "*" },
});

const games = {};

io.on("connection", (socket) => {
  console.log("new socket: ", socket.id);

  socket.on("joinGame", (tableCode, username, type) => {
    if (type == "JOIN") {
      if (games[tableCode]) {
        socket.join(tableCode);

        io.to(socket.id).emit("clientJoin", tableCode, username);

        socket.to(tableCode).emit("message_received", {
          message: `${username} დაკავშირდა`,
        });
      } else {
        io.to(socket.id).emit("message_received", {
          message: `ოთახი არ არსებობს`,
        });
      }
    } else {
      games[tableCode] = {};
      socket.join(tableCode);

      socket.to(tableCode).emit("message_received", {
        message: `${username} დაკავშირდა`,
      });
    }
  });
});
