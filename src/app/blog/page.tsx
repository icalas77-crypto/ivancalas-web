import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogPosts } from '@/lib/blog';
import { Calendar, Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog | Diseno Web, SEO y Fotografia',
  description: 'Articulos sobre diseno web, posicionamiento SEO, fotografia profesional y tecnologia para creadores.',
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#FF6B35] font-bold mb-4 uppercase">Blog</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Articulos sobre Diseno Web, SEO y Fotografia
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Mantente al dia con las ultimas tendencias en diseno web, posicionamiento SEO,
            fotografia profesional y tecnologia para creadores digitales.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">
                No hay articulos disponibles en este momento. Vuelve pronto.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-[#FF6B35] transition-all group"
                >
                  {post.image && (
                    <div className="aspect-video bg-gray-800 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={1200}
                        height={675}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    {post.category && (
                      <p className="text-[#FF6B35] text-sm font-bold uppercase mb-2">
                        {post.category}
                      </p>
                    )}
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#FF6B35] transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(post.date).toLocaleDateString('es-ES')}
                      </div>
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex items-center gap-1">
                          <Tag size={14} />
                          {post.tags[0]}
                        </div>
                      )}
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-[#FF6B35] font-bold hover:underline"
                    >
                      Leer mas
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
