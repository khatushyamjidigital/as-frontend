 import { CDBFooter } from 'cdbreact';
import {CDBFooterLink} from 'cdbreact';
import React, { Fragment } from 'react';
import {  CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import "./App.css";

export const Footer = () => {
  return (    <>
   
    <CDBFooter className="shadow-box5">
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="https://iiitu.ac.in/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src="logo.png" width="70px" />
              <span className="ml-3 h5 font-weight-bold box5">IIIT Una</span>
            </a>
            <p className="my-3" style={{ width: '400px' }}>
                Indian Institute of Information Technology Una<br></br>
                Permanent Campus: Vill. Saloh, Teh. Haroli, Distt. Una <br></br>Himachal Pradesh-177209
            </p>
            <CDBBox display="flex" className="mt-4">
              <CDBBtn flat color="dark">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '500' }}>
              Attendance System
              
            </p>
            <CDBFooterLink className={"box6"} >Home</CDBFooterLink>
              <CDBFooterLink className={"box6"} >Student Portal</CDBFooterLink>
              <CDBFooterLink className={"box6"} >Faculty Portal</CDBFooterLink>
              <CDBFooterLink  className={"box6"} >Admin</CDBFooterLink>

            <CDBBox className={"box6"} flex="column" style={{ cursor: 'pointer', padding: '0',color: 'white' }}>
            
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Help
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink >Support</CDBFooterLink>
              <CDBFooterLink >Sign Up</CDBFooterLink>
              <CDBFooterLink >Sign In</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Classrooms
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink >Join Us</CDBFooterLink>
              <CDBFooterLink >Notifications</CDBFooterLink>
              <CDBFooterLink >Examinations</CDBFooterLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">&copy; Indian Institute of Information Technology, 2023. All rights reserved.</small>
      </CDBBox>
    </CDBFooter>
    </>
  );
  
}; 



export default Footer;