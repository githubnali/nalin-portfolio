import React from 'react';
import { GraduationCap, MessageCircle, ArrowRight } from 'lucide-react';

const TrainingVsInferenceDiagram: React.FC = () => {
  return (
    <div className="rounded-2xl bg-card border border-fg/10 p-6">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <div className="flex flex-col items-center text-center w-40">
          <div className="w-11 h-11 rounded-full bg-fg/10 flex items-center justify-center mb-2">
            <GraduationCap size={18} className="text-fg" />
          </div>
          <p className="text-sm font-medium text-fg">Training</p>
          <p className="text-[11px] text-fg/40 mt-1">The school phase - studying huge amounts of data to learn patterns</p>
        </div>

        <ArrowRight size={18} className="text-fg/20 rotate-90 sm:rotate-0" />

        <div className="flex flex-col items-center text-center w-40">
          <div className="w-11 h-11 rounded-full bg-accent/15 flex items-center justify-center mb-2">
            <MessageCircle size={18} className="text-accent" />
          </div>
          <p className="text-sm font-medium text-fg">Inference</p>
          <p className="text-[11px] text-fg/40 mt-1">The working phase - using what it learned to answer you, right now</p>
        </div>
      </div>
    </div>
  );
};

export default TrainingVsInferenceDiagram;
