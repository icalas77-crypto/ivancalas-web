import Link from 'next/link';
import { Briefcase, TrendingUp, Camera, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <p className="text-[#FF6B35] font-bold mb-2">HOLA, SOY</p>
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
                  Ivan Calas
                </h1>
                <p className="text-xl text-gray-300">
                  Creo paginas web rapidas y optimizadas para Google, pensadas para convertir
                  visitas en clientes. Trabajo en remoto con negocios de toda Espana.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contacto"
                  className="bg-[#FF6B35] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#e05a24] transition-all uppercase"
                >
                  SOLICITA PRESUPUESTO
                </Link>
                <Link
                  href="#servicios"
                  className="border-2 border-[#FF6B35] text-[#FF6B35] px-8 py-4 rounded-lg font-bold hover:bg-[#FF6B35] hover:text-white transition-all uppercase"
                >
                  VER SERVICIOS
                </Link>
              </div>
              <p className="text-sm text-gray-400 flex items-center gap-2">
                <span>📍</span> Base en Espana · Proyectos en remoto · +20 años de experiencia
              </p>
            </div>
            <div className="hidden md:block">
              <div className="aspect-square bg-gradient-to-br from-[#FF6B35] to-orange-900 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <p className="text-lg text-white/80">Imagen de perfil</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#FF6B35] font-bold mb-4 uppercase">POR QUE DEBES CONTRATARME</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            La Experiencia que Impulsa tu Negocio Digital
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "20 Anos de Experiencia Comprobada",
                description: "Mas de dos decadas creando proyectos digitales solidos. Mi trayectoria es tu garantia.",
              },
              {
                icon: Briefcase,
                title: "Diseno Web + SEO",
                description: "No hago webs solo bonitas: creo paginas rapidas, claras y preparadas para posicionar.",
              },
              {
                icon: TrendingUp,
                title: "Impacto real y medible",
                description: "Trabajo con objetivos claros: mejorar tu presencia online y generar oportunidades reales.",
              },
              {
                icon: Camera,
                title: "Atencion personalizada",
                description: "Tratas conmigo, no con un equipo. Te acompano en cada fase del proyecto.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="border-2 border-[#FF6B35] rounded-lg p-6 hover:bg-[#FF6B35] hover:bg-opacity-10 transition-all">
                  <div className="text-[#FF6B35] mb-4">
                    <Icon size={32} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="servicios" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#FF6B35] font-bold mb-4 uppercase">SERVICIOS</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Diseno Web y SEO para negocios en toda Espana
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Diseno Web Profesional",
                description: "Creo webs modernas, rapidas y seguras, optimizadas para moviles y para Google.",
              },
              {
                title: "Posicionamiento SEO",
                description: "Mejora tu visibilidad en Google con una estrategia SEO completa y resultados medibles.",
              },
              {
                title: "Fotografia Profesional",
                description: "Potencia tu marca con fotografia profesional que genera confianza e impacto visual.",
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-gray-900 rounded-lg p-8 hover:border-[#FF6B35] border-2 border-transparent transition-all">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <Link
                  href="#contacto"
                  className="text-[#FF6B35] font-bold hover:underline"
                >
                  Mas informacion
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#FF6B35] to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Hablemos de tu proyecto
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Cuentame tu idea y te propongo la mejor estrategia para mejorar tu presencia online.
          </p>
          <Link
            href="/contacto"
            className="bg-white text-[#FF6B35] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all uppercase inline-block"
          >
            ESCRIBEME
          </Link>
        </div>
      </section>
    </div>
  );
}
