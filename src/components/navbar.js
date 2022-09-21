import React from 'react'
import './Navbar.css'

function navbar() {
  return (
    <>
    <div class="nav">
  <input type="checkbox" id="nav-check" />
  <div class="nav-header">
    <div class="nav-title">
      Famevest
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      
    </label>
  </div>
  
  <div class="nav-links">
    <a href="" target="_blank">Docs</a>
    <a href="" target="_blank">Features</a>
    <a href="" target="_blank">Trends</a>
    <a href="" target="_blank">Settings</a>
    <button class="loginbutton">Login</button>
  </div>
</div>
    </>
  )
}

export default navbar
