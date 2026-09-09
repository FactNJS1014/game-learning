import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { comparisonMatrix } from '../../data/comparisonData';
import {
  Scale,
  Gamepad2,
  Terminal,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';

export const EngineComparison: React.FC = () => {
  const { language, setFilterEngine, setActiveTab } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Interactive Quiz State
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [quizResult, setQuizResult] = useState<'unity' | 'unreal' | null>(null);

  const quizQuestions = [
    {
      q: { en: 'What type of game are you planning to create first?', th: 'คุณตั้งใจจะเริ่มสร้างเกมประเภทไหนเป็นอย่างแรก?' },
      options: [
        { text: { en: '2D Platformer, Mobile, or Lightweight 3D Indie', th: 'เกม 2D, เกมมือถือ หรือเกมอินดี้ 3D เบาๆ' }, engine: 'unity' },
        { text: { en: 'Photorealistic 3D, High-end PC/Console AAA Action', th: 'เกม 3D กราฟิกสมจริงระดับ AAA บน PC/Console' }, engine: 'unreal' },
      ],
    },
    {
      q: { en: 'What is your current programming background?', th: 'พื้นฐานด้านการเขียนโปรแกรมของคุณในปัจจุบัน?' },
      options: [
        { text: { en: 'Complete beginner or prefer Visual Node logic without writing syntax', th: 'มือใหม่สนิท หรือชอบต่อโหนด Visual Node ไม่อยากพิมพ์โค้ด' }, engine: 'unreal' },
        { text: { en: 'Know a bit of C#, Java, Python, or want fast compilation iteration', th: 'พอรู้ C#, Java, Python หรือชอบคอมไพล์โค้ดไวๆ สบายๆ' }, engine: 'unity' },
      ],
    },
    {
      q: { en: 'What is your hardware setup?', th: 'สเปกคอมพิวเตอร์ของคุณ?' },
      options: [
        { text: { en: 'Standard Laptop or mid-range PC (8-16 GB RAM)', th: 'โน้ตบุ๊กทั่วไป หรือคอมระดับกลาง (RAM 8-16 GB)' }, engine: 'unity' },
        { text: { en: 'High-end Gaming Desktop with RTX GPU (32+ GB RAM)', th: 'คอมตั้งโต๊ะสเปกแรง การ์ดจอ RTX (RAM 32+ GB)' }, engine: 'unreal' },
      ],
    },
  ];

  const handleSelectQuizOption = (engine: 'unity' | 'unreal') => {
    const nextAnswers = { ...quizAnswers, [quizStep]: engine };
    setQuizAnswers(nextAnswers);

    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      // Calculate winner
      const unityVotes = Object.values(nextAnswers).filter((v) => v === 'unity').length;
      const unrealVotes = Object.values(nextAnswers).filter((v) => v === 'unreal').length;
      setQuizResult(unityVotes >= unrealVotes ? 'unity' : 'unreal');
    }
  };

  const restartQuiz = () => {
    setQuizStep(0);
    setQuizAnswers({});
    setQuizResult(null);
  };

  const filteredMatrix =
    selectedCategory === 'all'
      ? comparisonMatrix
      : comparisonMatrix.filter((c) => c.category.toLowerCase() === selectedCategory);

  return (
    <div id="engine-comparison-container" className="mx-auto max-w-5xl py-6 px-4">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400 mb-1">
          <Scale className="h-4 w-4" />
          <span>Objective Engine Matrix</span>
        </div>
        <h1 className="text-2xl font-extrabold text-white">
          {language === 'th' ? 'Unity vs Unreal Engine: วิเคราะห์จุดเด่น & แนวทางเลือก' : 'Unity vs Unreal Engine Comparison'}
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          {language === 'th'
            ? 'เปรียบเทียบข้อดี ข้อเสีย สถาปัตยกรรม ภาษาเขียนโปรแกรม และทำแบบทดสอบเพื่อค้นหา Engine ที่เหมาะกับโปรเจกต์ของคุณที่สุด'
            : 'Unbiased side-by-side breakdown of graphics, scripting pipelines, platform targets, and an interactive recommendation tool.'}
        </p>
      </div>

      {/* Interactive Recommendation Quiz Card */}
      <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-6 sm:p-8 shadow-2xl mb-8">
        <div className="flex items-center gap-2.5 mb-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white">
              {language === 'th' ? 'แบบประเมิน: คุณควรเลือก Engine ไหน?' : 'Engine Recommendation Quiz'}
            </h2>
            <p className="text-xs text-slate-400">
              {language === 'th' ? 'ตอบคำถามสั้นๆ 3 ข้อเพื่อรับคำแนะนำทันที' : 'Answer 3 quick questions to find your optimal engine'}
            </p>
          </div>
        </div>

        {quizResult ? (
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 text-center">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Recommended Engine For You:
            </span>
            <div className="flex items-center justify-center gap-3 my-3">
              {quizResult === 'unity' ? (
                <>
                  <Gamepad2 className="h-8 w-8 text-red-500" />
                  <span className="text-2xl font-black text-red-400">UNITY 3D / 2D</span>
                </>
              ) : (
                <>
                  <Terminal className="h-8 w-8 text-blue-500" />
                  <span className="text-2xl font-black text-blue-400">UNREAL ENGINE 5</span>
                </>
              )}
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6">
              {quizResult === 'unity'
                ? 'Unity เหมาะอย่างยิ่งกับเป้าหมายของคุณด้วย C# ที่คล่องตัว รันบนเครื่องสเปกกลางได้ลื่นไหล เหมาะกับเกม 2D, มือถือ และเกมอินดี้ขนาดกะทัดรัด!'
                : 'Unreal Engine 5 คือคำตอบที่ตรงเป้าสำหรับคุณ ด้วยขุมพลัง Nanite, Lumen และระบบ Visual Scripting (Blueprint) ที่สร้างเกมระดับ AAA ได้โดยไม่ต้องเขียนโค้ดบรรทัดแรก!'}
            </p>

            <div className="flex items-center justify-center gap-3">
              <button
                onClick={restartQuiz}
                className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-700"
              >
                Retake Quiz
              </button>
              <button
                onClick={() => {
                  setFilterEngine(quizResult);
                  setActiveTab(quizResult);
                }}
                className={`rounded-xl px-5 py-2 text-xs font-bold text-white shadow-lg ${
                  quizResult === 'unity' ? 'bg-red-600 hover:bg-red-500 shadow-red-900/40' : 'bg-blue-600 hover:bg-blue-500 shadow-blue-900/40'
                }`}
              >
                Start Learning {quizResult === 'unity' ? 'Unity' : 'Unreal'} Track
              </button>
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/50 p-5">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span>Question {quizStep + 1} of {quizQuestions.length}</span>
              <span className="font-mono">{Math.round(((quizStep) / quizQuestions.length) * 100)}%</span>
            </div>
            <p className="text-sm font-bold text-white mb-4">
              {quizQuestions[quizStep].q[language] || quizQuestions[quizStep].q.en}
            </p>

            <div className="space-y-2.5">
              {quizQuestions[quizStep].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSelectQuizOption(opt.engine as 'unity' | 'unreal')}
                  className="flex w-full items-center justify-between rounded-xl border border-slate-800 bg-slate-900/80 p-3.5 text-left text-xs text-slate-200 transition hover:border-slate-600 hover:bg-slate-800"
                >
                  <span>{opt.text[language] || opt.text.en}</span>
                  <ArrowRight className="h-4 w-4 text-slate-500" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {['all', 'General', 'Programming', 'Graphics', 'Ecosystem', 'Licensing'].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat.toLowerCase())}
            className={`rounded-xl border px-3 py-1.5 text-xs font-semibold capitalize transition ${
              selectedCategory === cat.toLowerCase()
                ? 'border-rose-500/50 bg-rose-500/15 text-rose-300'
                : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Comparison Matrix Table */}
      <div className="overflow-x-auto rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl custom-scrollbar">
        <table className="w-full text-left text-xs">
          <thead className="border-b border-slate-800 bg-slate-900/90 text-slate-300">
            <tr>
              <th className="p-4 font-bold uppercase tracking-wider text-slate-400">
                Dimension
              </th>
              <th className="p-4 font-bold text-red-400">
                <div className="flex items-center gap-1.5">
                  <Gamepad2 className="h-4 w-4" />
                  <span>Unity</span>
                </div>
              </th>
              <th className="p-4 font-bold text-blue-400">
                <div className="flex items-center gap-1.5">
                  <Terminal className="h-4 w-4" />
                  <span>Unreal Engine 5</span>
                </div>
              </th>
              <th className="p-4 font-bold text-slate-300">
                Best Choice For...
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-slate-300">
            {filteredMatrix.map((item) => (
              <tr key={item.id} className="hover:bg-slate-900/30 transition">
                <td className="p-4 font-semibold text-white whitespace-nowrap">
                  {item.feature[language] || item.feature.en}
                </td>
                <td className="p-4 leading-relaxed">
                  {item.unity[language] || item.unity.en}
                </td>
                <td className="p-4 leading-relaxed">
                  {item.unreal[language] || item.unreal.en}
                </td>
                <td className="p-4 font-mono text-[11px] text-amber-300/90 whitespace-nowrap">
                  {item.verdict[language] || item.verdict.en}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
