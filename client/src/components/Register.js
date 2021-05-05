import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
const axios = require("axios");

function Register() {
  const [error, setError] = useState("");
  const inputName = useRef();
  const inputEmail = useRef();
  const inputPassword = useRef();
  const location = useHistory();
  const inputHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/users/register", {
        name: inputName.current.value,
        email: inputEmail.current.value,
        password: inputPassword.current.value,
      });
      location.push("/");
    } catch (e) {
      console.log(e);
      setError("Please Try To Register Again");
    }
  };

  return (
    <>
      <form onSubmit={inputHandler}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="form-name"
            name="name"
            ref={inputName}
            require="true"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            ref={inputEmail}
            require="true"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            ref={inputPassword}
            require="true"
          />
        </div>
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
      {error !== "" && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
    </>
  );
}

export default Register;
