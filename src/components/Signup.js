import React from "react";
import "./Signup.css";
import homeimage from "../images/homeimage.png";

function Signup() {
  return (
    <>
      <div className="loginpart">
        <div className="loginbox">
          <label>Email</label>
          <input className="email" type="text" placeholder="Email" />
          <br />
          <br />
          <label>Email</label>
          <input className="password" type="text" placeholder="Password" />
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
          <button>Sign Up</button>
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
