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
import { useElementList } from "../../../Providers/ElemetProvider";
import { getEcomCat } from "../../../api/appApi";

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

function Section4({ feild = [] }) {
  // const data = useEcomCategory();
  const [categories, setCategories] = useState(arr);
  const { rerender, setRender } = useElementList();

  let noOItems = feild.find((item) => item.key === "Number Of Items")?.value;
  let borderRadius = feild.find((item) => item.key === "Border Radius")?.value;

  console.log("grid", categories);

  useEffect(() => {
    fetch()
  }, [rerender]);

  const fetch = async () => {
    let result = await getEcomCat();
    if(result && result.status && result.data?.length>0){
      setCategories(result.data)
    }
  };

  // const [totalElement,setTotalAmount] = useState( coloumn*rows)
  // console.log("tot",totalElement);

  return (
    <div
      className={style.categoryareab}
      style={{ marginTop: 10, marginBottom: 10 }}
    >
      <div
        className="container-fluid"
        style={{ paddingTop: "10px", paddingBottom: "10px" }}
      >
        <div className="row">
          {categories.map((item, index) => {
            if (index + 1 <= noOItems) {
              return (
                <div className="col-3 mb-2" key={index}>
                  <div
                    className={style.li_menu}
                    style={{ borderRadius: `${borderRadius}%` }}
                  >
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
      </div>
    </div>
  );
}

export default Section4;
