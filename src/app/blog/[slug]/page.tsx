import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogPost, getBlogSlugs } from '@/lib/blog';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: 'Articulo no encontrado',
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      images: post.image ? [{ url: post.image }] : [],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-black text-white">
      <article>
        {/* Hero */}
        <section className="py-12 border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="flex items-center gap-2 text-[#FF6B35] hover:underline mb-6"
            >
              <ArrowLeft size={18} />
              Volver al blog
            </Link>
            {post.category && (
              <p className="text-[#FF6B35] text-sm font-bold uppercase mb-4">
                {post.category}
              </p>
            )}
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                {new Date(post.date).toLocaleDateString('es-ES')}
              </div>
              {post.tags && post.tags.length > 0 && (
                <div className="flex items-center gap-2">
                  <Tag size={18} />
                  {post.tags.join(', ')}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Featured Image */}
        {post.image && (
          <section className="py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={675}
                className="w-full aspect-video object-cover rounded-lg"
              />
            </div>
          </section>
        )}

        {/* Content */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-invert max-w-none">
              {post.content.split('\n').map((line, idx) => {
                if (!line.trim()) return null;
                if (line.startsWith('# ')) {
                  return (
                    <h2 key={idx} className="text-3xl font-bold mt-8 mb-4">
                      {line.replace('# ', '')}
                    </h2>
                  );
                }
                if (line.startsWith('## ')) {
                  return (
                    <h3 key={idx} className="text-2xl font-bold mt-6 mb-3">
                      {line.replace('## ', '')}
                    </h3>
                  );
                }
                if (line.startsWith('### ')) {
                  return (
                    <h4 key={idx} className="text-xl font-bold mt-4 mb-2">
                      {line.replace('### ', '')}
                    </h4>
                  );
                }
                if (line.startsWith('- ')) {
                  return (
                    <ul key={idx} className="list-disc list-inside text-gray-300 mb-4 ml-4">
                      <li>{line.replace('- ', '')}</li>
                    </ul>
                  );
                }
                if (line.startsWith('* ')) {
                  return (
                    <ul key={idx} className="list-disc list-inside text-gray-300 mb-4 ml-4">
                      <li>{line.replace('* ', '')}</li>
                    </ul>
                  );
                }
                return (
                  <p key={idx} className="text-gray-300 mb-4">
                    {line}
                  </p>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-gray-900 mt-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">¿Necesitas ayuda con tu proyecto?</h2>
            <p className="text-gray-300 mb-8">
              Contactame para consultar sobre mis servicios de diseno web, SEO y fotografia.
            </p>
            <Link
              href="/contacto"
              className="inline-block bg-[#FF6B35] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#e05a24] transition-all uppercase"
            >
              Iniciar conversacion
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
