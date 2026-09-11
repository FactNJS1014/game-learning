import { Lesson } from '../../types';

export const generalLessons: Lesson[] = [
  {
    id: 'general-zero-001',
    engine: 'general',
    level: 'zero',
    lessonNumber: 1,
    slug: 'game-math-vectors-deltatime-dot-product',
    heroImage: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80',
    heroImageCaption: {
      en: 'Essential 2D/3D game mathematics: Vector addition, DeltaTime framerate independence, and Dot Product calculations',
      th: 'คณิตศาสตร์พื้นฐานสำหรับสร้างเกม: การบวกเวกเตอร์ การคูณ DeltaTime และการคำนวณทิศทางด้วย Dot Product',
    },
    title: {
      en: 'Game Math Foundations: Vectors, DeltaTime & Dot Product',
      th: 'คณิตศาสตร์สร้างเกมจากศูนย์: เวกเตอร์ (Vectors), DeltaTime และ Dot Product',
    },
    shortDescription: {
      en: 'Master the universal mathematics used across every game engine: understand direction vs distance, make games run at identical speed at 30 or 240 FPS, and test player field of view.',
      th: 'เรียนรู้คณิตศาสตร์สากลที่ใช้ในทุกเอนจินเกม: เข้าใจเวกเตอร์ทิศทางและระยะทาง, ทำให้เกมวิ่งเร็วเท่ากันเป๊ะทั้งบนจอ 30 หรือ 240 FPS ด้วย DeltaTime และตรวจจับสายตาด้วย Dot Product',
    },
    estimatedMinutes: 25,
    tags: ['Zero', 'General', 'Math', 'Vectors', 'DeltaTime', 'Foundations'],
    startFromZero: true,
    objectives: {
      en: [
        'Understand what a Vector is (Direction + Magnitude) and how to calculate distances using (A - B).magnitude',
        'Learn why multiplying speed by DeltaTime is strictly mandatory for framerate-independent gameplay',
        'Use the Dot Product (A · B) to determine if a target is in front of or behind the player without trigonometry',
      ],
      th: [
        'เข้าใจความหมายของเวกเตอร์ (ทิศทาง + ขนาด) และวิธีหาระยะทางระหว่างวัตถุสองจุดด้วย (A - B).magnitude',
        'เข้าใจเหตุผลที่ต้องคูณด้วย DeltaTime เสมอเพื่อให้เกมวิ่งเร็วเท่ากันบนทุกเครื่องคอมพิวเตอร์',
        'ใช้ Dot Product (ผลคูณจุด) เพื่อเช็กว่าศัตรูอยู่ข้างหน้าหรือข้างหลังโดยไม่ต้องใช้ตรีโกณมิติให้ยุ่งยาก',
      ],
    },
    prerequisites: {
      en: ['Basic elementary arithmetic (+, -, *, /)'],
      th: ['ทักษะบวกลบคูณหารพื้นฐานเท่านั้น'],
    },
    zeroExplanation: {
      what: {
        en: 'Game Math is the language of spatial simulation. A Vector describes where things are and where they are heading. DeltaTime describes how much time elapsed since the previous screen frame.',
        th: 'คณิตศาสตร์เกมคือภาษาที่ใช้บอกพิกัดและการเคลื่อนไหว เวกเตอร์บอกว่าวัตถุอยู่ที่ไหนและกำลังพุ่งไปทางไหน ส่วน DeltaTime คือเสี้ยววินาทีที่ผ่านไประหว่างแต่ละเฟรมภาพ',
      },
      why: {
        en: 'If you move a player "5 units per frame", a high-end PC running at 240 FPS will run 8 times faster than a budget console running at 30 FPS! Multiplying by DeltaTime standardizes speed to "5 units per second" everywhere.',
        th: 'หากคุณสั่งให้ตัวละครเดิน "5 หน่วยต่อเฟรม" คนที่เล่นบนคอมแรง 240 FPS จะวิ่งเร็วกว่าคนที่เล่นบนเครื่อง 30 FPS ถึง 8 เท่า! การคูณด้วย DeltaTime จะช่วยล็อกให้วิ่งเร็ว 5 หน่วยต่อวินาทีเท่ากันทุกเครื่องเสมอ',
      },
      how: {
        en: 'Always write: position += direction * speed * deltaTime. For vision angle, calculate Vector3.Dot(character.forward, targetDirection).',
        th: 'เขียนโค้ดการเคลื่อนที่ด้วยสูตร: ตำแหน่ง += ทิศทาง * ความเร็ว * deltaTime เสมอ และหาทิศทางการมองด้วย Vector3.Dot',
      },
      when: {
        en: 'Every physical movement, aiming projectile, AI line-of-sight check, and camera follow calculation.',
        th: 'การเดินของตัวละครทุกก้าว, การเล็งปืน, การตรวจจับสายตาของศัตรู และมุมกล้องติดตาม',
      },
    },
    diagram: {
      type: 'character-movement',
      title: {
        en: 'Vector Direction & Dot Product Angles',
        th: 'ทิศทางเวกเตอร์และการคำนวณมุมด้วย Dot Product',
      },
      description: {
        en: 'Dot Product > 0: In front of character (< 90 deg) | Dot Product == 0: Exactly perpendicular | Dot Product < 0: Behind character.',
        th: 'Dot Product > 0: อยู่ข้างหน้าตัวละคร (มุมแคบกว่า 90 องศา) | Dot Product == 0: ตั้งฉากพอดี | Dot Product < 0: อยู่ข้างหลังตัวละคร',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'The DeltaTime Golden Formula',
          th: 'สูตรทองคำของ DeltaTime',
        },
        explanation: {
          en: 'DeltaTime is the duration of the previous frame in seconds (e.g. 0.016s at 60 FPS). Multiplying distance by deltaTime transforms "pixels per frame" into "meters per real-world second".',
          th: 'DeltaTime คือระยะเวลาของเฟรมที่แล้วในหน่วยวินาที (เช่น 0.016 วินาทีที่ 60 FPS) การนำความเร็วมาคูณกับ deltaTime จะแปลงจากการขยับตามรอบหน้าจอ ให้กลายเป็นการขยับตามเวลาจริงของโลก',
        },
      },
    ],
    codeExamples: [
      {
        title: 'Universal Game Math Implementations',
        language: 'csharp',
        code: `// Universal Game Math Examples:

// 1. Framerate-independent movement (Works in Unity & Unreal)
float moveSpeed = 10f; // 10 meters per second
Vector3 moveDir = new Vector3(1, 0, 0); // Moving Right
position += moveDir * moveSpeed * deltaTime;

// 2. Calculating distance between Player and Boss
Vector3 difference = bossPosition - playerPosition;
float distanceToBoss = difference.magnitude;

// 3. Normalized direction vector (Length of exactly 1.0)
Vector3 directionToBoss = difference.normalized;

// 4. Dot Product Field-of-View test
float dot = Vector3.Dot(playerForward, directionToBoss);
if (dot > 0.7f)
{
    // Target is directly in front of the player (within ~45 degrees FOV)!
    Debug.Log("Player can clearly see the boss!");
}`,
        explanation: {
          en: 'Normalizing a vector shrinks its length to 1.0 while preserving its exact direction, making it safe to multiply by speeds.',
          th: 'การ Normalize เวกเตอร์จะปรับความยาวให้เหลือ 1.0 เสมอโดยที่ยังคงทิศทางเดิมไว้ ทำให้ปลอดภัยเมื่อนำไปคูณกับความเร็ว',
        },
      },
    ],
    practiceChecklist: [
      { id: 'gz01-1', title: { en: 'Multiply all movement speeds by DeltaTime', th: 'คูณความเร็วการเคลื่อนที่ทั้งหมดด้วย DeltaTime' }, completed: false },
      { id: 'gz01-2', title: { en: 'Calculate distance between two entities using magnitude', th: 'คำนวณระยะห่างระหว่างสองวัตถุด้วย .magnitude' }, completed: false },
      { id: 'gz01-3', title: { en: 'Use Vector3.Dot to check if an enemy is in front of the player', th: 'ใช้ Vector3.Dot เพื่อเช็กว่าศัตรูอยู่ข้างหน้าตัวละครหรือไม่' }, completed: false },
    ],
    miniChallenge: {
      prompt: {
        en: 'If a game runs at 30 FPS on Machine A and 120 FPS on Machine B, how does DeltaTime balance movement speed?',
        th: 'หากเกมรันที่ 30 FPS บนเครื่อง A และรันที่ 120 FPS บนเครื่อง B ตัวแปร DeltaTime ช่วยปรับสมดุลความเร็วอย่างไร?',
      },
      hint: {
        en: 'Calculate DeltaTime for both: (1/30 = 0.033s) vs (1/120 = 0.0083s).',
        th: 'ลองคำนวณค่า DeltaTime ของทั้งสองเครื่อง: (1/30 = 0.033 วินาที) กับ (1/120 = 0.0083 วินาที)',
      },
      solution: {
        en: 'Machine A takes larger steps fewer times (0.033s x 30 = 1 second). Machine B takes smaller steps more frequently (0.0083s x 120 = 1 second). Both move the EXACT same distance in 1 real-world second!',
        th: 'เครื่อง A ก้าวเท้ายาวกว่าแต่ก้าวน้อยครั้ง (0.033 x 30 = 1 วินาที) ส่วนเครื่อง B ก้าวเท้าสั้นกว่าแต่ก้าวถี่กว่า (0.0083 x 120 = 1 วินาที) สรุปแล้วทั้งสองเครื่องเคลื่อนที่ได้ระยะทางเท่ากันเป๊ะในเวลา 1 วินาทีจริง!',
      },
    },
    commonMistakes: [
      {
        mistake: { en: 'Adding vectors without normalizing input axes (e.g. moving diagonally at (1, 1))', th: 'ลืม Normalize เวกเตอร์เมื่อกดปุ่มเดินทแยงมุม (X: 1, Y: 1)' },
        why: { en: 'Length of (1, 1) is 1.414, causing players to walk ~41% faster diagonally than straight forward!', th: 'ความยาวของเวกเตอร์ (1, 1) คือ 1.414 ทำให้ตัวละครเดินทแยงมุมเร็วกว่าเดินตรงถึง 41%!' },
        fix: { en: 'Always call .normalized on diagonal input vectors before multiplying by moveSpeed.', th: 'สั่ง .normalized บนเวกเตอร์ที่รับจากปุ่มกดเสมอก่อนนำไปคูณกับความเร็ว' },
      },
    ],
    quiz: [
      {
        question: {
          en: 'What is the length (magnitude) of any normalized vector?',
          th: 'ขนาดความยาว (Magnitude) ของเวกเตอร์ที่ผ่านการ Normalized แล้วจะมีค่าเท่ากับเท่าใดเสมอ?',
        },
        options: {
          en: ['Exactly 1.0', 'Zero (0.0)', 'Depends on framerate', 'Equal to moveSpeed'],
          th: ['เท่ากับ 1.0 เสมอ', 'เป็นศูนย์ (0.0)', 'ขึ้นอยู่กับเฟรมเรต', 'เท่ากับค่าความเร็ว moveSpeed'],
        },
        correctIndex: 0,
        explanation: {
          en: 'Normalizing scales a vector so its magnitude is exactly 1 unit long while maintaining direction.',
          th: 'การ Normalize จะย่อขนาดเวกเตอร์ให้มีความยาว 1 หน่วยพอดีเสมอ เพื่อใช้เป็นตัวแทนของทิศทางล้วนๆ',
        },
      },
    ],
  },
  {
    id: 'general-basic-001',
    engine: 'general',
    level: 'basic',
    lessonNumber: 2,
    slug: 'game-feel-juice-screenshake-hitstop',
    heroImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
    heroImageCaption: {
      en: 'Game feel engineering: Screenshake trauma decay, micro hitstop pauses, and impact particle punch',
      th: 'ศาสตร์แห่ง Game Feel: ความสั่นสะเทือนของหน้าจอ Screenshake, การหยุดเวลาเสี้ยววินาที Hitstop และประกายไฟกระแทก',
    },
    title: {
      en: 'Game Feel & Juice: Screenshake, Hitstop & Impact Punch',
      th: 'ศาสตร์แห่ง Game Feel: การสร้างความสะใจด้วย Screenshake, Hitstop และแอนิเมชันกระแทก',
    },
    shortDescription: {
      en: 'Transform a stiff, boring prototype into an addictive, punchy game experience: master non-linear camera shake trauma, hitstop freeze-frames, and squash-and-stretch physics.',
      th: 'เปลี่ยนเกมธรรมดาที่น่าเบื่อให้กลายเป็นเกมที่เล่นแล้วสะใจและติดหนึบ: เรียนรู้การคำนวณความสั่นของกล้องแบบยกกำลังสอง, การหยุดเวลาเสี้ยววินาทีเมื่อดาบฟันโดน และหลักการเด้งดึ๋ง Squash & Stretch',
    },
    estimatedMinutes: 30,
    tags: ['Basic', 'General', 'GameFeel', 'Juice', 'Polish', 'CameraShake'],
    startFromZero: false,
    objectives: {
      en: [
        'Understand why "Juice" and responsive audiovisual feedback define great game feel',
        'Implement squared Trauma-based camera screenshake with smooth linear decay',
        'Add micro Hitstop pauses (50-100ms) to deliver weighty, bone-crunching combat impacts',
      ],
      th: [
        'เข้าใจหัวใจของคำว่า "Game Feel" และการตอบสนองที่ทำให้ผู้เล่นรู้สึกสนุกถึงขั้วหัวใจ',
        'สร้างระบบกล้องสั่น (Screenshake) ด้วยสูตร Trauma ยกกำลังสองที่คืนตัวอย่างนุ่มนวล',
        'ใส่เทคนิคหยุดเวลาเสี้ยววินาที (Hitstop 50-100 มิลลิวินาที) เพื่อให้การฟันดาบรู้สึกหนักแน่นและทรงพลัง',
      ],
    },
    prerequisites: {
      en: ['Completed General Math Foundations (DeltaTime, Vectors)'],
      th: ['ผ่านเนื้อหาคณิตศาสตร์สร้างเกม (DeltaTime, เวกเตอร์)'],
    },
    zeroExplanation: {
      what: {
        en: '"Game Feel" (or "Juice") is the tactile, visceral sensation a player experiences through animation curves, camera motions, sound rumbles, and audio-visual feedback.',
        th: '"Game Feel" หรือ "Juice" คือความรู้สึกสัมผัสที่ผู้เล่นรับรู้ได้ผ่านหน้าจอและเสียง เมื่อกดปุ่มหรือโจมตีศัตรู แล้วรู้สึกถึงน้ำหนัก ความแน่น และความสะใจ',
      },
      why: {
        en: 'Two games can have the exact same numbers, rules, and code. The one with screenshake, hitstop, and particle bursts feels like an award-winning hit, while the other feels like a lifeless school project.',
        th: 'สองเกมอาจมีกติกาและโค้ดเหมือนกันเป๊ะ แต่เกมที่ใส่ความสั่นสะเทือน จังหวะชะงัก และประกายไฟ จะรู้สึกสนุกเหมือนเกมระดับโลก ในขณะที่อีกเกมจะดูแห้งแล้งไร้ชีวิตชีวา',
      },
      how: {
        en: 'On hit: add trauma += 0.4 to camera, freeze time for 0.06 seconds (Time.timeScale = 0), spawn 15 blood/spark particles, and scale weapon 1.3x momentarily.',
        th: 'เมื่อตีโดน: เพิ่มค่า Trauma ให้กล้อง 0.4, สั่งหยุดเวลาเสี้ยววินาที (0.06 วิ), ปล่อยประกายไฟ 15 จุด และขยายขนาดอาวุธขึ้น 1.3 เท่าชั่วพริบตา',
      },
      when: {
        en: 'Landing critical hits, jumping, landing from high heights, firing heavy shotguns, and collecting gold coins.',
        th: 'การโจมตีติดคริติคอล, จังหวะกระโดดและเท้าแตะพื้น, การยิงปืนลูกซอง และการเก็บเหรียญทอง',
      },
    },
    diagram: {
      type: 'character-movement',
      title: {
        en: 'The Hit Impact Anatomy',
        th: 'กายวิภาคของจังหวะการโจมตีกระทบเป้าหมาย (Impact Anatomy)',
      },
      description: {
        en: 'Swing Sword -> Frame 1: Hitbox Connects -> Frame 2-5: Hitstop (Game freezes 60ms) -> Frame 6: Camera Shake + Sparks Fly + Enemy flashes white -> Frame 7+: Target recoils.',
        th: 'เหวี่ยงดาบ -> จังหวะโดน -> หยุดเวลาค้างไว้ 60ms (Hitstop) -> กล้องสั่น + ประกายไฟกระจาย + ศัตรูกะพริบแสงขาว -> ศัตรูกระเด็นถอยหลังตามแรงกระแทก',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'The Trauma Screenshake Algorithm',
          th: 'อัลกอริทึมการสั่นกล้องด้วยค่า Trauma',
        },
        explanation: {
          en: 'Linear screenshake feels nauseating and mechanical. By squaring a "Trauma" float variable between 0.0 and 1.0 (Shake = Trauma * Trauma), small hits create gentle shakes, while giant explosions create dramatic cinematic rumbles.',
          th: 'การสั่นแบบเส้นตรงจะทำให้ผู้เล่นเวียนหัว การใช้ค่า Trauma ยกกำลังสอง (ความสั่น = Trauma * Trauma) จะทำให้การโดนตีเบาๆ สั่นเพียงเล็กน้อย แต่ถ้าโดนระเบิดใหญ่จะสั่นสะท้านอย่างสะใจ',
        },
      },
    ],
    codeExamples: [
      {
        title: 'Complete Trauma Camera Shake & Hitstop Engine',
        language: 'csharp',
        code: `using System.Collections;
using UnityEngine;

public class GameFeelEngine : MonoBehaviour
{
    public static GameFeelEngine Instance { get; private set; }

    [Header("Trauma Shake")]
    private float trauma = 0f;
    [SerializeField] private float maxAngle = 8f;
    [SerializeField] private float maxOffset = 0.4f;

    void Awake() => Instance = this;

    public void AddTrauma(float amount)
    {
        trauma = Mathf.Clamp01(trauma + amount);
    }

    public void DoHitstop(float durationSeconds = 0.06f)
    {
        StartCoroutine(HitstopRoutine(durationSeconds));
    }

    private IEnumerator HitstopRoutine(float duration)
    {
        Time.timeScale = 0f;
        yield return new WaitForSecondsRealtime(duration);
        Time.timeScale = 1f;
    }

    void Update()
    {
        if (trauma > 0f)
        {
            // Square trauma for non-linear power curve!
            float shake = trauma * trauma;

            // Perlin noise delivers organic, natural camera motion
            float offsetX = maxOffset * shake * (Mathf.PerlinNoise(0, Time.time * 25f) * 2f - 1f);
            float offsetY = maxOffset * shake * (Mathf.PerlinNoise(1, Time.time * 25f) * 2f - 1f);
            float angleRot = maxAngle * shake * (Mathf.PerlinNoise(2, Time.time * 25f) * 2f - 1f);

            Camera.main.transform.localPosition = new Vector3(offsetX, offsetY, 0f);
            Camera.main.transform.localRotation = Quaternion.Euler(0f, 0f, angleRot);

            // Smooth decay back to zero
            trauma = Mathf.MoveTowards(trauma, 0f, Time.deltaTime * 1.5f);
        }
    }
}`,
        explanation: {
          en: 'Using WaitForSecondsRealtime allows the Hitstop coroutine to resume cleanly even when Time.timeScale is frozen to 0.',
          th: 'การใช้ WaitForSecondsRealtime ช่วยให้ฟังก์ชันนับเวลาทำงานต่อได้ แม้ว่า Time.timeScale ของเกมจะถูกสั่งหยุดไว้ที่ 0 ก็ตาม',
        },
      },
    ],
    practiceChecklist: [
      { id: 'gb01-1', title: { en: 'Implement Trauma-based camera shake using Perlin noise', th: 'สร้างระบบกล้องสั่นด้วยค่า Trauma ร่วมกับ Perlin Noise' }, completed: false },
      { id: 'gb01-2', title: { en: 'Add 60ms Hitstop freeze frame on weapon impact', th: 'ใส่ Hitstop หยุดเวลา 60 มิลลิวินาทีในจังหวะฟันโดนเป้าหมาย' }, completed: false },
      { id: 'gb01-3', title: { en: 'Trigger white damage flash shader on enemy sprite/mesh', th: 'สั่งให้โมเดลศัตรูกะพริบเป็นสีขาวแวบหนึ่งเมื่อโดนดาเมจ' }, completed: false },
    ],
    miniChallenge: {
      prompt: {
        en: 'What happens if you use "yield return new WaitForSeconds(0.06f)" during Hitstop when Time.timeScale is 0?',
        th: 'จะเกิดอะไรขึ้นหากคุณเผลอใช้ "WaitForSeconds(0.06f)" ธรรมดาแทนที่จะเป็น Realtime ในขณะที่ Time.timeScale ถูกปรับเป็น 0?',
      },
      hint: {
        en: 'How does WaitForSeconds measure elapsed time?',
        th: 'คำสั่ง WaitForSeconds ปกตินับเวลาจากอะไร?',
      },
      solution: {
        en: 'The game freezes FOREVER! Standard WaitForSeconds is multiplied by Time.timeScale. If timeScale is 0, elapsed game time never advances, trapping your entire game in an infinite freeze!',
        th: 'เกมจะค้างไปตลอดกาล! เพราะ WaitForSeconds ปกติจะเดินตาม Time.timeScale เมื่อเวลาในเกมหยุดเดิน ตัวนับเวลาจะไม่มีวันขยับ และเกมจะติดแหง็กอยู่ในจังหวะค้างนั้นตลอดไป!',
      },
    },
    commonMistakes: [
      {
        mistake: { en: 'Setting Hitstop duration too long (e.g. 0.3 to 0.5 seconds)', th: 'ตั้งเวลา Hitstop นานเกินไป (เช่น 0.3 ถึง 0.5 วินาที)' },
        why: { en: 'Long hitstops make the game feel broken, lagged, or unresponsive rather than punchy.', th: 'การหยุดเวลานานเกินไปจะทำให้ผู้เล่นรู้สึกว่าคอมค้างหรือปุ่มกดยาน ไม่ใช่ความรู้สึกกระแทกที่สะใจ' },
        fix: { en: 'Keep hitstops strictly between 0.04s (light hits) and 0.12s (colossal boss finishers).', th: 'ตั้งเวลา Hitstop อยู่ระหว่าง 0.04 วินาที (ตีเบา) ถึงไม่เกิน 0.12 วินาที (ท่าไม้ตายปิดฉากบอส)' },
      },
    ],
    quiz: [
      {
        question: {
          en: 'Why is camera trauma squared (Trauma * Trauma) instead of used linearly?',
          th: 'ทำไมความแรงของการสั่นกล้องจึงนิยมนำค่า Trauma มายกกำลังสอง (Trauma * Trauma) แทนที่จะใช้แบบเส้นตรง?',
        },
        options: {
          en: [
            'It creates a non-linear curve where light hits are gentle, while heavy explosions feel massive',
            'It fixes rendering artifacts on wide screens',
            'It prevents the player from moving',
            'It forces the GPU to run faster',
          ],
          th: [
            'ทำให้เกิดกราฟแบบไม่เป็นเส้นตรง: การโดนตีเบาๆ สั่นนุ่มนวล แต่ระเบิดหนักๆ จะสั่นสะท้านสะใจ',
            'ช่วยแก้ปัญหาภาพแตกบนจอกว้าง',
            'ช่วยป้องกันไม่ให้ผู้เล่นเดิน',
            'ช่วยบังคับให้การ์ดจอทำงานเร็วขึ้น',
          ],
        },
        correctIndex: 0,
        explanation: {
          en: 'Squaring trauma creates exponential contrast between subtle environmental feedback and explosive combat moments.',
          th: 'การยกกำลังสองช่วยสร้างความแตกต่างที่ชัดเจนระหว่างแรงสั่นสะเทือนเล็กๆ กับจังหวะระเบิดใหญ่',
        },
      },
    ],
  },
  {
    id: 'general-intermediate-001',
    engine: 'general',
    level: 'intermediate',
    lessonNumber: 3,
    slug: 'game-audio-pipeline-spatial-3d-mixing',
    heroImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80',
    heroImageCaption: {
      en: 'Spatial 3D game audio engineering: Logarithmic distance attenuation curves, low-pass occlusion, and audio mixer buses',
      th: 'วิศวกรรมเสียง 3 มิติในเกม: กราฟระยะทางแบบ Logarithmic, การอู้อี้ของเสียงเมื่อมีกำแพงขวาง และระบบ Audio Mixer',
    },
    title: {
      en: 'Game Audio Pipeline: Spatial 3D Audio & Dynamic Mixing',
      th: 'ระบบเสียงในเกม: เสียงจำลอง 3 มิติ (Spatial Audio) และ Audio Mixer',
    },
    shortDescription: {
      en: 'Deliver an immersive auditory experience: configure 3D sound attenuation curves, simulate wall occlusion using Low-Pass Filters, and mix volume buses (Master, BGM, SFX, Voice).',
      th: 'สร้างประสบการณ์เสียงระดับพรีเมียม: ปรับแต่งระยะเสียง 3 มิติให้เบาลงตามระยะห่าง, จำลองเสียงอู้อี้เมื่อมีกำแพงบังด้วย Low-Pass Filter และจัดกลุ่มช่องเสียงด้วย Audio Mixer',
    },
    estimatedMinutes: 30,
    tags: ['Intermediate', 'General', 'Audio', 'SpatialSound', 'SoundDesign', 'Mixer'],
    startFromZero: false,
    objectives: {
      en: [
        'Understand Spatial 3D Audio vs 2D Flat Audio (BGM vs Footsteps)',
        'Configure logarithmic distance attenuation curves to eliminate unnatural volume cliffs',
        'Architect an Audio Mixer Bus hierarchy (Master -> BGM, SFX, Voice, UI)',
      ],
      th: [
        'แยกความแตกต่างระหว่างเสียง 2D ทั่วไป กับเสียง 3D ในโลกเสมือน (เพลงประกอบ ปะทะ เสียงฝีเท้า)',
        'ปรับแต่งกราฟระยะทางเสียงแบบ Logarithmic เพื่อไม่ให้เสียงขาดหายไปแบบห้วนๆ',
        'วางโครงสร้างระบบ Audio Mixer Bus (Master ควบคุม BGM, SFX, เสียงพากย์ และ UI)',
      ],
    },
    prerequisites: {
      en: ['Completed General Level 0 Math Foundations'],
      th: ['ผ่านเนื้อหาคณิตศาสตร์สร้างเกม'],
    },
    zeroExplanation: {
      what: {
        en: 'Spatial 3D Audio calculates stereo panning and volume falloff based on the relative position and orientation between the listener (player ears) and the sound emitter.',
        th: 'Spatial 3D Audio คือการคำนวณทิศทางเสียงซ้าย-ขวา และความดัง-เบา ตามตำแหน่งจริงในฉาก 3 มิติระหว่างหูของผู้เล่นกับจุดกำเนิดเสียง',
      },
      why: {
        en: 'Sound informs players of danger outside their visual screen field (e.g. footsteps sneaking up from behind, an engine roaring to the left).',
        th: 'เสียงคือสิ่งเดียวที่เตือนผู้เล่นถึงอันตรายที่อยู่นอกสายตา เช่น เสียงฝีเท้าคนย่องมาจากข้างหลัง หรือเสียงรถที่พุ่งมาจากทางซ้าย',
      },
      how: {
        en: 'Set AudioSource/AudioComponent Spatial Blend to 1.0 (pure 3D), set Min Distance to 2m, Max Distance to 25m with Logarithmic Rolloff, and route output through the "SFX" mixer bus.',
        th: 'ปรับ Spatial Blend เป็น 1.0 (3D แท้), ตั้งระยะใกล้สุด 2 เมตร ไกลสุด 25 เมตรด้วยกราฟ Logarithmic และต่อสัญญาณเสียงเข้าสู่ช่องบัส SFX',
      },
      when: {
        en: 'Gunshots, footsteps, monster roars, waterfall ambient loops, and passing vehicles.',
        th: 'เสียงปืน, เสียงฝีเท้าเดิน, เสียงคำรามของสัตว์ร้าย, เสียงน้ำตก และเสียงรถวิ่งผ่าน',
      },
    },
    diagram: {
      type: 'actor-component',
      title: {
        en: 'Audio Mixer Bus Routing Architecture',
        th: 'โครงสร้างการต่อสายระบบเสียง Audio Mixer Bus',
      },
      description: {
        en: 'Master Bus (Main Volume Slider) -> BGM Bus (Music) | SFX Bus (Footsteps, Guns) | Voice Bus (Dialogues) | UI Bus (Button clicks).',
        th: 'Master Bus (คุมความดังรวม) -> แยกสายเข้า BGM (ดนตรี) | SFX (เอฟเฟกต์ต่อสู้) | Voice (เสียงพูด) | UI (เสียงกดปุ่ม)',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Understanding Distance Rolloff Curves',
          th: 'ทำความเข้าใจกราฟความดังตามระยะทาง (Distance Rolloff)',
        },
        explanation: {
          en: 'Linear rolloff drops volume evenly but sounds unnatural to human ears. Logarithmic rolloff mimics real-world sound physics: volume drops quickly at first, then gently trails off into the distance.',
          th: 'การลดเสียงแบบเส้นตรงจะฟังดูแข็งกระด้างและหลอกหู กราฟแบบ Logarithmic จะเลียนแบบฟิสิกส์ของเสียงจริงในธรรมชาติ: จะค่อยๆ เบาลงอย่างนุ่มนวลและจางหายไปตามระยะทาง',
        },
      },
    ],
    codeExamples: [
      {
        title: 'Dynamic Footstep Sound Pitch Modulation',
        language: 'csharp',
        code: `using UnityEngine;

public class FootstepSoundPlayer : MonoBehaviour
{
    [SerializeField] private AudioSource audioSource;
    [SerializeField] private AudioClip[] footstepClips;

    public void PlayFootstep()
    {
        if (footstepClips.Length == 0) return;

        // 1. Pick a random audio clip from the array
        AudioClip selectedClip = footstepClips[Random.Range(0, footstepClips.Length)];

        // 2. Micro-pitch randomization (prevents ear fatigue from repetitive sounds!)
        audioSource.pitch = Random.Range(0.88f, 1.12f);
        audioSource.volume = Random.Range(0.85f, 1.0f);

        audioSource.PlayOneShot(selectedClip);
    }
}`,
        explanation: {
          en: 'Randomizing pitch by ±12% on repetitive sounds (like footsteps and gunshots) completely eliminates player ear fatigue.',
          th: 'การสุ่มระดับเสียง Pitch เล็กน้อย ±12% กับเสียงที่เกิดซ้ำๆ (เช่น เสียงก้าวเดินหรือเสียงยิงปืน) จะช่วยตัดความน่ารำคาญและทำให้เสียงฟังดูเป็นธรรมชาติ',
        },
      },
    ],
    practiceChecklist: [
      { id: 'gi01-1', title: { en: 'Create Audio Mixer with Master, BGM, and SFX groups', th: 'สร้าง Audio Mixer พร้อมแยกกลุ่ม Master, BGM และ SFX' }, completed: false },
      { id: 'gi01-2', title: { en: 'Enable 3D Spatial Audio (Spatial Blend = 1.0) on world sound emitters', th: 'เปิดระบบเสียง 3D (Spatial Blend = 1.0) บนวัตถุในโลก' }, completed: false },
      { id: 'gi01-3', title: { en: 'Add pitch randomization (0.9 to 1.1) to weapon shooting sounds', th: 'ใส่การสุ่มระดับเสียง Pitch (0.9 ถึง 1.1) ให้กับเสียงยิงปืน' }, completed: false },
    ],
    miniChallenge: {
      prompt: {
        en: 'Why should Background Music (BGM) and UI click sounds always have Spatial Blend set to 0.0 (2D)?',
        th: 'ทำไมดนตรีประกอบฉาก (BGM) และเสียงกดปุ่มเมนู (UI) จึงต้องตั้งค่า Spatial Blend เป็น 0.0 (2D) เสมอ?',
      },
      hint: {
        en: 'Imagine what would happen to the music if the player character turned their head to the left.',
        th: 'ลองจินตนาการดูว่าจะเกิดอะไรขึ้นกับเพลงประกอบหากผู้เล่นหันหน้าตัวละครไปทางซ้าย',
      },
      solution: {
        en: 'If BGM was 3D, turning the character would pan the music entirely into one ear or make it quiet when walking away! BGM and UI belong directly inside the player’s headphones equally at all times.',
        th: 'หากเพลง BGM เป็นเสียง 3D การหมุนตัวละครจะทำให้เสียงเพลงไหลไปดังที่หูข้างเดียว หรือเสียงเพลงจะเบาลงเมื่อเดินห่างออกมา! ดนตรีและเสียงปุ่มกดต้องดังชัดเจนในหูฟังทั้งสองข้างอย่างเท่าเทียมกันเสมอ',
      },
    },
    commonMistakes: [
      {
        mistake: { en: 'Playing the exact same unvaried audio file 50 times in a row for machine gun bullets', th: 'เปิดไฟล์เสียงเดิมเป๊ะๆ ซ้ำกัน 50 รอบรัวๆ สำหรับปืนกล' },
        why: { en: 'The human brain quickly detects the repetition, resulting in the dreaded "machine gun effect" of ear fatigue.', th: 'สมองของมนุษย์จะจับได้ทันทีและรู้สึกรำคาญเสียงสังเคราะห์ที่ซ้ำซาก' },
        fix: { en: 'Randomize audio pitch between 0.9 and 1.1, or cycle randomly between 3-4 slightly different gunshot recordings.', th: 'สุ่มระดับเสียง Pitch ระหว่าง 0.9 ถึง 1.1 หรือสลับเล่นไฟล์เสียงยิงปืน 3-4 แบบที่บันทึกไว้ต่างกันเล็กน้อย' },
      },
    ],
    quiz: [
      {
        question: {
          en: 'What audio effect should be applied to sound when the source is hidden behind a thick concrete wall?',
          th: 'เอฟเฟกต์เสียงใดที่ควรนำมาใช้เมื่อต้นกำเนิดเสียงถูกซ่อนอยู่หลังกำแพงคอนกรีตหนา?',
        },
        options: {
          en: [
            'Low-Pass Filter (muffles high frequencies)',
            'Flanger',
            'Bitcrusher',
            'Pitch Shifter +2 Octaves',
          ],
          th: [
            'Low-Pass Filter (ตัดเสียงแหลมออก ทำให้เสียงอู้อี้)',
            'Flanger',
            'Bitcrusher',
            'Pitch Shifter เพิ่มขึ้น 2 อ็อกเทฟ',
          ],
        },
        correctIndex: 0,
        explanation: {
          en: 'Real solid obstacles absorb high frequencies while allowing deep low bass frequencies to pass through, simulated via a Low-Pass Filter.',
          th: 'สิ่งกีดขวางในโลกจริงจะดูดซับเสียงความถี่สูง (เสียงแหลม) และปล่อยให้เสียงเบสทุ้มๆ ลอดผ่าน Low-Pass Filter จึงสร้างความรู้สึกอู้อี้สมจริง',
        },
      },
    ],
  },
  {
    id: 'general-advanced-001',
    engine: 'general',
    level: 'advanced',
    lessonNumber: 4,
    slug: 'multiplayer-networking-client-server-replication',
    heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    heroImageCaption: {
      en: 'Authoritative client-server multiplayer network topology: RPC execution, variable replication, and lag compensation',
      th: 'โครงสร้างระบบออนไลน์ Client-Server ที่มีเซิร์ฟเวอร์คุมกฎ: การเรียก RPC, การส่งข้อมูล Replication และการชดเชยปิง (Lag Compensation)',
    },
    title: {
      en: 'Multiplayer Networking: Client-Server & Replication',
      th: 'สถาปัตยกรรมระบบเกมออนไลน์ (Multiplayer): Server Authority และ Replication',
    },
    shortDescription: {
      en: 'Master multiplayer network engineering: implement authoritative server validation to prevent cheating, replicate player states, and understand client prediction.',
      th: 'เรียนรู้สถาปัตยกรรมระบบเกมออนไลน์ระดับมืออาชีพ: ทำความเข้าใจเซิร์ฟเวอร์คุมกฎ (Authoritative Server) ป้องกันโปรโกง, การส่งตัวแปร Replication และการทำนายล่วงหน้า Client Prediction',
    },
    estimatedMinutes: 40,
    tags: ['Advanced', 'General', 'Multiplayer', 'Networking', 'Server', 'Replication'],
    startFromZero: false,
    objectives: {
      en: [
        'Understand Authoritative Server Architecture vs vulnerable Peer-to-Peer systems',
        'Learn the difference between Server RPCs (Client calls, Server runs) and Multicast RPCs',
        'Master Variable Replication and OnRep notification callbacks',
      ],
      th: [
        'เข้าใจสถาปัตยกรรม Authoritative Server ปะทะระบบ Peer-to-Peer ที่โดนโกงได้ง่าย',
        'แยกแยะประเภทของ RPC: Server RPC (เครื่องผู้เล่นสั่ง แต่เซิร์ฟเวอร์เป็นคนทำ) ปะทะ Multicast RPC',
        'เรียนรู้การส่งตัวแปรข้ามเครื่องด้วย Variable Replication และฟังก์ชันแจ้งเตือน OnRep',
      ],
    },
    prerequisites: {
      en: ['Completed General Level 0 Math & State Machine concepts'],
      th: ['ผ่านเนื้อหาคณิตศาสตร์เกมและแนวคิด State Machine'],
    },
    zeroExplanation: {
      what: {
        en: 'Multiplayer Networking is the technology that synchronizes game worlds across distinct physical computers separated by hundreds of miles across the internet.',
        th: 'Multiplayer Networking คือเทคโนโลยีที่คอยซิงค์โลกของเกมระหว่างคอมพิวเตอร์หลายเครื่องที่อยู่ห่างกันคนละซีกโลกผ่านเครือข่ายอินเทอร์เน็ต',
      },
      why: {
        en: 'If clients can dictate their own health or position, any 12-year-old with a memory editor can give themselves infinite health and teleport. The server must be the single source of truth.',
        th: 'หากเครื่องผู้เล่นสามารถบอกเลือดหรือตำแหน่งตัวเองได้ ใครๆ ก็สามารถเปิดโปรโกงแก้ตัวเลขเลือดไม่จำกัดได้ เซิร์ฟเวอร์จึงต้องเป็นผู้ถือความจริงแต่เพียงผู้เดียว (Source of Truth)',
      },
      how: {
        en: 'The client sends an input request: "Server, I pressed the Fire button". The server validates ammunition and cooldowns, applies damage, and replicates the new HP to all clients.',
        th: 'เครื่องผู้เล่นส่งคำขอ: "เซิร์ฟเวอร์ ฉันกดยิงปืนนะ" เซิร์ฟเวอร์ตรวจสอบว่ามีกระสุนจริงไหม คิดดาเมจ และกระจายค่าเลือดใหม่ไปให้ทุกคนในห้อง',
      },
      when: {
        en: 'Co-op shooters, battle royales, MMOs, fighting games, and turn-based online strategy.',
        th: 'เกมยิง Co-op, แนว Battle Royale, เกม MMO, เกมต่อสู้ และเกมวางแผนออนไลน์',
      },
    },
    diagram: {
      type: 'save-load',
      title: {
        en: 'Authoritative Server Validation Cycle',
        th: 'ขั้นตอนการตรวจสอบความถูกต้องโดยเซิร์ฟเวอร์',
      },
      description: {
        en: 'Client presses Shoot -> Sends Server RPC -> Server checks ammo > 0 -> Server fires bullet -> Replicates CurrentHealth variable to all connected clients -> OnRep_Health updates UI.',
        th: 'ผู้เล่นกดปุ่มยิง -> ส่ง Server RPC -> เซิร์ฟเวอร์เช็กว่ามีกระสุนจริง -> เซิร์ฟเวอร์คิดดาเมจ -> ส่งค่าเลือดใหม่ผ่าน Replication -> เครื่องทุกคนรัน OnRep_Health อัปเดต UI',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'The Golden Rule: Never Trust the Client',
          th: 'กฎเหล็กของเกมออนไลน์: ห้ามไว้ใจเครื่อง Client เด็ดขาด',
        },
        explanation: {
          en: 'Clients only send inputs and player intentions (e.g. Move Vectors, Keypresses). The server executes all gameplay rules, hit detections, health reductions, and economy transactions.',
          th: 'เครื่อง Client มีหน้าที่แค่ส่งความจำนง (เช่น กดปุ่มเดิน หรือเหนี่ยวไก) ส่วนเซิร์ฟเวอร์จะเป็นคนคุมกฎ ตรวจสอบการยิงโดน หักเลือด และจัดการเงินในเกมทั้งหมด',
        },
      },
    ],
    codeExamples: [
      {
        title: 'Authoritative Health Replication & Server RPC',
        language: 'csharp',
        code: `// Universal Authoritative Networking Pattern (Unity Netcode / Unreal Engine):

// 1. Replicated Variable with Notification Callback
[ReplicatedUsing = nameof(OnRep_CurrentHealth)]
public float currentHealth = 100f;

// 2. Server RPC (Client asks server to perform an action)
[ServerRpc]
public void RequestShootWeaponServerRpc(Vector3 aimDirection)
{
    // Authoritative check on the server
    if (ammoCount <= 0 || isReloading) return;

    ammoCount--;

    // Perform server-authoritative raycast hit check
    if (Physics.Raycast(firePoint.position, aimDirection, out RaycastHit hit, 100f))
    {
        if (hit.collider.TryGetComponent(out PlayerHealth target))
        {
            // Server modifies health directly!
            target.currentHealth -= 25f;
        }
    }
}

// 3. Client OnRep Callback (Fires automatically when variable replicates)
private void OnRep_CurrentHealth(float oldHealth, float newHealth)
{
    // Update local HUD and play pain sound
    hudHealthSlider.value = newHealth;
    if (newHealth < oldHealth) PlayPainVFX();
}`,
        explanation: {
          en: 'Because currentHealth is modified exclusively on the server, hackers modifying local RAM values will have their memory instantly overwritten by the authoritative server value.',
          th: 'เนื่องจากตัวแปรเลือดถูกแก้ไขบนเซิร์ฟเวอร์เท่านั้น คนที่ใช้โปรโกงแก้แรมในเครื่องตัวเองจะถูกข้อมูลจริงจากเซิร์ฟเวอร์เขียนทับกลับคืนทันที!',
        },
      },
    ],
    practiceChecklist: [
      { id: 'ga01-1', title: { en: 'Declare replicated variable for player health', th: 'ประกาศตัวแปร Replicated สำหรับเลือดของตัวละคร' }, completed: false },
      { id: 'ga01-2', title: { en: 'Implement Server RPC for weapon firing', th: 'เขียนฟังก์ชัน Server RPC สำหรับการยิงปืน' }, completed: false },
      { id: 'ga01-3', title: { en: 'Bind OnRep callback to update the local HUD slider', th: 'สร้างฟังก์ชัน OnRep เพื่ออัปเดตหลอดเลือดบนหน้าจอ HUD เมื่อข้อมูลเปลี่ยน' }, completed: false },
    ],
    miniChallenge: {
      prompt: {
        en: 'If a client has 150ms ping and shoots an enemy, why might they see blood on their screen but the enemy takes zero damage?',
        th: 'หากผู้เล่นมีปิง 150ms แล้วยิงใส่ศัตรู ทำไมในจอเขาถึงเห็นเลือดสาด แต่ศัตรูกลับไม่เสียเลือดเลยแม้แต่นิดเดียว?',
      },
      hint: {
        en: 'Think about where the enemy was on the server 150ms later when the request arrived.',
        th: 'ลองคิดดูว่าเมื่อคำขอยิงปืนเดินทางไปถึงเซิร์ฟเวอร์ในอีก 150ms ถัดมา ศัตรูได้เดินหลบไปอยู่ที่ไหนแล้ว',
      },
      solution: {
        en: 'Client-side prediction showed the shot hitting based on outdated local visuals. By the time the message arrived at the server 150ms later, the enemy had already walked behind a wall! Without Lag Compensation (server rewind), the server correctly rules it a miss.',
        th: 'เครื่องผู้เล่นแสดงผลเลือดล่วงหน้าตามภาพในจอของตัวเอง แต่กว่าสัญญาณจะวิ่งไปถึงเซิร์ฟเวอร์ในอีก 150ms ถัดมา ศัตรูได้เดินหลบเข้ากำแพงไปแล้ว! หากไม่มีระบบ Lag Compensation เซิร์ฟเวอร์จะตัดสินว่ายิงไม่โดน!',
      },
    },
    commonMistakes: [
      {
        mistake: { en: 'Letting the client calculate damage and send "TakeDamage(50)" to the server', th: 'ปล่อยให้เครื่องผู้เล่นคิดดาเมจเอง แล้วส่งคำสั่ง "ลดเลือด 50" ไปบอกเซิร์ฟเวอร์' },
        why: { en: 'This is the #1 vulnerability in online games: cheaters can send "TakeDamage(999999)" to kill the entire lobby instantly.', th: 'นี่คือช่องโหว่อันดับ 1 ของเกมออนไลน์ คนโกงสามารถส่งคำสั่งลดเลือด 999999 หน่วยเพื่อฆ่าคนทั้งห้องในพริบตาเดียว' },
        fix: { en: 'Clients only request "I pulled the trigger"; the server calculates who got hit and how much damage was dealt.', th: 'เครื่องผู้เล่นทำได้แค่บอกว่า "ฉันกดยิงนะ" ส่วนเซิร์ฟเวอร์จะเป็นคนคำนวณเองทั้งหมดว่าโดนใครและลดเลือดเท่าไหร่' },
      },
    ],
    quiz: [
      {
        question: {
          en: 'What is the core principle of Authoritative Server architecture in multiplayer games?',
          th: 'หัวใจสำคัญที่สุดของสถาปัตยกรรม Authoritative Server ในเกมออนไลน์คืออะไร?',
        },
        options: {
          en: [
            'The server is the ultimate source of truth; clients only send inputs and receive validated state',
            'All clients must run at the exact same framerate',
            'Graphics rendering is performed on the server and streamed as video',
            'Clients have full authority over their own inventory and health',
          ],
          th: [
            'เซิร์ฟเวอร์คือผู้ถือความจริงสูงสุด เครื่องผู้เล่นทำได้แค่ส่งคำขอและรับผลลัพธ์ที่ถูกต้องกลับมา',
            'เครื่องทุกคนต้องรันเฟรมเรตเท่ากันเป๊ะ',
            'การเรนเดอร์ภาพทั้งหมดเกิดขึ้นบนเซิร์ฟเวอร์แล้วสตรีมมาเป็นวิดีโอ',
            'เครื่องผู้เล่นมีอำนาจตัดสินใจเรื่องเลือดและของในกระเป๋าของตัวเองได้เต็มที่',
          ],
        },
        correctIndex: 0,
        explanation: {
          en: 'An authoritative server prevents cheats and desyncs by validating all gameplay logic and distributing the true world state.',
          th: 'Authoritative Server ป้องกันการโกงและการไม่ตรงกันของข้อมูล โดยเซิร์ฟเวอร์จะเป็นผู้คุมกฎและกระจายสถานะที่ถูกต้องที่สุดให้ทุกคน',
        },
      },
    ],
  },
];
