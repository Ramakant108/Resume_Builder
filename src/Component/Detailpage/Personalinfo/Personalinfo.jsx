import { Link, useNavigate } from 'react-router-dom';
import './Personalinfo.css'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { updateElement, updatepersonalinfo } from '../../../Reduxmanager/Redux';
import CustomAlert from '../../Alert/Alert';
// import { useEffect,useState } from 'react';



export default function Personalinfo(){
    const dispatch=useDispatch()
    const personalinfo=useSelector(state=>state.Personalinfo)
    const imagurl=useSelector(state=>state.imageURL)
    const [showalert,setShowalert]=useState(false)
    const navigat=useNavigate()
    const [message,setMessage]=useState("")

    // Handle file change for profile image
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file && (file.type === 'image/jpeg' || file.type === 'image/png')){
        dispatch(updateElement({key:'imageURL',value:URL.createObjectURL(file)}))
      } else {
        alert('Please upload a valid image file (JPG or PNG)');
      }
    };

    useEffect(() => {
      if (showalert) {
        const timer = setTimeout(() => {
          setShowalert(false); // Hide the alert after 3 seconds
        }, 3000);
        // Cleanup function to clear the timeout if the component unmounts or showalert changes
        return () => clearTimeout(timer);
      }
    }, [showalert]); 

    const navigationk=()=>{
      let valid=null;
      for(let key in personalinfo){
        if(personalinfo[key]===""){
          setMessage(key+" is empty")
          valid=false;
          break;
        }
        else{
          // setIsvalid(true)
          valid=true;
        }
      }
      if(!valid){
        setShowalert((prev)=>prev?false:true)
      }else{
        navigat('/detailpage/workexp')
      }
    }
   
    return (
      <div className="right-side-content">
        {showalert?<CustomAlert message={message} type="warning"/>:null}
        {/* Profile Image Section */}
        <div className="profile-picture-section">
          <div className="profile-picture">
            {imagurl ? (
              <img src={imagurl} alt="Profile" />
            ) : (
              <img
                src="https://via.placeholder.com/100"
                alt="Placeholder Profile"
              />
            )}
          </div>
          <label className="change-photo">
            Change Profile photo
            <input
              type="file"
              accept=".jpg, .jpeg, .png"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
          </label>
        </div>
  
        {/* Form Section */}
        <div className="form-grid">
          <div className="form-group">
            <label>First name</label>
            <input type="text" value={personalinfo.first_name} onChange={(e)=>dispatch(updatepersonalinfo({key:'first_name',value:e.target.value}))} placeholder="First Name" />
          </div>
          <div className="form-group">
            <label>Last name</label>
            <input type="text" value={personalinfo.last_name} onChange={(e)=>dispatch(updatepersonalinfo({key:'last_name',value:e.target.value}))} placeholder="Last Name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" value={personalinfo.email} onChange={(e)=>dispatch(updatepersonalinfo({key:'email',value:e.target.value}))} placeholder="Email"/>
          </div>
          <div className="form-group">
            <label>Mobile</label>
            <input type="tel" value={personalinfo.phoneNumber} onChange={(e)=>dispatch(updatepersonalinfo({key:'phoneNumber',value:e.target.value}))} placeholder="+" />
          </div>
          <div className="form-group full-width">
            <label>Address</label>
            <input type="text" value={personalinfo.address} onChange={(e)=>dispatch(updatepersonalinfo({key:'address',value:e.target.value}))} placeholder="Address" />
          </div>
          <div className="form-group">
            <label>City</label>
            <input type="text" value={personalinfo.city} onChange={(e)=>dispatch(updatepersonalinfo({key:'city',value:e.target.value}))} placeholder="City" />
          </div>
          <div className="form-group">
            <label>State</label>
            <input type="text" value={personalinfo.state} onChange={(e)=>dispatch(updatepersonalinfo({key:'state',value:e.target.value}))} placeholder="State" />
          </div>
          <div className="form-group">
            <label>Postal code</label>
            <input type="text" value={personalinfo.postle_code} onChange={(e)=>dispatch(updatepersonalinfo({key:'postle_code',value:e.target.value}))} placeholder="Postle Code" />
          </div>
          <div className="form-group full-width">
            <label>Objective</label>
            <textarea
              value={personalinfo.objective}
              placeholder="Ojbective"
              onChange={(e)=>dispatch(updatepersonalinfo({key:'objective',value:e.target.value}))}
              rows="4"
            ></textarea>
          </div>
        </div>
        {/* Buttons Section */}
        <div className="button-group">
          <Link to='/'><button className="back-button">Back</button></Link>
          {/* <Link to={isvalid?'/detailpage/workexp':"#"}><button onClick={navigationk} className="next-button">Next</button></Link>  */}
          <button onClick={navigationk} className="next-button">Next</button>

        </div>
      </div>
    );
}