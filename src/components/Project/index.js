import React from 'react';
import './Project.css';
import employeeTracker from '../../assets/images/employee-tracker.png';
import teamProfileGenerator from '../../assets/images/team-profile-generator.png';
import socialNetworkApi from '../../assets/images/social-network-api.png';
import workItDone from '../../assets/images/work-it-done.png';
import dinnerAndDrinks from '../../assets/images/dinner-and-drinks.png';

const Project = () => {
    
    return(
        <section id="portfolio" className="project">
            <section className="container">
                <section className="row"> 
                    <section className="col-sm">
                        <img src={employeeTracker} className= "card-img-top" id="employee-tracker" style={{ width: "500px", height: "300px" }} alt="employee tracker project photo" />
                        <h3 className="card-body">Employee Tracker</h3>
                    </section>
                    <section className=" col-sm">
                        <h3>Team Profile Generator</h3>
                        <img src={teamProfileGenerator} className= "about-item" id="team-profile-generator" style={{ width: "500px", height: "300px" }} alt="team profile generator project photo" />    
                    </section>
                </section>
                <section className="row">
                    <section className="project-item" className=" col-sm">
                        <h3>Social Network API</h3>
                        <img src={socialNetworkApi} id="social-network-api" style={{ width: "450px", height: "250px" }} alt="social network api project photo" />   
                    </section>
                    <section className=" col-sm">
                        <h3>Work It Done</h3>
                        <img src={workItDone} id="work-it-done" style={{ width: "400px", height: "200px" }} alt="work it done project photo" />   
                    </section>
                    <section className="col-sm card project-item">
                            <img src={dinnerAndDrinks} className= "card-img-top" id="dinner-and-drinks" alt="dinner and drinks project photo" />
                            <section className="card-body">
                                <h3 className="card-title">Dinner &amp; Drinks</h3>
                                <section className="card-text">
                                    <a className="card-link" href="https://github.com/GrohTech/dinner-and-drinks" target="_blank">GitHub repo</a>
                                    <a className="card-link" href="https://grohtech.github.io/dinner-and-drinks/" target="_blank">Live project</a>
                                </section>
                            </section>
                    </section>
                </section>
                <section className="row"> 
                        <section className="col-sm card">
                            {/* <section className="project-item card"> */}
                            <img src={dinnerAndDrinks} className= "card-img-top mx-auto" id="dinner-and-drinks" style={{ width: "500px", height: "300px" }} alt="dinner and drinks project photo" />
                            <section className="card-body">
                                <h3 className="card-title">Dinner &amp; Drinks</h3>
                                <section className="card-text">
                                    <a className="card-link" href="https://github.com/GrohTech/dinner-and-drinks" target="_blank">Check out the GitHub repo</a>
                                    <a className="card-link" href="https://grohtech.github.io/dinner-and-drinks/" target="_blank">Check out the live project</a>
                                </section>
                            </section>
                            {/* </section> */}
                        </section>
                        <section className="project-item" className=" col-sm">
                            <h3>Team Profile Generator</h3>
                            <img src={teamProfileGenerator} className= "about-item" id="team-profile-generator" style={{ width: "500px", height: "300px" }} alt="team profile generator project photo" />    
                        </section>
                </section>
            </section>
        </section>
    )

}

export default Project;