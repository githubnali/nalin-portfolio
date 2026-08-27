import React from 'react';
import { Quote } from 'lucide-react';
import SplitHeading from './anim/SplitHeading';
import FadeIn from './anim/FadeIn';

// Placeholder testimonials - swap in real client/colleague feedback when available.
interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Ananya Rao',
    role: 'Product Manager',
    quote:
      'Working with Nagaraju was seamless. His attention to detail and ability to translate design into smooth, functional interfaces really stood out.',
    avatar: 'https://i.pravatar.cc/150?img=47',
  },
  {
    name: 'Rohit Sharma',
    role: 'UI/UX Designer',
    quote:
      'He has a strong eye for design and knows how to bring ideas to life on the web. Collaboration with him is always easy and productive.',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    name: 'Priya Menon',
    role: 'Engineering Lead',
    quote:
      'Nagaraju writes clean, maintainable code. He is thoughtful, consistent, and always focused on performance and user experience.',
    avatar: 'https://i.pravatar.cc/150?img=32',
  },
  {
    name: 'Karthik Iyer',
    role: 'Backend Engineer',
    quote:
      'Reliable and detail-oriented. He takes feedback well and continuously improves both the product and his own workflow.',
    avatar: 'https://i.pravatar.cc/150?img=51',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 border-t border-fg/10">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <FadeIn y={12}>
            <p className="text-xs tracking-widest text-fg/50 uppercase mb-3">Testimonials</p>
          </FadeIn>
          <SplitHeading as="h2" className="font-display font-light text-3xl md:text-4xl text-fg mb-4">
            Don&apos;t just take my words for it
          </SplitHeading>
          <FadeIn y={12} delay={0.15}>
            <p className="text-fg/50 max-w-xl mx-auto">
              Words from people who&apos;ve worked with me and experienced my process and results firsthand
            </p>
          </FadeIn>
        </div>

        <FadeIn y={24} stagger={0.15} className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl bg-card border border-fg/10 p-6">
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt="" className="w-11 h-11 rounded-full object-cover" />
                  <div>
                    <h3 className="text-fg font-medium text-sm">{t.name}</h3>
                    <p className="text-fg/50 text-xs">{t.role}</p>
                  </div>
                </div>
                <Quote size={28} className="text-fg/15 shrink-0" />
              </div>
              <p className="text-fg/60 text-sm leading-relaxed">{t.quote}</p>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
};

export default Testimonials;
