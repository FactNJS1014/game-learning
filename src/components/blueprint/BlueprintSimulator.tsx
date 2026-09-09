import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { GitBranch, Play, RotateCcw, Zap, Sparkles, Plus, Trash2, ArrowRight } from 'lucide-react';

interface BlueprintNodeState {
  id: string;
  type: 'event' | 'branch' | 'variable' | 'print';
  title: string;
  color: string;
  pins: { in?: string[]; out?: string[] };
  value?: string | number | boolean;
}

export const BlueprintSimulator: React.FC = () => {
  const { language } = useApp();
  const [playerHealth, setPlayerHealth] = useState(75);
  const [incomingDamage, setIncomingDamage] = useState(25);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [simulationLogs, setSimulationLogs] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runSimulation = () => {
    setIsRunning(true);
    setSimulationLogs([]);
    setActiveStep(0);

    // Step 0: Event OnHit
    setSimulationLogs(['[Event OnHit] Fired! Enemy dealt ' + incomingDamage + ' damage.']);

    // Step 1: Set Health
    setTimeout(() => {
      setActiveStep(1);
      const newHealth = Math.max(0, playerHealth - incomingDamage);
      setPlayerHealth(newHealth);
      setSimulationLogs((prev) => [
        ...prev,
        `[Set Health] Subtracted damage. New Health = ${newHealth}`,
      ]);

      // Step 2: Branch Condition
      setTimeout(() => {
        setActiveStep(2);
        const isDead = newHealth <= 0;
        setSimulationLogs((prev) => [
          ...prev,
          `[Branch Condition] Is Health <= 0? Result = ${isDead ? 'TRUE' : 'FALSE'}`,
        ]);

        // Step 3: Branch Action
        setTimeout(() => {
          setActiveStep(3);
          if (isDead) {
            setSimulationLogs((prev) => [
              ...prev,
              '[Print String] 💀 "PLAYER HAS DIED! Triggering Game Over screen."',
            ]);
          } else {
            setSimulationLogs((prev) => [
              ...prev,
              `[Print String] 🛡️ "Player survived with ${newHealth} HP! Playing pain grunt sound."`,
            ]);
          }
          setIsRunning(false);
        }, 800);
      }, 800);
    }, 800);
  };

  const handleReset = () => {
    setPlayerHealth(75);
    setIncomingDamage(25);
    setActiveStep(null);
    setSimulationLogs([]);
  };

  return (
    <div id="blueprint-sim-container" className="mx-auto max-w-5xl py-6 px-4">
      {/* Title */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">
          <GitBranch className="h-4 w-4" />
          <span>Unreal Engine Visual Scripting</span>
        </div>
        <h1 className="text-2xl font-extrabold text-white">
          {language === 'th' ? 'Visual Blueprint Simulator' : 'Visual Blueprint Node Simulator'}
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          {language === 'th'
            ? 'จำลองการทำงานของโหนดใน Unreal Engine Blueprint: สังเกตเส้นสัญญาณ White Wire และการส่งผ่านข้อมูลตัวแปรแบบเรียลไทม์'
            : 'Interactive visual node simulation: Trace execution pulses through Event Graphs, variables, and branch conditions.'}
        </p>
      </div>

      {/* Control Bar */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
        <div className="flex flex-wrap items-center gap-4">
          <div>
            <label className="text-[11px] font-semibold text-slate-400 block mb-1">
              {language === 'th' ? 'พลังชีวิตเริ่มต้น (Health):' : 'Initial Health:'} {playerHealth}
            </label>
            <input
              type="range"
              min="10"
              max="100"
              value={playerHealth}
              onChange={(e) => setPlayerHealth(Number(e.target.value))}
              disabled={isRunning}
              className="h-1.5 w-32 rounded-lg bg-slate-800 accent-emerald-500"
            />
          </div>

          <div>
            <label className="text-[11px] font-semibold text-slate-400 block mb-1">
              {language === 'th' ? 'ความเสียหายที่ได้รับ (Damage):' : 'Incoming Damage:'} {incomingDamage}
            </label>
            <input
              type="range"
              min="10"
              max="100"
              value={incomingDamage}
              onChange={(e) => setIncomingDamage(Number(e.target.value))}
              disabled={isRunning}
              className="h-1.5 w-32 rounded-lg bg-slate-800 accent-rose-500"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            disabled={isRunning}
            className="flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800 px-3.5 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-700"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Reset</span>
          </button>
          <button
            onClick={runSimulation}
            disabled={isRunning}
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2 text-xs font-bold text-white transition hover:bg-blue-500 shadow-md shadow-blue-900/40 disabled:opacity-50"
          >
            <Play className="h-4 w-4 fill-white" />
            <span>{isRunning ? 'Executing Pulse...' : 'Run Simulation'}</span>
          </button>
        </div>
      </div>

      {/* Interactive Blueprint Canvas Simulation */}
      <div className="relative rounded-3xl border border-slate-800 bg-slate-950 p-6 shadow-2xl overflow-x-auto custom-scrollbar">
        {/* Grid Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none rounded-3xl" />

        <div className="relative flex flex-col md:flex-row items-center gap-4 min-w-[750px] py-4">
          {/* Node 1: Event OnHit */}
          <div
            className={`w-48 rounded-2xl border p-4 transition-all duration-300 ${
              activeStep === 0
                ? 'border-red-500 bg-red-950/40 shadow-lg shadow-red-900/30 scale-105 ring-2 ring-red-400'
                : 'border-slate-800 bg-slate-900/90'
            }`}
          >
            <div className="rounded-lg bg-red-600/20 px-2.5 py-1 text-xs font-bold text-red-400 border border-red-500/30 mb-3 flex items-center justify-between">
              <span>Event OnHit</span>
              <span className="h-2 w-2 rounded-full bg-red-500"></span>
            </div>
            <div className="space-y-1.5 text-[11px] font-mono">
              <div className="flex items-center justify-between text-slate-300">
                <span>Damage (Float)</span>
                <span className="text-emerald-400 font-bold">{incomingDamage}</span>
              </div>
              <div className="flex items-center justify-end text-slate-400 pt-1">
                <span className="h-2 w-2 rounded-sm bg-white mr-1.5"></span>
                <span>Exec (White)</span>
              </div>
            </div>
          </div>

          <ArrowRight className={`h-6 w-6 shrink-0 transition ${activeStep === 0 ? 'text-white scale-125 animate-pulse' : 'text-slate-700'}`} />

          {/* Node 2: Math Subtract & Set Health */}
          <div
            className={`w-52 rounded-2xl border p-4 transition-all duration-300 ${
              activeStep === 1
                ? 'border-blue-500 bg-blue-950/40 shadow-lg shadow-blue-900/30 scale-105 ring-2 ring-blue-400'
                : 'border-slate-800 bg-slate-900/90'
            }`}
          >
            <div className="rounded-lg bg-blue-600/20 px-2.5 py-1 text-xs font-bold text-blue-400 border border-blue-500/30 mb-3 flex items-center justify-between">
              <span>Set Health</span>
              <Zap className="h-3.5 w-3.5 text-blue-400" />
            </div>
            <div className="space-y-1 text-[11px] font-mono text-slate-300">
              <div>Health: <span className="text-emerald-400 font-bold">{playerHealth}</span></div>
              <div className="text-[10px] text-slate-500">Formula: Health - Damage</div>
            </div>
          </div>

          <ArrowRight className={`h-6 w-6 shrink-0 transition ${activeStep === 1 ? 'text-white scale-125 animate-pulse' : 'text-slate-700'}`} />

          {/* Node 3: Branch Node */}
          <div
            className={`w-52 rounded-2xl border p-4 transition-all duration-300 ${
              activeStep === 2
                ? 'border-amber-500 bg-amber-950/40 shadow-lg shadow-amber-900/30 scale-105 ring-2 ring-amber-400'
                : 'border-slate-800 bg-slate-900/90'
            }`}
          >
            <div className="rounded-lg bg-amber-600/20 px-2.5 py-1 text-xs font-bold text-amber-400 border border-amber-500/30 mb-3 flex items-center justify-between">
              <span>Branch</span>
              <GitBranch className="h-3.5 w-3.5 text-amber-400" />
            </div>
            <div className="space-y-1.5 text-[11px] font-mono">
              <div className="rounded bg-slate-950 px-2 py-1 text-slate-400 text-[10px]">
                Condition: Health &lt;= 0
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className={playerHealth <= 0 ? 'text-rose-400 font-bold' : 'text-slate-600'}>
                  True (Dead)
                </span>
                <span className={playerHealth > 0 ? 'text-emerald-400 font-bold' : 'text-slate-600'}>
                  False (Alive)
                </span>
              </div>
            </div>
          </div>

          <ArrowRight className={`h-6 w-6 shrink-0 transition ${activeStep === 2 ? 'text-white scale-125 animate-pulse' : 'text-slate-700'}`} />

          {/* Node 4: Print String Result */}
          <div
            className={`w-56 rounded-2xl border p-4 transition-all duration-300 ${
              activeStep === 3
                ? 'border-emerald-500 bg-emerald-950/40 shadow-lg shadow-emerald-900/30 scale-105 ring-2 ring-emerald-400'
                : 'border-slate-800 bg-slate-900/90'
            }`}
          >
            <div className="rounded-lg bg-emerald-600/20 px-2.5 py-1 text-xs font-bold text-emerald-400 border border-emerald-500/30 mb-3 flex items-center justify-between">
              <span>Print String</span>
              <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
            </div>
            <div className="text-[11px] font-mono text-slate-300">
              {playerHealth <= 0 ? (
                <span className="text-rose-400 font-bold">💀 Trigger GameOver</span>
              ) : (
                <span className="text-emerald-400 font-bold">🛡️ Continue Play</span>
              )}
            </div>
          </div>
        </div>

        {/* Execution Log stream */}
        <div className="mt-6 border-t border-slate-800 pt-4">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Execution Log & Pin Values:
          </div>
          <div className="rounded-xl border border-slate-800/80 bg-slate-900/80 p-3 font-mono text-xs space-y-1 text-slate-300 min-h-[70px]">
            {simulationLogs.length === 0 ? (
              <span className="text-slate-500 italic">
                Press "Run Simulation" above to witness the Blueprint pulse flow through nodes.
              </span>
            ) : (
              simulationLogs.map((log, i) => <div key={i}>{log}</div>)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
