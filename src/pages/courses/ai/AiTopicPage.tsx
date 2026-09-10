import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';

import SplitHeading from '../../../components/anim/SplitHeading';
import FadeIn from '../../../components/anim/FadeIn';
import Quiz from '../../../components/practice/Quiz';
import { aiTopics } from './aiTopics';
import type { TopicSection } from './aiTopics';
import { markVisited, setQuizResult, useProgress } from '../../../lib/progress';
import { estimateTopicMinutes } from '../../../lib/estimateTopicTime';
import Seo, { SITE_URL } from '../../../components/Seo';
import TuringTestDiagram from '../../../components/ai/TuringTestDiagram';
import SiVsAiTable from '../../../components/ai/SiVsAiTable';
import MlVsDlTable from '../../../components/ai/MlVsDlTable';
import AttentionDiagram from '../../../components/ai/AttentionDiagram';
import SearchVsGenerationDiagram from '../../../components/ai/SearchVsGenerationDiagram';
import BaseModelStackDiagram from '../../../components/ai/BaseModelStackDiagram';
import TrainingVsInferenceDiagram from '../../../components/ai/TrainingVsInferenceDiagram';
import TokenizationFlowDiagram from '../../../components/ai/TokenizationFlowDiagram';
import ContextWindowDiagram from '../../../components/ai/ContextWindowDiagram';
import TimelineDiagram from '../../../components/ai/TimelineDiagram';
import RuleBasedFlowDiagram from '../../../components/ai/RuleBasedFlowDiagram';
import WordAmbiguityDiagram from '../../../components/ai/WordAmbiguityDiagram';
import HallucinationDiagram from '../../../components/ai/HallucinationDiagram';
import RagFlowDiagram from '../../../components/ai/RagFlowDiagram';

const VISUALS: Record<NonNullable<TopicSection['visual']>, React.ComponentType> = {
  'turing-test': TuringTestDiagram,
  'si-vs-ai': SiVsAiTable,
  'ml-vs-dl': MlVsDlTable,
  attention: AttentionDiagram,
  'search-vs-generation': SearchVsGenerationDiagram,
  'base-model-stack': BaseModelStackDiagram,
  'training-vs-inference': TrainingVsInferenceDiagram,
  'tokenization-flow': TokenizationFlowDiagram,
  'context-window': ContextWindowDiagram,
  timeline: TimelineDiagram,
  'rule-based-flow': RuleBasedFlowDiagram,
  'word-ambiguity': WordAmbiguityDiagram,
  hallucination: HallucinationDiagram,
  'rag-flow': RagFlowDiagram,
};

const AiTopicPage: React.FC = () => {
  const { topicSlug } = useParams();
  const index = aiTopics.findIndex((t) => t.slug === topicSlug);
  const progress = useProgress();

  useEffect(() => {
    if (topicSlug) markVisited(`ai:${topicSlug}`);
  }, [topicSlug]);

  if (index === -1) {
    return <Navigate to={`/interview-prep/ai/${aiTopics[0].slug}`} replace />;
  }

  const topic = aiTopics[index];
  const prev = aiTopics[index - 1];
  const next = aiTopics[index + 1];

  const completedCount = aiTopics.filter((t) => progress[`ai:${t.slug}`]?.quizCompleted).length;
  const completePct = Math.round((completedCount / aiTopics.length) * 100);

  return (
    <article key={topic.slug}>
      <Seo
        title={`${topic.title} - AI Notes`}
        description={topic.intro}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Interview Prep', item: `${SITE_URL}/interview-prep` },
            { '@type': 'ListItem', position: 2, name: 'AI Notes', item: `${SITE_URL}/interview-prep/ai` },
            {
              '@type': 'ListItem',
              position: 3,
              name: topic.title,
              item: `${SITE_URL}/interview-prep/ai/${topic.slug}`,
            },
          ],
        }}
      />
      <FadeIn immediate y={8} duration={0.5} className="mb-5">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[11px] text-fg/40">Course progress</span>
          <span className="text-[11px] text-fg/40">
            {completedCount}/{aiTopics.length} chapters &middot; {completePct}%
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
        <div className="flex items-center gap-3 mb-3">
          <p className="text-xs tracking-widest text-fg/50 uppercase">
            Chapter {index + 1} of {aiTopics.length}
          </p>
          <span className="inline-flex items-center gap-1 text-xs text-fg/40">
            <Clock size={12} />~{estimateTopicMinutes(topic)} min
          </span>
        </div>
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
            {sec.visual &&
              (() => {
                const Visual = VISUALS[sec.visual];
                return (
                  <div className="mt-4 mb-1">
                    <Visual />
                  </div>
                );
              })()}
          </div>
        ))}
      </FadeIn>

      <FadeIn immediate y={16} delay={0.18} className="mt-14 pt-10 border-t border-fg/10">
        <Quiz questions={topic.quiz} onComplete={(score, total) => setQuizResult(`ai:${topic.slug}`, score, total)} />
      </FadeIn>

      <div className="flex items-center justify-between mt-14 pt-8 border-t border-fg/10">
        {prev ? (
          <Link
            to={`/interview-prep/ai/${prev.slug}`}
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
            to={`/interview-prep/ai/${next.slug}`}
            className="inline-flex items-center gap-2 text-sm text-fg/60 hover:text-fg transition-colors"
          >
            {next.title}
            <ArrowRight size={16} />
          </Link>
        ) : (
          <span />
        )}
      </div>
    </article>
  );
};

export default AiTopicPage;
