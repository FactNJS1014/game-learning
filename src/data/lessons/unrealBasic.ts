import { Lesson } from '../../types';

export const unrealBasicLessons: Lesson[] = [
  {
    id: 'unreal-basic-001',
    engine: 'unreal',
    level: 'basic',
    lessonNumber: 5,
    slug: 'enhanced-input-system-ue5',
    heroImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
    heroImageCaption: {
      en: 'UE5 Enhanced Input architecture: Input Action assets, Mapping Contexts, Modifiers, and Triggers',
      th: 'ระบบควบคุม Enhanced Input ใน UE5: ไฟล์ Input Action, Mapping Context, ตัวดัดแปลงค่า และทริกเกอร์',
    },
    title: {
      en: 'Enhanced Input System: Input Actions & Mapping Contexts',
      th: 'ระบบรับปุ่มควบคุม Enhanced Input: Input Action และ Mapping Context',
    },
    shortDescription: {
      en: 'Master UE5’s modern input pipeline: create flexible Input Actions, bind keyboard/gamepad controls via Input Mapping Context, and handle movement in Blueprints.',
      th: 'เรียนรู้ระบบรับคำสั่ง Enhanced Input ยุคใหม่ของ UE5: สร้าง Input Action, ผูกปุ่มคีย์บอร์ดและจอยเกมด้วย Input Mapping Context และควบคุมตัวละครได้อย่างแม่นยำ',
    },
    estimatedMinutes: 30,
    tags: ['Basic', 'Unreal', 'EnhancedInput', 'Controller', 'Movement'],
    startFromZero: false,
    objectives: {
      en: [
        'Understand why legacy Axis/Action inputs were deprecated in favor of Enhanced Input',
        'Create Input Action (IA) assets for Move, Look, and Jump',
        'Build an Input Mapping Context (IMC) with Swizzle and Negate modifiers',
      ],
      th: [
        'เข้าใจเหตุผลที่ UE5 ยกเลิกระบบ Axis แบบเก่าและเปลี่ยนมาใช้ Enhanced Input ที่ยืดหยุ่นกว่า',
        'สร้างไฟล์ Input Action (IA) สำหรับการเดิน (Move), หมุนกล้อง (Look) และกระโดด (Jump)',
        'สร้าง Input Mapping Context (IMC) พร้อมตั้งค่าตัวดัดแปลง Swizzle และ Negate',
      ],
    },
    prerequisites: {
      en: ['Completed Unreal Level 0 (Interface, Blueprints 101)'],
      th: ['ผ่านเนื้อหา Unreal Level 0 (หน้าต่างโปรแกรม, พื้นฐาน Blueprint)'],
    },
    zeroExplanation: {
      what: {
        en: 'The Enhanced Input System is UE5’s modular framework for handling keyboard, mouse, gamepad, and touch controls with contextual switching.',
        th: 'Enhanced Input คือระบบจัดการปุ่มกดของ UE5 ที่สามารถสลับชุดการควบคุมตามสถานการณ์ (เช่น เดินเท้า หรือ ขับรถ) ได้อย่างอิสระ',
      },
      why: {
        en: 'When a player gets into a car or opens an inventory menu, you don’t want WASD to make them walk. Enhanced Input allows swapping the entire control scheme with a single node.',
        th: 'เมื่อตัวละครขึ้นไปนั่งบนรถหรือเปิดกระเป๋าเป้ เราไม่อยากให้ปุ่ม WASD สั่งเดิน Enhanced Input ช่วยให้เราสลับชุดคำสั่งทั้งหมดได้ในพริบตาเดียว',
      },
      how: {
        en: 'Create IA_Move (Value Type: Axis2D). Create IMC_Default and map W/S/A/D with Modifiers (Swizzle YZX, Negate). In the Character Blueprint, add IMC to the EnhancedInputLocalPlayerSubsystem.',
        th: 'สร้าง IA_Move (ประเภท Vector2D), สร้าง IMC_Default แมปปุ่ม W/S/A/D พร้อมใส่ Modifier, จากนั้นนำ IMC ไปสวมใส่ให้กับตัวละครใน Blueprint',
      },
      when: {
        en: 'Every single player-controlled character or vehicle in Unreal Engine 5.',
        th: 'ตัวละคร ยานพาหนะ หรือวัตถุทุกอย่างที่ผู้เล่นบังคับใน Unreal Engine 5',
      },
    },
    diagram: {
      type: 'enhanced-input',
      title: {
        en: 'Enhanced Input Architecture Flow',
        th: 'ขั้นตอนการทำงานของ Enhanced Input',
      },
      description: {
        en: 'Hardware Keypress (W, A, S, D / Gamepad Stick) -> Input Mapping Context (IMC) -> Modifiers -> Input Action (IA_Move) -> Character Blueprint.',
        th: 'ปุ่มกดจริง (W, A, S, D / อนาล็อกจอย) -> Input Mapping Context (IMC) -> ตัวแปลงค่า -> Input Action (IA_Move) -> ส่งเข้าตัวละครใน Blueprint',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Creating the Input Action (IA_Move)',
          th: 'การสร้างไฟล์ Input Action (IA_Move)',
        },
        explanation: {
          en: 'In Content Drawer, right-click > Input > Input Action. Name it "IA_Move". Double-click to open, and set Value Type to "Axis2D (Vector2D)" so it carries both X and Y movement axes.',
          th: 'ใน Content Drawer คลิกขวา > Input > Input Action ตั้งชื่อว่า "IA_Move" ดับเบิ้ลคลิกเปิดขึ้นมาแล้วเปลี่ยน Value Type เป็น "Axis2D (Vector2D)" เพื่อรับค่าแกนเดินหน้า/ถอยหลังและซ้าย/ขวา',
        },
        inspectorData: {
          componentName: 'Input Action: IA_Move',
          properties: [
            { name: 'Value Type', value: 'Axis2D (Vector2D)', hint: '2-dimensional input' },
            { name: 'Consume Input', value: 'True [Checked]', hint: 'Prevents input bleed' },
          ],
        },
      },
    ],
    codeExamples: [
      {
        title: 'Blueprint Movement Logic with Enhanced Input',
        language: 'csharp',
        code: `// Blueprint Visual Node Flow (Conceptual Text):
// -----------------------------------------------------------------
// [EnhancedInputAction IA_Move]
//     Pin: Action Value (Vector2D) -> Split Struct (X, Y)
//
//     // Forward / Backward movement:
//     Get Control Rotation -> Get Forward Vector -> (Direction)
//     Add Movement Input (Target: Self, World Direction: Forward, Scale Value: Action Value Y)
//
//     // Right / Left movement:
//     Get Control Rotation -> Get Right Vector -> (Direction)
//     Add Movement Input (Target: Self, World Direction: Right, Scale Value: Action Value X)`,
        explanation: {
          en: 'Add Movement Input automatically leverages the CharacterMovementComponent to calculate velocity, friction, and slope traversal without custom physics code.',
          th: 'โหนด Add Movement Input จะส่งค่าไปยัง CharacterMovementComponent เพื่อคำนวณความเร็ว แรงเสียดทาน และการเดินขึ้นเนินโดยอัตโนมัติ',
        },
      },
    ],
    practiceChecklist: [
      { id: 'ub01-1', title: { en: 'Create IA_Move asset with Axis2D Value Type', th: 'สร้างไฟล์ IA_Move โดยเลือก Value Type เป็น Axis2D' }, completed: false },
      { id: 'ub01-2', title: { en: 'Create IMC_Default and map W, S, A, D with Negate/Swizzle', th: 'สร้าง IMC_Default และผูกปุ่ม W, S, A, D พร้อมใส่ Negate และ Swizzle' }, completed: false },
      { id: 'ub01-3', title: { en: 'Add Mapping Context to Player Subsystem on BeginPlay', th: 'สวมใส่ Mapping Context ในฟังก์ชัน BeginPlay ของตัวละคร' }, completed: false },
    ],
    miniChallenge: {
      prompt: {
        en: 'Why do we need the "Swizzle Input Axis Values" modifier on the "W" and "S" keys in the Input Mapping Context?',
        th: 'ทำไมเราจึงต้องใส่ Modifier "Swizzle Input Axis Values" ให้กับปุ่ม "W" และ "S" ใน Input Mapping Context?',
      },
      hint: {
        en: 'Think about which axis represents "Forward" in a 2D vector (X or Y).',
        th: 'ลองคิดดูว่าในเวกเตอร์ 2 มิติ แกนไหนคือแกนเดินหน้าถอยหลัง (X หรือ Y)',
      },
      solution: {
        en: 'By default, a 1D keypress outputs along the X axis. Swizzling converts the 1D input onto the Y axis (Forward/Backward) so that W moves forward along Vector2D.Y!',
        th: 'โดยปกติการกดปุ่มเดี่ยวจะส่งค่าออกทางแกน X การ Swizzle ช่วยสลับค่าตัวเลขนั้นให้ไปออกที่แกน Y (เดินหน้า/ถอยหลัง) ทำให้ปุ่ม W สั่งเดินหน้าได้อย่างถูกต้อง!',
      },
    },
    commonMistakes: [
      {
        mistake: { en: 'Forgetting to register the Input Mapping Context with the Subsystem', th: 'ลืมคำสั่งลงทะเบียน Input Mapping Context เข้ากับ Subsystem' },
        why: { en: 'Creating IMC assets does nothing until your player character loads them into the local player input subsystem.', th: 'การสร้างไฟล์ IMC ไว้เฉยๆ จะไม่ทำงานจนกว่าตัวละครจะสั่ง Add Mapping Context ในโค้ด' },
        fix: { en: 'Call "Get Enhanced Input Local Player Subsystem" and execute "Add Mapping Context" on BeginPlay.', th: 'เรียกโหนด "Get Enhanced Input Local Player Subsystem" แล้วต่อเข้า "Add Mapping Context" ใน BeginPlay เสมอ' },
      },
    ],
    quiz: [
      {
        question: {
          en: 'What asset holds the mapping of specific physical keys (W, A, Space) to Input Actions?',
          th: 'ไฟล์ Asset ใดที่ทำหน้าที่ผูกปุ่มคีย์บอร์ดจริง (W, A, Space) เข้ากับ Input Action?',
        },
        options: {
          en: ['Input Mapping Context (IMC)', 'Player Controller', 'Game Mode Base', 'Physics Asset'],
          th: ['Input Mapping Context (IMC)', 'Player Controller', 'Game Mode Base', 'Physics Asset'],
        },
        correctIndex: 0,
        explanation: {
          en: 'The Input Mapping Context (IMC) pairs physical keys/buttons to abstract Input Actions with customizable modifiers.',
          th: 'Input Mapping Context (IMC) ทำหน้าที่จับคู่ปุ่มบนคีย์บอร์ด/จอย เข้ากับคำสั่ง Input Action นามธรรม',
        },
      },
    ],
  },
  {
    id: 'unreal-basic-002',
    engine: 'unreal',
    level: 'basic',
    lessonNumber: 6,
    slug: 'pbr-materials-shading-ue5',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    heroImageCaption: {
      en: 'Physically Based Rendering material graph: BaseColor, Metallic, Roughness, and Normal micro-surface details',
      th: 'กราฟวัสดุ Physically Based Rendering (PBR): สีพื้นผิว BaseColor, ความเป็นโลหะ Metallic, ความขรุขระ Roughness และ Normal Map',
    },
    title: {
      en: 'PBR Materials & Shading: BaseColor, Roughness & Normals',
      th: 'การสร้าง Material สไตล์ PBR: BaseColor, Metallic, Roughness และ Normal Map',
    },
    shortDescription: {
      en: 'Build photorealistic surfaces using UE5’s Material Graph: connect PBR texture maps, create Material Instances, and tweak parameters in real-time.',
      th: 'สร้างพื้นผิววัตถุสมจริงระดับภาพยนตร์ด้วย Material Graph: เข้าใจช่องเสียบ PBR, สร้าง Material Instance เพื่อปรับแต่งสีและความเงาแบบเรียลไทม์',
    },
    estimatedMinutes: 30,
    tags: ['Basic', 'Unreal', 'Materials', 'PBR', 'Shading', 'Textures'],
    startFromZero: false,
    objectives: {
      en: [
        'Understand the core Physically Based Rendering (PBR) inputs: Base Color, Metallic, Roughness, and Normal',
        'Build a master material graph with dynamic parameters for color tint and tiling',
        'Create Material Instances to adjust surfaces without recompiling shaders',
      ],
      th: [
        'เข้าใจหัวใจของระบบ PBR: Base Color (สีจริง), Metallic (โลหะ), Roughness (ความเงา/ด้าน) และ Normal (รอยนูน)',
        'สร้าง Master Material ที่มีพารามิเตอร์สำหรับเปลี่ยนสีและปรับขนาดลายกระเบื้อง (Tiling)',
        'สร้าง Material Instance เพื่อปรับแต่งค่าได้แบบทันทีโดยไม่ต้องรอคอมไพล์ Shader ซ้ำ',
      ],
    },
    prerequisites: {
      en: ['Completed Unreal Level 0 (Actors, Static Meshes)'],
      th: ['ผ่านเนื้อหา Unreal Level 0 (Actor, โมเดล Static Mesh)'],
    },
    zeroExplanation: {
      what: {
        en: 'PBR (Physically Based Rendering) is a mathematically accurate approach to rendering that simulates how real-world light bounces off metallic and non-metallic surfaces.',
        th: 'PBR (Physically Based Rendering) คือมาตรฐานการเรนเดอร์ที่จำลองการสะท้อนของแสงตามหลักฟิสิกส์จริง ทั้งบนผิวโลหะและผิวอโลหะ',
      },
      why: {
        en: 'In older engines, materials looked fake when moving from bright sunlight into shadows. PBR materials look consistently realistic under any lighting condition.',
        th: 'ในเอนจินยุคเก่า วัสดุจะดูหลอกตาเมื่อย้ายจากที่สว่างไปที่มืด แต่ PBR รับประกันว่าวัสดุจะดูสมจริงอย่างเป็นธรรมชาติในทุกสภาพแสง',
      },
      how: {
        en: 'Connect an RGB texture to Base Color, a grayscale scalar (0.0 to 1.0) to Roughness (0 = chrome mirror, 1 = chalk), and a purple tangent texture to Normal.',
        th: 'ต่อภาพสีเข้าช่อง Base Color, ต่อค่าขาวดำเข้าช่อง Roughness (0 คือเงาวับเหมือนกระจก, 1 คือผิวด้านเหมือนชอล์ก), และต่อภาพสีม่วงเข้าช่อง Normal',
      },
      when: {
        en: 'Every 3D model, character skin, weapon metal, stone terrain, and architectural wall in your game.',
        th: 'โมเดล 3D ทุกชิ้น, ผิวหนังตัวละคร, ดาบโลหะ, ก้อนหิน และกำแพงอาคารทุกหลังในเกม',
      },
    },
    diagram: {
      type: 'pbr-material',
      title: {
        en: 'PBR Material Node Workflow',
        th: 'แผนผังการต่อสาย PBR Material',
      },
      description: {
        en: 'Texture Sample (RGB) -> Base Color | Texture Sample (Grayscale) -> Roughness | Normal Texture -> Normal Input Slot.',
        th: 'ภาพลายผิว Texture (RGB) -> Base Color | ภาพเงา/ด้าน (ขาวดำ) -> Roughness | ภาพรอยนูนสีม่วง -> Normal',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Creating a Material Instance (The Pro Workflow)',
          th: 'การสร้าง Material Instance (แนวทางทำงานระดับมืออาชีพ)',
        },
        explanation: {
          en: 'Never assign a Master Material directly to meshes! Right-click your Master Material in Content Drawer and select "Create Material Instance". Open it to tweak exposed sliders with zero compile lag.',
          th: 'อย่าลาก Master Material ไปใส่โมเดลตรงๆ! ให้คลิกขวาที่ Master Material แล้วเลือก "Create Material Instance" คุณจะสามารถเลื่อนปรับสไลเดอร์สีและความเงาได้ทันทีโดยไม่ต้องรอโหลด',
        },
      },
    ],
    codeExamples: [
      {
        title: 'Master Material Node Setup',
        language: 'csharp',
        code: `// Conceptual Material Graph Nodes:
// -----------------------------------------------------------------
// [TextureCoordinate] -> [Multiply (Scalar: Tiling)] -> UVs of Textures
//
// [Texture: T_BaseColor] * [VectorParameter: TintColor] ---> Base Color
// [ScalarParameter: MetallicAmount (Default 0.0)]      ---> Metallic
// [Texture: T_Roughness] * [ScalarParameter: RoughnessMultiplier] ---> Roughness
// [Texture: T_Normal]                                   ---> Normal`,
        explanation: {
          en: 'By multiplying UV coordinates by a Tiling parameter, artists can scale brick or wood repeating patterns directly inside the Viewport.',
          th: 'การนำพิกัด UV มาคูณกับตัวเลข Tiling ช่วยให้เราปรับขยายความถี่ของลายกระเบื้องหรือลายไม้ได้ทันทีในหน้าจอฉาก',
        },
      },
    ],
    practiceChecklist: [
      { id: 'ub02-1', title: { en: 'Create M_MasterPBR in Content Drawer', th: 'สร้างไฟล์ M_MasterPBR ใน Content Drawer' }, completed: false },
      { id: 'ub02-2', title: { en: 'Connect BaseColor, Roughness, and Normal nodes', th: 'ต่อสาย BaseColor, Roughness และ Normal ให้ครบถ้วน' }, completed: false },
      { id: 'ub02-3', title: { en: 'Right-click and create MI_RustMetal Material Instance', th: 'คลิกขวาแล้วสร้าง Material Instance ชื่อ MI_RustMetal' }, completed: false },
    ],
    miniChallenge: {
      prompt: {
        en: 'What happens to the appearance of a 3D sphere when its Roughness value is set to 0.0 vs 1.0?',
        th: 'รูปลักษณ์ของลูกทรงกลม 3D จะเปลี่ยนไปอย่างไรเมื่อปรับค่า Roughness เป็น 0.0 เปรียบเทียบกับ 1.0?',
      },
      hint: {
        en: 'Think about smooth polished chrome vs rough dry concrete.',
        th: 'นึกถึงโลหะขัดเงาวับ ปะทะ พื้นปูนซีเมนต์แห้งๆ ด้านๆ',
      },
      solution: {
        en: 'At Roughness 0.0, the surface becomes a razor-sharp mirror with perfectly clear reflections. At Roughness 1.0, the surface is completely matte with wide, diffused light scattering.',
        th: 'ที่ Roughness 0.0 ผิวจะเงาวับเป็นกระจกสะท้อนภาพฉากรอบข้างอย่างคมชัด ส่วนที่ 1.0 ผิวจะด้านสนิท แสงจะกระจายตัวนุ่มนวลเหมือนแผ่นกระดาษหรือชอล์ก',
      },
    },
    commonMistakes: [
      {
        mistake: { en: 'Setting Metallic to an intermediate value like 0.5', th: 'ปรับค่า Metallic ไว้ครึ่งๆ กลางๆ เช่น 0.5' },
        why: { en: 'In real-world physics, substances are almost always pure conductors (Metallic = 1.0) or pure dielectrics (Metallic = 0.0). Semi-metals do not exist in standard objects.', th: 'ในโลกฟิสิกส์จริง วัตถุมักเป็นโลหะแท้ (1.0) หรืออโลหะแท้ (0.0) วัตถุที่อยู่ตรงกลาง 0.5 จะดูเหมือนพลาสติกเน่าเปื่อย' },
        fix: { en: 'Keep Metallic strictly at 0.0 (stone, plastic, wood, skin) or 1.0 (iron, gold, copper). Only use intermediates for transition dust or rust.', th: 'ตั้งค่า Metallic เป็น 0.0 (หิน, พลาสติก, ไม้, ผิวหนัง) หรือ 1.0 (เหล็ก, ทอง, ทองแดง) อย่างใดอย่างหนึ่งเท่านั้น' },
      },
    ],
    quiz: [
      {
        question: {
          en: 'Why should you use Material Instances instead of Master Materials on your level props?',
          th: 'ทำไมคุณจึงควรใช้ Material Instance แทน Master Material บนสิ่งของในด่าน?',
        },
        options: {
          en: [
            'They allow real-time parameter tweaking with zero shader recompilation wait times',
            'They bypass collision physics',
            'They disable shadow casting',
            'They double the frame rate automatically',
          ],
          th: [
            'ช่วยให้ปรับค่าพารามิเตอร์ได้แบบเรียลไทม์ทันทีโดยไม่ต้องเสียเวลารอคอมไพล์ Shader',
            'ช่วยปิดระบบการชนของวัตถุ',
            'ช่วยปิดการทอดเงา',
            'ช่วยเพิ่มเฟรมเรตขึ้นสองเท่าอัตโนมัติ',
          ],
        },
        correctIndex: 0,
        explanation: {
          en: 'Material Instances inherit compiled shader instructions, meaning changes to parameters take effect instantly without GPU compilation stalls.',
          th: 'Material Instance ใช้คำสั่ง Shader ที่คอมไพล์ไว้แล้ว ทำให้การเลื่อนปรับค่าทำได้ลื่นไหลแบบเรียลไทม์ทันที',
        },
      },
    ],
  },
  {
    id: 'unreal-basic-003',
    engine: 'unreal',
    level: 'basic',
    lessonNumber: 7,
    slug: 'spawning-actors-projectiles-ue5',
    heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    heroImageCaption: {
      en: 'Real-time actor spawning: SpawnActorFromClass, projectile movement components, and particle hit effects',
      th: 'การเสกวัตถุแบบเรียลไทม์: โหนด SpawnActorFromClass, คอมโพเนนต์วิถีกระสุน และเอฟเฟกต์ระเบิดเมื่อกระทบ',
    },
    title: {
      en: 'Spawning Actors & Projectiles: Combat & Collisions',
      th: 'การเสกวัตถุและกระสุนในฉาก: ระบบยิงปืน การชน และทำลาย Actor',
    },
    shortDescription: {
      en: 'Spawn bullets dynamically at runtime using SpawnActorFromClass, propel them with ProjectileMovementComponent, and trigger explosion VFX on impact.',
      th: 'เสกกระสุนปืนในฉากด้วย SpawnActorFromClass ขับเคลื่อนกระสุนด้วย ProjectileMovementComponent และสร้างเอฟเฟกต์ระเบิดเมื่อยิงโดนเป้าหมาย',
    },
    estimatedMinutes: 30,
    tags: ['Basic', 'Unreal', 'Combat', 'SpawnActor', 'Projectiles', 'Collisions'],
    startFromZero: false,
    objectives: {
      en: [
        'Master the SpawnActorFromClass node and construct valid Spawn Transforms',
        'Equip projectile Actors with the ProjectileMovementComponent',
        'Handle collision events using Event Hit and Event ActorBeginOverlap',
      ],
      th: [
        'ใช้งานโหนด SpawnActorFromClass และสร้างพิกัด Spawn Transform ที่ถูกต้อง',
        'ติดตั้ง ProjectileMovementComponent ให้กับ Actor กระสุนเพื่อกำหนดความเร็วและวิถีพุ่ง',
        'จัดการอีเวนต์เมื่อกระสุนกระทบเป้าหมายด้วย Event Hit และ Event ActorBeginOverlap',
      ],
    },
    prerequisites: {
      en: ['Completed Unreal Basic 1: Enhanced Input'],
      th: ['ผ่านเนื้อหา Unreal Basic 1: ระบบรับปุ่มควบคุม Enhanced Input'],
    },
    zeroExplanation: {
      what: {
        en: 'SpawnActorFromClass dynamically creates and initializes a new Actor into the active world at a specified location and rotation.',
        th: 'SpawnActorFromClass คือคำสั่งเสก Actor ใหม่ขึ้นมาในโลก ณ ตำแหน่งและทิศทางการหมุนที่ระบุ',
      },
      why: {
        en: 'Projectiles, dropped loot, enemies, and explosion particle effects must be spawned on demand when events occur in gameplay.',
        th: 'กระสุนปืน, ไอเทมดรอปจากมอนสเตอร์ และเอฟเฟกต์ประกายไฟ จำเป็นต้องถูกสร้างขึ้นมาในจังหวะที่เกิดเหตุการณ์ในเกม',
      },
      how: {
        en: 'In your Weapon Blueprint, take the Muzzle Socket Transform, pass it to SpawnActorFromClass (Class: BP_Rocket), and let ProjectileMovementComponent propel it.',
        th: 'ดึงพิกัดจาก Muzzle Socket ปลายกระบอกปืน ส่งเข้า SpawnActorFromClass (เลือกคลาส BP_Rocket) แล้วให้ ProjectileMovementComponent พุ่งไปข้างหน้า',
      },
      when: {
        en: 'Shooting guns, throwing grenades, summoning spells, and spawning items.',
        th: 'การยิงปืน, ขว้างระเบิด, ร่ายเวทมนตร์ และการดรอปไอเทมลงบนพื้น',
      },
    },
    diagram: {
      type: 'physics-pipeline',
      title: {
        en: 'The Unreal Projectile Lifecycle',
        th: 'วงจรชีวิตของกระสุนใน Unreal Engine',
      },
      description: {
        en: 'Fire Trigger -> SpawnActor(BP_Bullet) -> ProjectileMovement flies -> OnComponentHit -> ApplyDamage -> SpawnEmitterAtLocation(Explosion) -> DestroyActor.',
        th: 'กดปุ่มยิง -> เสก BP_Bullet -> วิ่งด้วยความเร็ว -> เกิด Event OnComponentHit -> ลดเลือดเป้าหมาย -> เสกประกายระเบิด -> ลบ Actor ทิ้ง',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Configuring the ProjectileMovementComponent',
          th: 'การตั้งค่า ProjectileMovementComponent',
        },
        explanation: {
          en: 'Create a Blueprint Actor named "BP_Bullet". Click "+ Add" > ProjectileMovement. Set Initial Speed to 3000, Max Speed to 3000, and Projectile Gravity Scale to 0 (for lasers) or 1.0 (for bullets).',
          th: 'สร้าง Blueprint Actor ชื่อ "BP_Bullet" กดปุ่ม "+ Add" > เลือก ProjectileMovement ตั้งค่า Initial Speed เป็น 3000, Max Speed เป็น 3000 และตั้ง Gravity Scale เป็น 0 สำหรับปืนเลเซอร์ หรือ 1.0 สำหรับลูกปืนปกติ',
        },
      },
    ],
    codeExamples: [
      {
        title: 'Weapon Firing Blueprint Logic',
        language: 'csharp',
        code: `// Blueprint Visual Node Flow (Weapon Shooter):
// -----------------------------------------------------------------
// [EnhancedInputAction IA_Shoot (Started)]
//      |
// [Get Socket Transform (Target: GunMesh, Socket Name: "Muzzle_Socket")]
//      | (Return Value -> Spawn Transform)
// [SpawnActorFromClass]
//      - Class: BP_Bullet
//      - Collision Handling Override: Always Spawn, Ignore Collisions
//      |
// [Play Sound at Location (Sound: S_PistolShot, Location: Muzzle Location)]`,
        explanation: {
          en: 'Using Sockets attached to character skeleton bones or weapon meshes guarantees bullets emerge precisely from the gun barrel opening.',
          th: 'การใช้ Socket ที่ปลายกระบอกปืน ช่วยรับประกันว่ากระสุนจะพุ่งออกมาจากปากลำกล้องอย่างสมจริงและแม่นยำเสมอ',
        },
      },
    ],
    practiceChecklist: [
      { id: 'ub03-1', title: { en: 'Create BP_Bullet Actor with Sphere collision and Mesh', th: 'สร้าง BP_Bullet พร้อมใส่ Sphere Collision และโมเดลกระสุน' }, completed: false },
      { id: 'ub03-2', title: { en: 'Add ProjectileMovementComponent and set speed to 2500', th: 'เพิ่ม ProjectileMovementComponent และปรับความเร็วเป็น 2500' }, completed: false },
      { id: 'ub03-3', title: { en: 'Bind IA_Shoot to SpawnActorFromClass in Character Blueprint', th: 'เชื่อมปุ่มยิง IA_Shoot เข้ากับ SpawnActorFromClass ในตัวละคร' }, completed: false },
    ],
    miniChallenge: {
      prompt: {
        en: 'If your newly spawned bullet immediately collides with the player character’s own capsule and blows up in their face, how do you fix it?',
        th: 'หากกระสุนที่เสกขึ้นมาชนเข้ากับแคปซูลของตัวผู้เล่นเองทันทีแล้วระเบิดใส่หน้าตัวเอง จะแก้ไขอย่างไร?',
      },
      hint: {
        en: 'Look at the "Instigator" pin on SpawnActor, or collision channel presets.',
        th: 'สังเกตพิน "Instigator" บนโหนด SpawnActor หรือการตั้งค่า Collision Preset',
      },
      solution: {
        en: 'Connect "Self" into the "Owner" and "Instigator" pins of SpawnActorFromClass, and in BP_Bullet’s BeginPlay, execute the "MoveIgnoreActor" node targeting the Owner!',
        th: 'ต่อ "Self" เข้ากับพิน Owner และ Instigator ของโหนด SpawnActor และใน BeginPlay ของกระสุนให้สั่ง "MoveIgnoreActor" โดยส่ง Owner เข้าไป เพื่อให้กระสุนมองข้ามตัวผู้เล่น!',
      },
    },
    commonMistakes: [
      {
        mistake: { en: 'Leaving Collision Handling Override as "Default" when spawning inside tight spaces', th: 'ปล่อยค่า Collision Handling Override เป็น Default เมื่อเสกของในที่แคบ' },
        why: { en: 'If the muzzle overlaps any geometry, Default setting aborts spawning, and no bullet appears.', th: 'หากปลายกระบอกปืนจมอยู่ในผนัง ค่า Default จะยกเลิกการสร้างกระสุน ทำให้ยิงไม่ออก' },
        fix: { en: 'Set Collision Handling Override to "Always Spawn, Ignore Collisions" on the SpawnActor node.', th: 'เปลี่ยนค่าเป็น "Always Spawn, Ignore Collisions" บนโหนด SpawnActor เสมอ' },
      },
    ],
    quiz: [
      {
        question: {
          en: 'Which component automatically propels an Actor forward with physics velocity and bullet drop?',
          th: 'คอมโพเนนต์ใดใน Unreal Engine ที่ทำหน้าที่ขับเคลื่อน Actor ให้พุ่งไปข้างหน้าพร้อมแรงโน้มถ่วงวิถีกระสุนตก?',
        },
        options: {
          en: [
            'ProjectileMovementComponent',
            'FloatingPawnMovement',
            'PhysicsConstraintComponent',
            'RadialForceComponent',
          ],
          th: [
            'ProjectileMovementComponent',
            'FloatingPawnMovement',
            'PhysicsConstraintComponent',
            'RadialForceComponent',
          ],
        },
        correctIndex: 0,
        explanation: {
          en: 'ProjectileMovementComponent updates the position of an Actor over time with velocity, bouncing, and customizable gravity.',
          th: 'ProjectileMovementComponent คำนวณความเร็ว การเด้งสะท้อน และแรงดึงดูดของกระสุนให้อัตโนมัติ',
        },
      },
    ],
  },
  {
    id: 'unreal-basic-004',
    engine: 'unreal',
    level: 'basic',
    lessonNumber: 8,
    slug: 'umg-ui-hud-widgets-ue5',
    heroImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    heroImageCaption: {
      en: 'Unreal Motion Graphics (UMG) user interface design: Canvas panel, progress bars, and reactive HUD widgets',
      th: 'การออกแบบส่วนติดต่อผู้ใช้ด้วย UMG ใน UE5: Canvas Panel, แถบพลังชีวิต Progress Bar และ HUD ที่ตอบสนองทันใจ',
    },
    title: {
      en: 'UMG UI & HUD Widgets: Health Bars & Crosshairs',
      th: 'ระบบ UMG UI และหน้าจอ HUD: หลอดพลังชีวิต เป้าเล็ง และเมนูในเกม',
    },
    shortDescription: {
      en: 'Design crisp game interfaces with Unreal Motion Graphics (UMG): construct Widget Blueprints, bind health progress bars, and push UI to the viewport.',
      th: 'สร้างหน้าต่าง UI สวยงามด้วย Unreal Motion Graphics (UMG): สร้าง Widget Blueprint, ผูกหลอดเลือดเข้ากับตัวแปร HP และแสดงผลขึ้นบนหน้าจอผู้เล่น',
    },
    estimatedMinutes: 30,
    tags: ['Basic', 'Unreal', 'UMG', 'UI', 'HUD', 'Widgets'],
    startFromZero: false,
    objectives: {
      en: [
        'Understand the UMG Hierarchy: Canvas Panel, Vertical/Horizontal Boxes, and Anchors',
        'Create a WBP_PlayerHUD Widget Blueprint with Health Bar and Ammo Counter',
        'Add and manage Widgets in the Player Viewport via "Create Widget" and "Add to Viewport"',
      ],
      th: [
        'เข้าใจโครงสร้าง UMG: Canvas Panel, กล่องจัดเรียง และการปักหมุด Anchor',
        'สร้าง Widget Blueprint ชื่อ WBP_PlayerHUD พร้อมหลอดเลือดและตัวเลขกระสุน',
        'สั่งแสดงหน้าต่าง UI ขึ้นจอด้วยโหนด "Create Widget" และ "Add to Viewport"',
      ],
    },
    prerequisites: {
      en: ['Completed Unreal Basic 3: Spawning & Combat'],
      th: ['ผ่านเนื้อหา Unreal Basic 3: การเสกวัตถุและกระสุน'],
    },
    zeroExplanation: {
      what: {
        en: 'UMG (Unreal Motion Graphics) is Unreal Engine’s visual UI authoring tool used to build HUDs, pause menus, inventory screens, and floating nameplates.',
        th: 'UMG (Unreal Motion Graphics) คือเครื่องมือออกแบบ UI ของ Unreal Engine สำหรับสร้างหน้าจอ HUD, เมนูหยุดเกม, ช่องเก็บของ และหลอดเลือดลอยเหนือหัว',
      },
      why: {
        en: 'Players need instant visual feedback on their remaining health, ammo capacity, and interactive crosshairs. UMG makes designing these elements straightforward.',
        th: 'ผู้เล่นจำเป็นต้องเห็นข้อมูลเลือดที่เหลือ กระสุนในปืน และเป้าเล็ง UMG ช่วยให้สร้างและจัดวางองค์ประกอบเหล่านี้ได้อย่างรวดเร็ว',
      },
      how: {
        en: 'Create a User Widget blueprint, drag a Progress Bar into the Canvas Panel, anchor it to Top-Left, and call Create Widget -> Add to Viewport on BeginPlay.',
        th: 'สร้าง User Widget Blueprint ลาก Progress Bar ลงใน Canvas Panel ปักหมุดไว้ที่มุมซ้ายบน แล้วสั่ง Create Widget -> Add to Viewport ในตอนเริ่มเกม',
      },
      when: {
        en: 'Every game HUD, main title menu, settings screen, and inventory interface.',
        th: 'หน้าจอ HUD, เมนูไตเติลเริ่มเกม, หน้าต่างตั้งค่า และกระเป๋าเก็บของ',
      },
    },
    diagram: {
      type: 'actor-component',
      title: {
        en: 'UMG Widget Hierarchy Architecture',
        th: 'สถาปัตยกรรมโครงสร้างของ UMG Widget',
      },
      description: {
        en: 'Canvas Panel -> Top-Left: Overlay -> Progress Bar (Health) | Bottom-Right: Text Block (Ammo: 30/120) | Center: Image (Crosshair).',
        th: 'Canvas Panel -> มุมซ้ายบน: Progress Bar (หลอดเลือด) | ขวาล่าง: ข้อความ Text Block (กระสุน) | ตรงกลางจอ: Image (เป้าเล็ง)',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Creating the Widget Blueprint',
          th: 'การสร้างไฟล์ Widget Blueprint',
        },
        explanation: {
          en: 'In Content Drawer, right-click > User Interface > Widget Blueprint. Select "User Widget", name it "WBP_PlayerHUD", and double-click to enter the Designer view.',
          th: 'ใน Content Drawer คลิกขวา > User Interface > Widget Blueprint เลือก "User Widget" ตั้งชื่อว่า "WBP_PlayerHUD" แล้วดับเบิ้ลคลิกเพื่อเข้าสู่หน้าจอ Designer',
        },
      },
      {
        stepNumber: 2,
        title: {
          en: 'Displaying the HUD on Player Screen',
          th: 'การสั่งให้ HUD แสดงผลขึ้นบนหน้าจอผู้เล่น',
        },
        explanation: {
          en: 'In your Character Blueprint or PlayerController, execute "Create Widget" (Class: WBP_PlayerHUD) -> promote return value to variable "HUDReference" -> execute "Add to Viewport".',
          th: 'ใน Character Blueprint หรือ PlayerController เรียกโหนด "Create Widget" (เลือกคลาส WBP_PlayerHUD) -> เก็บผลลัพธ์ใส่ตัวแปร -> ต่อสายเข้า "Add to Viewport"',
        },
      },
    ],
    codeExamples: [
      {
        title: 'Updating Health Progress Bar via Event Graph',
        language: 'csharp',
        code: `// Inside WBP_PlayerHUD (Event Graph):
// -----------------------------------------------------------------
// Custom Event: UpdateHealthPercent (Input: float NewPercent [0.0 to 1.0])
//      |
// [HealthProgressBar] -> [Set Percent (Percent: NewPercent)]
//
// In Player Character on Taking Damage:
// [HUDReference] -> [UpdateHealthPercent (CurrentHealth / MaxHealth)]`,
        explanation: {
          en: 'Using Event-Driven UI updates (calling UpdateHealthPercent only when taking damage) is vastly faster than legacy per-frame Tick Property Binding.',
          th: 'การอัปเดต UI ด้วย Event (เรียกเฉพาะตอนเลือดลด) ทำงานได้เร็วกว่าการผูก Bind Property ที่สั่งเช็กข้อมูลซ้ำๆ 60 ครั้งต่อวินาทีอย่างมาก',
        },
      },
    ],
    practiceChecklist: [
      { id: 'ub04-1', title: { en: 'Create WBP_PlayerHUD User Widget', th: 'สร้าง User Widget ชื่อ WBP_PlayerHUD' }, completed: false },
      { id: 'ub04-2', title: { en: 'Add a Progress Bar, anchor it to Top-Left, and set Fill Color', th: 'เพิ่ม Progress Bar ปักหมุดมุมซ้ายบน และกำหนดสีของหลอดเลือด' }, completed: false },
      { id: 'ub04-3', title: { en: 'Spawn widget in Character BeginPlay and Add to Viewport', th: 'สั่งสร้าง Widget ใน BeginPlay ของตัวละครแล้วสั่ง Add to Viewport' }, completed: false },
    ],
    miniChallenge: {
      prompt: {
        en: 'Why should you avoid using the "Bind" function dropdown on every UMG widget property for performance?',
        th: 'ทำไมคุณจึงควรหลีกเลี่ยงการใช้ปุ่ม "Bind" บนช่องคุณสมบัติของ UMG หากต้องการรักษาเฟรมเรตของเกม?',
      },
      hint: {
        en: 'How often does a Property Binding execute behind the scenes?',
        th: 'ฟังก์ชัน Bind ทำงานบ่อยแค่ไหนในเบื้องหลังของเอนจิน?',
      },
      solution: {
        en: 'Property Bindings execute on every single tick (frame), wasting precious CPU cycles reading unchanged numbers. Event-driven updates only execute when values actually change!',
        th: 'ฟังก์ชัน Bind จะทำงานทุกๆ เฟรม (60-120 ครั้งต่อวินาที) ทำให้ CPU ต้องคอยอ่านค่าเดิมที่ไม่ได้เปลี่ยนซ้ำๆ การใช้ Event เรียกเฉพาะตอนตัวเลขเปลี่ยนจึงเร็วกว่ามหาศาล!',
      },
    },
    commonMistakes: [
      {
        mistake: { en: 'Placing UI widgets without setting Anchors to screen corners', th: 'วางวิดเจ็ต UI โดยไม่กำหนดจุดปักหมุด Anchor' },
        why: { en: 'When switching screen aspect ratios (16:9 to 21:9 or ultrawide), the UI drifts into the center or off-screen.', th: 'เมื่อสลับสัดส่วนหน้าจอ UI จะลอยเลื่อนตำแหน่งหรือหลุดขอบจอ' },
        fix: { en: 'Select the widget, click the Anchors dropdown in Details, and select the corresponding corner preset.', th: 'คลิกเลือกวิดเจ็ต แล้วเลือก Anchor Preset ที่ตรงกับมุมจอที่ต้องการปักหมุด' },
      },
    ],
    quiz: [
      {
        question: {
          en: 'Which Blueprint node pushes a created UMG User Widget onto the player’s monitor screen?',
          th: 'โหนด Blueprint ใดที่ทำหน้าที่แสดงผล User Widget ขึ้นสู่หน้าจอของผู้เล่น?',
        },
        options: {
          en: ['Add to Viewport', 'Show Widget', 'Render to Screen', 'Display UMG'],
          th: ['Add to Viewport', 'Show Widget', 'Render to Screen', 'Display UMG'],
        },
        correctIndex: 0,
        explanation: {
          en: 'After constructing a widget with Create Widget, calling "Add to Viewport" renders it onto the active player display.',
          th: 'หลังจากสร้างวิดเจ็ตด้วย Create Widget แล้ว ต้องเรียก "Add to Viewport" เพื่อนำภาพขึ้นจอผู้เล่น',
        },
      },
    ],
  },
];
