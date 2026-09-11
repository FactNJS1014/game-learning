import React, { useState } from 'react';
import { QuizQuestion, Language } from '../../types';
import { CheckCircle2, XCircle, HelpCircle, Award, RotateCcw } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface QuizCardProps {
  lessonId: string;
  quiz: QuizQuestion[];
  language: Language;
}

export const QuizCard: React.FC<QuizCardProps> = ({ lessonId, quiz, language }) => {
  const { recordQuizScore, progress } = useApp();
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const existingScore = progress.quizScores[lessonId];

  const handleSelectOption = (questionIndex: number, optionIndex: number) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: optionIndex,
    }));
  };

  const calculateScore = () => {
    let score = 0;
    quiz.forEach((q, idx) => {
      const correctAns = q.correctAnswer !== undefined ? q.correctAnswer : (q.correctIndex !== undefined ? q.correctIndex : 0);
      if (selectedAnswers[idx] === correctAns) {
        score += 1;
      }
    });
    return score;
  };

  const handleSubmit = () => {
    const score = calculateScore();
    setSubmitted(true);
    recordQuizScore(lessonId, score, quiz.length);
  };

  const handleRetry = () => {
    setSelectedAnswers({});
    setSubmitted(false);
  };

  const answeredCount = Object.keys(selectedAnswers).length;
  const isComplete = answeredCount === quiz.length;
  const score = calculateScore();
  const passed = quiz.length > 0 && score / quiz.length >= 0.6;

  return (
    <div
      id="lesson-quiz-section"
      className="my-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/90 shadow-xl"
    >
      {/* Quiz Header */}
      <div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-900/80 px-6 py-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400">
            <Award className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">
              {language === 'th' ? 'แบบทดสอบท้ายบทเรียน' : 'Lesson Mastery Quiz'}
            </h3>
            <p className="text-xs text-slate-400">
              {language === 'th'
                ? `ตอบคำถาม ${quiz.length} ข้อเพื่อทดสอบความเข้าใจ`
                : `Test your understanding across ${quiz.length} questions`}
            </p>
          </div>
        </div>

        {existingScore && !submitted && (
          <div className="flex items-center gap-2 rounded-lg bg-slate-800/80 px-3 py-1 text-xs text-slate-300">
            <span>{language === 'th' ? 'คะแนนที่บันทึกไว้:' : 'Saved Score:'}</span>
            <strong className={existingScore.passed ? 'text-emerald-400' : 'text-amber-400'}>
              {existingScore.score} / {existingScore.total}
            </strong>
          </div>
        )}
      </div>

      {/* Questions list */}
      <div className="p-6 space-y-6">
        {quiz.map((q, qIdx) => {
          const correctAns = q.correctAnswer !== undefined ? q.correctAnswer : (q.correctIndex !== undefined ? q.correctIndex : 0);
          const selectedOption = selectedAnswers[qIdx];
          const isAnswered = selectedOption !== undefined;
          const isCorrect = isAnswered && selectedOption === correctAns;

          return (
            <div
              key={q.id || `q-${qIdx}`}
              className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-4 transition"
            >
              {/* Question Header */}
              <div className="flex items-start gap-3 mb-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-slate-800 text-xs font-mono font-bold text-slate-300">
                  {qIdx + 1}
                </span>
                <p className="text-xs font-semibold text-slate-100">
                  {q.question[language] || q.question.en}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-2 ml-9">
                {(q.options[language] || q.options.en).map((option, oIdx) => {
                  const isSelected = selectedOption === oIdx;
                  let optionStyle = 'border-slate-800 bg-slate-900/80 hover:border-slate-700 hover:bg-slate-850 text-slate-300';

                  if (submitted) {
                    if (oIdx === correctAns) {
                      optionStyle = 'border-emerald-500/60 bg-emerald-950/40 text-emerald-300 ring-1 ring-emerald-500/50 font-semibold';
                    } else if (isSelected && !isCorrect) {
                      optionStyle = 'border-rose-500/60 bg-rose-950/40 text-rose-300 line-through';
                    } else {
                      optionStyle = 'opacity-50 border-slate-800 bg-slate-900/40 text-slate-500';
                    }
                  } else if (isSelected) {
                    optionStyle = 'border-amber-500/80 bg-amber-500/10 text-amber-300 font-semibold shadow-sm';
                  }

                  return (
                    <button
                      key={oIdx}
                      disabled={submitted}
                      onClick={() => handleSelectOption(qIdx, oIdx)}
                      className={`flex w-full items-center justify-between rounded-lg border p-3 text-left text-xs transition ${optionStyle}`}
                    >
                      <span>{option}</span>
                      {submitted && oIdx === correctAns && (
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400 ml-2" />
                      )}
                      {submitted && isSelected && !isCorrect && (
                        <XCircle className="h-4 w-4 shrink-0 text-rose-400 ml-2" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation after submission */}
              {submitted && (
                <div className="mt-3 ml-9 rounded-lg border border-slate-800 bg-slate-950/80 p-3 text-xs text-slate-300 flex items-start gap-2">
                  <HelpCircle className="h-4 w-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">
                      {language === 'th' ? 'คำอธิบาย:' : 'Explanation:'}
                    </strong>
                    <p className="text-slate-400">{q.explanation[language] || q.explanation.en}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* Action Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800/80 pt-4">
          <div className="text-xs text-slate-400">
            {submitted ? (
              <div className="flex items-center gap-2">
                <span className="font-bold text-white">
                  {language === 'th' ? 'ผลคะแนนของคุณ:' : 'Your Score:'}
                </span>
                <span
                  className={`text-sm font-bold ${
                    passed ? 'text-emerald-400' : 'text-amber-400'
                  }`}
                >
                  {score} / {quiz.length} ({Math.round((score / quiz.length) * 100)}%)
                </span>
                <span
                  className={`rounded px-2 py-0.5 text-[10px] font-bold ${
                    passed
                      ? 'bg-emerald-500/20 text-emerald-300'
                      : 'bg-amber-500/20 text-amber-300'
                  }`}
                >
                  {passed
                    ? language === 'th'
                      ? '✓ ผ่านแล้ว'
                      : 'PASSED'
                    : language === 'th'
                    ? 'ควรทบทวน'
                    : 'NEED REVIEW'}
                </span>
              </div>
            ) : (
              <span>
                {language === 'th'
                  ? `ตอบแล้ว ${answeredCount} จาก ${quiz.length} ข้อ`
                  : `Answered ${answeredCount} of ${quiz.length} questions`}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            {submitted ? (
              <button
                onClick={handleRetry}
                className="flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-700"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>{language === 'th' ? 'ทำใหม่อีกครั้ง' : 'Retry Quiz'}</span>
              </button>
            ) : (
              <button
                disabled={!isComplete}
                onClick={handleSubmit}
                className="flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-2 text-xs font-bold text-slate-950 transition hover:bg-amber-400 disabled:opacity-40 disabled:pointer-events-none shadow-md shadow-amber-500/20"
              >
                <Award className="h-4 w-4" />
                <span>{language === 'th' ? 'ส่งคำตอบ' : 'Submit Answers'}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
