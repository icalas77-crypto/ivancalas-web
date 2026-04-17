// WordPress REST API Integration
// https://ivancalas.es/wp-json/wp/v2/

const WORDPRESS_URL = 'https://ivancalas.es';
const WP_API_BASE = `${WORDPRESS_URL}/wp-json/wp/v2`;

export interface WordPressPost {
  id: number;
  date: string;
  date_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number;
  categories: number[];
  _links: {
    self: Array<{ href: string }>;
    collection: Array<{ href: string }>;
    about: Array<{ href: string }>;
    author: Array<{ href: string; embeddable: boolean }>;
    replies: Array<{ href: string; embeddable: boolean }>;
    'version-history': Array<{ href: string }>;
    'wp:featuredmedia': Array<{ href: string; embeddable: boolean }>;
    'wp:attachment': Array<{ href: string }>;
    'wp:term': Array<{ taxonomy: string; href: string }>;
    curies: Array<{ name: string; href: string; templated: boolean }>;
  };
}

export interface WordPressMedia {
  id: number;
  date: string;
  slug: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  media_details: {
    width: number;
    height: number;
  };
  source_url: string;
  alt_text: string;
}

/**
 * Fetch posts from WordPress
 * @param perPage Number of posts to fetch (default: 10)
 * @param page Page number (default: 1)
 * @returns Array of posts
 */
export async function getWordPressPosts(
  perPage: number = 10,
  page: number = 1,
  orderBy: 'date' | 'title' | 'relevance' = 'date',
  order: 'asc' | 'desc' = 'desc'
): Promise<WordPressPost[]> {
  try {
    const response = await fetch(
      `${WP_API_BASE}/posts?per_page=${perPage}&page=${page}&orderby=${orderBy}&order=${order}&_embed=1`,
      {
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching WordPress posts:', error);
    return [];
  }
}

/**
 * Fetch a single post by slug
 */
export async function getWordPressPostBySlug(slug: string): Promise<WordPressPost | null> {
  try {
    const response = await fetch(`${WP_API_BASE}/posts?slug=${slug}&_embed=1`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }

    const posts = await response.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error('Error fetching WordPress post by slug:', error);
    return null;
  }
}

/**
 * Fetch media (images) from WordPress
 */
export async function getWordPressMedia(mediaId: number): Promise<WordPressMedia | null> {
  try {
    const response = await fetch(`${WP_API_BASE}/media/${mediaId}`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching WordPress media:', error);
    return null;
  }
}

/**
 * Get featured image URL from post
 */
export async function getFeaturedImageUrl(post: WordPressPost): Promise<string | null> {
  if (!post.featured_media) return null;

  const media = await getWordPressMedia(post.featured_media);
  return media?.source_url || null;
}

/**
 * Clean HTML content from WordPress
 */
export function cleanContent(html: string): string {
  // Remove HTML tags
  return html.replace(/<[^>]*>/g, '').trim();
}

/**
 * Truncate text to a certain length
 */
export function truncateText(text: string, length: number = 150): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
}

/**
 * Format date
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

/**
 * Convert WordPress post to BlogPost format
 */
export async function wordPressToBlogPost(post: WordPressPost) {
  const featuredImage = post.featured_media ? await getWordPressMedia(post.featured_media) : null;
  
  return {
    slug: post.slug,
    title: post.title.rendered,
    description: cleanContent(post.excerpt.rendered) || truncateText(cleanContent(post.content.rendered), 150),
    date: post.date,
    content: post.content.rendered,
    image: featuredImage?.source_url || null,
    category: 'Blog',
    tags: [],
  };
}
