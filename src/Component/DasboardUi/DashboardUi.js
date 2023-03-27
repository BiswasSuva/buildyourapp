import React from "react";

function DashboardUi({ children }) {
  return (
    <main id="sectionEnrollment">
      <div className="container-fluid">
        <div className="row">{children}</div>
      </div>
    </main>
  );
}

export default DashboardUi;
