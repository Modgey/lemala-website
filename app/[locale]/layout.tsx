import type React from "react"
import "../globals.css" // Adjusted path for globals.css
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/Footer"
import i18nConfig from "../../i18nConfig" // Path to your i18nConfig
import { dir } from 'i18next' // Import dir from i18next

// Import translations utilities
import initTranslations from "@/lib/i18n"
import TranslationsProvider from "@/components/TranslationsProvider"

const inter = Inter({ subsets: ["latin"] })

// Define namespaces needed in the layout (e.g., for Footer)
const i18nNamespaces = ['common']; // Assuming footer translations are in 'common'

// Metadata might need to be made dynamic or handled differently with i18n
export const metadata: Metadata = {
  title: "Lemala - AI Workers and Automations",
  description: "Tailor-made AI workers and automations for your business",
  generator: 'v0.dev'
}

export async function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }))
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout(
  props: LocaleLayoutProps
) {
  const { children } = props;
  const params = await props.params;
  const { locale } = params;
  // Initialize translations for the layout
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <html lang={locale} dir={dir(locale)} suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} m-0 p-0 overflow-x-hidden flex flex-col min-h-screen`} suppressHydrationWarning>
        <TranslationsProvider
          locale={locale}
          namespaces={i18nNamespaces}
          resources={resources}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <main className="flex-grow">
              {children}
            </main>
            <Footer /> 
          </ThemeProvider>
        </TranslationsProvider>
      </body>
    </html>
  )
} 