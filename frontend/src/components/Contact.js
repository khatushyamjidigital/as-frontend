
import React from "react";
import { Link } from "react-router-dom";
import Navi from "../Navi";
import Display from "./Display";
import '../Styles/card.css';
import { Figure } from "react-bootstrap";
import { fontSize, textAlign } from "@mui/system";


const Contact = () => {
  return (
    <div>
      <Navi />
      <h1 style={{align: "center", fontSize: "2.8rem", fontWeight:"bold" , padding:"40px"}}> <b>Indian Institute of Information Technology Una H.P.</b></h1>
      <div className="logo">
        <Figure class="bigpic">
        <img src="map.png" /> 
          <img src="cntct.png" /> 
        </Figure>
      </div>
      {/* <h1 style={{align: "center", fontSize: "2.8rem", fontWeight:"bold"}}> <b>Indian Institute of Information Technology Una H.P.</b></h1> */}
      
      <div>
        <Link to={"/courses"}>
          <img src="Foot.png" />
        </Link>
      </div>

    </div>
  )
}

export default Contact;