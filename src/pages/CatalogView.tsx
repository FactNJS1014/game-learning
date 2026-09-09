import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { allLessons } from '../data/curriculumIndex';
import { EngineType, LessonLevel } from '../types';
import {
  Search,
  Filter,
  Sparkles,
  Gamepad2,
  Terminal,
  Clock,
  CheckCircle2,
  Bookmark,
  BookmarkCheck,
  ArrowRight,
  BookOpen,
} from 'lucide-react';

export const CatalogView: React.FC = () => {
  const {
    language,
    filterEngine,
    setFilterEngine,
    selectLesson,
    setActiveTab,
    progress,
    toggleBookmark,
  } = useApp();

  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLessons = allLessons.filter((lesson) => {
    // Engine match
    if (filterEngine !== 'all' && lesson.engine !== filterEngine) return false;

    // Level match
    if (selectedLevel !== 'all') {
      if (selectedLevel === 'zero' && !lesson.startFromZero) return false;
      if (selectedLevel !== 'zero' && lesson.level !== selectedLevel) return false;
    }

    // Search query match
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchTitle =
        lesson.title.en.toLowerCase().includes(q) ||
        lesson.title.th.toLowerCase().includes(q);
      const matchDesc =
        lesson.shortDescription.en.toLowerCase().includes(q) ||
        lesson.shortDescription.th.toLowerCase().includes(q);
      const matchTags = lesson.tags.some((t) => t.toLowerCase().includes(q));
      if (!matchTitle && !matchDesc && !matchTags) return false;
    }

    return true;
  });

  return (
    <div id="catalog-view-container" className="mx-auto max-w-5xl py-6 px-4">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
          <BookOpen className="h-4 w-4" />
          <span>Curriculum Directory</span>
        </div>
        <h1 className="text-2xl font-extrabold text-white">
          {language === 'th' ? 'หลักสูตรพัฒนาเกมทั้งหมด' : 'All GameDev Curriculum Tracks'}
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          {language === 'th'
            ? 'เลือกเรียนตาม Engine หรือระดับความยาก จากศูนย์ถึงขั้นสูง พร้อมระบบวัดผลแบบละเอียด'
            : 'Browse all structured lessons filtered by engine, difficulty tier, or search keywords.'}
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
        {/* Engine Tabs */}
        <div className="flex items-center gap-1 rounded-2xl border border-slate-800 bg-slate-900/80 p-1">
          <button
            onClick={() => setFilterEngine('all')}
            className={`rounded-xl px-4 py-2 text-xs font-bold transition ${
              filterEngine === 'all'
                ? 'bg-amber-500 text-slate-950 shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            All Tracks ({allLessons.length})
          </button>
          <button
            onClick={() => setFilterEngine('unity')}
            className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold transition ${
              filterEngine === 'unity'
                ? 'bg-red-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Gamepad2 className="h-3.5 w-3.5" />
            <span>Unity</span>
          </button>
          <button
            onClick={() => setFilterEngine('unreal')}
            className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold transition ${
              filterEngine === 'unreal'
                ? 'bg-blue-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Terminal className="h-3.5 w-3.5" />
            <span>Unreal</span>
          </button>
        </div>

        {/* Level Filters */}
        <div className="flex flex-wrap items-center gap-1.5">
          {[
            { id: 'all', label: 'All Levels' },
            { id: 'zero', label: 'Zero Track' },
            { id: 'basic', label: 'Basic' },
            { id: 'intermediate', label: 'Intermediate' },
            { id: 'advanced', label: 'Advanced' },
          ].map((lvl) => (
            <button
              key={lvl.id}
              onClick={() => setSelectedLevel(lvl.id)}
              className={`rounded-xl border px-3 py-1.5 text-xs font-medium transition ${
                selectedLevel === lvl.id
                  ? 'border-slate-600 bg-slate-800 text-white font-bold'
                  : 'border-slate-800/80 bg-slate-950/60 text-slate-400 hover:text-white'
              }`}
            >
              {lvl.label}
            </button>
          ))}
        </div>

        {/* Search Field */}
        <div className="relative min-w-[200px]">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={language === 'th' ? 'ค้นหาบทเรียน...' : 'Search lessons...'}
            className="w-full rounded-xl border border-slate-800 bg-slate-900/90 pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
          />
        </div>
      </div>

      {/* Lesson Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredLessons.map((lesson) => {
          const isDone = progress.completedLessonIds.includes(lesson.id);
          const isBookmarked = progress.bookmarkedLessonIds.includes(lesson.id);

          return (
            <div
              key={lesson.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950/80 p-5 transition hover:border-slate-700 hover:bg-slate-900/60 shadow-md"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-2">
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-md text-[10px] font-mono font-bold ${
                        lesson.engine === 'unity'
                          ? 'bg-red-500/20 text-red-400'
                          : lesson.engine === 'unreal'
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'bg-purple-500/20 text-purple-400'
                      }`}
                    >
                      {lesson.lessonNumber.toString().padStart(2, '0')}
                    </span>

                    {lesson.startFromZero && (
                      <span className="flex items-center gap-1 rounded bg-amber-500/15 px-1.5 py-0.5 text-[9px] font-bold text-amber-300">
                        <Sparkles className="h-2.5 w-2.5" />
                        ZERO
                      </span>
                    )}

                    <span className="rounded bg-slate-800 px-2 py-0.5 text-[10px] font-mono uppercase text-slate-400">
                      {lesson.level}
                    </span>
                  </div>

                  <button
                    onClick={() => toggleBookmark(lesson.id)}
                    className="text-slate-500 hover:text-indigo-400 transition"
                  >
                    {isBookmarked ? (
                      <BookmarkCheck className="h-4 w-4 text-indigo-400" />
                    ) : (
                      <Bookmark className="h-4 w-4" />
                    )}
                  </button>
                </div>

                <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-amber-400 transition line-clamp-1">
                  {lesson.title[language] || lesson.title.en}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                  {lesson.shortDescription[language] || lesson.shortDescription.en}
                </p>
              </div>

              {/* Bottom Action Row */}
              <div className="flex items-center justify-between border-t border-slate-800/60 pt-3">
                <span className="flex items-center gap-1 text-[11px] text-slate-400">
                  <Clock className="h-3 w-3" />
                  {lesson.estimatedMinutes}m
                </span>

                <div className="flex items-center gap-2">
                  {isDone && (
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      <span>{language === 'th' ? 'จบแล้ว' : 'Done'}</span>
                    </span>
                  )}

                  <button
                    onClick={() => {
                      selectLesson(lesson.id);
                      setActiveTab('learning');
                    }}
                    className="flex items-center gap-1 rounded-lg bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-200 transition hover:bg-amber-500 hover:text-slate-950"
                  >
                    <span>{language === 'th' ? 'เริ่มเรียน' : 'Open Lesson'}</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
