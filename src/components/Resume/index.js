import React from 'react';
import './Resume.css';
import resume from "../../assets/resume.pdf";

const Resume = () => {
   
    return(
        <section id="resume" className="resume">
            <section className="container">
                <section className="row">
                <section className="resume-item-1 col-sm my-auto">
                    <h3 className="skills">Skills/Technologies:</h3>
                    <ul className="resume-list">
                        <li>MongoDB</li>
                        <li>Express.js</li>
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>Git/GitHub</li>
                        <li>JavaScript</li>
                        <li>HTML/CSS</li>
                        <li>WordPress</li>
                    </ul>
                </section>
                <section className="resume-item col-sm my-auto">
                    <h3 className="download-resume "><a href={ resume } target="_blank">Download Resume</a></h3>
                </section>
                </section>
            </section>
        </section>
    )

}

export default Resume;