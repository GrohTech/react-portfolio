import React from 'react';
import './Footer.css';

const Footer = () => {
    
    return(
        <section className="footer">
            <ul className="footer-list row">
                <li className="footer-item col-sm">
                    <a href="https://github.com/GrohTech" target="_blank">GitHub</a>             
                </li>
                <li className="footer-item col-sm">
                    <a href="https://www.linkedin.com/in/legroh/" target="_blank">LinkedIn</a>
                </li>
                <li className="footer-item col-sm">
                    <a href="https://codepen.io/GrohTech" target="_blank">CodePen</a>
                </li>
                <li className="footer-item col-sm">
                    <a href="https://twitter.com/GrohTech" target="_blank">Twitter</a>
                </li>
            </ul>
        </section>
    )

}

export default Footer;