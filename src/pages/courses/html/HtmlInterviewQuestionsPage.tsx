import React, { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { ArrowLeft, ChevronDown, Search, Link as LinkIcon } from 'lucide-react';

import SplitHeading from '../../../components/anim/SplitHeading';
import FadeIn from '../../../components/anim/FadeIn';
import { htmlInterviewQuestions } from './htmlInterviewQuestions';
import { highlightHtml } from '../../../lib/highlightHtml';
import Seo from '../../../components/Seo';

const categories = Array.from(new Set(htmlInterviewQuestions.map((q) => q.category)));
const difficulties = ['Beginner', 'Intermediate', 'Advanced'];

const difficultyStyles: Record<string, string> = {
  Beginner: 'text-accent',
  Intermediate: 'text-yellow-500',
  Advanced: 'text-red-400',
};

const HtmlInterviewQuestionsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [openId, setOpenId] = useState<number | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const activeCategory = searchParams.get('category') ?? 'All';
  const activeDifficulty = searchParams.get('level') ?? 'All';

  const setCategory = (cat: string) => {
    const next = new URLSearchParams(searchParams);
    if (cat === 'All') next.delete('category');
    else next.set('category', cat);
    setSearchParams(next, { replace: true });
  };

  const setDifficulty = (level: string) => {
    const next = new URLSearchParams(searchParams);
    if (level === 'All') next.delete('level');
    else next.set('level', level);
    setSearchParams(next, { replace: true });
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return htmlInterviewQuestions.filter((item) => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesDifficulty = activeDifficulty === 'All' || item.difficulty === activeDifficulty;
      const matchesQuery = !q || item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q);
      return matchesCategory && matchesDifficulty && matchesQuery;
    });
  }, [query, activeCategory, activeDifficulty]);

  // Deep-link support: #q42 opens and scrolls to that question
  useEffect(() => {
    const match = location.hash.match(/^#q(\d+)$/);
    if (!match) return;
    const id = Number(match[1]);
    setOpenId(id);
    const t = setTimeout(() => {
      document.getElementById(`q${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
    return () => clearTimeout(t);
  }, [location.hash]);

  const copyLink = (id: number) => {
    const url = `${window.location.origin}${window.location.pathname}#q${id}`;
    navigator.clipboard
      ?.writeText(url)
      .then(() => {
        setCopiedId(id);
        setTimeout(() => setCopiedId((c) => (c === id ? null : c)), 1500);
      })
      .catch(() => {});
  };

  return (
    <article>
      <Seo
        title="114 HTML Interview Questions"
        description="114 HTML interview questions with detailed explanations and code examples, organized by category and difficulty - from basics to advanced topics."
      />
      <FadeIn immediate y={12} duration={0.5}>
        <p className="text-xs tracking-widest text-fg/50 uppercase mb-3">Chapter 14 of 14</p>
      </FadeIn>

      <SplitHeading as="h1" immediate className="font-display font-light text-3xl md:text-4xl text-fg mb-6">
        Top 114 HTML Interview Questions
      </SplitHeading>

      <FadeIn immediate y={12} delay={0.1}>
        <p className="text-fg/60 leading-relaxed mb-8">
          A rapid-fire reference covering the questions most likely to come up in a real interview - organized by
          topic and difficulty, with explanations that go beyond a one-line definition and a runnable code example
          for each one, so the concept sticks. Search or filter to find what you need, and share a direct link to
          any question.
        </p>
      </FadeIn>

      <FadeIn immediate y={12} delay={0.15} className="mb-8 space-y-4">
        <div className="relative">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-fg/40" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions..."
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-card border border-fg/10 text-fg placeholder:text-fg/30 text-sm focus:outline-none focus:ring-1 focus:ring-fg/30"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {['All', ...categories].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                activeCategory === cat
                  ? 'bg-fg text-bg border-fg'
                  : 'bg-card text-fg/60 border-fg/10 hover:text-fg hover:border-fg/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-fg/40 mr-1">Level:</span>
          {['All', ...difficulties].map((level) => (
            <button
              key={level}
              type="button"
              onClick={() => setDifficulty(level)}
              className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                activeDifficulty === level
                  ? 'bg-fg/10 border-fg/30 text-fg'
                  : 'bg-transparent text-fg/50 border-fg/10 hover:text-fg hover:border-fg/30'
              }`}
            >
              {level}
            </button>
          ))}
        </div>

        <p className="text-xs text-fg/40">
          Showing {filtered.length} of {htmlInterviewQuestions.length} questions
        </p>
      </FadeIn>

      <FadeIn immediate y={16} delay={0.2} stagger={0.02} className="space-y-2">
        {filtered.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              id={`q${item.id}`}
              className="rounded-xl bg-card border border-fg/10 overflow-hidden scroll-mt-24"
            >
              <div className="w-full flex items-center gap-2 px-5 py-4">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="flex-1 flex items-center justify-between gap-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm text-fg flex gap-2">
                    <span className="text-fg/30 shrink-0">{item.id}.</span>
                    <span>{item.question}</span>
                  </span>
                </button>
                <span
                  className={`hidden sm:inline text-[10px] uppercase tracking-wide font-medium shrink-0 ${difficultyStyles[item.difficulty] ?? 'text-fg/40'}`}
                >
                  {item.difficulty}
                </span>
                <button
                  type="button"
                  onClick={() => copyLink(item.id)}
                  className="p-1.5 rounded-md text-fg/30 hover:text-fg hover:bg-fg/10 transition-colors shrink-0"
                  aria-label="Copy link to this question"
                  title={copiedId === item.id ? 'Copied!' : 'Copy link'}
                >
                  <LinkIcon size={13} />
                </button>
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-label={isOpen ? 'Collapse answer' : 'Expand answer'}
                  className="shrink-0"
                >
                  <ChevronDown
                    size={16}
                    className={`text-fg/40 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
              </div>
              <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                  <p className="px-5 pb-4 text-sm text-fg/60 leading-relaxed">{item.answer}</p>
                  {item.example && (
                    <div className="px-5 pb-5">
                      <p className="text-fg/40 text-xs uppercase tracking-wide mb-2">Example</p>
                      <pre className="rounded-lg bg-bg border border-fg/10 p-4 overflow-x-auto">
                        <code
                          className="text-xs leading-relaxed whitespace-pre font-mono"
                          dangerouslySetInnerHTML={{ __html: highlightHtml(item.example) }}
                        />
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {filtered.length === 0 && (
          <p className="text-center text-fg/40 text-sm py-10">No questions match your search.</p>
        )}
      </FadeIn>

      <div className="flex items-center justify-between mt-14 pt-8 border-t border-fg/10">
        <Link
          to="/interview-prep/html/entities-best-practices"
          className="inline-flex items-center gap-2 text-sm text-fg/60 hover:text-fg transition-colors"
        >
          <ArrowLeft size={16} />
          Entities & Best Practices
        </Link>
        <span />
      </div>
    </article>
  );
};

export default HtmlInterviewQuestionsPage;
