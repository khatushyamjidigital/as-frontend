import * as React from 'react';
import CreateStudent from './adminCStudent';
import CreateTeacher from './adminCTeacher';
import { useState } from 'react';
import EnrollStudent from './adminEnrollStudent';
import ViewEnrollRequest from './adminViewEnrollR';


export default function AdminNavPanel() {

    const[option,setOption] = useState('createStudent');



    return (
        <>
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class={`nav-link ${(option==='createStudent')?"active":""}`} 
                    onClick={()=>setOption('createStudent')}>Create Student</a>
                </li>
                <li class="nav-item">
                    <a class={`nav-link ${(option==='createTeacher')?"active":""}`}
                    onClick={()=>setOption('createTeacher')}>Create Teacher</a>
                </li>
                {/* <li class="nav-item">
                    <a class={`nav-link ${(option==='enrollStudent')?"active":""}`}
                    onClick={()=>setOption('enrollStudent')}>Enroll Student</a>
                </li> */}
                <li class="nav-item">
                    <a class={`nav-link ${(option==='viewEnrollRequest')?"active":""}`}
                    onClick={()=>setOption('viewEnrollRequest')}>View Enroll request</a>
                </li>
            </ul>
            {/* <div className='container' style={{position:'relative',top:"-50px"}}> */}
                {(option==='createStudent')&&<CreateStudent />}
                {(option==='createTeacher')&&<CreateTeacher />}
                {(option==='enrollStudent')&&<EnrollStudent/>}
                {(option==='viewEnrollRequest')&&<ViewEnrollRequest/>}
            {/* </div> */}
        </>
    )
}