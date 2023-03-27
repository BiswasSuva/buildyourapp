import React, { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

export const useEstoreRightSidearContext = () => {
  return useContext(Context);
};

export const EcomSiderbarContext = ({ children }) => {
  const [component, setComponent] = useState("");

  const setRenderComponent = (component) => {
    setComponent(component);
  };
  return (
    <Context.Provider
      value={{
        component,
        setRenderComponent,
      }}
    >
      {children}
    </Context.Provider>
  );
};
