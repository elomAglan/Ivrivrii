'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Calendar,
  Users,
  UtensilsCrossed,
  Send,
  CheckCircle,
  Navigation
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    occasion: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsappReservation = (e: React.FormEvent) => {
    e.preventDefault();

    const { firstName, date, time, guests, message } = formData;
    const phoneNumber = '22891111111';

    const baseMessage = `Bonjour Ivrivri ! Je souhaiterais réserver une table. Voici les détails de ma demande :`;
    const details = [
      `Nom: ${firstName || 'Non spécifié'}`,
      `Date: ${date || 'Non spécifiée'}`,
      `Heure: ${time || 'Non spécifiée'}`,
      `Nombre de personnes: ${guests || 'Non spécifié'}`,
      `Message: ${message || 'Aucun message supplémentaire.'}`
    ].join('\n');

    const fullMessage = `${baseMessage}\n\n${details}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header de la page */}
      <section className="relative py-20 pt-32 text-white overflow-hidden">
        {/* Image de fond */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

        {/* Contenu */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <UtensilsCrossed size={48} className="mr-4 text-ivrivri-yellow" />
            <h1 className="text-5xl md:text-6xl font-bold">Contact & Réservation</h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Réservez votre table et contactez-nous pour une expérience culinaire inoubliable
          </p>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Grille principale avec 2 colonnes égales */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Colonne de gauche - Formulaire WhatsApp */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-3xl font-bold text-green-600">
                  <MessageCircle className="mr-3" size={32} />
                  Réservation par WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-gray-700">
                  Remplissez simplement ce formulaire et nous vous contacterons directement via WhatsApp pour confirmer votre réservation.
                </p>
                <form onSubmit={handleWhatsappReservation} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Votre Prénom <span className="text-red-500">*</span></Label>
                      <Input id="firstName" name="firstName" type="text" value={formData.firstName} onChange={handleInputChange} required />
                    </div>
                    <div>
                      <Label htmlFor="guests">Nombre de personnes <span className="text-red-500">*</span></Label>
                      <Input id="guests" name="guests" type="number" min="1" value={formData.guests} onChange={handleInputChange} required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date">Date <span className="text-red-500">*</span></Label>
                      <Input id="date" name="date" type="date" value={formData.date} onChange={handleInputChange} required />
                    </div>
                    <div>
                      <Label htmlFor="time">Heure <span className="text-red-500">*</span></Label>
                      <Input id="time" name="time" type="time" value={formData.time} onChange={handleInputChange} required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message">Message ou demande spéciale</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} />
                  </div>
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3">
                    <MessageCircle className="mr-2" size={20} />
                    Réserver via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Carte Google Maps */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-ivrivri-black">
                  <MapPin className="mr-3 text-ivrivri-yellow" size={28} />
                  Nous Trouver
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video overflow-hidden rounded-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3109.353657298756!2d1.2318658737035568!3d6.1642014938230405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e3fb6f47ab1d%3A0xe1ec4d791f0eae0f!2sIvrivrii%20Chicken!5e1!3m2!1sfr!2stg!4v1754819700691!5m2!1sfr!2stg"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Situé au cœur de Lomé, Ivrivri est facilement accessible en voiture ou en transport en commun.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Colonne de droite - Informations de contact */}
          <div className="space-y-8">
            {/* Carte Informations de contact */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-ivrivri-black">
                  <Phone className="mr-3 text-ivrivri-yellow" size={28} />
                  Informations de Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-ivrivri-red mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-ivrivri-black">Adresse</h4>
                      <p className="text-gray-600">
                        Boulevard du 13 Janvier<br />
                        Lomé, Togo
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-2"
                        onClick={() => window.open('https://maps.google.com/?q=Lomé,Togo', '_blank')}
                      >
                        <Navigation className="mr-2" size={14} />
                        Voir sur la carte
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="text-ivrivri-yellow mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-ivrivri-black">Téléphone</h4>
                      <p className="text-gray-600">+228 90 00 00 00</p>
                      <Badge className="mt-1 bg-green-100 text-green-800">
                        Disponible 7j/7
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MessageCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-ivrivri-black">WhatsApp</h4>
                      <p className="text-gray-600">+228 91 11 11 11</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-2 border-green-600 text-green-600 hover:bg-green-50"
                        onClick={() => window.open('https://wa.me/22891111111', '_blank')}
                      >
                        <MessageCircle className="mr-2" size={14} />
                        Chat WhatsApp
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="text-ivrivri-yellow mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-ivrivri-black">Email</h4>
                      <p className="text-gray-600">contact@ivrivri.com</p>
                      <p className="text-sm text-gray-500">Réponse sous 24h</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Carte Horaires */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-ivrivri-black">
                  <Clock className="mr-3 text-ivrivri-yellow" size={28} />
                  Horaires d'Ouverture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-ivrivri-black">Lundi - Jeudi</span>
                    <span className="text-gray-600">11h00 - 22h00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-ivrivri-black">Vendredi - Dimanche</span>
                    <span className="text-gray-600">11h00 - 23h00</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-ivrivri-red">Service</span>
                    <Badge className="bg-ivrivri-yellow text-black">Continu</Badge>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h5 className="font-semibold text-ivrivri-black mb-2">Important</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Réservation recommandée, surtout le weekend</li>
                    <li>• Cuisine ouverte en continu</li>
                    <li>• Groupes de 8+ : nous contacter directement</li>
                    <li>• Parking gratuit disponible</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}