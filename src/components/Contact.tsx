import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Building,
  Send,
  Copy,
  Check,
  MessageSquare,
  Sparkles,
  GraduationCap,
  Clock,
  ExternalLink,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Academic Collaboration',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Pre-populate email client with mailto
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      `[${formData.subject}] Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nInquiry Type: ${formData.subject}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect & Academic Engagement</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Contact & Academic Inquiries
          </h2>
          <div className="w-16 h-1 bg-blue-700 rounded-full mt-3 mb-4" />
          <p className="text-base text-slate-600">
            Open for scholarly collaborations, joint neurological research, academic lectures, guest speaker invitations, and student clinical mentorship.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Faculty Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Contact Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-lg border border-slate-800">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-blue-300">
                  Direct Inquiries
                </span>
                <h3 className="text-2xl font-serif font-bold text-white mt-1">
                  Dr. Meghna Singh
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                  Assistant Professor, Physiotherapy
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* Email Item */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-blue-800/80 text-blue-200 flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium text-slate-400">Official Faculty Email</div>
                    <div className="text-sm font-semibold text-white truncate">
                      {personalInfo.email}
                    </div>
                    <div className="mt-1 flex items-center gap-2">
                      <button
                        id="contact-copy-email-btn"
                        onClick={handleCopyEmail}
                        className="inline-flex items-center gap-1 text-xs text-blue-300 hover:text-blue-100 font-medium transition-colors"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400 font-semibold">Copied to Clipboard!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Email Address</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-blue-800/80 text-blue-200 flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-400">Location</div>
                    <div className="text-sm font-semibold text-white">
                      {personalInfo.location}
                    </div>
                    <div className="text-xs text-slate-300 mt-0.5">
                      JECRC University Campus, Ramchandrapura, Jaipur
                    </div>
                  </div>
                </div>

                {/* Institution Item */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-blue-800/80 text-blue-200 flex-shrink-0 mt-0.5">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-400">Institution & Department</div>
                    <div className="text-sm font-semibold text-white">
                      JECRC University, Jaipur
                    </div>
                    <div className="text-xs text-slate-300 mt-0.5">
                      Faculty of Allied Health Sciences & Physiotherapy
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Note */}
              <div className="pt-4 border-t border-slate-800 text-xs text-slate-300 leading-relaxed">
                <div className="flex items-center gap-1.5 text-blue-300 font-semibold mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Academic Consultation Hours</span>
                </div>
                Office hours for university students, thesis advisees, and research scholars are scheduled during regular academic session hours.
              </div>
            </div>

            {/* Professional Closing Note Callout */}
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-slate-700 text-xs sm:text-sm leading-relaxed">
              <span className="font-semibold text-blue-900 block mb-1">
                Collaborative Spirit
              </span>
              "I welcome inquiries from medical researchers, clinical practitioners, multidisciplinary rehabilitation teams, and aspiring students passionate about neurological health."
            </div>

          </div>

          {/* Right Column: Interactive Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-blue-700" />
                <h3 className="text-xl font-serif font-bold text-slate-900">
                  Send a Direct Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Prof. / Dr. / Mr. / Ms. Name"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@institution.edu"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Inquiry Type */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Subject / Purpose of Inquiry
                  </label>
                  <select
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  >
                    <option value="Academic Research Collaboration">Academic Research Collaboration</option>
                    <option value="Guest Lecture & Conference Speaker">Guest Lecture & Conference Speaker Invitation</option>
                    <option value="Student Mentorship & Guidance">Student Mentorship & Guidance</option>
                    <option value="Clinical Case Discussion & Referral">Clinical Case Discussion & Referral</option>
                    <option value="General Academic Inquiry">General Academic Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Message / Proposal <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please describe your collaboration proposal, research inquiry, or event details..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-900 hover:bg-blue-800 active:bg-blue-950 text-white rounded-lg font-semibold text-sm shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Dr. Meghna Singh</span>
                  </button>
                </div>

                {formSubmitted && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-800 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Opening your default email client with your message pre-formatted.</span>
                  </div>
                )}

                <p className="text-[11px] text-slate-600 text-center pt-1">
                  Transmitted directly to <span className="font-mono text-slate-700">{personalInfo.email}</span>. No third-party spam.
                </p>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
