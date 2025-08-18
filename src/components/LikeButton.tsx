// src/components/LikeButton.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

interface LikeButtonProps {
  id: string; // Utilisé pour l'identifiant unique et pour localStorage
  initialLiked?: boolean; // Optionnel, par défaut à false
  className?: string; // Pour ajouter des classes personnalisées au bouton externe
}

const LikeButton: React.FC<LikeButtonProps> = ({ id, initialLiked = false, className = '' }) => {
  const [isLiked, setIsLiked] = useState<boolean>(initialLiked);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  // Vérifier l'état initial au montage (depuis localStorage si disponible)
  useEffect(() => {
    try {
      const savedLike = localStorage.getItem(`like_${id}`);
      if (savedLike !== null) { // Vérifier si l'élément existe dans localStorage
        setIsLiked(savedLike === 'true');
      }
    } catch (error) {
      console.error("Erreur lors de l'accès à localStorage:", error);
    }
  }, [id]);

  const handleLike = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      const newState = !isLiked;
      setIsLiked(newState);
      
      try {
        // Enregistrer dans localStorage
        localStorage.setItem(`like_${id}`, newState.toString());
      } catch (error) {
        console.error("Erreur lors de l'écriture dans localStorage:", error);
      }

      // Désactive l'animation après un court délai pour qu'elle puisse être rejouée
      setTimeout(() => {
        setIsAnimating(false);
      }, 800); // Durée de l'animation des particules
    }
  };

  return (
    <>
      {/* Styles d'animation intégrés pour l'exemple */}
      <style jsx>{`
        @keyframes like-particle {
          0% {
            transform: scale(0.5) translateY(0px) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: scale(1.2) translateY(-20px) rotate(45deg); /* Plus grand et s'éloigne */
            opacity: 0.8;
          }
          100% {
            transform: scale(0) translateY(-50px) rotate(90deg); /* Disparaît en s'éloignant */
            opacity: 0;
          }
        }
      `}</style>
      <button
        onClick={handleLike}
        className={`relative p-2 rounded-full transition-all duration-300 ${className} ${
          isLiked 
            ? 'text-red-500' 
            : 'text-gray-400 hover:text-red-400'
        }`}
        aria-label={isLiked ? "Retirer des favoris" : "Ajouter aux favoris"}
      >
        {/* Coeur principal */}
        <Heart 
          className={`w-7 h-7 transition-all duration-300 ${
            isLiked ? 'fill-current scale-110' : 'fill-none scale-100'
          }`}
        />
        
        {/* Effet de particules */}
        {isAnimating && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-red-400 rounded-full"
                style={{
                  transform: `rotate(${i * 45}deg) translateX(-15px)`, // Position initiale des particules autour du centre
                  opacity: 0,
                  animation: `like-particle 0.8s ease-out forwards`,
                  animationDelay: `${i * 0.05}s`
                }}
              />
            ))}
          </div>
        )}
      </button>
    </>
  );
};

export default LikeButton;