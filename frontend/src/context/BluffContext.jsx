import { createContext, useContext, useState } from "react";

const BluffContext = createContext();

// eslint-disable-next-line react/prop-types
export function BluffContextProvider({ children }) {
  const [actions, setActions] = useState([]);
  const [tableCode, setTableCode] = useState("");
  const [username, setUsername] = useState("");
  return (
    <BluffContext.Provider
      value={{
        actions,
        setActions,
        tableCode,
        setTableCode,
        username,
        setUsername,
      }}
    >
      {children}
    </BluffContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useBluff() {
  const context = useContext(BluffContext);
  if (!context) throw new Error("Context ws used outside the box");
  return context;
}
