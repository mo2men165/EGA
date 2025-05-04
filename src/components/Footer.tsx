'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl'; // Import useTranslations
import { usePathname } from 'next/navigation'; // Import usePathname
import { logo } from '../../public/assets';

const Footer: React.FC = () => {
  const t = useTranslations('footer'); // Use translations for the 'footer' namespace
  const pathname = usePathname(); // Get the current pathname

  // Check if the current language is Arabic
  const isArabic = pathname.startsWith('/ar');

  return (
    <footer suppressHydrationWarning className="bg-gray-950 w-full">
      {/* Top border with gradient */}
      <div className="h-1 w-full bg-gradient-to-r from-lime-500 via-lime-400 to-lime-500"></div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div
          className={`grid gap-8 lg:grid-cols-4 md:grid-cols-2 ${
            isArabic ? 'text-right' : 'text-left'
          }`}
        >
          {/* Logo and description */}
          <div className="mb-8 lg:mb-0">
            <Link href="/" className="inline-block">
              <Image
                src={logo}
                alt="EGA Marketing Agency"
                width={100}
                height={50}
                className="h-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
              {t('description')} {/* Translated description */}
            </p>
            <div className="mt-6 flex space-x-4">
              {/* Social Media Icons */}
              <a target='_blank' href="https://www.facebook.com/egamarketingagency" className="text-gray-400 transition duration-300 hover:text-lime-500">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a target='_blank' href="https://www.instagram.com/egamarketingagency/" className="text-gray-400 transition duration-300 hover:text-lime-500">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a target='_blank' href="https://www.tiktok.com/@egamarketingagency" className="text-gray-400 transition duration-300 hover:text-lime-500">
              <span className="sr-only">TikTok</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-200">
              {t('quickLinks')} {/* Translated title */}
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/services" className="text-sm text-gray-400 transition duration-300 hover:text-lime-500">
                  {t('services')} {/* Translated link */}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-400 transition duration-300 hover:text-lime-500">
                  {t('aboutUs')} {/* Translated link */}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-gray-400 transition duration-300 hover:text-lime-500">
                  {t('caseStudies')} {/* Translated link */}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-400 transition duration-300 hover:text-lime-500">
                  {t('blog')} {/* Translated link */}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 transition duration-300 hover:text-lime-500">
                  {t('contactUs')} {/* Translated link */}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-200">
              {t('services')} {/* Translated title */}
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/services/branding" className="text-sm text-gray-400 transition duration-300 hover:text-lime-500">
                  {t('branding')} {/* Translated link */}
                </Link>
              </li>
              <li>
                <Link href="/services/media-production" className="text-sm text-gray-400 transition duration-300 hover:text-lime-500">
                  {t('mediaProduction')} {/* Translated link */}
                </Link>
              </li>
              <li>
                <Link href="/services/web-solutions" className="text-sm text-gray-400 transition duration-300 hover:text-lime-500">
                  {t('software')} {/* Translated link */}
                </Link>
              </li>
              <li>
                <Link href="/services/social-media" className="text-sm text-gray-400 transition duration-300 hover:text-lime-500">
                  {t('socialMedia')} {/* Translated link */}
                </Link>
              </li>
              <li>
                <Link href="/services/performance-marketing" className="text-sm text-gray-400 transition duration-300 hover:text-lime-500">
                  {t('performance')} {/* Translated link */}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-200">
              {t('contact')} {/* Translated title */}
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start">
                <svg
                  className="mr-2 h-5 w-5 flex-shrink-0 text-lime-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-400">
                  {t('address')} {/* Translated address */}
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-2 h-5 w-5 flex-shrink-0 text-lime-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-sm text-gray-400">+20 1012333338 - +20 1023333576</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-2 h-5 w-5 flex-shrink-0 text-lime-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-sm text-gray-400">info@ega.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section with copyright and terms */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} EGA Marketing Agency. {t('rightsReserved')} {/* Translated text */}
            </p>
            <div className="mt-4 flex space-x-6 md:mt-0">
              <Link href="/privacy" className="text-xs text-gray-400 transition duration-300 hover:text-lime-500">
                {t('privacyPolicy')} {/* Translated link */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;