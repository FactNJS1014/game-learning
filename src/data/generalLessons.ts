import { Lesson } from '../types';

export const generalLessons: Lesson[] = [
  {
    id: 'general-zero-001',
    engine: 'general',
    level: 'zero',
    lessonNumber: 1,
    slug: 'the-anatomy-of-a-game-loop',
    title: {
      en: 'The Anatomy of a Game Loop: How Games Tick at 60 FPS',
      th: 'กายวิภาคของ Game Loop: เบื้องหลังการทำงาน 60 เฟรมต่อวินาทีของเกม',
    },
    shortDescription: {
      en: 'Understand how video games fundamentally differ from standard software. Discover the infinite loop of Input, Update, and Render.',
      th: 'เข้าใจความแตกต่างพื้นฐานระหว่างเกมกับโปรแกรมทั่วไป ค้นพบการทำงานของวงลูปไม่รู้จบ: รับค่าปุ่ม -> อัปเดตตรรกะ -> วาดภาพกราฟิก',
    },
    estimatedMinutes: 20,
    tags: ['Zero', 'Architecture', 'Game Loop', 'FPS', 'Delta Time'],
    startFromZero: true,
    objectives: {
      en: [
        'Understand why games run in an infinite loop while normal apps wait for clicks',
        'Learn the 3 core phases of every frame: Input, Physics/Logic Update, and Render',
        'Understand what Frame Rate (FPS) and Delta Time (dt) actually mean mathematically',
        'Learn why game engines use separate fixed updates for physics simulations',
      ],
      th: [
        'เข้าใจว่าทำไมเกมต้องรันลูปต่อเนื่องตลอดเวลา ต่างจากแอปทั่วไปที่นอนรอคนกดปุ่ม',
        'เข้าใจ 3 ขั้นตอนหลักใน 1 เฟรมภาพ: รับค่าปุ่ม, อัปเดตระบบ/ฟิสิกส์, และวาดภาพขึ้นจอ',
        'เข้าใจความหมายทางคณิตศาสตร์ของอัตราเฟรมเรต (FPS) และ Delta Time (dt)',
        'เข้าใจว่าทำไมระบบฟิสิกส์จึงต้องแยกคำนวณใน Fixed Update ต่างหาก',
      ],
    },
    prerequisites: {
      en: ['No prerequisites needed.'],
      th: ['ไม่ต้องมีพื้นฐานใดๆ'],
    },
    zeroExplanation: {
      what: {
        en: 'A Game Loop is an endless while-loop that runs continuously until the player exits the game. In each cycle (frame), it checks inputs, updates object positions, calculates AI decisions, and draws the updated world to the monitor.',
        th: 'Game Loop คือวงรอบการทำงานซ้ำแบบไม่รู้จบ (While Loop) ที่ทำงานตลอดเวลาจนกว่าจะปิดเกม ในแต่ละรอบจะตรวจปุ่มกด คำนวณตำแหน่งวัตถุ ประมวลผลสมอง AI และวาดภาพใหม่ส่งไปยังหน้าจอ',
      },
      why: {
        en: 'Unlike Word or Excel which sit dormant until you type, a game world is alive! Enemies walk, smoke rises, and gravity pulls even when the player is completely AFK.',
        th: 'ต่างจากโปรแกรมออฟฟิศที่หยุดรอคนพิมพ์ เกมมีโลกที่มีชีวิต! ศัตรูยังคงเดินตรวจตรา ควันไฟยังคงลอย และแรงโน้มถ่วงยังคงทำงานแม้ผู้เล่นจะปล่อยมือจากจอยก็ตาม',
      },
      how: {
        en: 'The CPU computes changes during Update, then sends draw calls to the GPU to paint pixels on your screen. If this cycle completes in 16.6 milliseconds, the game runs at 60 FPS.',
        th: 'ซีพียู (CPU) จะคำนวณการเปลี่ยนแปลงในฟังก์ชัน Update แล้วส่งคำสั่งให้การ์ดจอ (GPU) ระบายสีเม็ดพิกเซลลงบนจอ หากทำทั้งหมดนี้เสร็จภายใน 16.6 มิลลิวินาที เกมจะวิ่งที่ 60 FPS อย่างลื่นไหล',
      },
      when: {
        en: 'Every single video game ever programmed — from Pong in 1972 to Elden Ring today — operates on a Game Loop.',
        th: 'วิดีโอเกมทุกเกมบนโลก ตั้งแต่เกม Pong ยุค 1972 ไปจนถึง Elden Ring ในปัจจุบัน ล้วนทำงานอยู่บน Game Loop ทั้งสิ้น',
      },
    },
    diagram: {
      type: 'game-loop',
      title: {
        en: 'The Universal Game Loop Cycle',
        th: 'วงจร Game Loop สากล',
      },
      description: {
        en: '1. Process Input -> 2. Update Gameplay & AI -> 3. Calculate Physics -> 4. Render Frame to Display -> Repeat!',
        th: '1. อ่านปุ่มกด -> 2. อัปเดตกฎเกมและ AI -> 3. คำนวณแรงฟิสิกส์ -> 4. วาดภาพขึ้นจอแสดงผล -> วนลูปซ้ำ!',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Calculating Delta Time (dt)',
          th: 'การคำนวณเวลาส่วนต่าง Delta Time (dt)',
        },
        explanation: {
          en: 'Computers run at varying speeds. If one player has 60 FPS, their frame takes 0.0166 seconds. If another has 120 FPS, their frame takes 0.0083 seconds. Delta Time ensures movement speed remains identical on both machines.',
          th: 'คอมพิวเตอร์แต่ละเครื่องมีความแรงไม่เท่ากัน เครื่อง 60 FPS ใช้เวลา 0.0166 วินาทีต่อเฟรม ส่วนเครื่อง 120 FPS ใช้เวลาเพียง 0.0083 วินาที ค่า Delta Time จึงเป็นตัวคูณสำคัญที่ทำให้ตัวละครวิ่งด้วยความเร็วเท่ากันบนทุกเครื่อง',
        },
        diagramType: 'flow',
      },
    ],
    codeExamples: [
      {
        id: 'generic-game-loop',
        title: 'Conceptual Pseudo-code of an Engine Loop',
        language: 'csharp',
        code: `// Universal Game Loop architecture:
while (gameIsRunning)
{
    float currentFrameTime = GetCurrentTime();
    float deltaTime = currentFrameTime - lastFrameTime;
    lastFrameTime = currentFrameTime;

    // 1. Process Hardware Inputs (Keyboard, Controller, Mouse)
    ProcessInput();

    // 2. Update Game State (Player, Enemies, Bullets, Quests)
    UpdateWorld(deltaTime);

    // 3. Update Physics in fixed deterministic steps
    SimulatePhysics();

    // 4. Render graphics onto screen buffer
    RenderGraphics();
}`,
        explanation: {
          en: [
            'while (gameIsRunning): The heartbeat loop that stays active until quitting.',
            'deltaTime: Measures elapsed real-world time between current and previous frame.',
            'RenderGraphics(): Sends vertices, textures, and lighting shaders to the GPU.',
          ],
          th: [
            'while (gameIsRunning): ลูปหลักที่เปรียบเหมือนจังหวะหัวใจเต้นของเกม',
            'deltaTime: วัดเวลาจริงที่ผ่านไประหว่างเฟรมปัจจุบันกับเฟรมก่อนหน้า',
            'RenderGraphics(): ส่งข้อมูล 3D และแสงเงาไปให้การ์ดจอแสดงผล',
          ],
        },
      },
    ],
    practiceChecklist: [
      {
        id: 'g1-p1',
        task: {
          en: 'Calculate: If a game runs at 30 FPS, how long is one single frame in milliseconds? (1000 / 30)',
          th: 'คำนวณ: ถ้าเกมวิ่งที่ 30 FPS หนึ่งเฟรมใช้เวลาประมาณกี่มิลลิวินาที? (1000 / 30)',
        },
        hints: {
          en: '1000 ms / 30 frames = 33.3 milliseconds per frame.',
          th: '1000 มิลลิวินาที / 30 เฟรม = ประมาณ 33.3 มิลลิวินาทีต่อเฟรม',
        },
      },
    ],
    miniChallenge: {
      title: {
        en: 'Framerate Spike Scenario',
        th: 'ท้าทาย: เมื่อเกิดอาการเฟรมเรตตกกระตุก',
      },
      description: {
        en: 'If a massive explosion causes the frame time to spike from 16ms to 200ms for one frame, what happens to deltaTime during that frame?',
        th: 'หากเกิดระเบิดใหญ่ในฉากจนทำให้เวลาเฟรมกระโดดจาก 16ms เป็น 200ms ชั่วขณะ ค่า deltaTime ในเฟรมนั้นจะมีค่าเท่าใด?',
      },
      difficulty: 1,
      hints: {
        en: 'Delta time measures the time that just elapsed: 0.200 seconds!',
        th: 'Delta time คือเวลาที่เพิ่งผ่านไป: 0.200 วินาที!',
      },
      solution: 'Delta time becomes 0.200s! If physics isn\'t clamped, objects might jump forward too far in a single frame. This is why modern engines clamp maximum delta time!',
    },
    commonMistakes: [
      {
        title: {
          en: 'Putting heavy calculations or file downloads inside the main frame loop',
          th: 'ใส่การคำนวณหนักๆ หรือดาวน์โหลดไฟล์ค้างไว้ในลูปหลักของเกม',
        },
        problem: {
          en: 'The game freezes and locks up completely ("Application Not Responding").',
          th: 'หน้าจอเกมค้าง นิ่งสนิท และขึ้นว่าโปรแกรมไม่ตอบสนอง',
        },
        cause: {
          en: 'Because the loop is synchronous, the GPU cannot draw the next frame until your heavy task finishes.',
          th: 'เพราะ Game Loop ต้องรอให้ทุกคำสั่งในรอบนั้นเสร็จก่อนถึงจะวาดภาพใหม่ได้ หากมีคำสั่งค้าง จอจะหยุดวาดทันที',
        },
        solution: {
          en: 'Use asynchronous operations (Async/Await, Coroutines, or Background Threads) for loading files or network requests.',
          th: 'ใช้ระบบ Asynchronous (เช่น Coroutine หรือ Thread เบื้องหลัง) สำหรับการโหลดไฟล์หรือดึงข้อมูลจากอินเทอร์เน็ต',
        },
      },
    ],
    quiz: [
      {
        id: 'gq1',
        question: {
          en: 'How many milliseconds does the CPU and GPU have to finish a frame if the game targets a smooth 60 FPS?',
          th: 'หากต้องการให้เกมรันได้อย่างลื่นไหลที่ 60 FPS เครื่องมีเวลาประมวลผลต่อ 1 เฟรมไม่เกินกี่มิลลิวินาที?',
        },
        options: {
          en: ['16.6 milliseconds', '100 milliseconds', '1.0 millisecond', '500 milliseconds'],
          th: ['16.6 มิลลิวินาที', '100 มิลลิวินาที', '1.0 มิลลิวินาที', '500 มิลลิวินาที'],
        },
        correctAnswer: 0,
        explanation: {
          en: '1 second = 1000 milliseconds. 1000 / 60 frames = 16.66 ms per frame budget.',
          th: '1 วินาทีมี 1,000 มิลลิวินาที นำมาหาร 60 เฟรม จะได้เวลาประมาณ 16.66 มิลลิวินาทีต่อเฟรม',
        },
      },
    ],
    summary: {
      en: [
        'Games run on an active Game Loop: Input -> Update -> Physics -> Render.',
        'Delta Time guarantees objects move at the same speed regardless of computer framerates.',
        'To achieve 60 FPS, all CPU and GPU work must complete within 16.6 milliseconds per frame.',
      ],
      th: [
        'เกมรันด้วย Game Loop ที่มีชีวิต: รับปุ่ม -> อัปเดตสถานะ -> ฟิสิกส์ -> วาดภาพขึ้นจอ',
        'Delta Time รับประกันว่าวัตถุจะเคลื่อนที่ด้วยความเร็วเท่ากันบนคอมพิวเตอร์ทุกเครื่อง',
        'เป้าหมาย 60 FPS หมายถึงทุกระบบต้องประมวลผลเสร็จในงบเวลา 16.6 มิลลิวินาทีต่อเฟรม',
      ],
    },
  },
];
