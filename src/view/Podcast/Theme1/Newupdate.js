import React from 'react'
import style from "./podcast.module.css";
import { Link } from "react-router-dom";
import image from "../../../images/Image.png"
import image2 from "../../../images/Image2.png"
import categoryplaylist from "../../../images/icon/categoryplaylist.png"
import download from "../../../images/icon/download.png"
function Newupdate({feild=[]}) {
    const Heading = feild.find((item) => item.key === "Heading")?.value;
    const HeadingColor = feild.find((item) => item.key === "Heading Color")?.value;
    const HeadingSize = feild.find((item) => item.key === "Heading Text Size")?.value;
    const buttonColor = feild.find((item) => item.key === "Button Color")?.value;
    return (
        <section className={style.newsupdate}>
            <div className='container'>
                <div className='row mb-3'>
                    <div className='col-8'>
                        <h1 className={style.title} style={{color:HeadingColor}}>{Heading}</h1>
                    </div>
                    <div className='col-4 text-right'>
                        <Link to="/" className={style.seeall}>See All</Link>
                    </div>
                </div>

                <div className='row mt-3 mb-3'>
                    <div className='col-5'>
                        <div className={style.newsupdateImage}>
                            <img src={image} className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className='col-7' style={{ paddingLeft: 0 }}>
                        <div className={style.newsupdatesection}>
                            <div className={style.newsupdateimagedescription}>
                                <h1 className={style.desTitle}>927: Deep Dive | How to Quit Your Job the Right Way</h1>
                                <div className='d-flex'>
                                    <span className={style.subject} style={{ marginRight: "5px" }}>Apple Talk</span><span className={style.tick}>|</span><span className={style.time} style={{ marginLeft: "5px" }}>52:27 mins</span>
                                </div>
                            </div>

                            <div className={style.playlisticons}>
                                <div className={style.playbutton}>
                                    <button className={style.playBtn} style={{background:buttonColor}}><i className="fa-solid fa-play"></i>Play</button>
                                </div>
                                <div className={style.playlisticon}>
                                    <Link to="#">
                                        <img src={categoryplaylist} className="img-fluid" alt="Add Icon" />
                                    </Link>
                                    <Link to="#">
                                        <img src={download} className="img-fluid" alt="Download Icon" />
                                    </Link>
                                </div>
                                <div className={style.dotsIcon}>
                                    <Link to="#">
                                        <i className="fa-solid fa-ellipsis-vertical"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='row mt-3 mb-3'>
                    <div className='col-5'>
                        <div className={style.newsupdateImage}>
                            <img src={image2} className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className='col-7' style={{ paddingLeft: 0 }}>
                        <div className={style.newsupdatesection}>
                            <div className={style.newsupdateimagedescription}>
                                <h1 className={style.desTitle}>865: Daniel Levin | Finding a Missing Person in the Middle..</h1>
                                <div className='d-flex'>
                                    <span className={style.subject} style={{ marginRight: "5px" }}>Office Ladies</span><span className={style.tick}>|</span><span className={style.time} style={{ marginLeft: "5px" }}>21:37 mins</span>
                                </div>
                            </div>

                            <div className={style.playlisticons}>
                                <div className={style.playbutton}>
                                    <button className={style.playBtn}style={{background:buttonColor}} ><i className="fa-solid fa-play"></i>Play</button>
                                </div>
                                <div className={style.playlisticon}>
                                    <Link to="#">
                                        <img src={categoryplaylist} className="img-fluid" alt="Add Icon" />
                                    </Link>
                                    <Link to="#">
                                        <img src={download} className="img-fluid" alt="Download Icon" />
                                    </Link>
                                </div>
                                <div className={style.dotsIcon}>
                                    <Link to="#">
                                        <i className="fa-solid fa-ellipsis-vertical"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section >
    )
}

export default Newupdate