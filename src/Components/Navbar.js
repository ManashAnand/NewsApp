import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Navbar extends Component {

  render() {
    return (
    <>
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">NewsApp</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item d-flex">
          <Link className="nav-link" aria-current="page" to="/general">General</Link>
          <Link className="nav-link" aria-current="page" to="/entertainment">Entertainment</Link>
          <Link className="nav-link" aria-current="page" to="/business">Business</Link>
          <Link className="nav-link" aria-current="page" to="/health">Health</Link>
          <Link className="nav-link" aria-current="page" to="/science">Science </Link>
          <Link className="nav-link" aria-current="page" to="/technology">Technology</Link>
        </li>
      
      </ul>
    
    </div>
  </div>
</nav>
    </>
    )
  }
}
