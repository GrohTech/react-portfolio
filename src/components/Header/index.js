import React from 'react';
import Navigation from '../Navigation';
import './Header.css';

const Header = () => {
    return(
        <section className="header">
                <section className="container">
                    <section className="header-logo row justify-content-center">
                        Lauren Groh
                    </section>
                    <section className="header-nav row">
                        <Navigation />
                    </section>
                </section>
        </section>
    )

}

export default Header;