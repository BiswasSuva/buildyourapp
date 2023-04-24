import React from "react";
import DashboardUi from "../../Component/DasboardUi/DashboardUi";
import "../../view/PaymentGatewayDesign/payment.css"
import stripe from "../../images/stripe.png"
import paypal from "../../images/paypal.png"
function Index() {

    return (
        <DashboardUi>
            <div className="tabs mt-3">
                <h1 className="titlepayment">Choose a Payment Method</h1>
                <ul className="nav nav-tabs" id="myTab" role="tablist">

                    <li className="nav-item" role="presentation">

                        <a
                            className="nav-link active"
                            id="visa-tab"
                            data-toggle="tab"
                            href="#visa"
                            role="tab"
                            aria-controls="visa"
                            aria-selected="true"
                        >

                            <img src={stripe} width={80} />
                        </a>
                    </li>
                    <li className="nav-item" role="presentation">

                        <a
                            className="nav-link"
                            id="paypal-tab"
                            data-toggle="tab"
                            href="#paypal"
                            role="tab"
                            aria-controls="paypal"
                            aria-selected="false"
                        >

                            <img src={paypal} width={80} />
                        </a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">

                    <div
                        className="tab-pane fade active show"
                        id="visa"
                        role="tabpanel"
                        aria-labelledby="visa-tab"
                    >

                        <div className="mt-4 mx-4">

                            <div className="text-center">

                                <h5>Credit card</h5>
                            </div>
                            <div className="form mt-3">

                                <div className="inputbox">

                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        required="required"
                                    />
                                    <span>Cardholder Name</span>
                                </div>
                                <div className="inputbox">

                                    <input
                                        type="text"
                                        name="name"
                                        min={1}
                                        max={999}
                                        className="form-control"
                                        required="required"
                                    />
                                    <span>Card Number</span> <i className="fa fa-eye" />
                                </div>
                                <div className="d-flex flex-row">

                                    <div className="inputbox">

                                        <input
                                            type="text"
                                            name="name"
                                            min={1}
                                            max={999}
                                            className="form-control"
                                            required="required"
                                        />
                                        <span>Expiration Date</span>
                                    </div>
                                    <div className="inputbox">

                                        <input
                                            type="text"
                                            name="name"
                                            min={1}
                                            max={999}
                                            className="form-control"
                                            required="required"
                                        />
                                        <span>CVV</span>
                                    </div>
                                </div>
                                <div className="px-5 pay">

                                    <button className="btn btn-success btn-block">Add card</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="paypal"
                        role="tabpanel"
                        aria-labelledby="paypal-tab"
                    >

                        <div className="px-5 mt-5">

                            <div className="inputbox">

                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    required="required"
                                />
                                <span>Paypal Email Address</span>
                            </div>
                            <div className="pay px-5">

                                <button className="btn btn-block">Add paypal</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </DashboardUi>
    );
}

export default Index;


