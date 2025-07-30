'use client';

import { useEffect, useRef } from 'react'; // Keep useEffect and useRef for other sections' animations
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChefHat, Heart, Utensils, Users, Star, ArrowRight, Clock, MapPin, Sparkles } from 'lucide-react'; // Remove ChevronDown as it's not in the new Hero

// Import the new Hero component
import Hero from '@/components/Hero'; // Adjust path if necessary

export default function HomePage() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Simple scroll animations with Intersection Observer
    // This useEffect is now only for sections *other than* the Hero section
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes for sections *after* Hero
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observerRef.current?.observe(el));

    return () => {
      animatedElements.forEach(el => observerRef.current?.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Section Héro - Nouvelle version avec Framer Motion */}
      {/* The 'id' prop is passed to allow internal linking from navigation or other parts of your app */}
      <Hero id="hero" />


      {/* Section Présentation - Version Modernisée */}
      <section className="py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* En-tête */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-5 py-2.5 bg-amber-100 text-amber-800 font-medium rounded-full mb-6 shadow-sm animate-fade-in">
              <Sparkles className="mr-2" size={18} />
              Notre Philosophie
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              L'Art Culinaire <br className="hidden md:block" />Africain Réinventé
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Chez Ivrivri, nous réinventons les saveurs africaines avec une touche contemporaine.
              Chaque création est un hommage à nos racines, revisité avec modernité.
            </p>
          </div>

          {/* Cartes Valeurs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Carte 1 - Chef Expérimenté */}
            <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-500 overflow-hidden animate-fade-in-up animate-on-scroll"> {/* Added animate-on-scroll */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 h-full flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform duration-300">
                  <ChefHat className="text-white" size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Maîtrise Culinaire</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Notre chef étoilé fusionne techniques ancestrales et innovations modernes pour des créations uniques.
                </p>
                <div className="w-8 h-0.5 bg-amber-400 group-hover:w-16 transition-all duration-500"></div>
              </div>
            </div>

            {/* Carte 2 - Ingrédients Frais */}
            <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-500 overflow-hidden animate-fade-in-up delay-100 animate-on-scroll"> {/* Added animate-on-scroll */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 h-full flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform duration-300">
                  <Heart className="text-white" size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Produits d'Exception</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Sélection rigoureuse de producteurs locaux pour une fraîcheur incomparable et un impact positif.
                </p>
                <div className="w-8 h-0.5 bg-red-400 group-hover:w-16 transition-all duration-500"></div>
              </div>
            </div>

            {/* Carte 3 - Ambiance Conviviale */}
            <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-500 overflow-hidden animate-fade-in-up delay-200 animate-on-scroll"> {/* Added animate-on-scroll */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 h-full flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform duration-300">
                  <Users className="text-white" size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Expérience Unique</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Ambiance chaleureuse où design contemporain et traditions africaines créent une atmosphère inoubliable.
                </p>
                <div className="w-8 h-0.5 bg-orange-400 group-hover:w-16 transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Spécialités */}
<section className="pt-6 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 font-semibold rounded-full mb-6">
              <Sparkles className="mr-2" size={16} />
              Plats Signature
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Nos Spécialités
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos plats signature qui font la réputation d'Ivrivri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden custom-hover-lift transition-all duration-300 border-0 shadow-lg hover:shadow-2xl bg-white animate-on-scroll">
              <div
                className="h-56 bg-cover bg-center relative"
                style={{
                  backgroundImage: `url('https://www.shutterstock.com/image-photo/jollof-rice-popular-dish-west-600nw-2087420251.jpg')`
                }}
              >
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  Populaire
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Jollof Rice Signature</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Notre riz jollof aux épices traditionnelles, accompagné de poulet grillé et plantains dorés.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-red-600">12,000 FCFA</span>
                  <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white font-semibold transition-all duration-300 hover:scale-105">
                    Commander
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden custom-hover-lift transition-all duration-300 border-0 shadow-lg hover:shadow-2xl bg-white animate-on-scroll">
              <div
                className="h-56 bg-cover bg-center relative"
                style={{
                  backgroundImage: `url('https://momaa.org/wp-content/uploads/2023/04/11tmag-senega-1.jpeg')`
                }}
              >
                <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                  Frais
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Poisson Grillé Thiébou</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Poisson frais grillé aux légumes du marché, mariné dans nos épices secrètes.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-red-600">15,000 FCFA</span>
                  <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white font-semibold transition-all duration-300 hover:scale-105">
                    Commander
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden custom-hover-lift transition-all duration-300 border-0 shadow-lg hover:shadow-2xl bg-white animate-on-scroll">
              <div
                className="h-56 bg-cover bg-center relative"
                style={{
                  backgroundImage: `url('https://resizer.otstatic.com/v3/photos/74154352-3?width=1280&height=720&webp=true')`
                }}
              >
                <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                  Nouveau
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Burger Africain</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Notre création unique : burger aux épices locales avec sauce yassa et légumes croquants.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-red-600">8,500 FCFA</span>
                  <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white font-semibold transition-all duration-300 hover:scale-105">
                    Commander
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16 animate-on-scroll">
            <Link href="/menu">
              <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-4 text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg">
                Découvrir tout le Menu
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section Informations pratiques */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="info-section-content animate-on-scroll">
              <div className="inline-flex items-center px-4 py-2 bg-yellow-400/20 text-yellow-400 font-semibold rounded-full mb-6">
                <MapPin className="mr-2" size={16} />
                Notre Adresse
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Venez nous rendre visite
              </h2>
              <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                Situé au cœur de Lomé, Ivrivri vous accueille dans un cadre moderne et chaleureux.
                Que ce soit pour un déjeuner en famille, un dîner romantique ou une soirée entre amis,
                nous vous promettons une expérience culinaire inoubliable.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg">
                  <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
                    <MapPin className="text-yellow-400" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Adresse</p>
                    <p className="text-gray-300">Boulevard du 13 Janvier, Lomé, Togo</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg">
                  <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
                    <Clock className="text-yellow-400" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Horaires</p>
                    <p className="text-gray-300">Ouvert tous les jours • 11h00 - 23h00</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold px-8 py-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg">
                    Réserver maintenant
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                    Nous contacter
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative info-section-image animate-on-scroll">
              <div
                className="w-full h-[500px] bg-cover bg-center rounded-2xl shadow-2xl relative overflow-hidden"
                style={{
                  backgroundImage: `url('https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1920/1080/75/vision-dam/digital/parks-platform/parks-global-assets/disney-springs/dining/paddlefish/Paddlefish_0725ZM_2093AFN-16x9.jpg?2025-02-05T19:54:41+00:00')`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl" />
                <div className="absolute bottom-6 left-6 right-6">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}