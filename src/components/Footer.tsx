import React from 'react';
import { CONTACT_INFO } from '../data/portfolioData';
import { SectionId } from '../types';
import { ArrowUp, Code2, Github, Linkedin, Mail, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: SectionId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 p-[2px]">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-bold text-white text-sm">
                RK
              </div>
            </div>
            <div>
              <span className="font-bold text-white text-base block">Radha Kumari</span>
              <span className="text-[11px] text-slate-500">
                Software Engineer • Full-Stack & Cloud
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-300">
            <button onClick={() => onNavigate('about')} className="hover:text-indigo-400 transition-colors">
              About
            </button>
            <button onClick={() => onNavigate('experience')} className="hover:text-indigo-400 transition-colors">
              Experience
            </button>
            <button onClick={() => onNavigate('projects')} className="hover:text-indigo-400 transition-colors">
              Projects
            </button>
            <button onClick={() => onNavigate('skills')} className="hover:text-indigo-400 transition-colors">
              Skills
            </button>
            <button onClick={() => onNavigate('certifications')} className="hover:text-indigo-400 transition-colors">
              Certifications
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-indigo-400 transition-colors">
              Contact
            </button>
          </div>

          {/* Social Profiles & Back To Top */}
          <div className="flex items-center gap-3">
            <a
              href={CONTACT_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-800"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-indigo-400 transition-colors border border-slate-800"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-indigo-600/20 text-indigo-400 hover:bg-indigo-600 hover:text-white transition-all border border-indigo-500/30"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <p>© {new Date().getFullYear()} Radha Kumari. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Engineered with React, TypeScript & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
