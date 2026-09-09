import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Wrench,
  FileText,
  Calculator,
  Cpu,
  Copy,
  Check,
  RotateCcw,
  Sparkles,
  AlertTriangle,
  Download,
} from 'lucide-react';
import { initialGddData, defaultBalanceValues } from '../../data/toolsData';

export const ToolsView: React.FC = () => {
  const { language } = useApp();
  const [activeSubTab, setActiveSubTab] = useState<'gdd' | 'balance' | 'frame'>('gdd');

  // GDD Form State
  const [gdd, setGdd] = useState(initialGddData);
  const [gddCopied, setGddCopied] = useState(false);

  // Balance Calculator State
  const [balance, setBalance] = useState(defaultBalanceValues);

  // Frame Budget Calculator State
  const [targetFps, setTargetFps] = useState<30 | 60 | 120>(60);
  const [gameLogicMs, setGameLogicMs] = useState(4.2);
  const [physicsMs, setPhysicsMs] = useState(3.1);
  const [renderMs, setRenderMs] = useState(7.5);
  const [audioGcMs, setAudioGcMs] = useState(1.0);

  // GDD Export Markdown
  const generateGddMarkdown = () => {
    return `# GAME DESIGN DOCUMENT: ${gdd.title}
**Genre:** ${gdd.genre} | **Platform:** ${gdd.platform} | **Target Audience:** ${gdd.targetAudience}

## 1. High Concept & Core Loop
${gdd.coreLoop}

## 2. World & Story Narrative
${gdd.story}

## 3. Core Mechanics & Features
${gdd.mechanics}

## 4. Visual Art & Audio Style
${gdd.artStyle}

## 5. Monetization Strategy
${gdd.monetization}
`;
  };

  const copyGdd = () => {
    navigator.clipboard.writeText(generateGddMarkdown());
    setGddCopied(true);
    setTimeout(() => setGddCopied(false), 2000);
  };

  // Balance calculations
  const effectivePlayerHealth = balance.playerHealth / (1 - balance.playerDefense / 100);
  const effectiveEnemyHealth = balance.enemyHealth / (1 - balance.enemyDefense / 100);

  const playerDps = balance.playerDamage * balance.playerAttackSpeed;
  const enemyDps = balance.enemyDamage * balance.enemyAttackSpeed;

  const secondsToDefeatEnemy = Number((effectiveEnemyHealth / Math.max(playerDps, 1)).toFixed(1));
  const secondsToPlayerDeath = Number((effectivePlayerHealth / Math.max(enemyDps, 1)).toFixed(1));
  const hitsToKillEnemy = Math.ceil(effectiveEnemyHealth / Math.max(balance.playerDamage, 1));

  // Frame Budget calculations
  const totalBudgetMs = targetFps === 30 ? 33.3 : targetFps === 60 ? 16.6 : 8.3;
  const currentTotalMs = Number((gameLogicMs + physicsMs + renderMs + audioGcMs).toFixed(1));
  const isBudgetExceeded = currentTotalMs > totalBudgetMs;

  return (
    <div id="tools-view-container" className="mx-auto max-w-5xl py-6 px-4">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">
          <Wrench className="h-4 w-4" />
          <span>Game Studio Utilities</span>
        </div>
        <h1 className="text-2xl font-extrabold text-white">
          {language === 'th' ? 'Game Development Tools: เครื่องมือนักพัฒนาเกม' : 'Game Development Studio Tools'}
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          {language === 'th'
            ? 'เครื่องมือออกแบบเอกสาร GDD, คำนวณความสมดุลการต่อสู้ (Game Balance), และวิเคราะห์งบประมาณเฟรมเรต (FPS Budget)'
            : 'Interactive design document generators, combat balance calculators, and frame budget profilers.'}
        </p>
      </div>

      {/* Sub-tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-3 mb-6">
        <button
          onClick={() => setActiveSubTab('gdd')}
          className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition ${
            activeSubTab === 'gdd'
              ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
              : 'text-slate-400 hover:bg-slate-900 hover:text-white'
          }`}
        >
          <FileText className="h-4 w-4" />
          <span>GDD Generator</span>
        </button>

        <button
          onClick={() => setActiveSubTab('balance')}
          className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition ${
            activeSubTab === 'balance'
              ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
              : 'text-slate-400 hover:bg-slate-900 hover:text-white'
          }`}
        >
          <Calculator className="h-4 w-4" />
          <span>Game Balance Calculator</span>
        </button>

        <button
          onClick={() => setActiveSubTab('frame')}
          className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition ${
            activeSubTab === 'frame'
              ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
              : 'text-slate-400 hover:bg-slate-900 hover:text-white'
          }`}
        >
          <Cpu className="h-4 w-4" />
          <span>Frame Budget / FPS Profiler</span>
        </button>
      </div>

      {/* 1. GDD Generator */}
      {activeSubTab === 'gdd' && (
        <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 sm:p-8 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
            <div>
              <h2 className="text-lg font-bold text-white">
                {language === 'th' ? 'แบบร่างเอกสาร Game Design Document' : 'Game Design Document (GDD) Template'}
              </h2>
              <p className="text-xs text-slate-400">
                Fill in key design pillars, then copy or export clean Markdown for your team.
              </p>
            </div>
            <button
              onClick={copyGdd}
              className="flex items-center gap-1.5 rounded-xl bg-cyan-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-cyan-500 shadow-md shadow-cyan-900/30"
            >
              {gddCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              <span>{gddCopied ? 'Copied Markdown!' : 'Copy GDD Markdown'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="font-bold text-slate-300 block mb-1">Game Title:</label>
              <input
                type="text"
                value={gdd.title}
                onChange={(e) => setGdd({ ...gdd, title: e.target.value })}
                className="w-full rounded-xl border border-slate-800 bg-slate-900 p-2.5 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="font-bold text-slate-300 block mb-1">Genre:</label>
              <input
                type="text"
                value={gdd.genre}
                onChange={(e) => setGdd({ ...gdd, genre: e.target.value })}
                className="w-full rounded-xl border border-slate-800 bg-slate-900 p-2.5 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="font-bold text-slate-300 block mb-1">Core Gameplay Loop:</label>
              <textarea
                rows={2}
                value={gdd.coreLoop}
                onChange={(e) => setGdd({ ...gdd, coreLoop: e.target.value })}
                className="w-full rounded-xl border border-slate-800 bg-slate-900 p-2.5 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="font-bold text-slate-300 block mb-1">Key Mechanics & Controls:</label>
              <textarea
                rows={2}
                value={gdd.mechanics}
                onChange={(e) => setGdd({ ...gdd, mechanics: e.target.value })}
                className="w-full rounded-xl border border-slate-800 bg-slate-900 p-2.5 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="font-bold text-slate-300 block mb-1">Target Audience & Platform:</label>
              <input
                type="text"
                value={gdd.targetAudience}
                onChange={(e) => setGdd({ ...gdd, targetAudience: e.target.value })}
                className="w-full rounded-xl border border-slate-800 bg-slate-900 p-2.5 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="font-bold text-slate-300 block mb-1">Visual Art & Audio Style:</label>
              <input
                type="text"
                value={gdd.artStyle}
                onChange={(e) => setGdd({ ...gdd, artStyle: e.target.value })}
                className="w-full rounded-xl border border-slate-800 bg-slate-900 p-2.5 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>
        </div>
      )}

      {/* 2. Balance Calculator */}
      {activeSubTab === 'balance' && (
        <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 sm:p-8 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
            <div>
              <h2 className="text-lg font-bold text-white">Combat TTK & Balance Simulator</h2>
              <p className="text-xs text-slate-400">
                Adjust attack and armor statistics to calculate Time-to-Kill (TTK) and survivability.
              </p>
            </div>
            <button
              onClick={() => setBalance(defaultBalanceValues)}
              className="flex items-center gap-1 text-xs text-slate-400 hover:text-white"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reset Values</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Player Stats */}
            <div className="rounded-2xl border border-blue-500/30 bg-blue-950/10 p-5 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Player Character Stats
              </h3>
              <div>
                <label className="text-xs text-slate-300 flex justify-between">
                  <span>Base Health:</span> <strong className="font-mono text-white">{balance.playerHealth}</strong>
                </label>
                <input
                  type="range"
                  min="50"
                  max="500"
                  value={balance.playerHealth}
                  onChange={(e) => setBalance({ ...balance, playerHealth: Number(e.target.value) })}
                  className="w-full h-1.5 bg-slate-800 rounded accent-blue-500"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 flex justify-between">
                  <span>Damage Per Hit:</span> <strong className="font-mono text-white">{balance.playerDamage}</strong>
                </label>
                <input
                  type="range"
                  min="5"
                  max="100"
                  value={balance.playerDamage}
                  onChange={(e) => setBalance({ ...balance, playerDamage: Number(e.target.value) })}
                  className="w-full h-1.5 bg-slate-800 rounded accent-blue-500"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 flex justify-between">
                  <span>Defense Armor (%):</span> <strong className="font-mono text-white">{balance.playerDefense}%</strong>
                </label>
                <input
                  type="range"
                  min="0"
                  max="80"
                  value={balance.playerDefense}
                  onChange={(e) => setBalance({ ...balance, playerDefense: Number(e.target.value) })}
                  className="w-full h-1.5 bg-slate-800 rounded accent-blue-500"
                />
              </div>
            </div>

            {/* Enemy Stats */}
            <div className="rounded-2xl border border-rose-500/30 bg-rose-950/10 p-5 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-rose-400">
                Enemy Monster Stats
              </h3>
              <div>
                <label className="text-xs text-slate-300 flex justify-between">
                  <span>Base Health:</span> <strong className="font-mono text-white">{balance.enemyHealth}</strong>
                </label>
                <input
                  type="range"
                  min="50"
                  max="1000"
                  value={balance.enemyHealth}
                  onChange={(e) => setBalance({ ...balance, enemyHealth: Number(e.target.value) })}
                  className="w-full h-1.5 bg-slate-800 rounded accent-rose-500"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 flex justify-between">
                  <span>Damage Per Hit:</span> <strong className="font-mono text-white">{balance.enemyDamage}</strong>
                </label>
                <input
                  type="range"
                  min="5"
                  max="100"
                  value={balance.enemyDamage}
                  onChange={(e) => setBalance({ ...balance, enemyDamage: Number(e.target.value) })}
                  className="w-full h-1.5 bg-slate-800 rounded accent-rose-500"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 flex justify-between">
                  <span>Defense Armor (%):</span> <strong className="font-mono text-white">{balance.enemyDefense}%</strong>
                </label>
                <input
                  type="range"
                  min="0"
                  max="80"
                  value={balance.enemyDefense}
                  onChange={(e) => setBalance({ ...balance, enemyDefense: Number(e.target.value) })}
                  className="w-full h-1.5 bg-slate-800 rounded accent-rose-500"
                />
              </div>
            </div>
          </div>

          {/* Real-Time Outcome Matrix */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Combat Simulation Results:
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-3">
                <div className="text-[10px] text-slate-400 uppercase">Enemy TTK</div>
                <div className="text-xl font-bold font-mono text-emerald-400 mt-1">
                  {secondsToDefeatEnemy}s
                </div>
                <p className="text-[10px] text-slate-500 mt-0.5">Time to kill monster</p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-3">
                <div className="text-[10px] text-slate-400 uppercase">Hits to Defeat</div>
                <div className="text-xl font-bold font-mono text-blue-400 mt-1">
                  {hitsToKillEnemy}
                </div>
                <p className="text-[10px] text-slate-500 mt-0.5">Weapon strikes required</p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-3">
                <div className="text-[10px] text-slate-400 uppercase">Player Survival</div>
                <div className="text-xl font-bold font-mono text-amber-400 mt-1">
                  {secondsToPlayerDeath}s
                </div>
                <p className="text-[10px] text-slate-500 mt-0.5">Without healing potion</p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-3">
                <div className="text-[10px] text-slate-400 uppercase">Combat Dynamic</div>
                <div className="text-xs font-bold text-purple-300 mt-2">
                  {secondsToDefeatEnemy < secondsToPlayerDeath ? 'Player Favored ⚔️' : 'High Threat 💀'}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. Frame Budget / FPS Profiler */}
      {activeSubTab === 'frame' && (
        <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 sm:p-8 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
            <div>
              <h2 className="text-lg font-bold text-white">Frame Budget & Optimization Profiler</h2>
              <p className="text-xs text-slate-400">
                Ensure Game Logic, Physics, and GPU Rendering stay safely below your frame deadline.
              </p>
            </div>

            {/* Target FPS Selector */}
            <div className="flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-900 p-1">
              {[30, 60, 120].map((fps) => (
                <button
                  key={fps}
                  onClick={() => setTargetFps(fps as 30 | 60 | 120)}
                  className={`rounded-lg px-3 py-1 text-xs font-bold transition ${
                    targetFps === fps
                      ? 'bg-emerald-500 text-slate-950'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {fps} FPS
                </button>
              ))}
            </div>
          </div>

          {/* Budget Visualizer Bar */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 mb-6">
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="font-semibold text-slate-300">
                Frame Budget Usage: <strong className="font-mono text-white">{currentTotalMs} ms</strong> / {totalBudgetMs} ms
              </span>
              <span
                className={`font-bold uppercase text-[11px] ${
                  isBudgetExceeded ? 'text-rose-400' : 'text-emerald-400'
                }`}
              >
                {isBudgetExceeded ? '⚠️ Frame Budget Exceeded! Drop Detected' : '✓ 60 FPS Target Stable'}
              </span>
            </div>

            <div className="h-4 w-full overflow-hidden rounded-full bg-slate-800 flex">
              <div
                style={{ width: `${Math.min(100, (gameLogicMs / totalBudgetMs) * 100)}%` }}
                className="bg-blue-500 transition-all"
                title="Scripts & Game Logic"
              />
              <div
                style={{ width: `${Math.min(100, (physicsMs / totalBudgetMs) * 100)}%` }}
                className="bg-amber-500 transition-all"
                title="Physics Simulation"
              />
              <div
                style={{ width: `${Math.min(100, (renderMs / totalBudgetMs) * 100)}%` }}
                className="bg-purple-500 transition-all"
                title="GPU Rendering"
              />
              <div
                style={{ width: `${Math.min(100, (audioGcMs / totalBudgetMs) * 100)}%` }}
                className="bg-cyan-500 transition-all"
                title="Garbage Collection & Audio"
              />
            </div>
          </div>

          {/* Subsystem Sliders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
              <label className="text-slate-300 font-semibold flex justify-between mb-1">
                <span>C# / C++ Script Logic:</span> <span className="font-mono text-blue-400">{gameLogicMs} ms</span>
              </label>
              <input
                type="range"
                min="0.5"
                max="15.0"
                step="0.1"
                value={gameLogicMs}
                onChange={(e) => setGameLogicMs(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded accent-blue-500"
              />
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
              <label className="text-slate-300 font-semibold flex justify-between mb-1">
                <span>PhysX / Chaos Physics:</span> <span className="font-mono text-amber-400">{physicsMs} ms</span>
              </label>
              <input
                type="range"
                min="0.5"
                max="15.0"
                step="0.1"
                value={physicsMs}
                onChange={(e) => setPhysicsMs(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded accent-amber-500"
              />
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
              <label className="text-slate-300 font-semibold flex justify-between mb-1">
                <span>GPU Render DrawCalls:</span> <span className="font-mono text-purple-400">{renderMs} ms</span>
              </label>
              <input
                type="range"
                min="1.0"
                max="25.0"
                step="0.1"
                value={renderMs}
                onChange={(e) => setRenderMs(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded accent-purple-500"
              />
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
              <label className="text-slate-300 font-semibold flex justify-between mb-1">
                <span>Garbage Collection & Audio:</span> <span className="font-mono text-cyan-400">{audioGcMs} ms</span>
              </label>
              <input
                type="range"
                min="0.1"
                max="8.0"
                step="0.1"
                value={audioGcMs}
                onChange={(e) => setAudioGcMs(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded accent-cyan-500"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
