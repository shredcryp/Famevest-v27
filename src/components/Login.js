import React, { useState } from "react";
import "./Login.css";
import homeimage from "../images/homeimage.png";
import { useMutation } from "react-query";
// import { useNavigate } from "react-router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useMutation(async (string, obj) => {
    console.log("Is it even mutating");
    let data = await fetch(`http://localhost:3001/${string}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
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

  function Submitted(e) {
    e.preventDefault();
    let obj = { email, password };
    console.log(obj, "This is the object that is passed inside the login");
    mutation.mutateAsync("api/login", obj);
  }
  return (
    <>
      <div className="loginpart">
        <div className="loginbox">
          <label>Email</label>
          <input
            className="email"
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
          <br />
          <br />
          <label>Password</label>
          <input
            className="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
          <br />
          <div className="permission">
            <input type="checkbox" style={{ width: "20px", height: "20px" }} />
            <h3>Remember me</h3>
          </div>
          <button onClick={Submitted}>Log in</button>
          <br />
          <br />
          <div className="forgotpass">
            <a href="#">Forgot password</a>
          </div>
          <div className="signupoption">
            <h3>
              Don't have an account?{" "}
              <a href="/signup" style={{ color: "#2c87f0" }}>
                Sign up
              </a>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
