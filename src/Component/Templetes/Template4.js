import React from 'react';
import { useSelector } from 'react-redux';
const shortid = require('shortid');

function Template4() {
    const dataStore = useSelector(state => state);

    return (
        <div className='static-container' style={{ border: "1px solid #4b6982", width: "1000px", margin: "0 auto" }}>
            <div className='static-row' style={{ display: 'flex', margin: 0 }}>
                {/* Left Column */}
                <div className='static-col' style={{ width: "30%", backgroundColor: "#4b6982", paddingTop: "5rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div className="media">
                        <img className="rounded align-self-center" src={dataStore.imageURL} alt='profile-pic'
                             style={{ maxHeight: '180px', minHeight: "100px", width: '100px', background: 'grey', padding: 0 }} />
                    </div>
                    <div className="mt-3 font-weight-bold" style={{ fontFamily: "Serif", textAlign: "center" }}>
                        <div style={{ color: "white", fontSize: "30px" }}>{dataStore.Personalinfo.first_name + " " + dataStore.Personalinfo.last_name}</div>
                        <h5 className='pt-2' style={{ color: "#adccc7", fontSize: "20px" }}>{dataStore.Workexp[dataStore.Workexp.length - 1].job_title}</h5>
                    </div>
                    <div className="p-5" style={{ fontSize: "18px", textAlign: "left", color: "#f7f7f7" }}>
                        <div className="px-2 mb-2" style={{ backgroundColor: 'white', color: "black" }}>Email:</div>
                        <div>{dataStore.Personalinfo.email}</div>
                        <div className="px-2 mb-2 mt-2" style={{ backgroundColor: 'white', color: "black" }}>Contact:</div>
                        <div>{dataStore.Personalinfo.phoneNumber}</div>
                        <div className="px-2 mb-2 mt-2" style={{ backgroundColor: 'white', color: "black" }}>Address:</div>
                        <div>{dataStore.Personalinfo.address + ", " + dataStore.Personalinfo.city + ", " + dataStore.Personalinfo.state + ", " + dataStore.Personalinfo.Pin}</div>
                    </div>
                </div>

                {/* Right Column */}
                <div className='static-col' style={{ width: "70%", padding: "2rem" }}>
                    <div className="text-justify mt-4">{dataStore.Personalinfo.objective}</div>
                    <hr style={{ height: "5px", backgroundColor: "#4b6982" }} />

                    {/* Professional Experience */}
                    <div style={{ fontFamily: "Serif" }}>
                        <div className="text-left bg-light mb-4" style={{ color: "#4b6982" }}>
                            <h3><b>Professional Experience</b></h3>
                        </div>
                        <div className="text-left" style={{ fontSize: "18px" }}>
                            {dataStore.Workexp.map((item) => (
                                <div key={shortid.generate()}>
                                    <div className='mt-2'><h4>{item.orgnization_name}</h4></div>
                                    <div className='mt-2'><b>{item.job_title}</b></div>
                                    <div className='mt-2 mb-3'>
                                        <div>Worked in {item.orgnization_name} from {item.start_year} to {item.end_year}.</div>
                                        <div>{item.jobDescription}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="w-100 mt-4"> </div>
                        <hr style={{ height: "5px", backgroundColor: "#4b6982" }} />

                        {/* Education */}
                        <div className="bg-light text-left" style={{ color: "#4b6982" }}>
                            <h3><b>Education</b></h3>
                        </div>
                        <div className="text-left">
                            <div style={{ fontSize: "18px" }}>
                                {dataStore.Education.map((item) => (
                                    <div key={shortid.generate()}>
                                        <h5>{item.degree}</h5>
                                        <div>I have pursued my {item.type} <b>from {item.university}</b></div>
                                        <p>Duration: {item.start_year + " - " + item.end_year}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-100 mt-4"> </div>
                        <hr style={{ height: "5px", backgroundColor: "#4b6982" }} />

                        {/* Key Skills */}
                        <div className="bg-light text-left">
                            <h3 style={{ color: "#4b6982" }}><b>Key Skills</b></h3>
                        </div>
                        <div className="text-left mb-4" style={{ fontSize: "18px" }}>
                            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                                {dataStore.Skills.map((skill) => (
                                    <li key={shortid.generate()}>{skill.skill}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Template4;
