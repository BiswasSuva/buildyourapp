import React from 'react'
import DashboardUi from "../../Component/DasboardUi/DashboardUi";
import "../Loyalty/loyalty.css"
import card4 from "../../images/card3.jpg"
function Index() {
    return (
        <DashboardUi>
            {/* <h1 className="titlepayment">Loyalty</h1> */}
            {/* <div className='col-6'>
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


            </div> */}
            <div className='col-10'>
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

                                <div id="pricing-table" className="clear">
                                    <div className="plan">
                                        <h3>
                                            Platinum Card<span>5<sup>Points</sup></span>
                                        </h3>
                                        <a className="signup" href="">
                                            Select
                                        </a>
                                        <ul>
                                            <li>
                                                <b>Loreum Lipsum</b> Disk Space
                                            </li>
                                            <li>
                                                <b>Loreum Lipsum</b> Disk Space
                                            </li>
                                            <li>
                                                <b>Loreum Lipsum</b> Disk Space
                                            </li>
                                            <li>
                                                <b>Loreum Lipsum</b> Disk Space
                                            </li>
                                            <li>
                                                <b>Loreum Lipsum</b> Disk Space
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="plan" id="most-popular">
                                        <h3>
                                            Silver Card<span>5<sup>Points</sup></span>
                                        </h3>
                                        <a className="signup" href="">
                                            Select
                                        </a>
                                        <ul>
                                            <li>
                                                <b>Loreum Lipsum</b> Disk Space
                                            </li>
                                            <li>
                                                <b>Loreum Lipsum</b> Disk Space
                                            </li>
                                            <li>
                                                <b>Loreum Lipsum</b> Disk Space
                                            </li>
                                            <li>
                                                <b>Loreum Lipsum</b> Disk Space
                                            </li>
                                            <li>
                                                <b>Loreum Lipsum</b> Disk Space
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="plan">
                                        <h3>
                                            Golden Card<span>5<sup>Points</sup></span>
                                        </h3>
                                        <a className="signup" href="">
                                            Select
                                        </a>
                                        <ul>
                                            <li>
                                                <b>Loreum Lipsum</b> Disk Space
                                            </li>
                                            <li>
                                                <b>Loreum Lipsum</b> Disk Space
                                            </li>
                                            <li>
                                                <b>Loreum Lipsum</b> Disk Space
                                            </li>
                                            <li>
                                                <b>Loreum Lipsum</b> Disk Space
                                            </li>
                                            <li>
                                                <b>Loreum Lipsum</b> Disk Space
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="plan">
                                    <h3>
                                            Bronze Card<span>5<sup>Points</sup></span>
                                        </h3>
                                        <a className="signup" href="">
                                            Select
                                        </a>
                                        <ul>
                                            <li>
                                                <b>Loreum Lipsum</b> Disk Space
                                            </li>
                                            <li>
                                                <b>Loreum Lipsum</b> Disk Space
                                            </li>
                                            <li>
                                                <b>Loreum Lipsum</b> Disk Space
                                            </li>
                                            <li>
                                                <b>Loreum Lipsum</b> Disk Space
                                            </li>
                                            <li>
                                                <b>Loreum Lipsum</b> Disk Space
                                            </li>
                                        </ul>
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