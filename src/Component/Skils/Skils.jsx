import {useEffect, useState } from "react";
import './Skils.css'
import { Link ,useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addElement, removeElement, updateSkils } from "../../Reduxmanager/Redux";
import CustomAlert from "../Alert/Alert";

export default function Skils(){
      const skills=useSelector(state=>state.Skills)
      const dispatch=useDispatch()
      const [message,setMessage]=useState("")
      const [showalert,setShowalert]=useState(false)
      const navigat=useNavigate()

      const handleInputChange = (index, field, value) => {
        dispatch(updateSkils({index:index,key:field,value:value}))
      };
    
      const addNewSkill = () => {
         dispatch(addElement({key:"Skills",element:{skill:""}}))
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
        for(let i of skills){
        for(let key in i){
          if(i[key]===""){
            setMessage("Skill "+(skills.indexOf(i)+1)+" is empty")
            valid=false;
            break;
          }
          else{
            // setIsvalid(true)
            valid=true;
          }
        }
      }
        if(!valid){
          setShowalert(true)
        }else{
          navigat('/myresume')
        }
      }
    
      return (
        <div className="skills-form">
          {showalert?<CustomAlert message={message} type="warning"/>:null}
          <h2>Skills</h2>
          {skills.map((skillEntry, index) => (
            <div key={index} className="form-group skill-entry">
              <label>Skill {index+1}</label>
              <input
                type="text"
                value={skillEntry.skill}
                onChange={(e) => handleInputChange(index, 'skill', e.target.value)}
                placeholder="Enter Skill"
              />
            </div>
          ))}
          <div className="add-remove-new-skill">
            <button type="button" onClick = {addNewSkill}>
              Add new skill
            </button>
            {skills.length>1?<button type="button" onClick = {()=>dispatch(removeElement({key:"Skills"}))}>
              Remove
            </button>:null}
          </div>
    
          <div className="action-buttons">
            <Link to='/detailpage/education'><button className="back-button">Back</button></Link>
            <button onClick={navigationk} className="next-button">Next</button>
          </div>
        </div>
      );
}