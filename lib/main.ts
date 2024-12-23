import { serve } from "../deps.ts";
import { renderFile, join } from "../deps.ts";
import { getThreeTopTestimonials, testimonials } from "./testimonials.ts";

async function handler(req: { url: string | URL }) {
  const url = new URL(req.url);

  // Allowing static files to be served
  if (url.pathname.startsWith("/_next/static/")) {
    try {
      const filePath = join(Deno.cwd(), "views", url.pathname);
      const file = await Deno.readFile(filePath);
      const contentType = url.pathname.endsWith(".js")
        ? "application/javascript"
        : url.pathname.endsWith(".css")
        ? "text/css"
        : "application/octet-stream";
      return new Response(file, {
        headers: { "Content-Type": contentType },
        status: 200,
      });
    } catch (error) {
      console.error("Erreur de lecture du fichier statique :", error);
      return new Response("Fichier non trouvé", { status: 404 });
    }
  }

  if (url.pathname === "/") {
    try {
      const body = await renderFile("views/index.html");
      return new Response(body, {
        headers: { "Content-Type": "text/html" },
        status: 200,
      });
    } catch (error) {
      console.error("Erreur de rendu EJS :", error);
      return new Response("Erreur interne du serveur", { status: 500 });
    }
  }

  if (url.pathname === "/api/testimonials/top") {
    try {
      const body = getThreeTopTestimonials(testimonials);
      return new Response(JSON.stringify(body), {
        headers: { "Content-Type": "application/json" },
        status: 200,
      });
    } catch (error) {
      console.error("Erreur de rendu EJS :", error);
      return new Response("Erreur interne du serveur", { status: 500 });
    }
  }

  return new Response("Page non trouvée", { status: 404 });
}

console.log(`🚀 Serveur Deno en cours d'exécution : http://localhost:8000`);
Deno.serve(handler);
