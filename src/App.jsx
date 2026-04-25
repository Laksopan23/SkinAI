import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Shield } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Domain from './pages/Domain';
import Milestones from './pages/Milestones';
import Documents from './pages/Documents';
import Presentations from './pages/Presentations';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import './styles/index.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/domain" element={<Domain />} />
            <Route path="/milestones" element={<Milestones />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/presentations" element={<Presentations />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        
        <footer className="footer">
          <div className="footer-full-container">
            <div className="footer-grid">
              <div className="footer-brand">
                <Link to="/" className="footer-logo">
                  <div className="logo-icon-wrapper sm">
                    <Shield className="logo-icon" size={18} />
                  </div>
                  <span className="footer-logo-text">SkinAI</span>
                </Link>
                <p className="footer-desc">
                  Developing cutting-edge Multimodal AI frameworks for the next generation of 
                  personalized and context-aware dermatological care.
                </p>
                <div className="footer-social">
                  <a href="#"><Facebook size={18} /></a>
                  <a href="#"><Twitter size={18} /></a>
                  <a href="#"><Linkedin size={18} /></a>
                  <a href="#"><Instagram size={18} /></a>
                </div>
              </div>
              
              <div className="footer-links">
                <h4>Quick Links</h4>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/domain">Domain</Link></li>
                  <li><Link to="/milestones">Milestones</Link></li>
                  <li><Link to="/documents">Documents</Link></li>
                </ul>
              </div>

              <div className="footer-links">
                <h4>Research</h4>
                <ul>
                  <li><Link to="/presentations">Presentations</Link></li>
                  <li><Link to="/about">About Team</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                  <li><a href="#preview">System Preview</a></li>
                </ul>
              </div>

              <div className="footer-contact">
                <h4>Get in Touch</h4>
                <ul>
                  <li><MapPin size={16} /> SLIIT Malabe Campus, New Kandy Road, Malabe</li>
                  <li><Mail size={16} /> <a href="/contact" style={{color: 'inherit', textDecoration: 'none'}}>View Team Contacts</a></li>
                </ul>
              </div>
            </div>
            
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} SkinAI Research Project. All rights reserved.</p>
              <div className="footer-legal">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>

        <style>{`
          .footer {
            background: #0F172A;
            color: #94A3B8;
            padding: 5rem 0 2rem;
            border-top: 1px solid rgba(255,255,255,0.05);
            width: 100%;
            margin: 0;
          }
          .footer-full-container {
            width: 100%;
            padding: 0 8%;
          }
          .footer-grid {
            display: grid;
            grid-template-columns: 1.5fr 1fr 1fr 1fr;
            gap: 4rem;
            margin-bottom: 5rem;
            align-items: start;
          }
          .footer-brand {
            text-align: left;
          }
          .footer-logo {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            color: white;
            text-decoration: none;
            margin-bottom: 1.5rem;
          }
          .footer-logo-text {
            font-size: 1.5rem;
            font-weight: 800;
            font-family: 'Outfit', sans-serif;
            letter-spacing: -0.5px;
          }
          .logo-icon-wrapper.sm { width: 32px; height: 32px; border-radius: 8px; background: var(--grad-blue); display: flex; align-items: center; justify-content: center; }
          .footer-desc {
            font-size: 0.95rem;
            line-height: 1.6;
            margin-bottom: 2rem;
            max-width: 320px;
            text-align: left;
          }
          .footer-social {
            display: flex;
            gap: 1.25rem;
          }
          .footer-social a {
            color: #64748B;
            transition: var(--transition);
          }
          .footer-social a:hover { color: var(--primary-accent); transform: translateY(-3px); }
          
          .footer-links h4, .footer-contact h4 {
            color: white;
            font-size: 1rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 2rem;
            text-align: left;
          }
          .footer-links ul, .footer-contact ul { 
            list-style: none; 
            padding: 0;
            margin: 0;
            text-align: left;
          }
          .footer-links li { margin-bottom: 0.75rem; }
          .footer-links a { color: #94A3B8; text-decoration: none; transition: var(--transition); font-size: 0.95rem; }
          .footer-links a:hover { color: white; padding-left: 5px; }
          
          .footer-contact li { 
            display: flex; 
            gap: 1rem; 
            align-items: center; 
            margin-bottom: 1.25rem; 
            font-size: 0.95rem;
            text-align: left;
          }
          
          .footer-bottom {
            padding-top: 2rem;
            border-top: 1px solid rgba(255,255,255,0.05);
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.875rem;
          }
          .footer-legal { display: flex; gap: 2rem; }
          .footer-legal a { color: #475569; text-decoration: none; }
          .footer-legal a:hover { color: #94A3B8; }

          @media (max-width: 1024px) {
            .footer-grid { grid-template-columns: 1fr 1fr; gap: 4rem; }
          }
          @media (max-width: 640px) {
            .footer-grid { grid-template-columns: 1fr; gap: 3rem; }
            .footer-bottom { flex-direction: column; gap: 1.5rem; text-align: center; }
            .footer-legal { justify-content: center; }
          }
        `}</style>
      </div>
    </Router>
  );
}

export default App;
