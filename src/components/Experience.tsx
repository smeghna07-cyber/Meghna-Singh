import React from 'react';
import { Briefcase, Building2, Calendar, MapPin, CheckCircle2, ChevronRight, Hospital, ShieldCheck } from 'lucide-react';
import { experienceList } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-100 border border-blue-200 text-blue-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5 text-blue-700" />
            <span>Career History & Clinical Rotations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Professional Experience
          </h2>
          <div className="w-16 h-1 bg-blue-700 rounded-full mt-3 mb-4" />
          <p className="text-base text-slate-600">
            Current university academic faculty appointments, administrative responsibilities, and multispecialty tertiary hospital clinical internships.
          </p>
        </div>

        {/* Experience Cards Stack */}
        <div className="space-y-8">
          {experienceList.map((exp, idx) => (
            <div
              key={exp.id}
              id={`experience-card-${exp.id}`}
              className={`rounded-2xl p-6 sm:p-8 border transition-all ${
                exp.current
                  ? 'bg-white border-blue-300 shadow-md ring-1 ring-blue-100'
                  : 'bg-white border-slate-200 shadow-xs'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-6 border-b border-slate-100">
                
                {/* Role & Org */}
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    {exp.current && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-900 border border-emerald-300 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                        Current Appointment
                      </span>
                    )}
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                      {exp.type === 'academic' ? 'University Faculty' : 'Rotatory Clinical Internship'}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
                    {exp.role}
                  </h3>

                  <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-blue-900">
                    <span className="flex items-center gap-1.5">
                      {exp.type === 'academic' ? (
                        <Building2 className="w-4 h-4 text-blue-700" />
                      ) : (
                        <Hospital className="w-4 h-4 text-blue-700" />
                      )}
                      <span>{exp.institution}</span>
                    </span>
                    <span className="text-slate-400">•</span>
                    <span className="flex items-center gap-1 text-slate-600 font-normal">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Period Badge */}
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-900 text-xs sm:text-sm font-semibold">
                    <Calendar className="w-4 h-4 text-blue-700" />
                    <span>{exp.period}</span>
                  </div>
                </div>

              </div>

              {/* Summary Description */}
              <div className="pt-5 space-y-4">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {exp.summary}
                </p>

                {/* Specific Responsibilities List */}
                <div className="space-y-2.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Key Responsibilities & Clinical Scopes:
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div
                        key={rIdx}
                        className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 text-xs text-slate-700 flex items-start gap-2.5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue-700 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* If departments are listed (e.g. GMC Nagpur Rotations) */}
                {exp.departments && (
                  <div className="pt-3">
                    <div className="text-xs font-semibold text-slate-600 mb-2">
                      Multidisciplinary Rotations Completed:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.departments.map((dept, dIdx) => (
                        <span
                          key={dIdx}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-900 border border-blue-200"
                        >
                          {dept}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
