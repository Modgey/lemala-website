import React from 'react';
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function FeaturesComparison() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-3xl lg:max-w-5xl px-6">
        <div className="relative mb-12 text-center">
          <h2 className="text-3xl md:text-4xl md:font-normal mb-6 max-w-5xl mx-auto leading-tight">
            <span className="text-[var(--brand-color-text)] italic font-bold">AI Solutions</span>
            <span className="text-black font-medium"> for Your Business</span>
          </h2>
        </div>
        
        {/* Top row: 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Voice Agent */}
          <div className="border rounded-lg p-8">
            <div className="mb-2">
              <Badge className="bg-[#e6f8e6] text-green-600 hover:bg-[#d4f0d4] border-green-600">AI Employee</Badge>
            </div>
            
            <h2 className="text-2xl font-medium mb-2">AI Voice Agent</h2>
            
            <p className="text-muted-foreground mb-6">
              Your personal service employee that speaks to your customers on the phone with a realistic voice.
            </p>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-start">
                <span className="text-gray-700 mr-2">✓</span>
                <span>24/7 Availability</span>
              </div>
              <div className="flex items-start">
                <span className="text-gray-700 mr-2">✓</span>
                <span>Natural Voice</span>
              </div>
              <div className="flex items-start">
                <span className="text-gray-700 mr-2">✓</span>
                <span>Appointment Booking</span>
              </div>
            </div>
            
            <div className="text-center text-gray-400 text-sm">
              Image placeholder
            </div>
          </div>
          
          {/* Chat Agent */}
          <div className="border rounded-lg p-8">
            <div className="mb-2">
              <Badge className="bg-[#e6f8e6] text-green-600 hover:bg-[#d4f0d4] border-green-600">AI Employee</Badge>
            </div>
            
            <h2 className="text-2xl font-medium mb-2">AI Chat Agent</h2>
            
            <p className="text-muted-foreground mb-6">
              Your support agent for chat support on SMS, WhatsApp, and web with instant assistance.
            </p>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-start">
                <span className="text-gray-700 mr-2">✓</span>
                <span>Multi-Channel</span>
              </div>
              <div className="flex items-start">
                <span className="text-gray-700 mr-2">✓</span>
                <span>Instant Replies</span>
              </div>
              <div className="flex items-start">
                <span className="text-gray-700 mr-2">✓</span>
                <span>24/7 Support</span>
              </div>
            </div>
            
            <div className="text-center text-gray-400 text-sm">
              Image placeholder
            </div>
          </div>
        </div>
        
        {/* Bottom row: 1 wider column with image on the right */}
        <div className="border rounded-lg p-8">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 pr-0 md:pr-8">
              <div className="mb-2">
                <Badge className="bg-[#ebf7ff] text-blue-600 hover:bg-[#e0f0ff] border-blue-600">Integration</Badge>
              </div>
              
              <h2 className="text-2xl font-medium mb-2">AI Workflow Integration</h2>
              
              <p className="text-muted-foreground mb-6">
                Integrate AI into your existing CRM and business workflows to automate tedious tasks.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-start">
                  <span className="text-gray-700 mr-2">✓</span>
                  <span>CRM Integration</span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-700 mr-2">✓</span>
                  <span>Task Automation</span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-700 mr-2">✓</span>
                  <span>Enhanced Efficiency</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/3 mt-6 md:mt-0 flex items-center justify-center">
              <div className="text-center text-gray-400 text-sm">
                Image placeholder
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}