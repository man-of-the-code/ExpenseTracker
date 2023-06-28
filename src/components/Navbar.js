import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{position:"fixed",width:"100%",top:"0px"}} >
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">

        <a className="navbar-brand text-white " >
          MahatoGnews
        </a>


        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse" id="navbarSupportedContent">


          <ul className="navbar-nav ms-auto">

            <li className="nav-item active">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item active">
              <Link className="nav-link text-white" to="/general">
                General
              </Link>
            </li>

            <li className="nav-item active">
              <Link className="nav-link text-white" to="/business">
                Business
              </Link>
            </li>

            <li className="nav-item active">
              <Link className="nav-link text-white" to="/entertainment">
                Entertainment
              </Link>
            </li>

            <li className="nav-item active">
              <Link className="nav-link text-white" to="/health">
                Health
              </Link>
            </li>

            <li className="nav-item active">
              <Link className="nav-link text-white" to="/science">
                Science
              </Link>
            </li>

            <li className="nav-item active">
              <Link className="nav-link text-white" to="/sports">
                Sports
              </Link>
            </li>

            <li className="nav-item active">
              <Link className="nav-link text-white" to="/technology">
                Technology
              </Link>
            </li>

          </ul>

          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
