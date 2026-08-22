import React, { useState } from 'react';
import { X, Copy, Check, FileText } from 'lucide-react';
import { PublicationItem } from '../types';

interface CitationModalProps {
  publication: PublicationItem | null;
  onClose: () => void;
}

export const CitationModal: React.FC<CitationModalProps> = ({ publication, onClose }) => {
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  if (!publication) return null;

  const apaCitation = `${publication.authors} (${publication.year || '2023'}). ${publication.title}. ${publication.journalOrContext || 'Academic Research Report'}.`;
  
  const vancouverCitation = `${publication.authors}. ${publication.title}. ${publication.journalOrContext || 'Academic Research Report'}. ${publication.year || '2023'}.`;

  const bibtexCitation = `@article{singh_${publication.id},
  author = {${publication.authors.replace('Dr. ', '')}},
  title = {${publication.title}},
  journal = {${publication.journalOrContext || 'Clinical & Academic Physiotherapy'}},
  year = {${publication.year || '2023'}}
}`;

  const copyToClipboard = (text: string, formatName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedFormat(formatName);
    setTimeout(() => setCopiedFormat(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-300" />
            <h3 className="font-serif font-bold text-lg">Academic Citation Export</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
              Article Reference
            </div>
            <h4 className="font-serif font-bold text-slate-900 text-base leading-snug">
              {publication.title}
            </h4>
          </div>

          {/* APA Format */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-800">
                APA Format (7th Edition)
              </span>
              <button
                onClick={() => copyToClipboard(apaCitation, 'APA')}
                className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 transition-colors"
              >
                {copiedFormat === 'APA' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy APA</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 font-serif leading-relaxed">
              {apaCitation}
            </p>
          </div>

          {/* Vancouver Format */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-800">
                Vancouver Format
              </span>
              <button
                onClick={() => copyToClipboard(vancouverCitation, 'Vancouver')}
                className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 transition-colors"
              >
                {copiedFormat === 'Vancouver' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Vancouver</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 font-mono leading-relaxed">
              {vancouverCitation}
            </p>
          </div>

          {/* BibTeX */}
          <div className="p-4 rounded-xl bg-slate-900 text-slate-200 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-300">
                BibTeX Entry
              </span>
              <button
                onClick={() => copyToClipboard(bibtexCitation, 'BibTeX')}
                className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded bg-slate-800 border border-slate-700 hover:bg-slate-700 text-slate-200 transition-colors"
              >
                {copiedFormat === 'BibTeX' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy BibTeX</span>
                  </>
                )}
              </button>
            </div>
            <pre className="text-xs font-mono text-blue-100 overflow-x-auto whitespace-pre-wrap">
              {bibtexCitation}
            </pre>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
