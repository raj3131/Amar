import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [prevScrollY, setPrevScrollY] = useState(0);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);

    // Function to toggle the mobile drawer menu
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    // Function to handle scroll behavior
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > prevScrollY) {
                setIsNavbarVisible(false); // Hide navbar when scrolling down
            } else {
                setIsNavbarVisible(true); // Show navbar when scrolling up
            }

            setPrevScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollY]);

    return (
        <div>
            {/* Navbar */}
            <nav className={`navbar ${isNavbarVisible ? "navbar-visible" : "navbar-hidden"}`}>
                <div className="navbar-container">
                    {/* Left Links */}
                    <ul className="nav-links nav-left">
                        <li><a href="#" className="nav-link">Home</a></li>
                        <li><a href="#" className="nav-link">About</a></li>
                    </ul>

                    {/* Centered Logo */}
                    <a href="#" className="nav-logo">Amar's Art</a>

                    {/* Right Links */}
                    <ul className="nav-links nav-right">
                        <li><a href="#" className="nav-link">Services</a></li>
                        <li><a href="#" className="nav-link">Contact</a></li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="mobile-menu">
                        <button className="menu-button" onClick={toggleDrawer}>
                            &#9776; {/* Hamburger Icon */}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Drawer */}
            <div className={`nav-drawer ${isDrawerOpen ? "open" : ""}`}>
                <ul className="nav-links">
                    <li><a href="#" className="nav-link" onClick={toggleDrawer}>Home</a></li>
                    <li><a href="#" className="nav-link" onClick={toggleDrawer}>About</a></li>
                    <li><a href="#" className="nav-link" onClick={toggleDrawer}>Services</a></li>
                    <li><a href="#" className="nav-link" onClick={toggleDrawer}>Contact</a></li>
                </ul>
            </div>

            {/* Overlay */}
            <div className={`overlay ${isDrawerOpen ? "active" : ""}`} onClick={toggleDrawer}></div>
        </div>
    );
}

export default Navbar;
