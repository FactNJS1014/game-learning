import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Search, X, Gamepad2, Terminal, Layers, Wrench, Sparkles, ArrowRight } from 'lucide-react';
import { allLessons } from '../../data/curriculumIndex';
import { gameProjects } from '../../data/projectsData';

export const GlobalSearchModal: React.FC = () => {
  const { searchModalOpen, setSearchModalOpen, selectLesson, setActiveTab, language } = useApp();
  const [query, setQuery] = useState('');

  // Keyboard shortcut listener for Cmd+K / Ctrl+K & Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen(!searchModalOpen);
      } else if (e.key === 'Escape' && searchModalOpen) {
        setSearchModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchModalOpen, setSearchModalOpen]);

  if (!searchModalOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  const matchingLessons = allLessons.filter((lesson) => {
    if (!normalizedQuery) return true;
    return (
      lesson.title.en.toLowerCase().includes(normalizedQuery) ||
      lesson.title.th.toLowerCase().includes(normalizedQuery) ||
      lesson.shortDescription.en.toLowerCase().includes(normalizedQuery) ||
      lesson.shortDescription.th.toLowerCase().includes(normalizedQuery) ||
      lesson.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery))
    );
  });

  const matchingProjects = gameProjects.filter((project) => {
    if (!normalizedQuery) return false;
    return (
      project.title.en.toLowerCase().includes(normalizedQuery) ||
      project.title.th.toLowerCase().includes(normalizedQuery) ||
      project.genre.toLowerCase().includes(normalizedQuery)
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/75 backdrop-blur-sm">
      <div
        id="global-search-modal-content"
        className="w-full max-w-2xl rounded-2xl border border-slate-700/80 bg-slate-900 shadow-2xl overflow-hidden"
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 border-b border-slate-800 px-4 py-3.5 bg-slate-950/60">
          <Search className="h-5 w-5 text-slate-400" />
          <input
            id="search-modal-input"
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              language === 'th'
                ? 'พิมพ์ค้นหาบทเรียน, C#, Blueprint, ฟิสิกส์, AI...'
                : 'Search lessons, C#, Blueprint, Physics, AI, Tools...'
            }
            className="flex-1 bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <button
            onClick={() => setSearchModalOpen(false)}
            className="rounded border border-slate-800 bg-slate-800/80 px-2 py-0.5 text-[11px] font-mono text-slate-400 hover:bg-slate-700"
          >
            ESC
          </button>
        </div>

        {/* Search Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4 custom-scrollbar">
          {/* Lessons Category */}
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 px-1">
              {language === 'th' ? `บทเรียน (${matchingLessons.length})` : `Lessons (${matchingLessons.length})`}
            </div>

            {matchingLessons.length === 0 ? (
              <p className="text-xs text-slate-400 italic px-2 py-3">
                {language === 'th' ? 'ไม่พบบทเรียนที่ตรงกับคำค้นหา' : 'No matching lessons found.'}
              </p>
            ) : (
              <div className="space-y-1.5">
                {matchingLessons.slice(0, 8).map((lesson) => (
                  <button
                    key={lesson.id}
                    onClick={() => {
                      selectLesson(lesson.id);
                      setSearchModalOpen(false);
                    }}
                    className="flex w-full items-center justify-between rounded-xl border border-slate-800/60 bg-slate-950/40 p-3 text-left transition hover:border-slate-700 hover:bg-slate-800/50 group"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                          lesson.engine === 'unity'
                            ? 'bg-red-500/10 text-red-400'
                            : lesson.engine === 'unreal'
                            ? 'bg-blue-500/10 text-blue-400'
                            : 'bg-purple-500/10 text-purple-400'
                        }`}
                      >
                        {lesson.engine === 'unity' ? (
                          <Gamepad2 className="h-4 w-4" />
                        ) : lesson.engine === 'unreal' ? (
                          <Terminal className="h-4 w-4" />
                        ) : (
                          <Sparkles className="h-4 w-4" />
                        )}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-200 group-hover:text-white flex items-center gap-2">
                          <span>{lesson.title[language] || lesson.title.en}</span>
                          {lesson.startFromZero && (
                            <span className="rounded bg-amber-500/20 px-1.5 py-0.2 text-[9px] font-bold text-amber-300">
                              ZERO
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                          {lesson.shortDescription[language] || lesson.shortDescription.en}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-slate-600 group-hover:text-white transition group-hover:translate-x-0.5" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Projects Category */}
          {matchingProjects.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 px-1">
                {language === 'th' ? `โปรเจกต์เกม (${matchingProjects.length})` : `Game Projects (${matchingProjects.length})`}
              </div>
              <div className="space-y-1.5">
                {matchingProjects.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      setActiveTab('projects');
                      setSearchModalOpen(false);
                    }}
                    className="flex w-full items-center justify-between rounded-xl border border-slate-800/60 bg-slate-950/40 p-3 text-left transition hover:border-slate-700 hover:bg-slate-800/50 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
                        <Layers className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-slate-200 group-hover:text-white">
                          {p.title[language] || p.title.en}
                        </span>
                        <p className="text-[11px] text-slate-400">{p.genre} • {p.difficulty.toUpperCase()}</p>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-slate-600 group-hover:text-white" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quick Shortcuts */}
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
            <span>
              {language === 'th' ? 'นำทางด้วยคีย์บอร์ด' : 'Navigate with keyboard'}
            </span>
            <div className="flex items-center gap-2">
              <span className="rounded bg-slate-800 px-1.5 py-0.5 font-mono">ESC</span> to close
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
