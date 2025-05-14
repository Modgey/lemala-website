import Image from 'next/image';

const Testimonial = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-4 text-center">
        <blockquote className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-800 leading-relaxed mb-8">
            "Ben and the team have been outstanding at designing customized AI agents to solve complex problems of our team. The quality of their output is impressive, and they have been diligent at incorporating specific feedback."
          </p>
          <div className="flex items-center justify-center">
            <div className="flex-shrink-0 mr-4">
              <Image
                src="/placeholder-avatar.jpg" // Replace with actual avatar path
                alt="Aman Saxena"
                width={64}
                height={64}
                className="rounded-full h-16 w-16 object-cover"
              />
            </div>
            <div className="text-left">
              <p className="text-lg font-semibold text-gray-900">Aman Saxena</p>
              <p className="text-sm text-gray-600">SEO Content Manager</p>
            </div>
            <div className="ml-6 pl-6 border-l border-gray-300">
              <Image
                src="/placeholder-logo-wise.png" // Replace with actual company logo path
                alt="WISE Logo"
                width={80}
                height={40}
                className="h-10 object-contain"
              />
            </div>
          </div>
          <div className="mt-8">
            <span className="inline-block h-1 w-1 bg-gray-900 rounded-full"></span>
          </div>
        </blockquote>
      </div>
    </section>
  );
};

export default Testimonial; 