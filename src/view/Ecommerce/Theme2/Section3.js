import React, {useState, useEffect } from "react";
import Slider from "react-slick";
import Vest from "../../../assets/images/ThemeImages/Vest.png";
import style from "./ecommerce.module.css";
import watch from "../../../assets/images/ThemeImages/AllItems/watch.png";
import dress from "../../../assets/images/ThemeImages/AllItems/dress.png";
import pant from "../../../assets/images/ThemeImages/AllItems/pants.png";
import shirt from "../../../assets/images/ThemeImages/AllItems/shirt.png";
import top from "../../../assets/images/ThemeImages/AllItems/blouse.png";
import shoe from "../../../assets/images/ThemeImages/AllItems/running-shoe.png";
import decor from "../../../assets/images/ThemeImages/AllItems/decor.png";
import bag from "../../../assets/images/ThemeImages/AllItems/hand-bag.png";
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

function Section3({ feild = [] }) {
  const [categories, setCategories] = useState(arr);
  const { rerender, setRender } = useElementList();

  let noOItems = feild.find((item) => item.key === "Number Of Items")?.value;
  let borderRadius = feild.find((item) => item.key === "Border Radius")?.value;
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1164,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  useEffect(() => {
    fetch();
  }, [rerender]);

  const fetch = async () => {
    let result = await getEcomCat();
    if (result && result.status && result.data?.length > 0) {
      setCategories(result.data);
    } else {
      setCategories(arr);
    }
  };
  return (
    <div className={style.categorysliding}>
      <div className="container-fluid">
        <div className={style.fullslider}>
          <Slider {...settings}>
            {categories.map((item, i) => {
              return (
                <div className={style.slideritemwrap}>
                  <button className="mr-3">
                    <img
                      key={i}
                      src={item.image}
                      className="img-fluid"
                      alt=""
                    />
                    {item.name}
                  </button>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Section3;
