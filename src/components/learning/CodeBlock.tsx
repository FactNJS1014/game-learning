import React, { useState } from 'react';
import { Copy, Check, Terminal, Code2 } from 'lucide-react';
import { CodeExample, Language } from '../../types';

interface CodeBlockProps {
  example: CodeExample;
  language: Language;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ example, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(example.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = example.code.trim().split('\n');

  return (
    <div
      id={`code-block-${example.id}`}
      className="my-5 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-xl"
    >
      {/* Code Header Bar */}
      <div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-900/90 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <Code2 className="h-4 w-4 text-emerald-400" />
          <span className="text-xs font-bold text-slate-200">{example.title}</span>
          <span className="rounded bg-slate-800 px-2 py-0.5 text-[10px] font-mono uppercase text-slate-400">
            {example.language}
          </span>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/70 px-2.5 py-1 text-xs font-medium text-slate-300 transition hover:bg-slate-700 hover:text-white"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5 text-slate-400" />
              <span>Copy Code</span>
            </>
          )}
        </button>
      </div>

      {/* Code Body with Line Numbers */}
      <div className="overflow-x-auto p-4 text-xs font-mono leading-relaxed text-slate-200 custom-scrollbar">
        <pre className="flex">
          <div className="select-none pr-4 text-right text-slate-400/80">
            {lines.map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          <code className="flex-1 text-emerald-300">
            {example.code}
          </code>
        </pre>
      </div>

      {/* Line-by-Line Breakdown Explanation */}
      {example.explanation && (
        <div className="border-t border-slate-800/80 bg-slate-900/40 p-4">
          <div className="mb-2 flex items-center gap-1.5 text-xs font-bold text-slate-300">
            <Terminal className="h-3.5 w-3.5 text-indigo-400" />
            <span>
              {language === 'th' ? 'คำอธิบายทีละส่วน (Line Breakdown):' : 'Code Breakdown:'}
            </span>
          </div>
          <ul className="space-y-1.5">
            {(example.explanation[language] || example.explanation.en).map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs text-slate-400"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
