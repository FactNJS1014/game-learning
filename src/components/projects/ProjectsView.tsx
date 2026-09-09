import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { gameProjects } from '../../data/projectsData';
import {
  Layers,
  CheckCircle2,
  Clock,
  ChevronRight,
  Sparkles,
  Gamepad2,
  Terminal,
  Play,
  ArrowRight,
} from 'lucide-react';

export const ProjectsView: React.FC = () => {
  const { language, progress, toggleProjectTask, selectLesson, setActiveTab } = useApp();
  const [selectedProjectId, setSelectedProjectId] = useState<string>(gameProjects[0].id);

  const activeProject = gameProjects.find((p) => p.id === selectedProjectId) || gameProjects[0];
  const userChecklist = progress.projectChecklists[activeProject.id] || [];

  const totalTasks = activeProject.milestones.reduce((acc, m) => acc + m.tasks.length, 0);
  const completedTasks = activeProject.milestones.reduce((acc, m) => {
    return acc + m.tasks.filter((t) => userChecklist.includes(t.id)).length;
  }, 0);
  const percent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div id="projects-view-container" className="mx-auto max-w-5xl py-6 px-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400 mb-1">
            <Layers className="h-4 w-4" />
            <span>Project-Based Learning</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            {language === 'th' ? 'โปรเจกต์สร้างเกมจริง (Real Projects)' : 'Guided Game Studio Projects'}
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            {language === 'th'
              ? 'ลงมือสร้างเกมตั้งแต่ศูนย์ตาม Milestones แบบเดียวกับสตูดิโอเกมมืออาชีพ พร้อม Checklist วัดผล'
              : 'Build production-ready games step-by-step through guided milestones, checklists, and linked lessons.'}
          </p>
        </div>

        <button
          onClick={() => setActiveTab('project-builder')}
          className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2.5 text-xs font-bold text-white transition hover:opacity-90 shadow-lg shadow-purple-900/30"
        >
          <Sparkles className="h-4 w-4" />
          <span>{language === 'th' ? 'สร้าง Roadmap เกมของคุณ' : 'Custom Project Builder'}</span>
        </button>
      </div>

      {/* Project Selector Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {gameProjects.map((project) => {
          const isSelected = project.id === selectedProjectId;
          const pTasks = project.milestones.reduce((acc, m) => acc + m.tasks.length, 0);
          const pDone = project.milestones.reduce((acc, m) => {
            const list = progress.projectChecklists[project.id] || [];
            return acc + m.tasks.filter((t) => list.includes(t.id)).length;
          }, 0);
          const pPct = pTasks > 0 ? Math.round((pDone / pTasks) * 100) : 0;

          return (
            <button
              key={project.id}
              onClick={() => setSelectedProjectId(project.id)}
              className={`rounded-2xl border p-4 text-left transition-all ${
                isSelected
                  ? 'border-purple-500/80 bg-slate-900 shadow-xl shadow-purple-950/40 ring-1 ring-purple-500/40'
                  : 'border-slate-800 bg-slate-950/60 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between text-[11px] mb-2 font-mono">
                <span
                  className={`flex items-center gap-1 rounded px-2 py-0.5 font-bold ${
                    project.engine === 'unity'
                      ? 'bg-red-500/20 text-red-300'
                      : 'bg-blue-500/20 text-blue-300'
                  }`}
                >
                  {project.engine === 'unity' ? <Gamepad2 className="h-3 w-3" /> : <Terminal className="h-3 w-3" />}
                  <span className="capitalize">{project.engine}</span>
                </span>
                <span className="text-slate-400 font-bold">{pPct}%</span>
              </div>

              <h3 className="text-sm font-bold text-white mb-1">
                {project.title[language] || project.title.en}
              </h3>
              <p className="text-[11px] text-slate-400 line-clamp-2 mb-3">
                {project.description[language] || project.description.en}
              </p>

              {/* Progress bar */}
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all"
                  style={{ width: `${Math.max(pPct, 3)}%` }}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Project Details Card */}
      <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/90 shadow-2xl p-6 sm:p-8">
        {/* Banner */}
        <div className={`rounded-2xl bg-gradient-to-r ${activeProject.coverGradient} p-6 mb-6 shadow-inner`}>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="rounded-full bg-black/40 px-3 py-0.5 text-xs font-mono font-bold text-white uppercase backdrop-blur-md">
              {activeProject.difficulty} Level
            </span>
            <span className="flex items-center gap-1 text-xs text-white/90">
              <Clock className="h-3.5 w-3.5" />
              ~{activeProject.estimatedHours} {language === 'th' ? 'ชั่วโมง' : 'Hours'}
            </span>
          </div>
          <h2 className="text-2xl font-black text-white mb-2">
            {activeProject.title[language] || activeProject.title.en}
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed">
            {activeProject.description[language] || activeProject.description.en}
          </p>
        </div>

        {/* Project Flowchart Steps */}
        <div className="mb-8">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
            {language === 'th' ? 'ขั้นตอนการพัฒนา (Production Pipeline)' : 'Production Pipeline Flow:'}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {activeProject.flowchartSteps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-2 text-xs font-medium text-slate-200">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-800 text-[10px] font-mono text-purple-400 font-bold">
                    {idx + 1}
                  </span>
                  <span>{step[language] || step.en}</span>
                </div>
                {idx < activeProject.flowchartSteps.length - 1 && (
                  <ArrowRight className="h-4 w-4 text-slate-700 hidden sm:block" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Checklist Progress Overview */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
          <div>
            <h3 className="text-sm font-bold text-white">
              {language === 'th' ? 'ภารกิจของโปรเจกต์ (Project Milestones)' : 'Project Milestones & Checklist'}
            </h3>
            <p className="text-xs text-slate-400">
              {language === 'th'
                ? `เสร็จสิ้นแล้ว ${completedTasks} จากทั้งหมด ${totalTasks} งาน (${percent}%)`
                : `${completedTasks} of ${totalTasks} tasks completed (${percent}%)`}
            </p>
          </div>
          <span className="text-lg font-mono font-black text-purple-400">{percent}%</span>
        </div>

        {/* Milestones and Task Checkboxes */}
        <div className="space-y-6">
          {activeProject.milestones.map((milestone) => (
            <div
              key={milestone.id}
              className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-bold text-slate-200">
                  {milestone.title[language] || milestone.title.en}
                </h4>
                {milestone.relatedLessonIds && milestone.relatedLessonIds.length > 0 && (
                  <button
                    onClick={() => selectLesson(milestone.relatedLessonIds![0])}
                    className="flex items-center gap-1 text-[11px] font-semibold text-purple-400 hover:text-purple-300"
                  >
                    <span>Read Related Lesson</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>

              <p className="text-xs text-slate-400 mb-4">
                {milestone.description[language] || milestone.description.en}
              </p>

              {/* Tasks */}
              <div className="space-y-2">
                {milestone.tasks.map((task) => {
                  const isDone = userChecklist.includes(task.id);
                  return (
                    <button
                      key={task.id}
                      onClick={() => toggleProjectTask(activeProject.id, task.id)}
                      className={`flex w-full items-start gap-3 rounded-xl border p-3 text-left transition ${
                        isDone
                          ? 'border-emerald-500/40 bg-emerald-950/20 text-slate-300'
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
                      <span className={`text-xs ${isDone ? 'line-through text-slate-500' : 'font-medium'}`}>
                        {task.title[language] || task.title.en}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
