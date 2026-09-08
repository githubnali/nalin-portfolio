import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Database, Binary, LayoutTemplate, BrainCircuit } from 'lucide-react';

import SplitHeading from '../components/anim/SplitHeading';
import FadeIn from '../components/anim/FadeIn';
import Seo from '../components/Seo';

import HTML from '../assets/projects/skills/html.png';
import Css from '../assets/projects/skills/css.png';
import JS from '../assets/projects/skills/javascript.png';
import Reactjs from '../assets/projects/skills/react.png';
import Nodejs from '../assets/projects/skills/nodejs.png';
import Express from '../assets/projects/skills/express.png';
import TypeScript from '../assets/projects/skills/typescript.png';
import Python from '../assets/projects/skills/python.png';

interface Topic {
  name: string;
  focus: string;
  icon?: string;
  Icon?: React.ComponentType<{ size?: number; className?: string }>;
  path?: string;
}

const topics: Topic[] = [
  { name: 'DSA', focus: 'Arrays, trees, graphs & complexity', Icon: Binary },
  { name: 'Frontend System Design', focus: 'Scalable, component-driven UI architecture', Icon: LayoutTemplate },
  { name: 'Artificial Intelligence', focus: 'LLMs, prompting & AI-assisted tooling', Icon: BrainCircuit },
  { name: 'React', focus: 'Hooks, patterns & performance', icon: Reactjs },
  { name: 'JavaScript', focus: 'Core concepts, closures & async', icon: JS },
  { name: 'TypeScript', focus: 'Types, generics & type-safe patterns', icon: TypeScript },
  { name: 'Node.js', focus: 'Runtime internals & APIs', icon: Nodejs },
  { name: 'Express', focus: 'REST APIs & middleware', icon: Express },
  { name: 'MongoDB', focus: 'Schema design & aggregation', Icon: Database },
  { name: 'Python', focus: 'Syntax, data structures & OOP basics', icon: Python },
  { name: 'HTML', focus: 'Semantic markup & accessibility', icon: HTML, path: '/interview-prep/html' },
  { name: 'CSS', focus: 'Layouts, Flexbox, Grid & animations', icon: Css },
];

const InterviewPrepPage: React.FC = () => {
  return (
    <section className="pt-32 pb-20 lg:pt-44 lg:pb-28">
      <Seo
        title="Interview Prep"
        description="Free interview preparation resources covering HTML, CSS, JavaScript, TypeScript, React, Node.js, Express, MongoDB, Python, DSA, frontend system design, and AI."
      />
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <FadeIn immediate y={12} duration={0.5}>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-fg/50 hover:text-fg transition-colors mb-10"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>
        </FadeIn>

        <div className="text-center mb-14">
          <FadeIn immediate y={12}>
            <p className="text-xs tracking-widest text-fg/50 uppercase mb-3">Interview Prep</p>
          </FadeIn>
          <SplitHeading
            as="h1"
            immediate
            className="font-display font-light text-3xl md:text-4xl lg:text-5xl text-fg mb-4"
          >
            Currently Sharpening
          </SplitHeading>
          <FadeIn immediate y={12} delay={0.15}>
            <p className="text-fg/50 max-w-xl mx-auto">
              The technologies and concepts I&apos;m actively preparing for my next interview
            </p>
          </FadeIn>
        </div>

        <FadeIn immediate y={20} delay={0.2} stagger={0.06} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {topics.map((topic) => {
            const cardClassName = `group flex items-start gap-4 rounded-2xl bg-card border border-fg/10 p-5 ${
              topic.path ? 'hover:border-fg/30 transition-colors cursor-pointer' : ''
            }`;

            const cardContent = (
              <>
                <div className="w-11 h-11 rounded-full bg-fg/10 flex items-center justify-center shrink-0">
                  {topic.icon ? (
                    <img src={topic.icon} alt="" className="w-5 h-5 object-contain" />
                  ) : topic.Icon ? (
                    <topic.Icon size={18} className="text-fg" />
                  ) : null}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-fg text-sm font-medium">{topic.name}</h3>
                    <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wide text-accent">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Preparing
                    </span>
                  </div>
                  <p className="text-fg/50 text-sm leading-relaxed">{topic.focus}</p>
                  {topic.path && (
                    <span className="inline-flex items-center gap-1 text-xs text-fg/40 group-hover:text-fg mt-2 transition-colors">
                      Practice questions
                      <ArrowRight size={12} />
                    </span>
                  )}
                </div>
              </>
            );

            return topic.path ? (
              <Link key={topic.name} to={topic.path} className={cardClassName}>
                {cardContent}
              </Link>
            ) : (
              <div key={topic.name} className={cardClassName}>
                {cardContent}
              </div>
            );
          })}
        </FadeIn>
      </div>
    </section>
  );
};

export default InterviewPrepPage;
