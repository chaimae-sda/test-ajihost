import Image from "next/image";
import { Clock, Phone } from "lucide-react";
import type { Plat } from "../lib/types";

interface PlatCardProps {
  plat: Plat;
  accentHex: string;
  onCommander: (nom: string) => void;
}

export default function PlatCard({ plat, accentHex, onCommander }: PlatCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
      {/* Food Image */}
      <div className="relative h-40 w-full">
        <Image
          src={plat.image}
          alt={plat.nom}
          fill
          className="object-cover"
          sizes="400px"
        />
        {/* Price Badge */}
        <div
          className="absolute top-3 right-3 text-white font-bold px-3 py-1 rounded-lg text-sm shadow-md"
          style={{ backgroundColor: accentHex }}
        >
          {plat.prix} MAD
        </div>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col gap-3">
        <h3 className="font-bold text-gray-900 text-lg leading-tight">
          {plat.nom}
        </h3>

        <div className="flex items-center text-xs text-gray-500 font-medium bg-gray-50 w-fit px-2.5 py-1.5 rounded-md">
          <Clock className="w-3.5 h-3.5 mr-1.5 text-gray-400" />
          Disponible : {plat.horaire}
        </div>

        <button
          onClick={() => onCommander(plat.nom)}
          className="w-full mt-1 text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 active:scale-95 hover:opacity-90"
          style={{ backgroundColor: "#25D366" }}
        >
          <Phone className="w-4 h-4 fill-white shrink-0" />
          Commander par WhatsApp
        </button>
      </div>
    </div>
  );
}
