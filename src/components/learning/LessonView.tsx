import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { getLessonById, allLessons } from '../../data/curriculumIndex';
import { DiagramCard } from './DiagramCard';
import { CodeBlock } from './CodeBlock';
import { QuizCard } from './QuizCard';
import {
  Sparkles,
  Clock,
  CheckCircle2,
  Bookmark,
  BookmarkCheck,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  AlertTriangle,
  Lightbulb,
  CheckSquare,
  HelpCircle,
  Eye,
  Gamepad2,
  Terminal,
  Save,
  Share2,
} from 'lucide-react';

export const LessonView: React.FC = () => {
  const {
    selectedLessonId,
    selectLesson,
    setActiveTab,
    language,
    progress,
    markLessonComplete,
    toggleBookmark,
    saveNote,
    deleteNote,
    showToast,
  } = useApp();

  const lesson = getLessonById(selectedLessonId || 'unity-zero-001');

  // Local state for interactive practice checklist tasks
  const [completedPracticeTasks, setCompletedPracticeTasks] = useState<Record<string, boolean>>({});
  // Mini challenge solution reveal
  const [showChallengeSolution, setShowChallengeSolution] = useState(false);
  // User note text
  const currentNote = (progress.notes || {})[lesson?.id || '']?.content || '';
  const [noteContent, setNoteContent] = useState(currentNote);
  const [noteChanged, setNoteChanged] = useState(false);

  // Sync note when lesson changes
  React.useEffect(() => {
    setNoteContent(currentNote);
    setNoteChanged(false);
    setShowChallengeSolution(false);
  }, [lesson?.id, currentNote]);

  if (!lesson) {
    return (
      <div className="flex h-96 flex-col items-center justify-center p-8 text-center">
        <p className="text-slate-400">Lesson not found.</p>
        <button
          onClick={() => {
            selectLesson('unity-zero-001');
            setActiveTab('catalog');
          }}
          className="mt-4 rounded-xl bg-red-600 px-4 py-2 text-xs font-semibold text-white"
        >
          Return to Catalog
        </button>
      </div>
    );
  }

  const isCompleted = (progress.completedLessonIds || []).includes(lesson.id);
  const isBookmarked = (progress.bookmarkedLessonIds || []).includes(lesson.id);

  const togglePracticeTask = (taskId: string) => {
    setCompletedPracticeTasks((prev) => ({
      ...prev,
      [taskId]: !prev[taskId],
    }));
  };

  const handleSaveNote = () => {
    saveNote(lesson.id, noteContent);
    setNoteChanged(false);
  };

  return (
    <div id="lesson-view-container" className="mx-auto max-w-4xl py-6 px-4 sm:px-6">
      {/* Back to Catalog Navigation */}
      <div className="mb-3">
        <button
          onClick={() => setActiveTab('catalog')}
          className="group inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition"
        >
          <ChevronLeft className="h-4 w-4 transition group-hover:-translate-x-0.5 text-amber-400" />
          <span>{language === 'th' ? 'กลับสู่รายการหลักสูตรทั้งหมด' : 'Back to All Lessons'}</span>
        </button>
      </div>

      {/* Top Breadcrumb & Engine Tag */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-400">
          <span className="capitalize font-semibold text-slate-300">
            {lesson.engine === 'unity' ? 'Unity 3D/2D' : lesson.engine === 'unreal' ? 'Unreal Engine 5' : 'General GameDev'}
          </span>
          <span>/</span>
          <span className="uppercase text-slate-400 font-mono tracking-wider">
            {lesson.level}
          </span>
          <span>/</span>
          <span className="font-mono text-slate-400">
            Lesson {lesson.lessonNumber.toString().padStart(2, '0')}
          </span>
        </div>

        {/* Share & Bookmarks */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => toggleBookmark(lesson.id)}
            className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition ${
              isBookmarked
                ? 'border-indigo-500/50 bg-indigo-500/15 text-indigo-300'
                : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white'
            }`}
          >
            {isBookmarked ? (
              <>
                <BookmarkCheck className="h-3.5 w-3.5 text-indigo-400" />
                <span>{language === 'th' ? 'บันทึกแล้ว' : 'Bookmarked'}</span>
              </>
            ) : (
              <>
                <Bookmark className="h-3.5 w-3.5" />
                <span>{language === 'th' ? 'บุ๊กมาร์ก' : 'Bookmark'}</span>
              </>
            )}
          </button>

          <button
            onClick={() => {
              markLessonComplete(lesson.id);
            }}
            className={`flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition ${
              isCompleted
                ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-900/30'
                : 'border border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white'
            }`}
          >
            <CheckCircle2 className="h-4 w-4" />
            <span>
              {isCompleted
                ? language === 'th'
                  ? '✓ เรียนจบแล้ว'
                  : 'Completed'
                : language === 'th'
                ? 'ทำเครื่องหมายว่าจบ'
                : 'Mark as Complete'}
            </span>
          </button>
        </div>
      </div>

      {/* Hero Header Section */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-6 sm:p-8 shadow-2xl">
        <div className="flex flex-wrap items-center gap-2.5 mb-3">
          {lesson.startFromZero && (
            <span className="flex items-center gap-1 rounded-full border border-amber-500/40 bg-amber-500/15 px-3 py-1 text-[11px] font-bold text-amber-300 uppercase tracking-wider">
              <Sparkles className="h-3 w-3 text-amber-400 animate-pulse" />
              START FROM ZERO
            </span>
          )}

          <span className="rounded-full border border-slate-700 bg-slate-800/90 px-3 py-1 text-[11px] font-mono uppercase text-slate-300">
            {lesson.level} Level
          </span>

          <span className="flex items-center gap-1 text-[11px] text-slate-400">
            <Clock className="h-3.5 w-3.5" />
            {lesson.estimatedMinutes} {language === 'th' ? 'นาที' : 'Minutes'}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3">
          {lesson.title[language] || lesson.title.en}
        </h1>

        <p className="text-sm sm:text-base leading-relaxed text-slate-300 max-w-3xl mb-4">
          {lesson.shortDescription[language] || lesson.shortDescription.en}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {lesson.tags.map((tag, idx) => (
            <span
              key={idx}
              className="rounded-md border border-slate-800 bg-slate-900/60 px-2 py-0.5 text-[11px] text-slate-400"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Hero Image Illustration */}
        {lesson.heroImage && (
          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80">
            <img
              src={lesson.heroImage}
              alt={lesson.title[language] || lesson.title.en}
              referrerPolicy="no-referrer"
              className="h-52 sm:h-72 w-full object-cover brightness-95 contrast-105"
            />
            {lesson.heroImageCaption && (
              <div className="flex items-center gap-2 border-t border-slate-800/80 bg-slate-900/90 px-4 py-2 text-[11px] text-slate-400">
                <span className="font-semibold text-slate-300">
                  {language === 'th' ? 'ภาพประกอบ:' : 'Visual Guide:'}
                </span>
                <span>
                  {lesson.heroImageCaption[language] || lesson.heroImageCaption.en}
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* 01. What will you learn? & 02. Prerequisites */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        {/* Objectives */}
        <div className="rounded-2xl border border-slate-800/90 bg-slate-950/60 p-5">
          <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider text-emerald-400">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <span>01. {language === 'th' ? 'สิ่งที่คุณจะได้เรียนรู้' : 'What Will You Learn?'}</span>
          </div>
          <ul className="space-y-2">
            {(lesson.objectives[language] || lesson.objectives.en).map((obj, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Prerequisites */}
        <div className="rounded-2xl border border-slate-800/90 bg-slate-950/60 p-5">
          <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider text-indigo-400">
            <BookOpen className="h-4 w-4 text-indigo-400" />
            <span>02. {language === 'th' ? 'ความรู้พื้นฐานที่ต้องมี' : 'Prerequisites'}</span>
          </div>
          <ul className="space-y-2">
            {(lesson.prerequisites[language] || lesson.prerequisites.en).map((pre, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                <span className="text-indigo-400 font-bold">•</span>
                <span>{pre}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 03. START FROM ZERO (Instructor Explanation: WHAT, WHY, HOW, WHEN) */}
      {lesson.zeroExplanation && (
        <div className="my-8 rounded-3xl border border-amber-500/30 bg-amber-950/10 p-6 sm:p-7 shadow-lg">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="rounded-lg bg-amber-500/20 p-2 text-amber-400">
              <Sparkles className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white">
                03. {language === 'th' ? 'ปูพื้นฐานจากศูนย์ (Start From Zero)' : 'Start From Zero: The Core Foundation'}
              </h2>
              <p className="text-xs text-amber-300/80">
                {language === 'th'
                  ? 'อธิบายอย่างละเอียดเสมือนมี Instructor ส่วนตัวประกบข้าง ตอบคำถาม What, Why, How, When'
                  : 'Instructor guidance covering What, Why, How, and When before touching code.'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* WHAT */}
            {lesson.zeroExplanation.what && (
              <div className="rounded-xl border border-amber-500/20 bg-slate-950/60 p-4">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                  WHAT — {language === 'th' ? 'มันคืออะไร?' : 'What is it?'}
                </div>
                <p className="text-xs leading-relaxed text-slate-300">
                  {lesson.zeroExplanation.what[language] || lesson.zeroExplanation.what.en}
                </p>
              </div>
            )}

            {/* WHY */}
            {lesson.zeroExplanation.why && (
              <div className="rounded-xl border border-amber-500/20 bg-slate-950/60 p-4">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                  WHY — {language === 'th' ? 'ทำไมถึงจำเป็นในเกม?' : 'Why do we need it?'}
                </div>
                <p className="text-xs leading-relaxed text-slate-300">
                  {lesson.zeroExplanation.why[language] || lesson.zeroExplanation.why.en}
                </p>
              </div>
            )}

            {/* HOW */}
            {lesson.zeroExplanation.how && (
              <div className="rounded-xl border border-amber-500/20 bg-slate-950/60 p-4">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                  HOW — {language === 'th' ? 'ทำงานอย่างไร?' : 'How does it work?'}
                </div>
                <p className="text-xs leading-relaxed text-slate-300">
                  {lesson.zeroExplanation.how[language] || lesson.zeroExplanation.how.en}
                </p>
              </div>
            )}

            {/* WHEN */}
            {lesson.zeroExplanation.when && (
              <div className="rounded-xl border border-amber-500/20 bg-slate-950/60 p-4">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                  WHEN — {language === 'th' ? 'ควรเลือกใช้เมื่อไร?' : 'When to use it?'}
                </div>
                <p className="text-xs leading-relaxed text-slate-300">
                  {lesson.zeroExplanation.when[language] || lesson.zeroExplanation.when.en}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 04 & 05. Visual Diagram */}
      {lesson.diagram && (
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 px-1">
            05. {language === 'th' ? 'แผนภาพจำลองการทำงาน' : 'Visual Architecture Diagram'}
          </div>
          <DiagramCard diagram={lesson.diagram} language={language} />
        </div>
      )}

      {/* 06. Step-by-Step Learning */}
      <div className="my-8">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-1">
          06. {language === 'th' ? 'ขั้นตอนการลงมือทำแบบละเอียด' : 'Step-by-Step Implementation'}
        </div>

        <div className="space-y-4">
          {lesson.steps.map((step) => (
            <div
              key={step.stepNumber}
              className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-2.5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-red-600/20 text-xs font-bold font-mono text-red-400 border border-red-500/30">
                  {step.stepNumber}
                </span>
                <h3 className="text-sm font-bold text-white">
                  {step.title[language] || step.title.en}
                </h3>
              </div>

              <p className="text-xs leading-relaxed text-slate-300 mb-3 ml-10">
                {step.explanation[language] || step.explanation.en}
              </p>

              {/* Inspector Mockup Data */}
              {step.inspectorData && (
                <div className="ml-10 rounded-xl border border-slate-800 bg-slate-900/90 p-3.5">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
                    <span className="text-xs font-bold font-mono text-slate-200">
                      [Inspector: {step.inspectorData.componentName}]
                    </span>
                    <span className="text-[10px] text-slate-500">Unity/Unreal Properties</span>
                  </div>
                  <div className="space-y-1.5">
                    {step.inspectorData.properties?.map((prop, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex flex-col sm:flex-row sm:items-center justify-between text-xs py-1 border-b border-slate-800/40 last:border-none"
                      >
                        <span className="font-mono text-slate-400">{prop.name}</span>
                        <div className="flex items-center gap-2">
                          <code className="rounded bg-slate-800 px-2 py-0.5 font-mono text-slate-200">
                            {prop.value}
                          </code>
                          {prop.hint && (
                            <span className="text-[11px] text-slate-400 italic">
                              ({prop.hint})
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step Image Illustration if provided */}
              {step.imageUrl && (
                <div className="ml-10 mt-3 overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50">
                  <img
                    src={step.imageUrl}
                    alt={step.title[language] || step.title.en}
                    referrerPolicy="no-referrer"
                    className="h-44 sm:h-56 w-full object-cover brightness-95"
                  />
                  {step.imageCaption && (
                    <div className="border-t border-slate-800/80 bg-slate-950/80 px-3 py-1.5 text-[11px] text-slate-400">
                      {step.imageCaption[language] || step.imageCaption.en}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 07 & 08. Code Example & Line Explanation */}
      {lesson.codeExamples.length > 0 && (
        <div className="my-8">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 px-1">
            07 & 08. {language === 'th' ? 'ตัวอย่างโค้ดจริงและการวิเคราะห์' : 'Production Code Example & Breakdown'}
          </div>
          {lesson.codeExamples.map((example, exIdx) => (
            <CodeBlock key={example.id || `ex-${exIdx}`} example={example} language={language} />
          ))}
        </div>
      )}

      {/* 09. Practice Mode (Checklist) */}
      <div className="my-8 rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3">
          <CheckSquare className="h-4 w-4" />
          <span>09. {language === 'th' ? 'แบบฝึกหัดลงมือปฏิบัติจริง' : 'Practice Checklist (Hands-on)'}</span>
        </div>
        <p className="text-xs text-slate-400 mb-4">
          {language === 'th'
            ? 'เปิดโปรแกรม Engine ควบคู่แล้วติ๊กเครื่องหมายถูกเมื่อทำแต่ละขั้นตอนสำเร็จ:'
            : 'Follow along in your editor and check off each requirement:'}
        </p>
        <div className="space-y-2">
          {lesson.practiceChecklist.map((task) => {
            const isDone = completedPracticeTasks[task.id];
            return (
              <button
                key={task.id}
                onClick={() => togglePracticeTask(task.id)}
                className={`flex w-full items-start gap-3 rounded-xl border p-3 text-left transition ${
                  isDone
                    ? 'border-emerald-500/40 bg-emerald-950/20 text-slate-200'
                    : 'border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700'
                }`}
              >
                <div
                  className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                    isDone
                      ? 'border-emerald-500 bg-emerald-500 text-slate-950'
                      : 'border-slate-600 bg-slate-800'
                  }`}
                >
                  {isDone && <CheckCircle2 className="h-3 w-3" />}
                </div>
                <div>
                  <span className={`text-xs ${isDone ? 'line-through text-slate-400' : 'font-medium'}`}>
                    {task.task ? (task.task[language] || task.task.en) : (task.title ? (task.title[language] || task.title.en) : '')}
                  </span>
                  {task.hints && (
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      💡 {task.hints[language] || task.hints.en}
                    </p>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 10. Mini Challenge */}
      {lesson.miniChallenge && (
        <div className="my-8 rounded-2xl border border-purple-500/30 bg-purple-950/10 p-5">
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400">
              <Lightbulb className="h-4 w-4" />
              <span>10. {language === 'th' ? 'โจทย์ท้าทาย (Mini Challenge)' : 'Mini Challenge'}</span>
            </div>
            <span className="rounded bg-purple-500/20 px-2 py-0.5 text-[10px] font-mono font-bold text-purple-300">
              {'⭐'.repeat(lesson.miniChallenge.difficulty || 3)} Level
            </span>
          </div>

          <h4 className="text-sm font-bold text-white mb-1.5">
            {lesson.miniChallenge.title ? (lesson.miniChallenge.title[language] || lesson.miniChallenge.title.en) : (lesson.miniChallenge.prompt ? (lesson.miniChallenge.prompt[language] || lesson.miniChallenge.prompt.en) : 'Mini Challenge')}
          </h4>
          {lesson.miniChallenge.description && (
            <p className="text-xs leading-relaxed text-slate-300 mb-3">
              {lesson.miniChallenge.description[language] || lesson.miniChallenge.description.en}
            </p>
          )}

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-purple-500/20">
            <p className="text-[11px] text-purple-300/80 italic">
              Hint: {lesson.miniChallenge.hints ? (lesson.miniChallenge.hints[language] || lesson.miniChallenge.hints.en) : (lesson.miniChallenge.hint ? (lesson.miniChallenge.hint[language] || lesson.miniChallenge.hint.en) : '')}
            </p>

            <button
              onClick={() => setShowChallengeSolution(!showChallengeSolution)}
              className="flex items-center gap-1.5 rounded-lg border border-purple-500/40 bg-purple-900/30 px-3 py-1 text-xs font-semibold text-purple-200 transition hover:bg-purple-800/40"
            >
              <Eye className="h-3.5 w-3.5" />
              <span>{showChallengeSolution ? 'Hide Solution' : 'Reveal Solution'}</span>
            </button>
          </div>

          {showChallengeSolution && lesson.miniChallenge.solution && (
            <div className="mt-3 rounded-xl border border-purple-500/40 bg-slate-950 p-3 text-xs text-purple-200 font-mono">
              {typeof lesson.miniChallenge.solution === 'string'
                ? lesson.miniChallenge.solution
                : (lesson.miniChallenge.solution[language] || lesson.miniChallenge.solution.en)}
            </div>
          )}
        </div>
      )}

      {/* 11. Common Mistakes & Troubleshooting */}
      {lesson.commonMistakes && lesson.commonMistakes.length > 0 && (
        <div className="my-8">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-1">
            11. {language === 'th' ? 'ข้อผิดพลาดที่พบบ่อย & วิธีแก้ไข' : 'Common Mistakes & Troubleshooting'}
          </div>

          <div className="space-y-3">
            {lesson.commonMistakes.map((mistake, mIdx) => {
              const mTitle = mistake.title ? (mistake.title[language] || mistake.title.en) : (mistake.mistake ? (mistake.mistake[language] || mistake.mistake.en) : '');
              const mProblem = mistake.problem ? (mistake.problem[language] || mistake.problem.en) : (mistake.mistake ? (mistake.mistake[language] || mistake.mistake.en) : '');
              const mCause = mistake.cause ? (mistake.cause[language] || mistake.cause.en) : (mistake.why ? (mistake.why[language] || mistake.why.en) : '');
              const mSolution = mistake.solution ? (mistake.solution[language] || mistake.solution.en) : (mistake.fix ? (mistake.fix[language] || mistake.fix.en) : '');

              return (
                <div
                  key={mIdx}
                  className="rounded-2xl border border-rose-500/30 bg-rose-950/10 p-4 shadow-sm"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-rose-400 mb-1.5">
                    <AlertTriangle className="h-4 w-4 text-rose-500 shrink-0" />
                    <span>{mTitle}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2 text-xs">
                    <div className="rounded-xl border border-rose-500/20 bg-slate-950/60 p-3">
                      <strong className="text-rose-400 block mb-1">
                        ❌ {language === 'th' ? 'ปัญหา & สาเหตุ:' : 'The Problem:'}
                      </strong>
                      <p className="text-slate-300">{mProblem}</p>
                      {mCause && (
                        <p className="text-slate-400 text-[11px] mt-1 italic">
                          Why: {mCause}
                        </p>
                      )}
                    </div>

                    <div className="rounded-xl border border-emerald-500/30 bg-slate-950/60 p-3">
                      <strong className="text-emerald-400 block mb-1">
                        ✅ {language === 'th' ? 'วิธีแก้ไขที่ถูกต้อง:' : 'The Solution:'}
                      </strong>
                      <p className="text-slate-300">{mSolution}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 12. Quiz Section */}
      {lesson.quiz.length > 0 && (
        <div className="my-8">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 px-1">
            12. {language === 'th' ? 'แบบทดสอบความเข้าใจ' : 'Knowledge Check Quiz'}
          </div>
          <QuizCard lessonId={lesson.id} quiz={lesson.quiz} language={language} />
        </div>
      )}

      {/* 13. My Notes Section (Persistent in localStorage) */}
      <div className="my-8 rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
            <BookOpen className="h-4 w-4" />
            <span>13. {language === 'th' ? 'สมุดโน้ตสรุปของฉัน (My Notes)' : 'My Lesson Notes'}</span>
          </div>
          {noteChanged && (
            <span className="text-[11px] text-amber-400 italic">Unsaved changes</span>
          )}
        </div>

        <p className="text-xs text-slate-400 mb-2">
          {language === 'th'
            ? 'จดบันทึกความเข้าใจ ข้อสังเกต หรือสิ่งที่ต้องกลับมาฝึกซ้อม (บันทึกลงในเครื่องอัตโนมัติ):'
            : 'Write down key takeaways, personal questions, or things to practice:'}
        </p>

        <textarea
          id="lesson-note-textarea"
          value={noteContent}
          onChange={(e) => {
            setNoteContent(e.target.value);
            setNoteChanged(true);
          }}
          placeholder={
            language === 'th'
              ? 'พิมพ์โน้ตส่วนตัวที่นี่... เช่น อย่าลืมคูณ Time.deltaTime ใน Update'
              : 'Type personal notes here... e.g. Always normalize diagonal vectors.'
          }
          rows={4}
          className="w-full rounded-xl border border-slate-800 bg-slate-900/90 p-3 text-xs text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
        />

        <div className="flex items-center justify-end gap-2 mt-2">
          {progress.notes[lesson.id] && (
            <button
              onClick={() => {
                deleteNote(lesson.id);
                setNoteContent('');
              }}
              className="rounded-lg px-3 py-1.5 text-xs text-rose-400 hover:bg-rose-950/30"
            >
              Delete Note
            </button>
          )}
          <button
            onClick={handleSaveNote}
            className="flex items-center gap-1.5 rounded-lg bg-emerald-600 px-4 py-1.5 text-xs font-bold text-white transition hover:bg-emerald-500 shadow-md shadow-emerald-900/30"
          >
            <Save className="h-3.5 w-3.5" />
            <span>Save Note</span>
          </button>
        </div>
      </div>

      {/* 14. Summary & Navigation */}
      <div className="my-8 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
          14. {language === 'th' ? 'สรุปเนื้อหาสำคัญ' : 'Lesson Summary'}
        </div>
        <ul className="space-y-1.5 mb-6">
          {(() => {
            const rawSummary = lesson.summary
              ? (lesson.summary[language] || lesson.summary.en)
              : (lesson.objectives ? (lesson.objectives[language] || lesson.objectives.en) : []);
            const points = Array.isArray(rawSummary) ? rawSummary : (rawSummary ? [rawSummary] : []);
            if (points.length === 0) {
              const fallbackDesc = lesson.shortDescription ? (lesson.shortDescription[language] || lesson.shortDescription.en) : '';
              return fallbackDesc ? (
                <li className="flex items-start gap-2 text-xs text-slate-300">
                  <span className="text-red-400 font-bold">•</span>
                  <span>{fallbackDesc}</span>
                </li>
              ) : null;
            }
            return points.map((pt, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                <span className="text-red-400 font-bold">•</span>
                <span>{pt}</span>
              </li>
            ));
          })()}
        </ul>

        {/* Navigation Buttons: Previous & Next */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-800 pt-4">
          {lesson.prevLessonId ? (
            <button
              onClick={() => selectLesson(lesson.prevLessonId!)}
              className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-4 py-2.5 text-xs font-semibold text-slate-300 transition hover:bg-slate-800 hover:text-white w-full sm:w-auto justify-center"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>{language === 'th' ? 'บทเรียนก่อนหน้า' : 'Previous Lesson'}</span>
            </button>
          ) : (
            <div />
          )}

          {lesson.nextLessonId ? (
            <button
              onClick={() => {
                if (!isCompleted) markLessonComplete(lesson.id);
                selectLesson(lesson.nextLessonId!);
              }}
              className="flex items-center gap-2 rounded-xl bg-red-600 px-6 py-2.5 text-xs font-bold text-white transition hover:bg-red-500 shadow-lg shadow-red-900/40 w-full sm:w-auto justify-center"
            >
              <span>{language === 'th' ? 'ไปบทเรียนถัดไป' : 'Next Lesson'}</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              onClick={() => markLessonComplete(lesson.id)}
              className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-2.5 text-xs font-bold text-white transition hover:bg-emerald-500 shadow-lg shadow-emerald-900/40"
            >
              <CheckCircle2 className="h-4 w-4" />
              <span>Track Complete!</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
