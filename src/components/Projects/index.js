import React from 'react';
import './Projects.css';
import employeeTracker from '../../assets/images/employee-tracker.png';
import teamProfileGenerator from '../../assets/images/team-profile-generator.png';
import socialNetworkApi from '../../assets/images/social-network-api.png';
import workItDone from '../../assets/images/work-it-done.png';
import dinnerAndDrinks from '../../assets/images/dinner-and-drinks.png';
import stillGood from '../../assets/images/still-good.png';

const Projects = () => {
    
    return(
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <section className="container">
                <section className="row"> 
                    <section className="col-sm">
                        <section className="project-item card">
                            <img src={employeeTracker} className= "card-img-top" id="employee-tracker" alt="employee tracker project photo" />
                            <section className="card-body">
                                <h3>Employee Tracker</h3>
                                <section className="card-text">
                                    <a className="card-link" href="https://github.com/GrohTech/employee-tracker" target="_blank">GitHub repo</a>
                                    <a className="card-link" href="https://watch.screencastify.com/v/KHA73YEd53qYPZx0RQvn" target="_blank">Live Demo</a>
                                </section>
                            </section>
                        </section>
                    </section>
                    <section className="col-sm">
                        <section className="project-item card">
                            <img src={teamProfileGenerator} className= "card-img-top" id="team-profile-generator" alt="team profile generator project photo" />  
                            <section className="card-body">
                                <h3>Team Profile Generator</h3>  
                                <section className="card-text">
                                    <a className="card-link" href="https://github.com/GrohTech/team-profile-generator" target="_blank">GitHub repo</a>
                                    <a className="card-link" href="https://watch.screencastify.com/v/CFt3U2D1eMNp9MbqtOZv" target="_blank">Live Demo</a>
                                </section>
                            </section>
                        </section>
                    </section>
                    <section className="col-sm">
                        <section className="project-item card">
                            <img src={socialNetworkApi} className="card-img-top" id="social-network-api" alt="social network api project photo" /> 
                            <section className="card-body">
                                <h3>Social Network API</h3>
                                <section className="card-text"> 
                                    <a className="card-link" href="https://github.com/GrohTech/social-network-api" target="_blank">GitHub repo</a>
                                    <a className="card-link" href="https://watch.screencastify.com/v/K9tFri5Vgnd2mjEkZ2eV" target="_blank">Live Demo</a>
                                </section>
                            </section>
                        </section>  
                    </section>
                </section>
                <section className="row mt-4">
                    <section className="col-sm">
                        <section className="project-item card">
                            <img src={workItDone} id="work-it-done" className="card-img-top" alt="work it done project photo" /> 
                            <section className="card-body">
                            <h3 className="card-title">Work It Done</h3>
                            <section className="card-text"> 
                                <a className="card-link" href="https://github.com/GrohTech/work-it-done" target="_blank">GitHub repo</a>
                                <a className="card-link" href="https://warm-eyrie-07140.herokuapp.com/" target="_blank">Live Demo</a>
                            </section>
                            </section>
                        </section>
                    </section>
                    <section className="col-sm">
                            <section className="project-item card">
                                <img src={dinnerAndDrinks} className= "card-img-top" id="dinner-and-drinks" alt="dinner and drinks project photo" />
                                <section className="card-body">
                                    <h3 className="card-title">Dinner &amp; Drinks</h3>
                                    <section className="card-text">
                                        <a className="card-link" href="https://github.com/GrohTech/dinner-and-drinks" target="_blank">GitHub repo</a>
                                        <a className="card-link" href="https://grohtech.github.io/dinner-and-drinks/" target="_blank">Live Demo</a>
                                    </section>
                                </section>
                            </section>
                    </section>
                    <section className="col-sm">
                            <section className="project-item card">
                                <img src={stillGood} className= "card-img-top" id="still-good" alt="still good project photo" />
                                <section className="card-body">
                                    <h3 className="card-title">StillGood</h3>
                                    <section className="card-text">
                                        <a className="card-link" href="https://github.com/GrohTech/still-good" target="_blank">GitHub repo</a>
                                        <a className="card-link" href="https://pacific-bayou-24755.herokuapp.com/" target="_blank">Live Demo</a>
                                    </section>
                                </section>
                            </section>
                    </section>
                </section>
            </section>
        </section>
    )

}

export default Projects;