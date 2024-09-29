import { useBluff } from "../context/BluffContext";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const { username, setUsername } = useBluff();

  const handleEnter = () => {
    navigate("/preGame");
  };

  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <p>სახელი:</p>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <button onClick={() => handleEnter(username)}>ენთერი</button>
    </div>
  );
}

export default Register;
