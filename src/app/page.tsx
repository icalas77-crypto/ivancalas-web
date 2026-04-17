import Link from 'next/link';
import Image from 'next/image';
import { Briefcase, TrendingUp, Camera, CheckCircle } from 'lucide-react';
import { getWordPressPosts, cleanContent, truncateText } from '@/lib/wordpress';

export default async function Home() {
  const posts = await getWordPressPosts(4);  // Fetch 4 latest posts from WordPress
  return (
    <div className="bg-black text-white">
      {/* Hero Section - MEJORADO */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Hero Content - Left Side */}
            <div className="space-y-8 z-10">
              {/* Title Section */}
              <div>
                <h1 className="text-5xl md:text-7xl font-bold text-[#FF6B35] leading-tight mb-2">
                  Diseño Web y SEO para toda España
                </h1>
                <p className="text-base text-white font-bold mb-6 uppercase tracking-wider">HOLA, SOY</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                  Iván Calás
                </h2>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-300 leading-relaxed">
                Creo páginas web rápidas y optimizadas para Google, pensadas para convertir visitas en clientes.
                Trabajo en remoto con negocios de toda España.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/contacto"
                  className="bg-[#FF6B35] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#e05a24] transition-all uppercase text-sm"
                >
                  ¡SOLICITA PRESUPUESTO!
                </Link>
                <Link
                  href="#servicios"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-black transition-all uppercase text-sm"
                >
                  VER SERVICIOS
                </Link>
              </div>

              {/* Meta Info */}
              <p className="text-sm text-gray-400 pt-4">
                📍 Base en España · Proyectos en remoto · +20 años de experiencia
              </p>
            </div>

            {/* Hero Image - Right Side */}
            <div className="hidden md:flex items-center justify-end">
              <Image
                src="/images/movil-preview.webp"
                alt="Ivan Calas - Diseño web y SEO"
                width={480}
                height={640}
                className="rounded-lg object-cover filter brightness-75"
                priority
              />
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

      {/* Blog Section - NUEVO */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-16">
            <p className="text-[#FF6B35] font-bold mb-4 uppercase text-sm">EN NUESTRO BLOG</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Últimas Novedades y Consejos de Diseño Web, SEO y Fotografía
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl">
              Mantente al día con las últimas tendencias en diseño web, SEO, UX/UI y fotografía profesional. 
              Comparto consejos prácticos y estrategias para impulsar tu proyecto digital.
            </p>
          </div>

          {/* Blog Posts Grid - DINÁMICO DESDE WORDPRESS */}
          <div className="grid md:grid-cols-4 gap-8">
            {posts.length > 0 ? (
              posts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <div className="group cursor-pointer h-full">
                    <div className="bg-gradient-to-br from-[#FF6B35] to-orange-600 rounded-lg p-6 h-full hover:shadow-xl transition-all transform group-hover:scale-105">
                      <p className="text-white text-xs font-bold mb-4 uppercase">Blog Post</p>
                      <h3 className="text-white font-bold mb-4 line-clamp-3 group-hover:line-clamp-none transition-all">
                        {post.title.rendered}
                      </h3>
                      <p className="text-white/90 text-sm font-bold">Leer más</p>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-gray-400">No hay posts disponibles</p>
            )}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="border-2 border-[#FF6B35] text-[#FF6B35] px-8 py-4 rounded-lg font-bold hover:bg-[#FF6B35] hover:text-white transition-all uppercase inline-block"
            >
              VER TODOS LOS ARTÍCULOS
            </Link>
          </div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content Left */}
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                ¡Hablemos de tu proyecto!
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Cuéntame tu idea y te propongo la mejor estrategia para mejorar tu presencia online.
                Diseño webs rápidas y optimizadas para Google, enfocadas en convertir visitas en clientes.
                Trabajo con empresas y profesionales en toda España y en remoto.
              </p>
              <Link
                href="/contacto"
                className="bg-[#FF6B35] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#e05a24] transition-all uppercase inline-block text-sm w-full md:w-auto text-center"
              >
                ESCRÍBEME
              </Link>
            </div>

            {/* Image Right - IVAN'S PHOTO */}
            <div className="hidden md:flex items-center justify-end">
              <Image
                src="/images/ivan-calas.webp"
                alt="Iván Calás - Diseñador Web y Especialista en SEO"
                width={500}
                height={600}
                className="rounded-lg object-cover filter brightness-110"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
