import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { WhatsappFloat } from "@/components/whatsapp-float";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página no encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La página que buscás no existe o fue movida.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-primary hover:[&]:bg-bordo-deep">Volver al inicio</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">Algo no cargó bien</h1>
        <p className="mt-2 text-sm text-muted-foreground">Probá refrescar o volver al inicio.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-primary">Reintentar</button>
          <a href="/" className="btn-ghost">Ir al inicio</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Cutica Peluquería · Recoleta — Color, corte y tratamiento" },
      { name: "description", content: "Peluquería boutique en Recoleta. Color, corte, tratamiento y peinados con turnos personales y trato cercano." },
      { name: "author", content: "Cutica Peluquería" },
      { property: "og:title", content: "Cutica Peluquería · Recoleta — Color, corte y tratamiento" },
      { property: "og:description", content: "Peluquería boutique en Recoleta. Color, corte, tratamiento y peinados con turnos personales y trato cercano." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Cutica Peluquería" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Cutica Peluquería · Recoleta — Color, corte y tratamiento" },
      { name: "twitter:description", content: "Peluquería boutique en Recoleta. Color, corte, tratamiento y peinados con turnos personales y trato cercano." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/da8e00d5-f78c-40ef-a417-08e9c58b3322/id-preview-f5f2ab31--bf761402-4bab-4ec5-b1d5-ea08bc4f3b74.lovable.app-1783651181198.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/da8e00d5-f78c-40ef-a417-08e9c58b3322/id-preview-f5f2ab31--bf761402-4bab-4ec5-b1d5-ea08bc4f3b74.lovable.app-1783651181198.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Manrope:wght@400;500;600;700&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HairSalon",
          "name": "Cutica Peluquería",
          "image": "",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Cerrito 1314",
            "addressLocality": "Ciudad Autónoma de Buenos Aires",
            "postalCode": "C1014",
            "addressCountry": "AR"
          },
          "telephone": "+5491166017417",
          "openingHours": ["Tu-Fr 09:00-19:00", "Sa 09:00-14:00"],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <SiteNav />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
        <WhatsappFloat />
      </div>
    </QueryClientProvider>
  );
}
