import { Link } from 'react-router-dom'
import './Myresume.css'
import { useSelector } from 'react-redux' 

import Template1 from '../Templetes/Template1'
import Template2 from '../Templetes/Template2'
import Template3 from '../Templetes/Template3'
import Template4 from '../Templetes/Template4'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'
import { useEffect, useRef, useState } from 'react'
import CustomAlert from '../Alert/Alert'

export default function Myrsume(){    
    const templetname=useSelector(state=>state.selectedTemplete)
    const [showsuccess,setShowsuccess]=useState(false)
    const detail=useSelector(state=>state)
    const [name,setName]=useState("")
    const pdfRef = useRef();
    const [isdisable,setIsdiseble]=useState(null)

    const checkvalid=()=>{
  
      let skillvalid=null;
      let educationvalid=null;
      let workexpvalid=null;
      let personalinfovalid=null;

      // to check skill is not empty
      for(let i of detail.Skills){
        for(let key in i){
          if(i[key]===""){
            skillvalid=false;
            break;
          }
          else{
            skillvalid=true;
          }
        }
        if(!skillvalid){
          break
        }
      }

      for(let i of detail.Workexp){
        for(let key in i){
          if(i[key]===""){
            workexpvalid=false;
            break
          }else{
            workexpvalid=true
          }
        }
        if(workexpvalid===false){
          break;
        }
      }

      for(let i of detail.Education){
        for(let key in i){
          if(i[key]===""){
            educationvalid=false;
            break;
          }
          else{
            educationvalid=true;
          }
        }
          if(!educationvalid){
            break
          }
      }

      for(let key in detail.Personalinfo){
        if(detail.Personalinfo[key]===""){
          personalinfovalid=false;
          break;
        }
        else{
          // setIsvalid(true)
          personalinfovalid=true;
        }
      }
        return personalinfovalid && educationvalid && skillvalid && workexpvalid && detail.imageURL!=="" && detail.selectedTemplete!=="";
    }

    useEffect(()=>{
      const isvalid=checkvalid()
      if(isvalid){
        setIsdiseble(false)
        console.log(isdisable)
      }else{
        setIsdiseble(true)
      }
    },[])

    const downloadpdf=()=>{
          
        const input = pdfRef.current;
        html2canvas(input, { scale: 2, scrollY:-window.scrollY }).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
    
          // PDF dimensions
          const pdf = new jsPDF('p','mm','a4');
          const imgWidth = 210; // A4 width in mm
    
          const imgHeight = (canvas.height * imgWidth) / canvas.width; // Adjust height based on aspect ratio
          
          pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
    
          // Save the PDF
          pdf.save(name);
        }).then(()=>{
          setTimeout(
              // this function shows the modal popup named 'SuccessMessage' after the resume has been successfully downloaded and make it to disappear on its own after 6000 ms//
              ()=>{
                setShowsuccess(true)
                  setTimeout(
                      ()=>{
                        setShowsuccess(false)  
                      }
                  ,6000)
              }
          ,100)
      });
      }


    return <>
         <div className="container">
            <div className="myresume">
              <div className="savecontainer">
            <div className="save_resume">
                  <div className="input">
                  <input type="text" value={name} disabled={isdisable} onChange={(e)=>setName(e.target.value)} placeholder='Save as PDF' />
                  </div>
                  <div className="res_buttons">
                  <Link to='/detailpage/skils'><button class="button-70">Back</button></Link>
                  <button onClick={downloadpdf} disabled={isdisable} class="button-70">Save</button>
                  </div>
                  {isdisable?<p style={{color:"red"}}>Fill all information to save</p>:<p style={{color:"green"}}>Save Resume</p>}
              </div>
                </div>
                <div className="resume_template_wrapper">
                <div ref={pdfRef} className='resume_template'>
                 {templetname===""?<h3>Please select Templete</h3>:templetname==='Templete1'?<Template1/>:templetname==="Templete2"?<Template2/>:templetname==="Templete3"?<Template3/>:<Template4/>}
                 </div>
                </div>
            </div> 
            {showsuccess?<CustomAlert message={"Successfully saved"} type="success"></CustomAlert>:null}
         </div>
    </>
}
