import React from 'react';
import './Navigation.css';

const Navigation = () => {
    
    return(
        <section className="navigation">
            <ul className="navigation-list">
                <li>
                    <a href="about">About me</a>
                </li>
                <li>
                    <a href="portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="contact">Contact</a>
                </li>
                <li>
                    <a href="resume">Resume</a>
                </li>
            </ul>
        
        </section>
    )

}

export default Navigation;