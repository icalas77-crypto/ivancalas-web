import { Metadata } from 'next';
import Link from 'next/link';
import { Award, Users, Target, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sobre mi | Ivan Calas',
  description: 'Conoce mi historia: más de 20 años de experiencia en diseño web, SEO y fotografía profesional.',
};

export default function AboutPage() {
  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#FF6B35] font-bold mb-4 uppercase">Sobre mi</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Ivan Calas
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                Diseñador Web y especialista en SEO con más de 20 años de experiencia ayudando a empresas y profesionales a crecer en el mundo digital.
              </p>
              <p className="text-gray-400 mb-8">
                Creo soluciones digitales que combinan diseño moderno, rendimiento excepcional y estrategia de posicionamiento. Mi objetivo es simple: ayudar a tu negocio a tener presencia online sólida y generar resultados reales.
              </p>
              <Link
                href="/contacto"
                className="inline-block bg-[#FF6B35] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#e05a24] transition-all uppercase"
              >
                Trabajemos juntos
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="aspect-square bg-gradient-to-br from-[#FF6B35] to-orange-900 rounded-lg flex items-center justify-center">
                <p className="text-lg text-white/80">Foto de perfil</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: 'Anos de experiencia', value: '20+' },
              { label: 'Proyectos completados', value: '500+' },
              { label: 'Clientes satisfechos', value: '300+' },
              { label: 'Paises donde trabajo', value: 'Espana' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-4xl font-bold text-[#FF6B35] mb-2">{stat.value}</p>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">Mi historia</h2>
          <div className="space-y-12">
            {[
              {
                year: 'Inicio de los 2000s',
                title: 'El Comienzo',
                desc: 'Comencé a desarrollar sitios web en los primeros años del internet comercial. La pasión por crear soluciones digitales me llevó a especializarme en diseño y desarrollo web.',
              },
              {
                year: '2010s',
                title: 'Especializacion en SEO',
                desc: 'Cuando Google comenzó a dominar el mercado de búsqueda, me especialicé en posicionamiento SEO. Comprendí que una web hermosa no es suficiente: necesita visibilidad.',
              },
              {
                year: '2015+',
                title: 'Fotografia Profesional',
                desc: 'Amplié mis servicios incluyendo fotografía profesional. Descubrí que el contenido visual de calidad es fundamental para convertir visitas en clientes.',
              },
              {
                year: 'Hoy',
                title: 'Estrategia Integral',
                desc: 'Ofrezco una solución completa: diseño web + SEO + fotografía. Mi objetivo es que tu negocio destaque en internet y genere resultados medibles.',
              },
            ].map((item, idx) => (
              <div key={idx} className="border-l-4 border-[#FF6B35] pl-8 pb-8">
                <p className="text-[#FF6B35] font-bold mb-2">{item.year}</p>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">Mis valores</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Calidad',
                desc: 'No hago trabajos mediocres. Cada proyecto tiene mi máximo esfuerzo.',
              },
              {
                icon: Users,
                title: 'Atención Personalizada',
                desc: 'Trabajas directamente conmigo, no con un equipo impersonal.',
              },
              {
                icon: Target,
                title: 'Resultados',
                desc: 'Mi éxito es tu éxito. Trabajo con objetivos claros y medibles.',
              },
              {
                icon: Zap,
                title: 'Eficiencia',
                desc: 'Webs rápidas, procesos ágiles, entregas puntuales.',
              },
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="text-[#FF6B35] mb-4 flex justify-center">
                    <Icon size={40} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-gray-300 text-sm">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">¿En qué puedo ayudarte?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              'Diseño web profesional y moderno',
              'Posicionamiento SEO en Google',
              'Fotografía corporativa',
              'Optimizacion de rendimiento web',
              'Auditorias SEO completas',
              'Edicion y retoque fotografico',
              'Mantenimiento web y seguridad',
              'Consultoria digital estrategica',
            ].map((service, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-2 h-2 bg-[#FF6B35] rounded-full flex-shrink-0"></div>
                <span className="text-gray-300">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#FF6B35] to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Listo para crear algo extraordinario
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Contactame y hablemos sobre cómo puedo ayudar a tu negocio.
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-white text-[#FF6B35] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all uppercase"
          >
            Iniciar conversacion
          </Link>
        </div>
      </section>
    </div>
  );
}
