import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

import SplitHeading from '../components/anim/SplitHeading';
import FadeIn from '../components/anim/FadeIn';
import { services } from '../data/services';

const ServicesPage: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[30rem] rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        <FadeIn immediate y={12} duration={0.5}>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-fg/50 hover:text-fg transition-colors mb-10"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>
        </FadeIn>

        <div className="text-center mb-16">
          <FadeIn immediate y={12}>
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full bg-card border border-fg/10 text-xs tracking-widest text-fg/60 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Services
            </div>
          </FadeIn>
          <SplitHeading
            as="h1"
            immediate
            className="font-display font-light text-3xl md:text-4xl lg:text-5xl text-fg mb-4"
          >
            What I Can Build For You
          </SplitHeading>
          <FadeIn immediate y={12} delay={0.15}>
            <p className="text-fg/50 max-w-xl mx-auto">
              From marketing sites to fullstack products - here&apos;s what I can take on with my frontend and
              backend skill set. Open a service to see example designs across industries.
            </p>
          </FadeIn>
        </div>

        <FadeIn immediate y={20} delay={0.2} stagger={0.06} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className={`group relative flex flex-col gap-4 text-left rounded-2xl bg-card border border-fg/10 p-6 transition-all duration-300 hover:-translate-y-1 cursor-pointer ${service.accent} ${service.glow}`}
            >
              <span className="absolute top-5 right-6 font-display text-3xl font-light text-fg/[0.06] select-none">
                {String(i + 1).padStart(2, '0')}
              </span>

              <div
                className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110`}
              >
                <service.Icon size={20} className={service.iconText} />
              </div>

              <div>
                <h3 className="text-fg text-base font-medium mb-2">{service.name}</h3>
                <p className="text-fg/50 text-sm leading-relaxed">{service.description}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-fg/10">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full bg-fg/5 text-fg/50 text-[11px] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <span className="mt-auto inline-flex items-center gap-1.5 text-xs text-fg/40 group-hover:text-fg transition-colors">
                <Sparkles size={12} />
                See example designs
              </span>
            </Link>
          ))}
        </FadeIn>

        <FadeIn immediate y={16} delay={0.3} className="mt-16 text-center">
          <div className="relative rounded-3xl bg-card border border-fg/10 px-8 py-12 overflow-hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-16 left-1/2 -translate-x-1/2 w-96 h-40 rounded-full bg-accent/10 blur-3xl"
            />
            <p className="relative text-fg/50 max-w-xl mx-auto mb-6">
              Have a project in mind that fits one of these, or something adjacent? Let&apos;s talk about it.
            </p>
            <Link
              to="/#contact"
              className="relative inline-flex items-center gap-2 px-6 py-3 bg-fg text-bg text-sm font-medium rounded-full hover:bg-fg/90 transition-colors"
            >
              Get in touch
              <ArrowRight size={16} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ServicesPage;
