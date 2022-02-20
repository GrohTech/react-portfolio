import React from 'react';
import './Resume.css';
import resume from "../../assets/resume.pdf";

const Resume = () => {
   
    return(
        <section id="resume" className="resume">
            <h2>Skills &amp; Experience</h2>
            <section className="container">
                <section className="row">
                <section className="resume-item-1 col-sm my-auto">
                    <ul className="resume-list">
                        <li>MongoDB</li>
                        <li>Express.js</li>
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>MySQL</li>
                        <li>Sequelize</li>
                        <li>Mongoose ODM</li>
                        <li>jQuery</li>
                        <li>MaterialUI</li>
                        <li>GraphQL</li>
                        <li>Jest</li>
                        <li>IndexedDB</li>
                        <li>Webpack</li>
                    </ul>
                </section>
                <section  className="resume-item-2 col-sm my-auto">
                    <ul className="resume-list">
                        <li>SQL</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Object-Oriented Programming</li>
                        <li>Object-Relational Mapping</li>
                        <li>Progressive Web Applications</li>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>Heroku</li>
                        <li>Insomnia REST Client</li>
                        <li>MySQL Workbench</li>
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