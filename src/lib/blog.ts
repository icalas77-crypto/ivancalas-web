import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from './utils';

const blogsDirectory = path.join(process.cwd(), 'public/blog');

export async function getBlogPosts(): Promise<BlogPost[]> {
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
