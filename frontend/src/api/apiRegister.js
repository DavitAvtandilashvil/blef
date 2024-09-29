import axiosInstance from "../../api";
import socket from "../Socket";

export async function registerUser(username) {
  try {
    socket.emit("message", { message: username });
  } catch (error) {
    console.log(error.message);
  }
}
