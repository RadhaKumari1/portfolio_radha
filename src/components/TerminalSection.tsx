import React, { useState, useRef, useEffect } from 'react';
import { CONTACT_INFO, EDUCATION, EXPERIENCES, PROJECTS } from '../data/portfolioData';
import { Terminal, Send, Play, CornerDownLeft, Sparkles, X } from 'lucide-react';

interface TerminalSectionProps {
  onClose?: () => void;
}

export const TerminalSection: React.FC<TerminalSectionProps> = ({ onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<
    { command: string; output: React.ReactNode }[]
  >([
    {
      command: 'welcome',
      output: (
        <div className="space-y-2 text-slate-300">
          <p className="text-indigo-400 font-bold">
            Radha Kumari CLI Interactive Shell v2.4.0 (x86_64-linux-gnu)
          </p>
          <p>
            Type <span className="text-emerald-400 font-bold">help</span> to list all available commands or click a quick command below.
          </p>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleRunCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    let responseNode: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        responseNode = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <p className="text-amber-400 font-bold">Available Commands:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 font-mono">
              <div><span className="text-emerald-400">bio</span> - Overview</div>
              <div><span className="text-emerald-400 font-bold">experience</span> - Roles</div>
              <div><span className="text-emerald-400">projects</span> - Work</div>
              <div><span className="text-emerald-400">skills</span> - Stack</div>
              <div><span className="text-emerald-400">education</span> - Degree</div>
              <div><span className="text-emerald-400">certs</span> - Credentials</div>
              <div><span className="text-emerald-400">contact</span> - Links</div>
              <div><span className="text-emerald-400">clear</span> - Clear CLI</div>
            </div>
          </div>
        );
        break;

      case 'bio':
        responseNode = (
          <div className="space-y-1 text-xs text-slate-200">
            <p className="font-bold text-indigo-400">Radha Kumari - Software Engineer</p>
            <p>Company: TATA AIG General Insurance Company</p>
            <p>Education: B.Tech CSE @ NIT Jamshedpur (CGPA 8.58)</p>
            <p>Location: Gurgaon, Haryana, India</p>
            <p>Email: radhakumari162002@gmail.com | Phone: 9835486178</p>
          </div>
        );
        break;

      case 'experience':
        responseNode = (
          <div className="space-y-3 text-xs text-slate-300 font-mono">
            {EXPERIENCES.map((e) => (
              <div key={e.id} className="p-2 rounded bg-slate-900 border border-slate-800">
                <p className="text-emerald-400 font-bold">{e.role} @ {e.company}</p>
                <p className="text-slate-400">{e.period} | {e.location}</p>
                <p className="text-slate-200 mt-1">{e.highlights[0]}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        responseNode = (
          <div className="space-y-2 text-xs text-slate-300 font-mono">
            {PROJECTS.map((p) => (
              <div key={p.id} className="p-2 rounded bg-slate-900 border border-slate-800">
                <p className="text-purple-400 font-bold">{p.title} ({p.category})</p>
                <p className="text-slate-400">{p.techStack.join(', ')}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        responseNode = (
          <div className="text-xs text-slate-300 font-mono space-y-1">
            <p><span className="text-indigo-400 font-bold">Languages & Frameworks:</span> Node.js, React.js, Express.js, Vue.js, Python, C++, C, Git, Bootstrap</p>
            <p><span className="text-purple-400 font-bold">Cloud & DevOps:</span> AWS (SQS, CloudWatch, S3), Kubernetes, Docker, Microservices</p>
            <p><span className="text-emerald-400 font-bold">Databases:</span> MongoDB, PostgreSQL, MySQL, Redis, AWS RDS</p>
          </div>
        );
        break;

      case 'education':
        responseNode = (
          <div className="text-xs text-slate-300 font-mono">
            <p className="text-indigo-400 font-bold">{EDUCATION.institution}</p>
            <p>{EDUCATION.degree} in {EDUCATION.field}</p>
            <p className="text-emerald-400">CGPA: {EDUCATION.cgpa} ({EDUCATION.period})</p>
          </div>
        );
        break;

      case 'certs':
        responseNode = (
          <div className="text-xs text-slate-300 font-mono space-y-1">
            <p>1. Google Cloud - Antigravity Agentic AI Hands-on Lab</p>
            <p>2. AWS Cloud Services Certification (Tata Program)</p>
            <p>3. Advanced MongoDB Certification (University)</p>
          </div>
        );
        break;

      case 'contact':
        responseNode = (
          <div className="text-xs text-slate-300 font-mono space-y-1">
            <p>Email: <a href={`mailto:${CONTACT_INFO.email}`} className="text-indigo-400 underline">{CONTACT_INFO.email}</a></p>
            <p>Phone: <span className="text-emerald-400">{CONTACT_INFO.phone}</span></p>
            <p>GitHub: <a href={CONTACT_INFO.github} target="_blank" rel="noreferrer" className="text-purple-400 underline">{CONTACT_INFO.github}</a></p>
            <p>LinkedIn: <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className="text-indigo-400 underline">{CONTACT_INFO.linkedin}</a></p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        responseNode = (
          <div className="text-xs text-rose-400 font-mono">
            Command not recognized: '{trimmed}'. Type <span className="text-emerald-400 underline cursor-pointer" onClick={() => handleRunCommand('help')}>help</span> for list of commands.
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: cmdStr, output: responseNode }]);
    setInputVal('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleRunCommand(inputVal);
  };

  const quickBtns = ['bio', 'experience', 'projects', 'skills', 'certs', 'contact', 'clear'];

  return (
    <section id="terminal" className="py-20 bg-slate-950 text-slate-100 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
          {/* Header Bar */}
          <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="ml-2 font-mono text-xs text-slate-400 font-semibold flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                radha@tata-aig-workstation:~
              </span>
            </div>

            {onClose && (
              <button onClick={onClose} className="text-slate-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Buttons */}
          <div className="px-4 py-2 bg-slate-950/60 border-b border-slate-800/80 flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="text-slate-500 font-semibold text-[10px] uppercase">Quick CLI Commands:</span>
            {quickBtns.map((btn) => (
              <button
                key={btn}
                onClick={() => handleRunCommand(btn)}
                className="px-2.5 py-0.5 rounded bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white transition-colors"
              >
                {btn}
              </button>
            ))}
          </div>

          {/* Terminal Console Output */}
          <div className="p-6 font-mono text-xs space-y-4 max-h-[380px] overflow-y-auto bg-slate-950/90">
            {history.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-emerald-400 font-bold">radha@portfolio:~$</span>
                  <span className="text-slate-100 font-semibold">{item.command}</span>
                </div>
                <div className="pl-4">{item.output}</div>
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Command Input Form */}
          <form onSubmit={handleFormSubmit} className="bg-slate-950 px-4 py-3 border-t border-slate-800 flex items-center gap-2">
            <span className="text-emerald-400 font-mono font-bold text-xs">radha@portfolio:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type 'help', 'experience', 'skills', or 'projects'..."
              className="flex-1 bg-transparent text-slate-100 font-mono text-xs focus:outline-none placeholder:text-slate-600"
            />
            <button
              type="submit"
              className="p-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
