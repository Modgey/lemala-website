import React from 'react';
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

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
          {/* Top row: 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Voice Agent */}
            <div className="border border-gray-200/90 rounded-lg p-8 shadow-[0_4px_14px_0_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_8px_25px_rgba(0,0,0,0.09)] hover:translate-y-[-2px] bg-white">
              <div className="mb-4">
                <Badge className="bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-600 hover:from-emerald-100 hover:to-green-100 border-emerald-200 px-3 py-1.5 text-xs font-medium">AI Employee</Badge>
              </div>
              
              <h2 className="text-2xl font-medium mb-3 text-gray-900">AI Voice Agent</h2>
              
              <p className="text-gray-600 mb-6 text-[15px] leading-relaxed">
                Your personal service employee that speaks to your customers on the phone with a realistic voice.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <span className="text-emerald-500 mr-2 font-medium">✓</span>
                  <span className="text-gray-700">24/7 Availability</span>
                </div>
                <div className="flex items-start">
                  <span className="text-emerald-500 mr-2 font-medium">✓</span>
                  <span className="text-gray-700">Natural Voice</span>
                </div>
                <div className="flex items-start">
                  <span className="text-emerald-500 mr-2 font-medium">✓</span>
                  <span className="text-gray-700">Appointment Booking</span>
                </div>
              </div>
              
              <div className="text-center text-gray-400 text-sm h-[100px] flex items-center justify-center bg-gray-50/50 rounded-lg border border-gray-100">
                Image placeholder
              </div>
            </div>
            
            {/* Chat Agent */}
            <div className="border border-gray-200/90 rounded-lg p-8 shadow-[0_4px_14px_0_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_8px_25px_rgba(0,0,0,0.09)] hover:translate-y-[-2px] bg-white">
              <div className="mb-4">
                <Badge className="bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-600 hover:from-emerald-100 hover:to-green-100 border-emerald-200 px-3 py-1.5 text-xs font-medium">AI Employee</Badge>
              </div>
              
              <h2 className="text-2xl font-medium mb-3 text-gray-900">AI Chat Agent</h2>
              
              <p className="text-gray-600 mb-6 text-[15px] leading-relaxed">
                Your support agent for chat support on SMS, WhatsApp, and web with instant assistance.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <span className="text-emerald-500 mr-2 font-medium">✓</span>
                  <span className="text-gray-700">Multi-Channel</span>
                </div>
                <div className="flex items-start">
                  <span className="text-emerald-500 mr-2 font-medium">✓</span>
                  <span className="text-gray-700">Instant Replies</span>
                </div>
                <div className="flex items-start">
                  <span className="text-emerald-500 mr-2 font-medium">✓</span>
                  <span className="text-gray-700">24/7 Support</span>
                </div>
              </div>
              
              <div className="text-center text-gray-400 text-sm h-[100px] flex items-center justify-center bg-gray-50/50 rounded-lg border border-gray-100">
                Image placeholder
              </div>
            </div>
          </div>
          
          {/* Bottom row: 1 wider column with image on the right */}
          <div className="border border-gray-200/90 rounded-lg p-8 shadow-[0_4px_14px_0_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_8px_25px_rgba(0,0,0,0.09)] hover:translate-y-[-2px] bg-white">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3 pr-0 md:pr-8">
                <div className="mb-4">
                  <Badge className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 hover:from-blue-100 hover:to-indigo-100 border-blue-200 px-3 py-1.5 text-xs font-medium">Integration</Badge>
                </div>
                
                <h2 className="text-2xl font-medium mb-3 text-gray-900">AI Workflow Integration</h2>
                
                <p className="text-gray-600 mb-6 text-[15px] leading-relaxed">
                  Integrate AI into your existing CRM and business workflows to automate tedious tasks.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-blue-500 mr-2 font-medium">✓</span>
                    <span className="text-gray-700">CRM Integration</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-500 mr-2 font-medium">✓</span>
                    <span className="text-gray-700">Task Automation</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-500 mr-2 font-medium">✓</span>
                    <span className="text-gray-700">Enhanced Efficiency</span>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/3 mt-6 md:mt-0 flex items-center justify-center">
                <div className="text-center text-gray-400 text-sm h-[140px] w-full flex items-center justify-center bg-gray-50/50 rounded-lg border border-gray-100">
                  Image placeholder
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}