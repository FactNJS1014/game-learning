import { Lesson } from '../../types';

export const unrealAdvancedLessons: Lesson[] = [
  {
    id: 'unreal-advanced-001',
    engine: 'unreal',
    level: 'advanced',
    lessonNumber: 13,
    slug: 'gameplay-ability-system-gas-ue5',
    heroImage: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80',
    heroImageCaption: {
      en: 'Gameplay Ability System (GAS) architecture: Attribute Sets, Gameplay Effects, and hierarchical Gameplay Tags',
      th: 'สถาปัตยกรรม Gameplay Ability System (GAS): ชุดคุณสมบัติ Attribute, เอฟเฟกต์ Gameplay Effect และ Gameplay Tags',
    },
    title: {
      en: 'Gameplay Ability System (GAS): Abilities, Effects & Tags',
      th: 'สถาปัตยกรรม Gameplay Ability System (GAS): ระบบสกิล ความสามารถ และแท็กระดับมืออาชีพ',
    },
    shortDescription: {
      en: 'Master the AAA framework behind Fortnite and Paragon: build data-driven RPG spells, mana cooldowns, damage calculations, and hierarchical Gameplay Tags with GAS.',
      th: 'เรียนรู้สุดยอดเฟรมเวิร์กสร้างเกมระดับ AAA ที่ใช้ใน Fortnite: สร้างระบบสกิลเวทมนตร์ คูลดาวน์ หลอดมานา การคำนวณดาเมจ และระบบ Gameplay Tags',
    },
    estimatedMinutes: 40,
    tags: ['Advanced', 'Unreal', 'GAS', 'GameplayAbilities', 'GameplayTags', 'Architecture'],
    startFromZero: false,
    objectives: {
      en: [
        'Understand the 4 pillars of GAS: Ability System Component (ASC), Gameplay Abilities (GA), Gameplay Effects (GE), and Attribute Sets',
        'Organize state categories using hierarchical Gameplay Tags (e.g. State.Debuff.Stunned)',
        'Build a Fireball spell ability with cost, cooldown, and damage execution calculations',
      ],
      th: [
        'เข้าใจ 4 เสาหลักของ GAS: Ability System Component (ASC), Gameplay Abilities (GA), Gameplay Effects (GE) และ Attribute Sets',
        'จัดหมวดหมู่สถานะด้วยระบบแท็ก Gameplay Tags (เช่น State.Debuff.Stunned)',
        'สร้างสกิลลูกบอลไฟ Fireball ที่มีค่าร่ายมานา เวลาคูลดาวน์ และการคำนวณดาเมจที่ถูกต้องตามหลักเกม',
      ],
    },
    prerequisites: {
      en: ['Completed Unreal Intermediate Track (Blueprint Interfaces, Animation)'],
      th: ['ผ่านเนื้อหา Unreal Intermediate ทั้งหมด (Interface, แอนิเมชัน)'],
    },
    zeroExplanation: {
      what: {
        en: 'The Gameplay Ability System (GAS) is Epic Games’ battle-tested framework for building RPG abilities, hero powers, buffs, debuffs, and character attributes.',
        th: 'Gameplay Ability System (GAS) คือสุดยอดเฟรมเวิร์กของ Epic Games สำหรับสร้างระบบสกิลฮีโร่ บัฟ ดีบัฟ และการต่อสู้ในเกมระดับโปร',
      },
      why: {
        en: 'In complex games, mechanics like "silenced", "frozen", or "invulnerable" clash horribly with ability logic. GAS handles cooldowns, replication, and canceling mechanics effortlessly.',
        th: 'ในเกมที่มีระบบซับซ้อน สถานะอย่าง "ติดสตัน", "ใบ้ห้ามใช้สกิล" หรือ "อมตะ" มักจะตีกันจนเกิดบั๊ก GAS ถูกสร้างมาเพื่อแก้ปัญหานี้และรองรับระบบออนไลน์อัตโนมัติ',
      },
      how: {
        en: 'Attach an AbilitySystemComponent to your Character, define Health/Mana in an AttributeSet, trigger GameplayAbilities using GameplayTags, and apply damage via GameplayEffects.',
        th: 'ติดตั้ง AbilitySystemComponent ให้ตัวละคร, สร้างตัวแปร Health/Mana ใน AttributeSet, สั่งใช้สกิลด้วย GameplayTags และคิดดาเมจผ่าน GameplayEffects',
      },
      when: {
        en: 'Action RPGs, MOBAs, hero shooters, fighting games, and survival crafting systems.',
        th: 'เกม Action RPG, แนว MOBA, เกมยิงฮีโร่สไตล์ Overwatch, เกมต่อสู้ และเกมเอาชีวิตรอด',
      },
    },
    diagram: {
      type: 'actor-component',
      title: {
        en: 'The 4 Pillars of Gameplay Ability System',
        th: '4 เสาหลักของระบบ Gameplay Ability System (GAS)',
      },
      description: {
        en: 'Player ASC -> Activates Gameplay Ability (GA_Fireball) -> Commits Cost & Cooldown -> Spawns Projectile -> Hits Target -> Applies Gameplay Effect (GE_Damage) -> Modifies Target AttributeSet (Health - 50).',
        th: 'ตัวละคร ASC -> สั่งใช้สกิล GA_Fireball -> หักมานาและเริ่มคูลดาวน์ -> เสกลูกไฟ -> กระทบเป้าหมาย -> ส่งเอฟเฟกต์ GE_Damage -> ลดเลือดใน AttributeSet ของเป้าหมาย 50 หน่วย',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Hierarchical Gameplay Tags',
          th: 'การจัดหมวดหมู่ด้วย Gameplay Tags',
        },
        explanation: {
          en: 'Gameplay Tags replace brittle string comparisons with fast 64-bit integer bitmasks. Use dot-notation: Ability.Skill.Fireball, State.Status.Burned, Cooldown.Ability.Fireball.',
          th: 'Gameplay Tags ใช้แทนการเปรียบเทียบข้อความแบบเดิม โดยใช้รหัสตัวเลข 64-bit ที่รวดเร็วมาก เช่น Ability.Skill.Fireball หรือ State.Status.Burned',
        },
      },
    ],
    codeExamples: [
      {
        title: 'AttributeSet Definition (C++ / Blueprint Concept)',
        language: 'csharp',
        code: `// C++ Native AttributeSet Definition (UAttributeSet):
// -----------------------------------------------------------------
// ATTRIBUTE_ACCESSORS(UMyAttributeSet, Health)
// ATTRIBUTE_ACCESSORS(UMyAttributeSet, MaxHealth)
// ATTRIBUTE_ACCESSORS(UMyAttributeSet, Mana)
// ATTRIBUTE_ACCESSORS(UMyAttributeSet, MaxMana)
//
// Inside PostGameplayEffectExecute:
// If (Data.EvaluatedData.Attribute == GetHealthAttribute())
// {
//     // Clamp health between 0 and MaxHealth
//     SetHealth(FMath::Clamp(GetHealth(), 0.0f, GetMaxHealth()));
//     if (GetHealth() <= 0.0f) TriggerDeath();
// }`,
        explanation: {
          en: 'AttributeSets encapsulate all stats and clamp changes automatically, guaranteeing health never accidentally goes below 0 or above maximum.',
          th: 'AttributeSet จะควบคุมและตรวจเช็กค่าสถิติทั้งหมด พร้อมทั้งล็อกขอบเขต (Clamp) ป้องกันไม่ให้เลือดติดลบหรือเกินค่าสูงสุดโดยอัตโนมัติ',
        },
      },
    ],
    practiceChecklist: [
      { id: 'ua01-1', title: { en: 'Enable Gameplay Abilities Plugin in Edit > Plugins', th: 'เปิดใช้งานปลั๊กอิน Gameplay Abilities ในหน้าต่าง Plugins' }, completed: false },
      { id: 'ua01-2', title: { en: 'Add AbilitySystemComponent to Character Blueprint', th: 'เพิ่ม AbilitySystemComponent ลงในตัวละคร' }, completed: false },
      { id: 'ua01-3', title: { en: 'Create a Gameplay Effect that subtracts 25 Health', th: 'สร้าง Gameplay Effect ที่มีคำสั่งลดเลือด 25 หน่วย' }, completed: false },
    ],
    miniChallenge: {
      prompt: {
        en: 'How does GAS prevent a player from casting a spell while they are currently stunned by an enemy?',
        th: 'ระบบ GAS ป้องกันไม่ให้ผู้เล่นร่ายเวทมนตร์ในขณะที่กำลังติดสถานะมึนงง (Stunned) ได้อย่างไร?',
      },
      hint: {
        en: 'Look at the "Activation Blocked Tags" property inside any Gameplay Ability.',
        th: 'สังเกตช่อง "Activation Blocked Tags" ภายในไฟล์ Gameplay Ability',
      },
      solution: {
        en: 'Inside the Gameplay Ability, add "State.Debuff.Stunned" to the "Activation Blocked Tags" list. Whenever the character has that tag, GAS automatically refuses to activate the ability!',
        th: 'เพียงใส่แท็ก "State.Debuff.Stunned" ลงในช่อง "Activation Blocked Tags" ของสกิล ตราบใดที่ตัวละครมีแท็กนี้ติดอยู่ GAS จะสั่งยกเลิกและห้ามร่ายสกิลให้อัตโนมัติ 100%!',
      },
    },
    commonMistakes: [
      {
        mistake: { en: 'Modifying Attribute values directly via basic variable set nodes instead of Gameplay Effects', th: 'แก้ค่าตัวแปรใน Attribute ตรงๆ โดยไม่ผ่าน Gameplay Effect' },
        why: { en: 'Direct modification bypasses prediction, network replication, and modifier clamping calculations.', th: 'การแก้ค่าตรงๆ จะทำให้ระบบคํานวณดาเมจ การแจ้งเตือนบนจอ และระบบออนไลน์รวนทั้งหมด' },
        fix: { en: 'Always apply an Instant GameplayEffect (GE) to modify attributes like Health or Mana.', th: 'ใช้ Gameplay Effect (GE) แบบ Instant เสมอเมื่อต้องการเพิ่มหรือลดค่าสถานะ' },
      },
    ],
    quiz: [
      {
        question: {
          en: 'Which component is the central brain required on any Actor using the Gameplay Ability System?',
          th: 'คอมโพเนนต์ใดที่เป็นหัวใจหลักที่ต้องติดตั้งให้กับ Actor ทุกตัวที่ต้องการใช้งานระบบ GAS?',
        },
        options: {
          en: [
            'AbilitySystemComponent (ASC)',
            'GameplayTagComponent',
            'CombatManagerComponent',
            'AttributeSystemActor',
          ],
          th: [
            'AbilitySystemComponent (ASC)',
            'GameplayTagComponent',
            'CombatManagerComponent',
            'AttributeSystemActor',
          ],
        },
        correctIndex: 0,
        explanation: {
          en: 'The AbilitySystemComponent (ASC) manages abilities, attributes, gameplay effects, and gameplay tags.',
          th: 'AbilitySystemComponent (ASC) คือคอมโพเนนต์หลักที่ควบคุมสกิล บัฟ ดีบัฟ และค่าสถานะทั้งหมดของตัวละคร',
        },
      },
    ],
  },
  {
    id: 'unreal-advanced-002',
    engine: 'unreal',
    level: 'advanced',
    lessonNumber: 14,
    slug: 'niagara-vfx-particles-ue5',
    heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    heroImageCaption: {
      en: 'Unreal Engine Niagara visual effects: GPU compute particle simulation, ribbon trails, and collision events',
      th: 'เอฟเฟกต์ภาพ Niagara ใน UE5: การจำลองอนุภาคด้วย GPU พลังสูง เส้นสายริบบิ้น และการกระทบกับพื้นผิวฉาก',
    },
    title: {
      en: 'Niagara Particle VFX: GPU Sim & Dynamic Emitters',
      th: 'ระบบเอฟเฟกต์อนุภาค Niagara VFX: การจำลองด้วย GPU และ Emitter ไดนามิก',
    },
    shortDescription: {
      en: 'Harness the cutting-edge VFX tool of modern game production: create high-density GPU particle storms, weapon trails, liquid splashes, and interactive collision sparks.',
      th: 'สร้างสรรค์สเปเชียลเอฟเฟกต์ระดับฮอลลีวูดด้วย Niagara: อนุภาคประกายไฟนับแสนจุดที่คำนวณบน GPU, รอยดาบ Ribbon Trails และสะเก็ดระเบิดที่กระทบพื้นผิวจริง',
    },
    estimatedMinutes: 35,
    tags: ['Advanced', 'Unreal', 'Niagara', 'VFX', 'Particles', 'GPU'],
    startFromZero: false,
    objectives: {
      en: [
        'Understand Niagara System vs Niagara Emitter architecture',
        'Configure GPU Compute particle simulation capable of rendering 100,000+ particles smoothly',
        'Trigger Niagara systems from Blueprints and Animation Notifies (AnimNotify_PlayNiagaraEffect)',
      ],
      th: [
        'เข้าใจความแตกต่างระหว่าง Niagara System และ Niagara Emitter',
        'ตั้งค่าการจำลองอนุภาคด้วย GPU Compute เพื่อเรนเดอร์ประกายไฟกว่า 100,000 จุดได้อย่างลื่นไหล',
        'สั่งเล่นเอฟเฟกต์ Niagara จาก Blueprint และจังหวะแอนิเมชันด้วย Animation Notify',
      ],
    },
    prerequisites: {
      en: ['Completed Unreal Intermediate Track (Materials, Animation)'],
      th: ['ผ่านเนื้อหา Unreal Intermediate (Material, แอนิเมชัน)'],
    },
    zeroExplanation: {
      what: {
        en: 'Niagara is Unreal Engine’s state-of-the-art visual effects system, replacing legacy Cascade to give artists full control over particle behaviors through modular graph modules.',
        th: 'Niagara คือระบบสเปเชียลเอฟเฟกต์ยุคใหม่ของ Unreal Engine ที่เปิดโอกาสให้นักพัฒนาควบคุมพฤติกรรมของอนุภาคได้อย่างอิสระผ่านระบบโมดูลาร์',
      },
      why: {
        en: 'Legacy particle systems choked the CPU after a few hundred sparks. Niagara executes on the GPU, allowing millions of colliding sparks, embers, and smoke clouds simultaneously.',
        th: 'ระบบอนุภาคแบบเก่าจะทำให้ CPU ค้างเมื่อมีประกายไฟไม่กี่ร้อยจุด แต่ Niagara คำนวณบนการ์ดจอ GPU จึงปล่อยสะเก็ดไฟได้นับล้านจุดโดยไม่กระตุก',
      },
      how: {
        en: 'Create a Niagara System from an Emitter template (Fountain/Sparks), change Sim Target to "GPU Compute Sim", set Spawn Rate to 15,000, and spawn with SpawnSystemAtLocation in Blueprint.',
        th: 'สร้าง Niagara System จากเทมเพลตประกายไฟ เปลี่ยน Sim Target เป็น "GPU Compute Sim" ตั้งค่าการปล่อยอนุภาค 15,000 จุด และสั่งเล่นด้วย SpawnSystemAtLocation ใน Blueprint',
      },
      when: {
        en: 'Explosions, magical spells, weapon impacts, rain/snow weather systems, and environmental dust motes.',
        th: 'การระเบิด, คาถาเวทมนตร์, กระสุนกระทบกำแพง, ฝนตกหิมะตก และฝุ่นละอองในบรรยากาศ',
      },
    },
    diagram: {
      type: 'physics-pipeline',
      title: {
        en: 'Niagara GPU Compute Lifecycle',
        th: 'วงจรการทำงานของ Niagara GPU Compute',
      },
      description: {
        en: 'Emitter Spawn -> Particle Spawn (Initial Velocity, Color HDR, Size) -> Particle Update (Gravity, Curl Noise Turbulence, Collision Depth Buffer) -> Particle Render (GPU Sprites).',
        th: 'จุดเริ่มต้น Emitter -> สร้างอนุภาค (ความเร็วต้น, สีเรืองแสง HDR, ขนาด) -> อัปเดตการเคลื่อนที่ (แรงโน้มถ่วง, ลมหมุน Curl Noise, การชนพื้นผิว) -> แสดงผลสู่หน้าจอ',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Creating a Niagara System from Emitters',
          th: 'การสร้างไฟล์ Niagara System',
        },
        explanation: {
          en: 'In Content Drawer, right-click > FX > Niagara System. Select "New system from selected emitters" > choose "Fountain" > click Finish. Name it "NS_ExplosionSparks".',
          th: 'คลิกขวาใน Content Drawer > FX > Niagara System เลือก "New system from selected emitters" > เลือกเทมเพลต "Fountain" > ตั้งชื่อว่า "NS_ExplosionSparks"',
        },
      },
    ],
    codeExamples: [
      {
        title: 'Spawning Niagara System in Blueprint',
        language: 'csharp',
        code: `// Blueprint Spawning on Hit:
// -----------------------------------------------------------------
// [Event OnComponentHit]
//      |
// [Spawn System At Location]
//      - System Template: NS_ExplosionSparks
//      - Location: Hit Location
//      - Rotation: Hit Normal to Rotator
//      - Auto Destroy: True
//      |
// [Play Sound at Location (S_Explode)]`,
        explanation: {
          en: 'Auto Destroy guarantees that once the Niagara particle cycle finishes emitting and all sparks fade out, the system cleans itself up from memory automatically.',
          th: 'ตัวเลือก Auto Destroy ช่วยรับประกันว่าเมื่อประกายไฟมอดดับลงหมดแล้ว ตัวระบบเอฟเฟกต์จะคืนหน่วยความจำให้ระบบโดยอัตโนมัติ',
        },
      },
    ],
    practiceChecklist: [
      { id: 'ua02-1', title: { en: 'Create a Niagara System with GPU Compute enabled', th: 'สร้าง Niagara System พร้อมเปิดใช้งาน GPU Compute' }, completed: false },
      { id: 'ua02-2', title: { en: 'Add Curl Noise Force for natural swirling smoke/embers', th: 'เพิ่มแรง Curl Noise เพื่อให้สะเก็ดไฟหมุนวนตามแรงลมธรรมชาติ' }, completed: false },
      { id: 'ua02-3', title: { en: 'Trigger NS_ExplosionSparks from projectile OnComponentHit', th: 'สั่งเสก NS_ExplosionSparks ในจังหวะที่กระสุนชนเป้าหมาย' }, completed: false },
    ],
    miniChallenge: {
      prompt: {
        en: 'Why do GPU-simulated particles in Niagara disappear or fail to collide when they bounce behind the game camera?',
        th: 'ทำไมอนุภาคที่คำนวณด้วย GPU ใน Niagara ถึงหายไปหรือไม่ยอมชนกับวัตถุเมื่อหลุดออกไปอยู่นอกระยะมุมมองของกล้อง?',
      },
      hint: {
        en: 'What does "Scene Depth Collision" rely on to detect 3D obstacles?',
        th: 'ระบบ Scene Depth Collision ใช้ข้อมูลอะไรในการตรวจจับสิ่งกีดขวาง?',
      },
      solution: {
        en: 'GPU particles use "Scene Depth" (the pixels rendered on the camera buffer) for collision. If geometry is not visible on screen, its depth data does not exist! For off-screen collision, use Distance Field collisions instead.',
        th: 'อนุภาค GPU ใช้ข้อมูลความลึกของหน้าจอ (Scene Depth) ในการชน หากวัตถุอยู่นอกจอ กล้องจะไม่ได้เรนเดอร์ข้อมูลความลึกนั้นไว้! หากต้องการให้ชนแม้อยู่นอกจอ ต้องสลับไปใช้โหมด Distance Field Collision แทน!',
      },
    },
    commonMistakes: [
      {
        mistake: { en: 'Using CPU Sim for particle counts over 5,000', th: 'ใช้โหมด CPU Sim กับจำนวนอนุภาคที่เกินกว่า 5,000 จุด' },
        why: { en: 'CPU simulation calculates every particle single-threaded, choking the game frame rate.', th: 'CPU จะต้องคำนวณตำแหน่งทีละจุดเรียงกัน ทำให้เฟรมเรตตกฮวบอย่างรุนแรง' },
        fix: { en: 'In Emitter Properties, change "Sim Target" from "CPUSim" to "GPUCompute Sim".', th: 'ในหน้าต่าง Emitter Properties เปลี่ยนตัวเลือก Sim Target เป็น "GPUCompute Sim"' },
      },
    ],
    quiz: [
      {
        question: {
          en: 'Which Sim Target mode in Niagara unlocks simulations of hundreds of thousands of particles at 60+ FPS?',
          th: 'โหมด Sim Target ใดใน Niagara ที่ปลดล็อกการจำลองอนุภาคนับแสนจุดได้ลื่นไหล 60+ FPS?',
        },
        options: {
          en: ['GPUCompute Sim', 'CPUSim', 'ThreadedTask Sim', 'DirectX Compute Only'],
          th: ['GPUCompute Sim', 'CPUSim', 'ThreadedTask Sim', 'DirectX Compute Only'],
        },
        correctIndex: 0,
        explanation: {
          en: 'GPUCompute Sim distributes particle mathematics across thousands of parallel GPU shader cores.',
          th: 'GPUCompute Sim กระจายการคำนวณพิกัดอนุภาคไปยังคอร์นับพันของการ์ดจอพร้อมกันอย่างมหาศาล',
        },
      },
    ],
  },
  {
    id: 'unreal-advanced-003',
    engine: 'unreal',
    level: 'advanced',
    lessonNumber: 15,
    slug: 'unreal-insights-gpu-profiling-optimization',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    heroImageCaption: {
      en: 'Unreal Insights standalone telemetry profiler: CPU frame tracks, GPU render passes, and memory trace analysis',
      th: 'โปรแกรมวิเคราะห์ประสิทธิภาพ Unreal Insights: การติดตามเธรด CPU, ลำดับการเรนเดอร์ GPU และการตรวจจับคอขวดในเกม',
    },
    title: {
      en: 'Unreal Insights & Performance Profiling: 60+ FPS Mastery',
      th: 'การวัดประสิทธิภาพด้วย Unreal Insights: การปรับจูนเกมให้รัน 60+ FPS',
    },
    shortDescription: {
      en: 'Find and eliminate the hidden performance bottlenecks in your game: master "stat unit", profile GPU passes with ProfileGPU, and analyze thread stalls with Unreal Insights.',
      th: 'ค้นหาและกำจัดคอขวดที่ทำให้เกมกระตุก: ใช้คำสั่ง "stat unit", วิเคราะห์การเรนเดอร์ของการ์ดจอด้วย ProfileGPU และตรวจจับเธรดที่สะดุดด้วยโปรแกรม Unreal Insights',
    },
    estimatedMinutes: 40,
    tags: ['Advanced', 'Unreal', 'Profiling', 'Optimization', 'UnrealInsights', 'GPU'],
    startFromZero: false,
    objectives: {
      en: [
        'Diagnose whether a framerate drop is caused by the Game Thread (CPU), Draw Thread, or GPU using "stat unit"',
        'Capture and analyze high-resolution telemetry traces in the standalone Unreal Insights application',
        'Optimize Lumen scene cost and Nanite streaming pools for commercial release',
      ],
      th: [
        'วินิจฉัยต้นเหตุของอาการเฟรมเรตตกได้อย่างแม่นยำด้วยคำสั่ง "stat unit" (แยกแยะว่าเป็นที่ CPU หรือ GPU)',
        'บันทึกและวิเคราะห์กราฟการทำงานของระบบอย่างละเอียดด้วยโปรแกรม Unreal Insights',
        'ปรับแต่งลดภาระการคำนวณแสงของ Lumen และการสตรีมโมเดล Nanite ให้พร้อมวางขายจริง',
      ],
    },
    prerequisites: {
      en: ['Completed Unreal Intermediate Track (Lumen, Nanite, Blueprints)'],
      th: ['ผ่านเนื้อหา Unreal Intermediate ทั้งหมด (Lumen, Nanite, Blueprint)'],
    },
    zeroExplanation: {
      what: {
        en: 'Unreal Insights is a standalone telemetry profiling suite that records every function call, thread stall, asset load, and GPU rendering pass with microsecond precision.',
        th: 'Unreal Insights คือโปรแกรมวิเคราะห์ระดับมืออาชีพของ Unreal Engine ที่บันทึกทุกคำสั่งการทำงานและการใช้แรมอย่างละเอียดระดับไมโครวินาที',
      },
      why: {
        en: 'Guessing why a game lags is a waste of time. You might spend days reducing 3D model polygons when the real culprit was a single unoptimized Blueprint ticking 500 times a second!',
        th: 'การเดาสาเหตุที่เกมกระตุกมักเสียเวลาเปล่า คุณอาจเสียเวลาหลายวันลดโพลิกอนโมเดล ทั้งที่ตัวการจริงคือ Blueprint ตัวเดียวที่รันคำสั่งผิดที่! เครื่องมือนี้จะชี้เป้าปัญหาให้เห็นทันที',
      },
      how: {
        en: 'Run the console command "stat unit" during play. If "Game" is high, your CPU code is slow. If "GPU" is high, press Ctrl + Shift + Comma to open the GPU Visualizer.',
        th: 'พิมพ์คำสั่งคอนโซล "stat unit" ระหว่างเล่น หากค่า "Game" สูงแปลว่าโค้ด CPU ช้า หากค่า "GPU" สูงให้กด Ctrl + Shift + จุลภาค (,) เพื่อเปิดหน้าต่าง GPU Visualizer',
      },
      when: {
        en: 'Before every milestone playtest, console certification, and commercial game launch.',
        th: 'ก่อนการทดสอบเกมทุกขั้นตอน การตรวจสอบมาตรฐานคอนโซล และก่อนปล่อยเกมวางจำหน่ายจริง',
      },
    },
    diagram: {
      type: 'render-pipeline',
      title: {
        en: 'Unreal Frame Bottleneck Pipeline',
        th: 'ขั้นตอนการตรวจจับคอขวดของแต่ละเฟรม (Frame Pipeline)',
      },
      description: {
        en: 'Game Thread (CPU Logic/Input/AI) -> Draw Thread (Visibility Culling) -> GPU (Geometry, Shading, Lumen, Post-Process). Frame time is capped by the slowest stage!',
        th: 'Game Thread (ตรรกะ CPU/ปุ่มกด/AI) -> Draw Thread (คัดแยกวัตถุที่มองเห็น) -> GPU (เรนเดอร์แสงเงา Lumen) เฟรมเรตจะถูกฉุดลงด้วยส่วนที่ทำงานช้าที่สุดเสมอ!',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Interpreting "stat unit" in the Viewport',
          th: 'การอ่านค่าคำสั่ง "stat unit" ในหน้าจอเกม',
        },
        explanation: {
          en: 'Press the tilde key (~) to open the console and type "stat unit". You will see 4 critical numbers: Frame (Total ms), Game (CPU logic), Draw (CPU draw calls), and GPU (Graphics rendering). For 60 FPS, all numbers must stay under 16.6ms!',
          th: 'กดปุ่มตัวหนอน (~) เพื่อเปิดคอนโซลแล้วพิมพ์ "stat unit" คุณจะเห็นตัวเลข 4 ค่า: Frame (เวลารวม), Game (ตรรกะ CPU), Draw (การสั่งวาด), และ GPU สำหรับ 60 FPS ทุกค่าต้องไม่เกิน 16.6 มิลลิวินาที!',
        },
        inspectorData: {
          componentName: 'Console Overlay: stat unit',
          properties: [
            { name: 'Target 60 FPS Budget', value: '16.6 ms per frame', hint: 'Maximum allowed threshold' },
            { name: 'Target 120 FPS Budget', value: '8.33 ms per frame', hint: 'High-refresh competitive budget' },
          ],
        },
      },
    ],
    codeExamples: [
      {
        title: 'Essential Console Profiling Commands',
        language: 'csharp',
        code: `// Unreal Engine Profiler Console Cheat Sheet:
// -----------------------------------------------------------------
// stat unit            : Displays CPU Game, Draw, and GPU frame times
// stat fps             : Toggles instant FPS counter
// ProfileGPU (Ctrl+Shift+,) : Opens detailed GPU breakdown per pass
// stat rhi             : Displays memory, triangle counts, and draw calls
// stat scenerendering  : Displays mesh pass counts and light counts
// Trace.Start / Stop   : Records a high-resolution trace for Unreal Insights`,
        explanation: {
          en: 'ProfileGPU breaks down your frame into milliseconds spent on BasePass, Shadows, Lumen Reflections, and Post Processing, pinpointing heavy lights instantly.',
          th: 'ProfileGPU จะแยกย่อยเวลาที่การ์ดจอใช้เรนเดอร์ในแต่ละส่วน ทำให้คุณรู้ทันทีว่าดวงไฟดวงไหนหรือเงาตัวไหนที่กำลังดึงเครื่องให้ช้า',
        },
      },
    ],
    practiceChecklist: [
      { id: 'ua03-1', title: { en: 'Type "stat unit" in console and verify frame times', th: 'พิมพ์ "stat unit" ในคอนโซลและตรวจเช็กเวลาในแต่ละส่วน' }, completed: false },
      { id: 'ua03-2', title: { en: 'Press Ctrl + Shift + Comma to inspect the GPU Visualizer', th: 'กด Ctrl + Shift + จุลภาค เพื่อเปิดดู GPU Visualizer' }, completed: false },
      { id: 'ua03-3', title: { en: 'Verify that all Game and GPU metrics stay under 16.6ms', th: 'ปรับแต่งฉากจนกระทั่งตัวเลขทั้งหมดต่ำกว่า 16.6 มิลลิวินาที (60 FPS)' }, completed: false },
    ],
    miniChallenge: {
      prompt: {
        en: 'If "stat unit" shows Game: 8.2ms, Draw: 5.1ms, but GPU: 34.5ms, what is your bottleneck and how should you address it?',
        th: 'หาก "stat unit" แสดงค่า Game: 8.2ms, Draw: 5.1ms แต่ค่า GPU พุ่งสูงถึง 34.5ms คอขวดของเกมอยู่ที่ใดและควรแก้ไขอย่างไร?',
      },
      hint: {
        en: 'Compare the milliseconds: Which component exceeds the 16.6ms budget?',
        th: 'เปรียบเทียบตัวเลข: ส่วนไหนที่ใช้เวลาเกิน 16.6 มิลลิวินาทีไปมากที่สุด?',
      },
      solution: {
        en: 'The bottleneck is strictly GPU-bound (34.5ms = ~29 FPS). CPU logic is running fine. You should inspect the GPU Visualizer, reduce shadow-casting overlapping dynamic lights, optimize heavy materials, or adjust Lumen quality settings!',
        th: 'คอขวดเกิดจาก "การ์ดจอ (GPU)" ล้วนๆ! (34.5ms คือประมาณ 29 FPS) ในขณะที่ CPU ทำงานได้เร็วดีแล้ว สิ่งที่ต้องทำคือตรวจสอบ GPU Visualizer, ลดจำนวนดวงไฟไดนามิกที่ส่องซ้อนทับกัน, ปรับแต่ง Material ที่หนักเกินไป หรือลดสเปกการคำนวณแสงของ Lumen ลง!',
      },
    },
    commonMistakes: [
      {
        mistake: { en: 'Profiling performance inside the Editor Viewport with all editor icons and gizmos visible', th: 'วัดค่าเฟรมเรตในหน้าจอ Editor Viewport ที่มีไอคอนและเครื่องมือของโปรแกรมแสดงอยู่เต็มไปหมด' },
        why: { en: 'The Unreal Editor overhead consumes significant CPU/GPU resources, giving wildly inaccurate telemetry.', th: 'หน้าต่างโปรแกรม Editor กินทรัพยากรการ์ดจอไปเยอะมาก ทำให้ตัวเลขที่วัดได้คลาดเคลื่อนจากเกมจริง' },
        fix: { en: 'Always profile in a "Standalone Game" window (or launch with -game flag) for 100% accurate player hardware benchmarks.', th: 'วัดประสิทธิภาพในโหมด "Standalone Game" หรือบิลด์เกมออกมาทดสอบจริงเสมอเพื่อความแม่นยำสูงสุด' },
      },
    ],
    quiz: [
      {
        question: {
          en: 'What is the maximum allowable millisecond budget per frame to maintain a solid 60 FPS in game development?',
          th: 'เวลาสูงสุดที่ยอมรับได้ในแต่ละเฟรม (Frame Budget) เพื่อรักษาความลื่นไหลระดับ 60 FPS คือกี่มิลลิวินาที?',
        },
        options: {
          en: ['16.6 milliseconds', '33.3 milliseconds', '8.33 milliseconds', '50.0 milliseconds'],
          th: ['16.6 มิลลิวินาที', '33.3 มิลลิวินาที', '8.33 มิลลิวินาที', '50.0 มิลลิวินาที'],
        },
        correctIndex: 0,
        explanation: {
          en: '1000 milliseconds / 60 frames = exactly 16.66 milliseconds per frame.',
          th: '1 วินาทีมี 1000 มิลลิวินาที นำมาหารด้วย 60 เฟรม จะได้เท่ากับ 16.66 มิลลิวินาทีต่อเฟรม',
        },
      },
    ],
  },
];
