"use client";

import React, { useState } from 'react';
import { UploadCloud, Smartphone, ArrowRight, Check } from 'lucide-react';
import styles from './wizard.module.css';

const TEXT_COLORS = [
  { id: 'white', textClass: 'text-white', bgClass: 'bg-white', checkColor: 'text-gray-900', label: 'Blanc' },
  { id: 'black', textClass: 'text-gray-900', bgClass: 'bg-gray-900', checkColor: 'text-white', label: 'Noir' },
];

const COLORS = [
  { id: 'indigo', hex: '#6366f1' },
  { id: 'rose', hex: '#f43f5e' },
  { id: 'emerald', hex: '#10b981' },
  { id: 'amber', hex: '#f59e0b' },
  { id: 'sky', hex: '#0ea5e9' },
  { id: 'violet', hex: '#8b5cf6' },
];

export default function WizardStep1() {
  const [riadName, setRiadName] = useState('');
  const [primaryColor, setPrimaryColor] = useState(COLORS[0]);
  const [textColor, setTextColor] = useState(TEXT_COLORS[0]);
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBackgroundImage(imageUrl);
    }
  };

  return (
    <div className={`min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-8 font-sans ${styles[`theme-${primaryColor.id}`]}`}>
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Form Controls */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col gap-8">
          <div>
            <span className="text-sm font-semibold tracking-wider uppercase text-gray-400 mb-2 block">Étape 01</span>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Personnalisation</h1>
            <p className="text-gray-500">Configurez l'apparence de votre Riad pour vos clients.</p>
          </div>

          <div className="space-y-6">
            {/* Riad Name */}
            <div>
              <label htmlFor="riadName" className="block text-sm font-medium text-gray-700 mb-2">
                Nom du riad
              </label>
              <input
                type="text"
                id="riadName"
                value={riadName}
                onChange={(e) => setRiadName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)] transition-all transition-colors bg-gray-50/50 text-gray-900 placeholder-gray-400"
                placeholder="Ex. Riad Majorelle"
              />
            </div>

            {/* Color Selector */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Couleur principale
              </label>
              <div className="flex gap-4">
                {COLORS.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setPrimaryColor(color)}
                    className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-sm ${styles[`color-btn-${color.id}`]} ${
                      primaryColor.id === color.id ? 'ring-2 ring-offset-2 ring-gray-300' : ''
                    }`}
                    aria-label={`Sélectionner la couleur ${color.id}`}
                  >
                    {primaryColor.id === color.id && (
                      <Check className="text-white w-5 h-5 absolute" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Text Color Selector */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Couleur du texte
              </label>
              <div className="flex gap-4">
                {TEXT_COLORS.map((tc) => (
                  <button
                    key={tc.id}
                    onClick={() => setTextColor(tc)}
                    className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-sm border border-gray-200 ${tc.bgClass} ${
                      textColor.id === tc.id ? 'ring-2 ring-offset-2 ring-gray-300' : ''
                    }`}
                    aria-label={`Sélectionner la couleur de texte ${tc.label}`}
                  >
                    {textColor.id === tc.id && (
                      <Check className={`${tc.checkColor} w-5 h-5 absolute`} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image de fond
              </label>
              <label className="cursor-pointer flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 hover:bg-gray-100 hover:border-gray-400 transition-all">
                <UploadCloud className="w-8 h-8 text-gray-400 mb-3" />
                <span className="text-sm font-medium text-gray-600">Cliquez pour télécharger</span>
                <span className="text-xs text-gray-400 mt-1">PNG, JPG ou WEBP</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100 mt-2">
            <button
              className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white font-semibold text-lg transition-transform active:scale-[0.98] shadow-lg hover:shadow-xl bg-[var(--theme-color)]"
            >
               Suivant
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Column: Mobile Preview */}
        <div className="flex items-center justify-center h-full">
          <div className="relative w-[340px] h-[680px] bg-white rounded-[3rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border-[8px] border-gray-900 overflow-hidden shrink-0">
            {/* Dynamic Island / Notch Mock */}
            <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-50">
              <div className="w-32 h-6 bg-gray-900 rounded-b-3xl"></div>
            </div>

            {/* Screen Content */}
            <div className="relative w-full h-full flex flex-col bg-gray-50">
              {/* Background Header Area */}
              <div className="relative h-64 w-full bg-gray-200">
                {backgroundImage ? (
                  <img src={backgroundImage} alt="Background Preview" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-gray-500 text-sm font-medium">Aperçu de l'image</span>
                  </div>
                )}
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                
                {/* Riad Title */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className={`text-3xl font-bold mb-2 shadow-sm leading-tight break-words ${textColor.textClass}`}>
                    {riadName || 'Nom du riad...'}
                  </h2>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--theme-color)]" />
                    <p className="text-gray-200 text-sm font-medium">Bienvenue</p>
                  </div>
                </div>
              </div>

              {/* Mock App Content Area */}
              <div className="flex-1 p-6 flex flex-col gap-4">
                <div className="h-20 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center p-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--theme-light)]">
                    <Smartphone className="w-6 h-6 text-[var(--theme-color)]" />
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mb-2"></div>
                    <div className="h-3 w-16 bg-gray-100 rounded animate-pulse"></div>
                  </div>
                </div>
                
                <div className="h-32 rounded-2xl bg-white shadow-sm border border-gray-100 p-4">
                  <div className="flex justify-between items-center mb-4">
                    <div className="h-4 w-20 bg-gray-200 rounded"></div>
                    <div className="h-6 w-16 rounded-full bg-[var(--theme-light)]">
                    </div>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded mb-2"></div>
                  <div className="h-2 w-4/5 bg-gray-100 rounded mb-2"></div>
                  <div className="h-2 w-1/2 bg-gray-100 rounded"></div>
                </div>
              </div>
              
              {/* Mock Bottom Navigation */}
              <div className="h-20 bg-white border-t border-gray-100 flex justify-around items-center pb-6">
                <div className="w-10 h-10 flex flex-col items-center justify-center gap-1.5">
                  <div className="w-6 h-6 rounded-md bg-[var(--theme-color)]"></div>
                  <div className="w-1 h-1 rounded-full bg-[var(--theme-color)]"></div>
                </div>
                <div className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 opacity-30 grayscale">
                  <div className="w-6 h-6 rounded-md bg-[var(--theme-color)]"></div>
                </div>
                <div className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 opacity-30 grayscale">
                  <div className="w-6 h-6 rounded-md bg-[var(--theme-color)]"></div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
