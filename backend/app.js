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
console.log(games);

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

        const newUser = {
          username,
          tableCode,
          coins: 2,
          cardUnit: 2,
        };
        games[tableCode].users.push(newUser);
        console.log(games[tableCode]);

        io.to(socket.id).emit("addUserForMe", games[tableCode]);
        socket.to(tableCode).emit("addUser", games[tableCode]);
      } else {
        io.to(socket.id).emit("message_received", {
          message: `ოთახი არ არსებობს`,
        });
      }
    } else {
      const newUser = {
        username,
        tableCode,
        coins: 2,
        cardUnit: 2,
      };
      games[tableCode] = { users: [newUser] };
      console.log(games[tableCode]);

      socket.join(tableCode);
      socket.to(tableCode).emit("message_received", {
        message: `${username} დაკავშირდა`,
      });

      io.to(socket.id).emit("addUserForMe", games[tableCode]);
      socket.to(tableCode).emit("addUser", games[tableCode]);
    }
  });
});
