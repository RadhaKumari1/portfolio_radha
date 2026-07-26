import React from 'react';
import { SectionId } from '../types';
import { CONTACT_INFO } from '../data/portfolioData';
import {
  ArrowRight,
  Code2,
  Cpu,
  Database,
  FileText,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Terminal,
  Zap,
} from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (section: SectionId) => void;
  onOpenResumeModal: () => void;
  onOpenTerminal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenResumeModal,
  onOpenTerminal,
}) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-950 text-slate-100">
      {/* Background Glowing Gradients & Mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-pink-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-medium backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Software Engineer @ TATA AIG</span>
              <span className="text-indigo-400/50">•</span>
              <span className="text-slate-400">NIT Jamshedpur '24</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Building Resilient <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                  Cloud Architectures
                </span>{' '}
                & Backend APIs
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 font-normal max-w-2xl leading-relaxed">
                Specializing in passwordless security migrations, Kubernetes container orchestration, Node.js REST services, and agentic AI integrations.
              </p>
            </div>

            {/* Contact Quick Chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-indigo-500/50 text-slate-300 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <span>{CONTACT_INFO.email}</span>
              </a>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-indigo-500/50 text-slate-300 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{CONTACT_INFO.phone}</span>
              </a>
              <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 text-xs font-medium flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                <span>{CONTACT_INFO.location}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => onNavigate('experience')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/25 flex items-center gap-2 hover:scale-[1.02] active:scale-95 transition-all"
              >
                <span>Explore Experience</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenTerminal}
                className="px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-medium text-sm flex items-center gap-2 hover:scale-[1.02] active:scale-95 transition-all"
              >
                <Terminal className="w-4 h-4 text-indigo-400" />
                <span>CLI Terminal</span>
              </button>

              <button
                onClick={onOpenResumeModal}
                className="px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white font-medium text-sm flex items-center gap-2 transition-all"
              >
                <FileText className="w-4 h-4 text-purple-400" />
                <span>Resume PDF</span>
              </button>
            </div>

            {/* External Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 text-slate-400 text-xs">
              <span className="font-semibold text-slate-500 uppercase tracking-wider text-[10px]">
                Profiles:
              </span>
              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-400 flex items-center gap-1 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span>•</span>
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-400 flex items-center gap-1 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span>•</span>
              <a
                href={CONTACT_INFO.leetcode}
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-400 flex items-center gap-1 transition-colors"
              >
                <Code2 className="w-4 h-4" />
                <span>LeetCode</span>
              </a>
            </div>
          </div>

          {/* Right Feature Card / Code Terminal Mockup */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 p-6 shadow-2xl backdrop-blur-xl overflow-hidden group">
              {/* Corner Decorative Accent */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl group-hover:bg-indigo-500/30 transition-all" />

              {/* Terminal Window Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">
                    radha_kumari_stack.config.ts
                  </span>
                </div>
                <div className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono">
                  ● ACTIVE_PRODUCTION
                </div>
              </div>

              {/* Snippet Code Lines */}
              <div className="font-mono text-xs space-y-3 leading-relaxed text-slate-300">
                <div className="text-slate-500">// TATA AIG Production Highlights</div>
                <div>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-indigo-300">engineer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">name:</span>{' '}
                  <span className="text-emerald-300">'Radha Kumari'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">currentCompany:</span>{' '}
                  <span className="text-emerald-300">'TATA AIG General Insurance'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">securityMigration:</span>{' '}
                  <span className="text-amber-300">'Passwordless MongoDB & PostgreSQL (AWS RDS)'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">k8sProbeUptimeBoost:</span>{' '}
                  <span className="text-cyan-300">'+20% Service Reliability'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">coreTech:</span> [
                  <span className="text-pink-300">'Node.js'</span>,{' '}
                  <span className="text-pink-300">'Kubernetes'</span>,{' '}
                  <span className="text-pink-300">'AWS RDS'</span>,{' '}
                  <span className="text-pink-300">'React.js'</span>,{' '}
                  <span className="text-pink-300">'Python'</span>],
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">certifications:</span> [
                  <span className="text-indigo-300">'Google Cloud Agentic AI'</span>,{' '}
                  <span className="text-indigo-300">'AWS Cloud'</span>,{' '}
                  <span className="text-indigo-300">'Advanced MongoDB'</span>]
                </div>
                <div>&#125;;</div>
              </div>

              {/* Quick Feature Badges Grid */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="flex items-center gap-2 text-indigo-400 font-semibold text-xs mb-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Passwordless Auth</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    AWS RDS PostgreSQL & MongoDB
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="flex items-center gap-2 text-indigo-400 font-semibold text-xs mb-1">
                    <Zap className="w-4 h-4 text-amber-400" />
                    <span>20% Uptime Gain</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Kubernetes Liveness Probes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
          <div className="text-center md:text-left space-y-1">
            <p className="text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              8.58 / 10
            </p>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
              CGPA @ NIT Jamshedpur
            </p>
          </div>

          <div className="text-center md:text-left space-y-1">
            <p className="text-2xl lg:text-3xl font-extrabold text-emerald-400">
              +20%
            </p>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
              Uptime Boost (K8s)
            </p>
          </div>

          <div className="text-center md:text-left space-y-1">
            <p className="text-2xl lg:text-3xl font-extrabold text-amber-400">
              -15%
            </p>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
              Page Load Optimization
            </p>
          </div>

          <div className="text-center md:text-left space-y-1">
            <p className="text-2xl lg:text-3xl font-extrabold text-pink-400">
              3 Major
            </p>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
              Industry Certifications
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
