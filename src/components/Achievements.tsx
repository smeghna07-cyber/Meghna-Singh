import React from 'react';
import { Award, Trophy, BookmarkCheck, Sparkles, CheckCircle, Calendar, Shield, ExternalLink } from 'lucide-react';
import { awardsList, fdpCertifications } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5 text-amber-600" />
            <span>Honors & Professional Development</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Achievements, Awards & Certifications
          </h2>
          <div className="w-16 h-1 bg-blue-700 rounded-full mt-3 mb-4" />
          <p className="text-base text-slate-600">
            Formal recognitions for clinical distinction, academic leadership, and national UGC Faculty Development Programmes (FDP).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Awards & Honors Timeline (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-serif font-bold text-slate-900 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-500" />
                <span>Awards & Honors Recognition</span>
              </h3>
              <span className="text-xs font-semibold text-slate-600">
                Timeline 2024 – 2025
              </span>
            </div>

            {/* Timeline Cards */}
            <div className="relative border-l-2 border-blue-200 ml-4 pl-6 space-y-8">
              {awardsList.map((award, index) => (
                <div
                  key={award.id}
                  id={`award-timeline-${award.id}`}
                  className="relative group"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[33px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-blue-800 group-hover:scale-125 transition-transform" />

                  {/* Card Container */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 academic-card hover:border-amber-300 hover:bg-amber-50/20 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {award.year}
                      </span>
                      <span className="text-xs font-semibold text-blue-800">
                        {award.category}
                      </span>
                    </div>

                    <h4 className="text-lg font-serif font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                      {award.title}
                    </h4>

                    <div className="text-xs sm:text-sm font-medium text-slate-700 mt-1 mb-2">
                      {award.organization}
                    </div>

                    {award.description && (
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                        {award.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Faculty Development Program (FDP) Certifications (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-serif font-bold text-slate-900 flex items-center gap-2">
                <BookmarkCheck className="w-5 h-5 text-blue-700" />
                <span>Faculty Development Programs</span>
              </h3>
              <span className="text-xs text-slate-600 font-medium">5 Key FDPs</span>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 sm:p-6 space-y-3.5">
              <p className="text-xs text-slate-600 leading-relaxed mb-2">
                Completed certified capacity-building programmes focusing on National Education Policy (NEP-2020), AI pedagogical tools, and health bioethics:
              </p>

              {fdpCertifications.map((fdp, idx) => (
                <div
                  key={fdp.id}
                  id={`fdp-cert-${fdp.id}`}
                  className="bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200 hover:border-blue-300 transition-all flex items-start gap-3 shadow-2xs"
                >
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-800 border border-blue-100 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-xs sm:text-sm font-serif font-bold text-slate-900 leading-snug">
                      {fdp.title}
                    </h5>
                    {fdp.issuer && (
                      <div className="text-[11px] text-blue-800 font-medium">
                        {fdp.issuer}
                      </div>
                    )}
                    <span className="inline-block text-[10px] px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
                      {fdp.category}
                    </span>
                  </div>
                </div>
              ))}

              {/* UGC Malaviya Mission Highlight Box */}
              <div className="mt-4 p-3.5 rounded-xl bg-blue-900 text-white text-xs space-y-1.5 shadow-xs">
                <div className="font-semibold text-blue-200 flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span>UGC Teacher Training Aligned</span>
                </div>
                <p className="text-slate-300 leading-relaxed text-[11px]">
                  Trained under the UGC Malaviya Mission Teacher Training Programme for NEP-2020 outcome-based pedagogy and modern higher education governance.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
