import React, { useEffect, useState } from "react";
import Mobilescreen from "./Mobilescreen";
import Elements from "./Elements";
import Tutorial from "./Tutorial";
import DashboardUi from "../../Component/DasboardUi/DashboardUi";
import { reactLocalStorage } from "reactjs-localstorage";
// import "./widgets.css"
import blue from "../../images/blue.png"
import tomato from "../../images/tomato.png"
import green from "../../images/green.png"
import orange from "../../images/orange.png"
import Chart from 'react-apexcharts'
function Index() {
  const tutorial = reactLocalStorage.get("tutorial");
  const [modalShow, setModalShow] = useState(true);

  const modalCloseHandle = () => {
    reactLocalStorage.remove("tutorial")
    setModalShow(false)
  }


  const series = [
    {
      name: 'Build Your App',
      type: 'column',
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
    }
  ];

  const series1 = [
    44, 55, 13, 33
  ]

  const options1 = {
    chart: {
      width: 380,
      type: 'donut',
    },
    dataLabels: {
      enabled: false
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          show: false
        }
      }
    }],
    legend: {
      position: 'right',
      offsetY: 0,
      height: 230,
    }
  }



  const series2 = [
    70
  ]

  const options2 = {
    chart: {
      height: 350,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '70%',
        }
      },
    },
    // labels: ['Cricket'],
    legend: {
      position: 'right',
      offsetY: 0,
      height: 230,
    }
  }



  const name = [
    {
      name: 'Social Media',
      type: 'line',
      data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
    }
  ];


  const options = {
    chart: {
      height: 350,
      type: 'line',
    },
    stroke: {
      width: [0, 4]
    },
    title: {
      text: 'Byo'
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1]
    },
    labels: ['01 Jan 2023', '02 Jan 2023', '03 Jan 2023', '04 Jan 2023', '05 Jan 2023', '06 Jan 2023', '07 Jan 2023', '08 Jan 2023', '09 Jan 2023', '10 Jan 2023', '11 Jan 2023', '12 Jan 2023'],
    xaxis: {
      type: 'datetime'
    },
    yaxis: [{
      title: {
        text: 'Website Blog',
      },

    }, {
      opposite: true,
      title: {
        text: 'Social Media'
      }
    }]
  };
  return (
    <>
      <DashboardUi>
        {/* <div className="col-lg-3 col-xl-3 col-md-3 col-12">

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
        </div> */}
      </DashboardUi>

      <main id="sectionEnrollment" style={{ marginRight: "0", marginTop: "40px" }}>
        <div className="container-fluid">
          {/* <div className="row">
            <div className="col-6">
              <div className="cardlist">
                <div className="details">
                  <h2>Welcome, <span className="name">John</span></h2>
                  <p></p>
                </div>
                <div className="numbercard">
                  <h3></h3>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="cardlist">
                <div className="details">
                  <h2>Active</h2>
                  <p>Leads / Contacts</p>
                </div>
                <div className="numbercard">
                  <h3>325</h3>
                </div>
              </div>
            </div>
          </div> */}

          <div className="row mt-4">
            <div className="col-3 mb-4">
              <div className="smallcardlist">
                <div className="smalldetails">
                  <h6 style={{ color: "#3f51b5" }}>66,163k</h6>
                  <p>Total Leads</p>
                </div>
                <div className="numbercard">
                  <h3><i class="fa-solid fa-arrow-up-right-from-square" style={{ color: "#3f51b5" }}></i></h3>
                </div>
              </div>
              <div>
                <img src={blue} alt="" className="imagebg" style={{ maxWidth: "100%", height: "auto" }} />
              </div>
            </div>

            <div className="col-3 mb-4">
              <div className="smallcardlist">
                <div className="smalldetails">
                  <h6 style={{ color: "#e64a19" }}>3,409k</h6>
                  <p>Total Pending</p>
                </div>
                <div className="numbercard">
                  <h3><i class="fa-regular fa-circle-xmark" style={{ color: "#e64a19" }}></i></h3>
                </div>
              </div>
              <div>
                <img src={tomato} alt="" className="imagebg" style={{ maxWidth: "100%", height: "auto" }} />
              </div>
            </div>

            <div className="col-3 mb-4">
              <div className="smallcardlist">
                <div className="smalldetails">
                  <h6 style={{ color: "#4caf50" }}>5,355k</h6>
                  <p>Task Completed</p>
                </div>
                <div className="numbercard">
                  <h3><i class="fa-solid fa-arrow-up-right-from-square" style={{ color: "#4caf50" }}></i></h3>
                </div>
              </div>
              <div>
                <img src={green} alt="" className="imagebg" style={{ maxWidth: "100%", height: "auto" }} />
              </div>
            </div>

            <div className="col-3 mb-4">
              <div className="smallcardlist">
                <div className="smalldetails">
                  <h6 style={{ color: "#ffa000" }}>66,163k</h6>
                  <p>Total Leads</p>
                </div>
                <div className="numbercard">
                  <h3><i class="fa-solid fa-list-check" style={{ color: "#ffa000" }}></i></h3>

                </div>
              </div>
              <div>
                <img src={orange} alt="" className="imagebg" style={{ maxWidth: "100%", height: "auto" }} />
              </div>
            </div>

            <div className="col-3 mb-4">
              <div className="smallcardlist">
                <div className="smalldetails">
                  <h6 style={{ color: "#ffa000" }}>Welcome, <span className="name">John</span></h6>
                  <p>Number of Reports</p>
                </div>
                <div className="numbercard">
                  {/* <h3><i class="fa-solid fa-list-check" style={{ color: "#ffa000" }}></i></h3> */}
                  <h3>102</h3>
                </div>
              </div>
              <div>
                {/* <img src={orange} alt="" className="imagebg" style={{ maxWidth: "100%", height: "auto" }} /> */}
                <img src={green} alt="" className="imagebg" style={{ maxWidth: "100%", height: "auto" }} />
              </div>
            </div>

            <div className="col-3 mb-4">
              <div className="smallcardlist">
                <div className="smalldetails">
                  <h6 style={{ color: "#ffa000" }}>Active</h6>
                  <p>Leads / Contacts</p>
                </div>
                <div className="numbercard">
                  {/* <h3><i class="fa-solid fa-list-check" style={{ color: "#ffa000" }}></i></h3> */}
                  <h3>325</h3>
                </div>
              </div>
              <div>
                <img src={orange} alt="" className="imagebg" style={{ maxWidth: "100%", height: "auto" }} />
                <div className="numbercard">

                </div>
              </div>
            </div>
          </div>


          <div className="row mt-5 mb-5">
            <div className="col-4">

              <div className="chartbg">
                <div className="d-flex align-items-center justify-content-between">
                  <h5 className="charttitle">Revenue Analytics</h5>
                  <div className="float-right">
                    <select className="custom-select custom-select-sm">
                      <option>Apr</option>
                      <option value={1}>Mar</option>
                      <option value={2}>Feb</option>
                      <option value={3}>Jan</option>
                    </select>
                  </div>

                </div>

                <Chart options={options1} series={series1} type="donut" width="100%" />
              </div>

              <div className="chartbg" style={{ marginBottom: 0 }}>
                <div className="d-flex align-items-center justify-content-between">
                  <h5 className="charttitle">Earning Reports</h5>
                  <div className="float-right dropdown show">
                    <button
                      type="button"
                      className=" dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        Sales Report
                      </a>
                      <a className="dropdown-item" href="#">
                        Export Report
                      </a>
                      <a className="dropdown-item" href="#">
                        Profit
                      </a>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </div>
                  </div>
                </div>

                <Chart options={options2} series={series2} type="radialBar" width="100%" />
                <div className="text-center">
                  <p className="text-muted text-truncate mb-2">Weekly Earnings</p>
                  <h5>$2,523</h5>
                </div>

              </div>

            </div>
            <div className="col-8"  >
              <div className="chartbg" style={{ height: "100%" }}>
                <div className="d-flex align-items-center justify-content-between">
                  <h5 className="charttitle">Revenues YTD</h5>
                  <div role="group" className="mb-2 btn-group">
                    <button type="button" className="btn btn-light btn-sm">
                      Today
                    </button>
                    <button type="button" className="btn btn-light btn-sm active">
                      Weekly
                    </button>
                    <button type="button" className="btn btn-light btn-sm">
                      Monthly
                    </button>
                  </div>
                </div>
                <Chart options={options} type="bar" series={series} name={name} width="100%" />
              </div>

            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center" style={{background: "#fff", borderRadius: "10px 10px 0 0 ", padding: "2%"}}>
                <h4 className="card-title" style={{marginBottom: 0}}>Latest Transactions</h4>
                <div className="float-right dropdown show">
                  <button
                    type="button"
                    className=" dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Sales Report
                    </a>
                    <a className="dropdown-item" href="#">
                      Export Report
                    </a>
                    <a className="dropdown-item" href="#">
                      Profit
                    </a>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </div>
                </div>
              </div>
              <div className="chartbg" style={{borderRadius: "0 0 10px 10px", paddingTop: "0"}}>
                <div className="table-responsive">
                  <table className="table table-bordered custom-dashboardtable">
                    <thead>
                      {/* <tr className="bg-warning"> */}
                      <tr className="">
                        <th>Order</th>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Product Code</th>
                        <th>Vendor</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* <tr className="bg-danger"> */}
                      <tr >
                        <td>3091</td>
                        <td>Arch</td>
                        <td>1</td>
                        <td>1105</td>
                        <td>Imptus</td>

                      </tr>
                      {/* <tr className="table-primary"> */}
                      <tr >
                        <td>3091</td>
                        <td>Arch</td>
                        <td>1</td>
                        <td>1105</td>
                        <td>Imptus</td>
                      </tr>
                      {/* <tr className="table-success"> */}
                      <tr>
                        <td>3091</td>
                        <td>Arch</td>
                        <td>1</td>
                        <td>1105</td>
                        <td>Imptus</td>
                      </tr>
                      {/* <tr className="table-danger"> */}
                      <tr>
                        <td>3091</td>
                        <td>Arch</td>
                        <td>1</td>
                        <td>1105</td>
                        <td>Imptus</td>
                      </tr>
                      {/* <tr className="table-info"> */}
                      <tr >
                        <td>3091</td>
                        <td>Arch</td>
                        <td>1</td>
                        <td>1105</td>
                        <td>Imptus</td>
                      </tr>
                      {/* <tr className="table-warning"> */}
                      <tr>
                        <td>3091</td>
                        <td>Arch</td>
                        <td>1</td>
                        <td>1105</td>
                        <td>Imptus</td>
                      </tr>

                      {/* <tr className="bg-success"> */}
                      <tr>
                        <td>3091</td>
                        <td>Arch</td>
                        <td>1</td>
                        <td>1105</td>
                        <td>Imptus</td>
                      </tr>
                      {/* <tr className="table-secondary"> */}
                      <tr >
                        <td>3091</td>
                        <td>Arch</td>
                        <td>1</td>
                        <td>1105</td>
                        <td>Imptus</td>
                      </tr>
                      {/* <tr className="table-light"> */}
                      <tr >
                        <td>3091</td>
                        <td>Arch</td>
                        <td>1</td>
                        <td>1105</td>
                        <td>Imptus</td>
                      </tr>
                      {/* <tr className="table-dark text-dark"> */}
                      <tr>
                        <td>3091</td>
                        <td>Arch</td>
                        <td>1</td>
                        <td>1105</td>
                        <td>Imptus</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      {tutorial && modalShow && (
        <Tutorial onClose={modalCloseHandle}></Tutorial>
      )}
    </>
  );
}

export default Index;
