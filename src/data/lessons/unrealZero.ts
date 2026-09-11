import { Lesson } from '../../types';

export const unrealZeroLessons: Lesson[] = [
  {
    id: 'unreal-zero-001',
    engine: 'unreal',
    level: 'zero',
    lessonNumber: 1,
    slug: 'ue5-interface-viewport-outliner-content-drawer',
    heroImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    heroImageCaption: {
      en: 'Unreal Engine 5 level editor interface: Viewport, Outliner hierarchy, Details panel, and Content Drawer',
      th: 'หน้าต่างโปรแกรม Unreal Engine 5: วิวพอร์ต 3 มิติ, Outliner จัดการฉาก, แผง Details และ Content Drawer',
    },
    title: {
      en: 'Level 0: Unreal Engine 5 Interface & 3D Navigation',
      th: 'Level 0: การใช้งานหน้าต่าง Unreal Engine 5 และการบังคับมุมกล้อง 3D',
    },
    shortDescription: {
      en: 'Master the UE5 editor layout from total scratch: navigate the 3D viewport like a game camera, inspect properties, and manage assets with the Content Drawer.',
      th: 'เริ่มต้นเรียนรู้หน้าต่างโปรแกรม Unreal Engine 5 จากศูนย์: การควบคุมมุมมอง 3D เหมือนเล่นเกม แผง Outliner, Details และการจัดการโฟลเดอร์ใน Content Drawer',
    },
    estimatedMinutes: 20,
    tags: ['Zero', 'Unreal', 'UE5', 'Interface', 'Viewport', 'ContentDrawer'],
    startFromZero: true,
    objectives: {
      en: [
        'Navigate the 3D Viewport using WASD + Right Mouse Button flight controls',
        'Understand the role of the Outliner (world scene hierarchy) vs Details panel (object parameters)',
        'Master the Content Drawer shortcut (Ctrl + Spacebar) for ultra-fast asset browsing',
      ],
      th: [
        'บังคับมุมกล้องในหน้าต่าง 3D Viewport ด้วยการคลิกขวาค้างไว้ร่วมกับปุ่ม WASD',
        'เข้าใจความแตกต่างระหว่าง Outliner (รายชื่อสิ่งของในโลก) และ Details (คุณสมบัติของสิ่งของ)',
        'ใช้คีย์ลัด Content Drawer (Ctrl + Spacebar) เพื่อค้นหาและจัดการไฟล์ Asset อย่างรวดเร็ว',
      ],
    },
    prerequisites: {
      en: ['No prior game development experience required'],
      th: ['ไม่ต้องมีพื้นฐานมาก่อน เริ่มต้นจากศูนย์ได้ทันที'],
    },
    zeroExplanation: {
      what: {
        en: 'The Unreal Engine 5 Editor is the professional digital workspace where you construct 3D game levels, position lighting, and choreograph cinematics.',
        th: 'หน้าต่าง Unreal Engine 5 คือพื้นที่ทำงานสร้างสรรค์ระดับโลกสำหรับจัดวางฉาก 3 มิติ จัดแสง และสร้างตรรกะของเกม',
      },
      why: {
        en: 'Fumbling with camera controls or losing assets creates frustration. Mastering the 4 key panels makes building game worlds feel as intuitive as playing a game.',
        th: 'หากไม่คุ้นเคยกับปุ่มควบคุมมุมมอง คุณจะเสียเวลาและรู้สึกติดขัด การเข้าใจ 4 หน้าต่างหลักจะทำให้การสร้างโลกในเกมสนุกเหมือนกำลังเล่นเกม',
      },
      how: {
        en: 'Hold Right Click + WASD to fly through your world. Press Ctrl+Space to toggle the Content Drawer, drag Static Meshes into the Viewport, and adjust Transform in the Details panel.',
        th: 'คลิกขวาค้าง + WASD เพื่อบินสำรวจฉาก, กด Ctrl + Spacebar เพื่อเปิด Content Drawer ลากโมเดลลงสู่ฉาก และปรับพิกัดในแผง Details',
      },
      when: {
        en: 'Every single minute you spend developing inside Unreal Engine 5.',
        th: 'ตลอดทุกนาทีที่คุณสร้างเกมใน Unreal Engine 5',
      },
    },
    diagram: {
      type: 'actor-component',
      title: {
        en: 'Unreal Engine 5 Core Workspace Layout',
        th: 'เค้าโครงหน้าต่างหลักของ Unreal Engine 5',
      },
      description: {
        en: 'Center: 3D Viewport (WASD flight) | Right-Top: Outliner (World Actor list) | Right-Bottom: Details Panel | Bottom Pop-up: Content Drawer (Ctrl + Space).',
        th: 'ตรงกลาง: 3D Viewport (บินด้วย WASD) | ขวาบน: Outliner (รายชื่อสิ่งของในฉาก) | ขวาล่าง: แผง Details | ด้านล่าง: Content Drawer (Ctrl + Space)',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Navigating the 3D Viewport like an FPS Game',
          th: 'การบินควบคุมมุมกล้อง 3D Viewport สไตล์เกม FPS',
        },
        explanation: {
          en: 'Hold down the RIGHT MOUSE BUTTON. While holding it down, use W (forward), S (backward), A (left), D (right), Q (down), and E (up). Scroll your mouse wheel to adjust camera flight speed.',
          th: 'กดคลิกเมาส์ขวาค้างไว้ แล้วกดปุ่ม W (เดินหน้า), S (ถอยหลัง), A (ซ้าย), D (ขวา), Q (ลง), E (ขึ้น) และหมุนล้อเมาส์เพื่อปรับความเร็วในการบิน',
        },
      },
      {
        stepNumber: 2,
        title: {
          en: 'Opening the Content Drawer (Ctrl + Spacebar)',
          th: 'การเรียกใช้ Content Drawer ด้วยคีย์ลัด Ctrl + Spacebar',
        },
        explanation: {
          en: 'In UE5, the asset browser docks neatly at the bottom. Press Ctrl + Spacebar to slide it up instantly, grab any asset, and drag it into your 3D level.',
          th: 'ใน UE5 ถาดเก็บไฟล์จะซ่อนอยู่ที่ขอบล่าง เพียงกด Ctrl + Spacebar ถาด Content Drawer จะสไลด์ขึ้นมาให้คุณลากโมเดลเข้าสู่ฉากได้ทันที',
        },
      },
    ],
    codeExamples: [
      {
        title: 'Essential UE5 Hotkey Reference Guide',
        language: 'csharp',
        code: `// Unreal Engine 5 Editor Power Shortcuts
// ---------------------------------------------
// Ctrl + Spacebar       : Toggle Content Drawer
// F                      : Focus camera on selected Actor
// W / E / R              : Select Move / Rotate / Scale Gizmo
// Alt + Drag (Gizmo)    : Duplicate selected Actor instantly
// G                      : Toggle Game View (hides editor icons)
// Play In Editor (PIE)  : Alt + P
// Stop Simulation       : Escape`,
        explanation: {
          en: 'Memorizing "F" to focus and "Alt + Drag" to clone actors will save you hundreds of hours when assembling 3D environments.',
          th: 'การจำคีย์ลัด "F" เพื่อซูมหาวัตถุ และ "Alt + ลากลูกศร" เพื่อโคลนนิ่งสิ่งของ จะช่วยให้คุณจัดฉากได้เร็วขึ้นมหาศาล',
        },
      },
    ],
    practiceChecklist: [
      { id: 'uz01-1', title: { en: 'Fly around the starter scene using Right Click + WASD', th: 'บินสำรวจฉากด้วยการคลิกขวาค้าง + WASD' }, completed: false },
      { id: 'uz01-2', title: { en: 'Press Ctrl + Spacebar to open the Content Drawer', th: 'กด Ctrl + Spacebar เพื่อเปิดหน้าต่าง Content Drawer' }, completed: false },
      { id: 'uz01-3', title: { en: 'Select a chair or table and press "F" to focus', th: 'เลือกเก้าอี้หรือโต๊ะในฉากแล้วกดปุ่ม "F" เพื่อซูมกล้องเข้าไปหา' }, completed: false },
    ],
    miniChallenge: {
      prompt: {
        en: 'How can you instantly duplicate an object in the UE5 Viewport while moving it, without using Ctrl+C and Ctrl+V?',
        th: 'คุณสามารถโคลนนิ่งวัตถุในฉากพร้อมกับขยับตำแหน่งไปพร้อมกันได้อย่างไร โดยไม่ต้องกด Ctrl+C และ Ctrl+V?',
      },
      hint: {
        en: 'Think of the Alt key combined with the translation transform gizmo.',
        th: 'ลองใช้ปุ่ม Alt ร่วมกับการคลิกลากลูกศรแกน 3 มิติ',
      },
      solution: {
        en: 'Hold the "Alt" key while dragging any axis arrow of the Translation Gizmo. An exact clone is created at the new location!',
        th: 'กดปุ่ม Alt ค้างไว้แล้วคลิกลากลูกศรแกนของวัตถุ วัตถุจะถูกโคลนออกมาตรงตำแหน่งใหม่ทันทีในพริบตาเดียว!',
      },
    },
    commonMistakes: [
      {
        mistake: { en: 'The camera flies way too fast or painfully slow across the scene', th: 'มุมกล้องบินเร็วเกินไปจนคุมไม่อยู่ หรือช้ามากจนไม่ขยับ' },
        why: { en: 'The Viewport camera speed slider is set too high or low.', th: 'ค่า Camera Speed ที่มุมขวาบนของ Viewport ตั้งไว้สูงหรือต่ำเกินไป' },
        fix: { en: 'Look at the top-right corner of the Viewport and adjust the camera icon number (4 is standard, scroll mouse wheel while holding right-click to fine-tune).', th: 'มองดูที่มุมขวาบนของ Viewport ปรับตัวเลขรูปกล้องให้เป็น 4 หรือหมุนล้อเมาส์ขณะคลิกขวาค้างไว้' },
      },
    ],
    quiz: [
      {
        question: {
          en: 'Which keyboard shortcut toggles the Content Drawer in Unreal Engine 5?',
          th: 'คีย์ลัดใดที่ใช้เปิด/ปิดถาดเก็บไฟล์ Content Drawer ใน Unreal Engine 5?',
        },
        options: {
          en: ['Ctrl + Spacebar', 'Alt + Tab', 'Ctrl + Shift + F', 'F12'],
          th: ['Ctrl + Spacebar', 'Alt + Tab', 'Ctrl + Shift + F', 'F12'],
        },
        correctIndex: 0,
        explanation: {
          en: 'Ctrl + Spacebar brings up the Content Drawer from the bottom edge of the screen anywhere in UE5.',
          th: 'Ctrl + Spacebar คือคีย์ลัดมาตรฐานของ UE5 ในการเรียกถาด Content Drawer ขึ้นมาจากขอบล่างของหน้าจอ',
        },
      },
    ],
  },
  {
    id: 'unreal-zero-002',
    engine: 'unreal',
    level: 'zero',
    lessonNumber: 2,
    slug: 'actors-components-static-meshes',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    heroImageCaption: {
      en: 'Unreal Engine Actor architecture: RootComponent hierarchy, StaticMeshComponent rendering, and collision profiles',
      th: 'สถาปัตยกรรม Actor ใน Unreal Engine: ลำดับชั้น RootComponent, การแสดงผลโมเดล 3D และโปรไฟล์การชน',
    },
    title: {
      en: 'Level 0: Actors, Components & Static Meshes',
      th: 'Level 0: ทำความเข้าใจ Actor, Component และโมเดล Static Mesh',
    },
    shortDescription: {
      en: 'Discover the DNA of everything that exists inside an Unreal Engine world: understand how Actors and Components assemble into interactive game objects.',
      th: 'เข้าใจโครงสร้างพื้นฐานของทุกสิ่งในโลก Unreal Engine: เรียนรู้ว่า Actor และ Component ประกอบร่างกันจนกลายเป็นวัตถุในเกมได้อย่างไร',
    },
    estimatedMinutes: 25,
    tags: ['Zero', 'Unreal', 'Actors', 'Components', 'StaticMesh'],
    startFromZero: true,
    objectives: {
      en: [
        'Understand what an Actor is in Unreal Engine (the fundamental world entity)',
        'Learn how Components (StaticMesh, PointLight, Audio) attach to an Actor RootComponent',
        'Place, translate, rotate, and scale Static Meshes in the level',
      ],
      th: [
        'เข้าใจความหมายของ Actor ใน Unreal Engine (หน่วยพื้นฐานของทุกสิ่งในฉาก)',
        'เรียนรู้วิธีประกอบ Component ต่างๆ (โมเดล, แสงไฟ, ลำโพงเสียง) เข้ากับ RootComponent',
        'วาง ปรับตำแหน่ง หมุน และย่อขยายโมเดล Static Mesh ในฉากจริง',
      ],
    },
    prerequisites: {
      en: ['Completed Unreal Level 0 Lesson 1: Interface & Navigation'],
      th: ['ผ่านเนื้อหา Unreal Level 0 บทที่ 1: หน้าต่างโปรแกรมและการบังคับมุมกล้อง'],
    },
    zeroExplanation: {
      what: {
        en: 'An Actor is any object that can be placed or spawned into an Unreal level. Components are modular functional parts attached to that Actor.',
        th: 'Actor คือวัตถุใดๆ ก็ตามที่สามารถวางหรือเสกขึ้นมาในฉาก Unreal ส่วน Component คือชิ้นส่วนเสริมที่นำมาประกอบเข้ากับ Actor',
      },
      why: {
        en: 'An Actor by itself has no visual look. You give an Actor visual form by adding a StaticMeshComponent, sound by adding an AudioComponent, and illumination by adding a LightComponent.',
        th: 'Actor เปล่าๆ จะไม่มีรูปร่างที่มองเห็นได้ คุณต้องเพิ่ม StaticMeshComponent เพื่อให้มีโมเดล 3D, เพิ่ม AudioComponent เพื่อให้มีเสียง และเพิ่ม LightComponent เพื่อให้ส่องแสงได้',
      },
      how: {
        en: 'Drag a Static Mesh asset from the Content Drawer into the level. Unreal automatically wraps it inside an Actor with a StaticMeshComponent attached to the RootComponent.',
        th: 'ลากไฟล์ Static Mesh จาก Content Drawer มาปล่อยในฉาก Unreal จะสร้าง Actor พร้อมติดตั้ง StaticMeshComponent ให้โดยอัตโนมัติ',
      },
      when: {
        en: 'Characters, weapons, doors, street lamps, vehicles, and collectible gems.',
        th: 'ตัวละคร, อาวุธ, ประตู, เสาไฟถนน, รถยนต์ และเพชรไอเทมเก็บคะแนน',
      },
    },
    diagram: {
      type: 'actor-component',
      title: {
        en: 'The Actor & Component Tree Structure',
        th: 'โครงสร้างต้นไม้ของ Actor และ Component',
      },
      description: {
        en: 'Actor (TorchEntity) -> Root: SceneComponent (Transform) -> StaticMeshComponent (Wood Base) -> PointLightComponent (Fire Glow) -> ParticleSystemComponent (Flames).',
        th: 'Actor (คบเพลิง) -> Root: SceneComponent (พิกัด) -> StaticMesh (แท่งไม้) -> PointLight (แสงไฟสีส้ม) -> ParticleSystem (เปลวไฟลุกโชน)',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Inspecting Actor Components in the Details Panel',
          th: 'การตรวจสอบ Component ของ Actor ในแผง Details',
        },
        explanation: {
          en: 'Select any placed Actor. At the very top of the Details panel, you will see the Component Hierarchy tree. Click "+ Add" to attach new components like Point Lights or Colliders.',
          th: 'คลิกเลือก Actor ใดๆ ในฉาก ด้านบนสุดของแผง Details จะแสดงแผนผัง Component Hierarchy คุณสามารถกดปุ่ม "+ Add" เพื่อเพิ่มแสงไฟ เสียง หรือกรอบตรวจจับการชนได้ทันที',
        },
        inspectorData: {
          componentName: 'Torch_Actor (Actor)',
          properties: [
            { name: 'RootComponent', value: 'DefaultSceneRoot', hint: 'World transform anchor' },
            { name: 'StaticMesh', value: 'SM_Torch_Stick', hint: '3D Wooden stick visual' },
            { name: 'PointLight', value: 'Intensity: 5000 cd, Color: Orange', hint: 'Fire illumination' },
          ],
        },
      },
    ],
    codeExamples: [
      {
        title: 'Conceptual Blueprint / C++ Actor Composition',
        language: 'csharp',
        code: `// Conceptual Unreal Architecture (Actor + Components)
// In Unreal Engine, every interactive entity inherits from AActor:

class ATorchActor : public AActor
{
    // The anchor for 3D location, rotation, and scale
    USceneComponent* RootAnchor;

    // The visual 3D model
    UStaticMeshComponent* TorchMesh;

    // The glowing illumination
    UPointLightComponent* FireLight;

    // The crackling audio effect
    UAudioComponent* FireAudio;
};`,
        explanation: {
          en: 'Components are lego blocks. By stacking mesh, light, and audio onto an Actor, you create complex interactive entities with zero messy code.',
          th: 'Component เปรียบเสมือนตัวต่อเลโก้ การต่อโมเดล แสงไฟ และเสียงเข้าด้วยกัน ทำให้คุณสร้างคบเพลิงที่มีชีวิตชีวาได้อย่างง่ายดาย',
        },
      },
    ],
    practiceChecklist: [
      { id: 'uz02-1', title: { en: 'Drag a Static Mesh cube into the Viewport', th: 'ลาก Static Mesh ทรงลูกบาศก์ลงในหน้าต่าง Viewport' }, completed: false },
      { id: 'uz02-2', title: { en: 'In the Details panel, click "+ Add" and add a Point Light', th: 'ในแผง Details กดปุ่ม "+ Add" แล้วเลือกเพิ่ม Point Light' }, completed: false },
      { id: 'uz02-3', title: { en: 'Change the light color to glowing orange/red', th: 'เปลี่ยนสีของดวงไฟให้เป็นสีส้ม/แดงเรืองแสง' }, completed: false },
    ],
    miniChallenge: {
      prompt: {
        en: 'If you move the RootComponent of an Actor, what happens to all the child components attached underneath it?',
        th: 'หากคุณขยับตำแหน่ง RootComponent ของ Actor จะเกิดอะไรขึ้นกับ Component ลูกทั้งหมดที่ต่ออยู่ข้างใต้?',
      },
      hint: {
        en: 'Think about a parent-child relationship in 3D space.',
        th: 'นึกถึงความสัมพันธ์ระหว่างพ่อแม่และลูกในพิกัด 3 มิติ',
      },
      solution: {
        en: 'All child components move, rotate, and scale together with the RootComponent! Their relative local offsets are preserved perfectly.',
        th: 'Component ลูกทั้งหมดจะขยับ หมุน และย่อขยายตาม RootComponent ไปด้วยกันทั้งหมด โดยรักษาระยะห่างสัมพัทธ์เดิมไว้เสมอ!',
      },
    },
    commonMistakes: [
      {
        mistake: { en: 'Confusing a Static Mesh asset on disk with a Static Mesh Component in the level', th: 'สับสนระหว่างไฟล์โมเดล Static Mesh บนดิสก์ กับ Static Mesh Component ในฉาก' },
        why: { en: 'The asset in Content Drawer is a blueprint recipe; the Component in the world is an active instance.', th: 'ไฟล์ใน Content Drawer คือแม่พิมพ์ ส่วน Component ในฉากคือของจริงที่ถูกสร้างออกมา' },
        fix: { en: 'Remember: Content Drawer = Library of files; Viewport = Active instantiated world.', th: 'จำไว้ว่า: Content Drawer คือคลังเก็บไฟล์ ส่วน Viewport คือโลกจริงที่กำลังจำลอง' },
      },
    ],
    quiz: [
      {
        question: {
          en: 'What is the base class for any object that can be placed in an Unreal Engine level?',
          th: 'คลาสพื้นฐานของวัตถุทุกชิ้นที่สามารถวางลงในด่านของ Unreal Engine คืออะไร?',
        },
        options: {
          en: ['Actor', 'GameObject', 'Entity', 'PawnNode'],
          th: ['Actor', 'GameObject', 'Entity', 'PawnNode'],
        },
        correctIndex: 0,
        explanation: {
          en: 'In Unreal Engine, any object that can exist in a level is an Actor (AActor in C++).',
          th: 'ใน Unreal Engine วัตถุทุกชิ้นที่วางในฉากได้ล้วนสืบทอดมาจาก Actor (AActor ใน C++)',
        },
      },
    ],
  },
  {
    id: 'unreal-zero-003',
    engine: 'unreal',
    level: 'zero',
    lessonNumber: 3,
    slug: 'blueprints-visual-scripting-101',
    heroImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    heroImageCaption: {
      en: 'Unreal Engine Blueprints visual scripting node graph: execution flow wires, data pins, and event triggers',
      th: 'กราฟระบบ Blueprint Visual Scripting ใน Unreal Engine: สายส่งคำสั่งสีขาว พินข้อมูล และอีเวนต์กระตุ้นการทำงาน',
    },
    title: {
      en: 'Level 0: Blueprints Visual Scripting 101: Graph, Nodes & Pins',
      th: 'Level 0: เริ่มต้น Blueprints Visual Scripting: กราฟ โหนด และการเชื่อมสาย',
    },
    shortDescription: {
      en: 'Write powerful game logic without typing code! Master the Event Graph, white execution wires, colored data pins, and trigger your first interactive logic.',
      th: 'สร้างตรรกะเกมโดยไม่ต้องพิมพ์โค้ดแม้แต่บรรทัดเดียว! เรียนรู้การใช้งาน Event Graph, สายสีขาวสำหรับส่งคำสั่ง และพินสีต่างๆ สำหรับส่งข้อมูล',
    },
    estimatedMinutes: 30,
    tags: ['Zero', 'Unreal', 'Blueprints', 'VisualScripting', 'EventGraph'],
    startFromZero: true,
    objectives: {
      en: [
        'Understand the Anatomy of a Blueprint Node: Inputs on Left, Outputs on Right',
        'Learn the difference between White Execution Flow wires (When things happen) and Colored Data wires (What data is used)',
        'Build a functional "Print String on BeginPlay" and interactive door trigger in Blueprint',
      ],
      th: [
        'เข้าใจโครงสร้างของโหนดใน Blueprint: ฝั่งซ้ายคือข้อมูลขาเข้า (Input) ฝั่งขวาคือผลลัพธ์ (Output)',
        'แยกความแตกต่างระหว่างสายสีขาว (ลำดับการทำงาน) กับสายสีต่างๆ (ข้อมูลตัวแปร)',
        'สร้างคำสั่งพิมพ์ข้อความตอนเริ่มเกม (Print String on BeginPlay) ใน Blueprint สำเร็จ',
      ],
    },
    prerequisites: {
      en: ['Completed Unreal Level 0 Lesson 2: Actors & Components'],
      th: ['ผ่านเนื้อหา Unreal Level 0 บทที่ 2: Actor และ Component'],
    },
    zeroExplanation: {
      what: {
        en: 'Blueprints Visual Scripting is Unreal Engine’s node-based visual programming language, allowing you to create full games visually.',
        th: 'Blueprints Visual Scripting คือระบบเขียนโปรแกรมแบบภาพของ Unreal Engine ที่ให้คุณต่อสายโหนดสร้างเกมได้เต็มรูปแบบโดยไม่ต้องพิมพ์โค้ด',
      },
      why: {
        en: 'Visual scripting eliminates syntax typos, missing semicolons, and provides instant visual debugging as execution pulses along the wires.',
        th: 'Blueprint ช่วยตัดปัญหาการพิมพ์ตกหล่น ลืมใส่เครื่องหมายเซมิโคลอน (;) และเห็นสายไฟวิ่งกระพริบให้เห็นการทำงานแบบเรียลไทม์',
      },
      how: {
        en: 'Right-click on the Event Graph canvas to search for nodes. Connect the white triangle pin of Event BeginPlay to the input triangle of Print String, enter text, and compile.',
        th: 'คลิกขวาบนผืนผ้าใบ Event Graph เพื่อค้นหาโหนด ลากสายสีขาวจาก Event BeginPlay ไปเสียบที่ Print String พิมพ์ข้อความ แล้วกดปุ่ม Compile',
      },
      when: {
        en: 'Player movement, inventory systems, health management, quest logic, and interactive triggers.',
        th: 'การบังคับตัวละคร, กระเป๋าเก็บของ, ระบบเลือด, บทสนทนาเควสต์ และกลไกเปิดประตู',
      },
    },
    diagram: {
      type: 'blueprint-flow',
      title: {
        en: 'Blueprint Node Execution & Data Flow',
        th: 'การเชื่อมต่อสายคำสั่งและสายข้อมูลใน Blueprint',
      },
      description: {
        en: 'Event BeginPlay (Exec Out) ---> (Exec In) Print String (In String: "Welcome to Unreal Engine 5!").',
        th: 'Event BeginPlay (เริ่มเกม) ---> สั่งต่อเข้า ---> Print String (ข้อความ: "ยินดีต้อนรับสู่ Unreal Engine 5!")',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Creating a Blueprint Class',
          th: 'การสร้างไฟล์ Blueprint Class ใหม่',
        },
        explanation: {
          en: 'Press Ctrl + Space to open Content Drawer. Right-click in your Blueprints folder > Blueprint Class > select "Actor". Name it "BP_InteractiveTrigger" and double-click to open the Blueprint editor.',
          th: 'กด Ctrl + Space เปิด Content Drawer คลิกขวาในโฟลเดอร์ > Blueprint Class > เลือก "Actor" ตั้งชื่อว่า "BP_InteractiveTrigger" แล้วดับเบิ้ลคลิกเพื่อเปิดหน้าต่างแก้ไข',
        },
      },
      {
        stepNumber: 2,
        title: {
          en: 'Connecting Execution Pins on Event Graph',
          th: 'การเชื่อมสาย Execution Pin บนหน้าผืนผ้าใบ Event Graph',
        },
        explanation: {
          en: 'Navigate to the Event Graph tab. Locate the red "Event BeginPlay" node. Click and drag from its white triangle output pin, release in empty space, search for "Print String", and select it.',
          th: 'คลิกไปที่แท็บ Event Graph มองหาโหนดสีแดง "Event BeginPlay" คลิกซ้ายที่หัวลูกศรสามเหลี่ยมสีขาวแล้วลากสายออกมา ปล่อยมือแล้วค้นหา "Print String"',
        },
      },
    ],
    codeExamples: [
      {
        title: 'Visual Representation of Blueprint Pin Types',
        language: 'csharp',
        code: `// Unreal Blueprint Pin Color Coding Standard:
// -----------------------------------------------------------------
// White Triangle (Exec)  : Control Flow (When this node executes)
// Cyan / Light Blue      : Integer (Whole numbers: 1, 2, 50)
// Green                  : Float (Decimals: 3.14, 0.05f)
// Red                    : Boolean (True or False)
// Magenta / Pink         : String (Text messages: "Game Over")
// Yellow                 : Vector (3D coordinates: X, Y, Z)
// Purple                 : Rotator (Angles: Pitch, Yaw, Roll)
// Dark Blue              : Object / Actor Reference`,
        explanation: {
          en: 'Unreal colors every pin type distinctly. You can never accidentally connect a text string into a 3D coordinate vector.',
          th: 'Unreal แยกสีของพินทุกประเภทอย่างชัดเจน ทำให้คุณไม่มีทางเสียบสายข้อความเข้าช่องพิกัด 3 มิติผิดอย่างแน่นอน',
        },
      },
    ],
    practiceChecklist: [
      { id: 'uz03-1', title: { en: 'Create a new Blueprint Actor named BP_WelcomeMessage', th: 'สร้าง Blueprint Actor ใหม่ชื่อ BP_WelcomeMessage' }, completed: false },
      { id: 'uz03-2', title: { en: 'Connect Event BeginPlay to Print String', th: 'เชื่อมสายจาก Event BeginPlay ไปยัง Print String' }, completed: false },
      { id: 'uz03-3', title: { en: 'Click Compile (top left), place in scene, and press Alt+P to test', th: 'กดปุ่ม Compile มุมซ้ายบน ลากวางในฉาก แล้วกด Alt+P เพื่อทดสอบ' }, completed: false },
    ],
    miniChallenge: {
      prompt: {
        en: 'If you connect a Print String node but forget to press "Compile" (or the Compile icon has a yellow question mark), will your changes appear when pressing Play?',
        th: 'หากคุณต่อสาย Print String เสร็จแล้วแต่ลืมกดปุ่ม "Compile" (ไอคอนยังมีเครื่องหมายคำถามสีเหลือง) เมื่อกดเล่นเกมคำสั่งจะทำงานหรือไม่?',
      },
      hint: {
        en: 'Unreal requires compiling visual graphs into machine-executable bytecode.',
        th: 'Unreal จำเป็นต้องคอมไพล์กราฟภาพให้กลายเป็นไบต์โค้ดสำหรับคอมพิวเตอร์ก่อนเสมอ',
      },
      solution: {
        en: 'NO! Uncompiled Blueprint changes are not packaged for play mode. Always verify the green checkmark on the "Compile" button before testing!',
        th: 'ไม่ทำงาน! การเปลี่ยนแปลงใดๆ ใน Blueprint ที่ยังไม่กด Compile จะไม่ถูกนำไปรันในเกม ต้องสังเกตเครื่องหมายถูกสีเขียวบนปุ่ม Compile เสมอ!',
      },
    },
    commonMistakes: [
      {
        mistake: { en: 'Dragging a Blueprint Actor into the Content Drawer instead of the 3D Viewport', th: 'ลากไฟล์ Blueprint กลับไปใส่โฟลเดอร์แทนที่จะลากลงใน Viewport' },
        why: { en: 'The Blueprint will never run unless an instance exists inside the active level.', th: 'Blueprint จะไม่มีวันทำงานหากไม่มีร่างของมันอยู่ในด่านที่กำลังเล่น' },
        fix: { en: 'Drag the Blueprint file directly from Content Drawer into the 3D Viewport scene and press Alt+P to play.', th: 'ลากไฟล์ Blueprint ไปปล่อยลงบนพื้นในหน้าต่าง 3D Viewport ตรงๆ แล้วกด Alt+P' },
      },
    ],
    quiz: [
      {
        question: {
          en: 'What does a white triangle pin represent in Unreal Engine Blueprints?',
          th: 'พินรูปสามเหลี่ยมสีขาวใน Unreal Engine Blueprints บ่งบอกถึงสิ่งใด?',
        },
        options: {
          en: ['Execution Flow (Control sequence)', 'Vector 3D position', 'Sound volume', 'Boolean True/False'],
          th: ['ลำดับการสั่งงาน (Execution Flow)', 'พิกัด 3 มิติ Vector', 'ระดับเสียง Sound Volume', 'ค่าความจริง Boolean'],
        },
        correctIndex: 0,
        explanation: {
          en: 'White triangle execution pins dictate the precise order in which nodes are executed in sequence.',
          th: 'พินรูปสามเหลี่ยมสีขาวทำหน้าที่ส่งสัญญาณสั่งงานเรียงตามลำดับจากซ้ายไปขวา',
        },
      },
    ],
  },
  {
    id: 'unreal-zero-004',
    engine: 'unreal',
    level: 'zero',
    lessonNumber: 4,
    slug: 'lumen-nanite-next-gen-rendering',
    heroImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
    heroImageCaption: {
      en: 'Unreal Engine 5 next-generation rendering: Lumen global illumination ray-bouncing and Nanite film-quality micro-polygons',
      th: 'เทคโนโลยีเรนเดอร์ยุคใหม่ของ UE5: ระบบแสงสะท้อนสมจริง Lumen และการประมวลผลโมเดลระดับพันล้านโพลิกอนด้วย Nanite',
    },
    title: {
      en: 'Level 0: Lumen Lighting & Nanite Virtualized Geometry',
      th: 'Level 0: ระบบแสง Lumen และโมเดลความละเอียดสูง Nanite ใน UE5',
    },
    shortDescription: {
      en: 'Harness the flagship superpowers of Unreal Engine 5: real-time bouncing global illumination with Lumen and unlimited film-quality polygon rendering with Nanite.',
      th: 'สัมผัสสองสุดยอดเทคโนโลยีปฏิวัติวงการเกม: ระบบคำนวณแสงสะท้อนแบบเรียลไทม์ Lumen และการนำเข้าโมเดลระดับภาพยนตร์นับร้อยล้านโพลิกอนด้วย Nanite',
    },
    estimatedMinutes: 25,
    tags: ['Zero', 'Unreal', 'Lumen', 'Nanite', 'NextGen', 'Graphics'],
    startFromZero: true,
    objectives: {
      en: [
        'Understand how Lumen Global Illumination eliminates the need for slow, static light baking',
        'Learn how Nanite streams billions of micro-polygons in real time with zero frame rate penalty',
        'Inspect Nanite Visualization modes (Triangles, Clusters) in the Viewport',
      ],
      th: [
        'เข้าใจว่าระบบแสง Lumen ช่วยตัดปัญหาการอบแสง (Light Baking) ที่กินเวลานานหลายชั่วโมงได้อย่างไร',
        'เรียนรู้การทำงานของ Nanite ที่เรนเดอร์โพลิกอนระดับพันล้านชิ้นได้ลื่นไหลโดยเฟรมเรตไม่ตก',
        'เปิดดูโหมดตรวจสอบ Nanite Visualization (Triangles, Clusters) ในหน้าต่าง Viewport',
      ],
    },
    prerequisites: {
      en: ['Completed Unreal Level 0 Lesson 1 & 2'],
      th: ['ผ่านเนื้อหา Unreal Level 0 บทที่ 1 และ 2'],
    },
    zeroExplanation: {
      what: {
        en: 'Lumen is a fully dynamic global illumination and reflections system. Nanite is a virtualized micro-polygon geometry system.',
        th: 'Lumen คือระบบคำนวณแสงตกกระทบและแสงสะท้อนแบบไดนามิกเรียลไทม์ ส่วน Nanite คือระบบเรนเดอร์โมเดล 3D ละเอียดระดับไมโครโพลิกอน',
      },
      why: {
        en: 'Previously, making changes to lighting required waiting hours for "Light Baking", and 3D models had to be manually simplified into low-poly LODs. UE5 automates both completely.',
        th: 'ในอดีต เมื่อขยับดวงไฟต้องรอนั่งอบแสง (Bake) นานเป็นชั่วโมง และโมเดลต้องมานั่งลดโพลิกอนทำ LOD ให้เมื่อย แต่ UE5 จัดการทุกอย่างให้อัตโนมัติในเสี้ยววินาที',
      },
      how: {
        en: 'Lumen operates automatically with Directional Lights and Skylights. Nanite is enabled by checking "Enable Nanite Support" on any imported Static Mesh.',
        th: 'Lumen ทำงานอัตโนมัติทันทีที่มี Directional Light ส่วน Nanite เพียงคลิกขวาที่โมเดลแล้วเลือก Enable Nanite Support',
      },
      when: {
        en: 'Building realistic sunlit outdoor worlds, dark caves with dynamic flashlight beams, and detailed photogrammetry scanned assets.',
        th: 'การสร้างโลกกลางแจ้งที่มีแสงแดดส่อง, ถ้ำมืดที่มีลำแสงไฟฉายส่องสะท้อนผนังหิน และการนำเข้าโมเดลสแกนความละเอียดสูงระดับภาพยนตร์',
      },
    },
    diagram: {
      type: 'render-pipeline',
      title: {
        en: 'Lumen Dynamic Ray-Bounce Architecture',
        th: 'การทำงานของระบบแสงสะท้อน Lumen',
      },
      description: {
        en: 'Sunlight enters window -> Bounces off red rug -> Bounces onto white ceiling -> Ceiling glows with subtle realistic warm pink indirect illumination.',
        th: 'แสงอาทิตย์ส่องเข้าทางหน้าต่าง -> ตกกระทบพรมสีแดง -> แสงสะท้อนชิ่งขึ้นไปโดนเพดานสีขาว -> เพดานสว่างเป็นโทนชมพูอ่อนอย่างสมจริง',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Viewing Nanite Triangles in the Viewport',
          th: 'การเปิดดูโครงข่ายสามเหลี่ยม Nanite ใน Viewport',
        },
        explanation: {
          en: 'At the top-left of the Viewport, click the "Lit" dropdown menu > select "Nanite Visualization" > click "Triangles". You can now see millions of adaptive micro-polygons adjusting in real-time!',
          th: 'ที่มุมซ้ายบนของหน้าต่าง Viewport คลิกที่คำว่า "Lit" > เลือก "Nanite Visualization" > เลือก "Triangles" คุณจะเห็นโครงข่ายสามเหลี่ยมขนาดจิ๋วนับล้านชิ้นปรับขนาดตามระยะสายตาแบบเรียลไทม์',
        },
      },
    ],
    codeExamples: [
      {
        title: 'Enabling Nanite on Static Meshes',
        language: 'csharp',
        code: `// Nanite Activation Guide:
// 1. In Content Drawer, right-click any 3D Mesh asset (e.g. SM_AncientRuins)
// 2. Hover over "Nanite"
// 3. Click "Enable"
// 4. Click "Apply Changes"
// 
// Result:
// - Memory streaming is automatically handled
// - Zero draw-call explosion
// - Automatic pixel-scale LOD scaling without visual popping!`,
        explanation: {
          en: 'Nanite scales geometry density per-pixel on screen. You get cinematic film fidelity with the performance of optimized game assets.',
          th: 'Nanite จะย่อขยายจำนวนโพลิกอนตามขนาดพิกเซลบนหน้าจอ ทำให้คุณได้ภาพสวยระดับหนังฮอลลีวูดแต่เล่นได้ลื่นไหลเหมือนเกมทั่วไป',
        },
      },
    ],
    practiceChecklist: [
      { id: 'uz04-1', title: { en: 'Switch Viewport to Nanite Triangles view mode', th: 'สลับโหมด Viewport เป็นการแสดงผลแบบ Nanite Triangles' }, completed: false },
      { id: 'uz04-2', title: { en: 'Move the Directional Light rotation and watch Lumen light bounce', th: 'หมุนแกนดวงอาทิตย์ Directional Light และสังเกตแสงสะท้อนของ Lumen' }, completed: false },
      { id: 'uz04-3', title: { en: 'Switch back to "Lit" mode for standard game rendering', th: 'สลับกลับสู่โหมด "Lit" เพื่อแสดงผลภาพเกมตามปกติ' }, completed: false },
    ],
    miniChallenge: {
      prompt: {
        en: 'Do you still need to spend 4 hours baking lightmaps for a standard UE5 scene using Lumen?',
        th: 'ในโปรเจกต์ Unreal Engine 5 ที่ใช้ Lumen คุณยังจำเป็นต้องเสียเวลานั่งอบแสง (Bake Lightmaps) นาน 4 ชั่วโมงอยู่อีกหรือไม่?',
      },
      hint: {
        en: 'What does "Dynamic Global Illumination" mean for baking?',
        th: 'คำว่า "Dynamic" แปลว่าอะไรสำหรับการอบแสง?',
      },
      solution: {
        en: 'NO! Lumen is 100% real-time and fully dynamic. You never have to bake static lightmaps again; every light move or mesh displacement updates instantly!',
        th: 'ไม่ต้องแล้ว! Lumen เป็นระบบแสงไดนามิกแบบเรียลไทม์ 100% คุณไม่จำเป็นต้องกด Bake แสงทิ้งไว้อีกต่อไป ขยับดวงไฟหรือย้ายกำแพงปุ๊บ แสงเงาเปลี่ยนตามทันที!',
      },
    },
    commonMistakes: [
      {
        mistake: { en: 'Enabling Nanite on translucent glass or skeletal animated character meshes in early UE5 versions', th: 'พยายามเปิด Nanite บนกระจกใสโปร่งแสง หรือตัวละครที่มีโครงกระดูกในเวอร์ชันแรกๆ' },
        why: { en: 'Nanite is specifically engineered for opaque, rigid Static Meshes.', th: 'Nanite ถูกออกแบบมาเพื่อโมเดล 3D แบบทึบแสงและอยู่กับที่ (Opaque Rigid Meshes) เป็นหลัก' },
        fix: { en: 'Use standard meshes for skinned characters with bones, and reserve Nanite for rocks, buildings, props, and architectural terrain.', th: 'ใช้โมเดลปกติสำหรับตัวละครที่มีกระดูก และใช้ Nanite กับก้อนหิน อาคาร สิ่งปลูกสร้าง และพื้นผิวภูมิประเทศ' },
      },
    ],
    quiz: [
      {
        question: {
          en: 'What is the primary purpose of Lumen in Unreal Engine 5?',
          th: 'หน้าที่หลักของระบบ Lumen ใน Unreal Engine 5 คืออะไร?',
        },
        options: {
          en: [
            'Real-time dynamic global illumination and indirect light bouncing',
            'Skeletal ragdoll bone physics',
            'Multiplayer network replication',
            'Lossless audio compression',
          ],
          th: [
            'การคำนวณแสงสว่างโดยรวมและแสงสะท้อนแบบเรียลไทม์ไดนามิก',
            'ระบบฟิสิกส์กระดูกตัวละคร Ragdoll',
            'การส่งข้อมูลเชื่อมต่อออนไลน์หลายผู้เล่น',
            'การบีบอัดไฟล์เสียงแบบไม่สูญเสียคุณภาพ',
          ],
        },
        correctIndex: 0,
        explanation: {
          en: 'Lumen calculates indirect light bounces and specular reflections in real-time without requiring precomputed lightmaps.',
          th: 'Lumen คำนวณแสงสะท้อนและเงาทางอ้อมแบบเรียลไทม์โดยไม่ต้องพึ่งพาการอบแสงล่วงหน้า',
        },
      },
    ],
  },
];
