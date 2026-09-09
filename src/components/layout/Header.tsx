import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Search,
  Flame,
  Sun,
  Moon,
  Bookmark,
  BookOpen,
  Menu,
  Terminal,
  Gamepad2,
  Box,
} from 'lucide-react';

interface HeaderProps {
  onToggleMobileMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onToggleMobileMenu }) => {
  const {
    language,
    setLanguage,
    theme,
    setTheme,
    setSearchModalOpen,
    progress,
    setActiveTab,
    filterEngine,
    setFilterEngine,
  } = useApp();

  const bookmarkCount = progress.bookmarkedLessonIds.length;
  const notesCount = Object.keys(progress.notes).length;

  return (
    <header
      id="app-header"
      className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-slate-800/80 bg-slate-950/80 px-4 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/85 light:border-slate-200 light:bg-white/90"
    >
      {/* Left side: Mobile menu toggle & Engine Quick Filter */}
      <div className="flex items-center gap-3">
        <button
          id="mobile-sidebar-toggle-btn"
          onClick={onToggleMobileMenu}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 text-slate-300 transition hover:bg-slate-800 hover:text-white md:hidden"
          aria-label="Toggle navigation menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Engine selector pills */}
        <div className="hidden sm:flex items-center gap-1 rounded-xl border border-slate-800 bg-slate-900/90 p-1">
          <button
            id="filter-all-engine-btn"
            onClick={() => {
              setFilterEngine('all');
              setActiveTab('learning');
            }}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1 text-xs font-semibold transition ${
              filterEngine === 'all'
                ? 'bg-slate-800 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Box className="h-3.5 w-3.5" />
            <span>All Engines</span>
          </button>
          <button
            id="filter-unity-engine-btn"
            onClick={() => {
              setFilterEngine('unity');
              setActiveTab('unity');
            }}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1 text-xs font-semibold transition ${
              filterEngine === 'unity'
                ? 'bg-red-600/90 text-white shadow-sm shadow-red-900/40'
                : 'text-slate-400 hover:text-red-400'
            }`}
          >
            <Gamepad2 className="h-3.5 w-3.5 text-red-500" />
            <span>Unity</span>
          </button>
          <button
            id="filter-unreal-engine-btn"
            onClick={() => {
              setFilterEngine('unreal');
              setActiveTab('unreal');
            }}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1 text-xs font-semibold transition ${
              filterEngine === 'unreal'
                ? 'bg-blue-600/90 text-white shadow-sm shadow-blue-900/40'
                : 'text-slate-400 hover:text-blue-400'
            }`}
          >
            <Terminal className="h-3.5 w-3.5 text-blue-400" />
            <span>Unreal Engine</span>
          </button>
        </div>
      </div>

      {/* Middle: Global Search bar */}
      <div className="flex flex-1 max-w-md mx-4">
        <button
          id="global-search-trigger-btn"
          onClick={() => setSearchModalOpen(true)}
          className="group flex h-9 w-full items-center justify-between rounded-lg border border-slate-800 bg-slate-900/80 px-3.5 text-xs text-slate-400 transition hover:border-slate-700 hover:bg-slate-900 hover:text-slate-200"
        >
          <div className="flex items-center gap-2">
            <Search className="h-4 w-4 text-slate-500 group-hover:text-slate-300" />
            <span>
              {language === 'th' ? 'ค้นหาบทเรียน, C#, Blueprint, AI...' : 'Search lessons, C#, Blueprint, AI...'}
            </span>
          </div>
          <kbd className="hidden sm:inline-flex items-center gap-0.5 rounded border border-slate-700 bg-slate-800 px-1.5 py-0.5 text-[10px] font-mono text-slate-400">
            ⌘K
          </kbd>
        </button>
      </div>

      {/* Right side: Streak, Bookmarks, Notes, Language, Theme */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Streak Counter */}
        <div
          id="learning-streak-indicator"
          title={language === 'th' ? 'สถิติเรียนต่อเนื่อง' : 'Learning Streak'}
          className="flex items-center gap-1.5 rounded-lg border border-amber-500/20 bg-amber-500/10 px-2.5 py-1 text-xs font-semibold text-amber-400"
        >
          <Flame className="h-4 w-4 fill-amber-500 text-amber-500 animate-pulse" />
          <span>{progress.streakDays}</span>
          <span className="hidden sm:inline text-[11px] text-amber-400/80">
            {language === 'th' ? 'วัน' : 'days'}
          </span>
        </div>

        {/* Bookmarks Icon */}
        <button
          id="header-bookmarks-btn"
          onClick={() => setActiveTab('bookmarks')}
          title={language === 'th' ? 'บุ๊กมาร์กของฉัน' : 'My Bookmarks'}
          className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 text-slate-300 transition hover:border-slate-700 hover:bg-slate-800 hover:text-white"
        >
          <Bookmark className="h-4 w-4" />
          {bookmarkCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-500 text-[10px] font-bold text-white">
              {bookmarkCount}
            </span>
          )}
        </button>

        {/* Notes Icon */}
        <button
          id="header-notes-btn"
          onClick={() => setActiveTab('notes')}
          title={language === 'th' ? 'โน้ตของฉัน' : 'My Notes'}
          className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 text-slate-300 transition hover:border-slate-700 hover:bg-slate-800 hover:text-white"
        >
          <BookOpen className="h-4 w-4" />
          {notesCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-bold text-white">
              {notesCount}
            </span>
          )}
        </button>

        {/* Language Toggle: TH | EN */}
        <div className="flex items-center rounded-lg border border-slate-800 bg-slate-900 p-0.5 text-xs font-semibold">
          <button
            id="lang-en-btn"
            onClick={() => setLanguage('en')}
            className={`rounded px-2 py-1 transition ${
              language === 'en'
                ? 'bg-slate-800 text-white font-bold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            EN
          </button>
          <button
            id="lang-th-btn"
            onClick={() => setLanguage('th')}
            className={`rounded px-2 py-1 transition ${
              language === 'th'
                ? 'bg-slate-800 text-white font-bold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            TH
          </button>
        </div>

        {/* Theme Toggle: Dark / Light */}
        <button
          id="theme-toggle-btn"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 text-slate-300 transition hover:border-slate-700 hover:bg-slate-800 hover:text-white"
        >
          {theme === 'dark' ? (
            <Sun className="h-4 w-4 text-amber-400" />
          ) : (
            <Moon className="h-4 w-4 text-indigo-400" />
          )}
        </button>
      </div>
    </header>
  );
};
