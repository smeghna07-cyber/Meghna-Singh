import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2, BookOpen } from 'lucide-react';
import { educationList } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Education & Degrees
          </h2>
          <div className="w-16 h-1 bg-blue-700 rounded-full mt-3 mb-4" />
          <p className="text-base text-slate-600">
            Formative university education and postgraduate master’s training specializing in neurological disorders and psychosomatic rehabilitation.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {educationList.map((edu, idx) => (
            <div
              key={edu.id}
              id={`education-card-${edu.id}`}
              className="bg-slate-50 rounded-xl p-6 sm:p-8 border border-slate-200 academic-card hover:border-blue-300 relative flex flex-col justify-between"
            >
              <div>
                {/* Degree Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-900 text-white flex items-center justify-center font-serif text-lg font-bold shadow-xs">
                      {edu.id.toUpperCase()}
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-slate-900">
                        {edu.degree}
                      </h3>
                      {edu.specialization && (
                        <p className="text-sm font-semibold text-blue-700 mt-0.5">
                          {edu.specialization}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Institution & Period Badges */}
                <div className="flex flex-wrap items-center gap-3 py-3 text-xs text-slate-600 border-y border-slate-200/80 mb-4">
                  <span className="inline-flex items-center gap-1 font-medium text-slate-900">
                    <BookOpen className="w-3.5 h-3.5 text-blue-700" />
                    <span>{edu.institution}</span>
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-600" />
                    <span>{edu.location}</span>
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-blue-900 bg-blue-100/70 px-2 py-0.5 rounded">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {edu.description}
                </p>

                {/* Highlights List */}
                {edu.highlights && (
                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                      Key Academic Milestones:
                    </div>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {edu.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-700 mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Bottom Credential Verification */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                  Recognized Degree
                </span>
                <span className="font-mono text-[11px] text-slate-600">Verified Credentials</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
