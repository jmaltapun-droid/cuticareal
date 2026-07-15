import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";
import type { ReactNode } from "react";

export function CMark({ className = "", size = 420 }: { className?: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size} height={size}
      className={className}
      aria-hidden
    >
      <path
        d="M170 60 A70 70 0 1 0 170 140"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M155 75 A55 55 0 1 0 155 125"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

export function Strand({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 20" className={`strand ${className}`} aria-hidden>
      <path
        d="M2 10 C 40 -4, 70 24, 100 10 S 160 -4, 198 10"
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      />
    </svg>
  );
}

export function CtaRow({
  variant = "default",
  secondary = { to: "/servicios", label: "Ver servicios" },
}: {
  variant?: "default" | "dark";
  secondary?: { to: string; label: string } | null;
}) {
  const ghost = variant === "dark"
    ? "border-hueso/30 text-hueso hover:bg-hueso/10 hover:border-hueso/60"
    : "border-tinta/20 text-tinta hover:bg-crema hover:border-bordo/40";
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={SITE.wa()}
        target="_blank" rel="noopener noreferrer"
        className="btn-primary hover:[&]:bg-bordo-deep hover:[&]:-translate-y-0.5 cursor-pointer"
      >
        <MessageCircle className="w-4 h-4" /> Reservar por WhatsApp
      </a>
      {secondary && (
        <Link to={secondary.to as string} className={`btn-ghost cursor-pointer ${ghost}`}>
          {secondary.label} <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  );
}

export function SectionHeader({
  eyebrow, title, kicker, align = "left",
}: {
  eyebrow?: string; title: ReactNode; kicker?: ReactNode; align?: "left" | "center";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl md:text-5xl leading-[1.05] text-tinta">{title}</h2>
      {kicker && <p className="mt-4 text-tinta/70 text-base md:text-lg">{kicker}</p>}
    </div>
  );
}
