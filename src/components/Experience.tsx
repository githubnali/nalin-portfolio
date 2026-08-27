import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SplitHeading from './anim/SplitHeading';
import FadeIn from './anim/FadeIn';

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: 'EverestIMS Technologies Limited',
    position: 'Software Engineer',
    period: 'Apr 2025 - Present',
    description: [
      'Develop and maintain the web application',
      'Blog posting, developing email templates',
      'Collaborated with the design team to implement responsive, accessible UI components',
    ],
  },
  {
    company: 'Tata Consultancy Services (TCS)',
    position: 'Frontend Developer',
    period: 'Mar 2022 - Mar 2025',
    description: [
      'Built responsive React apps with great UX & speed',
      'Enhanced web pages with agile team collaboration',
      'Developed accessible features using JavaScript',
    ],
  },
];

const ExperienceTimeline: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="experience" className="py-20 lg:py-28 border-t border-fg/10">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <FadeIn y={12}>
            <p className="text-xs tracking-widest text-fg/50 uppercase mb-3">Experience</p>
          </FadeIn>
          <SplitHeading as="h2" className="font-display font-light text-3xl md:text-4xl text-fg mb-4">
            Where I&apos;ve Worked
          </SplitHeading>
          <FadeIn y={12} delay={0.15}>
            <p className="text-fg/50 max-w-xl mx-auto">
              A summary of my professional journey and the impact I&apos;ve made
            </p>
          </FadeIn>
        </div>

        <FadeIn y={20} stagger={0.12} className="space-y-4">
          {experiences.map((exp, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={exp.company} className="rounded-2xl bg-card border border-fg/10 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <div>
                    <h3 className="font-display text-lg text-fg">
                      {exp.position} - {exp.company}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="text-sm text-fg/50">{exp.period}</span>
                    <span className="w-9 h-9 rounded-full border border-fg/20 flex items-center justify-center">
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </span>
                  </div>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="px-6 pb-6 space-y-3">
                      {exp.description.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-fg/60 text-sm">
                          <span className="mt-2 w-1 h-1 rounded-full bg-fg/40 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </FadeIn>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
