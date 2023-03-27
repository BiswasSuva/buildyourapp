import React, { createContext, useContext, useState, useEffect } from "react";

const PodcastContext = createContext();

export const usePodcastRightSidebarContext = () => {
  return useContext(PodcastContext);
};

export const PodcastSidebarContext = ({ children }) => {
  const [component, setComponent] = useState("");

  const setRenderComponent = (component) => {
    setComponent(component);
  };
  return (
    <PodcastContext.Provider
      value={{
        component,
        setRenderComponent,
      }}
    >
      {children}
    </PodcastContext.Provider>
  );
};
