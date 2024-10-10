import React, {useEffect,useState } from 'react';
import './Educationinfo.css'
import { Link ,useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addElement, removeElement, updateEducation } from '../../Reduxmanager/Redux';
import CustomAlert from '../Alert/Alert';

const EducationDetailsForm = () => {
  const education=useSelector(state=>state.Education)
  const dispatch=useDispatch()
  const [message,setMessage]=useState("")
  const [showalert,setShowalert]=useState(false)
  const navigat=useNavigate()

  const handleInputChange = (index,field, value) => {
    dispatch(updateEducation({index:index,key:field,value:value}))
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
    for(let i of education){
    for(let key in i){
      if(i[key]===""){
        setMessage("In Education "+(education.indexOf(i)+1)+" "+key+" is empty")
        valid=false;
        break;
      }
      else{
        // setIsvalid(true)
        valid=true;
      }
    }
      if(!valid){
        break
      }
  }

    if(!valid){
      setShowalert(true)
    }else{
      navigat('/detailpage/skils')
    }
  }

  return (
    <div className="education-details-form">
      {showalert?<CustomAlert message={message} type="warning"/>:null}
      <h2>Education Details</h2>
      {education.map((e,index)=>(
        <div key={index}>
        <h4>Education {(index+1)}</h4>
        <div className="form-group">
          <label>Type</label>
          <select
            value={e.type}
            onChange={(e) => handleInputChange(index,'type', e.target.value)}
          >
            <option value="Post Graduation">Post Graduation</option>
            <option value="Under Graduation">Under Graduation</option>
            <option value="Diploma">Diploma</option>
          </select>
        </div>
  
        <div className="form-group">
          <label>University</label>
          <input
            type="text"
            value={e.university}
            onChange={(e) => handleInputChange(index,'university', e.target.value)}
            placeholder="Select University"
          />
        </div>
  
        <div className="form-group">
          <label>Degree</label>
          <input
            type="text"
            value={e.degree}
            onChange={(e) => handleInputChange(index,'degree', e.target.value)}
            placeholder="Enter Degree"
          />
        </div>
  
        <div className="form-group">
          <label>Start Year</label>
          <input
            type="text"
            value={e.start_year}
            onChange={(e) => handleInputChange(index,'start_year', e.target.value)}
            placeholder="Select year"
          />
        </div>
  
        <div className="form-group">
          <label>End Year</label>
          <input
            type="text"
            value={e.end_year}
            onChange={(e) => handleInputChange(index,'end_year', e.target.value)}
            placeholder="Select year"
          />
        </div>
        </div>
      ))}
      
      <div className="add-remove_button"> 
        <button onClick={()=>dispatch(addElement({key:"Education",element:{
            type:"Post Graduation",
            university:"",
            degree:"",
            start_year:"",
            end_year:""
        }}))} className="add-new">Add new</button>
        {education.length>1?<button onClick={()=>dispatch(removeElement({key:"Education"}))} className="add-new">Remove</button>:null}
        </div>
      <div className="action-buttons">
        <Link to='/detailpage/workexp'><button className="back-button">Back</button></Link>
        <button onClick={navigationk} className="next-button">Next</button>
      </div>
    </div>
  );
};

export default EducationDetailsForm;
