import { Button, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";
 
const Login = () => {

 
 return (
 <>
 <form style={{ display: "flex", flexDirection: "column", maxWidth: "300px", margin: "auto" }}>
   <h1>Login</h1>
   <TextField
     label="Email"
     type="email"
     variant="outlined"
     name="email"
    //  value={form.email}
    //  onChange={onFormInputChange}
     style={{ marginBottom: "1rem" }}
   />
   <TextField
     label="Password"
     type="password"
     variant="outlined"
     name="password"
    //  value={form.password}
    //  onChange={onFormInputChange}
     style={{ marginBottom: "1rem" }}
   />
   <Button variant="contained" color="primary" >
     Login
   </Button>
   <p>Don't have an account? <Link to="/signup">Signup</Link></p>
 </form>
 </>
)};
 
export default Login;