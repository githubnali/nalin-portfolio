import React from 'react';

import SplitHeading from './anim/SplitHeading';
import FadeIn from './anim/FadeIn';

import HTML from '../assets/projects/skills/html.png';
import Css from '../assets/projects/skills/css.png';
import JS from '../assets/projects/skills/javascript.png';
import Reactjs from '../assets/projects/skills/react.png';
import Angular from '../assets/projects/skills/angular.png';
import Nodejs from '../assets/projects/skills/nodejs.png';
import Express from '../assets/projects/skills/express.png';
import Typescript from '../assets/projects/skills/typescript.png';
import Tailwind from '../assets/projects/skills/tailwind.png';
import Figma from '../assets/projects/skills/figma.png';
import Github from '../assets/projects/skills/github.png';
import HTML_CSS from '../assets/projects/skills/html-css.png';

interface Skill {
  name: string;
  icon: string;
}

const skills: Skill[] = [
  { name: 'HTML5', icon: HTML },
  { name: 'CSS3', icon: Css },
  { name: 'JavaScript', icon: JS },
  { name: 'React', icon: Reactjs },
  { name: 'Angular', icon: Angular },
  { name: 'Node.js', icon: Nodejs },
  { name: 'Express', icon: Express },
  { name: 'TypeScript', icon: Typescript },
  { name: 'Tailwind CSS', icon: Tailwind },
  { name: 'Responsive Design', icon: HTML_CSS },
  { name: 'Figma', icon: Figma },
  { name: 'Git & GitHub', icon: Github },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 lg:py-28 border-t border-fg/10">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <FadeIn y={12}>
            <p className="text-xs tracking-widest text-fg/50 uppercase mb-3">Tech Stack</p>
          </FadeIn>
          <SplitHeading as="h2" className="font-display font-light text-3xl md:text-4xl text-fg mb-4">
            Tools I Build With
          </SplitHeading>
          <FadeIn y={12} delay={0.15}>
            <p className="text-fg/50 max-w-xl mx-auto">
              A curated set of technologies I rely on to build modern web experiences
            </p>
          </FadeIn>
        </div>

        <FadeIn y={16} stagger={0.04} className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="inline-flex items-center gap-2 px-5 py-3 bg-card border border-fg/10 rounded-full"
            >
              <img src={skill.icon} alt="" className="w-5 h-5 object-contain" />
              <span className="text-sm text-fg/90">{skill.name}</span>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
};

export default Skills;
