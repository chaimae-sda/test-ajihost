"use client";

import { UtensilsCrossed } from "lucide-react";

import { PLATS, RIAD } from "../lib/constants";
import { buildWhatsAppUrl } from "../lib/utils";
import { useTheme } from "../lib/ThemeContext";
import PlatCard from "../components/PlatCard";
import styles from "../wizard.module.css";

export default function RepasPage() {
  const { themeColor, riadName } = useTheme();
  const riadDisplayName = riadName.trim() || "Nom du riad";

  const handleCommander = (platNom: string) => {
    window.open(
      buildWhatsAppUrl(RIAD.whatsapp, riadDisplayName, platNom),
      "_blank"
    );
  };

  return (
    <div
      className={`min-h-[calc(100vh-64px)] bg-gray-100 flex justify-center py-6 sm:py-12 px-4 ${
        styles[`theme-${themeColor.id}`]
      }`}
    >
      {/* Mobile Frame */}
      <div className="w-full max-w-100 bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col relative border-[6px] border-gray-900 pb-8">
        {/* Header — uses the theme color */}
        <div className="text-white pt-12 pb-6 px-6 shadow-md relative z-10 bg-(--theme-color)">
          <div className="absolute top-0 inset-x-0 h-6 flex justify-center">
            <div className="w-24 h-4 bg-gray-900 rounded-b-2xl" />
          </div>

          <h1 className="text-2xl font-bold tracking-tight mb-1">
            {riadDisplayName}
          </h1>
          <p className="text-white/80 text-sm font-medium inline-flex items-center gap-1.5 border-b border-white/30 pb-4">
            <UtensilsCrossed className="w-4 h-4" />
            Service de restauration
          </p>
        </div>

        {/* Menu List */}
        <div className="flex-1 overflow-y-auto bg-gray-50 p-5 flex flex-col gap-5">
          <div className="mb-1">
            <h2 className="text-gray-900 font-bold text-lg">Notre Menu</h2>
            <p className="text-gray-500 text-sm">
              Découvrez nos spécialités locales, préparées avec soin.
            </p>
          </div>

          {PLATS.map((plat) => (
            <PlatCard
              key={plat.id}
              plat={plat}
              accentHex={themeColor.hex}
              onCommander={handleCommander}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
