import React from 'react';
import './Navigation.css';
import About from '../About';

const Navigation = () => {
    
    return(
        <section className="navigation container">
            <ul className="navigation-list row">
                <li className="nav-item col-sm">
                    <a href="#about">About</a>             
                </li>
                <li className="nav-item col-sm">
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li className="nav-item col-sm">
                    <a href="#contact">Contact</a>
                </li>
                <li className="nav-item col-sm">
                    <a href="#resume">Resume</a>
                </li>
            </ul>
        
        </section>
    )

}

export default Navigation;