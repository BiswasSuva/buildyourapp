import React from "react";

function DashboardUi({ children,style={marginRight: "0"} ,className="" }) {
  return (
    <main className={className} style={style}  id="sectionEnrollment">
      <div className="container-fluid">
        <div className="row" style={{justifyContent:"center"}}>{children}</div>
      </div>
    </main>
  );
}

export default DashboardUi;
