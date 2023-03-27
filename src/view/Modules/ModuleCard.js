import React from "react";

function ModuleCard({ name = "name", homeIcon = false, icon = "",provided ,checked=false,onCheckChange}) {
  return (
    <div 
    ref={provided?.innerRef}
    {...provided?.draggableProps}
    {...provided?.dragHandleProps}
    className="app-modules-recomanded-short-box">
      <div className="app-modules-recomanded-short-img-content">
        <span>
          {/* <img src={icon} /> */}
          <i className="fa-solid fa-store"></i>
        </span>
        <span className="e-text"> {name}</span>
      </div>
      <div className="app-modules-recomanded-short-img-content">
        <span>
          <input
            type="checkbox"
            id="E-Store-1"
            name="E-Store-1"
            checked={checked}
            onChange={(val)=>onCheckChange(val.target.checked)}
          />
        </span>
        {homeIcon && (
          <span>
            <i className="fa fa-home" aria-hidden="true" />
            <span />
          </span>
        )}
      </div>
    </div>
  );
}

export default ModuleCard;
