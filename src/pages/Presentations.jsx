import React from 'react';
import { Presentation as PresIcon, ExternalLink } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

// Presentation Files
import presentation1 from '../assets/documents/25-26j-222 presenation 1.pdf';
import presentation2 from '../assets/documents/25-26j-222 Proposal Presentation 2.pdf';

const Presentations = () => {
  const slides = [

    { title: 'Progress Presentation 1', date: 'Dec 2025', fileUrl: presentation1 },
    { title: 'Progress Presentation 2', date: 'Feb 2026', fileUrl: presentation2 },
    { title: 'Final Presentation', date: 'May 2026' }
  ];

  return (
    <div className="presentations-page" style={{ paddingTop: '100px' }}>
      <div className="container">
        <SectionHeader
          title="Presentations"
          subtitle="Slide decks and presentation materials for each milestone."
        />
        <div className="grid grid-2">
          {slides.map((s, i) => (
            <div key={i} className="card pres-card">
              <div className="pres-preview">
                <PresIcon size={48} strokeWidth={1} />
                <span>Slide Deck</span>
              </div>
              <div className="pres-content">
                <h3>{s.title}</h3>
                <p>Delivered: {s.date}</p>
                <div className="pres-actions">
                  <button
                    className={`btn btn-primary btn-sm ${!s.fileUrl ? 'disabled' : ''}`}
                    onClick={() => s.fileUrl && window.open(s.fileUrl, '_blank')}
                  >
                    View Slides <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .pres-card {
          padding: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .pres-preview {
          height: 180px;
          background: linear-gradient(45deg, var(--primary-light), #fff);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          gap: 1rem;
          border-bottom: 1px solid var(--border);
        }
        .pres-preview span { font-weight: 600; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 1px; }
        .pres-content { padding: 1.5rem; }
        .pres-content h3 { margin-bottom: 0.5rem; font-size: 1.25rem; }
        .pres-content p { color: var(--text-muted); margin-bottom: 1.5rem; }
        .btn-sm { padding: 0.5rem 1rem; font-size: 0.875rem; }
        .btn.disabled { opacity: 0.5; cursor: not-allowed; }
      `}</style>
    </div>
  );
};

export default Presentations;
