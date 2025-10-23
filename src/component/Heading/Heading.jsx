import React from "react";
import "./Heading.css";

export default function Heading({ title, line }) {
  return (
    <>
      <h1
        className=" text-uppercase mt-5 text-center fw-bold"
        style={{ color: line }}
      >
        {title}
      </h1>
      <div className="text-center my-3">
        <div className="lineStar" style={{ backgroundColor: line }}></div>
        <i className="fas fa-star"></i>
        <div className="lineStar" style={{ backgroundColor: line }}></div>
      </div>
    </>
  );
}
