import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politica de Cookies | Ivan Calas',
};

export default function CookiesPage() {
  return (
    <div className="bg-black text-white min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold mb-12">Politica de Cookies</h1>

        <div className="prose prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">¿Qué son las Cookies?</h2>
            <p className="text-gray-300">
              Las cookies son pequeños archivos de texto que se almacenan en tu navegador cuando
              visitas un sitio web. Se utilizan para mejorar la experiencia del usuario.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Tipos de Cookies que Utilizamos</h2>
            <ul className="text-gray-300 list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Cookies esenciales:</strong> Necesarias para el funcionamiento del sitio
              </li>
              <li>
                <strong>Cookies de analítica:</strong> Nos ayudan a entender cómo usas el sitio
              </li>
              <li>
                <strong>Cookies de marketing:</strong> Utilizadas para personalizar la experiencia
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Control de Cookies</h2>
            <p className="text-gray-300">
              Puedes controlar y eliminar cookies a través de la configuración de tu navegador.
              Sin embargo, algunas funciones del sitio podrían no funcionar correctamente sin ellas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Consentimiento</h2>
            <p className="text-gray-300">
              Al continuar navegando en este sitio, aceptas el uso de cookies según se describe
              en esta política.
            </p>
          </section>

          <p className="text-gray-500 text-sm pt-8">
            Última actualización: 2026
          </p>
        </div>
      </div>
    </div>
  );
}
