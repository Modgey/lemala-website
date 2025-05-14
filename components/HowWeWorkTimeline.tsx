"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DotPattern } from "@/components/ui/dot-pattern";

// Limited FAQ data to show only 4 questions
const limitedFaqData = [
  {
    question: "What platforms do Lemala's AI services work with?",
    answer:
      "Our AI solutions are designed to be flexible and can integrate with a wide variety of platforms, including popular CRMs, ERP systems, e-commerce platforms, and custom-built applications. We work closely with you to ensure seamless integration.",
  },
  {
    question: "How are Lemala's services priced?",
    answer:
      "Pricing is tailored to the specific solution and complexity of your needs. We offer a transparent pricing model, which typically involves an initial setup fee and a recurring subscription based on usage or the scope of services. We provide detailed quotes after an initial consultation.",
  },
  {
    question: "How long does it take to implement Lemala's AI services?",
    answer:
      "The timeline for implementing our AI solutions can vary depending on the service you choose. Generally, projects can take anywhere from 3 to 6 weeks from start to finish. We pride ourselves on efficient and timely service delivery, ensuring your business can start reaping the benefits of AI as soon as possible.",
  },
  {
    question: "Does Lemala offer ongoing management and improvement services?",
    answer:
      "Yes, we offer ongoing support, management, and continuous improvement services to ensure your AI solutions remain effective, up-to-date, and aligned with your evolving business goals. This includes performance monitoring, updates, and optimizations.",
  },
];

// Timeline steps data
const timelineSteps = [
  {
    number: 1,
    title: "Discovery",
    description: "We learn about your business processes, pain points, and objectives to identify the perfect AI solution."
  },
  {
    number: 2,
    title: "Tailored Solution",
    description: "Our team designs and validates a custom AI solution concept to handle your specific tasks and workflows."
  },
  {
    number: 3,
    title: "Development",
    description: "We build and train your AI solution with your data, ensuring it's optimized for your unique needs."
  },
  {
    number: 4,
    title: "Integration",
    description: "We seamlessly integrate the AI solution into your existing systems and provide training for your team."
  }
];

export function HowWeWorkTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineContainerRef = useRef<HTMLDivElement | null>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [lineHeight, setLineHeight] = useState<number | null>(null);

  useEffect(() => {
    // Manual scroll tracking for first activation
    const handleScroll = () => {
      if (!hasScrolled && timelineContainerRef.current) {
        const rect = timelineContainerRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.7) {
          setHasScrolled(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  useEffect(() => {
    // Calculate the distance between the first and last timeline points
    if (timelineRefs.current[0] && timelineRefs.current[timelineSteps.length - 1]) {
      const first = timelineRefs.current[0];
      const last = timelineRefs.current[timelineSteps.length - 1];
      if (first && last) {
        const firstRect = first.getBoundingClientRect();
        const lastRect = last.getBoundingClientRect();
        // The center of the circles is 24px from the top of each item
        const offset = 24;
        const containerScrollY = window.scrollY + (timelineContainerRef.current?.getBoundingClientRect().top || 0);
        const y1 = firstRect.top - containerScrollY + offset;
        const y2 = lastRect.top - containerScrollY + offset;
        setLineHeight(y2 - y1);
      }
    }
  }, [hasScrolled, activeStep]);

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column - Title and CTA */}
          <div className="flex flex-col">
            <div className="mb-6">
              <div className="inline-block px-[1px] py-[1px] bg-gradient-to-r from-gray-300/50 via-gray-400/70 to-gray-300/50 rounded-full mb-4">
                <div className="flex items-center px-5 py-2 bg-[#f2f2f2] rounded-full">
                  <span className="text-gray-600 text-sm font-medium">How we work</span>
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-medium mb-6 leading-tight">
                Get your tailored AI solution<br />in just 2 weeks
              </h2>
              
              <Link
                href="#demo"
                className="inline-flex items-center bg-[var(--brand-color)] text-black px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium hover:bg-[var(--brand-color-hover)] transition-colors mb-12"
              >
                Book A Call <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
              </Link>
            </div>
            
            {/* Questions Section */}
            <div className="mt-auto">
              <h3 className="text-2xl md:text-3xl font-medium mb-6">Questions</h3>
              <div className="space-y-3">
                {limitedFaqData.map((item, index) => (
                  <div key={index} className="bg-white border border-gray-200/90 rounded-lg shadow-[0_2px_10px_0_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
                    <details className="group">
                      <summary className="flex items-center justify-between w-full p-4 text-left text-gray-900 font-medium cursor-pointer">
                        <span className="flex-1 pr-2 text-sm md:text-base">{item.question}</span>
                        <span className="flex-shrink-0 transition-transform duration-200 group-open:rotate-45">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 3.33337V12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3.33301 8H12.6663" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </summary>
                      <div className="p-4 pt-2 text-gray-600 text-xs md:text-sm">
                        {item.answer}
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - Vertical Timeline */}
          <div className="relative" ref={timelineContainerRef}>
            {/* This is the background line (gray) */}
            <div
              className="absolute left-[22px] top-6 w-1 bg-gray-200 z-0 rounded-full"
              style={{ height: lineHeight ? `${lineHeight}px` : undefined }}
            ></div>
            
            {/* This is the progress line that fills as you scroll (accent color) */}
            <div
              className="absolute left-[22px] top-6 w-1 bg-[var(--brand-color)] z-1 rounded-full transition-all duration-700 ease-in-out"
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
                      className={`absolute left-[22px] w-10 h-10 -translate-x-1/2 flex items-center justify-center rounded-full z-10 transition-all duration-500 ease-in-out ${
                        isActive ? 'bg-[var(--brand-color)]' : 'bg-white border-2 border-gray-200'
                      }`}
                      style={{ top: '24px' }}
                    >
                      <span className={`text-sm font-medium ${isActive ? 'text-black' : 'text-gray-400'}`}>
                        {step.number}
                      </span>
                    </div>
                    
                    {/* Content card */}
                    <div className="ml-16">
                      <div 
                        className={`transition-all duration-500 p-5 rounded-lg ${
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
          </div>
        </div>
      </div>
    </section>
  );
} 