import { copyFileSync, mkdirSync, writeFileSync } from "node:fs";

const worker = `const worker = {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    if (response.status !== 404 || request.method !== "GET") return response;

    const acceptsHtml = request.headers.get("accept")?.includes("text/html");
    if (!acceptsHtml) return response;

    const fallback = new URL("/", request.url);
    return env.ASSETS.fetch(new Request(fallback, request));
  },
};

export default worker;
`;

mkdirSync("dist/server", { recursive: true });
mkdirSync("dist/.openai", { recursive: true });
writeFileSync("dist/server/index.js", worker);
copyFileSync(".openai/hosting.json", "dist/.openai/hosting.json");
