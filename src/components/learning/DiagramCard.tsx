import React, { useState } from 'react';
import { VisualDiagramData, Language } from '../../types';
import {
  RefreshCw,
  Play,
  ArrowRight,
  Shield,
  Zap,
  Sparkles,
  Layers,
  Database,
  Eye,
  Activity,
  Cpu,
  Repeat,
  Crosshair,
  Sliders,
  CheckCircle2,
} from 'lucide-react';

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

          <div className="relative flex h-36 w-36 items-center justify-center rounded-2xl border border-slate-800 bg-slate-950 p-2 shadow-inner">
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <circle cx="50" cy="50" r="4" fill="#ffffff" />
              <line x1="50" y1="50" x2="88" y2="50" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
              <polygon points="90,50 84,46 84,54" fill="#ef4444" />
              <text x="82" y="42" fill="#ef4444" fontSize="9" fontWeight="bold" fontFamily="monospace">X+</text>

              <line x1="50" y1="50" x2="50" y2="12" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
              <polygon points="50,10 46,16 54,16" fill="#10b981" />
              <text x="56" y="20" fill="#10b981" fontSize="9" fontWeight="bold" fontFamily="monospace">Y+</text>

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

      {diagram.type === 'gameobject-component' && (
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
          <div className="flex items-center gap-2 mb-3">
            <Layers className="h-4 w-4 text-emerald-400" />
            <span className="text-xs font-bold text-white font-mono">
              GameObject: "PlayerAvatar"
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs">
            <div className="rounded-lg border border-red-500/30 bg-red-950/20 p-2.5">
              <span className="font-bold text-red-400 font-mono block mb-1">Transform</span>
              <p className="text-[10px] text-slate-400">Position, Rotation, Scale in 3D world</p>
            </div>
            <div className="rounded-lg border border-blue-500/30 bg-blue-950/20 p-2.5">
              <span className="font-bold text-blue-400 font-mono block mb-1">Mesh Renderer</span>
              <p className="text-[10px] text-slate-400">Draws 3D vertices, textures & materials</p>
            </div>
            <div className="rounded-lg border border-amber-500/30 bg-amber-950/20 p-2.5">
              <span className="font-bold text-amber-400 font-mono block mb-1">Capsule Collider</span>
              <p className="text-[10px] text-slate-400">Physical collision boundary</p>
            </div>
            <div className="rounded-lg border border-purple-500/30 bg-purple-950/20 p-2.5">
              <span className="font-bold text-purple-400 font-mono block mb-1">PlayerMovement (C#)</span>
              <p className="text-[10px] text-slate-400">Custom script driving behavior</p>
            </div>
          </div>
        </div>
      )}

      {diagram.type === 'lifecycle' && (
        <div className="space-y-3 py-1">
          <div className="flex flex-wrap items-center justify-between gap-1 text-[11px] font-mono">
            <span className="rounded bg-indigo-500/20 px-2 py-1 text-indigo-300 font-bold">1. Awake()</span>
            <ArrowRight className="h-3 w-3 text-slate-600" />
            <span className="rounded bg-indigo-500/20 px-2 py-1 text-indigo-300 font-bold">2. OnEnable()</span>
            <ArrowRight className="h-3 w-3 text-slate-600" />
            <span className="rounded bg-indigo-500/20 px-2 py-1 text-indigo-300 font-bold">3. Start()</span>
            <ArrowRight className="h-3 w-3 text-slate-600" />
            <span className="rounded bg-emerald-500/20 px-2 py-1 text-emerald-300 font-bold">4. FixedUpdate()</span>
            <ArrowRight className="h-3 w-3 text-slate-600" />
            <span className="rounded bg-amber-500/20 px-2 py-1 text-amber-300 font-bold">5. Update()</span>
            <ArrowRight className="h-3 w-3 text-slate-600" />
            <span className="rounded bg-rose-500/20 px-2 py-1 text-rose-300 font-bold">6. OnDestroy()</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-400 bg-slate-900/40 p-3 rounded-lg">
            <div>
              <strong className="text-emerald-400">FixedUpdate (0.02s constant):</strong> {language === 'th' ? 'สำหรับโค้ดฟิสิกส์ & Rigidbody เท่านั้น' : 'Strictly for physics & Rigidbody force calculations'}
            </div>
            <div>
              <strong className="text-amber-400">Update (Every Frame variable):</strong> {language === 'th' ? 'สำหรับรับปุ่มกด & ตัวจับเวลา (Time.deltaTime)' : 'For reading user input & general timers'}
            </div>
          </div>
        </div>
      )}

      {diagram.type === 'character-movement' && (
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="rounded-lg border border-cyan-500/30 bg-cyan-950/20 p-3">
              <span className="font-bold text-cyan-400 block mb-1">Horizontal Velocity</span>
              <p className="text-[11px] text-slate-300">
                Input X * Speed → applied directly to <code>velocity.x</code> or <code>velocity.z</code>
              </p>
            </div>
            <div className="rounded-lg border border-amber-500/30 bg-amber-950/20 p-3">
              <span className="font-bold text-amber-400 block mb-1">Ground Check Raycast</span>
              <p className="text-[11px] text-slate-300">
                Casts a tiny downward sphere to verify if player is touching the floor before allowing Jump
              </p>
            </div>
            <div className="rounded-lg border border-emerald-500/30 bg-emerald-950/20 p-3">
              <span className="font-bold text-emerald-400 block mb-1">Vertical Impulse</span>
              <p className="text-[11px] text-slate-300">
                Adds <code>Vector2.up * jumpForce</code> on Spacebar pressed, gravity handles smooth descent
              </p>
            </div>
          </div>
        </div>
      )}

      {diagram.type === 'fsm-states' && (
        <div className="flex flex-wrap items-center justify-around gap-2 py-3 bg-slate-900/40 rounded-xl p-3">
          <div className="rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-center text-xs">
            <span className="font-bold text-slate-200">Idle State</span>
            <span className="block text-[10px] text-slate-400">speed == 0</span>
          </div>
          <ArrowRight className="h-4 w-4 text-slate-500" />
          <div className="rounded-xl border border-blue-500/40 bg-blue-950/40 px-3 py-2 text-center text-xs">
            <span className="font-bold text-blue-300">Move / Patrol</span>
            <span className="block text-[10px] text-slate-400">speed &gt; 0.1</span>
          </div>
          <ArrowRight className="h-4 w-4 text-slate-500" />
          <div className="rounded-xl border border-amber-500/40 bg-amber-950/40 px-3 py-2 text-center text-xs">
            <span className="font-bold text-amber-300">Attack State</span>
            <span className="block text-[10px] text-slate-400">targetInMeleeRange</span>
          </div>
          <ArrowRight className="h-4 w-4 text-slate-500" />
          <div className="rounded-xl border border-rose-500/40 bg-rose-950/40 px-3 py-2 text-center text-xs">
            <span className="font-bold text-rose-300">Die State</span>
            <span className="block text-[10px] text-slate-400">currentHealth &lt;= 0</span>
          </div>
        </div>
      )}

      {diagram.type === 'object-pool' && (
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3.5 space-y-2">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex-1 rounded-lg border border-slate-700 bg-slate-800 p-2.5 text-center">
              <span className="font-mono font-bold text-slate-300 block">Queue&lt;GameObject&gt;</span>
              <span className="text-[10px] text-slate-400">Pre-instantiated 50 Bullets (SetActive(false))</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
              <span>Spawn ➔</span>
            </div>
            <div className="flex-1 rounded-lg border border-emerald-500/40 bg-emerald-950/30 p-2.5 text-center">
              <span className="font-mono font-bold text-emerald-300 block">Active in Scene</span>
              <span className="text-[10px] text-slate-400">Fly forward, hit target, deal damage</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] font-mono text-indigo-400">
              <span>Recycle ➔</span>
            </div>
            <div className="flex-1 rounded-lg border border-indigo-500/40 bg-indigo-950/30 p-2.5 text-center">
              <span className="font-mono font-bold text-indigo-300 block">Return to Pool</span>
              <span className="text-[10px] text-slate-400">Zero GC Allocations, 0% FPS Drops</span>
            </div>
          </div>
        </div>
      )}

      {diagram.type === 'enhanced-input' && (
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs">
          <div className="rounded-lg border border-slate-800 bg-slate-900 p-2.5 text-center">
            <span className="font-bold text-slate-300 block mb-1">Hardware Input</span>
            <span className="text-[10px] text-slate-400">Gamepad Stick / WASD</span>
          </div>
          <div className="rounded-lg border border-blue-500/40 bg-blue-950/30 p-2.5 text-center">
            <span className="font-bold text-blue-300 block mb-1">Input Mapping Context</span>
            <span className="text-[10px] text-slate-400">IMC_Default (Priority 0)</span>
          </div>
          <div className="rounded-lg border border-purple-500/40 bg-purple-950/30 p-2.5 text-center">
            <span className="font-bold text-purple-300 block mb-1">Input Action (IA)</span>
            <span className="text-[10px] text-slate-400">IA_Move (Axis2D Vector)</span>
          </div>
          <div className="rounded-lg border border-emerald-500/40 bg-emerald-950/30 p-2.5 text-center">
            <span className="font-bold text-emerald-300 block mb-1">Triggered Event</span>
            <span className="text-[10px] text-slate-400">AddMovementInput(Forward, Right)</span>
          </div>
        </div>
      )}

      {diagram.type === 'pbr-material' && (
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs">
          <div className="rounded-lg border border-red-500/30 bg-red-950/20 p-2.5">
            <span className="font-bold text-red-300 font-mono block">Base Color (Albedo)</span>
            <p className="text-[10px] text-slate-400">Pure diffuse color without baked lighting</p>
          </div>
          <div className="rounded-lg border border-amber-500/30 bg-amber-950/20 p-2.5">
            <span className="font-bold text-amber-300 font-mono block">Metallic (0.0 - 1.0)</span>
            <p className="text-[10px] text-slate-400">Dielectric (0.0) vs Conductor metal (1.0)</p>
          </div>
          <div className="rounded-lg border border-blue-500/30 bg-blue-950/20 p-2.5">
            <span className="font-bold text-blue-300 font-mono block">Roughness (0.0 - 1.0)</span>
            <p className="text-[10px] text-slate-400">Mirror reflection (0.0) vs matte diffuse (1.0)</p>
          </div>
          <div className="rounded-lg border border-purple-500/30 bg-purple-950/20 p-2.5">
            <span className="font-bold text-purple-300 font-mono block">Normal Map (RGB)</span>
            <p className="text-[10px] text-slate-400">Simulates fine surface bumps & micro-crevices</p>
          </div>
        </div>
      )}

      {diagram.type === 'ai-behavior-tree' && (
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3.5 space-y-2 text-xs">
          <div className="text-center font-bold text-purple-300 font-mono">Root Node ➔ Blackboard: TargetPlayer, State</div>
          <div className="flex flex-col sm:flex-row items-center justify-around gap-2 pt-2">
            <div className="rounded-lg border border-blue-500/40 bg-blue-950/40 p-2 text-center w-full sm:w-auto">
              <span className="font-bold text-blue-300 block">Selector (Fallback)</span>
              <span className="text-[10px] text-slate-400">Runs first successful child</span>
            </div>
            <ArrowRight className="h-4 w-4 text-slate-500 hidden sm:block" />
            <div className="rounded-lg border border-amber-500/40 bg-amber-950/40 p-2 text-center w-full sm:w-auto">
              <span className="font-bold text-amber-300 block">Sequence: Attack</span>
              <span className="text-[10px] text-slate-400">CheckRange ➔ FaceTarget ➔ PlayAnim</span>
            </div>
            <ArrowRight className="h-4 w-4 text-slate-500 hidden sm:block" />
            <div className="rounded-lg border border-emerald-500/40 bg-emerald-950/40 p-2 text-center w-full sm:w-auto">
              <span className="font-bold text-emerald-300 block">Sequence: Patrol</span>
              <span className="text-[10px] text-slate-400">GetRandomPoint ➔ MoveTo ➔ Wait 2s</span>
            </div>
          </div>
        </div>
      )}

      {diagram.type === 'scriptable-object' && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="rounded-lg border border-purple-500/40 bg-purple-950/30 p-3">
            <span className="font-bold text-purple-300 block mb-1">ItemData (ScriptableObject)</span>
            <p className="text-[10px] text-slate-400 font-mono">
              itemName: "Plasma Rifle"<br />
              damage: 45<br />
              fireRate: 0.15s<br />
              icon: Sprite
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <span className="text-[11px] font-mono text-emerald-400 mb-1">Shared Reference</span>
            <ArrowRight className="h-5 w-5 text-emerald-400" />
            <span className="text-[10px] text-slate-400">Saved as .asset on disk, 0 duplicated memory</span>
          </div>
          <div className="rounded-lg border border-emerald-500/40 bg-emerald-950/30 p-3">
            <span className="font-bold text-emerald-300 block mb-1">GunController Instances</span>
            <p className="text-[10px] text-slate-400">
              Gun in Hand, Loot Drop in World, Shop Inventory item all reference the same single asset.
            </p>
          </div>
        </div>
      )}

      {diagram.type === 'save-load' && (
        <div className="flex flex-col sm:flex-row items-center justify-around gap-2 text-xs py-2">
          <div className="rounded-lg border border-cyan-500/40 bg-cyan-950/30 p-2.5 text-center flex-1">
            <span className="font-bold text-cyan-300 block">In-Game State</span>
            <span className="text-[10px] text-slate-400 font-mono">Level 12, HP: 85, Coins: 1400</span>
          </div>
          <ArrowRight className="h-4 w-4 text-slate-500 hidden sm:block" />
          <div className="rounded-lg border border-purple-500/40 bg-purple-950/30 p-2.5 text-center flex-1">
            <span className="font-bold text-purple-300 block">JsonUtility.ToJson()</span>
            <span className="text-[10px] text-slate-400 font-mono">&#123; "level": 12, "coins": 1400 &#125;</span>
          </div>
          <ArrowRight className="h-4 w-4 text-slate-500 hidden sm:block" />
          <div className="rounded-lg border border-emerald-500/40 bg-emerald-950/30 p-2.5 text-center flex-1">
            <span className="font-bold text-emerald-300 block">File.WriteAllText</span>
            <span className="text-[10px] text-slate-400 font-mono">Application.persistentDataPath</span>
          </div>
        </div>
      )}

      {diagram.type === 'render-pipeline' && (
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-xs text-center">
          <div className="rounded-lg border border-slate-800 bg-slate-900 p-2">
            <span className="font-bold text-slate-300 block text-[11px]">1. Frustum Culling</span>
            <span className="text-[9px] text-slate-500">Discard off-screen meshes</span>
          </div>
          <div className="rounded-lg border border-amber-500/30 bg-amber-950/20 p-2">
            <span className="font-bold text-amber-300 block text-[11px]">2. Shadow Passes</span>
            <span className="text-[9px] text-slate-500">Render depth from lights</span>
          </div>
          <div className="rounded-lg border border-blue-500/30 bg-blue-950/20 p-2">
            <span className="font-bold text-blue-300 block text-[11px]">3. G-Buffer / Opaque</span>
            <span className="text-[9px] text-slate-500">Albedo, Normals, Depth</span>
          </div>
          <div className="rounded-lg border border-purple-500/30 bg-purple-950/20 p-2">
            <span className="font-bold text-purple-300 block text-[11px]">4. Lighting & Lumen</span>
            <span className="text-[9px] text-slate-500">Direct + Indirect bounces</span>
          </div>
          <div className="rounded-lg border border-emerald-500/30 bg-emerald-950/20 p-2">
            <span className="font-bold text-emerald-300 block text-[11px]">5. Post-Processing</span>
            <span className="text-[9px] text-slate-500">Bloom, Tonemapping, AA</span>
          </div>
        </div>
      )}

      {diagram.type === 'blueprint-flow' && (
        <div className="space-y-3 py-2">
          <div className="flex flex-col md:flex-row items-stretch gap-3">
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

      {diagram.type === 'actor-component' && (
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="rounded-lg border border-indigo-500/30 bg-indigo-950/20 p-3">
              <span className="font-bold text-indigo-400 block mb-1">Actor (Container)</span>
              <p className="text-[11px] text-slate-300">
                The entity spawned in the Level (e.g. <code>BP_Player</code>, <code>BP_Enemy</code>).
              </p>
            </div>
            <div className="rounded-lg border border-purple-500/30 bg-purple-950/20 p-3">
              <span className="font-bold text-purple-400 block mb-1">Root SceneComponent</span>
              <p className="text-[11px] text-slate-300">
                Provides world Transform (Location, Rotation, Scale) to all child components.
              </p>
            </div>
            <div className="rounded-lg border border-amber-500/30 bg-amber-950/20 p-3">
              <span className="font-bold text-amber-400 block mb-1">Sub-Components</span>
              <p className="text-[11px] text-slate-300">
                StaticMesh, Audio, Collision, and CharacterMovement attached modularly.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

