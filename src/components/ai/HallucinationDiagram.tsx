import React from 'react';
import { MessageCircle, HelpCircle } from 'lucide-react';

const HallucinationDiagram: React.FC = () => {
  return (
    <div className="rounded-2xl bg-card border border-fg/10 p-6">
      <div className="rounded-xl bg-fg/5 p-4 mb-4">
        <div className="flex items-start gap-2.5">
          <MessageCircle size={16} className="text-accent mt-0.5 shrink-0" />
          <p className="text-xs text-fg/70 leading-relaxed">
            &ldquo;Yes, that&rsquo;s absolutely correct - here are the exact details...&rdquo;
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] text-fg/60">Confidence (tone)</span>
            <span className="text-[11px] text-fg/40">high</span>
          </div>
          <div className="h-2 rounded-full bg-fg/10 overflow-hidden">
            <div className="h-full w-[92%] bg-accent rounded-full" />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] text-fg/60">Actual correctness</span>
            <span className="text-[11px] text-fg/40 inline-flex items-center gap-1">
              <HelpCircle size={11} /> unknown
            </span>
          </div>
          <div className="h-2 rounded-full bg-fg/10 overflow-hidden border border-dashed border-fg/20" />
        </div>
      </div>

      <p className="text-center text-xs text-fg/40 mt-5">
        A confident tone is not proof. Hallucination is a made-up answer delivered with the same certainty as a correct one.
      </p>
    </div>
  );
};

export default HallucinationDiagram;
