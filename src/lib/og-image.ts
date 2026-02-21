import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import fs from 'node:fs';

// Load fonts once at module level
const recoletaFont = fs.readFileSync('./public/fonts/recoleta-medium.otf');
const originBookFont = fs.readFileSync('./public/fonts/origin-book.woff');
const originSemiboldFont = fs.readFileSync('./public/fonts/origin-semibold.woff');

// Logo mark as PNG data URI (pre-rendered with filters intact)
const logoPng = fs.readFileSync('./public/logo.png');
const logoDataUri = `data:image/png;base64,${logoPng.toString('base64')}`;

// Helper to create virtual DOM nodes for satori
function h(type: string, props: Record<string, unknown>, ...children: unknown[]) {
  return {
    type,
    props: {
      ...props,
      children: children.length === 1 ? children[0] : children.length === 0 ? undefined : children,
    },
  };
}

interface OgImageOptions {
  title: string;
  subtitle?: string;
  isHome?: boolean;
}

export async function generateOgImage({ title, subtitle, isHome = false }: OgImageOptions): Promise<Buffer> {
  // Build children array based on page type
  const children: unknown[] = [
    // Logo icon
    h('img', {
      src: logoDataUri,
      width: 100,
      height: 100,
      style: { marginBottom: 14, borderRadius: 23 },
    }),
    // Wordmark
    h('div', {
      style: {
        fontFamily: 'Recoleta',
        fontWeight: 500,
        fontSize: 54,
        color: '#ffffff',
        letterSpacing: '-0.02em',
        lineHeight: 1.1,
        marginBottom: 8,
      },
    }, 'Hanyu'),
  ];

  if (isHome) {
    // Homepage: tagline + CTA button + platform line
    children.push(
      h('div', {
        style: {
          fontFamily: 'Origin',
          fontWeight: 400,
          fontSize: 21,
          color: 'rgba(255, 255, 255, 0.75)',
          letterSpacing: '-0.01em',
          marginBottom: 28,
        },
      }, 'Learn Chinese, naturally.'),
      h('div', {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '14px 36px',
          backgroundColor: '#ffffff',
          color: '#267B5E',
          fontFamily: 'Origin',
          fontWeight: 600,
          fontSize: 18,
          borderRadius: 8,
          letterSpacing: '-0.01em',
          marginBottom: 14,
        },
      }, 'Download Now'),
      h('div', {
        style: {
          fontFamily: 'Origin',
          fontWeight: 400,
          fontSize: 14,
          color: 'rgba(255, 255, 255, 0.55)',
          letterSpacing: '0.02em',
        },
      }, 'Available on iPhone and iPad. Android coming soon.'),
    );
  } else {
    // Subpages: page title + optional subtitle
    children.push(
      h('div', {
        style: {
          fontFamily: 'Origin',
          fontWeight: 400,
          fontSize: 21,
          color: 'rgba(255, 255, 255, 0.75)',
          letterSpacing: '-0.01em',
          marginBottom: subtitle ? 12 : 0,
        },
      }, title),
    );
    if (subtitle) {
      children.push(
        h('div', {
          style: {
            fontFamily: 'Origin',
            fontWeight: 400,
            fontSize: 14,
            color: 'rgba(255, 255, 255, 0.5)',
            letterSpacing: '0.01em',
            maxWidth: 480,
            textAlign: 'center' as const,
            lineHeight: 1.5,
          },
        }, subtitle),
      );
    }
  }

  const element = h('div', {
    style: {
      width: '100%',
      height: '100%',
      backgroundColor: '#267B5E',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
    h('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: -20,
      },
    }, ...children),
  );

  const svg = await satori(element as React.ReactNode, {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Recoleta', data: recoletaFont, weight: 500, style: 'normal' as const },
      { name: 'Origin', data: originBookFont, weight: 400, style: 'normal' as const },
      { name: 'Origin', data: originSemiboldFont, weight: 600, style: 'normal' as const },
    ],
  });

  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: 2400 },
  });

  return Buffer.from(resvg.render().asPng());
}
