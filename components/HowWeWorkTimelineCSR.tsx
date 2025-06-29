"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DotPattern } from "@/components/ui/dot-pattern";
import { useTranslation } from 'react-i18next';

// Limited FAQ data to show only 4 questions
export function HowWeWorkTimelineCSR() {
  const { t } = useTranslation();

  const limitedFaqData = [
    {
      question: t('timeline_faq1_q'),
      answer: t('timeline_faq1_a'),
    },
    {
      question: t('timeline_faq2_q'),
      answer: t('timeline_faq2_a'),
    },
    {
      question: t('timeline_faq3_q'),
      answer: t('timeline_faq3_a'),
    },
    {
      question: t('timeline_faq4_q'),
      answer: t('timeline_faq4_a'),
    },
  ];

  // Timeline steps data
  const timelineSteps = [
    {
      number: 1,
      title: t('timeline_step1_title'),
      description: t('timeline_step1_desc')
    },
    {
      number: 2,
      title: t('timeline_step2_title'),
      description: t('timeline_step2_desc')
    },
    {
      number: 3,
      title: t('timeline_step3_title'),
      description: t('timeline_step3_desc')
    },
    {
      number: 4,
      title: t('timeline_step4_title'),
      description: t('timeline_step4_desc')
    }
  ];

  const [activeStep, setActiveStep] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineContainerRef = useRef<HTMLDivElement | null>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [lineHeight, setLineHeight] = useState<number | null>(null);

  useEffect(() => {
    // Helper to recalculate the timeline line height
    const recalcLineHeight = () => {
      if (timelineRefs.current[0] && timelineRefs.current[timelineSteps.length - 1]) {
        const first = timelineRefs.current[0];
        const last = timelineRefs.current[timelineSteps.length - 1];
        if (first && last) {
          const firstRect = first.getBoundingClientRect();
          const lastRect = last.getBoundingClientRect();
          // The center of the circles is 24px from the top of each item
          const offset = 24;
          // Use pageYOffset for scroll position
          const containerScrollY = window.scrollY + (timelineContainerRef.current?.getBoundingClientRect().top || 0);
          const y1 = firstRect.top - containerScrollY + offset;
          const y2 = lastRect.top - containerScrollY + offset;
          // Add a small buffer to ensure the line reaches the last circle (especially on mobile)
          setLineHeight(y2 - y1 + 1);
        }
      }
    };
    
    // Manual scroll tracking for first activation
    const handleScroll = () => {
      if (!hasScrolled && timelineContainerRef.current) {
        const rect = timelineContainerRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.7) {
          setHasScrolled(true);
        }
      }
    };
    
    // Set up event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', recalcLineHeight);
    
    // Initial calculations
    recalcLineHeight();
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', recalcLineHeight);
    };
  }, [hasScrolled]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-20% 0px -10% 0px',
      threshold: 0.7,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = timelineRefs.current.findIndex(ref => ref === entry.target);
          if (index !== -1) {
            setTimeout(() => {
              setActiveStep(index + 1);
            }, 200);
          }
        }
      });
    }, options);
    timelineRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    return () => {
      timelineRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const assignRef = (index: number) => (el: HTMLDivElement | null) => {
    timelineRefs.current[index] = el;
  };

  // Toggle FAQ accordion item
  const toggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <section className="w-full bg-[var(--section-bg-light)] py-16 md:py-24 relative overflow-hidden" id="how-we-work">
      <DotPattern
        width={22}
        height={22}
        cx={1}
        cy={1}
        cr={1}
        className="absolute inset-4 w-full h-full z-0"
        style={{ fill: 'rgba(156, 163, 175, 0.5)' }}
      />
      <div className="container mx-auto px-6 relative z-10">
        {/* Responsive flex: column on mobile, row on md+ */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column - Header + CTA only (no Questions on mobile) */}
          <div className="flex flex-col">
            <div className="mb-6">
              <div className="inline-block px-[1px] py-[1px] bg-gradient-to-r from-gray-300/50 via-gray-400/70 to-gray-300/50 rounded-full mb-4">
                <div className="flex items-center px-5 py-2 bg-[#f2f2f2] rounded-full">
                  <span className="text-gray-600 text-sm font-medium">{t('timeline_how_we_work')}</span>
                </div>
              </div>
              <h2 
                className="text-4xl md:text-5xl font-medium mb-6 leading-tight"
                dangerouslySetInnerHTML={{ __html: t('timeline_title_raw_html') }}
              />
              <Link
                href="#book-call"
                className="inline-flex items-center bg-[var(--brand-color)] text-black px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium hover:bg-[var(--brand-color-hover)] transition-colors mb-12"
              >
                {t('timeline_book_call')} <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
              </Link>
            </div>
            {/* Questions Section (desktop only) */}
            <div className="mt-auto hidden md:block">
              <h3 className="text-2xl md:text-3xl font-medium mb-6">{t('timeline_questions_title')}</h3>
              <div className="space-y-3">
                {limitedFaqData.map((item, index) => (
                  <div key={index} className="bg-white border border-gray-200/90 rounded-lg shadow-[0_2px_10px_0_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
                    <div className="group">
                      <button
                        onClick={() => toggleQuestion(index)}
                        className="flex items-center justify-between w-full p-4 font-medium cursor-pointer flex-row-reverse ltr:text-left rtl:text-right"
                        aria-expanded={activeQuestion === index}
                      >
                        <span className="flex-1 text-sm md:text-base pl-2">{item.question}</span>
                        <span className={`flex-shrink-0 transition-transform duration-200 ${activeQuestion === index ? 'rotate-45' : ''}`}>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 3.33337V12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3.33301 8H12.6663" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </button>
                      {activeQuestion === index && (
                        <div className="p-4 pt-2 text-gray-600 text-xs md:text-sm">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Right Column - Vertical Timeline */}
          <div className="relative" ref={timelineContainerRef}>
            {/* This is the background line (gray) */}
            <div
              className="absolute top-6 w-1 bg-gray-200 z-0 rounded-full ltr:left-[22px] rtl:right-[22px]"
              style={{ height: lineHeight ? `${lineHeight}px` : undefined }}
            ></div>
            {/* This is the progress line that fills as you scroll (accent color) */}
            <div
              className="absolute top-6 w-1 bg-[var(--brand-color)] z-1 rounded-full transition-all duration-700 ease-in-out ltr:left-[22px] rtl:right-[22px]"
              style={{
                height: hasScrolled && lineHeight
                  ? `${Math.min(1, activeStep / timelineSteps.length) * lineHeight}px`
                  : '0%'
              }}
            ></div>
            <div className="space-y-16">
              {timelineSteps.map((step, index) => {
                const isActive = activeStep >= step.number;
                return (
                  <div 
                    key={index} 
                    className="relative min-h-[120px]" 
                    ref={assignRef(index)}
                  >
                    {/* Circle with number */}
                    <div 
                      className={`absolute w-10 h-10 flex items-center justify-center rounded-full z-10 transition-all duration-500 ease-in-out ltr:left-[22px] ltr:-translate-x-1/2 rtl:right-[22px] rtl:translate-x-1/2 ${
                        isActive ? 'bg-[var(--brand-color)]' : 'bg-white border-2 border-gray-200'
                      }`}
                      style={{ top: '24px' }}
                    >
                      <span className={`text-sm font-medium ${isActive ? 'text-black' : 'text-gray-400'}`}>
                        {step.number}
                      </span>
                    </div>
                    {/* Content card */}
                    <div className="ltr:ml-16 rtl:mr-16">
                      <div 
                        className={`p-5 rounded-lg ${
                          isActive 
                            ? 'bg-white border border-[var(--brand-color)] shadow-[0_4px_20px_rgba(0,0,0,0.08)]' 
                            : 'bg-white/80 border border-gray-200/90 shadow-[0_2px_10px_0_rgba(0,0,0,0.03)]'
                        }`}
                      >
                        <h3 className={`text-xl font-medium mb-2 ${isActive ? 'text-black' : 'text-gray-500'}`}>
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Questions Section (mobile only) */}
            <div className="block md:hidden mt-12">
              <h3 className="text-2xl font-medium mb-6">Questions</h3>
              <div className="space-y-3">
                {limitedFaqData.map((item, index) => (
                  <div key={index} className="bg-white border border-gray-200/90 rounded-lg shadow-[0_2px_10px_0_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
                    <div className="group">
                      <button
                        onClick={() => toggleQuestion(index)}
                        className="flex items-center justify-between w-full p-4 font-medium cursor-pointer flex-row-reverse ltr:text-left rtl:text-right"
                        aria-expanded={activeQuestion === index}
                      >
                        <span className="flex-1 text-sm md:text-base pl-2">{item.question}</span>
                        <span className={`flex-shrink-0 transition-transform duration-200 ${activeQuestion === index ? 'rotate-45' : ''}`}>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 3.33337V12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3.33301 8H12.6663" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </button>
                      {activeQuestion === index && (
                        <div className="p-4 pt-2 text-gray-600 text-xs md:text-sm">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 