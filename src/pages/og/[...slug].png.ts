import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { generateOgImage } from '../../lib/og-image';

// Define all pages and their OG image content
const pages = [
  {
    slug: 'index',
    isHome: true,
    title: 'Learn Chinese naturally with smart, modern tools',
  },
  {
    slug: 'privacy',
    title: 'Privacy Policy',
    subtitle: 'Read about how Hanyu collects, uses, and protects your personal data.',
  },
  {
    slug: 'terms',
    title: 'Terms of Service',
    subtitle: 'Read about the terms and conditions for using Hanyu Services.',
  },
  {
    slug: 'blog',
    title: 'Blog',
    subtitle: 'Chinese learning tips, grammar guides, and cultural insights from the Hanyu team.',
  },
];

export const getStaticPaths: GetStaticPaths = async () => {
  const blogPosts = await getCollection('blog', ({ data }) => !data.draft);
  const blogEntries = blogPosts.map((post) => ({
    params: { slug: `blog/${post.id}` },
    props: { title: post.data.title, subtitle: post.data.description },
  }));

  const pageEntries = pages.map((page) => ({
    params: { slug: page.slug },
    props: page,
  }));

  return [...pageEntries, ...blogEntries];
};

export const GET: APIRoute = async ({ props }) => {
  const { title, subtitle, isHome } = props as (typeof pages)[number];

  const png = await generateOgImage({ title, subtitle, isHome });

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
