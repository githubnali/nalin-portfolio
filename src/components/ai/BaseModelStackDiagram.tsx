import React from 'react';

const layers = [
  'Tool access, web search & code execution',
  'Human feedback (RLHF) & guardrails',
  'Security, auth & content filters',
  'System instructions & conversation management',
];

const BaseModelStackDiagram: React.FC = () => {
  return (
    <div className="rounded-2xl bg-card border border-fg/10 p-6">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-3">
          <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
            AI Assistant (ChatGPT, Claude, Gemini, Grok...)
          </span>
        </div>

        <div className="space-y-1.5">
          {layers.map((layer) => (
            <div key={layer} className="rounded-lg bg-fg/5 px-3 py-2 text-xs text-fg/60 text-center">
              {layer}
            </div>
          ))}
        </div>

        <div className="mt-1.5 rounded-lg bg-fg/10 px-3 py-3 text-center">
          <p className="text-sm font-medium text-fg">Base Model</p>
          <p className="text-[11px] text-fg/40 mt-0.5">Only job: predict the next word</p>
        </div>
      </div>

      <p className="text-center text-xs text-fg/40 mt-5">
        The engine is the base model. Everything layered on top is what turns it into the car you actually drive.
      </p>
    </div>
  );
};

export default BaseModelStackDiagram;
