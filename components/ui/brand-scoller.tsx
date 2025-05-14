"use client";
 
import Image from "next/image";
 
export const BrandScroller = () => {
  const logos = [
    { src: "/testimonial logos/AutoDS.png", alt: "AutoDS", width: 120, height: 40 },
    { src: "/testimonial logos/Mayaparking.png", alt: "Maya Parking", width: 120, height: 40 },
  ];

  return (
    <div className="w-full py-20 md:py-24 relative">
      <div className="container mx-auto px-6 text-center mb-8 relative z-10">
        <h3 className="text-lg font-medium text-gray-600">Trusted by innovative companies</h3>
      </div>
      
      <div className="relative w-full">
        <div className="absolute -top-4 left-0 right-0 bg-gradient-to-b from-gray-100 via-gray-100 to-gray-50/20 w-full h-[200%]"></div>
        
        <div className="relative flex overflow-x-hidden [--gap:2rem] [--duration:60s] z-10">
          <div className="animate-marquee flex shrink-0 items-center [gap:var(--gap)] py-4">
            {[...Array(8)].map((_, i) => (
              logos.map((logo, index) => (
                <div key={`${i}-${index}`} className="flex items-center justify-center px-8">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="h-12 w-auto opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))
            ))}
          </div>
          <div className="animate-marquee flex shrink-0 items-center [gap:var(--gap)] py-4" aria-hidden="true">
            {[...Array(8)].map((_, i) => (
              logos.map((logo, index) => (
                <div key={`${i}-${index}-clone`} className="flex items-center justify-center px-8">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="h-12 w-auto opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const BrandScrollerReverse = () => {
  const logos = [
    { src: "/testimonial logos/AutoDS.png", alt: "AutoDS", width: 120, height: 40 },
    { src: "/testimonial logos/Mayaparking.png", alt: "Maya Parking", width: 120, height: 40 },
  ];

  return (
    <div className="relative flex overflow-x-hidden [--gap:2rem] [--duration:60s]">
      <div className="animate-marquee-reverse flex shrink-0 items-center [gap:var(--gap)] py-4">
        {[...Array(8)].map((_, i) => (
          logos.map((logo, index) => (
            <div key={`${i}-${index}`} className="flex items-center justify-center px-8">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-12 w-auto opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))
        ))}
      </div>
      <div className="animate-marquee-reverse flex shrink-0 items-center [gap:var(--gap)] py-4" aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          logos.map((logo, index) => (
            <div key={`${i}-${index}-clone`} className="flex items-center justify-center px-8">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-12 w-auto opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))
        ))}
      </div>
    </div>
  );
};