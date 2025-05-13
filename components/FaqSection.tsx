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
    question: "Where can I see examples of Lemala's work?",
    answer:
      "We have several case studies and success stories from various industries. Please visit our 'Portfolio' or 'Case Studies' section, or contact us for specific examples relevant to your business needs.",
  },
  {
    question: "How long does it take to implement Lemala's AI services?",
    answer:
      "The timeline for implementing our AI solutions can vary depending on the service you choose. Generally, projects can take anywhere from 3 to 6 weeks from start to finish. We pride ourselves on efficient and timely service delivery, ensuring that your e-commerce business can start reaping the benefits of AI as soon as possible. Our team will work closely with you to establish a clear timeline and keep you updated every step of the way.",
  },
  {
    question: "Does Lemala offer ongoing management and improvement services?",
    answer:
      "Yes, we offer ongoing support, management, and continuous improvement services to ensure your AI solutions remain effective, up-to-date, and aligned with your evolving business goals. This includes performance monitoring, updates, and optimizations.",
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