import React, { useEffect, useRef } from "react";
import "../css/SkillSection.css";
import { observeIntersection } from "../utility/userInterfaceObserver";

const skills = [
  { name: "JavaScript", percentage: 90, pic:'./Images/js.png' },
  { name: "Reactjs", percentage: 75, pic:'./Images/react.png'},
  { name: "Nodejs", percentage: 70, pic:'Images/nodejs.png'},
  { name: "MongoDB", percentage: 70, pic:'Images/mongodb.png'},
  { name: "HTML/CSS", percentage: 95, pic:'Images/html.png' },
  { name: "Bootstrap", percentage: 95, pic:'Images/bootstrap.png' },
  { name: "C/C++", percentage: 90, pic:'Images/cpp.png' },
  { name: "JAVA", percentage: 65, pic:'Images/java.png' },
  { name: "DSA", percentage: 80, pic:'Images/dsa.png' },
  { name: "Dart/Flutter", percentage: 85, pic:'Images/flutter.png'},
  { name: "Android App Development", percentage: 80, pic:'Images/android.png'},
  { name: "Firebase", percentage: 85, pic:'Images/firebase.png'},
  { name: "API Integration", percentage: 75, pic:'Images/api.png' },
];

const SkillSection = () => {
    
    const skillRef = useRef(null)
    const skillHeaderRef = useRef(null)
    
    useEffect(()=>{
        observeIntersection([skillRef,skillHeaderRef])
    },[]);
  return (
<>
<div className="skill-section container my-3">
      <div className="row skill"  ref={skillRef}>
        <h1 className="header-text text-center">Skills</h1>
        {skills.map((skill, index) => (
          <div className=" col-md-6 d-flex justify-content-start align-items-center " key={index}>
            <img className="" src={`${skill.pic}`} alt="course-logo" height={'60px'} width={'60px'} />
            <div className="skill-item w-100">
              <div className="d-flex justify-content-between">
                <span>{skill.name}</span>
                <span>{skill.percentage}%</span>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${skill.percentage}%` }}
                  aria-valuenow={skill.percentage}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
</>
  );
};

export default SkillSection;
