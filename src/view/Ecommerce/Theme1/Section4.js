import React, { useEffect, useMemo, useState } from "react";
import style from "./ecommerce.module.css";
import menu from "../../../assets/images/ThemeImages/menu.png";
import girl from "../../../assets/images/ThemeImages/girl.png";
import Other from "../../../assets/images/ThemeImages/Other.png";
import watch from "../../../assets/images/ThemeImages/AllItems/watch.png";
import dress from "../../../assets/images/ThemeImages/AllItems/dress.png";
import pant from "../../../assets/images/ThemeImages/AllItems/pants.png";
import shirt from "../../../assets/images/ThemeImages/AllItems/shirt.png";
import top from "../../../assets/images/ThemeImages/AllItems/blouse.png";
import shoe from "../../../assets/images/ThemeImages/AllItems/running-shoe.png";
import decor from "../../../assets/images/ThemeImages/AllItems/decor.png";
import bag from "../../../assets/images/ThemeImages/AllItems/hand-bag.png";
import useEcomCategory from "../../../customHooks/useEcomCategory";

const arr = [
  {
    image: watch,
    name: "watch",
  },
  {
    image: dress,
    name: "dress",
  },
  {
    image: pant,
    name: "pant",
  },
  {
    image: shirt,
    name: "shirt",
  },
  {
    image: top,
    name: "top",
  },
  {
    image: shoe,
    name: "shoe",
  },
  {
    image: decor,
    name: "decor",
  },
  {
    image: bag,
    name: "bag",
  },
  
];

function Section4({fetch, feild = [] }) {
  const data = useEcomCategory(); 
  let noOItems = feild.find((item) => item.key === "Number of Items")?.value;
  let coloumn = feild.find((item) => item.key === "Number of Rows")?.value;
  let borderRadius = feild.find((item) => item.key === "Border Radius")?.value;

  console.log("grid", borderRadius);

// const [totalElement,setTotalAmount] = useState( coloumn*rows)
// console.log("tot",totalElement);
  let classObj = useMemo(() => {
    if (coloumn == 4) {
      return {
        className: "col-3 mb-2",
      };
    } else if (coloumn == 2) {
      return {
        className: "col-4 mb-2",
      };
    } else if (coloumn == 5) {
      return {
        className: "col-2 mb-2",
        style: { padding: "0 3px" },
      };
    } else {
      return {
        className: "col-3 mb-2",
      };
    }
  }, [coloumn]);



  return (
    <div
      className={style.categoryareab}
      style={{ marginTop: 10, marginBottom: 10 }}
    >
      <div className="container-fluid" style={{paddingTop: "10px", paddingBottom: "10px"}}>
        {data.length > 0 ? (
          <div className="row">
            {data.map((item,index) => {
               if(index+1<=noOItems) {
                return (
                  <div {...classObj} key={item._id}>
                    <div className={style.li_menu}  style={{borderRadius:`${borderRadius}%`}}>
                      <img
                        src={item.image}
                        className={`img-fluid ${style.gridImage}`}
                      />
                    </div>
                    <span className={style.allitems}>{item.name}</span>
                  </div>
                );
               }
              
            })}
          </div>
        ) : (
          <div className="row">
            {arr.map((item, index) => {
                return (
                  <div {...classObj} key={index}>
                    <div className={style.li_menu} style={{borderRadius:`${borderRadius}%`}}>
                      <img
                        src={item.image}
                        className={`img-fluid ${style.gridImage}`}
                      />
                    </div>
                    <span className={style.allitems}>{item.name}</span>
                  </div>
                );
             
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Section4;
