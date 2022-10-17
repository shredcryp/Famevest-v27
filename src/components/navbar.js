import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <>
    <div className="nav">
  <input type="checkbox" id="nav-check" />
  <div className="nav-header">
    <div className="nav-title">
      <a href="/">
      Famevest
      </a>
    </div>
  </div>
  <div className="nav-btn">
    <label for="nav-check">
      
    </label>
  </div>
  
  <div className="nav-links">
    <a href="" target="_blank">Docs</a>
    <a href="" target="_blank">Features</a>
    <a href="" target="_blank">Trends</a>
    <a href="" target="_blank">Settings</a>
    <button className="loginbutton"><a href="/login">Login</a></button>
  </div>
</div>
    </>
  )
}

export default Navbar
