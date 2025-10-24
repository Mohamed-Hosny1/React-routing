import React, { useRef, useState } from "react";
import Heading from "../Heading/Heading";

export default function Contact() {
  const [NamePosition, setNamePosition] = useState(0);
  const [AgePosition, setAgePosition] = useState(0);
  const [EmailPosition, setEmailPosition] = useState(0);
  const [PasswordPosition, setPasswordPosition] = useState(0);

  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  function showName() {
    if (nameRef.current?.value) {
      setNamePosition(-40);
    } else {
      setNamePosition(0);
    }
  }

  function showAge() {
    if (ageRef.current?.value) {
      setAgePosition(-40);
    } else {
      setAgePosition(0);
    }
  }

  function showEmail() {
    if (emailRef.current?.value) {
      setEmailPosition(-40);
    } else {
      setEmailPosition(0);
    }
  }

  function showPass() {
    if (passwordRef.current?.value) {
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
          <div className="mb-5 position-relative">
            <label
              htmlFor="UserName"
              className="position-absolute z-1 text-info "
              style={{ top: NamePosition, transition: "0.8s ease" }}
            >
              UserName:
            </label>
            <input
              ref={nameRef}
              type="text"
              className="form-control z-3 position-relative "
              id="UserName"
              placeholder="UserName"
              onInput={showName}
            />
          </div>
          <div className="mb-5 position-relative">
            <label
              htmlFor="UserAge"
              className="position-absolute z-1 text-info MyLabel"
              style={{ top: AgePosition, transition: "0.8s ease" }}
            >
              UserAge:
            </label>
            <input
              ref={ageRef}
              type="number"
              className="form-control z-3 position-relative MyInput"
              id="UserAge"
              placeholder="UserAge"
              onInput={showAge}
            />
          </div>
          <div className="mb-5 position-relative">
            <label
              htmlFor="UserEmail"
              className="position-absolute z-1 text-info MyLabel"
              style={{ top: EmailPosition, transition: "0.8s ease" }}
            >
              UserEmail:
            </label>
            <input
              ref={emailRef}
              type="email"
              className="form-control z-3 position-relative MyInput"
              id="UserEmail"
              placeholder="UserEmail"
              onInput={showEmail}
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
              ref={passwordRef}
              type="password"
              className="form-control z-3 position-relative MyInput"
              id="UserPassword"
              placeholder="UserPassword"
              onInput={showPass}
            />
          </div>
          <button className="btn btn-info"> Send Message </button>
        </form>
      </div>
    </>
  );
}
