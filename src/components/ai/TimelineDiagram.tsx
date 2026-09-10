import React from 'react';

const EVENTS = [
  { year: '1950', label: 'Alan Turing proposes the Turing Test' },
  { year: '1956', label: 'John McCarthy coins "Artificial Intelligence"' },
  { year: "1950s-80s", label: 'Rule-Based AI & Expert Systems' },
  { year: '1997', label: 'Deep Blue defeats Garry Kasparov' },
  { year: '1990s', label: 'Machine Learning gains traction' },
  { year: '2000s', label: 'Deep Learning breakthroughs' },
  { year: '2012', label: 'AlexNet wins on ImageNet' },
  { year: '2016', label: 'AlphaGo defeats Lee Sedol' },
  { year: '2017', label: 'Transformers - "Attention Is All You Need"' },
  { year: '2022', label: 'ChatGPT is released' },
  { year: '2025+', label: 'Agentic AI' },
];

const TimelineDiagram: React.FC = () => {
  return (
    <div className="rounded-2xl bg-card border border-fg/10 p-6">
      <div className="relative pl-6">
        <div className="absolute left-[7px] top-1 bottom-1 w-px bg-fg/10" />
        <div className="space-y-4">
          {EVENTS.map((e) => (
            <div key={e.year} className="relative flex items-start gap-3">
              <span className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-accent/70 ring-4 ring-card" />
              <span className="shrink-0 w-20 text-xs font-mono text-accent">{e.year}</span>
              <span className="text-xs text-fg/70 leading-relaxed">{e.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineDiagram;
