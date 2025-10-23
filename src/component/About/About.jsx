import React from "react";
import Navbar from "../Navbar/Navbar";
import Heading from "../Heading/Heading";

export default function About() {
  return (
    <>
      <div className=" d-flex justify-content-center align-items-center mainPage marginPage">
        <div>
          <div>
            <Heading
              title={"about component"}
              line="#eed"
              className="text-center"
            />
          </div>
          <div className="w-75 mx-auto">
            <div className="row">
              <div className="col-md-6 fs-6">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </div>
              <div className="col-md-6 fs-6 ">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
