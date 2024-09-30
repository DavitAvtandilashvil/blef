import styled from "styled-components";
import { useBluff } from "../context/BluffContext";
import { useNavigate } from "react-router-dom";
import bluffLogo from "/images/bleffLogo.png";

function Register() {
  const navigate = useNavigate();

  const { username, setUsername } = useBluff();

  const handleEnter = () => {
    if (username.length === 0) return;
    navigate("/preGame");
  };

  return (
    <StyledRegister>
      <RegisterDiv>
        <img src={bluffLogo} alt="" />
        <div>
          <p>ჩაწერეთ სახელი:</p>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <button onClick={() => handleEnter(username)}>შესვლა</button>
      </RegisterDiv>
    </StyledRegister>
  );
}

export default Register;

const StyledRegister = styled.div`
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

const RegisterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);

  & > img {
    width: 240px;
    height: 240px;
    border-radius: 20px;
    object-fit: cover;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  & > div {
    display: flex;
    gap: 30px;
    margin-top: 40px;
  }

  & > div > p {
    color: #333333;
    font-weight: 500;
  }

  & > div > input {
    border-radius: 10px;
    padding-left: 20px;
    padding-right: 20px;
    border: 1px solid #ccc;
    background-color: #f9f9f9;
    transition: background-color 0.2s ease-in-out;

    &:focus {
      background-color: #eef5ff;
    }
  }

  & > button {
    width: 100px;
    height: 45px;
    cursor: pointer;
    margin-top: 30px;
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
