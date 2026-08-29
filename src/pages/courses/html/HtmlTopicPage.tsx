import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ListChecks } from 'lucide-react';

import SplitHeading from '../../../components/anim/SplitHeading';
import FadeIn from '../../../components/anim/FadeIn';
import PracticeTerminal from '../../../components/practice/PracticeTerminal';
import Quiz from '../../../components/practice/Quiz';
import { htmlTopics } from './htmlTopics';
import { markVisited, setQuizResult, useProgress } from '../../../lib/progress';

const HtmlTopicPage: React.FC = () => {
  const { topicSlug } = useParams();
  const index = htmlTopics.findIndex((t) => t.slug === topicSlug);
  const progress = useProgress();

  useEffect(() => {
    if (topicSlug) markVisited(topicSlug);
  }, [topicSlug]);

  if (index === -1) {
    return <Navigate to={`/interview-prep/html/${htmlTopics[0].slug}`} replace />;
  }

  const topic = htmlTopics[index];
  const prev = htmlTopics[index - 1];
  const next = htmlTopics[index + 1];
  const isLast = index === htmlTopics.length - 1;

  const completedCount = htmlTopics.filter((t) => progress[t.slug]?.quizCompleted).length;
  const completePct = Math.round((completedCount / htmlTopics.length) * 100);

  return (
    <article key={topic.slug}>
      <FadeIn immediate y={8} duration={0.5} className="mb-5">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[11px] text-fg/40">Course progress</span>
          <span className="text-[11px] text-fg/40">
            {completedCount}/{htmlTopics.length} chapters &middot; {completePct}%
          </span>
        </div>
        <div className="h-1.5 rounded-full bg-fg/10 overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-500"
            style={{ width: `${completePct}%` }}
          />
        </div>
      </FadeIn>

      <FadeIn immediate y={12} delay={0.05} duration={0.5}>
        <p className="text-xs tracking-widest text-fg/50 uppercase mb-3">
          Chapter {index + 1} of {htmlTopics.length + 1}
        </p>
      </FadeIn>

      <SplitHeading as="h1" immediate className="font-display font-light text-3xl md:text-4xl text-fg mb-6">
        {topic.title}
      </SplitHeading>

      <FadeIn immediate y={12} delay={0.1}>
        <p className="text-fg/60 leading-relaxed mb-10">{topic.intro}</p>
      </FadeIn>

      <FadeIn immediate y={16} delay={0.15} stagger={0.08} className="space-y-10">
        {topic.sections.map((sec) => (
          <div key={sec.heading}>
            <h2 className="font-display text-xl text-fg mb-3">{sec.heading}</h2>
            {sec.body.map((paragraph) => (
              <p key={paragraph} className="text-fg/60 text-sm leading-relaxed mb-3">
                {paragraph}
              </p>
            ))}
            {sec.example && (
              <div className="mt-4">
                <p className="text-fg/40 text-xs uppercase tracking-wide mb-2">{sec.example.caption ?? 'Try it yourself'}</p>
                <PracticeTerminal starterCode={sec.example.starterCode} height="180px" />
              </div>
            )}
          </div>
        ))}
      </FadeIn>

      <FadeIn immediate y={16} delay={0.18} className="mt-14 pt-10 border-t border-fg/10">
        <h2 className="font-display text-xl text-fg mb-2">Coding Challenge</h2>
        <p className="text-fg/50 text-sm leading-relaxed mb-4">{topic.challenge.prompt}</p>
        <PracticeTerminal
          starterCode={topic.challenge.starterCode}
          solutionCode={topic.challenge.solutionCode}
          height="180px"
        />
      </FadeIn>

      <FadeIn immediate y={16} delay={0.22} className="mt-14 pt-10 border-t border-fg/10">
        <Quiz questions={topic.quiz} onComplete={(score, total) => setQuizResult(topic.slug, score, total)} />
      </FadeIn>

      <FadeIn immediate y={16} delay={0.24} className="mt-10">
        <Link
          to={`/interview-prep/html/interview-questions?category=${encodeURIComponent(topic.interviewCategory)}`}
          className="flex items-center justify-between gap-4 rounded-2xl bg-card border border-fg/10 p-5 hover:border-fg/30 transition-colors group"
        >
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-full bg-fg/10 flex items-center justify-center shrink-0">
              <ListChecks size={16} className="text-fg" />
            </span>
            <div>
              <p className="text-sm text-fg font-medium">Related interview questions</p>
              <p className="text-xs text-fg/50">{topic.interviewCategory}</p>
            </div>
          </div>
          <ArrowRight size={16} className="text-fg/40 group-hover:text-fg transition-colors shrink-0" />
        </Link>
      </FadeIn>

      <div className="flex items-center justify-between mt-14 pt-8 border-t border-fg/10">
        {prev ? (
          <Link
            to={`/interview-prep/html/${prev.slug}`}
            className="inline-flex items-center gap-2 text-sm text-fg/60 hover:text-fg transition-colors"
          >
            <ArrowLeft size={16} />
            {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to={`/interview-prep/html/${next.slug}`}
            className="inline-flex items-center gap-2 text-sm text-fg/60 hover:text-fg transition-colors"
          >
            {next.title}
            <ArrowRight size={16} />
          </Link>
        ) : isLast ? (
          <Link
            to="/interview-prep/html/interview-questions"
            className="inline-flex items-center gap-2 text-sm text-fg/60 hover:text-fg transition-colors"
          >
            Top 100 Interview Questions
            <ArrowRight size={16} />
          </Link>
        ) : (
          <span />
        )}
      </div>
    </article>
  );
};

export default HtmlTopicPage;
