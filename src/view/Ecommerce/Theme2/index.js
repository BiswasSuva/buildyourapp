import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import style from "./ecommerce.module.css";
import Mainmobile from "../../Dashboard/Mainmobile";
function index({ fetch, elementList = [] }) {
  return (
    <div
      className={style.scrollProblm}
      style={{ height: "100%", width: "100%", borderRadius: "30px" }}
    >
      <div
        className={style.ecommercenewtheme}
        style={{ background: "#656565", height: "100vh" }}
      >
        {/* <Section1></Section1>
        <div className={style.bgcss}>
          <Section2></Section2>
          <Section3></Section3>
          <Section4></Section4>
          <Section5></Section5>
          <Section6></Section6>
        </div> */}

        {elementList.map((item, index) => {
          return (
            <div key={item._id}>
              {item.elementTypeName.title === "E-Store Black Header" && (
                <Section1 feild={item.elementTypeName.field} />
              )}
            </div>
          );
        })}
        <div className={style.bgcss}>
          {elementList.map((item, index) => {
            return (
              <div key={item._id}>
                {item.elementTypeName.title === "Default Theme Banner" && (
                  <Section2 feild={item.elementTypeName.field}></Section2>
                )}
                {item.elementTypeName.title === "Default Theme Categories" && (
                  <Section3></Section3>
                )}
                {item.elementTypeName.title === "Default Theme Product List" && (
                  <Section4
                    fetch={fetch}
                    feild={item.elementTypeName.field}
                  ></Section4>
                )}
                {/* {item.elementTypeName.title === "Product List" && (
                <Section5 fetch={fetch} feild={item.elementTypeName.field} ></Section5>
              )} */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default index;
