import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Seo from '../components/Seo';

const NotFoundPage: React.FC = () => {
  return (
    <section className="pt-32 pb-20 lg:pt-44 lg:pb-28">
      <Seo title="Page Not Found" description="The page you're looking for doesn't exist." noIndex />
      <div className="max-w-2xl mx-auto px-6 lg:px-12 text-center">
        <p className="text-xs tracking-widest text-fg/40 uppercase mb-4">404</p>
        <h1 className="font-display font-light text-3xl md:text-4xl text-fg mb-4">Page not found</h1>
        <p className="text-fg/50 mb-10">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-fg text-bg text-sm font-medium rounded-full hover:bg-fg/90 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
