import React from "react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
// import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";

import "./Login.css";

function Login() {
   const navigate = useNavigate();
   const emailRef = useRef();
   const passwordRef = useRef();
   // const passwordConfirmRef = useRef();
   const { login } = useAuth();
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState("");

    async function handleSubmit(e) {
      e.preventDefault();

      try {
        setError("");
        setLoading(true);
        await login(emailRef.current.value, passwordRef.current.value);
        navigate("/lectures");
      } catch {
        setError("Failed to Sign In");
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
            <div>{error && <div id="errorstyle">{error}</div>}</div>

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
            </form>
          </div>

          <div id="userregister">
            {" "}
            New User? <Link to="/register">Register</Link>
          </div>
          <div>
            <button onClick={handleSubmit} id="btn">
              LOG IN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
