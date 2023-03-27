import React from 'react'
import appscreen from "../../images/mobile-android-ios-app-maker.png"
function Mobiledashboard() {
  return (
    <div className="pt-0 pb-xl-14 py-5 bg-light position-relative ">
  <div className="container">
    <div className="row d-flex align-items-center">
      <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
        <div
          className="app-shadow-vertical aos-init aos-animate"
          data-aos="fade-down"
        />
        <div className="app-img aos-init aos-animate" data-aos="fade-up">
          <img
            src={appscreen}
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
      <div className=" col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
        <div className="aos-init aos-animate" data-aos="fade-up">
          <div className="badge badge-lightpalegreen text-success p-2 text-uppercase mb-3">
            dashboard
          </div>
          <h2 className="mb-3">
            You want to build a<br />
            better future.
          </h2>
          <p className="mb-6">
            Suspendisse et luctus ipsum, eu porttitor velit. Phasellus
            fringilla, mauris vel blandit sollicitudin, enim nunc molestie elit
            magna sit amet dui.
          </p>
          <a href="#" className="btn btn-primary custom-btn">
            Get Started
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Mobiledashboard