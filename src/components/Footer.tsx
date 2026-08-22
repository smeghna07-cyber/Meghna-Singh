import React from 'react';
import { ArrowUp, Mail, GraduationCap, MapPin, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import profileAvatar from '../assets/images/profile.jpg';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Col (6 cols) */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-400/60 flex-shrink-0 bg-blue-900">
                <img
                  src={profileAvatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h4 className="text-base font-serif font-bold text-white tracking-tight">
                  {personalInfo.name}
                </h4>
                <p className="text-xs text-blue-200 font-medium">
                  {personalInfo.title} • {personalInfo.institution}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Faculty member specializing in neurological physical therapy, psychosomatic rehabilitation, and clinical research education.
            </p>

            <div className="flex items-center gap-4 text-xs text-slate-300 pt-1">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>{personalInfo.email}</span>
              </a>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>Jaipur, India</span>
              </span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Quick Navigation
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home & Overview
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About & Background
                </a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-white transition-colors">
                  Areas of Expertise
                </a>
              </li>
              <li>
                <a href="#publications" className="hover:text-white transition-colors">
                  Publications & Research
                </a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-white transition-colors">
                  Awards & FDP Certifications
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Professional Experience
                </a>
              </li>
            </ul>
          </div>

          {/* Institutional Note & Back to Top (3 cols) */}
          <div className="md:col-span-3 space-y-4 md:text-right">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              University Affiliation
            </div>
            <div className="text-xs text-slate-400 space-y-0.5">
              <div className="text-slate-200 font-medium">JECRC University</div>
              <div>Faculty of Allied Health Sciences</div>
              <div>Department of Physiotherapy</div>
              <div>Jaipur, Rajasthan, India</div>
            </div>

            <div className="pt-2 flex md:justify-end">
              <button
                id="footer-back-to-top-btn"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors text-xs"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            © {currentYear} Dr. Meghna Singh. All rights reserved. Official Academic & Clinical Profile.
          </div>
          <div className="text-[11px] text-slate-400">
            JECRC University • Physiotherapy Faculty Portfolio
          </div>
        </div>
      </div>
    </footer>
  );
};
