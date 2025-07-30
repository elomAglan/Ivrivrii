import Link from 'next/link';
import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Twitter, Utensils } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg">
              <div className="w-14 h-14 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center transition-transform hover:scale-105">
                <span className="text-2xl font-bold text-white">I</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              L'authenticité de la cuisine africaine moderne au cœur de Lomé. Une expérience culinaire inoubliable vous attend.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, url: "https://facebook.com" },
                { icon: Instagram, url: "https://instagram.com" },
                { icon: Twitter, url: "https://twitter.com" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-500 transition-colors duration-300 p-2 rounded-full hover:bg-gray-800"
                  aria-label={social.icon.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-amber-500">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Menu", href: "/menu" },
                { name: "Notre Histoire", href: "/about" },
                { name: "Galerie", href: "/gallery" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/contact" }
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-amber-500 transition-colors duration-300 inline-block py-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-amber-500">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="flex-shrink-0 mt-0.5 mr-3 text-amber-500" size={16} />
                <a 
                  href="https://maps.app.goo.gl/your-location-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Boulevard du 13 Janvier,<br />Lomé, Togo
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="flex-shrink-0 mr-3 text-amber-500" size={16} />
                <a href="tel:+22890000000" className="text-gray-400 hover:text-amber-500 transition-colors">
                  +228 9X XX XX XX
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="flex-shrink-0 mr-3 text-amber-500" size={16} />
                <a href="mailto:contact@ivrivri.com" className="text-gray-400 hover:text-amber-500 transition-colors">
                  contact@ivrivri.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="flex-shrink-0 mt-0.5 mr-3 text-amber-500" size={16} />
                <div className="text-gray-400">
                  <p>Ouvert tous les jours</p>
                  <p>11h00 - 23h00</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-amber-500">
              Newsletter
            </h3>
            <p className="text-sm text-gray-400">
              Abonnez-vous pour recevoir nos dernières actualités et offres spéciales.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder-gray-500 transition"
                required
              />
              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                S'abonner
              </button>
            </form>
            <Link href="/reservation">

            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Ivrivri. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}