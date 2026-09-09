import { Lesson, EngineType, LevelType } from '../types';
import { unityLessons } from './unityLessons';
import { unrealLessons } from './unrealLessons';
import { generalLessons } from './generalLessons';

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
  // UNITY - LEVEL 0 (15 Zero Lessons)
  { id: 'unity-zero-001', engine: 'unity', level: 'zero', number: 1, title: { en: 'What is Unity? Understanding the Engine', th: 'Unity คืออะไร? ทำความเข้าใจ Game Engine' }, category: 'Overview', estimatedMinutes: 20, hasFullLesson: true },
  { id: 'unity-zero-002', engine: 'unity', level: 'zero', number: 2, title: { en: 'GameObjects & Transforms: Coordinates & Hierarchy', th: 'GameObject และ Transform: หัวใจและพิกัดตำแหน่ง' }, category: 'Architecture', estimatedMinutes: 25, hasFullLesson: true },
  { id: 'unity-zero-003', engine: 'unity', level: 'zero', number: 3, title: { en: 'Components & Rigidbody: Gravity & Collisions', th: 'Components และ Rigidbody: น้ำหนักและฟิสิกส์' }, category: 'Physics', estimatedMinutes: 25, hasFullLesson: true },
  { id: 'unity-zero-004', engine: 'unity', level: 'zero', number: 4, title: { en: 'Player Movement: Connecting Input to Avatar', th: 'การควบคุมผู้เล่น: เชื่อมต่อคีย์บอร์ดและจอยเกม' }, category: 'Gameplay', estimatedMinutes: 30, hasFullLesson: true },
  { id: 'unity-zero-005', engine: 'unity', level: 'zero', number: 5, title: { en: 'Installing Unity Hub & Choosing the Right LTS Version', th: 'การติดตั้ง Unity Hub และการเลือกเวอร์ชัน LTS' }, category: 'Setup', estimatedMinutes: 15, hasFullLesson: false },
  { id: 'unity-zero-006', engine: 'unity', level: 'zero', number: 6, title: { en: 'Creating Your First Project & Template Selection', th: 'การสร้างโปรเจกต์แรกและการเลือก Template 2D/3D' }, category: 'Setup', estimatedMinutes: 15, hasFullLesson: false },
  { id: 'unity-zero-007', engine: 'unity', level: 'zero', number: 7, title: { en: 'Mastering the Unity Editor: Scene, Game & Hierarchy', th: 'ทำความเข้าใจหน้าต่าง Scene, Game, Hierarchy และ Inspector' }, category: 'Editor', estimatedMinutes: 20, hasFullLesson: false },
  { id: 'unity-zero-008', engine: 'unity', level: 'zero', number: 8, title: { en: 'Scene Management: Coordinate Grids & Gizmos', th: 'การจัดการ Scene พิกัดโลก กริต และ Gizmos' }, category: 'Scene', estimatedMinutes: 20, hasFullLesson: false },
  { id: 'unity-zero-009', engine: 'unity', level: 'zero', number: 9, title: { en: 'Understanding Prefabs: Reusable Game Objects', th: 'ทำความเข้าใจ Prefab: แม่พิมพ์วัตถุที่ใช้ซ้ำได้ทั้งเกม' }, category: 'Architecture', estimatedMinutes: 25, hasFullLesson: false },
  { id: 'unity-zero-0010', engine: 'unity', level: 'zero', number: 10, title: { en: 'Materials & Standard Shaders: Colors & Textures', th: 'Material และ Shader พื้นฐาน: การใส่สีและพื้นผิว' }, category: 'Graphics', estimatedMinutes: 25, hasFullLesson: false },
  { id: 'unity-zero-0011', engine: 'unity', level: 'zero', number: 11, title: { en: 'Cameras in Unity: Projection, FOV & Cinemachine intro', th: 'ระบบกล้องใน Unity: มุมมอง FOV และ Cinemachine' }, category: 'Camera', estimatedMinutes: 20, hasFullLesson: false },
  { id: 'unity-zero-0012', engine: 'unity', level: 'zero', number: 12, title: { en: 'Lighting Fundamentals: Directional, Point & Spotlights', th: 'ระบบแสงพื้นฐาน: แสงแดด แสงหลอดไฟ และสปอตไลท์' }, category: 'Lighting', estimatedMinutes: 20, hasFullLesson: false },
  { id: 'unity-zero-0013', engine: 'unity', level: 'zero', number: 13, title: { en: 'Audio Source & Audio Listener: Spatial 3D Sound', th: 'ระบบเสียง 3D: Audio Source และ Audio Listener' }, category: 'Audio', estimatedMinutes: 20, hasFullLesson: false },
  { id: 'unity-zero-0014', engine: 'unity', level: 'zero', number: 14, title: { en: 'Tag & Layer System: Filtering Collisions & Raycasts', th: 'ระบบ Tag และ Layer: การคัดกรองการชนและการยิงเรย์' }, category: 'Physics', estimatedMinutes: 20, hasFullLesson: false },
  { id: 'unity-zero-0015', engine: 'unity', level: 'zero', number: 15, title: { en: 'Building & Running Your First Standalone PC Game', th: 'การคอมไพล์และ Export เกมตัวแรกเป็นไฟล์ .exe' }, category: 'Publishing', estimatedMinutes: 25, hasFullLesson: false },

  // UNITY BASIC (C#, 2D & 3D Basics - 20 Lessons)
  { id: 'unity-basic-001', engine: 'unity', level: 'basic', number: 16, title: { en: 'C# From Zero: Variables, Int, Float & Strings', th: 'C# จากศูนย์: ตัวแปร จำนวนเต็ม ทศนิยม และข้อความ' }, category: 'C# Scripting', estimatedMinutes: 30, hasFullLesson: false },
  { id: 'unity-basic-002', engine: 'unity', level: 'basic', number: 17, title: { en: 'C# Conditionals: If, Else If & Switch Statements', th: 'C# การตัดสินใจเงื่อนไข: If, Else และ Switch' }, category: 'C# Scripting', estimatedMinutes: 25, hasFullLesson: false },
  { id: 'unity-basic-003', engine: 'unity', level: 'basic', number: 18, title: { en: 'C# Loops: For, While & Foreach Iterations', th: 'C# ลูปการทำงานซ้ำ: For, While และ Foreach' }, category: 'C# Scripting', estimatedMinutes: 25, hasFullLesson: false },
  { id: 'unity-basic-004', engine: 'unity', level: 'basic', number: 19, title: { en: 'C# Methods: Parameters, Return Types & Scope', th: 'C# ฟังก์ชันและ Method: การส่งค่าและผลลัพธ์' }, category: 'C# Scripting', estimatedMinutes: 30, hasFullLesson: false },
  { id: 'unity-basic-005', engine: 'unity', level: 'basic', number: 20, title: { en: 'Classes & Objects: The Blueprint of Object-Oriented Code', th: 'Class และ Object: พื้นฐานการเขียนโปรแกรมเชิงวัตถุ' }, category: 'C# Scripting', estimatedMinutes: 35, hasFullLesson: false },
  { id: 'unity-basic-006', engine: 'unity', level: 'basic', number: 21, title: { en: 'MonoBehaviour Lifecycle: Awake, Start, Update, FixedUpdate', th: 'วงจรชีวิต MonoBehaviour: Awake, Start, Update, FixedUpdate' }, category: 'Unity API', estimatedMinutes: 30, hasFullLesson: false },
  { id: 'unity-basic-007', engine: 'unity', level: 'basic', number: 22, title: { en: 'GetComponent & Object References: Finding Components', th: 'GetComponent: การค้นหาและเชื่อมโยง Component ในฉาก' }, category: 'Unity API', estimatedMinutes: 25, hasFullLesson: false },
  { id: 'unity-basic-008', engine: 'unity', level: 'basic', number: 23, title: { en: 'Instantiate & Destroy: Spawning Bullets and Enemies', th: 'Instantiate & Destroy: การเสกและลบกระสุนหรือศัตรู' }, category: 'Unity API', estimatedMinutes: 25, hasFullLesson: false },
  { id: 'unity-basic-009', engine: 'unity', level: 'basic', number: 24, title: { en: '2D Sprites & Sprite Renderer: Pixel Art Setup', th: '2D Sprite และ Sprite Renderer: การตั้งค่าเกมพิกเซล' }, category: '2D Games', estimatedMinutes: 25, hasFullLesson: false },
  { id: 'unity-basic-0010', engine: 'unity', level: 'basic', number: 25, title: { en: 'Rigidbody2D & Collider2D: 2D Physics Engine', th: 'Rigidbody2D และ Collider2D: ระบบฟิสิกส์ 2 มิติ' }, category: '2D Games', estimatedMinutes: 25, hasFullLesson: false },
  { id: 'unity-basic-0011', engine: 'unity', level: 'basic', number: 26, title: { en: '2D Character Controller: Smooth Horizontal Walking & Jump', th: 'การบังคับตัวละคร 2D: การเดินซ้ายขวาและการกระโดด' }, category: '2D Games', estimatedMinutes: 30, hasFullLesson: false },
  { id: 'unity-basic-0012', engine: 'unity', level: 'basic', number: 27, title: { en: 'Ground Check: Raycasts and OverlapCircle for Jumping', th: 'ระบบตรวจจับพื้น (Ground Check) ด้วย Raycast' }, category: '2D Games', estimatedMinutes: 25, hasFullLesson: false },
  { id: 'unity-basic-0013', engine: 'unity', level: 'basic', number: 28, title: { en: 'Collectibles & Scoring: Coins, Gems & Score Counter', th: 'ระบบเก็บเหรียญและสะสมแต้มคะแนน' }, category: 'Mechanics', estimatedMinutes: 25, hasFullLesson: false },
  { id: 'unity-basic-0014', engine: 'unity', level: 'basic', number: 29, title: { en: 'UI Canvas & TextMeshPro: Health Bars & HUD', th: 'UI Canvas และ TextMeshPro: หลอดเลือดและหน้าจอ HUD' }, category: 'UI', estimatedMinutes: 30, hasFullLesson: false },
  { id: 'unity-basic-0015', engine: 'unity', level: 'basic', number: 30, title: { en: 'Health & Damage System: Taking Damage & Death Logic', th: 'ระบบพลังชีวิตและความเสียหาย: โดนโจมตีและตาย' }, category: 'Mechanics', estimatedMinutes: 30, hasFullLesson: false },
  { id: 'unity-basic-0016', engine: 'unity', level: 'basic', number: 31, title: { en: 'Patrol Enemy AI: Moving Between Two Waypoints', th: 'AI ศัตรูพื้นฐาน: เดินลาดตระเวนไปกลับ 2 จุด' }, category: 'AI', estimatedMinutes: 30, hasFullLesson: false },
  { id: 'unity-basic-0017', engine: 'unity', level: 'basic', number: 32, title: { en: 'Scene Management: Reloading Scene on Game Over', th: 'Scene Management: การโหลดด่านใหม่เมื่อ Game Over' }, category: 'System', estimatedMinutes: 20, hasFullLesson: false },
  { id: 'unity-basic-0018', engine: 'unity', level: 'basic', number: 33, title: { en: 'Mini Project: 2D Platformer Complete Pipeline', th: 'Mini Project: รวบยอดสร้างเกม 2D Platformer สมบูรณ์' }, category: 'Project', estimatedMinutes: 60, hasFullLesson: false },
  { id: 'unity-basic-0019', engine: 'unity', level: 'basic', number: 34, title: { en: '3D Terrain Engine: Sculpting Mountains & Painting Grass', th: 'ระบบ Terrain 3D: การปั้นภูเขาและระบายพื้นหญ้า' }, category: '3D World', estimatedMinutes: 35, hasFullLesson: false },
  { id: 'unity-basic-0020', engine: 'unity', level: 'basic', number: 35, title: { en: '3D First/Third Person Camera Follow Systems', th: 'ระบบกล้องติดตามตัวละคร 3D บุคคลที่หนึ่งและสาม' }, category: 'Camera', estimatedMinutes: 30, hasFullLesson: false },

  // UNITY INTERMEDIATE & ADVANCED (Key selections for navigation)
  { id: 'unity-intermediate-001', engine: 'unity', level: 'intermediate', number: 36, title: { en: 'ScriptableObjects: Data-Driven Weapon & Item Architecture', th: 'ScriptableObject: สถาปัตยกรรมเก็บข้อมูลไอเทมและอาวุธ' }, category: 'Architecture', estimatedMinutes: 35, hasFullLesson: false },
  { id: 'unity-intermediate-002', engine: 'unity', level: 'intermediate', number: 37, title: { en: 'Animation Controller, Blend Trees & Transitions', th: 'Animation Controller: Blend Tree ผสมท่าเดินและวิ่ง' }, category: 'Animation', estimatedMinutes: 35, hasFullLesson: false },
  { id: 'unity-intermediate-003', engine: 'unity', level: 'intermediate', number: 38, title: { en: 'Unity New Input System: Actions, Rebinding & Gamepads', th: 'ระบบ New Input System: การตั้งค่าปุ่มและรองรับจอยสติ๊ก' }, category: 'Input', estimatedMinutes: 30, hasFullLesson: false },
  { id: 'unity-intermediate-004', engine: 'unity', level: 'intermediate', number: 39, title: { en: 'NavMesh & Pathfinding: 3D Enemy Chasing & Obstacles', th: 'NavMesh และ Pathfinding: การเดินลัดเลาะสิ่งกีดขวางของ AI' }, category: 'AI', estimatedMinutes: 40, hasFullLesson: false },
  { id: 'unity-intermediate-005', engine: 'unity', level: 'intermediate', number: 40, title: { en: 'Save & Load System: JSON Serialization & PlayerPrefs', th: 'ระบบบันทึกเกม (Save/Load): การแปลงข้อมูลเป็น JSON' }, category: 'System', estimatedMinutes: 35, hasFullLesson: false },
  { id: 'unity-advanced-001', engine: 'unity', level: 'advanced', number: 41, title: { en: 'Design Patterns: Finite State Machine (FSM) for Players', th: 'Design Pattern: State Machine สำหรับสถานะตัวละคร' }, category: 'Architecture', estimatedMinutes: 45, hasFullLesson: false },
  { id: 'unity-advanced-002', engine: 'unity', level: 'advanced', number: 42, title: { en: 'Object Pooling: Zero Garbage Collection Optimization', th: 'Object Pooling: การนำกระสุนกลับมาใช้ซ้ำเพื่อลดอาการกระตุก' }, category: 'Optimization', estimatedMinutes: 40, hasFullLesson: false },
  { id: 'unity-advanced-003', engine: 'unity', level: 'advanced', number: 43, title: { en: 'Performance Profiling: CPU, GPU, Draw Calls & Batching', th: 'การวัด Performance: วิเคราะห์ CPU, GPU และ Draw Calls' }, category: 'Optimization', estimatedMinutes: 45, hasFullLesson: false },

  // UNREAL LEVEL 0 & BASIC (Key selections)
  { id: 'unreal-zero-001', engine: 'unreal', level: 'zero', number: 1, title: { en: 'What is Unreal Engine? Nanite, Lumen & The Visual Powerhouse', th: 'Unreal Engine คืออะไร? Nanite, Lumen และสุดยอดกราฟิก' }, category: 'Overview', estimatedMinutes: 20, hasFullLesson: true },
  { id: 'unreal-zero-002', engine: 'unreal', level: 'zero', number: 2, title: { en: 'Blueprint from Zero: Variables, Branches & Events', th: 'Blueprint จากศูนย์: เข้าใจตัวแปร เงื่อนไข และ Event Graph' }, category: 'Blueprint', estimatedMinutes: 25, hasFullLesson: true },
  { id: 'unreal-zero-003', engine: 'unreal', level: 'zero', number: 3, title: { en: 'Understanding the Unreal Viewport & Navigation Controls', th: 'การควบคุมมุมมอง 3 มิติใน Viewport ของ Unreal' }, category: 'Editor', estimatedMinutes: 20, hasFullLesson: false },
  { id: 'unreal-zero-004', engine: 'unreal', level: 'zero', number: 4, title: { en: 'Actors, Pawns, and Characters: What is the Difference?', th: 'ความแตกต่างระหว่าง Actor, Pawn และ Character' }, category: 'Architecture', estimatedMinutes: 25, hasFullLesson: false },
  { id: 'unreal-zero-005', engine: 'unreal', level: 'zero', number: 5, title: { en: 'Components in Unreal: Static Mesh, SpringArm & Camera', th: 'Component ใน Unreal: Static Mesh, SpringArm และ Camera' }, category: 'Architecture', estimatedMinutes: 25, hasFullLesson: false },
  { id: 'unreal-basic-001', engine: 'unreal', level: 'basic', number: 6, title: { en: 'Character Movement Component: Speed, Jump & Gravity', th: 'Character Movement Component: การตั้งค่าการวิ่งและกระโดด' }, category: 'Movement', estimatedMinutes: 30, hasFullLesson: false },
  { id: 'unreal-basic-002', engine: 'unreal', level: 'basic', number: 7, title: { en: 'Enhanced Input System: Actions, Contexts & Mappings', th: 'ระบบ Enhanced Input: การผูกปุ่มและคันโยกสมัยใหม่' }, category: 'Input', estimatedMinutes: 35, hasFullLesson: false },
  { id: 'unreal-basic-003', engine: 'unreal', level: 'basic', number: 8, title: { en: 'UMG UI: Canvas, Health Bars & Crosshair Overlays', th: 'UMG UI: การสร้างแถบเลือดและเป้าเล็งด้วย Widget' }, category: 'UI', estimatedMinutes: 30, hasFullLesson: false },
  { id: 'unreal-basic-004', engine: 'unreal', level: 'basic', number: 9, title: { en: 'PBR Materials: BaseColor, Roughness, Metallic & Normal', th: 'PBR Material: ความมันเงา โลหะ และมิติพื้นผิว' }, category: 'Materials', estimatedMinutes: 35, hasFullLesson: false },
  { id: 'unreal-intermediate-001', engine: 'unreal', level: 'intermediate', number: 10, title: { en: 'Animation Blueprints: State Machines & Blend Spaces', th: 'Animation Blueprint: สลับท่าทางและ Blend Space 3D' }, category: 'Animation', estimatedMinutes: 40, hasFullLesson: false },
  { id: 'unreal-intermediate-002', engine: 'unreal', level: 'intermediate', number: 11, title: { en: 'Unreal AI: Behavior Tree, Blackboard & AI Controller', th: 'AI Unreal: Behavior Tree, กระดานดำ Blackboard และการไล่ล่า' }, category: 'AI', estimatedMinutes: 45, hasFullLesson: false },
  { id: 'unreal-intermediate-003', engine: 'unreal', level: 'intermediate', number: 12, title: { en: 'Introduction to Unreal C++: Actor Classes & UPROPERTY', th: 'เริ่มต้น C++ ใน Unreal: คลาส Actor และ UPROPERTY' }, category: 'C++', estimatedMinutes: 45, hasFullLesson: false },
  { id: 'unreal-advanced-001', engine: 'unreal', level: 'advanced', number: 13, title: { en: 'Gameplay Framework: GameMode, PlayerState & GameInstance', th: 'Gameplay Framework: ระบบกฎของเกมและเซฟข้อมูลข้ามด่าน' }, category: 'Architecture', estimatedMinutes: 45, hasFullLesson: false },
  { id: 'unreal-advanced-002', engine: 'unreal', level: 'advanced', number: 14, title: { en: 'Packaging & Production Builds: Cooker, Shipping & Inis', th: 'การ Packaging เกมเพื่อส่งมอบและวางจำหน่าย' }, category: 'Publishing', estimatedMinutes: 35, hasFullLesson: false },

  // GENERAL GAME DEV
  { id: 'general-zero-001', engine: 'general', level: 'zero', number: 1, title: { en: 'The Anatomy of a Game Loop: How Games Tick at 60 FPS', th: 'กายวิภาคของ Game Loop: เบื้องหลังการทำงาน 60 เฟรมต่อวินาที' }, category: 'Fundamentals', estimatedMinutes: 20, hasFullLesson: true },
  { id: 'general-zero-002', engine: 'general', level: 'zero', number: 2, title: { en: 'Game Design Fundamentals: Core Loop, Feedback & Juice', th: 'พื้นฐาน Game Design: Core Loop ความสะใจ และ Feedback' }, category: 'Design', estimatedMinutes: 25, hasFullLesson: false },
  { id: 'general-zero-003', engine: 'general', level: 'zero', number: 3, title: { en: 'Writing a Professional Game Design Document (GDD)', th: 'การเขียนเอกสารออกแบบเกม (GDD) ระดับมืออาชีพ' }, category: 'Production', estimatedMinutes: 30, hasFullLesson: false },
];

export const allLessons: Lesson[] = [
  ...unityLessons,
  ...unrealLessons,
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
