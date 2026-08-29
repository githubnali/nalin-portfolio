import React from 'react';
import type { MockupLayout } from '../../data/services';

type ColorName = 'blue' | 'emerald' | 'violet' | 'orange' | 'pink' | 'cyan' | 'amber' | 'rose';

interface ColorClasses {
  solid: string;
  soft: string;
  text: string;
}

const COLOR_MAP: Record<ColorName, ColorClasses> = {
  blue: { solid: 'bg-blue-500', soft: 'bg-blue-500/15', text: 'text-blue-500' },
  emerald: { solid: 'bg-emerald-500', soft: 'bg-emerald-500/15', text: 'text-emerald-500' },
  violet: { solid: 'bg-violet-500', soft: 'bg-violet-500/15', text: 'text-violet-500' },
  orange: { solid: 'bg-orange-500', soft: 'bg-orange-500/15', text: 'text-orange-500' },
  pink: { solid: 'bg-pink-500', soft: 'bg-pink-500/15', text: 'text-pink-500' },
  cyan: { solid: 'bg-cyan-500', soft: 'bg-cyan-500/15', text: 'text-cyan-500' },
  amber: { solid: 'bg-amber-500', soft: 'bg-amber-500/15', text: 'text-amber-500' },
  rose: { solid: 'bg-rose-500', soft: 'bg-rose-500/15', text: 'text-rose-500' },
};

export const MOCKUP_COLORS: ColorName[] = ['blue', 'emerald', 'violet', 'orange', 'pink', 'cyan', 'amber', 'rose'];

interface SiteMockupProps {
  layout: MockupLayout;
  color: ColorName;
  title: string;
}

const SiteMockup: React.FC<SiteMockupProps> = ({ layout, color, title }) => {
  const c = COLOR_MAP[color];

  const renderLayout = () => {
    switch (layout) {
      case 'ecommerce':
        return (
          <>
            <div className="h-2 w-16 rounded bg-fg/15 mb-3" />
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="rounded-lg overflow-hidden border border-fg/10">
                  <div className={`h-10 ${c.soft}`} />
                  <div className="p-1.5 space-y-1">
                    <div className="h-1.5 w-full rounded bg-fg/10" />
                    <div className={`h-1.5 w-1/2 rounded ${c.solid}`} />
                  </div>
                </div>
              ))}
            </div>
          </>
        );

      case 'booking':
        return (
          <>
            <div className={`h-14 rounded-lg ${c.soft} mb-3`} />
            <div className="rounded-lg border border-fg/10 p-2 space-y-1.5">
              <div className="h-1.5 w-1/2 rounded bg-fg/15" />
              <div className="flex gap-1.5">
                <div className="h-5 flex-1 rounded bg-fg/5 border border-fg/10" />
                <div className="h-5 flex-1 rounded bg-fg/5 border border-fg/10" />
              </div>
              <div className={`h-5 w-20 rounded-full ${c.solid}`} />
            </div>
          </>
        );

      case 'listing':
        return (
          <>
            <div className="grid grid-cols-2 gap-2 mb-2">
              {[0, 1].map((i) => (
                <div key={i} className="rounded-lg overflow-hidden border border-fg/10">
                  <div className={`h-12 ${c.soft}`} />
                  <div className="p-1.5 space-y-1">
                    <div className="h-1.5 w-full rounded bg-fg/10" />
                    <div className={`h-1.5 w-1/2 rounded ${c.solid}`} />
                  </div>
                </div>
              ))}
            </div>
            <div className="h-1.5 w-2/3 rounded bg-fg/10" />
          </>
        );

      case 'course':
        return (
          <>
            <div className="space-y-2 mb-3">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`w-6 h-6 rounded-full ${c.soft} flex items-center justify-center shrink-0`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${c.solid}`} />
                  </div>
                  <div className="flex-1 h-1.5 rounded bg-fg/10" />
                </div>
              ))}
            </div>
            <div className="h-1.5 rounded-full bg-fg/10 overflow-hidden">
              <div className={`h-full w-2/3 rounded-full ${c.solid}`} />
            </div>
          </>
        );

      case 'menu':
        return (
          <div className="grid grid-cols-2 gap-2">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="rounded-lg overflow-hidden border border-fg/10">
                <div className={`h-8 ${c.soft}`} />
                <div className="p-1 space-y-1">
                  <div className="h-1.5 w-full rounded bg-fg/10" />
                </div>
              </div>
            ))}
          </div>
        );

      case 'dashboard':
        return (
          <div className="flex gap-2">
            <div className="w-6 rounded bg-fg/5 flex flex-col gap-1.5 p-1 shrink-0">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className={`h-1.5 rounded ${i === 0 ? c.solid : 'bg-fg/10'}`} />
              ))}
            </div>
            <div className="flex-1 space-y-2">
              <div className="grid grid-cols-3 gap-1.5">
                {[0, 1, 2].map((i) => (
                  <div key={i} className={`h-7 rounded-lg ${c.soft}`} />
                ))}
              </div>
              <div className="flex items-end gap-1 h-9">
                {[5, 8, 6, 9, 7, 10, 6].map((h, idx) => (
                  <div key={idx} className={`flex-1 rounded-t ${c.solid}`} style={{ height: `${h * 3.5}px` }} />
                ))}
              </div>
            </div>
          </div>
        );

      case 'landing':
        return (
          <div className="flex flex-col items-center text-center gap-2 py-2">
            <div className={`h-2 w-16 rounded-full ${c.soft}`} />
            <div className="h-2 w-3/4 rounded bg-fg/15" />
            <div className="h-2 w-1/2 rounded bg-fg/10" />
            <div className={`h-6 w-20 rounded-full ${c.solid} mt-1`} />
          </div>
        );

      case 'email':
        return (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className={`w-6 h-6 rounded ${c.soft} shrink-0`} />
              <div className="h-1.5 flex-1 rounded bg-fg/10" />
            </div>
            <div className={`h-12 rounded-lg ${c.soft}`} />
            <div className="h-1.5 w-full rounded bg-fg/10" />
            <div className="h-1.5 w-2/3 rounded bg-fg/10" />
            <div className={`h-5 w-16 rounded-full ${c.solid} mt-1`} />
          </div>
        );

      case 'deploy':
        return (
          <div className="rounded-lg bg-fg/5 p-2.5 font-mono text-[9px] leading-relaxed text-fg/40 space-y-1">
            <div>$ npm run build</div>
            <div>$ deploy --prod</div>
            <div className={`inline-flex items-center gap-1.5 ${c.text} font-sans font-medium`}>
              <span className={`w-1.5 h-1.5 rounded-full ${c.solid}`} />
              Live
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="rounded-xl overflow-hidden border border-fg/10 bg-bg">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-fg/5 border-b border-fg/10">
        <span className="w-2 h-2 rounded-full bg-fg/15" />
        <span className="w-2 h-2 rounded-full bg-fg/15" />
        <span className="w-2 h-2 rounded-full bg-fg/15" />
        <div className="ml-2 flex-1 h-3.5 rounded bg-fg/5 flex items-center px-2">
          <span className="text-[8px] text-fg/30 truncate">{title.toLowerCase().replace(/[^a-z0-9]+/g, '')}.com</span>
        </div>
      </div>
      <div className="p-3 min-h-[104px] flex flex-col justify-center">{renderLayout()}</div>
    </div>
  );
};

export default SiteMockup;
