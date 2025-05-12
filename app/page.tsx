import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Logos3 } from "@/components/logos3"
import { BlurFade } from "@/components/ui/blur-fade"
import { cn } from "@/lib/utils"
import { Features } from "@/components/features-8"
import { FeaturesComparison } from "@/components/features-comparison"
import { LanguageSwitcher } from "@/src/components/language-switcher"
import { DotPattern } from "@/components/ui/dot-pattern"

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
              href="#contact"
              className="bg-[var(--brand-color)] text-black px-6 md:px-12 py-6 md:py-8 flex items-center hover:bg-[var(--brand-color-hover)] transition-colors text-xl md:text-2xl"
            >
              LET'S TALK <ArrowRight className="ml-2 h-5 md:h-6 w-5 md:w-6" />
            </Link>
          </div>
        </header>
      </BlurFade>

      <main className="flex-grow relative">
        <BlurFade delay={0.15} duration={0.2}>
          <section className="container mx-auto px-6 md:px-4 py-12 md:py-16 pb-6 md:pb-8 text-center relative overflow-hidden">
            <div className="flex justify-center mb-8 md:mb-12 relative">
              <div className="px-[1px] py-[1px] bg-gradient-to-r from-gray-300/50 via-gray-400/70 to-gray-300/50 rounded-full">
                <div className="flex items-center px-5 py-2 bg-[#f2f2f2] rounded-full">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2.5 pulse-dot"></div>
                  <span className="text-gray-600 text-sm font-medium">2 Spots left...</span>
                </div>
              </div>
            </div>

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
                AI workers and automations that fit your needs.
              </p>
            </BlurFade>

            <BlurFade delay={0.45} duration={0.2}>
              <Link
                href="#demo"
                className="inline-flex items-center bg-[var(--brand-color)] text-black px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium hover:bg-[var(--brand-color-hover)] transition-colors relative"
              >
                BOOK DEMO CALL <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
              </Link>
            </BlurFade>
          </section>
        </BlurFade>
        
        <div className="py-8 md:py-12"></div>
        
        <div className="bg-gray-0 relative">
          <BlurFade delay={0.55} duration={0.2}>
            <Logos3 
              heading="Dozens of Success Stories" 
              logos={[
                {
                  id: "autods-1",
                  description: "AutoDS",
                  image: "/testimonial logos/AutoDS.png",
                  className: "h-12 w-auto opacity-80",
                },
                {
                  id: "mayaparking-1",
                  description: "Maya Parking",
                  image: "/testimonial logos/Mayaparking.png",
                  className: "h-12 w-auto opacity-80",
                },
                {
                  id: "autods-2",
                  description: "AutoDS",
                  image: "/testimonial logos/AutoDS.png",
                  className: "h-12 w-auto opacity-80",
                },
                {
                  id: "mayaparking-2",
                  description: "Maya Parking",
                  image: "/testimonial logos/Mayaparking.png",
                  className: "h-12 w-auto opacity-80",
                },
                {
                  id: "autods-3",
                  description: "AutoDS",
                  image: "/testimonial logos/AutoDS.png",
                  className: "h-12 w-auto opacity-80",
                },
                {
                  id: "mayaparking-3",
                  description: "Maya Parking",
                  image: "/testimonial logos/Mayaparking.png",
                  className: "h-12 w-auto opacity-80",
                },
              ]}
            />
          </BlurFade>
        </div>
        
        <BlurFade delay={0.65} duration={0.2}>
          <FeaturesComparison />
        </BlurFade>
      </main>
    </div>
  )
}
