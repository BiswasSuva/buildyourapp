import React from 'react'
import DashboardUi from "../../Component/DasboardUi/DashboardUi";
import "../Loyalty/loyalty.css"
import card4 from "../../images/card3.jpg"
function Index() {
    return (
        <DashboardUi>
            {/* <h1 className="titlepayment">Loyalty</h1> */}
            <div className='col-6'>
                <div className="card-bx stacked card">
                    <img
                        src={card4}
                        alt=""
                    />
                    <div className="card-info">
                        <p className="mb-1 text-white fs-14">Available Points</p>
                        <div className="d-flex justify-content-between">
                            <h2 className="num-text text-white font-w600">0</h2>
                            <svg
                                width={55}
                                height={34}
                                viewBox="0 0 55 34"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="38.0091"
                                    cy="16.7788"
                                    r="16.7788"
                                    fill="white"
                                    fillOpacity="0.67"
                                />
                                <circle
                                    cx="17.4636"
                                    cy="16.7788"
                                    r="16.7788"
                                    fill="white"
                                    fillOpacity="0.67"
                                />
                            </svg>
                        </div>
                        <div className="d-flex">
                            <div className="me-4 text-white">
                                <p className="fs-12 mb-1 op6">You have earned tmeg coins which you can reedeem below</p>
                                <span>08/21</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='col-6'>


            </div>
            <div className='col-12'>
                <div className="tabs mt-3">

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

                                Deals
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

                                Benefits
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

                                History
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
                                {/* <section class="pricing-plans">
                                    <div class="pricing-card basic">
                                        <div class="heading">
                                            <h4>PLATINUM</h4>
                                            <p>Scratch and Win Amazing Prizes & Gifts Cards</p>
                                        </div>
                                        <p class="price">
                                            5
                                            <sub>Points</sub>
                                        </p>

                                        <button class="cta-btn">SELECT</button>
                                    </div>
                                    <div class="pricing-card standard">
                                        <div class="heading">
                                            <h4>Silver Card</h4>
                                            <p>Scratch and Win Amazing Prizes & Gifts Cards</p>
                                        </div>
                                        <p class="price">
                                            50
                                            <sub>Points</sub>
                                        </p>

                                        <button class="cta-btn">SELECT</button>
                                    </div>
                                    <div class="pricing-card premium">
                                        <div class="heading">
                                            <h4>Golden Card</h4>
                                            <p>Scratch and Win Amazing Prizes & Gifts Cards</p>
                                        </div>
                                        <p class="price">
                                            4
                                            <sub>Points</sub>
                                        </p>

                                        <button class="cta-btn">SELECT</button>
                                    </div>
                                </section> */}
                                <div className="wrapper">
                                    <div className="plan">
                                        <header>
                                            <i className="ion-ios-navigate-outline" />
                                            <h4 className="plan-title">Starter</h4>
                                            <div className="plan-cost">
                                                <span className="plan-price">$19</span>
                                                <span className="plan-type">/month</span>
                                            </div>
                                        </header>
                                        <ul className="plan-features">
                                            <li>5GB Linux Web Space</li>
                                            <li>5 MySQL Databases</li>
                                            <li>Unlimited Email</li>
                                            <li>250Gb mo Transfer</li>
                                            <li>24/7 Tech Support</li>
                                            <li>Daily Backups</li>
                                        </ul>
                                        <div className="plan-select">
                                            <a href="">Select Plan</a>
                                        </div>
                                    </div>
                                    <div className="plan">
                                        <header>
                                            <i className="ion-ios-world" />
                                            <h4 className="plan-title">Basic</h4>
                                            <div className="plan-cost">
                                                <span className="plan-price">$29</span>
                                                <span className="plan-type">/month</span>
                                            </div>
                                        </header>
                                        <ul className="plan-features">
                                            <li>10GB Linux Web Space</li>
                                            <li>10 MySQL Databases</li>
                                            <li>Unlimited Email</li>
                                            <li>500Gb mo Transfer</li>
                                            <li>24/7 Tech Support</li>
                                            <li>Daily Backups</li>
                                        </ul>
                                        <div className="plan-select">
                                            <a href="">Select Plan</a>
                                        </div>
                                    </div>
                                    <div className="plan featured">
                                        <header>
                                            <i className="ion-ios-people" />
                                            <h4 className="plan-title">Golden Card</h4>
                                            <div className="plan-cost">
                                                <span className="plan-price">5</span>
                                                <span className="plan-type">Points</span>
                                            </div>
                                        </header>
                                        <ul className="plan-features">
                                            <li>Loreum Lipsum</li>
                                            <li>Loreum Lipsum</li>
                                            <li>Loreum Lipsum</li>
                                            <li>Loreum Lipsum</li>
                                            <li>Loreum Lipsum</li>
                                            <li>Loreum Lipsum</li>
                                        </ul>
                                        <div className="plan-select">
                                            <a href="">Select Plan</a>
                                        </div>
                                    </div>
                                    <div className="plan">
                                        <header>
                                            <i className="ion-ios-speedometer" />
                                            <h4 className="plan-title">Ultra</h4>
                                            <div className="plan-cost">
                                                <span className="plan-price">$99</span>
                                                <span className="plan-type">/month</span>
                                            </div>
                                        </header>
                                        <ul className="plan-features">
                                            <li>100GB Linux Web Space</li>
                                            <li>Unlimited MySQL Databases</li>
                                            <li>Unlimited Email</li>
                                            <li>10000Gb mo Transfer</li>
                                            <li>24/7 Tech Support</li>
                                            <li>Daily Backups</li>
                                        </ul>
                                        <div className="plan-select">
                                            <a href="">Select Plan</a>
                                        </div>
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

                            <div className="mt-4 mx-4">
                                <section class="pricing-plans">
                                    <div class="pricing-card basic">
                                        <div class="heading">
                                            <h4>KFC</h4>
                                            <p>Loreum Lipsum</p>
                                        </div>
                                        <p class="price">
                                            $5.00
                                            <sub>Points</sub>
                                        </p>

                                        <button class="cta-btn">Reedem Offer</button>
                                    </div>
                                    <div class="pricing-card standard">
                                        <div class="heading">
                                            <h4>McDONALD</h4>
                                            <p>Loreum Lipsum</p>
                                        </div>
                                        <p class="price">
                                            $25.00
                                            {/* <sub>Points</sub> */}
                                        </p>

                                        <button class="cta-btn">Reedem Offer</button>
                                    </div>
                                    <div class="pricing-card premium">
                                        <div class="heading">
                                            <h4>McDONALD</h4>
                                            <p>Loreum Lipsum</p>
                                        </div>
                                        <p class="price">
                                            $15.00
                                            {/* <sub>Points</sub> */}
                                        </p>

                                        <button class="cta-btn">Reedem Offer</button>
                                    </div>
                                </section>

                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </DashboardUi>
    )
}

export default Index