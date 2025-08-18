// src/app/layout.tsx
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
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  icons: {
    icon: '/ivrivriicon.png',
    shortcut: '/ivrivriicon.png',
    apple: '/ivrivriicon.png',
  },
  openGraph: {
    title: 'Ivrivri - Restaurant Africain Moderne à Lomé',
    description: 'Découvrez la cuisine africaine moderne à Ivrivri : grillades, poissons frais, burgers afro-fusion et boissons naturelles.',
    type: 'website', 
    url: 'https://www.ivrivri.com',
    locale: 'fr_FR',
    images: [
      {
        url: 'https://www.ivrivri.com/og-image.jpg',
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
    images: ['https://www.ivrivri.com/og-image.jpg'],
    creator: '@Ivrivri',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Ivrivri",
    "image": "https://www.ivrivri.com/og-image.jpg",
    "url": "https://www.ivrivri.com",
    "telephone": "+228 XXX XXX XXX",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Boulevard du 13 Janvier",
      "addressLocality": "Lomé",
      "addressRegion": "Maritime",
      "postalCode": "0000",
      "addressCountry": "TG"
    },
    "priceRange": "FCFA",
    "servesCuisine": "Africaine",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "11:00",
        "closes": "23:00"
      }
    ]
  };

  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
