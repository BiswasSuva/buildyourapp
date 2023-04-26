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
import card1 from "../../images/card1.jpg"
import card2 from "../../images/card2.jpg"
import card3 from "../../images/card3.jpg"
import card4 from "../../images/card4.jpg"
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
          <div className="row">
            <div className="col-12">
              <h2 className="dashboard-head">Dashboard</h2>

            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-sm-6 m-t35">
              <div className="card card-coin">
                <div className="card-body text-center">
                  <svg
                    className="mb-3 currency-icon"
                    width={80}
                    height={80}
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx={40} cy={40} r={40} fill="white" />
                    <path
                      d="M40.725 0.00669178C18.6241 -0.393325 0.406678 17.1907 0.00666126 39.275C-0.393355 61.3592 17.1907 79.5933 39.2749 79.9933C61.3592 80.3933 79.5933 62.8093 79.9933 40.7084C80.3933 18.6241 62.8092 0.390041 40.725 0.00669178ZM39.4083 72.493C21.4909 72.1597 7.17362 57.3257 7.50697 39.4083C7.82365 21.4909 22.6576 7.17365 40.575 7.49033C58.5091 7.82368 72.8096 22.6576 72.493 40.575C72.1763 58.4924 57.3257 72.8097 39.4083 72.493Z"
                      fill="#00ADA3"
                    />
                    <path
                      d="M40.5283 10.8305C24.4443 10.5471 11.1271 23.3976 10.8438 39.4816C10.5438 55.549 23.3943 68.8662 39.4783 69.1662C55.5623 69.4495 68.8795 56.599 69.1628 40.5317C69.4462 24.4477 56.6123 11.1305 40.5283 10.8305ZM40.0033 19.1441L49.272 35.6798L40.8133 30.973C40.3083 30.693 39.6966 30.693 39.1916 30.973L30.7329 35.6798L40.0033 19.1441ZM40.0033 60.8509L30.7329 44.3152L39.1916 49.022C39.4433 49.162 39.7233 49.232 40.0016 49.232C40.28 49.232 40.56 49.162 40.8117 49.022L49.2703 44.3152L40.0033 60.8509ZM40.0033 45.6569L29.8296 39.9967L40.0033 34.3364L50.1754 39.9967L40.0033 45.6569Z"
                      fill="#00ADA3"
                    />
                  </svg>
                  <h2 className="text-black mb-2 font-w600">$168,331.09</h2>
                  <p className="mb-0 fs-14">
                    <svg
                      width={29}
                      height={22}
                      viewBox="0 0 29 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d1)">
                        <path
                          d="M5 16C5.91797 14.9157 8.89728 11.7277 10.5 10L16.5 13L23.5 4"
                          stroke="#2BC155"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d1"
                          x="-3.05176e-05"
                          y="-6.10352e-05"
                          width="28.5001"
                          height="22.0001"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood floodOpacity={0} result="BackgroundImageFix" />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          />
                          <feOffset dy={1} />
                          <feGaussianBlur stdDeviation={2} />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.172549 0 0 0 0 0.72549 0 0 0 0 0.337255 0 0 0 0.61 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                    <span className="text-success me-1">45%</span>This week
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 m-t35">
              <div className="card card-coin">
                <div className="card-body text-center">
                  <svg
                    className="mb-3 currency-icon"
                    width={80}
                    height={80}
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx={40} cy={40} r={40} fill="white" />
                    <path
                      d="M40 0C17.9083 0 0 17.9083 0 40C0 62.0917 17.9083 80 40 80C62.0917 80 80 62.0917 80 40C80 17.9083 62.0917 0 40 0ZM40 72.5C22.0783 72.5 7.5 57.92 7.5 40C7.5 22.08 22.0783 7.5 40 7.5C57.9217 7.5 72.5 22.0783 72.5 40C72.5 57.9217 57.92 72.5 40 72.5Z"
                      fill="#FFAB2D"
                    />
                    <path
                      d="M42.065 41.2983H36.8133V49.1H42.065C43.125 49.1 44.1083 48.67 44.7983 47.9483C45.52 47.2566 45.95 46.275 45.95 45.1833C45.9517 43.0483 44.2 41.2983 42.065 41.2983Z"
                      fill="#FFAB2D"
                    />
                    <path
                      d="M40 10.8333C23.9167 10.8333 10.8333 23.9166 10.8333 40C10.8333 56.0833 23.9167 69.1666 40 69.1666C56.0833 69.1666 69.1667 56.0816 69.1667 40C69.1667 23.9183 56.0817 10.8333 40 10.8333ZM45.935 53.5066H42.495V58.9133H38.8867V53.5066H36.905V58.9133H33.28V53.5066H26.9067V50.1133H30.4233V29.7799H26.9067V26.3866H33.28V21.0883H36.905V26.3866H38.8867V21.0883H42.495V26.3866H45.6283C47.3783 26.3866 48.9917 27.1083 50.1433 28.26C51.295 29.4116 52.0167 31.025 52.0167 32.775C52.0167 36.2 49.3133 38.995 45.935 39.1483C49.8967 39.1483 53.0917 42.3733 53.0917 46.335C53.0917 50.2816 49.8983 53.5066 45.935 53.5066Z"
                      fill="#FFAB2D"
                    />
                    <path
                      d="M44.385 36.5066C45.015 35.8766 45.3983 35.0316 45.3983 34.08C45.3983 32.1916 43.8633 30.655 41.9733 30.655H36.8133V37.52H41.9733C42.91 37.52 43.77 37.12 44.385 36.5066Z"
                      fill="#FFAB2D"
                    />
                  </svg>
                  <h2 className="text-black mb-2 font-w600">$24,098</h2>
                  <p className="mb-0 fs-14">
                    <svg
                      width={29}
                      height={22}
                      viewBox="0 0 29 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d2)">
                        <path
                          d="M5 16C5.91797 14.9157 8.89728 11.7277 10.5 10L16.5 13L23.5 4"
                          stroke="#2BC155"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d2"
                          x="-3.05176e-05"
                          y="-6.10352e-05"
                          width="28.5001"
                          height="22.0001"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood floodOpacity={0} result="BackgroundImageFix" />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          />
                          <feOffset dy={1} />
                          <feGaussianBlur stdDeviation={2} />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.172549 0 0 0 0 0.72549 0 0 0 0 0.337255 0 0 0 0.61 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                    <span className="text-success me-1">45%</span>This week
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 m-t35">
              <div className="card card-coin">
                <div className="card-body text-center">
                  <svg
                    className="mb-3 currency-icon"
                    width={80}
                    height={80}
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx={40} cy={40} r={40} fill="white" />
                    <path
                      d="M40.725 0.00669178C18.6241 -0.393325 0.406678 17.1907 0.00666126 39.275C-0.393355 61.3592 17.1907 79.5933 39.2749 79.9933C61.3592 80.3933 79.5933 62.8093 79.9933 40.7084C80.3933 18.6241 62.8092 0.390041 40.725 0.00669178ZM39.4083 72.493C21.4909 72.1597 7.17362 57.3257 7.50697 39.4083C7.82365 21.4909 22.6576 7.17365 40.575 7.49033C58.5091 7.82368 72.8096 22.6576 72.493 40.575C72.1763 58.4924 57.3257 72.8097 39.4083 72.493Z"
                      fill="#374C98"
                    />
                    <path
                      d="M40.5283 10.8305C24.4443 10.5471 11.1271 23.3976 10.8438 39.4816C10.5438 55.549 23.3943 68.8662 39.4783 69.1662C55.5623 69.4495 68.8795 56.599 69.1628 40.5317C69.4462 24.4477 56.6123 11.1305 40.5283 10.8305ZM52.5455 56.9324H26.0111L29.2612 38.9483L25.4944 39.7317V36.6649L29.8279 35.7482L32.6447 20.2809H43.2284L40.8283 33.4481L44.5285 32.6647V35.7315L40.2616 36.6149L37.7949 50.2154H54.5122L52.5455 56.9324Z"
                      fill="#374C98"
                    />
                  </svg>
                  <h2 className="text-black mb-2 font-w600">$667,224</h2>
                  <p className="mb-0 fs-14">
                    <svg
                      width={29}
                      height={22}
                      viewBox="0 0 29 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d4)">
                        <path
                          d="M5 4C5.91797 5.08433 8.89728 8.27228 10.5 10L16.5 7L23.5 16"
                          stroke="#FF2E2E"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d4"
                          x="-3.05176e-05"
                          y={0}
                          width="28.5001"
                          height="22.0001"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood floodOpacity={0} result="BackgroundImageFix" />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          />
                          <feOffset dy={1} />
                          <feGaussianBlur stdDeviation={2} />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 0.180392 0 0 0 0 0.180392 0 0 0 0.61 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                    <span className="text-danger me-1">45%</span>This week
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 m-t35">
              <div className="card card-coin">
                <div className="card-body text-center">
                  <svg
                    className="mb-3 currency-icon"
                    width={80}
                    height={80}
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx={40} cy={40} r={40} fill="white" />
                    <path
                      d="M40.725 0.00669178C18.6241 -0.393325 0.406708 17.1907 0.00669178 39.275C-0.393325 61.3592 17.1907 79.5933 39.275 79.9933C61.3592 80.3933 79.5933 62.8093 79.9933 40.7084C80.3933 18.6241 62.8093 0.390041 40.725 0.00669178ZM39.4083 72.493C21.4909 72.1597 7.17365 57.3257 7.507 39.4083C7.82368 21.4909 22.6576 7.17365 40.575 7.49033C58.5091 7.82368 72.8097 22.6576 72.493 40.575C72.1763 58.4924 57.3257 72.8097 39.4083 72.493Z"
                      fill="#FF782C"
                    />
                    <path
                      d="M40.525 10.8238C24.441 10.5405 11.1238 23.391 10.8405 39.475C10.7455 44.5352 11.9605 49.3204 14.1639 53.5139H23.3326V24.8027C23.3326 23.0476 25.7177 22.4893 26.4928 24.0643L40 51.4171L53.5072 24.066C54.2822 22.4893 56.6674 23.0476 56.6674 24.8027V53.5139H65.8077C67.8578 49.6171 69.0779 45.2169 69.1595 40.525C69.4429 24.441 56.609 11.1238 40.525 10.8238Z"
                      fill="#FF782C"
                    />
                    <path
                      d="M53.3339 55.1806V31.943L41.4934 55.919C40.9334 57.0574 39.065 57.0574 38.5049 55.919L26.6661 31.943V55.1806C26.6661 56.1007 25.9211 56.8474 24.9994 56.8474H16.2474C21.4326 64.1327 29.8629 68.9795 39.475 69.1595C49.4704 69.3362 58.3908 64.436 63.786 56.8474H55.0006C54.0789 56.8474 53.3339 56.1007 53.3339 55.1806Z"
                      fill="#FF782C"
                    />
                  </svg>
                  <h2 className="text-black mb-2 font-w600">$667,224</h2>
                  <p className="mb-0 fs-14">
                    <svg
                      width={29}
                      height={22}
                      viewBox="0 0 29 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d5)">
                        <path
                          d="M5 16C5.91797 14.9157 8.89728 11.7277 10.5 10L16.5 13L23.5 4"
                          stroke="#2BC155"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d5"
                          x="-3.05176e-05"
                          y="-6.10352e-05"
                          width="28.5001"
                          height="22.0001"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood floodOpacity={0} result="BackgroundImageFix" />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          />
                          <feOffset dy={1} />
                          <feGaussianBlur stdDeviation={2} />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.172549 0 0 0 0 0.72549 0 0 0 0 0.337255 0 0 0 0.61 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                    <span className="text-success me-1">45%</span>This week
                  </p>
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
                  <p className=" text-truncate mb-2">Weekly Earnings</p>
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
            <div className="col-sm-6">
              <div className="card custom-card">
                <div className="card-header border-0 pb-0">
                  <h4 className="mb-0 fs-20 text-black">Sell Order</h4>

                </div>
                <div className="card-body p-3 pb-0">
                  <div className="table-responsive">
                    <table className="table text-center bg-info-hover tr-rounded order-tbl">
                      <thead>
                        <tr>
                          <th className="text-left">Price</th>
                          <th className="text-center">Amount</th>
                          <th className="text-end">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-left">82.3</td>
                          <td>0.15</td>
                          <td className="text-end">$134,12</td>
                        </tr>
                        <tr>
                          <td className="text-left">83.9</td>
                          <td>0.18</td>
                          <td className="text-end">$237,31</td>
                        </tr>
                        <tr>
                          <td className="text-left">84.2</td>
                          <td>0.25</td>
                          <td className="text-end">$252,58</td>
                        </tr>
                        <tr>
                          <td className="text-left">86.2</td>
                          <td>0.35</td>
                          <td className="text-end">$126,26</td>
                        </tr>
                        <tr>
                          <td className="text-left">91.6</td>
                          <td>0.75</td>
                          <td className="text-end">$46,92</td>
                        </tr>
                        <tr>
                          <td className="text-left">92.6</td>
                          <td>0.21</td>
                          <td className="text-end">$123,27</td>
                        </tr>
                        <tr>
                          <td className="text-left">93.9</td>
                          <td>0.55</td>
                          <td className="text-end">$212,56</td>
                        </tr>
                        <tr>
                          <td className="text-left">94.2</td>
                          <td>0.18</td>
                          <td className="text-end">$129,26</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card custom-card">
                <div className="card-header border-0 pb-0">
                  <h4 className="mb-0 text-black fs-20">Buy Order</h4>

                </div>
                <div className="card-body p-3 pb-0">

                  <div className="table-responsive">
                    <table className="table text-center bg-warning-hover tr-rounded order-tbl">
                      <thead>
                        <tr>
                          <th className="text-left">Price</th>
                          <th className="text-center">Amount</th>
                          <th className="text-end">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-left">82.3</td>
                          <td>0.15</td>
                          <td className="text-end">$134,12</td>
                        </tr>
                        <tr>
                          <td className="text-left">83.9</td>
                          <td>0.18</td>
                          <td className="text-end">$237,31</td>
                        </tr>
                        <tr>
                          <td className="text-left">84.2</td>
                          <td>0.25</td>
                          <td className="text-end">$252,58</td>
                        </tr>
                        <tr>
                          <td className="text-left">86.2</td>
                          <td>0.35</td>
                          <td className="text-end">$126,26</td>
                        </tr>
                        <tr>
                          <td className="text-left">91.6</td>
                          <td>0.75</td>
                          <td className="text-end">$46,92</td>
                        </tr>
                        <tr>
                          <td className="text-left">92.6</td>
                          <td>0.21</td>
                          <td className="text-end">$123,27</td>
                        </tr>
                        <tr>
                          <td className="text-left">93.9</td>
                          <td>0.55</td>
                          <td className="text-end">$212,56</td>
                        </tr>
                        <tr>
                          <td className="text-left">94.2</td>
                          <td>0.18</td>
                          <td className="text-end">$129,26</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </div>

          </div>

          <div className="row">
            <div className="col-sm-6">
              <div className="card-bx stacked card">
                <img src={card1} alt="" />
                <div className="card-info">
                  <p className="mb-1 text-white fs-14">Main Balance</p>
                  <div className="d-flex justify-content-between">
                    <h2 className="num-text text-white mb-5 font-w600">$673,412.66</h2>
                    <svg
                      width={36}
                      height={36}
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.2744 18.8013H16.0334V23.616H19.2744C19.9286 23.616 20.5354 23.3506 20.9613 22.9053C21.4066 22.4784 21.672 21.8726 21.672 21.1989C21.673 19.8813 20.592 18.8013 19.2744 18.8013Z"
                        fill="white"
                      />
                      <path
                        d="M18 0C8.07429 0 0 8.07429 0 18C0 27.9257 8.07429 36 18 36C27.9257 36 36 27.9247 36 18C36 8.07531 27.9247 0 18 0ZM21.6627 26.3355H19.5398V29.6722H17.3129V26.3355H16.0899V29.6722H13.8528V26.3355H9.91954V24.2414H12.0898V11.6928H9.91954V9.59863H13.8528V6.3288H16.0899V9.59863H17.3129V6.3288H19.5398V9.59863H21.4735C22.5535 9.59863 23.5491 10.044 24.2599 10.7547C24.9706 11.4655 25.416 12.4611 25.416 13.5411C25.416 15.6549 23.7477 17.3798 21.6627 17.4744C24.1077 17.4744 26.0794 19.4647 26.0794 21.9096C26.0794 24.3453 24.1087 26.3355 21.6627 26.3355Z"
                        fill="white"
                      />
                      <path
                        d="M20.7062 15.8441C21.095 15.4553 21.3316 14.9338 21.3316 14.3465C21.3316 13.1812 20.3842 12.2328 19.2178 12.2328H16.0334V16.4695H19.2178C19.7959 16.4695 20.3266 16.2226 20.7062 15.8441Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="d-flex">
                    <div className="me-4 text-white">
                      <p className="fs-12 mb-1 op6">VALID THRU</p>
                      <span>08/21</span>
                    </div>
                    <div className="text-white">
                      <p className="fs-12 mb-1 op6">CARD HOLDER</p>
                      <span>Marquezz Silalahi</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card-bx stacked card">
                <img src={card2} alt="" />
                <div className="card-info">
                  <p className="fs-14 mb-1 text-white">Main Balance</p>
                  <div className="d-flex justify-content-between">
                    <h2 className="num-text text-white mb-5 font-w600">$673,412.66</h2>
                    <svg
                      width={55}
                      height={34}
                      viewBox="0 0 55 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="38.0091"
                        cy="16.7788"
                        r="16.7788"
                        fill="white"
                        fillOpacity="0.67"
                      />
                      <circle
                        cx="17.4636"
                        cy="16.7788"
                        r="16.7788"
                        fill="white"
                        fillOpacity="0.67"
                      />
                    </svg>
                  </div>
                  <div className="d-flex">
                    <div className="me-4 text-white">
                      <p className="fs-12 mb-1 op6">VALID THRU</p>
                      <span>08/21</span>
                    </div>
                    <div className="text-white">
                      <p className="fs-12 mb-1 op6">CARD HOLDER</p>
                      <span>Marquezz Silalahi</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card-bx stacked card">
                <img src={card3} alt="" />
                <div className="card-info">
                  <p className="mb-1 text-white fs-14">Main Balance</p>
                  <div className="d-flex justify-content-between">
                    <h2 className="num-text text-white mb-5 font-w600">$673,412.66</h2>
                    <svg
                      width={55}
                      height={34}
                      viewBox="0 0 55 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="38.0091"
                        cy="16.7788"
                        r="16.7788"
                        fill="white"
                        fillOpacity="0.67"
                      />
                      <circle
                        cx="17.4636"
                        cy="16.7788"
                        r="16.7788"
                        fill="white"
                        fillOpacity="0.67"
                      />
                    </svg>
                  </div>
                  <div className="d-flex">
                    <div className="me-4 text-white">
                      <p className="fs-12 mb-1 op6">VALID THRU</p>
                      <span>08/21</span>
                    </div>
                    <div className="text-white">
                      <p className="fs-12 mb-1 op6">CARD HOLDER</p>
                      <span>Marquezz Silalahi</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card-bx stacked card">
                <img src={card4} alt="" />
                <div className="card-info">
                  <p className="mb-1 text-white fs-14">Main Balance</p>
                  <div className="d-flex justify-content-between">
                    <h2 className="num-text text-white mb-5 font-w600">$673,412.66</h2>
                    <svg
                      width={55}
                      height={34}
                      viewBox="0 0 55 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="38.0091"
                        cy="16.7788"
                        r="16.7788"
                        fill="white"
                        fillOpacity="0.67"
                      />
                      <circle
                        cx="17.4636"
                        cy="16.7788"
                        r="16.7788"
                        fill="white"
                        fillOpacity="0.67"
                      />
                    </svg>
                  </div>
                  <div className="d-flex">
                    <div className="me-4 text-white">
                      <p className="fs-12 mb-1 op6">VALID THRU</p>
                      <span>08/21</span>
                    </div>
                    <div className="text-white">
                      <p className="fs-12 mb-1 op6">CARD HOLDER</p>
                      <span>Marquezz Silalahi</span>
                    </div>
                  </div>
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
