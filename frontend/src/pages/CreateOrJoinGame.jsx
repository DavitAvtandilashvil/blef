import styled from "styled-components";
import { generateRandomString } from "../helpers/tableCodeGenerator";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import socket from "../Socket";
import { useBluff } from "../context/BluffContext";
import { FaGamepad, FaDice } from "react-icons/fa";

function CreateOrJoinGame() {
  const [joinCode, setJoinCode] = useState("");
  const tableCode = generateRandomString();
  const navigate = useNavigate();
  const { setTableCode, username, setActions } = useBluff();

  const handleJoin = () => {
    socket.emit("joinGame", joinCode, username, "JOIN");
  };

  const handleCreate = () => {
    socket.emit("joinGame", tableCode, username, "CREATE");
    setActions((actions) => [...actions, `${username} დაკავშირდა`]);
    setTableCode(tableCode);
    navigate(`/game/${tableCode}`);
  };

  return (
    <StyledCreateOrJoinGame>
      {/* <div>
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
      </div> */}
      <CreateOrJoinDiv>
        <CreateGame>
          <h2>ახალი თამაში</h2>
          <div>
            <FaGamepad size={200} color="grey" />
          </div>
          <button onClick={handleCreate}>თამაშის შექმნა</button>
        </CreateGame>
        <DevideDiv>
          <div></div>
          <p>O</p>
          <p>R</p>
          <div></div>
        </DevideDiv>
        <JoinGame>
          <h2>თამაშში შესვლა</h2>
          <div>
            <FaDice size={200} color="grey" />
          </div>
          <button onClick={handleJoin}>თამაშში შესვლა</button>
          <input
            type="text"
            placeholder="შეიყვანე კოდი"
            onChange={(e) => setJoinCode(e.target.value)}
          />
        </JoinGame>
      </CreateOrJoinDiv>
    </StyledCreateOrJoinGame>
  );
}

export default CreateOrJoinGame;

const StyledCreateOrJoinGame = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000bf;
`;

const CreateOrJoinDiv = styled.div`
  width: 500px;
  padding: 40px 20px 40px 20px;
  background-color: white;
  border-radius: 10px;
  color: black;
  display: flex;
  gap: 20px;
`;

const CreateGame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > h2 {
    font-size: 18px;
    color: #ff3c00;
    font-weight: 600;
  }

  & > button {
    width: 130px;
    height: 45px;
    margin: auto;
    cursor: pointer;
    background-color: purple;
    color: white;
    font-weight: bold;
    border-radius: 12px;
    border: none;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #ffa500;
      box-shadow: 0 0 10px rgba(255, 165, 0, 0.6);
      transform: scale(1.1);
    }
  }
`;

const DevideDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & > div {
    width: 100%;
    width: 1px;
    /* height: 70px; */
    height: 100%;
    border: 2px solid grey;
  }
`;

const JoinGame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > h2 {
    font-size: 18px;
    color: #ff3c00;
    font-weight: 600;
  }

  & > input {
    margin-top: 10px;
    border-radius: 10px;
    padding-left: 20px;
    padding-right: 20px;
    border: 1px solid #ccc;
    background-color: #f9f9f9;
    transition: background-color 0.2s ease-in-out;
    height: 30px;

    &:focus {
      background-color: #eef5ff;
    }
  }

  & > button {
    width: 130px;
    height: 45px;
    margin: auto;
    cursor: pointer;
    background-color: purple;
    color: white;
    font-weight: bold;
    border-radius: 12px;
    border: none;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #ffa500;
      box-shadow: 0 0 10px rgba(255, 165, 0, 0.6);
      transform: scale(1.1);
    }
  }
`;
