import React from 'react';
import graphic from "../../images/graphic-1.svg"
function Smartbox() {
    return (
        <section className="smart gray-bg">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="feature-box-02" data-aos="fade-right">
                            <div className="icon theme-bg">
                                <i className="ti-check-box" />
                            </div>
                            <h3 className="m-10px-b font-alt">Smart And Flexible</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt.
                            </p>
                            <ul className="fb4-list-type m-20px-b p-0px">
                                <li>
                                    <i className="ti-arrow-right" /> Fast Loading
                                </li>
                                <li>
                                    <i className="ti-arrow-right" /> Best Support
                                </li>
                                <li>
                                    <i className="ti-arrow-right" /> Affordable Price
                                </li>
                            </ul>
                            <a className="m-btn m-btn-theme" href="#">
                                Create an Account
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6 sm-m-30px-t">
                        <img src={graphic} title="" alt="" className='img-fluid' data-aos="fade-left"/>
                    </div>
                </div>
             
            </div>
            
        </section>

    )
}

export default Smartbox