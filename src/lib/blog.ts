import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from './utils';
import { getWordPressPosts, wordPressToBlogPost } from './wordpress';

const blogsDirectory = path.join(process.cwd(), 'public/blog');

/**
 * Get blog posts from WordPress (primary) with fallback to local files
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    // Try to fetch from WordPress first
    const wpPosts = await getWordPressPosts(50);
    
    if (wpPosts.length > 0) {
      // Convert WordPress posts to BlogPost format
      const blogPosts = await Promise.all(wpPosts.map(post => wordPressToBlogPost(post)));
      return blogPosts;
    }
  } catch (error) {
    console.warn('Failed to fetch posts from WordPress, falling back to local files:', error);
  }

  // Fallback to local markdown files if WordPress is unavailable
  try {
    if (!fs.existsSync(blogsDirectory)) {
      return [];
    }

    const files = fs.readdirSync(blogsDirectory);
    const posts = files
      .filter((file) => file.endsWith('.md'))
      .map((file) => {
        const filePath = path.join(blogsDirectory, file);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
          slug: file.replace(/\.md$/, ''),
          title: data.title || 'Sin título',
          description: data.description || '',
          date: data.date || new Date().toISOString(),
          content,
          image: data.image,
          category: data.category,
          tags: data.tags || [],
        } as BlogPost;
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return posts;
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    // Try to fetch from WordPress first
    const { getWordPressPostBySlug } = await import('./wordpress');
    const wpPost = await getWordPressPostBySlug(slug);
    
    if (wpPost) {
      return await wordPressToBlogPost(wpPost);
    }
  } catch (error) {
    console.warn(`Failed to fetch post from WordPress (${slug}), falling back to local:`, error);
  }

  // Fallback to local markdown file
  try {
    const filePath = path.join(blogsDirectory, `${slug}.md`);

    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || 'Sin título',
      description: data.description || '',
      date: data.date || new Date().toISOString(),
      content,
      image: data.image,
      category: data.category,
      tags: data.tags || [],
    } as BlogPost;
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

export async function getBlogSlugs(): Promise<string[]> {
  try {
    // Try to get slugs from WordPress first
    const wpPosts = await getWordPressPosts(100);
    if (wpPosts.length > 0) {
      return wpPosts.map(post => post.slug);
    }
  } catch (error) {
    console.warn('Failed to fetch slugs from WordPress, falling back to local files:', error);
  }

  // Fallback to local markdown files
  try {
    if (!fs.existsSync(blogsDirectory)) {
      return [];
    }

    const files = fs.readdirSync(blogsDirectory);
    return files
      .filter((file) => file.endsWith('.md'))
      .map((file) => file.replace(/\.md$/, ''));
  } catch (error) {
    console.error('Error reading blog slugs:', error);
    return [];
  }
}
