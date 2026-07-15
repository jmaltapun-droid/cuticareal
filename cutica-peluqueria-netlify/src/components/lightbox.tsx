import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export function Lightbox({
  images, initial, onClose,
}: {
  images: { src: string; alt: string }[];
  initial: number;
  onClose: () => void;
}) {
  const [i, setI] = useState(initial);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setI((x) => (x + 1) % images.length);
      if (e.key === "ArrowLeft") setI((x) => (x - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [images.length, onClose]);

  return (
    <div className="fixed inset-0 z-[70] bg-tinta/95 backdrop-blur-sm flex items-center justify-center p-4">
      <button
        onClick={onClose}
        aria-label="Cerrar"
        className="absolute top-4 right-4 grid place-items-center w-11 h-11 rounded-full bg-hueso/10 text-hueso hover:bg-hueso/20"
      >
        <X className="w-5 h-5" />
      </button>
      <button
        onClick={() => setI((x) => (x - 1 + images.length) % images.length)}
        aria-label="Anterior"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 grid place-items-center w-11 h-11 rounded-full bg-hueso/10 text-hueso hover:bg-hueso/20"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => setI((x) => (x + 1) % images.length)}
        aria-label="Siguiente"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 grid place-items-center w-11 h-11 rounded-full bg-hueso/10 text-hueso hover:bg-hueso/20"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <img
        src={images[i].src}
        alt={images[i].alt}
        className="max-h-[85vh] max-w-full object-contain rounded-lg"
      />
      <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-hueso/70 text-sm">
        {i + 1} / {images.length}
      </span>
    </div>
  );
}
