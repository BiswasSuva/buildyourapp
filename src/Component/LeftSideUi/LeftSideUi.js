import React from "react";

function LeftSideUi({ children }) {
  return (
    <>
      <section id="elements-section">
        <div className="container" style={{paddingRight: "0"}}>
          <div className="accordion_inner">{children}</div>
        </div>
      </section>
    </>
  );
}

export default LeftSideUi;
