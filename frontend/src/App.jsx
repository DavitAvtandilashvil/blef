import { GlobalStyles } from "./globals";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import Register from "./pages/Register";

import CreateOrJoinGame from "./pages/CreateOrJoinGame";
import Game from "./pages/Game";

function App() {
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
