import * as React from 'react';
import Navi from '../Navi';
import useAuth from '../realm/useAuth';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import AdminNavPanel from '../components/adminNav';

export default function AdminPanel() {

    const { auth } = useAuth();





    return (
        <>
            <Navi type={"logout"} /><br />
            <div>
                <center style={{ margin: "40px", marginBottom: "80px", fontSize: "40px" }}><strong>Welcome {auth.name} !!</strong></center>
                <div class="alert alert-info" role="alert">
                    <h4 class="alert-heading"><b>Currently Logged In as a Admin !</b></h4>
        
                    <p class="mb-0">Use The Services Below.</p>
                </div>
                <AdminNavPanel />
            </div>

            <div>
                <Link to={"/courses"}>
                    <img src="Foot.png" />
                </Link>
            </div>
        </>
    )
}