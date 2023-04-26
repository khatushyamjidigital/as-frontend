
import React from "react";
import { Link } from "react-router-dom";
import Navi from "../Navi";
import Display from "./Display";
import '../Styles/card.css';
import { Figure } from "react-bootstrap";
import { fontSize, textAlign } from "@mui/system";


const About = () => {
  return (
    <div>
      <Navi />

      <br/><br/>
      <h1 style={{align: "center", fontSize: "2.8rem", fontWeight:"bold"}}> <b>Indian Institute of Information Technology Una H.P.</b></h1><br /><br /><br />
      <h1 style={{align: "left", fontSize: "1.8rem"}}> About IIITUna</h1>
      <p style={{alignItems: "center" , padding:"90px", paddingTop:"10px", fontFamily:'roboto'}}> IIIT Una is one of the 20 IIITs being setup, funded and managed by the Ministry of Human Resource Development, Govt. of India under the Public Private Partnership (PPP) model.<br/> The partners setting up IIIT Una are the Ministry of Human Resource Development, Govt. of India, the Govt. of Himachal Pradesh, HP Power Corporation Limited and HP Transmission Corporation Limited. Admissions to the undergraduate programmes in the Institute are made through the Joint Entrance Examination (JEE).

At present, IIIT Una operates from its permanent campus at Saloh, Una. The campus is fully furnished and working full fledged from its permanent campus.
    </p>
    <div className="logo">
        <Figure class="bigpic">

          <center><img src="abtUna4.jpg" width="80%" style={{borderRadius:"10px"}}/> </center>
          <center><img src="abt.jpg" width="50%" style={{marginTop:"2%", borderRadius:"10px"}}/> </center>
          <center><img src="abtUna1.jpg" width="50%" style={{marginTop:"2%",borderRadius:"10px"}}/> </center>
          <center><img src="abtUna2.jpg" width="50%" style={{marginTop:"2%", borderRadius:"10px"}}/> </center>
          <center><img src="abtUna3.jpg" width="50%" style={{marginTop:"2%", borderRadius:"10px"}}/> </center>
        </Figure>
      </div>

      <div>
        <Link to={"/courses"}>
          <img src="Foot.png" />
        </Link>
      </div>

    </div>
  )
}

export default About;