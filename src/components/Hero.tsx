import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

import SplitHeading from './anim/SplitHeading';
import FadeIn from './anim/FadeIn';

import HeroImg from '../assets/hero-image.png';
import resume from '../assets/My_Resume.pdf';

import ReactIcon from '../assets/projects/skills/react.png';
import AngularIcon from '../assets/projects/skills/angular.png';
import NodeIcon from '../assets/projects/skills/nodejs.png';
import JsIcon from '../assets/projects/skills/javascript.png';

const stack = [
  { name: 'React', icon: ReactIcon },
  { name: 'Angular', icon: AngularIcon },
  { name: 'Node.js', icon: NodeIcon },
  { name: 'JavaScript', icon: JsIcon },
];

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-16 lg:pt-44 lg:pb-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <FadeIn immediate y={16} duration={0.6}>
              <div className="inline-flex items-center gap-2 mb-6 text-sm text-fg/70">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Available for work
              </div>
            </FadeIn>

            <SplitHeading
              as="h1"
              immediate
              className="font-display font-light text-4xl md:text-5xl lg:text-6xl text-fg leading-tight tracking-tight mb-6"
            >
              Frontend Engineer.
            </SplitHeading>

            <FadeIn immediate y={16} delay={0.3} duration={0.6}>
              <p className="max-w-xl text-fg/60 text-base md:text-lg leading-relaxed mb-8">
                Hi, I&apos;m Nagaraju Nali, a frontend engineer in India building fast,
                accessible web experiences. With 3+ years focused on modern JavaScript
                frameworks and clean, scalable interfaces, I turn complex ideas into
                functional, user-focused products.
              </p>
            </FadeIn>

            <FadeIn immediate y={16} delay={0.45} duration={0.6}>
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-fg/20 text-fg text-sm font-medium rounded-full hover:bg-fg/10 transition-colors"
                >
                  See my works
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-fg text-bg text-sm font-medium rounded-full hover:bg-fg/90 transition-colors"
                >
                  Contact Me
                  <ArrowRight size={16} />
                </a>
                <a
                  href={resume}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-fg/60 hover:text-fg transition-colors"
                >
                  <Download size={16} />
                  Resume
                </a>
              </div>
            </FadeIn>

            <FadeIn immediate y={12} delay={0.6} duration={0.5} stagger={0.08} className="flex items-center gap-3">
              {stack.map((tech) => (
                <div
                  key={tech.name}
                  className="w-10 h-10 rounded-full bg-card border border-fg/10 flex items-center justify-center"
                  title={tech.name}
                >
                  <img src={tech.icon} alt={tech.name} className="w-5 h-5 object-contain" />
                </div>
              ))}
            </FadeIn>
          </div>

          <FadeIn immediate y={24} delay={0.2} duration={0.9} className="relative">
            <div className="rounded-3xl overflow-hidden bg-card border border-fg/10 aspect-square max-w-sm mx-auto lg:ml-auto">
              <img src={HeroImg} alt="Photo of Nagaraju Nali" className="w-full h-full object-cover object-top" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
