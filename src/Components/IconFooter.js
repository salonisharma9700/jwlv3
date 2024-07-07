import React, { useEffect } from 'react';
import '../cssfiles/Footer.css';
import { Link, useLocation } from 'react-router-dom';

const IconFooter = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('Navigating to:', location.pathname);
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="icon-grid">
      <div className="row text-center">
        <div className="col-6 col-md-3 mb-4">
          <Link to="/ytvid" className="footer-link d-flex flex-column align-items-center">
            <strong>Know More</strong>
            <img src="/vidicon.png" className="footer-icons mt-2" alt="About Icon" />
          </Link>
        </div>
        <div className="col-6 col-md-3 mb-4">
          <Link to="/faq" className="footer-link d-flex flex-column align-items-center">
            <strong>FAQ</strong>
            <img src="images/faq.png" className="footer-icons mt-2" alt="FAQ Icon" />
          </Link>
        </div>
        <div className="col-6 col-md-3 mb-4">
          <Link to="/upvid" className="footer-link d-flex flex-column align-items-center">
            <strong>Upload Video</strong>
            <img src="images/upload.png" className="footer-icons mt-2" alt="Upload Icon" />
          </Link>
        </div>
        <div className="col-6 col-md-3 mb-4">
          <Link to="/contact" className="footer-link d-flex flex-column align-items-center">
            <strong>Contact Us</strong>
            <img src="images/contact-us.png" className="footer-icons mt-2" alt="Contact Icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IconFooter;
