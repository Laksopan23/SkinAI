import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, AlertTriangle, Target, Cpu, 
  Layers, Workflow, ChevronRight, Mic, 
  Search, ShieldCheck, HeartPulse, CheckCircle2,
  Code2, Terminal, Database, Globe, FileText
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const Domain = () => {
  return (
    <div className="domain-page" style={{ paddingTop: '120px' }}>
      {/* Literature Survey */}
      <section className="section bg-soft">
        <div className="container">
          <SectionHeader 
            title="Literature Survey" 
            subtitle="Understanding the current landscape of AI in dermatology."
          />
          <div className="card glass literature-card">
            <div className="lit-content">
              <p>
                In recent years, artificial intelligence in dermatology has primarily centered around Convolutional Neural Networks (CNNs), 
                utilizing advanced architectures such as ResNet and EfficientNet. These models have demonstrated high proficiency in 
                detecting skin diseases through the analysis of dermoscopic images, often matching or exceeding clinical performance in 
                controlled visual classification tasks. Simultaneously, Natural Language Processing (NLP) models like BERT have emerged 
                as powerful tools for processing complex patient-reported symptoms and medical histories.
              </p>
              <p>
                However, most existing diagnostic systems remain strictly unimodal, relying solely on image data for their predictions. 
                This narrow focus often leads to failure in complex, real-world clinical scenarios where visual evidence alone is 
                insufficient. Without integrating patient symptoms or the evolution of the condition, these systems lack the critical 
                context needed for a holistic and accurate medical assessment, highlighting a significant need for multimodal integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Gap & Problem */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2 gap-8">
            <motion.div 
              className="card gap-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="card-header-icon bg-red"><AlertTriangle /></div>
              <h3>Research Gap</h3>
              <ul className="domain-list-rich">
                <li><ChevronRight size={18} /> Existing systems rely <strong>only on image data</strong>.</li>
                <li><ChevronRight size={18} /> No integration for <strong>symptom or voice inputs</strong>.</li>
                <li><ChevronRight size={18} /> Lack of <strong>explainable AI (XAI)</strong> for clinical trust.</li>
                <li><ChevronRight size={18} /> Poor performance across <strong>diverse skin tones</strong>.</li>
                <li><ChevronRight size={18} /> No automated <strong>severity tracking</strong> system.</li>
                <li><ChevronRight size={18} /> Lack of <strong>personalized treatment</strong> suggestions.</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="card gap-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="card-header-icon bg-blue"><Target /></div>
              <h3>Research Problem</h3>
              <p>
                Skin diseases are notoriously difficult to diagnose accurately using images alone, leading to potential misdiagnosis. 
                Many patients, especially in rural areas, lack immediate access to professional dermatologists, leaving them 
                reliant on potentially unreliable automated tools. 
              </p>
              <p className="mt-4">
                Current image-only AI systems fail to perform in real-world scenarios due to their inability to consider 
                clinical context. The lack of symptom-based context—such as duration, pain levels, and progression—leads 
                to incorrect predictions and a general lack of clinical utility.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Objectives */}
      <section className="section bg-dark text-white">
        <div className="container">
          <SectionHeader 
            title="Research Objectives" 
            subtitle="Our roadmap for innovation in dermatological AI."
            light={true}
          />
          <div className="grid grid-2 items-center">
            <div className="obj-main">
              <span className="badge badge-outline">General Objective</span>
              <h2 className="text-white mt-4">Develop a multimodal AI system for accurate and inclusive skin disease diagnosis.</h2>
            </div>
            <div className="obj-list">
              <span className="badge badge-primary">Specific Objectives</span>
              <div className="mt-6">
                {[
                  "Combine image and clinical symptom data for fusion analysis.",
                  "Integrate voice input using Speech-to-Text (ASR) technology.",
                  "Improve diagnostic accuracy through multimodal fusion techniques.",
                  "Provide transparent and explainable severity assessments.",
                  "Ensure fairness and accuracy across diverse skin types/tones.",
                  "Generate personalized treatment and skincare recommendations."
                ].map((obj, i) => (
                  <div key={i} className="obj-item">
                    <CheckCircle2 size={20} className="text-primary-accent" />
                    <p>{obj}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="section">
        <div className="container">
          <SectionHeader 
            title="Methodology" 
            subtitle="The step-by-step technical approach of the SkinAI framework."
          />
          
          <div className="methodology-timeline">
            {[
              { title: 'Image Processing', desc: 'Feature extraction using state-of-the-art CNNs (ResNet / ConvNeXt).', icon: <Layers /> },
              { title: 'Voice Input', desc: 'Capturing patient descriptions via ASR for speech-to-text conversion.', icon: <Mic /> },
              { title: 'Text Processing', desc: 'Analyzing symptom context using BERT or similar NLP models.', icon: <FileText /> },
              { title: 'Multimodal Fusion', desc: 'Combining visual and textual features for unified prediction.', icon: <Workflow /> },
              { title: 'Severity Assessment', desc: 'Calculating clinical urgency using a rule-based scoring system.', icon: <ShieldCheck /> },
              { title: 'Domain Adaptation', desc: 'Applying techniques to improve fairness across skin populations.', icon: <Globe /> },
              { title: 'Recommendation System', desc: 'Knowledge-based mapping for personalized care plans.', icon: <HeartPulse /> }
            ].map((step, i) => (
              <motion.div 
                key={i} 
                className="method-step-card card glass"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="step-count">{i + 1}</div>
                <div className="step-icon-main">{step.icon}</div>
                <div className="step-info">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="section bg-soft">
        <div className="container">
          <SectionHeader 
            title="Technologies Used" 
            subtitle="The powerful stack driving our multimodal research."
          />
          <div className="grid grid-3 gap-6">
            {[
              { name: 'Python', icon: <Terminal />, desc: 'Core programming language for ML development.' },
              { name: 'PyTorch / TensorFlow', icon: <Database />, desc: 'Deep learning frameworks for model training.' },
              { name: 'Hugging Face', icon: <Globe />, desc: 'Pre-trained NLP and Transformer architectures.' },
              { name: 'OpenCV', icon: <Cpu />, desc: 'Computer vision library for image preprocessing.' },
              { name: 'ASR Tools', icon: <Mic />, desc: 'Speech recognition for symptom transcription.' },
              { name: 'React', icon: <Code2 />, desc: 'Modern frontend for the user-facing interface.' }
            ].map((tech, i) => (
              <div key={i} className="tech-card card">
                <div className="tech-icon">{tech.icon}</div>
                <h3>{tech.name}</h3>
                <p>{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .domain-page { text-align: left; }
        .literature-card { padding: 3rem; line-height: 1.8; }
        .lit-content p { margin-bottom: 1.5rem; font-size: 1.1rem; color: var(--text); }
        .lit-content p:last-child { margin-bottom: 0; }

        .card-header-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          color: white;
        }
        .bg-red { background: #EF4444; }
        .bg-blue { background: #3B82F6; }
        
        .domain-list-rich { list-style: none; margin-top: 1.5rem; }
        .domain-list-rich li { display: flex; gap: 0.75rem; margin-bottom: 1rem; align-items: flex-start; font-size: 1rem; }
        .domain-list-rich li svg { margin-top: 4px; flex-shrink: 0; }
        .domain-list-rich li strong { color: var(--primary); }
        
        .obj-main, .obj-list { display: flex; flex-direction: column; text-align: left; }
        .obj-main .badge, .obj-list .badge { align-self: center; margin-bottom: 1.5rem; }
        .obj-item { display: flex; gap: 1rem; align-items: flex-start; margin-bottom: 1.5rem; }
        .obj-item p { font-size: 1.05rem; line-height: 1.4; margin: 0; }
        
        .methodology-timeline {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 800px;
          margin: 0 auto;
        }
        .method-step-card {
          display: flex;
          align-items: center;
          gap: 2rem;
          padding: 1.5rem 2.5rem;
          position: relative;
        }
        .step-count {
          font-size: 3rem;
          font-weight: 800;
          color: var(--primary-light);
          opacity: 0.5;
          min-width: 60px;
        }
        .step-icon-main {
          width: 50px;
          height: 50px;
          background: var(--primary-accent);
          color: white;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .step-info h4 { margin-bottom: 0.25rem; font-size: 1.25rem; }
        .step-info p { color: var(--text-muted); }

        .tech-card {
          text-align: center;
          padding: 2.5rem;
          transition: var(--transition);
        }
        .tech-card:hover { transform: translateY(-5px); border-color: var(--primary-accent); }
        .tech-icon {
          width: 60px;
          height: 60px;
          background: var(--primary-light);
          color: var(--primary-accent);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }
        .tech-card h3 { margin-bottom: 0.75rem; font-size: 1.25rem; }
        .tech-card p { color: var(--text-muted); font-size: 0.9rem; }

        .badge-outline {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.3);
          color: white;
        }
        .badge-primary {
          background: var(--primary-accent);
          color: white;
        }

        @media (max-width: 768px) {
          .method-step-card { flex-direction: column; text-align: center; gap: 1rem; }
          .step-count { font-size: 2rem; min-width: auto; }
        }
      `}</style>
    </div>
  );
};

export default Domain;
