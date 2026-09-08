import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import SplitHeading from '../components/anim/SplitHeading';
import FadeIn from '../components/anim/FadeIn';
import SiteMockup, { MOCKUP_COLORS } from '../components/mockups/SiteMockup';
import Seo, { SITE_URL } from '../components/Seo';
import { getServiceBySlug, services } from '../data/services';

const ServiceDetailPage: React.FC = () => {
  const { serviceSlug } = useParams();
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const currentIndex = services.findIndex((s) => s.slug === service.slug);
  const prev = services[currentIndex - 1];
  const next = services[currentIndex + 1];

  return (
    <section className="pt-32 pb-20 lg:pt-44 lg:pb-28">
      <Seo
        title={service.name}
        description={service.description}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: service.name,
          description: service.description,
          provider: {
            '@type': 'Person',
            name: 'Nagaraju Nali',
            url: SITE_URL,
          },
          url: `${SITE_URL}/services/${service.slug}`,
        }}
      />
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <FadeIn immediate y={12} duration={0.5}>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm text-fg/50 hover:text-fg transition-colors mb-10"
          >
            <ArrowLeft size={16} />
            Back to services
          </Link>
        </FadeIn>

        <FadeIn immediate y={16} className="flex items-center gap-4 mb-5">
          <div className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center shrink-0`}>
            <service.Icon size={24} className={service.iconText} />
          </div>
          <div>
            <p className="text-xs tracking-widest text-fg/40 uppercase mb-1">Service</p>
            <SplitHeading as="h1" immediate className="font-display font-light text-2xl md:text-3xl text-fg">
              {service.name}
            </SplitHeading>
          </div>
        </FadeIn>

        <FadeIn immediate y={12} delay={0.1}>
          <p className="text-fg/60 leading-relaxed max-w-2xl mb-4">{service.description}</p>
        </FadeIn>

        <FadeIn immediate y={12} delay={0.15} className="flex flex-wrap gap-2 mb-14">
          {service.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-full bg-card border border-fg/10 text-fg/60 text-xs font-medium">
              {tag}
            </span>
          ))}
        </FadeIn>

        <FadeIn immediate y={12} delay={0.18} className="mb-6">
          <p className="text-xs tracking-widest text-fg/40 uppercase">Example designs across industries</p>
        </FadeIn>

        <FadeIn immediate y={20} delay={0.2} stagger={0.06} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {service.industries.map((item, i) => (
            <div key={item.industry} className="rounded-2xl bg-card border border-fg/10 p-4 flex flex-col gap-3">
              <SiteMockup layout={item.layout} color={MOCKUP_COLORS[i % MOCKUP_COLORS.length]} title={item.industry} />
              <div>
                <p className="text-fg text-sm font-medium mb-1">{item.industry}</p>
                <p className="text-fg/50 text-xs leading-relaxed">{item.example}</p>
              </div>
            </div>
          ))}
        </FadeIn>

        <FadeIn immediate y={16} delay={0.3} className="mt-16">
          <div className="relative rounded-3xl bg-card border border-fg/10 px-8 py-12 overflow-hidden text-center">
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-16 left-1/2 -translate-x-1/2 w-96 h-40 rounded-full bg-accent/10 blur-3xl"
            />
            <p className="relative text-fg/50 max-w-xl mx-auto mb-6">
              Want something like this for your industry? Let&apos;s talk about your project.
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

        <div className="flex items-center justify-between mt-14 pt-8 border-t border-fg/10">
          {prev ? (
            <Link
              to={`/services/${prev.slug}`}
              className="inline-flex items-center gap-2 text-sm text-fg/60 hover:text-fg transition-colors"
            >
              <ArrowLeft size={16} />
              {prev.name}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to={`/services/${next.slug}`}
              className="inline-flex items-center gap-2 text-sm text-fg/60 hover:text-fg transition-colors"
            >
              {next.name}
              <ArrowRight size={16} />
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailPage;
