import { useRef, useEffect, useCallback } from 'react';
import { ScrollDirection } from '@interfaces';

const useScrollFadeIn = (
  direction: ScrollDirection = 'up',
  duration: number = 1,
  delay: number = 0,
  threshold: number = 0.65
) => {
  const element = useRef<HTMLDivElement | null>(null);

  const handleDirection = (name: ScrollDirection) => {
    switch (name) {
      case 'up':
        return 'translate3d(0, 50%, 0)';
      case 'down':
        return 'translate3d(0, -50%, 0)';
      case 'left':
        return 'translate3d(50%, 0, 0)';
      case 'right':
        return 'translate3d(-50%, 0, 0)';
      default:
        return;
    }
  };

  const onScroll = useCallback(
    ([entry]) => {
      if (element.current) {
        const { current } = element;
        if (entry.isIntersecting) {
          current.style.transitionProperty = 'all';
          current.style.transitionDuration = `${duration}s`;
          current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
          current.style.transitionDelay = `${delay}s`;
          current.style.opacity = '1';
          current.style.transform = 'translate3d(0, 0, 0)';
        } else {
          // TODO: 애니메이션 초기화해서 다시 스크롤할 때도 재현되게
        }
      }
    },
    [delay, duration]
  );

  useEffect(() => {
    let observer: IntersectionObserver;

    if (element.current) {
      observer = new IntersectionObserver(onScroll, { threshold });
      observer.observe(element.current);
    }

    return () => observer && observer.disconnect();
  }, [onScroll]);

  return {
    ref: element,
    style: { opacity: 0, transform: handleDirection(direction) },
  };
};

export default useScrollFadeIn;
