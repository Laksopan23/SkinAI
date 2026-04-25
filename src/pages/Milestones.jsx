import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const Milestones = () => {
  const milestones = [
    {
      title: 'Project Proposal',
      date: 'October 2025',
      desc: 'Initial concept, literature survey, and feasibility study approval.',
      marks: 'Accept',
      status: 'completed'
    },
    {
      title: 'Progress Presentation 1',
      date: 'December 2025',
      desc: 'Dataset collection, preliminary image model training, and text analysis framework.',
      marks: 'Accept',
      status: 'completed'
    },
    {
      title: 'Progress Presentation 2',
      date: 'February 2026',
      desc: 'Multimodal fusion implementation and domain adaptation testing.',
      marks: 'Accept',
      status: 'completed'
    },
    {
      title: 'Final Evaluation',
      date: 'April 2026',
      desc: 'Full system integration, UI testing, and performance metric validation.',
      marks: 'Pending',
      status: 'current'
    },
    {
      title: 'Viva',
      date: 'May 2026',
      desc: 'Final defense and research contribution presentation.',
      marks: 'TBD',
      status: 'upcoming'
    }
  ];

  return (
    <div className="milestones-page" style={{ paddingTop: '100px' }}>
      <div className="container">
        <SectionHeader 
          title="Project Milestones" 
          subtitle="Tracking our progress from inception to final evaluation." 
        />

        <div className="timeline">
          {milestones.map((ms, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`timeline-item ${ms.status}`}
            >
              <div className="timeline-dot">
                {ms.status === 'completed' ? <CheckCircle2 size={24} /> : <Calendar size={20} />}
              </div>
              <div className="card timeline-content">
                <div className="timeline-header">
                  <span className={`status-badge ${ms.status}`}>{ms.status.toUpperCase()}</span>
                  <span className="timeline-date">{ms.date}</span>
                </div>
                <h3>{ms.title}</h3>
                <p>{ms.desc}</p>
                <div className="timeline-footer">
                  <span className="marks-badge">{ms.marks}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem 0;
        }
        .timeline::before {
          content: '';
          position: absolute;
          left: 12px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--border);
        }
        .timeline-item {
          position: relative;
          padding-left: 50px;
          margin-bottom: 2.5rem;
        }
        .timeline-dot {
          position: absolute;
          left: 0;
          top: 0;
          width: 26px;
          height: 26px;
          background: #fff;
          border: 2px solid var(--border);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          color: var(--secondary);
          transition: var(--transition);
        }
        .timeline-item.completed .timeline-dot {
          border-color: var(--accent);
          color: var(--accent);
          background: #ecfdf5;
        }
        .timeline-item.current .timeline-dot {
          border-color: var(--primary);
          color: var(--primary);
          background: var(--primary-light);
          box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.2);
        }
        .timeline-content {
          padding: 1.5rem;
        }
        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        .status-badge {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
        }
        .status-badge.completed { background: #ecfdf5; color: #059669; }
        .status-badge.current { background: var(--primary-light); color: var(--primary); }
        .status-badge.upcoming { background: #f1f5f9; color: var(--secondary); }
        
        .timeline-date {
          font-size: 0.875rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .marks-badge {
          display: inline-block;
          margin-top: 1rem;
          padding: 0.4rem 0.8rem;
          background: #f8fafc;
          border: 1px solid var(--border);
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text);
        }
      `}</style>
    </div>
  );
};

export default Milestones;
