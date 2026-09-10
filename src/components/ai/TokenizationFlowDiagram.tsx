import React from 'react';

const WORDS = ['These', 'notes', 'are', 'awesome'];
const IDS = [78, 12, 23, 433];

const TokenizationFlowDiagram: React.FC = () => {
  return (
    <div className="rounded-2xl bg-card border border-fg/10 p-6">
      <p className="text-center text-xs text-fg/40 mb-4">&ldquo;These notes are awesome&rdquo;</p>

      <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
        {WORDS.map((word) => (
          <span key={word} className="rounded-lg bg-fg/5 px-3 py-1.5 text-xs font-mono text-fg/70">
            {word}
          </span>
        ))}
      </div>

      <p className="text-center text-[11px] text-fg/40 mb-3">tokenizer breaks text into tokens, then maps each to a token ID</p>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {IDS.map((id, i) => (
          <span key={id} className="rounded-lg bg-accent/10 px-3 py-1.5 text-xs font-mono text-accent">
            {WORDS[i]} &rarr; {id}
          </span>
        ))}
      </div>

      <p className="text-center text-xs text-fg/40 mt-5">
        The LLM never sees words - it sees an array of token IDs, like <span className="font-mono">[78, 12, 23, 433]</span>.
      </p>
    </div>
  );
};

export default TokenizationFlowDiagram;
