import { Lesson } from '../../types';

export const unrealIntermediateLessons: Lesson[] = [
  {
    id: 'unreal-intermediate-001',
    engine: 'unreal',
    level: 'intermediate',
    lessonNumber: 9,
    slug: 'animation-blueprints-blendspaces-ue5',
    heroImage: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1200&q=80',
    heroImageCaption: {
      en: 'Unreal Engine 5 Animation Blueprint: AnimGraph pose blending, 2D Blendspaces, and Montages',
      th: 'Animation Blueprint ใน UE5: แผนผังท่าทาง AnimGraph, Blendspace 2 มิติ และ Animation Montage',
    },
    title: {
      en: 'Animation Blueprints: Blendspaces & State Machines',
      th: 'ระบบ Animation Blueprint: 2D Blendspace และ State Machine ตัวละคร',
    },
    shortDescription: {
      en: 'Bring skeletal meshes to life: calculate ground speed, interpolate directional 2D Blendspaces for 8-way strafing, and structure state machines in AnimGraph.',
      th: 'ขับเคลื่อนแอนิเมชันตัวละคร 3 มิติ: คำนวณความเร็วการเดิน ผสมผสานท่าทาง 8 ทิศทางด้วย 2D Blendspace และจัดการทรานซิชันใน State Machine',
    },
    estimatedMinutes: 35,
    tags: ['Intermediate', 'Unreal', 'Animation', 'AnimBlueprint', 'Blendspace', 'Mecanim'],
    startFromZero: false,
    objectives: {
      en: [
        'Understand the dual-graph architecture of Animation Blueprints (Event Graph vs AnimGraph)',
        'Build a 2D Blendspace for 8-directional walking and running (Direction vs Speed axes)',
        'Structure an AnimGraph State Machine with Idle, Run, Jump, and Falling states',
      ],
      th: [
        'เข้าใจสถาปัตยกรรมสองกราฟของ Animation Blueprint: Event Graph (คิดเลข) ปะทะ AnimGraph (ผสมท่า)',
        'สร้าง 2D Blendspace สำหรับเดินและวิ่ง 8 ทิศทาง (แกนองศา Direction และแกนความเร็ว Speed)',
        'สร้าง State Machine ใน AnimGraph พร้อมสถานะ ยืนนิ่ง วิ่ง กระโดด และลอยตัวในอากาศ',
      ],
    },
    prerequisites: {
      en: ['Completed Unreal Basic Track (Enhanced Input, Sockets)'],
      th: ['ผ่านเนื้อหา Unreal Basic ทั้งหมด (Enhanced Input, ระบบ Socket)'],
    },
    zeroExplanation: {
      what: {
        en: 'An Animation Blueprint is a specialized visual script that blends poses, bone transformations, and skeletal animations dynamically each frame.',
        th: 'Animation Blueprint คือสคริปต์พิเศษของ Unreal Engine ที่ทำหน้าที่ผสมผสานท่าทางของกระดูกตัวละครให้ลื่นไหลในทุกๆ เฟรม',
      },
      why: {
        en: 'Real characters don’t just run forward; they strafe sideways, look backward, and decelerate. Animation Blueprints blend hundreds of animation clips based on player velocity.',
        th: 'ตัวละครในเกมจริงไม่ได้แค่วิ่งตรงไปข้างหน้า แต่ต้องสไลด์ข้าง ถอยหลัง และเบรก Animation Blueprint ช่วยผสมผสานคลิปท่าทางนับร้อยให้เข้ากันอย่างแนบเนียน',
      },
      how: {
        en: 'Read pawn velocity in the Event Graph (Try Get Pawn Owner -> Get Velocity). Pass Speed and Direction variables into a 2D Blendspace in the AnimGraph.',
        th: 'ดึงความเร็วตัวละครใน Event Graph (Try Get Pawn Owner -> Get Velocity) แล้วส่งค่า Speed และ Direction เข้าไปใน 2D Blendspace บนหน้าต่าง AnimGraph',
      },
      when: {
        en: 'All animated humanoid characters, monsters, horses, and weapon reload sequences.',
        th: 'ตัวละครคน, มอนสเตอร์, ม้า และท่วงท่าการรีโหลดกระสุนปืนทั้งหมด',
      },
    },
    diagram: {
      type: 'fsm-states',
      title: {
        en: 'AnimGraph Locomotion State Flow',
        th: 'ขั้นตอนการทำงานของ State Machine ใน AnimGraph',
      },
      description: {
        en: 'Locomotion Blendspace (Speed, Direction) -> [IsFalling? == True] -> Jump Start -> Jump Loop -> [IsFalling? == False] -> Jump Land -> Locomotion.',
        th: 'Locomotion Blendspace (เดิน/วิ่ง) -> [เท้าลอยจากพื้น] -> ท่าเริ่มกระโดด -> ท่าลอยตัวกลางอากาศ -> [แตะพื้น] -> ท่าลงพื้น -> กลับสู่การเดินวิ่ง',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Building the 2D Blendspace Asset',
          th: 'การสร้างไฟล์ 2D Blendspace',
        },
        explanation: {
          en: 'Create a Blendspace asset targeting your character skeleton. Set Horizontal Axis to "Direction" (-180 to 180 degrees) and Vertical Axis to "Speed" (0 to 600 cm/s). Place Walk/Run clips along the grid.',
          th: 'สร้างไฟล์ Blendspace โดยเลือกโครงกระดูกตัวละคร ตั้งแกนนอนเป็น "Direction" (-180 ถึง 180 องศา) และแกนตั้งเป็น "Speed" (0 ถึง 600) แล้วลากคลิปท่าทางลงบนตาราง',
        },
      },
    ],
    codeExamples: [
      {
        title: 'Animation Blueprint Event Graph Caching',
        language: 'csharp',
        code: `// Inside ABP_Character (Event Graph):
// -----------------------------------------------------------------
// [Event Blueprint Update Animation]
//      |
// [Try Get Pawn Owner] -> [Cast to Character]
//      |
// [Get Character Movement] -> [Is Falling] ---> (Set Variable: IsFalling)
//      |
// [Get Velocity] -> [Vector Length XY]      ---> (Set Variable: GroundSpeed)
//      |
// [Calculate Direction (Velocity, Actor Rotation)] ---> (Set Variable: MovementDirection)`,
        explanation: {
          en: 'Vector Length XY computes horizontal ground speed while ignoring vertical falling velocity, ensuring accurate running animations.',
          th: 'Vector Length XY ช่วยคำนวณเฉพาะความเร็วบนพื้นระนาบ โดยไม่นำความเร็วตกจากที่สูงมารวม ทำให้ท่าวิ่งไม่เพี้ยนเวลาตกจากหน้าผา',
        },
      },
    ],
    practiceChecklist: [
      { id: 'ui01-1', title: { en: 'Create a 2D Blend Space with Direction (-180 to 180) and Speed', th: 'สร้าง 2D Blend Space พร้อมแกน Direction (-180 ถึง 180) และ Speed' }, completed: false },
      { id: 'ui01-2', title: { en: 'Cache GroundSpeed and IsFalling in Event Graph', th: 'ดึงค่า GroundSpeed และ IsFalling มาเก็บในตัวแปรบน Event Graph' }, completed: false },
      { id: 'ui01-3', title: { en: 'Wire the Output Pose in AnimGraph and assign ABP to character', th: 'ต่อสาย Output Pose ใน AnimGraph แล้วนำ ABP ไปใส่ในตัวละคร' }, completed: false },
    ],
    miniChallenge: {
      prompt: {
        en: 'Why do we calculate Ground Speed using "Vector Length XY" instead of standard "Vector Length"?',
        th: 'ทำไมเราจึงคำนวณความเร็วบนพื้นด้วย "Vector Length XY" แทนที่จะใช้ "Vector Length" ปกติ?',
      },
      hint: {
        en: 'What happens when a character falls straight down off a 100-meter cliff?',
        th: 'จะเกิดอะไรขึ้นเมื่อตัวละครตกหน้าผาสูง 100 เมตรในแนวดิ่ง?',
      },
      solution: {
        en: 'If you use standard Vector Length, falling velocity along the Z axis is treated as speed, causing the character to play their running sprint animation while plunging straight down to their death!',
        th: 'หากใช้ Vector Length ปกติ ความเร็วตกจากที่สูงบนแกน Z จะถูกมองเป็นความเร็ววิ่ง ส่งผลให้ตัวละครทำท่าวิ่งซอยเท้ายิกๆ กลางอากาศขณะดิ่งลงสู่ความตาย!',
      },
    },
    commonMistakes: [
      {
        mistake: { en: 'Performing heavy logic, traces, or spawning actors inside the AnimGraph', th: 'ใส่คำสั่งคำนวณหนักๆ ยิงเรย์คาสต์ หรือเสกของใน AnimGraph' },
        why: { en: 'AnimGraph runs on a parallel worker thread and must remain strictly pure for pose evaluation.', th: 'AnimGraph ทำงานบนเธรดคู่ขนานของระบบเรนเดอร์ การใส่ตรรกะแปลกปลอมจะทำให้เกิด Race Condition และเกมแครช' },
        fix: { en: 'Perform all data calculations inside the Event Graph, and use the AnimGraph strictly for pose node blending.', th: 'คำนวณตัวเลขทั้งหมดใน Event Graph และใช้ AnimGraph สำหรับต่อสายท่าทางเท่านั้น' },
      },
    ],
    quiz: [
      {
        question: {
          en: 'Which node in an Animation Blueprint extracts only the horizontal ground velocity of a character?',
          th: 'โหนดใดใน Animation Blueprint ที่ใช้คำนวณเฉพาะความเร็วบนพื้นในแนวราบ?',
        },
        options: {
          en: ['Vector Length XY', 'Vector Normalize', 'Get Velocity Z', 'Dot Product'],
          th: ['Vector Length XY', 'Vector Normalize', 'Get Velocity Z', 'Dot Product'],
        },
        correctIndex: 0,
        explanation: {
          en: 'Vector Length XY isolates the X and Y components of the vector, ignoring vertical Z velocity.',
          th: 'Vector Length XY ตัดแกน Z ในแนวดิ่งทิ้งไป และคำนวณขนาดความเร็วเฉพาะบนระนาบพื้น X และ Y',
        },
      },
    ],
  },
  {
    id: 'unreal-intermediate-002',
    engine: 'unreal',
    level: 'intermediate',
    lessonNumber: 10,
    slug: 'ai-behavior-trees-blackboard-ue5',
    heroImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    heroImageCaption: {
      en: 'UE5 AI Behavior Tree & Blackboard: Selectors, Sequences, Decorators, and NavMesh task execution',
      th: 'ระบบสมองกล AI Behavior Tree และ Blackboard ใน UE5: โหนด Selector, Sequence, Decorator และการสั่งเดินผ่าน NavMesh',
    },
    title: {
      en: 'AI Behavior Trees & Blackboard: Tasks & Perception',
      th: 'ระบบสมองกล AI: Behavior Tree, Blackboard และระบบตรวจจับสายตา',
    },
    shortDescription: {
      en: 'Construct intelligent game enemies: architect AI Controllers, store sensory memory in Blackboard keys, and design decision-making trees with Selectors and Tasks.',
      th: 'สร้างสมองกลศัตรูที่ชาญฉลาด: สร้าง AI Controller, บันทึกความทรงจำการมองเห็นใน Blackboard และควบคุมการตัดสินใจด้วย Behavior Tree',
    },
    estimatedMinutes: 35,
    tags: ['Intermediate', 'Unreal', 'AI', 'BehaviorTree', 'Blackboard', 'Perception'],
    startFromZero: false,
    objectives: {
      en: [
        'Understand the two-part AI architecture: Blackboard (Memory) and Behavior Tree (Decision Logic)',
        'Differentiate between Composite nodes: Selector (OR) vs Sequence (AND)',
        'Use Decorator conditionals and Task execution nodes (MoveTo, Wait, Focus)',
      ],
      th: [
        'เข้าใจโครงสร้างสองประสานของ AI: Blackboard (สมองความจำ) และ Behavior Tree (สมองการตัดสินใจ)',
        'แยกความแตกต่างของโหนดผสม: Selector (เหมือนคำสั่ง OR) ปะทะ Sequence (เหมือนคำสั่ง AND)',
        'ใช้งานเงื่อนไข Decorator และโหนดคำสั่ง Task (MoveTo สั่งเดิน, Wait รอเวลา, Focus มองเป้าหมาย)',
      ],
    },
    prerequisites: {
      en: ['Completed Unreal Basic Track (Blueprints, Navigation Mesh)'],
      th: ['ผ่านเนื้อหา Unreal Basic (Blueprint, แผนที่นำทาง NavMesh)'],
    },
    zeroExplanation: {
      what: {
        en: 'A Behavior Tree is a visual decision engine for game AI. A Blackboard is its companion data table storing active memories (e.g. TargetActor, IsAlerted).',
        th: 'Behavior Tree คือแผนผังการตัดสินใจของสมองกล AI ส่วน Blackboard คือสมุดบันทึกความจำของมัน (เช่น กำลังมองศัตรูคนไหนอยู่, รู้ตัวหรือยัง)',
      },
      why: {
        en: 'Programming enemy AI with spaghetti Blueprint branches quickly leads to unmaintainable bugs. Behavior Trees make complex combat tactics modular and easy to debug.',
        th: 'การเขียนสมองศัตรูด้วยกิ่งก้าน Blueprint ปกติจะกลายเป็นโค้ดสปาเก็ตตี้ที่แก้ยาก Behavior Tree ทำให้ยุทธวิธีทางทหารของ AI จัดการได้เป็นระบบ',
      },
      how: {
        en: 'Create a Blackboard (BB_Enemy) with an Object key "TargetActor". Create a Behavior Tree (BT_Enemy) with a Selector branch: Chase Player (if Target set) vs Patrol (if no Target).',
        th: 'สร้าง Blackboard เก็บค่าตัวแปร TargetActor, สร้าง Behavior Tree ที่มีกิ่ง Selector: ถ้ามีเป้าหมายให้วิ่งไล่ล่า ถ้าไม่มีเป้าหมายให้เดินตรวจการณ์',
      },
      when: {
        en: 'Stealth guards, zombie mobs, friendly NPC companions, and boss attack patterns.',
        th: 'ทหารยามในเกมลอบเร้น, ฝูงซอมบี้, เพื่อนร่วมทีม NPC และรูปแบบท่าโจมตีของบอส',
      },
    },
    diagram: {
      type: 'ai-behavior-tree',
      title: {
        en: 'Behavior Tree Decision Logic Hierarchy',
        th: 'ลำดับชั้นการตัดสินใจของ Behavior Tree',
      },
      description: {
        en: 'Root -> Selector -> [Sequence: Chase & Attack] (Has TargetActor?) -> MoveTo(TargetActor) -> Attack | [Sequence: Patrol] -> GetRandomPoint -> MoveTo -> Wait(3s).',
        th: 'จุดเริ่มต้น -> Selector -> [สายไล่ล่า] (มีเป้าหมายหรือไม่?) -> เดินไปหา -> โจมตี | [สายตรวจการณ์] -> สุ่มจุดบนพื้น -> เดินไป -> ยืนรอ 3 วินาที',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Setting up the Blackboard Asset',
          th: 'การสร้างไฟล์ Blackboard เก็บความจำ',
        },
        explanation: {
          en: 'In Content Drawer, right-click > Artificial Intelligence > Blackboard. Name it "BB_Enemy". Open it and click "New Key": add an Object key named "TargetActor" (Base Class: Actor).',
          th: 'คลิกขวาใน Content Drawer > Artificial Intelligence > Blackboard ตั้งชื่อว่า "BB_Enemy" เปิดขึ้นมาแล้วกดปุ่ม New Key เพิ่มตัวแปร Object ชื่อ "TargetActor"',
        },
      },
    ],
    codeExamples: [
      {
        title: 'Starting Behavior Tree from AI Controller',
        language: 'csharp',
        code: `// Inside AIC_Enemy (AI Controller Blueprint):
// -----------------------------------------------------------------
// [Event On Possess (Possessed Pawn)]
//      |
// [Run Behavior Tree (BTAsset: BT_Enemy)]
//
// Inside BT_Enemy Root:
// [Selector (Evaluates Left-to-Right)]
//   ├── [Sequence: Combat Branch] -> [Decorator: Does TargetActor Exist?]
//   │       ├── MoveTo (Target: TargetActor, AcceptanceRadius: 150)
//   │       └── PlayMontage (Attack_Anim)
//   └── [Sequence: Idle / Patrol Branch]
//           ├── MoveTo (Target: NextPatrolPoint)
//           └── Wait (Time: 2.5s)`,
        explanation: {
          en: 'Selectors evaluate children left-to-right until one SUCCEEDS. Sequences evaluate children left-to-right until one FAILS.',
          th: 'โหนด Selector จะเลือกทำจากซ้ายไปขวาจนกว่าจะเจอข้อที่ "สำเร็จ" ส่วน Sequence จะทำเรียงไปเรื่อยๆ จนกว่าจะเจอข้อที่ "ล้มเหลว"',
        },
      },
    ],
    practiceChecklist: [
      { id: 'ui02-1', title: { en: 'Create BB_Enemy Blackboard and BT_Enemy Behavior Tree', th: 'สร้างไฟล์ BB_Enemy และ BT_Enemy' }, completed: false },
      { id: 'ui02-2', title: { en: 'Create custom AIController and call RunBehaviorTree', th: 'สร้าง AI Controller แล้วเรียกคำสั่ง RunBehaviorTree' }, completed: false },
      { id: 'ui02-3', title: { en: 'Build Patrol Sequence with MoveTo and Wait nodes', th: 'สร้าง Sequence เดินตรวจการณ์ด้วย MoveTo และ Wait' }, completed: false },
    ],
    miniChallenge: {
      prompt: {
        en: 'What is the fundamental difference in execution logic between a "Selector" node and a "Sequence" node in a Behavior Tree?',
        th: 'ความแตกต่างพื้นฐานในการทำงานระหว่างโหนด "Selector" กับโหนด "Sequence" ใน Behavior Tree คืออะไร?',
      },
      hint: {
        en: 'Think of boolean logic: Which is OR, and which is AND?',
        th: 'นึกถึงตรรกะทางคณิตศาสตร์: อันไหนคือ "หรือ (OR)" และอันไหนคือ "และ (AND)"?',
      },
      solution: {
        en: 'A Selector acts as an "OR" gate: it tries children from left to right and STOPS as soon as one succeeds. A Sequence acts as an "AND" gate: it requires ALL children to succeed in order.',
        th: 'Selector เปรียบเสมือน "OR": จะลองทำจากซ้ายไปขวา และจะหยุดทันทีเมื่อมีลูกตัวใดตัวหนึ่งสำเร็จ! ส่วน Sequence เปรียบเสมือน "AND": ลูกทุกตัวต้องทำสำเร็จเรียงตามลำดับ หากมีตัวใดล้มเหลวจะยกเลิกทันที!',
      },
    },
    commonMistakes: [
      {
        mistake: { en: 'Forgetting to place a NavMeshBoundsVolume in the level', th: 'ลืมวางกล่อง NavMeshBoundsVolume ลงในฉาก' },
        why: { en: 'MoveTo tasks in Behavior Trees rely entirely on NavMesh pathing; without it, MoveTo fails instantly.', th: 'โหนด MoveTo จำเป็นต้องมี NavMesh บนพื้น หากไม่มีพื้นสีเขียว โหนดจะฟ้องล้มเหลวทันทีและ AI จะยืนนิ่ง' },
        fix: { en: 'Press "P" in the Viewport to toggle the green walkable NavMesh visualization and scale the volume over your level.', th: 'กดปุ่ม "P" ใน Viewport เพื่อเปิดดูพื้นสีเขียว NavMesh และขยายกล่องให้ครอบคลุมพื้นที่เดินทั้งหมด' },
      },
    ],
    quiz: [
      {
        question: {
          en: 'Where does an Unreal Engine AI store its sensory memory and target references?',
          th: 'สมองกล AI ใน Unreal Engine จัดเก็บความทรงจำการมองเห็นและเป้าหมายไว้ที่ใด?',
        },
        options: {
          en: ['Blackboard', 'GameInstance', 'PlayerState', 'Level Blueprint'],
          th: ['Blackboard', 'GameInstance', 'PlayerState', 'Level Blueprint'],
        },
        correctIndex: 0,
        explanation: {
          en: 'The Blackboard serves as the dedicated brain memory asset queried by the Behavior Tree.',
          th: 'Blackboard ทำหน้าที่เป็นสมุดบันทึกความจำเฉพาะทางที่ Behavior Tree จะเข้ามาอ่านและเขียนค่า',
        },
      },
    ],
  },
  {
    id: 'unreal-intermediate-003',
    engine: 'unreal',
    level: 'intermediate',
    lessonNumber: 11,
    slug: 'blueprint-interfaces-interaction-system-ue5',
    heroImage: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80',
    heroImageCaption: {
      en: 'Blueprint Interface architecture: decoupled interaction triggers, zero-casting contracts, and modular entity communication',
      th: 'สถาปัตยกรรม Blueprint Interface: ระบบตอบสนองการกดปุ่มแบบอิสระ ไม่ต้อง Cast To ให้เสี่ยง Error และเชื่อมโยงวัตถุได้ทุกประเภท',
    },
    title: {
      en: 'Blueprint Interfaces: Decoupled Interaction Systems',
      th: 'ระบบ Blueprint Interface: การสร้างระบบกดสำรวจและตอบสนองแบบไร้การพึ่งพา',
    },
    shortDescription: {
      en: 'Stop using brittle "Cast To" nodes that create circular asset dependencies. Build a generic interaction system (doors, chests, switches, NPCs) using Blueprint Interfaces.',
      th: 'หยุดใช้โหนด "Cast To" ที่ทำให้เกมโหลดช้าและพังง่าย! สร้างระบบกดปุ่ม E สำรวจวัตถุ (เปิดประตู, เปิดหีบ, คุยกับ NPC) ด้วย Blueprint Interface ระดับมืออาชีพ',
    },
    estimatedMinutes: 30,
    tags: ['Intermediate', 'Unreal', 'BlueprintInterface', 'Architecture', 'Interaction'],
    startFromZero: false,
    objectives: {
      en: [
        'Understand why hard Cast To nodes bloat memory by loading referenced assets into RAM',
        'Create a BPI_Interactable Blueprint Interface with an "Interact" function contract',
        'Implement the interface on diverse actors (Door, Chest, NPC) and trigger via Line Trace',
      ],
      th: [
        'เข้าใจว่าทำไมโหนด Cast To ถึงกินแรมและดึงไฟล์ที่ไม่จำเป็นเข้ามาโหลดในหน่วยความจำ',
        'สร้าง Blueprint Interface ชื่อ BPI_Interactable พร้อมสัญญาฟังก์ชัน "Interact"',
        'ติดตั้ง Interface ลงในวัตถุหลายประเภท (ประตู, กล่องสมบัติ, คน) และยิงตรวจจับด้วย Line Trace',
      ],
    },
    prerequisites: {
      en: ['Completed Unreal Basic Track (Blueprints, Collisions)'],
      th: ['ผ่านเนื้อหา Unreal Basic (Blueprint, การชน)'],
    },
    zeroExplanation: {
      what: {
        en: 'A Blueprint Interface is a collection of function names without implementations, allowing completely unrelated Actors to communicate safely.',
        th: 'Blueprint Interface คือข้อตกลงร่วมกันของฟังก์ชัน ที่เปิดโอกาสให้วัตถุที่ไม่มีความเกี่ยวข้องกันเลย สามารถคุยกันและสั่งงานกันได้อย่างปลอดภัย',
      },
      why: {
        en: 'If your character casts to BP_Chest, BP_Door, and BP_Dragon, loading the character forces the entire dragon mesh and textures into RAM! An Interface decouples them completely.',
        th: 'หากตัวละครใช้คำสั่ง Cast To ไปยังหีบ ประตู และมังกร การโหลดตัวละครจะไปบังคับดึงโมเดลและพื้นผิวมังกรขนาดมหึมาขึ้นมาในแรมทันที! Interface ช่วยตัดการเชื่อมต่อที่ไม่จำเป็นนี้ออกไป',
      },
      how: {
        en: 'Create BPI_Interactable with function Interact(PlayerInstigator). Line trace from camera forward 200 units -> call Interact (Message) on Hit Actor.',
        th: 'สร้าง BPI_Interactable มีฟังก์ชัน Interact() ยิงเส้น Line Trace จากหน้ากล้อง 200 ซม. แล้วเรียกคำสั่ง Interact (Message) ไปยังวัตถุที่โดนเส้นยิง',
      },
      when: {
        en: 'Pressing "E" to interact with chests, opening doors, talking to villagers, collecting items, and flipping switches.',
        th: 'การกดปุ่ม "E" สำรวจหีบสมบัติ, เปิดปิดประตู, คุยกับชาวบ้าน, เก็บไอเทม และดึงคันโยกสวิตช์',
      },
    },
    diagram: {
      type: 'actor-component',
      title: {
        en: 'Interface Decoupled Communication',
        th: 'การสื่อสารแบบไร้การผูกมัดด้วย Interface',
      },
      description: {
        en: 'Player Character (Line Trace Hit) -> Sends "Interact()" Message -> Door opens | Chest reveals gold | NPC greets. Player code knows ZERO details about any of them!',
        th: 'ตัวละครยิงเส้นเลเซอร์โดนวัตถุ -> ส่งสัญญาณ "Interact()" -> ประตูเปิด | หีบปล่อยทอง | NPC ทักทาย โดยที่ตัวละครไม่ต้องรู้จักโค้ดภายในของสิ่งเหล่านั้นเลย!',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Creating the Blueprint Interface Asset',
          th: 'การสร้างไฟล์ Blueprint Interface',
        },
        explanation: {
          en: 'In Content Drawer, right-click > Blueprints > Blueprint Interface. Name it "BPI_Interactable". Add a function named "Interact" with an input parameter "Instigator" (Type: Actor).',
          th: 'คลิกขวาใน Content Drawer > Blueprints > Blueprint Interface ตั้งชื่อว่า "BPI_Interactable" สร้างฟังก์ชันชื่อ "Interact" และเพิ่มพารามิเตอร์ Input ชื่อ "Instigator" (ประเภท Actor)',
        },
      },
    ],
    codeExamples: [
      {
        title: 'Player Interaction Line Trace & Interface Call',
        language: 'csharp',
        code: `// Inside Player Character (EnhancedInputAction IA_Interact):
// -----------------------------------------------------------------
// [IA_Interact (Started)]
//      |
// [Line Trace By Channel]
//      - Start: Camera World Location
//      - End: Camera World Location + (Camera Forward Vector * 250.0)
//      |
// [Branch (Return Value / Did Hit?)]
//      - True:
//          [Out Hit Hit Actor] ---> [Interact (Message, Target: Hit Actor)]`,
        explanation: {
          en: 'If Hit Actor does NOT implement BPI_Interactable, Unreal silently ignores the call with zero errors and zero performance penalties.',
          th: 'หากวัตถุที่โดนยิงไม่ได้ติดตั้ง BPI_Interactable เอนจินจะมองข้ามไปอย่างปลอดภัยโดยไม่เกิด Error และไม่เสียความเร็วแม้แต่นิดเดียว',
        },
      },
    ],
    practiceChecklist: [
      { id: 'ui03-1', title: { en: 'Create BPI_Interactable with Interact() function', th: 'สร้าง BPI_Interactable พร้อมฟังก์ชัน Interact()' }, completed: false },
      { id: 'ui03-2', title: { en: 'Implement BPI_Interactable in Class Settings of BP_Door', th: 'ติดตั้ง BPI_Interactable ในหน้า Class Settings ของ BP_Door' }, completed: false },
      { id: 'ui03-3', title: { en: 'Trigger Interact (Message) from camera forward Line Trace', th: 'ยิงสัญญาณ Interact (Message) จากเส้น Line Trace หน้ากล้อง' }, completed: false },
    ],
    miniChallenge: {
      prompt: {
        en: 'Why is calling an Interface "Message" better than using "Cast To BP_Chest" when opening chests in a game?',
        th: 'ทำไมการส่ง "Message" ผ่าน Interface จึงดีกว่าการใช้คำสั่ง "Cast To BP_Chest" เมื่อเปิดหีบสมบัติในเกม?',
      },
      hint: {
        en: 'What if tomorrow your game adds 50 different interactive objects (doors, levers, campfires, portals)?',
        th: 'จะเกิดอะไรขึ้นถ้าวันพรุ่งนี้เกมของคุณเพิ่มของที่กดสำรวจได้อีก 50 อย่าง (ประตู, คันโยก, กองไฟ, ประตูมิติ)?',
      },
      solution: {
        en: 'With Cast To, you would need 50 separate Cast nodes in a monstrous spiderweb! With an Interface, a SINGLE "Interact (Message)" node triggers all 50 objects seamlessly with zero tight coupling.',
        th: 'ถ้าใช้ Cast To คุณต้องลากสาย Cast แตกแขนงออกไปเป็นใยแมงมุม 50 แฉก! แต่เมื่อใช้ Interface คุณใช้โหนด "Interact (Message)" เพียงโหนดเดียว สั่งงานสิ่งของทั้ง 50 ชนิดได้อย่างหมดจด!',
      },
    },
    commonMistakes: [
      {
        mistake: { en: 'Selecting the "Interact" function without the envelope icon (Target is Interface) instead of the Message node', th: 'เผลอเลือกโหนด Interact ที่ไม่มีรูปซองจดหมาย แทนที่จะเป็นโหนด Message' },
        why: { en: 'Non-message interface calls fail if the target does not match the exact class structure.', th: 'โหนดที่ไม่ใช่ Message จะบังคับให้เป้าหมายต้องมีโครงสร้างตรงเป๊ะ ทำให้สั่งงานข้ามคลาสไม่สำเร็จ' },
        fix: { en: 'Always search for "Interact (Message)" with the yellow envelope icon on the top-right corner of the node.', th: 'ค้นหาโหนดที่มีคำว่า "(Message)" พร้อมไอคอนซองจดหมายสีเหลืองที่มุมขวาบนเสมอ' },
      },
    ],
    quiz: [
      {
        question: {
          en: 'What visual indicator represents an Interface Message call in Unreal Blueprints?',
          th: 'สัญลักษณ์ใดบนโหนดใน Blueprint ที่บ่งบอกว่าเป็นการส่งสัญญาณ Interface Message?',
        },
        options: {
          en: [
            'A small yellow mail envelope icon in the top right corner',
            'A red skull icon',
            'A green checkmark',
            'A blue lightning bolt',
          ],
          th: [
            'ไอคอนซองจดหมายสีเหลืองขนาดเล็กที่มุมขวาบนของโหนด',
            'ไอคอนรูปหัวกะโหลกสีแดง',
            'เครื่องหมายถูกสีเขียว',
            'สายฟ้าสีฟ้า',
          ],
        },
        correctIndex: 0,
        explanation: {
          en: 'The yellow mail envelope icon signifies an asynchronous safe Interface Message call.',
          th: 'รูปซองจดหมายสีเหลืองคือสัญลักษณ์สากลของโหนด Interface Message ที่ส่งสัญญาณอย่างปลอดภัย',
        },
      },
    ],
  },
  {
    id: 'unreal-intermediate-004',
    engine: 'unreal',
    level: 'intermediate',
    lessonNumber: 12,
    slug: 'savegame-persistence-pipeline-ue5',
    heroImage: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80',
    heroImageCaption: {
      en: 'Unreal Engine SaveGame object persistence: asynchronous disk serialization, slot naming, and player checkpoint restoration',
      th: 'ระบบบันทึกเกม SaveGame ใน Unreal Engine: การเขียนไฟล์แบบอะซิงโครนัส, ระบบสล็อตเซฟ และการคืนค่าผู้เล่นจากจุดเซฟ',
    },
    title: {
      en: 'SaveGame System: Persistent Data & Checkpoints',
      th: 'ระบบเซฟเกม SaveGame: การบันทึกข้อมูลถาวรและจุด Checkpoint',
    },
    shortDescription: {
      en: 'Safely persist game progress across play sessions: create custom SaveGame classes, pack structs with player data, and execute Async Save to prevent hitching.',
      th: 'บันทึกความคืบหน้าของเกมลงเครื่องอย่างปลอดภัย: สร้างคลาส SaveGame, รวมข้อมูลผู้เล่นใน Struct และเซฟแบบ Async เพื่อไม่ให้เกมกระตุก',
    },
    estimatedMinutes: 35,
    tags: ['Intermediate', 'Unreal', 'SaveGame', 'Persistence', 'Serialization'],
    startFromZero: false,
    objectives: {
      en: [
        'Create a custom USaveGame subclass in Blueprint (SG_PlayerProfile)',
        'Store player stats, inventory arrays, and level transform data in structured variables',
        'Master the "Async Save Game To Slot" node to eliminate frame rate freezes during saving',
      ],
      th: [
        'สร้างคลาสลูก USaveGame ใน Blueprint ชื่อ SG_PlayerProfile',
        'จัดเก็บค่าสถานะผู้เล่น, อาเรย์ไอเทม และพิกัดตำแหน่งตัวละครลงในตัวแปร',
        'ใช้งานโหนด "Async Save Game To Slot" เพื่อเซฟไฟล์ในเบื้องหลังโดยที่เกมไม่สะดุดแม้แต่นิดเดียว',
      ],
    },
    prerequisites: {
      en: ['Completed Unreal Basic Track (Blueprints, Data Types)'],
      th: ['ผ่านเนื้อหา Unreal Basic (Blueprint, ชนิดตัวแปร)'],
    },
    zeroExplanation: {
      what: {
        en: 'The SaveGame system is Unreal Engine’s native framework for serializing runtime variables into binary .sav files saved onto the user’s hard drive.',
        th: 'ระบบ SaveGame คือเฟรมเวิร์กมาตรฐานของ Unreal Engine ในการแปลงตัวแปรในเกมให้กลายเป็นไฟล์ไบนารี .sav บันทึกลงบนฮาร์ดดิสก์ของผู้เล่น',
      },
      why: {
        en: 'When a player reaches a bonfire or closes the game, their level, inventory, and location must be preserved. SaveGame handles cross-platform disk writing effortlessly.',
        th: 'เมื่อผู้เล่นนั่งพักที่กองไฟหรือกดออกจากเกม เลเวล ของในกระเป๋า และจุดที่ยืนอยู่ต้องถูกจำไว้ SaveGame ช่วยจัดการบันทึกไฟล์ให้ครอบคลุมทุกแพลตฟอร์ม',
      },
      how: {
        en: 'Create a SaveGame object, populate its variables with current player data, and call "Async Save Game to Slot" with a slot name like "Slot1".',
        th: 'สร้างอ็อบเจกต์ SaveGame นำข้อมูลปัจจุบันของตัวละครไปใส่ แล้วเรียกโหนด "Async Save Game to Slot" โดยตั้งชื่อช่องเซฟว่า "Slot1"',
      },
      when: {
        en: 'Checkpoints, game completion, level transitions, player settings, and inventory management.',
        th: 'จุด Checkpoint, การจบด่าน, การเปลี่ยนฉาก, หน้าต่างตั้งค่า และกระเป๋าเก็บของ',
      },
    },
    diagram: {
      type: 'save-load',
      title: {
        en: 'SaveGame Serialization Cycle',
        th: 'ขั้นตอนการบันทึกและโหลดข้อมูล SaveGame',
      },
      description: {
        en: 'Player Data -> Create Save Game Object -> Assign Variables -> Async Save Game To Slot -> Saved to Disk (.sav) -> Load on Game Boot.',
        th: 'ข้อมูลตัวละคร -> สร้าง Save Game Object -> ใส่ตัวแปร -> เซฟลงดิสก์แบบ Async -> บันทึกเป็นไฟล์ .sav -> โหลดคืนค่าตอนเปิดเกม',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Creating the Custom SaveGame Blueprint',
          th: 'การสร้างไฟล์ Blueprint SaveGame',
        },
        explanation: {
          en: 'In Content Drawer, right-click > Blueprint Class > expand "All Classes" > search for "SaveGame". Name it "SG_PlayerSave". Open it and declare variables: PlayerHealth (Float), Coins (Int), and Transform (Transform).',
          th: 'คลิกขวาใน Content Drawer > Blueprint Class > ค้นหา "SaveGame" ตั้งชื่อว่า "SG_PlayerSave" ดับเบิ้ลคลิกเปิดขึ้นมาแล้วสร้างตัวแปร: PlayerHealth, Coins และ Transform',
        },
      },
    ],
    codeExamples: [
      {
        title: 'Asynchronous Save & Load Blueprint Pipeline',
        language: 'csharp',
        code: `// Saving the Game (Non-Blocking Background Thread):
// -----------------------------------------------------------------
// [Create Save Game Object (Save Game Class: SG_PlayerSave)]
//      | (Return Value -> Cast to SG_PlayerSave)
// [Set SavedHealth = CurrentHealth]
// [Set SavedCoins = TotalCoins]
// [Set SavedTransform = GetActorTransform(Player)]
//      |
// [Async Save Game To Slot (Slot Name: "Slot_01", User Index: 0)]
//
// Loading the Game:
// -----------------------------------------------------------------
// [Does Save Game Exist (Slot Name: "Slot_01")]
//      - True:
//          [Async Load Game From Slot (Slot Name: "Slot_01")]
//              | (Loaded Object -> Cast to SG_PlayerSave)
//          [Set Player Location = LoadedObject.SavedTransform]
//          [Set Player Health = LoadedObject.SavedHealth]`,
        explanation: {
          en: 'Using Async Save prevents the infamous "saving stutter" where the entire game hangs for half a second while writing to slow hard drives.',
          th: 'การใช้ Async Save ช่วยป้องกันอาการภาพกระตุกค้างตอนเซฟเกม โดยปล่อยให้การเขียนไฟล์ลงดิสก์ทำงานในเบื้องหลังอย่างเงียบๆ',
        },
      },
    ],
    practiceChecklist: [
      { id: 'ui04-1', title: { en: 'Create SG_PlayerSave inheriting from SaveGame class', th: 'สร้างไฟล์ SG_PlayerSave ที่สืบทอดจากคลาส SaveGame' }, completed: false },
      { id: 'ui04-2', title: { en: 'Populate variables and call Async Save Game To Slot', th: 'ใส่ค่าตัวแปรและเรียกโหนด Async Save Game To Slot' }, completed: false },
      { id: 'ui04-3', title: { en: 'Build Load Game logic on game boot / BeginPlay', th: 'สร้างระบบโหลดเกมเมื่อเปิดเกมในฟังก์ชัน BeginPlay' }, completed: false },
    ],
    miniChallenge: {
      prompt: {
        en: 'Why is "Async Save Game to Slot" strongly preferred over legacy "Save Game to Slot"?',
        th: 'ทำไมการใช้ "Async Save Game to Slot" ถึงดีกว่าโหนดรุ่นเก่า "Save Game to Slot" อย่างมาก?',
      },
      hint: {
        en: 'Consider what happens when writing a 5MB save file on a console or mobile device.',
        th: 'ลองนึกถึงตอนที่เครื่องต้องเขียนไฟล์เซฟขนาด 5MB ลงบนการ์ดหน่วยความจำของเครื่องคอนโซลหรือมือถือ',
      },
      solution: {
        en: 'Synchronous "Save Game to Slot" blocks the main game thread until disk I/O completes, causing a jarring frame freeze. "Async Save" offloads writing to a background worker thread, ensuring buttery-smooth 60+ FPS throughout!',
        th: 'โหนดแบบเก่าจะสั่งหยุดการทำงานของเกมชั่วคราวเพื่อรอให้ฮาร์ดดิสก์เขียนเสร็จ ทำให้เกมกระตุกค้าง ส่วน "Async Save" จะโยนงานเขียนไฟล์ไปทำในเบื้องหลัง ทำให้เกมรันได้ลื่นไหล 60+ FPS ไม่สะดุดเลย!',
      },
    },
    commonMistakes: [
      {
        mistake: { en: 'Attempting to save active Actor references (e.g. pointer to an Enemy Actor in the world)', th: 'พยายามบันทึกตัวแปรประเภท Actor ที่กำลังเดินอยู่ในฉาก' },
        why: { en: 'Pointers to level actors become completely invalid once the level unloads or the game closes.', th: 'พอยน์เตอร์ชี้ตัวละครจะกลายเป็นโมฆะและ Error ทันทีเมื่อปิดเกมหรือเปลี่ยนด่าน' },
        fix: { en: 'Only save raw data types (Float, Int, String, Struct, Vector) or Class assets, never runtime Actor pointers.', th: 'บันทึกเฉพาะข้อมูลดิบ เช่น เลือด, เงิน, พิกัดตัวเลข หรือชื่อด่าน ห้ามเซฟตัวแปรอ้างอิง Actor ตรงๆ' },
      },
    ],
    quiz: [
      {
        question: {
          en: 'Where are binary save files (.sav) stored by default in an Unreal Engine packaged build?',
          th: 'ไฟล์เซฟเกมแบบไบนารี (.sav) จะถูกจัดเก็บไว้ที่โฟลเดอร์ใดตามค่าเริ่มต้นของ Unreal Engine?',
        },
        options: {
          en: [
            'Saved/SaveGames folder',
            'Content/Blueprints folder',
            'Config/DefaultEngine folder',
            'Source/Public folder',
          ],
          th: [
            'โฟลเดอร์ Saved/SaveGames',
            'โฟลเดอร์ Content/Blueprints',
            'โฟลเดอร์ Config/DefaultEngine',
            'โฟลเดอร์ Source/Public',
          ],
        },
        correctIndex: 0,
        explanation: {
          en: 'Unreal Engine automatically routes all SaveGame slot files into the project’s Saved/SaveGames directory.',
          th: 'Unreal Engine จัดการส่งไฟล์เซฟเกมทั้งหมดลงในโฟลเดอร์ Saved/SaveGames ของตัวเกมให้อัตโนมัติ',
        },
      },
    ],
  },
];
