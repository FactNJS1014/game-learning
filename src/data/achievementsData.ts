import { Achievement, UserProgressData } from '../types';

export const achievementsList: Achievement[] = [
  {
    id: 'first-step',
    title: { en: 'First Step into GameDev', th: 'ก้าวแรกสู่วงการสร้างเกม' },
    description: { en: 'Complete your very first lesson in GameDev Academy.', th: 'เรียนจบและกดเสร็จสิ้นบทเรียนแรกของคุณ' },
    icon: 'Sparkles',
    condition: (p: UserProgressData) => (p?.completedLessonIds || []).length >= 1,
  },
  {
    id: 'quiz-master',
    title: { en: 'Quiz Ace', th: 'เซียนตอบควิซ' },
    description: { en: 'Complete any quiz with a 100% perfect score.', th: 'สอบผ่านควิซใดก็ได้ด้วยคะแนนเต็ม 100%' },
    icon: 'Award',
    condition: (p: UserProgressData) => Object.values(p?.quizScores || {}).some((q) => q && q.score === q.total && q.total > 0),
  },
  {
    id: 'unity-initiate',
    title: { en: 'Unity Initiate', th: 'ผู้เริ่มต้นเส้นทาง Unity' },
    description: { en: 'Complete 2 or more Unity lessons.', th: 'เรียนจบเนื้อหาฝั่ง Unity ครบ 2 บทเรียนขึ้นไป' },
    icon: 'Gamepad2',
    condition: (p: UserProgressData) => (p?.completedLessonIds || []).filter((id) => id?.startsWith('unity-')).length >= 2,
  },
  {
    id: 'unreal-pioneer',
    title: { en: 'Unreal Pioneer', th: 'ผู้บุกเบิกโลก Unreal' },
    description: { en: 'Complete 2 or more Unreal Engine lessons.', th: 'เรียนจบเนื้อหาฝั่ง Unreal ครบ 2 บทเรียนขึ้นไป' },
    icon: 'Flame',
    condition: (p: UserProgressData) => (p?.completedLessonIds || []).filter((id) => id?.startsWith('unreal-')).length >= 2,
  },
  {
    id: 'note-taker',
    title: { en: 'Studio Scholar', th: 'นักจดบันทึกมืออาชีพ' },
    description: { en: 'Write and save notes on any lesson.', th: 'บันทึก Note สรุปความเข้าใจส่วนตัวในบทเรียน' },
    icon: 'BookOpen',
    condition: (p: UserProgressData) => Object.keys(p?.notes || {}).length >= 1,
  },
  {
    id: 'bookmark-collector',
    title: { en: 'Curator', th: 'ผู้สะสมคลังความรู้' },
    description: { en: 'Bookmark at least 2 lessons for quick reference.', th: 'กดบุ๊กมาร์กเก็บเนื้อหาบทเรียนไว้ทบทวน 2 บทขึ้นไป' },
    icon: 'Bookmark',
    condition: (p: UserProgressData) => (p?.bookmarkedLessonIds || []).length >= 2,
  },
  {
    id: 'project-builder',
    title: { en: 'Milestone Finisher', th: 'นักพิชิตโปรเจกต์' },
    description: { en: 'Complete 3 milestone tasks in any Game Project.', th: 'ทำภารกิจในโปรเจกต์เสร็จสิ้นครบ 3 ข้อ' },
    icon: 'CheckCircle2',
    condition: (p: UserProgressData) => {
      const allTasks = Object.values(p?.projectChecklists || {}).flat();
      return allTasks.length >= 3;
    },
  },
  {
    id: 'dual-engine-explorer',
    title: { en: 'Dual-Engine Master', th: 'ผู้เชี่ยวชาญ 2 เอนจิน' },
    description: { en: 'Complete lessons in both Unity AND Unreal Engine.', th: 'เรียนจบอย่างน้อย 1 บทเรียนทั้งใน Unity และ Unreal' },
    icon: 'Layers',
    condition: (p: UserProgressData) => {
      const hasUnity = (p?.completedLessonIds || []).some((id) => id?.startsWith('unity-'));
      const hasUnreal = (p?.completedLessonIds || []).some((id) => id?.startsWith('unreal-'));
      return hasUnity && hasUnreal;
    },
  },
];
