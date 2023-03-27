import React from 'react'
import style from "./learning2.module.css";
import { Link } from "react-router-dom";
import learningimg from "../../../images/learningimg.png"
import uidesign from "../../../images/uidesign.png"
import uidesign2 from "../../../images/uidesign2.png"
import uidesign3 from "../../../images/uidesign3.png"
import CombinedShape from "../../../images/icon/Combined-Shape.png"
import TimeCircle from "../../../images/icon/Time-Circle.png"
import codeimage from "../../../images/codeimage.png"
function Courseinprogress() {
    return (
        <div className={style.Courseinprogress}>
            <div className='container'>
                <div className='row mb-1'>
                    <div className='col-8'>
                        <p className={style.topcourse}>Course in progress</p>
                    </div>
                    <div className='col-4 text-right'>
                        <Link to="/" className={style.seeall}>See All</Link>
                    </div>
                </div>
                <div className={style.cardfullbox}>
                    <div className='row'>
                        <div className="col-4">
                            <div className={style.carddetails}>
                                <img src={learningimg} alt="" className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-8" style={{ paddingLeft: 0 }}>
                            <div className={style.carTop}>
                                <div className={style.carddetails}>
                                    <p className={style.cardtitle}>UI Design</p>
                                    <p className={style.cardparagaraph}>Get to know the use of components for beginners</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 mt-3 mb-3'>
                            <div className='row'>
                                <div className='col-8'>
                                    <p className={style.progresstitle}>Progress</p>
                                </div>
                                <div className='col-4 text-right'>
                                    <Link to="/" className={style.progressperct}>39%</Link>
                                </div>
                            </div>
                            <div className={style.progressItem}>
                                <div className="progress" style={{ height: "4px" }}>
                                    <div className="progress-bar" style={{ width: "39%", backgroundColor: "#528F65", borderRadius: "8px" }}>

                                    </div>
                                </div>
                            </div>

                            <div className=''>

                            </div>
                        </div>

                        <div className='col-6'>
                            <div className={style.imgstyle}>
                                <img src={uidesign} alt="" className='img-fluid' />
                                <img src={uidesign2} alt="" className={style.img2} />
                                <img src={uidesign3} alt="" className={style.img2} />
                                <div className={style.totalImage}>+3</div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='row' style={{ height: "100%", alignItems: "center", justifyContent: "space-between" }}>
                                <div className={style.commentsdays}>
                                    <div className={style.message}>
                                        <img src={CombinedShape} className="img-fluid" alt="Comment" />
                                        <span className={style.messagetotal}>2</span>
                                    </div>
                                    <div className={style.time}>
                                        <img src={TimeCircle} className="img-fluid" alt="Comment" />
                                        <span className={style.days}>7 Days Ago</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className={style.cardfullbox}>
                    <div className='row'>
                        <div className="col-4">
                            <div className={style.carddetails}>
                                <img src={codeimage} alt="" className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-8" style={{ paddingLeft: 0 }}>
                            <div className={style.carTop}>
                                <div className={style.carddetails}>
                                    <p className={style.cardtitle}>Coding</p>
                                    <p className={style.cardparagaraph}>React js programming beginner</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 mt-3 mb-3'>
                            <div className='row'>
                                <div className='col-8'>
                                    <p className={style.progresstitle}>Progress</p>
                                </div>
                                <div className='col-4 text-right'>
                                    <Link to="/" className={style.progressperct}>39%</Link>
                                </div>
                            </div>
                            <div className={style.progressItem}>
                                <div className="progress" style={{ height: "4px" }}>
                                    <div className="progress-bar" style={{ width: "39%", backgroundColor: "#528F65", borderRadius: "8px" }}>

                                    </div>
                                </div>
                            </div>

                            <div className=''>

                            </div>
                        </div>

                        <div className='col-6'>
                            <div className={style.imgstyle}>
                                <img src={uidesign} alt="" className='img-fluid' />
                                <img src={uidesign2} alt="" className={style.img2} />
                                <img src={uidesign3} alt="" className={style.img2} />
                                <div className={style.totalImage}>+3</div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='row' style={{ height: "100%", alignItems: "center", justifyContent: "space-between" }}>
                                <div className={style.commentsdays}>
                                    <div className={style.message}>
                                        <img src={CombinedShape} className="img-fluid" alt="Comment" />
                                        <span className={style.messagetotal}>2</span>
                                    </div>
                                    <div className={style.time}>
                                        <img src={TimeCircle} className="img-fluid" alt="Comment" />
                                        <span className={style.days}>7 Days Ago</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courseinprogress