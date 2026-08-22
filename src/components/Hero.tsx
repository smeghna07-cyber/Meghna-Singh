import React from 'react';
import { Mail, BookOpen, MapPin, Award, Stethoscope, ChevronDown, CheckCircle2, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

// Authentic faculty portrait
import facultyPortrait from '../assets/images/profile.jpg';

export const Hero: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      const offsetPosition = contactSection.getBoundingClientRect().top + window.pageYOffset - 76;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      const offsetPosition = aboutSection.getBoundingClientRect().top + window.pageYOffset - 76;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden hero-gradient text-white border-b border-slate-800"
    >
      {/* Subtle academic grid pattern overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none academic-subtle-pattern" />

      {/* Decorative ambient radial glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Academic Profile & Title */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Institution / Role Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-900/60 border border-blue-400/30 text-blue-200 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>JECRC University • Department of Physiotherapy</span>
            </div>

            {/* Main Name */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
                {personalInfo.name}
              </h1>
              <p className="text-lg sm:text-xl text-blue-100/90 font-medium">
                {personalInfo.title}
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-300 pt-1">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-blue-300" />
                  <span>{personalInfo.location}</span>
                </span>
                <span className="hidden sm:inline text-slate-500">•</span>
                <span className="inline-flex items-center gap-1.5">
                  <Stethoscope className="w-4 h-4 text-blue-300" />
                  <span>Neuro-Physiotherapy Specialist</span>
                </span>
              </div>
            </div>

            {/* Tagline */}
            <blockquote className="border-l-4 border-blue-400 pl-4 py-1 text-base sm:text-lg text-slate-200 font-serif italic max-w-2xl mx-auto lg:mx-0">
              “{personalInfo.tagline}”
            </blockquote>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-left">
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-700/60">
                <div className="text-xs text-blue-200 font-medium">Specialization</div>
                <div className="text-sm font-semibold text-white mt-0.5">MPT (Neurology)</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-700/60">
                <div className="text-xs text-blue-200 font-medium">Experience</div>
                <div className="text-sm font-semibold text-white mt-0.5">3+ Years Practice</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-700/60 col-span-2 sm:col-span-1">
                <div className="text-xs text-blue-200 font-medium">Academic Role</div>
                <div className="text-sm font-semibold text-white mt-0.5">DCoE Coordinator</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
              <a
                id="hero-cta-contact-btn"
                href="#contact"
                onClick={scrollToContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Dr. Singh</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              <a
                id="hero-cta-publications-btn"
                href="#publications"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-lg transition-all"
              >
                <BookOpen className="w-4 h-4 text-blue-300" />
                <span>View Publications & Research</span>
              </a>
            </div>
          </div>

          {/* Right Column: Professional Faculty Headshot Frame */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group">
              {/* Outer decorative ring */}
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-600 opacity-60 blur-sm group-hover:opacity-90 transition duration-500" />
              
              {/* Card Container */}
              <div className="relative bg-slate-900 rounded-2xl p-2.5 shadow-2xl border border-slate-700/80 max-w-sm sm:max-w-md">
                <div className="relative overflow-hidden rounded-xl bg-slate-800 aspect-[4/5] w-64 sm:w-72 md:w-80">
                  <img
                    id="faculty-hero-portrait-img"
                    src={facultyPortrait}
                    alt="Dr. Meghna Singh - Assistant Professor of Physiotherapy"
                    className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  {/* Badge on photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 bg-slate-900/90 backdrop-blur-md rounded-lg border border-slate-700/80 text-left">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <div>
                        <div className="text-xs font-semibold text-white">Award-Winning Physio</div>
                        <div className="text-[11px] text-slate-300">FEMCON-4 & Relife Ortho Physiocon</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Micro info footer inside portrait card */}
                <div className="mt-2.5 px-2 py-1.5 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Verified Faculty Profile
                  </span>
                  <span className="text-blue-300 font-mono text-[11px]">JECRC Faculty Ref</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Down arrow anchor */}
      <div className="relative max-w-7xl mx-auto px-4 mt-8 flex justify-center">
        <a
          href="#about"
          onClick={scrollToAbout}
          className="inline-flex items-center gap-1 text-xs text-blue-200/80 hover:text-white transition-colors"
          aria-label="Scroll to about section"
        >
          <span>Explore Academic Profile</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
