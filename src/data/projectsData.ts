import { GameProject } from '../types';

export const gameProjects: GameProject[] = [
  {
    id: 'unity-project-2d-platformer',
    engine: 'unity',
    title: {
      en: '2D Pixel Platformer: "Lost Knight"',
      th: 'เกม 2D Platformer พิกเซลอาร์ต: "Lost Knight"',
    },
    description: {
      en: 'Build a complete 2D retro action platformer with smooth jumps, ground detection, moving patrol enemies, coin pickups, and animated hazard spikes.',
      th: 'สร้างเกมแอ็กชัน 2 มิติย้อนยุคแบบครบวงจร มีทั้งระบบกระโดดที่นุ่มนวล ตรวจจับพื้น ศัตรูลาดตระเวน เก็บเหรียญ และกับดักหนามแหลม',
    },
    genre: '2D Platformer',
    difficulty: 'basic',
    estimatedHours: 8,
    tags: ['2D', 'Rigidbody2D', 'Pixel Art', 'Tilemap', 'Jump Physics'],
    coverGradient: 'from-amber-600 via-rose-700 to-slate-900',
    flowchartSteps: [
      { en: 'Project Setup & 2D Tilemap', th: 'ติดตั้งโปรเจกต์และวาดฉากด้วย Tilemap' },
      { en: 'Player Movement & Physics', th: 'เขียนโค้ดเดิน วิ่ง และฟิสิกส์การกระโดด' },
      { en: 'Patrol Enemy AI', th: 'สร้าง AI มอนสเตอร์เดินไปกลับ' },
      { en: 'Coins & Score Counter UI', th: 'เหรียญทองเก็บคะแนนและตัวเลขบนหน้าจอ' },
      { en: 'Level Polish & Win Zone', th: 'ใส่เอฟเฟกต์ เสียง และจุดเข้าเส้นชัย' },
    ],
    milestones: [
      {
        id: 'p2d-m1',
        milestoneNumber: 1,
        title: { en: 'Milestone 01: Project Setup & World Grid', th: 'หมุดหมายที่ 01: ติดตั้งโปรเจกต์และวางฉาก' },
        description: {
          en: 'Initialize a Unity 2D template, configure pixel-perfect settings, and build ground platforms using 2D Tilemap and Composite Collider.',
          th: 'สร้างโปรเจกต์แบบ 2D ตั้งค่ากล้องและภาพแบบคมชัดไม่เบลอ และใช้ระบบ Tilemap วางบล็อกพื้นดิน',
        },
        tasks: [
          { id: 't2d-1', title: { en: 'Create Unity 2D project and import sprites', th: 'สร้างโปรเจกต์ 2D และนำเข้ารูปภาพตัวละคร' } },
          { id: 't2d-2', title: { en: 'Create Grid and Tilemap with Tilemap Collider 2D', th: 'สร้าง Grid และ Tilemap พร้อมใส่ตัวตรวจจับการชน' } },
          { id: 't2d-3', title: { en: 'Add Composite Collider 2D with Used by Composite checked', th: 'ผสานชิ้นส่วนขอบเขตการชนด้วย Composite Collider 2D เพื่อการวิ่งที่ลื่นไหล' } },
        ],
        relatedLessonIds: ['unity-zero-001', 'unity-zero-002'],
      },
      {
        id: 'p2d-m2',
        milestoneNumber: 2,
        title: { en: 'Milestone 02: Responsive Player Controller', th: 'หมุดหมายที่ 02: ระบบควบคุมตัวละครที่ตอบสนองฉับไว' },
        description: {
          en: 'Program horizontal movement, coyote time, jump buffering, and reliable ground checks using OverlapCircle.',
          th: 'เขียนโค้ดการเคลื่อนที่ซ้ายขวา ระบบช่วยจำจังหวะกระโดด (Coyote Time) และการตรวจจับพื้นดินด้วย OverlapCircle',
        },
        tasks: [
          { id: 't2d-4', title: { en: 'Attach Rigidbody2D with Freeze Rotation Z checked', th: 'ใส่ Rigidbody2D และล็อกแกนหมุน Z เพื่อไม่ให้ตัวละครล้มคว่ำ' } },
          { id: 't2d-5', title: { en: 'Implement ground check circle beneath character feet', th: 'สร้างจุดตรวจจับพื้นบริเวณใต้ฝ่าเท้าของตัวละคร' } },
          { id: 't2d-6', title: { en: 'Write velocity-based jump code with variable jump height', th: 'เขียนโค้ดกระโดดที่ความสูงขึ้นอยู่กับระยะเวลาที่กดปุ่มค้าง' } },
        ],
        relatedLessonIds: ['unity-zero-003', 'unity-zero-004'],
      },
      {
        id: 'p2d-m3',
        milestoneNumber: 3,
        title: { en: 'Milestone 03: Collectibles & Game HUD', th: 'หมุดหมายที่ 03: ระบบสะสมของและหน้าจอแสดงผล' },
        description: {
          en: 'Spawn spinning gold coins that increase the player score on trigger touch, and update the UI Canvas.',
          th: 'วางเหรียญทองหมุนได้รอบฉาก เมื่อเดินชนจะเพิ่มคะแนนและแสดงผลบนหน้าจอ Canvas',
        },
        tasks: [
          { id: 't2d-7', title: { en: 'Create Coin Prefab with CircleCollider2D (IsTrigger = true)', th: 'สร้าง Coin Prefab พร้อมติ๊กถูกที่ IsTrigger' } },
          { id: 't2d-8', title: { en: 'Connect ScoreManager event to TextMeshPro UI', th: 'เชื่อมโยงระบบนับคะแนนเข้ากับตัวหนังสือ TextMeshPro บนหน้าจอ' } },
        ],
      },
    ],
  },

  {
    id: 'unity-project-3d-adventure',
    engine: 'unity',
    title: {
      en: '3D Action Adventure: "Chronicles of Aethel"',
      th: 'เกมแอ็กชันผจญภัย 3 มิติ: "Chronicles of Aethel"',
    },
    description: {
      en: 'The capstone 3D Unity experience. Create a third-person adventurer with combo melee attacks, lock-on camera, AI state machine enemies, quest inventory, and save data.',
      th: 'สุดยอดโปรเจกต์ 3D เต็มรูปแบบ: สร้างตัวละครมุมมองบุคคลที่สาม ฟันคอมโบ กล้องล็อกเป้า ศัตรู AI ฉลาด ระบบกระเป๋าเควสต์ และบันทึกเกมลงไฟล์',
    },
    genre: '3D Action Adventure',
    difficulty: 'advanced',
    estimatedHours: 24,
    tags: ['3D', 'Cinemachine', 'Melee Combat', 'NavMesh AI', 'Save System'],
    coverGradient: 'from-red-600 via-zinc-900 to-black',
    flowchartSteps: [
      { en: 'Character Setup & Cinemachine', th: 'ติดตั้งตัวละครและกล้อง Cinemachine 3D' },
      { en: 'Free-Look Movement & Dodge Roll', th: 'เขียนโค้ดเดินอิสระและการกลิ้งหลบ' },
      { en: 'Hitbox Combat & Melee Combos', th: 'ระบบกล่อง Hitbox ตรวจจับการฟันดาบ' },
      { en: 'NavMesh Enemy AI & Aggro State', th: 'ศัตรู AI เดินลาดตระเวนและวิ่งไล่ตาม' },
      { en: 'Quest, Inventory & Save System', th: 'ระบบเควสต์ ช่องเก็บของ และเซฟเกม' },
      { en: 'Final Boss Fight & Build Packaging', th: 'บอสไฟต์ตัวร้ายและการบิลด์เกมสมบูรณ์' },
    ],
    milestones: [
      {
        id: 'p3d-m1',
        milestoneNumber: 1,
        title: { en: 'Milestone 01: Third-Person Rig & Camera', th: 'หมุดหมายที่ 01: โครงสร้างตัวละครและมุมกล้อง' },
        description: {
          en: 'Configure CharacterController or Rigidbody with Cinemachine FreeLook Camera for smooth 360-degree rotation.',
          th: 'ติดตั้ง CharacterController ร่วมกับกล้อง Cinemachine FreeLook เพื่อให้หมุนมุมกล้องรอบตัวได้อย่างนุ่มนวล',
        },
        tasks: [
          { id: 't3d-1', title: { en: 'Set up CharacterController component', th: 'ติดตั้งและปรับขนาดแคปซูล CharacterController' } },
          { id: 't3d-2', title: { en: 'Add Cinemachine FreeLook camera tracking player target', th: 'ตั้งค่ากล้อง Cinemachine ล็อกเป้าหมายตัวละคร' } },
          { id: 't3d-3', title: { en: 'Align movement vector with camera forward direction', th: 'เขียนให้ตัวละครก้าวไปข้างหน้าตามทิศทางที่กล้องหันมอง' } },
        ],
        relatedLessonIds: ['unity-zero-002', 'unity-zero-004'],
      },
      {
        id: 'p3d-m2',
        milestoneNumber: 2,
        title: { en: 'Milestone 02: Sword Hitbox & Melee Combat', th: 'หมุดหมายที่ 02: ระบบฟันดาบและกล่องตรวจจับความเสียหาย' },
        description: {
          en: 'Use animation events to enable sword hitboxes only during active strike frames, preventing phantom hits.',
          th: 'ใช้ Animation Event เปิดปิด Collider ดาบเฉพาะช่วงที่วาดดาบฟัน ป้องกันการโดนดาบขณะยืนนิ่ง',
        },
        tasks: [
          { id: 't3d-4', title: { en: 'Set up 3-hit combo animation blend state', th: 'สร้าง State Machine ผสมท่าฟันคอมโบ 3 จังหวะ' } },
          { id: 't3d-5', title: { en: 'Add DamageDealer script to weapon trigger', th: 'เขียนโค้ด DamageDealer ตรวจสอบการฟันโดนศัตรู' } },
        ],
        relatedLessonIds: ['unity-zero-003'],
      },
    ],
  },

  {
    id: 'unreal-project-third-person',
    engine: 'unreal',
    title: {
      en: 'Unreal Third-Person Exploration: "Echoes of the Valley"',
      th: 'เกมสำรวจ 3 มิติ Unreal: "Echoes of the Valley"',
    },
    description: {
      en: 'Build a visually stunning action exploration prototype in Unreal Engine 5 using Nanite landscapes, Lumen dynamic lighting, Niagara particle effects, and Blueprint AI.',
      th: 'สร้างเกมแอ็กชันสำรวจบรรยากาศตระการตาด้วย Unreal Engine 5 ใช้งาน Nanite สร้างหุบเขา แสงเงา Lumen แบบเรียลไทม์ เอฟเฟกต์ Niagara และ AI จาก Blueprint',
    },
    genre: '3D Action Exploration',
    difficulty: 'intermediate',
    estimatedHours: 16,
    tags: ['Unreal 5', 'Blueprint', 'Lumen', 'Niagara', 'Behavior Tree'],
    coverGradient: 'from-blue-600 via-sky-950 to-black',
    flowchartSteps: [
      { en: 'Landscape & Foliage Sculpting', th: 'ปั้นภูมิประเทศภูเขาและปลูกต้นไม้' },
      { en: 'Third-Person Character & Enhanced Input', th: 'ตั้งค่าตัวละครและปุ่มกด Enhanced Input' },
      { en: 'Interaction System with Traces', th: 'ระบบกดปุ่ม E สำรวจด้วย Line Trace' },
      { en: 'Behavior Tree Enemy Patrol', th: 'สร้างสมอง AI ศัตรูด้วย Behavior Tree' },
      { en: 'Dynamic UI HUD & Health Bar', th: 'สร้างหน้าจอ HUD และหลอดเลือดด้วย UMG' },
    ],
    milestones: [
      {
        id: 'pu-m1',
        milestoneNumber: 1,
        title: { en: 'Milestone 01: Landscape & Dynamic Lighting', th: 'หมุดหมายที่ 01: ภูมิทัศน์และแสงธรรมชาติ' },
        description: {
          en: 'Sculpt a lush valley with mountains, apply a Layered Landscape Material, and configure Directional Light with Sky Atmosphere.',
          th: 'ปั้นภูเขาและหุบเขา ใส่ Material พื้นดินแบบหลายชั้น และปรับแต่งแสงอาทิตย์ร่วมกับ Sky Atmosphere',
        },
        tasks: [
          { id: 'tu-1', title: { en: 'Sculpt terrain using Landscape Mode', th: 'ปั้นภูมิประเทศด้วยเครื่องมือ Landscape' } },
          { id: 'tu-2', title: { en: 'Enable Lumen Global Illumination in Project Settings', th: 'เปิดใช้งานระบบแสง Lumen เพื่อความสมจริงสูงสุด' } },
        ],
        relatedLessonIds: ['unreal-zero-001', 'unreal-zero-002'],
      },
      {
        id: 'pu-m2',
        milestoneNumber: 2,
        title: { en: 'Milestone 02: Blueprint Interaction System', th: 'หมุดหมายที่ 02: ระบบกดปุ่มโต้ตอบวัตถุ' },
        description: {
          en: 'Use Blueprint Interfaces and Line Traces to create a clean, decouple interaction system for chests, doors, and NPCs.',
          th: 'ใช้ Blueprint Interface และการยิงเลเซอร์ Line Trace เพื่อให้ผู้เล่นกด E เปิดหีบสมบัติ เปิดประตู และคุยกับ NPC',
        },
        tasks: [
          { id: 'tu-3', title: { en: 'Create BPI_Interactable Blueprint Interface', th: 'สร้าง Blueprint Interface สำหรับการส่งคำสั่งโต้ตอบ' } },
          { id: 'tu-4', title: { en: 'Implement LineTraceByChannel from character camera', th: 'เขียนคำสั่ง LineTrace ยิงหาวัตถุด้านหน้าสายตา' } },
        ],
        relatedLessonIds: ['unreal-zero-002'],
      },
    ],
  },
];
