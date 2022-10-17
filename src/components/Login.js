import React from 'react'
import "./Login.css"
import homeimage from '../images/homeimage.png';

function Login() {
    return (
        <>
            <div className="loginpart">
                <div className="loginbox">
                    <input className="email" type="text" placeholder="Email" />
                    <br />
                    <br />
                    <input className="password" type="text" placeholder="Password" />
                    <br />
                    <div className="permission">
                        <input type="checkbox" style={{ width: "20px", height: "20px" }} /><h3>Remember me</h3>
                    </div>
                    <button>Log in</button>
                    <br />
                    <br />
                    <div className="forgotpass">
                        <a href="#">Forgot password</a>
                    </div>
                    <div className="signupoption">
                        <h3>Don't have an account?<a href="/signup" style={{color: "#2c87f0"}}>Sign up</a></h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login