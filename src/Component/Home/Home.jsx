import React, { useState } from 'react';
import './Home.css'
import { imageDetailinfo } from '../Images/Data';
import { Link } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { updateElement } from '../../Reduxmanager/Redux';


function Home() {
    
    const dispatch=useDispatch()
    const [ismouseover,setISmouseover]=useState("isnotMouseover")
    const handelchanges=(keyname,valuename)=>{
        dispatch(updateElement({key:keyname,value:valuename}))
    }
    
    return (<>
        <div className="card-grid">
            {imageDetailinfo.map((card,index )=> (
                <div className="card" key={index}  onMouseOver={()=>setISmouseover(card.name)}  onMouseOut={()=>setISmouseover("isnotMouseover")}>
                    <img src={card.imageurl} alt={card.imageurl} className="card-image" />
                    {ismouseover===card.name?<Link to='/detailpage'><button  onClick={()=>handelchanges('selectedTemplete',card.name)} className="card-button">Use Template</button></Link>:null}
                </div>
            ))}
        </div>
        </>
    );
}

export default Home;