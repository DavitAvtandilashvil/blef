import axiosInstance from "../../api";

export async function registerUser(username) {
  try {
    const { data } = await axiosInstance.post("/users/register", {
      username: username,
    });
    localStorage.setItem("token", data.token);
  } catch (error) {
    console.log(error.message);
  }
}
