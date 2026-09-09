import React from 'react';
import { Outlet, Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import { aiTopics } from './aiTopics';
import { useProgress, resetProgress } from '../../../lib/progress';

const AiCourseLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { topicSlug } = useParams();
  const progress = useProgress();

  const completedCount = aiTopics.filter((t) => progress[`ai:${t.slug}`]?.quizCompleted).length;
  const completePct = Math.round((completedCount / aiTopics.length) * 100);

  return (
    <section className="pt-24 pb-20 lg:pt-28 lg:pb-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <Link
          to="/interview-prep"
          className="inline-flex items-center gap-2 text-sm text-fg/50 hover:text-fg transition-colors mb-6"
        >
          <ArrowLeft size={16} />
          Back to Interview Prep
        </Link>

        {/* Mobile chapter picker */}
        <select
          value={topicSlug}
          onChange={(e) => navigate(`/interview-prep/ai/${e.target.value}`)}
          className="lg:hidden w-full mb-8 px-4 py-3 rounded-xl bg-card border border-fg/10 text-fg text-sm focus:outline-none"
        >
          {aiTopics.map((topic, i) => (
            <option key={topic.slug} value={topic.slug} className="bg-card">
              {i + 1}. {topic.title} {progress[`ai:${topic.slug}`]?.quizCompleted ? '✓' : ''}
            </option>
          ))}
        </select>

        <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
          <aside className="hidden lg:block sticky top-28 self-start max-h-[calc(100vh-8rem)] overflow-y-auto pb-10">
            <div className="px-3 mb-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs tracking-widest text-fg/40 uppercase">AI Notes</p>
                <span className="text-xs text-fg/40">
                  {completedCount}/{aiTopics.length}
                </span>
              </div>
              <div className="h-1 rounded-full bg-fg/10 overflow-hidden">
                <div
                  className="h-full bg-accent rounded-full transition-all duration-500"
                  style={{ width: `${completePct}%` }}
                />
              </div>
            </div>

            <nav className="space-y-0.5">
              {aiTopics.map((topic, i) => {
                const path = `/interview-prep/ai/${topic.slug}`;
                const active = location.pathname === path;
                const topicProgress = progress[`ai:${topic.slug}`];

                return (
                  <Link
                    key={topic.slug}
                    to={path}
                    className={`flex items-center justify-between gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                      active ? 'bg-fg/10 text-fg' : 'text-fg/50 hover:text-fg hover:bg-fg/5'
                    }`}
                  >
                    <span className="flex gap-1.5">
                      <span className="shrink-0">{i + 1}.</span>
                      <span>{topic.title}</span>
                    </span>
                    {topicProgress?.quizCompleted ? (
                      <span
                        className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-accent/20 text-accent shrink-0"
                        title={`Quiz: ${topicProgress.quizScore}/${topicProgress.quizTotal}`}
                      >
                        <Check size={11} />
                      </span>
                    ) : topicProgress?.visited ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-fg/30 shrink-0" title="Visited" />
                    ) : null}
                  </Link>
                );
              })}
            </nav>

            {completedCount > 0 && (
              <button
                type="button"
                onClick={() => {
                  if (confirm('Reset your AI notes progress?')) resetProgress('ai:');
                }}
                className="mt-4 px-3 text-xs text-fg/30 hover:text-fg/60 transition-colors"
              >
                Reset progress
              </button>
            )}
          </aside>

          <div className="min-w-0">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiCourseLayout;
