import React from 'react';
import { HelpCircle, DoorClosed } from 'lucide-react';

const TuringTestDiagram: React.FC = () => {
  return (
    <div className="rounded-2xl bg-card border border-fg/10 p-6">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-2 mb-6">
          <div className="w-14 h-14 rounded-full bg-fg/10 flex items-center justify-center">
            <HelpCircle size={22} className="text-fg" />
          </div>
          <p className="text-xs text-fg/50">Judge asks the same questions to both rooms</p>
        </div>

        <div className="w-px h-8 bg-fg/15" />

        <div className="grid grid-cols-2 gap-4 w-full max-w-md mt-2">
          <div className="flex flex-col items-center gap-2 rounded-xl border border-fg/10 p-4">
            <div className="w-11 h-11 rounded-full bg-fg/10 flex items-center justify-center">
              <DoorClosed size={18} className="text-fg/60" />
            </div>
            <p className="text-xs text-fg/60 text-center">Room 1</p>
            <p className="text-[11px] text-fg/40 text-center">Human or machine?</p>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-xl border border-fg/10 p-4">
            <div className="w-11 h-11 rounded-full bg-fg/10 flex items-center justify-center">
              <DoorClosed size={18} className="text-fg/60" />
            </div>
            <p className="text-xs text-fg/60 text-center">Room 2</p>
            <p className="text-[11px] text-fg/40 text-center">Human or machine?</p>
          </div>
        </div>

        <div className="mt-6 px-4 py-2.5 rounded-full bg-accent/10 text-accent text-xs text-center">
          If the judge can&apos;t reliably tell which room holds the human - the Turing Test is passed
        </div>
      </div>
    </div>
  );
};

export default TuringTestDiagram;
