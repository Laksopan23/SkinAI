import React from 'react';
import { motion } from 'framer-motion';
import {
  Database, Zap, ShieldCheck, HeartPulse, ArrowRight,
  Mic, Search, FileText, BarChart3, Globe, Layers,
  ChevronDown, CheckCircle2, MessageSquare, Play,
  Smartphone, Cpu, Activity
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import SystemMockup from '../components/SystemMockup';

// Import assets
import skinAnalysisImg from '../assets/skin_analysis_mockup.png';
import symptomInputImg from '../assets/123.png';

const Home = () => {
  const features = [
    {
      icon: <Database />,
      title: 'Multimodal Diagnosis',
      desc: 'Fusing image features with clinical symptom data for high-fidelity diagnostic accuracy.'
    },
    {
      icon: <ShieldCheck />,
      title: 'Explainable Severity',
      desc: 'Transparent rule-based assessment that justifies AI decisions for clinical trust.'
    },
    {
      icon: <Globe />,
      title: 'Domain Adaptation',
      desc: 'Advanced training techniques ensuring fair performance across all skin tones.'
    },
    {
      icon: <HeartPulse />,
      title: 'Personalized Care',
      desc: 'Context-aware treatment support tailored to the patient’s medical history and symptoms.'
    },
    {
      icon: <Mic />,
      title: 'Voice-First Interaction',
      desc: 'Seamless symptom reporting via ASR for improved patient accessibility.'
    },
    {
      icon: <Search />,
      title: 'Knowledge-Based Recs',
      desc: 'AI-driven treatment plans cross-referenced with medical knowledge bases.'
    }
  ];

  const steps = [
    { title: 'Upload Image', desc: 'Capture or upload a high-res photo of the skin lesion.', icon: <Smartphone /> },
    { title: 'Input Symptoms', desc: 'Voice or text entry for clinical context (itch, pain, duration).', icon: <MessageSquare /> },
    { title: 'AI Processing', desc: 'Multimodal fusion of visual and textual features.', icon: <Cpu /> },
    { title: 'Disease Prediction', desc: 'Classification using fine-tuned ConvNeXt and BERT models.', icon: <Activity /> },
    { title: 'Severity Scoring', desc: 'Assessment of clinical urgency and progression.', icon: <BarChart3 /> },
    { title: 'Treatment Support', desc: 'Personalized skincare and medical recommendations.', icon: <HeartPulse /> }
  ];

  const mockups = [
    {
      title: 'Skin Analysis',
      caption: 'Real-time lesion detection and classification.',
      image: skinAnalysisImg
    },
    {
      title: 'Symptom Input',
      caption: 'Contextual voice transcription via ASR.',
      image: symptomInputImg
    },
    {
      title: 'Diagnosis Result',
      caption: 'Explainable severity and disease labels.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-overlay"></div>
        <div className="container hero-container">
          {/* Left Column: Content */}
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-brand-logo">


            </div>

            <h1 className="hero-title">
              Multimodal AI for <br />
              <span className="text-primary-accent">Skin Disease</span> Diagnosis
            </h1>

            <p className="hero-subtitle">
              A comprehensive framework integrating visual analysis with clinical context.
              We combine deep learning and NLP to provide accurate, fair, and explainable
              dermatological insights for personalized patient care.
            </p>

            <div className="hero-cta">
              <a href="#preview" className="btn btn-primary btn-lg">
                System Preview
              </a>
              <a href="/domain" className="btn btn-secondary btn-lg">
                Research Details
              </a>
            </div>

            <div className="hero-stats-row">
              <div className="hero-stat-item">
                <span className="h-stat-num">94%</span>
                <span className="h-stat-label">Accuracy</span>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat-item">
                <span className="h-stat-num">XAI</span>
                <span className="h-stat-label">Enabled</span>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat-item">
                <span className="h-stat-num">Fair</span>
                <span className="h-stat-label">All Skin Tones</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Area */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hero-visual-wrapper">
              <div className="main-mockup-wrapper">
                <img
                  src={skinAnalysisImg}
                  alt="AI Diagnosis Interface"
                  className="hero-main-mockup"
                />

                {/* Neatly Aligned Floating Cards */}
                <motion.div
                  className="f-card f-diagnosis"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="f-card-icon bg-blue"><Activity size={18} /></div>
                  <div className="f-card-info">
                    <span className="f-card-label">Diagnosis</span>
                    <span className="f-card-value">Melanoma 0.92</span>
                  </div>
                </motion.div>

                <motion.div
                  className="f-card f-severity"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="f-card-icon bg-red"><Zap size={18} /></div>
                  <div className="f-card-info">
                    <span className="f-card-label">Severity</span>
                    <span className="f-card-value">High (Class 3)</span>
                  </div>
                </motion.div>

                <motion.div
                  className="f-card f-voice"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                >
                  <div className="f-card-icon bg-green"><Mic size={18} /></div>
                  <div className="f-card-info">
                    <span className="f-card-label">Voice Input</span>
                    <span className="f-card-value">Processed</span>
                  </div>
                </motion.div>

                <motion.div
                  className="f-card f-recommendation"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <div className="f-card-icon bg-purple"><HeartPulse size={18} /></div>
                  <div className="f-card-info">
                    <span className="f-card-label">Recommendation</span>
                    <span className="f-card-value">Personalized Plan</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Project Overview */}
      <section className="section bg-soft overflow-hidden">
        <div className="container">
          <div className="grid grid-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeader
                centered={false}
                title="Redefining Skin Care with Multimodal AI"
                subtitle="Why rely only on images when clinical context matters just as much?"
              />
              <div className="overview-text">
                <p>
                  Most existing AI skin diagnosis systems focus solely on image classification.
                  However, clinical dermatology relies heavily on patient-reported symptoms
                  (duration, pain, evolution).
                </p>
                <div className="feature-check-list">
                  <div className="check-item">
                    <CheckCircle2 className="text-primary-accent" />
                    <span><strong>Visual Analysis:</strong> ConvNeXt-based feature extraction.</span>
                  </div>
                  <div className="check-item">
                    <CheckCircle2 className="text-primary-accent" />
                    <span><strong>Symptom Fusion:</strong> BERT-driven text and voice analysis.</span>
                  </div>
                  <div className="check-item">
                    <CheckCircle2 className="text-primary-accent" />
                    <span><strong>Personalization:</strong> Knowledge-based treatment recommenders.</span>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="overview-visual"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="abstract-card card">
                <h4>Short Abstract</h4>
                <p>
                  This system improves diagnosis accuracy by combining visual and symptom data
                  instead of using only images. It provides explainable severity scoring and
                  personalized skincare recommendations, addressing the bias found in current
                  datasets across different skin tones.
                </p>
                <div className="card-footer-stats">
                  <div className="mini-stat">
                    <span>Precision</span>
                    <div className="progress-bar"><div className="progress" style={{ width: '92%' }}></div></div>
                  </div>
                  <div className="mini-stat">
                    <span>Recall</span>
                    <div className="progress-bar"><div className="progress" style={{ width: '89%' }}></div></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="container">
          <SectionHeader
            title="How the System Works"
            subtitle="A seamless 6-step journey from input to recommendation."
          />
          <div className="steps-container">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="step-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="step-num">{i + 1}</div>
                <div className="step-icon">{step.icon}</div>
                <h5>{step.title}</h5>
                <p>{step.desc}</p>
                {i < steps.length - 1 && <div className="step-arrow"><ArrowRight /></div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="section bg-dark">
        <div className="container">
          <SectionHeader
            title="Core Research Components"
            subtitle="Innovative features driving the next generation of dermatological AI."
            light={true}
          />
          <div className="grid grid-3">
            {features.map((f, i) => (
              <motion.div
                key={i}
                className="feature-card-rich card glass-dark"
                whileHover={{ scale: 1.05 }}
              >
                <div className="f-icon-rich">{f.icon}</div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* System Preview Mockups */}
      <section id="preview" className="section bg-soft">
        <div className="container">
          <SectionHeader
            title="Application Preview"
            subtitle="A glimpse into the user-centric interface of the SkinAI framework."
          />
          <div className="grid grid-3">
            {mockups.map((m, i) => (
              <SystemMockup
                key={i}
                title={m.title}
                caption={m.caption}
                image={m.image}
                type="phone"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Results Highlights */}
      <section className="section">
        <div className="container">
          <SectionHeader
            title="Research Highlights"
            subtitle="Key achievements and performance milestones of our multimodal system."
          />
          <div className="grid grid-4">
            <div className="card result-card">
              <BarChart3 className="text-primary-accent" size={40} />
              <h3>94.2%</h3>
              <p>Mean Average Precision across 7 disease classes.</p>
            </div>
            <div className="card result-card">
              <ShieldCheck className="text-primary-accent" size={40} />
              <h3>100%</h3>
              <p>Explainable severity justifications for clinical use.</p>
            </div>
            <div className="card result-card">
              <Globe className="text-primary-accent" size={40} />
              <h3>Domain</h3>
              <p>Consistent performance across Fitzpatrick I-VI skin types.</p>
            </div>
            <div className="card result-card">
              <Zap className="text-primary-accent" size={40} />
              <h3>{'< 2s'}</h3>
              <p>Inference time for real-time diagnostic support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-soft">
        <div className="container">
          <SectionHeader title="Frequently Asked Questions" />
          <div className="faq-container card">
            {[
              { q: "What is Multimodal AI?", a: "It is an AI framework that processes multiple types of data simultaneously—in our case, images of skin lesions and textual/voice symptom descriptions." },
              { q: "How does the system ensure fairness?", a: "We use Domain Adaptation techniques to ensure the model performs equally well on dark skin tones as it does on lighter ones." },
              { q: "Is this a replacement for doctors?", a: "No, this is a treatment support tool designed to assist dermatologists and provide screening for patients in remote areas." }
            ].map((faq, i) => (
              <div key={i} className="faq-item">
                <h5>{faq.q}</h5>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        /* Hero Styling */
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 100px 0;
          position: relative;
          background: #0F172A;
          overflow: hidden;
          width: 100%;
        }
        .hero-bg-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 15% 50%, rgba(59, 130, 246, 0.15), transparent 60%),
                      radial-gradient(circle at 85% 50%, rgba(16, 185, 129, 0.1), transparent 60%);
          z-index: 1;
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: center;
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 100%;
          margin: 0;
          padding: 0 8%;
        }
        
        /* Left Column Content */
        .hero-brand-logo {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }
        .brand-icon {
          width: 50px;
          height: 50px;
          background: var(--grad-blue);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 8px 16px rgba(59, 130, 246, 0.3);
        }
        .brand-tag {
          font-weight: 700;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #60A5FA;
        }
        
        .hero-title {
          font-size: 3.8rem;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: white;
          font-weight: 800;
          letter-spacing: -1px;
        }
        .hero-subtitle {
          font-size: 1.2rem;
          color: #94A3B8;
          margin-bottom: 3rem;
          max-width: 580px;
          line-height: 1.7;
        }
        .hero-cta { display: flex; gap: 1.25rem; margin-bottom: 4rem; }
        .hero-section .btn { padding: 0.9rem 2.2rem; font-size: 1rem; border-radius: 50px; }
        
        .hero-stats-row {
          display: flex;
          align-items: center;
          gap: 3.5rem;
          padding-top: 3rem;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .hero-stat-item { text-align: left; }
        .h-stat-num { font-size: 2.2rem; font-weight: 800; display: block; color: white; margin-bottom: 0.2rem; }
        .h-stat-label { color: #64748B; font-weight: 600; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; }
        .hero-stat-divider { width: 1px; height: 40px; background: rgba(255,255,255,0.1); }
        
        /* Right Column Visual */
        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .hero-visual-wrapper {
          position: relative;
          width: 100%;
          max-width: 500px;
        }
        .main-mockup-wrapper {
          position: relative;
          padding: 2rem;
        }
        .hero-main-mockup {
          width: 100%;
          max-width: 300px;
          margin: 0 auto;
          display: block;
          border-radius: 3.25rem;
          box-shadow: 0 40px 80px -15px rgba(0,0,0,0.6);
          border: 8px solid #1e293b;
          background: #fff;
        }
        
        /* Floating Cards - Spread Out Cleanly */
        .f-card {
          position: absolute;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          padding: 1rem 1.25rem;
          border-radius: 1.25rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          box-shadow: 0 15px 30px rgba(0,0,0,0.2);
          z-index: 10;
          min-width: 200px;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .f-card-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        .f-card-info { display: flex; flex-direction: column; }
        .f-card-label { font-size: 0.7rem; font-weight: 700; color: #64748B; text-transform: uppercase; }
        .f-card-value { font-size: 0.9rem; font-weight: 800; color: #0F172A; }
        
        .bg-blue { background: #3B82F6; }
        .bg-red { background: #EF4444; }
        .bg-green { background: #10B981; }
        .bg-purple { background: #8B5CF6; }
        
        /* Balanced Card Positions */
        .f-diagnosis { top: -5%; left: -20px; }
        .f-severity { top: 35%; right: -60px; }
        .f-voice { bottom: 25%; left: -50px; }
        .f-recommendation { bottom: -10%; right: -10px; }


        /* Overview */
        .overview-text { text-align: left; }
        .feature-check-list { margin-top: 2rem; }
        .check-item { display: flex; gap: 1rem; margin-bottom: 1rem; align-items: flex-start; }
        .check-item svg { margin-top: 3px; flex-shrink: 0; }
        .check-item span { font-weight: 500; }
        .abstract-card h4 { margin-bottom: 1rem; color: var(--primary-accent); }
        .card-footer-stats { margin-top: 2rem; }
        .mini-stat { margin-bottom: 1rem; }
        .mini-stat span { font-size: 0.8rem; font-weight: 700; color: var(--text-muted); }
        .progress-bar { height: 6px; background: var(--border); border-radius: 3px; margin-top: 4px; }
        .progress { height: 100%; background: var(--grad-blue); border-radius: 3px; }

        /* Steps */
        .steps-container {
          display: flex;
          justify-content: space-between;
          gap: 1.5rem;
          margin-top: 4rem;
        }
        .step-card {
          flex: 1;
          text-align: center;
          position: relative;
        }
        .step-num {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 30px;
          height: 30px;
          background: var(--primary-accent);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 0.8rem;
          border: 4px solid white;
        }
        .step-icon {
          width: 80px;
          height: 80px;
          background: var(--primary-light);
          color: var(--primary-accent);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          transition: var(--transition);
        }
        .step-card:hover .step-icon { transform: rotate(10deg); background: var(--primary-accent); color: white; }
        .step-arrow {
          position: absolute;
          top: 40px;
          right: -20px;
          color: var(--border);
        }
        
        /* Features Rich */
        .feature-card-rich {
          border: 1px solid rgba(255,255,255,0.1);
          padding: 3rem 2rem;
          text-align: center;
        }
        .f-icon-rich {
          width: 60px;
          height: 60px;
          background: rgba(59, 130, 246, 0.1);
          color: var(--primary-accent);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 2rem;
        }
        .feature-card-rich h4 { color: white; margin-bottom: 1rem; }
        .feature-card-rich p { color: #CBD5E1; }

        /* Results */
        .result-card { text-align: center; }
        .result-card h3 { font-size: 2.5rem; margin: 1rem 0; color: var(--primary-accent); }

        /* FAQ */
        .faq-item { padding: 2rem 0; border-bottom: 1px solid var(--border); }
        .faq-item:last-child { border: none; }
        .faq-item h5 { margin-bottom: 0.75rem; color: var(--primary); }

        @media (max-width: 1024px) {
          .hero-container { 
            grid-template-columns: 1fr; 
            text-align: center; 
            gap: 4rem;
            padding-top: 40px;
          }
          .hero-brand-logo { justify-content: center; }
          .hero-subtitle { margin-left: auto; margin-right: auto; }
          .hero-cta { justify-content: center; }
          .hero-stats-row { justify-content: center; }
          .hero-title { font-size: 3.5rem; }
          .steps-container { flex-direction: column; }
          .step-arrow { display: none; }
          .f-card { display: none; } /* Hide floating cards on mobile to avoid clutter */
          .hero-main-mockup { max-width: 280px; }
        }
        @media (max-width: 640px) {
          .hero-title { font-size: 2.8rem; }
          .hero-stats-row { flex-direction: column; gap: 1.5rem; }
          .hero-stat-divider { display: none; }
        }
      `}</style>
    </div>
  );
};

export default Home;
