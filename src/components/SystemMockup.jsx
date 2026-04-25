import React from 'react';
import { motion } from 'framer-motion';

const SystemMockup = ({ image, title, caption, type = 'phone' }) => {
  return (
    <motion.div 
      className="mockup-container"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={`mockup-frame ${type}`}>
        <div className="mockup-inner">
          <img src={image} alt={title} className="mockup-image" />
          <div className="mockup-overlay">
            <span className="mockup-tag">{title}</span>
          </div>
        </div>
        {type === 'phone' && <div className="phone-button"></div>}
      </div>
      <div className="mockup-info">
        <h5>{title}</h5>
        <p>{caption}</p>
      </div>

      <style>{`
        .mockup-container {
          text-align: center;
        }
        .mockup-frame {
          position: relative;
          background: #1e293b;
          border-radius: 2rem;
          padding: 12px;
          box-shadow: var(--shadow-lg);
          margin-bottom: 1.5rem;
          transition: var(--transition);
          overflow: hidden;
          margin-left: auto;
          margin-right: auto;
        }
        .mockup-frame.phone {
          width: 280px;
          height: 560px;
          border-radius: 2.5rem;
        }
        .mockup-frame.laptop {
          width: 100%;
          max-width: 600px;
          aspect-ratio: 16/10;
          border-radius: 1rem;
        }
        .mockup-inner {
          position: relative;
          width: 100%;
          height: 100%;
          background: #fff;
          border-radius: 1.5rem;
          overflow: hidden;
        }
        .mockup-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition);
        }
        .mockup-frame:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25);
        }
        .mockup-frame:hover .mockup-image {
          transform: scale(1.05);
        }
        .mockup-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(15, 23, 42, 0.8), transparent);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding: 2rem;
          opacity: 0;
          transition: var(--transition);
        }
        .mockup-frame:hover .mockup-overlay {
          opacity: 1;
        }
        .mockup-tag {
          color: white;
          font-weight: 600;
          font-size: 0.875rem;
          padding: 0.5rem 1rem;
          background: var(--primary-accent);
          border-radius: 50px;
        }
        .phone-button {
          position: absolute;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 40px;
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
        }
        .mockup-info h5 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: var(--primary);
        }
        .mockup-info p {
          font-size: 0.875rem;
          color: var(--text-muted);
          max-width: 250px;
          margin: 0 auto;
        }
      `}</style>
    </motion.div>
  );
};

export default SystemMockup;
