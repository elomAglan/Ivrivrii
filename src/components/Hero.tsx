"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image"; 
import Link from "next/link";   
import { Utensils, CalendarDays, Sparkles, ChevronRight } from "lucide-react";

interface HeroProps {
  id: string;
}

const textContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
    },
  },
};

const textItemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const underlineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      delay: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const bgImageVariants: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.5,
      ease: [0.2, 0, 0, 1],
    },
  },
};

const plateImageVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.6,
      ease: [0.2, 0, 0, 1],
    },
  },
};

export default function Hero({ id }: HeroProps) {
  return (
    <section id={id} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Fond texturé élégant */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black opacity-80" />
      
      {/* Image de fond avec effet de flou contrôlé */}
      <motion.div
        variants={bgImageVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 overflow-hidden"
      >
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edabd34bb?q=80&w=2070&auto=format&fit=crop" 
          alt="Restaurant ambiance"
          fill
          className="object-cover object-center"
          priority
          quality={100}
          onError={(e) => { e.currentTarget.src = "https://placehold.co/1920x1080?text=Background+Not+Available"; }} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      </motion.div>

      {/* Contenu principal */}
      <div className="container relative z-10 px-6 py-24 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {/* Section texte */}
          <motion.div
            variants={textContainerVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-1/2 text-white mb-16 lg:mb-0 lg:pr-12 text-center"
          >
            <motion.div variants={textItemVariants} className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-amber-100 border border-white/20">
                <Sparkles className="mr-2" size={16} />
                Excellence culinaire depuis 2015
              </span>
            </motion.div>

           <motion.h1 variants={textItemVariants} className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8">
  <span className="block font-serif italic text-white/90">Bienvenue chez</span>
  <span className="block font-bold mt-2">
    <span className="text-amber-400 relative inline-block">
      Ivrivri
      <motion.span
        variants={underlineVariants}
        className="absolute bottom-0 left-0 w-full h-1 bg-amber-500 transform origin-left"
      />
    </span>
  </span>
  <span className="block font-light text-white/80 text-xl mt-2">
    – L’art culinaire africain réinventé
  </span>
</motion.h1>


            <motion.p
              variants={textItemVariants}
              className="text-lg md:text-xl mb-12 text-white/80 leading-relaxed max-w-lg font-light mx-auto"
            >
              Une expérience gastronomique unique où tradition et innovation se rencontrent. 
              Notre chef étoilé revisite les classiques avec une touche contemporaine.
            </motion.p>

            <motion.div
              variants={textItemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link 
                  href="/menu"
                  className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium tracking-tighter text-black bg-amber-500 rounded-lg hover:bg-amber-600 transition-all duration-300"
                >
                  <span className="relative flex items-center">
                    <Utensils className="mr-3" size={20} />
                    Découvrir le menu
                    <ChevronRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
                  </span>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link 
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium tracking-tighter text-white border border-white/40 rounded-lg hover:border-white/80 transition-all duration-300 backdrop-blur-sm"
                >
                  <span className="relative flex items-center">
                    <CalendarDays className="mr-3" size={20} />
                    Réserver une table
                    <ChevronRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Section image du chef */}
          <motion.div
            variants={plateImageVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-16 lg:mt-0"
          >
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden shadow-2xl ring-4 ring-amber-500/50">
              <Image
                src="/chef.jpg" // Assurez-vous que ce fichier est dans votre dossier `public/`
                alt="Chef cuisinier" 
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                priority
                quality={90}
                onError={(e) => { e.currentTarget.src = "https://placehold.co/500x500?text=Image+Chef+Non+Dispo"; }} // Image de secours si chef.jpg n'est pas trouvé
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Indicateur de défilement élégant */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce w-8 h-14 rounded-full border-2 border-white/50 flex justify-center p-1">
          <div className="w-2 h-2 rounded-full bg-white/80 mt-2" />
        </div>
      </div>
    </section>
  );
}