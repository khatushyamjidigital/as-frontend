import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';


export default function ViewEnrollRequest() {

    const [enrollRequests, setEnrollRequests] = useState([]);
    const [r,setR] = useState(false);


    useEffect(() => {
        fetch('https://kind-gray-piranha.cyclic.app/api/getEnrollRequest', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then((res) => {
                console.log(res);
                if (res.success === true) {
                    setEnrollRequests(res.requests)
                    console.log(enrollRequests)
                }
            })

    }, [r])


    const handleApprove = (requestNo)=>{
        fetch(`https://kind-gray-piranha.cyclic.app/api/changeEnrollRequestStatus/${requestNo}`,{
            method:'GET',
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then(
            setR(!r)
        )
    }
    const enrollRequestLength = enrollRequests.length


    return (
        <>
            <div style={{ width: "100%", padding: "2%" }}>
                {enrollRequestLength===0 && <div>No New Enroll Request's</div>}
                {enrollRequests.map((request, key) => {
                    return (
                        <div key={key} style={{ borderBottom: "2px solid grey", width: "100%", marginBottom: "10px" }}>
                            <b>Request No. - </b> {request.requestNo} <br />
                            <b>Name - </b> {request.name}    <br />
                            <b>Age - </b> {request.age} <br />
                            <b>Username - </b> {request.username} <br />
                            <b>Password - </b> {request.password}  <br />
                            <b>Courses To be Enrolled In :- </b> {request.coursesToBeEnrolledIn.map((course, key) => {
                                return (
                                    <div key={key} style={{marginLeft:"13%"}}>
                                        {key+1}. {course} 
                                    </div>
                                )
                            })}
                            <Button variant="contained" 
                                style={{marginRight:"2%",marginBottom:"2%", marginTop:"1%"}}
                                onClick={()=>handleApprove(request.requestNo)}
                                >Approve</Button>
                            <Button variant="contained" 
                                style={{marginBottom:"2%", marginTop:"1%"}}
                                onClick={()=>handleApprove(request.requestNo)}
                                >Discard</Button>
                            
                        </div>
                    )
                })}




            </div>
        </>
    )
}