import React from 'react'
import { useRef, useState } from "react";

import { useAuth } from "../../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Register.css"
function Register() {
  
const navigate = useNavigate();


const emailRef = useRef();
const passwordRef = useRef();
const passwordConfirmRef = useRef();
const { signup } = useAuth();
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
async function handleSubmit(e) {
  e.preventDefault();
  console.log(
    passwordRef,
    emailRef,
    " new way ",
    passwordRef.current.value === passwordConfirmRef.current.value
  );
  if (passwordRef.current.value !== passwordConfirmRef.current.value) {
    return setError("Passwords do not match");
  }

  try {
    setError("");
    setLoading(true);

    await signup(emailRef.current.value, passwordRef.current.value);
    navigate("/");
  } catch {
    setError("Failed to create an account");
  }
  setLoading(false);
}
  return (
    <div id="Loginn">
      <div id="finalbox">
        <img
          id="img"
          src="https://www.masaischool.com/img/navbar/logo.svg"
          alt=""
        />
        <div id="newbox">
          <div id="formbox">
            <div >{error && <div id="errorstyle">{error}</div>}</div>

            <form action="">
              <b id="email">Email</b>
              <input
                ref={emailRef}
                type="text"
                name=""
                id=""
                className="inputbox"
              />
              <b>Password</b>
              <input ref={passwordRef} type="password" className="inputbox" />
              <b>Password Confirmation</b>
              <input
                ref={passwordConfirmRef}
                type="password"
                className="inputbox"
              />
            </form>
          </div>

          <div>
            <button onClick={handleSubmit} id="btnn">
              REGISTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register