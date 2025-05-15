import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const navLinks = [
    {
      name: "Anasayfa",
      href: "/",
    },
    {
      name: "Hakkımızda",
      href: "/about",
    },
    {
      name: "Bakiye Yükle",
      href: "/balance",
    },
    {
      name: "İletişim",
      href: "/contact",
    },
  ];

  return (
    <footer className="w-full text-white bg-blue-900 px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex justify-center md:justify-start">
              <Image
                src="/logo.png"
                alt="Land of MOA Logo"
                width={160}
                height={60}
                className="h-24 w-auto"
                priority
              />
            </div>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed text-center md:text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="mt-8 md:mt-0">
            <h2 className="text-lg font-semibold text-amber-500 mb-4 md:mb-6 text-center md:text-left">
              Şirket
            </h2>
            <ul className="space-y-3 text-center md:text-left">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm md:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mt-8 md:mt-0">
            <h2 className="text-lg font-semibold text-amber-500 mb-4 md:mb-6 text-center md:text-left">
              İletişim
            </h2>
            <div className="space-y-3 text-center md:text-left">
              <p className="flex items-center justify-center md:justify-start gap-2 text-gray-300 text-sm md:text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +90 555 123 45 67
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2 text-gray-300 text-sm md:text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                info@landofmoa.com
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-6">
          <p className="text-center text-sm text-amber-500">
            © {new Date().getFullYear()} Land of MOA. Tüm Hakları Saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
