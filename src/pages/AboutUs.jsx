import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ExternalLink, User } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

// Team Member Images
import oshideeImg from '../assets/team/oshidee.JPG';
import ravindranImg from '../assets/team/laksopan.jpeg';
import mihisandaliImg from '../assets/team/mayusha.jpeg';
import devindiImg from '../assets/team/devindi.png';

const TeamMember = ({ name, role, email, bio, image }) => (
  <motion.div
    className="card team-card-new"
    whileHover={{ y: -10 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="member-avatar-wrapper">
      <div className="member-avatar-bg"></div>
      <div className="member-avatar-img">
        {image ? (
          <img src={image} alt={name} className="member-img" />
        ) : (
          <User size={60} strokeWidth={1.5} />
        )}
      </div>
    </div>
    <div className="member-info">
      <h3>{name}</h3>
      <span className="member-role-badge">{role}</span>
      <p className="member-bio">{bio}</p>
    </div>
  </motion.div>
);

const AboutUs = () => {
  const team = [
    {
      name: 'Oshidee Wijesinghe',
      role: 'Member 01',
      email: 'it22643322@my.sliit.lk',
      bio: 'To improve classification accuracy by integrating patient-reported audio symptoms with visual skin data.',
      image: oshideeImg
    },
    {
      name: 'Ravindran Laksopan',
      role: 'Member 02',
      email: 'IT22277954@my.sliit.lk',
      bio: 'To model the temporal progression of skin conditions through sequential image analysis to support early detection and treatment monitoring.',
      image: ravindranImg
    },
    {
      name: 'Mihisandali W.K.M',
      role: 'Member 03',
      email: 'it22249784@my.sliit.lk',
      bio: 'To generate personalized and explainable skincare/treatment recommendations using knowledge graphs integrated with large language models.',
      image: mihisandaliImg
    },
    {
      name: 'Devindi K.P.T',
      role: 'Member 04',
      email: 'it22249784@my.sliit.lk',
      bio: 'To improve model generalizability for skin disease classification across diverse skin tones and populations using domain adaptation techniques.',
      image: devindiImg
    }
  ];

  return (
    <div className="about-page" style={{ paddingTop: '120px' }}>
      <section className="section bg-soft">
        <div className="container">
          <SectionHeader
            title="Our Research Team"
            subtitle="Meet the dedicated researchers and engineers driving this multimodal AI innovation."
          />
          <div className="grid grid-4 gap-6">
            {team.map((m, i) => <TeamMember key={i} {...m} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card mission-card glass">
            <div className="grid grid-2 items-center">
              <div>
                <h2>Our Vision</h2>
                <p>
                  To bridge the gap between AI research and clinical practice by developing
                  tools that are not only accurate but also fair, explainable, and context-aware.
                  We believe that the future of dermatology is multimodal.
                </p>
              </div>
              <div className="vision-img">
                <div className="abstract-shape"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .team-card-new {
          padding: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
          border: 1px solid var(--border);
        }
        .member-avatar-wrapper {
          position: relative;
          height: 160px;
          background: var(--grad-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .member-avatar-bg {
          position: absolute;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%);
          animation: rotate 10s linear infinite;
        }
        @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        
        .member-avatar-img {
          width: 100px;
          height: 100px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-accent);
          position: relative;
          z-index: 2;
          box-shadow: 0 0 0 8px rgba(255,255,255,0.1);
          overflow: hidden;
        }

        .member-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .member-info { padding: 2rem; flex: 1; text-align: center; }
        .member-info h3 { font-size: 1.25rem; margin-bottom: 0.5rem; }
        .member-role-badge {
          display: inline-block;
          padding: 0.25rem 1rem;
          background: var(--primary-light);
          color: var(--primary-accent);
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 700;
          margin-bottom: 1rem;
          text-transform: uppercase;
        }
        .member-bio { font-size: 0.875rem; color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.5; }
        
        .member-social-new { display: flex; justify-content: center; gap: 1rem; }
        .social-icon-btn {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background: var(--surface);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          transition: var(--transition);
        }
        .social-icon-btn:hover { background: var(--primary-accent); color: white; }
        
        .member-footer {
          padding: 1.25rem;
          background: var(--surface);
          border-top: 1px solid var(--border);
          text-align: center;
        }
        .view-profile-btn {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--primary-accent);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
        }
        
        .mission-card { padding: 4rem; border: none; background: var(--grad-dark); color: white; }
        .mission-card h2 { color: white; margin-bottom: 1.5rem; font-size: 2.5rem; }
        .mission-card p { font-size: 1.25rem; color: #94A3B8; }
        
        .abstract-shape {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, var(--primary-accent), var(--accent));
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
          animation: morph 8s ease-in-out infinite;
          opacity: 0.5;
        }
        @keyframes morph {
          0% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
          50% { border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%; }
          100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
