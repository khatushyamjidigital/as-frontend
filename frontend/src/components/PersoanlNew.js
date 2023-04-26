import React, { useEffect, useState } from "react";
/*import Navigation from "./Navigation";*/
import "./Form.css";

const PersoanlNew = () => {
  const [Married, setmarried] = useState();
 const [Address, setaddress] = useState();
 const [Faculty, setFaculty] = useState();
 const [first, setfirst] = useState();
 const [userRegistration , setUserRegistration] = useState({
  Faculty_ID : "",
  First_Name : "",
  Middle_Name : "",
  Last_Name : "",
 })

 const handleSubmit = (e) => {
  e.preventDefault()
 }

  const handleChange = (e) => {
    setmarried(e.target.value);
    console.log(Married)
  };

  const addressChange = (e) =>{
    setaddress(e.target.checked)
  }

  const idchange = (e) =>{
    setFaculty(e.target.value);
    setfirst(e.target.value)
    console.log(Faculty , first)
  }


  useEffect(() => {
    console.log(Faculty);
  }, [Faculty]); 
  const spouseName = Married === 'Married' ? (
    <input type="text" id="Spouse Name" placeholder="Spouse Name" />
  ) : null;

  const addressLoad = Address === true ? null : (
    <>
    <hr />
    <div className="chk align2">
    <h3 style={{ "margin-right": "2.7rem" }}>Permanent Address</h3>
    <input
      type="text"
      id="House No Floor"
      placeholder="House No Floor"
      required
    />
    <input
      type="text"
      id="Street/Locality"
      placeholder="Street/Locality"
      required
    />
    <input type="text" id="City" placeholder="City" required />
    <input type="text" id="State" placeholder="State" required />
    </div>
    <div className="chk align">
    <input type="text" id="Country" placeholder="Country" required/>
    <input type="number" id="Country" placeholder="Pincode" required />
  </div>
    </>
  );
  return (
    <>
      <div className="nav">
       

      </div>
      <h1>Faculty Registration Form </h1>
      <div className = "personal">
        <form onSubmit={handleSubmit}>
          <div className="chk">
            <h3 style={{ "margin-right": "8.65rem" }}>Faculty ID</h3>
            <input type="text" id="title" placeholder="Faculty ID" value={userRegistration.Faculty_ID} onChange={idchange}/>
          </div>
          <hr />
          <div className="chk">
            <h3 style={{ "margin-right": "5rem" }}>Personal Details</h3>
            <select style={{ width: "183px" }}>
              <option value="Gender" required>Title</option>
              <option>Prof.</option>
              <option>Dr.</option>
              <option>Ms.</option>
              <option>Mr.</option>
            </select>
            <input type="text" id="title" placeholder="First Name" required value={userRegistration.First_Name}/>
            <input type="text" id="title" placeholder="Middle Name" value={userRegistration.Middle_Name} />
            <input type="text" id="title" placeholder="Last Name" required value={userRegistration.Last_Name}/>
          </div>
          <div className="chk align">
            <input
              type="date"
              id="Date of Birth"
              placeholder="Date Of Birth"
              required
              style={{ width: "185px" }}
            />
            <select style={{ width: "183px" }}>
              <option value="Gender">Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Transgender</option>
            </select>
          </div>
          <hr />
          <div className="chk">
            <h3 style={{ "margin-right": "6.1rem" }}>Parent Details</h3>
            <input type="text" id="title" placeholder="Father's Name" required />
            <input type="text" id="title" placeholder="Mother's Name" required />
          </div>
          <hr />
          <div className="chk align2">
            <h3 style={{ "margin-right": "6.2rem" }}>Martial Status</h3>
            <select style={{ width: "183px" }} onClick={handleChange}>
              <option value={Married} disabled selected >Martial Status</option>
              <option value='Married'>
                Married
              </option>
              <option>Unmarried</option>
              <option>Widow</option>
              <option>Divorced</option>
            </select>
            {spouseName}
          </div>
          <hr />
          <div className="chk align2">
            <h3 style={{ "margin-right": "4.9rem" }}>Present Address</h3>
            <input
              type="text"
              id="House No Floor"
              placeholder="House No Floor"
              required
            />
            <input
              type="text"
              id="Street/Locality"
              placeholder="Street/Locality"
              required
            />
            <input type="text" id="City" placeholder="City" required />
            <input type="text" id="State" placeholder="State" required />
          </div>
          <div className="chk align">
            <input type="text" id="Country" placeholder="Country" required/>
            <input type="number" id="Country" placeholder="Pincode" required />
          </div>
          <div className="address">
          <input className="box" type='checkbox' value={Address} onChange={addressChange} />
            <label className="labell">Permanent Address is same as Present Address </label>
          </div>
          {addressLoad}
          <hr />
          <div className="chk align2">
            <h3 style={{ "margin-right": "5.15rem" }}>Contact Details</h3>
            <input type="number" id=" LandLine No" placeholder="LandLine No." />
            <input type="number" id=" Mobile No" placeholder="Mobile.No" required/>
            <input
              type="number"
              id="Alternate_Mobile_No"
              placeholder="Alternate Mobile No"
              required
            />
          </div>
          <hr />
          <div className="chk align2">
            <h3 style={{ "margin-right": "11.85rem" }}>Mail</h3>
            <input
              type="email"
              id=" Personal Email Id"
              placeholder="Personal Mail ID"
              required
            />
            <input
              type="email"
              id="Personal Alternate Email ID"
              placeholder="Personal Alternate Mail ID"
            />
            <input
              type="email"
              id=" Official Email ID"
              placeholder="Official Mail ID"
              required
            />
          </div>
          <hr />
          <div className="chk align2">
            <h3 style={{ "margin-right": "9.8rem" }}>Aadhar</h3>
            <input
              type="text"
              id=" Aadhar Number"
              placeholder="Aadhar Number"
              required
            />
          </div>
          <div className="chk">
            <h3 style={{ "margin-right": "6.7rem" }}>PAN Number</h3>
            <input type="text" id=" Aadhar Number" placeholder="PAN Number" />
          </div>
          <hr />
          <div className="chk align2">
            <h3 style={{ "margin-right": "12.7rem" }}>HR</h3>
            <input
              type="text"
              id=" Date of Joining"
              placeholder="Date of Joining"
            />
            <input
              type="text"
              id=" Date of Joining"
              placeholder="Designation"
            />
            <input type="text" id=" Date of Joining" placeholder="Department" />
          </div>
          <div className="chk">
            <select
              style={{
                width: "181.5px",
                "margin-left": "14.2rem",
                "margin-right": "1rem",
              }}
            >
              <option value="Is Left">Is Left</option>
              <option>YES</option>
              <option>No</option>
            </select>
            <input
              type="text"
              id="Date of Relieving"
              placeholder="Date of Relieving"
            />
          </div>
          <button type="submit">Save</button>
        </form>
        {/* <button onClick={preview}>Preview</button> */}
      </div>
    </>
  );
};

export default PersoanlNew;