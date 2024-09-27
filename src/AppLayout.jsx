import styled from "styled-components";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <StyledApp>
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
