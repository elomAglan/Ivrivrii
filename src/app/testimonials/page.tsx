import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Quote, Heart, Users, MessageCircle, ThumbsUp } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Témoignages - Restaurant Ivrivri | Avis de nos Clients',
  description: 'Découvrez les témoignages de nos clients satisfaits et leurs expériences culinaires authentiques chez Ivrivri à Lomé.',
};

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  experience: string;
  avatar?: string;
}

export default function TestimonialsPage() {
  const testimonials: Testimonial[] = [
    {
      name: "Marie-Claire Ahouefa",
      location: "Lomé, Togo",
      rating: 5,
      comment: "Ivrivri a complètement transformé ma perception de la cuisine africaine ! Le jollof rice est absolument divin, et l'ambiance chaleureuse nous fait sentir comme en famille. Mon restaurant préféré à Lomé !",
      date: "Janvier 2025",
      experience: "Dîner en famille"
    },
    {
      name: "Dr. Kwame Asante",
      location: "Accra, Ghana",
      rating: 5,
      comment: "En tant que Ghanéen, je suis très exigeant sur le jollof rice. Celui d'Ivrivri est tout simplement exceptionnel ! L'équipe est professionnelle et le service impeccable. Je recommande vivement !",
      date: "Décembre 2024",
      experience: "Déjeuner d'affaires"
    },
    {
      name: "Sophie Dubois",
      location: "Paris, France",
      rating: 5,
      comment: "Quelle découverte ! J'étais de passage à Lomé et Ivrivri m'a offert une expérience culinaire extraordinaire. Les saveurs sont authentiques et la présentation moderne. Un voyage gustatif inoubliable !",
      date: "Décembre 2024",
      experience: "Voyage touristique"
    },
    {
      name: "Kofi Mensah",
      location: "Lomé, Togo",
      rating: 5,
      comment: "Ivrivri réussit le pari de moderniser nos plats traditionnels sans perdre leur essence. Le poisson grillé est extraordinaire et les jus naturels sont un régal. Félicitations à toute l'équipe !",
      date: "Novembre 2024",
      experience: "Dîner romantique"
    },
    {
      name: "Amina Traoré",
      location: "Ouagadougou, Burkina Faso",
      rating: 5,
      comment: "L'hospitalité togolaise à son meilleur ! Chaque plat raconte une histoire et les saveurs sont magnifiquement équilibrées. Le kedjenou est absolument parfait. Je reviendrai sans hésiter !",
      date: "Octobre 2024",
      experience: "Célébration d'anniversaire"
    },
    {
      name: "Jean-Baptiste Kone",
      location: "Abidjan, Côte d'Ivoire",
      rating: 5,
      comment: "En tant qu'Ivoirien, j'apprécie la façon dont Ivrivri honore la cuisine ouest-africaine. L'attieké était délicieux et l'ambiance parfaite pour une soirée entre amis. Service au top !",
      date: "Septembre 2024",
      experience: "Soirée entre amis"
    },
    {
      name: "Fatima Al-Hassan",
      location: "Lomé, Togo",
      rating: 5,
      comment: "Mes enfants adorent Ivrivri ! Les portions sont généreuses, les saveurs authentiques et l'équipe est très accueillante avec les familles. C'est devenu notre restaurant du dimanche !",
      date: "Septembre 2024",
      experience: "Repas en famille"
    },
    {
      name: "Michel Dubois",
      location: "Lomé, Togo",
      rating: 5,
      comment: "Expatrié depuis 3 ans, Ivrivri est le restaurant qui m'a fait découvrir la vraie cuisine togolaise. Chaque visite est une nouvelle découverte. Merci pour cette authenticité !",
      date: "Août 2024",
      experience: "Découverte culinaire"
    },
    {
      name: "Adjoa Nyong",
      location: "Lomé, Togo",
      rating: 5,
      comment: "Pour mon premier rendez-vous, j'ai choisi Ivrivri et ce fut parfait ! L'ambiance est romantique, les plats délicieux et le service discret. Une soirée mémorable !",
      date: "Juillet 2024",
      experience: "Premier rendez-vous"
    }
  ];

  const stats = [
    { label: "Clients Satisfaits", value: "2,500+", icon: <Heart className="text-ivrivri-red" size={24} /> },
    { label: "Note Moyenne", value: "4.9/5", icon: <Star className="text-ivrivri-yellow" size={24} /> },
    { label: "Avis Positifs", value: "98%", icon: <ThumbsUp className="text-green-600" size={24} /> },
    { label: "Recommandations", value: "95%", icon: <Users className="text-ivrivri-yellow" size={24} /> }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? "text-ivrivri-yellow fill-current" : "text-gray-300"}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header de la page */}
      <section className="py-20 bg-gradient-warm text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <MessageCircle size={48} className="mr-4" />
            <h1 className="text-5xl md:text-6xl font-bold">Témoignages</h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Les mots de nos clients qui font notre fierté
          </p>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Découvrez pourquoi Ivrivri est devenu le restaurant de référence pour la cuisine africaine moderne à Lomé
          </p>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover-lift transition-smooth">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-ivrivri-black mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages principaux */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ivrivri-black mb-6">
              Ce que disent nos clients
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chaque témoignage est une source de motivation pour continuer à vous offrir le meilleur
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <Quote className="text-ivrivri-yellow mr-3 flex-shrink-0" size={24} />
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        {renderStars(testimonial.rating)}
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-4 italic">
                        "{testimonial.comment}"
                      </p>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-ivrivri-black">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {testimonial.location}
                        </p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {testimonial.date}
                      </Badge>
                    </div>
                    <p className="text-sm text-ivrivri-red font-medium">
                      {testimonial.experience}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section d'encouragement */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-warm p-12 rounded-2xl text-white">
            <h2 className="text-4xl font-bold mb-6">
              Partagez votre expérience !
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Votre avis nous aide à nous améliorer et guide les futurs convives.
              Racontez-nous votre expérience chez Ivrivri !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-ivrivri-black hover:bg-gray-100 font-semibold px-8 py-3">
                Laisser un Avis
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-ivrivri-black px-8 py-3"
              >
                Partager sur Google
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Invitation à l'expérience */}
      <section className="py-20 bg-ivrivri-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-ivrivri-yellow">
                Prêt à vivre votre propre expérience ?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Rejoignez les milliers de clients satisfaits qui ont découvert l'authenticité
                de la cuisine africaine moderne chez Ivrivri. Votre table vous attend !
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Star className="text-ivrivri-yellow" size={20} />
                  <span>Expérience culinaire 5 étoiles garantie</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="text-ivrivri-red" size={20} />
                  <span>Service attentionné et personnalisé</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="text-ivrivri-yellow" size={20} />
                  <span>Ambiance chaleureuse pour tous les moments</span>
                </div>
              </div>

              <Link href="/contact">
                <Button size="lg" className="bg-ivrivri-yellow hover:bg-yellow-500 text-black font-semibold">
                  Réserver ma Table
                </Button>
              </Link>
            </div>

            <div className="space-y-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    {renderStars(5)}
                    <Badge className="ml-3 bg-ivrivri-yellow text-black">Récent</Badge>
                  </div>
                  <p className="text-white italic mb-4">
                    "Une soirée magique ! Ivrivri a dépassé toutes nos attentes.
                    Les saveurs, l'ambiance, le service... tout était parfait !"
                  </p>
                  <p className="text-gray-400 text-sm">
                    - Adjoa M., Lomé • Il y a 2 jours
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    {renderStars(5)}
                    <Badge className="ml-3 bg-ivrivri-red text-white">Populaire</Badge>
                  </div>
                  <p className="text-white italic mb-4">
                    "Le meilleur restaurant africain que j'aie jamais essayé.
                    Authentic, délicieux et avec un service exceptionnel !"
                  </p>
                  <p className="text-gray-400 text-sm">
                    - Kwame A., Accra • Il y a 1 semaine
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
