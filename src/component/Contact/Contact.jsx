import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Heading from "../Heading/Heading";

export default function Contact() {
  const [NamePosition, setNamePosition] = useState(0);
  const [AgePosition, setAgePosition] = useState(0);
  const [EmailPosition, setEmailPosition] = useState(0);
  const [PasswordPosition, setPasswordPosition] = useState(0);
  let inp = document.querySelectorAll(".MyInput");

  function showName() {
    if (inp[0].value.length != 0) {
      setNamePosition(-40);
    } else {
      setNamePosition(0);
    }
  }
  function showAge() {
    if (inp[1].value.length != 0) {
      setAgePosition(-40);
    } else {
      setAgePosition(0);
    }
  }
  function showEmail() {
    if (inp[2].value.length != 0) {
      setEmailPosition(-40);
    } else {
      setEmailPosition(0);
    }
  }
  function showPass() {
    if (inp[3].value.length != 0) {
      setPasswordPosition(-40);
    } else {
      setPasswordPosition(0);
    }
  }
  return (
    <>
      <div className="marginPage mb-5">
        <Heading title={"contact section"} line="#2C3E50" />
        <form className="w-50 m-auto">
          <div className="mb-5 position-relative ">
            <label
              htmlFor="UserName"
              className="position-absolute z-1 text-info MyLabel"
              style={{ top: NamePosition, transition: "0.8s ease" }}
            >
              UserName:
            </label>
            <input
              type="text"
              className="form-control z-3 position-relative MyInput"
              id="UserName"
              placeholder="UserName"
              onInput={() => {
                showName();
              }}
            />
          </div>
          <div className="mb-5 position-relative ">
            <label
              htmlFor="UserAge"
              className="position-absolute z-1 text-info MyLabel"
              style={{ top: AgePosition, transition: "0.8s ease" }}
            >
              UserAge:
            </label>
            <input
              type="number"
              className="form-control z-3 position-relative MyInput"
              id="UserAge"
              placeholder="UserAge"
              onInput={() => {
                showAge();
              }}
            />
          </div>
          <div className="mb-5 position-relative ">
            <label
              htmlFor="UserEmail"
              className="position-absolute z-1 text-info MyLabel"
              style={{ top: EmailPosition, transition: "0.8s ease" }}
            >
              UserEmail:
            </label>
            <input
              type="email"
              className="form-control z-3 position-relative MyInput"
              id="UserEmail"
              placeholder="UserEmail"
              onInput={() => {
                showEmail();
              }}
            />
          </div>
          <div className="mb-5 position-relative">
            <label
              htmlFor="UserPassword"
              className="position-absolute z-1 text-info MyLabel"
              style={{ top: PasswordPosition, transition: "0.8s ease" }}
            >
              UserPassword:
            </label>
            <input
              type="password"
              className="form-control z-3 position-relative MyInput"
              id="UserPassword"
              placeholder="UserPassword"
              onInput={() => {
                showPass();
              }}
            />
          </div>
          <button className="btn btn-info"> Send Message </button>
        </form>
      </div>
    </>
  );
}
