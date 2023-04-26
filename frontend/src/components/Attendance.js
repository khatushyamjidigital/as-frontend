import { display } from '@mui/system';
import React, { useRef, useEffect, useState } from 'react'
import { set } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Navbar from "../Navi";
import '../Styles/card.css'



const Attendance = () => {

  const [courseId, setCourseId] = useState('');
  const [studentId, setStudentId] = useState('');
  const [viewAttendance1, setViewAttendance1] = useState(false);
  const [viewAttendance2, setViewAttendance2] = useState(false);
  const [viewAttendance3, setViewAttendance3] = useState(false);
  const [viewAttendance4, setViewAttendance4] = useState(false);
  const [err, setErr] = useState(false);
  const [attendance1, setAttendance1] = useState({ name: "", id: "", present: "", absent: "", per: null });
  const [attendance2, setAttendance2] = useState({ name: "", id: "", present: "", absent: "", per: null });
  const [attendance3, setAttendance3] = useState({ name: "", id: "", present: "", absent: "", per: null });
  const [attendance4, setAttendance4] = useState({ name: "", id: "", present: "", absent: "", per: null });



  useEffect(() => {
    setStudentId('');
    setCourseId('');
    setErr(false);
  }, [viewAttendance1, viewAttendance2, viewAttendance3, viewAttendance4])

  useEffect(()=>{
    setErr(false);
  },[studentId,courseId]);

  const showAttendanceForm1 = () => {
    setViewAttendance1(true);
    setViewAttendance2(false);
    setViewAttendance3(false);
    setViewAttendance4(false);
  }
  const showAttendanceForm2 = () => {
    setViewAttendance1(false);
    setViewAttendance2(true);
    setViewAttendance3(false);
    setViewAttendance4(false);
  }
  const showAttendanceForm3 = () => {
    setViewAttendance1(false);
    setViewAttendance2(false);
    setViewAttendance3(true);
    setViewAttendance4(false);
  }
  const showAttendanceForm4 = () => {
    setViewAttendance1(false);
    setViewAttendance2(false);
    setViewAttendance3(false);
    setViewAttendance4(true);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch(`https://kind-gray-piranha.cyclic.app/api/viewAttendance/${courseId}/${studentId}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then((res) => {
        console.log(res)
        const present = res.p
        const absent = res.a
        const sname = res.studentName
        const sid = res.studentId
        var p = parseInt(present)
        var a = parseInt(absent)
        var per = (p / (p + a)) * 100;
        per = per.toFixed(2)
        if (viewAttendance1)
          setAttendance1({ name: sname, id: sid, present: present, absent: absent, per: per })
        if (viewAttendance2)
          setAttendance2({ name: sname, id: sid, present: present, absent: absent, per: per })
        if (viewAttendance3)
          setAttendance3({ name: sname, id: sid, present: present, absent: absent, per: per })
        if (viewAttendance4)
          setAttendance4({ name: sname, id: sid, present: present, absent: absent, per: per })
        if(res.p == null)
          setErr(true);


        console.log(attendance1)
      })
      .catch((err) => {
        if (!err.response.status === 400)
          console.log("Error! Try again later");
        else
          console.log("Invalid request")
      })

    setStudentId('');
    setCourseId('');
  }



  return (
    <>
      <Navbar />

      <div className="flx1">
        <div className="flx">
          <div className="card">
            <Link to={"/departments"}>

              <div >
                <img src="dsp.png" alt="photo" className="card_img" />
              </div>
            </Link>
            <div className='viewAttendance'>
              <h2 style={{ fontFamily: "segoe" }}>Digital Signal Processing</h2>
              <button className='viewAttendanceBtn' onClick={showAttendanceForm1}>View Attendance</button>
              {viewAttendance1 && <form onSubmit={handleSubmit}>
                <label style={{ fontFamily: "segoe" }}> Enter Student Id to View Attendance</label>
                <input
                  id="studentId"
                  type="text"
                  placeholder="Student Id"
                  name="studentId"
                  onChange={(e) => {
                    setStudentId(e.target.value);
                    setCourseId("TCS-800")
                  }}
                  value={studentId}
                  required />
                <input type="submit" value='View Attendance' />
                {err && <h6 style={{ fontFamily: "segoe" }}>Error! Please Check Student Id</h6>}
                {(attendance1.per != null) &&  <div className='attendanceBox'>
                  <h6 style={{ fontSize: "17px" }}><strong>Student Name :</strong> {attendance1.name}</h6>
                  <h6 style={{ fontSize: "15px" }}><strong>Student Id :</strong> {attendance1.id}</h6>
                  <h6 style={{ color: "red", fontSize: "15px" }}>Total Percentage: {attendance1.per}</h6>
                  <h6 style={{ color: "red", fontSize: "15px" }}>Total Present: {attendance1.present}</h6>
                  <h6 style={{ color: "red", fontSize: "15px" }}>Total Absent: {attendance1.absent}</h6>
                </div>}
                
              </form>}
            </div>
          </div>
          <div className="card">
            <Link to={"/departments"}>
              <div >
                <img src="cn.png" alt="photo" className="card_img" />
              </div>
            </Link>
            <div className='viewAttendance'>
              <h2 style={{ fontFamily: "segoe" }}>Computer Networks</h2>
              <button className='viewAttendanceBtn' onClick={showAttendanceForm2}>View Attendance</button>
              {viewAttendance2 && <form onSubmit={handleSubmit}>
                <label style={{ fontFamily: "segoe" }}> Enter Student Id to View Attendance</label>
                <input
                  id="studentId"
                  type="text"
                  placeholder="Student Id"
                  name="studentId"
                  onChange={(e) => {
                    setStudentId(e.target.value);
                    setCourseId("TCS-801")
                  }}
                  value={studentId}
                  required />
                <input type="submit" value='View Attendance' />
                {err && <h6 style={{ fontFamily: "segoe" }}>Error! Please Check Student Id</h6>}
                {(attendance2.per !== null) && <div className='attendanceBox'>
                  <h6 style={{ fontSize: "17px" }}><strong>Student Name :</strong> {attendance2.name}</h6>
                  <h6 style={{ fontSize: "15px" }}><strong>Student Id :</strong> {attendance2.id}</h6>
                  <h6 style={{ color: "red", fontSize: "15px" }}>Total Percentage: {attendance2.per}</h6>
                  <h6 style={{ color: "red", fontSize: "15px" }}>Total Present: {attendance2.present}</h6>
                  <h6 style={{ color: "red", fontSize: "15px" }}>Total Absent: {attendance2.absent}</h6>
                </div>}
              </form>}
            </div>
          </div>

          <div className="card">
            <Link to={"/courses"}>
              <div >
                <img src="rdbms.jpg" alt="photo" className="card_img" />
              </div>
            </Link>
            <div className='viewAttendance'>
              <h2 style={{ fontFamily: "segoe" }}>RDBMS</h2>
              <button className='viewAttendanceBtn' onClick={showAttendanceForm3}>View Attendance</button>
              {viewAttendance3 && <form onSubmit={handleSubmit}>
                <label style={{ fontFamily: "segoe" }}> Enter Student Id to View Attendance</label>
                <input
                  id="studentId"
                  type="text"
                  placeholder="Student Id"
                  name="studentId"
                  onChange={(e) => {
                    setStudentId(e.target.value);
                    setCourseId("TCS-802")
                  }}
                  value={studentId}
                  required />
                <input type="submit" value='View Attendance' />
                {err && <h6 style={{ fontFamily: "segoe" }}>Error! Please Check Student Id</h6>}
                {(attendance3.per !== null) && <div className='attendanceBox'>
                  <h6 style={{ fontSize: "17px" }}><strong>Student Name :</strong> {attendance3.name}</h6>
                  <h6 style={{ fontSize: "15px" }}><strong>Student Id :</strong> {attendance3.id}</h6>
                  <h6 style={{ color: "red", fontSize: "15px" }}>Total Percentage: {attendance3.per}</h6>
                  <h6 style={{ color: "red", fontSize: "15px" }}>Total Present: {attendance3.present}</h6>
                  <h6 style={{ color: "red", fontSize: "15px" }}>Total Absent: {attendance3.absent}</h6>
                </div>}
              </form>}
            </div>
          </div>
          <div className="card">
            <Link to={"/courses"}>
              <div >
                <img src="sql.jpg" alt="photo" className="card_img" style={{ height: "60%" }} />
              </div>
            </Link>
            <div className='viewAttendance'>
              <h2 style={{ fontFamily: "segoe" }}>Structured Query Language</h2>
              <button className='viewAttendanceBtn' onClick={showAttendanceForm4}>View Attendance</button>
              {viewAttendance4 && <form onSubmit={handleSubmit}>
                <label style={{ fontFamily: "segoe" }}> Enter Student Id to View Attendance</label>
                <input
                  id="studentId"
                  type="text"
                  placeholder="Student Id"
                  name="studentId"
                  onChange={(e) => {
                    setStudentId(e.target.value);
                    setCourseId("TCS-803")
                  }}
                  value={studentId}
                  required />
                <input type="submit" value='View Attendance' />
                {err && <h6 style={{ fontFamily: "segoe" }}>Error! Please Check Student Id</h6>}
                {(attendance4.per !== null) && <div className='attendanceBox'>
                  <h6 style={{ fontSize: "17px" }}><strong>Student Name :</strong> {attendance4.name}</h6>
                  <h6 style={{ fontSize: "15px" }}><strong>Student Id :</strong> {attendance4.id}</h6>
                  <h6 style={{ color: "red", fontSize: "15px" }}>Total Percentage: {attendance4.per}</h6>
                  <h6 style={{ color: "red", fontSize: "15px" }}>Total Present: {attendance4.present}</h6>
                  <h6 style={{ color: "red", fontSize: "15px" }}>Total Absent: {attendance4.absent}</h6>
                </div>}
              </form>}
            </div>
          </div>
        </div>
      </div>



      <div>
        <Link to={"/courses"}>
          <img src="Foot.png" />
        </Link>
      </div>

    </>
  )
}

export default Attendance