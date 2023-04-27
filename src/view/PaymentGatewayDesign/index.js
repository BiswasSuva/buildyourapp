import React, { useEffect } from "react";
import DashboardUi from "../../Component/DasboardUi/DashboardUi";
import "../../view/PaymentGatewayDesign/payment.css"
import stripe from "../../images/stripe.png"
import $ from 'jquery';
import paypal from "../../images/paypal.png"
function Index() {
    useEffect(() => {
        $('a[data-toggle="formtab"]').on("click", function () {
            var targetId = $(this).attr('href');

            $('.tabs-panels').removeClass('active')
            $('a[data-toggle="formtab"]').removeClass('active');

            $(targetId).addClass('active');
            $('a[href="' + targetId + '"]').addClass('active')



        });
    }, []);
    return (
            <main
                className=""
                id="sectionEnrollment"
                style={{
                    marginRight: 0,
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    maxWidth: "970px",
                    margin: "0 auto"
                }}
            >
                <div className="container-fluid">
                    <div className="form-area">
                        <div className="form-header">
                            <div className="top-header">
                                <div className="devider-row">
                                    <div className="half-2">
                                        <div className="logo-area">
                                            <h1>
                                                <a href="javascript:;">Payments</a>
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="half-2">
                                        <div className="need-help">
                                            <a href="javascript:;">
                                                Need Help <i>?</i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="bottom-header">
                                <div className="devider-row">
                                    <div className="half-2">
                                        <div className="bars">
                                            <label>50%</label>
                                            <span className="active" />
                                            <span className="active" />
                                            <span className="active" />
                                            <span />
                                            <span />
                                            <div className="full-bar" />
                                            <div className="blank-bar" />
                                        </div>
                                    </div>
                                    <div className="half-2">
                                        <div className="status">
                                            <h5>Settings</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className="form-body">
                            <div className="multitab-form-area">
                                <div className="tab-links-area">
                                    <h1>Payment Settings</h1>
                                    <p>Provide details for gateway integration</p>
                                    <hr />
                                    <ul>
                                        <li>
                                            <a data-toggle="formtab" href="#userProfile" className="active">
                                                Paypal
                                            </a>
                                        </li>
                                        <li>
                                            <a data-toggle="formtab" href="#residentailAddress">
                                                Stripe
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                                <div className="tab-form-area">
                                    <div className="tabs-panels active" id="userProfile">
                                        <div className="tab-part">
                                            <h4>User Profile</h4>
                                            <hr />
                                            <div className="devider-row">
                                                <div className="half-2">
                                                    <div className="form-field">
                                                        <label>Live Merchant Id</label>
                                                        <input type="text" placeholder="Live Merchant Id" />
                                                    </div>

                                                    <div className="form-field">
                                                        <label>Live Client Id</label>

                                                        <input type="text" placeholder="Live Client Id" />
                                                    </div>
                                                </div>
                                                <div className="half-2">
                                                    <div className="form-field">
                                                        <label>Live Secret Key</label>
                                                        <input type="password" placeholder="Live Secret Key" />
                                                    </div>
                                                    <div className="form-field">
                                                        <label>Live Email address</label>
                                                        <input type="text" placeholder="Live Email address" />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="next-btn">
                                            <a data-toggle="formtab">
                                                Submit
                                            </a>
                                        </div>
                                    </div>
                                    <div className="tabs-panels" id="residentailAddress">
                                        <div className="tab-part">
                                            <h4>Residential Address</h4>
                                            <hr />
                                            <div className="devider-row">
                                                <div className="half-2">
                                                    <div className="form-field">
                                                        <label>Secret live key</label>
                                                        <input type="text" placeholder="Secret live key" />
                                                    </div>


                                                </div>
                                                <div className="half-2">
                                                    <div className="form-field">
                                                        <label>Merchant key</label>
                                                        <input type="text" placeholder="Merchant key" />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="next-btn">
                                            <a data-toggle="formtab" >
                                               Submit
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
    );
}

export default Index;


