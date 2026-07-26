import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { SalesMlDemo } from './SalesMlDemo';
import { SociopediaDemo } from './SociopediaDemo';
import { FaceRecDemo } from './FaceRecDemo';
import {
  Code,
  Cpu,
  ExternalLink,
  FolderGit2,
  Github,
  Layers,
  Sparkles,
  Terminal,
  X,
  Play,
  CheckCircle,
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('ALL');
  const [activeDemoProject, setActiveDemoProject] = useState<Project | null>(null);

  const categories = [
    { key: 'ALL', label: 'All Projects' },
    { key: 'Full-Stack', label: 'Full-Stack' },
    { key: 'Machine Learning', label: 'Machine Learning' },
    { key: 'Computer Vision & Web', label: 'Computer Vision & AI' },
  ];

  const filteredProjects =
    filter === 'ALL'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-slate-900 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Portfolio Highlights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured Projects & Intelligent Systems
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Full-stack web applications, deep learning sales forecasting, and biometric computer vision engines built with clean modular architectures.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                filter === cat.key
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/20 scale-105'
                  : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-950/80 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-all shadow-2xl flex flex-col justify-between overflow-hidden group hover:-translate-y-1 duration-300"
            >
              <div className="p-6 space-y-4">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[10px] font-bold uppercase tracking-wider">
                    {project.category}
                  </span>

                  <button
                    onClick={() => setActiveDemoProject(project)}
                    className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 hover:border-indigo-500/50 text-indigo-400 hover:text-indigo-300 text-[11px] font-semibold flex items-center gap-1 transition-all"
                  >
                    <Play className="w-3 h-3 fill-indigo-400" />
                    <span>Live Interactive Demo</span>
                  </button>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-indigo-300/80 mt-1 font-medium">
                    {project.subtitle}
                  </p>
                </div>

                {/* Bullet Highlights */}
                <ul className="space-y-2 text-xs text-slate-300">
                  {project.description.map((desc, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2 leading-relaxed">
                      <CheckCircle className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Footer: Tech Stack + Actions */}
              <div className="p-6 pt-0 space-y-4">
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800/80 text-[10px] font-mono font-medium text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-2 pt-2">
                  <button
                    onClick={() => setActiveDemoProject(project)}
                    className="flex-1 py-2.5 rounded-xl bg-indigo-600/20 border border-indigo-500/30 hover:bg-indigo-600 hover:text-white text-indigo-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Test Demo</span>
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Project Demo Modal */}
      {activeDemoProject && (
        <div className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-4xl rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto space-y-6 relative animate-in zoom-in-95 duration-200">
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                  Interactive Live Simulator
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {activeDemoProject.title}
                </h3>
              </div>

              <button
                onClick={() => setActiveDemoProject(null)}
                className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Embedded Live Interactive Component */}
            {activeDemoProject.demoType === 'sales-ml' && <SalesMlDemo />}
            {activeDemoProject.demoType === 'social' && <SociopediaDemo />}
            {activeDemoProject.demoType === 'face-rec' && <FaceRecDemo />}

            {/* Features List */}
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800/80 space-y-3">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Core Architectural Features
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {activeDemoProject.keyFeatures.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-end gap-3 pt-2 border-t border-slate-800">
              <button
                onClick={() => setActiveDemoProject(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700 transition-colors"
              >
                Close Simulator
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
