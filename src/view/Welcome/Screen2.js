import { delay } from "q";
import React, { useEffect, useMemo, useState } from "react";
import Logo from "../../images/Logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchuser } from "../../redux/reducers/User";
import { updateUserDetail } from "../../api/authapi";

let placeholderText = [
  "I want to have a social media app that lets users chat online, post status updates and earn rewards when they invite friends",
  "I want to make a Covid-19 tracking app to keep staff in my organisation safe; manage tests and vaccine information, health checks and push notifications.",
  "I want to build an e-learning web app for students and teachers with online lectures, interactive lessons and direct messaging."
];

function Screen2({name}) {
  let inter;
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [index, setIndex] = useState(0);
  const [parentIndex, setParentIndex] = useState(0);
  const [desc,setDesc] = useState("")

  useEffect(() => {
    // console.log("my name");
   
  inter= setInterval(timer, 100);

    return () => {
      clearInterval(inter);
    };
  }, []);

  const timer = () => {
    if(placeholderText.length>0){
      setIndex((prevIndex) => {
        if (prevIndex === placeholderText[parentIndex].length - 1) {
          setParentIndex((prevIndex) => {
            if (prevIndex === placeholderText.length - 1) {
              return 0;
            } else {
              return prevIndex + 1;
            }
          });
          return 0;
        }
        return prevIndex + 1;
      });
    }
   
  };

  // console.log(index);

  const moveTo = async()=>{
    let data = {
      nextURL:"/profession"
    }
    let result = await updateUserDetail(data)
    // console.log("pro",result);
    if(result && result.status){
      // dispatch(fetchuser())
      navigate("/profession")
    }
      // dispatch(fetchuser())
      // setTimeout(()=>{
      //   navigate("/")

      // },2000)
  }

  return (
    <section id="welcomeBox">
      <div className="container" style={{ position: "relative" }}>
        <div className="row">
          <div className="col-lg-4 col-md-5 col-xl-4 col-sm-6 col-xs-12">
            <div className="phone-wrap">
              <div className="phone">
                <img
                  src={Logo}
                  alt="Logo"
                  className="img-fluid"
                  style={{ maxWidth: "70PX" }}
                />
                <div className="room-name">Build Your Own App With Easy Steps</div>

                <div className="switcher">
                  <span className="switch"></span>
                </div>
                <div className="menu">
                  <ul>
                    <li>E-Store</li>
                    <li>Events</li>
                    <li>Courses</li>
                    <li>Podcast</li>
                    <li>News</li>
                  </ul>
                </div>
                <div className="back"></div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-8 col-md-7 col-xl-8 col-sm-6 col-xs-12"
            style={{ position: "relative" }}
          >
            <div className="inputFieldBox">
              <div className="headingAmimation">
                <div className="animateThis">
                  Hey <span className=""> {name}</span>!
                </div>
                <div className="animateThis customeAnimate">
                  What are you trying to build?
                </div>
              </div>
              <div className="inputArea">
                <textarea
                  className="form-control rounded-0 main-search text_1"
                  id="search"
                  rows={3}
                  placeholder={placeholderText.length>0? `${placeholderText[parentIndex]?.slice(
                    0,
                    index
                  )}|`:""}

                  value={desc}
                  onChange={(val)=>setDesc(val.target.value)}
                  onFocus={(e)=>{
                    // console.log(e);
                    placeholderText=[]
                    clearInterval(inter)
                    if(desc ==""){
                      setDesc("I want to build")

                    }

                  }}
                  // onKeyDown={(e)=>{
                  //   // console.log("down",e)
                  //   if(e.keyCode==13){
                  //     e.preventDefault();

                  //   }

                  // }}
                  onKeyPress={(e)=>{
                    if(e.key==="Enter"){
                      moveTo()
                      e.preventDefault()
                    }
                    }}
                />
                <div className="noteText">Press Enter to submit</div>
                {/* <input
                  type="text"
                  className="main-search input-lg"
                  placeholder="What are you looking for? "
                  name="srch-term"
                  id="srch-term"
                /> */}

                <div className="suggestionChips">
                  <button type="button" style={{cursor:"pointer"}} onClick={()=>setDesc("I want to make")}>I want to make…</button>
                  <button type="button" style={{cursor:"pointer"}} onClick={()=>setDesc("I want to build")}>I want to build…</button>
                  <button type="button" style={{cursor:"pointer"}} onClick={()=>setDesc("I want to have")}>I want to have…</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <></>
    </section>
  );
}

export default Screen2;
