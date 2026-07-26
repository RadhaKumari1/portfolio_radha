import React from 'react';
import { CONTACT_INFO, EDUCATION, EXPERIENCES, PROJECTS, CERTIFICATIONS } from '../data/portfolioData';
import { Download, Printer, X, FileText, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6">
      <div className="bg-slate-900 border border-slate-800 w-full max-w-4xl rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl max-h-[92vh] overflow-y-auto space-y-6 relative animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 print:hidden">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-indigo-600/20 text-indigo-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Radha Kumari - Standard Resume</h3>
              <p className="text-xs text-slate-400">Software Engineer | NIT Jamshedpur '24</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-2 transition-all shadow-md shadow-indigo-600/20"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Standard PDF Resume Paper Document */}
        <div className="bg-white text-slate-900 p-8 sm:p-12 rounded-xl shadow-2xl font-serif max-w-3xl mx-auto space-y-6 text-sm leading-normal print:p-0 print:shadow-none print:w-full">
          {/* Resume Header */}
          <div className="text-center space-y-2 border-b border-slate-300 pb-4">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 font-sans">
              Radha Kumari
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-3 text-xs font-sans text-slate-700">
              <span className="font-semibold">{CONTACT_INFO.phone}</span>
              <span>•</span>
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-indigo-700 underline font-medium">
                Email
              </a>
              <span>•</span>
              <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className="text-indigo-700 underline font-medium">
                LinkedIn
              </a>
              <span>•</span>
              <a href={CONTACT_INFO.github} target="_blank" rel="noreferrer" className="text-indigo-700 underline font-medium">
                GitHub
              </a>
              <span>•</span>
              <a href={CONTACT_INFO.leetcode} target="_blank" rel="noreferrer" className="text-indigo-700 underline font-medium">
                LeetCode
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-base font-bold uppercase tracking-wider text-slate-950 border-b border-slate-400 pb-1 font-sans">
              Education
            </h2>
            <div className="flex justify-between items-start font-sans text-xs">
              <div>
                <p className="font-bold text-slate-900 text-sm">{EDUCATION.institution}</p>
                <p className="text-slate-800">
                  {EDUCATION.degree} in {EDUCATION.field} <span className="font-semibold">(CGPA: {EDUCATION.cgpa})</span>
                </p>
              </div>
              <div className="text-right text-slate-700">
                <p className="font-bold">{EDUCATION.period}</p>
                <p>{EDUCATION.location}</p>
              </div>
            </div>
            <p className="text-xs text-slate-700 font-sans">
              <span className="font-bold">Relevant Coursework:</span> {EDUCATION.coursework.join(', ')}
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h2 className="text-base font-bold uppercase tracking-wider text-slate-950 border-b border-slate-400 pb-1 font-sans">
              Experience
            </h2>
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="space-y-1 font-sans text-xs">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-bold text-slate-950 text-sm">{exp.company}</span>
                  </div>
                  <div className="text-right text-slate-700 font-bold">
                    {exp.period}
                  </div>
                </div>
                <div className="flex justify-between items-start italic text-slate-800">
                  <span>{exp.role}</span>
                  <span>{exp.location}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-800 pl-1">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="leading-tight">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="text-base font-bold uppercase tracking-wider text-slate-950 border-b border-slate-400 pb-1 font-sans">
              Projects
            </h2>
            {PROJECTS.map((proj) => (
              <div key={proj.id} className="space-y-1 font-sans text-xs">
                <div className="font-bold text-slate-950 text-sm">
                  {proj.title} <span className="font-normal italic text-slate-700">| {proj.techStack.join(', ')}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-800 pl-1">
                  {proj.description.map((d, dIdx) => (
                    <li key={dIdx} className="leading-tight">
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="space-y-2 font-sans text-xs">
            <h2 className="text-base font-bold uppercase tracking-wider text-slate-950 border-b border-slate-400 pb-1">
              Technical Skills
            </h2>
            <p>
              <span className="font-bold">Languages and Frameworks:</span> Node.js, React.js, Vue.js, Express.js, Bootstrap, Python, C, C++, Git
            </p>
            <p>
              <span className="font-bold">Cloud and DevOps:</span> AWS (SQS, CloudWatch, S3), Microservices, Docker, Kubernetes
            </p>
            <p>
              <span className="font-bold">Database and ORMs:</span> MongoDB, PostgreSQL, MySQL, Redis
            </p>
          </div>

          {/* Certifications */}
          <div className="space-y-2 font-sans text-xs">
            <h2 className="text-base font-bold uppercase tracking-wider text-slate-950 border-b border-slate-400 pb-1">
              Certifications
            </h2>
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.id} className="space-y-0.5">
                <p>
                  <span className="font-bold">{cert.title}</span> – <span className="italic">{cert.issuer}</span> – {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
