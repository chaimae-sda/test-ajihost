"use client";

import React from 'react';
import { Clock, Phone, UtensilsCrossed } from 'lucide-react';

// Données hardcodées
const plats = [
  { id: 1, nom: "Tajine poulet citron", prix: 80, horaire: "12h-22h", image: "🍲" },
  { id: 2, nom: "Briouates au fromage", prix: 45, horaire: "8h-23h", image: "🥟" }
];
const riad = { nom: "Riad Al Baraka", whatsapp: "212600000000" };

export default function RepasExperienceGuest() {
  const handleCommander = (platNom: string) => {
    const text = `Bonjour ${riad.nom}, je souhaite commander : *${platNom}*.`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${riad.whatsapp}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-100 flex justify-center py-6 sm:py-12 px-4 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Simulation d'un écran Mobile */}
      <div className="w-full max-w-[400px] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col relative border-[6px] border-gray-900 pb-8">
        
        {/* En-tête du Riad */}
        <div className="bg-indigo-600 text-white pt-12 pb-6 px-6 shadow-md relative z-10">
          {/* Fausse encoche mobile */}
          <div className="absolute top-0 inset-x-0 h-6 flex justify-center">
            <div className="w-24 h-4 bg-gray-900 rounded-b-2xl"></div>
          </div>
          
          <h1 className="text-2xl font-bold tracking-tight mb-1">{riad.nom}</h1>
          <p className="text-indigo-100 text-sm font-medium flex items-center gap-1.5 border-b border-indigo-500/50 pb-4 inline-flex">
            <UtensilsCrossed className="w-4 h-4" /> Service de restauration
          </p>
        </div>

        {/* Contenu principal / Liste des repas */}
        <div className="flex-1 overflow-y-auto bg-gray-50 p-6 flex flex-col gap-5">
          <div className="mb-2">
            <h2 className="text-gray-900 font-bold text-lg">Notre Menu</h2>
            <p className="text-gray-500 text-sm">Découvrez nos spécialités locales, préparées avec soin.</p>
          </div>

          {plats.map((plat) => (
            <div key={plat.id} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col gap-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-col">
                  <span className="text-3xl mb-2 bg-gray-50 w-12 h-12 rounded-xl flex items-center justify-center border border-gray-100">{plat.image}</span>
                  <h3 className="font-bold text-gray-900 text-lg leading-tight">{plat.nom}</h3>
                </div>
                <div className="bg-indigo-50 text-indigo-700 font-bold px-3 py-1.5 rounded-lg text-sm shrink-0">
                  {plat.prix} MAD
                </div>
              </div>

              <div className="flex items-center text-xs text-gray-500 font-medium bg-gray-50 w-fit px-2 py-1 rounded-md">
                <Clock className="w-3.5 h-3.5 mr-1.5 text-gray-400" />
                Disponible : {plat.horaire}
              </div>

              <button
                onClick={() => handleCommander(plat.nom)}
                className="w-full mt-2 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold py-3 px-4 rounded-xl shadow-sm shadow-green-200 transition-all flex items-center justify-center gap-2 transform active:scale-95"
              >
                <Phone className="w-4 h-4 fill-white shrink-0" />
                Commander par WhatsApp
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
