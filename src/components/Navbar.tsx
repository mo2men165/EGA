'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { logo } from '../../public/assets';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const t = useTranslations('navbar');
  const router = useRouter();
  const pathname = usePathname();
  const prevPathname = useRef(pathname);
  const languageMenuRef = useRef<HTMLDivElement>(null);
  const servicesMenuRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const isMobileRef = useRef(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      isMobileRef.current = window.innerWidth < 1024; // lg breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Close mobile menu when pathname changes (navigation completes)
  useEffect(() => {
    if (pathname !== prevPathname.current) {
      setIsOpen(false);
      prevPathname.current = pathname;
    }
  }, [pathname]);

  const handleServiceClick = () => {
    router.push('/services');
  };

  const toggleServicesDropdown = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event from bubbling up
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  // Check if link is active
  const isActive = (href: string) => {
    // Handle root path special case
    if (href === '/') {
      // Return true only if pathname is exactly '/en' or '/ar'
      return pathname === '/en' || pathname === '/ar';
    }
    
    // For other paths, check if pathname includes the href
    return pathname.includes(href);
  };

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only hide navbar on scroll for desktop
      if (!isMobileRef.current) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
          // Scrolling down
          setIsNavbarVisible(false);
        } else if (currentScrollY < lastScrollY.current) {
          // Scrolling up
          setIsNavbarVisible(true);
        }
      } else {
        // Always visible on mobile
        setIsNavbarVisible(true);
      }

      lastScrollY.current = currentScrollY;

      // Add a background when scrolled
      if (currentScrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close dropdown menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageMenuRef.current &&
        !languageMenuRef.current.contains(event.target as Node)
      ) {
        setIsLanguageMenuOpen(false);
      }
      if (
        servicesMenuRef.current &&
        !servicesMenuRef.current.contains(event.target as Node)
      ) {
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Define navigation links with translated titles
  const navLinks = [
    { title: t('home'), href: '/' },
    // Services link is handled separately for dropdown in desktop
    { title: t('about'), href: '/about' },
    { title: t('projects'), href: '/projects' },
    { title: t('blog'), href: '/blog' },
    { title: t('contact'), href: '/contact' },
  ];

  // Services submenu items
  const serviceLinks = [
    { title: t('branding'), href: '/services/branding' },
    { title: t('media'), href: '/services/media-production' },
    { title: t('software'), href: '/services/web-solutions' },
    { title: t('socialMedia'), href: '/services/social-media' },
    { title: t('performance'), href: '/services/performance-marketing' },
  ];

  // All mobile links - flattened structure
  const allMobileLinks = [
    ...navLinks.slice(0, 1), // Home
    { title: t('services'), href: '/services' }, // Main services link
    ...serviceLinks, // All service sublinks
    ...navLinks.slice(1) // About, Projects, Blog, Contact
  ];

  // Language switcher logic
  const switchLanguage = (lang: string) => {
    const segments = pathname.split('/');
    segments[1] = lang; // Replace the language segment
    router.push(segments.join('/'));
    setIsLanguageMenuOpen(false); // Close the language menu
  };

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  // Check if the current language is Arabic
  const isArabic = pathname.startsWith('/ar');

  return (
    <nav
      suppressHydrationWarning
      className={`fixed w-full p-6 top-0 z-50 transition-all duration-300 ${
        isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled ? 'bg-gray/80 backdrop-blur-md border-b-4 border-lime-500' : 'bg-gray border-b-4 border-lime-500'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex h-24 items-center justify-between ${
            isArabic ? 'flex-row-reverse' : 'flex-row'
          }`}
        >
          {/* Logo */}
          <div className="flex-shrink-0 p-2">
            <Link href="/" className="flex items-center">
              <Image
                src={logo}
                alt="EA Marketing Agency"
                width={200}
                height={80}
                className="h-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div
              className={`flex items-center space-x-6 ${
                isArabic ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className={`text-lg font-medium transition duration-300 hover:text-lime-500 ${
                    isActive(link.href) ? 'text-lime-500 font-bold' : 'text-gray-200'
                  }`}
                >
                  {link.title}
                </Link>
              ))}

              {/* Services dropdown - only for desktop */}
              <div className="relative" ref={servicesMenuRef}>
                <button
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  onClick={handleServiceClick}
                  className={`flex items-center text-lg cursor-pointer font-medium transition duration-300 hover:text-lime-500 ${
                    isActive('/services') ? 'text-lime-500 font-bold' : 'text-gray-200'
                  }`}
                >
                  <span>{t('services')}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 ml-1 transition-transform duration-300 ${
                      isServicesDropdownOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                
                <div
                  className={`absolute left-0 mt-2 w-64 bg-black/80 backdrop-blur-md rounded-md shadow-lg transition-all duration-300 ${
                    isServicesDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className={`block px-4 py-2 text-sm hover:bg-lime-500/10 hover:text-lime-500 ${
                        isActive(service.href) ? 'text-lime-500 bg-lime-500/5' : 'text-gray-200'
                      }`}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className={`rounded-md bg-lime-500 px-4 py-2 text-md font-semibold text-black transition duration-300 hover:bg-lime-400 ${
                  isActive('/quote') ? 'ring-2 ring-white' : ''
                }`}
              >
                {t('getQuote')}
              </Link>

              {/* Language Switcher */}
              <div className="relative" ref={languageMenuRef}>
                <button
                  onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                  className="flex items-center space-x-2 cursor-pointer mr-6 text-sm font-medium text-gray-200 transition duration-300 hover:text-lime-500"
                >
                  <span>🌐</span>
                  <span>{isArabic ? 'AR' : 'EN'}</span>
                </button>
                {isLanguageMenuOpen && (
                  <div className="absolute right-0 mt-2 w-24 bg-black/80 backdrop-blur-md rounded-md shadow-lg">
                    <button
                      onClick={() => switchLanguage('en')}
                      className={`w-full px-4 py-2 text-sm hover:bg-lime-500/10 hover:text-lime-500 flex items-center space-x-2 ${
                        pathname.startsWith('/en') ? 'text-lime-500' : 'text-gray-200'
                      }`}
                    >
                      <span>EN</span>
                      <span>English</span>
                    </button>
                    <button
                      onClick={() => switchLanguage('ar')}
                      className={`w-full px-4 py-2 text-sm hover:bg-lime-500/10 hover:text-lime-500 flex items-center space-x-2 ${
                        pathname.startsWith('/ar') ? 'text-lime-500' : 'text-gray-200'
                      }`}
                    >
                      <span>AR</span>
                      <span>العربية</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-200 transition duration-300 hover:bg-black/20 hover:text-lime-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - FLAT STRUCTURE without submenus */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden`}>
        <div className="px-2 pb-4 pt-2 backdrop-blur-md rounded-2xl bg-gray-950/85">
          <div className="flex flex-col space-y-2 px-3 pt-2">
            {/* All links displayed in a flat structure - NO onClick handlers that close the menu */}
            {allMobileLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className={`block rounded-md px-3 py-2 text-base font-medium transition duration-300 hover:bg-lime-500/10 hover:text-lime-500 text-center ${
                  isActive(link.href) ? 'text-lime-500 bg-lime-500/5 font-bold' : 'text-gray-200'
                } ${link.href.includes('/services/') ? 'pl-6 text-sm' : ''}`} // Indent service sublinks
              >
                {link.href.includes('/services/') && '→ '}{link.title}
              </Link>
            ))}

            <Link
              href="/contact"
              className={`mt-4 block rounded-md bg-lime-500 px-3 py-2 text-center text-base font-semibold text-black transition duration-300 hover:bg-lime-400 ${
                isActive('/quote') ? 'ring-2 ring-white' : ''
              }`}
            >
              {t('getQuote')}
            </Link>

            {/* Mobile Language Switcher */}
            <div className="mt-4 flex flex-col space-y-2">
              <button
                onClick={() => {
                  switchLanguage('en');
                }}
                className={`w-full px-3 py-2 text-base font-medium transition duration-300 hover:bg-lime-500/10 hover:text-lime-500 flex items-center justify-center space-x-2 ${
                  pathname.startsWith('/en') ? 'text-lime-500' : 'text-gray-200'
                }`}
              >
                <span>EN</span>
                <span>English</span>
              </button>
              <button
                onClick={() => {
                  switchLanguage('ar');
                }}
                className={`w-full px-3 py-2 text-base font-medium transition duration-300 hover:bg-lime-500/10 hover:text-lime-500 flex items-center justify-center space-x-2 ${
                  pathname.startsWith('/ar') ? 'text-lime-500' : 'text-gray-200'
                }`}
              >
                <span>AR</span>
                <span>العربية</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;