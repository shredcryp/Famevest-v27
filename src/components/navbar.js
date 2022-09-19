import React from 'react'

function navbar() {
  return (
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
     <meta name="viewport"></meta>
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous"></link>
  </head>
  <>
  <body  >
  <nav className="navbar navbar-expand-lg bg-light" style={{margin:"0px", height:"50px"}} >
  
<div className="container-fluid" style={{backgroundColor: "#212121", color:"white"}}>
  <a className="navbar-brand" href="#" style={{color:"#2C87F0"}}>Famevest</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#"   style={{color:"white"}}>Docs</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#"  style={{color:"white"}}>Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#"  style={{color:"white"}}>Trends</a>
      </li>
      
      <li className="nav-item">
        <a className="nav-link" href="#"></a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"   style={{color:"white"}}>
          Settings
        </a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#" >Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><hr className="dropdown-divider"/></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </li>
  
    </ul>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit" style={{backgroundColor:"green", color : "white"}}>Login</button>
    </form>
  </div>
</div>
</nav>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
    </body>
  </>
  </html>
  )
}

export default navbar
