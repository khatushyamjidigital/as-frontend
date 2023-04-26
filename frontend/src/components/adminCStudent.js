import * as React from 'react';
import { useState, useRef } from 'react';
import './styles/forms.css'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

export default function CreateStudent() {

    const [studentName, setStudentName] = useState('');
    const [studentAge, setStudentAge] = useState('');
    const [coursesEnrolled, setCoursesEnrolled] = useState([]);
    const [userName,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [errMsg,setErrMsg] = useState('');

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };
    const names = [
        'TCS-800',
        'TCS-801',
        'TCS-802',
        'TCS-803',
        'TCS-804',
        'TCS-805',
        'TCS-806',
        'TCS-807',
        'TCS-808',
        'TCS-809',
    ];

    const [courseName, setCourseName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setCourseName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };




    const handleSubmit = async (e) => {
        e.preventDefault();
        var body={
            name:studentName,
            age:studentAge,
            coursesEnrolledIn:courseName,
            username:userName,
            password:password
        }
        await fetch('https://kind-gray-piranha.cyclic.app/api/addStudent',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(body)
        })
        .then(res=>res.json())
        .then((res)=>{
            console.log(res)
            if(res.success===true)
            {
                setErrMsg('Student Created Successfully !!')
                setCourseName([]);
                setStudentAge('');
                setStudentName('');
                setPassword('');
                setUsername('');
            }
            else
                setErrMsg('Try Again After some time')

        })
        
    }


    return (
        <>
        <div className='container'>
        <h1 align='center'><b>Enter New Student Details</b></h1>
            <br />
            <form onSubmit={handleSubmit} className="form">
                <label for="name">Student Name:</label><br />
                <input type="text"
                    id="Name"
                    name="studentName"
                    autoComplete="off"
                    onChange={(e) => setStudentName(e.target.value)}
                    value={studentName}
                    required
                />
                <br />
                <label for="studentAge">Student Age</label><br />
                <input type="text"
                    id="age"
                    name="age"
                    onChange={(e) => setStudentAge(e.target.value)}
                    value={studentAge}
                    required
                />
                <br />
                <label for="userName">Student Username:</label><br />
                <input type="text"
                    id="Name"
                    name="userName"
                    autoComplete="off"
                    onChange={(e) => setUsername(e.target.value)}
                    value={userName}
                    required
                />
                <br />
                <label for="name">Password:</label><br />
                <input type="text"
                    id="Name"
                    name="studentName"
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                />
                <br />
                <div>
                    <FormControl sx={{ m: 1, width:"100%"}}>
                        <InputLabel id="demo-multiple-checkbox-label">Select Courses Enrolled In</InputLabel>
                        <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple
                            value={courseName}
                            onChange={handleChange}
                            input={<OutlinedInput label="Select Courses Enrolled In" />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                            {names.map((name) => (
                                <MenuItem key={name} value={name}>
                                    <Checkbox checked={courseName.indexOf(name) > -1} />
                                    <ListItemText primary={name} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>

                <input type="submit" id="formloginbutton" value='Save' />
            </form>
            {(errMsg !== '') && <div className='errBox'>{errMsg}</div>}

        </div>
            
        </>
    )
}