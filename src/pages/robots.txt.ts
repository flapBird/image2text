import type { APIRoute } from "astro";
import { SITE } from "@config";

const robots = `
User-agent: *
`.trim();

export const GET: APIRoute = () =>
  new Response(robots, {
    headers: { "Content-Type": "text/plain" },
  });
