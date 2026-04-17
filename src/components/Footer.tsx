import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-gray-900 bg-black text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF6B35] text-sm font-bold text-white">
                IC
              </div>
              <span className="font-bold text-white">Ivan Calas</span>
            </div>
            <p className="text-sm text-gray-400">
              Diseno web y SEO para negocios en toda Espana. Mas de 20 anos de experiencia.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-white">Navegacion</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="transition-colors hover:text-[#FF6B35]">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="transition-colors hover:text-[#FF6B35]">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/sobre-mi" className="transition-colors hover:text-[#FF6B35]">
                  Sobre mi
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition-colors hover:text-[#FF6B35]">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-white">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-[#FF6B35]" />
                <a href="tel:+34652814970" className="transition-colors hover:text-[#FF6B35]">
                  +34 652 814 970
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-[#FF6B35]" />
                <a href="mailto:info@ivancalas.es" className="transition-colors hover:text-[#FF6B35]">
                  info@ivancalas.es
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-white">Redes</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://facebook.com/ivancalas77"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#FF6B35]"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/ivancalas77"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#FF6B35]"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/ivan-calas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#FF6B35]"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 py-8">
          <div className="mb-8">
            <h4 className="mb-3 font-bold text-white">Suscribete a mi newsletter</h4>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 rounded-lg border border-gray-800 bg-gray-900 px-4 py-2 text-white focus:border-[#FF6B35] focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-lg bg-[#FF6B35] px-6 py-2 font-bold text-white transition-colors hover:bg-[#e05a24]"
              >
                Suscribir
              </button>
            </form>
          </div>

          <div className="flex flex-col items-center justify-between text-xs text-gray-500 md:flex-row">
            <p>&copy; {currentYear} Ivan Calas. Todos los derechos reservados.</p>
            <div className="mt-4 flex gap-4 md:mt-0">
              <Link href="/legal/privacidad" className="transition-colors hover:text-[#FF6B35]">
                Privacidad
              </Link>
              <Link href="/legal/terminos" className="transition-colors hover:text-[#FF6B35]">
                Terminos
              </Link>
              <Link href="/legal/cookies" className="transition-colors hover:text-[#FF6B35]">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
