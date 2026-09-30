import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { 
  Mail, 
  Phone, 
  MapPin, 
  FileDown, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  ExternalLink,
  MessageSquare,
  Sparkles
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formspreeEndpoint, setFormspreeEndpoint] = useState(PERSONAL_INFO.formspreeEndpoint);
  const [showEndpointEdit, setShowEndpointEdit] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setStatus('error');
    }
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 relative border-t border-slate-800/80 bg-slate-950/70">
      
      {/* Background glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-600/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Connect & Collaborate
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed">
            Whether you have an upcoming AI Engineering role, an intriguing project idea, 
            or want to discuss retrieval architectures—feel free to drop a message or reach out directly.
          </p>
        </div>

        {/* 2-Column Grid: Form & Direct Contact + Resume */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Formspree Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#0d1424] border border-slate-800 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Send a Direct Message
                </h3>
              </div>

              {/* Endpoint Config Toggle */}
              <button
                onClick={() => setShowEndpointEdit(!showEndpointEdit)}
                className="text-[11px] text-slate-500 hover:text-cyan-400 transition-colors cursor-pointer"
                title="Configure Formspree Endpoint"
              >
                {showEndpointEdit ? 'Hide config' : 'Formspree Endpoint'}
              </button>
            </div>

            {/* Optional Formspree Endpoint Input for Easy Customization */}
            {showEndpointEdit && (
              <div className="mb-6 p-3 rounded-xl bg-slate-900/90 border border-cyan-500/30 text-xs">
                <label className="block text-slate-300 font-medium mb-1">
                  Active Formspree Endpoint:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={formspreeEndpoint}
                    onChange={(e) => setFormspreeEndpoint(e.target.value)}
                    placeholder="https://formspree.io/f/your_form_id"
                    className="flex-1 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-slate-200 text-xs focus:outline-none focus:border-cyan-400 font-mono"
                  />
                  <button
                    onClick={() => setShowEndpointEdit(false)}
                    className="px-3 py-1.5 rounded-lg bg-cyan-600 text-white font-medium text-xs hover:bg-cyan-500 cursor-pointer"
                  >
                    Save
                  </button>
                </div>
                <p className="text-[10px] text-slate-500 mt-1">
                  Endpoint submissions are directed here via Formspree API.
                </p>
              </div>
            )}

            {/* Form State Banners */}
            {status === 'success' ? (
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Message Delivered!</h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you for reaching out. Your message has been sent to Sourabh via Formspree. I will get back to you shortly!
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold text-emerald-300 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {status === 'error' && (
                  <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-start gap-2.5 text-xs text-rose-300">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>
                      Unable to send message via the form right now. You can email me directly at{' '}
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="underline font-semibold text-white">
                        {PERSONAL_INFO.email}
                      </a>.
                    </span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-200 placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-500/80 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-200 placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-500/80 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="AI Engineering Opportunity / Project Discussion"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-200 placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-500/80 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Sourabh, I came across your portfolio and would love to connect regarding..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-200 placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-500/80 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 shadow-lg shadow-cyan-600/25 disabled:opacity-60 transition-all cursor-pointer"
                >
                  {status === 'submitting' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Resume Download + Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* DIRECT RESUME DOWNLOAD CARD */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-900 via-[#10192e] to-[#0c1424] border border-cyan-500/40 shadow-xl shadow-cyan-950/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <FileDown className="w-24 h-24 text-cyan-400" />
              </div>

              <div className="relative">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-semibold mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Curriculum Vitae</span>
                </div>

                <h3 className="text-xl font-bold text-white">
                  Download My Resume
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-300">
                  Comprehensive summary of my projects, SAIL & CCL experience, education at KIIT, and verified AI certifications.
                </p>

                <div className="mt-3 text-xs font-mono text-cyan-400 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
                  📄 Sourabh_Kumar_Resume.pdf (163 KB)
                </div>

                {/* Direct Action Buttons */}
                <div className="mt-5 flex flex-col sm:flex-row gap-2.5">
                  <a
                    href={PERSONAL_INFO.resumePdf}
                    download="Sourabh_Kumar_Resume.pdf"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 shadow-md shadow-cyan-600/30 transition-all cursor-pointer"
                  >
                    <FileDown className="w-4 h-4" />
                    <span>Download PDF</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.resumePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View in Tab</span>
                  </a>
                </div>
              </div>
            </div>

            {/* DIRECT CONTACT INFO CARDS */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Direct Contact Channels
              </h4>

              {/* Email */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-3 text-xs sm:text-sm text-slate-300 hover:text-cyan-400 transition-colors truncate"
                >
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                </a>
                <button
                  onClick={copyEmailToClipboard}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
                  aria-label="Copy email address"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-center gap-3 text-xs sm:text-sm text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{PERSONAL_INFO.phone}</span>
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs sm:text-sm text-slate-300">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>

              {/* Social Profiles */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-xs font-semibold text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-xs font-semibold text-white transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
