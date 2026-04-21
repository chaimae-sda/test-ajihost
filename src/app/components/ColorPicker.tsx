import { Check } from "lucide-react";

interface ColorPickerProps<T extends { id: string }> {
  items: T[];
  selected: T;
  onSelect: (item: T) => void;
  getButtonClass: (item: T) => string;
  getCheckClass: (item: T) => string;
  ariaPrefix: string;
}

export default function ColorPicker<T extends { id: string }>({
  items,
  selected,
  onSelect,
  getButtonClass,
  getCheckClass,
  ariaPrefix,
}: ColorPickerProps<T>) {
  return (
    <div className="flex gap-4">
      {items.map((item) => {
        const isSelected = selected.id === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onSelect(item)}
            className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-sm ${getButtonClass(item)} ${
              isSelected ? "ring-2 ring-offset-2 ring-gray-300" : ""
            }`}
            aria-label={`${ariaPrefix} ${item.id}`}
          >
            {isSelected && (
              <Check className={`w-5 h-5 absolute ${getCheckClass(item)}`} />
            )}
          </button>
        );
      })}
    </div>
  );
}
