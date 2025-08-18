'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Users, Leaf, Award, ChefHat, Globe, Target, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// L'exportation `metadata` a été supprimée d'ici pour résoudre l'erreur.
// Si vous souhaitez la définir, faites-le dans un fichier Server Component (ex: layout.tsx).

export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="text-ivrivri-red" size={32} />,
      title: "Passion Culinaire",
      description: "Nous mettons tout notre cœur dans chaque plat, perpétuant l'art culinaire africain avec respect et créativité."
    },
    {
      icon: <Users className="text-ivrivri-yellow" size={32} />,
      title: "Communauté",
      description: "Ivrivri est un lieu de rassemblement où les familles et amis partagent des moments précieux autour de bons repas."
    },
    {
      icon: <Leaf className="text-green-600" size={32} />,
      title: "Produits Locaux",
      description: "Nous privilégions les ingrédients frais et locaux, soutenant nos producteurs togolais et africains."
    },
    {
      icon: <Award className="text-ivrivri-red" size={32} />,
      title: "Excellence",
      description: "Chaque détail compte pour offrir une expérience culinaire exceptionnelle à nos clients."
    }
  ];

  const teamMembers = [
    {
      name: "Chef Kofi Amenuveve",
      role: "Chef Exécutif",
      description: "Formé en France et au Togo, il maîtrise l'art de fusionner techniques modernes et saveurs traditionnelles.",
      experience: "15 ans d'expérience",
      image: "/chef2.jpg" // Image chef1.jpg depuis le dossier public
    },
    {
      name: "Ama Koudawo",
      role: "Chef Pâtissière",
      description: "Spécialiste des desserts africains revisités, elle crée des douceurs qui racontent notre patrimoine.",
      experience: "10 ans d'expérience",
      image: "/chef3.jpg" // Image chef2.jpg depuis le dossier public
    },
    {
      name: "Kwame Adobo",
      role: "Maître d'Hôtel",
      description: "Garant de l'hospitalité togolaise, il veille à ce que chaque client se sente comme chez lui.",
      experience: "12 ans d'expérience",
      image: "/chef4.jpg" // Image chef3.jpg depuis le dossier public
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header de la page */}
      <section className="relative py-20 pt-32 text-white overflow-hidden">
        {/* Image de fond */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        {/* Contenu */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Globe size={48} className="mr-4 text-ivrivri-yellow" />
            <h1 className="text-5xl md:text-6xl font-bold">À Propos d'Ivrivri</h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Plus qu'un restaurant, une célébration de la culture culinaire africaine au cœur de Lomé
          </p>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-ivrivri-black mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-ivrivri-red">Ivrivri</strong> est né d'un rêve partagé : celui de célébrer
                  la richesse extraordinaire de la cuisine africaine tout en l'adaptant aux goûts contemporains.
                  Fondé en 2020 à Lomé, notre restaurant puise ses racines dans les traditions culinaires
                  du Togo et s'inspire des saveurs de tout le continent africain.
                </p>
                <p>
                  Le nom "Ivrivri" signifie "saveur" en langue ewé, reflétant notre engagement à révéler
                  toute la complexité et la beauté des goûts africains. Nous croyons que chaque plat
                  raconte une histoire, porte une mémoire et crée des liens entre les générations.
                </p>
                <p>
                  Depuis notre ouverture, nous avons accueilli des milliers de convives, partageant avec eux
                  notre passion pour une cuisine authentique et moderne. Notre équipe, formée aux techniques
                  culinaires internationales tout en gardant l'âme africaine, perpétue cet héritage avec fierté.
                </p>
              </div>
            </div>

            <div className="relative">
              <div
                className="w-full h-96 bg-cover bg-center rounded-lg shadow-2xl"
                style={{
                  backgroundImage: `url('https://momaa.org/wp-content/uploads/2023/04/11tmag-senega-1.jpeg')`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm opacity-80">Notre cuisine en action</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ivrivri-black mb-6">
              Notre Mission & Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous œuvrons chaque jour pour faire rayonner la cuisine africaine et créer des expériences mémorables
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8 border-l-4 border-l-ivrivri-yellow">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Target className="text-ivrivri-yellow mr-3" size={32} />
                  <h3 className="text-2xl font-bold text-ivrivri-black">Notre Mission</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Promouvoir et moderniser la cuisine africaine en proposant des plats authentiques
                  préparés avec des ingrédients frais et locaux. Nous souhaitons être un pont entre
                  les traditions culinaires ancestrales et les attentes gastronomiques contemporaines,
                  tout en soutenant notre communauté locale.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-l-4 border-l-ivrivri-red">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Star className="text-ivrivri-red mr-3" size={32} />
                  <h3 className="text-2xl font-bold text-ivrivri-black">Notre Vision</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Devenir la référence de la cuisine africaine moderne en Afrique de l'Ouest et faire
                  d'Ivrivri un ambassadeur de la gastronomie togolaise et africaine. Nous aspirons à
                  inspirer une nouvelle génération de chefs africains et à faire découvrir au monde
                  la diversité de nos saveurs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ivrivri-black mb-6">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident chacune de nos actions et définissent l'esprit d'Ivrivri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover-lift transition-smooth">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-ivrivri-black mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ivrivri-black mb-6">
              Notre Équipe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des professionnels passionnés qui donnent vie à la vision d'Ivrivri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"> {/* Added subtle border */}
                {/* L'image de l'équipe */}
                <div className="relative h-64 w-full"> {/* Increased height for better image display */}
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                    quality={75}
                    onError={(e) => { e.currentTarget.src = "https://placehold.co/400x400/CCCCCC/000000?text=Image+Non+Trouvée"; }} // Fallback
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 font-serif"> {/* Increased font size and adjusted margin */}
                    {member.name}
                  </h3>
                  <p className="text-red-600 font-semibold mb-3 text-base"> {/* Adjusted margin */}
                    {member.role}
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {member.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 justify-center pt-3 border-t border-gray-100 mt-4"> {/* Added top border and padding */}
                    <ChefHat size={16} className="mr-2" />
                    <span>{member.experience}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Communautaire */}
      <section className="py-20 bg-ivrivri-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-ivrivri-yellow">
                Notre Engagement
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Chez Ivrivri, nous croyons fermement que la réussite d'un restaurant va au-delà
                  de la simple satisfaction culinaire. Nous nous engageons activement dans le
                  développement de notre communauté locale.
                </p>
                <p>
                  Nous collaborons avec des producteurs togolais pour sourcer nos ingrédients,
                  participons à des programmes de formation culinaire pour les jeunes, et
                  organisons régulièrement des événements culturels célébrant le patrimoine africain.
                </p>
                <p>
                  Notre restaurant est également un espace d'expression artistique où des artistes
                  locaux exposent leurs œuvres, contribuant ainsi au rayonnement culturel de Lomé.
                </p>
              </div>

              <div className="mt-8">
                <Link href="/contact">
                  <Button size="lg" className="bg-ivrivri-yellow hover:bg-yellow-500 text-black font-semibold">
                    Rejoignez notre communauté
                  </Button>
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-ivrivri-yellow mb-3">
                  Partenaires Locaux
                </h4>
                <p className="text-gray-300">
                  Plus de 20 producteurs locaux nous font confiance et nous approvisionnent
                  en produits frais chaque semaine.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-ivrivri-yellow mb-3">
                  Formation & Emploi
                </h4>
                <p className="text-gray-300">
                  Nous avons formé et employé plus de 30 jeunes togolais depuis notre ouverture,
                  contribuant à la professionnalisation du secteur.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-ivrivri-yellow mb-3">
                  Impact Environnemental
                </h4>
                <p className="text-gray-300">
                  Nous privilégions les circuits courts et utilisons des emballages biodégradables
                  pour minimiser notre empreinte écologique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}