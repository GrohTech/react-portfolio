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
                            <img src={workItDone} id="work-it-done" className="card-img-top" alt="work it done project photo" /> 
                            <section className="card-body">
                            <h3 className="card-title">Work It Done</h3>
                            <section className="card-text"> 
                                <a className="card-link" href="https://github.com/GrohTech/work-it-done" target="_blank">GitHub repo</a>
                                <a className="card-link" href="https://warm-eyrie-07140.herokuapp.com/" target="_blank">Live Demo</a>
                                <p>Trello-style project management app. Each user is presented with a workspace where projects can be stored. Within projects, users can create status columns with moveable task cards. As project tasks are completed, the user can move the task cards to reflect those changes.</p>
                                <p>Built with Node.js, Express.js, SQL, MySQL, Sequelize, Handlebars, JQuery, &amp; JQueryUI.</p>
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
                                        <p>Product tracking tool designed to remedy your wasteful habits or curate your existing flow of perishable items. Supports budget or waste-conscious people in their missions to move products from store to consumed by the expiration dates.</p>
                                        <p>Built with MongoDB, Express.js, React.js, Node.js, MaterialUI, GraphQL, Mongoose, Apollo Server Express, JSON Web Token, Bcrypt, Day.js, and React Router Dom.</p>
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
                                    <p>The REST API for a social networking app.</p>
                                    <p>Built with MongoDB, Express.js, Node.js, Mongoose ODM, and JavaScript. Routes tested with Insomnia REST Client.</p>
                                </section>
                            </section>
                        </section>  
                    </section>
                </section>
                <section className="row mt-4">
                    <section className="col-sm">
                        <section className="project-item card">
                            <img src={employeeTracker} className= "card-img-top" id="employee-tracker" alt="employee tracker project photo" />
                            <section className="card-body">
                                <h3>Employee Tracker</h3>
                                <section className="card-text">
                                    <a className="card-link" href="https://github.com/GrohTech/employee-tracker" target="_blank">GitHub repo</a>
                                    <a className="card-link" href="https://watch.screencastify.com/v/KHA73YEd53qYPZx0RQvn" target="_blank">Live Demo</a>
                                    <p>Command line tool for CRUD operations on employee databases. This app will help companies stay organized with their employee data. Companies can query existing employee information or update employee information.</p>
                                    <p>Built with JavaScript, Node.js, Inquirer, Express.js, and MySQL.</p>
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
                                        <p>Random recipe generator app for anyone who is hosting a last-minute dinner party and needs recipe ideas. Busy adults would find this app useful for preparing new and interesting meals during the work week.</p> 
                                        <p>Built with HTML, CSS, JavaScript, PureCSS, and client-side APIs.</p>
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
                                    <p>Command line team profile generator app. When initiated, this app presents the user with questions to answer on the command line. After the user answers the questions, they will be presented with a team.html file that contains an interactive team profile.</p>
                                    <p>Built with JavaScript, Node.js, FS, Inquirer, and Jest.</p>
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