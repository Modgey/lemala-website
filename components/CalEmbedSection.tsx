"use client";

import { DotPattern } from "@/components/ui/dot-pattern";
import Script from "next/script";

const CalEmbedSection = () => {
  return (
    <section id="book-call" className="w-full bg-[var(--section-bg-light)] py-8 md:py-12 relative overflow-hidden">
      <DotPattern
        width={22}
        height={22}
        cx={1}
        cy={1}
        cr={1}
        className="absolute inset-4 w-full h-full z-0"
        style={{ fill: "rgba(156, 163, 175, 0.5)" }}
      />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="mb-10 md:mb-12">
          <div className="inline-block px-[1px] py-[1px] bg-gradient-to-r from-gray-300/50 via-gray-400/70 to-gray-300/50 rounded-full mb-4">
            <div className="flex items-center px-5 py-2 bg-[#f2f2f2] rounded-full">
              <span className="text-gray-600 text-sm font-medium">Book A Call</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight">
            Let's <span className="text-[var(--brand-color-text)] italic font-bold">Discuss</span> Your Needs
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mt-4">
            Schedule a free call to discuss how our tailored AI solutions can help your business grow.
          </p>
        </div>

        {/* Cal.com inline embed container */}
        <div className="max-w-4xl mx-auto bg-white p-1 md:p-4 rounded-lg shadow-xl h-[550px] border border-black-400">
          <div style={{ width: "100%", height: "100%", overflow: "hidden" }} id="my-cal-inline-embed"></div>
        </div>
      </div>

      {/* Cal.com script */}
      <Script id="cal-embed-script" strategy="afterInteractive">
        {`
          (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
          Cal("init", "ai-discovery-call-embed", {origin:"https://cal.com"});

          Cal.ns["ai-discovery-call-embed"]("inline", {
            elementOrSelector:"#my-cal-inline-embed",
            config: {"layout":"weekly_view","theme":"light"},
            calLink: "shawnb/ai-discovery-call",
          });

          Cal.ns["ai-discovery-call-embed"]("ui", {"theme":"light","hideEventTypeDetails":false,"layout":"weekly_view"});
        `}
      </Script>
    </section>
  );
};

export default CalEmbedSection; 