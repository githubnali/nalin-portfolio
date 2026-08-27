import React, { useState } from 'react';
import { RotateCcw, Eye, EyeOff } from 'lucide-react';
import CodeEditor from './CodeEditor';

interface PracticeTerminalProps {
  starterCode: string;
  solutionCode?: string;
  height?: string;
}

const PracticeTerminal: React.FC<PracticeTerminalProps> = ({ starterCode, solutionCode, height = '220px' }) => {
  const [code, setCode] = useState(starterCode);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-xl bg-bg border border-fg/10 overflow-hidden flex flex-col">
          <div className="flex items-center justify-between px-4 py-2 border-b border-fg/10">
            <span className="text-xs text-fg/50 uppercase tracking-wide">Input</span>
            <button
              type="button"
              onClick={() => setCode(starterCode)}
              className="inline-flex items-center gap-1 text-xs text-fg/50 hover:text-fg transition-colors"
            >
              <RotateCcw size={12} />
              Reset
            </button>
          </div>
          <CodeEditor value={code} onChange={setCode} height={height} />
        </div>

        <div className="rounded-xl bg-white overflow-hidden flex flex-col">
          <div className="flex items-center justify-between px-4 py-2 border-b border-black/10">
            <span className="text-xs text-black/50 uppercase tracking-wide">Output</span>
          </div>
          <iframe
            title="Practice output"
            srcDoc={code}
            sandbox="allow-scripts"
            style={{ height }}
            className="w-full"
          />
        </div>
      </div>

      {solutionCode && (
        <div className="mt-3">
          <button
            type="button"
            onClick={() => setShowSolution((s) => !s)}
            className="inline-flex items-center gap-1.5 text-xs text-fg/50 hover:text-fg transition-colors"
          >
            {showSolution ? <EyeOff size={13} /> : <Eye size={13} />}
            {showSolution ? 'Hide sample answer' : 'Show sample answer'}
          </button>

          {showSolution && (
            <div className="mt-3 rounded-xl bg-bg border border-fg/10 p-4">
              <pre className="text-fg/70 text-xs font-mono whitespace-pre-wrap leading-relaxed">
                {solutionCode}
              </pre>
              <button
                type="button"
                onClick={() => setCode(solutionCode)}
                className="mt-3 text-xs text-accent hover:underline"
              >
                Load into editor
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PracticeTerminal;
