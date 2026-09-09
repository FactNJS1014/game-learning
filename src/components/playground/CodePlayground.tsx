import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Play,
  RotateCcw,
  Copy,
  Check,
  Terminal,
  Code2,
  Sparkles,
  Gamepad2,
  Trash2,
} from 'lucide-react';

interface CodePreset {
  id: string;
  name: string;
  lang: 'csharp' | 'cpp';
  code: string;
  expectedLogs: string[];
}

const presets: CodePreset[] = [
  {
    id: 'csharp-movement',
    name: 'Unity C#: 3D Movement with DeltaTime',
    lang: 'csharp',
    code: `using UnityEngine;

public class PlayerController : MonoBehaviour
{
    public float walkSpeed = 6.0f;
    public Vector3 velocity = Vector3.zero;

    void Start()
    {
        Debug.Log("[System] PlayerController initialized on Capsule GameObject.");
        Debug.Log("[System] Walk Speed set to: " + walkSpeed + " m/s");
    }

    void Update()
    {
        // Simulated input: pressing W (forward)
        float horizontal = 0.0f;
        float vertical = 1.0f;

        Vector3 moveInput = new Vector3(horizontal, 0, vertical);
        if (moveInput.magnitude > 1.0f) moveInput.Normalize();

        Vector3 displacement = moveInput * walkSpeed * Time.deltaTime;
        transform.position += displacement;

        Debug.Log("[Frame 60] Moved forward. New Position: " + transform.position);
    }
}`,
    expectedLogs: [
      '[System] PlayerController initialized on Capsule GameObject.',
      '[System] Walk Speed set to: 6.0 m/s',
      '[Input] Key W pressed down (Vertical Axis = 1.0)',
      '[Physics] Direction Normalized: (X: 0.0, Y: 0.0, Z: 1.0)',
      '[Engine] DeltaTime applied: 0.0166 seconds (60 FPS)',
      '[Frame 60] Moved forward. New Position: (X: 0.00, Y: 1.00, Z: 0.10)',
      '[Success] Smooth frame-independent translation achieved!',
    ],
  },
  {
    id: 'csharp-health',
    name: 'Unity C#: Health, Armor & Damage',
    lang: 'csharp',
    code: `using UnityEngine;

public class HealthSystem : MonoBehaviour
{
    public float maxHealth = 100f;
    public float currentHealth = 100f;
    public float armorReduction = 0.25f; // 25% damage absorbed

    public void ApplyDamage(float incomingDamage)
    {
        float actualDamage = incomingDamage * (1f - armorReduction);
        currentHealth = Mathf.Max(0f, currentHealth - actualDamage);

        Debug.Log("[Combat] Took " + actualDamage + " damage. Remaining HP: " + currentHealth);

        if (currentHealth <= 0f)
        {
            Debug.Log("[Death] Player health reached 0! Triggering Game Over screen.");
        }
    }
}`,
    expectedLogs: [
      '[Combat] Incoming attack from Goblin: 40.0 Raw Damage',
      '[Armor] 25% absorbed by Iron Shield (10.0 damage blocked)',
      '[Combat] Took 30.0 damage. Remaining HP: 70.0 / 100.0',
      '[Combat] Second critical hit incoming: 80.0 Raw Damage',
      '[Combat] Took 60.0 damage. Remaining HP: 10.0 / 100.0',
      '[Status] Health low! Audio heartbeat sound activated.',
    ],
  },
  {
    id: 'cpp-unreal-actor',
    name: 'Unreal C++: ACharacter Class Definition',
    lang: 'cpp',
    code: `#include "CoreMinimal.h"
#include "GameFramework/Character.h"
#include "MyHeroCharacter.generated.h"

UCLASS()
class MYGAME_API AMyHeroCharacter : public ACharacter
{
    GENERATED_BODY()

public:
    AMyHeroCharacter();

    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Stats")
    float MaxStamina = 100.0f;

    virtual void BeginPlay() override;
    virtual void Tick(float DeltaTime) override;
    void PerformJump();
};`,
    expectedLogs: [
      '[UnrealHeaderTool] Parsing UCLASS AMyHeroCharacter...',
      '[Engine] Registered UPROPERTY: MaxStamina (Float) with Blueprint Read/Write access.',
      '[World] Spawning AMyHeroCharacter in Level /Game/Maps/MainValley',
      '[BeginPlay] Character spawned with SkeletalMesh attached to CapsuleComponent.',
      '[Input] Enhanced Input Action IA_Jump triggered -> Calling PerformJump().',
      '[Physics] CharacterMovementComponent applied Z-Velocity impulse: +600 cm/s.',
    ],
  },
];

export const CodePlayground: React.FC = () => {
  const { language } = useApp();
  const [activeTab, setActiveTab] = useState<'csharp' | 'cpp'>('csharp');
  const [selectedPreset, setSelectedPreset] = useState<CodePreset>(presets[0]);
  const [code, setCode] = useState(presets[0].code);
  const [logs, setLogs] = useState<string[]>(presets[0].expectedLogs);
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);

  const selectPreset = (preset: CodePreset) => {
    setSelectedPreset(preset);
    setActiveTab(preset.lang);
    setCode(preset.code);
    setLogs([]);
  };

  const handleRun = () => {
    setIsRunning(true);
    setLogs(['[Compiler] Initializing simulation runtime...']);

    let currentLogIndex = 0;
    const interval = setInterval(() => {
      if (currentLogIndex < selectedPreset.expectedLogs.length) {
        setLogs((prev) => [...prev, selectedPreset.expectedLogs[currentLogIndex]]);
        currentLogIndex++;
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 450);
  };

  const handleReset = () => {
    setCode(selectedPreset.code);
    setLogs([]);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="code-playground-container" className="mx-auto max-w-5xl py-6 px-4">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
          <Code2 className="h-4 w-4" />
          <span>Interactive Code Environment</span>
        </div>
        <h1 className="text-2xl font-extrabold text-white">
          {language === 'th' ? 'Code Playground: ทดลองเขียนโค้ดจำลอง' : 'GameDev Code Playground'}
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          {language === 'th'
            ? 'ทดลองเขียนและปรับแต่งโค้ดภาษา C# (Unity) และ C++ (Unreal) พร้อมทดสอบการทำงานผ่าน Console จำลอง'
            : 'Experiment with editable C# and C++ gameplay logic templates with simulated engine console feedback.'}
        </p>
      </div>

      {/* Preset Selector Badges */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="text-xs font-semibold text-slate-400 mr-1">
          {language === 'th' ? 'ตัวอย่างสำเร็จรูป:' : 'Presets:'}
        </span>
        {presets.map((preset) => (
          <button
            key={preset.id}
            onClick={() => selectPreset(preset)}
            className={`rounded-xl border px-3 py-1.5 text-xs font-medium transition ${
              selectedPreset.id === preset.id
                ? 'border-emerald-500/50 bg-emerald-500/15 text-emerald-300 font-semibold'
                : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white'
            }`}
          >
            {preset.name}
          </button>
        ))}
      </div>

      {/* Code Editor & Console Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Editor Column */}
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-xl flex flex-col">
          {/* Editor Bar */}
          <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/80 px-4 py-2.5">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-300 font-mono">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              <span>{activeTab === 'csharp' ? 'PlayerScript.cs' : 'MyHeroCharacter.cpp'}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-800/80 px-2.5 py-1 text-xs text-slate-300 hover:bg-slate-700"
              >
                {copied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
              <button
                onClick={handleReset}
                title="Reset to default code"
                className="flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-800/80 px-2.5 py-1 text-xs text-slate-300 hover:bg-slate-700"
              >
                <RotateCcw className="h-3 w-3" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Textarea Editor */}
          <textarea
            id="code-playground-editor-textarea"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            rows={18}
            spellCheck={false}
            className="w-full flex-1 resize-none bg-slate-950 p-4 font-mono text-xs leading-relaxed text-emerald-300 focus:outline-none custom-scrollbar"
          />

          {/* Run Bar */}
          <div className="border-t border-slate-800 bg-slate-900/60 p-3 flex items-center justify-between">
            <span className="text-[11px] text-slate-500 font-mono">
              Lines: {code.split('\n').length} • Characters: {code.length}
            </span>
            <button
              onClick={handleRun}
              disabled={isRunning}
              className="flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2 text-xs font-bold text-slate-950 transition hover:bg-emerald-400 disabled:opacity-50 shadow-md shadow-emerald-500/20"
            >
              <Play className="h-4 w-4 fill-slate-950" />
              <span>{isRunning ? 'Running Simulation...' : 'Simulate / Run'}</span>
            </button>
          </div>
        </div>

        {/* Output Console Column */}
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-xl flex flex-col">
          {/* Console Header */}
          <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/80 px-4 py-2.5">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
              <Terminal className="h-4 w-4 text-indigo-400" />
              <span>Game Engine Output Console</span>
            </div>
            {logs.length > 0 && (
              <button
                onClick={() => setLogs([])}
                className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white"
              >
                <Trash2 className="h-3 w-3" />
                <span>Clear</span>
              </button>
            )}
          </div>

          {/* Console Stream */}
          <div className="flex-1 p-4 font-mono text-xs overflow-y-auto max-h-[460px] space-y-2 bg-slate-950 custom-scrollbar">
            {logs.length === 0 ? (
              <div className="flex h-64 flex-col items-center justify-center text-center text-slate-400">
                <Terminal className="h-8 w-8 text-slate-400 mb-2" />
                <p>Click "Simulate / Run" to execute code in the engine sandbox.</p>
              </div>
            ) : (
              logs.map((log, idx) => {
                let badgeColor = 'text-slate-400';
                if (log.includes('[Success]')) badgeColor = 'text-emerald-400 font-bold';
                else if (log.includes('[Combat]')) badgeColor = 'text-rose-400';
                else if (log.includes('[Death]')) badgeColor = 'text-rose-500 font-bold';
                else if (log.includes('[Input]')) badgeColor = 'text-amber-400';
                else if (log.includes('[UnrealHeaderTool]')) badgeColor = 'text-blue-400';

                return (
                  <div key={idx} className="flex items-start gap-2 border-b border-slate-900/80 pb-1.5">
                    <span className="text-[10px] text-slate-400 select-none">
                      {new Date().toLocaleTimeString().slice(0, 8)}
                    </span>
                    <span className={`${badgeColor} leading-relaxed`}>{log}</span>
                  </div>
                );
              })
            )}
          </div>

          {/* Status footer */}
          <div className="border-t border-slate-800 bg-slate-900/40 px-4 py-2 text-[11px] text-slate-400 font-mono flex items-center justify-between">
            <span>Status: {isRunning ? 'Executing Frame...' : 'Ready'}</span>
            <span>Target: 60.0 FPS</span>
          </div>
        </div>
      </div>
    </div>
  );
};
