import { UploadCloud } from "lucide-react";

interface ImageUploadProps {
  previewUrl: string | null;
  onFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ImageUpload({ previewUrl, onFileSelect }: ImageUploadProps) {
  return (
    <label className="relative cursor-pointer flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 hover:bg-gray-100 hover:border-gray-400 transition-all overflow-hidden group">
      {previewUrl ? (
        <>
          <img
            src={previewUrl}
            alt="Aperçu de l'image téléchargée"
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity"
          />
          <UploadCloud className="w-8 h-8 text-gray-900 mb-2 relative z-10" />
          <span className="text-sm font-bold text-gray-900 relative z-10">
            Image sélectionnée
          </span>
          <span className="text-xs font-semibold text-gray-800 mt-1 bg-white/70 px-2 py-1 rounded backdrop-blur-sm relative z-10">
            Cliquez pour modifier
          </span>
        </>
      ) : (
        <>
          <UploadCloud className="w-8 h-8 text-gray-400 mb-3" />
          <span className="text-sm font-medium text-gray-600">Cliquez pour télécharger</span>
          <span className="text-xs text-gray-400 mt-1">PNG, JPG ou WEBP</span>
        </>
      )}
      <input
        type="file"
        accept="image/*"
        onChange={onFileSelect}
        className="hidden"
      />
    </label>
  );
}
