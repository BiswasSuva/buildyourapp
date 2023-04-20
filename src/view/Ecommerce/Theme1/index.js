import React, { Fragment } from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section3 from "./Section3";
import style from "./ecommerce.module.css";
import Notch from "./Notch";
function index({ fetch, elementList = [] }) {
  return (
    <div
      className={style.scrollProblm}
      style={{ height: "100%", width: "100%", borderRadius: "30px" }}
    >
      <div
        className={style.ecommerce_theme}
        style={{ background: "#F6F8FD", borderRadius: "30px" }}
      >
        {/* <Section1 /> */}
        {elementList.map((item, index) => {
          return (
            <div key={item._id}>
              {item.elementTypeName.title ===
                "E-Store Default Theme Header" && (
                <Section1 feild={item.elementTypeName.field} />
              )}
              {item.elementTypeName.title ===
                "E-Store Default Theme Search " && (
                <Section2 feild={item.elementTypeName.field}></Section2>
              )}
              {item.elementTypeName.title ===
                "E-Store Default Theme Banner" && (
                <Section3
                  feild={item.elementTypeName.field}
                  fetch={fetch}
                ></Section3>
              )}
              {item.elementTypeName.title === "E-Store Category List" && (
                <Section4
                  fetch={fetch}
                  feild={item.elementTypeName.field}
                ></Section4>
              )}
              {item.elementTypeName.title === "E-Store Product List " && (
                <Section5
                  fetch={fetch}
                  feild={item.elementTypeName.field}
                ></Section5>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default index;
