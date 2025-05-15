"use client";
import Image from 'next/image';
import Link from 'next/link';
import { MdEmail } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const solutions = [
    { name: t('footer_solution_ai_workers'), href: '/solutions/ai-workers' },
    { name: t('footer_solution_automations'), href: '/solutions/automations' },
    { name: t('footer_solution_consulting'), href: '/solutions/consulting' },
  ];

  const navigationLinks = [
    { name: t('nav_solutions'), href: '#solutions' },
    { name: t('nav_testimonials'), href: '#testimonials' },
    { name: t('nav_faq'), href: '#how-we-work' },
  ];

  return (
    <footer className="bg-background text-foreground py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-start">
          <Link href="/" className="mb-4">
            <Image
              src="/lemalalogo.png"
              alt="Lemala Agency Logo"
              width={120}
              height={40}
              className="h-auto"
            />
          </Link>
          <p className="text-sm text-muted-foreground">
            {t('footer_tagline')}
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">{t('footer_navigation_title')}</h3>
          <ul className="space-y-2">
            {navigationLinks.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="text-sm hover:text-[var(--brand-color-text)] transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">{t('footer_our_solutions_title')}</h3>
          <ul className="space-y-2">
            {solutions.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="text-sm hover:text-[var(--brand-color-text)] transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">{t('footer_contact_title')}</h3>
          <div className="space-y-2">
            <Link 
              href="mailto:shawn@lemala.agency" 
              className="flex items-center text-sm hover:text-[var(--brand-color-text)] transition-colors"
            >
              <MdEmail className="w-5 h-5 mr-2" />
              shawn@lemala.agency
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-8 pt-8 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} {t('footer_copyright')}</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-[var(--brand-color-text)] transition-colors">
              {t('footer_privacy_policy')}
            </Link>
            <Link href="/terms-of-service" className="hover:text-[var(--brand-color-text)] transition-colors">
              {t('footer_terms_of_service')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 