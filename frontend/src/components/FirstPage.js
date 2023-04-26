import React from "react";
import { Link } from "react-router-dom";
import Navi from "../Navi";
import Display from "./Display";
import '../Styles/card.css';


const FirstPage = () => {
  return (
    <div>
      <Navi />
      <Display />
     
      <div className="flx">
      <div className="card">
      <Link to={"/departments"}>

        <div >
          <img src="iit.jpg" alt="photo" className="card_img"/>
          </div>
          </Link>
          <div>
          <h2 style={{fontFamily:"segoe"}}>DEPARTMENTS</h2>
          <p className="card_p">
          Bachelor of Technology (BTech) is a professional
                    undergraduate engineering degree programme awarded to
                    candidates after complete four years of study in the
                    field.
          </p>
        </div>
      
      </div>
      <div className="card">
        <Link to={"/courses"}>

        <div >
          <img src="cours.png" alt="photo" className="card_img"/> </div></Link>
          <div>
          <h2 style={{fontFamily:"segoe"}}>COURSES</h2>
          <p className="card_p">
            IIIITUna offers BTech Computer Science , Information
                      Technology, Electronics and Communication Engineering are
                      among the most in-demand specializations in BTech.
          </p>
        </div>
      
      </div>
      <div className="card">
      <Link to={"/attendance"}>
          <div >
          <img src="attendance.png" alt="photo" className="card_img"/> 
          </div>
          </Link>
          
          <h2 style={{fontFamily:"segoe"}}>ATTENDANCE</h2>
          <p className="card_p">
          It is mandatory for students to have a minimum of 75 percent
                    attendance per subject per semester in order to attend
                    Semester exams. If it is less than 50 %, student will be
                    detained.
          </p>
        
       
      
      </div>
      <div className="card">
      <Link to={"/examination"}>
        <div >
          <img src="exam.jpg" alt="photo" className="card_img" style={{height:"60%"}} />
          </div>
          </Link>
          <div>
          <h2 style={{fontFamily:"segoe"}}>EXAMINATIONS</h2>
          <p className="card_p">
          There comes semester exams after 5-6 months. The marks will
                    be different for each college like say 70 or 75 marks for a
                    paper. score very well in this as it will affect your CGPA.
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

  );
};

export default FirstPage;
