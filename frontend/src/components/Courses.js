
import React from "react";
import { Link } from "react-router-dom";
import Navi from "../Navi";
import Display from "./Display";
import '../Styles/card.css';
import { Figure } from "react-bootstrap";


const Courses = () => {
  return (
    <div>
      <Navi />

      <div className="logo">
        <Figure class="bigpic">

          <img src="course.png" />
        </Figure>
      </div>
      <div className="flx1">
        <div className="flx">
          <div className="card">
            <Link to={"/departments"}>

              <div >
                <img src="dsp.png" alt="photo" className="card_img" />
              </div>
            </Link>
            <div>
              <h2 style={{ fontFamily: "segoe" }}>Digital Signal Processing</h2>

            </div>
          </div>
          <div className="card">
            <Link to={"/departments"}>
              <div >
                <img src="cn.png" alt="photo" className="card_img" />
              </div>
            </Link>
            <div>
              <h2 style={{ fontFamily: "segoe" }}>Computer Networks</h2>

            </div>
          </div>

          <div className="card">
            <Link to={"/courses"}>
              <div >
                <img src="rdbms.jpg" alt="photo" className="card_img" />
              </div>
            </Link>

            <h2 style={{ fontFamily: "segoe" }}>Realtional DBMS</h2>
          </div>
          <div className="card">
            <Link to={"/courses"}>
              <div >
                <img src="sql.jpg" alt="photo" className="card_img" style={{ height: "60%" }} />
              </div>
            </Link>
            <div>
              <h2 style={{ fontFamily: "segoe" }}>Structured Query languages</h2>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Link to={"/courses"}>
          <img src="Foot.png" />
        </Link>
      </div>

    </div>
  )
}

export default Courses