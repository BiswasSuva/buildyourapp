import React, { useEffect, useState } from "react";
import Mobilescreen from "./Mobilescreen";
import Elements from "./Elements";
import Tutorial from "./Tutorial";
import DashboardUi from "../../Component/DasboardUi/DashboardUi";
import { reactLocalStorage } from "reactjs-localstorage";
// import "./widgets.css"

function Index() {
  const tutorial = reactLocalStorage.get("tutorial");
  const [modalShow, setModalShow] = useState(true);

  const modalCloseHandle = () => {
    reactLocalStorage.remove("tutorial")
    setModalShow(false)
  }
  return (
    <>
      <DashboardUi>
        <div className="col-lg-3 col-xl-3 col-md-3 col-12">

          <div className='mainMobile'>
            <div className="iphone">
              <div className="screen" />

              <div className="notch" />
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-xl-8 col-md-8 col-12">
          <section className="text_mast">
            <div className="text-box">
              <h2 class="heading-primary">
                <span className="heading-primary-main">Welcome</span>
                <span className="heading-primary-sub">to the all new AI featured platform to</span>
                <span className="heading-primary-main">Build your own App</span>
              </h2>
            </div>
          </section>
        
          <Mobilescreen />
        </div>
      </DashboardUi>

      {tutorial && modalShow && (
        <Tutorial onClose={modalCloseHandle}></Tutorial>
      )}
    </>
  );
}

export default Index;
