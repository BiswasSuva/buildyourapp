import React from 'react'
import DashboardUi from "../../Component/DasboardUi/DashboardUi";
import "../Loyalty/loyalty.css"
import card4 from "../../images/card3.jpg"
import Mainmobile from '../Dashboard/Mainmobile';
import detailsbg from "../../images/detailsbg.png"
import kfc from "../../images/kfc.png"
import mcdonald from "../../images/mcdonald.png"
import kfc1 from "../../images/kfc1.png"
import navbg from "../../images/navbg.png"
import Logo from "../../images/Logo.png"
function Index() {
    return (
        <main id="sectionEnrollment" style={{ marginRight: "auto", marginTop: "70px", marginLeft: "auto" }}>
            <div className="container-fluid">
                <div className='row justify-content-center'>
                    <div className='col-8'>
                        <div className='iphone' style={{ background: "#ebebeb", height: "40rem", overflowY: "auto" }}>
                            <div className='col-12' style={{padding: "10px 0"}}>
                                <h2 className='titleloyayty'>Loyalty</h2>
                            </div>
                            <section className='heeadesection'>
                                {/* <div className='topsection' style={{backgroundImage: `url(${navbg})`}}> */}
                                <div className='topsection'>
                                    <div>
                                        <h3>Available Points</h3>
                                        <h1>0</h1>
                                        <p>You have earned tmeg coins which you can redeem below</p>
                                    </div>
                                    <div>
                                        <img src={Logo} alt="Logo" className='img-fluid'/>
                                    </div>
                                </div>
                                <ul className="nav nav-pills justify-content-around">
                                    <li className="active">
                                        <a data-toggle="pill" href="#deals">
                                            Deals
                                        </a>
                                    </li>
                                    <li>
                                        <a data-toggle="pill" href="#benefits">
                                            Benefits
                                        </a>
                                    </li>
                                    <li>
                                        <a data-toggle="pill" href="#history">
                                            History
                                        </a>
                                    </li>
                                </ul>
                            </section>

                            <div className="tab-content">
                                <div id="deals" className="tab-pane fade in show active ">
                                    <div className='tabularlist mt-3'>
                                        <div>
                                            <img src={detailsbg} alt="Image" className='listimagecst' />
                                        </div>
                                        <div style={{ marginLeft: "10px" }}>
                                            <h4>Platinum Card</h4>
                                            <p>Scratch and Win Amazing Prizes & Gift Cards</p>
                                            <button>5 Points</button>
                                        </div>
                                    </div>

                                    <div className='tabularlist'>
                                        <div>
                                            <img src={detailsbg} alt="Image" className='listimagecst' />
                                        </div>
                                        <div style={{ marginLeft: "10px" }}>
                                            <h4>Silver Card</h4>
                                            <p>Scratch and Win Amazing Prizes & Gift Cards</p>
                                            <button>50 Points</button>
                                        </div>
                                    </div>

                                    <div className='tabularlist'>
                                        <div>
                                            <img src={detailsbg} alt="Image" className='listimagecst' />
                                        </div>
                                        <div style={{ marginLeft: "10px" }}>
                                            <h4>Golden Card</h4>
                                            <p>Scratch and Win Amazing Prizes & Gift Cards</p>
                                            <button>4 Points</button>
                                        </div>
                                    </div>

                                 
                                </div>
                                <div id="benefits" className="tab-pane fade">
                                    <div className='col-12 mb-3 mt-3'>
                                        <img src={kfc} alt="Image" className='reedeemimage' />
                                    </div>

                                    <div className='col-12 mb-3'>
                                        <img src={mcdonald} alt="Image" className='reedeemimage' />
                                    </div>

                                    <div className='col-12 mb-3'>
                                        <img src={kfc1} alt="Image" className='reedeemimage' />
                                    </div>

                                </div>
                                <div id="history" className="tab-pane fade">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Index