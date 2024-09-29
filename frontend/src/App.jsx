import { GlobalStyles } from "./globals";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import Register from "./pages/Register";
import { useEffect } from "react";
import socket from "./Socket";
import CreateOrJoinGame from "./pages/CreateOrJoinGame";
import Game from "./pages/Game";
import { useBluff } from "./context/BluffContext";

function App() {
  const { setActions } = useBluff();

  useEffect(() => {
    const handleMessage = (msg) => {
      setActions((action) => [...action, msg.message]);
    };
    socket.on("message_received", handleMessage);
    return () => {
      socket.off("message_received", handleMessage);
    };
  }, [setActions]);

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />} path="/">
            <Route element={<Navigate to="/register" />} path="/" />
            <Route element={<Register />} path="/register" />
            <Route element={<CreateOrJoinGame />} path="/preGame" />
            <Route element={<Game />} path="/game/:gameId" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
