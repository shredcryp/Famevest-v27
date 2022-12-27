import React, { useState } from "react";
import "./Signup.css";
// import homeimage from "../images/homeimage.png";
import { useMutation } from "react-query";
import { useNavigate } from "react-router";

function Signup() {
  // let nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const mutation = useMutation(async (string, obj) => {
    console.log("Is it even mutating");
    let data = await fetch(`http://localhost:3001/${string}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });
    console.log("Is the repsonse even returned");
    let res = await data.json();
    console.log("Is the repsonse even returned 2");
    console.log(res);
    console.log("Now the cookie is going to be assigned");
    document.cookie = `jwt=${res.token};max-age=18000;`;
    if (res.error) {
      console.log("This is the error", res.error);
      alert(res.error);
    } else {
      console.log(res.Connection);
      console.log();
      alert("The user has been logged in successfully");
      // nav("/");
    }
  });

  function signupsubmitted(e) {
    e.preventDefault();
    let obj = {
      email,
      password,
    };
    console.log(obj);
    mutation.mutateAsync("api/signup", obj);
  }
  return (
    <>
      <div className="loginpart">
        <div className="loginbox">
          <label>Username</label>
          <input
            className="email"
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label>Email</label>
          <input
            className="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <br />
          <label>Password</label>
          <input
            className="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <br />
          <div className="permission">
            <input type="checkbox" style={{ width: "20px", height: "20px" }} />
            <h4>
              I've read and agree to FameVest's
              <a href="#" style={{ color: "#2c87f0" }}>
                {" "}
                Term's of service
              </a>
            </h4>
          </div>
          <button
            onClick={(e) => {
              signupsubmitted(e);
            }}
          >
            Sign Up
          </button>
          <br />
          <br />
          <div className="forgotpass">
            <a href="#">Forgot password</a>
          </div>
          <div className="signupoption">
            <h3>
              Already have an account?{" "}
              <a href="/signup" style={{ color: "#2c87f0" }}>
                Log in
              </a>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
