import React from 'react';
import { ArrowRight, Github } from 'lucide-react';
import SplitHeading from './anim/SplitHeading';
import FadeIn from './anim/FadeIn';
import Taskmate from '../assets/projects/taskmate.webp';
import Cinemate from '../assets/projects/cinemate.webp';
import MomsKitchen from '../assets/projects/moms-kitchen.webp';
import NetflixGPT from '../assets/projects/netflix-gpt.png';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Netflix GPT',
    description:
      'A Netflix clone with Firebase authentication and GPT-powered movie search using the TMDB API.',
    image: NetflixGPT,
    liveUrl: 'https://netflix-gpt-ten-alpha.vercel.app/',
    githubUrl: 'https://github.com/githubnali/Netflix-GPT',
  },
  {
    id: 2,
    title: "Mom's Kitchen Restaurant",
    description:
      'A responsive restaurant website built with React and Tailwind CSS, featuring a modern design and user-friendly interface.',
    image: MomsKitchen,
    liveUrl: 'https://moms-kitchen.in/',
    githubUrl: 'https://github.com/githubnali/moms-kitchen',
  },
  {
    id: 3,
    title: 'Task Mate',
    description: 'A smart task manager app to organize, track, and complete tasks efficiently every day.',
    image: Taskmate,
    liveUrl: 'https://nalin-taskmate.netlify.app/',
    githubUrl: 'https://github.com/githubnali/nalin-taskmate',
  },
  {
    id: 4,
    title: 'Cinemate',
    description: 'Discover popular, top-rated, and upcoming movies with details using the TMDB API in a sleek React web app.',
    image: Cinemate,
    liveUrl: 'https://nalin-cinemate.netlify.app/movies/popular',
    githubUrl: 'https://github.com/githubnali/nalin-cinemate',
  },
  {
    id: 5,
    title: 'Sass Website Design Demo',
    description: 'A sample assignment website built using HTML, CSS and JavaScript.',
    image:
      'https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    liveUrl: 'https://nalin-whitepace.netlify.app/',
    githubUrl: '#',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 lg:py-28 border-t border-fg/10">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <FadeIn y={12}>
            <p className="text-xs tracking-widest text-fg/50 uppercase mb-3">Projects</p>
          </FadeIn>
          <SplitHeading as="h2" className="font-display font-light text-3xl md:text-4xl text-fg mb-4">
            Projects I&apos;ve Shipped
          </SplitHeading>
          <FadeIn y={12} delay={0.15}>
            <p className="text-fg/50 max-w-xl mx-auto">
              A range of projects demonstrating how I turn ideas into functional experiences
            </p>
          </FadeIn>
        </div>

        <FadeIn y={28} stagger={0.15} className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="rounded-2xl bg-card border border-fg/10 overflow-hidden">
              <div className="p-3">
                <div className="rounded-xl overflow-hidden aspect-video bg-fg/5">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <h3 className="font-display text-xl text-fg mb-3">{project.title}</h3>
                <p className="text-fg/50 text-sm leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-fg/20 text-fg text-sm font-medium rounded-full hover:bg-fg/10 transition-colors"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-fg text-bg text-sm font-medium rounded-full hover:bg-fg/90 transition-colors"
                  >
                    Live Website
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
};

export default Projects;
