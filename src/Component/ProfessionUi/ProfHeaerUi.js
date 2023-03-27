import React from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import { useDispatch } from "react-redux";
import { fetchuser } from "../../redux/reducers/User";
import { useNavigate } from "react-router-dom";
import Professionslider from './Professionslider'
import Shape1 from "../../images/icon/shape1.png"
import Shape6 from "../../images/icon/shape6.png"
import Shape2 from "../../images/icon/shape2.png"
import Shape3 from "../../images/icon/shape3.png"
import Shape9 from "../../images/icon/shape9.svg"
import Shape8 from "../../images/icon/shape8.svg"
import Shape7 from "../../images/icon/shape7.webp"
import Shape10 from "../../images/icon/shape10.webp"
function ProfHeaerUi({ children, header = "", paragraph = "" }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const redirectToHome = ()=>{
    reactLocalStorage.remove("token")
    dispatch(fetchuser())
    setTimeout(()=>{
      navigate("/")

    },2000)
    
  }
  return (
    <section id="professional">
      <div className="shape1"><img src={Shape1} alt="Shape1" className="img-fluid"/></div>
      <div className="shape2"><img src={Shape2} alt="Shape1" className="img-fluid"/></div>
      <div className="shape3"><img src={Shape3} alt="Shape1" className="img-fluid"/></div>
      <div className="shape6"><img src={Shape6} alt="Shape1" className="img-fluid"/></div>
      <div className="shape7"><img src={Shape7} alt="Shape1" className="img-fluid"/></div>
      <div className="shape8 rotateme"><img src={Shape8} alt="Shape1" className="img-fluid"/></div>
      <div className="shape9"><img src={Shape9} alt="Shape1" className="img-fluid"/></div>
      <div className="shape10"><img src={Shape10} alt="Shape1" className="img-fluid"/></div>
        <div className="container" style={{marginTop: "8%"}}>
          <div className="row">
            <div
              className="col-md-5 mb-xl-8 mb-0 aos-init aos-animate"
              data-aos="fade-up"
            >
              <h2>{header}</h2>
              <p>{paragraph}</p>
            </div>
            <div
              className="col-md-7 mb-xl-8 mb-0 aos-init aos-animate"
              data-aos="fade-up"
            >
              <button className='circleclose' onClick={redirectToHome}>
                <span className="line one"></span>
                <span className="line two"></span>
              </button>
            </div>
          </div>
          <div className="row aos-init aos-animate" data-aos="zoom-in">
           

            <div className="col-12">
            {children}
                {/* <Professionslider /> */}
            </div>
          </div>
        </div>
      
    </section>
  );
}

export default ProfHeaerUi;
