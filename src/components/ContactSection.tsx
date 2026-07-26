import React, { useState } from 'react';
import { CONTACT_INFO } from '../data/portfolioData';
import {
  Check,
  Code2,
  Copy,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Sparkles,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [template, setTemplate] = useState('Schedule Interview');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const applyTemplate = (tName: string) => {
    setTemplate(tName);
    if (tName === 'Schedule Interview') {
      setFormData((prev) => ({
        ...prev,
        message: `Hi Radha, I reviewed your profile and experience at TATA AIG. We would love to discuss a Software Engineer opportunity with you.`,
      }));
    } else if (tName === 'Collaborate on AI/Cloud') {
      setFormData((prev) => ({
        ...prev,
        message: `Hi Radha, I saw your Google Cloud Agentic AI lab certification and AWS RDS passwordless work. I'd love to connect on a project!`,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        message: `Hi Radha, reaching out regarding your portfolio!`,
      }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let's Build & Collaborate
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Open to software engineering roles, cloud backend architecture discussions, and innovative AI collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-xl">
              <h3 className="text-xl font-bold text-white">Contact Information</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Feel free to reach out directly via email or phone, or connect on professional platforms.
              </p>

              <div className="space-y-3 pt-2">
                {/* Email Item */}
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        Direct Email
                      </p>
                      <a
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="text-xs font-bold text-white hover:text-indigo-400 transition-colors"
                      >
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(CONTACT_INFO.email, 'Email')}
                    className="p-2 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 text-xs flex items-center gap-1 transition-colors"
                  >
                    {copiedField === 'Email' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        Phone Number
                      </p>
                      <a
                        href={`tel:${CONTACT_INFO.phone}`}
                        className="text-xs font-bold text-white hover:text-emerald-400 transition-colors"
                      >
                        {CONTACT_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(CONTACT_INFO.phone, 'Phone')}
                    className="p-2 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 text-xs flex items-center gap-1 transition-colors"
                  >
                    {copiedField === 'Phone' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location */}
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Current Location
                    </p>
                    <p className="text-xs font-bold text-white">{CONTACT_INFO.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Profiles Grid */}
              <div className="pt-4 border-t border-slate-800 space-y-2">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Professional Profiles:
                </p>
                <div className="grid grid-cols-3 gap-2">
                  <a
                    href={CONTACT_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 text-slate-300 hover:text-indigo-400 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-indigo-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={CONTACT_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 text-slate-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Github className="w-4 h-4 text-slate-200" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={CONTACT_INFO.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 text-slate-300 hover:text-amber-400 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Code2 className="w-4 h-4 text-amber-400" />
                    <span>LeetCode</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Message Form */}
          <div className="lg:col-span-7 bg-slate-950 p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white">Send a Direct Message</h3>
              <p className="text-xs text-slate-400 mt-1">
                Select a template or compose a custom message.
              </p>
            </div>

            {/* Template Selector */}
            <div className="flex flex-wrap gap-2 text-xs">
              {['Schedule Interview', 'Collaborate on AI/Cloud', 'General Inquiry'].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => applyTemplate(t)}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                    template === t
                      ? 'bg-indigo-600 text-white font-semibold'
                      : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Message Delivered!</h4>
                <p className="text-xs text-slate-300">
                  Thank you for reaching out, {formData.name}! Radha will get back to you promptly at {formData.email}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-xl bg-slate-900 text-slate-200 text-xs font-semibold hover:bg-slate-800 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Radha</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
