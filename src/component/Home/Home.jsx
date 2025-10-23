import React from "react";
import logoImg from "../../assets/image/imgi_1_avataaars.svg";
import Heading from "../Heading/Heading";
import Navbar from "../Navbar/Navbar";

export default function Home() {
  return (
    <>
      <div className=" d-flex justify-content-center align-items-center mainPage marginPage">
        <div className="text-center ">
          <img src={logoImg} alt="Logo image" className="w-75" />
          <div>
            <Heading title={"Start framework"} line="white" />
            <p className="fs-5 ">Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </div>
    </>
  );
}
