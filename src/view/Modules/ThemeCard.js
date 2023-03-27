import React,{useState} from "react";
import Mobilescreen from "../Dashboard/Mainmobile";
import Slider from "react-slick";
import changethis from "../../images/changethis.png";
import bgapp from "../../images/bgapp.png"
var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
//   prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
//   nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
};

function ThemeCard({ themeData = null,selectTheme }) {
  console.log("jja",themeData)
  const [presentSlide, setPresentSlide] = useState(
    themeData.moduleID?.themeID
      ? themeData.theme.findIndex((item) => item._id == themeData.moduleID?.themeID)
      : 0
  );
  return (
    <div className="col-md-4  mb-3">
      <p>{themeData?.moduleName}</p>
      {/* <Mobilescreen> */}
        <div className="fullScreen">
          <Slider initialSlide={presentSlide} {...settings}
          afterChange={(curr) => {
            // setPersentImage(curr + 1);
            selectTheme(themeData.theme[curr], themeData._id);
          }}>
            {themeData?.theme.map((item) => {
              return <img src={item.screenImage} alt="" />;
              // return <img src={bgapp} alt="" />;
            })}
          </Slider>
        </div>
      {/* </Mobilescreen> */}
    </div>
  );
}

export default ThemeCard;
