import React from 'react';
import { Search, Sparkles, ArrowDown } from 'lucide-react';

const SearchVsGenerationDiagram: React.FC = () => {
  return (
    <div className="rounded-2xl bg-card border border-fg/10 p-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="flex flex-col items-center text-center">
          <div className="w-11 h-11 rounded-full bg-fg/10 flex items-center justify-center mb-2">
            <Search size={18} className="text-fg" />
          </div>
          <p className="text-sm font-medium text-fg mb-3">Google Search - Retrieval</p>

          <div className="w-full space-y-2">
            {['Your query', 'Searches the index', 'Ranks matching pages', 'Returns a list of sources'].map(
              (step, i, arr) => (
                <React.Fragment key={step}>
                  <div className="rounded-lg bg-fg/5 px-3 py-2 text-xs text-fg/70">{step}</div>
                  {i < arr.length - 1 && <ArrowDown size={14} className="text-fg/20 mx-auto" />}
                </React.Fragment>
              )
            )}
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-11 h-11 rounded-full bg-accent/15 flex items-center justify-center mb-2">
            <Sparkles size={18} className="text-accent" />
          </div>
          <p className="text-sm font-medium text-fg mb-3">ChatGPT - Generation</p>

          <div className="w-full space-y-2">
            {['Your prompt', 'Matches learned patterns', 'Predicts the most likely words', 'Generates one written answer'].map(
              (step, i, arr) => (
                <React.Fragment key={step}>
                  <div className="rounded-lg bg-accent/10 px-3 py-2 text-xs text-fg/70">{step}</div>
                  {i < arr.length - 1 && <ArrowDown size={14} className="text-accent/30 mx-auto" />}
                </React.Fragment>
              )
            )}
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-fg/40 mt-5">
        Google points you to a source. ChatGPT writes you an answer - with no source unless you ask for one.
      </p>
    </div>
  );
};

export default SearchVsGenerationDiagram;
