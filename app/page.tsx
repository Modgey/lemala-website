import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Logos3 } from "@/components/logos3"
import { DotPattern } from "@/components/ui/dot-pattern"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex items-center justify-between relative">
        <div className="w-52 ml-4 md:ml-12 py-6">
          <Image src="/lemalalogo.png" alt="Lemala Logo" width={200} height={53} className="h-auto" priority />
        </div>

        <nav className="hidden md:flex items-center space-x-10 absolute left-1/2 transform -translate-x-1/2">
          <Link href="#offer" className="text-black font-medium hover:text-gray-700 transition-colors">
            OUR OFFER
          </Link>
          <Link href="#testimonials" className="text-black font-medium hover:text-gray-700 transition-colors">
            TESTIMONIALS
          </Link>
          <Link href="#faq" className="text-black font-medium hover:text-gray-700 transition-colors">
            FAQ
          </Link>
        </nav>

        <Link
          href="#contact"
          className="bg-[#c29bef] text-black px-6 md:px-14 py-6 md:py-8 flex items-center hover:bg-[#b78ae8] transition-colors text-xl md:text-2xl absolute top-0 right-0 rounded-bl-3xl"
        >
          LET'S TALK <ArrowRight className="ml-2 h-5 md:h-6 w-5 md:w-6" />
        </Link>
      </header>

      <main className="flex-grow">
        <section className="container mx-auto px-6 md:px-4 py-12 md:py-20 text-center relative">
          <DotPattern 
            width={20} 
            height={20} 
            cx={1} 
            cy={1} 
            cr={1} 
            className="opacity-30 -z-10 text-[#c29bef]/20" 
          />
          
          <div className="inline-block mb-6 md:mb-10">
            <div className="px-[1px] py-[1px] bg-gradient-to-r from-gray-300/50 via-gray-400/70 to-gray-300/50 rounded-full">
              <div className="flex items-center px-4 py-1.5 bg-[#f2f2f2] rounded-full">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 mr-2 pulse-dot"></div>
                <span className="text-gray-500 text-sm font-regular">2 Spots left...</span>
              </div>
            </div>
          </div>

          <h1 className="text-4xl font-medium md:text-6xl lg:text-7xl md:font-normal mb-6 max-w-5xl mx-auto leading-tight">
            SAY HELLO TO YOUR 
            <span className="text-[#a67ad5] italic font-bold"> SMARTER </span> 
            BUSINESS<span className="inline-block">👋</span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-600 max-w-[85%] md:max-w-3xl mx-auto mb-8 md:mb-12 px-2">
            We take our time to understand your business, then build you <span className="font-bold">tailor-made</span>{" "}
            AI workers and automations that fit your needs.
          </p>

          <Link
            href="#demo"
            className="inline-flex items-center bg-[#c29bef] text-black px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-medium hover:bg-[#b78ae8] transition-colors"
          >
            BOOK DEMO CALL <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
          </Link>
        </section>
        
        <Logos3 
          heading="PARTNERING WITH VISIONARIES" 
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
      </main>
    </div>
  )
}
