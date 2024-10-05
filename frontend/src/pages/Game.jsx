import { useParams } from "react-router-dom";
import styled from "styled-components";
import { FaRegUser } from "react-icons/fa";
import { useBluff } from "../context/BluffContext";
import UserModel from "../Models/UserModel";
function Game() {
  const { gameId } = useParams();
  const { gameData } = useBluff();
  const users = gameData.users;
  console.log(users);
  return (
    <StyledGame>
      <p>{gameId}</p>
      <button>start game</button>
      {users?.map((user, index) => {
        return <UserModel user={user} index={index} key={index} />;
      })}
    </StyledGame>
  );
}

export default Game;

const StyledGame = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const UserOne = styled.div`
  position: absolute;
  top: -110px;
  left: 280px;
`;
const UserTwo = styled.div`
  position: absolute;
  top: -110px;
  right: 280px;
`;
const UserThree = styled.div`
  position: absolute;
  top: 50%;
  right: -90px;
  transform: translateY(-50%);
`;
const UserFour = styled.div`
  position: absolute;
  bottom: -115px;
  right: 280px;
`;
const UserFive = styled.div`
  position: absolute;
  bottom: -115px;
  left: 280px;
`;

const UserSix = styled.div`
  position: absolute;
  top: 50%;
  left: -90px;
  transform: translateY(-50%);
`;
