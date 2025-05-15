import Image from 'next/image';

const Testimonial = () => {
  return (
    <section id="testimonials" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-4 text-center">
        <blockquote className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-800 leading-relaxed mb-8">
            "We were struggling to scale our customer support, and frankly, it was a headache. Lemala came in, understood our specific issues quickly, and designed an AI agent that's not just handling inquiries but actually improving customer satisfaction. It's been a game changer for our daily operations."
          </p>
          <div className="flex items-center justify-center">
            <div className="flex-shrink-0 mr-4">
              <Image
                src="/testimonial photos/ecomskincareguy.webp"
                alt="Yaron Cohen"
                width={64}
                height={64}
                className="rounded-full h-16 w-16 object-cover"
              />
            </div>
            <div className="text-left">
              <p className="text-lg font-semibold text-gray-900">Yaron Cohen</p>
              <p className="text-sm text-gray-600">Owner, Galil E-commerce Hub</p>
            </div>
            <div className="ml-6 pl-6 border-l border-gray-300">
              <Image
                src="/testimonial logos/GalilEcom.png"
                alt="Galil E-commerce Hub Logo"
                width={104}
                height={52}
                className="h-14 object-contain"
              />
            </div>
          </div>
        </blockquote>
      </div>
    </section>
  );
};

export default Testimonial; 