import { GlobalStyles } from "./globals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import Register from "./pages/Register";
import { useEffect } from "react";
import socket from "./Socket";

function App() {
  useEffect(() => {
    socket.on("message_received", (msg) => {
      console.log(msg);
    });
  }, []);

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />} path="/">
            <Route element={<Register />} path="/register" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
