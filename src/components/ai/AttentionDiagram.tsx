import React from 'react';

const words = ['The', 'lion', 'did', 'not', 'cross', 'the', 'river', 'because', 'it', 'cannot', 'swim'];

const AttentionDiagram: React.FC = () => {
  const fromIndex = words.indexOf('it');
  const toIndex = words.indexOf('lion');

  return (
    <div className="rounded-2xl bg-card border border-fg/10 p-6 overflow-x-auto">
      <svg viewBox="0 0 720 120" className="min-w-[640px] w-full h-auto" role="img" aria-label="Attention connecting 'it' back to 'lion'">
        <path
          d={`M ${60 + toIndex * 60} 78 C ${60 + toIndex * 60} 20, ${60 + fromIndex * 60} 20, ${60 + fromIndex * 60} 78`}
          fill="none"
          stroke="rgb(var(--color-accent))"
          strokeWidth="2"
          strokeDasharray="4 3"
        />
        <text
          x={(60 + toIndex * 60 + 60 + fromIndex * 60) / 2}
          y="16"
          textAnchor="middle"
          className="fill-accent"
          fontSize="11"
        >
          attention
        </text>

        {words.map((word, i) => {
          const isHighlighted = i === fromIndex || i === toIndex;
          return (
            <g key={`${word}-${i}`}>
              <rect
                x={60 + i * 60 - 26}
                y={82}
                width={52}
                height={26}
                rx={6}
                className={isHighlighted ? 'fill-accent/15' : 'fill-fg/5'}
              />
              <text
                x={60 + i * 60}
                y={99}
                textAnchor="middle"
                className={isHighlighted ? 'fill-accent' : 'fill-fg/60'}
                fontSize="12"
                fontWeight={isHighlighted ? 600 : 400}
              >
                {word}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default AttentionDiagram;
