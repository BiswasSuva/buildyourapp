import React from "react";

function DashboardUi({ children,style={} ,className="" }) {
  return (
    <main className={className} style={style}  id="sectionEnrollment">
      <div className="container-fluid">
        <div className="row">{children}</div>
      </div>
    </main>
  );
}

export default DashboardUi;
