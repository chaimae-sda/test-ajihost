import { Clock, Phone } from "lucide-react";
import type { Plat } from "../lib/types";

interface PlatCardProps {
  plat: Plat;
  onCommander: (nom: string) => void;
}

export default function PlatCard({ plat, onCommander }: PlatCardProps) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col">
          <span className="text-3xl mb-2 bg-gray-50 w-12 h-12 rounded-xl flex items-center justify-center border border-gray-100">
            {plat.image}
          </span>
          <h3 className="font-bold text-gray-900 text-lg leading-tight">
            {plat.nom}
          </h3>
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
        onClick={() => onCommander(plat.nom)}
        className="w-full mt-2 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold py-3 px-4 rounded-xl shadow-sm shadow-green-200 transition-all flex items-center justify-center gap-2 active:scale-95"
      >
        <Phone className="w-4 h-4 fill-white shrink-0" />
        Commander par WhatsApp
      </button>
    </div>
  );
}
