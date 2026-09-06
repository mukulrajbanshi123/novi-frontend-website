'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { NAVITEMS } from '@/components/layout/Header/NavItems';
import Logo from '@/public/Novi.svg';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border-stroke bg-white/50 backdrop-blur">
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
              className="group relative text-[15px] font-medium text-text-secondary transition-colors hover:text-primary"
            >
              {item.name}

              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full" />
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-6 lg:gap-4 md:flex">
          <Link
            href="/#"
            className="rounded-lg px-4 py-2 text-[15px] font-semibold text-text-primary transition hover:bg-gray-100"
          >
            Sign In
          </Link>

          <Link
            href="/#"
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

      <AnimatePresence>
        {isOpen && (
          <motion.aside
            key="mobile-menu"
            aria-hidden={!isOpen}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
            className="
        fixed right-0 top-0 z-50
        h-dvh w-full md:w-70
        bg-white shadow-2xl
        lg:hidden
      "
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
              {NAVITEMS.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.1 + index * 0.1,
                    duration: 0.25,
                    ease: 'easeOut',
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="
                block rounded-lg px-4 py-3
                text-sm font-medium text-text-secondary
                transition-all duration-200
                hover:bg-primary hover:text-white
              "
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.25,
                  duration: 0.3,
                  ease: 'easeOut',
                }}
                className="mt-6 flex w-full gap-4 border-t border-gray-100 pt-6"
              >
                <Link
                  href="/#"
                  onClick={closeMenu}
                  className="
              w-full rounded-lg border border-border-stroke
              px-4 py-2 text-center
              text-sm font-semibold
              transition hover:bg-gray-50
            "
                >
                  Sign In
                </Link>

                <Link
                  href="/#"
                  onClick={closeMenu}
                  className="
              w-full rounded-lg bg-primary
              px-4 py-2 text-center
              text-sm font-semibold text-white
              transition hover:bg-primary-hover
            "
                >
                  Start Free
                </Link>
              </motion.div>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
