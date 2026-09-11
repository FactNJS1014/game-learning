import { Lesson } from '../../types';

export const unityBasicLessons: Lesson[] = [
  {
    id: 'unity-basic-001',
    engine: 'unity',
    level: 'basic',
    lessonNumber: 5,
    slug: 'monobehaviour-lifecycle-csharp',
    heroImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    heroImageCaption: {
      en: 'Modern C# scripting architecture and IDE compilation for game logic execution',
      th: 'การเขียนโปรแกรมภาษา C# และการทำงานของสคริปต์ในเอนจินเกม',
    },
    title: {
      en: 'C# Scripting & MonoBehaviour Lifecycle Mastery',
      th: 'พื้นฐาน C# และวงจรชีวิต MonoBehaviour (Awake, Start, Update, FixedUpdate)',
    },
    shortDescription: {
      en: 'Master when and why specific methods execute in Unity. Eliminate race conditions and write rock-solid gameplay logic.',
      th: 'เข้าใจลำดับการทำงานของฟังก์ชันใน Unity ป้องกันปัญหาตัวแปรว่าง (NullReference) และเขียนโค้ดได้อย่างแม่นยำ',
    },
    estimatedMinutes: 30,
    tags: ['Basic', 'Unity', 'C#', 'Lifecycle', 'MonoBehaviour'],
    startFromZero: false,
    objectives: {
      en: [
        'Understand the exact order of execution: Awake -> OnEnable -> Start -> FixedUpdate -> Update -> LateUpdate -> OnDestroy',
        'Learn why variable initialization belongs in Awake() and dependency linking in Start()',
        'Distinguish between Update() (visuals/input) and FixedUpdate() (physics calculation)',
      ],
      th: [
        'เข้าใจลำดับการทำงานที่แท้จริง: Awake -> OnEnable -> Start -> FixedUpdate -> Update -> LateUpdate -> OnDestroy',
        'เข้าใจว่าทำไมต้องเตรียมตัวแปรใน Awake() และเชื่อมโยงข้อมูลข้ามอ็อบเจกต์ใน Start()',
        'แยกความแตกต่างเด็ดขาดระหว่าง Update() (รับปุ่ม/ภาพ) และ FixedUpdate() (ฟิสิกส์)',
      ],
    },
    prerequisites: {
      en: ['Completed Unity Level 0 fundamentals (GameObjects, Components)'],
      th: ['ผ่านเนื้อหา Unity Level 0 พื้นฐาน (GameObject, Components)'],
    },
    zeroExplanation: {
      what: {
        en: 'The MonoBehaviour lifecycle is the strict sequence in which Unity invokes predefined callback methods on every active script.',
        th: 'วงจรชีวิต MonoBehaviour คือลำดับขั้นตอนที่ Unity เรียกใช้ฟังก์ชันที่กำหนดไว้ล่วงหน้าบนสคริปต์ทุกตัวในฉาก',
      },
      why: {
        en: 'If Script A tries to read Script B’s health before Script B sets it, your game crashes with a NullReferenceException. Understanding order of execution prevents this.',
        th: 'หากสคริปต์ A พยายามอ่านค่าเลือดจากสคริปต์ B ก่อนที่สคริปต์ B จะกำหนดค่าเสร็จ เกมจะ Error ทันที การเข้าใจลำดับวงจรชีวิตจึงป้องกันบั๊กนี้ได้ 100%',
      },
      how: {
        en: 'Use Awake() for internal component caching (GetComponent). Use Start() for external cross-object communication. Use FixedUpdate() for physics and Update() for input.',
        th: 'ใช้ Awake() เพื่อเตรียมข้อมูลตัวเอง (เช่น GetComponent), ใช้ Start() เพื่อดึงข้อมูลจากสคริปต์อื่น, ใช้ FixedUpdate() สำหรับฟิสิกส์ และ Update() สำหรับรับปุ่มกด',
      },
      when: {
        en: 'On every single C# script you will ever write in your Unity career.',
        th: 'ในสคริปต์ C# ทุกตัวที่คุณจะเขียนในตลอดเส้นทางการพัฒนาเกมด้วย Unity',
      },
    },
    diagram: {
      type: 'lifecycle',
      title: {
        en: 'Unity MonoBehaviour Execution Order',
        th: 'ลำดับการทำงานของฟังก์ชัน MonoBehaviour ใน Unity',
      },
      description: {
        en: 'Initialization (Awake, Start) -> Physics Cycle (FixedUpdate) -> Logic Frame (Update) -> Decommission (OnDestroy).',
        th: 'ช่วงเริ่มต้น (Awake, Start) -> วงรอบฟิสิกส์ (FixedUpdate) -> เฟรมตรรกะ (Update) -> การทำลาย (OnDestroy)',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Awake() vs Start(): The Two-Phase Initialization',
          th: 'Awake() กับ Start(): สองสเต็ปการเริ่มต้นที่ต้องแยกให้ออก',
        },
        explanation: {
          en: 'Awake() executes immediately when the GameObject is instantiated, even if the script component is disabled. Start() executes just before the very first frame update, only if the component is enabled.',
          th: 'Awake() จะทำงานทันทีที่วัตถุถูกสร้างขึ้นมาในฉาก แม้สคริปต์จะถูกติ๊กปิดไว้ ส่วน Start() จะทำงานก่อนเริ่มเฟรมแรกเฉพาะตอนที่สคริปต์เปิดใช้งานอยู่',
        },
        inspectorData: {
          componentName: 'LifecycleDemo (Script)',
          properties: [
            { name: 'Script Active', value: 'True [Checked]', hint: 'Calls OnEnable and Start' },
            { name: 'Target Rigidbody', value: 'Cached in Awake()', hint: 'Safe from NullReference' },
          ],
        },
      },
      {
        stepNumber: 2,
        title: {
          en: 'FixedUpdate() vs Update(): The Golden Rule',
          th: 'FixedUpdate() ปะทะ Update(): กฎเหล็กที่ห้ามละเมิด',
        },
        explanation: {
          en: 'Update() runs once per rendered frame (variable rate, e.g. 1/60s or 1/144s). FixedUpdate() runs on a strictly timed timer (default 0.02s = exactly 50 times/sec). Never apply physics forces in Update()!',
          th: 'Update() ทำงานตามเฟรมเรตหน้าจอ (คอมเร็วทำงานถี่ คอมช้าทำงานช้า) ส่วน FixedUpdate() ทำงานตามเวลาที่แน่นอน (ทุกๆ 0.02 วินาที) ห้ามใส่คำสั่งแรงฟิสิกส์ใน Update() เด็ดขาด!',
        },
      },
    ],
    codeExamples: [
      {
        title: 'Professional Lifecycle Architecture',
        language: 'csharp',
        code: `using UnityEngine;

public class PlayerLifecycleManager : MonoBehaviour
{
    private Rigidbody rb;
    private float horizontalInput;
    [SerializeField] private float moveSpeed = 8f;

    // Step 1: Self initialization (Zero dependencies on other scripts)
    void Awake()
    {
        rb = GetComponent<Rigidbody>();
    }

    // Step 2: Cross-object initialization (Other objects already awake)
    void Start()
    {
        GameManager.Instance?.RegisterPlayer(this);
    }

    // Step 3: Frame logic & input gathering (Variable framerate)
    void Update()
    {
        horizontalInput = Input.GetAxisRaw("Horizontal");
    }

    // Step 4: Physics movement (Strict fixed step: 0.02s)
    void FixedUpdate()
    {
        Vector3 targetVelocity = new Vector3(horizontalInput * moveSpeed, rb.linearVelocity.y, 0f);
        rb.linearVelocity = targetVelocity;
    }

    // Step 5: Cleanup when killed or scene unloads
    void OnDestroy()
    {
        GameManager.Instance?.UnregisterPlayer(this);
    }
}`,
        explanation: {
          en: 'Inputs are captured in Update() so no keypresses are missed. Movement calculations are applied in FixedUpdate() for smooth, stutter-free physics simulation.',
          th: 'รับปุ่มกดใน Update() เพื่อไม่ให้พลาดจังหวะการกด และสั่งขยับความเร็วใน FixedUpdate() เพื่อให้ฟิสิกส์นุ่มนวล ไม่กระตุก',
        },
      },
    ],
    practiceChecklist: [
      { id: 'ub01-1', title: { en: 'Cache Rigidbody inside Awake()', th: 'ดึง Component Rigidbody เก็บไว้ใน Awake()' }, completed: false },
      { id: 'ub01-2', title: { en: 'Read Input.GetAxisRaw inside Update()', th: 'อ่านค่าปุ่มกดในฟังก์ชัน Update()' }, completed: false },
      { id: 'ub01-3', title: { en: 'Apply linearVelocity inside FixedUpdate()', th: 'กำหนดค่าความเร็ว linearVelocity ใน FixedUpdate()' }, completed: false },
    ],
    miniChallenge: {
      prompt: {
        en: 'If you put Input.GetKeyDown(KeyCode.Space) inside FixedUpdate(), what common bug might occur?',
        th: 'หากเราเขียน Input.GetKeyDown(KeyCode.Space) ไว้ใน FixedUpdate() จะเกิดบั๊กอะไรขึ้นบ่อยครั้ง?',
      },
      hint: {
        en: 'Compare how often Update runs at 144 FPS vs FixedUpdate at 50 Hz.',
        th: 'เปรียบเทียบความถี่ระหว่าง Update ที่ 144 FPS กับ FixedUpdate ที่รัน 50 ครั้งต่อวินาที',
      },
      solution: {
        en: 'Input.GetKeyDown is only true for 1 render frame. Because FixedUpdate ticks at a different rate, the jump input will frequently be missed or feel unresponsive!',
        th: 'Input.GetKeyDown จะเป็นจริงแค่เฟรมเดียวเท่านั้น หากผู้เล่นกดปุ่มในจังหวะที่อยู่นอกรอบ 0.02 วินาทีของ FixedUpdate ตัวละครจะไม่ยอมกระโดด (ปุ่มกดไม่ติด)!',
      },
    },
    commonMistakes: [
      {
        mistake: { en: 'Calling GetComponent every single frame inside Update()', th: 'เรียก GetComponent ใน Update() ซ้ำๆ ทุกๆ เสี้ยววินาที' },
        why: { en: 'GetComponent searches the object hierarchy and wastes massive CPU performance.', th: 'GetComponent ต้องค้นหาข้อมูลในหน่วยความจำ การเรียก 60 ครั้งต่อวินาทีทำให้เกมกระตุก' },
        fix: { en: 'Cache the reference once inside Awake() or Start() into a private variable.', th: 'ดึงข้อมูลมาเก็บไว้ในตัวแปร private ใน Awake() เพียงครั้งเดียว' },
      },
    ],
    quiz: [
      {
        question: {
          en: 'Where should you initialize internal references with GetComponent()?',
          th: 'ตำแหน่งใดที่เหมาะสมที่สุดในการดึง Component ตัวเองด้วย GetComponent()?',
        },
        options: {
          en: ['Update()', 'Awake()', 'FixedUpdate()', 'OnGUI()'],
          th: ['Update()', 'Awake()', 'FixedUpdate()', 'OnGUI()'],
        },
        correctIndex: 1,
        explanation: {
          en: 'Awake() runs before any Start() methods, ensuring self-contained components are cached early.',
          th: 'Awake() ทำงานก่อนฟังก์ชัน Start() ทั้งหมด จึงมั่นใจได้ว่า Component ตัวเองพร้อมใช้งานเสมอ',
        },
      },
    ],
  },
  {
    id: 'unity-basic-002',
    engine: 'unity',
    level: 'basic',
    lessonNumber: 6,
    slug: '2d-3d-character-controller',
    heroImage: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1200&q=80',
    heroImageCaption: {
      en: 'Kinematic character controller movement: velocity vectors, collision detection, and responsive jumping',
      th: 'ระบบควบคุมตัวละคร: เวกเตอร์ความเร็ว การตรวจจับการแตะพื้น และการกระโดดที่ตอบสนองรวดเร็ว',
    },
    title: {
      en: '2D/3D Character Controller: Movement, Velocity & Ground Check',
      th: 'การสร้างระบบควบคุมตัวละคร (Character Controller): การเดิน ความเร็ว และ Ground Check',
    },
    shortDescription: {
      en: 'Build responsive, AAA-feeling character locomotion with precise jumping, air control, and ground detection raycasts.',
      th: 'สร้างระบบการควบคุมตัวละครที่ตอบสนองทันใจ เดิน กระโดดแม่นยำ และตรวจจับพื้นด้วย Raycast',
    },
    estimatedMinutes: 35,
    tags: ['Basic', 'Unity', 'Controller', 'GroundCheck', 'Movement'],
    startFromZero: false,
    objectives: {
      en: [
        'Understand direct velocity manipulation vs AddForce physics impulses',
        'Implement an airtight Ground Check using Physics.CheckSphere or Raycast',
        'Prevent the infamous "infinite jump / wall climb" bug in platformers',
      ],
      th: [
        'เข้าใจความแตกต่างระหว่างการสั่งความเร็วโดยตรง (Velocity) กับการยิงแรงผลัก (AddForce)',
        'สร้างระบบตรวจจับพื้น (Ground Check) ด้วย Physics.CheckSphere หรือ Raycast ที่แม่นยำ',
        'ป้องกันบั๊กยอดฮิต: ผู้เล่นกระโดดกลางอากาศได้ไม่จำกัด หรือปีนกำแพงได้',
      ],
    },
    prerequisites: {
      en: ['Completed Unity Basic 1: MonoBehaviour Lifecycle'],
      th: ['ผ่านเนื้อหา Unity Basic 1: วงจรชีวิต MonoBehaviour'],
    },
    zeroExplanation: {
      what: {
        en: 'A Character Controller is the master script governing player velocity, acceleration, ground detection, and airborne gravity.',
        th: 'Character Controller คือสคริปต์หลักที่ควบคุมความเร็ว การเร่งฝีเท้า การตรวจสอบการแตะพื้น และแรงโน้มถ่วงของตัวละคร',
      },
      why: {
        en: 'Standard physics AddForce makes characters feel like sliding ice cubes. Direct velocity control gives the crisp, tight feel expected in games like Mario or Hollow Knight.',
        th: 'การใช้แรง AddForce อย่างเดียวจะทำให้ตัวละครลื่นเหมือนอยู่บนลานน้ำแข็ง การควบคุม Velocity โดยตรงจึงมอบความรู้สึกบังคับที่คมและเป๊ะกว่า',
      },
      how: {
        en: 'We calculate horizontal velocity from input axes, use Physics.CheckSphere at the character feet to verify ground contact, and apply a single vertical impulse on Jump.',
        th: 'เราคำนวณความเร็วแนวนอนจากปุ่มกด, ใช้ Physics.CheckSphere ยิงตรวจจับที่ปลายเท้าว่าแตะพื้นจริงไหม, และสั่งกระโดดเมื่อแตะพื้นเท่านั้น',
      },
      when: {
        en: 'Any game where the player controls a moving humanoid or creature.',
        th: 'ในทุกเกมที่มีตัวละครเดิน วิ่ง กระโดด ไม่ว่าจะเป็น 2D หรือ 3D',
      },
    },
    diagram: {
      type: 'character-movement',
      title: {
        en: 'Ground Detection & Jump Mechanics',
        th: 'กลไกการตรวจจับพื้นและการกระโดดที่สมบูรณ์แบบ',
      },
      description: {
        en: 'Feet Sensor Sphere touches Ground Layer -> isGrounded = true -> Allows Jump Impulse -> isGrounded = false mid-air.',
        th: 'เซนเซอร์ทรงกลมที่เท้าสัมผัส Layer พื้น -> isGrounded เป็นจริง -> อนุญาตให้กดกระโดด -> ระหว่างลอยตัว isGrounded เป็นเท็จ',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Setting up the Ground Check Transform',
          th: 'การสร้างจุดตรวจจับพื้น (Ground Check Point)',
        },
        explanation: {
          en: 'Create an empty child GameObject under your Player avatar and place it exactly at the bottom of the player capsule. Name it "GroundCheck".',
          th: 'สร้าง GameObject ลูกว่างๆ ใต้ตัวละคร แล้วขยับตำแหน่งไปไว้ที่ปลายเท้าของแคปซูล ตั้งชื่อว่า "GroundCheck"',
        },
        inspectorData: {
          componentName: 'GroundCheck Transform',
          properties: [
            { name: 'Position', value: 'X: 0, Y: -1.0, Z: 0', hint: 'At the bottom of the Capsule' },
            { name: 'Ground Layer', value: 'Layer 6: "Ground"', hint: 'Only collides with terrain' },
          ],
        },
      },
    ],
    codeExamples: [
      {
        title: 'Robust 3D Physics Character Controller',
        language: 'csharp',
        code: `using UnityEngine;

[RequireComponent(typeof(Rigidbody))]
public class ResponsivePlayerController : MonoBehaviour
{
    [Header("Locomotion")]
    [SerializeField] private float runSpeed = 8.5f;
    [SerializeField] private float jumpPower = 7.0f;

    [Header("Ground Detection")]
    [SerializeField] private Transform groundCheckPoint;
    [SerializeField] private float groundCheckRadius = 0.25f;
    [SerializeField] private LayerMask groundLayer;

    private Rigidbody rb;
    private float moveX;
    private float moveZ;
    private bool isGrounded;

    void Awake()
    {
        rb = GetComponent<Rigidbody>();
        rb.freezeRotation = true; // Prevent player from tipping over
    }

    void Update()
    {
        moveX = Input.GetAxisRaw("Horizontal");
        moveZ = Input.GetAxisRaw("Vertical");

        // Sphere overlap check at the feet
        isGrounded = Physics.CheckSphere(groundCheckPoint.position, groundCheckRadius, groundLayer);

        if (Input.GetButtonDown("Jump") && isGrounded)
        {
            rb.linearVelocity = new Vector3(rb.linearVelocity.x, jumpPower, rb.linearVelocity.z);
        }
    }

    void FixedUpdate()
    {
        Vector3 moveDirection = (transform.forward * moveZ + transform.right * moveX).normalized;
        Vector3 desiredVelocity = new Vector3(moveDirection.x * runSpeed, rb.linearVelocity.y, moveDirection.z * runSpeed);
        rb.linearVelocity = desiredVelocity;
    }

    // Visualize ground check sphere in the Scene view
    void OnDrawGizmosSelected()
    {
        if (groundCheckPoint != null)
        {
            Gizmos.color = isGrounded ? Color.green : Color.red;
            Gizmos.DrawWireSphere(groundCheckPoint.position, groundCheckRadius);
        }
    }
}`,
        explanation: {
          en: 'Gizmos.DrawWireSphere visually renders the ground sensor sphere in the Unity Scene view (Green when touching ground, Red when airborne).',
          th: 'Gizmos.DrawWireSphere จะวาดทรงกลมเซนเซอร์ตรวจจับพื้นในหน้าต่าง Scene ให้เราเห็นด้วยตาเปล่า (สีเขียวเมื่อแตะพื้น, สีแดงเมื่อลอยอยู่)',
        },
      },
    ],
    practiceChecklist: [
      { id: 'ub02-1', title: { en: 'Create GroundCheck child GameObject at feet', th: 'สร้าง GameObject ลูก GroundCheck ที่ปลายเท้าตัวละคร' }, completed: false },
      { id: 'ub02-2', title: { en: 'Assign Layer "Ground" to floor meshes', th: 'ตั้งค่า Layer ของพื้นดินให้เป็น "Ground"' }, completed: false },
      { id: 'ub02-3', title: { en: 'Lock Rigidbody Rotation Constraints (X, Z)', th: 'ล็อกแกนหมุน Constraints ของ Rigidbody (X, Z) ไม่ให้ตัวละครล้ม' }, completed: false },
    ],
    miniChallenge: {
      prompt: {
        en: 'If your player character slowly tips over and rolls like a bowling pin when walking, how do you fix it?',
        th: 'หากตัวละครของคุณเดินชนขอบแล้วค่อยๆ ล้มกลิ้งลงไปเหมือนพินโบว์ลิ่ง จะแก้ปัญหาอย่างไร?',
      },
      hint: {
        en: 'Check the Rigidbody "Constraints" foldout in the Inspector.',
        th: 'ตรวจสอบหัวข้อ Constraints ใน Rigidbody บนหน้าต่าง Inspector',
      },
      solution: {
        en: 'Enable "Freeze Rotation" on the X and Z axes in the Rigidbody Constraints foldout. This forces the capsule to stay upright while allowing free Y rotation.',
        th: 'ติ๊กเครื่องหมายถูกที่ Freeze Rotation บนแกน X และ Z ในช่อง Constraints ของ Rigidbody เพื่อล็อกให้ตัวละครยืนตรงเสมอ',
      },
    },
    commonMistakes: [
      {
        mistake: { en: 'Player can jump infinitely in the air', th: 'ตัวละครสามารถกดกระโดดซ้ำๆ กลางอากาศได้ไม่จำกัด' },
        why: { en: 'The jump code does not verify isGrounded before applying vertical velocity.', th: 'โค้ดไม่ได้ตรวจเช็กค่า isGrounded ก่อนสั่งเพิ่มความเร็วในแนวดิ่ง' },
        fix: { en: 'Always check "if (Input.GetButtonDown("Jump") && isGrounded)"', th: 'ตรวจสอบเงื่อนไข "&& isGrounded" เสมอก่อนสั่งกระโดด' },
      },
    ],
    quiz: [
      {
        question: {
          en: 'Why do we freeze Rigidbody rotation on X and Z for a humanoid character?',
          th: 'ทำไมเราจึงต้อง Freeze Rotation บนแกน X และ Z ของ Rigidbody สำหรับตัวละครคน?',
        },
        options: {
          en: [
            'To make the character run faster',
            'To keep the character standing upright and prevent tipping over',
            'To save GPU memory',
            'To disable gravity',
          ],
          th: [
            'เพื่อให้ตัวละครวิ่งได้เร็วขึ้น',
            'เพื่อให้ตัวละครยืนตรงตลอดเวลาและไม่ล้มกลิ้ง',
            'เพื่อประหยัดหน่วยความจำ GPU',
            'เพื่อปิดแรงโน้มถ่วง',
          ],
        },
        correctIndex: 1,
        explanation: {
          en: 'Freezing X and Z rotation maintains upright posture while still allowing Y rotation for steering/turning.',
          th: 'การ Freeze แกน X และ Z ช่วยล็อกให้ตัวละครยืนหลังตรง ไม่ล้มกลิ้งไปตามแรงกระแทก ขณะที่ยังหมุนหันซ้ายขวาบนแกน Y ได้',
        },
      },
    ],
  },
  {
    id: 'unity-basic-003',
    engine: 'unity',
    level: 'basic',
    lessonNumber: 7,
    slug: 'spawning-combat-instantiate-destroy',
    heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    heroImageCaption: {
      en: 'Real-time particle dynamics, projectile trajectory calculation, and dynamic instantiation',
      th: 'การคำนวณวิถีกระสุน การระเบิดของเอฟเฟกต์อนุภาค และการสร้างวัตถุแบบไดนามิก',
    },
    title: {
      en: 'Spawning & Combat: Instantiate, Destroy & Projectiles',
      th: 'ระบบต่อสู้และการเกิดของวัตถุ: Instantiate, Destroy และการยิงกระสุน',
    },
    shortDescription: {
      en: 'Learn how to shoot projectiles, spawn explosion particle VFX, calculate hit damage, and safely destroy game entities.',
      th: 'สร้างระบบยิงปืน เสกกระสุน สร้างเอฟเฟกต์ระเบิด คำนวณความเสียหาย และลบวัตถุออกจากหน่วยความจำอย่างปลอดภัย',
    },
    estimatedMinutes: 30,
    tags: ['Basic', 'Unity', 'Combat', 'Instantiate', 'Prefabs'],
    startFromZero: false,
    objectives: {
      en: [
        'Master the Instantiate() method for dynamic spawning of Prefabs at runtime',
        'Learn how to set projectile velocity and muzzle flash spawn points',
        'Destroy objects with a lifetime countdown to prevent memory leaks (Destroy(gameObject, delay))',
      ],
      th: [
        'ใช้งานฟังก์ชัน Instantiate() เพื่อเสก Prefab ในฉากแบบเรียลไทม์',
        'กำหนดความเร็วของกระสุนและจุดปล่อย (Muzzle / Spawn Point)',
        'ลบวัตถุด้วยการตั้งเวลานับถอยหลัง Destroy(gameObject, delay) เพื่อป้องกันหน่วยความจำรั่วไหล',
      ],
    },
    prerequisites: {
      en: ['Completed Unity Basic 2: Character Controller'],
      th: ['ผ่านเนื้อหา Unity Basic 2: การสร้างระบบควบคุมตัวละคร'],
    },
    zeroExplanation: {
      what: {
        en: 'Instantiate creates an active clone of a Prefab in your scene. Destroy removes that clone from memory when its lifecycle ends.',
        th: 'Instantiate คือคำสั่งโคลนนิ่ง Prefab ออกมาในฉาก ส่วน Destroy คือคำสั่งทำลายและคืนหน่วยความจำเมื่อใช้งานเสร็จ',
      },
      why: {
        en: 'You cannot place 1,000 bullets manually in your scene before the game starts. You must spawn them dynamically when the trigger is pulled.',
        th: 'เราไม่สามารถเอากระสุนพันนัดไปวางเรียงในฉากล่วงหน้าได้ เราต้องสร้างมันขึ้นมาทันทีในจังหวะที่ผู้เล่นเหนี่ยวไกปืน',
      },
      how: {
        en: 'Instantiate(bulletPrefab, spawnPoint.position, spawnPoint.rotation); and schedule Destroy(bullet, 3.0f);.',
        th: 'สั่ง Instantiate โดยระบุ Prefab กระสุน, ตำแหน่งปลายกระบอกปืน, และทิศทางการหมุน จากนั้นตั้งเวลาลบด้วย Destroy(bullet, 3.0f);',
      },
      when: {
        en: 'Shooting guns, casting magic spells, spawning loot drops, and triggering explosion effects.',
        th: 'การยิงปืน, ร่ายเวทมนตร์, มอนสเตอร์ดรอปไอเทม, และเอฟเฟกต์ระเบิดทุกประเภท',
      },
    },
    diagram: {
      type: 'physics-pipeline',
      title: {
        en: 'The Projectile Lifecycle',
        th: 'วงจรชีวิตของกระสุนและการทำลาย',
      },
      description: {
        en: 'Fire Trigger -> Instantiate(Bullet) -> Fly with Velocity -> Hit Target or Timeout (3s) -> Spawn Explosion & Destroy.',
        th: 'กดปุ่มยิง -> เสกกระสุน -> พุ่งไปข้างหน้า -> ชนเป้าหมายหรือหมดเวลา (3 วินาที) -> เกิดระเบิดและลบกระสุนทิ้ง',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Creating the Bullet Prefab',
          th: 'การสร้าง Prefab กระสุน',
        },
        explanation: {
          en: 'Create a Sphere, attach a Sphere Collider and Rigidbody, add your Bullet script, and drag it from Hierarchy into your Project "Prefabs" folder.',
          th: 'สร้าง 3D Sphere ใส่ Sphere Collider และ Rigidbody แนบสคริปต์ Bullet จากนั้นลากจาก Hierarchy ไปใส่โฟลเดอร์ Prefabs ในหน้าต่าง Project',
        },
        inspectorData: {
          componentName: 'Bullet (Prefab)',
          properties: [
            { name: 'Speed', value: '25.0', hint: 'Meters per second' },
            { name: 'Damage', value: '20', hint: 'Health subtracted on impact' },
            { name: 'Lifetime', value: '3.0', hint: 'Seconds before auto-destroy' },
          ],
        },
      },
    ],
    codeExamples: [
      {
        title: 'Weapon Shooter & Projectile Scripts',
        language: 'csharp',
        code: `using UnityEngine;

// Attached to Player or Gun
public class GunBlaster : MonoBehaviour
{
    [SerializeField] private GameObject bulletPrefab;
    [SerializeField] private Transform muzzlePoint;
    [SerializeField] private float fireRate = 0.2f;
    private float nextFireTime;

    void Update()
    {
        if (Input.GetButton("Fire1") && Time.time >= nextFireTime)
        {
            nextFireTime = Time.time + fireRate;
            Shoot();
        }
    }

    void Shoot()
    {
        // Clone bullet prefab at muzzle position and rotation
        GameObject bullet = Instantiate(bulletPrefab, muzzlePoint.position, muzzlePoint.rotation);
    }
}

// Attached to the Bullet Prefab
public class BulletProjectile : MonoBehaviour
{
    [SerializeField] private float speed = 25f;
    [SerializeField] private int damageAmount = 25;
    [SerializeField] private float autoDestroySeconds = 3f;

    void Start()
    {
        // Auto cleanup if it flies into empty sky
        Destroy(gameObject, autoDestroySeconds);
    }

    void Update()
    {
        transform.Translate(Vector3.forward * speed * Time.deltaTime);
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("Enemy"))
        {
            // Deal damage to enemy
            EnemyHealth enemy = other.GetComponent<EnemyHealth>();
            enemy?.TakeDamage(damageAmount);

            // Destroy bullet on impact
            Destroy(gameObject);
        }
    }
}`,
        explanation: {
          en: 'Destroy(gameObject, autoDestroySeconds) provides a safety net preventing stray bullets from staying in memory forever.',
          th: 'Destroy(gameObject, autoDestroySeconds) เป็นเหมือนเบรกเกอร์ความปลอดภัย ป้องกันไม่ให้กระสุนที่ยิงพลาดลอยค้างอยู่ในหน่วยความจำตลอดไป',
        },
      },
    ],
    practiceChecklist: [
      { id: 'ub03-1', title: { en: 'Make a Bullet prefab and save it in Project assets', th: 'สร้าง Prefab กระสุนและบันทึกลงในโฟลเดอร์ Assets' }, completed: false },
      { id: 'ub03-2', title: { en: 'Create a MuzzlePoint transform on your player gun', th: 'สร้าง MuzzlePoint ปลายกระบอกปืนบนตัวละคร' }, completed: false },
      { id: 'ub03-3', title: { en: 'Test shooting and verify bullets destroy on impact', th: 'ทดสอบการยิงและตรวจเช็กว่ากระสุนหายไปเมื่อกระทบเป้าหมาย' }, completed: false },
    ],
    miniChallenge: {
      prompt: {
        en: 'If you shoot 500 bullets into the sky without Destroy(), what happens to your game?',
        th: 'หากคุณยิงกระสุน 500 นัดขึ้นฟ้าโดยไม่มีคำสั่ง Destroy() จะเกิดอะไรขึ้นกับเกม?',
      },
      hint: {
        en: 'Think about RAM memory usage and CPU physics overhead.',
        th: 'นึกถึงการใช้หน่วยความจำ RAM และการคำนวณฟิสิกส์ของ CPU',
      },
      solution: {
        en: 'A memory leak occurs! Unity continues simulating 500 active physics bodies off-screen, eventually causing frame rate drops and lagging.',
        th: 'เกิดปัญหา Memory Leak! เอนจินต้องคอยคำนวณพิกัดฟิสิกส์ของกระสุนทั้ง 500 ลูกนอกจอ ส่งผลให้เฟรมเรตตกและเกมกระตุกในที่สุด',
      },
    },
    commonMistakes: [
      {
        mistake: { en: 'Writing Destroy(this) instead of Destroy(gameObject)', th: 'เขียน Destroy(this) แทนที่จะเป็น Destroy(gameObject)' },
        why: { en: 'Destroy(this) only removes the C# script component, leaving the 3D model floating in the world.', th: 'Destroy(this) ลบแค่ตัวสคริปต์ C# ทิ้ง แต่ตัววัตถุ 3D ยังคงลอยค้างอยู่ในฉาก' },
        fix: { en: 'Always pass "gameObject" to delete the whole entity: Destroy(gameObject).', th: 'ส่ง gameObject เสมอเมื่อต้องการลบวัตถุทั้งก้อน: Destroy(gameObject)' },
      },
    ],
    quiz: [
      {
        question: {
          en: 'How do you schedule a GameObject to be destroyed after 4 seconds in Unity?',
          th: 'คำสั่งใดที่ใช้ทำลาย GameObject หลังจากผ่านไป 4 วินาทีใน Unity?',
        },
        options: {
          en: [
            'Destroy(gameObject, 4f)',
            'DeleteAfter(4f, gameObject)',
            'Remove(gameObject, 4)',
            'gameObject.Kill(4)',
          ],
          th: [
            'Destroy(gameObject, 4f)',
            'DeleteAfter(4f, gameObject)',
            'Remove(gameObject, 4)',
            'gameObject.Kill(4)',
          ],
        },
        correctIndex: 0,
        explanation: {
          en: 'Destroy(Object, float t) accepts an optional delay parameter in seconds.',
          th: 'Destroy(Object, float t) มีพารามิเตอร์ตัวที่สองเป็นตัวเลขทศนิยมสำหรับหน่วงเวลาเป็นวินาที',
        },
      },
    ],
  },
  {
    id: 'unity-basic-004',
    engine: 'unity',
    level: 'basic',
    lessonNumber: 8,
    slug: 'ui-canvas-textmeshpro-hud',
    heroImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    heroImageCaption: {
      en: 'Modern responsive user interface layout: health indicators, coin counter widgets, and HUD canvas scaling',
      th: 'การออกแบบส่วนติดต่อผู้ใช้ (UI/HUD): หลอดพลังชีวิต ตัวนับเหรียญ และระบบ Canvas Scaling',
    },
    title: {
      en: 'UI Canvas & HUD Architecture: Health Bars & TextMeshPro',
      th: 'ระบบ UI Canvas และหน้าจอ HUD: หลอดพลังชีวิต ตัวนับเหรียญ และ TextMeshPro',
    },
    shortDescription: {
      en: 'Design responsive screen overlays with Canvas Scaler, crisp TextMeshPro typography, dynamic health fill sliders, and score counters.',
      th: 'สร้างหน้าต่าง HUD สวยงาม คมชัดด้วย TextMeshPro หลอดเลือดแบบปรับขนาดตามดาเมจ และระบบนับคะแนนที่ปรับตัวได้ทุกขนาดหน้าจอ',
    },
    estimatedMinutes: 30,
    tags: ['Basic', 'Unity', 'UI', 'Canvas', 'TextMeshPro', 'HUD'],
    startFromZero: false,
    objectives: {
      en: [
        'Understand Canvas Render Modes: Screen Space - Overlay vs Screen Space - Camera vs World Space',
        'Configure Canvas Scaler to support 16:9, 21:9, and mobile screen resolutions without distortion',
        'Bind C# health and coin data to TextMeshProUGUI and Slider UI elements',
      ],
      th: [
        'เข้าใจ Render Mode ของ Canvas: Screen Space - Overlay, Camera และ World Space',
        'ตั้งค่า Canvas Scaler ให้รองรับหน้าจอ 16:9, จอกว้าง Ultra-wide และจอมือถือโดยไม่เบี้ยว',
        'เชื่อมโยงตัวแปรเลือดและเหรียญใน C# เข้ากับ TextMeshProUGUI และ Slider หลอดเลือด',
      ],
    },
    prerequisites: {
      en: ['Completed Unity Basic 3: Spawning & Combat Mechanics'],
      th: ['ผ่านเนื้อหา Unity Basic 3: ระบบต่อสู้และการเกิดของวัตถุ'],
    },
    zeroExplanation: {
      what: {
        en: 'The UI Canvas is the 2D plane on which all heads-up display (HUD) elements — health bars, minimaps, crosshairs, and score text — are rendered.',
        th: 'UI Canvas คือระนาบ 2D พิเศษสำหรับแสดงข้อมูลหน้าจอ (HUD) เช่น หลอดเลือด แผนที่ย่อ เป้าเล็ง และคะแนน',
      },
      why: {
        en: 'Without a Canvas Scaler, your UI will look tiny on 4K monitors and overflow off the screen on phone displays.',
        th: 'หากไม่ตั้งค่า Canvas Scaler หน้าตา UI ของคุณจะหดเล็กจิ๋วบนจอ 4K และจะล้นทะลุขอบบนจอมือถือ',
      },
      how: {
        en: 'Set Canvas Scaler to "Scale With Screen Size", set Reference Resolution to 1920x1080, and anchor UI elements to screen corners.',
        th: 'ตั้งค่า Canvas Scaler เป็น "Scale With Screen Size" กำหนด Reference Resolution เป็น 1920x1080 และปักหมุด (Anchor) ตามมุมจอ',
      },
      when: {
        en: 'Every game needs a HUD: HP, ammo, pause menus, dialog boxes, and game-over screens.',
        th: 'ทุกเกมต้องมีหน้าจอ HUD: เลือด, กระสุน, เมนูหยุดเกม, กล่องสนทนา และหน้าจอ Game Over',
      },
    },
    diagram: {
      type: 'gameobject-component',
      title: {
        en: 'UI Canvas Hierarchy & Anchors',
        th: 'โครงสร้างลำดับชั้นของ UI Canvas และการปักหมุด Anchor',
      },
      description: {
        en: 'Canvas (Screen Overlay) -> Top-Left: Health Bar Slider -> Top-Right: Coin Counter TextMeshPro -> Center: Crosshair.',
        th: 'Canvas (ซ้อนทับหน้าจอ) -> มุมซ้ายบน: Slider หลอดเลือด -> มุมขวาบน: ข้อความเหรียญ TextMeshPro -> ตรงกลาง: เป้าเล็ง',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Configuring the Canvas Scaler',
          th: 'การตั้งค่า Canvas Scaler ให้รองรับทุกจอภาพ',
        },
        explanation: {
          en: 'Select Canvas, set UI Scale Mode to "Scale With Screen Size", Reference Resolution to 1920 x 1080, and Match to 0.5 (balance width and height).',
          th: 'เลือก Canvas ตั้ง UI Scale Mode เป็น "Scale With Screen Size", กรอก Reference Resolution เป็น 1920 x 1080 และเลื่อน Match เป็น 0.5',
        },
        inspectorData: {
          componentName: 'Canvas Scaler',
          properties: [
            { name: 'UI Scale Mode', value: 'Scale With Screen Size', hint: 'Responsive scaling' },
            { name: 'Reference Resolution', value: 'X: 1920, Y: 1080', hint: 'Standard 1080p target' },
            { name: 'Match', value: '0.5 (Width / Height)', hint: 'Equal aspect weight' },
          ],
        },
      },
    ],
    codeExamples: [
      {
        title: 'Complete HUD Controller with TextMeshPro',
        language: 'csharp',
        code: `using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class PlayerHUDManager : MonoBehaviour
{
    [Header("UI References")]
    [SerializeField] private Slider healthSlider;
    [SerializeField] private TextMeshProUGUI coinText;
    [SerializeField] private Image healthFillImage;

    [Header("Colors")]
    [SerializeField] private Color normalHealthColor = Color.green;
    [SerializeField] private Color lowHealthColor = Color.red;

    public void UpdateHealthUI(int currentHealth, int maxHealth)
    {
        healthSlider.maxValue = maxHealth;
        healthSlider.value = currentHealth;

        // Visual feedback: turns red when under 25% health
        float healthPercent = (float)currentHealth / maxHealth;
        healthFillImage.color = healthPercent <= 0.25f ? lowHealthColor : normalHealthColor;
    }

    public void UpdateCoinUI(int totalCoins)
    {
        coinText.text = $"Coins: {totalCoins:N0}";
    }
}`,
        explanation: {
          en: 'Using TextMeshProUGUI delivers razor-sharp text rendering using Signed Distance Field (SDF) technology that never blurs when scaled.',
          th: 'การใช้ TextMeshProUGUI มอบตัวหนังสือที่คมชัดกริบด้วยเทคโนโลยี Signed Distance Field (SDF) ขยายเท่าไหร่ก็ไม่แตกเบลอ',
        },
      },
    ],
    practiceChecklist: [
      { id: 'ub04-1', title: { en: 'Create Canvas and set to "Scale With Screen Size"', th: 'สร้าง Canvas และตั้งค่าเป็น "Scale With Screen Size"' }, completed: false },
      { id: 'ub04-2', title: { en: 'Add a Health UI Slider and anchor it to Top-Left', th: 'เพิ่ม UI Slider สำหรับหลอดเลือดและปักหมุดไว้ที่มุมซ้ายบน' }, completed: false },
      { id: 'ub04-3', title: { en: 'Add TextMeshPro component for Coin counter', th: 'เพิ่ม TextMeshPro สำหรับตัวนับเหรียญ' }, completed: false },
    ],
    miniChallenge: {
      prompt: {
        en: 'Why should you always use TextMeshPro instead of the legacy Unity "Text" component?',
        th: 'ทำไมคุณควรใช้ TextMeshPro แทนที่จะเป็น Component ข้อความ "Text" แบบดั้งเดิมของ Unity?',
      },
      hint: {
        en: 'Notice what happens when you zoom in on traditional bitmap fonts.',
        th: 'ลองนึกถึงภาพเวลาที่คุณซูมเข้าไปใกล้ๆ ตัวอักษรบิตแมปแบบเก่า',
      },
      solution: {
        en: 'Legacy Text uses low-resolution bitmap textures that become blurry and pixelated when scaled. TextMeshPro uses vector-like SDF shaders that remain ultra-crisp at any resolution.',
        th: 'Text แบบเก่าใช้ภาพบิตแมปความละเอียดต่ำ เมื่อขยายหรือเล่นบนจอ 4K จะแตกเป็นรอยหยักและเบลอ แต่ TextMeshPro ใช้ SDF Shader ที่คมกริบเสมอในทุกระดับความละเอียด',
      },
    },
    commonMistakes: [
      {
        mistake: { en: 'Placing UI elements without anchoring them to screen edges', th: 'วางองค์ประกอบ UI โดยไม่ตั้งจุดปักหมุด (Anchor)' },
        why: { en: 'When the game resolution changes, unanchored elements drift toward the center or fall off-screen.', th: 'เมื่อสัดส่วนหน้าจอเปลี่ยน UI ที่ไม่ปักหมุดจะลอยเลื่อนตำแหน่งหรือหลุดขอบจอ' },
        fix: { en: 'Hold Shift+Alt and click the Anchor Presets icon to snap both position and pivot to the desired corner.', th: 'กด Shift+Alt ค้างไว้แล้วคลิกเลือกกล่อง Anchor Preset เพื่อปักหมุดทั้งตำแหน่งและ Pivot ให้ติดกับมุมจออย่างถาวร' },
      },
    ],
    quiz: [
      {
        question: {
          en: 'Which Canvas Scaler mode is best for responsive game design across different screen ratios?',
          th: 'โหมด Canvas Scaler ใดที่เหมาะสมที่สุดสำหรับการทำ UI ให้รองรับทุกขนาดหน้าจอ?',
        },
        options: {
          en: [
            'Constant Pixel Size',
            'Scale With Screen Size',
            'Constant Physical Size',
            'World Space Static',
          ],
          th: [
            'Constant Pixel Size',
            'Scale With Screen Size',
            'Constant Physical Size',
            'World Space Static',
          ],
        },
        correctIndex: 1,
        explanation: {
          en: '"Scale With Screen Size" scales UI dimensions proportionally based on your reference resolution (e.g. 1920x1080).',
          th: '"Scale With Screen Size" จะปรับขนาด UI ให้ได้สัดส่วนที่สวยงามตามความละเอียดอ้างอิงเสมอ',
        },
      },
    ],
  },
];
