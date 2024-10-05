import { FaRegUser } from "react-icons/fa";
import styled from "styled-components";

function UserModel({ user, index }) {
  return (
    <StyledUserModel index={index}>
      <FaRegUser style={{ width: "55px", height: "55px" }} />
      <p>{user.username}</p>
    </StyledUserModel>
  );
}

const StyledUserModel = styled.div`
  position: absolute;
  top: ${(props) => (props.index === 0 || props.index === 1) && "-110px"};
  top: ${(props) => (props.index === 2 || props.index === 5) && "50%"};
  left: ${(props) => props.index === 0 && "280px"};
  right: ${(props) => props.index === 1 && "280px"};
  right: ${(props) => props.index === 2 && "-90px"};
  right: ${(props) => props.index === 3 && "280px"};
  left: ${(props) => props.index === 4 && "280px"};
  left: ${(props) => props.index === 5 && "-90px"};

  ${(props) =>
    (props.index === 2 || props.index === 5) && "transform:translateY(-50%)"};
  bottom: ${(props) => (props.index === 3 || props.index === 4) && "-115px"};
`;

export default UserModel;
