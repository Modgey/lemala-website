import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"
import { cn } from "@/lib/utils"
import { FeaturesComparison } from "@/components/features-comparison"
import { LanguageSwitcher } from "@/src/components/language-switcher"
import { DotPattern } from "@/components/ui/dot-pattern"
import { TimelineWrapper } from "@/components/TimelineWrapper"
import { BrandScroller } from "@/components/ui/brand-scoller"
import Testimonial from "@/components/Testimonial"
import CalEmbedSection from "@/components/CalEmbedSection"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <DotPattern
        width={22}
        height={22}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom,white,transparent_90%)]",
          "absolute inset-0 h-screen w-full fill-gray-400/60 translate-x-1 translate-y-2 z-[-1]"
        )}
      />
      <BlurFade delay={0.05} duration={0.2}>
        <header className="flex items-center relative">
          <div className="w-44 ml-4 md:ml-10 py-5">
            <Image src="/lemalalogo.png" alt="Lemala Logo" width={180} height={48} className="h-auto" priority />
          </div>

          <nav className="hidden md:flex items-center space-x-8 ml-8">
            <Link href="#offer" className="text-black text-sm font-medium hover:text-gray-700 transition-colors">
              OUR OFFER
            </Link>
            <Link href="#testimonials" className="text-black text-sm font-medium hover:text-gray-700 transition-colors">
              TESTIMONIALS
            </Link>
            <Link href="#faq" className="text-black text-sm font-medium hover:text-gray-700 transition-colors">
              FAQ
            </Link>
          </nav>

          <div className="ml-auto flex items-center">
            <div className="mr-3">
              <LanguageSwitcher />
            </div>
            <Link
              href="#book-call"
              className="bg-[var(--brand-color)] text-black px-6 md:px-12 py-6 md:py-8 flex items-center hover:bg-[var(--brand-color-hover)] transition-colors text-xl md:text-2xl"
            >
              LET'S TALK <ArrowRight className="ml-2 h-5 md:h-6 w-5 md:w-6" />
            </Link>
          </div>
        </header>
      </BlurFade>

      <main className="flex-grow relative mt-6 md:mt-18">
        <BlurFade delay={0.15} duration={0.2}>
          <section className="container mx-auto px-6 md:px-4 py-12 md:py-16 pt-32 md:pt-40 pb-6 md:pb-8 text-center relative overflow-hidden">
            <BlurFade delay={0.25} duration={0.2}>
              <h1 className="text-4xl font-medium md:text-6xl lg:text-7xl md:font-normal mb-6 max-w-5xl mx-auto leading-tight relative">
                SAY HELLO TO YOUR 
                <span className="text-[var(--brand-color-text)] italic font-bold"> SMARTER </span> 
                BUSINESS<span className="inline-block">👋</span>
              </h1>
            </BlurFade>

            <BlurFade delay={0.35} duration={0.2}>
              <p className="text-lg md:text-2xl text-gray-600 max-w-[85%] md:max-w-3xl mx-auto mb-8 md:mb-10 px-2 relative">
                We take our time to understand your business, then build you <span className="font-bold">tailor-made</span>{" "}
                AI workers and systems that fit your needs.
              </p>
            </BlurFade>

            <BlurFade delay={0.45} duration={0.2}>
              <Link
                href="#book-call"
                className="inline-flex items-center bg-[var(--brand-color)] text-black px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium hover:bg-[var(--brand-color-hover)] transition-colors relative"
              >
                BOOK A CALL <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
              </Link>
            </BlurFade>
          </section>
        </BlurFade>
        
        <BlurFade delay={0.55} duration={0.2}>
          <BrandScroller />
        </BlurFade>
        
        <div className="w-full h-0 bg-gradient-to-b from-gray-50/30 to-transparent"></div>
        
        <BlurFade delay={0.65} duration={0.2}>
          <FeaturesComparison />
        </BlurFade>
        
        <BlurFade delay={0.75} duration={0.2}>
          <TimelineWrapper />
        </BlurFade>

        <BlurFade delay={0.85} duration={0.2}>
          <Testimonial />
        </BlurFade>

        <BlurFade delay={0.95} duration={0.2}>
          <CalEmbedSection />
        </BlurFade>
      </main>
    </div>
  )
}
