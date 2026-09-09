import React from 'react';
import { useApp } from '../context/AppContext';
import { allLessons, getLessonById } from '../data/curriculumIndex';
import { QuizScoreRecord } from '../types';
import {
  LayoutDashboard,
  Flame,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
  Gamepad2,
  Terminal,
  Award,
  BookOpen,
  Play,
  RotateCcw,
} from 'lucide-react';

export const DashboardView: React.FC = () => {
  const { language, progress, selectLesson, setActiveTab } = useApp();

  const totalLessons = allLessons.length;
  const completedCount = progress.completedLessonIds.length;
  const overallPercent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  // Unity specific
  const unityTotal = allLessons.filter((l) => l.engine === 'unity').length;
  const unityDone = progress.completedLessonIds.filter((id) => id.startsWith('unity-')).length;
  const unityPercent = unityTotal > 0 ? Math.round((unityDone / unityTotal) * 100) : 0;

  // Unreal specific
  const unrealTotal = allLessons.filter((l) => l.engine === 'unreal').length;
  const unrealDone = progress.completedLessonIds.filter((id) => id.startsWith('unreal-')).length;
  const unrealPercent = unrealTotal > 0 ? Math.round((unrealDone / unrealTotal) * 100) : 0;

  // Next recommended lesson to continue
  const nextPendingLesson =
    allLessons.find((l) => !progress.completedLessonIds.includes(l.id)) || allLessons[0];

  // Recently completed lessons
  const recentCompleted = progress.completedLessonIds
    .slice(-4)
    .map((id) => getLessonById(id))
    .filter(Boolean);

  // Quiz calculations
  const quizScores = Object.values(progress.quizScores) as QuizScoreRecord[];
  const totalQuizzes = quizScores.length;
  const passedQuizzes = quizScores.filter((q) => q.passed).length;
  const averageQuizPercent =
    totalQuizzes > 0
      ? Math.round(
          quizScores.reduce((acc: number, q: QuizScoreRecord) => acc + (q.score / q.total) * 100, 0) / totalQuizzes
        )
      : 0;

  return (
    <div id="dashboard-view-container" className="mx-auto max-w-5xl py-8 px-4 sm:px-6 space-y-8">
      {/* Header & Streak Counter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400 mb-1">
            <LayoutDashboard className="h-4 w-4" />
            <span>Learner HQ</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            {language === 'th' ? 'แดชบอร์ดความก้าวหน้าของคุณ' : 'My Learning Dashboard'}
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            {language === 'th'
              ? 'ติดตามสถิติการเรียนรู้ จำนวนชั่วโมง คะแนนแบบทดสอบ และภารกิจที่ต้องทำต่อไป'
              : 'Track your curriculum milestones, daily streaks, quiz scores, and next lesson objectives.'}
          </p>
        </div>

        {/* Daily Streak Badge */}
        <div className="flex items-center gap-3 rounded-2xl border border-amber-500/30 bg-amber-950/20 px-4 py-3 shadow-lg">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400 animate-bounce">
            <Flame className="h-6 w-6 fill-amber-400" />
          </div>
          <div>
            <div className="text-sm font-bold text-white flex items-center gap-1.5">
              <span>{progress.streakDays} {language === 'th' ? 'วันต่อเนื่อง' : 'Day Streak'}</span>
            </div>
            <p className="text-[11px] text-amber-300/80">
              {language === 'th' ? 'คงความต่อเนื่องทุกวัน!' : 'Keep the momentum going!'}
            </p>
          </div>
        </div>
      </div>

      {/* Resume Banner ("Continue Learning") */}
      {nextPendingLesson && (
        <div className="relative overflow-hidden rounded-3xl border border-red-500/30 bg-gradient-to-r from-red-950/40 via-slate-900 to-slate-950 p-6 sm:p-7 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-red-500/20 px-2.5 py-0.5 text-[10px] font-mono font-bold text-red-300 uppercase">
                  Continue Learning
                </span>
                <span className="text-xs text-slate-400 uppercase font-mono">
                  {nextPendingLesson.engine} • {nextPendingLesson.level}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {nextPendingLesson.title[language] || nextPendingLesson.title.en}
              </h3>
              <p className="text-xs text-slate-300 max-w-xl line-clamp-1">
                {nextPendingLesson.shortDescription[language] || nextPendingLesson.shortDescription.en}
              </p>
            </div>

            <button
              onClick={() => {
                selectLesson(nextPendingLesson.id);
                setActiveTab('learning');
              }}
              className="flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-xs sm:text-sm font-bold text-white transition hover:bg-red-500 shadow-lg shadow-red-950/50 shrink-0"
            >
              <Play className="h-4 w-4 fill-white" />
              <span>{language === 'th' ? 'เรียนต่อทันที' : 'Resume Lesson'}</span>
            </button>
          </div>
        </div>
      )}

      {/* Progress Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Overall Completion */}
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 shadow-sm">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span className="font-semibold uppercase tracking-wider">Overall Academy</span>
            <span className="font-bold text-white">{completedCount} / {totalLessons}</span>
          </div>
          <div className="text-2xl font-black font-mono text-white mb-2">{overallPercent}%</div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full bg-gradient-to-r from-red-500 to-amber-500 rounded-full transition-all"
              style={{ width: `${Math.max(overallPercent, 2)}%` }}
            />
          </div>
        </div>

        {/* Unity Track Progress */}
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 shadow-sm">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span className="font-semibold uppercase tracking-wider flex items-center gap-1.5 text-red-400">
              <Gamepad2 className="h-4 w-4" /> Unity Track
            </span>
            <span className="font-bold text-white">{unityDone} / {unityTotal}</span>
          </div>
          <div className="text-2xl font-black font-mono text-red-400 mb-2">{unityPercent}%</div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full bg-red-500 rounded-full transition-all"
              style={{ width: `${Math.max(unityPercent, 2)}%` }}
            />
          </div>
        </div>

        {/* Unreal Track Progress */}
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 shadow-sm">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span className="font-semibold uppercase tracking-wider flex items-center gap-1.5 text-blue-400">
              <Terminal className="h-4 w-4" /> Unreal Track
            </span>
            <span className="font-bold text-white">{unrealDone} / {unrealTotal}</span>
          </div>
          <div className="text-2xl font-black font-mono text-blue-400 mb-2">{unrealPercent}%</div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full bg-blue-500 rounded-full transition-all"
              style={{ width: `${Math.max(unrealPercent, 2)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Secondary Stats & Quick Actions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quiz Performance Panel */}
        <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 shadow-xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
            <Award className="h-4 w-4" />
            <span>Quiz Mastery Statistics</span>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-6 text-center">
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
              <div className="text-[10px] text-slate-400 uppercase">Total Quizzes</div>
              <div className="text-xl font-bold font-mono text-white mt-1">{totalQuizzes}</div>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
              <div className="text-[10px] text-slate-400 uppercase">Passed</div>
              <div className="text-xl font-bold font-mono text-emerald-400 mt-1">{passedQuizzes}</div>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
              <div className="text-[10px] text-slate-400 uppercase">Avg Score</div>
              <div className="text-xl font-bold font-mono text-amber-400 mt-1">{averageQuizPercent}%</div>
            </div>
          </div>

          {/* Quick Review Button */}
          <button
            onClick={() => setActiveTab('progress')}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800 py-2.5 text-xs font-semibold text-slate-200 transition hover:bg-slate-700 hover:text-white"
          >
            <span>View All Trophy Badges & Quiz Breakdown</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Recently Completed Lessons */}
        <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4">
              <CheckCircle2 className="h-4 w-4" />
              <span>Recently Completed</span>
            </div>

            {recentCompleted.length === 0 ? (
              <p className="text-xs text-slate-500 py-8 text-center italic">
                {language === 'th'
                  ? 'ยังไม่มีบทเรียนที่เรียนจบ เริ่มเรียนบทเรียนแรกเพื่อบันทึกประวัติ!'
                  : 'No completed lessons yet. Start Lesson 01 to build your history!'}
              </p>
            ) : (
              <div className="space-y-2">
                {recentCompleted.map((l) => (
                  <button
                    key={l!.id}
                    onClick={() => {
                      selectLesson(l!.id);
                      setActiveTab('learning');
                    }}
                    className="flex w-full items-center justify-between rounded-xl border border-slate-800/80 bg-slate-900/50 p-3 text-left transition hover:border-slate-700 hover:bg-slate-850"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      <div>
                        <div className="text-xs font-semibold text-slate-200">
                          {l!.title[language] || l!.title.en}
                        </div>
                        <span className="text-[10px] text-slate-500 uppercase font-mono">
                          {l!.engine} • {l!.level}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="h-3.5 w-3.5 text-slate-600" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => setActiveTab('learning')}
            className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 border border-slate-800 py-2.5 text-xs font-bold text-slate-300 hover:text-white transition mt-4"
          >
            <span>Browse Full Curriculum Catalog</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
