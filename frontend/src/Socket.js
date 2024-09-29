import { io } from "socket.io-client";

const socket = io("ws://localhost:5000");

socket.on("message", (message) => {
  console.log(message);
});

export default socket;
