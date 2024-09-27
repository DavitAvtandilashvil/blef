import { createContext, useContext } from "react";

const BluffContext = createContext();

// eslint-disable-next-line react/prop-types
export function BluffContextProvider({ childern }) {
  return <BluffContext.Provider value={{}}>{childern}</BluffContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useBluff() {
  const context = useContext(BluffContext);
  if (!context) throw new Error("Context ws used outside the box");
  return context;
}
