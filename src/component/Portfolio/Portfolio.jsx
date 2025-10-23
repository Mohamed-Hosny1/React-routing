import React from "react";
import Portfolio1 from "../../assets/image/poert1.png";
import Portfolio2 from "../../assets/image/port2.png";
import Portfolio3 from "../../assets/image/port3.png";
import Heading from "../Heading/Heading";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <>
      <div className="marginPage">
        <div className="container">
          <Heading title={"portfolio component"} line="#2C3E50" />
          <div className="row my-5">
            <div className="col-md-6 col-lg-4 ">
              <figure
                data-bs-toggle="modal"
                data-bs-target="#portfolio1"
                className="position-relative portfolioImg"
              >
                <img
                  src={Portfolio1}
                  alt="Portfolio logo 1"
                  className="w-100 "
                />
                <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-info bg-opacity-50 imgLayer opacity-0 ">
                  <i className="fas fa-plus fa-4x text-light position-absolute top-50 start-50 translate-middle"></i>
                </div>
              </figure>
            </div>
            <div className="col-md-6 col-lg-4">
              <figure
                data-bs-toggle="modal"
                data-bs-target="#portfolio2"
                className="position-relative portfolioImg"
              >
                <img
                  src={Portfolio2}
                  alt="Portfolio logo 2"
                  className="w-100"
                />
                <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-info bg-opacity-50 imgLayer opacity-0">
                  <i className="fas fa-plus fa-4x text-light position-absolute top-50 start-50 translate-middle"></i>
                </div>
              </figure>
            </div>
            <div className="col-md-6 col-lg-4">
              <figure
                data-bs-toggle="modal"
                data-bs-target="#portfolio3"
                className="position-relative portfolioImg"
              >
                <img
                  src={Portfolio3}
                  alt="Portfolio logo 3"
                  className="w-100"
                />
                <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-info bg-opacity-50 imgLayer opacity-0">
                  <i className="fas fa-plus fa-4x text-light position-absolute top-50 start-50 translate-middle"></i>
                </div>
              </figure>
            </div>
            <div className="col-md-6 col-lg-4">
              <figure
                data-bs-toggle="modal"
                data-bs-target="#portfolio1"
                className="position-relative portfolioImg"
              >
                <img
                  src={Portfolio1}
                  alt="Portfolio logo 1"
                  className="w-100"
                />
                <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-info bg-opacity-50 imgLayer opacity-0">
                  <i className="fas fa-plus fa-4x text-light position-absolute top-50 start-50 translate-middle"></i>
                </div>
              </figure>
            </div>
            <div className="col-md-6 col-lg-4">
              <figure
                data-bs-toggle="modal"
                data-bs-target="#portfolio2"
                className="position-relative portfolioImg"
              >
                <img
                  src={Portfolio2}
                  alt="Portfolio logo 2"
                  className="w-100"
                />
                <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-info bg-opacity-50 imgLayer opacity-0">
                  <i className="fas fa-plus fa-4x text-light position-absolute top-50 start-50 translate-middle"></i>
                </div>
              </figure>
            </div>
            <div className="col-md-6 col-lg-4">
              <figure
                data-bs-toggle="modal"
                data-bs-target="#portfolio3"
                className="position-relative portfolioImg"
              >
                <img
                  src={Portfolio3}
                  alt="Portfolio logo 3"
                  className="w-100"
                />
                <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-info bg-opacity-50 imgLayer opacity-0">
                  <i className="fas fa-plus fa-4x text-light position-absolute top-50 start-50 translate-middle"></i>
                </div>
              </figure>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="portfolio1"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog position-relative top-50 translate-middle-y">
            <div>
              <img src={Portfolio1} alt="Portfolio logo 1" className="w-100" />
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="portfolio2"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog d-flex position-relative top-50 translate-middle-y">
            <div>
              <img src={Portfolio2} alt="Portfolio logo 2" className="w-100" />
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="portfolio3"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog position-relative top-50 translate-middle-y">
            <div>
              <img src={Portfolio3} alt="Portfolio logo 3" className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
