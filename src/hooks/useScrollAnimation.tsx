import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('fade-in')) {
            entry.target.classList.add('visible');
          }
          if (entry.target.classList.contains('stagger-item')) {
            (entry.target as HTMLElement).style.animationPlayState = 'running';
          }
        }
      });
    }, observerOptions);

    // Observe all fade-in and stagger-item elements
    const fadeElements = document.querySelectorAll('.fade-in, .stagger-item');
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};

export default useScrollAnimation;