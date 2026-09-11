export type EngineType = 'unity' | 'unreal' | 'general';
export type LevelType = 'zero' | 'basic' | 'intermediate' | 'advanced';
export type LessonLevel = LevelType;
export type Language = 'en' | 'th';
export type Theme = 'dark' | 'light';

export interface QuizScoreRecord {
  score: number;
  total: number;
  passed: boolean;
  completedAt: string;
}

export type NoteItem = UserNote;

export interface CodeExample {
  id?: string;
  title: string;
  language: 'csharp' | 'cpp' | 'blueprint' | 'json';
  code: string;
  explanation: {
    en: string[] | string;
    th: string[] | string;
  };
}

export interface LessonStep {
  stepNumber: number;
  title: {
    en: string;
    th: string;
  };
  explanation: {
    en: string;
    th: string;
  };
  inspectorData?: {
    componentName?: string;
    properties?: { name: string; value: string; hint?: string }[];
  };
  codeSnippet?: string;
  codeLanguage?: string;
  imageUrl?: string;
  imageCaption?: {
    en: string;
    th: string;
  };
  diagramType?: 'hierarchy' | 'inspector' | 'flow' | 'transform' | 'blueprint' | 'coordinates';
}

export interface PracticeTask {
  id: string;
  task?: {
    en: string;
    th: string;
  };
  title?: {
    en: string;
    th: string;
  };
  hints?: {
    en: string;
    th: string;
  };
  completed?: boolean;
}

export interface CommonMistake {
  title?: {
    en: string;
    th: string;
  };
  mistake?: {
    en: string;
    th: string;
  };
  problem?: {
    en: string;
    th: string;
  };
  cause?: {
    en: string;
    th: string;
  };
  why?: {
    en: string;
    th: string;
  };
  solution?: {
    en: string;
    th: string;
  };
  fix?: {
    en: string;
    th: string;
  };
}

export interface QuizQuestion {
  id?: string;
  question: {
    en: string;
    th: string;
  };
  options: {
    en: string[];
    th: string[];
  };
  correctAnswer?: number; // 0-indexed
  correctIndex?: number;
  explanation: {
    en: string;
    th: string;
  };
}

export interface VisualDiagramData {
  type:
    | 'game-loop'
    | 'gameobject-component'
    | 'transform'
    | 'physics-pipeline'
    | 'blueprint-flow'
    | 'ai-behavior-tree'
    | 'lifecycle'
    | 'network-flow'
    | 'fsm-states'
    | 'object-pool'
    | 'render-pipeline'
    | 'save-load'
    | 'enhanced-input'
    | 'pbr-material'
    | 'character-movement'
    | 'scriptable-object'
    | 'actor-component';
  title: {
    en: string;
    th: string;
  };
  description: {
    en: string;
    th: string;
  };
}

export interface Lesson {
  id: string;
  engine: EngineType;
  level: LevelType;
  lessonNumber: number;
  slug: string;
  heroImage?: string;
  heroImageCaption?: {
    en: string;
    th: string;
  };
  title: {
    en: string;
    th: string;
  };
  shortDescription: {
    en: string;
    th: string;
  };
  estimatedMinutes: number;
  tags: string[];
  startFromZero: boolean;
  objectives: {
    en: string[];
    th: string[];
  };
  prerequisites: {
    en: string[];
    th: string[];
  };
  zeroExplanation: {
    what: { en: string; th: string };
    why: { en: string; th: string };
    how: { en: string; th: string };
    when: { en: string; th: string };
  };
  diagram?: VisualDiagramData;
  steps: LessonStep[];
  codeExamples: CodeExample[];
  practiceChecklist: PracticeTask[];
  miniChallenge: {
    title?: { en: string; th: string };
    prompt?: { en: string; th: string };
    description?: { en: string; th: string };
    difficulty?: 1 | 2 | 3 | 4 | 5;
    hint?: { en: string; th: string };
    hints?: { en: string; th: string };
    solution?: string | { en: string; th: string };
  };
  commonMistakes: CommonMistake[];
  quiz: QuizQuestion[];
  summary?: {
    en: string[] | string;
    th: string[] | string;
  };
  nextLessonId?: string;
  prevLessonId?: string;
}

export interface ProjectMilestone {
  id: string;
  milestoneNumber: number;
  title: {
    en: string;
    th: string;
  };
  description: {
    en: string;
    th: string;
  };
  tasks: { id: string; title: { en: string; th: string }; completed?: boolean }[];
  relatedLessonIds?: string[];
}

export interface GameProject {
  id: string;
  engine: EngineType;
  title: {
    en: string;
    th: string;
  };
  description: {
    en: string;
    th: string;
  };
  genre: string;
  difficulty: LevelType;
  estimatedHours: number;
  tags: string[];
  coverGradient: string;
  milestones: ProjectMilestone[];
  flowchartSteps: { en: string; th: string }[];
}

export interface UserNote {
  lessonId: string;
  lessonTitle: string;
  engine: EngineType;
  content: string;
  updatedAt: string;
}

export interface UserProgressData {
  completedLessonIds: string[];
  quizScores: Record<string, { score: number; total: number; passed: boolean; completedAt: string }>;
  projectChecklists: Record<string, string[]>; // projectId -> array of completed task IDs
  bookmarkedLessonIds: string[];
  notes: Record<string, UserNote>; // lessonId -> note
  streakDays: number;
  lastActiveDate: string;
  lastLessonId?: string;
  unlockedAchievements: string[];
  unlockedAchievementIds: string[];
}

export interface Achievement {
  id: string;
  title: { en: string; th: string };
  description: { en: string; th: string };
  icon: string;
  category?: string;
  unlockedAt?: string;
  condition: (progress: UserProgressData) => boolean;
}

export type ActiveTab =
  | 'home'
  | 'dashboard'
  | 'learning'
  | 'unity'
  | 'unreal'
  | 'lesson'
  | 'projects'
  | 'project-builder'
  | 'tools'
  | 'playground'
  | 'blueprint-sim'
  | 'comparison'
  | 'progress'
  | 'bookmarks'
  | 'notes'
  | 'settings';
