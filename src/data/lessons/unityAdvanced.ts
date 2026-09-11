import { Lesson } from '../../types';

export const unityAdvancedLessons: Lesson[] = [
  {
    id: 'unity-advanced-001',
    engine: 'unity',
    level: 'advanced',
    lessonNumber: 13,
    slug: 'finite-state-machine-fsm-architecture',
    heroImage: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80',
    heroImageCaption: {
      en: 'Architectural state machine flow: state encapsulation, polymorphic transitions, and decoupled gameplay logic',
      th: 'สถาปัตยกรรม State Machine: การแยกสถานะอิสระ การเปลี่ยนผ่านแบบ Polymorphic และโค้ดเกมที่ขยายได้ไม่จำกัด',
    },
    title: {
      en: 'Finite State Machine (FSM) & Decoupled Architecture',
      th: 'สถาปัตยกรรม Finite State Machine (FSM): การออกแบบระบบสถานะตัวละครระดับสูง',
    },
    shortDescription: {
      en: 'Eliminate messy 500-line "spaghetti if/else" statements. Build an extensible, polymorphic State Machine pattern used in commercial AAA character controllers.',
      th: 'บอกลาโค้ดสปาเก็ตตี้ if-else 500 บรรทัด! สร้างสถาปัตยกรรม Finite State Machine (FSM) ระดับมืออาชีพที่แยกสถานะ เดิน กระโดด โจมตี ออกจากกันอย่างหมดจด',
    },
    estimatedMinutes: 40,
    tags: ['Advanced', 'Unity', 'FSM', 'Architecture', 'CleanCode', 'Patterns'],
    startFromZero: false,
    objectives: {
      en: [
        'Understand why monolithic if/else chains break and how the State Pattern solves scalability',
        'Create abstract BaseState, StateMachine runner, and concrete states (IdleState, MoveState, AttackState, DeadState)',
        'Implement Enter(), Update(), FixedUpdate(), and Exit() state lifecycles',
      ],
      th: [
        'เข้าใจปัญหาของโค้ดเงื่อนไข if/else ขนาดใหญ่ที่พังง่าย และวิธีที่ State Pattern ช่วยให้ระบบขยายตัวได้ไม่สิ้นสุด',
        'สร้างคลาส BaseState, ตัวควบคุม StateMachine และสถานะแยกย่อย (IdleState, MoveState, AttackState, DeadState)',
        'สร้างวงจรชีวิตของแต่ละสถานะ: Enter() เข้าสู่สถานะ, Update(), FixedUpdate() และ Exit() ออกจากสถานะ',
      ],
    },
    prerequisites: {
      en: ['Completed Unity Intermediate Track (C# OOP, Lifecycle, Animation)'],
      th: ['ผ่านเนื้อหา Unity Intermediate ทั้งหมด (C# OOP, วงจรชีวิต, แอนิเมชัน)'],
    },
    zeroExplanation: {
      what: {
        en: 'A Finite State Machine (FSM) is a design pattern where an entity can only be in one state at any given time (e.g. either Walking, Attacking, or Dead, but never Walking and Dead simultaneously).',
        th: 'Finite State Machine (FSM) คือรูปแบบการออกแบบที่กำหนดให้ตัวละครอยู่ใน "สถานะเดียว" เสมอในเวลาใดเวลาหนึ่ง (เช่น ยืน, เดิน, โจมตี หรือ ตาย แต่ไม่มีทางเดินและตายพร้อมกัน)',
      },
      why: {
        en: 'In complex games, adding a new mechanic (e.g., swimming or climbing) to an existing if/else block risks breaking every other mechanic. FSM encapsulates each mechanic in its own isolated class.',
        th: 'ในเกมขนาดใหญ่ การเพิ่มระบบใหม่ เช่น ว่ายน้ำหรือปีนเขา ลงในโค้ด if/else เดิม มีความเสี่ยงที่จะทำให้ระบบอื่นพังทั้งหมด FSM ช่วยแยกแต่ละท่าทางออกเป็นไฟล์เดี่ยวๆ ที่ไม่กวนกัน',
      },
      how: {
        en: 'Each state implements an interface: Enter() initializes animations, Update() processes logic, Exit() cleans up, and ChangeState() handles transitions cleanly.',
        th: 'แต่ละสถานะจะสืบทอดโครงสร้างเดียวกัน: Enter() เปิดแอนิเมชัน, Update() ตรวจสอบปุ่ม, Exit() ปิดเอฟเฟกต์ และ ChangeState() สลับสถานะอย่างราบรื่น',
      },
      when: {
        en: 'Player controllers, boss fight phases, complex weapon reload cycles, and turn-based battle stages.',
        th: 'ระบบควบคุมตัวละครหลัก, รูปแบบการต่อสู้ของบอส (Boss Fight Phases), ระบบคอมโบอาวุธ และระบบผลัดกันเล่น Turn-based',
      },
    },
    diagram: {
      type: 'fsm-states',
      title: {
        en: 'Player State Machine Transitions',
        th: 'ผังการเปลี่ยนสถานะของตัวละคร (State Machine)',
      },
      description: {
        en: 'IdleState <-> MoveState -> AttackState -> Recovery -> IdleState | Any State -> DeadState on HP <= 0.',
        th: 'IdleState สลับ MoveState -> AttackState -> พักดาบ -> กลับสู่ Idle | ทุกสถานะสามารถถูกตัดเข้าสู่ DeadState เมื่อเลือดหมด',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'The IState Interface Contract',
          th: 'การกำหนดอินเทอร์เฟซ IState',
        },
        explanation: {
          en: 'Define the 4 essential lifecycle callbacks: Enter() when entering the state, LogicUpdate() on every frame, PhysicsUpdate() on every fixed tick, and Exit() before leaving.',
          th: 'กำหนด 4 ฟังก์ชันสำคัญ: Enter() ตอนเข้าสู่สถานะ, LogicUpdate() ในทุกเฟรม, PhysicsUpdate() ในจังหวะฟิสิกส์ และ Exit() ก่อนจะเปลี่ยนไปสถานะอื่น',
        },
        inspectorData: {
          componentName: 'PlayerStateMachineRunner',
          properties: [
            { name: 'Current State', value: 'MoveState (Active)', hint: 'Inspected dynamically at runtime' },
            { name: 'Previous State', value: 'IdleState', hint: 'History trace' },
          ],
        },
      },
    ],
    codeExamples: [
      {
        title: 'Complete Production Finite State Machine',
        language: 'csharp',
        code: `using UnityEngine;

// 1. Base State Contract
public abstract class State
{
    protected PlayerController player;
    protected StateMachine stateMachine;

    public State(PlayerController player, StateMachine stateMachine)
    {
        this.player = player;
        this.stateMachine = stateMachine;
    }

    public virtual void Enter() {}
    public virtual void LogicUpdate() {}
    public virtual void PhysicsUpdate() {}
    public virtual void Exit() {}
}

// 2. State Machine Brain
public class StateMachine
{
    public State CurrentState { get; private set; }

    public void Initialize(State startingState)
    {
        CurrentState = startingState;
        CurrentState.Enter();
    }

    public void ChangeState(State newState)
    {
        CurrentState?.Exit();
        CurrentState = newState;
        CurrentState.Enter();
    }
}

// 3. Concrete State Implementation: MoveState
public class MoveState : State
{
    public MoveState(PlayerController player, StateMachine stateMachine) : base(player, stateMachine) {}

    public override void LogicUpdate()
    {
        if (Input.GetButtonDown("Fire1"))
        {
            stateMachine.ChangeState(player.AttackState);
            return;
        }

        if (player.MovementInput.magnitude < 0.1f)
        {
            stateMachine.ChangeState(player.IdleState);
            return;
        }
    }

    public override void PhysicsUpdate()
    {
        player.ApplyMovementVelocity();
    }
}`,
        explanation: {
          en: 'Decoupling states into separate classes guarantees that bug-fixes in AttackState can never accidentally break walking or jumping mechanics.',
          th: 'การแยกสถานะออกเป็นแต่ละคลาสอย่างอิสระ รับประกันว่าการเข้าไปแก้โค้ดใน AttackState จะไม่มีทางไปกระทบให้ระบบเดินหรือกระโดดพังอย่างแน่นอน',
        },
      },
    ],
    practiceChecklist: [
      { id: 'ua01-1', title: { en: 'Create abstract State base class and StateMachine runner', th: 'สร้างคลาสแม่ State และคลาสจัดการ StateMachine' }, completed: false },
      { id: 'ua01-2', title: { en: 'Implement IdleState and MoveState', th: 'เขียนคลาส IdleState และ MoveState ให้ทำงานร่วมกัน' }, completed: false },
      { id: 'ua01-3', title: { en: 'Add AttackState with transition on left mouse click', th: 'สร้าง AttackState ที่ตัดเข้าทำงานเมื่อคลิกเมาส์ซ้าย' }, completed: false },
    ],
    miniChallenge: {
      prompt: {
        en: 'How does an FSM prevent the bug where a player attacks and drinks a potion while frozen in ice?',
        th: 'สถาปัตยกรรม FSM ป้องกันบั๊กที่ผู้เล่นโจมตี ดื่มยา และกระโดด ในขณะที่ถูกแช่แข็งเป็นน้ำแข็งได้อย่างไร?',
      },
      hint: {
        en: 'Think about what happens when the player is currently inside "FrozenState".',
        th: 'คิดดูว่าจะเกิดอะไรขึ้นเมื่อตัวละครอยู่ใน "FrozenState"',
      },
      solution: {
        en: 'Inside FrozenState, input polling for attacks, potions, and jumping simply does not exist! Because only FrozenState.LogicUpdate() executes, illegal actions are impossible by design.',
        th: 'ใน FrozenState จะไม่มีโค้ดตรวจจับปุ่มโจมตีหรือดื่มยาอยู่เลย! และเนื่องจากมีเพียง FrozenState เท่านั้นที่กำลังรันอยู่ ตัวละครจึงไม่มีทางทำสิ่งที่ผิดกฎสถานะได้ 100%',
      },
    },
    commonMistakes: [
      {
        mistake: { en: 'Allocating "new IdleState()" inside ChangeState() every time', th: 'สร้างอ็อบเจกต์ "new IdleState()" ใหม่ทุกครั้งที่เปลี่ยนสถานะ' },
        why: { en: 'Spamming "new" allocates garbage memory hundreds of times, causing garbage collection lag.', th: 'การ new บ่อยๆ จะสร้างขยะหน่วยความจำมหาศาล ทำให้ Garbage Collector ทำงานและเกมกระตุก' },
        fix: { en: 'Instantiate each state once at startup in Awake() and reuse the existing references.', th: 'สร้างสถานะทั้งหมดเตรียมไว้ครั้งเดียวใน Awake() แล้วนำตัวแปรเดิมมาใช้ซ้ำ' },
      },
    ],
    quiz: [
      {
        question: {
          en: 'What is the core rule of a standard Finite State Machine?',
          th: 'กฎเหล็กที่เป็นหัวใจสำคัญของระบบ Finite State Machine คืออะไร?',
        },
        options: {
          en: [
            'An entity can only be in one state at any given moment',
            'All states must run at 120 FPS',
            'States can only be modified from the Unity Inspector',
            'Every state must use Rigidbody physics',
          ],
          th: [
            'วัตถุสามารถอยู่ในสถานะได้เพียง 1 สถานะเท่านั้นในเวลาเดียวกัน',
            'ทุกสถานะต้องรันที่ 120 FPS',
            'สถานะต้องถูกแก้ไขจากหน้าต่าง Inspector เท่านั้น',
            'ทุกสถานะต้องใช้ฟิสิกส์ Rigidbody',
          ],
        },
        correctIndex: 0,
        explanation: {
          en: 'A finite state machine guarantees that only one active state runs its logic at a time, eliminating conflicting behavior.',
          th: 'FSM รับประกันว่าจะมีเพียงสถานะเดียวที่แอคทีฟอยู่ ช่วยตัดปัญหาคำสั่งขัดแย้งกันเองได้อย่างสิ้นเชิง',
        },
      },
    ],
  },
  {
    id: 'unity-advanced-002',
    engine: 'unity',
    level: 'advanced',
    lessonNumber: 14,
    slug: 'object-pooling-memory-optimization',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    heroImageCaption: {
      en: 'Real-time CPU memory allocation profiler: zero-garbage collection cycles and pre-allocated object recycling',
      th: 'การตรวจสอบประสิทธิภาพหน่วยความจำ CPU: การลดขยะแรมให้เป็นศูนย์ และการนำวัตถุใน Pool กลับมาใช้ใหม่',
    },
    title: {
      en: 'Object Pooling & Memory Optimization: Zero-Allocation Spawning',
      th: 'ระบบ Object Pooling และการปรับปรุงประสิทธิภาพ: การเสกวัตถุไร้ขยะแรม 0% Lag',
    },
    shortDescription: {
      en: 'Eliminate Garbage Collection spikes and micro-stutters. Build a high-performance generic Object Pool for bullets, particle VFX, and enemy hordes.',
      th: 'ขจัดอาการกระตุกของเกมจาก Garbage Collection สร้างระบบ Object Pool ระดับโปรเพื่อนำกระสุน เอฟเฟกต์ และศัตรูกลับมาใช้ซ้ำโดยไม่ต้อง Instantiate/Destroy ใหม่',
    },
    estimatedMinutes: 35,
    tags: ['Advanced', 'Unity', 'Optimization', 'ObjectPool', 'Profiler', 'Performance'],
    startFromZero: false,
    objectives: {
      en: [
        'Understand the hidden cost of Instantiate() and Destroy() on Garbage Collection and memory fragmentation',
        'Build a reusable Generic Object Pool using Queue<T> or Unity 2021+ UnityEngine.Pool.ObjectPool',
        'Profile memory allocations in Unity Profiler and verify 0 B GC.Alloc during combat',
      ],
      th: [
        'เข้าใจผลกระทบมหาศาลของคำสั่ง Instantiate() และ Destroy() ที่ทำให้แรมแตกกระจายและกระตุก',
        'สร้างระบบ Generic Object Pool ที่ใช้ซ้ำได้กับทุกวัตถุ หรือใช้ UnityEngine.Pool สำเร็จรูปของ Unity',
        'เปิดตรวจสอบกราฟใน Unity Profiler เพื่อยืนยันว่าการยิงปืนรัวๆ มีค่า GC.Alloc เป็น 0 Bytes',
      ],
    },
    prerequisites: {
      en: ['Completed Unity Basic 3: Spawning & Combat Mechanics'],
      th: ['ผ่านเนื้อหา Unity Basic 3: ระบบต่อสู้และการเกิดของวัตถุ'],
    },
    zeroExplanation: {
      what: {
        en: 'Object Pooling is an optimization pattern where a collection of objects is created once at startup and kept deactivated. When needed, an object is borrowed, activated, and returned back to the pool rather than destroyed.',
        th: 'Object Pooling คือเทคนิคการเพิ่มประสิทธิภาพ โดยสร้างวัตถุเตรียมไว้ล่วงหน้าตั้งแต่ตอนเริ่มเกมแล้วปิดไว้ เมื่อต้องการใช้ก็นำออกมาเปิด และเมื่อใช้เสร็จก็นำกลับไปเก็บแทนที่จะสั่งทำลายทิ้ง',
      },
      why: {
        en: 'Calling Instantiate and Destroy 100 times per second triggers Unity’s Garbage Collector (GC), which pauses the CPU for 10-30 milliseconds, causing noticeable frame drops and lagging.',
        th: 'การสั่ง Instantiate และ Destroy บ่อยๆ จะทำให้ Garbage Collector ต้องหยุดการทำงานของเกมชั่วขณะเพื่อเก็บกวาดแรม ส่งผลให้เกมเกิดอาการภาพกระตุกเป็นจังหวะ (Micro-stutter)',
      },
      how: {
        en: 'Pre-instantiate 50 bullets into a Queue<GameObject>. On fire: pool.Dequeue(), SetActive(true). On impact: SetActive(false), pool.Enqueue(bullet).',
        th: 'สร้างกระสุน 50 นัดเตรียมไว้ใน Queue เมื่อยิง: ดึงออกมาและสั่ง SetActive(true), เมื่อชนเป้าหมาย: สั่ง SetActive(false) แล้วส่งกลับเข้า Queue เดิม',
      },
      when: {
        en: 'Machine gun bullets, bullet-hell shmups, particle blood splatters, coins, and horde survivors with thousands of enemies.',
        th: 'กระสุนปืนกล, เกมแนวยิงกระสุนเต็มจอ (Bullet Hell), เอฟเฟกต์เลือด, เหรียญรางวัล และเกมฝูงศัตรูมหาศาลแบบ Vampire Survivors',
      },
    },
    diagram: {
      type: 'object-pool',
      title: {
        en: 'Object Pooling Lifecycle Cycle',
        th: 'วงจรการทำงานของระบบ Object Pool',
      },
      description: {
        en: 'Startup: Create 50 Bullets (Inactive in RAM) -> Player Shoots -> Borrow from Pool (SetActive(true)) -> Hit Target -> Return to Pool (SetActive(false)). Zero GC!',
        th: 'เริ่มเกม: เสกกระสุน 50 นัดเตรียมไว้ (ปิดการทำงาน) -> ผู้เล่นยิงปืน -> ยืมจากพูล (เปิดใช้งาน) -> ชนเป้าหมาย -> คืนกลับเข้าพูล (ปิดการทำงาน) ไม่เปลืองแรมเพิ่มแม้แต่นิดเดียว!',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Architecting the Generic Pool Manager',
          th: 'การออกแบบคลาสจัดการ Object Pool',
        },
        explanation: {
          en: 'Create an ObjectPoolManager class holding a Queue of pre-warmed inactive GameObjects and an initial pool capacity.',
          th: 'สร้างคลาสจัดการ ObjectPoolManager ที่มี Queue เก็บวัตถุเตรียมพร้อม และกำหนดจำนวนตั้งต้นที่ต้องการสร้างไว้ล่วงหน้า',
        },
        inspectorData: {
          componentName: 'ObjectPoolManager',
          properties: [
            { name: 'Prefab', value: 'Bullet_Laser (Prefab)', hint: 'Object to recycle' },
            { name: 'Initial Pool Size', value: '50', hint: 'Pre-instantiated at Awake' },
            { name: 'Auto Expand', value: 'True [Checked]', hint: 'Expands if burst exceeds size' },
          ],
        },
      },
    ],
    codeExamples: [
      {
        title: 'High-Performance Bullet Object Pool',
        language: 'csharp',
        code: `using System.Collections.Generic;
using UnityEngine;

public class BulletPool : MonoBehaviour
{
    public static BulletPool Instance { get; private set; }

    [SerializeField] private GameObject bulletPrefab;
    [SerializeField] private int initialPoolSize = 50;

    private readonly Queue<GameObject> poolQueue = new Queue<GameObject>();

    void Awake()
    {
        Instance = this;

        // Pre-allocate all objects at startup
        for (int i = 0; i < initialPoolSize; i++)
        {
            GameObject obj = Instantiate(bulletPrefab, transform);
            obj.SetActive(false);
            poolQueue.Enqueue(obj);
        }
    }

    public GameObject SpawnBullet(Vector3 position, Quaternion rotation)
    {
        GameObject bullet = poolQueue.Count > 0 ? poolQueue.Dequeue() : Instantiate(bulletPrefab, transform);

        bullet.transform.SetPositionAndRotation(position, rotation);
        bullet.SetActive(true);
        return bullet;
    }

    public void ReturnBullet(GameObject bullet)
    {
        bullet.SetActive(false);
        poolQueue.Enqueue(bullet);
    }
}`,
        explanation: {
          en: 'By toggling SetActive(true/false) instead of creating/destroying native C++ engine representations, CPU utilization drops by up to 85%.',
          th: 'การสลับคำสั่ง SetActive(true/false) แทนการสร้างและลบวัตถุ ช่วยลดภาระการทำงานของ CPU ลงได้มากถึง 85%',
        },
      },
    ],
    practiceChecklist: [
      { id: 'ua02-1', title: { en: 'Pre-warm a pool of 30 bullet GameObjects in Awake()', th: 'เสกกระสุน 30 นัดเตรียมไว้ล่วงหน้าในฟังก์ชัน Awake()' }, completed: false },
      { id: 'ua02-2', title: { en: 'Replace Instantiate with pool.SpawnBullet()', th: 'เปลี่ยนคำสั่ง Instantiate เป็นการยืมจาก pool.SpawnBullet()' }, completed: false },
      { id: 'ua02-3', title: { en: 'Replace Destroy with pool.ReturnBullet()', th: 'เปลี่ยนคำสั่ง Destroy เป็นการส่งคืนด้วย pool.ReturnBullet()' }, completed: false },
    ],
    miniChallenge: {
      prompt: {
        en: 'If a bullet was moving forward at 50 m/s when recycled, what must you remember to do when retrieving it from the pool again?',
        th: 'หากกระสุนกำลังพุ่งไปข้างหน้าด้วยความเร็ว 50 m/s ก่อนถูกส่งกลับเข้าพูล เมื่อนำกลับมาใช้ใหม่ต้องระวังอะไร?',
      },
      hint: {
        en: 'Does an existing GameObject remember its previous velocity and timer states?',
        th: 'วัตถุที่ใช้ซ้ำยังคงจำค่าความเร็วและเวลาเดิมของมันไว้หรือไม่?',
      },
      solution: {
        en: 'You must reset its velocity and internal state! Reset rb.linearVelocity = Vector3.zero and restart any timer variables inside an OnEnable() method on the bullet script.',
        th: 'คุณต้องรีเซ็ตค่าความเร็วและสถานะเดิมของมันเสมอ! โดยสั่งรีเซ็ต rb.linearVelocity = Vector3.zero ในฟังก์ชัน OnEnable() ของกระสุน เพื่อไม่ให้กระสุนพุ่งออกไปผิดทิศทาง',
      },
    },
    commonMistakes: [
      {
        mistake: { en: 'Returning an object to the pool twice by accident', th: 'เผลอส่งวัตถุเดิมกลับเข้าพูลซ้ำสองรอบ' },
        why: { en: 'Double-enqueuing corrupts the queue, causing two different systems to control the exact same bullet simultaneously.', th: 'การส่งซ้ำจะทำให้ Queue รวน และส่งผลให้อ็อบเจกต์เดียวกันถูกนำไปแสดงผลที่จุดสองจุดพร้อมกัน' },
        fix: { en: 'Verify if (gameObject.activeSelf) before returning, or check if the pool already contains the reference.', th: 'ตรวจสอบเงื่อนไข if (gameObject.activeSelf) ก่อนส่งคืนพูลเสมอ' },
      },
    ],
    quiz: [
      {
        question: {
          en: 'What primary performance issue does Object Pooling solve?',
          th: 'ปัญหาด้านประสิทธิภาพหลักที่ระบบ Object Pooling เข้ามาช่วยแก้ไขคืออะไร?',
        },
        options: {
          en: [
            'Garbage Collection spikes and CPU allocation lag',
            'Texture resolution compression',
            'Sound mixing clipping',
            'Network packet latency',
          ],
          th: [
            'อาการกระตุกจาก Garbage Collection และการจัดสรรแรม',
            'การบีบอัดความละเอียดของพื้นผิว (Texture)',
            'เสียงแตกจากการมิกซ์เสียง',
            'ความหน่วงของอินเทอร์เน็ต',
          ],
        },
        correctIndex: 0,
        explanation: {
          en: 'Object pooling eliminates runtime heap allocations, ensuring zero Garbage Collector invocation during action gameplay.',
          th: 'Object Pooling ช่วยกำจัดการจองแรมซ้ำๆ ส่งผลให้ Garbage Collector ไม่ต้องทำงานระหว่างเล่นเกม และตัดอาการภาพกระตุกได้อย่างสมบูรณ์',
        },
      },
    ],
  },
  {
    id: 'unity-advanced-003',
    engine: 'unity',
    level: 'advanced',
    lessonNumber: 15,
    slug: 'custom-shaders-universal-render-pipeline',
    heroImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
    heroImageCaption: {
      en: 'Real-time shader refraction, universal render pipeline lighting passes, and post-processing bloom',
      th: 'การหักเหแสงของ Shader แบบเรียลไทม์ การคำนวณแสงใน URP และเอฟเฟกต์แสงฟุ้ง Post-Processing Bloom',
    },
    title: {
      en: 'Custom Shaders & Universal Render Pipeline (URP)',
      th: 'การสร้าง Custom Shaders และ Universal Render Pipeline (URP)',
    },
    shortDescription: {
      en: 'Master Shader Graph and HLSL math: create holographic shields, dissolvable materials, custom lighting ramps, and cinematic post-processing volume profiles.',
      th: 'เรียนรู้การสร้าง Shader ด้วย Shader Graph และคณิตศาสตร์ HLSL: ทำเกราะโฮโลแกรม เอฟเฟกต์สลายร่าง และปรับแต่งโทนภาพด้วย Post-Processing Volume',
    },
    estimatedMinutes: 40,
    tags: ['Advanced', 'Unity', 'URP', 'Shaders', 'ShaderGraph', 'VFX'],
    startFromZero: false,
    objectives: {
      en: [
        'Understand how modern GPU rendering pipelines function (Vertex Shader -> Fragment Shader -> Screen Buffer)',
        'Build interactive visual shaders using node-based Shader Graph in URP',
        'Configure Post-Processing Volume stacks (Bloom, Tonemapping, Color Grading, Ambient Occlusion)',
      ],
      th: [
        'เข้าใจหลักการทำงานของ GPU Rendering Pipeline (Vertex Shader -> Fragment Shader -> หน้าจอ)',
        'สร้าง Shader โฮโลแกรมและสลายร่างด้วย Shader Graph ในระบบ URP',
        'ปรับแต่งชุดเอฟเฟกต์ภาพยนตร์ด้วย Post-Processing Volume (Bloom แสงฟุ้ง, Tonemapping และการเกรดสี)',
      ],
    },
    prerequisites: {
      en: ['Completed Unity Basic Track (Materials & Rendering)'],
      th: ['ผ่านเนื้อหา Unity Basic (Material และการเรนเดอร์)'],
    },
    zeroExplanation: {
      what: {
        en: 'A Shader is a specialized program executed directly on the GPU across millions of pixels simultaneously to determine colors, lighting reflections, and vertex displacements.',
        th: 'Shader คือโปรแกรมพิเศษที่รันอยู่บนชิปการ์ดจอ (GPU) คำนวณพิกเซลหลายล้านจุดพร้อมกันเพื่อกำหนดสี แสงเงาสะท้อน และการบิดรูปทรง 3 มิติ',
      },
      why: {
        en: 'Standard default materials look generic. Custom shaders give your game its unique signature art style (Genshin cel-shading, Cyberpunk holograms, stylized water waves).',
        th: 'Material ทั่วไปจะดูธรรมดาและไร้เอกลักษณ์ การสร้าง Custom Shader ช่วยให้เกมของคุณมีสไตล์ภาพที่โดดเด่น เช่น กราฟิกอนิเมะเซลเฉด หรือน้ำทะเลที่มีคลื่นสมจริง',
      },
      how: {
        en: 'Create a URP Lit Shader Graph, manipulate Fresnel Effect and Time-scrolled Noise textures, output to Base Color and Emission, and assign to a Material.',
        th: 'สร้าง URP Lit Shader Graph เชื่อมต่อโหนด Fresnel และ Noise ผสมเวลา Time ส่งผลลัพธ์เข้าสู่ Base Color และช่องเรืองแสง Emission',
      },
      when: {
        en: 'Force fields, dissolves, sci-fi portals, cartoon cel-shading, dynamic ocean water, and invisibility cloaks.',
        th: 'เกราะบาเรีย, การสลายร่างเป็นเถ้าถ่าน, ประตูมิติ, กราฟิกสไตล์การ์ตูน, น้ำทะเล และเอฟเฟกต์ล่องหน',
      },
    },
    diagram: {
      type: 'render-pipeline',
      title: {
        en: 'The GPU Render Pipeline Stages',
        th: 'ขั้นตอนการทำงานของ GPU Render Pipeline',
      },
      description: {
        en: '3D Mesh Vertices -> Vertex Shader (Position) -> Rasterizer -> Fragment Shader (Colors/Normals) -> Post-Processing -> Final Monitor Frame.',
        th: 'จุดยอดโมเดล 3D -> Vertex Shader (ตำแหน่ง) -> แปลงเป็นพิกเซล -> Fragment Shader (ใส่สีและแสง) -> Post-Processing -> แสดงผลบนจอ',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Creating a Hologram Fresnel Shader Graph',
          th: 'การสร้าง Hologram Fresnel ด้วย Shader Graph',
        },
        explanation: {
          en: 'Right-click > Create > Shader Graph > URP > Lit Shader Graph. Add a "Fresnel Effect" node connected to the Alpha and Emission slots to make the edges of your 3D mesh glow like a sci-fi hologram.',
          th: 'คลิกขวา > Create > Shader Graph > URP > Lit Shader Graph เพิ่มโหนด "Fresnel Effect" ต่อเข้ากับ Alpha และ Emission เพื่อให้ขอบของวัตถุ 3D เรืองแสงสว่างเหมือนโฮโลแกรม',
        },
        inspectorData: {
          componentName: 'Material: Mat_HoloShield',
          properties: [
            { name: 'Fresnel Power', value: '3.5', hint: 'Edge glow sharpness' },
            { name: 'Holo Color', value: 'HDR Cyan (#00F5FF, Intensity 2.5)', hint: 'Triggers bloom' },
            { name: 'Scanline Speed', value: '1.2', hint: 'Vertical wave frequency' },
          ],
        },
      },
    ],
    codeExamples: [
      {
        title: 'Controlling Shader Material Properties via C#',
        language: 'csharp',
        code: `using System.Collections;
using UnityEngine;

public class DissolveEffectController : MonoBehaviour
{
    private Material targetMaterial;
    private static readonly int DissolveAmountProp = Shader.PropertyToID("_DissolveAmount");

    [SerializeField] private float dissolveDuration = 1.5f;

    void Awake()
    {
        // Get instanced material copy
        targetMaterial = GetComponent<Renderer>().material;
    }

    public void TriggerDissolve()
    {
        StartCoroutine(AnimateDissolve());
    }

    private IEnumerator AnimateDissolve()
    {
        float elapsed = 0f;

        while (elapsed < dissolveDuration)
        {
            elapsed += Time.deltaTime;
            float progress = Mathf.Clamp01(elapsed / dissolveDuration);

            // Pass 0.0 (fully solid) to 1.0 (fully dissolved into ash)
            targetMaterial.SetFloat(DissolveAmountProp, progress);
            yield return null;
        }

        Destroy(gameObject);
    }
}`,
        explanation: {
          en: 'Shader.PropertyToID caches the uniform property ID into an integer, enabling ultra-fast material updates without string lookup overhead.',
          th: 'Shader.PropertyToID แปลงชื่อตัวแปรของ Shader เป็นรหัสตัวเลข ช่วยให้ C# ส่งค่าตัวเลขเข้าสู่การ์ดจอได้อย่างรวดเร็วในทุกๆ เฟรม',
        },
      },
    ],
    practiceChecklist: [
      { id: 'ua03-1', title: { en: 'Create a URP Lit Shader Graph in Project Assets', th: 'สร้างไฟล์ URP Lit Shader Graph ในโฟลเดอร์ Assets' }, completed: false },
      { id: 'ua03-2', title: { en: 'Connect Fresnel Effect to Emission for edge glow', th: 'เชื่อมโหนด Fresnel Effect เข้ากับช่อง Emission เพื่อสร้างขอบเรืองแสง' }, completed: false },
      { id: 'ua03-3', title: { en: 'Add a Global Volume with Bloom and ACES Tonemapping', th: 'สร้าง Global Volume พร้อมเปิดใช้ Bloom และ ACES Tonemapping' }, completed: false },
    ],
    miniChallenge: {
      prompt: {
        en: 'Why do HDR colors with an Intensity greater than 1.0 glow on the screen when Bloom is enabled?',
        th: 'ทำไมสีแบบ HDR ที่มีค่า Intensity มากกว่า 1.0 ถึงส่องแสงฟุ้งกระจายออกมาได้เมื่อเปิดใช้งาน Bloom?',
      },
      hint: {
        en: 'Think about how the Bloom post-processing threshold works.',
        th: 'ลองนึกถึงเกณฑ์ (Threshold) ของเอฟเฟกต์ Bloom ใน Post-Processing',
      },
      solution: {
        en: 'Standard colors max out at (1.0, 1.0, 1.0). The Bloom post-processing pass detects any pixel with luminance exceeding 1.0, blurs it, and composites it back over the scene as a radiant glow!',
        th: 'สีทั่วไปจะมีความสว่างสูงสุดที่ 1.0 แต่เอฟเฟกต์ Bloom จะคัดกรองเฉพาะพิกเซลที่มีความสว่างเกิน 1.0 ขึ้นไป นำไปเบลอ และซ้อนกลับลงมาบนจอจนเกิดเป็นแสงเรืองรอง!',
      },
    },
    commonMistakes: [
      {
        mistake: { en: 'Bloom effect does not glow even after adding Bloom to Volume', th: 'ใส่เอฟเฟกต์ Bloom ใน Volume แล้วแต่แสงยังคงไม่ฟุ้งเรืองรอง' },
        why: { en: 'The Camera does not have "Post Processing" checked in its Inspector settings.', th: 'ลืมติ๊กเครื่องหมายถูกที่ช่อง "Post Processing" ในตัวกล้อง Camera' },
        fix: { en: 'Select Main Camera in Hierarchy, look in the Inspector, and enable the "Post Processing" checkbox.', th: 'เลือกกล้อง Main Camera แล้วติ๊กเปิดใช้งานตัวเลือก Post Processing ใน Inspector' },
      },
    ],
    quiz: [
      {
        question: {
          en: 'Which Shader Graph node produces a bright silhouette glow along the curved edges of a 3D mesh?',
          th: 'โหนดใดใน Shader Graph ที่สร้างแสงเรืองรองตามแนวขอบโค้งของวัตถุ 3 มิติ?',
        },
        options: {
          en: ['Fresnel Effect', 'Voronoi', 'Simple Noise', 'Tiling and Offset'],
          th: ['Fresnel Effect', 'Voronoi', 'Simple Noise', 'Tiling and Offset'],
        },
        correctIndex: 0,
        explanation: {
          en: 'The Fresnel Effect calculates the dot product between the surface normal and viewing angle, generating a brighter rim around glancing edges.',
          th: 'Fresnel Effect คำนวณมุมระหว่างทิศทางของสายตากับผิวของโมเดล ทำให้เกิดแสงสว่างรอบขอบอย่างสวยงาม',
        },
      },
    ],
  },
];
