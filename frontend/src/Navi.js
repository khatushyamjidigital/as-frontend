import React from "react";
import { Link } from "react-router-dom";
import Nav from "bulma";
import "bulma/css/bulma.min.css";
import "./App.css";

const Navi = (props) => {


  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to={"https://iiitu.ac.in/"}>
            <img src="iiituna.png" width="100" height="68"></img>
          </Link>

          <Link
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Link>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item" >Home</Link>

            <Link className="navbar-item" to="/login">Attendance</Link>

            <div className="navbar-item has-dropdown is-hoverable">
              <Link className="navbar-item">More</Link>

              <div className="navbar-dropdown">
                <Link className="navbar-item" to='/about'>About</Link>
                <Link className="navbar-item">Jobs</Link>
                <Link className="navbar-item" to='/contact'>Contact</Link>
                <hr className="navbar-divider"></hr>
                <Link className="navbar-item">Report an issue</Link>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              {props.type !== "logout" && <div className="buttons">
                <Link to='/signup' className="button is-danger"> <strong>Sign up</strong> </Link>
                <Link to='/login' className="button is-light">Log in</Link>
              </div>}
              {props.type === "logout" && <div className="buttons">
                <Link to='/login' className="button is-danger"> <strong>Logout</strong> </Link>
               
              </div>}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navi;
