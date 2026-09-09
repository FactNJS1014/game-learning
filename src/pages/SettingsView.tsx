import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Settings, Moon, Sun, Globe, RotateCcw, AlertTriangle, Check, Shield } from 'lucide-react';

export const SettingsView: React.FC = () => {
  const { language, setLanguage, theme, toggleTheme, resetProgress, showToast } = useApp();
  const [showConfirmReset, setShowConfirmReset] = useState(false);

  const handleReset = () => {
    resetProgress();
    setShowConfirmReset(false);
  };

  return (
    <div id="settings-view-container" className="mx-auto max-w-3xl py-6 px-4 space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
          <Settings className="h-4 w-4" />
          <span>System Preferences</span>
        </div>
        <h1 className="text-2xl font-extrabold text-white">
          {language === 'th' ? 'การตั้งค่าระบบ (Settings)' : 'Application Settings'}
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          {language === 'th'
            ? 'ปรับแต่งภาษา ธีมการแสดงผล และจัดการข้อมูลการเรียนของคุณ'
            : 'Configure your language, visual interface preferences, and local data persistence.'}
        </p>
      </div>

      {/* Preferences Group */}
      <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 shadow-xl space-y-6">
        {/* Language Selection */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400">
              <Globe className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">
                {language === 'th' ? 'ภาษาที่แสดงผล (Language)' : 'Interface Language'}
              </h3>
              <p className="text-xs text-slate-400">
                Switch between Thai explanations and international English.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-900 p-1">
            <button
              onClick={() => setLanguage('th')}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                language === 'th' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              ไทย (TH)
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                language === 'en' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              English (EN)
            </button>
          </div>
        </div>

        {/* Theme Selection */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
              {theme === 'dark' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">
                {language === 'th' ? 'ธีมการแสดงผล (Theme)' : 'Display Theme'}
              </h3>
              <p className="text-xs text-slate-400">
                {theme === 'dark' ? 'Studio Dark Theme (Active)' : 'Studio Clean Light Theme (Active)'}
              </p>
            </div>
          </div>

          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-bold text-slate-200 transition hover:bg-slate-800"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-indigo-400" />}
            <span>{theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}</span>
          </button>
        </div>

        {/* Local Storage Data Reset */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-500/20 text-rose-400">
              <RotateCcw className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">
                {language === 'th' ? 'รีเซ็ตข้อมูลความคืบหน้า' : 'Reset Progress Data'}
              </h3>
              <p className="text-xs text-slate-400">
                Erase completed lessons, quiz records, and study notes.
              </p>
            </div>
          </div>

          {showConfirmReset ? (
            <div className="flex items-center gap-2">
              <button
                onClick={handleReset}
                className="rounded-xl bg-rose-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-rose-500 transition"
              >
                Confirm Reset
              </button>
              <button
                onClick={() => setShowConfirmReset(false)}
                className="rounded-xl border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-700"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowConfirmReset(true)}
              className="rounded-xl border border-rose-500/30 bg-rose-950/20 px-3.5 py-2 text-xs font-semibold text-rose-300 hover:bg-rose-900/40 transition"
            >
              Reset Data
            </button>
          )}
        </div>
      </div>

      {/* Version & Credits Footer */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-center text-xs text-slate-500">
        <p className="font-semibold text-slate-400">GameDev Academy — Zero to Advanced Studio Engine</p>
        <p className="mt-0.5">Version 1.0.0 • Production Ready</p>
      </div>
    </div>
  );
};
