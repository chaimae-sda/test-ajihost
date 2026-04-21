"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

import { THEME_COLORS, TEXT_COLORS } from "./lib/constants";
import type { TextColor } from "./lib/types";
import { useTheme } from "./lib/ThemeContext";

import ColorPicker from "./components/ColorPicker";
import ImageUpload from "./components/ImageUpload";
import PhonePreview from "./components/PhonePreview";
import styles from "./wizard.module.css";

export default function WizardStep1() {
  const { themeColor, setThemeColor } = useTheme();

  const [riadName, setRiadName] = useState("");
  const [textColor, setTextColor] = useState<TextColor>(TEXT_COLORS[0]);
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setBackgroundImage(URL.createObjectURL(file));
    }
  };

  return (
    <div
      className={`min-h-[calc(100vh-64px)] bg-gray-50 flex items-center justify-center p-4 sm:p-8 font-sans ${
        styles[`theme-${themeColor.id}`]
      }`}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* ── Left Column: Form ── */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col gap-8">
          {/* Header */}
          <div>
            <span className="text-sm font-semibold tracking-wider uppercase text-gray-400 mb-2 block">
              Étape 01
            </span>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Personnalisation
            </h1>
            <p className="text-gray-500">
              Configurez l&apos;apparence de votre Riad pour vos clients.
            </p>
          </div>

          {/* Fields */}
          <div className="space-y-6">
            {/* Riad Name */}
            <div>
              <label
                htmlFor="riadName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Nom du riad
              </label>
              <input
                type="text"
                id="riadName"
                value={riadName}
                onChange={(e) => setRiadName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)] transition-colors bg-gray-50/50 text-gray-900 placeholder-gray-400"
                placeholder="Ex. Riad Majorelle"
              />
            </div>

            {/* Primary Color */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Couleur principale
              </label>
              <ColorPicker
                items={THEME_COLORS}
                selected={themeColor}
                onSelect={setThemeColor}
                getButtonClass={(c) => styles[`color-btn-${c.id}`]}
                getCheckClass={() => "text-white"}
                ariaPrefix="Couleur"
              />
            </div>

            {/* Text Color */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Couleur du texte
              </label>
              <ColorPicker
                items={TEXT_COLORS}
                selected={textColor}
                onSelect={setTextColor}
                getButtonClass={(tc) => `border border-gray-200 ${tc.bgClass}`}
                getCheckClass={(tc) => tc.checkColor}
                ariaPrefix="Texte"
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image de fond
              </label>
              <ImageUpload
                previewUrl={backgroundImage}
                onFileSelect={handleImageUpload}
              />
            </div>
          </div>

          {/* Submit */}
          <div className="pt-6 border-t border-gray-100 mt-2">
            <button className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white font-semibold text-lg transition-transform active:scale-[0.98] shadow-lg hover:shadow-xl bg-[var(--theme-color)]">
              Suivant
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ── Right Column: Live Preview ── */}
        <PhonePreview
          riadName={riadName}
          backgroundImage={backgroundImage}
          textColorClass={textColor.textClass}
        />
      </div>
    </div>
  );
}
