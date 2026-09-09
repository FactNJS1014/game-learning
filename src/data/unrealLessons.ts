import { Lesson } from '../types';

export const unrealLessons: Lesson[] = [
  // UNREAL LEVEL 0
  {
    id: 'unreal-zero-001',
    engine: 'unreal',
    level: 'zero',
    lessonNumber: 1,
    slug: 'what-is-unreal-engine',
    title: {
      en: 'What is Unreal Engine? Nanite, Lumen & The Visual Powerhouse',
      th: 'Unreal Engine คืออะไร? ทำความรู้จัก Nanite, Lumen และสุดยอด Engine กราฟิกระดับโลก',
    },
    shortDescription: {
      en: 'Discover how Epic Games created the engine powering Fortnite and Hollywood cinema. Understand Actors, Blueprints, and visual node architecture.',
      th: 'เรียนรู้ว่าทำไมสตูดิโอเกมระดับ AAA และฮอลลีวูดถึงเลือก Unreal Engine ทำความรู้จัก Actor, Blueprint และโครงสร้างภาพระดับ Next-Gen',
    },
    estimatedMinutes: 20,
    tags: ['Zero', 'Unreal', 'Nanite', 'Lumen', 'Overview'],
    startFromZero: true,
    objectives: {
      en: [
        'Understand what Unreal Engine is and why it excels in AAA graphics & cinematic visuals',
        'Learn the difference between Blueprint Visual Scripting and C++',
        'Understand revolutionary Unreal Engine 5 technologies: Nanite (infinite geometry) and Lumen (real-time global illumination)',
        'Learn the foundational definition of an "Actor" in Unreal',
      ],
      th: [
        'เข้าใจความเป็นมาและจุดเด่นของ Unreal Engine ในเกมระดับ AAA และงานภาพยนตร์',
        'เข้าใจความแตกต่างระหว่างระบบเขียนโค้ดด้วยภาพ (Blueprint) และภาษา C++',
        'รู้จักเทคโนโลยีระดับปฏิวัติวงการของ UE5: Nanite (เรนเดอร์โมเดลนับพันล้านชิ้น) และ Lumen (ระบบแสงและเงาสะท้อนแบบเรียลไทม์)',
        'เข้าใจความหมายและหัวใจสำคัญของคำว่า "Actor" ใน Unreal Engine',
      ],
    },
    prerequisites: {
      en: ['Zero game development background needed!'],
      th: ['ไม่จำเป็นต้องมีพื้นฐานมาก่อน เริ่มต้นจากศูนย์ไปด้วยกัน'],
    },
    zeroExplanation: {
      what: {
        en: 'Unreal Engine is a complete suite of creation tools developed by Epic Games. In Unreal, anything placed inside a 3D level is called an "Actor".',
        th: 'Unreal Engine คือชุดเครื่องมือพัฒนาเกมแบบครบวงจรจาก Epic Games สิ่งของทุกอย่างที่คุณลากลงไปวางในฉากจะถูกเรียกว่า "Actor"',
      },
      why: {
        en: 'Unreal delivers photorealistic lighting and physics out of the box. Instead of writing code in pure text, you can use "Blueprints" — connecting visual nodes like flowchart diagrams to make complete games without typing code.',
        th: 'Unreal มอบงานภาพแสงเงาที่สมจริงระดับภาพยนตร์มาให้ทันทีตั้งแต่ต้น และแทนที่จะต้องพิมพ์โค้ดภาษาอังกฤษเป็นพันบรรทัด คุณสามารถใช้ "Blueprint" ลากเส้นเชื่อมกล่องคำสั่งเหมือนผังงาน (Flowchart) เพื่อสร้างเกมทั้งเกมได้',
      },
      how: {
        en: 'You manipulate scenes in the Viewport, manage assets in the Content Browser, inspect settings in the Details Panel, and script mechanics visually inside the Blueprint Graph.',
        th: 'คุณจัดฉากในหน้าต่าง Viewport, ค้นหาไฟล์ 3D ใน Content Browser, ปรับแต่งค่าใน Details Panel, และเขียนระบบเกมด้วยการลากกล่อง Blueprint ใน Event Graph',
      },
      when: {
        en: 'Choose Unreal Engine when you want cutting-edge photorealism, high-fidelity 3D action games, cinematic storytelling, architectural visualization, or when you prefer visual node programming over pure text coding.',
        th: 'เลือกใช้ Unreal Engine เมื่อคุณต้องการงานภาพ 3D ที่สมจริงระดับเทพ, เกมแอ็กชันฟอร์มยักษ์, งานแอนิเมชัน/สถาปัตยกรรม, หรือเมื่อคุณชอบการเขียนโปรแกรมแบบมองเห็นภาพผ่าน Node มากกว่าการพิมพ์โค้ด',
      },
    },
    diagram: {
      type: 'blueprint-flow',
      title: {
        en: 'The Blueprint Visual Node Flow',
        th: 'หลักการทำงานของ Visual Scripting ใน Unreal Blueprint',
      },
      description: {
        en: 'White execution wires indicate sequence of actions (Left to Right). Colored data pins (Green for float, Red for bool) supply numbers and calculations.',
        th: 'เส้นเชื่อมสีขาว (Execution Wire) กำหนดลำดับการทำงานจากซ้ายไปขวา ส่วนหมุดหลากสี (เขียวคือทศนิยม แดงคือจริง/เท็จ) ส่งผ่านข้อมูลตัวเลขและค่าต่างๆ',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Touring the Unreal Editor Interface',
          th: 'สำรวจหน้าต่างหลักของ Unreal Engine Editor',
        },
        explanation: {
          en: 'The Unreal Editor is organized into 4 primary windows: 1) Viewport (where you see your 3D world), 2) Outliner (lists all Actors in the level), 3) Details Panel (tweak properties of selected Actor), and 4) Content Drawer (your project files, textures, and Blueprints).',
          th: 'หน้าจอหลักของ Unreal แบ่งเป็น 4 ส่วนสำคัญ: 1) Viewport (พื้นที่มองโลก 3 มิติ), 2) Outliner (รายการ Actor ทั้งหมดในด่าน), 3) Details Panel (แผงปรับแต่งค่าต่างๆ ของวัตถุที่เลือก), 4) Content Drawer (ที่เก็บไฟล์ 3D โมเดล รูปภาพ และ Blueprint)',
        },
        diagramType: 'inspector',
      },
      {
        stepNumber: 2,
        title: {
          en: 'What is an Actor?',
          th: 'Actor คืออะไรใน Unreal?',
        },
        explanation: {
          en: 'In Unreal terminology, an Actor is ANY object that can be placed in a level. Players are Actors, lights are Actors, camera rigs are Actors, and trees are Actors. Actors can contain "Components" like Static Mesh Components or Audio Components.',
          th: 'ใน Unreal คำว่า "Actor" คือวัตถุทุกชนิดที่สามารถวางลงในด่านได้ ตัวละครผู้เล่นคือ Actor, หลอดไฟคือ Actor, กล้องคือ Actor, ต้นไม้คือ Actor โดย Actor จะมี "Components" ติดอยู่ภายในเพื่อประกอบร่างเป็นสิ่งนั้น',
        },
        diagramType: 'hierarchy',
      },
    ],
    codeExamples: [
      {
        id: 'unreal-blueprint-concept',
        title: 'How Blueprint Logic is Read (Node Equivalent)',
        language: 'blueprint',
        code: `// Visual Flow Representation:
[Event BeginPlay] ──(White Wire)──> [Print String: "Welcome to Unreal Engine!"]
                                          │
                                     (Text Pin: "Hello GameDev Academy")`,
        explanation: {
          en: [
            'Event BeginPlay: An event node that fires once when the level starts running.',
            'White Execution Wire: Dictates the chronological order of execution. Code only runs if this line is plugged in!',
            'Print String: Displays a debug text message on the top left of your game screen.',
          ],
          th: [
            'Event BeginPlay: โหนดจุดเริ่มต้นที่จะส่งสัญญาณทำงานเพียงครั้งเดียวเมื่อด่านเริ่มรัน',
            'White Execution Wire: เส้นเชื่อมสีขาวคือท่อส่งคำสั่ง คำสั่งจะทำงานตามลำดับที่เส้นนี้เชื่อมถึงเท่านั้น',
            'Print String: โหนดสำหรับสั่งให้แสดงข้อความทดสอบที่มุมซ้ายบนของหน้าจอเกม',
          ],
        },
      },
    ],
    practiceChecklist: [
      {
        id: 'u-p1',
        task: {
          en: 'Memorize the name of the central 3D view: Viewport',
          th: 'จำชื่อหน้าต่างมองภาพ 3 มิติหลัก: Viewport',
        },
      },
      {
        id: 'u-p2',
        task: {
          en: 'Remember what the white wire represents in Blueprints (Execution order)',
          th: 'จำความหมายของเส้นสีขาวใน Blueprint: เส้นลำดับการประมวลผลคำสั่ง',
        },
      },
    ],
    miniChallenge: {
      title: {
        en: 'Actor Identification',
        th: 'ท้าทาย: สิ่งใดคือ Actor?',
      },
      description: {
        en: 'A level has: A Point Light, a Wooden Chair, a Player Character, and a .PNG texture file in your folder. Which one of these is NOT an Actor?',
        th: 'ในฉากมี: หลอดไฟ Point Light, เก้าอี้ไม้, ตัวละครผู้เล่น, และไฟล์รูปภาพ .PNG ในโฟลเดอร์ สิ่งใดในนี้ "ไม่ใช่" Actor?',
      },
      difficulty: 1,
      hints: {
        en: 'Actors are objects that live inside a 3D level, not raw files stored on your hard disk.',
        th: 'Actor ต้องเป็นสิ่งที่ถูกลากไปวางในฉาก 3 มิติได้ ไม่ใช่แค่ไฟล์รูปภาพที่นอนอยู่ในโฟลเดอร์',
      },
      solution: 'The .PNG texture file! The texture is an Asset in the Content Drawer. Only when it is applied to a Mesh Actor in the level does it participate in the 3D world!',
    },
    commonMistakes: [
      {
        title: {
          en: 'Forgetting to connect the White Execution Wire in Blueprints',
          th: 'ลืมลากเส้นเชื่อมสีขาว (Execution Wire) ใน Blueprint',
        },
        problem: {
          en: 'You place a node (like Destroy Actor or Spawn Sound) but nothing happens when playing the game.',
          th: 'วางโหนดคำสั่งแล้ว (เช่น สั่งทำลายวัตถุ หรือสั่งเล่นเสียง) แต่เวลาเล่นเกมกลับไม่มีอะไรเกิดขึ้นเลย',
        },
        cause: {
          en: 'Data pins (colored wires) provide numbers, but nodes NEVER run unless the white execution wire connects into them!',
          th: 'เส้นหมุดสีต่างๆ ส่งผ่านแค่ข้อมูล แต่โหนดจะไม่ถูกปลุกให้ทำงานเด็ดขาดถ้าไม่มีเส้นสีขาวต่อเข้ามาที่ลูกศรทางซ้าย!',
        },
        solution: {
          en: 'Always trace the white line from an Event (like BeginPlay or Tick) directly into your target node.',
          th: 'ลากเส้นสีขาวเชื่อมต่อจาก Event เริ่มต้น (เช่น BeginPlay) ไปยังโหนดปลายทางเสมอ',
        },
      },
    ],
    quiz: [
      {
        id: 'uq1',
        question: {
          en: 'What is the base term for any object that can be placed inside an Unreal Engine level?',
          th: 'คำศัพท์พื้นฐานที่ใช้เรียกวัตถุใดๆ ก็ตามที่สามารถวางลงในฉากของ Unreal Engine คืออะไร?',
        },
        options: {
          en: ['Actor', 'GameObject', 'Prefab', 'Sprite'],
          th: ['Actor', 'GameObject', 'Prefab', 'Sprite'],
        },
        correctAnswer: 0,
        explanation: {
          en: 'In Unreal Engine, everything placed in the 3D world inherits from the Actor class.',
          th: 'ใน Unreal Engine วัตถุทุกชนิดในโลก 3 มิติจะถูกเรียกว่า Actor (ขณะที่ใน Unity จะเรียกว่า GameObject)',
        },
      },
      {
        id: 'uq2',
        question: {
          en: 'What do the white connection wires represent in Unreal Blueprint graphs?',
          th: 'เส้นเชื่อมสีขาว (White Wire) ในกราฟ Blueprint มีหน้าที่อะไร?',
        },
        options: {
          en: [
            'Execution Flow — the sequence and order in which nodes are executed',
            'Sound volume levels',
            'Player health percentage',
            'Color of the 3D mesh',
          ],
          th: [
            'ทิศทางการประมวลผล (Execution Flow) — ลำดับว่าคำสั่งใดจะทำงานก่อนหลัง',
            'ระดับความดังของเสียงในเกม',
            'เปอร์เซ็นต์พลังชีวิตของผู้เล่น',
            'สีของโมเดล 3 มิติ',
          ],
        },
        correctAnswer: 0,
        explanation: {
          en: 'Execution wires dictate the chronological chain of events. Without an execution pulse, nodes remain idle.',
          th: 'เส้นสีขาวกำหนดจังหวะและลำดับการประมวลผล หากไม่มีเส้นสีขาวต่อมาถึง โหนดนั้นจะไม่ทำงานเลย',
        },
      },
    ],
    summary: {
      en: [
        'Unreal Engine excels in photorealistic rendering, cinematic fidelity, and AAA game production.',
        'Actors are the fundamental entities that populate the 3D level.',
        'Blueprints allow you to create complete gameplay systems through visual node scripting.',
        'White wires control execution order; colored pins pass data values.',
      ],
      th: [
        'Unreal Engine โดดเด่นด้านกราฟิกความสมจริงระดับโลกและเป็นมาตรฐานของสตูดิโอเกม AAA',
        'Actor คือวัตถุพื้นฐานทุกชิ้นที่วางอยู่ในฉาก 3 มิติ',
        'Blueprint ช่วยให้สร้างระบบเกมและกลไกทั้งหมดได้ด้วยการลากกล่องคำสั่งโดยไม่ต้องพิมพ์โค้ดภาษา C++',
        'เส้นสีขาวควบคุมลำดับการทำงาน ส่วนหมุดสีต่างๆ ส่งผ่านค่าตัวแปร',
      ],
    },
    nextLessonId: 'unreal-zero-002',
  },

  {
    id: 'unreal-zero-002',
    engine: 'unreal',
    level: 'zero',
    lessonNumber: 2,
    slug: 'blueprint-from-zero',
    title: {
      en: 'Blueprint from Zero: Variables, Branches & Events',
      th: 'Blueprint จากศูนย์: เข้าใจตัวแปร, เงื่อนไข (Branch) และ Event Graph',
    },
    shortDescription: {
      en: 'Learn how to program visually. Create health variables, make if/else decisions with Branch nodes, and respond to player interactions.',
      th: 'ฝึกเขียนระบบเกมด้วยภาพ สร้างตัวแปรพลังชีวิต (Health), ตัดสินใจด้วยโหนด Branch (If/Else), และสั่งการเมื่อเกิดเหตุการณ์ต่างๆ ในเกม',
    },
    estimatedMinutes: 25,
    tags: ['Zero', 'Blueprint', 'Variables', 'Branch', 'Events'],
    startFromZero: true,
    objectives: {
      en: [
        'Understand what a Variable is (storage box for numbers, text, booleans)',
        'Master the 4 fundamental variable types: Boolean (Red), Integer (Cyan), Float (Green), String (Magenta)',
        'Use Branch nodes to create If/Else decision trees',
        'Understand Event Tick (every frame) vs Event BeginPlay (once at start)',
      ],
      th: [
        'เข้าใจความหมายของ "ตัวแปร" (Variable) เปรียบเหมือนกล่องเก็บข้อมูล',
        'จำแนก 4 ชนิดตัวแปรหลัก: Boolean (แดง), Integer (ฟ้า), Float (เขียว), String (ชมพู)',
        'ใช้โหนด Branch เพื่อสร้างเงื่อนไข ถ้า... แล้ว... (If / Else)',
        'เข้าใจความแตกต่างระหว่าง Event Tick (ทำงานทุกเฟรม) กับ Event BeginPlay (ทำงานครั้งเดียว)',
      ],
    },
    prerequisites: {
      en: ['Completed Unreal Lesson 01: What is Unreal Engine?'],
      th: ['ผ่านบทเรียนที่ 01: Unreal Engine คืออะไร'],
    },
    zeroExplanation: {
      what: {
        en: 'A Variable is a labeled memory container that remembers information for your game (like PlayerHealth = 100, Score = 50, IsDead = false). A Branch node asks a True/False question and takes different paths.',
        th: 'ตัวแปร (Variable) คือกล่องติดป้ายชื่อที่คอมพิวเตอร์ใช้จดจำข้อมูล เช่น พลังชีวิต = 100, คะแนน = 50, ตายแล้วหรือยัง = เท็จ ส่วนโหนด Branch คือจุดแยกทางที่ถามว่า "จริงหรือเท็จ" แล้วเลือกทำงานคนละทาง',
      },
      why: {
        en: 'Without variables, your character couldn\'t take damage or count coins. Without branch nodes, the game couldn\'t decide whether you survived a hit or got a Game Over.',
        th: 'หากไม่มีตัวแปร ตัวละครจะไม่มีพลังชีวิตให้ลด และไม่สามารถนับเหรียญได้ หากไม่มีโหนด Branch เกมจะไม่สามารถตัดสินได้ว่าถูกฟันแล้วตายหรือไม่',
      },
      how: {
        en: 'In the My Blueprint tab on the left, click "+" next to Variables. Pick a type (Float for Health). In the Event Graph, drag out the pin and search for "Branch".',
        th: 'ในแท็บ My Blueprint ทางซ้าย กดปุ่มเครื่องหมายบวกข้าง Variables เลือกประเภท Float สำหรับพลังชีวิต จากนั้นลากสายใน Event Graph แล้วค้นหาคำว่า "Branch"',
      },
      when: {
        en: 'Every time you track ammo, health, keys, timer countdowns, or player state, you are using variables and branch conditions.',
        th: 'ทุกครั้งที่คุณทำระบบนับกระสุน, พลังชีวิต, การเก็บกุญแจเปิดประตู, นับเวลาถอยหลัง, หรือตรวจสถานะผู้เล่น',
      },
    },
    diagram: {
      type: 'blueprint-flow',
      title: {
        en: 'Blueprint Branch Logic Flowchart',
        th: 'ผังการทำงานของโหนด Branch (If/Else)',
      },
      description: {
        en: 'Input Event -> Compare (Health <= 0?) -> True branch triggers [Game Over] / False branch triggers [Play Pain Sound].',
        th: 'เกิดการโจมตี -> เปรียบเทียบ (เลือด <= 0 หรือไม่?) -> ถ้าจริง (True) สั่งเปิดหน้า Game Over / ถ้าเท็จ (False) สั่งเล่นเสียงร้องเจ็บปวด',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Color Coding of Blueprint Variables',
          th: 'รหัสสีของตัวแปรใน Unreal Engine',
        },
        explanation: {
          en: 'Unreal makes coding visual through strict colors: Red = Boolean (Yes/No), Cyan = Integer (Whole numbers like 1, 2, 3), Green = Float (Decimals like 5.5, 99.9), Magenta = String (Text like "Hero"), Yellow = Vector (X, Y, Z coordinates).',
          th: 'Unreal ใช้ระบบสีที่ชัดเจนมาก: สีแดง = Boolean (ใช่หรือไม่ใช่), สีฟ้า = Integer (เลขจำนวนเต็ม เช่น 1, 2, 3), สีเขียว = Float (เลขทศนิยม เช่น 99.5), สีชมพู = String (ข้อความ), สีเหลือง = Vector (พิกัด X, Y, Z)',
        },
        inspectorData: {
          componentName: 'Blueprint Variable Types',
          properties: [
            { name: 'Red Pin', value: 'Boolean (True / False)', hint: 'IsAlive, HasKey' },
            { name: 'Green Pin', value: 'Float (Decimals)', hint: 'Health (100.0), Speed (600.0)' },
            { name: 'Cyan Pin', value: 'Integer (Whole numbers)', hint: 'CoinCount (15), Ammo (30)' },
            { name: 'Yellow Pin', value: 'Vector (3D Coordinates)', hint: 'TargetLocation (X, Y, Z)' },
          ],
        },
        diagramType: 'flow',
      },
      {
        stepNumber: 2,
        title: {
          en: 'Creating a Health Check with Branch',
          th: 'สร้างระบบตรวจเช็คพลังชีวิตด้วยโหนด Branch',
        },
        explanation: {
          en: 'Drag your Health variable into the graph as "Get Health". Drag off its pin and search for "<= (Less Equal)". Set the second value to 0. Connect the red result boolean pin into a "Branch" node.',
          th: 'ลากตัวแปร Health เข้ามากราฟแบบ "Get Health" จากนั้นลากหมุดสีเขียวออกมาแล้วพิมพ์ค้นหา "<= (Less Equal)" ตั้งค่าเปรียบเทียบกับ 0 นำผลลัพธ์หมุดสีแดงต่อเข้าช่อง Condition ของโหนด "Branch"',
        },
        diagramType: 'blueprint',
      },
    ],
    codeExamples: [
      {
        id: 'unreal-health-branch',
        title: 'Visual Blueprint Logic for Taking Damage',
        language: 'blueprint',
        code: `// Blueprint Visual Flow:
[Custom Event: TakeDamage(Amount)]
         │
         ▼
[Set Health = Health - Amount]
         │
         ▼
[Branch] ─── Condition: (Health <= 0.0) ?
   ├── True ───> [Print String: "Player Died! Restarting Level..."]
   └── False ──> [Print String: "Player took damage, still fighting!"]`,
        explanation: {
          en: [
            'TakeDamage(Amount): When an enemy hits you, it passes the damage number into this event.',
            'Set Health = Health - Amount: Deducts the damage from your current health variable.',
            'Branch Node: Checks if Health is now 0 or below.',
            'True Pin: Runs death sequence, disables input, or triggers game over.',
            'False Pin: Continues normal gameplay, flashes red screen indicator.',
          ],
          th: [
            'TakeDamage(Amount): เมื่อศัตรูฟัน จะส่งตัวเลขความเสียหายเข้ามาที่ Event นี้',
            'Set Health = Health - Amount: หักลบพลังชีวิตปัจจุบันด้วยความเสียหาย',
            'Branch Node: เช็คเงื่อนไขว่าพลังชีวิตเหลือ 0 หรือติดลบหรือไม่',
            'True: ถ้าเลือดหมด สั่งเล่นแอนิเมชันล้มลงและขึ้นหน้า Game Over',
            'False: ถ้ารอดชีวิต ให้เล่นเสียงร้องและแสดงขอบจอสีแดงเตือน',
          ],
        },
      },
    ],
    practiceChecklist: [
      {
        id: 'u2-p1',
        task: {
          en: 'Match the colors: Green = Float (Decimals), Red = Boolean (True/False)',
          th: 'จับคู่สีให้ถูกต้อง: เขียว = Float (ทศนิยม), แดง = Boolean (จริง/เท็จ)',
        },
      },
      {
        id: 'u2-p2',
        task: {
          en: 'Explain why a Branch node has both True and False execution output pins.',
          th: 'อธิบายว่าทำไมโหนด Branch ถึงมีสายออกทั้งช่อง True และ False',
        },
        hints: {
          en: 'Because it splits execution depending on whether the test condition passed or failed.',
          th: 'เพราะมันคือจุดแยกทางเลือกระหว่างกรณีที่เงื่อนไขเป็นจริง กับกรณีที่เงื่อนไขเป็นเท็จ',
        },
      },
    ],
    miniChallenge: {
      title: {
        en: 'Locked Door Blueprint Logic',
        th: 'ท้าทาย: ตรรกะประตูที่ล็อกด้วยกุญแจ',
      },
      description: {
        en: 'You want a door to open when the player presses "E", but ONLY IF they have the key (HasKey = True). What node should you plug between the E-key Event and the OpenDoor function?',
        th: 'คุณต้องการให้ประตูกลเปิดเมื่อผู้เล่นกดปุ่ม "E" แต่มีเงื่อนไขว่าผู้เล่นต้องมีกุญแจ (HasKey = True) ต้องใช้โหนดใดคั่นระหว่างปุ่ม E กับฟังก์ชันเปิดประตู?',
      },
      difficulty: 1,
      hints: {
        en: 'Use a Branch node with HasKey plugged into Condition!',
        th: 'ใช้โหนด Branch โดยต่อค่า HasKey เข้าที่ช่อง Condition',
      },
      solution: 'A Branch node! Event [E] -> Branch (Condition = HasKey) -> True Pin connects to OpenDoor! If False -> Print "Door is locked, find the key!".',
    },
    commonMistakes: [
      {
        title: {
          en: 'Using Integer instead of Float for smoothly changing game values like Health or Speed',
          th: 'ใช้ Integer แทน Float สำหรับค่าที่เปลี่ยนแปลงนุ่มนวล เช่น พลังชีวิตหรือความเร็ว',
        },
        problem: {
          en: 'Damage over time (poison) or stamina regen doesn\'t calculate fractional amounts (e.g. 0.5 HP per second).',
          th: 'สถานะพิษลดเลือดทีละน้อย (เช่น 0.5 ต่อวินาที) คำนวณไม่ได้เพราะ Integer เก็บได้แค่จำนวนเต็ม',
        },
        cause: {
          en: 'Integers can only store whole numbers like 1, 2, 3. Anything fractional like 0.7 gets rounded down to 0.',
          th: 'Integer เก็บได้เฉพาะเลขจำนวนเต็ม ทศนิยมเช่น 0.7 จะถูกปัดทิ้งกลายเป็น 0 ทันที',
        },
        solution: {
          en: 'Use Float (Green pin) for health, speed, timers, and distances.',
          th: 'เลือกใช้ Float (หมุดสีเขียว) เสมอสำหรับพลังชีวิต ความเร็ว เวลา และระยะทาง',
        },
      },
    ],
    quiz: [
      {
        id: 'uq2-1',
        question: {
          en: 'What color is a Float variable pin in Unreal Engine Blueprints?',
          th: 'หมุดตัวแปรชนิด Float ใน Unreal Engine Blueprint มีสีอะไร?',
        },
        options: {
          en: ['Green', 'Red', 'Cyan', 'Purple'],
          th: ['สีเขียว', 'สีแดง', 'สีฟ้า', 'สีม่วง'],
        },
        correctAnswer: 0,
        explanation: {
          en: 'Float is color-coded green in Unreal Engine for instant visual recognition.',
          th: 'Unreal Engine กำหนดให้ตัวเลขทศนิยม (Float) ใช้สีเขียวเสมอ เพื่อให้สังเกตได้ทันทีด้วยสายตา',
        },
      },
      {
        id: 'uq2-2',
        question: {
          en: 'Which node in Blueprints functions as an If/Else conditional statement?',
          th: 'โหนดใดใน Blueprint ที่ทำหน้าที่เหมือนคำสั่งเงื่อนไข If / Else ในการเขียนโปรแกรม?',
        },
        options: {
          en: ['Branch', 'Sequence', 'Delay', 'SpawnActor'],
          th: ['Branch', 'Sequence', 'Delay', 'SpawnActor'],
        },
        correctAnswer: 0,
        explanation: {
          en: 'The Branch node checks a boolean condition and routes execution flow through either the True or False execution pin.',
          th: 'โหนด Branch ทำหน้าที่ตรวจสอบเงื่อนไข ถ้าเป็นจริงจะส่งคำสั่งไปทางเส้น True ถ้าเป็นเท็จจะส่งไปทางเส้น False',
        },
      },
    ],
    summary: {
      en: [
        'Variables hold game state: Health, Ammo, Score, Inventory.',
        'Colors guide types: Red = Boolean, Cyan = Integer, Green = Float, Yellow = Vector.',
        'Branch nodes evaluate conditions to split gameplay outcomes.',
        'Visual scripting delivers the exact same computational logic as written code.',
      ],
      th: [
        'ตัวแปรทำหน้าที่เก็บสถานะของเกม: พลังชีวิต, กระสุน, คะแนน, ไอเทม',
        'ท่องจำสี: แดง = Boolean (จริง/เท็จ), ฟ้า = Integer (จำนวนเต็ม), เขียว = Float (ทศนิยม), เหลือง = Vector (พิกัด)',
        'โหนด Branch ใช้ตัดสินใจแยกทางเลือกระหว่าง True หรือ False',
        'การเขียนโปรแกรมด้วยภาพ (Visual Scripting) มีพลังและตรรกะเทียบเท่ากับการพิมพ์โค้ดทุกประการ',
      ],
    },
    prevLessonId: 'unreal-zero-001',
  },
];
