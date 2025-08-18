'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, Users, ChefHat, Heart, X, ArrowLeft, ArrowRight } from 'lucide-react';
// type { Metadata } from 'next' n'est pas nécessaire ici car le composant est 'use client'
// et les métadonnées doivent être exportées depuis un Server Component.

interface GalleryImage {
  url: string;
  title: string;
  description: string;
  category: 'plats' | 'clients' | 'restaurant';
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
  ];

  const categories = [
    { id: 'tous', label: 'Tous', icon: <Camera size={20} /> },
    { id: 'plats', label: 'Nos Plats', icon: <ChefHat size={20} /> },
    { id: 'clients', label: 'Clients Heureux', icon: <Heart size={20} /> },
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
        <Camera size={48} className="mr-4 text-amber-400" /> {/* Icône Camera pour la galerie */}
        <h1 className="text-5xl md:text-6xl font-bold">Galerie & Mémoires</h1> {/* Titre de la galerie */}
      </div>
      <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
        Découvrez l'univers d'Ivrivri à travers nos plus beaux moments
      </p>
      <p className="text-lg opacity-90 max-w-2xl mx-auto font-light">
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
                className={`flex items-center space-x-2 px-6 py-3 transition-all duration-200 rounded-full font-medium ${
                  selectedCategory === category.id
                    ? 'bg-amber-500 text-black hover:bg-amber-600' // Couleurs ajustées pour harmonie
                    : 'border-gray-200 text-gray-700 hover:bg-gray-100 hover:text-gray-900' // Couleurs ajustées
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
                className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 cursor-pointer group" // Styles de carte améliorés
                onClick={() => openModal(image, index)}
              >
                <div className="relative">
                  <div
                    className="h-64 w-full bg-cover bg-center rounded-t-xl" // Ajout de rounded-t-xl pour l'image
                    style={{ backgroundImage: `url('${image.url}')` }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-t-xl" /> {/* Assurer l'overlay aussi est arrondi */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Camera className="text-white" size={32} />
                  </div>
                </div>
                <CardContent className="p-4 bg-white">
                  <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1 text-lg font-serif"> {/* Taille et font ajustées */}
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
              className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors z-10 p-2 rounded-full bg-black/50 hover:bg-black/70" // Style du bouton
            >
              <X size={28} /> {/* Taille ajustée */}
            </button>

            {/* Boutons navigation */}
            {filteredImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-400 transition-colors p-2 rounded-full bg-black/50 hover:bg-black/70" // Style du bouton
                >
                  <ArrowLeft size={28} /> {/* Taille ajustée */}
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-400 transition-colors p-2 rounded-full bg-black/50 hover:bg-black/70" // Style du bouton
                >
                  <ArrowRight size={28} /> {/* Taille ajustée */}
                </button>
              </>
            )}

            {/* Image et informations dans la modal */}
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl"> {/* Bords arrondis pour la modal */}
              <div
                className="h-96 w-full bg-cover bg-center rounded-t-xl" // Bords arrondis pour l'image dans la modal
                style={{ backgroundImage: `url('${selectedImage.url}')` }}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-serif">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-600 text-base">
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
      <section className="py-20 bg-gray-900 text-white"> {/* Couleur de fond ajustée */}
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 text-amber-400 font-serif"> {/* Couleur et font ajustées */}
            Créons de nouveaux souvenirs ensemble
          </h2>
          <p className="text-xl mb-8 text-gray-300 font-light">
            Rejoignez-nous pour vivre votre propre expérience Ivrivri et figurer dans notre prochaine galerie !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold rounded-full px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Réserver une Table
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300" // Style du bouton ajusté
            >
              Suivre sur Instagram
            </Button>
          </div>
          <p className="mt-6 text-gray-400 text-sm">
            Taguez-nous @ivrivri_restaurant pour apparaître dans notre galerie !
          </p>
        </div>
      </section>
    </div>
  );
}