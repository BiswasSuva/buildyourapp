import React from "react";
import { Link } from "react-router-dom";
import useAllmodules from "../../customHooks/useAllmodules";

const sidebarContent = [
  {
    icon: "fa-solid fa-cloud-arrow-up",
    url: "/logo",
    name: "Logo",
  },
  {
    icon: "fa-solid fa-users",
    url: "/authpage",
    name: "Register",
  },

  
];

function LeftSidebar() {
  const modules = useAllmodules().filter(
    (item) => item.selectedStatus && item.moduleName != "Social"
  );
  console.log("module", modules);
  
  return (
    <section className="sidebar hide-scrollbar" id="mobile_sideBar">
      <ul className="sidebar_nav">
        {sidebarContent.map((item, index) => {
          return (
            <li className="sidebar__nav-item" key={index}>
              <Link to={item.url} className="sidebar__nav-link">
                <i className={item.icon}></i> {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      {/* <div /> */}
      <ul className="sidebar_nav">
        {modules.map((item, index) => {
          return (
            <li className="sidebar__nav-item" key={item._id}>
              <Link
                to={`${item.moduleName}/appearnce/${item?.moduleID?.themeID}/${item?.moduleID.moduleID}`}
                className="sidebar__nav-link"
              >
                {/* <img src={item.moduleImage} /> {item.moduleName} */}
                <i className="fa-solid fa-box"></i> {item.moduleName}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default LeftSidebar;
