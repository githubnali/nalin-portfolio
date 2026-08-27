import React, { useState } from 'react';
import { ArrowRight, Mail, Phone, MapPin, Send } from 'lucide-react';
import SplitHeading from './anim/SplitHeading';
import FadeIn from './anim/FadeIn';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const resp = await fetch('https://formspree.io/f/mldbyavz', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (resp.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 border-t border-fg/10">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* CTA banner */}
        <div
          className="relative rounded-3xl overflow-hidden border border-fg/10 px-6 py-20 md:py-28 text-center mb-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(10,10,10,0.6), rgba(10,10,10,0.75)), url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          }}
        >
          <SplitHeading as="h2" className="font-display font-light text-3xl md:text-4xl text-white mb-4">
            Let&apos;s Build Something Great
          </SplitHeading>
          <FadeIn y={12} delay={0.15}>
            <p className="text-white/70 max-w-lg mx-auto mb-8">
              Let&apos;s bring your ideas to life with thoughtful design and code
            </p>
          </FadeIn>
          <FadeIn y={12} delay={0.3}>
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-colors"
            >
              Contact Me
              <ArrowRight size={16} />
            </a>
          </FadeIn>
        </div>

        <FadeIn y={24} stagger={0.15} id="contact-form" className="grid lg:grid-cols-2 gap-8 scroll-mt-24">
          <div className="rounded-2xl bg-card border border-fg/10 p-8">
            <h3 className="font-display text-xl text-fg mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-fg/10 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-fg" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-fg mb-0.5">Email</h4>
                  <a
                    href="mailto:nagarajunnr341@gmail.com"
                    className="text-sm text-fg/50 hover:text-fg transition-colors"
                  >
                    nagarajunnr341@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-fg/10 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-fg" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-fg mb-0.5">Phone</h4>
                  <a href="tel:+919182131863" className="text-sm text-fg/50 hover:text-fg transition-colors">
                    +91 91821 31863
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-fg/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-fg" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-fg mb-0.5">Location</h4>
                  <p className="text-sm text-fg/50">Bengaluru, Karnataka, India</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-fg mb-4">Connect With Me</h3>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/nagaraju-nali-98a037172/"
                  className="w-10 h-10 rounded-full bg-fg/10 flex items-center justify-center text-fg hover:bg-fg hover:text-bg transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/githubnali/githubnali"
                  className="w-10 h-10 rounded-full bg-fg/10 flex items-center justify-center text-fg hover:bg-fg hover:text-bg transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-card border border-fg/10 p-8">
            <h3 className="font-display text-xl text-fg mb-6">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs text-fg/50 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-fg/10 bg-bg text-fg placeholder:text-fg/30 focus:outline-none focus:ring-1 focus:ring-fg/40 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs text-fg/50 mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-fg/10 bg-bg text-fg placeholder:text-fg/30 focus:outline-none focus:ring-1 focus:ring-fg/40 transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs text-fg/50 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-fg/10 bg-bg text-fg placeholder:text-fg/30 focus:outline-none focus:ring-1 focus:ring-fg/40 transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs text-fg/50 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-fg/10 bg-bg text-fg placeholder:text-fg/30 focus:outline-none focus:ring-1 focus:ring-fg/40 resize-none transition-colors"
                  placeholder="I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-fg text-bg text-sm font-medium rounded-full hover:bg-fg/90 transition-colors ${
                  isSubmitting ? 'opacity-60 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={16} />
                    Get in Touch
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="p-3 rounded-xl bg-accent/10 text-accent text-sm text-center">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-3 rounded-xl bg-red-500/10 text-red-400 text-sm text-center">
                  Oops! Something went wrong. Please try again later.
                </div>
              )}
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
