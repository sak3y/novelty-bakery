import React, { useState } from "react";

const STORAGE_KEY = "novelty-cookie-consent";

const Cookie: React.FC = () => {
  const [open, setOpen] = useState(() => {
    if (typeof window === "undefined") return false;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return !stored;
  });

  const accept = () => {
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    setOpen(false);
  };

  const decline = () => {
    window.localStorage.setItem(STORAGE_KEY, "declined");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="mx-4 w-full max-w-lg bg-[#111111] text-white px-6 py-7 md:px-8 md:py-9 shadow-2xl relative">
        {/* Close X */}
        <button
          type="button"
          onClick={decline}
          className="absolute right-4 top-3 text-2xl leading-none text-white/70 hover:text-white"
          aria-label="Close cookie notice"
        >
          ×
        </button>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
          Cookies, fresh out
          <br />
          of the oven
        </h2>

        {/* Body */}
        <p className="text-sm md:text-[15px] leading-relaxed text-neutral-200 mb-6">
          Novelty Bakery uses cookies to keep the site running smoothly and to understand
          how visitors use it. You can accept or decline non‑essential cookies.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-2 md:flex-row md:gap-3">
          <button
            type="button"
            onClick={accept}
            className="w-full md:w-auto px-5 py-2.5 text-[11px] uppercase tracking-[0.16em] bg-white text-[#111111] hover:bg-neutral-100 transition-colors"
          >
            Accept cookies
          </button>
          <button
            type="button"
            onClick={decline}
            className="w-full md:w-auto px-5 py-2.5 text-[11px] uppercase tracking-[0.16em] border border-white/60 text-white hover:bg-white/5 transition-colors"
          >
            Only essential
          </button>
        </div>

        <p className="mt-3 text-[11px] text-neutral-300">
          You can change your choice at any time in your browser settings.
        </p>
      </div>
    </div>
  );
};

export default Cookie;
