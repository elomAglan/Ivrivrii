'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MapPin, Utensils } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { href: '/', label: 'Accueil' },
    { href: '/menu', label: 'Menu' },
    { href: '/about', label: 'Notre Histoire' },
    { href: '/gallery', label: 'Galerie' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-white/80 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo avec animation au scroll */}
          <Link
            href="/"
            className="flex items-center gap-x-3 group"
          >
            <div className={`transition-all duration-500 ${scrolled ? 'w-10 h-10' : 'w-12 h-12'} bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105`}>
              <Utensils className="text-white" size={scrolled ? 18 : 20} />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold transition-all duration-500 ${scrolled ? 'text-lg' : 'text-xl'} text-gray-900`}>Ivrivri</span>
              <span className={`text-xs transition-all duration-500 ${scrolled ? 'opacity-80' : 'opacity-100'} text-gray-600`}>Cuisine Africaine</span>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-1 py-2 text-gray-700 hover:text-amber-600 transition-colors duration-300 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="flex items-center space-x-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50"
            >
              <a href="tel:+22890000000" className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+228 90 00 00 00</span>
              </a>
            </Button>
            <Link href="/contact" passHref>
              <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg hover:shadow-amber-200/50">
                Réserver
              </Button>
            </Link>
          </div>

          {/* Menu Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 animate-fade-in">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 mt-2 border-t border-gray-200 space-y-2">
              <Button 
                variant="ghost" 
                className="w-full justify-start text-gray-700 hover:bg-amber-50 hover:text-amber-600"
              >
                <a href="tel:+22890000000" className="flex items-center space-x-3">
                  <Phone size={16} />
                  <span>Appeler</span>
                </a>
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-start text-gray-700 hover:bg-amber-50 hover:text-amber-600"
              >
                <a href="https://maps.app.goo.gl/your-location-link" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <MapPin size={16} />
                  <span>Localisation</span>
                </a>
              </Button>
              <Link href="/contact" passHref>
                <Button 
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Réserver
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}