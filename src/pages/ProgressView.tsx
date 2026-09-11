import React from 'react';
import { useApp } from '../context/AppContext';
import { achievementsList } from '../data/achievementsData';
import {
  Award,
  CheckCircle2,
  Lock,
  Sparkles,
  Flame,
  Gamepad2,
  BookOpen,
  Bookmark,
  Layers,
  Clock,
} from 'lucide-react';
import { allLessons, getLessonById } from '../data/curriculumIndex';
import { QuizScoreRecord } from '../types';

export const ProgressView: React.FC = () => {
  const { language, progress, selectLesson, setActiveTab } = useApp();

  const completedLessonIds = progress?.completedLessonIds || [];
  const totalLessons = allLessons.length;
  const completedCount = completedLessonIds.length;
  const percent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  const unlockedCount = achievementsList.filter(
    (item) => progress?.unlockedAchievements?.includes(item.id) || item.condition(progress)
  ).length;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="h-6 w-6 text-amber-400" />;
      case 'Award':
        return <Award className="h-6 w-6 text-amber-400" />;
      case 'Gamepad2':
        return <Gamepad2 className="h-6 w-6 text-red-400" />;
      case 'Flame':
        return <Flame className="h-6 w-6 text-orange-400" />;
      case 'BookOpen':
        return <BookOpen className="h-6 w-6 text-emerald-400" />;
      case 'Bookmark':
        return <Bookmark className="h-6 w-6 text-indigo-400" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="h-6 w-6 text-teal-400" />;
      case 'Layers':
        return <Layers className="h-6 w-6 text-purple-400" />;
      default:
        return <Award className="h-6 w-6 text-amber-400" />;
    }
  };

  return (
    <div id="progress-view-container" className="mx-auto max-w-5xl py-6 px-4 space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
          <Award className="h-4 w-4" />
          <span>Milestone Analytics</span>
        </div>
        <h1 className="text-2xl font-extrabold text-white">
          {language === 'th' ? 'ความสำเร็จ & สถิติการเรียนรู้' : 'Achievements & Progress Analytics'}
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          {language === 'th'
            ? 'ตรวจสอบถ้วยรางวัลความสำเร็จที่ปลดล็อกแล้ว ประวัติคะแนนแบบทดสอบ และสถิติรวมของทุก Engine'
            : 'Track trophy badges, quiz score records, and holistic curriculum milestones.'}
        </p>
      </div>

      {/* Progress Highlights Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 shadow-sm text-center">
          <span className="text-xs text-slate-400 uppercase font-mono">Completed Lessons</span>
          <div className="text-2xl font-black font-mono text-white mt-1">
            {completedCount} / {totalLessons}
          </div>
          <span className="text-[11px] text-emerald-400">{percent}% Total Completion</span>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 shadow-sm text-center">
          <span className="text-xs text-slate-400 uppercase font-mono">Trophies Unlocked</span>
          <div className="text-2xl font-black font-mono text-amber-400 mt-1">
            {unlockedCount} / {achievementsList.length}
          </div>
          <span className="text-[11px] text-slate-400">
            {Math.round((unlockedCount / achievementsList.length) * 100)}% Badges Collected
          </span>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 shadow-sm text-center">
          <span className="text-xs text-slate-400 uppercase font-mono">Current Streak</span>
          <div className="text-2xl font-black font-mono text-rose-400 mt-1 flex items-center justify-center gap-1">
            <Flame className="h-6 w-6 fill-rose-500" />
            <span>{progress.streakDays} Days</span>
          </div>
          <span className="text-[11px] text-slate-400">Consistent Daily Learning</span>
        </div>
      </div>

      {/* Trophy Badges Showcase */}
      <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 sm:p-8 shadow-xl">
        <h2 className="text-lg font-bold text-white mb-2">
          {language === 'th' ? 'ถ้วยรางวัลความสำเร็จ (Achievement Badges)' : 'Academy Achievement Trophies'}
        </h2>
        <p className="text-xs text-slate-400 mb-6">
          Complete zero-track lessons, code playground simulations, and quizzes to earn badges.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievementsList.map((item) => {
            const isUnlocked =
              progress.unlockedAchievements?.includes(item.id) || item.condition(progress);

            return (
              <div
                key={item.id}
                className={`rounded-2xl border p-4 transition-all ${
                  isUnlocked
                    ? 'border-amber-500/50 bg-amber-950/10 shadow-lg shadow-amber-950/30 ring-1 ring-amber-500/20'
                    : 'border-slate-800/60 bg-slate-900/30 opacity-60'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 border border-slate-800">
                      {renderIcon(item.icon)}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">
                        {item.title[language] || item.title.en}
                      </h4>
                      <span className="text-[10px] text-slate-500 font-mono">
                        {isUnlocked ? 'Unlocked' : 'Locked'}
                      </span>
                    </div>
                  </div>

                  {isUnlocked ? (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </span>
                  ) : (
                    <Lock className="h-4 w-4 text-slate-600" />
                  )}
                </div>

                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {item.description[language] || item.description.en}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quiz Score History */}
      <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 sm:p-8 shadow-xl">
        <h2 className="text-lg font-bold text-white mb-4">
          {language === 'th' ? 'ประวัติคะแนนแบบทดสอบ (Quiz Records)' : 'Quiz Mastery Records'}
        </h2>

        {Object.keys(progress?.quizScores || {}).length === 0 ? (
          <p className="text-xs text-slate-500 italic py-4">
            No quiz scores recorded yet. Complete quizzes at the end of lessons to record scores.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {(Object.entries(progress?.quizScores || {}) as [string, QuizScoreRecord][]).map(
              ([lessonId, qData]) => {
                const l = getLessonById(lessonId);
                return (
                  <div
                    key={lessonId}
                    className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/50 p-3.5"
                  >
                    <div>
                      <h5 className="text-xs font-semibold text-white">
                        {l?.title[language] || l?.title.en || lessonId}
                      </h5>
                      <span className="text-[10px] text-slate-500 font-mono uppercase">
                        {l?.engine} • {l?.level}
                      </span>
                    </div>

                    <div className="text-right">
                      <div
                        className={`text-xs font-bold font-mono ${
                          qData.passed ? 'text-emerald-400' : 'text-amber-400'
                        }`}
                      >
                        {qData.score} / {qData.total} ({Math.round((qData.score / qData.total) * 100)}%)
                      </div>
                      <span
                        className={`text-[9px] font-bold uppercase ${
                          qData.passed ? 'text-emerald-400' : 'text-amber-400'
                        }`}
                      >
                        {qData.passed ? 'Passed' : 'Review Needed'}
                      </span>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        )}
      </div>
    </div>
  );
};

