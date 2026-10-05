"use client";

import { useState } from "react";

export default function DismissibleBanner({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="relative mb-8 overflow-hidden rounded-3xl bg-amber-50 p-6 ring-1 ring-amber-200">
      <button
        type="button"
        onClick={() => setIsOpen(false)}
        className="absolute right-4 top-4 rounded-full bg-white/80 px-3 py-1 text-sm font-medium text-ink/70 shadow-sm transition-colors hover:bg-white hover:text-ink"
        aria-label="Tutup banner Pizza of the Day"
      >
        Tutup
      </button>
      {children}
    </div>
  );
}
