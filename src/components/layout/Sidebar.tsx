import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ActiveTab, EngineType } from '../../types';
import {
  LayoutDashboard,
  GraduationCap,
  Sparkles,
  Gamepad2,
  Terminal,
  Layers,
  Wrench,
  Code2,
  GitBranch,
  Scale,
  Award,
  Bookmark,
  BookOpen,
  Settings,
  ChevronDown,
  ChevronRight,
  Flame,
  CheckCircle2,
} from 'lucide-react';
import { allLessons } from '../../data/curriculumIndex';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const {
    activeTab,
    setActiveTab,
    language,
    progress,
    setFilterEngine,
  } = useApp();

  const [learningExpanded, setLearningExpanded] = useState(true);
  const [unityExpanded, setUnityExpanded] = useState(true);
  const [unrealExpanded, setUnrealExpanded] = useState(true);

  const unityTotal = allLessons.filter((l) => l.engine === 'unity').length;
  const unityDone = progress.completedLessonIds.filter((id) => id.startsWith('unity-')).length;
  const unityPercent = unityTotal > 0 ? Math.round((unityDone / unityTotal) * 100) : 0;

  const unrealTotal = allLessons.filter((l) => l.engine === 'unreal').length;
  const unrealDone = progress.completedLessonIds.filter((id) => id.startsWith('unreal-')).length;
  const unrealPercent = unrealTotal > 0 ? Math.round((unrealDone / unrealTotal) * 100) : 0;

  const navigateTo = (tab: ActiveTab, engine?: EngineType) => {
    if (engine) setFilterEngine(engine);
    setActiveTab(tab);
    onClose();
  };

  const navItemClass = (current: boolean) =>
    `group flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium transition ${
      current
        ? 'bg-red-600/15 text-red-400 border border-red-500/20 font-semibold dark:text-red-400'
        : 'text-slate-400 hover:bg-slate-900/80 hover:text-slate-200'
    }`;

  return (
    <>
      {/* Mobile Backdrop overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
        />
      )}

      <aside
        id="main-sidebar"
        className={`fixed top-0 bottom-0 left-0 z-50 flex w-64 flex-col border-r border-slate-800/80 bg-slate-950/95 transition-transform duration-300 md:static md:translate-x-0 dark:border-slate-800/80 dark:bg-slate-950/95 light:border-slate-200 light:bg-slate-900 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand Header */}
        <div className="flex h-16 items-center justify-between border-b border-slate-800/80 px-4">
          <button
            onClick={() => navigateTo('home')}
            className="flex items-center gap-2.5 text-left group"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-rose-700 shadow-md shadow-red-900/30 text-white">
              <Gamepad2 className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold tracking-tight text-white group-hover:text-red-400 transition">
                  GameDev Academy
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-mono tracking-wider uppercase">
                Zero to Advanced
              </p>
            </div>
          </button>
        </div>

        {/* Scrollable Navigation Menu */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-5 custom-scrollbar">
          {/* Main Hub */}
          <div>
            <div className="px-2 mb-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              {language === 'th' ? 'หน้าหลัก' : 'Platform'}
            </div>
            <div className="space-y-1">
              <button
                id="nav-home-btn"
                onClick={() => navigateTo('home')}
                className={navItemClass(activeTab === 'home')}
              >
                <Sparkles className="h-4 w-4 text-slate-400 group-hover:text-amber-400" />
                <span>{language === 'th' ? 'หน้าแรก' : 'Academy Home'}</span>
              </button>
              <button
                id="nav-dashboard-btn"
                onClick={() => navigateTo('dashboard')}
                className={navItemClass(activeTab === 'dashboard')}
              >
                <LayoutDashboard className="h-4 w-4 text-slate-400 group-hover:text-red-400" />
                <span>{language === 'th' ? 'แดชบอร์ดการเรียน' : 'Dashboard'}</span>
              </button>
            </div>
          </div>

          {/* Learning Section with Hierarchy */}
          <div>
            <div className="flex items-center justify-between px-2 mb-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              <span>{language === 'th' ? 'หลักสูตร' : 'Learning Tracks'}</span>
              <button
                onClick={() => setLearningExpanded(!learningExpanded)}
                className="text-slate-400 hover:text-white"
              >
                {learningExpanded ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
              </button>
            </div>

            {learningExpanded && (
              <div className="space-y-1">
                {/* Start From Zero Special Track */}
                <button
                  id="nav-start-zero-btn"
                  onClick={() => {
                    setFilterEngine('all');
                    navigateTo('learning');
                  }}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs font-semibold transition ${
                    activeTab === 'learning'
                      ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                      : 'text-amber-400/90 hover:bg-amber-500/10'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
                    <span>{language === 'th' ? 'เริ่มจาก 0 (Zero Track)' : 'Start From Zero'}</span>
                  </div>
                  <span className="rounded bg-amber-500/20 px-1.5 py-0.5 text-[9px] font-mono font-bold text-amber-300">
                    ZERO
                  </span>
                </button>

                {/* Unity Submenu */}
                <div className="pt-1">
                  <div className="flex items-center justify-between rounded-md px-2 py-1 text-xs text-slate-300 hover:bg-slate-900/50">
                    <button
                      onClick={() => navigateTo('unity', 'unity')}
                      className="flex items-center gap-2 font-semibold text-slate-200 hover:text-red-400"
                    >
                      <span className="h-2 w-2 rounded-full bg-red-500"></span>
                      <span>Unity</span>
                    </button>
                    <button onClick={() => setUnityExpanded(!unityExpanded)} className="text-slate-400">
                      {unityExpanded ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
                    </button>
                  </div>

                  {unityExpanded && (
                    <div className="ml-3 mt-1 border-l border-slate-800 pl-3 space-y-0.5">
                      <button
                        onClick={() => navigateTo('unity', 'unity')}
                        className="flex w-full items-center justify-between py-1 text-[11px] text-slate-400 hover:text-red-400"
                      >
                        <span>0 — Absolute Beginner</span>
                        <span className="text-[10px] text-slate-400">15</span>
                      </button>
                      <button
                        onClick={() => navigateTo('unity', 'unity')}
                        className="flex w-full items-center justify-between py-1 text-[11px] text-slate-400 hover:text-red-400"
                      >
                        <span>Basic (C# & 2D/3D)</span>
                        <span className="text-[10px] text-slate-400">20</span>
                      </button>
                      <button
                        onClick={() => navigateTo('unity', 'unity')}
                        className="flex w-full items-center justify-between py-1 text-[11px] text-slate-400 hover:text-red-400"
                      >
                        <span>Intermediate Systems</span>
                        <span className="text-[10px] text-slate-400">20</span>
                      </button>
                      <button
                        onClick={() => navigateTo('unity', 'unity')}
                        className="flex w-full items-center justify-between py-1 text-[11px] text-slate-400 hover:text-red-400"
                      >
                        <span>Advanced Architecture</span>
                        <span className="text-[10px] text-slate-400">20</span>
                      </button>
                    </div>
                  )}
                </div>

                {/* Unreal Engine Submenu */}
                <div className="pt-1">
                  <div className="flex items-center justify-between rounded-md px-2 py-1 text-xs text-slate-300 hover:bg-slate-900/50">
                    <button
                      onClick={() => navigateTo('unreal', 'unreal')}
                      className="flex items-center gap-2 font-semibold text-slate-200 hover:text-blue-400"
                    >
                      <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                      <span>Unreal Engine</span>
                    </button>
                    <button onClick={() => setUnrealExpanded(!unrealExpanded)} className="text-slate-400">
                      {unrealExpanded ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
                    </button>
                  </div>

                  {unrealExpanded && (
                    <div className="ml-3 mt-1 border-l border-slate-800 pl-3 space-y-0.5">
                      <button
                        onClick={() => navigateTo('unreal', 'unreal')}
                        className="flex w-full items-center justify-between py-1 text-[11px] text-slate-400 hover:text-blue-400"
                      >
                        <span>0 — Absolute Beginner</span>
                        <span className="text-[10px] text-slate-400">15</span>
                      </button>
                      <button
                        onClick={() => navigateTo('unreal', 'unreal')}
                        className="flex w-full items-center justify-between py-1 text-[11px] text-slate-400 hover:text-blue-400"
                      >
                        <span>Basic (Blueprint)</span>
                        <span className="text-[10px] text-slate-400">20</span>
                      </button>
                      <button
                        onClick={() => navigateTo('unreal', 'unreal')}
                        className="flex w-full items-center justify-between py-1 text-[11px] text-slate-400 hover:text-blue-400"
                      >
                        <span>Intermediate & C++</span>
                        <span className="text-[10px] text-slate-400">20</span>
                      </button>
                      <button
                        onClick={() => navigateTo('unreal', 'unreal')}
                        className="flex w-full items-center justify-between py-1 text-[11px] text-slate-400 hover:text-blue-400"
                      >
                        <span>Advanced & Nanite</span>
                        <span className="text-[10px] text-slate-400">20</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Interactive Tools & Projects */}
          <div>
            <div className="px-2 mb-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              {language === 'th' ? 'เครื่องมือและโปรเจกต์' : 'Practice & Projects'}
            </div>
            <div className="space-y-1">
              <button
                id="nav-projects-btn"
                onClick={() => navigateTo('projects')}
                className={navItemClass(activeTab === 'projects')}
              >
                <Layers className="h-4 w-4 text-slate-400 group-hover:text-purple-400" />
                <span>{language === 'th' ? 'โปรเจกต์สร้างเกมจริง' : 'Game Projects'}</span>
              </button>
              <button
                id="nav-project-builder-btn"
                onClick={() => navigateTo('project-builder')}
                className={navItemClass(activeTab === 'project-builder')}
              >
                <Sparkles className="h-4 w-4 text-slate-400 group-hover:text-amber-400" />
                <span>{language === 'th' ? 'ตัวสร้าง Roadmap เกม' : 'Project Builder'}</span>
              </button>
              <button
                id="nav-tools-btn"
                onClick={() => navigateTo('tools')}
                className={navItemClass(activeTab === 'tools')}
              >
                <Wrench className="h-4 w-4 text-slate-400 group-hover:text-cyan-400" />
                <span>{language === 'th' ? 'Game Dev Tools' : 'Game Dev Tools'}</span>
              </button>
              <button
                id="nav-playground-btn"
                onClick={() => navigateTo('playground')}
                className={navItemClass(activeTab === 'playground')}
              >
                <Code2 className="h-4 w-4 text-slate-400 group-hover:text-emerald-400" />
                <span>{language === 'th' ? 'Code Playground' : 'Code Playground'}</span>
              </button>
              <button
                id="nav-blueprint-sim-btn"
                onClick={() => navigateTo('blueprint-sim')}
                className={navItemClass(activeTab === 'blueprint-sim')}
              >
                <GitBranch className="h-4 w-4 text-slate-400 group-hover:text-blue-400" />
                <span>{language === 'th' ? 'Blueprint Simulator' : 'Blueprint Simulator'}</span>
              </button>
              <button
                id="nav-comparison-btn"
                onClick={() => navigateTo('comparison')}
                className={navItemClass(activeTab === 'comparison')}
              >
                <Scale className="h-4 w-4 text-slate-400 group-hover:text-rose-400" />
                <span>{language === 'th' ? 'Unity vs Unreal' : 'Unity vs Unreal'}</span>
              </button>
            </div>
          </div>

          {/* User Personal Storage */}
          <div>
            <div className="px-2 mb-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              {language === 'th' ? 'ข้อมูลส่วนตัว' : 'Personal Hub'}
            </div>
            <div className="space-y-1">
              <button
                id="nav-progress-btn"
                onClick={() => navigateTo('progress')}
                className={navItemClass(activeTab === 'progress')}
              >
                <Award className="h-4 w-4 text-slate-400 group-hover:text-amber-400" />
                <span>{language === 'th' ? 'ความคืบหน้า & ถ้วยรางวัล' : 'Progress & Trophies'}</span>
              </button>
              <button
                id="nav-bookmarks-btn"
                onClick={() => navigateTo('bookmarks')}
                className={navItemClass(activeTab === 'bookmarks')}
              >
                <Bookmark className="h-4 w-4 text-slate-400 group-hover:text-indigo-400" />
                <span>{language === 'th' ? 'บุ๊กมาร์กของฉัน' : 'Bookmarks'}</span>
              </button>
              <button
                id="nav-notes-btn"
                onClick={() => navigateTo('notes')}
                className={navItemClass(activeTab === 'notes')}
              >
                <BookOpen className="h-4 w-4 text-slate-400 group-hover:text-emerald-400" />
                <span>{language === 'th' ? 'สมุดโน้ตส่วนตัว' : 'My Notes'}</span>
              </button>
              <button
                id="nav-settings-btn"
                onClick={() => navigateTo('settings')}
                className={navItemClass(activeTab === 'settings')}
              >
                <Settings className="h-4 w-4 text-slate-400 group-hover:text-white" />
                <span>{language === 'th' ? 'การตั้งค่า' : 'Settings'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Engine Progress Mini Widgets */}
        <div className="border-t border-slate-800/80 bg-slate-900/60 p-3 space-y-2.5">
          {/* Unity Progress */}
          <div>
            <div className="flex items-center justify-between text-[11px] mb-1 font-mono">
              <span className="text-red-400 font-semibold flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500"></span> Unity
              </span>
              <span className="text-slate-400">{unityPercent}%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full bg-red-500 rounded-full transition-all duration-500"
                style={{ width: `${Math.max(unityPercent, 4)}%` }}
              />
            </div>
          </div>

          {/* Unreal Progress */}
          <div>
            <div className="flex items-center justify-between text-[11px] mb-1 font-mono">
              <span className="text-blue-400 font-semibold flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span> Unreal
              </span>
              <span className="text-slate-400">{unrealPercent}%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full bg-blue-500 rounded-full transition-all duration-500"
                style={{ width: `${Math.max(unrealPercent, 4)}%` }}
              />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
