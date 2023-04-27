import React, { createContext, useContext, useState, useEffect } from "react";

const LearningContext = createContext();

export const useLearningRightSidearContext = () => {
  return useContext(LearningContext);
};

export const LearningSiderbarContext = ({ children }) => {
  const [component, setComponent] = useState("");

  const setRenderComponent = (component) => {
    setComponent(component);
  };
  return (
    <LearningContext.Provider
      value={{
        component,
        setRenderComponent,
      }}
    >
      {children}
    </LearningContext.Provider>
  );
};
