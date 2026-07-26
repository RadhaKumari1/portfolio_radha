import React from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import {
  Award,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-slate-900 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Professional Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Industry Certifications & Achievements
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Verified expertise in Agentic AI platforms, AWS cloud services, and advanced MongoDB database architecture.
          </p>
        </div>

        {/* Certifications Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-all shadow-xl flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header Icon + Verification */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Award className="w-6 h-6" />
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>VERIFIED</span>
                  </div>
                </div>

                {/* Title & Issuer */}
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-semibold text-indigo-400">
                      {cert.issuer}
                    </span>
                    {cert.dateBadge && (
                      <>
                        <span className="text-slate-600">•</span>
                        <span className="text-[11px] text-slate-400 font-medium">
                          {cert.dateBadge}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Skills Covered Tags */}
              <div className="pt-6 border-t border-slate-800/80 space-y-2">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 block">
                  Core Skills Evaluated:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skillsCovered.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
