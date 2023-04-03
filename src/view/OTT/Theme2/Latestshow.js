import React, { useState, useEffect } from "react";
import style from "./ott2.module.css";
import trending1 from "../../../images/trending1.png";
import trending2 from "../../../images/trending2.png";
import trending3 from "../../../images/trending3.png";
import trending4 from "../../../images/trending4.png";
import { useElementList } from "../../../Providers/ElemetProvider";
import { getOttGenre } from "../../../api/appApi";
import Slider from "react-slick";

let arr = [
  {
    name: "Action",
  },
  {
    name: "Drama",
  },
  {
    name: "Adventure",
  },
  {
    name: "Comedy",
  },
  {
    name: "Mystery",
  },
];
function Latestshow({ feild = [] }) {
  const heading = feild.find((item) => item.key === "Heading")?.value;
  const headingSize = feild.find(
    (item) => item.key === "Heading Font Size"
  )?.value;
  const headingColor = feild.find(
    (item) => item.key === "Heading Font Color"
  )?.value;
  const titleColor = feild.find((item) => item.key === "Title Color")?.value;
  const titleSize = feild.find((item) => item.key === "Title Size")?.value;
  const { rerender, setRender } = useElementList();
  const [ottGenre, setOttGenre] = useState(arr);

  let Heading = feild.find((item) => item.key === "Heading")?.value;
  let color = feild.find((item) => item.key === "Active Color")?.value;

  useEffect(() => {
    fetchGenre();
  }, [rerender]);

  const fetchGenre = async () => {
    let result = await getOttGenre();
    if (result && result.status && result.data.length > 0) {
      setOttGenre(result.data);
    } else {
      setOttGenre(arr);
    }
  };

  var settings = {
    dots: false,
    infinite: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    rtl: true,
    slide: "",
    cssEase: "linear",
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 3,
  };

  var settingsbtn = {
    dots: false,
    infinite: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: true,
    slide: "",
    cssEase: "linear",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
  };

  return (
    <div className={style.latestshow}>
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-8">
            <h1
              className={style.trendingtitle}
              style={{ color: headingColor, fontSize: headingSize }}
            >
              {heading}
            </h1>
          </div>
          <div className="col-4 text-right">
            <p className={style.seeall}>Show All</p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className={style.latestbtn}>
          <Slider {...settingsbtn}>
            <div className={style.btnitems}>
              <button>All</button>
            </div>
            {ottGenre.map((item,i) => {
              return (
                <div className={style.btnitems} key={i}>
                  <button>{item.name}</button>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="container-fluid" style={{ paddingRight: 0 }}>
        <div className={style.trendingslider}>
          <Slider {...settings}>
            <div className={style.trendingslideritem}>
              <img src={trending1} alt="Trending" className="img-fluid" />
              <p style={{ fontSize: titleSize, color: titleColor }}>Danger</p>
            </div>
            <div className={style.trendingslideritem}>
              <img src={trending2} alt="Trending" className="img-fluid" />
              <p style={{ fontSize: titleSize, color: titleColor }}>Danger</p>
            </div>
            <div className={style.trendingslideritem}>
              <img src={trending3} alt="Trending" className="img-fluid" />
              <p style={{ fontSize: titleSize, color: titleColor }}>Danger</p>
            </div>
            <div className={style.trendingslideritem}>
              <img src={trending4} alt="Trending" className="img-fluid" />
              <p style={{ fontSize: titleSize, color: titleColor }}>Danger</p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Latestshow;
