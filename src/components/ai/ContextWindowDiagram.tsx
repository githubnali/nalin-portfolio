import React from 'react';
import { FileText, Wrench, MessagesSquare, Sparkles } from 'lucide-react';

const PIECES = [
  { icon: MessagesSquare, label: 'System instructions' },
  { icon: FileText, label: 'Documents & text' },
  { icon: Wrench, label: 'Tool outputs' },
  { icon: Sparkles, label: 'Your prompt + the model’s reply' },
];

const ContextWindowDiagram: React.FC = () => {
  return (
    <div className="rounded-2xl bg-card border border-fg/10 p-6">
      <p className="text-sm font-medium text-fg text-center mb-4">The context window - everything the model can &ldquo;see&rdquo; right now</p>

      <div className="rounded-xl border-2 border-dashed border-accent/30 p-4">
        <div className="grid grid-cols-2 gap-2.5">
          {PIECES.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 rounded-lg bg-fg/5 px-2.5 py-2">
              <Icon size={14} className="text-accent shrink-0" />
              <span className="text-[11px] text-fg/70">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-xs text-fg/40 mt-4">
        Shared between what you send and what the model generates - it is short-term working memory, not a permanent record of the chat.
      </p>
    </div>
  );
};

export default ContextWindowDiagram;
