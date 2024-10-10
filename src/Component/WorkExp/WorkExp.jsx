import { useEffect, useState } from "react";
import './WorkExp.css'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addElement, removeElement, updateWorkexp } from "../../Reduxmanager/Redux";
import CustomAlert from "../Alert/Alert";


export default function Workexp(){
    const [isshowalert,setIsshowalert]=useState(false)
    const [message,setMessage]=useState("");
    const experiences=useSelector(state=>state.Workexp)
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const addNewExperience = () => {
      let element= {
        job_title:"",
        orgnization_name:"",
        start_year:"",
        end_year:""
       }
       dispatch(addElement({key:'Workexp',element:element}))
       
    };
    const removeExperiece=(index)=>{
      dispatch(removeElement({index:index,key:'Workexp'}))
    }
  
    const handleInputChange = (index, field, value) => {
      dispatch(updateWorkexp({index:index,key:field,value:value}))
    };
    const navigation=()=>{
      let valid=null
      for(let i of experiences){
        for(let key in i){
          if(i[key]===""){
            setMessage("In Experience " + (experiences.indexOf(i)+1) + " " + key + " is empty")
            valid=false;
            break
          }else{
            valid=true
          }
        }
        if(valid===false){
          break;
        }
      }
      if(!valid){
        setIsshowalert(true)
        console.log(isshowalert)
      }else{
         navigate('/detailpage/education')
      }
    }


   useEffect(()=>{
    if(isshowalert){
      const timerid=setTimeout(() => {
        setIsshowalert(false)
     }, 3000);

     return ()=>clearTimeout(timerid)
    }
    
    
   },[isshowalert])
    return (
      <div className="work-experience-form">
        {isshowalert?<CustomAlert message={message} type="warning"/>:null}
        <h2>Work Experience</h2>
        {experiences.map((experience, index) => (
          <div key={index} className="experience-section">
            <h3>Experience {index + 1}</h3>
            <div className="form-group">
              <label>Job Title</label>
              <input
                type="text"
                value={experience.job_title}
                onChange={(e) => handleInputChange(index, 'job_title', e.target.value)}
                placeholder="Enter Job Title"
              />
            </div>
            <div className="form-group">
              <label>Organization Name</label>
              <input
                type="text"
                value={experience.orgnization_name}
                onChange={(e) => handleInputChange(index, 'orgnization_name', e.target.value)}
                placeholder="Enter Organization Name"
              />
            </div>
            <div className="form-group">
              <label>Start Year</label>
              <input
                type="text"
                value={experience.start_year}
                onChange={(e) => handleInputChange(index, 'start_year', e.target.value)}
                placeholder="Select year"
              />
            </div>
            <div className="form-group">
              <label>End Year</label>
              <input
                type="text"
                value={experience.end_year}
                onChange={(e) => handleInputChange(index, 'end_year', e.target.value)}
                placeholder="Select year"
              />
            </div>
            <div className="form-group full-width">
            <label>Job Description</label>
            <textarea
              value={experience.jobDescription}
              placeholder="Ojbective"
              onChange={(e)=>handleInputChange(index,'jobDescription',e.target.value)}
              rows="4"
            ></textarea>
          </div>
          </div>
        ))}
        <div className="add-remove_button"> 
        <button onClick={addNewExperience} className="add-new">Add new</button>
        {experiences.length>1?<button onClick={()=>removeExperiece(experiences.length-1)} className="add-new">Remove</button>:null}
        </div>
        <div className="action-buttons">
        <Link to='/detailpage/personalinfo'><button className="back-button">Back</button></Link>
        <button onClick={navigation} className="next-button">Next</button>
        </div>
      </div>
    );
}