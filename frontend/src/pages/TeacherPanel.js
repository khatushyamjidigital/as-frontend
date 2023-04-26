import Navbar from "../Navi";
import useAuth from "../realm/useAuth";
import { useState, useEffect } from 'react';
import DataTable from "react-data-table-component";
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import BasicModal from "../components/Modal";


export default function Teacherpanel() {

    const { auth } = useAuth();
    const [courseId, setCourseId] = useState('');
    const current = new Date();
    const date = `${current.getDate()}-0${current.getMonth() + 1}-${current.getFullYear()}`;
    const [rows, setRows] = useState([]);
    const [studentAttendance, setStudentAttendance] = useState([]);
    const [pa, setPa] = useState('');
    const [success, setSuccess] = useState(false);
    const [studentDataSuccess, setStudentDataSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch(`https://kind-gray-piranha.cyclic.app/api/getAllCourses/${auth.teacherId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then((res) => {
                setCourses(res.data.courses);
            })
    }, [])


    const columns = [
        {
            name: "S.no",
            width:"100px",
            style:{fontSize:"18px"},
            selector: row => row.id,
        },
        // {
        //     name: "Date",
        //     width:"220px",
        //     style:{fontSize:"18px"},
        //     cell: row => (
        //         <input type={"text"} style={{width:"150px"}}></input>
        //     ),
        // },
        {
            name: "CourseId",
            width:"140px",
            style:{fontSize:"18px"},
            selector: row => row.courseId
        },
        {
            name: "Student Age",
            width:"150px",
            style:{fontSize:"18px"},
            selector: row => row.age
        },
        {
            name: "Student Id",
            width:"150px",
            style:{fontSize:"18px"},
            selector: row => row.studentId
        },
        {
            name: "Student Name",
            width:"200px",
            style:{fontSize:"18px"},
            selector: row => row.studentName,
        },
        {
            name: "Present",
            width:"200px",
            style:{fontSize:"18px"},
            selector: row => row.p,
        },
        {
            name: "Absent",
            width:"200px",
            style:{fontSize:"18px"},
            selector: row => row.a,
        },

        {
            name: "Present/Absent",
            cell: row => (
                <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    onChange={(event) => {
                        handleChange(event.target.value, row.studentId)
                    }}
                    
                >
                    <FormControlLabel value="present" control={<Radio />} label="Present" />
                    <FormControlLabel value="absent" control={<Radio />} label="Absent" />
                </RadioGroup>
            ),
            
        },

    ];

    const handleChange = (val, sid) => {
        setPa(val);
        var attendance = { sid, val };
        setStudentAttendance(studentAttendance => [
            ...studentAttendance,
            { ...attendance }
        ]);
        console.log(studentAttendance);
    }

    const submitAttendance = () => {

        if(document.getElementById("dateBox").value==="")
        {   
            alert("Enter Date");
            return;
        }    
        var body = {
            courseId: courseId,
            attendance: studentAttendance
        };
        fetch('https://kind-gray-piranha.cyclic.app/api/updateAttendance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then((res) => {
                console.log(res)
                if (res.err === 200) {
                    setSuccess(true);
                    setErrMsg(res.message);
                }
                else
                    setErrMsg(res.message);
            })
        setRows([]);
        setStudentAttendance([]);
        setStudentDataSuccess(false);
        document.getElementById("dateBox").value = "";
    }



    function handleAddStudentData(studentData) {
        setRows(rows => [
            ...rows,
            { ...studentData }
        ]);
    }

    const getStudentData = (courseId) => {

        fetch(`https://kind-gray-piranha.cyclic.app/api/getStudents/${courseId}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(res => res.json())
            .then((res => {
                setRows([]);
                console.log(res.data);
                var studentData = res.data;
                studentData.map((student, i) => {
                    var ro = {
                        id: i + 1,
                        studentId: student.studentId,
                        studentName: student.studentName,
                        age: student.studentAge,
                        date: date,
                        courseId: courseId,
                        overall: student.overallAttendance,
                        p:student.attendance[0].P,
                        a:student.attendance[0].A
                    };
                    for(i in student.attendance)
                    {
                        if(student.attendance[i].courseId===ro.courseId)
                        {
                            ro.p = student.attendance[i].P
                            ro.a = student.attendance[i].A
                            break;
                        }
                    }
                    handleAddStudentData(ro);
                    setCourseId(courseId);
                    setStudentAttendance([]);
                    setSuccess(false);
                    setStudentDataSuccess(true);
                })
            }))

    };



    return (
        <>
            <Navbar type={"logout"}/>
            <div style={{ position: "relative" }}>
                <div style={{ width: '15%', height: 900, backgroundColor: "beige", position: "relative" }}>
                   <br/><br/> <center><strong>Welcome {auth.name} !!</strong></center><br/><br/><br/>
                   <center>Select Course Below !</center>
                    {courses.map((i, key) => {
                        return (
                            <button key={key}
                                style={
                                    {
                                        width: "150px",
                                        height: "50px",
                                        fontSize: "12px",
                                        position:"relative",
                                        left:"20%",
                                        backgroundColor:"white",
                                        
                                    }}
                                onClick={() => {
                                    getStudentData(i);
                                }}>
                                {i}
                            </button>);
                    })}
                </div>
                <div style={{ height: 900, width: '85%', position: "absolute", top: 0, right: 0 }}>
                    <DataTable
                        title={`Student List For Course Id - ${courseId}`}
                        columns={columns}
                        data={rows}
                        pagination
                        fixedHeader
                        selectableRows
                        selectableRowsHighlight
                        highlightOnHover
                        actions={
                            <>
                                <label>Date</label>
                                <input id="dateBox" type={"text"} style={{width:"150px"}}></input>
                                <button onClick={submitAttendance} style={{backgroundColor:"blue",color:"white"}}>Save</button>
                            </>
                        }
                    />
                </div>
                {!studentDataSuccess &&
                    <div style={{ position: "absolute", left: "44%", top: "40%" }}>
                        <strong><span style={{color:"red",fontSize:"25px"}}>Please select course to view student List !!</span></strong>
                    </div>
                }
                {success && <div>
                    <BasicModal msg={errMsg} />

                </div>}
            </div>
        </>
    )
}
