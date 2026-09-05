'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

import Image from 'next/image';
import Logo from '@/public/Novi.svg';
import { NAVITEMS } from '@/components/layout/Header/NavItems';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border-stroke backdrop-blur">
      <div className="flex h-20 container  mx-auto items-center justify-between px-4 sm:px-6 lg:px-16">
        <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <div className="size-7">
            <Image alt="Logo" src={Logo} preload className="w-full h-full object-contain" />
          </div>
          <span className="text-xl font-extrabold tracking-tight ">Novi</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAVITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[15px] font-medium text-text-secondary transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-6 lg:gap-4 md:flex">
          <Link
            href="/login"
            className="rounded-lg px-4 py-2 text-[15px] font-semibold text-text-primary transition hover:bg-gray-100"
          >
            Sign In
          </Link>

          <Link
            href="/contact"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-hover"
          >
            Start Free
          </Link>
          <button
            type="button"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-lg p-2 transition hover:bg-gray-100 lg:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <button
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-lg p-2 transition hover:bg-gray-100 md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        onClick={closeMenu}
        className={`
          fixed inset-0 top-20 z-40 bg-black/30
          transition-opacity duration-300
          lg:hidden
          ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}
        `}
      />

      <aside
        className={`
          fixed right-0 top-0 z-50
          h-dvh md:w-70 w-full
          bg-white shadow-2xl
          transition-transform duration-300 ease-in-out
          lg:hidden
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex h-20 items-center justify-between border-b border-gray-100 px-5">
          <span className="text-lg font-bold">Menu</span>

          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className="rounded-lg p-2 transition hover:bg-gray-100"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex flex-col px-4 py-6">
          {NAVITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              className="
                rounded-lg px-4 py-3
                text-sm font-medium text-text-secondary
                transition-all duration-200
                hover:bg-primary hover:text-white
              "
            >
              {item.name}
            </Link>
          ))}

          <div className="mt-6 flex flex-col gap-3 border-t border-gray-100 pt-6">
            <Link
              href="/login"
              onClick={closeMenu}
              className="
                rounded-lg border border-border-stroke
                px-4 py-2 text-center
                text-sm font-semibold
                transition hover:bg-gray-50
              "
            >
              Sign In
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="
                rounded-lg bg-primary
                px-4 py-2 text-center
                text-sm font-semibold text-white
                transition hover:bg-primary-hover
              "
            >
              Start Free
            </Link>
          </div>
        </nav>
      </aside>
    </header>
  );
};

export default Header;
