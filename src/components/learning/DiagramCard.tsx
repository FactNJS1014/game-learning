import React, { useState } from 'react';
import { VisualDiagramData, Language } from '../../types';
import { RefreshCw, Play, ArrowRight, Shield, Zap, Sparkles } from 'lucide-react';

interface DiagramCardProps {
  diagram: VisualDiagramData;
  language: Language;
}

export const DiagramCard: React.FC<DiagramCardProps> = ({ diagram, language }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);

  const startLoopSimulation = () => {
    setIsSimulating(true);
    let step = 0;
    const interval = setInterval(() => {
      step = (step + 1) % 4;
      setActiveStep(step);
    }, 900);

    setTimeout(() => {
      clearInterval(interval);
      setIsSimulating(false);
    }, 4500);
  };

  return (
    <div
      id="visual-diagram-card"
      className="my-6 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/70 p-5 shadow-xl"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-400">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">
              {diagram.title[language] || diagram.title.en}
            </h4>
            <p className="text-xs text-slate-400">
              {diagram.description[language] || diagram.description.en}
            </p>
          </div>
        </div>

        {diagram.type === 'game-loop' && (
          <button
            onClick={startLoopSimulation}
            disabled={isSimulating}
            className="flex items-center gap-1.5 rounded-lg border border-indigo-500/40 bg-indigo-600/20 px-3 py-1 text-xs font-semibold text-indigo-300 transition hover:bg-indigo-600/30 disabled:opacity-50"
          >
            {isSimulating ? (
              <>
                <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                <span>Running Loop...</span>
              </>
            ) : (
              <>
                <Play className="h-3.5 w-3.5 fill-indigo-300" />
                <span>Simulate 60 FPS Cycle</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Render diagram based on type */}
      {diagram.type === 'game-loop' && (
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 py-2">
          {[
            {
              num: '1',
              title: { en: 'Read Inputs', th: 'ตรวจจับปุ่มกด' },
              sub: { en: 'Keyboard, Mouse, Gamepad', th: 'คีย์บอร์ด, เมาส์, จอยสติ๊ก' },
              color: 'from-amber-500/20 to-amber-600/5 text-amber-400 border-amber-500/40',
            },
            {
              num: '2',
              title: { en: 'Update State', th: 'อัปเดตตรรกะ & โค้ด' },
              sub: { en: 'Player movement, AI choices', th: 'ขยับตัวละคร, สมอง AI' },
              color: 'from-blue-500/20 to-blue-600/5 text-blue-400 border-blue-500/40',
            },
            {
              num: '3',
              title: { en: 'Calculate Physics', th: 'คำนวณฟิสิกส์' },
              sub: { en: 'Gravity, Rigidbodies, Colliders', th: 'แรงโน้มถ่วง, การชน' },
              color: 'from-emerald-500/20 to-emerald-600/5 text-emerald-400 border-emerald-500/40',
            },
            {
              num: '4',
              title: { en: 'Render Graphics', th: 'ส่งภาพเข้า GPU' },
              sub: { en: 'Draw mesh, shaders, lights', th: 'วาดภาพ 3D ขึ้นหน้าจอ' },
              color: 'from-purple-500/20 to-purple-600/5 text-purple-400 border-purple-500/40',
            },
          ].map((phase, idx) => {
            const isActive = isSimulating && activeStep === idx;
            return (
              <div
                key={idx}
                className={`relative rounded-xl border p-3.5 transition-all duration-300 bg-gradient-to-b ${
                  phase.color
                } ${isActive ? 'scale-105 ring-2 ring-indigo-400 shadow-lg' : 'opacity-85'}`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-[10px] font-mono font-bold">
                    {phase.num}
                  </span>
                  {isActive && (
                    <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-ping" />
                  )}
                </div>
                <div className="text-xs font-bold text-white mb-0.5">
                  {phase.title[language] || phase.title.en}
                </div>
                <p className="text-[11px] text-slate-400">
                  {phase.sub[language] || phase.sub.en}
                </p>
              </div>
            );
          })}
        </div>
      )}

      {diagram.type === 'transform' && (
        <div className="flex flex-col sm:flex-row items-center justify-around gap-6 py-4 bg-slate-900/50 rounded-xl p-4 border border-slate-800/80">
          {/* Axis explanation */}
          <div className="space-y-3 max-w-xs">
            <div className="flex items-center gap-2.5">
              <span className="h-3.5 w-3.5 rounded-full bg-red-500 shadow-sm shadow-red-500/50"></span>
              <span className="text-xs font-mono text-slate-200">
                <strong className="text-red-400">X-Axis (Red):</strong> {language === 'th' ? 'แกนซ้าย (-) และขวา (+)' : 'Left (-) and Right (+)'}
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="h-3.5 w-3.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50"></span>
              <span className="text-xs font-mono text-slate-200">
                <strong className="text-emerald-400">Y-Axis (Green):</strong> {language === 'th' ? 'แกนล่าง (-) และบน (+)' : 'Down (-) and Up (+)'}
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="h-3.5 w-3.5 rounded-full bg-blue-500 shadow-sm shadow-blue-500/50"></span>
              <span className="text-xs font-mono text-slate-200">
                <strong className="text-blue-400">Z-Axis (Blue):</strong> {language === 'th' ? 'แกนหลัง (-) และหน้า (+)' : 'Back (-) and Forward (+)'}
              </span>
            </div>
          </div>

          {/* SVG 3D Axis Visualizer */}
          <div className="relative flex h-36 w-36 items-center justify-center rounded-2xl border border-slate-800 bg-slate-950 p-2 shadow-inner">
            <svg viewBox="0 0 100 100" className="h-full w-full">
              {/* Origin Center Point */}
              <circle cx="50" cy="50" r="4" fill="#ffffff" />
              {/* X Axis (Right) */}
              <line x1="50" y1="50" x2="88" y2="50" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
              <polygon points="90,50 84,46 84,54" fill="#ef4444" />
              <text x="82" y="42" fill="#ef4444" fontSize="9" fontWeight="bold" fontFamily="monospace">X+</text>

              {/* Y Axis (Up) */}
              <line x1="50" y1="50" x2="50" y2="12" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
              <polygon points="50,10 46,16 54,16" fill="#10b981" />
              <text x="56" y="20" fill="#10b981" fontSize="9" fontWeight="bold" fontFamily="monospace">Y+</text>

              {/* Z Axis (Forward depth angle) */}
              <line x1="50" y1="50" x2="22" y2="78" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
              <polygon points="20,80 28,76 24,70" fill="#3b82f6" />
              <text x="12" y="74" fill="#3b82f6" fontSize="9" fontWeight="bold" fontFamily="monospace">Z+</text>
            </svg>
          </div>
        </div>
      )}

      {diagram.type === 'physics-pipeline' && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-3">
          <div className="flex-1 rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 text-center">
            <div className="text-xs font-bold text-amber-300 mb-1">1. Rigidbody Applied</div>
            <p className="text-[11px] text-slate-300">
              {language === 'th' ? 'แรงโน้มถ่วงดึงวัตถุตกลงมา' : 'Gravity exerts downward force'}
            </p>
          </div>
          <ArrowRight className="h-5 w-5 text-slate-600 hidden sm:block" />
          <div className="flex-1 rounded-xl border border-blue-500/30 bg-blue-500/10 p-3 text-center">
            <div className="text-xs font-bold text-blue-300 mb-1">2. Collider Detects Hit</div>
            <p className="text-[11px] text-slate-300">
              {language === 'th' ? 'ผิวสัมผัสชนกับพื้น ไม่ทะลุ' : 'Boundary stops penetration'}
            </p>
          </div>
          <ArrowRight className="h-5 w-5 text-slate-600 hidden sm:block" />
          <div className="flex-1 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-center">
            <div className="text-xs font-bold text-emerald-300 mb-1">3. Event Dispatched</div>
            <p className="text-[11px] text-slate-300">
              {language === 'th' ? 'เรียกฟังก์ชัน OnCollisionEnter' : 'Fires OnCollisionEnter()'}
            </p>
          </div>
        </div>
      )}

      {diagram.type === 'blueprint-flow' && (
        <div className="space-y-3 py-2">
          <div className="flex flex-col md:flex-row items-stretch gap-3">
            {/* BeginPlay Node */}
            <div className="flex-1 rounded-xl border border-red-500/40 bg-slate-900/90 p-3 shadow-md">
              <div className="flex items-center gap-1.5 text-xs font-bold text-red-400 mb-2">
                <span className="h-2 w-2 rounded-full bg-red-500"></span>
                <span>Event BeginPlay</span>
              </div>
              <div className="flex items-center justify-end text-[11px] text-slate-400">
                <span className="h-2.5 w-2.5 rounded-sm bg-white mr-1.5"></span>
                <span>Output (White)</span>
              </div>
            </div>

            {/* Branch Node */}
            <div className="flex-1 rounded-xl border border-blue-500/40 bg-slate-900/90 p-3 shadow-md">
              <div className="flex items-center justify-between text-xs font-bold text-blue-400 mb-2">
                <span>Branch (If / Else)</span>
                <span className="rounded bg-red-500/20 px-1.5 text-[10px] text-red-300">Condition</span>
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-300">
                <span className="text-emerald-400 font-mono">True ──► Play Game</span>
                <span className="text-rose-400 font-mono">False ──► Game Over</span>
              </div>
            </div>

            {/* Print String Node */}
            <div className="flex-1 rounded-xl border border-emerald-500/40 bg-slate-900/90 p-3 shadow-md">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 mb-2">
                <Zap className="h-3.5 w-3.5" />
                <span>Print String</span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono">
                "Welcome to GameDev Academy!"
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
