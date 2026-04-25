import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, User, Copy, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

// Team Member Images
import oshideeImg from '../assets/team/oshidee.JPG';
import ravindranImg from '../assets/team/laksopan.jpeg';
import mihisandaliImg from '../assets/team/mayusha.jpeg';
import devindiImg from '../assets/team/devindi.png';

const MemberContactCard = ({ name, role, email, phone, image, index }) => {
  const [copiedField, setCopiedField] = React.useState(null);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <motion.div
      className="member-contact-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      {/* Card Header with Avatar */}
      <div className="mcc-header">
        <div className="mcc-avatar-ring">
          <div className="mcc-avatar">
            {image ? (
              <img src={image} alt={name} />
            ) : (
              <User size={40} />
            )}
          </div>
        </div>
        <div className="mcc-identity">
          <h3>{name}</h3>
          <span className="mcc-role-badge">{role}</span>
        </div>
      </div>

      {/* Contact Details */}
      <div className="mcc-details">
        <div className="mcc-detail-row">
          <div className="mcc-detail-icon">
            <Mail size={16} />
          </div>
          <div className="mcc-detail-info">
            <label>Email</label>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
          <button
            className="mcc-copy-btn"
            onClick={() => handleCopy(email, `email-${index}`)}
            title="Copy email"
          >
            {copiedField === `email-${index}` ? <CheckCircle2 size={14} /> : <Copy size={14} />}
          </button>
        </div>

        <div className="mcc-detail-row">
          <div className="mcc-detail-icon">
            <Phone size={16} />
          </div>
          <div className="mcc-detail-info">
            <label>Phone</label>
            <a href={`tel:${phone}`}>{phone}</a>
          </div>
          <button
            className="mcc-copy-btn"
            onClick={() => handleCopy(phone, `phone-${index}`)}
            title="Copy phone"
          >
            {copiedField === `phone-${index}` ? <CheckCircle2 size={14} /> : <Copy size={14} />}
          </button>
        </div>
      </div>

      {/* Quick Action Buttons */}
      <div className="mcc-actions">
        <a href={`mailto:${email}`} className="mcc-action-btn primary">
          <Mail size={15} />
          <span>Send Email</span>
        </a>
        <a href={`tel:${phone}`} className="mcc-action-btn secondary">
          <Phone size={15} />
          <span>Call</span>
        </a>
      </div>
    </motion.div>
  );
};

const ContactUs = () => {
  const members = [
    {
      name: 'Oshidee Wijesinghe',
      role: 'Member 01',
      email: 'oshidee.wijesinghe@gmail.com',
      phone: '+94 76 781 2513',
      image: oshideeImg
    },
    {
      name: 'Ravindran Laksopan',
      role: 'Member 02',
      email: 'laksopan2001@gmail.com',
      phone: '+94 70 262 7291',
      image: ravindranImg
    },
    {
      name: 'Mihisandali W.K.M',
      role: 'Member 03',
      email: 'mayushamihisandali544@gmail.com',
      phone: '+94 70 529 8564',
      image: mihisandaliImg
    },
    {
      name: 'Devindi K.P.T',
      role: 'Member 04',
      email: 'pabodhadevindi2002@gmail.com',
      phone: '+94 74 050 4801',
      image: devindiImg
    }
  ];

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="contact-hero section bg-dark">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeader
              title="Contact Our Team"
              subtitle="Reach out directly to any of our research team members for inquiries about the SkinAI multimodal framework."
              light={true}
            />
          </motion.div>
        </div>
        <div className="hero-glow"></div>
      </section>

      {/* Team Contact Cards */}
      <section className="section bg-soft contact-body">
        <div className="container">
          <div className="contact-card-wrapper">
            <div className="team-contacts-grid">
              {members.map((member, i) => (
                <MemberContactCard key={i} {...member} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-page {
          padding-top: 80px;
        }

        .contact-hero {
          position: relative;
          padding: 8rem 0 12rem;
          overflow: hidden;
          background: var(--grad-dark);
        }

        .hero-glow {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80%;
          height: 150px;
          background: radial-gradient(circle at 50% 100%, rgba(59, 130, 246, 0.2), transparent 70%);
          filter: blur(40px);
        }

        .contact-body {
          margin-top: -8rem;
          padding-bottom: 4rem;
        }

        .contact-card-wrapper {
          position: relative;
          z-index: 5;
        }

        /* ======================== */
        /* Team Contact Cards Grid  */
        /* ======================== */
        .team-contacts-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .member-contact-card {
          background: var(--background);
          border-radius: var(--radius);
          border: 1px solid var(--border);
          box-shadow: var(--shadow);
          overflow: hidden;
          transition: var(--transition);
        }

        .member-contact-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-lg);
          border-color: var(--primary-accent);
        }

        /* Card Header */
        .mcc-header {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.75rem 1.75rem 0;
        }

        .mcc-avatar-ring {
          flex-shrink: 0;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: var(--grad-blue);
          padding: 3px;
        }

        .mcc-avatar {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-accent);
        }

        .mcc-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .mcc-identity { text-align: left; }
        .mcc-identity h3 {
          font-size: 1.15rem;
          margin-bottom: 0.35rem;
          color: var(--primary);
        }

        .mcc-role-badge {
          display: inline-block;
          padding: 0.2rem 0.75rem;
          background: var(--primary-light);
          color: var(--primary-accent);
          border-radius: 50px;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Contact Details */
        .mcc-details {
          padding: 1.25rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .mcc-detail-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.6rem 0.85rem;
          background: var(--surface);
          border-radius: 10px;
          transition: var(--transition);
        }

        .mcc-detail-row:hover {
          background: var(--primary-light);
        }

        .mcc-detail-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: var(--primary-light);
          color: var(--primary-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .mcc-detail-row:hover .mcc-detail-icon {
          background: var(--primary-accent);
          color: white;
        }

        .mcc-detail-info {
          flex: 1;
          min-width: 0;
          text-align: left;
        }

        .mcc-detail-info label {
          display: block;
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--secondary);
          margin-bottom: 1px;
        }

        .mcc-detail-info a {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--primary);
          text-decoration: none;
          transition: var(--transition);
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .mcc-detail-info a:hover {
          color: var(--primary-accent);
        }

        .mcc-copy-btn {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          border: none;
          background: transparent;
          color: var(--secondary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
          flex-shrink: 0;
        }

        .mcc-copy-btn:hover {
          background: var(--primary-accent);
          color: white;
        }

        /* Action Buttons */
        .mcc-actions {
          padding: 0 1.75rem 1.75rem;
          display: flex;
          gap: 0.75rem;
        }

        .mcc-action-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.65rem 1rem;
          border-radius: 10px;
          font-size: 0.8rem;
          font-weight: 700;
          text-decoration: none;
          transition: var(--transition);
          cursor: pointer;
        }

        .mcc-action-btn.primary {
          background: var(--grad-blue);
          color: white;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.25);
        }

        .mcc-action-btn.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.35);
        }

        .mcc-action-btn.secondary {
          background: var(--surface);
          color: var(--primary);
          border: 1px solid var(--border);
        }

        .mcc-action-btn.secondary:hover {
          background: var(--primary-light);
          border-color: var(--primary-accent);
          color: var(--primary-accent);
        }

        @media (max-width: 1024px) {
          .team-contacts-grid {
            grid-template-columns: 1fr;
            max-width: 600px;
            margin: 0 auto;
          }
        }

        @media (max-width: 768px) {
          .contact-hero {
            padding: 6rem 0 10rem;
          }
          .mcc-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactUs;
