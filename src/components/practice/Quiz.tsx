import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

interface QuizProps {
  questions: QuizQuestion[];
  onComplete?: (score: number, total: number) => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, onComplete }) => {
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const score = Object.entries(answers).filter(
    ([qIndex, aIndex]) => questions[Number(qIndex)].correctIndex === aIndex
  ).length;

  const select = (qIndex: number, oIndex: number) => {
    if (answers[qIndex] !== undefined) return;
    const nextAnswers = { ...answers, [qIndex]: oIndex };
    setAnswers(nextAnswers);

    if (Object.keys(nextAnswers).length === questions.length) {
      const nextScore = Object.entries(nextAnswers).filter(
        ([qi, ai]) => questions[Number(qi)].correctIndex === ai
      ).length;
      onComplete?.(nextScore, questions.length);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-display text-xl text-fg">Quiz Yourself</h2>
        <span className="text-sm text-fg/50">
          Score: {score}/{questions.length}
        </span>
      </div>

      <div className="space-y-4">
        {questions.map((q, qIndex) => {
          const selected = answers[qIndex];
          const isAnswered = selected !== undefined;

          return (
            <div key={q.question} className="rounded-xl bg-bg border border-fg/10 p-4">
              <p className="text-fg text-sm font-medium mb-3">
                {qIndex + 1}. {q.question}
              </p>
              <div className="grid sm:grid-cols-2 gap-2">
                {q.options.map((opt, oIndex) => {
                  const isCorrect = oIndex === q.correctIndex;
                  const isSelected = oIndex === selected;

                  let style = 'border-fg/10 text-fg/70 hover:border-fg/30';
                  if (isAnswered && isCorrect) style = 'border-accent text-accent bg-accent/10';
                  else if (isAnswered && isSelected && !isCorrect) style = 'border-red-400 text-red-400 bg-red-400/10';

                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => select(qIndex, oIndex)}
                      disabled={isAnswered}
                      className={`flex items-center justify-between gap-2 px-4 py-2.5 rounded-lg border text-sm text-left transition-colors disabled:cursor-default ${style}`}
                    >
                      {opt}
                      {isAnswered && isSelected && (isCorrect ? <Check size={14} /> : <X size={14} />)}
                      {isAnswered && !isSelected && isCorrect && <Check size={14} />}
                    </button>
                  );
                })}
              </div>
              {isAnswered && q.explanation && <p className="text-fg/40 text-xs mt-3">{q.explanation}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Quiz;
