import React from "react";

function ModuleWrapper({
  children,
  wrapperName = "Recommended modules for you",
  provided,
}) {
  return (
    <div
      {...provided?.droppableProps}
      ref={provided?.innerRef}
      className="app-modules-recommanded-top-box"
    >
      <p>{wrapperName}</p>
      {children}
    </div>
  );
}

export default ModuleWrapper;
