import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Sparkles,
  Gamepad2,
  Terminal,
  Layers,
  Wrench,
  Code2,
  GitBranch,
  Scale,
  Award,
  ArrowRight,
  CheckCircle2,
  Flame,
  BookOpen,
  ChevronRight,
} from 'lucide-react';
import { allLessons } from '../data/curriculumIndex';
import { gameProjects } from '../data/projectsData';

export const HomeView: React.FC = () => {
  const { language, setActiveTab, setFilterEngine, selectLesson, progress } = useApp();

  const totalLessons = allLessons.length;
  const completedCount = progress.completedLessonIds.length;
  const percent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  return (
    <div id="home-view-container" className="mx-auto max-w-5xl py-8 px-4 sm:px-6 space-y-12">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-8 sm:p-12 shadow-2xl">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 h-96 w-96 rounded-full bg-red-600/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-8 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/15 px-3.5 py-1 text-xs font-bold text-amber-300 uppercase tracking-wider mb-4">
            <Sparkles className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
            <span>START FROM ZERO TO ADVANCED</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight mb-4">
            Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-400">Unity</span> &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">Unreal Engine</span>
          </h1>

          <p className="text-sm sm:text-base leading-relaxed text-slate-300 max-w-2xl mb-8">
            {language === 'th'
              ? 'แพลตฟอร์มการเรียนรู้พัฒนาเกมครบวงจร ออกแบบเพื่อผู้เริ่มต้นโดยเฉพาะ ตั้งแต่สร้างวัตถุชิ้นแรก เขียนสคริปต์ C# ต่อโน้ต Blueprint ไปจนถึงสถาปัตยกรรมระดับโปร'
              : 'The complete interactive academy for aspiring game developers. Clear, structured roadmaps from Absolute Beginner to Advanced studio pipelines.'}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                selectLesson('unity-zero-001');
                setActiveTab('learning');
              }}
              className="flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-xs sm:text-sm font-bold text-white transition hover:bg-red-500 shadow-xl shadow-red-950/50"
            >
              <Sparkles className="h-4 w-4" />
              <span>{language === 'th' ? 'เริ่มเรียนจากศูนย์ทันที (Lesson 01)' : 'Start From Zero (Lesson 01)'}</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              onClick={() => setActiveTab('comparison')}
              className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-5 py-3 text-xs sm:text-sm font-semibold text-slate-200 transition hover:bg-slate-700 hover:text-white"
            >
              <Scale className="h-4 w-4 text-rose-400" />
              <span>{language === 'th' ? 'เลือก Unity หรือ Unreal ดี?' : 'Unity vs Unreal Guide'}</span>
            </button>
          </div>
        </div>

        {/* Quick stats ribbon */}
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 mt-8 border-t border-slate-800/80">
          <div>
            <div className="text-xl sm:text-2xl font-black font-mono text-white">40+</div>
            <div className="text-xs text-slate-400">Curated Lessons</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black font-mono text-emerald-400">100%</div>
            <div className="text-xs text-slate-400">Zero-Barrier Friendly</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black font-mono text-blue-400">Interactive</div>
            <div className="text-xs text-slate-400">Simulators & Playground</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black font-mono text-purple-400">3 Studio</div>
            <div className="text-xs text-slate-400">Real Game Projects</div>
          </div>
        </div>
      </div>

      {/* Primary Tracks Bento Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-white">
              {language === 'th' ? 'เลือกเส้นทางการเรียนรู้ (Learning Tracks)' : 'Choose Your Learning Track'}
            </h2>
            <p className="text-xs text-slate-400">
              {language === 'th' ? 'เลือก Engine หรือเรียนรู้ควบคู่กันทั้งสองด้าน' : 'Master one engine or cross-skill both for maximum industry versatility.'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Unity Track Card */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-6 sm:p-7 transition hover:border-red-500/50 hover:shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600/20 text-red-400 border border-red-500/30">
                <Gamepad2 className="h-6 w-6" />
              </div>
              <span className="rounded-full bg-red-500/10 border border-red-500/20 px-3 py-1 text-xs font-mono font-bold text-red-300">
                C# & Universal 3D/2D
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition">
              Unity Engine Track
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
              {language === 'th'
                ? 'เรียนรู้การเขียน C#, ฟิสิกส์ Rigidbody, ระบบ Prefabs, UI Canvas, แอนิเมชัน, และการ Optimize เกมให้รันลื่นบนทุกอุปกรณ์'
                : 'Master C# scripting, Transform coordinates, Rigidbody physics, Prefab systems, and cross-platform publishing.'}
            </p>

            <div className="space-y-2 mb-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-red-400" />
                <span>Zero Track: Interface, GameObjects & Components</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-red-400" />
                <span>Basic to Advanced: C# Architecture, Shaders & Profiling</span>
              </div>
            </div>

            <button
              onClick={() => {
                setFilterEngine('unity');
                setActiveTab('unity');
              }}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 border border-slate-800 py-3 text-xs font-bold text-white transition group-hover:bg-red-600 group-hover:border-red-500 shadow-md"
            >
              <span>Explore Unity Curriculum</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Unreal Engine Track Card */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-6 sm:p-7 transition hover:border-blue-500/50 hover:shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                <Terminal className="h-6 w-6" />
              </div>
              <span className="rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-xs font-mono font-bold text-blue-300">
                Blueprints & C++ Next-Gen
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition">
              Unreal Engine 5 Track
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
              {language === 'th'
                ? 'ก้าวสู่การสร้างเกมระดับ AAA ด้วยระบบ Visual Scripting (Blueprint), แสง Lumen แบบเรียลไทม์, เรขาคณิต Nanite, และ C++ ขั้นสูง'
                : 'Dive into next-gen game development with Blueprint visual scripting, Nanite geometry, Lumen dynamic lighting, and C++.'}
            </p>

            <div className="space-y-2 mb-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-400" />
                <span>Zero Track: Viewport navigation, Actors & Blueprints</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-400" />
                <span>Advanced: Enhanced Input, Chaos Physics, C++ Classes</span>
              </div>
            </div>

            <button
              onClick={() => {
                setFilterEngine('unreal');
                setActiveTab('unreal');
              }}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 border border-slate-800 py-3 text-xs font-bold text-white transition group-hover:bg-blue-600 group-hover:border-blue-500 shadow-md"
            >
              <span>Explore Unreal Curriculum</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Tool Highlights */}
      <div>
        <h2 className="text-lg font-bold text-white mb-4">
          {language === 'th' ? 'พื้นที่ฝึกซ้อมและเครื่องมือปฏิบัติการ' : 'Interactive Labs & Simulators'}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button
            onClick={() => setActiveTab('playground')}
            className="flex flex-col items-start rounded-2xl border border-slate-800 bg-slate-950/80 p-5 text-left transition hover:border-emerald-500/50 hover:bg-slate-900"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 mb-3">
              <Code2 className="h-5 w-5" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">Code Playground</h4>
            <p className="text-xs text-slate-400">
              {language === 'th' ? 'ทดลองเขียน C# และ C++ พร้อมรันใน Console จำลอง' : 'Experiment with editable C# and C++ gameplay scripts.'}
            </p>
          </button>

          <button
            onClick={() => setActiveTab('blueprint-sim')}
            className="flex flex-col items-start rounded-2xl border border-slate-800 bg-slate-950/80 p-5 text-left transition hover:border-blue-500/50 hover:bg-slate-900"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400 mb-3">
              <GitBranch className="h-5 w-5" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">Blueprint Simulator</h4>
            <p className="text-xs text-slate-400">
              {language === 'th' ? 'จำลองการยิงสัญญาณ Pulse ของโหนด Blueprint ใน Unreal' : 'Trace execution wires and node branches interactively.'}
            </p>
          </button>

          <button
            onClick={() => setActiveTab('tools')}
            className="flex flex-col items-start rounded-2xl border border-slate-800 bg-slate-950/80 p-5 text-left transition hover:border-cyan-500/50 hover:bg-slate-900"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400 mb-3">
              <Wrench className="h-5 w-5" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">Game Dev Tools</h4>
            <p className="text-xs text-slate-400">
              {language === 'th' ? 'GDD Generator, ตัวคำนวณสมดุล และงบประมาณ FPS' : 'GDD drafting, TTK balance calculators, and FPS profilers.'}
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};
