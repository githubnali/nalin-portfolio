import React, { useState } from 'react';

import HTML from '../assets/projects/skills/html.png';
import JS from '../assets/projects/skills/javascript.png';
import HTML_CSS from '../assets/projects/skills/html-css.png';
import Reactjs from '../assets/projects/skills/react.png';
import Angular from '../assets/projects/skills/angular.png';
import Nodejs from '../assets/projects/skills/nodejs.png';
import Typescript from '../assets/projects/skills/typescript.png';
import Tailwind from '../assets/projects/skills/tailwind.png';
import Figma from '../assets/projects/skills/figma.png';
import Github from '../assets/projects/skills/github.png';
import Express from '../assets/projects/skills/express.png';
import Css from '../assets/projects/skills/css.png';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'other';
  img: string
}

const Skills: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const skills: Skill[] = [
    { name: 'JavaScript', level: 65, category: 'frontend', img: JS },
    { name: 'React', level: 49, category: 'frontend', img: Reactjs},
    { name: 'Angular', level: 25, category: 'frontend', img: Angular},
    { name: 'HTML & CSS', level: 70, category: 'frontend', img: Css},
    { name: 'TypeScript', level: 10, category: 'frontend', img: Typescript},
    { name: 'Tailwind CSS', level: 75, category: 'frontend', img: Tailwind},
    { name: 'Resp Design', level: 80, category: 'frontend', img: HTML_CSS },
    { name: 'Node.js', level: 30, category: 'backend', img: Nodejs },
    { name: 'Express', level: 10, category: 'backend', img: Express },
    { name: 'Figma', level: 15, category: 'design', img: Figma},
    { name: 'Git & GitHub', level: 50, category: 'other', img: Github },
  ];
  
  const filteredSkills = filter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === filter);
  
  return (
    <>
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Technical <span className="text-amber-700 dark:text-amber-500">Expertise</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-amber-700 dark:bg-amber-500 mx-auto"></div>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
            {['all', 'frontend', 'backend', 'design', 'other'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  filter === category 
                    ? 'bg-white dark:bg-gray-700 text-amber-700 dark:text-amber-500 shadow-sm' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredSkills.map((skill) => (
            <div 
              key={skill.name} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex flex-col items-center mb-3 gap-3">
                <img src={skill.img} alt={skill.name} className='w-20 h-20' />
                <div className='flex gap-2'>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {skill.name} -
                </h3>
                <span className="text-xl font-semibold text-amber-700 dark:text-amber-500">
                  {skill.level}%
                </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


    </>
    
  );
};

export default Skills;