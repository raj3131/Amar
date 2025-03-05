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
            {/* Intro Paragraph */}
            <p className="portfolio-intro">
                These objects add aesthetic by taking it away. They simply are what they are: a celebration of a style that lives at peace with its own little imperfections.
                Some are functional, they are hand made and are built to be used. Some incarnate the dysfunctionality intrinsic to society by hinting at the fragility of the
                human condition in a more general sense. These claymen figure sculptures emerge from a careful observation of the common man and his dilemmas.
                They are peaceful, contemplative and quiet. While going through their own existential crises they are mere witnesses to the fact that
                <em>“Man is losing his humanity and becoming a thing amongst the things he produces.”</em>
            </p>

            <div className="pots">
                <img src={pots}/>
                <div className="pots-text">
                    <h3>Miniature Pots & Vases</h3>
                    <p>Beautiful handcrafted pots to enhance your space.</p>
                </div>
            </div>


            <div className="statue">
                <div className="statue-text">
                    <h3>statue</h3>
                    <p>Beautiful handcrafted pots to enhance your space.</p>
                </div>
                <img src={statue}/>
            </div>


            <div className="pots">
                <img src={interiorshowpiece}/>
                <div className="pots-text">
                    <h3>Miniature Pots & Vases</h3>
                    <p>Beautiful handcrafted pots to enhance your space.</p>
                </div>
            </div>

            <div className="statue">
                <div className="statue-text">
                    <h3>statue</h3>
                    <p>Beautiful handcrafted pots to enhance your space.</p>
                </div>
                <img src={wallmount}/>
            </div>


            <div className="pots">
                <img src={murals}/>
                <div className="pots-text">
                    <h3>Miniature Pots & Vases</h3>
                    <p>Beautiful handcrafted pots to enhance your space.</p>
                </div>
            </div>



        </div>
    );
};

export default Portfolio;
