import React from 'react';
import "./Hero.css";

// import hero from "../images/hero.jpeg";

const Hero = () => {
    return (
        <div className="hero-container ">
            <div className="hero-content">
                <h1 className="hero-heading">Amar Shet's</h1>
                <div className="hero-divider"></div> {/* Divider */}
                <p className="hero-subtitle  ">Mayem House of Pottry</p>
                {/*<button className="hero-button">Explore Artworks</button>*/}
            </div>
        </div>
    );
};

export default Hero;