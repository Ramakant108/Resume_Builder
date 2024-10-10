import React from 'react';
import { useSelector } from 'react-redux';
const shortid = require('shortid');

function Template3() {
    const dataStore = useSelector(state => state);
    
    return (
        <div className='static-container' style={{ border: "1px solid #4b6982", backgroundColor: "#f7eebb", width: "1000px", margin: "0 auto" }}>
            <div className='static-row' style={{ display: 'flex', margin: 0 }}>
                {/* Left Column for Profile Information */}
                <div className='static-col' style={{ width: "30%", backgroundColor: "#583131", paddingTop: "5rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div className="media mb-3">
                        <img className="rounded-circle" src={dataStore.imageURL} alt='profile-pic'
                             style={{ maxHeight: '180px', minHeight: "100px", width: '100px', background: 'grey', padding: 0 }} />
                    </div>
                    <div className="mt-3 font-weight-bold" style={{ fontFamily: "Serif", textAlign: "center" }}>
                        <div style={{ color: "white", fontSize: "30px" }}>{dataStore.Personalinfo.first_name + " " + dataStore.Personalinfo.last_name}</div>
                        <h5 className='pt-2' style={{ color: "#adccc7", fontSize: "20px" }}>{dataStore.Workexp[dataStore.Workexp.length - 1].title}</h5>
                    </div>
                    <div className="p-4" style={{ textAlign: "left" }}>
                        <div className="mb-2" style={{ backgroundColor: 'white', color: "black" }}>Email:</div>
                        <div style={{ color: '#f7f7f7' }}>{dataStore.Personalinfo.email}</div>
                        <div className="mb-2 mt-2" style={{ backgroundColor: 'white', color: "black" }}>Contact:</div>
                        <div style={{ color: '#f7f7f7' }}>{dataStore.Personalinfo.phoneNumber}</div>
                        <div className="mb-2 mt-2" style={{ backgroundColor: 'white', color: "black" }}>Address:</div>
                        <div style={{ color: '#f7f7f7' }}>{dataStore.Personalinfo.address + ", " + dataStore.Personalinfo.city + ", " + dataStore.Personalinfo.state + ", " + dataStore.Personalinfo.postle_code}</div>
                    </div>
                </div>

                {/* Right Column for Professional Experience, Education, and Skills */}
                <div className='static-col' style={{ width: "70%", padding: "2rem" }}>
                    <div>
                        <div className="text-justify mt-4">{dataStore.Personalinfo.objective}</div>
                        <hr style={{ height: "5px", backgroundColor: "#4b6982" }} />
                    </div>
                    <div style={{ fontFamily: "Serif" }}>
                        <div>
                            <div className="text-left bg-light mb-4" style={{ color: "#4b6982" }}><h3><b>Professional Experience</b></h3></div>
                            <div className="text-left" style={{ fontSize: "18px" }}>
                                {dataStore.Workexp.map((item) => (
                                    <div key={shortid.generate()} className='mb-4'>
                                        <div><h4>{item.orgnization_name}</h4></div>
                                        <div><b>{item.job_title}</b></div>
                                        <div className='mt-2 mb-3'>
                                            <div>Worked in {item.orgnization_name} from {item.start_year} to {item.end_year}.</div>
                                            <div>{item.jobDescription}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <hr style={{ height: "5px", backgroundColor: "#4b6982" }} />
                            <div className="bg-light text-left" style={{ color: "#4b6982" }}><h3><b>Education</b></h3></div>
                            <div className="text-left">
                                <div style={{ fontSize: "18px" }}>
                                    {dataStore.Education.map((item) => (
                                        <div key={shortid.generate()} className='mb-4'>
                                            <h5>{item.degree}</h5>
                                            <div>I have pursued my {item.type} <b>from {item.university}</b></div>
                                            <p>Duration: {" " + item.start_year + " - " + item.end_year}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <hr style={{ height: "5px", backgroundColor: "#4b6982" }} />
                            <div className="bg-light text-left">
                                <h3 style={{ color: "#4b6982" }}><b>Key Skills</b></h3>
                            </div>
                            <div className="text-left mb-4" style={{ fontSize: "18px" }}>
                                <ul className="list-unstyled">
                                    {dataStore.Skills.map((skill) => (
                                        <li key={shortid.generate()}>{skill.skill}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Template3;
