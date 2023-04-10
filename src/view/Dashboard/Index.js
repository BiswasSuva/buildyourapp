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
        <div className="col-lg-4 col-xl-4 col-md-4 col-12">
          {/* <Elements /> */}
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



          {/* <div class="container-fluid pt-5 mt-5 pb-5">
	
    <div class="row">
      <div class="col-xl-3 mb-50">
        <div class="bg-white box-shadow border-radius-10 height-100-p widget-style1">
          <div class="d-flex flex-wrap align-items-center">
            <div class="circle-icon">
              <div class="icon border-radius-100 font-24 text-blue"><i class="fa fa-user" aria-hidden="true"></i></div>
            </div>
            <div class="widget-data">
              <div class="weight-800 font-18">2020</div>
              <div class="weight-500">Contact</div>
            </div>
            <div class="progress-data">
              <div id="chart"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 mb-50">
        <div class="bg-white widget-style1 border-radius-10 height-100-p box-shadow">
          <div class="d-flex flex-wrap align-items-center">
            <div class="circle-icon">
              <div class="icon border-radius-100 font-24 text-blue"><i class="fa fa-handshake-o" aria-hidden="true"></i></div>
            </div>
            <div class="widget-data">
              <div class="weight-800 font-18">400</div>
              <div class="weight-500">Deals</div>
            </div>
            <div class="progress-data">
              <div id="chart2"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 mb-50">
        <div class="bg-white box-shadow border-radius-10 height-100-p widget-style1">
          <div class="d-flex flex-wrap align-items-center">
            <div class="circle-icon">
              <div class="icon border-radius-100 font-24 text-blue"><i class="fa fa-bullhorn" aria-hidden="true"></i></div>
            </div>
            <div class="widget-data">
              <div class="weight-800 font-18">350</div>
              <div class="weight-500">Campaign</div>
            </div>
            <div class="progress-data">
              <div id="chart3"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 mb-50">
        <div class="bg-white box-shadow border-radius-10 height-100-p widget-style1">
          <div class="d-flex flex-wrap align-items-center">
            <div class="circle-icon">
              <div class="icon border-radius-100 font-24 text-blue"><i class="fa fa-dollar" aria-hidden="true"></i></div>
            </div>
            <div class="widget-data">
              <div class="weight-800 font-18">$6060</div>
              <div class="weight-500">Worth</div>
            </div>
            <div class="progress-data">
              <div id="chart4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="row">
      <div class="col-xl-3 mb-50">
        <div class="bg-white box-shadow border-radius-10 height-100-p widget-style2">
          <div class="widget-data">
            <div class="weight-800 font-24">11,020</div>
            <div class="weight-500 font-18">Online Signups</div>
          </div>
          <div class="progress-data">
            <div id="chart5"></div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 mb-50">
        <div class="bg-white box-shadow border-radius-10 height-100-p widget-style2">
          <div class="widget-data">
            <div class="weight-800 font-24">5,000</div>
            <div class="weight-500 font-18">New Visitors Today</div>
          </div>
          <div class="progress-data">
            <div id="chart6"></div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 mb-50">
        <div class="bg-white box-shadow border-radius-10 height-100-p widget-style2">
          <div class="widget-data">
            <div class="weight-800 font-24">9,000</div>
            <div class="weight-500 font-18">Weekly Total Order</div>
          </div>
          <div class="progress-data pl-20 pr-20">
            <div id="chart7"></div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 mb-50">
        <div class="bg-white box-shadow border-radius-10 height-100-p widget-style2">
          <div class="widget-data">
            <div class="weight-800 font-24">$60,600</div>
            <div class="weight-500 font-18">Total Revenue This Year</div>
          </div>
          <div class="progress-data">
            <div id="chart8"></div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="row">
      <div class="col-xl-8 mb-50">
        <div class="bg-white box-shadow border-radius-10 height-100-p pd-20">
          <h2 class="font-weight-700 font-24 mb-20">Activity</h2>
          <div id="chart9"></div>
        </div>
      </div>
      <div class="col-xl-4 mb-50">
        <div class="bg-white box-shadow border-radius-10 height-100-p pd-20">
          <h2 class="font-weight-700 font-24 mb-20">Lead Target</h2>
          <div id="chart10"></div>
        </div>
      </div>
    </div>
    
    <div class="row">
      <div class="col-xl-3 mb-50">
        <div class="bg-white box-shadow border-radius-10 height-100-p widget-style3">
          <div class="d-flex flex-wrap align-items-center">
            <div class="widget-data">
              <div class="weight-500 font-20">Server</div>
              <div class="weight-500 font-30 text-dark">75%</div>
            </div>
            <div class="widget-icon">
              <div class="icon"><i class="fa fa-server" aria-hidden="true"></i></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 mb-50">
        <div class="bg-white box-shadow border-radius-10 height-100-p widget-style3">
          <div class="d-flex flex-wrap align-items-center">
            <div class="widget-data">
              <div class="weight-500 font-20">Traffic</div>
              <div class="weight-500 font-30 text-dark">55%</div>
            </div>
            <div class="widget-icon">
              <div class="icon"><i class="fa fa-line-chart" aria-hidden="true"></i></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 mb-50">
        <div class="bg-white box-shadow border-radius-10 height-100-p widget-style3">
          <div class="d-flex flex-wrap align-items-center">
            <div class="widget-data">
              <div class="weight-500 font-20">Email</div>
              <div class="weight-500 font-30 text-dark">100</div>
            </div>
            <div class="widget-icon">
              <div class="icon"><i class="fa fa-envelope-o" aria-hidden="true"></i></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 mb-50">
        <div class="bg-white box-shadow border-radius-10 height-100-p widget-style3">
          <div class="d-flex flex-wrap align-items-center">
            <div class="widget-data">
              <div class="weight-500 font-20">Domians</div>
              <div class="weight-500 font-30 text-dark">50</div>
            </div>
            <div class="widget-icon">
              <div class="icon"><i class="fa fa-globe" aria-hidden="true"></i></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="row">
      <div class="col-xl-3 mb-50">
        <div class="gradient-style1 text-white box-shadow border-radius-10 height-100-p widget-style3">
          <div class="d-flex flex-wrap align-items-center">
            <div class="widget-data">
              <div class="weight-400 font-20">Server</div>
              <div class="weight-300 font-30">75%</div>
            </div>
            <div class="widget-icon">
              <div class="icon"><i class="fa fa-server" aria-hidden="true"></i></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 mb-50">
        <div class="gradient-style2 text-white box-shadow border-radius-10 height-100-p widget-style3">
          <div class="d-flex flex-wrap align-items-center">
            <div class="widget-data">
              <div class="weight-400 font-20">Traffic</div>
              <div class="weight-300 font-30">55%</div>
            </div>
            <div class="widget-icon">
              <div class="icon"><i class="fa fa-line-chart" aria-hidden="true"></i></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 mb-50">
        <div class="gradient-style3 text-white box-shadow border-radius-10 height-100-p widget-style3">
          <div class="d-flex flex-wrap align-items-center">
            <div class="widget-data">
              <div class="weight-400 font-20">Email</div>
              <div class="weight-300 font-30">100</div>
            </div>
            <div class="widget-icon">
              <div class="icon"><i class="fa fa-envelope-o" aria-hidden="true"></i></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 mb-50">
        <div class="gradient-style4 text-white box-shadow border-radius-10 height-100-p widget-style3">
          <div class="d-flex flex-wrap align-items-center">
            <div class="widget-data">
              <div class="weight-400 font-20">Domians</div>
              <div class="weight-300 font-30">50</div>
            </div>
            <div class="widget-icon">
              <div class="icon"><i class="fa fa-globe" aria-hidden="true"></i></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="bg-white box-shadow border-radius-10 height-100-p pd-20">
          <h2 class="font-weight-700 font-24 mb-20">Bubble Charts</h2>
          <div id="chart11"></div>
        </div>
      </div>
    </div>
  </div> */}
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
