import React from 'react';
import { useSelector } from 'react-redux';
const shortid = require('shortid');

function Template2() {
    const dataStore = useSelector(state => state);

    return (
        <div className="static-container" style={{border:"5px solid #f0bebe", backgroundColor:"#fffeec", width: "1000px", margin: "0 auto"}}>
            <div>
                <div className="static-row" style={{height:"200px", backgroundColor:"#f0bebe", display: 'flex', alignItems: 'center'}}>
                    <div className="static-col" style={{width: '20%', textAlign: 'center'}}>
                        <img className="rounded" src={dataStore.imageURL} alt='profile-pic'
                             style={{maxHeight:'180px', minHeight:"120px", width:'100px', background:'grey', padding:0}}/>
                    </div>
                    <div className="static-col" style={{width: '50%', textAlign: 'center', fontWeight: 'bold', fontFamily: 'Serif'}}>
                        <div style={{color:"#de5b7b", fontSize:"55px"}}>
                            {dataStore.Personalinfo.first_name + " " + dataStore.Personalinfo.last_name}
                        </div>
                        <h5>{dataStore.Workexp[dataStore.Workexp.length - 1]?.title}</h5>
                    </div>
                    <div className="static-col" style={{width: '30%', textAlign: 'left'}}>
                        <div style={{fontSize:"18px"}}>
                            <div>{dataStore.Personalinfo.email}</div>
                            <div>{dataStore.Personalinfo.phoneNumber}</div>
                            <div>{dataStore.Personalinfo.address + ", " + dataStore.Personalinfo.city + ", " + dataStore.Personalinfo.state + ", " + dataStore.Personalinfo.postle_code}</div>
                        </div>
                    </div>
                </div>
            </div>

            <hr style={{height:"5px", backgroundColor:"#f0bebe"}}/>

            {/* Objective Section */}
            <div className="text-justify mx-4">
                {dataStore.Personalinfo.Objective}
            </div>

            <hr style={{height:"5px", backgroundColor:"#f0bebe"}}/>

            {/* Professional Experience */}
            <div className="static-container" style={{fontFamily:"Serif", marginTop: "20px"}}>
                <div className="static-row" style={{display: 'flex'}}>
                    <div className="static-col" style={{width: '25%', textAlign: 'left', color:"#de5b7b"}}>
                        <h4>Professional Experience</h4>
                    </div>
                    <div className="static-col" style={{width: '75%', textAlign: 'left', fontSize:"18px"}}>
                        {dataStore.Workexp.map((item) => (
                            <div key={shortid.generate()} style={{marginBottom: '10px'}}>
                                <b>{item.job_title}</b>
                                <div>Worked in {item.orgnization_name} from {item.start_year} to {item.end_year}.</div>
                                <div>{item.jobDescription}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <hr style={{height:"5px", backgroundColor:"#f0bebe"}}/>

            {/* Education Section */}
            <div className="static-container" style={{fontFamily:"Serif", marginTop: "20px"}}>
                <div className="static-row" style={{display: 'flex'}}>
                    <div className="static-col" style={{width: '25%', textAlign: 'left', color:"#de5b7b"}}>
                        <h4>Education</h4>
                    </div>
                    <div className="static-col" style={{width: '75%', textAlign: 'left', fontSize:"18px"}}>
                        {dataStore.Education.map((item) => (
                            <div key={shortid.generate()} style={{marginBottom: '10px'}}>
                                <b>{item.degree}</b>
                                <div>I have pursued my {item.type} in {item.degree} from {item.university}</div>
                                <div>Duration: {item.start_year} - {item.end_year}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <hr style={{height:"5px", backgroundColor:"#f0bebe"}}/>

            {/* Key Skills Section */}
            <div className="static-container" style={{fontFamily:"Serif", marginTop: "20px"}}>
                <div className="static-row" style={{display: 'flex'}}>
                    <div className="static-col" style={{width: '25%', textAlign: 'left', color:"#de5b7b"}}>
                        <h4>Key Skills</h4>
                    </div>
                    <div className="static-col" style={{width: '75%', textAlign: 'left', fontSize:"18px"}}>
                        <ul style={{listStyleType: "none", paddingLeft: 0}}>
                            {dataStore.Skills.map((skill) => (
                                <li key={shortid.generate()}>{skill.skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Template2;
