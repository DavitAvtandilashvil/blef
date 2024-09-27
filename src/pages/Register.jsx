import { useState } from "react";
import { registerUser } from "../api/apiRegister";

function Register() {
  const [username, setUsername] = useState("");
  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <p>სახელი:</p>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <button onClick={() => registerUser(username)}>ენთერი</button>
    </div>
  );
}

export default Register;
