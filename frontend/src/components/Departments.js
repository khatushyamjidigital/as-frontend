
import React from "react";
import { Link } from "react-router-dom";
import Navi from "../Navi";
import Display from "./Display";
import '../Styles/card.css';
import { Figure } from "react-bootstrap";

const Departments = () => {
  return (<div>
    <Navi/>

    <div className="logo">
      <Figure class="image is-2by1">

        <img  src="campus.png" />
      </Figure>
    </div>
    <div className="flx">
      <div className="card">
      <Link to={"/departments"}>

        <div >
          <img src="cse.jpg" alt="photo" className="card_img"/>
          </div>
          </Link>
          <div>
          <h2 style={{fontFamily:"segoe"}}>Computer Science Engineering</h2>
          <p className="card_p">
          Computer Science Engineering (CSE) encompasses a variety of topics that relates to computation, like analysis of algorithms, programming languages, program design, software, and computer hardware
          </p>
        </div>
      </div>
      <div className="card">
      <Link to={"/courses"}>
          <div >
          <img src="ece.png" alt="photo" className="card_img"/> 
          </div>
          </Link>
          
          <h2 style={{fontFamily:"segoe"}}>Electronics & Communication Engineering</h2>
          <p className="card_p">
          ECE is an engineering branch that includes the production, design, research and testing of electronic devices and technology issues related to telecommunications systems, electronics, computers and related industrial sectors
          </p>
      </div>
      
      <div className="card">
      <Link to={"/courses"}>
        <div >
          <img src="it.png" alt="photo" className="card_img" style={{height:"60%"}} />
          </div>
          </Link>
          <div>
          <h2 style={{fontFamily:"segoe"}}>Information Technology</h2>
          <p className="card_p">
          IT engineers are high-level IT personnel who design, install, and maintain a company's computer systems. also for testing, configuring, and troubleshooting hardware, software, and networking systems to meet the needs .
          </p>
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

export default Departments