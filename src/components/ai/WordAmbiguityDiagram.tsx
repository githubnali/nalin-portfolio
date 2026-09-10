import React from 'react';
import { Waves, Landmark } from 'lucide-react';

const WordAmbiguityDiagram: React.FC = () => {
  return (
    <div className="rounded-2xl bg-card border border-fg/10 p-6">
      <p className="text-center text-sm font-medium text-fg mb-5">
        &ldquo;bank&rdquo;
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col items-center text-center rounded-xl bg-fg/5 p-4">
          <div className="w-11 h-11 rounded-full bg-fg/10 flex items-center justify-center mb-2">
            <Waves size={18} className="text-fg" />
          </div>
          <p className="text-xs font-medium text-fg">River bank</p>
          <p className="text-[11px] text-fg/40 mt-1">&ldquo;We sat by the river bank.&rdquo;</p>
        </div>

        <div className="flex flex-col items-center text-center rounded-xl bg-accent/10 p-4">
          <div className="w-11 h-11 rounded-full bg-accent/15 flex items-center justify-center mb-2">
            <Landmark size={18} className="text-accent" />
          </div>
          <p className="text-xs font-medium text-fg">Bank of India</p>
          <p className="text-[11px] text-fg/40 mt-1">&ldquo;I deposited cash at the bank.&rdquo;</p>
        </div>
      </div>

      <p className="text-center text-xs text-fg/40 mt-5">
        Same word, completely different meaning - a machine has to resolve this from context, the same way you just did.
      </p>
    </div>
  );
};

export default WordAmbiguityDiagram;
