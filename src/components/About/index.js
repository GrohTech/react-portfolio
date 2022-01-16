import React from 'react';
import './About.css';
import portfolioPhoto from '../../assets/images/portfolio-photo.png'

const About = () => {
   
    return(
        <section className="about">
            <h2 id="about">Who is Lauren?</h2>
            <img src={portfolioPhoto} className="portfolio-photo" style={{ width: "100%" }} alt="portfolio-photo" />
        </section>
    )

}

export default About;