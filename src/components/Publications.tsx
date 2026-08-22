import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Presentation,
  FileText,
  Search,
  Quote,
  CheckCircle2,
  Calendar,
  MapPin,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Filter,
} from 'lucide-react';
import { publicationsList, conferencePresentations } from '../data/portfolioData';
import { PublicationItem } from '../types';
import { CitationModal } from './CitationModal';

export const Publications: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'journal' | 'presentations'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [activeCitationPub, setActiveCitationPub] = useState<PublicationItem | null>(null);

  // Extract unique tags from publications
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    publicationsList.forEach((pub) => {
      pub.tags.forEach((tag) => tagsSet.add(tag));
    });
    return ['All', ...Array.from(tagsSet)];
  }, []);

  // Filtered publications
  const filteredPublications = useMemo(() => {
    return publicationsList.filter((pub) => {
      const matchesSearch =
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (pub.abstractSnippet && pub.abstractSnippet.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTag = selectedTag === 'All' || pub.tags.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

  // Filtered presentations
  const filteredPresentations = useMemo(() => {
    return conferencePresentations.filter((conf) => {
      return (
        conf.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        conf.conference.toLowerCase().includes(searchQuery.toLowerCase()) ||
        conf.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  }, [searchQuery]);

  return (
    <section id="publications" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-100 border border-blue-200 text-blue-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-blue-700" />
            <span>Scholarly Output & Research</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Publications & Scientific Presentations
          </h2>
          <div className="w-16 h-1 bg-blue-700 rounded-full mt-3 mb-4" />
          <p className="text-base text-slate-600">
            Peer-reviewed empirical studies, cross-sectional analyses, clinical case reports, and national & international conference presentations.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs mb-8 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* View switcher tabs */}
            <div className="inline-flex p-1 rounded-lg bg-slate-100 border border-slate-200/80">
              <button
                id="pub-tab-all"
                onClick={() => setActiveTab('all')}
                className={`px-3 sm:px-4 py-1.5 rounded-md text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === 'all'
                    ? 'bg-blue-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Scholarly Output ({publicationsList.length + conferencePresentations.length})
              </button>
              <button
                id="pub-tab-journal"
                onClick={() => setActiveTab('journal')}
                className={`px-3 sm:px-4 py-1.5 rounded-md text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === 'journal'
                    ? 'bg-blue-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Research Articles ({publicationsList.length})
              </button>
              <button
                id="pub-tab-presentations"
                onClick={() => setActiveTab('presentations')}
                className={`px-3 sm:px-4 py-1.5 rounded-md text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === 'presentations'
                    ? 'bg-blue-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Conference Presentations ({conferencePresentations.length})
              </button>
            </div>

            {/* Live Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                id="pub-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics, keywords, PNF..."
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-lg bg-slate-50 border border-slate-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

          </div>

          {/* Quick Category Chips for Articles */}
          {(activeTab === 'all' || activeTab === 'journal') && (
            <div className="pt-2 border-t border-slate-100 flex items-center gap-2 overflow-x-auto pb-1 text-xs">
              <span className="text-slate-400 flex items-center gap-1 flex-shrink-0 font-medium">
                <Filter className="w-3 h-3" /> Filter by Topic:
              </span>
              {allTags.slice(0, 6).map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                    selectedTag === tag
                      ? 'bg-blue-800 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content Section 1: Research Articles & Publications */}
        {(activeTab === 'all' || activeTab === 'journal') && (
          <div className="mb-12 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-serif font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-700" />
                <span>Peer-Reviewed Publications & Research Studies</span>
              </h3>
              <span className="text-xs text-slate-500 font-medium">
                Showing {filteredPublications.length} of {publicationsList.length} articles
              </span>
            </div>

            {filteredPublications.length === 0 ? (
              <div className="bg-white p-8 rounded-xl border border-slate-200 text-center text-slate-500">
                No publications found matching "{searchQuery}".
              </div>
            ) : (
              <ol className="space-y-4 list-none p-0 m-0">
                {filteredPublications.map((pub, idx) => (
                  <li
                    key={pub.id}
                    id={`pub-item-${pub.id}`}
                    className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200 academic-card hover:border-blue-300 relative transition-all"
                  >
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                      
                      {/* Number Marker */}
                      <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 text-blue-900 font-serif font-bold text-sm flex items-center justify-center flex-shrink-0">
                        {idx + 1}
                      </div>

                      {/* Main Details */}
                      <div className="flex-1 space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-100/70 text-blue-900 border border-blue-200">
                            {pub.type === 'cross_sectional'
                              ? 'Cross-sectional Study'
                              : pub.type === 'case_study'
                              ? 'Case Study Report'
                              : 'Journal Article'}
                          </span>
                          <span className="text-xs text-slate-500">
                            Published / Documented: {pub.year}
                          </span>
                        </div>

                        {/* Title */}
                        <h4 className="text-base sm:text-lg font-serif font-bold text-slate-900 leading-snug">
                          {pub.title}
                        </h4>

                        {/* Authors & Abstract snippet */}
                        <p className="text-xs font-semibold text-slate-700">
                          Authors: <span className="text-blue-950">{pub.authors}</span>
                        </p>

                        {pub.abstractSnippet && (
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans pt-1">
                            {pub.abstractSnippet}
                          </p>
                        )}

                        {/* Tags */}
                        <div className="flex flex-wrap items-center gap-1.5 pt-2">
                          {pub.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 text-[11px] rounded bg-slate-100 text-slate-600 border border-slate-200/60"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action: Cite Button */}
                      <div className="sm:self-center flex-shrink-0 pt-2 sm:pt-0">
                        <button
                          id={`cite-btn-${pub.id}`}
                          onClick={() => setActiveCitationPub(pub)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-900 border border-slate-200 hover:border-blue-300 text-xs font-semibold transition-colors"
                        >
                          <Quote className="w-3.5 h-3.5 text-blue-700" />
                          <span>Cite Article</span>
                        </button>
                      </div>

                    </div>
                  </li>
                ))}
              </ol>
            )}
          </div>
        )}

        {/* Content Section 2: Scientific Paper Presentations */}
        {(activeTab === 'all' || activeTab === 'presentations') && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-serif font-bold text-slate-900 flex items-center gap-2">
                <Presentation className="w-5 h-5 text-blue-700" />
                <span>Scientific Paper Presentations at National & International Conferences</span>
              </h3>
              <span className="text-xs text-slate-500 font-medium">
                {filteredPresentations.length} Presentations
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredPresentations.map((conf, idx) => (
                <div
                  key={conf.id}
                  id={`presentation-card-${conf.id}`}
                  className="bg-white rounded-xl p-6 border border-slate-200 academic-card hover:border-blue-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-100/70 text-blue-900 font-semibold text-[11px]">
                        <Calendar className="w-3 h-3" />
                        {conf.year}
                      </span>
                      <span className="font-mono text-[11px] text-slate-400">Presentation #{idx + 1}</span>
                    </div>

                    <h4 className="text-base font-serif font-bold text-slate-900 leading-snug">
                      "{conf.title}"
                    </h4>

                    <div className="text-xs font-semibold text-blue-800 space-y-1">
                      <div>{conf.conference}</div>
                      <div className="flex items-center gap-1 text-slate-500 font-normal">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{conf.location}</span>
                      </div>
                    </div>

                    {conf.note && (
                      <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2">
                        {conf.note}
                      </p>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-medium text-blue-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Delivered Presentation</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Citation Export Modal */}
      <CitationModal
        publication={activeCitationPub}
        onClose={() => setActiveCitationPub(null)}
      />
    </section>
  );
};
