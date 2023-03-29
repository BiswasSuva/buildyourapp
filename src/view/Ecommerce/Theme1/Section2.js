import React from "react";
import Icon from "../../../AllIcons/Icon";
import style from "./ecommerce.module.css";
function Section2({ feild = [] }) {
  let placeholder = feild.find((item) => item.key === "Search Placeholder");
  let placeholderFontSize = feild.find((item) => item.key === "Search Text Font Size")?.value;
  let placeholderFontColor = feild.find((item) => item.key === "Search Text Font Color")?.value;
  let placeholderBorderRadius = feild.find((item) => item.key === "Search Border Radius")?.value;



  let Enableicon = feild.find((item) => item.key === "Search Icon Show")?.value;
  let SearchIcon = feild.find((item) => item.key === "Search Icon")?.value;

  console.log("searchicons", Enableicon);

  return (
    <div className={style.searcharea}>
      <div className="container-fluid" style={{ padding: "10px" }}>
        <div className={`form-group ${style.has23search}`}>
          {Enableicon !== "none" && Enableicon !== undefined ? (
            Enableicon == "left" ? (
              <span className={`fa fa-search ${style.formcontrolfeedback}`} style={{left:"5px"}} />
            ) : Enableicon == "right" ? (
              <span className={`fa fa-search ${style.formcontrolfeedback}`} />
            ) : (
              ""
            )
          ) : (
            ""
          )}

          {/* <span className={`fa fa-search ${style.formcontrolfeedback}`} /> */}
          {/* {Enableicon !== "none" && Enableicon !==undefined &&
            (SearchIcon ==="none" ? (
              <span className={`fa fa-search ${style.formcontrolfeedback}`} />
            ) : (
              ""
              // <Icon
              //   family={SearchIcon?.family}
              //   name={SearchIcon?.name}
              //   size="20px"
              //   className={style.formcontrolfeedback}
              // />
            ))} */}
          <input
            type="text"
            className="form-control"
            placeholder={placeholder?.value}
            style={{fontSize:placeholderFontSize,color:placeholderFontColor,borderRadius:placeholderBorderRadius}}
          />
        </div>
      </div>
    </div>
  );
}

export default Section2;
