import { GlobalStyles } from "./globals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import Register from "./pages/Register";
import { useEffect } from "react";
import socket from "./Socket";

function App() {
  useEffect(() => {
    console.log("efeqti");

    socket.on("message_received", (msg) => {
      console.log("movida frontze: ", msg);
    });
  }, []);

  [
    { name: "beqa", jeria: false },
    { name: "dato", jeria: false },
    { name: "gio", jeria: true },
  ];

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
