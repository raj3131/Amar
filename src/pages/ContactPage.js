import React, { useEffect, useRef } from "react";
import { FaInstagram, FaPhoneAlt } from "react-icons/fa";

const ContactPage = () => {
  const contactRef = useRef(null);

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

    if (contactRef.current) observer.observe(contactRef.current);

    return () => {
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, []);

  return (
    <>
      <style>{`
        .contact-container {
          text-align: center;
          padding: 80px 10%;
          min-height: 80vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background-color: #faf8f6;
          opacity: 0;
          transition: opacity 1s ease, transform 1s ease;
        }

        .fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        .contact-title {
          font-size: 2.5rem;
          font-weight: 600;
          color: #3e2723;
          margin-bottom: 10px;
        }

        .contact-subtitle {
          font-size: 1.1rem;
          color: #5d4037;
          margin-bottom: 40px;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 20px;
          align-items: center;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.2rem;
          color: #4e342e;
        }

        .contact-item a {
          color: #3e2723;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .contact-item a:hover {
          color: #8d6e63;
        }

        .contact-icon {
          font-size: 1.5rem;
          color: #6d4c41;
        }

        .contact-footer {
          margin-top: 40px;
          font-size: 1rem;
          color: #5d4037;
          font-style: italic;
        }

        @media (max-width: 600px) {
          .contact-title {
            font-size: 2rem;
          }

          .contact-subtitle {
            font-size: 1rem;
          }

          .contact-item {
            font-size: 1rem;
          }
        }
      `}</style>

      <div className="contact-container" ref={contactRef}>
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">
          We’d love to hear from you — whether it’s for collaborations, custom clay work, or gallery visits.
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <FaInstagram className="contact-icon" />
            <a
              href="https://www.instagram.com/goa_galeria_de_potters/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @goa_galeria_de_potters
            </a>
          </div>

          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <a href="tel:+918698783996">+91 86987 83996</a>
          </div>
        </div>

        <p className="contact-footer">
          Visit our gallery in Goa and experience the beauty of handmade clay artistry.
        </p>
      </div>
    </>
  );
};

export default ContactPage;
