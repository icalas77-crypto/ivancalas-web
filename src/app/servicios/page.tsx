import { Metadata } from 'next';
import Link from 'next/link';
import { Briefcase, TrendingUp, Camera, Wrench, ShoppingCart, Edit3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Servicios | Diseño Web, SEO y Fotografía',
  description: 'Descubre mis servicios profesionales: diseño web, SEO, fotografía, edición, mantenimiento web y ecommerce management.',
};

const services = [
  {
    id: 'diseno-web',
    icon: Briefcase,
    title: 'Diseño Web Profesional',
    shortDesc: 'Webs modernas y rápidas',
    description: 'Creo webs modernas, rápidas y seguras, optimizadas para móviles y para Google. Trabajo con empresas y profesionales en toda España, creando webs que atraen clientes y generan resultados.',
    details: ['WordPress', 'Web corporativa', 'Landing pages'],
  },
  {
    id: 'seo',
    icon: TrendingUp,
    title: 'Posicionamiento SEO',
    shortDesc: 'Más visibilidad en Google',
    description: 'Mejora tu visibilidad en Google con una estrategia SEO completa: auditoría, optimización técnica, estructura web y contenido. Atrae tráfico cualificado y convierte visitas en clientes.',
    details: ['Auditoría SEO', 'SEO Técnico', 'SEO local y nacional'],
  },
  {
    id: 'fotografia',
    icon: Camera,
    title: 'Servicios Fotográficos',
    shortDesc: 'Fotografía profesional',
    description: 'Potencia tu marca con fotografía profesional: retratos corporativos, producto y eventos. Imágenes que generan confianza y elevan el impacto visual de tu web y redes sociales.',
    details: ['Retrato corporativo', 'Fotografía de producto', 'Eventos'],
  },
  {
    id: 'edicion',
    icon: Edit3,
    title: 'Edición Fotográfica',
    shortDesc: 'Retoques y edición profesional',
    description: 'Retoque y edición fotográfica profesional para mejorar la imagen de tu marca: corrección de color, limpieza, restauración y mejora avanzada. Resultados naturales y coherentes con tu estilo visual.',
    details: ['Corrección de color', 'Restauración', 'Mejora avanzada'],
  },
  {
    id: 'mantenimiento',
    icon: Wrench,
    title: 'Mantenimiento Web',
    shortDesc: 'Seguridad y actualizaciones',
    description: 'Mantengo tu web rápida, segura y siempre actualizada. Incluye actualizaciones, copias de seguridad, seguridad avanzada, optimización de rendimiento y soporte técnico. Tú te enfocas en tu negocio; yo me ocupo del resto.',
    details: ['Actualizaciones', 'Seguridad', 'Copias de seguridad'],
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'Administrador Tienda',
    shortDesc: 'Gestión ecommerce',
    description: 'Gestión completa de tu tienda online: productos, contenido, rendimiento, seguridad y mejoras continuas. Mantengo tu eCommerce optimizado para vender más y funcionar sin interrupciones.',
    details: ['Gestión de productos', 'Optimización SEO', 'Análisis de ventas'],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#FF6B35] font-bold mb-4 uppercase">SERVICIOS PROFESIONALES</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Diseño Web, SEO y Fotografía
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Con más de 20 años de experiencia, ayudo a empresas y profesionales a mejorar su presencia online con diseño web profesional, posicionamiento SEO y contenido visual de calidad.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-[#FF6B35] hover:shadow-lg hover:shadow-[#FF6B35]/20 transition-all group"
                >
                  <div className="text-[#FF6B35] mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{service.shortDesc}</p>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    {service.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-gray-400 flex items-center gap-2">
                        <span className="text-[#FF6B35]">•</span> {detail}
                      </p>
                    ))}
                  </div>
                  <Link
                    href="/contacto"
                    className="text-[#FF6B35] font-bold hover:underline inline-block"
                  >
                    Más información →
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">¿Por qué elegirnos?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '20+ Años de Experiencia',
                desc: 'Más de dos décadas creando proyectos digitales que funcionan y generan resultados reales.',
              },
              {
                title: 'Atención Personalizada',
                desc: 'Trabajas directamente conmigo, no con un equipo. Te acompaño en cada fase del proyecto.',
              },
              {
                title: 'Resultados Medibles',
                desc: 'Trabajo con objetivos claros y KPIs definidos para garantizar el éxito de tu proyecto.',
              },
            ].map((item, idx) => (
              <div key={idx} className="border-l-4 border-[#FF6B35] pl-6">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Listo para mejorar tu presencia online?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contáctame hoy y te propongo la mejor estrategia para tu negocio.
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-[#FF6B35] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#e05a24] transition-all uppercase"
          >
            Solicita tu presupuesto
          </Link>
        </div>
      </section>
    </div>
  );
}
