"use client";

import { useEffect } from "react";

export function ScrollAnimations() {
  useEffect(() => {
    const fadeInSections = document.querySelectorAll('.fade-in-section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Optional: Stop observing once animation is triggered
          // observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });
    
    fadeInSections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      fadeInSections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);
  
  return null;
} 