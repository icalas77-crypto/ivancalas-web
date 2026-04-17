import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politica de Privacidad | Ivan Calas',
};

export default function PrivacyPage() {
  return (
    <div className="bg-black text-white min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold mb-12">Politica de Privacidad</h1>

        <div className="prose prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Responsable del Tratamiento</h2>
            <p className="text-gray-300">
              Ivan Calas es responsable del tratamiento de tus datos personales. Puedes contactarme
              en info@ivancalas.es para cualquier cuestión relacionada con tu privacidad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Datos que Recopilamos</h2>
            <p className="text-gray-300">
              Recopilamos información que voluntariamente proporcionas a través de:
            </p>
            <ul className="text-gray-300 list-disc list-inside space-y-2 ml-4">
              <li>Formularios de contacto</li>
              <li>Suscripción a newsletter</li>
              <li>Consultas por email</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Uso de tus Datos</h2>
            <p className="text-gray-300">
              Utilizamos tus datos para:
            </p>
            <ul className="text-gray-300 list-disc list-inside space-y-2 ml-4">
              <li>Responder a tus consultas</li>
              <li>Enviar información sobre mis servicios</li>
              <li>Mejorar la experiencia del sitio web</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Comparticion de Datos</h2>
            <p className="text-gray-300">
              No compartimos tus datos con terceros sin tu consentimiento, excepto cuando sea
              legalmente requerido.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Tus Derechos</h2>
            <p className="text-gray-300">
              Tienes derecho a acceder, corregir, eliminar o limitar el uso de tus datos personales.
              Contactame en info@ivancalas.es para ejercer estos derechos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Cookies</h2>
            <p className="text-gray-300">
              Este sitio utiliza cookies para mejorar la experiencia del usuario. Al continuar
              navegando, aceptas el uso de cookies.
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
