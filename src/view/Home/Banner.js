import React from 'react'
import mobilepic from "../../images/iphonex-img-1.png"
import TEXT from "../../images/TEXT-1.gif"
import mapa from "../../images/MAPA-1.gif"
import progress from "../../images/progress-1.png"
function Banner() {
    return (
        <div
            className="bg-shape"
            style={{
                background:
                    "linear-gradient(269.97deg, rgba(201, 176, 250, 0.354115) 0.01%, rgba(157, 110, 250, 0.664409) 30.73%, #6E26FA 99.47%), #9F6EFE",
                backgroundSize: "cover"
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                        {/* pagecaption start */}
                        <div className="pt-xl-14 py-5 aos-init aos-animate" data-aos="fade-up">
                            <h1 className="text-white">Explain Your App Screen</h1>
                            <p className="text-white mb-4">
                                Create Session to keep your audience cheer up. Go ahead! Here is the screen where user can view the app. Great app That makes Your Life Easier.
                            </p>

                            <div className="d-inline-flex">
                                <a href="#" className="mr-2">
                                    <img
                                        src="../assets/images/app-store.svg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                </a>
                                <a href="#" className="">
                                    <img
                                        src="../assets/images/google-play.svg"
                                        alt=""
                                        className="img-fluid "
                                    />
                                </a>
                            </div>
                        </div>
                        {/* pagecaption close */}
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12  d-flex justify-content-end">
                        {/* pagecaption start */}
                        <div
                            className="d-none d-lg-block d-md-block mt-xl-10 position-absolute z-index-9 aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-delay={1000}
                        >
                            <img
                                src={progress}
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                        {/* pagecaption close */}
                    </div>
                </div>
            </div>
            <div className="curve d-none d-lg-block d-sm-block">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1600 220"
                    preserveAspectRatio="none"
                    className="ie-shape-wave-3"
                >
                    <path d="M918.34,99.41C388.23,343.6,47.11,117.12,0,87.54V220H1600V87.54C1378.72-76.71,1077.32,27.41,918.34,99.41Z"></path>
                </svg>
            </div>
        </div>

    )
}

export default Banner