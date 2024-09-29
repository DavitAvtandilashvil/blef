import styled from "styled-components";
import { generateRandomString } from "../helpers/tableCodeGenerator";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import socket from "../Socket";
import { useBluff } from "../context/BluffContext";

function CreateOrJoinGame() {
  const [create, setCreate] = useState(false);
  const [joinCode, setJoinCode] = useState("");
  const tableCode = generateRandomString();
  const navigate = useNavigate();
  const { setTableCode, username, setActions } = useBluff();

  const handleJoin = () => {
    socket.emit("joinGame", joinCode, username, "JOIN");
  };

  const handleCreate = () => {
    setCreate(true);
    socket.emit("joinGame", tableCode, username, "CREATE");
    setActions((actions) => [...actions, `${username} დაკავშირდა`]);
    setTableCode(tableCode);
    navigate(`/game/${tableCode}`);
  };

  return (
    <StyledCreateOrJoinGame>
      <div>
        {!create && <p onClick={handleCreate}>Create</p>}
        {create && tableCode}
      </div>
      <div>
        <p>join</p>
        <input
          type="text"
          onChange={(e) => setJoinCode(e.target.value)}
          value={joinCode}
        />
        <button onClick={handleJoin}>დადასტურება</button>
      </div>
    </StyledCreateOrJoinGame>
  );
}

export default CreateOrJoinGame;

const StyledCreateOrJoinGame = styled.div``;
