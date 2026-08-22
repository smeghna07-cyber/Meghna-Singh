import React, { useState } from 'react';
import {
  Brain,
  BrainCircuit,
  HeartHandshake,
  Stethoscope,
  Zap,
  Wind,
  Layers,
  ChevronRight,
  ShieldCheck,
  Activity,
} from 'lucide-react';
import { expertiseList } from '../data/portfolioData';
import { ExpertiseItem } from '../types';

export const Expertise: React.FC = () => {
  const [selectedExpertise, setSelectedExpertise] = useState<ExpertiseItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-6 h-6 text-blue-700" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-6 h-6 text-indigo-700" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-rose-700" />;
      case 'Stethoscope':
        return <Stethoscope className="w-6 h-6 text-emerald-700" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-700" />;
      case 'Wind':
        return <Wind className="w-6 h-6 text-cyan-700" />;
      default:
        return <Activity className="w-6 h-6 text-blue-700" />;
    }
  };

  const getBadgeColor = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return 'bg-blue-100/80 text-blue-900 border-blue-200';
      case 'BrainCircuit':
        return 'bg-indigo-100/80 text-indigo-900 border-indigo-200';
      case 'HeartHandshake':
        return 'bg-rose-100/80 text-rose-900 border-rose-200';
      case 'Stethoscope':
        return 'bg-emerald-100/80 text-emerald-900 border-emerald-200';
      case 'Zap':
        return 'bg-amber-100/80 text-amber-900 border-amber-200';
      case 'Wind':
        return 'bg-cyan-100/80 text-cyan-900 border-cyan-200';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  return (
    <section id="expertise" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-100 border border-blue-200 text-blue-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-blue-700" />
            <span>Clinical & Academic Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Areas of Expertise
          </h2>
          <div className="w-16 h-1 bg-blue-700 rounded-full mt-3 mb-4" />
          <p className="text-base text-slate-600">
            Specialized domain expertise encompassing neurological rehabilitation, psychophysiological conditioning, neuromuscular facilitation, and cardiopulmonary therapies.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseList.map((item) => (
            <div
              key={item.id}
              id={`expertise-card-${item.id}`}
              className="bg-white rounded-xl p-6 border border-slate-200 academic-card hover:border-blue-300 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Header Icon + Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-lg border ${getBadgeColor(item.iconName)} flex-shrink-0`}>
                    {getIcon(item.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {item.description}
                </p>
              </div>

              {/* Tags / Sub-competencies */}
              <div className="pt-4 border-t border-slate-100">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-600 mb-2">
                  Clinical Focus
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Clinical Scope Note */}
        <div className="mt-12 p-5 rounded-xl bg-white border border-slate-200 text-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-blue-700 flex-shrink-0" />
            <div>
              <div className="text-sm font-semibold text-slate-900">
                Commitment to Evidence-Based Clinical Practice
              </div>
              <div className="text-xs text-slate-600">
                Combining rigorous quantitative diagnostics with compassionate, personalized patient-centered rehabilitation.
              </div>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-3.5 py-2 rounded-lg transition-colors flex-shrink-0"
          >
            <span>Consult for Research or Case Discussion</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
