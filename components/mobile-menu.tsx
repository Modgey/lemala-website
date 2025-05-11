"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(true)} className="p-2 z-50" aria-label="Open menu">
        <Menu className="h-6 w-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          <div className="flex justify-between items-center p-4">
            <div className="w-40">
              <Image src="/lemalalogo.png" alt="Lemala Logo" width={160} height={43} className="h-auto" />
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2" aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col items-center justify-center flex-grow space-y-8 text-xl">
            <Link
              href="#offer"
              className="text-black font-medium hover:text-gray-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              OUR OFFER
            </Link>
            <Link
              href="#testimonials"
              className="text-black font-medium hover:text-gray-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              TESTIMONIALS
            </Link>
            <Link
              href="#faq"
              className="text-black font-medium hover:text-gray-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="#contact"
              className="bg-[#c29bef] text-black px-7 py-4 flex items-center hover:bg-[#b78ae8] transition-colors text-2xl rounded-bl-3xl"
              onClick={() => setIsOpen(false)}
            >
              LET'S TALK
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}
