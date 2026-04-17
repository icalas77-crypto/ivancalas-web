'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-900 bg-black">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
            <Image src="/images/logo.svg" alt="Ivan Calas" width={40} height={40} className="h-10 w-auto" />
            <span className="hidden font-bold text-white sm:inline">Ivan Calas</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link href="/" className="text-white transition-colors hover:text-[#FF6B35]">
              Inicio
            </Link>
            <Link href="/servicios" className="text-white transition-colors hover:text-[#FF6B35]">
              Servicios
            </Link>
            <Link href="/sobre-mi" className="text-white transition-colors hover:text-[#FF6B35]">
              Sobre mi
            </Link>
            <Link href="/blog" className="text-white transition-colors hover:text-[#FF6B35]">
              Blog
            </Link>
            <Link href="/contacto" className="text-white transition-colors hover:text-[#FF6B35]">
              Contacto
            </Link>
          </nav>

          <Link
            href="/contacto"
            className="hidden rounded-lg bg-[#FF6B35] px-6 py-2 font-bold text-white transition-colors hover:bg-[#e05a24] md:inline-block"
          >
            Hablemos
          </Link>

          <button
            type="button"
            className="text-white md:hidden"
            aria-label={isMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="mt-4 space-y-4 border-t border-gray-900 pt-4 md:hidden">
            <Link href="/" className="block text-white transition-colors hover:text-[#FF6B35]" onClick={closeMenu}>
              Inicio
            </Link>
            <Link
              href="/servicios"
              className="block text-white transition-colors hover:text-[#FF6B35]"
              onClick={closeMenu}
            >
              Servicios
            </Link>
            <Link
              href="/sobre-mi"
              className="block text-white transition-colors hover:text-[#FF6B35]"
              onClick={closeMenu}
            >
              Sobre mi
            </Link>
            <Link href="/blog" className="block text-white transition-colors hover:text-[#FF6B35]" onClick={closeMenu}>
              Blog
            </Link>
            <Link
              href="/contacto"
              className="block text-white transition-colors hover:text-[#FF6B35]"
              onClick={closeMenu}
            >
              Contacto
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
