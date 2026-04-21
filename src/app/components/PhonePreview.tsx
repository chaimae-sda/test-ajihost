import { Smartphone } from "lucide-react";

interface PhonePreviewProps {
  riadName: string;
  backgroundImage: string | null;
  textColorClass: string;
}

export default function PhonePreview({
  riadName,
  backgroundImage,
  textColorClass,
}: PhonePreviewProps) {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative w-[340px] h-[680px] bg-white rounded-[3rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border-[8px] border-gray-900 overflow-hidden shrink-0">
        {/* Dynamic Island */}
        <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-50">
          <div className="w-32 h-6 bg-gray-900 rounded-b-3xl" />
        </div>

        {/* Screen */}
        <div className="relative w-full h-full flex flex-col bg-gray-50">
          {/* Header Image */}
          <div className="relative h-64 w-full bg-gray-200">
            {backgroundImage ? (
              <img
                src={backgroundImage}
                alt="Aperçu du fond"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <span className="text-gray-500 text-sm font-medium">
                  Aperçu de l&apos;image
                </span>
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <h2
                className={`text-3xl font-bold mb-2 leading-tight break-words ${textColorClass}`}
              >
                {riadName || "Nom du riad..."}
              </h2>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--theme-color)]" />
                <p className="text-gray-200 text-sm font-medium">Bienvenue</p>
              </div>
            </div>
          </div>

          {/* Skeleton Content */}
          <div className="flex-1 p-6 flex flex-col gap-4">
            <div className="h-20 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center p-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--theme-light)]">
                <Smartphone className="w-6 h-6 text-[var(--theme-color)]" />
              </div>
              <div className="ml-4 flex-1">
                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mb-2" />
                <div className="h-3 w-16 bg-gray-100 rounded animate-pulse" />
              </div>
            </div>

            <div className="h-32 rounded-2xl bg-white shadow-sm border border-gray-100 p-4">
              <div className="flex justify-between items-center mb-4">
                <div className="h-4 w-20 bg-gray-200 rounded" />
                <div className="h-6 w-16 rounded-full bg-[var(--theme-light)]" />
              </div>
              <div className="h-2 w-full bg-gray-100 rounded mb-2" />
              <div className="h-2 w-4/5 bg-gray-100 rounded mb-2" />
              <div className="h-2 w-1/2 bg-gray-100 rounded" />
            </div>
          </div>

          {/* Bottom Nav */}
          <div className="h-20 bg-white border-t border-gray-100 flex justify-around items-center pb-6">
            {[true, false, false].map((active, i) => (
              <div
                key={i}
                className={`w-10 h-10 flex flex-col items-center justify-center gap-1.5 ${
                  !active ? "opacity-30 grayscale" : ""
                }`}
              >
                <div className="w-6 h-6 rounded-md bg-[var(--theme-color)]" />
                {active && (
                  <div className="w-1 h-1 rounded-full bg-[var(--theme-color)]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
