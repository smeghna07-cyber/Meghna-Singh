import React from 'react';
import { User, BookOpen, HeartPulse, GraduationCap, Sparkles, Building, Award, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Biography & Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            About Dr. Meghna Singh
          </h2>
          <div className="w-16 h-1 bg-blue-700 rounded-full mt-3 mb-4" />
          <p className="text-base text-slate-600">
            Neuro-Physiotherapist, Academic Scholar, and Assistant Professor at JECRC University, Jaipur.
          </p>
        </div>

        {/* Grid layout for Main Bio and Core Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Prose (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-6 sm:p-8 shadow-xs space-y-4">
              <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
                {personalInfo.aboutParagraph}
              </p>

              <div className="border-t border-slate-200/80 pt-4 space-y-3">
                <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">
                  Academic & Clinical Ethos
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-700 mt-0.5 flex-shrink-0" />
                    <span>Evidence-grounded neurological protocols</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-700 mt-0.5 flex-shrink-0" />
                    <span>Integrated psychosomatic assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-700 mt-0.5 flex-shrink-0" />
                    <span>Holistic, patient-centered rehabilitation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-700 mt-0.5 flex-shrink-0" />
                    <span>Outcome-driven pedagogy & mentorship</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-lg bg-blue-900 text-white shadow-xs">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-blue-200">3+</div>
                <div className="text-xs text-blue-100 mt-1 font-medium">Years Experience</div>
              </div>
              <div className="p-4 rounded-lg bg-slate-900 text-white shadow-xs">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-300">5+</div>
                <div className="text-xs text-slate-300 mt-1 font-medium">Published Papers</div>
              </div>
              <div className="p-4 rounded-lg bg-slate-900 text-white shadow-xs">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-emerald-300">3+</div>
                <div className="text-xs text-slate-300 mt-1 font-medium">Prestigious Awards</div>
              </div>
              <div className="p-4 rounded-lg bg-blue-800 text-white shadow-xs">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-blue-100">5+</div>
                <div className="text-xs text-blue-100 mt-1 font-medium">FDP Certifications</div>
              </div>
            </div>
          </div>

          {/* Core Foundations & Academic Pillars (Right 5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-serif font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-700" />
              <span>Core Foundational Pillars</span>
            </h3>

            <div className="space-y-3.5">
              {personalInfo.academicPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-50 border border-slate-200/90 academic-card hover:border-blue-300 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-sm">
                      0{idx + 1}
                    </div>
                    <h4 className="text-base font-serif font-bold text-slate-900">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* University Affiliation Card */}
            <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-blue-900 to-indigo-950 text-white border border-blue-800 flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded-lg text-blue-200">
                <Building className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-blue-300 font-semibold">Institutional Appointment</div>
                <div className="text-sm font-semibold text-white">JECRC University, Jaipur</div>
                <div className="text-xs text-slate-300">Department of Physiotherapy</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
