"use client";
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const Testimonial = () => {
  const { t } = useTranslation();
  return (
    <section id="testimonials" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-4 text-center">
        <blockquote className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-800 leading-relaxed mb-8">
            {t('testimonial_quote')}
          </p>
          <div className="flex items-center justify-center">
            <div className="flex-shrink-0 mr-4">
              <Image
                src="/testimonial photos/ecomskincareguy.webp"
                alt={t('testimonial_name')}
                width={64}
                height={64}
                className="rounded-full h-16 w-16 object-cover"
              />
            </div>
            <div className="text-left">
              <p className="text-lg font-semibold text-gray-900">{t('testimonial_name')}</p>
              <p className="text-sm text-gray-600">{t('testimonial_title_company')}</p>
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