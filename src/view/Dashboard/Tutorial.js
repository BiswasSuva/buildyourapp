import React from "react";
import phone from "../../images/phone.png";
import FirstImage from "../../images/tutorial/firstImage.png";
import { motion, AnimatePresence } from "framer-motion";

function Tutorial({ onClose }) {
  return (
    <>
      <div className="modal_body" />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="modal_content"
      >
        <div className="modal_heading">
          <h2>Build Your App</h2>
          <span onClick={onClose}>
            <i className="fa-solid fa-minus" />
          </span>
        </div>
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-md-12 col-12">
            <div className="modal_content_box">
              <p>1. Click Where it says Page Title on the app Screen</p>
              <p>
                2. From the properties Panel on the right side of the screen,
                change the text from Page Title to Home
              </p>
            </div>
            <div className="modal_btn">
              <span className="prev_btn">
                <i className="fa-solid fa-angle-left" />
              </span>
              <span className="next_btn">
                <i className="fa-solid fa-angle-right" />
              </span>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-12">
            <div className="image_bg mt-3">
              <div className="modal_image">
                <img className="img-fluid" src={phone} alt="phone" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Tutorial;
