import React from 'react';
import './Project.css';
import employeeTracker from '../../assets/images/employee-tracker.png';
import teamProfileGenerator from '../../assets/images/team-profile-generator.png';
import socialNetworkApi from '../../assets/images/social-network-api.png';
import workItDone from '../../assets/images/work-it-done.png';

const Project = () => {
    
    return(
        <section id="portfolio" className="project container">
            <section className="row"> 
                <section className="project-item" className=" col-sm">
                    <h3>Project 1</h3>
                    <img src={employeeTracker} className= "about-item" id="employee-tracker" style={{ width: "500px", height: "300px" }} alt="employee tracker project photo" />
                </section>
                <section className="project-item" className=" col-sm">
                    <h3>Project 2</h3>
                    <img src={teamProfileGenerator} className= "about-item" id="team-profile-generator" style={{ width: "500px", height: "300px" }} alt="team profile generator project photo" />    
                </section>
            </section>
            <section className="row">
                <section className="project-item" className=" col-sm">
                    <h3>Project 3</h3>
                    <img src={socialNetworkApi} className= "about-item" id="social-network-api" style={{ width: "500px", height: "300px" }} alt="social network api project photo" />   
                </section>
                <section className="project-item" className=" col-sm">
                    <h3>Project 4</h3>
                    <img src={workItDone} className= "about-item" id="work-it-done" style={{ width: "500px", height: "300px" }} alt="work it done project photo" />   
                </section>
            </section>
        </section>
    )

}

export default Project;