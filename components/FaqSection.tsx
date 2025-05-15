"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/custom-accordion";
import { Plus, X } from "lucide-react";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

const faqData = [
  {
    question: "How long does it take to get my AI solution?",
    answer:
      "We typically deliver your custom AI solution within a 2-week timeframe, from initial consultation to full implementation. We\'re committed to efficient and timely delivery, ensuring you can start benefiting from AI enhancements quickly. Throughout the development process, we maintain transparent communication, providing regular updates on our progress.",
  },
  {
    question: "How do you ensure the quality of your solutions?",
    answer:
      "Quality is paramount. Every solution undergoes a rigorous testing period of at least one week to ensure robustness and reliability. For those who choose our maintenance package, we provide ongoing updates, performance enhancements, and proactive bug fixes to keep your AI systems operating at peak efficiency.",
  },
  {
    question: "How do you tailor your AI to my needs?",
    answer:
      "Our process begins with a deep dive into your specific business requirements, operational workflows, and strategic goals. We don\'t offer one-size-fits-all solutions. Instead, we meticulously analyze your unique challenges and opportunities to design and build an AI system that integrates seamlessly and delivers measurable results precisely where you need them most.",
  },
  {
    question: "Do you offer ongoing maintenance and updates?",
    answer:
      "Absolutely. We offer an optional, comprehensive maintenance package designed to ensure your AI solutions evolve with your business. This includes continuous performance monitoring, regular system updates, new feature rollouts based on the latest AI advancements, and prompt bug fixes, guaranteeing long-term value and optimal performance.",
  },
];

export function FaqSection() {
  // Add styles for state-based icon visibility
  React.useEffect(() => {
    if (!document.getElementById('accordion-icon-styles')) {
      const style = document.createElement('style');
      style.id = 'accordion-icon-styles';
      style.innerHTML = `
        [data-state="open"] .accordion-plus-icon {
          display: none;
        }
        [data-state="closed"] .accordion-x-icon {
          display: none;
        }
      `;
      document.head.appendChild(style);
      
      return () => {
        const style = document.getElementById('accordion-icon-styles');
        if (style) document.head.removeChild(style);
      };
    }
  }, []);

  return (
    <section id="faq" className="w-full bg-[var(--section-bg-light)] py-0 pt-0 pb-16 md:pb-24 relative overflow-hidden -mt-2">
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
        <div className="border border-gray-200/80 bg-gradient-to-b from-white to-gray-50/30 p-8 md:p-12 rounded-xl backdrop-blur-sm shadow-[0_4px_14px_0_rgba(0,0,0,0.05)]">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start">
            <div className="md:col-span-1">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                Questions
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Common questions about our services.
              </p>
            </div>

            <div className="md:col-span-2">
              <Accordion
                type="single"
                collapsible
                className="w-full space-y-4"
                defaultValue="item-3"
              >
                {faqData.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white border border-gray-200/90 rounded-lg transition-all hover:border-gray-300/90 shadow-[0_2px_10px_0_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
                  >
                    <AccordionTrigger className="flex items-center justify-between w-full p-5 md:p-6 text-left text-gray-900 font-medium hover:no-underline group text-base md:text-lg">
                      <span className="flex-1 pr-2">{item.question}</span>
                      <div className="flex-shrink-0">
                        <Plus className="h-5 w-5 text-gray-500 group-hover:text-[var(--brand-color-text)] transition-colors accordion-plus-icon" />
                        <X className="h-5 w-5 text-gray-500 group-hover:text-[var(--brand-color-text)] transition-colors accordion-x-icon" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-5 pt-2 md:p-6 md:pt-2 text-gray-600 text-sm md:text-[15px] leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 