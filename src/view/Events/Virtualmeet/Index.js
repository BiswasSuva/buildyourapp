import React from 'react'
import style from "./virtual.module.css";

function Index() {
    return (
        <main id="sectionEnrollment" style={{ marginRight: "auto", marginTop: "70px", marginLeft: "auto" }}>
            <div className="container-fluid">
                <div className='row justify-content-center'>
                    <div className='col-8'>
                        <div className='iphone' style={{ background: "#ebebeb", height: "40rem", overflowY: "auto" }}>
                            <div className='container-fluid'>
                                <div className='row' style={{ background: "#312450" }}>
                                    <div className='col-12'>
                                        <h2 className={style.tabletitle}>Networking</h2>
                                    </div>
                                </div>
                                <div className='row'>
                                    <h2 className={style.titlenetworking}>Connect With People</h2>
                                </div>
                                <div className='row justify-content-center'>
                                    <div className={style.choosetable}>
                                        <p>Welcome, to join Networking</p>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-6 mb-3'>
                                        <div className={style.maincamerabox}>
                                            <div className={style.midlsec}>
                                                <div className={style.firstcambox}></div>
                                                <div className={style.secondcambox}></div>
                                                <div className={style.thirdcambox}></div>
                                                <div className={style.fourthcambox}></div>
                                                <div className={style.fifthcambox}></div>
                                                <div className={style.sixthcambox}></div>
                                                <div className={style.seventhcambox}></div>
                                                <div className={style.eightthcambox}></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-6 mb-3'>
                                        <div className={style.maincamerabox}>
                                            <div className={style.midlsec1}>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div style={{ marginRight: "0" }}></div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div style={{ marginRight: "0" }}></div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div style={{ marginRight: "0" }}></div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div style={{ marginRight: "0" }}></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-6 mb-3'>
                                        <div className={style.maincamerabox}>
                                            <div className='d-flex align-items-center' style={{ justifyContent: "space-evenly" }}>
                                                <div className={style.firstoption}>
                                                    <div className={style.circlebox}></div>
                                                </div>
                                                <span className={style.line}></span>
                                                <div className={style.secondoption}>
                                                    <div className={style.circlebox}></div>
                                                </div>
                                            </div>
                                            <span className={style.line2}></span>
                                            <span className={style.line3}></span>
                                            <div className='d-flex align-items-center mt-4' style={{ justifyContent: "space-evenly" }}>
                                                <div className={style.thirdoption}>
                                                    <div className={style.circlebox}></div>
                                                </div>
                                                <span className={style.line}></span>
                                                <div className={style.fourthoption}>
                                                    <div className={style.circlebox}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-6 mb-3'>
                                        <div className={style.maincamerabox}>
                                            <div className={style.midlsec3}>
                                                <div className={style.bigbox}></div>
                                                <div className={style.firstcambox}></div>
                                                <div className={style.secondcambox}></div>
                                                <div className={style.thirdcambox}></div>
                                                <div className={style.fourthcambox}></div>
                                                <div className={style.fifthcambox}></div>
                                                <div className={style.sixthcambox}></div>
                                                <div className={style.seventhcambox}></div>
                                                <div className={style.eightthcambox}></div>
                                                <div className={style.ninethcambox}></div>
                                                <div className={style.tenththcambox}></div>
                                                <div className={style.eleventhcambox}></div>
                                                <div className={style.twelthcambox}></div>

                                                <div className={style.thirteenthcambox}></div>
                                                <div className={style.fourteenththcambox}></div>
                                                <div className={style.fifteenthcambox}></div>
                                                {/* <div className={style.sixteenthcambox}></div> */}
                                                <div className={style.seventeenthcambox}></div>
                                                <div className={style.eighteenthcambox}></div>
                                            </div>
                                        </div>
                                    </div>
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
