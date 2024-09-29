import axiosInstance from "../../api";
import socket from "../Socket";

export async function registerUser(username) {
  try {
    console.log("aqav");

    socket.emit("message", { message: "ravaxar" });
    console.log("xoara");
  } catch (error) {
    console.log(error.message);
  }
}
