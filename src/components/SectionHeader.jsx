import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle, centered = true, light = false }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{ 
        textAlign: centered ? 'center' : 'left',
        marginBottom: '3.5rem',
        maxWidth: centered ? '800px' : '100%',
        margin: centered ? '0 auto 3.5rem' : '0 0 3.5rem'
      }}
    >
      <h2 style={{ 
        fontSize: '2.5rem', 
        marginBottom: '1rem', 
        color: light ? '#FFFFFF' : 'var(--text)' 
      }}>
        {title}
      </h2>
      <div style={{ 
        width: '60px', 
        height: '4px', 
        backgroundColor: light ? 'var(--primary-accent)' : 'var(--primary)', 
        margin: centered ? '0 auto 1.5rem' : '0 0 1.5rem',
        borderRadius: '2px'
      }} />
      {subtitle && (
        <p style={{ 
          fontSize: '1.1rem', 
          color: light ? 'rgba(255, 255, 255, 0.7)' : 'var(--text-muted)' 
        }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};


export default SectionHeader;
