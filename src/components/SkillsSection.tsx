import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import {
  Code,
  Cpu,
  Database,
  Layers,
  Search,
  Sparkles,
  Terminal,
  Wrench,
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('ALL');

  const tags = [
    { key: 'ALL', label: 'All Stack' },
    { key: 'backend', label: 'Backend' },
    { key: 'cloud', label: 'Cloud & DevOps' },
    { key: 'database', label: 'Databases' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'language', label: 'Languages' },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Engineering Skills & Toolchain
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Proficiency across modern server-side runtimes, relational & document databases, cloud DevOps infrastructure, and software engineering principles.
          </p>
        </div>

        {/* Search & Tag Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills (e.g. Node.js, AWS, Redis)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          {/* Tag Filter Chips */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {tags.map((t) => (
              <button
                key={t.key}
                onClick={() => setSelectedTag(t.key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedTag === t.key
                    ? 'bg-indigo-600 text-white font-semibold'
                    : 'bg-slate-950 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((cat, cIdx) => {
            const filteredItems = cat.items.filter((item) => {
              const matchesSearch = item.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
              const matchesTag =
                selectedTag === 'ALL' || item.tag === selectedTag;
              return matchesSearch && matchesTag;
            });

            if (filteredItems.length === 0) return null;

            return (
              <div
                key={cIdx}
                className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 space-y-6 shadow-xl relative overflow-hidden"
              >
                <div>
                  <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {filteredItems.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-semibold text-slate-200">
                          {skill.name}
                        </span>
                        <span className="text-slate-400 font-mono text-[11px]">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800/80 p-[1px]">
                        <div
                          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
