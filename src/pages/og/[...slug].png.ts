import type { APIRoute, GetStaticPaths } from 'astro';
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
];

export const getStaticPaths: GetStaticPaths = () => {
  return pages.map((page) => ({
    params: { slug: page.slug },
    props: page,
  }));
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
