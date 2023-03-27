import React from 'react'

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">

          <div className="col-xl-6 col-lg-6 col-md-4 col-sm-6 col-6">
            <div className="footer-widget">
              <h4 className="font-alt">About Us</h4>
              <p className="footer-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation
              </p>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-4 col-sm-6 col-6 d-flex justify-content-end">
            <div className="footer-widget">
              <h4 className="font-alt">Get in touch</h4>
              <p className="footer-text">ABC Test Testing St, USA</p>
              <p className="footer-text"><span>E-Mail:</span> info@example.com </p>
              <p className="footer-text"><span>Phone:</span> (123) 123-456</p>
            </div>
          </div>

        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className="footer-copy">

            <div className="col-12 text-center">
              <p>© Copyright by Build Your App. All Rights Reserved 2023.</p>
            </div>

          </div>

        </div>
      </div>

    </div>

  )
}

export default Footer