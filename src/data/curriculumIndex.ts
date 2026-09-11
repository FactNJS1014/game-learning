import { Lesson, EngineType, LevelType } from '../types';
import { unityZeroLessons } from './lessons/unityZero';
import { unityBasicLessons } from './lessons/unityBasic';
import { unityIntermediateLessons } from './lessons/unityIntermediate';
import { unityAdvancedLessons } from './lessons/unityAdvanced';
import { unrealZeroLessons } from './lessons/unrealZero';
import { unrealBasicLessons } from './lessons/unrealBasic';
import { unrealIntermediateLessons } from './lessons/unrealIntermediate';
import { unrealAdvancedLessons } from './lessons/unrealAdvanced';
import { generalLessons } from './lessons/generalLessons';

// Complete Curriculum Syllabus for GameDev Academy (155+ comprehensive roadmap topics)
export interface CurriculumTopic {
  id: string;
  engine: EngineType;
  level: LevelType;
  number: number;
  title: { en: string; th: string };
  category: string;
  estimatedMinutes: number;
  hasFullLesson: boolean;
}

export const fullCurriculumCatalog: CurriculumTopic[] = [
  // UNITY - LEVEL 0 (Absolute Beginner)
  { id: 'unity-zero-001', engine: 'unity', level: 'zero', number: 1, title: { en: 'What is Unity? Understanding the Engine', th: 'Unity คืออะไร? ทำความเข้าใจ Game Engine' }, category: 'Overview', estimatedMinutes: 20, hasFullLesson: true },
  { id: 'unity-zero-002', engine: 'unity', level: 'zero', number: 2, title: { en: 'GameObjects & Transforms: Coordinates & Hierarchy', th: 'GameObject และ Transform: หัวใจและพิกัดตำแหน่ง' }, category: 'Architecture', estimatedMinutes: 25, hasFullLesson: true },
  { id: 'unity-zero-003', engine: 'unity', level: 'zero', number: 3, title: { en: 'Components & Rigidbody: Gravity & Collisions', th: 'Components และ Rigidbody: น้ำหนักและฟิสิกส์' }, category: 'Physics', estimatedMinutes: 25, hasFullLesson: true },
  { id: 'unity-zero-004', engine: 'unity', level: 'zero', number: 4, title: { en: 'Player Movement: Connecting Input to Avatar', th: 'การควบคุมผู้เล่น: เชื่อมต่อคีย์บอร์ดและจอยเกม' }, category: 'Gameplay', estimatedMinutes: 30, hasFullLesson: true },

  // UNITY BASIC (C#, Gameplay & Physics)
  { id: 'unity-basic-001', engine: 'unity', level: 'basic', number: 5, title: { en: 'C# Scripting & MonoBehaviour Lifecycle', th: 'การเขียนโค้ด C# และวงจรชีวิต MonoBehaviour' }, category: 'C# Scripting', estimatedMinutes: 30, hasFullLesson: true },
  { id: 'unity-basic-002', engine: 'unity', level: 'basic', number: 6, title: { en: 'Collisions, Triggers & Physics Layers', th: 'ระบบการชน (Collisions) และจุดตรวจจับ (Triggers)' }, category: 'Physics', estimatedMinutes: 30, hasFullLesson: true },
  { id: 'unity-basic-003', engine: 'unity', level: 'basic', number: 7, title: { en: 'Instantiate, Destroy & Prefab Spawning', th: 'การเสกวัตถุ Instantiate และระบบ Prefab' }, category: 'Gameplay', estimatedMinutes: 30, hasFullLesson: true },
  { id: 'unity-basic-004', engine: 'unity', level: 'basic', number: 8, title: { en: 'UI Canvas, TextMeshPro & Health Bar HUD', th: 'ระบบ UI Canvas, TextMeshPro และหลอดเลือด HUD' }, category: 'UI', estimatedMinutes: 30, hasFullLesson: true },

  // UNITY INTERMEDIATE (Architecture, AI & Save Systems)
  { id: 'unity-intermediate-001', engine: 'unity', level: 'intermediate', number: 9, title: { en: 'ScriptableObjects: Data-Driven Architecture', th: 'ScriptableObject: สถาปัตยกรรมเก็บข้อมูลไอเทมและอาวุธ' }, category: 'Architecture', estimatedMinutes: 35, hasFullLesson: true },
  { id: 'unity-intermediate-002', engine: 'unity', level: 'intermediate', number: 10, title: { en: 'Animation Controller: Blend Trees & Parameters', th: 'Animation Controller: Blend Tree และ State Machine' }, category: 'Animation', estimatedMinutes: 35, hasFullLesson: true },
  { id: 'unity-intermediate-003', engine: 'unity', level: 'intermediate', number: 11, title: { en: 'NavMesh Pathfinding: AI Waypoints & Chasing', th: 'ระบบ AI เดินตามเส้นทาง NavMesh และการไล่ล่า' }, category: 'AI', estimatedMinutes: 35, hasFullLesson: true },
  { id: 'unity-intermediate-004', engine: 'unity', level: 'intermediate', number: 12, title: { en: 'Save & Load System: JSON Serialization', th: 'ระบบเซฟเกม: บันทึกและโหลดข้อมูลด้วย JSON' }, category: 'System', estimatedMinutes: 35, hasFullLesson: true },

  // UNITY ADVANCED (Architecture, Optimization & Shaders)
  { id: 'unity-advanced-001', engine: 'unity', level: 'advanced', number: 13, title: { en: 'State Machine Design Pattern (FSM)', th: 'State Machine Design Pattern: สถาปัตยกรรมสถานะตัวละคร' }, category: 'Architecture', estimatedMinutes: 40, hasFullLesson: true },
  { id: 'unity-advanced-002', engine: 'unity', level: 'advanced', number: 14, title: { en: 'Object Pooling: High-Performance Optimization', th: 'Object Pooling: เทคนิครียูสวัตถุเพื่อลดการกระตุก' }, category: 'Optimization', estimatedMinutes: 35, hasFullLesson: true },
  { id: 'unity-advanced-003', engine: 'unity', level: 'advanced', number: 15, title: { en: 'Shader Graph: Dissolve & Force Field FX', th: 'Shader Graph: การสร้างเอฟเฟกต์สลายร่าง Dissolve และบาเรีย' }, category: 'Graphics', estimatedMinutes: 40, hasFullLesson: true },

  // UNREAL - LEVEL 0 (Absolute Beginner)
  { id: 'unreal-zero-001', engine: 'unreal', level: 'zero', number: 1, title: { en: 'What is Unreal Engine? Nanite, Lumen & The Powerhouse', th: 'Unreal Engine คืออะไร? Nanite, Lumen และสุดยอดกราฟิก' }, category: 'Overview', estimatedMinutes: 20, hasFullLesson: true },
  { id: 'unreal-zero-002', engine: 'unreal', level: 'zero', number: 2, title: { en: 'Blueprint from Zero: Visual Scripting Foundations', th: 'Blueprint จากศูนย์: เข้าใจตัวแปร เงื่อนไข และ Event Graph' }, category: 'Blueprint', estimatedMinutes: 25, hasFullLesson: true },
  { id: 'unreal-zero-003', engine: 'unreal', level: 'zero', number: 3, title: { en: 'Actors, Components & The Level Hierarchy', th: 'หัวใจของ Unreal: โครงสร้าง Actor, Component และฉาก' }, category: 'Architecture', estimatedMinutes: 25, hasFullLesson: true },
  { id: 'unreal-zero-004', engine: 'unreal', level: 'zero', number: 4, title: { en: 'Materials & Shaders: BaseColor, Roughness & Normal', th: 'ระบบ Material ใน Unreal: สี ความมันเงา โลหะ และมิติพื้นผิว' }, category: 'Materials', estimatedMinutes: 25, hasFullLesson: true },

  // UNREAL BASIC (Gameplay, Input & UI)
  { id: 'unreal-basic-001', engine: 'unreal', level: 'basic', number: 5, title: { en: 'Character Movement Component & Physical Traversal', th: 'Character Movement Component: การตั้งค่าการวิ่งและกระโดด' }, category: 'Movement', estimatedMinutes: 30, hasFullLesson: true },
  { id: 'unreal-basic-002', engine: 'unreal', level: 'basic', number: 6, title: { en: 'Enhanced Input System: Actions, Contexts & Triggers', th: 'ระบบ Enhanced Input: การผูกปุ่มและคันโยกสมัยใหม่' }, category: 'Input', estimatedMinutes: 35, hasFullLesson: true },
  { id: 'unreal-basic-003', engine: 'unreal', level: 'basic', number: 7, title: { en: 'UMG UI Widgets: Canvas, Health Bars & Overlays', th: 'UMG UI: การสร้างแถบเลือดและเป้าเล็งด้วย Widget' }, category: 'UI', estimatedMinutes: 30, hasFullLesson: true },
  { id: 'unreal-basic-004', engine: 'unreal', level: 'basic', number: 8, title: { en: 'Collisions, Triggers & Skeletal Mesh Sockets', th: 'ระบบ Collision และการถืออาวุธด้วย Skeletal Mesh Socket' }, category: 'Physics', estimatedMinutes: 30, hasFullLesson: true },

  // UNREAL INTERMEDIATE (AnimBP, AI & Persistence)
  { id: 'unreal-intermediate-001', engine: 'unreal', level: 'intermediate', number: 9, title: { en: 'Animation Blueprints: Blendspaces & State Machines', th: 'ระบบ Animation Blueprint: 2D Blendspace และ State Machine' }, category: 'Animation', estimatedMinutes: 35, hasFullLesson: true },
  { id: 'unreal-intermediate-002', engine: 'unreal', level: 'intermediate', number: 10, title: { en: 'AI Behavior Trees & Blackboard: Tasks & Perception', th: 'ระบบสมองกล AI: Behavior Tree, Blackboard และตรวจจับสายตา' }, category: 'AI', estimatedMinutes: 35, hasFullLesson: true },
  { id: 'unreal-intermediate-003', engine: 'unreal', level: 'intermediate', number: 11, title: { en: 'Blueprint Interfaces: Decoupled Interaction Systems', th: 'ระบบ Blueprint Interface: การสร้างระบบกดสำรวจและตอบสนอง' }, category: 'Architecture', estimatedMinutes: 30, hasFullLesson: true },
  { id: 'unreal-intermediate-004', engine: 'unreal', level: 'intermediate', number: 12, title: { en: 'SaveGame System: Persistent Data & Checkpoints', th: 'ระบบเซฟเกม SaveGame: การบันทึกข้อมูลถาวรและจุด Checkpoint' }, category: 'System', estimatedMinutes: 35, hasFullLesson: true },

  // UNREAL ADVANCED (GAS, Niagara & Optimization)
  { id: 'unreal-advanced-001', engine: 'unreal', level: 'advanced', number: 13, title: { en: 'Gameplay Ability System (GAS): Abilities, Effects & Tags', th: 'สถาปัตยกรรม Gameplay Ability System (GAS): ระบบสกิลระดับโปร' }, category: 'Architecture', estimatedMinutes: 40, hasFullLesson: true },
  { id: 'unreal-advanced-002', engine: 'unreal', level: 'advanced', number: 14, title: { en: 'Niagara Particle VFX: GPU Sim & Dynamic Emitters', th: 'ระบบเอฟเฟกต์อนุภาค Niagara VFX: การจำลองด้วย GPU' }, category: 'VFX', estimatedMinutes: 35, hasFullLesson: true },
  { id: 'unreal-advanced-003', engine: 'unreal', level: 'advanced', number: 15, title: { en: 'Unreal Insights & Performance Profiling: 60+ FPS Mastery', th: 'การวัดประสิทธิภาพด้วย Unreal Insights: การปรับจูน 60+ FPS' }, category: 'Optimization', estimatedMinutes: 40, hasFullLesson: true },

  // GENERAL GAME DEV (All Levels)
  { id: 'general-zero-001', engine: 'general', level: 'zero', number: 1, title: { en: 'Game Math Foundations: Vectors, DeltaTime & Dot Product', th: 'คณิตศาสตร์สร้างเกมจากศูนย์: เวกเตอร์, DeltaTime และ Dot Product' }, category: 'Math', estimatedMinutes: 25, hasFullLesson: true },
  { id: 'general-basic-001', engine: 'general', level: 'basic', number: 2, title: { en: 'Game Feel & Juice: Screenshake, Hitstop & Impact Punch', th: 'ศาสตร์แห่ง Game Feel: ความสะใจด้วย Screenshake และ Hitstop' }, category: 'GameFeel', estimatedMinutes: 30, hasFullLesson: true },
  { id: 'general-intermediate-001', engine: 'general', level: 'intermediate', number: 3, title: { en: 'Game Audio Pipeline: Spatial 3D Audio & Dynamic Mixing', th: 'ระบบเสียงในเกม: เสียงจำลอง 3 มิติ (Spatial Audio) และ Mixer' }, category: 'Audio', estimatedMinutes: 30, hasFullLesson: true },
  { id: 'general-advanced-001', engine: 'general', level: 'advanced', number: 4, title: { en: 'Multiplayer Networking: Client-Server & Replication', th: 'สถาปัตยกรรมระบบเกมออนไลน์: Server Authority และ Replication' }, category: 'Multiplayer', estimatedMinutes: 40, hasFullLesson: true },
];

export const allLessons: Lesson[] = [
  // Unity Tracks
  ...unityZeroLessons,
  ...unityBasicLessons,
  ...unityIntermediateLessons,
  ...unityAdvancedLessons,
  // Unreal Tracks
  ...unrealZeroLessons,
  ...unrealBasicLessons,
  ...unrealIntermediateLessons,
  ...unrealAdvancedLessons,
  // General Track
  ...generalLessons,
];

export function getLessonById(id: string): Lesson | undefined {
  return allLessons.find((l) => l.id === id);
}

export function getLessonsByEngine(engine: EngineType): Lesson[] {
  return allLessons.filter((l) => l.engine === engine);
}

export function getLessonsByLevel(level: LevelType): Lesson[] {
  return allLessons.filter((l) => l.level === level);
}
