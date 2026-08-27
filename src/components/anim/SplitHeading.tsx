import React, { useLayoutEffect, useRef } from 'react';
import { gsap, SplitText } from '../../lib/gsap';

interface SplitHeadingProps {
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
  children: string;
  /** Animate immediately on mount instead of waiting for scroll into view (use for above-the-fold headings). */
  immediate?: boolean;
  delay?: number;
}

const SplitHeading: React.FC<SplitHeadingProps> = ({
  as: Tag = 'h2',
  className = '',
  children,
  immediate = false,
  delay = 0,
}) => {
  const ref = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    let split: SplitText | null = null;
    let tween: gsap.core.Tween | null = null;
    let cancelled = false;

    document.fonts.ready.then(() => {
      if (cancelled || !el) return;

      split = new SplitText(el, { type: 'words, chars' });
      gsap.set(split.chars, { opacity: 0, y: '0.6em' });

      tween = gsap.to(split.chars, {
        opacity: 1,
        y: '0em',
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.02,
        delay,
        scrollTrigger: immediate
          ? undefined
          : {
              trigger: el,
              start: 'top 85%',
              once: true,
            },
      });
    });

    return () => {
      cancelled = true;
      tween?.scrollTrigger?.kill();
      tween?.kill();
      split?.revert();
    };
  }, [children, immediate, delay]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
};

export default SplitHeading;
