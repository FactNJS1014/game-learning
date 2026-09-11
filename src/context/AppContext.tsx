import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  ActiveTab,
  EngineType,
  LevelType,
  Language,
  Theme,
  UserProgressData,
  UserNote,
} from '../types';
import { achievementsList } from '../data/achievementsData';
import { allLessons, getLessonById } from '../data/curriculumIndex';

interface AppContextType {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  selectedLessonId: string | null;
  selectLesson: (id: string) => void;
  filterEngine: EngineType | 'all';
  setFilterEngine: (engine: EngineType | 'all') => void;
  filterLevel: LevelType | 'all';
  setFilterLevel: (level: LevelType | 'all') => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
  searchModalOpen: boolean;
  setSearchModalOpen: (open: boolean) => void;
  progress: UserProgressData;
  markLessonComplete: (lessonId: string) => void;
  toggleBookmark: (lessonId: string) => void;
  saveNote: (lessonId: string, content: string) => void;
  deleteNote: (lessonId: string) => void;
  recordQuizScore: (lessonId: string, score: number, total: number) => void;
  toggleProjectTask: (projectId: string, taskId: string) => void;
  resetProgress: () => void;
  resetNotes: () => void;
  resetBookmarks: () => void;
  activeToast: string | null;
  showToast: (msg: string) => void;
}

const STORAGE_KEY = 'gamedev_academy_v1_progress';
const SETTINGS_KEY = 'gamedev_academy_v1_settings';

const initialProgress: UserProgressData = {
  completedLessonIds: [],
  quizScores: {},
  projectChecklists: {},
  bookmarkedLessonIds: [],
  notes: {},
  streakDays: 3,
  lastActiveDate: new Date().toISOString().split('T')[0],
  lastLessonId: 'unity-zero-001',
  unlockedAchievements: [],
  unlockedAchievementIds: [],
};

const sanitizeProgress = (raw: any): UserProgressData => {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
    return { ...initialProgress };
  }
  return {
    completedLessonIds: Array.isArray(raw.completedLessonIds) ? raw.completedLessonIds : [],
    quizScores: raw.quizScores && typeof raw.quizScores === 'object' && !Array.isArray(raw.quizScores) ? raw.quizScores : {},
    projectChecklists: raw.projectChecklists && typeof raw.projectChecklists === 'object' && !Array.isArray(raw.projectChecklists) ? raw.projectChecklists : {},
    bookmarkedLessonIds: Array.isArray(raw.bookmarkedLessonIds) ? raw.bookmarkedLessonIds : [],
    notes: raw.notes && typeof raw.notes === 'object' && !Array.isArray(raw.notes) ? raw.notes : {},
    streakDays: typeof raw.streakDays === 'number' ? raw.streakDays : 3,
    lastActiveDate: typeof raw.lastActiveDate === 'string' ? raw.lastActiveDate : new Date().toISOString().split('T')[0],
    lastLessonId: typeof raw.lastLessonId === 'string' ? raw.lastLessonId : 'unity-zero-001',
    unlockedAchievements: Array.isArray(raw.unlockedAchievements)
      ? raw.unlockedAchievements
      : Array.isArray(raw.unlockedAchievementIds)
      ? raw.unlockedAchievementIds
      : [],
    unlockedAchievementIds: Array.isArray(raw.unlockedAchievementIds) ? raw.unlockedAchievementIds : [],
  };
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>('unity-zero-001');
  const [filterEngine, setFilterEngine] = useState<EngineType | 'all'>('all');
  const [filterLevel, setFilterLevel] = useState<LevelType | 'all'>('all');
  const [language, setLanguageState] = useState<Language>('en');
  const [theme, setThemeState] = useState<Theme>('dark');
  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);
  const [activeToast, setActiveToast] = useState<string | null>(null);

  const [progress, setProgress] = useState<UserProgressData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return sanitizeProgress(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
    return initialProgress;
  });

  // Load user settings (theme, lang)
  useEffect(() => {
    try {
      const savedSettings = localStorage.getItem(SETTINGS_KEY);
      if (savedSettings) {
        const parsed = JSON.parse(savedSettings);
        if (parsed.language) setLanguageState(parsed.language);
        if (parsed.theme) setThemeState(parsed.theme);
      }
    } catch {
      // ignore
    }
  }, []);

  // Sync theme to DOM
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // Persist progress
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // ignore
    }
  }, [progress]);

  // Check and unlock achievements safely
  useEffect(() => {
    const newlyUnlocked: string[] = [];
    const currentUnlocked = progress.unlockedAchievements || [];
    achievementsList.forEach((ach) => {
      if (!currentUnlocked.includes(ach.id) && ach.condition(progress)) {
        newlyUnlocked.push(ach.id);
      }
    });

    if (newlyUnlocked.length > 0) {
      setProgress((prev) => ({
        ...prev,
        unlockedAchievements: [...(prev.unlockedAchievements || []), ...newlyUnlocked],
      }));
      const firstAch = achievementsList.find((a) => a.id === newlyUnlocked[0]);
      if (firstAch) {
        showToast(`🏆 Achievement Unlocked: ${firstAch.title[language] || firstAch.title.en}`);
      }
    }
  }, [progress.completedLessonIds, progress.quizScores, progress.notes, progress.bookmarkedLessonIds, progress.projectChecklists]);

  const showToast = (msg: string) => {
    setActiveToast(msg);
    setTimeout(() => {
      setActiveToast((curr) => (curr === msg ? null : curr));
    }, 3500);
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      const saved = localStorage.getItem(SETTINGS_KEY);
      const obj = saved ? JSON.parse(saved) : {};
      localStorage.setItem(SETTINGS_KEY, JSON.stringify({ ...obj, language: lang }));
    } catch {
      // ignore
    }
  };

  const setTheme = (t: Theme) => {
    setThemeState(t);
    try {
      const saved = localStorage.getItem(SETTINGS_KEY);
      const obj = saved ? JSON.parse(saved) : {};
      localStorage.setItem(SETTINGS_KEY, JSON.stringify({ ...obj, theme: t }));
    } catch {
      // ignore
    }
  };

  const toggleTheme = () => {
    setThemeState((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      try {
        const saved = localStorage.getItem(SETTINGS_KEY);
        const obj = saved ? JSON.parse(saved) : {};
        localStorage.setItem(SETTINGS_KEY, JSON.stringify({ ...obj, theme: next }));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const selectLesson = (id: string) => {
    setSelectedLessonId(id);
    setActiveTab('lesson');
    setProgress((prev) => ({ ...prev, lastLessonId: id }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const markLessonComplete = (lessonId: string) => {
    setProgress((prev) => {
      const isAlready = prev.completedLessonIds.includes(lessonId);
      const updated = isAlready
        ? prev.completedLessonIds.filter((id) => id !== lessonId)
        : [...prev.completedLessonIds, lessonId];

      const lesson = getLessonById(lessonId);
      const title = lesson ? lesson.title[language] : lessonId;
      if (!isAlready) {
        showToast(language === 'th' ? `✓ เรียนจบบทเรียน: ${title}` : `✓ Completed Lesson: ${title}`);
      }

      return {
        ...prev,
        completedLessonIds: updated,
      };
    });
  };

  const toggleBookmark = (lessonId: string) => {
    setProgress((prev) => {
      const isBookmarked = prev.bookmarkedLessonIds.includes(lessonId);
      const updated = isBookmarked
        ? prev.bookmarkedLessonIds.filter((id) => id !== lessonId)
        : [...prev.bookmarkedLessonIds, lessonId];

      showToast(
        isBookmarked
          ? (language === 'th' ? 'นำออกจากบุ๊กมาร์กแล้ว' : 'Removed from bookmarks')
          : (language === 'th' ? 'บันทึกเข้าบุ๊กมาร์กแล้ว' : 'Saved to bookmarks')
      );

      return { ...prev, bookmarkedLessonIds: updated };
    });
  };

  const saveNote = (lessonId: string, content: string) => {
    const lesson = getLessonById(lessonId);
    const newNote: UserNote = {
      lessonId,
      lessonTitle: lesson ? lesson.title.en : lessonId,
      engine: lesson ? lesson.engine : 'general',
      content,
      updatedAt: new Date().toLocaleDateString(),
    };

    setProgress((prev) => ({
      ...prev,
      notes: { ...prev.notes, [lessonId]: newNote },
    }));
    showToast(language === 'th' ? 'บันทึก Note สำเร็จแล้ว' : 'Note saved successfully');
  };

  const deleteNote = (lessonId: string) => {
    setProgress((prev) => {
      const nextNotes = { ...prev.notes };
      delete nextNotes[lessonId];
      return { ...prev, notes: nextNotes };
    });
    showToast(language === 'th' ? 'ลบ Note แล้ว' : 'Note deleted');
  };

  const recordQuizScore = (lessonId: string, score: number, total: number) => {
    const passed = total > 0 && score / total >= 0.6;
    setProgress((prev) => ({
      ...prev,
      quizScores: {
        ...prev.quizScores,
        [lessonId]: {
          score,
          total,
          passed,
          completedAt: new Date().toISOString(),
        },
      },
    }));

    if (passed) {
      showToast(
        language === 'th'
          ? `🎉 ผ่านควิซแล้ว! ได้ ${score}/${total} คะแนน`
          : `🎉 Quiz Passed! Scored ${score}/${total}`
      );
    } else {
      showToast(
        language === 'th'
          ? `ทบทวนอีกนิด! ได้ ${score}/${total} คะแนน`
          : `Keep practicing! Scored ${score}/${total}`
      );
    }
  };

  const toggleProjectTask = (projectId: string, taskId: string) => {
    setProgress((prev) => {
      const currentList = prev.projectChecklists[projectId] || [];
      const isCompleted = currentList.includes(taskId);
      const updated = isCompleted
        ? currentList.filter((id) => id !== taskId)
        : [...currentList, taskId];

      return {
        ...prev,
        projectChecklists: {
          ...prev.projectChecklists,
          [projectId]: updated,
        },
      };
    });
  };

  const resetProgress = () => {
    setProgress((prev) => ({
      ...prev,
      completedLessonIds: [],
      quizScores: {},
      projectChecklists: {},
      unlockedAchievements: [],
      unlockedAchievementIds: [],
    }));
    showToast(language === 'th' ? 'รีเซ็ตข้อมูลความคืบหน้าแล้ว' : 'Learning progress reset');
  };

  const resetNotes = () => {
    setProgress((prev) => ({ ...prev, notes: {} }));
    showToast(language === 'th' ? 'ล้างโน้ตทั้งหมดแล้ว' : 'All notes cleared');
  };

  const resetBookmarks = () => {
    setProgress((prev) => ({ ...prev, bookmarkedLessonIds: [] }));
    showToast(language === 'th' ? 'ล้างบุ๊กมาร์กทั้งหมดแล้ว' : 'All bookmarks cleared');
  };

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        selectedLessonId,
        selectLesson,
        filterEngine,
        setFilterEngine,
        filterLevel,
        setFilterLevel,
        language,
        setLanguage,
        theme,
        setTheme,
        toggleTheme,
        searchModalOpen,
        setSearchModalOpen,
        progress,
        markLessonComplete,
        toggleBookmark,
        saveNote,
        deleteNote,
        recordQuizScore,
        toggleProjectTask,
        resetProgress,
        resetNotes,
        resetBookmarks,
        activeToast,
        showToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
