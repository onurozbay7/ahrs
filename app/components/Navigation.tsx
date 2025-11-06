'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#383e42]/20 bg-[#f2f2f2] shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Name */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="AHRS Logo"
                width={56}
                height={56}
                className="h-14 w-14 rounded object-contain"
              />
              <div className="hidden sm:flex sm:items-center">
                <span className="text-sm font-medium text-[#383e42] leading-snug translate-y-1">
                  Association for Human Rights in Syria
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link
              href="/"
              className="text-sm font-medium text-[#383e42] transition-colors hover:text-black"
            >
              Home
            </Link>
            
            {/* About Dropdown - Fixed hover issue */}
            <div
              className="relative"
              onMouseEnter={() => setIsAboutOpen(true)}
              onMouseLeave={() => setIsAboutOpen(false)}
            >
              <button className="flex items-center text-sm font-medium text-[#383e42] transition-colors hover:text-black">
                About
                <svg
                  className={`ml-1 h-4 w-4 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`}
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
              
              {isAboutOpen && (
                <div 
                  className="absolute left-0 top-full pt-2"
                  onMouseEnter={() => setIsAboutOpen(true)}
                  onMouseLeave={() => setIsAboutOpen(false)}
                >
                  <div className="w-56 rounded-md border border-gray-200 bg-white shadow-lg">
                    <div className="py-1">
                      <Link
                        href="/about/hakkimizda"
                        className="block px-4 py-2 text-sm text-[#383e42] transition-colors hover:bg-gray-50 hover:text-black"
                      >
                        About Us
                      </Link>
                      <Link
                        href="/about/merkez"
                        className="block px-4 py-2 text-sm text-[#383e42] transition-colors hover:bg-gray-50 hover:text-black"
                      >
                        Center
                      </Link>
                      <Link
                        href="/about/temsilcilikler"
                        className="block px-4 py-2 text-sm text-[#383e42] transition-colors hover:bg-gray-50 hover:text-black"
                      >
                        International Representations
                      </Link>
                      <Link
                        href="/about/uyelik"
                        className="block px-4 py-2 text-sm text-[#383e42] transition-colors hover:bg-gray-50 hover:text-black"
                      >
                        Membership
                      </Link>
                      <Link
                        href="/about/tuzuk"
                        className="block px-4 py-2 text-sm text-[#383e42] transition-colors hover:bg-gray-50 hover:text-black"
                      >
                        Statute
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/news"
              className="text-sm font-medium text-[#383e42] transition-colors hover:text-black"
            >
              News
            </Link>
            <Link
              href="/reports"
              className="text-sm font-medium text-[#383e42] transition-colors hover:text-black"
            >
              Reports
            </Link>
            <Link
              href="/events"
              className="text-sm font-medium text-[#383e42] transition-colors hover:text-black"
            >
              Events
            </Link>
            <Link
              href="/links"
              className="text-sm font-medium text-[#383e42] transition-colors hover:text-black"
            >
              Links
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-[#383e42] transition-colors hover:text-black"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 text-[#383e42]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 border-t border-gray-200 pb-3 pt-2">
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium text-[#383e42] hover:bg-gray-50 hover:text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile About Submenu */}
              <div>
                <button
                  onClick={() => setIsAboutOpen(!isAboutOpen)}
                  className="flex w-full items-center justify-between px-3 py-2 text-base font-medium text-[#383e42] hover:bg-gray-50 hover:text-black"
                >
                  About
                  <svg
                    className={`h-4 w-4 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`}
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
                {isAboutOpen && (
                  <div className="ml-4 space-y-1 border-l-2 border-gray-200">
                    <Link
                      href="/about/hakkimizda"
                      className="block px-3 py-2 text-sm text-[#383e42] hover:bg-gray-50 hover:text-black"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About Us
                    </Link>
                    <Link
                      href="/about/merkez"
                      className="block px-3 py-2 text-sm text-[#383e42] hover:bg-gray-50 hover:text-black"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Center
                    </Link>
                    <Link
                      href="/about/temsilcilikler"
                      className="block px-3 py-2 text-sm text-[#383e42] hover:bg-gray-50 hover:text-black"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      International Representations
                    </Link>
                    <Link
                      href="/about/uyelik"
                      className="block px-3 py-2 text-sm text-[#383e42] hover:bg-gray-50 hover:text-black"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Membership
                    </Link>
                    <Link
                      href="/about/tuzuk"
                      className="block px-3 py-2 text-sm text-[#383e42] hover:bg-gray-50 hover:text-black"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Statute
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/news"
                className="block px-3 py-2 text-base font-medium text-[#383e42] hover:bg-gray-50 hover:text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                News
              </Link>
              <Link
                href="/reports"
                className="block px-3 py-2 text-base font-medium text-[#383e42] hover:bg-gray-50 hover:text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                Reports
              </Link>
              <Link
                href="/events"
                className="block px-3 py-2 text-base font-medium text-[#383e42] hover:bg-gray-50 hover:text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                href="/links"
                className="block px-3 py-2 text-base font-medium text-[#383e42] hover:bg-gray-50 hover:text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                Links
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-medium text-[#383e42] hover:bg-gray-50 hover:text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
