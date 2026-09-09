export interface ComparisonRow {
  id?: string;
  category?: string;
  feature?: { en: string; th: string };
  unity: { en: string; th: string };
  unreal: { en: string; th: string };
  verdict?: { en: string; th: string };
  topic?: { en: string; th: string };
  winnerReason?: { en: string; th: string };
}

export const comparisonMatrix: Array<{
  id: string;
  category: string;
  feature: { en: string; th: string };
  unity: { en: string; th: string };
  unreal: { en: string; th: string };
  verdict: { en: string; th: string };
}> = [
  {
    id: 'comp-1',
    category: 'General',
    feature: { en: 'Beginner Friendliness', th: 'ความง่ายสำหรับผู้เริ่มต้น' },
    unity: {
      en: 'Very beginner friendly. Lightweight download (~5GB), clean UI, massive online community.',
      th: 'เป็นมิตรกับมือใหม่มาก ดาวน์โหลดขนาดไม่ใหญ่ หน้าตาสะอาด บทเรียนในอินเทอร์เน็ตมีมหาศาล',
    },
    unreal: {
      en: 'Higher initial complexity. Studio-grade interface with hundreds of professional features visible.',
      th: 'มีระดับความชันในการเรียนรู้สูงกว่า หน้าจอเต็มไปด้วยเครื่องมือสตูดิโอมืออาชีพจำนวนมาก',
    },
    verdict: {
      en: 'Unity (Faster start for solo beginners)',
      th: 'Unity (เริ่มต้นได้เร็วกว่าสำหรับผู้เริ่มต้น)',
    },
  },
  {
    id: 'comp-2',
    category: 'Programming',
    feature: { en: 'Scripting Language', th: 'ภาษาหลักในการเขียนโค้ด' },
    unity: {
      en: 'C# (Strictly typed, clean OOP, very rapid compilation and VS Code debugging).',
      th: 'ภาษา C# (เข้าใจง่าย ชัดเจน โครงสร้างสวยงาม รองรับ VS Code ดีเยี่ยม)',
    },
    unreal: {
      en: 'Blueprints (Visual Scripting) + C++ (High performance, pointer memory management).',
      th: 'Blueprint (ลากเส้นคำสั่งภาพ) ควบคู่กับ C++ (ประสิทธิภาพสูงสุดแต่วิธีเขียนเข้มงวด)',
    },
    verdict: {
      en: 'Tie: Blueprints for No-Code, C# for Code',
      th: 'เสมอกัน: Blueprint สำหรับคนไม่พิมพ์โค้ด, C# สำหรับสายพิมพ์',
    },
  },
  {
    id: 'comp-3',
    category: 'Graphics',
    feature: { en: '3D Photorealism & Lighting', th: 'งานภาพ 3D และแสงเงาสมจริง' },
    unity: {
      en: 'HDRP provides beautiful graphics, but requires shader tuning and baked lighting setup.',
      th: 'สวยงามมากเมื่อใช้ HDRP แต่ต้องอาศัยการจัดแสงและ Shader เพิ่มเติมเพื่อดันให้ถึงขีดสุด',
    },
    unreal: {
      en: 'State-of-the-art. Nanite (virtualized geometry) and Lumen (real-time raytraced GI) out of the box.',
      th: 'เบอร์ 1 ของโลก กราฟิกภาพยนตร์ด้วย Nanite (เรนเดอร์หลายล้านโพลีกอน) และแสง Lumen ในตัว',
    },
    verdict: {
      en: 'Unreal Engine 5 (Industry Leader in Visuals)',
      th: 'Unreal Engine 5 (ผู้นำระดับโลกด้านกราฟิก)',
    },
  },
  {
    id: 'comp-4',
    category: 'General',
    feature: { en: '2D Game Development', th: 'การพัฒนาเกม 2 มิติ (2D)' },
    unity: {
      en: 'Industry Standard. Dedicated 2D Box2D physics, Tilemap editors, 2D Lights, Pixel Perfect.',
      th: 'มาตรฐานวงการ มีระบบฟิสิกส์ 2D แท้ๆ (Box2D), Tilemap วาดฉาก, แสง 2D, รองรับภาพพิกเซลสมบูรณ์แบบ',
    },
    unreal: {
      en: 'Supported via Paper2D, but not Epic\'s primary focus. Usually requires third-party plugins.',
      th: 'รองรับผ่าน Paper2D แต่ไม่ใช่จุดเน้นหลักของ Epic ต้องปรับแต่งค่อนข้างมากหากจะทำเกม 2D เชิงลึก',
    },
    verdict: {
      en: 'Unity (Dominates Indie 2D Gaming)',
      th: 'Unity (ครองตลาดเกมอินดี้ 2 มิติ)',
    },
  },
  {
    id: 'comp-5',
    category: 'Ecosystem',
    feature: { en: 'Hardware Requirements', th: 'สเปกคอมพิวเตอร์ที่ต้องการ' },
    unity: {
      en: 'Runs smoothly on most modern office laptops, MacBooks, and budget PC configurations.',
      th: 'รันได้ลื่นไหลบนโน้ตบุ๊กทั่วไป, MacBook และคอมพิวเตอร์สเปกระดับเริ่มต้นถึงปานกลาง',
    },
    unreal: {
      en: 'Demands dedicated modern GPU (RTX series recommended), 16-32GB RAM, and fast SSD.',
      th: 'ต้องการคอมพิวเตอร์ที่มีการ์ดจอแยกตัวแรง (ตระกูล RTX), แรม 16-32GB ขึ้นไป และ SSD ความเร็วสูง',
    },
    verdict: {
      en: 'Unity (Accessible on almost any PC)',
      th: 'Unity (เข้าถึงง่ายบนคอมพิวเตอร์เกือบทุกรุ่น)',
    },
  },
  {
    id: 'comp-6',
    category: 'Licensing',
    feature: { en: 'Pricing & Royalties', th: 'ราคาและส่วนแบ่งรายได้' },
    unity: {
      en: 'Free Personal Edition. Pro subscription required only after achieving $200K annual revenue.',
      th: 'เวอร์ชัน Personal ฟรี 100% คิดค่าบริการเฉพาะเมื่อมีรายได้เกิน $200,000 ต่อปี',
    },
    unreal: {
      en: 'Completely free upfront. 5% royalty fee applies only after your game earns its first $1,000,000 USD.',
      th: 'ฟรีทั้งหมดทุกฟีเจอร์ คิดส่วนแบ่ง 5% เฉพาะเมื่อเกมของคุณทำเงินได้เกิน 1 ล้านดอลลาร์สหรัฐ',
    },
    verdict: {
      en: 'Both exceptionally generous for beginners',
      th: 'ทั้งสองค่ายใจดีมากสำหรับผู้เริ่มต้น',
    },
  },
];

export const comparisonRows = comparisonMatrix;

