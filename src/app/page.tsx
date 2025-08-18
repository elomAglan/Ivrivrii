// src/app/page.tsx
'use client';

import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChefHat, Heart, Users, Star, ArrowRight, Clock, MapPin, Sparkles } from 'lucide-react'; 

import Hero from '@/components/Hero'; 
import LikeButton from '@/components/LikeButton'; 

// --- IMPORTANT : `metadata` a été déplacé dans `src/app/layout.tsx` ---
// Ne pas exporter `metadata` d'un composant 'use client' ici.

export default function HomePage() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          if (observerRef.current) {
            observerRef.current.unobserve(entry.target);
          }
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      animatedElements.forEach(el => {
        if (observerRef.current) {
          observerRef.current.unobserve(el);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Hero id="hero" />


      {/* Section Présentation - Version Modernisée */}
      <section className="py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* En-tête */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-full mb-8 shadow-lg">
              <Sparkles className="mr-2" size={18} />
              <span className="text-sm tracking-wider">NOTRE PHILOSOPHIE</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-serif leading-tight">
              L'Art Culinaire <br className="hidden md:block" />
              <span className="text-amber-600">Africain Réinventé</span>
            </h2>
            <div className="w-24 h-1.5 bg-amber-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Chez Ivrivri, nous réinventons les saveurs africaines avec une touche contemporaine.
              Chaque création est un hommage à nos racines, revisité avec modernité.
            </p>
          </div>

          {/* Cartes Valeurs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Carte 1 - Chef Expérimenté */}
            <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-amber-100 animate-fade-in-up">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 h-full flex flex-col items-center text-center">
                <div className="w-28 h-28 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:rotate-6 group-hover:scale-105 transition-all duration-500">
                  <ChefHat className="text-white w-10 h-10" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">Maîtrise Culinaire</h3>
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                  Notre chef étoilé fusionne techniques ancestrales et innovations modernes pour des créations uniques.
                </p>
                <div className="w-full flex justify-center">
                  <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full group-hover:w-24 transition-all duration-500"></div>
                </div>
              </div>
            </div>

            {/* Carte 2 - Ingrédients Frais */}
            <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-red-100 animate-fade-in-up delay-100">
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 h-full flex flex-col items-center text-center">
                <div className="w-28 h-28 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:-rotate-6 group-hover:scale-105 transition-all duration-500">
                  {/* Utilisation de l'icône Heart directement ici car elle n'a pas d'interaction de like state */}
                  <Heart className="text-white w-10 h-10" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">Produits d'Exception</h3>
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                  Sélection rigoureuse de producteurs locaux pour une fraîcheur incomparable et un impact positif.
                </p>
                <div className="w-full flex justify-center">
                  <div className="w-12 h-1 bg-gradient-to-r from-red-400 to-red-500 rounded-full group-hover:w-24 transition-all duration-500"></div>
                </div>
              </div>
            </div>

            {/* Carte 3 - Ambiance Conviviale */}
            <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-orange-100 animate-fade-in-up delay-200">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 h-full flex flex-col items-center text-center">
                <div className="w-28 h-28 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:rotate-3 group-hover:scale-105 transition-all duration-500">
                  <Users className="text-white w-10 h-10" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">Expérience Unique</h3>
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                  Ambiance chaleureuse où design contemporain et traditions africaines créent une atmosphère inoubliable.
                </p>
                <div className="w-full flex justify-center">
                  <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full group-hover:w-24 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Spécialités - Version Premium */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-full mb-8 shadow-lg">
              <Sparkles className="mr-2" size={18} />
              <span className="text-sm tracking-wider">PLATS SIGNATURE</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-serif leading-tight">
              Nos Créations <span className="text-amber-600">Exclusives</span>
            </h2>
            
            <div className="w-24 h-1.5 bg-amber-500 mx-auto mb-8 rounded-full"></div>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Des saveurs uniques élaborées avec des produits locaux et notre savoir-faire traditionnel
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Carte 1 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100 hover:border-red-100 animate-fade-in-up">
              <div className="relative h-72 overflow-hidden">
                <img
                  src="https://www.shutterstock.com/image-photo/jollof-rice-popular-dish-west-600nw-2087420251.jpg"
                  alt="Jollof Rice"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                  TOP VENTES
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-gray-900 font-serif">Jollof Rice Premium</h3>
                  <div className="flex items-center text-yellow-400">
                    <Star className="fill-current w-4 h-4" />
                    <span className="ml-1 text-gray-700 text-sm font-medium">4.9</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed border-b border-gray-100 pb-6">
                  Riz parfumé cuit dans une sauce tomate épicée, accompagné de poulet fermier grillé et plantains caramélisés.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-red-600">12,500 FCFA</span>
                  <LikeButton id="jollof-rice-premium" />
                </div>
              </div>
            </div>

            {/* Carte 2 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100 hover:border-red-100 animate-fade-in-up delay-100">
              <div className="relative h-72 overflow-hidden">
                <img
                  src="https://momaa.org/wp-content/uploads/2023/04/11tmag-senega-1.jpeg"
                  alt="Poisson Grillé"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-amber-500 text-gray-900 px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                  SAISONNIER
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-gray-900 font-serif">Thiébou Dieune Royal</h3>
                  <div className="flex items-center text-yellow-400">
                    <Star className="fill-current w-4 h-4" />
                    <span className="ml-1 text-gray-700 text-sm font-medium">4.8</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed border-b border-gray-100 pb-6">
                  Poisson frais du jour grillé au feu de bois, servi avec riz aromatisé et légumes du marché.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-red-600">16,500 FCFA</span>
                  <LikeButton id="thiebou-dieune-royal" />
                </div>
              </div>
            </div>

            {/* Carte 3 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100 hover:border-red-100 animate-fade-in-up delay-200">
              <div className="relative h-72 overflow-hidden">
                <img
                  src="https://resizer.otstatic.com/v3/photos/74154352-3?width=1280&height=720&webp=true"
                  alt="Burger Africain"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                  NOUVEAUTÉ
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-gray-900 font-serif">Burger Afro-Fusion</h3>
                  <div className="flex items-center text-yellow-400">
                    <Star className="fill-current w-4 h-4" />
                    <span className="ml-1 text-gray-700 text-sm font-medium">4.7</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed border-b border-gray-100 pb-6">
                  Pain maison fourré à un steak d'agneau épicé, sauce yassa maison et accompagnements frais.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-red-600">9,900 FCFA</span>
                  <LikeButton id="burger-afro-fusion" />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-20 animate-fade-in">
            <a href="/menu" className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-white rounded-full group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="relative z-10 text-lg tracking-wider">EXPLORER NOTRE MENU COMPLET</span>
              <ArrowRight className="ml-3 relative z-10" size={20} />
              <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
            </a>
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
                <a href="/contact">
                  <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold px-8 py-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg">
                    Réserver maintenant
                  </Button>
                </a>
                <a href="/contact">
                  <Button size="lg" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                    Nous contacter
                  </Button>
                </a>
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
