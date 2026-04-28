import { Code2 } from 'lucide-react';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="logo">
              <Code2 className="logo-icon" />
              <span>Arrit<span className="text-gradient">Solutions</span></span>
            </a>
            <p className="footer-desc">
              Transforming businesses through innovative technology and strategic consulting.
            </p>
            <div className="social-links">
              <a href="#" className="social-link"><FaTwitter size={20} /></a>
              <a href="#" className="social-link"><FaLinkedin size={20} /></a>
              <a href="#" className="social-link"><FaGithub size={20} /></a>
              <a href="#" className="social-link"><FaInstagram size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Careers</a></li>
              <li><a href="#news">News & Media</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Software Development</a></li>
              <li><a href="#services">Cloud Solutions</a></li>
              <li><a href="#services">Cybersecurity</a></li>
              <li><a href="#services">Data Analytics</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Legal</h4>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#cookies">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Arrit Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
