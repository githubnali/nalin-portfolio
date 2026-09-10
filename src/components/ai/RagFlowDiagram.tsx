import React from 'react';
import { Wrench, Database, Sparkles, ArrowRight } from 'lucide-react';

const STEPS = [
  { icon: Wrench, label: 'Tool call', sub: 'web search, API, database' },
  { icon: Database, label: 'Retrieval', sub: 'real, current, external evidence' },
  { icon: Sparkles, label: 'Generation', sub: 'LLM turns evidence into an answer' },
];

const RagFlowDiagram: React.FC = () => {
  return (
    <div className="rounded-2xl bg-card border border-fg/10 p-6">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        {STEPS.map(({ icon: Icon, label, sub }, i) => (
          <React.Fragment key={label}>
            <div className="flex flex-col items-center text-center w-36">
              <div className="w-11 h-11 rounded-full bg-accent/15 flex items-center justify-center mb-2">
                <Icon size={18} className="text-accent" />
              </div>
              <p className="text-xs font-medium text-fg">{label}</p>
              <p className="text-[11px] text-fg/40 mt-1">{sub}</p>
            </div>
            {i < STEPS.length - 1 && <ArrowRight size={16} className="text-fg/20 rotate-90 sm:rotate-0 shrink-0" />}
          </React.Fragment>
        ))}
      </div>

      <p className="text-center text-xs text-fg/40 mt-5">
        RAG (Retrieval-Augmented Generation) - real evidence in, a grounded answer out, instead of a guess from memory alone.
      </p>
    </div>
  );
};

export default RagFlowDiagram;
