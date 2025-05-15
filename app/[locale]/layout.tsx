import type React from "react"
import "../globals.css" // Adjusted path for globals.css
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/Footer"
import i18nConfig from "../../i18nConfig" // Path to your i18nConfig
import { dir } from 'i18next' // Import dir from i18next

const inter = Inter({ subsets: ["latin"] })

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
  params: { locale: string };
}

export default async function LocaleLayout({
  children,
  params: { locale }, // Added params to get locale
}: LocaleLayoutProps) {
  return (
    <html lang={locale} dir={dir(locale)} suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} m-0 p-0 overflow-x-hidden flex flex-col min-h-screen`} suppressHydrationWarning>
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
      </body>
    </html>
  )
} 