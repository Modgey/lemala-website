"use client";

import dynamic from 'next/dynamic';
import React from 'react';

// Import the component with dynamic import and disable SSR
const HowWeWorkTimelineDynamic = dynamic(
  () => import('./HowWeWorkTimelineCSR').then(mod => mod.HowWeWorkTimelineCSR),
  { ssr: false }
);

// Simple loading placeholder to show during client-side loading
const TimelinePlaceholder = () => (
  <section className="w-full bg-[var(--section-bg-light)] py-16 md:py-24 relative overflow-hidden" id="how-we-work">
    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Left Column placeholder */}
        <div className="flex flex-col">
          <div className="mb-6">
            <div className="inline-block px-[1px] py-[1px] bg-gradient-to-r from-gray-300/50 via-gray-400/70 to-gray-300/50 rounded-full mb-4">
              <div className="flex items-center px-5 py-2 bg-[#f2f2f2] rounded-full">
                <span className="text-gray-600 text-sm font-medium">How we work</span>
              </div>
            </div>
            <div className="h-16 bg-gray-200 rounded mb-6 w-3/4"></div>
            <div className="h-12 bg-gray-200 rounded w-40 mb-12"></div>
          </div>
        </div>
        
        {/* Right Column placeholder */}
        <div className="relative">
          <div className="space-y-16">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="relative min-h-[120px]">
                <div className="absolute left-[22px] w-10 h-10 -translate-x-1/2 flex items-center justify-center rounded-full z-10 bg-white border-2 border-gray-200" style={{ top: '24px' }}>
                  <span className="text-sm font-medium text-gray-400">{num}</span>
                </div>
                <div className="ml-16">
                  <div className="p-5 rounded-lg bg-white/80 border border-gray-200/90 shadow-[0_2px_10px_0_rgba(0,0,0,0.03)]">
                    <div className="h-6 w-24 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 w-full bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export function TimelineWrapper() {
  const [mounted, setMounted] = React.useState(false);
  
  // Set mounted to true after the component is mounted on the client
  React.useEffect(() => {
    setMounted(true);
  }, []);
  
  // Only render the actual timeline component when we're on the client
  return mounted ? <HowWeWorkTimelineDynamic /> : <TimelinePlaceholder />;
} 