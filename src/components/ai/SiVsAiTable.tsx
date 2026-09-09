import React from 'react';

const rows: { aspect: string; ai: string; si: string }[] = [
  {
    aspect: 'Core Focus',
    ai: 'Imitation: replicates human intelligence & behavior',
    si: 'Generation: emergent intelligence built into systems',
  },
  {
    aspect: 'Nature',
    ai: 'Mimics cognition',
    si: 'Creates new forms of cognition & problem-solving',
  },
  {
    aspect: 'Perception',
    ai: '"Artificial" often implies fake or limited',
    si: '"Synthetic" implies deliberately made, potentially superior',
  },
  {
    aspect: 'Goal',
    ai: 'Simulate human-like behavior',
    si: 'Engineer new kinds of intelligence',
  },
];

const SiVsAiTable: React.FC = () => {
  return (
    <div className="rounded-2xl bg-card border border-fg/10 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse min-w-[560px]">
          <thead>
            <tr className="bg-fg/5">
              <th className="text-left font-medium text-fg/50 px-4 py-3 text-xs uppercase tracking-wide">Aspect</th>
              <th className="text-left font-medium text-fg px-4 py-3 text-xs uppercase tracking-wide">
                Artificial Intelligence
              </th>
              <th className="text-left font-medium text-fg px-4 py-3 text-xs uppercase tracking-wide">
                Synthetic Intelligence
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.aspect} className={i % 2 === 1 ? 'bg-fg/[0.02]' : ''}>
                <td className="px-4 py-3 text-fg/50 font-medium border-t border-fg/10 align-top">{row.aspect}</td>
                <td className="px-4 py-3 text-fg/70 leading-relaxed border-t border-fg/10 align-top">{row.ai}</td>
                <td className="px-4 py-3 text-fg/70 leading-relaxed border-t border-fg/10 align-top">{row.si}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SiVsAiTable;
