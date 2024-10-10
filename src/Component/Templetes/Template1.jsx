import React from 'react';
import { useSelector } from 'react-redux';
import shortid from 'shortid';

function Template1() {
  const dataStore = useSelector((state) => state);

  return (
    <div className="resume-template-static" style={{ border: "5px solid #00adb5", backgroundColor: "beige", width: "100%", maxWidth: "1000px", margin: "auto" }}>
      {/* Header */}
      <div>
        <div className="header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "200px" }}>
          <div className="profile-pic" style={{ flex: "0 0 150px", textAlign: "center" }}>
            <img
              className="rounded"
              src={dataStore.imageURL}
              alt="profile-pic"
              style={{ maxHeight: "180px", minHeight: "120px", width: "100px", background: "grey", padding: 0 }}
            />
          </div>
          <div className="name-title" style={{ flex: "1", textAlign: "center" }}>
            <div style={{ color: "#00adb5", fontSize: "55px", fontFamily: "Serif" }}>
              {dataStore.Personalinfo.first_name + " " + dataStore.Personalinfo.last_name}
            </div>
            <h5>{dataStore.Workexp[dataStore.Workexp.length - 1]?.title}</h5>
          </div>
          <div className="contact-info" style={{ flex: "0 0 300px", textAlign: "left", fontSize: "18px" }}>
            <div>{dataStore.Personalinfo.email}</div>
            <div>{dataStore.Personalinfo.phoneNumber}</div>
            <div>
              {dataStore.Personalinfo.address + ", " + dataStore.Personalinfo.city + ", " + dataStore.Personalinfo.state + ", " + dataStore.Personalinfo.postle_code}
            </div>
          </div>
        </div>
      </div>
      <hr style={{ height: "5px", backgroundColor: "#00adb5" }} />

      {/* Objective */}
      <div className="objective" style={{ margin: "20px 0", fontSize: "16px", textAlign: "justify" }}>
        {dataStore.Personalinfo.Objective}
      </div>
      <hr style={{ height: "5px", backgroundColor: "#00adb5" }} />

      {/* Professional Experience */}
      <div className="section" style={{ marginBottom: "20px", display: "flex" }}>
        <h4 style={{ color: "#00adb5", fontFamily: "Serif", width: "200px" }}>Professional Experience</h4>
        <div style={{ fontSize: "16px", marginLeft: "20px" }}>
          {dataStore.Workexp.map((item) => (
            <div key={shortid.generate()} className="experience-item" style={{ marginBottom: "10px" }}>
              <b>{item.job_title}</b>
              <p>Worked at {item.orgnization_name} from {item.start_year} to {item.end_year}.</p>
              <p>{item.jobDescription}</p>
            </div>
          ))}
        </div>
      </div>
      <hr style={{ height: "5px", backgroundColor: "#00adb5" }} />

      {/* Education */}
      <div className="section" style={{ marginBottom: "20px", display: "flex" }}>
        <h4 style={{ color: "#00adb5", fontFamily: "Serif", width: "200px" }}>Education</h4>
        <div style={{ fontSize: "16px", marginLeft: "20px" }}>
          {dataStore.Education.map((item) => (
            <div key={shortid.generate()} className="education-item" style={{ marginBottom: "10px" }}>
              <b>{item.degree}</b>
              <p>Completed {item.type} in {item.degree} from {item.university}.</p>
              <p>Duration: {item.start_year} - {item.end_year}</p>
            </div>
          ))}
        </div>
      </div>
      <hr style={{ height: "5px", backgroundColor: "#00adb5" }} />

      {/* Skills */}
      <div className="section" style={{ marginBottom: "20px", display: "flex" }}>
        <h4 style={{ color: "#00adb5", fontFamily: "Serif", width: "200px" }}>Key Skills</h4>
        <ul style={{ fontSize: "16px", listStyleType: "none", paddingLeft: "0", marginLeft: "20px" }}>
          {dataStore.Skills.map((skill) => (
            <li key={shortid.generate()} style={{ marginBottom: "5px" }}>{skill.skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Template1;
