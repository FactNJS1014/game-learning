import { Lesson } from '../../types';

export const unityIntermediateLessons: Lesson[] = [
  {
    id: 'unity-intermediate-001',
    engine: 'unity',
    level: 'intermediate',
    lessonNumber: 9,
    slug: 'scriptableobjects-modular-architecture',
    heroImage: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80',
    heroImageCaption: {
      en: 'Modular data architecture: decoupling stats, weapon definitions, and game event pipelines',
      th: 'สถาปัตยกรรมข้อมูลแบบโมดูลาร์: การแยกสถิติ อาวุธ และระบบอีเวนต์ด้วย ScriptableObject',
    },
    title: {
      en: 'ScriptableObjects: Modular Data-Driven Game Architecture',
      th: 'ScriptableObjects: สถาปัตยกรรมจัดการข้อมูลและไอเทมแบบมืออาชีพ',
    },
    shortDescription: {
      en: 'Eliminate duplicate memory and decouple your game logic using ScriptableObjects for item databases, weapon stats, and modular game events.',
      th: 'ลดการใช้แรมซ้ำซ้อนและแยกโค้ดให้เป็นอิสระด้วย ScriptableObject สำหรับระบบไอเทม อาวุธ สถิติ และ Game Event',
    },
    estimatedMinutes: 35,
    tags: ['Intermediate', 'Unity', 'ScriptableObjects', 'Architecture', 'CleanCode'],
    startFromZero: false,
    objectives: {
      en: [
        'Understand why ScriptableObjects are vastly superior to hardcoded inspector values and monolithic singletons',
        'Create CreateAssetMenu definitions for weapons, inventory items, and character classes',
        'Implement the ScriptableObject Game Event pattern for zero-coupling cross-system communication',
      ],
      th: [
        'เข้าใจข้อได้เปรียบมหาศาลของ ScriptableObject เมื่อเทียบกับการฮาร์ดโค้ดหรือการใช้ Singleton ขนาดยักษ์',
        'สร้างเมนู CreateAssetMenu สำหรับสร้างไฟล์อาวุธ ไอเทม และคลาสตัวละครลงบนดิสก์',
        'สร้างระบบ Game Event ด้วย ScriptableObject เพื่อให้แต่ละระบบสื่อสารกันโดยไม่ต้องอ้างอิงถึงกัน (Zero Coupling)',
      ],
    },
    prerequisites: {
      en: ['Completed Unity Basic Track (C# Scripting, Lifecycle, Prefabs)'],
      th: ['ผ่านเนื้อหา Unity Basic ทั้งหมด (C# Scripting, วงจรชีวิต, Prefab)'],
    },
    zeroExplanation: {
      what: {
        en: 'A ScriptableObject is a data container that saves independently as an .asset file in your Project window, without needing to exist as a GameObject in the scene.',
        th: 'ScriptableObject คือกล่องเก็บข้อมูลที่บันทึกเป็นไฟล์ .asset แยกต่างหากในโฟลเดอร์โปรเจกต์ โดยไม่จำเป็นต้องไปเกาะอยู่กับ GameObject ในฉาก',
      },
      why: {
        en: 'If 100 enemies share the same sword stats, attaching stats to each GameObject duplicates 100 copies in RAM. With a ScriptableObject, all 100 enemies share a single memory pointer.',
        th: 'หากศัตรู 100 ตัวใช้ดาบเล่มเดียวกัน การเขียนค่าสถิติลงในตัวศัตรูจะกินแรมซ้ำกัน 100 เท่า แต่ ScriptableObject ทำให้ทั้ง 100 ตัวแชร์ข้อมูลชุดเดียวกันจากจุดเดียว',
      },
      how: {
        en: 'Inherit from ScriptableObject instead of MonoBehaviour, add [CreateAssetMenu], and right-click in Project to create asset files.',
        th: 'เปลี่ยนคลาสแม่จาก MonoBehaviour ให้สืบทอดจาก ScriptableObject ใส่ [CreateAssetMenu] แล้วคลิกขวาในโฟลเดอร์ Project เพื่อสร้างไฟล์ข้อมูล',
      },
      when: {
        en: 'Item databases, RPG quest logs, enemy stat sheets, audio config profiles, and decoupled game event channels.',
        th: 'ฐานข้อมูลไอเทม, เควสต์เกม RPG, สถิติของมอนสเตอร์, การตั้งค่าเสียง และช่องสัญญาณ Game Event',
      },
    },
    diagram: {
      type: 'scriptable-object',
      title: {
        en: 'ScriptableObject Memory Sharing Architecture',
        th: 'สถาปัตยกรรมการแชร์ข้อมูลของ ScriptableObject',
      },
      description: {
        en: 'One ItemData.asset file on disk -> Referenced by 100 Enemy instances, Shop UI, and Player Inventory without duplicating memory.',
        th: 'ไฟล์ ItemData.asset หนึ่งไฟล์บนดิสก์ -> ถูกอ้างอิงโดยศัตรู 100 ตัว, หน้าจอร้านค้า และช่องเก็บของ โดยไม่เปลืองแรมซ้ำซ้อน',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Defining the ScriptableObject Class',
          th: 'การสร้างคลาส ScriptableObject',
        },
        explanation: {
          en: 'Create a C# script, remove ": MonoBehaviour" and replace with ": ScriptableObject". Add the [CreateAssetMenu] attribute above the class declaration.',
          th: 'สร้างสคริปต์ C# เปลี่ยนจาก ": MonoBehaviour" เป็น ": ScriptableObject" และใส่แอตทริบิวต์ [CreateAssetMenu] ไว้เหนือชื่อคลาส',
        },
        inspectorData: {
          componentName: 'WeaponData (ScriptableObject Asset)',
          properties: [
            { name: 'Item Name', value: 'Plasma Blaster Mk.II', hint: 'Unique weapon title' },
            { name: 'Base Damage', value: '45.0', hint: 'Damage per projectile' },
            { name: 'Fire Rate', value: '0.12s', hint: 'Seconds between shots' },
            { name: 'Icon Sprite', value: 'tex_blaster_icon', hint: 'Sprite reference' },
          ],
        },
      },
    ],
    codeExamples: [
      {
        title: 'Complete WeaponData ScriptableObject & Consumer',
        language: 'csharp',
        code: `using UnityEngine;

// Step 1: The Data Definition Asset
[CreateAssetMenu(fileName = "NewWeapon", menuName = "GameDev/Weapon Data", order = 1)]
public class WeaponData : ScriptableObject
{
    public string weaponName;
    public int baseDamage;
    public float fireRate;
    public GameObject projectilePrefab;
    public AudioClip fireSound;
    public Sprite weaponIcon;
}

// Step 2: The Gameplay Consumer (MonoBehaviour)
public class PlayerWeaponHandler : MonoBehaviour
{
    [SerializeField] private WeaponData currentWeapon;
    [SerializeField] private Transform firePoint;
    private float nextFireTime;

    public void EquipWeapon(WeaponData newWeapon)
    {
        currentWeapon = newWeapon;
        Debug.Log($"Equipped: {currentWeapon.weaponName} (Damage: {currentWeapon.baseDamage})");
    }

    void Update()
    {
        if (currentWeapon != null && Input.GetButton("Fire1") && Time.time >= nextFireTime)
        {
            nextFireTime = Time.time + currentWeapon.fireRate;
            Shoot();
        }
    }

    private void Shoot()
    {
        Instantiate(currentWeapon.projectilePrefab, firePoint.position, firePoint.rotation);
        AudioSource.PlayClipAtPoint(currentWeapon.fireSound, firePoint.position);
    }
}`,
        explanation: {
          en: 'Designers can balance game weapons directly inside Unity Project window without touching or recompiling a single line of C# code.',
          th: 'Game Designer สามารถปรับแต่งสมดุลอาวุธได้ในหน้าต่าง Project โดยไม่ต้องแตะต้องหรือคอมไพล์โค้ด C# ใหม่แม้แต่บรรทัดเดียว',
        },
      },
    ],
    practiceChecklist: [
      { id: 'ui01-1', title: { en: 'Create a WeaponData ScriptableObject class', th: 'สร้างคลาส WeaponData ที่สืบทอดจาก ScriptableObject' }, completed: false },
      { id: 'ui01-2', title: { en: 'Right-click in Project and create "Sword" and "Bow" assets', th: 'คลิกขวาใน Project แล้วสร้างไฟล์ Asset ดาบ และ ธนู' }, completed: false },
      { id: 'ui01-3', title: { en: 'Assign WeaponData asset to your character weapon slot', th: 'ลากไฟล์ WeaponData ไปใส่ช่องอาวุธของตัวละคร' }, completed: false },
    ],
    miniChallenge: {
      prompt: {
        en: 'If you modify a ScriptableObject variable during Play Mode (e.g., weapon.baseDamage += 10), does that change persist after exiting Play Mode in the Editor?',
        th: 'หากคุณแก้ค่าตัวแปรใน ScriptableObject ขณะเล่นเกมใน Editor (เช่น weapon.baseDamage += 10) ค่าที่แก้นั้นจะยังคงอยู่หลังกดออกจาก Play Mode หรือไม่?',
      },
      hint: {
        en: 'Remember where ScriptableObject data lives (on disk as an asset vs in scene RAM).',
        th: 'นึกถึงตำแหน่งที่ข้อมูลของ ScriptableObject บันทึกอยู่ (เป็นไฟล์ Asset บนฮาร์ดดิสก์)',
      },
      solution: {
        en: 'YES! In the Unity Editor, modifying ScriptableObject values at runtime permanently modifies the asset file on disk! For runtime-mutable player stats, either instantiate a runtime clone or store state in a separate class.',
        th: 'ใช่แล้ว! ใน Unity Editor การแก้ค่า ScriptableObject ตอนรันเกมจะเขียนทับไฟล์ .asset บนดิสก์อย่างถาวร! หากต้องการให้ค่าเลือดลดชั่วคราว ควรโคลนข้อมูลขึ้นมาตอนรันเกม หรือเก็บเลือดปัจจุบันไว้ใน MonoBehaviour แยกต่างหาก',
      },
    },
    commonMistakes: [
      {
        mistake: { en: 'Using ScriptableObjects to store mutable runtime states like "currentHP"', th: 'ใช้ ScriptableObject เก็บข้อมูลที่เปลี่ยนตลอดเวลาอย่างเลือดปัจจุบัน "currentHP"' },
        why: { en: 'In editor testing, runtime changes save permanently into the asset file on disk.', th: 'ในโปรแกรม Editor ค่าจะถูกเซฟทับไฟล์ต้นฉบับ ทำให้เริ่มเกมใหม่เลือดจะไม่เต็ม' },
        fix: { en: 'Keep base definition data (maxHP, baseSpeed) in ScriptableObject; keep current runtime state in MonoBehaviour.', th: 'เก็บค่าคงที่พื้นฐาน (maxHP, speed) ใน ScriptableObject และเก็บสถานะปัจจุบันไว้ในตัวแปรของตัวละคร' },
      },
    ],
    quiz: [
      {
        question: {
          en: 'What attribute allows you to create a ScriptableObject directly from the Unity Right-Click menu?',
          th: 'แอตทริบิวต์ใดที่ทำให้คุณคลิกขวาเพื่อสร้างไฟล์ ScriptableObject ในหน้าต่าง Project ได้?',
        },
        options: {
          en: [
            '[CreateAssetMenu]',
            '[System.Serializable]',
            '[RequireComponent]',
            '[AddComponentMenu]',
          ],
          th: [
            '[CreateAssetMenu]',
            '[System.Serializable]',
            '[RequireComponent]',
            '[AddComponentMenu]',
          ],
        },
        correctIndex: 0,
        explanation: {
          en: '[CreateAssetMenu] adds your custom ScriptableObject type to the Assets > Create context menu.',
          th: '[CreateAssetMenu] เพิ่มคำสั่งสร้างไฟล์ข้อมูล Asset ลงในเมนูคลิกขวาของหน้าต่าง Project',
        },
      },
    ],
  },
  {
    id: 'unity-intermediate-002',
    engine: 'unity',
    level: 'intermediate',
    lessonNumber: 10,
    slug: 'mecanim-animation-blend-trees',
    heroImage: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1200&q=80',
    heroImageCaption: {
      en: 'Kinematic skeletal mesh rigging and 1D/2D animation blend trees for fluid character locomotion',
      th: 'การควบคุมโครงกระดูก 3D และระบบ Animation Blend Tree เพื่อการเคลื่อนไหวที่สมจริงต่อเนื่อง',
    },
    title: {
      en: 'Mecanim Animation System: Blend Trees & State Machines',
      th: 'ระบบแอนิเมชัน Mecanim: Animator Controller, Blend Trees และทรานซิชัน',
    },
    shortDescription: {
      en: 'Bring characters to life: blend seamlessly from idle to walk to sprint based on speed, configure attack combos, and handle animation parameters.',
      th: 'ทำให้ตัวละครมีชีวิตชีวา: ผสมผสานท่าทางยืนนิ่ง เดิน และวิ่งสปรินต์ตามความเร็วด้วย Blend Tree และควบคุมคอมโบท่าโจมตี',
    },
    estimatedMinutes: 35,
    tags: ['Intermediate', 'Unity', 'Animation', 'Mecanim', 'BlendTrees'],
    startFromZero: false,
    objectives: {
      en: [
        'Master the Animator Controller State Machine (States, Transitions, AnyState)',
        'Build a 1D and 2D Blend Tree to smoothly interpolate Idle, Walk, and Run clips',
        'Trigger animation parameters (Float, Int, Bool, Trigger) from C# code via Animator.SetFloat',
      ],
      th: [
        'ควบคุมโครงสร้าง Animator Controller (State, Transition, AnyState)',
        'สร้าง 1D และ 2D Blend Tree เพื่อเบลนด์ท่าทาง ยืนนิ่ง-เดิน-วิ่ง ได้อย่างลื่นไหลตามความเร็ว',
        'ส่งค่าพารามิเตอร์ (Float, Int, Bool, Trigger) จาก C# สู่ Animator ด้วย Animator.SetFloat',
      ],
    },
    prerequisites: {
      en: ['Completed Unity Basic 2: Character Controller'],
      th: ['ผ่านเนื้อหา Unity Basic 2: Character Controller'],
    },
    zeroExplanation: {
      what: {
        en: 'Mecanim is Unity’s animation state machine and blending engine, responsible for playing, crossfading, and synchronizing 2D/3D character animations.',
        th: 'Mecanim คือระบบควบคุมแอนิเมชันของ Unity ที่ทำหน้าที่เล่นท่าทาง ผสมผสานท่าข้ามสาย (Crossfade) และควบคุมจังหวะก้าวเดิน',
      },
      why: {
        en: 'Abruptly snapping between an Idle clip and a Run clip looks jarring and amateur. Blend Trees smoothly interpolate bone rotations frame-by-frame.',
        th: 'การตัดภาพฉึบฉับระหว่างท่ายืนกับท่าวิ่งจะดูแข็งกระด้าง Blend Tree จึงช่วยเฉลี่ยการหมุนของกระดูกให้เปลี่ยนผ่านอย่างนุ่มนวลเป็นธรรมชาติ',
      },
      how: {
        en: 'Create a Blend Tree in Animator Controller, bind it to a Float parameter "Speed", add Idle (0), Walk (2), Run (6), and update Speed in C# Update().',
        th: 'สร้าง Blend Tree ใน Animator ตั้งพารามิเตอร์ "Speed" ใส่คลิป ยืน (0), เดิน (2), วิ่ง (6) แล้วส่งค่าความเร็วจากสคริปต์ C# เข้าไป',
      },
      when: {
        en: 'Humanoids, monsters, vehicles, weapon reloads, and facial emotion rigs.',
        th: 'ตัวละครคน, มอนสเตอร์, ยานพาหนะ, การรีโหลดกระสุนปืน และการแสดงสีหน้า',
      },
    },
    diagram: {
      type: 'fsm-states',
      title: {
        en: 'Locomotion State Machine & Transitions',
        th: 'แผนผังสถานะ State Machine ของระบบแอนิเมชัน',
      },
      description: {
        en: 'Entry -> Locomotion Blend Tree (Idle <-> Walk <-> Run) -> [Trigger: Jump] -> Jump State -> [isGrounded] -> Land -> Locomotion.',
        th: 'เริ่มเกม -> เข้าสู่ Locomotion Blend Tree -> กดกระโดด -> ท่ากระโดดลอยตัว -> สัมผัสพื้น -> ท่าแลนดิ้ง -> กลับสู่การเดินวิ่ง',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Setting up the 1D Locomotion Blend Tree',
          th: 'การสร้าง 1D Blend Tree สำหรับการเคลื่อนที่',
        },
        explanation: {
          en: 'Inside your Animator window, right-click > Create State > From New Blend Tree. Double click it, name the parameter "Speed", and add 3 Motion Fields (Idle at 0, Walk at 3, Run at 8).',
          th: 'ในหน้าต่าง Animator คลิกขวา > Create State > From New Blend Tree ดับเบิ้ลคลิกเข้าไป ตั้งชื่อพารามิเตอร์ว่า "Speed" และใส่ 3 ท่าทาง (Idle ที่ 0, Walk ที่ 3, Run ที่ 8)',
        },
        inspectorData: {
          componentName: 'Blend Tree: Locomotion',
          properties: [
            { name: 'Parameter', value: 'Speed (Float)', hint: 'Driven by player velocity' },
            { name: 'Threshold 0.0', value: 'Anim_Idle', hint: 'Standing still' },
            { name: 'Threshold 3.0', value: 'Anim_Walk', hint: 'Normal walk' },
            { name: 'Threshold 8.0', value: 'Anim_Run', hint: 'Full sprint' },
          ],
        },
      },
    ],
    codeExamples: [
      {
        title: 'C# Animation Controller Integration',
        language: 'csharp',
        code: `using UnityEngine;

[RequireComponent(typeof(Animator))]
public class CharacterAnimatorDriver : MonoBehaviour
{
    private Animator animator;
    private Rigidbody rb;

    // Cache animator parameter hashes for high-speed performance
    private static readonly int SpeedParam = Animator.StringToHash("Speed");
    private static readonly int JumpTrigger = Animator.StringToHash("Jump");
    private static readonly int IsGroundedParam = Animator.StringToHash("IsGrounded");

    void Awake()
    {
        animator = GetComponent<Animator>();
        rb = GetComponent<Rigidbody>();
    }

    public void UpdateLocomotion(float currentSpeed, bool isGrounded)
    {
        // Smoothly update speed float parameter
        animator.SetFloat(SpeedParam, currentSpeed, 0.1f, Time.deltaTime);
        animator.SetBool(IsGroundedParam, isGrounded);
    }

    public void TriggerJumpAnimation()
    {
        animator.SetTrigger(JumpTrigger);
    }
}`,
        explanation: {
          en: 'Animator.StringToHash() converts strings to integers once at startup, eliminating string allocation garbage collection overhead in Update().',
          th: 'การใช้ Animator.StringToHash() แปลงชื่อข้อความเป็นตัวเลข Integer ช่วยประหยัด CPU และไม่สร้างขยะหน่วยความจำใน Update()',
        },
      },
    ],
    practiceChecklist: [
      { id: 'ui02-1', title: { en: 'Create Animator Controller asset and assign to character', th: 'สร้างไฟล์ Animator Controller แล้วลากใส่ตัวละคร' }, completed: false },
      { id: 'ui02-2', title: { en: 'Build a 1D Blend Tree with Idle, Walk, and Run clips', th: 'สร้าง 1D Blend Tree พร้อมใส่คลิป ยืน เดิน วิ่ง' }, completed: false },
      { id: 'ui02-3', title: { en: 'Drive the Speed float parameter from player movement C# script', th: 'ส่งค่า Speed จากสคริปต์ C# เข้าสู่ Animator' }, completed: false },
    ],
    miniChallenge: {
      prompt: {
        en: 'Why is Animator.StringToHash("Speed") significantly faster than animator.SetFloat("Speed", 5f)?',
        th: 'ทำไมการใช้ Animator.StringToHash("Speed") ถึงทำงานได้เร็วกว่าการส่งชื่อเป็นข้อความ "Speed" ตรงๆ อย่างมาก?',
      },
      hint: {
        en: 'How do computers compare numbers vs comparing strings of characters?',
        th: 'คอมพิวเตอร์เปรียบเทียบตัวเลขได้เร็วกว่าการค้นหาตัวอักษรเรียงทีละตัวอย่างไร?',
      },
      solution: {
        en: 'Passing strings requires Unity to hash and look up the string name on every single frame, causing CPU overhead and garbage allocation. An integer hash lookup is a near-instant single CPU cycle!',
        th: 'การส่งข้อความบังคับให้เอนจินต้องนำคำว่า "Speed" ไปแปลงรหัสและค้นหาในตารางทุกๆ เสี้ยววินาที ส่วน Integer Hash เป็นการชี้ตำแหน่งด้วยตัวเลขทันทีใน 1 รอบสัญญาณนาฬิกา!',
      },
    },
    commonMistakes: [
      {
        mistake: { en: 'Leaving "Has Exit Time" checked on instant-reaction transitions like Jump or Hurt', th: 'ลืมเอาติ๊กถูก "Has Exit Time" ออกในทรานซิชันที่ต้องตอบสนองทันที เช่น กระโดด หรือ โดนตี' },
        why: { en: 'Has Exit Time forces Unity to wait until the current animation clip finishes before switching, causing massive input lag.', th: 'Has Exit Time จะบังคับให้เล่นท่าเดิมจนจบก่อน ทำให้ตัวละครไม่ยอมกระโดดทันทีที่กดปุ่ม' },
        fix: { en: 'Uncheck "Has Exit Time" and set Transition Duration to 0.1s for snappy responses.', th: 'เอาติ๊กถูก Has Exit Time ออก และปรับ Transition Duration เหลือ 0.1s เพื่อให้ตอบสนองทันใจ' },
      },
    ],
    quiz: [
      {
        question: {
          en: 'Which Mecanim feature allows blending smoothly between Idle, Walk, and Run based on player velocity?',
          th: 'ฟีเจอร์ใดใน Mecanim ที่ช่วยผสมผสานท่า ยืน เดิน และวิ่ง ตามความเร็วของตัวละครได้อย่างนุ่มนวล?',
        },
        options: {
          en: ['Blend Tree', 'Sub-State Machine', 'Override Controller', 'Avatar Mask'],
          th: ['Blend Tree', 'Sub-State Machine', 'Override Controller', 'Avatar Mask'],
        },
        correctIndex: 0,
        explanation: {
          en: 'Blend Trees interpolate multiple animation clips based on one or more continuous float parameters.',
          th: 'Blend Tree ทำหน้าที่ผสมท่าทางหลายๆ ท่าตามค่าตัวเลขทศนิยม เช่น ความเร็วในการเดิน',
        },
      },
    ],
  },
  {
    id: 'unity-intermediate-003',
    engine: 'unity',
    level: 'intermediate',
    lessonNumber: 11,
    slug: 'navmesh-ai-pathfinding-patrol',
    heroImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    heroImageCaption: {
      en: 'Autonomous AI navigation mesh baking, A* shortest path calculation, and dynamic obstacle avoidance',
      th: 'การอบแผนที่นำทาง NavMesh การคำนวณเส้นทางสั้นที่สุด และการหลบสิ่งกีดขวางของสมองกล AI',
    },
    title: {
      en: 'NavMesh & AI Pathfinding: Navigation & Patrol Behavior',
      th: 'ระบบนำทาง NavMesh และสมองกล AI: การลาดตระเวนและไล่ล่าผู้เล่น',
    },
    shortDescription: {
      en: 'Bake 3D navigation meshes, equip enemies with NavMeshAgent, calculate shortest paths around obstacles, and build patrol-chase state logic.',
      th: 'Bake พื้นที่เดิน NavMesh ติดตั้ง NavMeshAgent ให้ศัตรูเดินหลบสิ่งกีดขวาง คำนวณเส้นทางสั้นที่สุด และสร้างระบบลาดตระเวนสลับไล่ล่า',
    },
    estimatedMinutes: 35,
    tags: ['Intermediate', 'Unity', 'AI', 'NavMesh', 'Pathfinding'],
    startFromZero: false,
    objectives: {
      en: [
        'Bake a Navigation Mesh with custom agent height, radius, and slope limits',
        'Configure the NavMeshAgent component for smooth turning and stopping distance',
        'Program a finite patrol-and-chase AI system with line-of-sight detection',
      ],
      th: [
        'Bake พื้นผิว NavMesh โดยกำหนดความสูง รัศมี และความชันที่เดินผ่านได้',
        'ปรับแต่งค่า NavMeshAgent สำหรับการเลี้ยวโค้งและระยะหยุด (Stopping Distance)',
        'เขียนระบบ AI ลาดตระเวนตามจุด Waypoint และวิ่งไล่กวดเมื่อผู้เล่นเข้ามาในระยะสายตา',
      ],
    },
    prerequisites: {
      en: ['Completed Unity Basic Track (C# Scripting, Movement)'],
      th: ['ผ่านเนื้อหา Unity Basic ทั้งหมด (C# Scripting, การเคลื่อนที่)'],
    },
    zeroExplanation: {
      what: {
        en: 'NavMesh (Navigation Mesh) is a baked 3D polygon surface representing walkable areas in your scene, allowing AI to navigate around obstacles without colliding.',
        th: 'NavMesh คือโครงข่ายโพลิกอน 3D ที่อบขึ้นมาจากพื้นผิวฉาก เพื่อบอกสมองกล AI ว่าบริเวณไหนสามารถเดินได้ และบริเวณไหนเป็นสิ่งกีดขวาง',
      },
      why: {
        en: 'Without a NavMesh, enemies walk in straight lines into walls and get stuck forever. NavMesh calculates intelligent A* paths around any maze.',
        th: 'หากไม่มี NavMesh ศัตรูจะเดินทื่อๆ ชนกำแพงจนติดแหง็ก NavMesh ช่วยคำนวณเส้นทางที่ฉลาดที่สุดให้เดินอ้อมสิ่งกีดขวางได้อัตโนมัติ',
      },
      how: {
        en: 'Mark level geometry as Navigation Static, bake the NavMesh in the AI Navigation window, attach a NavMeshAgent component to your enemy, and call agent.SetDestination(target.position).',
        th: 'ตั้งค่าสิ่งของในฉากเป็น Navigation Static, กด Bake ในหน้าต่าง AI Navigation, ใส่ NavMeshAgent ให้ศัตรู แล้วสั่ง agent.SetDestination(target.position) ในโค้ด',
      },
      when: {
        en: 'Guards patrolling castle corridors, zombies hunting players, companion pets following, and RTS unit movement.',
        th: 'ทหารยามเดินตรวจการณ์, ซอมบี้วิ่งไล่ผู้เล่น, สัตว์เลี้ยงเดินตามเจ้าของ, และการสั่งยูนิตเดินในเกมแนว RTS',
      },
    },
    diagram: {
      type: 'ai-behavior-tree',
      title: {
        en: 'AI State Transition: Patrol <-> Chase',
        th: 'การสลับสถานะของ AI: ลาดตระเวน ปะทะ ไล่ล่า',
      },
      description: {
        en: 'Patrol Waypoint A -> Wait 2s -> Move to B -> [Player enters Detection Range (10m)] -> Chase Player -> [Player escapes (15m)] -> Return to Patrol.',
        th: 'เดินไปจุด A -> ยืนรอ 2 วินาที -> เดินไปจุด B -> [ผู้เล่นเข้าใกล้ 10 เมตร] -> วิ่งไล่ล่า -> [ผู้เล่นหนีพ้น 15 เมตร] -> กลับไปเดินตรวจการณ์',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Baking the Navigation Mesh',
          th: 'การ Bake โครงสร้างแผนที่นำทาง NavMesh',
        },
        explanation: {
          en: 'Open Window > AI > Navigation. Select all floors and walls, enable "Navigation Static". In the Bake tab, set Agent Radius to 0.5, Max Slope to 45 degrees, and click "Bake". A cyan walkable mesh will appear.',
          th: 'เปิดเมนู Window > AI > Navigation เลือกพื้นและกำแพงทั้งหมด ติ๊กเปิด Navigation Static ในแท็บ Bake ตั้งค่ารัศมีตัวละครเป็น 0.5 ความชันไม่เกิน 45 องศา แล้วกดปุ่ม Bake จะเห็นโครงข่ายสีฟ้าขึ้นมาบนพื้นผิวที่เดินได้',
        },
        inspectorData: {
          componentName: 'NavMeshAgent',
          properties: [
            { name: 'Speed', value: '4.5', hint: 'Max movement velocity' },
            { name: 'Angular Speed', value: '180', hint: 'Turning rate in deg/sec' },
            { name: 'Stopping Distance', value: '1.5', hint: 'Stops before bumping target' },
            { name: 'Auto Braking', value: 'True [Checked]', hint: 'Smooth deceleration' },
          ],
        },
      },
    ],
    codeExamples: [
      {
        title: 'Complete Patrol and Chase Enemy AI',
        language: 'csharp',
        code: `using UnityEngine;
using UnityEngine.AI;

[RequireComponent(typeof(NavMeshAgent))]
public class PatrolAndChaseAI : MonoBehaviour
{
    [Header("Patrol Settings")]
    [SerializeField] private Transform[] waypoints;
    private int currentWaypointIndex;

    [Header("Detection")]
    [SerializeField] private Transform playerTransform;
    [SerializeField] private float chaseRange = 10f;
    [SerializeField] private float attackRange = 2f;

    private NavMeshAgent agent;

    void Awake()
    {
        agent = GetComponent<NavMeshAgent>();
    }

    void Start()
    {
        GoToNextWaypoint();
    }

    void Update()
    {
        if (playerTransform == null) return;

        float distanceToPlayer = Vector3.Distance(transform.position, playerTransform.position);

        if (distanceToPlayer <= attackRange)
        {
            // Stop and Attack
            agent.isStopped = true;
            Debug.Log("AI: Attacking Player!");
        }
        else if (distanceToPlayer <= chaseRange)
        {
            // Chase Player
            agent.isStopped = false;
            agent.SetDestination(playerTransform.position);
        }
        else
        {
            // Resume Patrol
            agent.isStopped = false;
            if (!agent.pathPending && agent.remainingDistance < 0.5f)
            {
                GoToNextWaypoint();
            }
        }
    }

    void GoToNextWaypoint()
    {
        if (waypoints.Length == 0) return;

        agent.SetDestination(waypoints[currentWaypointIndex].position);
        currentWaypointIndex = (currentWaypointIndex + 1) % waypoints.Length;
    }
}`,
        explanation: {
          en: 'agent.remainingDistance < 0.5f checks when the AI has arrived at a waypoint before cycling to the next destination in the array.',
          th: 'agent.remainingDistance < 0.5f ช่วยตรวจสอบว่าศัตรูเดินมาถึงจุดตรวจการณ์แล้วหรือยัง ก่อนจะสลับไปยังจุดหมายถัดไปในอาเรย์',
        },
      },
    ],
    practiceChecklist: [
      { id: 'ui03-1', title: { en: 'Bake a cyan NavMesh across your level floor', th: 'Bake โครงข่าย NavMesh สีฟ้าบนพื้นด่าน' }, completed: false },
      { id: 'ui03-2', title: { en: 'Add NavMeshAgent to an enemy capsule', th: 'เพิ่ม NavMeshAgent ให้กับแคปซูลศัตรู' }, completed: false },
      { id: 'ui03-3', title: { en: 'Create 3 Waypoint empty GameObjects for patrol path', th: 'สร้างจุดตรวจการณ์ Waypoint ว่างๆ 3 จุดสำหรับเดินลาดตระเวน' }, completed: false },
    ],
    miniChallenge: {
      prompt: {
        en: 'Why does an enemy with a NavMeshAgent sometimes slide or drift when reaching a destination?',
        th: 'ทำไมบางครั้งศัตรูที่มี NavMeshAgent ถึงไถลหรือลอยเฉื่อยเลยจุดหมายไปเล็กน้อย?',
      },
      hint: {
        en: 'Check the "Acceleration" and "Auto Braking" settings on the NavMeshAgent.',
        th: 'ตรวจสอบค่า Acceleration และ Auto Braking ใน NavMeshAgent',
      },
      solution: {
        en: 'If "Auto Braking" is disabled or "Acceleration" is too low, the agent fails to decelerate in time. Enable Auto Braking and increase Acceleration to 12+ for crisp stops.',
        th: 'หากไม่ได้ติ๊กเปิด Auto Braking หรือตั้งค่า Acceleration ต่ำเกินไป ตัวละครจะเบรกไม่ทัน ให้ติ๊กเปิด Auto Braking และเพิ่ม Acceleration เป็น 12 ขึ้นไปเพื่อหยุดได้อย่างเฉียบคม',
      },
    },
    commonMistakes: [
      {
        mistake: { en: 'Calling agent.SetDestination() multiple times every frame inside Update()', th: 'เรียก agent.SetDestination() ซ้ำๆ ทุกเสี้ยววินาทีใน Update()' },
        why: { en: 'Path recalculation requires heavy A* CPU processing and tanks framerate.', th: 'การคำนวณเส้นทางใหม่บ่อยเกินไปกินแรง CPU มหาศาลจนทำให้เกมกระตุก' },
        fix: { en: 'Only update destination when the target has moved significantly or use a 0.25s timer interval.', th: 'อัปเดตจุดหมายเมื่อเป้าหมายเคลื่อนที่เปลี่ยนตำแหน่งเกินระยะที่กำหนด หรือตั้งเวลาเรียกทุกๆ 0.25 วินาที' },
      },
    ],
    quiz: [
      {
        question: {
          en: 'Which method instructs a NavMeshAgent to calculate and travel to a 3D coordinate?',
          th: 'ฟังก์ชันใดที่สั่งให้ NavMeshAgent คำนวณเส้นทางและเดินไปยังพิกัด 3 มิติที่กำหนด?',
        },
        options: {
          en: ['agent.SetDestination(target)', 'agent.WalkTo(target)', 'agent.Navigate(target)', 'agent.MoveToward(target)'],
          th: ['agent.SetDestination(target)', 'agent.WalkTo(target)', 'agent.Navigate(target)', 'agent.MoveToward(target)'],
        },
        correctIndex: 0,
        explanation: {
          en: 'SetDestination(Vector3 target) queues an asynchronous pathfinding calculation to navigate toward the coordinates.',
          th: 'SetDestination(Vector3 target) ส่งคำสั่งคำนวณหาเส้นทาง A* และสั่งให้ตัวละครเดินไปยังพิกัดนั้นทันที',
        },
      },
    ],
  },
  {
    id: 'unity-intermediate-004',
    engine: 'unity',
    level: 'intermediate',
    lessonNumber: 12,
    slug: 'save-load-json-serialization',
    heroImage: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80',
    heroImageCaption: {
      en: 'Persistent game data pipeline: JSON serialization, file I/O operations, and player state restoration',
      th: 'กระบวนการบันทึกข้อมูลเกม: การแปลง JSON การเขียนไฟล์ลงดิสก์ และการโหลดสถานะผู้เล่นกลับมา',
    },
    title: {
      en: 'Save & Load Pipeline: JSON Serialization & Data Persistence',
      th: 'ระบบเซฟและโหลดเกม: การบันทึกข้อมูลแบบ JSON และการจัดการไฟล์ถาวร',
    },
    shortDescription: {
      en: 'Build a production-ready save/load engine: convert complex player states into encrypted JSON files saved safely to disk.',
      th: 'สร้างระบบเซฟและโหลดข้อมูลเกมระดับมืออาชีพ แปลงข้อมูลผู้เล่นเป็นไฟล์ JSON บันทึกลงเครื่อง และโหลดกลับมาได้อย่างสมบูรณ์',
    },
    estimatedMinutes: 35,
    tags: ['Intermediate', 'Unity', 'SaveLoad', 'JSON', 'Persistence'],
    startFromZero: false,
    objectives: {
      en: [
        'Understand why PlayerPrefs is only suitable for simple settings (Volume, Resolution) and not complete game saves',
        'Use [System.Serializable] data structures and JsonUtility.ToJson()',
        'Read and write save files safely using Application.persistentDataPath and File.WriteAllText',
      ],
      th: [
        'เข้าใจว่าทำไม PlayerPrefs ถึงเหมาะกับแค่การตั้งค่าเสียง/จอ และไม่ควรใช้เซฟข้อมูลเกมทั้งระบบ',
        'สร้างคลาสข้อมูล [System.Serializable] และแปลงเป็นข้อความด้วย JsonUtility.ToJson()',
        'อ่านและเขียนไฟล์ลงเครื่องอย่างปลอดภัยด้วย Application.persistentDataPath และ System.IO',
      ],
    },
    prerequisites: {
      en: ['Completed Unity Basic Track (C# Scripting, Data Types)'],
      th: ['ผ่านเนื้อหา Unity Basic ทั้งหมด (C# Scripting, ชนิดตัวแปร)'],
    },
    zeroExplanation: {
      what: {
        en: 'A Save System serializes in-memory game states (player level, health, inventory coins, quest progress) into an encrypted or text file saved on local storage.',
        th: 'ระบบ Save คือการแปลงสถานะของเกมในแรม (เลเวล, เลือด, เหรียญ, ความคืบหน้าเควสต์) ให้กลายเป็นไฟล์ข้อความหรือรหัสที่บันทึกไว้บนฮาร์ดดิสก์',
      },
      why: {
        en: 'Players expect their progress to be remembered when closing and reopening the app. A reliable save system prevents heartbreaking progress loss.',
        th: 'ผู้เล่นทุกคนคาดหวังว่าเมื่อปิดเกมแล้วเปิดใหม่ ข้อมูลที่พยายามเล่นมาจะไม่หายไป การเซฟที่ดีจึงเป็นหัวใจของความเชื่อมั่นในเกม',
      },
      how: {
        en: 'Pack your data into a [System.Serializable] class, convert it with JsonUtility.ToJson(data, true), and write it to Application.persistentDataPath via File.WriteAllText.',
        th: 'รวมข้อมูลไว้ในคลาส [System.Serializable], แปลงเป็น JSON ด้วย JsonUtility.ToJson(), และเขียนลงไฟล์ในโฟลเดอร์ Application.persistentDataPath',
      },
      when: {
        en: 'RPGs, adventure games, checkpoints, level progression, and inventory management.',
        th: 'เกม RPG, เกมผจญภัย, จุด Checkpoint, การปลดล็อกด่าน และระบบกระเป๋าเก็บของ',
      },
    },
    diagram: {
      type: 'save-load',
      title: {
        en: 'Save & Load Serialization Workflow',
        th: 'ขั้นตอนการแปลงและบันทึกข้อมูล (Serialization Workflow)',
      },
      description: {
        en: 'In-Game State -> Pack into PlayerSaveData -> JsonUtility.ToJson() -> Write to Disk -> Read on Startup -> JsonUtility.FromJson() -> Restore State.',
        th: 'สถานะในเกม -> แพ็กเป็นข้อมูล PlayerSaveData -> แปลงเป็น JSON -> บันทึกลงดิสก์ -> อ่านไฟล์ตอนเปิดเกม -> แปลงกลับเป็นอ็อบเจกต์ -> คืนค่าตัวละคร',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Creating the Serializable Save Data Structure',
          th: 'การสร้างโครงสร้างข้อมูลเซฟที่แปลงเป็นไฟล์ได้',
        },
        explanation: {
          en: 'Mark your data container with [System.Serializable]. Use standard C# primitive types (int, float, string, bool, List) — do NOT include GameObjects or Components directly.',
          th: 'ใส่ [System.Serializable] ไว้เหนือคลาสเก็บข้อมูล และใช้ตัวแปรพื้นฐาน เช่น int, float, string, List โดยห้ามใส่ GameObject หรือ Component ลงไปตรงๆ',
        },
        inspectorData: {
          componentName: 'SaveDataManager',
          properties: [
            { name: 'Save File Name', value: 'player_save_slot1.json', hint: 'Saved in persistent path' },
            { name: 'Auto Save On Quit', value: 'True [Checked]', hint: 'Calls SaveGame() in OnApplicationQuit' },
          ],
        },
      },
    ],
    codeExamples: [
      {
        title: 'Production JSON Save & Load Pipeline',
        language: 'csharp',
        code: `using System;
using System.IO;
using UnityEngine;

// Step 1: The Pure Data Model
[Serializable]
public class PlayerSaveData
{
    public int playerLevel = 1;
    public int currentGold = 100;
    public float maxHealth = 100f;
    public string lastSceneName = "Level_01";
    public float[] position = new float[3]; // X, Y, Z
}

// Step 2: The Save System Engine
public static class SaveSystem
{
    private static string GetSavePath(string slotName)
    {
        return Path.Combine(Application.persistentDataPath, $"{slotName}.json");
    }

    public static void SaveGame(PlayerSaveData data, string slotName = "save_slot_1")
    {
        string fullPath = GetSavePath(slotName);
        string jsonString = JsonUtility.ToJson(data, true); // true = pretty print

        File.WriteAllText(fullPath, jsonString);
        Debug.Log($"Game successfully saved to: {fullPath}");
    }

    public static PlayerSaveData LoadGame(string slotName = "save_slot_1")
    {
        string fullPath = GetSavePath(slotName);

        if (!File.Exists(fullPath))
        {
            Debug.LogWarning("No save file found! Creating brand new game state.");
            return new PlayerSaveData();
        }

        string jsonString = File.ReadAllText(fullPath);
        PlayerSaveData loadedData = JsonUtility.FromJson<PlayerSaveData>(jsonString);
        Debug.Log("Game successfully loaded!");
        return loadedData;
    }
}`,
        explanation: {
          en: 'Application.persistentDataPath automatically resolves to the correct platform directory: %AppData% on Windows, Documents on iOS, and Android internal app storage.',
          th: 'Application.persistentDataPath จะชี้ไปยังโฟลเดอร์เก็บข้อมูลที่ถูกต้องเสมอ ไม่ว่าจะรันบน Windows (%AppData%), iOS หรือที่เก็บข้อมูลในเครื่อง Android',
        },
      },
    ],
    practiceChecklist: [
      { id: 'ui04-1', title: { en: 'Create a [System.Serializable] PlayerSaveData class', th: 'สร้างคลาส PlayerSaveData พร้อมแท็ก [System.Serializable]' }, completed: false },
      { id: 'ui04-2', title: { en: 'Write a Save button calling JsonUtility.ToJson()', th: 'สร้างปุ่มเซฟที่สั่งแปลงข้อมูลด้วย JsonUtility.ToJson()' }, completed: false },
      { id: 'ui04-3', title: { en: 'Verify the saved .json file in Application.persistentDataPath', th: 'เปิดตรวจสอบไฟล์ .json ที่ถูกบันทึกจริงในโฟลเดอร์ของเครื่อง' }, completed: false },
    ],
    miniChallenge: {
      prompt: {
        en: 'Why does trying to serialize "public GameObject myPlayer;" with JsonUtility fail or cause errors?',
        th: 'ทำไมการพยายามนำ "public GameObject myPlayer;" ไปแปลงเป็น JSON ด้วย JsonUtility จึงล้มเหลวหรือเกิด Error?',
      },
      hint: {
        en: 'Think about what a GameObject is: a complex C++ native pointer with dozens of components.',
        th: 'นึกถึงสิ่งที่เป็นจริงของ GameObject: มันคือพอยน์เตอร์ C++ ภายในเอนจินที่มีคอมโพเนนต์นับสิบตัวเกาะอยู่',
      },
      solution: {
        en: 'GameObjects contain internal native memory references, textures, meshes, and engine pointers that cannot be converted to plain text. You should only serialize pure data values (e.g. float[3] position, int health, string prefabID).',
        th: 'GameObject มีการเชื่อมโยงหน่วยความจำภายใน เวกเตอร์ เมช 3D และตัวแปรระบบที่ไม่สามารถแปลงเป็นตัวอักษรดิบได้ สิ่งที่เราต้องเซฟคือ "ข้อมูลดิบ" เท่านั้น เช่น ตัวเลขตำแหน่ง X,Y,Z, เลือด และชื่อไอดีของ Prefab',
      },
    },
    commonMistakes: [
      {
        mistake: { en: 'Hardcoding file paths like "C:/MyGame/save.json"', th: 'พิมพ์ Path แบบฮาร์ดโค้ด เช่น "C:/MyGame/save.json"' },
        why: { en: 'Hardcoded paths will crash instantly on Android, iOS, Mac, or other user PCs that lack that directory.', th: 'Path แบบนี้จะทำให้เกมพังทันทีเมื่อนำไปเปิดบน Mac, iPhone, Android หรือคอมเครื่องอื่นที่ไม่มีไดรฟ์ C:' },
        fix: { en: 'Always use Application.persistentDataPath combined with Path.Combine().', th: 'ใช้ Application.persistentDataPath ร่วมกับ Path.Combine() เสมอ' },
      },
    ],
    quiz: [
      {
        question: {
          en: 'Where should cross-platform save files always be stored in Unity?',
          th: 'ไฟล์เซฟของเกมใน Unity ควรถูกจัดเก็บไว้ที่โฟลเดอร์ใดเพื่อให้ใช้งานได้บนทุกแพลตฟอร์ม?',
        },
        options: {
          en: [
            'Application.persistentDataPath',
            'Application.dataPath',
            'C:/Users/Public/Saves',
            'Assets/Resources/Saves',
          ],
          th: [
            'Application.persistentDataPath',
            'Application.dataPath',
            'C:/Users/Public/Saves',
            'Assets/Resources/Saves',
          ],
        },
        correctIndex: 0,
        explanation: {
          en: 'Application.persistentDataPath is the designated read/write directory permitted by all desktop and mobile operating systems.',
          th: 'Application.persistentDataPath คือไดเรกทอรีที่ระบบปฏิบัติการทุกตัว (PC, Mac, iOS, Android) อนุญาตให้โปรแกรมอ่านและเขียนไฟล์ได้อย่างปลอดภัย',
        },
      },
    ],
  },
];
