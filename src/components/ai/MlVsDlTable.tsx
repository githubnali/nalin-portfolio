import React from 'react';

const rows: { aspect: string; ml: string; dl: string }[] = [
  { aspect: 'Data Volume', ml: 'Hundreds or thousands of data points', dl: 'Millions of data points' },
  {
    aspect: 'Computational Cost',
    ml: "Doesn't need a lot of computational power - CPU is often sufficient",
    dl: 'Needs a lot of computational power - GPU is often necessary',
  },
  { aspect: 'Training Time', ml: 'Takes less time to train', dl: 'Takes more time to train' },
  {
    aspect: 'Feature Engineering',
    ml: 'Needs to be done explicitly by a human',
    dl: 'Can automatically learn important features during training',
  },
  {
    aspect: 'Interpretability',
    ml: "Model behavior is easier to interpret",
    dl: 'Model behavior is more difficult to interpret',
  },
  {
    aspect: 'Application Examples',
    ml: 'Customer segmentation, recommendation systems, fraud detection',
    dl: 'Natural language processing, computer vision',
  },
];

const MlVsDlTable: React.FC = () => {
  return (
    <div className="rounded-2xl bg-card border border-fg/10 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse min-w-[560px]">
          <thead>
            <tr className="bg-fg/5">
              <th className="text-left font-medium text-fg/50 px-4 py-3 text-xs uppercase tracking-wide">Aspect</th>
              <th className="text-left font-medium text-fg px-4 py-3 text-xs uppercase tracking-wide">
                Machine Learning
              </th>
              <th className="text-left font-medium text-fg px-4 py-3 text-xs uppercase tracking-wide">
                Deep Learning
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.aspect} className={i % 2 === 1 ? 'bg-fg/[0.02]' : ''}>
                <td className="px-4 py-3 text-fg/50 font-medium border-t border-fg/10 align-top">{row.aspect}</td>
                <td className="px-4 py-3 text-fg/70 leading-relaxed border-t border-fg/10 align-top">{row.ml}</td>
                <td className="px-4 py-3 text-fg/70 leading-relaxed border-t border-fg/10 align-top">{row.dl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MlVsDlTable;
