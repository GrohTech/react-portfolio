import React from 'react';
import Navigation from '../Navigation';
import './Header.css';

const Header = () => {
    return(
        <section className="header">
                <section className="header-logo">
                    Lauren Groh
                </section>
                <section className="header-nav">
                    <Navigation />
                </section>
        </section>
    )

}

export default Header;