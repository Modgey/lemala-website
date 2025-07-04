"use client";
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function FeaturesComparison() {
  const { t } = useTranslation();
  return (
    <section id="solutions" className="pt-0 pb-6 md:pb-9">
      <div className="mx-auto max-w-3xl lg:max-w-5xl px-6">
        <div className="flex justify-center mb-4 relative">
          <div className="px-[1px] py-[1px] bg-gradient-to-r from-gray-300/50 via-gray-400/70 to-gray-300/50 rounded-full">
            <div className="flex items-center px-5 py-2 bg-[#f2f2f2] rounded-full">
              <span className="text-gray-600 text-sm font-medium">{t('features_why_choose_us')}</span>
            </div>
          </div>
        </div>
        
        <div className="relative mb-4 text-center">
          <h2 
            className="text-3xl md:text-4xl md:font-normal mb-4 max-w-5xl mx-auto leading-tight"
            dangerouslySetInnerHTML={{ __html: t('features_title_raw_html') }}
          />
        </div>
        
        <div className="border border-gray-200/80 bg-gradient-to-b from-white to-gray-50/30 p-3 md:p-4 rounded-xl backdrop-blur-sm">
          {/* All cards in a 2x2 grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Voice Agent */}
            <a href="#book-call" className="group block rounded-lg shadow-[0_4px_14px_0_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.09)] transition-all duration-300 overflow-hidden relative min-h-[260px] flex flex-col bg-gray-800 bg-cover bg-center"> {/* Reduced min-height */}
              {/* Overlay for text readability */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300"></div>
              <div className="relative flex flex-col h-full p-5 text-white">
                <h2 className="text-xl font-medium mb-2">{t('features_card_voice_agent_title')}</h2>
                <p className="mb-3 text-sm leading-tight opacity-90">
                  {t('features_card_voice_agent_desc')}
                </p>
                <div className="space-y-1 mb-3 opacity-90 text-sm">
                  <div className="flex items-start">
                    <span className="text-emerald-400 mr-1.5 font-medium">✓</span>
                    <span>{t('features_card_voice_agent_f1')}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-emerald-400 mr-1.5 font-medium">✓</span>
                    <span>{t('features_card_voice_agent_f2')}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-emerald-400 mr-1.5 font-medium">✓</span>
                    <span>{t('features_card_voice_agent_f3')}</span>
                  </div>
                </div>
                <div className="mt-auto"> {/* Pushes "Get Started" to the bottom */}
                  <p className="font-normal group-hover:font-bold text-base transition-all flex items-center">
                    {t('features_card_get_started')} 
                    <ArrowUpRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 group-hover:translate-y-[-4px] transition-transform duration-300" />
                  </p>
                </div>
              </div>
            </a>
            
            {/* Chat Agent */}
            <a href="#book-call" className="group block rounded-lg shadow-[0_4px_14px_0_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.09)] transition-all duration-300 overflow-hidden relative min-h-[260px] flex flex-col bg-gray-800 bg-cover bg-center"> {/* Reduced min-height */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300"></div>
              <div className="relative flex flex-col h-full p-5 text-white">
                <h2 className="text-xl font-medium mb-2">{t('features_card_chat_agent_title')}</h2>
                <p className="mb-3 text-sm leading-tight opacity-90">
                  {t('features_card_chat_agent_desc')}
                </p>
                <div className="space-y-1 mb-3 opacity-90 text-sm">
                  <div className="flex items-start">
                    <span className="text-emerald-400 mr-1.5 font-medium">✓</span>
                    <span>{t('features_card_chat_agent_f1')}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-emerald-400 mr-1.5 font-medium">✓</span>
                    <span>{t('features_card_chat_agent_f2')}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-emerald-400 mr-1.5 font-medium">✓</span>
                    <span>{t('features_card_chat_agent_f3')}</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <p className="font-normal group-hover:font-bold text-base transition-all flex items-center">
                    {t('features_card_get_started')}
                    <ArrowUpRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 group-hover:translate-y-[-4px] transition-transform duration-300" />
                  </p>
                </div>
              </div>
            </a>

            {/* AI Workflow Integration */}
            <a href="#book-call" className="group block rounded-lg shadow-[0_4px_14px_0_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.09)] transition-all duration-300 overflow-hidden relative min-h-[260px] flex flex-col bg-sky-800 bg-cover bg-center"> {/* Reduced min-height */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300"></div>
              <div className="relative flex flex-col h-full p-5 text-white">
                <h2 className="text-xl font-medium mb-2">{t('features_card_workflow_title')}</h2>
                <p className="mb-3 text-sm leading-tight opacity-90">
                  {t('features_card_workflow_desc')}
                </p>
                <div className="space-y-1 mb-3 opacity-90 text-sm">
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-1.5 font-medium">✓</span>
                    <span>{t('features_card_workflow_f1')}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-1.5 font-medium">✓</span>
                    <span>{t('features_card_workflow_f2')}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-1.5 font-medium">✓</span>
                    <span>{t('features_card_workflow_f3')}</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <p className="font-normal group-hover:font-bold text-base transition-all flex items-center">
                    {t('features_card_get_started')}
                    <ArrowUpRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 group-hover:translate-y-[-4px] transition-transform duration-300" />
                  </p>
                </div>
              </div>
            </a>

            {/* Support & Maintenance Plan */}
            <a href="#book-call" className="group block rounded-lg shadow-[0_4px_14px_0_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.09)] transition-all duration-300 overflow-hidden relative min-h-[260px] flex flex-col bg-purple-800 bg-cover bg-center"> {/* Reduced min-height */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300"></div>
              <div className="relative flex flex-col h-full p-5 text-white">
                <h2 className="text-xl font-medium mb-2">{t('features_card_support_title')}</h2>
                <p className="mb-3 text-sm leading-tight opacity-90">
                  {t('features_card_support_desc')}
                </p>
                <div className="space-y-1 mb-3 opacity-90 text-sm">
                  <div className="flex items-start">
                    <span className="text-purple-400 mr-1.5 font-medium">✓</span>
                    <span>{t('features_card_support_f1')}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-400 mr-1.5 font-medium">✓</span>
                    <span>{t('features_card_support_f2')}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-400 mr-1.5 font-medium">✓</span>
                    <span>{t('features_card_support_f3')}</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <p className="font-normal group-hover:font-bold text-base transition-all flex items-center">
                    {t('features_card_get_started')}
                    <ArrowUpRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 group-hover:translate-y-[-4px] transition-transform duration-300" />
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