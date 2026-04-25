import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Domain', path: '/domain' },
    { name: 'Milestones', path: '/milestones' },
    { name: 'Documents', path: '/documents' },
    { name: 'Presentations', path: '/presentations' },
    { name: 'About Us', path: '/about' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${!isHome ? 'not-home' : ''}`}>
      <div className="container nav-container">
        <div className="nav-left">
          <Link to="/" className="nav-logo" onClick={() => setIsOpen(false)}>
            <div className="logo-icon-wrapper">
              <Shield className="logo-icon" />
            </div>
            <div className="logo-text">
              <span className="logo-main">SkinAI</span>
            </div>
          </Link>
        </div>

        <div className={`nav-center nav-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-item ${location.pathname === link.path ? 'active' : ''}`}
              style={{ whiteSpace: 'nowrap' }}
              onClick={() => setIsOpen(false)}
            >
              {link.name}

              <span className="nav-indicator"></span>
            </Link>
          ))}
        </div>

        <div className="nav-right">
          <Link to="/contact" className="btn btn-primary nav-cta" onClick={() => setIsOpen(false)}>
            Contact Us
          </Link>
          <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;


