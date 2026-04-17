import { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contacto | Ivan Calas',
  description: 'Contactame para consultar sobre mis servicios de diseño web, SEO y fotografía profesional.',
};

export default function ContactPage() {
  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Hablemos de tu proyecto</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Cuéntame tu idea y te propongo la mejor estrategia para mejorar tu presencia online.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <div className="flex items-start gap-4">
                  <div className="text-[#FF6B35] mt-1">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Teléfono</h3>
                    <a
                      href="tel:+34652814970"
                      className="text-gray-300 hover:text-[#FF6B35] transition-colors"
                    >
                      +34 652 814 970
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-4">
                  <div className="text-[#FF6B35] mt-1">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Email</h3>
                    <a
                      href="mailto:info@ivancalas.es"
                      className="text-gray-300 hover:text-[#FF6B35] transition-colors"
                    >
                      info@ivancalas.es
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-4">
                  <div className="text-[#FF6B35] mt-1">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Ubicacion</h3>
                    <p className="text-gray-300">
                      Base en Avila, Espana<br />
                      Proyectos en remoto en toda Espana
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-4">
                  <div className="text-[#FF6B35] mt-1">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Disponibilidad</h3>
                    <p className="text-gray-300">
                      Lunes a viernes<br />
                      9:00 - 18:00 (horario Espana)
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-gray-800">
                <h3 className="font-bold text-lg mb-4">Conecta conmigo</h3>
                <div className="space-y-2">
                  <a
                    href="https://facebook.com/ivancalas77"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-300 hover:text-[#FF6B35] transition-colors"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://instagram.com/ivancalas77"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-300 hover:text-[#FF6B35] transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://linkedin.com/in/ivan-calas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-300 hover:text-[#FF6B35] transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Envíame un mensaje</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Preguntas frecuentes</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Cual es el tiempo de respuesta?',
                a: 'Respondo dentro de 24 horas laborales. Si es urgente, puedes llamarme directamente.',
              },
              {
                q: 'Trabajas fuera de Espana?',
                a: 'Principalmente trabajo con clientes en Espana, tanto de forma presencial como en remoto. Consulta tu caso específico.',
              },
              {
                q: 'Cuales son tus tarifas?',
                a: 'Las tarifas dependen del proyecto. Te daré un presupuesto personalizado después de conocer tus necesidades.',
              },
            ].map((item, idx) => (
              <div key={idx} className="border-l-4 border-[#FF6B35] pl-6">
                <h3 className="font-bold text-lg mb-2">{item.q}</h3>
                <p className="text-gray-300">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
