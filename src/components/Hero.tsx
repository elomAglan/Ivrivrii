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
      <div className="absolute inset-0 bg-[url('/texture-paper.png')] opacity-10 mix-blend-overlay" />
      
      {/* Image de fond avec effet de flou contrôlé */}
      <motion.div
        variants={bgImageVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 overflow-hidden"
      >
        <Image
          src="/hero-restaurant.jpg"
          alt="Restaurant Ivrivi"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      </motion.div>

      {/* Contenu principal */}
      <div className="container relative z-10 px-6 py-24 mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Section texte */}
          <motion.div
            variants={textContainerVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-1/2 text-white mb-16 lg:mb-0 lg:pr-12"
          >
            <motion.div variants={textItemVariants} className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-amber-100 border border-white/20">
                <Sparkles className="mr-2" size={16} />
                Excellence culinaire depuis 2015
              </span>
            </motion.div>

            <motion.h1 variants={textItemVariants} className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8">
              <span className="block font-serif italic text-white/90">L'art de</span>
              <span className="block font-bold mt-2">
                <span className="text-amber-400 relative inline-block">
                  Savourer
                  <motion.span
                    variants={underlineVariants}
                    className="absolute bottom-0 left-0 w-full h-1 bg-amber-500 transform origin-left"
                  />
                </span>
              </span>
            </motion.h1>

            <motion.p
              variants={textItemVariants}
              className="text-lg md:text-xl mb-12 text-white/80 leading-relaxed max-w-lg font-light"
            >
              Une expérience gastronomique unique où tradition et innovation se rencontrent. 
              Notre chef étoilé revisite les classiques avec une touche contemporaine.
            </motion.p>

            <motion.div
              variants={textItemVariants}
              className="flex flex-col sm:flex-row gap-4"
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
                    Découvrir la carte
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
                  href="/reservation"
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

          {/* Section image du plat signature */}
          <motion.div
            variants={plateImageVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-1/2 flex justify-center lg:justify-end relative"
          >
           
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