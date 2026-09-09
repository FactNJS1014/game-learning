import { Lesson } from '../types';

export const unityLessons: Lesson[] = [
  // LEVEL 0: UNITY ABSOLUTE BEGINNER
  {
    id: 'unity-zero-001',
    engine: 'unity',
    level: 'zero',
    lessonNumber: 1,
    slug: 'what-is-unity',
    title: {
      en: 'What is Unity? Understanding the Engine',
      th: 'Unity คืออะไร? ทำความเข้าใจ Game Engine ตั้งแต่ศูนย์',
    },
    shortDescription: {
      en: 'Discover what a game engine actually does, why millions of developers choose Unity, and how modern games are constructed.',
      th: 'เรียนรู้ว่า Game Engine คืออะไร ทำหน้าที่อะไรในคอมพิวเตอร์ และทำไมผู้พัฒนาเกมทั่วโลกถึงเลือกใช้ Unity',
    },
    estimatedMinutes: 20,
    tags: ['Zero', 'Game Engine', 'Overview', 'Concept'],
    startFromZero: true,
    objectives: {
      en: [
        'Understand what software qualifies as a Game Engine',
        'Learn the core systems inside Unity (Rendering, Physics, Audio, Scripting)',
        'Understand the difference between making a game from scratch vs using an engine',
        'Identify what types of games Unity is best suited for (2D, 3D, Mobile, VR, PC)',
      ],
      th: [
        'เข้าใจความหมายและบทบาทของ Game Engine',
        'รู้จักระบบหลักภายใน Unity เช่น การแสดงผลภาพ (Rendering), ระบบฟิสิกส์, เสียง, และโค้ด',
        'เข้าใจความแตกต่างระหว่างการเขียนเกมเองทั้งหมดกับการใช้ Game Engine',
        'รู้จักประเภทเกมที่สร้างด้วย Unity ได้อย่างมีประสิทธิภาพ (2D, 3D, Mobile, VR, PC)',
      ],
    },
    prerequisites: {
      en: ['No prior programming or game development knowledge needed!'],
      th: ['ไม่ต้องมีพื้นฐานเขียนโปรแกรมหรือสร้างเกมมาก่อนเลย เริ่มจากศูนย์ 100%'],
    },
    zeroExplanation: {
      what: {
        en: 'A Game Engine is a software framework with built-in tools that handles the hardest parts of game creation: drawing graphics on your monitor, calculating gravity and collisions, playing sound effects, and running your gameplay logic.',
        th: 'Game Engine คือโปรแกรมรวมศูนย์เครื่องมือที่ช่วยจัดการงานซับซ้อนที่สุดของเกมให้คุณ: วาดภาพ 2D/3D บนหน้าจอ, คำนวณแรงโน้มถ่วงและการชน, เล่นเสียง, และประมวลผลกฎเกณฑ์ของเกม',
      },
      why: {
        en: 'Without an engine, you would have to write hundreds of thousands of lines of low-level code just to talk to your GPU (graphics card) and detect if two boxes touch. Unity gives you this foundation so you can focus on fun game design.',
        th: 'หากไม่มี Engine คุณต้องเขียนโค้ดภาษาเครื่องหลายแสนบรรทัดเพื่อสั่งการการ์ดจอ และคำนวณคณิตศาสตร์เพื่อตรวจจับว่ากล่องชนกันหรือไม่ Unity จัดเตรียมสิ่งเหล่านี้ไว้ให้หมดแล้วเพื่อให้เราโฟกัสกับการออกแบบเกมที่สนุก',
      },
      how: {
        en: 'Unity provides a visual editor where you assemble worlds visually, and a code editor (using C#) where you write instructions that tell objects what to do when keys are pressed or events happen.',
        th: 'Unity ให้พื้นที่ทำงานแบบกราฟิกที่คุณสามารถลากโมเดลและวางฉากได้ด้วยตาเปล่า ควบคู่กับโปรแกรมเขียนโค้ด (ภาษา C#) เพื่อสั่งการให้วัตถุเคลื่อนไหวเมื่อผู้เล่นกดปุ่ม',
      },
      when: {
        en: 'Use Unity whenever you want to build cross-platform 2D/3D games, mobile games, indie PC titles, XR/VR simulations, or rapid prototypes with an enormous asset ecosystem.',
        th: 'เลือกใช้ Unity เมื่อคุณต้องการสร้างเกมที่เล่นได้หลายเครื่อง (PC, Mobile, Console, VR), เกม 2D และ 3D สไตล์อินดี้ หรือเกมที่ต้องการใช้ Asset สำเร็จรูปจำนวนมากจาก Unity Asset Store',
      },
    },
    diagram: {
      type: 'game-loop',
      title: {
        en: 'How the Game Engine Loop Works',
        th: 'การทำงานของ Game Engine Loop (วัฏจักรการทำงานของเกม)',
      },
      description: {
        en: 'Every frame (60 times a second), the engine reads input, updates physics, runs your scripts, and draws the final image to your screen.',
        th: 'ทุกๆ เฟรม (60 ครั้งต่อวินาที) Engine จะอ่านปุ่มที่กด, คำนวณฟิสิกส์, สั่งให้โค้ดทำงาน, และวาดภาพใหม่ลงบนหน้าจอ',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Understanding the 4 Core Pillars of Unity',
          th: 'ทำความเข้าใจ 4 เสาหลักของ Unity',
        },
        explanation: {
          en: 'Unity is built around: 1) The Visual Editor (arranging assets), 2) The Physics Engine (simulating mass and gravity), 3) The Graphics Pipeline (rendering lights and materials), and 4) The Scripting Engine (C# logic).',
          th: 'ระบบหลัก 4 ส่วนของ Unity ประกอบด้วย: 1) ตัวแก้ไขหน้าจอ (จัดวางฉาก), 2) ระบบฟิสิกส์ (แรงโน้มถ่วง แรงชน), 3) ระบบการแสดงผลภาพ (แสง เงา และวัสดุ), 4) ระบบสคริปต์ (เขียนกฎด้วย C#)',
        },
        diagramType: 'flow',
      },
      {
        stepNumber: 2,
        title: {
          en: 'The Component-Based Architecture',
          th: 'สถาปัตยกรรมแบบ Component (ประกอบชิ้นส่วน)',
        },
        explanation: {
          en: 'In Unity, everything in your game is an empty container called a "GameObject". You give it abilities by adding "Components" — like adding a Camera lens, a Rigidbody for gravity, or your custom script for movement.',
          th: 'ใน Unity วัตถุทุกอย่างในเกมจะเรียกว่า "GameObject" ซึ่งเริ่มต้นเหมือนกล่องเปล่า เราจะเพิ่มความสามารถให้มันโดยการติด "Components" เช่น ใส่กล้อง, ใส่แรงโน้มถ่วง, หรือใส่โค้ดเดินของผู้เล่น',
        },
        diagramType: 'hierarchy',
      },
    ],
    codeExamples: [
      {
        id: 'unity-hello-world',
        title: 'Your First Unity C# Script',
        language: 'csharp',
        code: `using UnityEngine;

// In Unity, your script name MUST match your file name!
public class HelloWorld : MonoBehaviour
{
    // Start is called once when the game starts or object is spawned
    void Start()
    {
        Debug.Log("Welcome to GameDev Academy! Unity is running.");
    }

    // Update is called once every single frame (e.g. 60 times per second)
    void Update()
    {
        // This is where real-time continuous gameplay happens!
    }
}`,
        explanation: {
          en: [
            'using UnityEngine: Tells C# we want to use Unity game engine tools and features.',
            'public class HelloWorld : MonoBehaviour: HelloWorld is the name of our script component. MonoBehaviour gives it game engine lifecycle powers.',
            'void Start(): A built-in Unity event that runs automatically on the first frame.',
            'Debug.Log(): Prints a message to Unity Console window for debugging.',
            'void Update(): Runs repeatedly 60+ times each second for smooth movement and input.',
          ],
          th: [
            'using UnityEngine: คำสั่งเรียกใช้ฟังก์ชันและเครื่องมือเฉพาะของ Unity',
            'public class HelloWorld : MonoBehaviour: สร้าง Component ชื่อ HelloWorld โดย MonoBehaviour ทำให้มันสามารถเกาะกับ GameObject และทำงานในเกมได้',
            'void Start(): ฟังก์ชันพิเศษที่ Unity จะเรียกทำงานอัตโนมัติเพียงครั้งเดียวตอนเริ่มเกม',
            'Debug.Log(): พิมพ์ข้อความลงในแท็บ Console เพื่อตรวจสอบการทำงาน',
            'void Update(): ฟังก์ชันที่จะถูกเรียกซ้ำๆ ทุกเฟรม (60+ ครั้งต่อวินาที) เหมาะสำหรับตรวจจับการกดปุ่มและการเคลื่อนที่',
          ],
        },
      },
    ],
    practiceChecklist: [
      {
        id: 'p1',
        task: {
          en: 'Write down the 4 core systems of a game engine (Graphics, Physics, Audio, Scripting)',
          th: 'จดจำและระบุ 4 ระบบหลักของ Game Engine (ภาพ, ฟิสิกส์, เสียง, โค้ด)',
        },
        hints: {
          en: 'Think about what a player sees, hears, touches, and controls.',
          th: 'นึกถึงสิ่งที่ผู้เล่นเห็น ได้ยิน สัมผัสชน และควบคุม',
        },
      },
      {
        id: 'p2',
        task: {
          en: 'Memorize the rule: GameObject is the container, Components give it abilities',
          th: 'จำกฎสำคัญ: GameObject คือกล่องเปล่า ส่วน Component คือสิ่งที่มอบความสามารถ',
        },
      },
    ],
    miniChallenge: {
      title: {
        en: 'Engine Prediction Challenge',
        th: 'ท้าทาย: ทายการทำงานของ Game Loop',
      },
      description: {
        en: 'If a game runs at 60 FPS (Frames Per Second), how many times will the Update() function execute in 5 seconds of gameplay?',
        th: 'หากเกมรันที่ความเร็ว 60 FPS (เฟรมต่อวินาที) ฟังก์ชัน Update() จะถูกเรียกทำงานทั้งหมดกี่ครั้งในเวลา 5 วินาที?',
      },
      difficulty: 1,
      hints: {
        en: 'Multiply frames per second by total seconds: 60 * 5',
        th: 'เอาจำนวนเฟรมต่อวินาที คูณด้วยจำนวนวินาที: 60 * 5',
      },
      solution: '300 times! (60 frames/sec * 5 seconds = 300 executions). This is why we must write efficient code inside Update()!',
    },
    commonMistakes: [
      {
        title: {
          en: 'Assuming Unity requires massive programming knowledge to start',
          th: 'เข้าใจผิดว่าต้องเก่งเขียนโปรแกรมระดับสูงก่อนถึงจะเริ่มได้',
        },
        problem: {
          en: 'Beginners feel intimidated by C# before creating their first scene.',
          th: 'ผู้เริ่มต้นรู้สึกกลัวโค้ด C# จนไม่กล้าเปิดโปรแกรม',
        },
        cause: {
          en: 'Viewing game development as pure mathematical coding rather than visual assembly.',
          th: 'มองว่าการทำเกมคือการพิมพ์โค้ดล้วนๆ ทั้งที่จริงแล้ว Unity มีส่วน Visual ที่ลากวางได้',
        },
        solution: {
          en: 'Start with visual layout, placing 3D cubes, lights, and materials first. Code comes as simple 5-line behaviors!',
          th: 'เริ่มจากการวางบล็อก จัดแสง ใส่สีในฉากให้สนุกก่อน แล้วค่อยเติมโค้ดสั้นๆ แค่ไม่กี่บรรทัดเพื่อสั่งให้มันขยับ',
        },
      },
    ],
    quiz: [
      {
        id: 'q1',
        question: {
          en: 'What is the primary role of a Game Engine?',
          th: 'หน้าที่หลักของ Game Engine คือข้อใด?',
        },
        options: {
          en: [
            'To draw images, handle physics, manage audio, and execute gameplay logic',
            'Only to edit 3D meshes and export textures',
            'To replace the need for computer graphics cards',
            'To automatically write entire games without human direction',
          ],
          th: [
            'จัดการวาดภาพ, คำนวณฟิสิกส์, จัดการเสียง, และประมวลผลโค้ดของเกม',
            'เป็นเพียงโปรแกรมปั้นโมเดล 3D และส่งออกรูปภาพ',
            'ทำหน้าที่แทนการ์ดจอของเครื่องคอมพิวเตอร์',
            'เขียนเกมทั้งหมดให้เสร็จอัตโนมัติโดยคนไม่ต้องทำอะไร',
          ],
        },
        correctAnswer: 0,
        explanation: {
          en: 'A game engine provides the integrated foundation (rendering, physics, audio, input, scripting) so creators do not have to reinvent the wheel.',
          th: 'Game Engine ทำหน้าที่เป็นโครงสร้างพื้นฐานที่รวมทั้งการวาดภาพ ฟิสิกส์ เสียง และโค้ดเข้าด้วยกัน เพื่อให้นักพัฒนาต่อยอดสร้างเกมได้ทันที',
        },
      },
      {
        id: 'q2',
        question: {
          en: 'In Unity, what is a GameObject?',
          th: 'ใน Unity วัตถุที่เรียกว่า "GameObject" คืออะไร?',
        },
        options: {
          en: [
            'A base container in the scene that holds components to define what it is',
            'A C# compiler file stored on your hard drive',
            'A special sound file played when pressing keys',
            'A paid plugin purchased from the Unity Asset Store',
          ],
          th: [
            'กล่องว่างหรือวัตถุตั้งต้นในฉาก ที่มี Components ติดอยู่เพื่อกำหนดคุณสมบัติ',
            'ไฟล์ตัวแปลงโค้ด C# บนฮาร์ดดิสก์',
            'ไฟล์เสียงพิเศษสำหรับเปิดเวลาผู้เล่นกดปุ่ม',
            'ปลั๊กอินแบบเสียเงินจาก Asset Store',
          ],
        },
        correctAnswer: 0,
        explanation: {
          en: 'Every entity in a Unity Scene is a GameObject. By attaching components (like Renderer, Collider, Rigidbody, Script), you give it visual form and behavior.',
          th: 'ทุกสิ่งทุกอย่างในฉากของ Unity คือ GameObject และจะเก่งขึ้นหรือแสดงผลได้ตาม Component ที่เราประกอบเข้าไป',
        },
      },
      {
        id: 'q3',
        question: {
          en: 'Which function in a Unity script executes repeatedly every frame?',
          th: 'ฟังก์ชันใดใน C# ของ Unity ที่จะถูกเรียกทำงานซ้ำๆ ทุกเฟรม (Frame)?',
        },
        options: {
          en: ['Update()', 'Start()', 'Awake()', 'OnDestroy()'],
          th: ['Update()', 'Start()', 'Awake()', 'OnDestroy()'],
        },
        correctAnswer: 0,
        explanation: {
          en: 'Update() is executed once per rendered frame, making it ideal for checking user keyboard input and moving characters continuously.',
          th: 'Update() ทำงานซ้ำทุกเฟรมภาพ จึงเหมาะกับการตรวจสอบการกดปุ่มและการเคลื่อนที่ของตัวละครอย่างต่อเนื่อง',
        },
      },
    ],
    summary: {
      en: [
        'Unity is a real-time game engine powering 2D, 3D, Mobile, PC, and VR games.',
        'GameObjects are empty containers; Components give them shape, physics, and behaviors.',
        'The Game Loop runs continually at 60+ FPS, calling Update() each frame.',
        'C# is the language used in Unity to program gameplay mechanics.',
      ],
      th: [
        'Unity คือ Game Engine ยอดนิยมระดับโลกที่รองรับทั้ง 2D, 3D, มือถือ, คอมพิวเตอร์ และ VR',
        'GameObject เปรียบเหมือนตัวเปล่า และ Component คืออุปกรณ์หรือความสามารถที่ใส่เข้าไป',
        'Game Loop ทำงานวนซ้ำตลอดเวลาที่ 60+ FPS โดยเรียกฟังก์ชัน Update() ในทุกๆ เฟรม',
        'C# คือภาษาโปรแกรมมิ่งที่ใช้สร้างระบบเกมและควบคุมวัตถุใน Unity',
      ],
    },
    nextLessonId: 'unity-zero-002',
  },

  {
    id: 'unity-zero-002',
    engine: 'unity',
    level: 'zero',
    lessonNumber: 2,
    slug: 'game-objects-and-transforms',
    title: {
      en: 'GameObjects & Transforms: The DNA of Everything in 3D',
      th: 'GameObject และ Transform: หัวใจและพิกัดตำแหน่งของทุกสิ่งในเกม',
    },
    shortDescription: {
      en: 'Master the 3 spatial coordinates (X, Y, Z), understand how position, rotation, and scale work, and build your first scene hierarchy.',
      th: 'เจาะลึกระบบพิกัด 3 มิติ (แกน X, Y, Z) เข้าใจตำแหน่ง การหมุน ขนาด และการจัดลำดับชั้น Parent-Child ในฉากเกม',
    },
    estimatedMinutes: 25,
    tags: ['Zero', 'Transform', 'Coordinates', 'Hierarchy'],
    startFromZero: true,
    objectives: {
      en: [
        'Understand 3D coordinate space: X (Right/Left), Y (Up/Down), Z (Forward/Back)',
        'Learn why EVERY single GameObject in Unity MUST have a Transform component',
        'Master Position, Rotation (degrees), and Scale (multiplier)',
        'Understand Parent-Child relationships and relative local coordinates',
      ],
      th: [
        'เข้าใจระบบแกน 3 มิติ: แกน X (ซ้าย/ขวา), แกน Y (ขึ้น/ลง), แกน Z (หน้า/หลัง)',
        'เข้าใจว่าทำไมทุก GameObject ใน Unity ต้องมี Component ที่ชื่อว่า Transform เสมอ',
        'เข้าใจค่า Position (ตำแหน่ง), Rotation (มุมหมุน), และ Scale (อัตราขยาย)',
        'เข้าใจความสัมพันธ์แบบพ่อแม่-ลูก (Parent-Child) และพิกัดสัมพัทธ์ (Local vs World Space)',
      ],
    },
    prerequisites: {
      en: ['Completed Lesson 01: What is Unity?'],
      th: ['ผ่านบทเรียนที่ 01: Unity คืออะไร'],
    },
    zeroExplanation: {
      what: {
        en: 'A Transform is a mandatory component attached to every GameObject that tracks where the object exists in 3D space (Position), which direction it is facing (Rotation), and how big it is (Scale).',
        th: 'Transform คือ Component บังคับที่มีอยู่ในทุก GameObject ทำหน้าที่บันทึกว่าวัตถุนี้อยู่ตรงไหนในโลก 3 มิติ (Position), หันหน้าไปทางไหน (Rotation), และมีขนาดใหญ่เท่าใด (Scale)',
      },
      why: {
        en: 'Without coordinates, a computer has no idea where to draw an object or where the player camera should look. Every tree, player, bullet, and sound origin requires a position.',
        th: 'หากไม่มีระบบพิกัด คอมพิวเตอร์จะไม่รู้เลยว่าจะต้องวาดตัวละครไว้ตรงไหน หรือกระสุนต้องพุ่งไปทิศใด Transform จึงเป็นเหมือนเลขบัตรประชาชนระบุตำแหน่งของวัตถุ',
      },
      how: {
        en: 'Unity uses 3 numbers (Vector3) for each: Position (X, Y, Z in meters), Rotation (X, Y, Z in degrees 0-360), and Scale (X, Y, Z where 1.0 is original size).',
        th: 'Unity ใช้ตัวเลข 3 ตัว (เรียกว่า Vector3): Position (X, Y, Z เป็นหน่วยเมตร), Rotation (องศาการหมุน 0-360), และ Scale (ตัวคูณขนาด โดย 1 คือขนาดปกติ 100%)',
      },
      when: {
        en: 'Whenever you move a player, rotate a vehicle steering wheel, spawn an item, or zoom a camera, you are reading and modifying the Transform.',
        th: 'ทุกครั้งที่คุณสั่งให้ตัวละครเดิน เลี้ยวรถ ปล่อยพลัง หรือซูมกล้อง คุณกำลังแก้ไขข้อมูลใน Transform อยู่เสมอ',
      },
    },
    diagram: {
      type: 'transform',
      title: {
        en: 'The 3D Coordinate Axis System in Unity',
        th: 'ระบบแกน 3 มิติใน Unity (X, Y, Z)',
      },
      description: {
        en: 'Red = X (Right + / Left -), Green = Y (Up + / Down -), Blue = Z (Forward + / Back -).',
        th: 'สีแดง = แกน X (ขวา + / ซ้าย -), สีเขียว = แกน Y (บน + / ล่าง -), สีน้ำเงิน = แกน Z (หน้า + / หลัง -)',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Viewing the Transform in the Inspector',
          th: 'ส่องดู Transform ในหน้าต่าง Inspector',
        },
        explanation: {
          en: 'Click on any object in your Hierarchy window. In the right-side Inspector window, the very first component at the top is always the Transform with Position, Rotation, and Scale.',
          th: 'คลิกที่วัตถุใดก็ได้ในหน้าต่าง Hierarchy ทางซ้าย แล้วดูที่หน้าต่าง Inspector ทางขวา คุณจะเห็น Transform อยู่บนสุดเสมอ พร้อมช่องใส่ค่า X, Y, Z',
        },
        inspectorData: {
          componentName: 'Transform',
          properties: [
            { name: 'Position', value: 'X: 0.00, Y: 1.00, Z: 0.00', hint: '1 meter above ground center' },
            { name: 'Rotation', value: 'X: 0.00, Y: 45.0, Z: 0.00', hint: 'Turned 45 degrees clockwise' },
            { name: 'Scale', value: 'X: 1.00, Y: 2.00, Z: 1.00', hint: 'Twice as tall as a normal cube' },
          ],
        },
        diagramType: 'inspector',
      },
      {
        stepNumber: 2,
        title: {
          en: 'Parenting Objects (Parent and Child)',
          th: 'การผูกวัตถุแบบแม่-ลูก (Parent & Child)',
        },
        explanation: {
          en: 'If you drag Object B onto Object A in the Hierarchy, Object B becomes a "Child". When the Parent moves, rotates, or scales, the Child automatically follows it! Example: A sword childed to a hand bone.',
          th: 'หากคุณลากวัตถุ B ไปวางทับบนวัตถุ A ใน Hierarchy วัตถุ B จะกลายเป็น "ลูก" ทันที เมื่อแม่ขยับ หมุน หรือย่อขยาย ลูกจะเคลื่อนตามไปด้วยโดยอัตโนมัติ เช่น ดาบที่ติดอยู่ที่มือของตัวละคร',
        },
        diagramType: 'hierarchy',
      },
    ],
    codeExamples: [
      {
        id: 'unity-move-transform',
        title: 'Moving a GameObject with Code',
        language: 'csharp',
        code: `using UnityEngine;

public class SimpleMover : MonoBehaviour
{
    // Public variables appear in Unity Inspector so you can tweak them without touching code!
    public float moveSpeed = 5.0f;

    void Update()
    {
        // Vector3.forward is a shorthand for new Vector3(0, 0, 1)
        // Time.deltaTime makes movement smooth and frame-rate independent!
        transform.Translate(Vector3.forward * moveSpeed * Time.deltaTime);
    }
}`,
        explanation: {
          en: [
            'public float moveSpeed = 5.0f;: Creates a decimal number variable you can adjust directly in the Unity Inspector GUI.',
            'transform.Translate(): Moves the current GameObject along a direction Vector.',
            'Vector3.forward: Means moving forward in the Blue Z-axis direction (0, 0, 1).',
            'Time.deltaTime: The time in seconds it took to complete the last frame (~0.016s at 60 FPS). Multiplying by this ensures the object moves 5 meters per real second, whether the game runs at 30 FPS or 240 FPS!',
          ],
          th: [
            'public float moveSpeed = 5.0f;: ตัวแปรความเร็วทศนิยม ซึ่งสามารถปรับค่าได้ทันทีในหน้าต่าง Inspector โดยไม่ต้องแก้โค้ด',
            'transform.Translate(): คำสั่งเลื่อนตำแหน่งของ GameObject ปัจจุบันไปตามทิศทาง',
            'Vector3.forward: คือทิศทางพุ่งไปข้างหน้าตามแกน Z สีน้ำเงิน (0, 0, 1)',
            'Time.deltaTime: เวลาของเฟรมก่อนหน้า (~0.016 วินาทีที่ 60 FPS) การคูณด้วยค่านี้จะทำให้ตัวละครเคลื่อนที่ 5 เมตรต่อ 1 วินาทีในโลกจริงอย่างแม่นยำ ไม่ว่าเครื่องคอมพิวเตอร์จะกระตุกหรือเร็วแค่ไหนก็ตาม',
          ],
        },
      },
    ],
    practiceChecklist: [
      {
        id: 'p2-1',
        task: {
          en: 'Identify the color of the 3 axes in Unity scene view (Red = X, Green = Y, Blue = Z)',
          th: 'จำแนกสีของ 3 แกนในหน้าจอ Unity (แดง = X, เขียว = Y, น้ำเงิน = Z)',
        },
      },
      {
        id: 'p2-2',
        task: {
          en: 'Predict what happens when you set Scale Y to 3 on a cube',
          th: 'บอกได้ว่าจะเกิดอะไรขึ้นเมื่อปรับค่า Scale Y เป็น 3 บนกล่อง Cube',
        },
        hints: {
          en: 'Y is the vertical axis, so it stretches upwards into a tall pillar.',
          th: 'แกน Y คือแนวตั้ง ดังนั้นกล่องจะยืดสูงขึ้นกลายเป็นเสาสูง 3 เท่า',
        },
      },
    ],
    miniChallenge: {
      title: {
        en: 'Parent-Child Coordinate Math',
        th: 'ท้าทาย: คำนวณพิกัดแม่และลูก',
      },
      description: {
        en: 'If a Parent car is at World Position (X: 10, Y: 0, Z: 0) and a Child passenger is at Local Position (X: 2, Y: 1, Z: 0), what is the passenger\'s absolute World X position?',
        th: 'หากรถคันแม่จอดอยู่ที่พิกัดโลก X: 10, Y: 0, Z: 0 และมีตัวละครลูกนั่งอยู่ในรถที่พิกัดสัมพันธ์ X: 2, Y: 1, Z: 0 ถามว่าตัวละครลูกอยู่ที่พิกัดแกน X ของโลกจริงเท่าใด?',
      },
      difficulty: 2,
      hints: {
        en: 'World Position = Parent World Position + Child Local Position',
        th: 'พิกัดโลก = พิกัดของแม่ + พิกัดภายในของลูก',
      },
      solution: 'X = 12! (10 + 2 = 12). If the car moves to X: 20, the passenger automatically shifts to X: 22 without you writing extra code!',
    },
    commonMistakes: [
      {
        title: {
          en: 'Forgetting Time.deltaTime in Update() movement',
          th: 'ลืมคูณ Time.deltaTime ในการเคลื่อนที่บนฟังก์ชัน Update()',
        },
        problem: {
          en: 'The player moves at warp speed or moves at completely different speeds on fast vs slow PCs.',
          th: 'ตัวละครวิ่งเร็วเกินไปจนทะลุฉาก หรือวิ่งเร็วไม่เท่ากันบนคอมพิวเตอร์แต่ละเครื่อง',
        },
        cause: {
          en: 'Without Time.deltaTime, you are moving 5 units EVERY FRAME. At 300 FPS, you move 1,500 units/second!',
          th: 'ถ้าไม่คูณ Time.deltaTime ตัวละครจะขยับ 5 เมตรทุกครั้งที่วาด 1 เฟรม ถ้าคอมเร็ว 300 FPS ตัวละครจะพุ่ง 1,500 เมตรในวินาทีเดียว!',
        },
        solution: {
          en: 'Always multiply speed by Time.deltaTime in Update(). (e.g. speed * Time.deltaTime)',
          th: 'คูณ Time.deltaTime กับค่าความเร็วเสมอเมื่อเขียนโค้ดใน Update()',
        },
      },
    ],
    quiz: [
      {
        id: 'q2-1',
        question: {
          en: 'Which axis in Unity represents the vertical (up and down) direction?',
          th: 'แกนใดใน Unity ที่แสดงทิศทางแนวตั้ง (ขึ้นและลง)?',
        },
        options: {
          en: ['Y Axis (Green)', 'X Axis (Red)', 'Z Axis (Blue)', 'W Axis (Purple)'],
          th: ['แกน Y (สีเขียว)', 'แกน X (สีแดง)', 'แกน Z (สีน้ำเงิน)', 'แกน W (สีม่วง)'],
        },
        correctAnswer: 0,
        explanation: {
          en: 'In Unity, Y is Up/Down, X is Right/Left, and Z is Forward/Backward.',
          th: 'ใน Unity แกน Y คือบน/ล่าง (เขียว), แกน X คือซ้าย/ขวา (แดง), และแกน Z คือหน้า/หลัง (น้ำเงิน)',
        },
      },
      {
        id: 'q2-2',
        question: {
          en: 'Why is Time.deltaTime essential when translating an object in Update()?',
          th: 'ทำไม Time.deltaTime จึงสำคัญมากเมื่อสั่งขยับวัตถุในฟังก์ชัน Update()?',
        },
        options: {
          en: [
            'It makes movement frame-rate independent so speed is consistent on all computers',
            'It prevents the object from rotating upside down',
            'It connects the object to the internet clock',
            'It automatically creates a 3D collider',
          ],
          th: [
            'ทำให้ความเร็วคงที่สม่ำเสมอบนทุกเครื่อง ไม่ขึ้นกับว่าเครื่องจะรันได้กี่เฟรมต่อวินาที',
            'ป้องกันไม่ให้วัตถุหมุนกลับหัว',
            'เชื่อมต่อตำแหน่งเข้ากับเวลานาฬิกาบนอินเทอร์เน็ต',
            'สร้างกล่อง Collider 3 มิติให้อัตโนมัติ',
          ],
        },
        correctAnswer: 0,
        explanation: {
          en: 'Time.deltaTime represents the fraction of a second since the last frame. Multiplying by it ensures speed is measured in units per real second.',
          th: 'Time.deltaTime แปลงการคำนวณให้เป็น "หน่วยต่อวินาทีในโลกจริง" ทำให้ผู้เล่นที่มีคอมแรง 144Hz หรือคอมเบา 30Hz วิ่งด้วยความเร็วเท่ากันอย่างยุติธรรม',
        },
      },
    ],
    summary: {
      en: [
        'Transform is the backbone of 3D games: Position, Rotation, and Scale.',
        'X = Red (Right), Y = Green (Up), Z = Blue (Forward).',
        'Parenting lets objects inherit movements and transformations naturally.',
        'Always multiply movement in Update() by Time.deltaTime.',
      ],
      th: [
        'Transform คือหัวใจของโลก 3D ประกอบด้วย Position (ตำแหน่ง), Rotation (มุมหมุน), และ Scale (ขนาด)',
        'ท่องจำ: X แดงขวา, Y เขียวบน, Z น้ำเงินหน้า',
        'ระบบ Parent-Child ช่วยให้วัตถุลูกเคลื่อนไหวตามวัตถุแม่ได้โดยไม่ต้องเขียนโค้ดเพิ่ม',
        'จำไว้เสมอ: เคลื่อนที่ใน Update() ต้องคูณด้วย Time.deltaTime',
      ],
    },
    prevLessonId: 'unity-zero-001',
    nextLessonId: 'unity-zero-003',
  },

  {
    id: 'unity-zero-003',
    engine: 'unity',
    level: 'zero',
    lessonNumber: 3,
    slug: 'unity-components-and-physics',
    title: {
      en: 'Components & Rigidbody: Adding Gravity and Collisions',
      th: 'Components และ Rigidbody: ปลุกวัตถุให้มีน้ำหนัก แรงโน้มถ่วง และการชน',
    },
    shortDescription: {
      en: 'Turn lifeless 3D boxes into physical objects that drop under gravity, bounce, and collide with obstacles using Rigidbody and Colliders.',
      th: 'เปลี่ยนก้อนโมเดลนิ่งๆ ให้กลายเป็นวัตถุที่มีแรงโน้มถ่วง ตกกระทบพื้น เด้ง และชนกับสิ่งกีดขวางได้จริงด้วย Rigidbody และ Collider',
    },
    estimatedMinutes: 25,
    tags: ['Zero', 'Physics', 'Rigidbody', 'Collider', 'Gravity'],
    startFromZero: true,
    objectives: {
      en: [
        'Understand the difference between visual meshes and physical bounds',
        'Learn what a Rigidbody does (mass, drag, gravity, velocity)',
        'Understand Colliders (Box, Sphere, Capsule, Mesh)',
        'Master the golden rule: If you want gravity or physics forces, add Rigidbody!',
      ],
      th: [
        'เข้าใจความแตกต่างระหว่างภาพที่มองเห็น (Mesh) กับขอบเขตการชน (Collider)',
        'เข้าใจหน้าที่ของ Rigidbody (มวล, แรงต้าน, แรงโน้มถ่วง, ความเร็ว)',
        'รู้จักประเภทของ Collider (กล่อง Box, ทรงกลม Sphere, แคปซูล Capsule)',
        'กฎเหล็กของฟิสิกส์ Unity: ถ้าต้องการให้น้ำหนักตกหรือชนกระเด็น ต้องใส่ Rigidbody!',
      ],
    },
    prerequisites: {
      en: ['Completed Lesson 02: GameObjects & Transforms'],
      th: ['ผ่านบทเรียนที่ 02: GameObject และ Transform'],
    },
    zeroExplanation: {
      what: {
        en: 'A Rigidbody is a component that places a GameObject under the control of Unity\'s physics engine (PhysX). A Collider is an invisible geometric shield around an object that detects when other objects hit it.',
        th: 'Rigidbody คือ Component ที่ส่งมอบวัตถุให้อยู่ภายใต้การควบคุมของระบบฟิสิกส์ (แรงโน้มถ่วง แรงผลัก) ส่วน Collider คือเกราะล่องหนรอบวัตถุที่คอยตรวจจับเมื่อมีสิ่งอื่นมาสัมผัสหรือชน',
      },
      why: {
        en: 'By default, 3D models are just visual holograms. Two cubes without colliders will pass through each other like ghosts, and without a Rigidbody they will float in mid-air forever.',
        th: 'โดยธรรมชาติ โมเดล 3D คือภาพลวงตากราฟิก ถ้าไม่มี Collider วัตถุจะทะลุผ่านกันเหมือนผี และถ้าไม่มี Rigidbody วัตถุจะลอยค้างอยู่กลางอากาศไม่ตกลงมา',
      },
      how: {
        en: 'You click "Add Component" -> Search "Rigidbody" -> Check "Use Gravity". Then ensure the ground has a "Box Collider" so the falling object has something solid to land on.',
        th: 'กดปุ่ม "Add Component" -> ค้นหาคำว่า "Rigidbody" -> ติ๊กถูกที่ "Use Gravity" และตรวจสอบว่าพื้นมี "Box Collider" เพื่อให้วัตถุที่ตกลงมามีพื้นรองรับ',
      },
      when: {
        en: 'Add Rigidbody to any dynamic actor: player characters, rolling balls, flying grenades, falling crates, and ragdoll enemies.',
        th: 'ใส่ Rigidbody ให้กับวัตถุที่ต้องเคลื่อนที่ตามแรงฟิสิกส์ เช่น ลูกบอลที่กลิ้ง, ตัวละคร, ลูกระเบิด, ลังไม้ที่ตกหล่น, หรือศัตรูที่ถูกยิงกระเด็น',
      },
    },
    diagram: {
      type: 'physics-pipeline',
      title: {
        en: 'How Unity Detects Collisions',
        th: 'กระบวนการตรวจจับการชนในระบบฟิสิกส์ Unity',
      },
      description: {
        en: 'Object with Rigidbody + Collider falls -> Contacts Ground Collider -> Physics engine stops penetration -> OnCollisionEnter event fires!',
        th: 'วัตถุที่มี Rigidbody + Collider ตกลงมา -> สัมผัส Collider ของพื้น -> ระบบฟิสิกส์หยุดไม่ให้ทะลุ -> เรียกใช้งานฟังก์ชัน OnCollisionEnter ทันที!',
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
          en: 'Select your 3D Sphere or Cube in the Hierarchy. In the Inspector, click "Add Component", type "Rigidbody" (not Rigidbody2D!), and select it. Notice "Mass" defaults to 1 (kg) and "Use Gravity" is checked.',
          th: 'เลือกวัตถุทรงกลมหรือกล่องใน Hierarchy แล้วดูที่ Inspector กดปุ่ม "Add Component" พิมพ์ "Rigidbody" (สำหรับเกม 3D ห้ามเลือก 2D) สังเกตว่ามวล (Mass) เริ่มต้นที่ 1 กก. และติ๊กใช้แรงโน้มถ่วงอยู่',
        },
        inspectorData: {
          componentName: 'Rigidbody',
          properties: [
            { name: 'Mass', value: '1', hint: 'Weight in kilograms' },
            { name: 'Drag', value: '0', hint: 'Air resistance (higher = falls slower like parachute)' },
            { name: 'Use Gravity', value: 'True [Checked]', hint: 'Pulls object down on -Y axis' },
            { name: 'Is Kinematic', value: 'False', hint: 'If True, physics forces won\'t move it' },
          ],
        },
        diagramType: 'inspector',
      },
      {
        stepNumber: 2,
        title: {
          en: 'Understanding Colliders vs Triggers',
          th: 'ความแตกต่างระหว่าง Collider ทั่วไป กับ Is Trigger',
        },
        explanation: {
          en: 'A solid Collider blocks movement (like a brick wall). If you check "Is Trigger", the object becomes passable like a ghost (like a coin collectible or an invisible zone that opens a door when you walk through it).',
          th: 'Collider ปกติจะกันไม่ให้สิ่งของทะลุผ่าน (เหมือนกำแพงปูน) แต่ถ้าติ๊กถูกที่ "Is Trigger" มันจะกลายเป็นพื้นที่ตรวจจับที่เดินทะลุได้ (เช่น เหรียญทองสำหรับเก็บคะแนน หรือโซนเปิดประตูอัตโนมัติ)',
        },
        diagramType: 'flow',
      },
    ],
    codeExamples: [
      {
        id: 'unity-collision-events',
        title: 'Detecting When Objects Hit Each Other',
        language: 'csharp',
        code: `using UnityEngine;

public class BallCollision : MonoBehaviour
{
    // Fires automatically when this object hits another solid collider
    void OnCollisionEnter(Collision collision)
    {
        Debug.Log("Ouch! Hit solid object: " + collision.gameObject.name);
    }

    // Fires automatically when entering an 'Is Trigger' zone (like a coin)
    void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("Coin"))
        {
            Debug.Log("Collected a Coin! +10 Points");
            Destroy(other.gameObject); // Removes coin from game
        }
    }
}`,
        explanation: {
          en: [
            'OnCollisionEnter: Special Unity event called when two physical colliders bump into each other with impact.',
            'collision.gameObject.name: Retrieves the name of the GameObject that we just collided with.',
            'OnTriggerEnter: Called when entering a sensor zone where "Is Trigger" is enabled.',
            'other.CompareTag("Coin"): Efficiently checks if the collided object has a specific label (Tag).',
            'Destroy(other.gameObject): Instantly removes the coin GameObject from the game scene memory.',
          ],
          th: [
            'OnCollisionEnter: ฟังก์ชันพิเศษที่จะถูกเรียกอัตโนมัติเมื่อเกิดการชนกระแทกกับวัตถุแข็งที่มี Collider',
            'collision.gameObject.name: ดึงชื่อของวัตถุที่เราเพิ่งชนด้วย เพื่อเช็คว่าเป็นศัตรู พื้น หรือกำแพง',
            'OnTriggerEnter: ถูกเรียกเมื่อเดินผ่านวัตถุที่เปิดโหมด Is Trigger (พื้นที่ตรวจจับ)',
            'other.CompareTag("Coin"): ตรวจสอบว่าวัตถุที่ชนมีป้ายชื่อ (Tag) ตรงกับคำว่า Coin หรือไม่',
            'Destroy(other.gameObject): สั่งทำลายหรือลบวัตถุนั้นทิ้งออกจากฉากทันที เช่น การเก็บเหรียญหายไป',
          ],
        },
      },
    ],
    practiceChecklist: [
      {
        id: 'p3-1',
        task: {
          en: 'Test in your mind: If a floor has no Collider, what happens to a ball with Rigidbody when you press Play?',
          th: 'ทดสอบจินตนาการ: ถ้าพื้นไม่มี Collider วัตถุที่มี Rigidbody จะเป็นอย่างไรเมื่อกด Play?',
        },
        hints: {
          en: 'The ball falls right through the floor into endless empty space!',
          th: 'ลูกบอลจะร่วงทะลุพื้นตกลงไปในความว่างเปล่าอย่างไม่มีที่สิ้นสุด!',
        },
      },
      {
        id: 'p3-2',
        task: {
          en: 'Explain why a collectible coin should have "Is Trigger" checked.',
          th: 'อธิบายว่าทำไมเหรียญทองสำหรับเก็บแต้ม ควรติ๊กถูกที่ "Is Trigger"',
        },
        hints: {
          en: 'So the player runs through it smoothly instead of bouncing off it like a brick wall.',
          th: 'เพื่อให้ผู้เล่นเดินทะลุผ่านเก็บแต้มได้ ไม่ใช่เดินชนกระเด็นเหมือนชนกำแพงอิฐ',
        },
      },
    ],
    miniChallenge: {
      title: {
        en: 'Physics Mystery Diagnosis',
        th: 'ท้าทาย: วินิจฉัยปัญหาวอยด์ฟิสิกส์',
      },
      description: {
        en: 'A developer placed a car with a Rigidbody and pressed Play, but the car refused to fall or respond to gravity at all. What setting on the Rigidbody is causing this?',
        th: 'ผู้พัฒนานำรถใส่ Rigidbody แล้วกด Play แต่รถลอยนิ่งไม่ยอมตกลงมาตามแรงโน้มถ่วง เกิดจากค่า Setting ใดใน Rigidbody?',
      },
      difficulty: 2,
      hints: {
        en: 'Check either "Use Gravity" is unchecked, or "Is Kinematic" is checked.',
        th: 'ตรวจดูว่าอาจลืมติ๊ก "Use Gravity" หรือเผลอไปติ๊กถูกที่ "Is Kinematic"',
      },
      solution: 'Either "Use Gravity" was unchecked (disabled), OR "Is Kinematic" was set to True (Kinematic disables physics engine force calculations)!',
    },
    commonMistakes: [
      {
        title: {
          en: 'Using Mesh Collider on moving Rigidbody objects',
          th: 'ใช้ Mesh Collider กับวัตถุที่มี Rigidbody และเคลื่อนที่',
        },
        problem: {
          en: 'Game lags severely or Unity throws an error about non-convex mesh collider.',
          th: 'เกมกระตุกรุนแรง หรือ Unity แจ้งเตือนข้อผิดพลาดเรื่อง Non-convex mesh',
        },
        cause: {
          en: 'Mesh Colliders have thousands of polygons and are extremely expensive to calculate in physics collisions.',
          th: 'Mesh Collider มีรายละเอียดโพลีกอนนับหมื่นชิ้น ทำให้เครื่องต้องคำนวณคณิตศาสตร์มหาศาลทุกเฟรม',
        },
        solution: {
          en: 'Use primitive colliders (Box, Sphere, Capsule) or check "Convex" on the Mesh Collider.',
          th: 'ใช้ Collider ทรงเรขาคณิตพื้นฐาน (กล่อง, ทรงกลม, แคปซูล) เสมอสำหรับตัวละครและวัตถุเคลื่อนที่',
        },
      },
    ],
    quiz: [
      {
        id: 'q3-1',
        question: {
          en: 'Which component must be added to a GameObject for it to fall with gravity?',
          th: 'ต้องเพิ่ม Component ใดให้ GameObject เพื่อให้มันตกลงมาตามแรงโน้มถ่วง?',
        },
        options: {
          en: ['Rigidbody', 'MeshFilter', 'AudioSource', 'Light'],
          th: ['Rigidbody', 'MeshFilter', 'AudioSource', 'Light'],
        },
        correctAnswer: 0,
        explanation: {
          en: 'Rigidbody tells Unity\'s physics engine to calculate physical forces like gravity and momentum on this object.',
          th: 'Rigidbody คือตัวสั่งการระบบฟิสิกส์ให้เริ่มคำนวณแรงโน้มถ่วง มวล และโมเมนตัมให้กับวัตถุนั้น',
        },
      },
      {
        id: 'q3-2',
        question: {
          en: 'What happens when "Is Trigger" is enabled on a Collider?',
          th: 'จะเกิดอะไรขึ้นเมื่อเปิดใช้งาน "Is Trigger" บน Collider?',
        },
        options: {
          en: [
            'Objects can pass through it without physical collision, but trigger events like OnTriggerEnter will fire',
            'The object becomes completely invisible',
            'The object explodes immediately when game starts',
            'The computer deletes the script',
          ],
          th: [
            'วัตถุจะสามารถเคลื่อนที่ผ่านทะลุได้โดยไม่ชนกระแทก แต่จะเรียกฟังก์ชัน OnTriggerEnter เพื่อรับรู้การเดินผ่าน',
            'วัตถุจะล่องหนมองไม่เห็น',
            'วัตถุจะระเบิดทันทีเมื่อเริ่มเกม',
            'คอมพิวเตอร์จะลบไฟล์สคริปต์ทิ้ง',
          ],
        },
        correctAnswer: 0,
        explanation: {
          en: 'Trigger colliders act as detection zones (like pickup items, door sensors, or checkpoint zones).',
          th: 'Trigger Collider ทำหน้าที่เป็นพื้นที่เซนเซอร์ตรวจจับ เหมาะสำหรับเหรียญเก็บแต้ม ประตูอัตโนมัติ หรือจุดเซฟ',
        },
      },
    ],
    summary: {
      en: [
        'Rigidbody simulates physical laws: mass, gravity, velocity, drag.',
        'Colliders are physical boundaries that prevent objects from passing through each other.',
        'OnCollisionEnter is for physical solid impacts; OnTriggerEnter is for sensor zones.',
        'Primitive colliders (Box, Sphere, Capsule) run blazing fast and are best for games.',
      ],
      th: [
        'Rigidbody จำลองกฎฟิสิกส์ในโลกจริง: มวล แรงโน้มถ่วง ความเร็ว และแรงต้าน',
        'Collider คือขอบเขตที่ป้องกันไม่ให้วัตถุทะลุหากัน',
        'OnCollisionEnter ใช้กับการชนกระแทกของแข็ง ส่วน OnTriggerEnter ใช้กับพื้นที่เซนเซอร์เก็บของ',
        'ควรใช้ Collider พื้นฐาน (กล่อง ทรงกลม แคปซูล) เพื่อให้เกมลื่นไหลและมีประสิทธิภาพสูงสุด',
      ],
    },
    prevLessonId: 'unity-zero-002',
    nextLessonId: 'unity-zero-004',
  },

  {
    id: 'unity-zero-004',
    engine: 'unity',
    level: 'zero',
    lessonNumber: 4,
    slug: 'player-movement-and-input',
    title: {
      en: 'Player Movement: Connecting Keyboard & Gamepad to Your Character',
      th: 'การควบคุมผู้เล่น: เชื่อมต่อคีย์บอร์ดและจอยเกมเข้ากับตัวละคร',
    },
    shortDescription: {
      en: 'Learn how computers read input buttons, calculate direction vectors, and make a character walk smoothly in 8 directions.',
      th: 'เรียนรู้วิธีที่คอมพิวเตอร์ตรวจจับการกดปุ่ม แปลงเป็นเวกเตอร์ทิศทาง และสั่งให้ตัวละครเดินหน้าถอยหลังได้อย่างนุ่มนวล',
    },
    estimatedMinutes: 30,
    tags: ['Basic', 'Player Movement', 'Input', 'C#', 'Vector3'],
    startFromZero: true,
    objectives: {
      en: [
        'Understand how Input.GetAxis works (-1.0 to +1.0 smooth values)',
        'Assemble a complete 3D Player movement controller from scratch',
        'Learn how to clamp or normalize diagonal speed so characters do not walk faster diagonally',
        'Test walking with WASD and Arrow keys',
      ],
      th: [
        'เข้าใจการทำงานของ Input.GetAxis (ค่าตั้งแต่ -1.0 ถึง +1.0)',
        'สร้างโค้ดควบคุมการเดินของตัวละคร 3 มิติอย่างสมบูรณ์แบบตั้งแต่ศูนย์',
        'เข้าใจการ Normalize ทิศทางเพื่อไม่ให้ตัวละครเดินแนวทแยงเร็วกว่าปกติ',
        'ทดสอบการบังคับเดินด้วยปุ่ม WASD และปุ่มลูกศร',
      ],
    },
    prerequisites: {
      en: ['Completed Lessons 01, 02, and 03'],
      th: ['ผ่านบทเรียนที่ 01, 02 และ 03'],
    },
    zeroExplanation: {
      what: {
        en: 'Player input is the bridge between human intention and computer memory. When you press "W" or push an analog stick forward, the operating system converts that press into a number between 0 and 1.',
        th: 'Player Input คือสะพานเชื่อมระหว่างความต้องการของคนกับเครื่องเกม เมื่อคุณกดปุ่ม "W" หรือโยกแกนอนาล็อกไปข้างหน้า ระบบจะแปลงเป็นตัวเลขระหว่าง 0 ถึง 1 ส่งให้ตัวละครเคลื่อนที่',
      },
      why: {
        en: 'Without reading input, your game is just an un-interactive movie. Games are defined by player agency — the ability to decide where to go and see the world react immediately.',
        th: 'หากปราศจากระบบรับค่าปุ่ม เกมจะเป็นเพียงวิดีโอภาพยนตร์ที่คนดูทำอะไรไม่ได้ หัวใจของเกมคือการที่ผู้เล่นมีอิสระในการสั่งการและเห็นผลลัพธ์ตอบสนองทันตาเห็น',
      },
      how: {
        en: 'In Unity, Input.GetAxis("Horizontal") reads A/D or Left/Right (-1 to +1), while Input.GetAxis("Vertical") reads W/S or Up/Down (-1 to +1). We combine these into a Vector3 movement vector.',
        th: 'ใน Unity คำสั่ง Input.GetAxis("Horizontal") จะอ่านปุ่ม A/D หรือซ้าย/ขวา (ค่า -1 ถึง +1) และ Input.GetAxis("Vertical") จะอ่านปุ่ม W/S หรือขึ้น/ลง (ค่า -1 ถึง +1) แล้วนำมารวมกันเป็นทิศทาง Vector3',
      },
      when: {
        en: 'Use movement scripts on player avatars, vehicles, flying spaceships, and spectator debug cameras.',
        th: 'ใช้ในตัวละครของผู้เล่น ยานพาหนะ ยานอวกาศ หรือมุมกล้องที่ผู้เล่นต้องการสำรวจฉาก',
      },
    },
    diagram: {
      type: 'physics-pipeline',
      title: {
        en: 'The Player Movement Pipeline',
        th: 'ลำดับขั้นตอนการควบคุมการเดินของตัวละคร',
      },
      description: {
        en: 'Key Press (W/A/S/D) -> Read Raw Input -> Normalize Vector -> Multiply by Speed & Time.deltaTime -> Apply to Transform or Rigidbody.',
        th: 'ผู้เล่นกดปุ่ม WASD -> อ่านค่าแกน Input -> ปรับขนาดเวกเตอร์ (Normalize) -> คูณความเร็วและเวลาเฟรม -> อัปเดตตำแหน่งตัวละคร',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Create the Player GameObject',
          th: 'สร้าง Player GameObject ในฉาก',
        },
        explanation: {
          en: 'In Unity Hierarchy, right click -> 3D Object -> Capsule. Rename it "Player". A capsule shape is universally used for humanoid characters because its rounded bottom glides easily over small steps and stairs.',
          th: 'ในหน้าต่าง Hierarchy คลิกขวา -> 3D Object -> Capsule แล้วตั้งชื่อว่า "Player" ทรงแคปซูลเป็นมาตรฐานสากลในการทำตัวละคร เพราะด้านล่างโค้งมนทำให้ก้าวข้ามบันไดหรือพื้นขรุขระได้ง่าย',
        },
      },
      {
        stepNumber: 2,
        title: {
          en: 'Create and Attach the Movement Script',
          th: 'สร้างและแนบไฟล์สคริปต์การเคลื่อนที่',
        },
        explanation: {
          en: 'In your Project window, create a C# script named "PlayerMovement". Drag and drop the script onto your Player Capsule in the Hierarchy window.',
          th: 'ในหน้าต่าง Project คลิกขวา Create -> C# Script ตั้งชื่อว่า "PlayerMovement" จากนั้นลากไฟล์สคริปต์นี้ไปวางทับบนตัว Player ใน Hierarchy',
        },
      },
    ],
    codeExamples: [
      {
        id: 'unity-complete-movement',
        title: 'Complete 3D Player Movement Script',
        language: 'csharp',
        code: `using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    [Header("Movement Settings")]
    public float walkSpeed = 6.0f;
    public float sprintMultiplier = 1.6f;

    void Update()
    {
        // 1. Read input from keyboard (WASD or Arrow Keys)
        float horizontalInput = Input.GetAxis("Horizontal"); // A/D or Left/Right: -1 to +1
        float verticalInput = Input.GetAxis("Vertical");     // W/S or Up/Down: -1 to +1

        // 2. Combine inputs into a 3D direction vector (X = right, Z = forward)
        Vector3 moveDirection = new Vector3(horizontalInput, 0f, verticalInput);

        // 3. Normalize: prevents moving faster when pressing W + D diagonally!
        if (moveDirection.magnitude > 1f)
        {
            moveDirection.Normalize();
        }

        // 4. Check if player is holding Shift to sprint
        float currentSpeed = walkSpeed;
        if (Input.GetKey(KeyCode.LeftShift))
        {
            currentSpeed *= sprintMultiplier;
        }

        // 5. Apply movement smoothly relative to real time
        transform.Translate(moveDirection * currentSpeed * Time.deltaTime, Space.World);
    }
}`,
        explanation: {
          en: [
            '[Header("Movement Settings")]: A handy Unity attribute that creates a bold category header in the Inspector UI.',
            'Input.GetAxis: Returns a smoothed value from -1.0 to 1.0 based on user key presses.',
            'moveDirection.Normalize(): Pythagoras theorem states diagonal vector (1, 0, 1) has length of ~1.414 (41% faster!). Normalizing scales it back to 1.0 length.',
            'Input.GetKey(KeyCode.LeftShift): Returns true as long as the user is holding down Left Shift.',
            'Space.World: Moves the character relative to world compass directions rather than the capsule\'s own local tilting.',
          ],
          th: [
            '[Header("Movement Settings")]: คำสั่งจัดหมวดหมู่สวยๆ ในหน้าต่าง Inspector ของ Unity',
            'Input.GetAxis: คืนค่าการกดปุ่มแบบนุ่มนวลตั้งแต่ -1.0 ถึง 1.0',
            'moveDirection.Normalize(): ตามทฤษฎีพีทาโกรัส การกด W+D พร้อมกันจะเกิดเวกเตอร์ยาว 1.414 ทำให้ตัวละครวิ่งทแยงเร็วขึ้น 41% คำสั่ง Normalize จะช่วยตัดทอนให้ความเร็วเท่ากันทุกทิศทาง',
            'Input.GetKey(KeyCode.LeftShift): ตรวจสอบว่าผู้เล่นกำลังกดปุ่ม Shift ซ้ายค้างไว้เพื่อวิ่งเร็วหรือไม่',
            'Space.World: กำหนดให้เคลื่อนที่ตามทิศทางของโลกเกม ไม่บิดเบี้ยวตามมุมเอียงของตัวละคร',
          ],
        },
      },
    ],
    practiceChecklist: [
      {
        id: 'p4-1',
        task: {
          en: 'Run the script and try walking diagonally (W + A). Does the character move at the exact same speed as forward?',
          th: 'ทดลองกดเดินแนวทแยง (W + A) และสังเกตว่าความเร็วเท่ากับการเดินตรงไปข้างหน้าหรือไม่',
        },
      },
      {
        id: 'p4-2',
        task: {
          en: 'Hold Left Shift while walking and verify speed increases by 60%.',
          th: 'กดปุ่ม Shift ซ้ายค้างขณะเดิน เพื่อทดสอบการเร่งความเร็วในการวิ่ง 1.6 เท่า',
        },
      },
    ],
    miniChallenge: {
      title: {
        en: 'Add a Crouch mechanic!',
        th: 'ท้าทาย: เพิ่มระบบย่อตัว (Crouch)',
      },
      description: {
        en: 'Modify the script so that when the player holds Left Control (KeyCode.LeftControl), speed is cut in half (0.5x).',
        th: 'เพิ่มโค้ดให้เมื่อผู้เล่นกดปุ่ม Ctrl ซ้ายค้างไว้ ความเร็วจะลดลงครึ่งหนึ่ง (0.5x)',
      },
      difficulty: 2,
      hints: {
        en: 'Add an else if (Input.GetKey(KeyCode.LeftControl)) { currentSpeed *= 0.5f; }',
        th: 'เพิ่มเงื่อนไข else if ตรวจสอบปุ่ม LeftControl แล้วคูณ currentSpeed ด้วย 0.5',
      },
      solution: 'Inside Update(): else if (Input.GetKey(KeyCode.LeftControl)) { currentSpeed *= 0.5f; } - great job implementing stealth movement!',
    },
    commonMistakes: [
      {
        title: {
          en: 'Forgetting to normalize diagonal direction vectors',
          th: 'ลืม Normalize เวกเตอร์ทิศทางเมื่อเดินแนวทแยง',
        },
        problem: {
          en: 'Players discover a cheat: running diagonally lets them outrun enemies and speedrun past obstacles.',
          th: 'ผู้เล่นพบช่องโหว่: เดินเฉียงแล้ววิ่งเร็วกว่าปกติถึง 41% ทำให้หนีศัตรูได้ง่ายเกินไป',
        },
        cause: {
          en: 'A vector of (X: 1, Z: 1) has a geometric hypotenuse length of 1.414 instead of 1.0.',
          th: 'เวกเตอร์แนวทแยง (1, 1) มีความยาวด้านตรงข้ามมุมฉากเท่ากับ 1.414 เมตรต่อวินาที',
        },
        solution: {
          en: 'Call moveDirection.Normalize() whenever moveDirection.magnitude > 1.',
          th: 'ใส่คำสั่ง moveDirection.Normalize() ก่อนนำเวกเตอร์ไปคูณความเร็วเสมอ',
        },
      },
    ],
    quiz: [
      {
        id: 'q4-1',
        question: {
          en: 'Why do we normalize a movement direction vector before multiplying by speed?',
          th: 'ทำไมเราต้องทำการ Normalize เวกเตอร์ทิศทางก่อนนำไปคูณความเร็ว?',
        },
        options: {
          en: [
            'To ensure the player moves at the exact same speed in diagonal directions as straight directions',
            'To convert the game into virtual reality',
            'To save battery life on mobile devices',
            'To automatically play footsteps audio',
          ],
          th: [
            'เพื่อให้ผู้เล่นเดินด้วยความเร็วเท่ากันในทุกทิศทาง รวมถึงแนวทแยงมุม',
            'เพื่อแปลงเกมให้รองรับแว่น VR',
            'เพื่อประหยัดแบตเตอรี่บนโทรศัพท์มือถือ',
            'เพื่อเล่นเสียงฝีเท้าอัตโนมัติ',
          ],
        },
        correctAnswer: 0,
        explanation: {
          en: 'Without normalization, walking forward (1) and right (1) yields a speed vector of 1.414, making diagonal running 41.4% faster.',
          th: 'หากไม่ Normalize การเดินทแยงจะมีความเร็วสูงถึง 1.414 เท่า การ Normalize จะปรับความยาวเวกเตอร์ให้เป็น 1.0 เสมอ',
        },
      },
      {
        id: 'q4-2',
        question: {
          en: 'What does Input.GetAxis("Vertical") return when neither W nor S is pressed?',
          th: 'Input.GetAxis("Vertical") จะคืนค่าตัวเลขใดเมื่อผู้เล่นไม่ได้กดปุ่ม W หรือ S?',
        },
        options: {
          en: ['0.0', '1.0', '-1.0', 'null'],
          th: ['0.0', '1.0', '-1.0', 'null'],
        },
        correctAnswer: 0,
        explanation: {
          en: 'When at rest with no input, GetAxis returns 0.0 (stationary).',
          th: 'เมื่อผู้เล่นปล่อยมือ ไม่มีการกดปุ่ม คำสั่ง GetAxis จะคืนค่า 0.0 หมายถึงไม่มีแรงขับเคลื่อน',
        },
      },
    ],
    summary: {
      en: [
        'Input.GetAxis seamlessly maps keyboard, mouse, and gamepads into -1 to +1 values.',
        'Normalize direction vectors to prevent diagonal speed exploitation.',
        'Speed modifiers (sprint, crouch) can be dynamically multiplied to base speed.',
        'Capsule colliders provide the ideal physical geometry for humanoid character traversal.',
      ],
      th: [
        'Input.GetAxis เชื่อมต่อทั้งคีย์บอร์ดและจอยเกม แปลงเป็นตัวเลข -1 ถึง +1 ได้อย่างเรียบเนียน',
        'Normalize เวกเตอร์เสมอเพื่อป้องกันบั๊กเดินทแยงเร็วกว่าปกติ',
        'ระบบวิ่งเร็ว (Sprint) หรือย่อตัว (Crouch) ทำได้โดยคูณอัตราทดเข้ากับความเร็วพื้นฐาน',
        'ทรงแคปซูล (Capsule) คือรูปทรงที่เหมาะสมที่สุดสำหรับสร้างตัวละครมนุษย์ในเกม 3 มิติ',
      ],
    },
    prevLessonId: 'unity-zero-003',
  },
];
