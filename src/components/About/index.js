import React from 'react';
import './About.css';
import portfolioPhoto from '../../assets/images/portfolio-photo.png'

const About = () => {
   
    return(
        <section className="about" id="about">
            <section className="about-item">
                <h2>About</h2>
                <img src={portfolioPhoto} className= "about-item" id="portfolio-photo" style={{ width: "300px", height: "300px" }} alt="portfolio-photo" />
            </section>
            <section className="about-item">
                <p>Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Id ornare arcu odio ut. Id donec ultrices tincidunt arcu non sodales. Feugiat scelerisque varius morbi enim nunc faucibus.</p>
            </section>

        </section>
    )

}

export default About;