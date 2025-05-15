'use client';

import { I18nextProvider } from 'react-i18next';
import initTranslations from '@/lib/i18n'; // Adjust if your path is different
import { createInstance, i18n as I18nInstanceType } from 'i18next'; // Import i18n type for clarity
import React from 'react';

interface TranslationsProviderProps {
  children: React.ReactNode;
  locale: string;
  namespaces: string[];
  resources?: any; // Consider using a more specific type based on your i18next setup
}

export default function TranslationsProvider({
  children,
  locale,
  namespaces,
  resources
}: TranslationsProviderProps) {
  const i18n = createInstance();

  // Initialize translations. The initTranslations function is async, 
  // but in a client component constructor/render body, we can't await.
  // react-i18next handles this internally when I18nextProvider is used with an uninitialized instance.
  // Or, ensure i18n instance passed to I18nextProvider is fully initialized.
  // For simplicity and common patterns, we pass resources if available (preloaded on server).
  initTranslations(locale, namespaces, i18n, resources);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
} 