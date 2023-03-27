import React from "react";
import Icon from "../../../AllIcons/Icon";
import style from "./ecommerce.module.css";
function Section2({ feild = [] }) {
  let placeholder = feild.find((item) => item.key === "Search Placeholder");
  let Enableicon = feild.find((item) => item.key === "Enabled Search Icon");
  let SearchIcon = feild.find((item) => item.key === "Search Icon")?.value;

  return (
    <div className={style.searcharea}>
      <div className="container-fluid" style={{padding: "10px"}}>
        <div className={`form-group ${style.has23search}`}>
          {Enableicon?.value == "yes" &&
            (SearchIcon ==="none" ? (
              <span className={`fa fa-search ${style.formcontrolfeedback}`} />
            ) : (
              <Icon
                family={SearchIcon?.family}
                name={SearchIcon?.name}
                size="20px"
                className={style.formcontrolfeedback}
              />
            ))}
          <input
            type="text"
            className="form-control"
            placeholder={placeholder?.value}
          />
        </div>
      </div>
    </div>
  );
}

export default Section2;
