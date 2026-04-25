import React from 'react';
import { FileText, Download, Eye, Layout } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

// Document Files
import finalResearchPaper from '../assets/documents/research_paper_222.pdf';
import proposalDoc from '../assets/documents/25-26j-222 final full proposal.pdf';
import srsDoc from '../assets/documents/SOFTWARE REQUIREMENT SPECIFICATION.pdf';
import interimReport from '../assets/documents/Interim_Status_Report_Final.pdf';

const DocumentCard = ({ title, type, size, fileUrl }) => (
  <div className="card doc-card">
    <div className="doc-icon">
      {type === 'presentation' ? <Layout size={32} /> : <FileText size={32} />}
    </div>
    <div className="doc-info">
      <h4>{title}</h4>
      <p>{size}</p>
    </div>
    <div className="doc-actions">
      <button
        className="btn-icon"
        title="View"
        onClick={() => fileUrl && window.open(fileUrl, '_blank')}
      >
        <Eye size={20} />
      </button>
      <a
        href={fileUrl}
        download={title}
        className={`btn-icon primary ${!fileUrl ? 'disabled' : ''}`}
        title="Download"
        onClick={(e) => !fileUrl && e.preventDefault()}
      >
        <Download size={20} />
      </a>
    </div>
  </div>
);

const Documents = () => {
  const docs = [
    { title: 'Proposal Document', size: '720 KB', type: 'doc', fileUrl: proposalDoc },
    { title: 'Requirement Specification', size: '203 KB', type: 'doc', fileUrl: srsDoc },
    { title: 'Interim Status Report', size: '7 KB', type: 'doc', fileUrl: interimReport },
    { title: 'Final Research Paper', size: '608 KB', type: 'doc', fileUrl: finalResearchPaper }
  ];

  return (
    <div className="docs-page" style={{ paddingTop: '100px' }}>
      <div className="container">
        <SectionHeader
          title="Project Documents"
          subtitle="Access official documentation, reports, and research papers."
        />
        <div className="grid grid-2">
          {docs.map((doc, i) => <DocumentCard key={i} {...doc} />)}
        </div>
      </div>
      <style>{`
        .doc-card {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem;
        }
        .doc-icon {
          width: 60px;
          height: 60px;
          background: var(--primary-light);
          color: var(--primary);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .doc-info {
          flex: 1;
        }
        .doc-info h4 { margin-bottom: 0.25rem; }
        .doc-info p { font-size: 0.875rem; color: var(--text-muted); }
        .doc-actions { display: flex; gap: 0.5rem; }
        .btn-icon {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f1f5f9;
          color: var(--text-muted);
          transition: var(--transition);
        }
        .btn-icon:hover { background: #e2e8f0; color: var(--text); }
        .btn-icon.primary { background: var(--primary-light); color: var(--primary); text-decoration: none; }
        .btn-icon.primary:hover { background: var(--primary); color: #fff; }
        .btn-icon.disabled { opacity: 0.5; cursor: not-allowed; }
      `}</style>
    </div>
  );
};

export default Documents;
