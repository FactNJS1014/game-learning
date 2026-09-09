import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Sparkles, Gamepad2, Terminal, ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react';
import { EngineType } from '../../types';

export const ProjectBuilder: React.FC = () => {
  const { language, selectLesson } = useApp();

  const [engine, setEngine] = useState<EngineType>('unity');
  const [gameType, setGameType] = useState('3D Adventure');
  const [genre, setGenre] = useState('Fantasy Action');
  const [playerType, setPlayerType] = useState('Sword Knight');
  const [enemyType, setEnemyType] = useState('Patrol Monsters & Dungeon Boss');
  const [environment, setEnvironment] = useState('Mystic Forest & Ancient Ruins');
  const [generated, setGenerated] = useState(true);

  const roadmapSteps = [
    { step: 1, title: 'Project Initialization & Engine Settings', lessonId: engine === 'unity' ? 'unity-zero-001' : 'unreal-zero-001', desc: `Configure ${engine.toUpperCase()} 3D scene, rendering pipeline, and asset folder hierarchy.` },
    { step: 2, title: `Player Avatar & Rig (${playerType})`, lessonId: engine === 'unity' ? 'unity-zero-002' : 'unreal-zero-001', desc: 'Import 3D character mesh, configure Capsule Collider and coordinate pivots.' },
    { step: 3, title: 'Responsive 8-Direction Movement & Jump', lessonId: engine === 'unity' ? 'unity-zero-004' : 'unreal-zero-002', desc: 'Program WASD smooth acceleration, ground check raycast, and sprint mechanics.' },
    { step: 4, title: 'Third-Person Orbit Camera', lessonId: engine === 'unity' ? 'unity-zero-002' : 'unreal-zero-001', desc: 'Set up 360-degree camera follow rig that aligns character forward rotation.' },
    { step: 5, title: `World Environment Construction (${environment})`, lessonId: engine === 'unity' ? 'unity-zero-002' : 'unreal-zero-001', desc: 'Sculpt landscape terrain, paint grass textures, and set directional sun lighting.' },
    { step: 6, title: `Enemy AI State Machine (${enemyType})`, lessonId: engine === 'unity' ? 'unity-zero-003' : 'unreal-zero-002', desc: 'Build Patrol, Chase, and Attack states using NavMesh navigation and triggers.' },
    { step: 7, title: 'Hitboxes, Health & Combat Feedback', lessonId: engine === 'unity' ? 'unity-zero-003' : 'unreal-zero-002', desc: 'Calculate weapon damage reduction, flash red damage overlays, and handle death.' },
    { step: 8, title: 'HUD Canvas & Game Over Logic', lessonId: engine === 'unity' ? 'unity-zero-001' : 'unreal-zero-002', desc: 'Create dynamic health bars, coin score counter, and pause menu UI.' },
    { step: 9, title: 'Final Testing, Optimization & Standalone Build', lessonId: engine === 'unity' ? 'unity-zero-001' : 'unreal-zero-001', desc: 'Profile draw calls, package final release build as playable PC executable.' },
  ];

  return (
    <div id="project-builder-container" className="mx-auto max-w-5xl py-6 px-4">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
          <Sparkles className="h-4 w-4" />
          <span>Interactive Curriculum Generator</span>
        </div>
        <h1 className="text-2xl font-extrabold text-white">
          {language === 'th' ? 'Game Project Builder: สร้าง Roadmap โปรเจกต์ในฝัน' : 'Game Project Roadmap Builder'}
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          {language === 'th'
            ? 'เลือกสไตล์เกมและองค์ประกอบที่คุณต้องการสร้าง ระบบจะสร้าง Roadmap ทีละขั้นตอนพร้อมเชื่อมโยงบทเรียนให้คุณทันที'
            : 'Configure your custom game vision to generate a personalized studio roadmap with linked lessons.'}
        </p>
      </div>

      {/* Configuration Form Card */}
      <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 shadow-xl mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {/* Engine Choice */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2">
              1. Target Engine:
            </label>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setEngine('unity')}
                className={`flex-1 flex items-center justify-center gap-1.5 rounded-xl border p-2.5 text-xs font-bold transition ${
                  engine === 'unity'
                    ? 'border-red-500 bg-red-600/20 text-red-300'
                    : 'border-slate-800 bg-slate-900 text-slate-400'
                }`}
              >
                <Gamepad2 className="h-4 w-4 text-red-500" />
                <span>Unity</span>
              </button>
              <button
                type="button"
                onClick={() => setEngine('unreal')}
                className={`flex-1 flex items-center justify-center gap-1.5 rounded-xl border p-2.5 text-xs font-bold transition ${
                  engine === 'unreal'
                    ? 'border-blue-500 bg-blue-600/20 text-blue-300'
                    : 'border-slate-800 bg-slate-900 text-slate-400'
                }`}
              >
                <Terminal className="h-4 w-4 text-blue-400" />
                <span>Unreal Engine</span>
              </button>
            </div>
          </div>

          {/* Game Type */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2">
              2. Game Type:
            </label>
            <select
              value={gameType}
              onChange={(e) => setGameType(e.target.value)}
              className="w-full rounded-xl border border-slate-800 bg-slate-900 p-2.5 text-xs text-white focus:border-amber-500 focus:outline-none"
            >
              <option value="3D Adventure">3D Action Adventure</option>
              <option value="2D Platformer">2D Retro Platformer</option>
              <option value="Top-Down Shooter">Top-Down Arena Shooter</option>
              <option value="Souls-like">Souls-like Combat Prototype</option>
              <option value="First-Person Exploration">First-Person Mystery</option>
            </select>
          </div>

          {/* Genre */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2">
              3. Genre & Theme:
            </label>
            <select
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="w-full rounded-xl border border-slate-800 bg-slate-900 p-2.5 text-xs text-white focus:border-amber-500 focus:outline-none"
            >
              <option value="Fantasy Action">High Fantasy & Sorcery</option>
              <option value="Cyberpunk Sci-Fi">Cyberpunk & Neon Dystopia</option>
              <option value="Grimdark Gothic">Grimdark Gothic Horror</option>
              <option value="Post-Apocalyptic">Post-Apocalyptic Survival</option>
            </select>
          </div>

          {/* Player Archetype */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2">
              4. Player Avatar:
            </label>
            <input
              type="text"
              value={playerType}
              onChange={(e) => setPlayerType(e.target.value)}
              className="w-full rounded-xl border border-slate-800 bg-slate-900 p-2.5 text-xs text-white focus:border-amber-500 focus:outline-none"
            />
          </div>

          {/* Enemy Archetype */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2">
              5. Hostile Enemies:
            </label>
            <input
              type="text"
              value={enemyType}
              onChange={(e) => setEnemyType(e.target.value)}
              className="w-full rounded-xl border border-slate-800 bg-slate-900 p-2.5 text-xs text-white focus:border-amber-500 focus:outline-none"
            />
          </div>

          {/* Environment */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2">
              6. World Environment:
            </label>
            <input
              type="text"
              value={environment}
              onChange={(e) => setEnvironment(e.target.value)}
              className="w-full rounded-xl border border-slate-800 bg-slate-900 p-2.5 text-xs text-white focus:border-amber-500 focus:outline-none"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={() => setGenerated(true)}
          className="flex items-center justify-center gap-2 w-full rounded-xl bg-amber-500 py-3 text-xs font-bold text-slate-950 transition hover:bg-amber-400 shadow-md shadow-amber-500/20"
        >
          <Sparkles className="h-4 w-4" />
          <span>{language === 'th' ? 'สร้าง Roadmap การพัฒนา' : 'Generate Project Roadmap'}</span>
        </button>
      </div>

      {/* Generated Roadmap Display */}
      {generated && (
        <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 sm:p-8 shadow-2xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
            <div>
              <span className="text-[11px] font-mono uppercase text-amber-400 font-bold">
                Project Blueprint Generated
              </span>
              <h2 className="text-xl font-extrabold text-white">
                {gameType} — "{genre}" ({engine.toUpperCase()})
              </h2>
            </div>
            <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-mono text-slate-300">
              9 Milestones
            </span>
          </div>

          <div className="space-y-4">
            {roadmapSteps.map((m) => (
              <div
                key={m.step}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl border border-slate-800/80 bg-slate-900/40 p-4 transition hover:border-slate-700"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-xs font-bold font-mono text-amber-400">
                    {m.step}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-0.5">{m.title}</h3>
                    <p className="text-xs text-slate-400">{m.desc}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => selectLesson(m.lessonId)}
                  className="flex items-center gap-1.5 shrink-0 rounded-lg border border-slate-700 bg-slate-800/80 px-3 py-1.5 text-xs font-semibold text-slate-200 transition hover:bg-slate-700 hover:text-white"
                >
                  <BookOpen className="h-3.5 w-3.5 text-amber-400" />
                  <span>Learn in Lesson</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
