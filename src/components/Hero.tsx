// components/Hero.tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Utensils, CalendarDays, Sparkles } from "lucide-react";

interface HeroProps {
  id: string;
}

// Variantes d'animation (inchangées)
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
  hidden: { scale: 1.1 },
  visible: {
    scale: 1,
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },
};

const chiefImageVariants: Variants = {
  hidden: { x: "-100%", opacity: 0 },
  visible: {
    x: "0%",
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero({ id }: HeroProps) {
  return (
    <section id={id} className="relative flex flex-col lg:flex-row items-center min-h-[calc(100vh-80px)] md:min-h-[600px] lg:h-[700px] overflow-hidden">
      {/* Section image */}
      <div className="relative w-full lg:w-1/2 h-64 lg:h-full overflow-hidden">
        <motion.div
          variants={bgImageVariants}
          initial="hidden"
          animate="visible"
          className="absolute inset-0"
        >
          <Image
            src="/hero-food.jpg"
            alt="Nourriture Ivrivi"
            fill
            className="object-cover object-center"
            priority
            quality={100}
          />
        </motion.div>

        <motion.div
          variants={chiefImageVariants}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 z-10 flex items-end justify-start"
        >
          <div className="relative w-full h-[80%] sm:h-[90%] md:h-[90%] lg:h-[85%]">
            <Image
              src="/img-chef.png"
              alt="Chef Ivrivi"
              fill
              className="object-contain object-left-bottom"
              quality={100}
              priority
            />
          </div>
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent lg:hidden" />

        {/* Separator with increased transparency */}
        <div className="hidden lg:block absolute right-0 top-0 h-full w-32 z-10">
          <svg
            viewBox="0 0 200 100"
            preserveAspectRatio="none"
            className="h-full w-full"
          >
            <path
              d="M0,0 C60,20 50,80 0,100 L200,100 L200,0 Z"
              className="fill-black"
              style={{ opacity: 0.5 }}
            />
          </svg>
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 py-16 px-6 sm:px-12 lg:px-16 xl:px-24 bg-gradient-to-br from-gray-900 via-gray-900 to-amber-900 text-white relative z-20">
        <motion.div
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl mx-auto flex flex-col items-start text-left"
        >
          <motion.div variants={textItemVariants} className="mb-4">
            <motion.span
              className="inline-flex items-center px-4 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full text-sm font-medium text-amber-200 mb-4 border border-amber-400/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="mr-2" size={16} />
              Nouvelle expérience culinaire
            </motion.span>
          </motion.div>

          <motion.h1 variants={textItemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            <span className="block text-gray-100">Découvrez</span>
            <span className="text-amber-400 relative inline-block">
              Ivrivri
              <motion.span
                variants={underlineVariants}
                className="absolute bottom-0 left-0 w-full h-1.5 bg-amber-500 transform origin-left"
              />
            </span>
          </motion.h1>

          <motion.p
            variants={textItemVariants}
            className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed"
          >
            Une symphonie de saveurs africaines modernes où chaque plat raconte une histoire,
            préparée avec des ingrédients locaux d'exception par nos chefs étoilés.
          </motion.p>

          <motion.div
            variants={textItemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full"
          >
            {/* Explorer le menu - Version corrigée */}
            <motion.div
              whileHover={{
                y: -3,
                boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full"
            >
              <Link 
                href="/menu"
                className="relative overflow-hidden group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-all duration-300 flex items-center justify-center w-full"
              >
                <span className="relative z-10 flex items-center">
                  <Utensils className="mr-3" size={20} />
                  Explorer le menu
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>

            {/* Réserver une table - Version corrigée */}
            <motion.div
              whileHover={{
                y: -3,
                boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.1)"
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full"
            >
              <Link 
                href="/contact"
                className="relative overflow-hidden group bg-transparent border-2 border-white/60 hover:border-white text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-all duration-300 flex items-center justify-center backdrop-blur-sm w-full"
              >
                <span className="relative z-10 flex items-center">
                  <CalendarDays className="mr-3" size={20} />
                  Réserver une table
                </span>
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}