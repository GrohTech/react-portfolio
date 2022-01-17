import React from 'react';
import './About.css';
import portfolioPhoto from '../../assets/images/portfolio-photo.png'

const About = () => {
   
    return(
        <section className="about" id="about">
            <section className="container">
                <section className="row">
                    <section className="about-item col-sm-4 my-auto">
                        <img src={portfolioPhoto} className= "about-item" id="portfolio-photo" style={{ width: "300px", height: "300px" }} alt="portfolio-photo" />
                    </section>
                    <section className="about-item col-sm-8 my-auto text-start">
                        <p>A love for hiking and camping is what inspired me to create my first website on WordPress, in 2015. I became empowered by the realization that I could solve any problem by seeking information and educating myself.</p>
                        <p>Knowing how to use WordPress led to opportunities to create and manage several websites at the University of Wisconsin-Milwaukee (my current workplace and alma mater). That skill was also the springboard to training opportunities in HTML, CSS, and the University of Wisconsin Extended Campus Full Stack Coding Bootcamp, where I gained the skills of MERN stack development.</p>
                    </section>
                </section>
            </section>
        </section>
    )

}

export default About;