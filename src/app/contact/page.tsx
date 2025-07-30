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
import type { Metadata } from 'next';

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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulation d'envoi de formulaire
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsLoading(false);
    setIsSubmitted(true);
  };

  const whatsappMessage = `Bonjour Ivrivri ! Je souhaiterais réserver une table pour ${formData.guests || '[nombre]'} personnes le ${formData.date || '[date]'} à ${formData.time || '[heure]'}. Merci !`;
  const whatsappUrl = `https://wa.me/22891111111?text=${encodeURIComponent(whatsappMessage)}`;

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <CheckCircle className="mx-auto text-green-600 mb-4" size={64} />
            <h2 className="text-2xl font-bold text-ivrivri-black mb-4">
              Réservation Confirmée !
            </h2>
            <p className="text-gray-600 mb-6">
              Merci pour votre réservation. Nous vous contacterons sous peu pour confirmer les détails.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              className="bg-ivrivri-yellow hover:bg-yellow-500 text-black"
            >
              Nouvelle Réservation
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulaire de réservation */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-ivrivri-black">
                  <Calendar className="mr-3 text-ivrivri-yellow" size={28} />
                  Réserver une Table
                </CardTitle>
                <p className="text-gray-600">
                  Remplissez le formulaire ci-dessous pour réserver votre table chez Ivrivri
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Informations personnelles */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Prénom *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Nom *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Téléphone *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="+228 XX XX XX XX"
                      />
                    </div>
                  </div>

                  {/* Détails de la réservation */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="date">Date *</Label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div>
                      <Label htmlFor="time">Heure *</Label>
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        required
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ivrivri-yellow"
                      >
                        <option value="">Choisir une heure</option>
                        <option value="11:00">11:00</option>
                        <option value="11:30">11:30</option>
                        <option value="12:00">12:00</option>
                        <option value="12:30">12:30</option>
                        <option value="13:00">13:00</option>
                        <option value="13:30">13:30</option>
                        <option value="14:00">14:00</option>
                        <option value="19:00">19:00</option>
                        <option value="19:30">19:30</option>
                        <option value="20:00">20:00</option>
                        <option value="20:30">20:30</option>
                        <option value="21:00">21:00</option>
                        <option value="21:30">21:30</option>
                        <option value="22:00">22:00</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="guests">Nombre de convives *</Label>
                      <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        required
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ivrivri-yellow"
                      >
                        <option value="">Choisir</option>
                        {Array.from({ length: 12 }, (_, i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1} {i === 0 ? 'personne' : 'personnes'}
                          </option>
                        ))}
                        <option value="13+">13+ personnes</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="occasion">Occasion spéciale (optionnel)</Label>
                    <select
                      id="occasion"
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleInputChange}
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ivrivri-yellow"
                    >
                      <option value="">Sélectionner une occasion</option>
                      <option value="anniversaire">Anniversaire</option>
                      <option value="business">Déjeuner d'affaires</option>
                      <option value="romantic">Dîner romantique</option>
                      <option value="family">Repas en famille</option>
                      <option value="celebration">Célébration</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message particulier (optionnel)</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1"
                      rows={4}
                      placeholder="Allergies, demandes spéciales, préférences de table..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="flex-1 bg-ivrivri-red hover:bg-red-700 text-white"
                    >
                      {isLoading ? (
                        <>Envoi en cours...</>
                      ) : (
                        <>
                          <Send className="mr-2" size={16} />
                          Confirmer la Réservation
                        </>
                      )}
                    </Button>

                    <Button
                      type="button"
                      onClick={() => window.open(whatsappUrl, '_blank')}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                    >
                      <MessageCircle className="mr-2" size={16} />
                      Réserver via WhatsApp
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Informations de contact */}
          <div className="space-y-8">
            {/* Informations générales */}
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

            {/* Horaires */}
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

            {/* Carte */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-ivrivri-black">
                  <MapPin className="mr-3 text-ivrivri-yellow" size={28} />
                  Nous Trouver
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="mx-auto text-gray-400 mb-2" size={48} />
                    <p className="text-gray-600">Carte Google Maps</p>
                    <p className="text-sm text-gray-500 mt-1">Boulevard du 13 Janvier, Lomé</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Situé au cœur de Lomé, Ivrivri est facilement accessible en voiture ou en transport en commun.
                  Parking gratuit disponible pour nos clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
