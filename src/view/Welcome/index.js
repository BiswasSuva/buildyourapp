import React, { useEffect, useState } from "react";
import Welcome from "../Welcome/Screen1";
import Welcome2 from "../Welcome/Screen2";
import Loader from "./Loader";
import FirstScreen from "./FirstScreen";
import { reactLocalStorage } from "reactjs-localstorage";
import { useDispatch ,useSelector} from "react-redux";
import { fetchuser,removeUserdata } from "../../redux/reducers/User";
import { useNavigate } from "react-router-dom";
import bg from "../../images/background_single.svg"
function Index() {
  const { loginStatus, loading } = useSelector((state) => state.User);

  const [currSlide, setCurrSlide] = useState(1);
  const [userName,setUserName] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      setCurrSlide(2);
      setTimeout(() => {
        setCurrSlide(3);
      }, 6000);
    }, 3000);
  }, []);

  const MovetoAnotherSlide = ()=>{
      setCurrSlide(4)
  }
  const cancel= ()=>{
    // console.log("logut",result.);
    reactLocalStorage.remove("token")
    dispatch(removeUserdata())
    navigate("/")
    // // setTimeout()
    // navigate("/")
    // if(!loginStatus){
    //   navigate("/")
    // }
          
  }
  return (
    <>
      <section id="custom-body" >
        <div style={{ backgroundImage: `url(${bg})` }}>
        <div className="closeButton">
          <div className="icon-cancel" onClick={cancel}></div>
        </div>

     {userName !="" && currSlide ==4 &&   <div className="profile">
          <p>Me</p>
        </div>}
        {currSlide == 1 && <Loader />}
        {currSlide == 1 && <Loader />}
        {currSlide == 2 && <FirstScreen />}
        {currSlide == 3 && <Welcome name={userName} setName={setUserName} MovetoAnotherSlide={MovetoAnotherSlide} />}
        {currSlide == 4 && <Welcome2 name={userName} />}
        </div>
      </section>
    </>
  );
}

export default Index;
