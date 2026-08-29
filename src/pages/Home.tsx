import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ExperienceTimeline from '../components/Experience';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <ExperienceTimeline />
      <Contact />
    </>
  );
};

export default Home;
