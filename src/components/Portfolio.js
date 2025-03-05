import React, { useEffect, useRef } from "react";
import "./Portfolio.css";
import pots from "../images/portfolio/pots.jpg";
import statue from "../images/portfolio/statue.jpg";
import interiorshowpiece from "../images/portfolio/interiorshowpiece.webp";
import wallmount from "../images/portfolio/wallmount.jpg";
import murals from "../images/portfolio/murals.webp";

const Portfolio = () => {
    const categories = [
        { title: "Miniature Pots & Vases", image: pots },
        { title: "Statues of Famous Personalities", image: statue },
        { title: "Interior Showpieces", image: interiorshowpiece },
        { title: "Wall-Mounts", image: wallmount },
        { title: "Murals", image: murals },

    ];

    const portfolioRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("fade-in");
                    }
                });
            },
            { threshold: 0.3 }
        );

        portfolioRef.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => {
            portfolioRef.current.forEach((el) => {
                if (el) observer.unobserve(el);
            });
        };
    }, []);

    return (
        <div className="portfolio-container">
            <h2 className="portfolio-title">Our Creations</h2>
            <div className="portfolio-grid">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="portfolio-item"
                        ref={(el) => (portfolioRef.current[index] = el)}
                    >
                        <img src={category.image} alt={category.title} className="portfolio-image" />
                        <div className="overlay">
                            <h3>{category.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
