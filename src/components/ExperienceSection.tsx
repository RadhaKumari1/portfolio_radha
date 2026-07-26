import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import {
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Database,
  MapPin,
  Server,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Work History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Industry Experience @ TATA AIG
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Delivering high-performance backend pipelines, passwordless AWS database migrations, Kubernetes health monitoring, and REST API latency reduction.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={exp.id}
              className="relative p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all shadow-xl group overflow-hidden"
            >
              {/* Subtle Glowing Accent for full-time */}
              {exp.type === 'Full-time' && (
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-indigo-500/20 transition-all" />
              )}

              <div className="flex flex-wrap items-start justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        exp.type === 'Full-time'
                          ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                          : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                      }`}
                    >
                      {exp.type}
                    </span>
                    <span className="text-slate-500 text-xs">•</span>
                    <span className="text-slate-400 text-xs font-medium">
                      {exp.location}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {exp.role}
                  </h3>

                  <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 text-xs font-medium">
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Metrics Highlights Bar */}
              {exp.metrics && exp.metrics.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  {exp.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-center sm:text-left space-y-0.5"
                    >
                      <p className="text-xs font-medium text-slate-400">
                        {m.label}
                      </p>
                      <p className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                        {m.value}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Accomplishment Bullet List */}
              <div className="space-y-3 mb-6">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Key Achievements & Engineering Deliverables:
                </p>
                <ul className="space-y-2.5">
                  {exp.highlights.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                      <div className="w-5 h-5 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 mt-0.5 text-indigo-400">
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skill Tags */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-500 font-semibold mr-1">
                  Stack:
                </span>
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 text-xs font-mono font-medium hover:border-indigo-500/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
