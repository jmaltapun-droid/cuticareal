import { SITE } from "@/lib/site";

export function WhatsappFloat() {
  return (
    <a
      href={SITE.wa()}
      target="_blank" rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-40 group cursor-pointer"
    >
      <span className="absolute inset-0 rounded-full bg-bordo/30 animate-ping" />
      <span className="relative grid place-items-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-bordo text-hueso shadow-[0_12px_30px_-8px_rgba(107,31,46,0.5)] hover:scale-110 hover:bg-bordo-deep transition-all duration-200">
        <svg viewBox="0 0 32 32" className="w-7 h-7 md:w-8 md:h-8" fill="currentColor" aria-hidden>
          <path d="M16 3C8.82 3 3 8.82 3 16c0 2.29.6 4.53 1.74 6.5L3 29l6.68-1.72A12.94 12.94 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23.6c-1.98 0-3.92-.53-5.61-1.53l-.4-.24-3.96 1.02 1.05-3.86-.26-.4A10.55 10.55 0 0 1 5.4 16c0-5.85 4.75-10.6 10.6-10.6S26.6 10.15 26.6 16 21.85 26.6 16 26.6zm5.83-7.94c-.32-.16-1.9-.94-2.19-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.03-1 1.24-.19.22-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.77-2.22-.19-.32-.02-.5.14-.66.15-.14.32-.37.48-.55.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.63-.53-.54-.72-.55-.19-.01-.4-.01-.61-.01-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.64s1.14 3.06 1.3 3.27c.16.21 2.24 3.42 5.42 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37z"/>
        </svg>
      </span>
    </a>
  );
}
