import React from 'react';
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Rocket } from 'lucide-react';

export function FeaturesComparison() {
  return (
    <section className="py-8 md:py-12">
      <div className="mx-auto max-w-3xl lg:max-w-5xl px-6">
        <div className="flex justify-center mb-6 relative">
          <div className="px-[1px] py-[1px] bg-gradient-to-r from-gray-300/50 via-gray-400/70 to-gray-300/50 rounded-full">
            <div className="flex items-center px-5 py-2 bg-[#f2f2f2] rounded-full">
              <span className="text-gray-600 text-sm font-medium">Why Choose Us</span>
            </div>
          </div>
        </div>
        
        <div className="relative mb-6 text-center">
          <h2 className="text-3xl md:text-4xl md:font-normal mb-6 max-w-5xl mx-auto leading-tight">
            <span className="text-black font-medium">AI </span>
            <span className="text-[var(--brand-color-text)] italic font-bold">Tailored</span>
            <span className="text-black font-medium"> for Your Business</span>
          </h2>
        </div>
        
        <div className="border border-gray-200/80 bg-gradient-to-b from-white to-gray-50/30 p-4 md:p-6 rounded-xl backdrop-blur-sm">
          {/* All cards in a 2x2 grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Voice Agent */}
            <a href="#contact" className="group block rounded-lg shadow-[0_4px_14px_0_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.09)] transition-all duration-300 overflow-hidden relative min-h-[350px] flex flex-col bg-gray-800 bg-cover bg-center"> {/* BG placeholder */}
              {/* Overlay for text readability */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300"></div>
              <div className="relative flex flex-col h-full p-8 text-white">
                <div className="mb-4">
                  <Badge className="bg-gradient-to-r from-emerald-50/80 to-green-50/80 text-emerald-700 hover:from-emerald-100/80 hover:to-green-100/80 border-emerald-300 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">AI Employee</Badge>
                </div>
                <h2 className="text-2xl font-medium mb-3">AI Voice Agent</h2>
                <p className="mb-6 text-[15px] leading-relaxed opacity-90">
                  Your personal service employee that speaks to your customers on the phone with a realistic voice.
                </p>
                <div className="space-y-3 mb-8 opacity-90">
                  <div className="flex items-start">
                    <span className="text-emerald-400 mr-2 font-medium">✓</span>
                    <span>24/7 Availability</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-emerald-400 mr-2 font-medium">✓</span>
                    <span>Natural Voice</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-emerald-400 mr-2 font-medium">✓</span>
                    <span>Appointment Booking</span>
                  </div>
                </div>
                <div className="mt-auto"> {/* Pushes "Get Started" to the bottom */}
                  <p className="font-normal group-hover:font-bold text-lg group-hover:underline transition-all flex items-center">
                    Get Started 
                    <Rocket className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </p>
                </div>
              </div>
            </a>
            
            {/* Chat Agent */}
            <a href="#contact" className="group block rounded-lg shadow-[0_4px_14px_0_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.09)] transition-all duration-300 overflow-hidden relative min-h-[350px] flex flex-col bg-gray-800 bg-cover bg-center"> {/* BG placeholder */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300"></div>
              <div className="relative flex flex-col h-full p-8 text-white">
                <div className="mb-4">
                  <Badge className="bg-gradient-to-r from-emerald-50/80 to-green-50/80 text-emerald-700 hover:from-emerald-100/80 hover:to-green-100/80 border-emerald-300 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">AI Employee</Badge>
                </div>
                <h2 className="text-2xl font-medium mb-3">AI Chat Agent</h2>
                <p className="mb-6 text-[15px] leading-relaxed opacity-90">
                  Your support agent for chat support on SMS, WhatsApp, and web with instant assistance.
                </p>
                <div className="space-y-3 mb-8 opacity-90">
                  <div className="flex items-start">
                    <span className="text-emerald-400 mr-2 font-medium">✓</span>
                    <span>Multi-Channel</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-emerald-400 mr-2 font-medium">✓</span>
                    <span>Instant Replies</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-emerald-400 mr-2 font-medium">✓</span>
                    <span>24/7 Support</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <p className="font-normal group-hover:font-bold text-lg group-hover:underline transition-all flex items-center">
                    Get Started
                    <Rocket className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </p>
                </div>
              </div>
            </a>

            {/* AI Workflow Integration */}
            <a href="#contact" className="group block rounded-lg shadow-[0_4px_14px_0_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.09)] transition-all duration-300 overflow-hidden relative min-h-[350px] flex flex-col bg-sky-800 bg-cover bg-center"> {/* BG placeholder - blueish */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300"></div>
              <div className="relative flex flex-col h-full p-8 text-white">
                <div className="mb-4">
                  <Badge className="bg-gradient-to-r from-blue-50/80 to-indigo-50/80 text-blue-700 hover:from-blue-100/80 hover:to-indigo-100/80 border-blue-300 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">Integration</Badge>
                </div>
                <h2 className="text-2xl font-medium mb-3">AI Workflow Integration</h2>
                <p className="mb-6 text-[15px] leading-relaxed opacity-90">
                  Integrate AI into your existing CRM and business workflows to automate tedious tasks.
                </p>
                <div className="space-y-3 mb-8 opacity-90">
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-2 font-medium">✓</span>
                    <span>CRM Integration</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-2 font-medium">✓</span>
                    <span>Task Automation</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-2 font-medium">✓</span>
                    <span>Enhanced Efficiency</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <p className="font-normal group-hover:font-bold text-lg group-hover:underline transition-all flex items-center">
                    Get Started
                    <Rocket className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </p>
                </div>
              </div>
            </a>

            {/* Support & Maintenance Plan */}
            <a href="#contact" className="group block rounded-lg shadow-[0_4px_14px_0_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.09)] transition-all duration-300 overflow-hidden relative min-h-[350px] flex flex-col bg-purple-800 bg-cover bg-center"> {/* BG placeholder - purplish */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300"></div>
              <div className="relative flex flex-col h-full p-8 text-white">
                <div className="mb-4">
                  <Badge className="bg-gradient-to-r from-purple-50/80 to-violet-50/80 text-purple-700 hover:from-purple-100/80 hover:to-violet-100/80 border-purple-300 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">Optional</Badge>
                </div>
                <h2 className="text-2xl font-medium mb-3">Support & Maintenance</h2>
                <p className="mb-6 text-[15px] leading-relaxed opacity-90">
                  Ensure your AI agents run smoothly with regular updates, performance upgrades, and bug fixes.
                </p>
                <div className="space-y-3 mb-8 opacity-90">
                  <div className="flex items-start">
                    <span className="text-purple-400 mr-2 font-medium">✓</span>
                    <span>Latest AI Upgrades</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-400 mr-2 font-medium">✓</span>
                    <span>24/7 Monitoring</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-400 mr-2 font-medium">✓</span>
                    <span>Custom Dashboard</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <p className="font-normal group-hover:font-bold text-lg group-hover:underline transition-all flex items-center">
                    Get Started
                    <Rocket className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}