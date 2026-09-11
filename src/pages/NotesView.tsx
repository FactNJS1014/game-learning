import React from 'react';
import { useApp } from '../context/AppContext';
import { getLessonById } from '../data/curriculumIndex';
import { NoteItem } from '../types';
import { BookOpen, Trash2, ArrowRight, Clock } from 'lucide-react';

export const NotesView: React.FC = () => {
  const { language, progress, deleteNote, selectLesson, setActiveTab } = useApp();

  const noteEntries = (Object.entries(progress?.notes || {}) as [string, NoteItem][])
    .filter(([_, note]) => note && typeof note.content === 'string' && note.content.trim());

  return (
    <div id="notes-view-container" className="mx-auto max-w-4xl py-6 px-4">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
          <BookOpen className="h-4 w-4" />
          <span>Knowledge Base</span>
        </div>
        <h1 className="text-2xl font-extrabold text-white">
          {language === 'th' ? 'สมุดโน้ตส่วนตัวของฉัน (My Notes)' : 'My Study Notes'}
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          {language === 'th'
            ? 'บันทึกข้อคิด สูตรคำนวณ เทคนิค และข้อควรระวังที่คุณจดไว้ระหว่างเรียนแต่ละบทเรียน'
            : 'Personal study observations, code reminders, and tips recorded across lessons.'}
        </p>
      </div>

      {noteEntries.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-800 bg-slate-950/60 p-12 text-center">
          <BookOpen className="h-10 w-10 text-slate-700 mb-3" />
          <h3 className="text-sm font-bold text-slate-300">
            {language === 'th' ? 'ยังไม่มีโน้ตที่บันทึกไว้' : 'No Study Notes Yet'}
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mt-1 mb-4">
            {language === 'th'
              ? 'เปิดบทเรียนใดก็ได้ เลื่อนลงไปที่หัวข้อ "13. สมุดโน้ตสรุปของฉัน" แล้วเริ่มพิมพ์โน้ตของคุณ'
              : 'Open any lesson and scroll to section 13 ("My Lesson Notes") to jot down observations.'}
          </p>
          <button
            onClick={() => setActiveTab('catalog')}
            className="rounded-xl bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-500 transition"
          >
            {language === 'th' ? 'เลือกดูบทเรียนทั้งหมด' : 'Start Learning'}
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {noteEntries.map(([lessonId, note]) => {
            const lesson = getLessonById(lessonId);

            return (
              <div
                key={lessonId}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-5 shadow-sm transition hover:border-slate-700"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {lesson?.title[language] || lesson?.title.en || lessonId}
                    </h4>
                    <span className="text-[10px] text-slate-500 font-mono">
                      Updated: {new Date(note.updatedAt).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => deleteNote(lessonId)}
                      className="rounded-lg p-2 text-slate-500 hover:bg-rose-950/40 hover:text-rose-400 transition"
                      title="Delete Note"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => {
                        selectLesson(lessonId);
                        setActiveTab('learning');
                      }}
                      className="flex items-center gap-1 rounded-xl bg-slate-800 px-3 py-1.5 text-xs font-semibold text-white hover:bg-slate-700 transition"
                    >
                      <span>Jump to Lesson</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-3 text-xs text-slate-300 font-mono whitespace-pre-wrap leading-relaxed">
                  {note.content}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
