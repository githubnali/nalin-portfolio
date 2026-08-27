import React, { useRef } from 'react';
import { highlightHtml } from '../../lib/highlightHtml';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  height: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ value, onChange, height }) => {
  const preRef = useRef<HTMLPreElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const syncScroll = () => {
    if (preRef.current && textareaRef.current) {
      preRef.current.scrollTop = textareaRef.current.scrollTop;
      preRef.current.scrollLeft = textareaRef.current.scrollLeft;
    }
  };

  const sharedClassName = 'absolute inset-0 w-full px-4 py-3 font-mono text-sm leading-relaxed whitespace-pre-wrap break-words';

  return (
    <div className="relative overflow-hidden" style={{ height }}>
      <pre
        ref={preRef}
        aria-hidden="true"
        className={`${sharedClassName} m-0 overflow-auto pointer-events-none text-fg/90`}
        dangerouslySetInnerHTML={{ __html: `${highlightHtml(value)}\n` }}
      />
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onScroll={syncScroll}
        spellCheck={false}
        className={`${sharedClassName} h-full bg-transparent text-transparent caret-fg resize-none overflow-auto focus:outline-none`}
      />
    </div>
  );
};

export default CodeEditor;
