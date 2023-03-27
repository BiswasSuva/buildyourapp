import React, { createContext, useContext, useState, useEffect } from "react";

const OttContext = createContext();

export const useOttRightSidearContext = () => {
  return useContext(OttContext);
};

export const OttSiderbarContext = ({ children }) => {
  const [component, setComponent] = useState("");

  const setRenderComponent = (component) => {
    setComponent(component);
  };
  return (
    <OttContext.Provider
      value={{
        component,
        setRenderComponent,
      }}
    >
      {children}
    </OttContext.Provider>
  );
};
