import React from "react";
import logo from "../assets/images/solar-logo.png";
import phone from "../assets/images/phone.png";
import message from "../assets/images/msg.png";

function Header() {
  return (
    <>
      <div className="container mt-3">
        <div className="row g-0">
          <div className="col-xl-6 col-lg-12 col-md-12 g-0">
            <div className="main-left">
              <img src={logo} alt="Logo" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 d-flex justify-content-center font-regular">
            <div className="main-right">
              <img src={phone} alt="Logo" />
              <span className="text-secondary mx-3">0203 519 4420</span>
              <img src={message} alt="Logo" />
              <span className="text-secondary mx-3">
                info@solarinnovation.com
              </span>
              <button className="contact-btn font-regular font-14 px-3 text-center">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Header;
