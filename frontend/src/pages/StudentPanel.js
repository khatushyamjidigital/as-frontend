
import Navi from '../Navi';
import useAuth from '../realm/useAuth';
import Button from '@mui/material/Button';
import DataTable from "react-data-table-component";
import { useEffect, useState } from 'react';
import * as React from 'react';
import { Link } from 'react-router-dom';


export default function StudentPanel() {

    const { auth } = useAuth();
    const [coursesData, setCoursesData] = useState([{}]);
    const [attendance1, setAttendance1] = useState({ name: "", id: "", present: "", absent: "", per: null });
    const [viewAttendance1, setViewAttendance1] = useState(false);
    const [row, setRow] = useState();
    const current = new Date();
    const date = `${current.getDate()}-0${current.getMonth() + 1}-${current.getFullYear()}`;




    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        setRow([{ ...attendance1 }]);
    }, [attendance1])

    async function fetchData() {
        await fetch(`https://kind-gray-piranha.cyclic.app/api/getCourses/${auth.studentId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then((res) => {
                var courseData = res.data.coursesStudentEnrolledIn
                console.log(courseData)
                setCoursesData([...courseData]);
            })
    }

    const getAttendance = async (courseId, courseName) => {

        fetch(`https://kind-gray-piranha.cyclic.app/api/viewAttendance/${courseId}/${auth.studentId}`, {
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
                setAttendance1({ courseName: courseName, name: sname, id: sid, present: present, absent: absent, per: per, date: date });
                setViewAttendance1(true);
            })
            .catch((err) => {
                if (!err.response.status === 400)
                    console.log("Error! Try again later");
                else
                    console.log("Invalid request")
            })
    }

    const columns = [
        {
            name: "S.no",
            style: { fontSize: "18px" },
            selector: row => "1",
        },
        {
            name: "Date",
            with: "30px",
            style: { fontSize: "18px" },
            selector: row => row.date
        },
        {
            name: "CourseName",
            width: "400px",
            style: { fontSize: "18px" },
            selector: row => row.courseName
        },
        {
            name: "Student Id",
            style: { fontSize: "18px" },
            selector: row => row.id,
        },
        {
            name: "Present",
            style: { fontSize: "18px" },
            selector: row => row.present
        },
        {
            name: "Absent",
            style: { fontSize: "18px" },
            selector: row => row.absent
        },
        {
            name: "Percentage",
            style: { fontSize: "18px" },
            selector: row => row.per
        },
    ]

    return (
        <>
            <Navi type={"logout"} /><br />
            <div style={{height:"600px"}}>
                <center style={{margin:"40px", marginBottom:"80px",fontSize:"40px"}}><strong>Welcome {auth.name} !!</strong></center>
                {coursesData.map((course, key) => {
                    return (
                        <Button style={{marginLeft:"20px"}} key={key} variant="contained" onClick={() => getAttendance(course.courseId, course.courseName)}>View Attendance for {course.courseId}<br />{course.courseName}</Button>
                    )
                })}

                {viewAttendance1 && <div style={{ width: "100%", marginTop: "40px" }}>
                    <div style={{ height: 900, width: '100%' }}>
                        <DataTable
                            title={`${auth.name}'s Attendance For subject - ${attendance1.courseName} is :-`}
                            columns={columns}
                            data={row}
                            fixedHeader
                            highlightOnHover
                        />
                    </div>
                </div>}
            </div>

            <div>
                <Link to={"/courses"}>
                    <img src="Foot.png" />
                </Link>
            </div>

        </>
    )
}


