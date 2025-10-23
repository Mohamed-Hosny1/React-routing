import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div>
      <div className="mainFooter text-light d-flex justify-content-around align-items-center">
        <div>
          <h4 className="text-uppercase fw-medium fs-3"> location </h4>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
        <div>
          <h4 className="text-uppercase fw-medium fs-3">around the web </h4>
          <div className="  mx-auto d-flex justify-content-between w-50 mt-4">
            <div className="icon ">
              <i className=" fab fa-facebook "></i>
            </div>
            <div className="icon">
              <i className=" fab fa-twitter "></i>
            </div>
            <div className="icon">
              <i className=" fab fa-instagram "></i>
            </div>
            <div className="icon">
              <i className=" fab fa-linkedin "></i>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-uppercase fw-medium fs-3"> about freelancer</h4>
          <p>
            Freelance is a free to use, licensed Bootstrap theme created by
            Route
          </p>
        </div>
      </div>
      <div className="subFooter  text-center text-white">
        <p className="fs-6">Copyright © Your Website 2021</p>
      </div>
    </div>
  );
}
