import React, { useEffect, useRef } from "react";
import { FaInstagram, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  const footerRef = useRef(null);

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

    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <>
      <style>{`
        footer {
          background-color: #6d4c41; /* terracotta shade */
          color: #fff8f3;
          text-align: center;
          padding: 50px 20px;
          position: relative;
          opacity: 0;
          transition: opacity 1s ease, transform 1s ease;
        }

        footer.fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        .footer-title {
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .footer-subtitle {
          font-size: 1rem;
          margin-bottom: 25px;
          color: #ffece1;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
          margin-bottom: 25px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.1rem;
        }

        .contact-item a {
          color: #ffffff;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-item a:hover {
          color: #ffccbc;
        }

        .contact-icon {
          font-size: 1.3rem;
        }

        .footer-note {
          border-top: 1px solid #ffffff33;
          margin-top: 20px;
          padding-top: 15px;
          font-size: 0.9rem;
          color: #f5e9e0;
        }

        @media (max-width: 600px) {
          footer {
            padding: 40px 15px;
          }

          .footer-title {
            font-size: 1.5rem;
          }

          .footer-subtitle {
            font-size: 0.95rem;
          }

          .contact-item {
            font-size: 1rem;
          }
        }
      `}</style>

      <footer ref={footerRef}>
        <h3 className="footer-title">Get in Touch</h3>
        <p className="footer-subtitle">
          Connect with us for custom clay work, collaborations, or gallery visits.
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

        <p className="footer-note">
          © {new Date().getFullYear()} Amar's Clay Art — All Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
