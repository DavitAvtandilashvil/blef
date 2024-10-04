import styled from "styled-components";
import { Outlet, useNavigate } from "react-router-dom";
import { useBluff } from "./context/BluffContext";
import { useEffect } from "react";
import socket from "./Socket";

function AppLayout() {
  const { actions } = useBluff();
  const { setActions, setGameData } = useBluff();
  const navigate = useNavigate();

  useEffect(() => {
    const handleMessage = (msg) => {
      setActions((action) => [...action, msg.message]);
    };

    const handleClientJoin = (tableCode, username) => {
      navigate(`/game/${tableCode}`);
      setActions((actions) => [...actions, `${username} დაკავშირდა`]);
    };

    const handleAddUser = (data) => {
      setGameData(data);
    };
    const handleAddUserForMe = (data) => {
      setGameData(data);
    };

    socket.on("message_received", handleMessage);
    socket.on("clientJoin", handleClientJoin);
    socket.on("addUser", handleAddUser);
    socket.on("addUserForMe", handleAddUserForMe);

    return () => {
      socket.off("message_received", handleMessage);
      socket.off("clientJoin", handleClientJoin);
      socket.off("addUser", handleAddUser);
      socket.off("addUserForMe", handleAddUserForMe);
    };
  }, [navigate, setActions, setGameData]);
  return (
    <StyledApp>
      <TableInfo>
        {actions?.map((item, index) => {
          return (
            <p style={{ color: "red" }} key={index}>
              {item}
            </p>
          );
        })}
      </TableInfo>
      <Table>
        <Outlet />
      </Table>
    </StyledApp>
  );
}

export default AppLayout;

const StyledApp = styled.div`
  background: linear-gradient(120deg, #2c3e50, #3498db);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Table = styled.div`
  width: 60%;
  height: 500px;
  border-radius: 250px;
  background: linear-gradient(135deg, #4caf50, #81c784);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  transition: transform 0.3s ease;
`;

const TableInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 300px;
  height: 150px;
  border-radius: 10px;
  background-color: white;
  overflow-y: auto;
`;
