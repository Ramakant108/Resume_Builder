import { Link, Route, Routes } from "react-router-dom";
import Personalinfo from "../Personalinfo/Personalinfo";
// import { useState } from "react";
import './Detailindexpage.css'
import Skils from "../../Skils/Skils";
import Workexp from "../../WorkExp/WorkExp";
import EducationDetailsForm from "../../Education/Educationinfo";

export default function Detailindex(){
 
  return (
    <div className="profile-component">
      <div className="menu sticky-menu">
        <h3>Details</h3>
        <ul>
          <Link to='personalinfo'><li>Personal Info</li></Link>
          <Link to='workexp'><li>Work Experience</li></Link>
          <Link to='education'><li>Education</li></Link>
          <Link to='skils'><li>Skills</li></Link>
        </ul>
      </div>
     <Routes> 
       <Route path="/" element={<Personalinfo/>}/>
       <Route path="personalinfo" element={<Personalinfo/>}/>
       <Route path="skils" element={<Skils/>}/>
       <Route path="workexp" element={<Workexp/>}/>
       <Route path="education" element={<EducationDetailsForm/>}/>
     </Routes>
    </div>
  );
}
