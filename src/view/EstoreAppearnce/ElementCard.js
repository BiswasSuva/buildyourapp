import React from "react";

function ElementCard({
  name = "Elementname",
  provided,
  onClone,
  onDelete,
  deleted = false,
  onReload,
  onClick
}) {
  return (
    <div
      ref={provided?.innerRef}
      {...provided?.draggableProps}
      {...provided?.dragHandleProps}
      className="app-modules-recommanded-top-box "
      onClick={onClick}
    >
      <div className="app-modules-recomanded-short-box">
        <div className="app-modules-recomanded-short-img-content">
          <i className="fa-solid fa-store">
            <span className="e-text"> {name}</span>
          </i>
        </div>
        {!deleted ? (
          <div className="app-modules-recomanded-short-img-content">
            <span
              style={{
                marginRight: "5px",
                cursor: "pointer",
                color: "#3e4e5c",
              }}
              onClick={onClone}
            >
              <i className="fa fa-clone" aria-hidden="clone" />
            </span>
            <span style={{color:"#3e4e5c"}} onClick={onDelete}>
              <i className="fa fa-trash" aria-hidden="true"></i>
            </span>
          </div>
        ) : (
          <div className="app-modules-recomanded-short-img-content">
            <span
              style={{
                marginRight: "5px",
                cursor: "pointer",
                color: "#3e4e5c",
              }}
              onClick={onReload}
            >
              <i className="fa fa-refresh" aria-hidden="clone" />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ElementCard;
