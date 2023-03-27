import React from 'react'
import Logo from "../../images/Logo.png"
function Screen1({name,setName,MovetoAnotherSlide}) {

    return (
        <section id="welcomeBox">
            <div className='container' style={{ position: "relative" }}>
                <div className='row'>
                    <div className='col-lg-4 col-md-5 col-xl-4 col-sm-6 col-xs-12'>
                        <div className="phone-wrap">
                            <div className="phone">
                                <img src={Logo} alt="Logo" className="img-fluid" style={{ maxWidth: "70PX" }} />
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
                    <div className='col-lg-8 col-md-7 col-xl-8 col-sm-6 col-xs-12' style={{ position: "relative" }}>
                        <div className="inputFieldBox">
                            <div className="headingAmimation">
                                <div className="animateThis">
                                    What's your name?
                                </div>
                            </div>
                            <div className="inputArea">
                                <input
                                    type="text"
                                    placeholder="Type your name...."
                                    maxLength={62}
                                    className="ng-pristine ng-valid ng-touched"
                                    value={name}
                                    onChange={(val)=>setName(val.target.value)}
                                    onKeyPress={(e)=>{
                                    if(e.key==="Enter"){
                                        MovetoAnotherSlide()
                                    }
                                    }}
                                />
                                <div className="noteText">
                                    Press Enter to submit
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Screen1