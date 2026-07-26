import React from 'react';
import { EDUCATION } from '../data/portfolioData';
import {
  Award,
  BookOpen,
  GraduationCap,
  MapPin,
  Sparkles,
  CheckCircle2,
  Calendar,
  Layers,
} from 'lucide-react';

export const AboutEducation: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-900 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Background & Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Academic Excellence Meets Production Engineering
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Graduated with distinction from NIT Jamshedpur, specializing in Computer Science, Data Structures, Algorithms, Distributed Systems, and Machine Learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Bio Overview */}
          <div className="lg:col-span-5 space-y-6 bg-slate-950/80 p-8 rounded-2xl border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold text-xl">
                RK
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Radha Kumari</h3>
                <p className="text-xs text-indigo-400 font-medium">
                  Software Engineer & Computer Scientist
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              I am a results-driven Software Engineer with hands-on experience designing high-throughput REST APIs, migrating database security architectures to passwordless cloud setups, and orchestrating container workloads on Kubernetes.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              At TATA AIG, I've delivered critical backend integrations—including bulk coinsurance claim processing pipelines and automated health probes—improving overall application uptime and system observability.
            </p>

            <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  Core Discipline
                </p>
                <p className="text-sm font-semibold text-slate-200">
                  Full-Stack & Cloud
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  Degree
                </p>
                <p className="text-sm font-semibold text-slate-200">
                  B.Tech in CSE
                </p>
              </div>
            </div>
          </div>

          {/* Education Detail Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 rounded-2xl border border-slate-800 shadow-2xl relative overflow-hidden space-y-6">
              {/* Top Accent Line */}
              <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 absolute top-0 left-0" />

              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                    <Award className="w-3.5 h-3.5" />
                    <span>CGPA: {EDUCATION.cgpa}</span>
                  </span>
                  <h3 className="text-2xl font-bold text-white pt-2">
                    {EDUCATION.institution}
                  </h3>
                  <p className="text-indigo-400 font-medium text-sm">
                    {EDUCATION.degree} in {EDUCATION.field}
                  </p>
                </div>

                <div className="text-right space-y-1 text-slate-400 text-xs">
                  <div className="flex items-center gap-1.5 justify-end">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span className="font-medium text-slate-300">{EDUCATION.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 justify-end">
                    <MapPin className="w-3.5 h-3.5 text-purple-400" />
                    <span>{EDUCATION.location}</span>
                  </div>
                </div>
              </div>

              {/* Coursework Pills Grid */}
              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  <BookOpen className="w-4 h-4 text-indigo-400" />
                  <span>Relevant Academic Coursework</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {EDUCATION.coursework.map((course, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-2.5 hover:border-indigo-500/40 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span className="text-xs font-medium text-slate-200">
                        {course}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
