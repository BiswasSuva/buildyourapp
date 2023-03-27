import React, { useState } from "react";

function useComponentRender(Component) {
  const [comp, setComp] = useState(Component);

  const setComponent = (component) => {
    setComp(component);
  };
  return { comp, setComponent };
}

export default useComponentRender;
