import React from 'react';
import './Navigation.css';
import About from '../About';

const Navigation = () => {
    
    return(
        <section className="navigation">
            <ul className="navigation-list">
                <li className="nav-item">
                    <a href="#about">About</a>             
                </li>
                <li className="nav-item">
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li className="nav-item">
                    <a href="#contact">Contact</a>
                </li>
                <li className="nav-item">
                    <a href="#resume">Resume</a>
                </li>
            </ul>
        
        </section>
    )

}

export default Navigation;