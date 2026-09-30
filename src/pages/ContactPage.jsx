import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
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
  MessageSquare
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [copiedEmail, setCopiedEmail] = useState(false);

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
      const response = await fetch(PERSONAL_INFO.formspreeEndpoint, {
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
      console.error('Submission error:', err);
      setStatus('error');
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header Box */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#180d15] border border-[#3a1f30]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1e1019] border border-[#5c3050] text-xs font-semibold text-[#d8b4fe] mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Contact & Resume</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#ede4d8] tracking-tight">
            Get in Touch
          </h1>
          <p className="mt-2 text-sm sm:text-base text-[#a89889] max-w-2xl leading-relaxed">
            I am always open to discussing new software development opportunities, AI engineering roles, 
            internships, or technical projects. Drop a message below or contact me directly.
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Formspree Contact Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-xl bg-[#180d15] border border-[#3a1f30]">
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="w-5 h-5 text-[#9b6b8a]" />
              <h2 className="text-xl font-bold text-[#ede4d8]">
                Send a Message
              </h2>
            </div>

            {status === 'success' ? (
              <div className="p-6 rounded-lg bg-[#231520] border border-[#3a1f30] text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#331b2a] text-[#ede4d8] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6 text-[#9b6b8a]" />
                </div>
                <h3 className="text-lg font-bold text-[#ede4d8]">Message Sent Successfully!</h3>
                <p className="text-sm text-[#a89889] max-w-md mx-auto">
                  Thank you for reaching out. Your message has been delivered to my inbox. I will reply to you as soon as possible.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 px-4 py-2 rounded-lg text-xs font-semibold text-[#140a12] bg-[#c49b7c] hover:bg-[#b8896b] border border-[#c49b7c] cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {status === 'error' && (
                  <div className="p-3.5 rounded-lg bg-[#331b2a] border border-rose-600/50 flex items-start gap-2.5 text-xs text-rose-200">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-400" />
                    <span>
                      Unable to send message through the form at this moment. Please email me directly at{' '}
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="underline font-semibold text-[#ede4d8]">
                        {PERSONAL_INFO.email}
                      </a>.
                    </span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#a89889] mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 rounded-lg bg-[#231520] border border-[#3a1f30] text-[#ede4d8] placeholder:text-[#7a6e63] text-sm focus:outline-none focus:border-[#c49b7c] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#a89889] mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-2.5 rounded-lg bg-[#231520] border border-[#3a1f30] text-[#ede4d8] placeholder:text-[#7a6e63] text-sm focus:outline-none focus:border-[#c49b7c] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#a89889] mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#231520] border border-[#3a1f30] text-[#ede4d8] placeholder:text-[#7a6e63] text-sm focus:outline-none focus:border-[#c49b7c] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#a89889] mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Sourabh, I wanted to reach out regarding..."
                    className="w-full px-4 py-2.5 rounded-lg bg-[#231520] border border-[#3a1f30] text-[#ede4d8] placeholder:text-[#7a6e63] text-sm focus:outline-none focus:border-[#c49b7c] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-[#140a12] bg-[#c49b7c] hover:bg-[#b8896b] border border-[#c49b7c] disabled:opacity-50 transition-colors cursor-pointer"
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

          {/* Right Column: Resume Download Box + Direct Contact (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* DIRECT RESUME DOWNLOAD BOX */}
            <div className="p-6 sm:p-7 rounded-xl bg-[#180d15] border border-[#3f177a] space-y-4">
              <div className="flex items-center gap-2">
                <FileDown className="w-5 h-5 text-[#9b6b8a]" />
                <h3 className="text-lg font-bold text-[#ede4d8]">
                  Resume Download
                </h3>
              </div>

              <p className="text-sm text-[#a89889] leading-relaxed">
                Download my up-to-date resume covering my education at KIIT, internships at SAIL and CCL, 
                and verified machine learning credentials.
              </p>

              <div className="p-3 rounded-lg bg-[#231520] border border-[#3a1f30] text-xs font-mono text-[#a89889]">
                📄 Sourabh_Kumar_Resume.pdf (163 KB)
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                <a
                  href={PERSONAL_INFO.resumePdf}
                  download="Sourabh_Kumar_Resume.pdf"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-[#140a12] bg-[#c49b7c] hover:bg-[#b8896b] border border-[#c49b7c] transition-colors"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download PDF</span>
                </a>

                <a
                  href={PERSONAL_INFO.resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-[#ede4d8] bg-[#261620] hover:bg-[#331b2a] border border-[#3a1f30] transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View in Tab</span>
                </a>
              </div>
            </div>

            {/* DIRECT CONTACT INFO BOX */}
            <div className="p-6 rounded-xl bg-[#180d15] border border-[#3a1f30] space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#a89889]">
                Direct Contact Information
              </h3>

              {/* Email */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-[#231520] border border-[#3a1f30]">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-3 text-xs sm:text-sm text-[#d1c8bb] hover:text-[#ede4d8] transition-colors truncate"
                >
                  <Mail className="w-4 h-4 text-[#9b6b8a] shrink-0" />
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                </a>
                <button
                  onClick={copyEmail}
                  className="p-1.5 rounded text-[#a89889] hover:text-[#ede4d8] hover:bg-[#331b2a] transition-colors cursor-pointer shrink-0"
                  aria-label="Copy email"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center p-3 rounded-lg bg-[#231520] border border-[#3a1f30]">
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-center gap-3 text-xs sm:text-sm text-[#d1c8bb] hover:text-[#ede4d8] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#9b6b8a] shrink-0" />
                  <span>{PERSONAL_INFO.phone}</span>
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3 rounded-lg bg-[#231520] border border-[#3a1f30] text-xs sm:text-sm text-[#d1c8bb]">
                <MapPin className="w-4 h-4 text-[#9b6b8a] shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>

              {/* Social Links */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-lg bg-[#261620] hover:bg-[#331b2a] border border-[#3a1f30] text-xs font-semibold text-[#ede4d8] transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-lg bg-[#261620] hover:bg-[#331b2a] border border-[#3a1f30] text-xs font-semibold text-[#ede4d8] transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
