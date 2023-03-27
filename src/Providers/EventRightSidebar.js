import React, { createContext, useContext, useState, useEffect } from "react";

const EventContext = createContext();

export const useEventRightSidearContext = () => {
  return useContext(EventContext);
};

export const EventSiderbarContext = ({ children }) => {
  const [component, setComponent] = useState("");

  const setRenderComponent = (component) => {
    setComponent(component);
  };
  return (
    <EventContext.Provider
      value={{
        component,
        setRenderComponent,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
