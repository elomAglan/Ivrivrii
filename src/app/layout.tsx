import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ivrivri - Restaurant Africain Moderne à Lomé, Togo',
  description: 'Découvrez la cuisine africaine moderne chez Ivrivri à Lomé. Grillades savoureuses, poissons frais, burgers africains et jus naturels dans une ambiance chaleureuse.',
  keywords: 'restaurant africain, Lomé, Togo, cuisine africaine, grillades, poisson, jus naturels, restaurant moderne',
  authors: [{ name: 'Restaurant Ivrivri' }],
  openGraph: {
    title: 'Ivrivri - Restaurant Africain Moderne à Lomé',
    description: 'Cuisine africaine moderne, grillades et poissons frais à Lomé, Togo',
    type: 'website',
    locale: 'fr_FR',
  },
  robots: {
    index: true,
    follow: true,
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
