import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Utensils, Coffee, IceCream, Salad, ChefHat, Leaf } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Menu - Restaurant Ivrivri | Cuisine Africaine Moderne à Lomé',
  description: 'Découvrez notre menu de cuisine africaine moderne : grillades, poissons frais, burgers africains, jus naturels et desserts traditionnels.',
};

interface MenuItem {
  name: string;
  description: string;
  price: string;
  isPopular?: boolean;
  isVegetarian?: boolean;
  image?: string;
}

interface MenuCategory {
  title: string;
  icon: React.ReactNode;
  items: MenuItem[];
}

export default function MenuPage() {
  const menuCategories: MenuCategory[] = [
    {
      title: "Entrées",
      icon: <Salad size={24} />,
      items: [
        {
          name: "Salade de Gboma Dessi",
          description: "Salade traditionnelle aux épinards locaux, tomates cerises et vinaigrette à l'huile de palme",
          price: "3,500 FCFA",
          isVegetarian: true
        },
        {
          name: "Accras de Crevettes",
          description: "Beignets croustillants aux crevettes fraîches, servis avec sauce pimentée maison",
          price: "4,500 FCFA",
          isPopular: true
        },
        {
          name: "Rouleaux de Printemps Africains",
          description: "Légumes croquants enrobés de galette de manioc, sauce arachide-gingembre",
          price: "4,000 FCFA",
          isVegetarian: true
        },
        {
          name: "Tartare de Poisson Fumé",
          description: "Poisson fumé du lac Togo, avocat, mangue et chips de plantain",
          price: "5,500 FCFA"
        }
      ]
    },
    {
      title: "Plats Principaux",
      icon: <Utensils size={24} />,
      items: [
        {
          name: "Jollof Rice Signature",
          description: "Notre riz jollof aux épices traditionnelles, poulet grillé et plantains dorés",
          price: "12,000 FCFA",
          isPopular: true
        },
        {
          name: "Poisson Grillé Thiébou",
          description: "Poisson frais grillé aux légumes du marché, mariné dans nos épices secrètes",
          price: "15,000 FCFA",
          isPopular: true
        },
        {
          name: "Burger Africain Yassa",
          description: "Burger aux épices locales, sauce yassa, légumes croquants et frites de patate douce",
          price: "8,500 FCFA"
        },
        {
          name: "Kedjenou de Poulet",
          description: "Mijoté traditionnel ivoirien au poulet, légumes et épices douces",
          price: "11,500 FCFA"
        },
        {
          name: "Tchep Bou Dien",
          description: "Riz sénégalais au poisson, légumes variés et sauce tomate épicée",
          price: "13,500 FCFA"
        },
        {
          name: "Grillades Mixtes Ivrivri",
          description: "Assortiment de viandes grillées : bœuf, porc, poulet marinés aux herbes",
          price: "16,500 FCFA",
          isPopular: true
        },
        {
          name: "Curry de Crevettes au Lait de Coco",
          description: "Crevettes fraîches, lait de coco, épices douces et riz jasmin",
          price: "14,000 FCFA"
        },
        {
          name: "Attieké au Poisson Braisé",
          description: "Semoule de manioc accompagnée de poisson braisé et sa sauce tomate",
          price: "10,500 FCFA"
        }
      ]
    },
    {
      title: "Jus Naturels & Boissons",
      icon: <Coffee size={24} />,
      items: [
        {
          name: "Jus de Bissap Rouge",
          description: "Hibiscus frais, gingembre et menthe, servi glacé",
          price: "2,000 FCFA",
          isVegetarian: true
        },
        {
          name: "Smoothie Baobab-Mangue",
          description: "Pulpe de baobab, mangue fraîche et lait de coco",
          price: "2,500 FCFA",
          isVegetarian: true,
          isPopular: true
        },
        {
          name: "Jus d'Ananas-Gingembre",
          description: "Ananas frais du Togo et gingembre pour une boisson rafraîchissante",
          price: "2,200 FCFA",
          isVegetarian: true
        },
        {
          name: "Thé Kinkeliba",
          description: "Infusion traditionnelle aux vertus rafraîchissantes",
          price: "1,500 FCFA",
          isVegetarian: true
        },
        {
          name: "Jus de Fruits de la Passion",
          description: "100% naturel, sans sucre ajouté",
          price: "2,300 FCFA",
          isVegetarian: true
        },
        {
          name: "Cocktail Tropical Ivrivri",
          description: "Mélange exotique mangue, papaye, orange et citron vert",
          price: "3,000 FCFA",
          isVegetarian: true
        }
      ]
    },
    {
      title: "Desserts",
      icon: <IceCream size={24} />,
      items: [
        {
          name: "Dégué au Lait de Coco",
          description: "Dessert traditionnel au mil, lait de coco et raisins secs",
          price: "3,000 FCFA",
          isVegetarian: true
        },
        {
          name: "Tarte à la Mangue",
          description: "Pâte sablée maison, crème pâtissière et mangues fraîches du Togo",
          price: "3,500 FCFA",
          isVegetarian: true,
          isPopular: true
        },
        {
          name: "Glace Artisanale Bissap",
          description: "Glace maison aux fleurs d'hibiscus, parfum unique et rafraîchissant",
          price: "2,800 FCFA",
          isVegetarian: true
        },
        {
          name: "Beignets de Banane",
          description: "Bananes plantains en beignets, miel local et cannelle",
          price: "2,500 FCFA",
          isVegetarian: true
        },
        {
          name: "Mousse au Chocolat Africain",
          description: "Chocolat de Côte d'Ivoire, texture onctueuse et copeaux de cacao",
          price: "4,000 FCFA",
          isVegetarian: true
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header de la page */}
{/* Header de la page */}
<section className="relative py-20 pt-32 text-white overflow-hidden">
 {/* Image de fond */}
 <div 
   className="absolute inset-0 bg-cover bg-center bg-no-repeat"
   style={{
     backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
   }}
 />
 
 {/* Overlay gradient */}
 <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
 
 {/* Contenu */}
 <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
   <div className="flex items-center justify-center mb-6">
     <ChefHat size={48} className="mr-4 text-ivrivri-yellow" />
     <h1 className="text-5xl md:text-6xl font-bold">Notre Menu</h1>
   </div>
   <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
     Explorez notre sélection de plats authentiques qui célèbrent la richesse de la cuisine africaine
   </p>
   <p className="text-lg opacity-90 max-w-2xl mx-auto">
     Chaque plat est préparé avec des ingrédients frais et locaux, dans le respect des traditions culinaires africaines
   </p>
 </div>
</section>

{/* Navigation des catégories */}
      <section className="py-8 bg-white shadow-sm sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Laisser le padding latéral ici */}
          <div className="flex flex-nowrap overflow-x-auto justify-start sm:justify-center gap-4 pb-2 scrollbar-hide">
            {menuCategories.map((category, index) => (
              <a
                key={index}
                href={`#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex items-center space-x-2 px-6 py-3 bg-gray-100 hover:bg-ivrivri-yellow hover:text-black rounded-full transition-smooth font-medium flex-shrink-0"
              >
                {category.icon}
                <span className="whitespace-nowrap">{category.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Sections du menu */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {menuCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              id={category.title.toLowerCase().replace(/\s+/g, '-')}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center text-white mr-4">
                    {category.icon}
                  </div>
                  <h2 className="text-4xl font-bold text-ivrivri-black">{category.title}</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="overflow-hidden hover-lift transition-smooth">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-semibold text-ivrivri-black flex-1 pr-4">
                          {item.name}
                        </h3>
                        <div className="flex flex-col items-end space-y-2">
                          <span className="text-2xl font-bold text-ivrivri-red">
                            {item.price}
                          </span>
                          <div className="flex space-x-1">
                            {item.isPopular && (
                              <Badge className="bg-ivrivri-yellow text-black font-medium">
                                Populaire
                              </Badge>
                            )}
                            {item.isVegetarian && (
                              <Badge variant="outline" className="border-green-500 text-green-600">
                                <Leaf size={12} className="mr-1" />
                                Végé
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <div className="flex justify-between items-center">
                       
                        <span className="text-sm text-gray-500">
                          Temps de préparation : 15-25 min
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-20 bg-ivrivri-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 text-ivrivri-yellow">
            Prêt à découvrir nos saveurs ?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Réservez votre table dès maintenant et laissez-vous emporter par un voyage culinaire unique.
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
              Commander à Emporter
            </Button>
          </div>
          <p className="mt-6 text-gray-400">
            📞 +228 90 00 00 00 • 📱 WhatsApp : +228 91 11 11 11
          </p>
        </div>
      </section>
    </div>
  );
}
