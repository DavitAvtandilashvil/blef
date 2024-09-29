import { useParams } from "react-router-dom";
import styled from "styled-components";

function Game() {
  const { gameId } = useParams();
  return (
    <StyledGame>
      <p>{gameId}</p>
      <button>start game</button>
    </StyledGame>
  );
}

export default Game;

const StyledGame = styled.div``;
