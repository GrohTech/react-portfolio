import React from 'react';
import './Navigation.css';
import { NavLink } from "react-router-dom";

const Navigation = () => {

    return(
        <nav className="navigation container">
            <ul className="navigation-list row">
                <li className="col-sm">
                    <NavLink 
                        activeClassName = "active"
                        isActive={() => window.location.pathname === "/about"}
                        to = "/about"
                    >
                    About
                    </NavLink>            
                </li>
                <li className="col-sm">
                    <NavLink
                        activeClassName = "active"
                        isActive ={() => window.location.pathname === "/projects"}
                        to = "/projects"
                    >
                    Projects
                    </NavLink>
                </li>
                <li className="col-sm">
                    <NavLink
                        activeClassName = "active"
                        isActive ={() => window.location.pathname === "/contact"}
                        to = "/contact"
                    >
                    Contact
                    </NavLink>
                </li>
                <li className="col-sm">
                    <NavLink
                        activeClassName = "active"
                        isActive ={() => window.location.pathname === "/resume"}
                        to = "/resume"
                    >
                    Resume
                    </NavLink>
                </li>
            </ul>
        
        </nav>
    )

}

export default Navigation;


// return(
//     <section className="navigation container">
//         <ul className="navigation-list row">
//             <li className="nav-item col-sm">
//                 <a href="#about">About</a>             
//             </li>
//             <li className="nav-item col-sm">
//                 <a href="#portfolio">Portfolio</a>
//             </li>
//             <li className="nav-item col-sm">
//                 <a href="#contact">Contact</a>
//             </li>
//             <li className="nav-item col-sm">
//                 <a href="#resume">Resume</a>
//             </li>
//         </ul>
    
//     </section>
// )

// const Navigation = (props) => {
//     const [currentView, setCurrentView] = useState({
//         activeObject: null,
//         objects: {id = ""}
//     }); 