import React, { useLayoutEffect, useRef, ReactNode } from 'react';
import { gsap } from '../../lib/gsap';

interface FadeInProps {
  children: ReactNode;
  className?: string;
  id?: string;
  y?: number;
  delay?: number;
  duration?: number;
  /** Stagger delay between direct children (animates each child individually instead of the wrapper). */
  stagger?: number;
  /** Animate immediately on mount instead of waiting for scroll into view. */
  immediate?: boolean;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  className = '',
  id,
  y = 24,
  delay = 0,
  duration = 0.7,
  stagger,
  immediate = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets: Element | Element[] = stagger ? Array.from(el.children) : el;

    gsap.set(targets, { opacity: 0, y });

    const tween = gsap.to(targets, {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: 'power3.out',
      stagger,
      scrollTrigger: immediate
        ? undefined
        : {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [y, delay, duration, stagger, immediate]);

  return (
    <div ref={ref} id={id} className={className}>
      {children}
    </div>
  );
};

export default FadeIn;
