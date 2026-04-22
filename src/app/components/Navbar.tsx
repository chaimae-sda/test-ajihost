"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/wizard", label: "Personnalisation" },
  { href: "/repas", label: "Module Repas" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/wizard"
          className="font-bold text-lg tracking-tight text-gray-900 flex items-center gap-2"
        >
          <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-sm font-bold">
            A
          </span>
          Ajihost
        </Link>

        {/* Links */}
        <nav className="flex items-center gap-1 sm:gap-2 bg-gray-100/80 p-1 rounded-xl border border-gray-200/80">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative inline-flex items-center text-sm font-semibold px-4 py-2 rounded-lg border border-transparent select-none transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/30 focus-visible:ring-offset-2 active:scale-[0.98] ${
                  isActive
                    ? "text-indigo-700 bg-white border-indigo-200 shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-white hover:border-gray-200 hover:shadow-md hover:-translate-y-0.5"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
