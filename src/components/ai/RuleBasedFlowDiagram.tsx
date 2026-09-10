import React from 'react';
import { Mail, ArrowRight, AlertTriangle, CheckCircle2 } from 'lucide-react';

const RuleBasedFlowDiagram: React.FC = () => {
  return (
    <div className="rounded-2xl bg-card border border-fg/10 p-6">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <div className="flex flex-col items-center text-center w-36">
          <div className="w-11 h-11 rounded-full bg-fg/10 flex items-center justify-center mb-2">
            <Mail size={18} className="text-fg" />
          </div>
          <p className="text-xs font-medium text-fg">Incoming email</p>
        </div>

        <ArrowRight size={16} className="text-fg/20 rotate-90 sm:rotate-0 shrink-0" />

        <div className="rounded-xl bg-fg/5 px-4 py-3 text-center max-w-[220px]">
          <p className="text-[11px] text-fg/60 leading-relaxed">
            Contains &ldquo;lottery&rdquo;? <br /> Contains &ldquo;FREE&rdquo;? <br /> Contains &ldquo;dollar&rdquo;?
          </p>
          <p className="text-[10px] text-fg/40 mt-1.5">a fixed if-else rulebook</p>
        </div>

        <ArrowRight size={16} className="text-fg/20 rotate-90 sm:rotate-0 shrink-0" />

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 rounded-lg bg-red-500/10 px-3 py-2">
            <AlertTriangle size={14} className="text-red-500 shrink-0" />
            <span className="text-[11px] text-fg/70">Rule matched &rarr; Spam</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-emerald-500/10 px-3 py-2">
            <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
            <span className="text-[11px] text-fg/70">No match &rarr; Not spam</span>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-fg/40 mt-5">
        Reword the message slightly and the same fixed rules can miss it entirely - rules don&rsquo;t scale.
      </p>
    </div>
  );
};

export default RuleBasedFlowDiagram;
