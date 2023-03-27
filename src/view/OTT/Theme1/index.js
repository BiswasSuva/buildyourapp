import React from "react";
import style from "./ott.module.css";
import OttHeader from "./OttHeader";
import Todaytopmovie from "./Todaytopmovie";
import MostPopular from "./MostPopular";
import Moviecard from "./Moviecard";

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
        {elementList.map((item, index) => {
          return (
            <div key={item._id}>
              {item.elementTypeName.title === "OTT Light Theme Header" && (
                <OttHeader feild={item.elementTypeName.field} />
              )}
              {item.elementTypeName.title === "Light Theme Category Banner" && (
                <>
                  <Todaytopmovie
                    feild={item.elementTypeName.field}
                  ></Todaytopmovie>
                  <Moviecard></Moviecard>
                </>
              )}
              {item.elementTypeName.title === "OTT Videos List" && (
                <MostPopular
                  fetch={fetch}
                  feild={item.elementTypeName.field}
                ></MostPopular>
              )}
            </div>
          );
        })}
        {/* <OttHeader  />
      <Todaytopmovie />
      <Moviecard />
      <MostPopular /> */}
      </div>
    </div>
  );
}

export default index;
