import React, { createContext, useContext, useState, useEffect } from "react";

const NewsContext = createContext();

export const useNewsRightSidearContext = () => {
  return useContext(NewsContext);
};

export const NewsSiderbarContext = ({ children }) => {
  const [component, setComponent] = useState("");

  const setRenderComponent = (component) => {
    setComponent(component);
  };
  return (
    <NewsContext.Provider
      value={{
        component,
        setRenderComponent,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
