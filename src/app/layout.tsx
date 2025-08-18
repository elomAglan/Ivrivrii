import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ivrivri - Restaurant Africain Moderne à Lomé | Cuisine Africaine Réinventée',
  description: 'Ivrivri à Lomé vous invite à découvrir la cuisine africaine moderne. Grillades, poissons frais, burgers afro-fusion et jus naturels servis dans une ambiance chaleureuse et contemporaine.',
  keywords: 'Ivrivri, restaurant africain, Lomé, Togo, cuisine africaine, grillades, poisson, burger africain, jus naturels, restaurant moderne',
  authors: [{ name: 'Restaurant Ivrivri' }],
  openGraph: {
    title: 'Ivrivri - Restaurant Africain Moderne à Lomé',
    description: 'Découvrez la cuisine africaine moderne à Ivrivri : grillades, poissons frais, burgers afro-fusion et boissons naturelles.',
    type: 'website',
    url: 'https://www.ivrivri.com', // remplace par ton vrai domaine
    locale: 'fr_FR',
    images: [
      {
        url: 'https://www.ivrivri.com/og-image.jpg', // image OpenGraph pour réseaux sociaux
        width: 1200,
        height: 630,
        alt: 'Ivrivri - Restaurant Africain Moderne à Lomé',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ivrivri - Restaurant Africain Moderne à Lomé',
    description: 'Ivrivri à Lomé : cuisine africaine moderne, grillades, poissons frais et burgers afro-fusion.',
    images: ['https://www.ivrivri.com/og-image.jpg'], // même image que OpenGraph
    creator: '@Ivrivri',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
