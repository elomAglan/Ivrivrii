'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, Users, ChefHat, Heart, X, ArrowLeft, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

interface GalleryImage {
  url: string;
  title: string;
  description: string;
  category: 'plats' | 'clients' | 'staff' | 'restaurant';
}

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('tous');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages: GalleryImage[] = [
    // Plats
    {
      url: 'https://www.shutterstock.com/image-photo/jollof-rice-popular-dish-west-600nw-2087420251.jpg',
      title: 'Jollof Rice Signature',
      description: 'Notre plat signature avec poulet grillé et plantains dorés',
      category: 'plats'
    },
    {
      url: 'https://momaa.org/wp-content/uploads/2023/04/11tmag-senega-1.jpeg',
      title: 'Poisson Grillé Traditionnel',
      description: 'Poisson frais du lac Togo grillé à la perfection',
      category: 'plats'
    },
    {
      url: 'https://www.shutterstock.com/shutterstock/photos/2087420251/display_1500/stock-photo-jollof-rice-is-a-popular-rice-dish-in-west-africa-it-originated-from-senegal-and-spread-through-2087420251.jpg',
      title: 'Plat Jollof Complet',
      description: 'Riz jollof accompagné de légumes frais et sauce traditionnelle',
      category: 'plats'
    },
    {
      url: 'https://resizer.otstatic.com/v3/photos/74154352-3?width=1280&height=720&webp=true',
      title: 'Cuisine Moderne Africaine',
      description: 'Présentation élégante de nos spécialités africaines',
      category: 'plats'
    },
    {
      url: 'https://www.shutterstock.com/image-photo/plate-jollof-rice-fish-stew-600nw-2612389279.jpg',
      title: 'Riz et Poisson Braisé',
      description: 'Harmonie parfaite entre riz parfumé et poisson en sauce',
      category: 'plats'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Jollof_Rice_with_Stew.jpg/1200px-Jollof_Rice_with_Stew.jpg',
      title: 'Jollof avec Ragout',
      description: 'Version traditionnelle avec ragout de viande épicé',
      category: 'plats'
    },

    // Clients et ambiance
    {
      url: 'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1920/1080/75/vision-dam/digital/parks-platform/parks-global-assets/disney-springs/dining/paddlefish/Paddlefish_0725ZM_2093AFN-16x9.jpg?2025-02-05T19:54:41+00:00',
      title: 'Clients Heureux',
      description: 'Moments de joie partagés autour de nos spécialités',
      category: 'clients'
    },
    {
      url: 'https://s3-media0.fl.yelpcdn.com/bphoto/dJ1wTBti357fVQNyWV9MQw/348s.jpg',
      title: 'Dégustation en Famille',
      description: 'Une famille savoure nos plats dans une ambiance détendue',
      category: 'clients'
    },
    {
      url: 'https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/twloyaip/6d27883c-c36c-4e88-a736-1b9a473be493.jpg',
      title: 'Ambiance Festive',
      description: 'Nos clients célèbrent dans la joie et la bonne humeur',
      category: 'clients'
    },

    // Staff et cuisine
    {
      url: 'https://images.squarespace-cdn.com/content/v1/6753548cbea08470fe2b54ff/1734384598758-JXU3C6OFWFAP3J9T5S6B/IMG_2650.jpg?format=1000w',
      title: 'Notre Équipe en Action',
      description: 'Nos chefs préparent avec passion vos plats favoris',
      category: 'staff'
    },
    {
      url: 'https://www.lemon8-app.com/seo/image?item_id=7351948582188417542&index=0&sign=e3e0907cf37bac7adc50da0628a741cb',
      title: 'Préparation Artisanale',
      description: 'Chaque plat est préparé avec soin et attention aux détails',
      category: 'staff'
    },
    {
      url: 'https://thumbs.dreamstime.com/b/close-up-nigerian-jollof-rice-fried-chicken-wings-plate-traditional-west-african-meal-famous-party-dish-spicy-delicious-385624859.jpg',
      title: 'Art Culinaire',
      description: 'La précision et la beauté dans chaque présentation',
      category: 'staff'
    }
  ];

  const categories = [
    { id: 'tous', label: 'Tous', icon: <Camera size={20} /> },
    { id: 'plats', label: 'Nos Plats', icon: <ChefHat size={20} /> },
    { id: 'clients', label: 'Clients Heureux', icon: <Heart size={20} /> },
    { id: 'staff', label: 'Notre Équipe', icon: <Users size={20} /> }
  ];

  const filteredImages = selectedCategory === 'tous'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const openModal = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header de la page */}
  <section className="relative py-20 pt-32 text-white overflow-hidden">
 {/* Image de fond */}
 <div 
   className="absolute inset-0 bg-cover bg-center bg-no-repeat"
   style={{
     backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
   }}
 />
 
 {/* Overlay gradient */}
 <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
 
 {/* Contenu */}
 <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
   <div className="flex items-center justify-center mb-6">
     <Camera size={48} className="mr-4 text-ivrivri-yellow" />
     <h1 className="text-5xl md:text-6xl font-bold">Galerie & Mémoires</h1>
   </div>
   <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
     Découvrez l'univers d'Ivrivri à travers nos plus beaux moments
   </p>
   <p className="text-lg opacity-90 max-w-2xl mx-auto">
     Plats savoureux, sourires authentiques et passion culinaire : immergez-vous dans notre histoire
   </p>
 </div>
</section>

      {/* Filtres de catégories */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`flex items-center space-x-2 px-6 py-3 transition-smooth ${
                  selectedCategory === category.id
                    ? 'bg-ivrivri-yellow text-black hover:bg-yellow-500'
                    : 'hover:bg-ivrivri-yellow hover:text-black'
                }`}
              >
                {category.icon}
                <span>{category.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Grille d'images */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden hover-lift transition-smooth cursor-pointer group"
                onClick={() => openModal(image, index)}
              >
                <div className="relative">
                  <div
                    className="h-64 bg-cover bg-center"
                    style={{ backgroundImage: `url('${image.url}')` }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Camera className="text-white" size={32} />
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-ivrivri-black mb-1 line-clamp-1">
                    {image.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {image.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <Camera className="mx-auto text-gray-400 mb-4" size={64} />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                Aucune image dans cette catégorie
              </h3>
              <p className="text-gray-500">
                Revenez bientôt pour découvrir de nouveaux contenus !
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Modal d'image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full">
            {/* Bouton fermer */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-ivrivri-yellow transition-colors z-10"
            >
              <X size={32} />
            </button>

            {/* Boutons navigation */}
            {filteredImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-ivrivri-yellow transition-colors"
                >
                  <ArrowLeft size={32} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-ivrivri-yellow transition-colors"
                >
                  <ArrowRight size={32} />
                </button>
              </>
            )}

            {/* Image */}
            <div className="bg-white rounded-lg overflow-hidden">
              <div
                className="h-96 bg-cover bg-center"
                style={{ backgroundImage: `url('${selectedImage.url}')` }}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-ivrivri-black mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-600">
                  {selectedImage.description}
                </p>
                <div className="mt-4 text-sm text-gray-500">
                  Image {currentImageIndex + 1} sur {filteredImages.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Section Call to Action */}
      <section className="py-20 bg-ivrivri-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 text-ivrivri-yellow">
            Créons de nouveaux souvenirs ensemble
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Rejoignez-nous pour vivre votre propre expérience Ivrivri et figurer dans notre prochaine galerie !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-ivrivri-yellow hover:bg-yellow-500 text-black font-semibold px-8 py-3">
              Réserver une Table
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-black px-8 py-3"
            >
              Suivre sur Instagram
            </Button>
          </div>
          <p className="mt-6 text-gray-400">
            Taguez-nous @ivrivri_restaurant pour apparaître dans notre galerie !
          </p>
        </div>
      </section>
    </div>
  );
}
