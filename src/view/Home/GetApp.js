import React from 'react'
import appstore from "../../images/app-store.svg"
import googlestore from "../../images/google-play.svg"
function GetApp() {
    return (
        <>
            <div className="bg-blue-gradient pt-12 pb-14">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center">
                            <div className="aos-init aos-animate" data-aos="zoom-up">
                                <h2 className="text-white mb-4">Get App on iOS & Android</h2>
                                <div className="d-inline-flex">

                                    <a href="#" className="mr-2">
                                        <img
                                            src={appstore}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </a>
                                    <a href="#" className="">
                                        <img
                                            src={googlestore}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </a>
                                </div>
                                <a href="#" className=""></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pattern-bottom">
                <div className="pattern-slide" />
            </div>

        </>


    )
}

export default GetApp