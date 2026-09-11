import { Lesson } from '../../types';

export const unityZeroLessons: Lesson[] = [
  {
    id: 'unity-zero-001',
    engine: 'unity',
    level: 'zero',
    lessonNumber: 1,
    slug: 'what-is-unity-engine',
    heroImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    heroImageCaption: {
      en: 'Game development workstation running modern 3D simulation and real-time engine graphics',
      th: 'โต๊ะทำงานพัฒนาเกมพร้อมหน้าจอทดสอบระบบเรนเดอร์กราฟิก 3D และเครื่องมือระดับสตูดิโอ',
    },
    title: {
      en: 'What is Unity? The Anatomy of a Game Engine',
      th: 'Unity คืออะไร? โครงสร้างและหัวใจของ Game Engine',
    },
    shortDescription: {
      en: 'Understand how a game engine orchestrates graphics, physics, sound, and player inputs into a 60 FPS interactive loop.',
      th: 'เรียนรู้ว่า Game Engine ทำงานอย่างไร รวมกราฟิก ฟิสิกส์ เสียง และปุ่มกดให้หมุนรอบเป็นเกม 60 FPS',
    },
    estimatedMinutes: 20,
    tags: ['Zero', 'Unity', 'GameLoop', 'Architecture'],
    startFromZero: true,
    objectives: {
      en: [
        'Understand what a Game Engine is and why we do not code everything from scratch',
        'Master the fundamental Game Loop (Input -> Update -> Physics -> Render)',
        'Discover the 4 core windows of the Unity Editor',
        'Learn why C# is the official programming language of Unity',
      ],
      th: [
        'เข้าใจว่า Game Engine คืออะไร และทำไมจึงไม่ต้องเขียนโค้ดแสดงผลกราฟิกเองตั้งแต่ศูนย์',
        'เข้าใจหัวใจของ Game Loop (ตรวจจับปุ่ม -> คำนวณตรรกะ -> ฟิสิกส์ -> วาดภาพขึ้นจอ)',
        'รู้จัก 4 หน้าต่างหลักของ Unity Editor ที่ต้องใช้ทุกวัน',
        'เข้าใจเหตุผลที่ภาษา C# เป็นภาษาสากลในการควบคุม Unity',
      ],
    },
    prerequisites: {
      en: ['No programming or 3D art experience needed!'],
      th: ['ไม่จำเป็นต้องมีพื้นฐานโปรแกรมมิ่งหรือ 3D มาก่อน เริ่มต้นจากศูนย์ไปด้วยกัน'],
    },
    zeroExplanation: {
      what: {
        en: 'A game engine is a specialized software framework with built-in physics, rendering, audio, and asset pipelines designed to create video games.',
        th: 'Game Engine คือชุดเครื่องมือและโปรแกรมสำเร็จรูปที่มีระบบฟิสิกส์ แสดงผลภาพ เสียง และการควบคุมเตรียมไว้ให้พร้อมพัฒนาเกม',
      },
      why: {
        en: 'Without an engine, rendering a single 3D cube requires hundreds of lines of OpenGL/DirectX GPU code. Unity lets you focus on game design.',
        th: 'ถ้าไม่มี Engine การแค่วาดกล่อง 3 มิติหนึ่งใบจะต้องเขียนโค้ด GPU ยาวเหยียด Unity จึงมาช่วยจัดการเรื่องยากๆ เหล่านี้ให้เราสร้างเกมได้ทันที',
      },
      how: {
        en: 'Unity continuously runs a 60 FPS loop: it reads keyboard/mouse, updates C# scripts, calculates physics collisions, and draws to the GPU.',
        th: 'Unity ทำงานเป็นวงจรลูป 60 รอบต่อวินาที: ตรวจสอบปุ่มกด -> สั่งให้สคริปต์ C# ทำงาน -> คำนวณแรงโน้มถ่วงและการชน -> วาดภาพออกหน้าจอ',
      },
      when: {
        en: 'Whenever you build 2D, 3D, VR, or mobile games — Unity is the top choice for cross-platform indie and commercial releases.',
        th: 'เหมาะที่สุดเมื่อต้องการสร้างเกม 2D, 3D, มือถือ หรือ VR ที่สามารถพอร์ตลง PC, Console, iOS และ Android ได้อย่างรวดเร็ว',
      },
    },
    diagram: {
      type: 'game-loop',
      title: {
        en: 'The 60 FPS Game Loop Lifecycle',
        th: 'วงจรการทำงาน Game Loop (60 เฟรมต่อวินาที)',
      },
      description: {
        en: 'Every frame follows this strict order: User Input -> Game Logic -> Physics Engine -> GPU Rendering.',
        th: 'ในทุกเสี้ยววินาที ระบบจะทำตามลำดับเสมอ: รับคำสั่งผู้เล่น -> คำนวณตรรกะ -> ฟิสิกส์ -> ส่งภาพให้ GPU วาด',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Meet the Unity Editor: The 4 Golden Panels',
          th: 'ทำความรู้จัก 4 หน้าต่างหลักใน Unity Editor',
        },
        explanation: {
          en: 'Hierarchy lists all active objects in your scene. Scene View lets you move objects visually in 3D. Game View shows what the player camera sees. Inspector reveals every property and component.',
          th: 'หน้าต่าง Hierarchy รวมรายชื่อวัตถุทั้งหมดในด่าน, Scene View ให้คุณจัดวางและขยับสิ่งของในโลก 3D, Game View แสดงภาพที่ผู้เล่นจะเห็นผ่านกล้อง, และ Inspector สำหรับปรับแต่งค่าตัวเลขทุกอย่าง',
        },
        imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80',
        imageCaption: {
          en: 'Visual layout of Unity Editor panels: Scene, Hierarchy, Project, and Inspector',
          th: 'การจัดวางหน้าต่างหลักใน Unity Editor: Scene, Hierarchy, Project และ Inspector',
        },
      },
      {
        stepNumber: 2,
        title: {
          en: 'Understanding GameObjects & Components',
          th: 'เข้าใจแนวคิด GameObject และ Component',
        },
        explanation: {
          en: 'Every entity in Unity is an empty container called a GameObject. You give it life by attaching Components like Light, MeshRenderer, Rigidbody, or C# scripts.',
          th: 'ทุกสิ่งทุกอย่างใน Unity เป็นกล่องเปล่าที่เรียกว่า GameObject คุณมอบความสามารถให้มันโดยการติด "Component" เช่น แสงไฟ, รูปร่าง 3D, น้ำหนักฟิสิกส์ หรือสคริปต์ C#',
        },
        inspectorData: {
          componentName: 'GameObject: MainCharacter',
          properties: [
            { name: 'Transform', value: '(X:0, Y:1, Z:0)', hint: 'Coordinates in 3D World' },
            { name: 'MeshFilter', value: 'Hero_Mesh', hint: '3D Geometry Vertices' },
            { name: 'MeshRenderer', value: 'Hero_Material', hint: 'Colors and Textures' },
          ],
        },
      },
    ],
    codeExamples: [
      {
        title: 'Basic C# MonoBehaviour Template',
        language: 'csharp',
        code: `using UnityEngine;

public class PlayerIntro : MonoBehaviour
{
    // Runs once when game starts
    void Start()
    {
        Debug.Log("Hello from GameDev Academy! Game initialized.");
    }

    // Runs every single frame (approx 60 times/sec)
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            Debug.Log("Spacebar pressed! Player jumped.");
        }
    }
}`,
        explanation: {
          en: 'MonoBehaviour is the base class in Unity. Start() runs once at initialization, while Update() runs on every frame to check for player input.',
          th: 'MonoBehaviour คือคลาสแม่ของ Unity เมธอด Start() จะทำงานครั้งเดียวตอนเริ่มเกม ส่วน Update() จะทำงานทุกๆ เฟรมเพื่อเช็กปุ่มกด',
        },
      },
    ],
    practiceChecklist: [
      { id: 'u01-1', title: { en: 'Identify Hierarchy and Inspector in Unity', th: 'ชี้ตำแหน่งหน้าต่าง Hierarchy และ Inspector ใน Unity' }, completed: false },
      { id: 'u01-2', title: { en: 'Create an empty GameObject and name it "Player"', th: 'สร้าง GameObject ว่างและตั้งชื่อว่า "Player"' }, completed: false },
      { id: 'u01-3', title: { en: 'Press the Play button and test the Game View', th: 'กดปุ่ม Play เพื่อทดสอบมุมมอง Game View' }, completed: false },
    ],
    miniChallenge: {
      prompt: {
        en: 'If a game runs at 60 FPS, approximately how many times will the Update() method be called in 3 seconds?',
        th: 'ถ้าเกมรันที่ 60 FPS ฟังก์ชัน Update() จะถูกเรียกทำงานประมาณกี่ครั้งในเวลา 3 วินาที?',
      },
      hint: {
        en: 'Multiply frames per second (60) by the number of seconds.',
        th: 'นำจำนวนเฟรมต่อวินาที (60) คูณด้วยจำนวนวินาที',
      },
      solution: {
        en: '180 times! (60 frames/sec * 3 seconds = 180 calls).',
        th: '180 ครั้ง! (60 ครั้งต่อวินาที * 3 วินาที = 180 ครั้ง)',
      },
    },
    commonMistakes: [
      {
        mistake: { en: 'Editing variables in Play Mode and losing changes', th: 'ปรับแต่งค่าตอนกด Play แล้วการเปลี่ยนแปลงหายหมด' },
        why: { en: 'Play Mode is a temporary simulation. When you stop Play Mode, Unity resets everything.', th: 'Play Mode เป็นการจำลองชั่วคราว เมื่อกดหยุด Unity จะคืนค่าเดิมทั้งหมด' },
        fix: { en: 'Always stop Play Mode (Ctrl+P) before making permanent changes to your scene.', th: 'กดหยุด Play Mode ก่อนเสมอเมื่อต้องการแก้ไขฉากถาวร' },
      },
    ],
    quiz: [
      {
        question: {
          en: 'Which method runs repeatedly on every frame in Unity?',
          th: 'ฟังก์ชันใดใน Unity ที่ทำงานซ้ำๆ ในทุกๆ เฟรม?',
        },
        options: {
          en: ['Awake()', 'Start()', 'Update()', 'OnDestroy()'],
          th: ['Awake()', 'Start()', 'Update()', 'OnDestroy()'],
        },
        correctIndex: 2,
        explanation: {
          en: 'Update() is invoked once per frame by the Unity Game Loop, ideal for checking player inputs.',
          th: 'Update() ถูกเรียกทำงาน 1 ครั้งต่อ 1 เฟรม เหมาะสำหรับตรวจสอบการกดปุ่มของผู้เล่น',
        },
      },
    ],
  },
  {
    id: 'unity-zero-002',
    engine: 'unity',
    level: 'zero',
    lessonNumber: 2,
    slug: 'gameobjects-and-transforms',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    heroImageCaption: {
      en: '3D coordinate space visualization: X (Red), Y (Green), and Z (Blue) vectors in modern game engines',
      th: 'มิติพิกัด 3D: แกน X (สีแดง), แกน Y (สีเขียว) และแกน Z (สีน้ำเงิน) ในเอนจินเกม',
    },
    title: {
      en: 'GameObjects & Transforms: 3D Coordinates & Hierarchy',
      th: 'GameObject และ Transform: พิกัด 3D และโครงสร้างลำดับชั้น',
    },
    shortDescription: {
      en: 'Master Position, Rotation, Scale, local vs world coordinates, and parent-child hierarchies.',
      th: 'เรียนรู้พิกัดตำแหน่ง การหมุน ขนาด ความต่างของ Local/World Space และระบบแม่ลูก (Parent-Child)',
    },
    estimatedMinutes: 25,
    tags: ['Zero', 'Unity', 'Transform', 'Coordinates'],
    startFromZero: true,
    objectives: {
      en: [
        'Understand Position (X, Y, Z), Rotation, and Scale',
        'Learn the difference between Local Space and World Space',
        'Master the Parent-Child hierarchy and transform inheritance',
      ],
      th: [
        'เข้าใจค่าพิกัด Position (X, Y, Z), การหมุน Rotation และขนาด Scale',
        'แยกความแตกต่างระหว่าง Local Space และ World Space ได้อย่างถูกต้อง',
        'จัดระเบียบโครงสร้างแม่-ลูก (Parent-Child Hierarchy) และการสืบทอดพิกัด',
      ],
    },
    prerequisites: {
      en: ['Completed Lesson 1: What is Unity?'],
      th: ['เรียนจบบทที่ 1: Unity คืออะไร'],
    },
    zeroExplanation: {
      what: {
        en: 'Transform is the only component that every single GameObject MUST have. It defines where the object exists in 3D space.',
        th: 'Transform คือ Component เดียวที่ GameObject ทุกตัวจำเป็นต้องมี เป็นตัวกำหนดตำแหน่ง ทิศทาง และขนาดในโลก 3 มิติ',
      },
      why: {
        en: 'Without a Transform, a game engine cannot know where to place a character, which way they are facing, or how large they are.',
        th: 'หากไม่มี Transform ระบบจะไม่รู้เลยว่าตัวละครยืนอยู่ตรงไหน หันหน้าไปทางใด หรือตัวใหญ่แค่ไหน',
      },
      how: {
        en: 'Unity uses a 3D Cartesian system: X (Red = Left/Right), Y (Green = Up/Down), Z (Blue = Forward/Back).',
        th: 'Unity ใช้แกน 3D: X (แดง = ซ้าย/ขวา), Y (เขียว = บน/ล่าง), Z (น้ำเงิน = หน้า/หลัง)',
      },
      when: {
        en: 'Used constantly: whenever you move a player, rotate a camera, or scale an explosion effect.',
        th: 'ต้องใช้ตลอดเวลา ไม่ว่าจะเป็นการเดินตัวละคร การหมุนกล้อง หรือการขยายขนาดเอฟเฟกต์ระเบิด',
      },
    },
    diagram: {
      type: 'transform',
      title: {
        en: 'The 3D Coordinate System (XYZ)',
        th: 'ระบบพิกัด 3 มิติ (X, Y, Z)',
      },
      description: {
        en: 'Red = X axis, Green = Y axis, Blue = Z axis.',
        th: 'สีแดง = แกน X, สีเขียว = แกน Y, สีน้ำเงิน = แกน Z',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Position, Rotation & Scale',
          th: 'การตั้งค่า Position, Rotation และ Scale',
        },
        explanation: {
          en: 'Position is measured in meters (units). Rotation uses degrees (0 to 360). Scale is a multiplier (1 = 100% normal size).',
          th: 'Position มีหน่วยเป็นเมตร (Unit), Rotation มีหน่วยเป็นองศา (0-360), และ Scale เป็นตัวคูณขนาด (1 = 100% ขนาดปกติ)',
        },
        inspectorData: {
          componentName: 'Transform',
          properties: [
            { name: 'Position', value: 'X: 0, Y: 0, Z: 0', hint: 'Center of World Origin' },
            { name: 'Rotation', value: 'X: 0, Y: 45, Z: 0', hint: 'Turned 45 degrees horizontally' },
            { name: 'Scale', value: 'X: 1, Y: 1, Z: 1', hint: 'Default scale' },
          ],
        },
      },
    ],
    codeExamples: [
      {
        title: 'Moving via Transform in C#',
        language: 'csharp',
        code: `using UnityEngine;

public class Mover : MonoBehaviour
{
    public float moveSpeed = 5.0f;

    void Update()
    {
        // Move forward along the Z axis at 5 meters per second
        transform.Translate(Vector3.forward * moveSpeed * Time.deltaTime);
    }
}`,
        explanation: {
          en: 'Time.deltaTime ensures frame-rate independent movement. 5 meters per second whether running at 30 FPS or 144 FPS.',
          th: 'Time.deltaTime ช่วยให้ความเร็วคงที่เสมอ ไม่ว่าจะเล่นบนคอมช้า 30 FPS หรือคอมแรง 144 FPS',
        },
      },
    ],
    practiceChecklist: [
      { id: 'u02-1', title: { en: 'Spawn a 3D Cube and reset Transform to (0,0,0)', th: 'สร้างกล่อง 3D Cube และ Reset Transform เป็น (0,0,0)' }, completed: false },
      { id: 'u02-2', title: { en: 'Drag a Sphere under the Cube to make it a child', th: 'ลากทรงกลมไปปล่อยใต้ Cube เพื่อตั้งค่าเป็น Child' }, completed: false },
    ],
    miniChallenge: {
      prompt: {
        en: 'If a Parent GameObject moves +10 units on X, what happens to its Child object?',
        th: 'หาก Parent ขยับไป +10 บนแกน X วัตถุที่เป็น Child จะเกิดอะไรขึ้น?',
      },
      hint: {
        en: 'Children inherit all transformations from their parents.',
        th: 'วัตถุที่เป็นลูกจะสืบทอดการเคลื่อนที่ทั้งหมดจากแม่',
      },
      solution: {
        en: 'The Child moves along with the Parent by +10 units in World Space, while its Local Position remains unchanged.',
        th: 'Child จะเคลื่อนที่ตาม Parent ไป +10 ใน World Space โดยที่ Local Position ของตัวเองยังคงเท่าเดิม',
      },
    },
    commonMistakes: [
      {
        mistake: { en: 'Forgetting Time.deltaTime when translating', th: 'ลืมคูณ Time.deltaTime เวลาสั่งเคลื่อนที่' },
        why: { en: 'Without Time.deltaTime, the object moves once per frame, causing super-speed on fast PCs.', th: 'ถ้าไม่คูณ Time.deltaTime วัตถุจะขยับตามเฟรมเรต ทำให้คอมแรงๆ วิ่งเร็วเป็นจรวด' },
        fix: { en: 'Always multiply speed by Time.deltaTime inside Update().', th: 'คูณ speed ด้วย Time.deltaTime เสมอในฟังก์ชัน Update()' },
      },
    ],
    quiz: [
      {
        question: {
          en: 'Which color represents the Y-Axis (Up/Down) in Unity?',
          th: 'สีใดแทนแกน Y (บน/ล่าง) ใน Unity?',
        },
        options: {
          en: ['Red', 'Green', 'Blue', 'Yellow'],
          th: ['แดง', 'เขียว', 'น้ำเงิน', 'เหลือง'],
        },
        correctIndex: 1,
        explanation: {
          en: 'Green is standard for Y-Axis (Up/Down) in 3D coordinate convention.',
          th: 'สีเขียวคือแกน Y (ขึ้น/ลง) ตามมาตรฐานพิกัด 3 มิติ',
        },
      },
    ],
  },
  {
    id: 'unity-zero-003',
    engine: 'unity',
    level: 'zero',
    lessonNumber: 3,
    slug: 'rigidbody-and-physics',
    heroImage: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80',
    heroImageCaption: {
      en: 'Physical balance simulation: gravity, friction, collision surfaces, and rigidbody momentum',
      th: 'การจำลองสมดุลฟิสิกส์: แรงโน้มถ่วง แรงเสียดทาน ผิวสัมผัสการชน และโมเมนตัมของ Rigidbody',
    },
    title: {
      en: 'Components & Rigidbody: Gravity & Collisions',
      th: 'Components และ Rigidbody: แรงโน้มถ่วงและการชนในระบบฟิสิกส์',
    },
    shortDescription: {
      en: 'Transform static shapes into dynamic objects governed by gravity, friction, and physical collision boundaries.',
      th: 'เปลี่ยนรูปทรงนิ่งๆ ให้มีชีวิต มีน้ำหนัก ตกลงตามแรงโน้มถ่วง และตรวจจับการชนด้วย Collider & Rigidbody',
    },
    estimatedMinutes: 25,
    tags: ['Zero', 'Unity', 'Physics', 'Rigidbody', 'Colliders'],
    startFromZero: true,
    objectives: {
      en: [
        'Understand the Rigidbody component and its physical attributes',
        'Learn the difference between Colliders (solid barrier) and Triggers (sensor zone)',
        'Master the OnCollisionEnter vs OnTriggerEnter events in C#',
      ],
      th: [
        'เข้าใจการทำงานของ Rigidbody และคุณสมบัติทางฟิสิกส์',
        'แยกความแตกต่างระหว่าง Collider ทั่วไป (กำแพงทึบ) กับ Is Trigger (โซนตรวจจับ)',
        'ใช้งานอีเวนต์ OnCollisionEnter และ OnTriggerEnter ในภาษา C#',
      ],
    },
    prerequisites: {
      en: ['Completed Lesson 2: GameObjects & Transforms'],
      th: ['เรียนจบบทที่ 2: GameObject และ Transform'],
    },
    zeroExplanation: {
      what: {
        en: 'A Rigidbody gives an object physical weight, enabling Unity’s NVIDIA PhysX engine to calculate gravity, drag, and momentum.',
        th: 'Rigidbody คือ Component ที่มอบน้ำหนัก มวล และแรงโน้มถ่วงให้กับวัตถุผ่านเอนจินฟิสิกส์',
      },
      why: {
        en: 'Without a Rigidbody, objects will float mid-air and will not respond to collisions or physics impulses.',
        th: 'ถ้าไม่มี Rigidbody วัตถุจะลอยเคว้งคว้าง ไม่ตกลงพื้น และไม่ถูกผลักเมื่อมีอะไรมาชน',
      },
      how: {
        en: 'Attach Rigidbody to dynamic objects and pair it with a Collider (Box, Sphere, Capsule). Check "Use Gravity" and adjust Mass.',
        th: 'เพิ่ม Rigidbody เข้ากับวัตถุพร้อม Collider (กล่อง ทรงกลม หรือแคปซูล) ติ๊กเปิด Use Gravity เพื่อให้น้ำหนักทำงาน',
      },
      when: {
        en: 'For characters, falling crates, rolling boulders, bullets, and bouncy balls.',
        th: 'ใช้สำหรับตัวละคร, ลังไม้ตก, ก้อนหินกลิ้ง, ลูกบอลเด้ง และกระสุนปืน',
      },
    },
    diagram: {
      type: 'physics-pipeline',
      title: {
        en: 'How Unity Detects Collisions',
        th: 'กระบวนการตรวจจับการชนในระบบฟิสิกส์ Unity',
      },
      description: {
        en: 'Object with Rigidbody + Collider falls -> Contacts Ground Collider -> Stops penetration -> Fires OnCollisionEnter!',
        th: 'วัตถุที่มี Rigidbody + Collider ตกลงมา -> สัมผัส Collider ของพื้น -> หยุดไม่ให้ทะลุ -> เรียกใช้ฟังก์ชัน OnCollisionEnter!',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Adding a Rigidbody Component',
          th: 'การเพิ่ม Rigidbody ให้กับ GameObject',
        },
        explanation: {
          en: 'Select the object, click "Add Component" in the Inspector, search for "Rigidbody", and verify Use Gravity is checked.',
          th: 'เลือกวัตถุ กดปุ่ม Add Component ใน Inspector ค้นหา Rigidbody และตรวจสอบว่าติ๊ก Use Gravity แล้ว',
        },
        inspectorData: {
          componentName: 'Rigidbody',
          properties: [
            { name: 'Mass', value: '1', hint: 'Weight in kilograms' },
            { name: 'Drag', value: '0', hint: 'Air resistance' },
            { name: 'Use Gravity', value: 'True', hint: 'Pulls down on -Y axis' },
          ],
        },
      },
    ],
    codeExamples: [
      {
        title: 'Collision & Trigger Detection in C#',
        language: 'csharp',
        code: `using UnityEngine;

public class CoinCollector : MonoBehaviour
{
    // Solid physical collision
    private void OnCollisionEnter(Collision collision)
    {
        Debug.Log("Hit solid obstacle: " + collision.gameObject.name);
    }

    // Ghost sensor trigger zone (e.g. collecting gold coin)
    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("Coin"))
        {
            Debug.Log("Collected Coin! +10 Points");
            Destroy(other.gameObject);
        }
    }
}`,
        explanation: {
          en: 'Use OnCollisionEnter for solid physical bounces, and OnTriggerEnter (Is Trigger checked) for sensor pickups like coins.',
          th: 'ใช้ OnCollisionEnter สำหรับการชนของแข็ง และใช้ OnTriggerEnter (เมื่อติ๊ก Is Trigger) สำหรับไอเทมเก็บเหรียญหรือประตูวาร์ป',
        },
      },
    ],
    practiceChecklist: [
      { id: 'u03-1', title: { en: 'Add Rigidbody to a 3D Sphere', th: 'เพิ่ม Rigidbody ให้กับ 3D Sphere' }, completed: false },
      { id: 'u03-2', title: { en: 'Create a Floor Cube and test gravity fall', th: 'สร้างแผ่นพื้น Floor Cube และทดสอบปล่อยลูกบอลให้ตกลงมา' }, completed: false },
    ],
    miniChallenge: {
      prompt: {
        en: 'Why did my player walk right through the wooden box instead of bumping into it?',
        th: 'ทำไมตัวละครถึงเดินทะลุกล่องไม้ไปเลย ไม่ชนติด?',
      },
      hint: {
        en: 'Check if one of the Colliders has "Is Trigger" mistakenly checked, or lacks a Collider component.',
        th: 'เช็กดูว่าเผลอไปติ๊ก Is Trigger ไว้ หรือลืมใส่ Collider Component หรือไม่',
      },
      solution: {
        en: 'If "Is Trigger" is enabled, the collider acts as an intangible sensor zone rather than a solid wall.',
        th: 'ถ้าติ๊ก Is Trigger ไว้ กล่องจะกลายเป็นโซนเซนเซอร์โปร่งใสที่เดินทะลุได้ ให้เอาติ๊กถูกออกเพื่อเป็นกำแพงทึบ',
      },
    },
    commonMistakes: [
      {
        mistake: { en: 'Applying physical movement in Update() instead of FixedUpdate()', th: 'ใส่โค้ดแรงฟิสิกส์ใน Update() แทนที่จะเป็น FixedUpdate()' },
        why: { en: 'Update runs at variable intervals, causing jittery physics simulations.', th: 'Update ทำงานตามเฟรมเรตที่ไม่คงที่ ทำให้การคำนวณฟิสิกส์กระตุกหรือไม่สม่ำเสมอ' },
        fix: { en: 'Always apply AddForce and Rigidbody physics in FixedUpdate().', th: 'ใส่คำสั่ง AddForce หรือคำนวณ Rigidbody ใน FixedUpdate() เสมอ' },
      },
    ],
    quiz: [
      {
        question: {
          en: 'Which setting turns a Collider into an intangible sensor zone?',
          th: 'ตัวเลือกใดที่เปลี่ยน Collider ให้กลายเป็นโซนเซนเซอร์ตรวจจับที่เดินทะลุได้?',
        },
        options: {
          en: ['Is Kinematic', 'Is Trigger', 'Use Gravity', 'Interpolate'],
          th: ['Is Kinematic', 'Is Trigger', 'Use Gravity', 'Interpolate'],
        },
        correctIndex: 1,
        explanation: {
          en: 'Checking "Is Trigger" allows objects to pass through while triggering OnTriggerEnter events.',
          th: 'การติ๊ก Is Trigger จะทำให้วัตถุเดินทะลุผ่านได้ และจะส่งสัญญาณเรียกใช้ฟังก์ชัน OnTriggerEnter',
        },
      },
    ],
  },
  {
    id: 'unity-zero-004',
    engine: 'unity',
    level: 'zero',
    lessonNumber: 4,
    slug: 'player-movement-and-input',
    heroImage: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1200&q=80',
    heroImageCaption: {
      en: 'Dynamic character motion: smooth acceleration, keyboard input polling, and avatar velocity',
      th: 'การเคลื่อนที่ของตัวละคร: การเร่งความเร็วที่นุ่มนวล การรับคำสั่งคีย์บอร์ด และเวกเตอร์ความเร็ว',
    },
    title: {
      en: 'Player Movement: Connecting Inputs to Avatar',
      th: 'การควบคุมผู้เล่น: เชื่อมต่อคีย์บอร์ดเข้ากับตัวละคร',
    },
    shortDescription: {
      en: 'Read WASD and Arrow inputs, calculate directional vectors, and smoothly move your character across the screen.',
      th: 'ตรวจจับปุ่มกด WASD และปุ่มลูกศร คำนวณเวกเตอร์ทิศทาง และสั่งให้ตัวละครเดินได้อย่างนุ่มนวล',
    },
    estimatedMinutes: 30,
    tags: ['Zero', 'Unity', 'Input', 'Movement', 'Gameplay'],
    startFromZero: true,
    objectives: {
      en: [
        'Read keyboard axes using Input.GetAxisRaw("Horizontal" / "Vertical")',
        'Construct a 3D movement vector (Vector3)',
        'Move a character smoothly with Rigidbody.linearVelocity or transform.Translate',
      ],
      th: [
        'อ่านค่าแกนคีย์บอร์ดด้วย Input.GetAxisRaw("Horizontal" และ "Vertical")',
        'สร้างเวกเตอร์ทิศทางการเคลื่อนที่ 3 มิติ (Vector3)',
        'สั่งให้ตัวละครเคลื่อนไหวอย่างสมูทและตอบสนองได้ดีเยี่ยม',
      ],
    },
    prerequisites: {
      en: ['Completed Lesson 3: Rigidbody & Physics'],
      th: ['เรียนจบบทที่ 3: Rigidbody และระบบฟิสิกส์'],
    },
    zeroExplanation: {
      what: {
        en: 'Player movement is the bridge connecting physical hardware (keys/gamepad sticks) to in-game virtual coordinates.',
        th: 'ระบบการเคลื่อนที่คือสะพานเชื่อมระหว่างปุ่มกดบนอุปกรณ์จริง เข้ากับพิกัดในโลกจำลองของเกม',
      },
      why: {
        en: 'Fluid, responsive player controls are the single most important factor determining whether a game feels fun to play.',
        th: 'การบังคับที่ลื่นไหลและตอบสนองทันใจ คือปัจจัยอันดับหนึ่งที่บอกว่าเกมนั้นสนุกและน่าเล่นหรือไม่',
      },
      how: {
        en: 'Poll Input in Update(), compute direction = (h, 0, v).normalized, and apply velocity = direction * speed.',
        th: 'อ่านค่าปุ่มกดใน Update(), รวมทิศทางเป็นเวกเตอร์, และส่งค่าความเร็ว (Velocity) ให้ตัวละครเดิน',
      },
      when: {
        en: 'Essential for every genre: platformers, RPGs, FPS, racing games, and top-down adventures.',
        th: 'จำเป็นในแทบทุกประเภทเกม: Platformer, Action RPG, FPS และ Top-Down Adventure',
      },
    },
    diagram: {
      type: 'character-movement',
      title: {
        en: 'The Player Movement Pipeline',
        th: 'ขั้นตอนการคำนวณการเคลื่อนที่ของตัวละคร',
      },
      description: {
        en: 'Input Axis (-1 to 1) -> Direction Vector -> Multiply by Speed & Time -> Apply to Rigidbody.',
        th: 'ค่าปุ่มกด (-1 ถึง 1) -> สร้างเวกเตอร์ทิศทาง -> คูณด้วยความเร็ว -> สั่งขยับ Rigidbody',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Capturing Horizontal and Vertical Input',
          th: 'การรับค่าปุ่มกดแนวนอนและแนวตั้ง',
        },
        explanation: {
          en: 'Input.GetAxisRaw("Horizontal") returns -1 for A/Left Arrow, +1 for D/Right Arrow, and 0 when released.',
          th: 'Input.GetAxisRaw("Horizontal") จะให้ค่า -1 เมื่อกด A/ลูกศรซ้าย, +1 เมื่อกด D/ลูกศรขวา และ 0 เมื่อปล่อยปุ่ม',
        },
        inspectorData: {
          componentName: 'PlayerController (Script)',
          properties: [
            { name: 'Move Speed', value: '7.5', hint: 'Units/meters per second' },
            { name: 'Jump Force', value: '12.0', hint: 'Vertical impulse force' },
          ],
        },
      },
    ],
    codeExamples: [
      {
        title: 'Complete 3D Rigidbody Character Controller',
        language: 'csharp',
        code: `using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    [SerializeField] private float moveSpeed = 6.0f;
    [SerializeField] private float jumpForce = 5.0f;
    private Rigidbody rb;
    private bool isGrounded = true;

    void Start()
    {
        rb = GetComponent<Rigidbody>();
    }

    void Update()
    {
        float h = Input.GetAxisRaw("Horizontal");
        float v = Input.GetAxisRaw("Vertical");

        Vector3 direction = new Vector3(h, 0f, v).normalized;
        rb.linearVelocity = new Vector3(direction.x * moveSpeed, rb.linearVelocity.y, direction.z * moveSpeed);

        if (Input.GetButtonDown("Jump") && isGrounded)
        {
            rb.AddForce(Vector3.up * jumpForce, ForceMode.Impulse);
            isGrounded = false;
        }
    }

    private void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.CompareTag("Ground"))
        {
            isGrounded = true;
        }
    }
}`,
        explanation: {
          en: 'Using .normalized prevents moving faster diagonally. Preserving rb.linearVelocity.y maintains natural gravity while jumping.',
          th: 'การใช้ .normalized ป้องกันไม่ให้เดินทะแยงมุมเร็วเกินไป และการคงค่า rb.linearVelocity.y ช่วยให้แรงโน้มถ่วงทำงานเป็นธรรมชาติ',
        },
      },
    ],
    practiceChecklist: [
      { id: 'u04-1', title: { en: 'Attach PlayerMovement script to character', th: 'แนบสคริปต์ PlayerMovement เข้ากับตัวละคร' }, completed: false },
      { id: 'u04-2', title: { en: 'Tag the floor as "Ground"', th: 'ตั้งค่า Tag แผ่นพื้นให้เป็น "Ground"' }, completed: false },
      { id: 'u04-3', title: { en: 'Test walking with WASD and jumping with Spacebar', th: 'ทดสอบเดินด้วย WASD และกระโดดด้วย Spacebar' }, completed: false },
    ],
    miniChallenge: {
      prompt: {
        en: 'Without .normalized, why does a character run ~41% faster when pressing W and D together?',
        th: 'หากไม่ใส่ .normalized ทำไมตัวละครถึงวิ่งเร็วขึ้นประมาณ 41% เวลาเรากด W และ D พร้อมกัน?',
      },
      hint: {
        en: 'Think about the Pythagorean theorem for a triangle with sides 1 and 1.',
        th: 'นึกถึงทฤษฎีพีทาโกรัสสำหรับสามเหลี่ยมที่มีด้านประกอบมุมฉากยาว 1 และ 1',
      },
      solution: {
        en: 'Vector (1, 0, 1) has a length of sqrt(1^2 + 1^2) = 1.414! Normalizing clamps the vector length strictly to 1.0 in all directions.',
        th: 'เวกเตอร์ (1, 0, 1) มีความยาวเท่ากับ รูท(1^2 + 1^2) = 1.414! การใส่ .normalized จะปรับความยาวเวกเตอร์ให้เป็น 1.0 เสมอในทุกทิศทาง',
      },
    },
    commonMistakes: [
      {
        mistake: { en: 'Resetting velocity.y to 0 when moving horizontally', th: 'เผลอรีเซ็ตค่า velocity.y เป็น 0 ทุกเฟรมตอนเดิน' },
        why: { en: 'Overwriting the Y axis completely cancels gravity, making the player float.', th: 'การเขียนทับแกน Y จะตัดแรงโน้มถ่วงทิ้ง ทำให้ตัวละครลอยค้างอยู่กลางอากาศ' },
        fix: { en: 'Keep rb.linearVelocity.y untouched when updating horizontal movement.', th: 'คงค่า rb.linearVelocity.y เดิมเอาไว้เสมอเมื่อขยับในแนวระนาบ' },
      },
    ],
    quiz: [
      {
        question: {
          en: 'Why do we normalize the movement direction vector?',
          th: 'ทำไมเราจึงต้อง Normalize เวกเตอร์ทิศทางการเคลื่อนที่?',
        },
        options: {
          en: [
            'To increase gravity',
            'To prevent moving faster diagonally',
            'To make jumping higher',
            'To reduce memory usage',
          ],
          th: [
            'เพื่อเพิ่มแรงโน้มถ่วง',
            'เพื่อป้องกันไม่ให้เดินทะแยงมุมเร็วเกินจริง',
            'เพื่อให้กระโดดได้สูงขึ้น',
            'เพื่อประหยัดหน่วยความจำ',
          ],
        },
        correctIndex: 1,
        explanation: {
          en: 'Normalizing guarantees the vector magnitude is always 1, ensuring uniform speed in every direction.',
          th: 'การ Normalize ทำให้ขนาดเวกเตอร์ยาวเท่ากับ 1 เสมอ ส่งผลให้ความเร็วเท่ากันทุกทิศทางแม้จะกดสองปุ่มพร้อมกัน',
        },
      },
    ],
  },
];
