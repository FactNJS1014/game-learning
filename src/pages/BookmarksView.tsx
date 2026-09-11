import React from 'react';
import { useApp } from '../context/AppContext';
import { getLessonById } from '../data/curriculumIndex';
import { Bookmark, ArrowRight, BookmarkX, Clock } from 'lucide-react';

export const BookmarksView: React.FC = () => {
  const { language, progress, toggleBookmark, selectLesson, setActiveTab } = useApp();

  const bookmarkedLessons = (progress?.bookmarkedLessonIds || [])
    .map((id) => getLessonById(id))
    .filter(Boolean);

  return (
    <div id="bookmarks-view-container" className="mx-auto max-w-4xl py-6 px-4">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400 mb-1">
          <Bookmark className="h-4 w-4" />
          <span>Personal Library</span>
        </div>
        <h1 className="text-2xl font-extrabold text-white">
          {language === 'th' ? 'บทเรียนที่บันทึกไว้ (Bookmarks)' : 'Saved Bookmarks'}
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          {language === 'th'
            ? 'บทเรียนที่คุณติดดาวหรือบันทึกไว้สำหรับกลับมาทบทวนหรือค้นหาโค้ดตัวอย่าง'
            : 'Quick access to lessons you have flagged for revision or code reference.'}
        </p>
      </div>

      {bookmarkedLessons.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-800 bg-slate-950/60 p-12 text-center">
          <Bookmark className="h-10 w-10 text-slate-700 mb-3" />
          <h3 className="text-sm font-bold text-slate-300">
            {language === 'th' ? 'ยังไม่มีบทเรียนที่บุ๊กมาร์กไว้' : 'No Bookmarks Yet'}
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mt-1 mb-4">
            {language === 'th'
              ? 'กดปุ่มบุ๊กมาร์กที่มุมบนขวาของบทเรียนใดก็ได้ เพื่อเก็บไว้ในหน้านี้'
              : 'Click the bookmark icon on any lesson to save it here for quick access.'}
          </p>
          <button
            onClick={() => setActiveTab('catalog')}
            className="rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-500 transition"
          >
            {language === 'th' ? 'เลือกดูบทเรียนทั้งหมด' : 'Browse Lessons'}
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {bookmarkedLessons.map((lesson) => (
            <div
              key={lesson!.id}
              className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950 p-4 transition hover:border-slate-700"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-mono text-xs font-bold ${
                    lesson!.engine === 'unity'
                      ? 'bg-red-500/20 text-red-400'
                      : 'bg-blue-500/20 text-blue-400'
                  }`}
                >
                  {lesson!.lessonNumber.toString().padStart(2, '0')}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {lesson!.title[language] || lesson!.title.en}
                  </h4>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-0.5">
                    <span className="uppercase font-mono">{lesson!.engine}</span>
                    <span>•</span>
                    <span className="capitalize">{lesson!.level}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {lesson!.estimatedMinutes}m
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleBookmark(lesson!.id)}
                  title="Remove Bookmark"
                  className="rounded-lg p-2 text-slate-500 hover:bg-rose-950/40 hover:text-rose-400 transition"
                >
                  <BookmarkX className="h-4 w-4" />
                </button>
                <button
                  onClick={() => {
                    selectLesson(lesson!.id);
                    setActiveTab('learning');
                  }}
                  className="flex items-center gap-1 rounded-xl bg-slate-800 px-3 py-1.5 text-xs font-semibold text-white hover:bg-slate-700 transition"
                >
                  <span>Open</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
