import React from 'react';
import { Outlet, Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import { htmlTopics } from './htmlTopics';
import { useProgress, resetProgress } from '../../../lib/progress';

const HtmlCourseLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { topicSlug } = useParams();
  const progress = useProgress();

  const completedCount = htmlTopics.filter((t) => progress[t.slug]?.quizCompleted).length;
  const completePct = Math.round((completedCount / htmlTopics.length) * 100);

  const currentValue = location.pathname.endsWith('/interview-questions') ? 'interview-questions' : topicSlug;

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
          value={currentValue}
          onChange={(e) => navigate(`/interview-prep/html/${e.target.value}`)}
          className="lg:hidden w-full mb-8 px-4 py-3 rounded-xl bg-card border border-fg/10 text-fg text-sm focus:outline-none"
        >
          {htmlTopics.map((topic, i) => (
            <option key={topic.slug} value={topic.slug} className="bg-card">
              {i + 1}. {topic.title} {progress[topic.slug]?.quizCompleted ? '✓' : ''}
            </option>
          ))}
          <option value="interview-questions" className="bg-card">
            100 HTML Interview Questions
          </option>
        </select>

        <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
          <aside className="hidden lg:block sticky top-28 self-start max-h-[calc(100vh-8rem)] overflow-y-auto pb-10">
            <div className="px-3 mb-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs tracking-widest text-fg/40 uppercase">HTML Tutorial</p>
                <span className="text-xs text-fg/40">
                  {completedCount}/{htmlTopics.length}
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
              {htmlTopics.map((topic, i) => {
                const path = `/interview-prep/html/${topic.slug}`;
                const active = location.pathname === path;
                const topicProgress = progress[topic.slug];

                return (
                  <Link
                    key={topic.slug}
                    to={path}
                    className={`flex items-center justify-between gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                      active ? 'bg-fg/10 text-fg' : 'text-fg/50 hover:text-fg hover:bg-fg/5'
                    }`}
                  >
                    <span>
                      {i + 1}. {topic.title}
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

              <Link
                to="/interview-prep/html/interview-questions"
                className={`block px-3 py-2 rounded-lg text-sm transition-colors mt-2 pt-2 border-t border-fg/10 ${
                  location.pathname.endsWith('/interview-questions')
                    ? 'bg-fg/10 text-fg'
                    : 'text-fg/50 hover:text-fg hover:bg-fg/5'
                }`}
              >
                100 HTML Interview Questions
              </Link>
            </nav>

            {completedCount > 0 && (
              <button
                type="button"
                onClick={() => {
                  if (confirm('Reset your HTML course progress?')) resetProgress();
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

export default HtmlCourseLayout;
